import { DomainModel } from '../ast/domain-model';
import {
  AggregationExpression,
  AttributeReference,
  BegrenzingAfrondingExpression,
  BegrenzingExpression,
  BinaryExpression,
  DisjunctionExpression,
  Expression,
  FunctionCall,
  SamengesteldeVoorwaarde,
  SubselectieExpression,
  TekstreeksExpression,
  UnaryExpression,
  VariableReference,
  AfrondingExpression,
  ConjunctionExpression,
} from '../ast/expressions';
import { SourceLocation } from '../ast/location';
import { AttributeSpecification, ObjectTypeDefinition } from '../ast/object-types';
import {
  Consistentieregel,
  FeitCreatie,
  Gelijkstelling,
  Kenmerktoekenning,
  MultipleResults,
  ObjectCreation,
  RegelGroep,
  ResultPart,
  Rule,
  RuleVersion,
  VariableAssignment,
  Verdeling,
  VerdelingAfronding,
  VerdelingMaximum,
  VerdelingNaarRato,
  VerdelingOpVolgorde,
  VerdelingTieBreak,
  Voorwaarde,
} from '../ast/rules';
import {
  DecisionTable,
  DecisionTableCellValue,
  DecisionTableCondition,
  DecisionTableResult,
} from '../ast/decision-tables';
import { DagsoortDefinitie, normalizeDagsoortName } from '../ast/dagsoort';
import { DimensionedAttributeReference } from '../ast/dimensions';
import { PeriodDefinition, TimelineExpression } from '../ast/timelines';
import { ResolvedInfo } from './types';
import { classifyOperands, unitMismatchMessage } from './unit-compatibility';
import {
  createResolutionContext,
  createResolutionMaps,
  findFeitTypesForRole,
  pushScope,
  resolveObjectCreationRelationSegment,
  resolveOnderwerpketenSubject,
  ResolutionContext,
  ResolutionMaps,
  ResolvedVariable,
  resolveExpressionWithMaps,
  ScopeFrame,
} from './expression-resolver';

export interface ModelResolutionOptions {
  strict?: boolean;
  throwOnError?: boolean;
}

export interface ModelResolutionDiagnostic {
  severity: 'error';
  message: string;
  path: string;
  location?: SourceLocation;
}

export interface ModelResolutionResult {
  success: boolean;
  model: DomainModel;
  diagnostics: ModelResolutionDiagnostic[];
}

export class ModelResolutionError extends Error {
  constructor(public readonly diagnostics: ModelResolutionDiagnostic[]) {
    super(diagnostics.map(diagnostic => diagnostic.message).join('\n'));
    this.name = 'ModelResolutionError';
  }
}

type ResolvedType = NonNullable<ResolvedInfo['resolvedType']>;

interface ObjectBinding {
  objectType: string;
  variableName: string;
}

export function resolveModel(
  model: DomainModel,
  options: ModelResolutionOptions = {}
): ModelResolutionResult {
  const resolver = new DomainModelResolver(model, options);
  return resolver.resolve();
}

class DomainModelResolver {
  private readonly maps: ResolutionMaps;
  private readonly diagnostics: ModelResolutionDiagnostic[] = [];
  private readonly strict: boolean;

  constructor(
    private readonly model: DomainModel,
    private readonly options: ModelResolutionOptions
  ) {
    this.maps = createResolutionMaps(model);
    this.strict = options.strict !== false;
  }

  resolve(): ModelResolutionResult {
    this.resolveRules(this.model.regels || [], 'regels');
    this.resolveRuleGroups(this.model.regelGroepen || []);
    this.resolveDecisionTables(this.model.beslistabels || []);
    this.resolveDagsoortDefinitions(this.model.dagsoortDefinities || []);
    this.checkCyclicDerivations();

    const result: ModelResolutionResult = {
      success: this.diagnostics.length === 0,
      model: this.model,
      diagnostics: this.diagnostics,
    };

    if (!result.success && this.options.throwOnError) {
      throw new ModelResolutionError(this.diagnostics);
    }

    return result;
  }

  private resolveRules(rules: Rule[], path: string): void {
    rules.forEach((rule, index) => this.resolveRule(rule, `${path}[${index}]`));
  }

  private resolveRuleGroups(regelGroepen: RegelGroep[]): void {
    regelGroepen.forEach((groep, groupIndex) => {
      groep.rules.forEach((rule, ruleIndex) =>
        this.resolveRule(rule, `regelGroepen[${groupIndex}].rules[${ruleIndex}]`)
      );
    });
  }

  private resolveRule(rule: Rule, path: string): void {
    const versions = rule.versions && rule.versions.length > 0 ? rule.versions : undefined;

    if (versions) {
      versions.forEach((version, index) =>
        this.resolveRuleBody(
          version.result,
          version.condition,
          version.variables,
          `${path}.versions[${index}]`
        )
      );
      return;
    }

    if (rule.version) {
      this.resolveRuleBody(
        rule.version.result,
        rule.version.condition,
        rule.version.variables,
        `${path}.version`
      );
      return;
    }

    this.resolveRuleBody(
      rule.result || rule.resultaat,
      rule.condition || rule.voorwaarde,
      rule.variables,
      path
    );
  }

  private resolveRuleBody(
    result: ResultPart | undefined,
    condition: Voorwaarde | undefined,
    variables: VariableAssignment[] | undefined,
    path: string
  ): void {
    const binding = result ? this.inferBindingFromResult(result) : undefined;
    let context = this.createContext(binding);
    if (result?.type === 'DagsoortDefinitie') {
      context = this.withImplicitDagBinding(context);
    }

    context = this.resolveVariableAssignments(variables || [], context, `${path}.variables`);

    if (condition) {
      this.resolveVoorwaarde(condition, context, `${path}.condition`);
    }
    if (result) {
      this.resolveResultPart(result, context, `${path}.result`);
    }
  }

  private resolveVariableAssignments(
    variables: VariableAssignment[],
    context: ResolutionContext,
    path: string
  ): ResolutionContext {
    if (variables.length === 0) {
      return context;
    }

    const frame: ScopeFrame = { variables: new Map() };
    const scopedContext = pushScope(context, frame);

    variables.forEach((variable, index) => {
      const variablePath = `${path}[${index}]`;
      this.resolveExpression(variable.expression, scopedContext, `${variablePath}.expression`);
      this.registerVariable(frame, variable);
    });

    return scopedContext;
  }

  private registerVariable(frame: ScopeFrame, variable: VariableAssignment): void {
    const resolvedType = variable.expression.resolved?.resolvedType as ResolvedType | undefined;
    const objectType = resolvedType?.type === 'ObjectType' ? resolvedType.name : undefined;
    const resolvedVariable: ResolvedVariable = {
      name: variable.name,
      objectType,
      resolvedType,
      unit: variable.expression.resolved?.unit,
      timeline: variable.expression.resolved?.timeline,
    };

    frame.variables.set(variable.name, resolvedVariable);
    frame.variables.set(variable.name.toLowerCase(), resolvedVariable);
  }

