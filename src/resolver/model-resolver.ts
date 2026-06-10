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
import { DagsoortDefinitie } from '../ast/dagsoort';
import { DimensionedAttributeReference } from '../ast/dimensions';
import { PeriodDefinition, TimelineExpression } from '../ast/timelines';
import { ResolvedInfo } from './types';
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
  }

  private resolveKenmerktoekenning(
    result: Kenmerktoekenning,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveExpression(result.subject, context, `${path}.subject`);
    this.resolveOptionalExpression(result.temporalCondition, context, `${path}.temporalCondition`);
  }

  private resolveObjectCreation(
    result: ObjectCreation,
    context: ResolutionContext,
    path: string
  ): void {
    this.resolveExpression(result.subject, context, `${path}.subject`);
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
      return this.bindingForObjectType((expression as VariableReference).variableName);
    }

    if (expression.type === 'AttributeReference') {
      const firstSegment = (expression as AttributeReference).path[0];
      return firstSegment ? this.bindingForObjectType(firstSegment) : undefined;
    }

    if (expression.type === 'DimensionedAttributeReference') {
      return this.inferBindingFromExpression(
        (expression as DimensionedAttributeReference).baseAttribute as Expression
      );
    }

    return undefined;
  }

  private bindingForObjectType(name: string): ObjectBinding | undefined {
    const normalized = name.toLowerCase();
    const objectTypes = this.model.objectTypes || [];
    const objectType = objectTypes.find(candidate =>
      candidate.name.toLowerCase() === normalized
    );

    if (!objectType) {
      return undefined;
    }

    return {
      objectType: objectType.name,
      variableName: objectType.name.charAt(0).toLowerCase() + objectType.name.slice(1),
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
}