  private resolveVoorwaarde(
    voorwaarde: Voorwaarde,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveExpression(voorwaarde.expression, context, `${path}.expression`);
  }

  private resolveResultPart(
    result: ResultPart,
    context: ResolutionContext,
    path: string
  ): void {
    switch (result.type) {
      case 'Gelijkstelling':
        this.resolveGelijkstelling(result as Gelijkstelling, context, path);
        return;
      case 'Kenmerktoekenning':
        this.resolveKenmerktoekenning(result as Kenmerktoekenning, context, path);
        return;
      case 'ObjectCreation':
        this.resolveObjectCreation(result as ObjectCreation, context, path);
        return;
      case 'MultipleResults':
        (result as MultipleResults).results.forEach((nested, index) =>
          this.resolveResultPart(nested, context, `${path}.results[${index}]`)
        );
        return;
      case 'Consistentieregel':
        this.resolveConsistentieregel(result as Consistentieregel, context, path);
        return;
      case 'Verdeling':
        this.resolveVerdeling(result as Verdeling, context, path);
        return;
      case 'FeitCreatie':
        this.resolveFeitCreatie(result as FeitCreatie, context, path);
        return;
      case 'DagsoortDefinitie':
        this.resolveDagsoortDefinitie(result as DagsoortDefinitie, context, path);
        return;
      default:
        this.addDiagnostic(`Unsupported result type '${(result as any).type}'`, path, (result as any).location);
    }
  }

  private resolveGelijkstelling(
    result: Gelijkstelling,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveExpression(result.target as Expression, context, `${path}.target`);
    this.resolveExpression(result.expression, context, `${path}.expression`);
    this.resolveOptionalExpression(result.temporalCondition, context, `${path}.temporalCondition`);
    this.checkAssignmentUnits(result, path);
  }

  /**
   * Assignment unit rule (§6.1): the value's unit must equal or convert into the
   * target attribute's declared unit. A convertible value is annotated on the
   * target with the factor (value → target unit) for the transpiler to fold in
   * before the setter. Either side unitless means no conversion is required.
   */
  private checkAssignmentUnits(result: Gelijkstelling, path: string): void {
    const target = result.target as Expression;
    const targetUnit = target.resolved?.unit;
    const valueUnit = result.expression.resolved?.unit;
    if (targetUnit === undefined || valueUnit === undefined) {
      return;
    }
    const cls = classifyOperands(this.maps.units, targetUnit, valueUnit);
    if (cls.kind === 'incompatible') {
      this.addDiagnostic(
        unitMismatchMessage('toekenning', cls.left, cls.right),
        `${path}.expression`,
        result.expression.location,
      );
    } else if (cls.kind === 'convertible' && target.resolved) {
      target.resolved.unitConversion = {
        multiplyBy: cls.multiplyBy,
        divideBy: cls.divideBy,
      };
    }
  }

  private resolveKenmerktoekenning(
    result: Kenmerktoekenning,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveExpression(result.subject, context, `${path}.subject`);
    this.resolveOptionalExpression(result.temporalCondition, context, `${path}.temporalCondition`);
    this.validateKenmerkExists(result, `${path}.subject`);
  }

  /**
   * Validate that a kenmerktoekenning assigns a kenmerk the subject's ObjectType actually declares.
   * Left unchecked, a typo'd kenmerk reaches the transpiler as a setter for a field that does not
   * exist, surfacing as a Java compile error rather than a model diagnostic. The subject's terminal
   * resolved targetType names the bearing ObjectType; the lookup mirrors the expression resolver's
   * own (registry-aware, so a declared variant label still matches), and only a *known* ObjectType is
   * judged — an unresolved subject carries its own diagnostic and is left alone here.
   */
  private validateKenmerkExists(result: Kenmerktoekenning, path: string): void {
    const subject = result.subject as Expression;
    const name = result.characteristic;
    if (!name) {
      return;
    }
    const resolvedPath = subject.resolved?.resolvedPath as Array<{ targetType?: string }> | undefined;
    let objectTypeName: string | undefined;
    if (Array.isArray(resolvedPath)) {
      for (let i = resolvedPath.length - 1; i >= 0; i--) {
        if (resolvedPath[i]?.targetType) {
          objectTypeName = resolvedPath[i].targetType;
          break;
        }
      }
    }
    const subjectPath = (subject as unknown as { path?: string[] }).path;
    if (!objectTypeName && subjectPath?.length === 1) {
      objectTypeName = subjectPath[0];
    }
    if (!objectTypeName) {
      return;
    }
    const objectType =
      this.maps.objectTypes.get(objectTypeName) || this.maps.objectTypes.get(objectTypeName.toLowerCase());
    if (!objectType) {
      return;
    }
    const canonicalType = objectType.name;
    const kenmerkMap =
      this.maps.kenmerken.get(canonicalType) || this.maps.kenmerken.get(canonicalType.toLowerCase());
    const registry =
      this.maps.kenmerkRegistries.get(canonicalType) || this.maps.kenmerkRegistries.get(canonicalType.toLowerCase());
    let kenmerk = kenmerkMap?.get(name) || kenmerkMap?.get(name.toLowerCase());
    if (!kenmerk && registry && kenmerkMap) {
      const canonical = registry.getCanonicalLabel(name);
      kenmerk = kenmerkMap.get(canonical) || kenmerkMap.get(canonical.toLowerCase());
    }
    if (!kenmerk) {
      this.addDiagnostic(
        `Kenmerk '${name}' not defined for object type '${canonicalType}'`,
        path,
        (subject as { location?: SourceLocation }).location,
      );
    }
  }

  private resolveObjectCreation(
    result: ObjectCreation,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveExpression(result.subject, context, `${path}.subject`);

    // The created role must be backed by a FeitType (the same gate FeitCreatie applies, §9.3): an
    // ObjectCreation creates an instance of a relation role, so an unbacked role is a model error that
    // would otherwise reach the transpiler as a missing relation. Mirrors the dead semantic-analyzer's
    // check, now in the live resolution path.
    if (result.role && findFeitTypesForRole(result.role, this.maps).length === 0) {
      this.addDiagnostic(
        `ObjectCreation references unknown role '${result.role}'. No FeitType defines this role.`,
        `${path}.role`,
        (result as { location?: SourceLocation }).location,
      );
    }

    result.attributeInits.forEach((init, index) => {
      this.resolveExpression(init.value, context, `${path}.attributeInits[${index}].value`);
      this.validateObjectCreationInit(
        result.objectType,
        init.attribute,
        `${path}.attributeInits[${index}].attribute`
      );
    });

    // Resolve the asserted subject→role→objectType relation and attach it as
    // navigation metadata, so the transpiler maps it to schema field names
    // without re-searching the FeitTypes. Best-effort: an unresolvable or
    // ambiguous relation is left to the transpiler's existing fail-fast (it is
    // not re-diagnosed here, to keep this gate's behaviour unchanged).
    const subjectBinding = this.inferBindingFromExpression(result.subject);
    if (subjectBinding && result.role && result.objectType) {
      const segment = resolveObjectCreationRelationSegment(
        result.role,
        subjectBinding.objectType,
        result.objectType,
        this.maps
      );
      if (segment) {
        result.resolved = { resolvedPath: [segment] };
      }
    }
  }

  /**
   * Validate that an ObjectCreation initializer targets a real attribute or
   * kenmerk of the created ObjectType. An unknown target is a model error: left
   * unchecked it makes the transpiler emit a setter for a field that does not
   * exist, pushing a domain error into Java compilation. Reported as a
   * diagnostic so it fails at the resolution boundary instead.
   */
  private validateObjectCreationInit(
    objectTypeName: string | undefined,
    attribute: string,
    path: string
  ): void {
    if (!objectTypeName || !attribute) {
      return;
    }
    const attrMap =
      this.maps.attributes.get(objectTypeName) ||
      this.maps.attributes.get(objectTypeName.toLowerCase());
    const kenmerkMap =
      this.maps.kenmerken.get(objectTypeName) ||
      this.maps.kenmerken.get(objectTypeName.toLowerCase());
    if (!attrMap && !kenmerkMap) {
      // Unknown ObjectType — reported where the subject/role is resolved.
      return;
    }

    const lower = attribute.toLowerCase();
    if (attrMap?.get(attribute) || attrMap?.get(lower)) {
      return;
    }
    if (kenmerkMap?.get(attribute) || kenmerkMap?.get(lower)) {
      return;
    }
    const registry =
      this.maps.kenmerkRegistries.get(objectTypeName) ||
      this.maps.kenmerkRegistries.get(objectTypeName.toLowerCase());
    if (registry && kenmerkMap) {
      const canonical = registry.getCanonicalLabel(attribute);
      if (kenmerkMap.get(canonical) || kenmerkMap.get(canonical.toLowerCase())) {
        return;
      }
    }

    const objectType =
      this.maps.objectTypes.get(objectTypeName) ||
      this.maps.objectTypes.get(objectTypeName.toLowerCase());
    const known = (objectType?.members ?? [])
      .filter(m => m.type === 'AttributeSpecification' || m.type === 'KenmerkSpecification')
      .map(m => m.name);
    this.addDiagnostic(
      `Unknown attribute or kenmerk '${attribute}' on ObjectType '${objectTypeName}' in ObjectCreation` +
        (known.length ? ` (known: ${known.join(', ')})` : ''),
      path
    );
  }

  private resolveConsistentieregel(
    result: Consistentieregel,
    context: ResolutionContext,
    path: string
  ): void {
    if (result.criteriumType === 'uniek' &&
        result.target?.type === 'AttributeReference' &&
        this.isAllAttributesTarget(result.target as AttributeReference)) {
      this.resolveAllAttributesTarget(result.target as AttributeReference, `${path}.target`);
    } else {
      this.resolveOptionalExpression(result.target, context, `${path}.target`);
    }
    this.resolveOptionalExpression(result.condition, context, `${path}.condition`);
  }

  private resolveVerdeling(result: Verdeling, context: ResolutionContext, path: string): void {
    this.resolveExpression(result.sourceAmount, context, `${path}.sourceAmount`);
    this.resolveExpression(result.targetCollection, context, `${path}.targetCollection`);
    this.resolveOptionalExpression(result.remainderTarget, context, `${path}.remainderTarget`);

    // §9.7: the verdeler attribute (verdeelplafond) and the remainder target belong
    // to the verdeler, so they resolve in the rule's own context. The per-receiver
    // criteria (naar rato / op volgorde / maximum, and the tie-break criterion),
    // however, are always an attribute of the *ontvanger* (§9.7.1/§9.7.2/§9.7.3 all
    // state "een attribuut van de ontvanger"). Resolve them in a context scoped to
    // the receiver object type — the type the share is distributed over — so a bare
    // attribute binds to the receiver instead of failing against the verdeler.
    const receiverContext = this.receiverContextFor(result.targetCollection, context);

    result.distributionMethods.forEach((method, index) => {
      this.resolveVerdelingMethod(method, receiverContext, `${path}.distributionMethods[${index}]`);
    });
  }

  private resolveVerdelingMethod(
    method:
      | VerdelingNaarRato
      | VerdelingOpVolgorde
      | VerdelingMaximum
      | VerdelingTieBreak
      | VerdelingAfronding
      | { type: string },
    context: ResolutionContext,
    path: string
  ): void {
    switch (method.type) {
      case 'VerdelingNaarRato':
        this.resolveReceiverCriterion((method as VerdelingNaarRato).ratioExpression, context, `${path}.ratioExpression`);
        return;
      case 'VerdelingOpVolgorde':
        this.resolveReceiverCriterion((method as VerdelingOpVolgorde).orderExpression, context, `${path}.orderExpression`);
        return;
      case 'VerdelingMaximum':
        this.resolveReceiverCriterion((method as VerdelingMaximum).maxExpression, context, `${path}.maxExpression`);
        return;
      case 'VerdelingTieBreak':
        this.resolveVerdelingMethod((method as VerdelingTieBreak).tieBreakMethod, context, `${path}.tieBreakMethod`);
        return;
      case 'VerdelingGelijkeDelen':
      case 'VerdelingAfronding':
        return;
      default:
        this.addDiagnostic(`Unsupported distribution method '${(method as { type: string }).type}'`, path);
    }
  }

  /**
   * Build a resolution context scoped to the verdeling's receiver (ontvanger)
   * object type, so a per-receiver criterion attribute resolves against the
   * receiver rather than the verdeler that scopes the rule. Falls back to the
   * verdeler context when the receiver type cannot be derived (e.g. the target
   * collection itself did not resolve — already reported elsewhere).
   *
   * `rootResolution: 'relative-only'` forces a bare attribute name to bind to the
   * receiver type instead of being looked up as a global root.
   */
  private receiverContextFor(
    targetCollection: Expression,
    fallback: ResolutionContext
  ): ResolutionContext {
    const receiverType = this.receiverObjectType(targetCollection);
    if (!receiverType) {
      return fallback;
    }
    const variableName = receiverType.charAt(0).toLowerCase() + receiverType.slice(1);
    return {
      ...createResolutionContext(this.model, receiverType, variableName),
      rootResolution: 'relative-only',
    };
  }

  /**
   * Derive the receiver (ontvanger) object type from the resolved target
   * collection. The collection is "de <aandeel> van alle <ontvangers> ..."; its
   * terminal segment is the share attribute, whose declaring type is the
   * receiver. Fall back to the last to-many FeitType hop's target type.
   */
  private receiverObjectType(targetCollection: Expression): string | undefined {
    const segments = (targetCollection.resolved?.resolvedPath ?? []) as Array<{
      kind: string;
      cardinality: '1' | 'N';
      sourceType: string;
      targetType: string;
    }>;
    if (segments.length === 0) {
      return undefined;
    }
    const terminal = segments[segments.length - 1];
    if (terminal.kind === 'attribute' && terminal.sourceType && terminal.sourceType !== 'context') {
      return terminal.sourceType;
    }
    for (let i = segments.length - 1; i >= 0; i--) {
      const segment = segments[i];
      if (segment.kind === 'feittype' && segment.cardinality === 'N') {
        return segment.targetType;
      }
    }
    return undefined;
  }

  /**
   * Resolve a per-receiver criterion expression of a verdeling (the naar-rato /
   * op-volgorde / maximum attribute). Per the §9.7.7 grammar this is always an
   * `<attribuutmetlidwoord>` — a single attribute of the ontvanger. The parser is
   * inconsistent about how it lowers that production: "met een maximum van de X"
   * arrives as an AttributeReference, but "naar rato van de X" / "op volgorde van
   * ... de X" arrive as a bare VariableReference. Bind the latter as a
   * single-segment attribute of the receiver so the criterion carries navigation
   * metadata (and strict resolution succeeds), keeping both forms uniform for
   * downstream consumers.
   */
  private resolveReceiverCriterion(
    expression: Expression,
    context: ResolutionContext,
    path: string
  ): void {
    if (expression.type === 'VariableReference') {
      const attributeReference: AttributeReference = {
        type: 'AttributeReference',
        path: [(expression as VariableReference).variableName],
        location: expression.location,
      };
      this.resolveExpression(attributeReference, context, path);
      if (attributeReference.resolved) {
        expression.resolved = attributeReference.resolved;
      }
      return;
    }
    this.resolveExpression(expression, context, path);
  }

  private resolveFeitCreatie(result: FeitCreatie, context: ResolutionContext, path: string): void {
    this.resolveFeitCreatieSubject(result.subject1, context, `${path}.subject1`);
    this.resolveFeitCreatieSubject(result.subject2, context, `${path}.subject2`);
    this.resolveFeitCreatieRole(result.role1, `${path}.role1`, result.location);
    this.resolveFeitCreatieRole(result.role2, `${path}.role2`, result.location);
  }

  /**
   * Resolve a FeitCreatie subject. The parser still carries each subject as one opaque
   * `<onderwerpketen>` string (finding G7), so decompose it per the spec and resolve it
   * structurally, attaching the navigation metadata to the subject node. The opaque path is kept
   * intact so the existing engine/transpiler consumers are unaffected. Unknown roots, unnavigable
   * hops and ambiguity become diagnostics instead of throws from the generic navigation resolver.
   */
  private resolveFeitCreatieSubject(
    subject: Expression,
    context: ResolutionContext,
    path: string
  ): void {
    const phrase = this.feitCreatieSubjectPhrase(subject);
    if (phrase === undefined) {
      // Already structural (e.g. a future grammar fix) — resolve it the normal way.
      this.resolveExpression(subject, context, path);
      return;
    }
    try {
      subject.resolved = resolveOnderwerpketenSubject(phrase, context, this.maps);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.addDiagnostic(message, path, subject.location);
    }
  }

  /**
   * Extract the opaque onderwerpketen phrase from a FeitCreatie subject node, or undefined if the
   * subject is already structural and should go through the generic resolver.
   */
  private feitCreatieSubjectPhrase(subject: Expression): string | undefined {
    if (subject?.type !== 'AttributeReference') {
      return undefined;
    }
    const attributePath = (subject as AttributeReference).path;
    if (attributePath?.length === 1 && typeof attributePath[0] === 'string') {
      return attributePath[0];
    }
    return undefined;
  }

  /**
   * Validate a FeitCreatie role (`<rolnaam>`) against the declared FeitTypes. The resolver owns
   * this check now: an unknown role and a role that is ambiguous across FeitTypes are diagnostics.
   */
  private resolveFeitCreatieRole(roleName: string, path: string, location?: SourceLocation): void {
    if (!roleName) {
      this.addDiagnostic('FeitCreatie role is empty', path, location);
      return;
    }
    const feitTypes = findFeitTypesForRole(roleName, this.maps);
    if (feitTypes.length === 0) {
      this.addDiagnostic(`Unknown FeitCreatie role '${roleName}'`, path, location);
    } else if (feitTypes.length > 1) {
      this.addDiagnostic(
        `Ambiguous FeitCreatie role '${roleName}' (declared in FeitTypes: ${feitTypes.join(', ')})`,
        path,
        location
      );
    }
  }

  private resolveDagsoortDefinitions(definitions: DagsoortDefinitie[]): void {
    const context = this.createContext();
    definitions.forEach((definition, index) =>
      this.resolveDagsoortDefinitie(definition, context, `dagsoortDefinities[${index}]`)
    );
  }

  private resolveDagsoortDefinitie(
    definition: DagsoortDefinitie,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveOptionalExpression(
      definition.condition,
      this.withImplicitDagBinding(context),
      `${path}.condition`
    );
  }

  private withImplicitDagBinding(context: ResolutionContext): ResolutionContext {
    return pushScope(context, {
      variables: new Map([
        ['dag', {
          name: 'dag',
          resolvedType: { type: 'Datum' },
        }],
      ]),
    });
  }

  /**
   * A decision table's columns are scoped to the object type named by its
   * conclusion subject: "een Persoon is volwassen" and "de factor van een
   * Persoon ..." both scope to Persoon. Derive that binding so the condition and
   * conclusion columns resolve against the table's object — the same way a rule's
   * body resolves against its subject — instead of in an empty global scope where
   * a bare attribute like `leeftijd` has no root.
   */
  private deduceDecisionTableBinding(
    results: ReadonlyArray<DecisionTableResult | undefined>
  ): ObjectBinding | undefined {
    for (const result of results) {
      if (result?.targetExpression) {
        const binding = this.inferBindingFromExpression(result.targetExpression);
        if (binding) {
          return binding;
        }
      }
    }
    return undefined;
  }

  private resolveDecisionTables(tables: DecisionTable[]): void {
    tables.forEach((table, tableIndex) => {
      const tablePath = `beslistabels[${tableIndex}]`;
      const versions = table.versions && table.versions.length > 0 ? table.versions : undefined;

      if (versions) {
        versions.forEach((version, versionIndex) => {
          const binding = this.deduceDecisionTableBinding(
            version.conclusionColumns.map(column => column.result)
          );
          const context = this.createContext(binding);
          const versionPath = `${tablePath}.versions[${versionIndex}]`;

          version.conclusionColumns.forEach((column, columnIndex) =>
            this.resolveDecisionTableResult(column.result, context, `${versionPath}.conclusionColumns[${columnIndex}].result`)
          );
          version.conditionColumns.forEach((column, columnIndex) =>
            this.resolveDecisionTableCondition(column.condition, context, `${versionPath}.conditionColumns[${columnIndex}].condition`)
          );
          version.rows.forEach((row, rowIndex) =>
            row.cells?.forEach((cell, cellIndex) =>
              this.resolveDecisionTableCellValue(cell.value, context, `${versionPath}.rows[${rowIndex}].cells[${cellIndex}].value`)
            )
          );
        });
        return;
      }

      const context = this.createContext(
        this.deduceDecisionTableBinding([table.parsedResult])
      );
      if (table.parsedResult) {
        this.resolveDecisionTableResult(table.parsedResult, context, `${tablePath}.parsedResult`);
      }
      table.parsedConditions?.forEach((condition, index) =>
        this.resolveDecisionTableCondition(condition, context, `${tablePath}.parsedConditions[${index}]`)
      );
      table.rows.forEach((row, rowIndex) => {
        this.resolveExpression(row.resultExpression, context, `${tablePath}.rows[${rowIndex}].resultExpression`);
        row.conditionValues.forEach((value, valueIndex) =>
          this.resolveDecisionTableCellValue(value, context, `${tablePath}.rows[${rowIndex}].conditionValues[${valueIndex}]`)
        );
      });
    });
  }

  private resolveDecisionTableResult(
    result: DecisionTableResult,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveOptionalExpression(result.targetExpression, context, `${path}.targetExpression`);
  }

  private resolveDecisionTableCondition(
    condition: DecisionTableCondition,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveOptionalExpression(condition.subjectExpression, context, `${path}.subjectExpression`);
    // §8.1.5: a dagsoortcontrole column must name a declared dagsoort — fail fast just like the
    // equivalent rule-condition predicate (expression-resolver validateDagsoortPredicate).
    if (condition.isDagsoortCheck && condition.dagsoortName &&
      !this.maps.dagsoorten.has(normalizeDagsoortName(condition.dagsoortName))) {
      this.addDiagnostic(
        `Unknown dagsoort '${condition.dagsoortName}'`,
        `${path}.dagsoortName`,
        (condition as any).location,
      );
    }
  }

  private resolveDecisionTableCellValue(
    value: DecisionTableCellValue,
    context: ResolutionContext,
    path: string
  ): void {
    if (value !== 'n.v.t.') {
      this.resolveExpression(value, context, path);
    }
  }

  private resolveOptionalExpression(
    expression: Expression | undefined,
    context: ResolutionContext,
    path: string
  ): void {
    if (expression) {
      this.resolveExpression(expression, context, path);
    }
  }

  private resolveExpression(
    expression: Expression,
    context: ResolutionContext,
    path: string
  ): void {
    try {
      resolveExpressionWithMaps(expression, context, this.maps);
      if (this.strict) {
        this.requireResolvedTree(expression, path);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.addDiagnostic(message, path, expression.location);
    }
  }

  private requireResolvedTree(expression: Expression, path: string): void {
    if (!expression.resolved?.resolvedType) {
      this.addDiagnostic(
        `Expression '${expression.type}' was not resolved`,
        path,
        expression.location
      );
    }

    this.getChildExpressions(expression).forEach(({ expression: child, path: childPath }) =>
      this.requireResolvedTree(child, `${path}.${childPath}`)
    );
  }

  private getChildExpressions(expression: Expression): Array<{ expression: Expression; path: string }> {
    switch (expression.type) {
      case 'BinaryExpression':
        return [
          { expression: (expression as BinaryExpression).left, path: 'left' },
          { expression: (expression as BinaryExpression).right, path: 'right' },
        ];
      case 'UnaryExpression':
        return [{ expression: (expression as UnaryExpression).operand, path: 'operand' }];
      case 'FunctionCall':
        return (expression as FunctionCall).arguments.map((argument, index) => ({
          expression: argument,
          path: `arguments[${index}]`,
        }));
      case 'TekstreeksExpression':
        return (expression as TekstreeksExpression).parts.flatMap((part, index) =>
          part.type === 'TekstreeksInterpolation'
            ? [{ expression: part.expression, path: `parts[${index}].expression` }]
            : []
        );
      case 'AggregationExpression': {
        const target = (expression as AggregationExpression).target;
        return Array.isArray(target)
          ? target.map((expr, index) => ({ expression: expr, path: `target[${index}]` }))
          : [{ expression: target, path: 'target' }];
      }
      case 'AfrondingExpression':
        return [{ expression: (expression as AfrondingExpression).expression, path: 'expression' }];
      case 'BegrenzingExpression':
        return this.optionalExpressionChildren(expression as BegrenzingExpression);
      case 'BegrenzingAfrondingExpression':
        return this.optionalExpressionChildren(expression as BegrenzingAfrondingExpression);
      case 'SubselectieExpression':
        return [
          { expression: (expression as SubselectieExpression).collection, path: 'collection' },
          ...this.getPredicateExpressions(expression as SubselectieExpression),
        ];
      case 'SamengesteldeVoorwaarde':
        return (expression as SamengesteldeVoorwaarde).voorwaarden.map((voorwaarde, index) => ({
          expression: voorwaarde,
          path: `voorwaarden[${index}]`,
        }));
      case 'ConjunctionExpression':
        return (expression as ConjunctionExpression).values.map((value, index) => ({
          expression: value,
          path: `values[${index}]`,
        }));
      case 'DisjunctionExpression':
        return (expression as DisjunctionExpression).values.map((value, index) => ({
          expression: value,
          path: `values[${index}]`,
        }));
      case 'PeriodDefinition':
        return this.periodDefinitionChildren(expression as PeriodDefinition);
      case 'TimelineExpression':
        return this.timelineExpressionChildren(expression as TimelineExpression);
      case 'RegelStatusExpression':
        return this.regelStatusPredicateChildren(expression);
      default:
        return [];
    }
  }

  private optionalExpressionChildren(
    expression: BegrenzingExpression | BegrenzingAfrondingExpression
  ): Array<{ expression: Expression; path: string }> {
    const children: Array<{ expression: Expression; path: string }> = [
      { expression: expression.expression, path: 'expression' },
    ];

    if (expression.minimum) {
      children.push({ expression: expression.minimum, path: 'minimum' });
    }
    if (expression.maximum) {
      children.push({ expression: expression.maximum, path: 'maximum' });
    }

    return children;
  }

  private getPredicateExpressions(
    expression: SubselectieExpression
  ): Array<{ expression: Expression; path: string }> {
    const children: Array<{ expression: Expression; path: string }> = [];

    this.collectLegacyPredicateExpressions(expression.predicaat, 'predicaat', children);
    this.collectUnifiedPredicateExpressions(expression.predicate, 'predicate', children);

    return children;
  }

  private regelStatusPredicateChildren(
    expression: Expression
  ): Array<{ expression: Expression; path: string }> {
    const children: Array<{ expression: Expression; path: string }> = [];
    this.collectUnifiedPredicateExpressions((expression as any).predicate, 'predicate', children);
    return children;
  }

  private periodDefinitionChildren(
    expression: PeriodDefinition
  ): Array<{ expression: Expression; path: string }> {
    const children: Array<{ expression: Expression; path: string }> = [];

    if (expression.startDate) {
      children.push({ expression: expression.startDate, path: 'startDate' });
    }
    if (expression.endDate) {
      children.push({ expression: expression.endDate, path: 'endDate' });
    }

    return children;
  }

  private timelineExpressionChildren(
    expression: TimelineExpression
  ): Array<{ expression: Expression; path: string }> {
    const children: Array<{ expression: Expression; path: string }> = [
      { expression: expression.target, path: 'target' },
    ];

    if (expression.period) {
      children.push({ expression: expression.period, path: 'period' });
    }
    if (expression.condition) {
      children.push({ expression: expression.condition, path: 'condition' });
    }

    return children;
  }

  private collectLegacyPredicateExpressions(
    predicate: any,
    path: string,
    children: Array<{ expression: Expression; path: string }>
  ): void {
    if (!predicate) return;

    switch (predicate.type) {
      case 'AttributeComparisonPredicaat':
        if (predicate.value) children.push({ expression: predicate.value, path: `${path}.value` });
        return;
      case 'VergelijkingInPredicaat':
        if (predicate.onderwerp) children.push({ expression: predicate.onderwerp, path: `${path}.onderwerp` });
        if (predicate.attribuut) children.push({ expression: predicate.attribuut, path: `${path}.attribuut` });
        if (predicate.waarde) children.push({ expression: predicate.waarde, path: `${path}.waarde` });
        return;
      case 'GenesteVoorwaardeInPredicaat':
        this.collectLegacyPredicateExpressions(predicate.voorwaarde, `${path}.voorwaarde`, children);
        return;
      case 'SamengesteldPredicaat':
        predicate.voorwaarden?.forEach((voorwaarde: any, index: number) =>
          this.collectLegacyPredicateExpressions(voorwaarde, `${path}.voorwaarden[${index}]`, children)
        );
        return;
    }
  }

  private collectUnifiedPredicateExpressions(
    predicate: any,
    path: string,
    children: Array<{ expression: Expression; path: string }>
  ): void {
    if (!predicate) return;

    switch (predicate.type) {
      case 'SimplePredicate':
        if (predicate.left) children.push({ expression: predicate.left, path: `${path}.left` });
        if (predicate.right) children.push({ expression: predicate.right, path: `${path}.right` });
        return;
      case 'AttributePredicate':
        if (predicate.value) children.push({ expression: predicate.value, path: `${path}.value` });
        return;
      case 'CompoundPredicate':
        predicate.predicates?.forEach((nested: any, index: number) =>
          this.collectUnifiedPredicateExpressions(nested, `${path}.predicates[${index}]`, children)
        );
        return;
      case 'NotPredicate':
        this.collectUnifiedPredicateExpressions(predicate.predicate, `${path}.predicate`, children);
        return;
    }
  }

  private isAllAttributesTarget(expression: AttributeReference): boolean {
    return expression.path.length >= 3 && expression.path[1].toLowerCase() === 'alle';
  }

  private resolveAllAttributesTarget(expression: AttributeReference, path: string): void {
    const [attributeName, , objectTypeName] = expression.path;
    const objectType = this.findObjectTypeByNameOrPlural(objectTypeName);
    if (!objectType) {
      this.addDiagnostic(`Unknown object type '${objectTypeName}' in uniqueness target`, path, expression.location);
      return;
    }

    const attribute = this.findAttributeBySingularOrPlural(objectType, attributeName);
    if (!attribute) {
      this.addDiagnostic(
        `Unknown attribute '${attributeName}' on object type '${objectType.name}' in uniqueness target`,
        path,
        expression.location
      );
      return;
    }

    expression.resolved = {
      resolvedType: attribute.dataType,
      resolvedPath: [
        {
          sourceName: objectTypeName,
          resolvedName: objectType.name,
          kind: 'variable',
          sourceType: 'context',
          targetType: objectType.name,
          cardinality: 'N',
        },
        {
          sourceName: attributeName,
          resolvedName: attribute.name,
          kind: 'attribute',
          sourceType: objectType.name,
          targetType: (attribute.dataType as any).domain || (attribute.dataType as any).type,
          cardinality: '1',
        },
      ],
      hasCollectionNavigation: true,
      unit: attribute.unit,
      timeline: attribute.timelineGranularity
        ? { granularity: attribute.timelineGranularity, source: 'attribute' }
        : undefined,
    };
  }

  private findObjectTypeByNameOrPlural(name: string): ObjectTypeDefinition | undefined {
    const normalized = this.normalizeName(name);
    return (this.model.objectTypes || []).find(objectType =>
      this.normalizeName(objectType.name) === normalized ||
      (objectType.plural || []).some(plural => this.normalizeName(plural) === normalized) ||
      this.normalizeName(`${objectType.name}s`) === normalized ||
      this.normalizeName(`${objectType.name}en`) === normalized
    );
  }

  private findAttributeBySingularOrPlural(
    objectType: ObjectTypeDefinition,
    name: string
  ): AttributeSpecification | undefined {
    const normalized = this.normalizeName(name);
    return objectType.members.find((member): member is AttributeSpecification => {
      if (member.type !== 'AttributeSpecification') return false;
      const memberName = this.normalizeName(member.name);
      return memberName === normalized ||
        this.normalizeName(`${member.name}s`) === normalized ||
        this.normalizeName(`${member.name}en`) === normalized;
    });
  }

  private normalizeName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, ' ').trim();
  }

  private inferBindingFromResult(result: ResultPart): ObjectBinding | undefined {
    switch (result.type) {
      case 'Gelijkstelling':
        return this.inferBindingFromExpression((result as Gelijkstelling).target as Expression);
      case 'Kenmerktoekenning':
        return this.inferBindingFromExpression((result as Kenmerktoekenning).subject);
      case 'ObjectCreation':
        return this.inferBindingFromExpression((result as ObjectCreation).subject);
      case 'Consistentieregel': {
        // Bind the subject from the checked attribute ("De leeftijd van een Persoon moet ...") so a
        // possessive in the criterion ("... van zijn vereniging") resolves against it, like a
        // gelijkstelling. The same-object form needs no binding, but is unharmed by it.
        const target = (result as Consistentieregel).target;
        return target ? this.inferBindingFromExpression(target as Expression) : undefined;
      }
      case 'MultipleResults':
        for (const nested of (result as MultipleResults).results) {
          const binding = this.inferBindingFromResult(nested);
          if (binding) return binding;
        }
        return undefined;
      default:
        return undefined;
    }
  }

  private inferBindingFromExpression(expression: Expression): ObjectBinding | undefined {
    if (expression.type === 'VariableReference') {
      return this.bindingForSubject((expression as VariableReference).variableName);
    }

    if (expression.type === 'AttributeReference') {
      const firstSegment = (expression as AttributeReference).path[0];
      return firstSegment ? this.bindingForSubject(firstSegment) : undefined;
    }

    if (expression.type === 'DimensionedAttributeReference') {
      return this.inferBindingFromExpression(
        (expression as DimensionedAttributeReference).baseAttribute as Expression
      );
    }

    return undefined;
  }

  private bindingForSubject(name: string): ObjectBinding | undefined {
    const normalized = name.toLowerCase();
    const objectTypes = this.model.objectTypes || [];
    const objectType = objectTypes.find(candidate =>
      candidate.name.toLowerCase() === normalized
    );

    if (objectType) {
      return this.bindingFor(objectType.name);
    }

    // A rule subject may be a rol ("De ... van een passagier moet ..."), not an object type.
    // Bind it to the object type that fills the rol so a possessive self-reference ("zijn ...")
    // resolves, mirroring resolveFeitTypeRole's navigation mapping. The rol's relationship scope
    // is a codegen concern, not part of the self-binding.
    for (const feitType of new Set(this.maps.feitTypes.values())) {
      for (const role of feitType.rollen) {
        if (!role.objectType) continue;
        if (role.naam.toLowerCase() === normalized || role.meervoud?.toLowerCase() === normalized) {
          const filler =
            this.maps.objectTypes.get(role.objectType) ||
            this.maps.objectTypes.get(role.objectType.toLowerCase());
          if (filler) return this.bindingFor(filler.name);
        }
      }
    }

    return undefined;
  }

  private bindingFor(objectTypeName: string): ObjectBinding {
    return {
      objectType: objectTypeName,
      variableName: objectTypeName.charAt(0).toLowerCase() + objectTypeName.slice(1),
    };
  }

  private createContext(binding?: ObjectBinding): ResolutionContext {
    return createResolutionContext(this.model, binding?.objectType, binding?.variableName);
  }

  private addDiagnostic(message: string, path: string, location?: SourceLocation): void {
    this.diagnostics.push({
      severity: 'error',
      message,
      path,
      location,
    });
  }

  /**
   * §9.9: reject a cyclic derivation — a property of an instance derived from the
   * same property of the same instance — unless the modeller declared the
   * recursion by marking its regelgroep `recursief`. The graph analysis lives in
   * findCyclicDerivations below.
   */
  private checkCyclicDerivations(): void {
    for (const diagnostic of findCyclicDerivations(this.model)) {
      this.addDiagnostic(diagnostic.message, diagnostic.path, diagnostic.location);
    }
  }
}

// ---------------------------------------------------------------------------
// §9.9 cyclic-derivation detection
//
// A gelijkstelling / kenmerktoekenning / verdeling / objectcreatie that derives a
// property (attribuut or kenmerk) of an instance from the SAME property of the
// SAME instance is foutief (§9.9). Whether a cycle is that illegal kind or legal
// recursion (the same property of a DIFFERENT instance) cannot be told apart
// automatically, so the spec rejects cyclic derivations unless the modeller
// declares the recursion by marking its regelgroep `recursief`.
//
// We build a derivation graph over the rules keyed by BARE same-instance members:
// a node produces the plain attribuut/kenmerk it writes on its subject, and
// consumes the plain attribuut/kenmerk it reads on that same subject WITHOUT
// relation navigation. A dimensioned cell, a navigated read and relation creation
// are deliberately excluded — they are a different cell / a different instance,
// not "the same property of the same instance". A rule whose produced member is
// among its own bare reads is a self-cycle; a multi-rule strongly connected
// component is a mutual cycle. Either is an error unless every rule in it sits in
// a recursief regelgroep.
// ---------------------------------------------------------------------------

interface CyclicDiagnostic {
  message: string;
  path: string;
  location?: SourceLocation;
}

function cdMemberKey(objectType: string, member: string): string {
  return `member:${objectType.toLowerCase()}#${member.toLowerCase()}`;
}

/**
 * The bare same-instance member key of a reference, or null. "Bare" means a plain
 * (non-dimensioned) attribuut/kenmerk on the subject itself, reached WITHOUT
 * relation navigation. A dimensioned cell is a different value-slot and a
 * navigated read is a different instance — neither is "the same property of the
 * same instance" that §9.9 forbids, so both return null.
 */
function cdBareMemberKey(ref: any): string | null {
  if (!ref || typeof ref !== 'object' || ref.type === 'DimensionedAttributeReference') return null;
  const path = ref.resolved?.resolvedPath;
  if (!Array.isArray(path) || path.length === 0) return null;
  if (path.some((s: any) => s?.kind === 'feittype')) return null;
  const last = path[path.length - 1];
  return last?.kind === 'attribute' && last.sourceType && last.resolvedName
    ? cdMemberKey(last.sourceType, last.resolvedName)
    : null;
}

/** A bare kenmerk-check read (the subject's own kenmerk, not navigated), or null. */
function cdBareKenmerkKey(expr: any): string | null {
  let ownerRef: any;
  let kenmerk: unknown;
  if (expr.type === 'BinaryExpression' &&
      (expr.operator === 'is een kenmerk' || expr.operator === 'is geen kenmerk')) {
    ownerRef = expr.left;
    kenmerk = expr.right?.value;
  } else if (expr.type === 'SimplePredicate' && expr.operator === 'kenmerk') {
    ownerRef = expr.subject ?? expr.onderwerp ?? expr.navigation;
    kenmerk = expr.kenmerk;
  } else if (expr.type === 'VergelijkingInPredicaat' && expr.vergelijkingType === 'kenmerk_check') {
    ownerRef = expr.onderwerp;
    kenmerk = expr.kenmerkNaam;
  } else {
    return null;
  }
  if (typeof kenmerk !== 'string') return null;
  const path = ownerRef?.resolved?.resolvedPath;
  if (Array.isArray(path) && path.some((s: any) => s?.kind === 'feittype')) return null;
  const last = Array.isArray(path) ? path[path.length - 1] : undefined;
  return last?.targetType ? cdMemberKey(last.targetType, kenmerk) : null;
}

/** Walk an expression tree collecting the BARE member/kenmerk keys it reads. */
function cdCollectBareReads(expr: any, out: Set<string>): void {
  if (!expr || typeof expr !== 'object') return;
  const member = cdBareMemberKey(expr);
  if (member) out.add(member);
  const kenmerk = cdBareKenmerkKey(expr);
  if (kenmerk) out.add(kenmerk);
  for (const k of Object.keys(expr)) {
    if (k === 'resolved') continue;
    const v = expr[k];
    if (Array.isArray(v)) v.forEach(child => cdCollectBareReads(child, out));
    else if (v && typeof v === 'object') cdCollectBareReads(v, out);
  }
}

/**
 * The bare member a result writes (a gelijkstelling/kenmerktoekenning on the
 * subject itself). A dimensioned or navigated target writes a different cell /
 * instance, and objectcreatie/feitcreatie/verdeling do not derive a bare member
 * value from itself, so those produce nothing here — §9.9 is about a plain
 * attribuut/kenmerk derived from itself.
 */
function cdCollectProduces(result: any, out: Set<string>): void {
  if (!result || typeof result !== 'object') return;
  if (result.type === 'MultipleResults') {
    for (const r of result.results ?? []) cdCollectProduces(r, out);
    return;
  }
  if (result.type === 'Gelijkstelling') {
    const k = cdBareMemberKey(result.target);
    if (k) out.add(k);
  } else if (result.type === 'Kenmerktoekenning') {
    const path = result.subject?.resolved?.resolvedPath;
    const navigated = Array.isArray(path) && path.some((s: any) => s?.kind === 'feittype');
    const last = Array.isArray(path) ? path[path.length - 1] : undefined;
    if (!navigated && last?.targetType && result.characteristic) {
      out.add(cdMemberKey(last.targetType, result.characteristic));
    }
  }
}

/**
 * Bare member/kenmerk keys a result READS — its own write target excluded. A
 * Gelijkstelling's target is itself a reference, so walking the whole result node
 * would re-read the produced member and make ordinary rules look self-cyclic; we
 * read only the value expression, the temporal condition, and (for non-writing
 * results) the whole node.
 */
function cdCollectResultReads(result: any, out: Set<string>): void {
  if (!result || typeof result !== 'object') return;
  switch (result.type) {
    case 'Gelijkstelling':
      cdCollectBareReads(result.expression, out);
      cdCollectBareReads(result.temporalCondition, out);
      break;
    case 'Kenmerktoekenning':
      cdCollectBareReads(result.temporalCondition, out);
      break;
    case 'Verdeling':
      cdCollectBareReads(result.sourceAmount, out);
      for (const m of result.distributionMethods ?? []) cdCollectBareReads(m, out);
      break;
    case 'MultipleResults':
      for (const r of result.results ?? []) cdCollectResultReads(r, out);
      break;
    default:
      cdCollectBareReads(result, out);
  }
}

/** Each (result, condition, variables) triple of a rule, across its versions. */
function cdRuleBodies(rule: any): Array<{ result: any; condition: any; variables: any[] }> {
  const versions = Array.isArray(rule.versions) && rule.versions.length > 0 ? rule.versions : undefined;
  if (versions) return versions.map((v: any) => ({ result: v.result, condition: v.condition, variables: v.variables ?? [] }));
  if (rule.version) return [{ result: rule.version.result, condition: rule.version.condition, variables: rule.version.variables ?? [] }];
  return [{ result: rule.result ?? rule.resultaat, condition: rule.condition ?? rule.voorwaarde, variables: rule.variables ?? [] }];
}

function cdProducesConsumes(rule: any): { produces: Set<string>; consumes: Set<string> } {
  const produces = new Set<string>();
  const consumes = new Set<string>();
  for (const body of cdRuleBodies(rule)) {
    cdCollectProduces(body.result, produces);
    cdCollectResultReads(body.result, consumes);
    cdCollectBareReads(body.condition, consumes);
    for (const v of body.variables ?? []) cdCollectBareReads(v.expression, consumes);
  }
  return { produces, consumes };
}

/**
 * Build the rule-derivation graph and return a §9.9 diagnostic for every cyclic
 * rule (a self-cycle on a member, or a member/relation cycle spanning rules) that
 * is not declared inside a `recursief` regelgroep.
 */
function findCyclicDerivations(model: DomainModel): CyclicDiagnostic[] {
  const entries: Array<{ rule: any; recursief: boolean; path: string }> = [];
  (model.regels ?? []).forEach((r, i) => entries.push({ rule: r, recursief: false, path: `regels[${i}]` }));
  (model.regelGroepen ?? []).forEach((g: any, gi: number) =>
    (g.rules ?? []).forEach((r: any, ri: number) =>
      entries.push({ rule: r, recursief: !!g.isRecursive, path: `regelGroepen[${gi}].rules[${ri}]` })));

  const n = entries.length;
  if (n === 0) return [];
  const pc = entries.map(e => cdProducesConsumes(e.rule));

  // Self-cycle: a rule that reads a member (attribuut/kenmerk) it also writes —
  // "the same property of the same instance" §9.9 forbids. Relation self-creation
  // (objectcreatie producing the relation it sits on) is intentional, so only
  // member keys count for the self-cycle.
  const selfCyclic = pc.map(p => {
    for (const k of p.produces) if (k.startsWith('member:') && p.consumes.has(k)) return true;
    return false;
  });

  // Inter-rule edges p → c when c reads something p writes (self-edges excluded; tracked above).
  const succ: number[][] = entries.map(() => []);
  for (let p = 0; p < n; p++) {
    if (pc[p].produces.size === 0) continue;
    for (let c = 0; c < n; c++) {
      if (c === p) continue;
      for (const key of pc[p].produces) {
        if (pc[c].consumes.has(key)) { succ[p].push(c); break; }
      }
    }
  }

  // Tarjan SCC: components of size > 1 are multi-rule derivation cycles.
  const componentOf = new Array<number>(n).fill(-1);
  const componentSizes: number[] = [];
  {
    let index = 0;
    const idx = new Array<number>(n).fill(-1);
    const low = new Array<number>(n).fill(0);
    const onStack = new Array<boolean>(n).fill(false);
    const stack: number[] = [];
    const strongConnect = (v: number): void => {
      idx[v] = low[v] = index++;
      stack.push(v); onStack[v] = true;
      for (const w of succ[v]) {
        if (idx[w] === -1) { strongConnect(w); low[v] = Math.min(low[v], low[w]); }
        else if (onStack[w]) low[v] = Math.min(low[v], idx[w]);
      }
      if (low[v] === idx[v]) {
        const comp = componentSizes.length;
        let size = 0;
        for (;;) { const w = stack.pop()!; onStack[w] = false; componentOf[w] = comp; size++; if (w === v) break; }
        componentSizes.push(size);
      }
    };
    for (let v = 0; v < n; v++) if (idx[v] === -1) strongConnect(v);
  }

  // A rule is cyclic if it self-derives or sits in a size>1 component; cyclic is
  // legal only when declared recursief, else it is a §9.9 error.
  const diagnostics: CyclicDiagnostic[] = [];
  for (let i = 0; i < n; i++) {
    const inComponentCycle = componentSizes[componentOf[i]] > 1;
    if ((!selfCyclic[i] && !inComponentCycle) || entries[i].recursief) continue;
    const others: string[] = [];
    if (inComponentCycle) {
      for (let j = 0; j < n; j++) {
        if (j !== i && componentOf[j] === componentOf[i]) others.push(entries[j].rule.name ?? 'unnamed');
      }
    }
    const withWhom = others.length > 0 ? ` (with ${others.map(o => `'${o}'`).join(', ')})` : '';
    diagnostics.push({
      message:
        `§9.9: regel '${entries[i].rule.name ?? 'unnamed'}'${withWhom} derives a property from the ` +
        `same property of the same instance (cyclic derivation), which is foutief. If this is ` +
        `recursion over distinct instances, place the rules in a regelgroep marked 'is recursief'.`,
      path: entries[i].path,
      location: entries[i].rule.location,
    });
  }
  return diagnostics;
}
