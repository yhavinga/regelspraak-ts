/**
 * Expression Resolver
 *
 * Resolves references in expression trees by annotating them with
 * semantic information: resolved types, symbol bindings, navigation paths.
 *
 * This enables static analysis without runtime context.
 */

import {
  Expression,
  VariableReference,
  ParameterReference,
  AttributeReference,
  BinaryExpression,
  UnaryExpression,
  AggregationExpression,
  AfrondingExpression,
  BegrenzingExpression,
  BegrenzingAfrondingExpression,
  SubselectieExpression,
  NumberLiteral,
  StringLiteral,
  Literal,
  SelfReference,
  TekstreeksExpression,
  BooleanLiteral,
  FunctionCall,
  SamengesteldeVoorwaarde,
  ConjunctionExpression,
  DisjunctionExpression,
  RegelStatusExpression,
} from '../ast/expressions';
import {
  ObjectTypeDefinition,
  AttributeSpecification,
  KenmerkSpecification,
  DataType,
  DeclaredValueType,
  DomainReference,
  NamedTypeReference,
  ObjectTypeReference,
  TimelineGranularity,
} from '../ast/object-types';
import { ParameterDefinition } from '../ast/parameters';
import { DomainModel } from '../ast/domain-model';
import { FeitType, Rol } from '../ast/feittype';
import { Dagsoort, normalizeDagsoortName } from '../ast/dagsoort';
import {
  Dimension,
  DimensionAggregationSelection,
  DimensionedAttributeReference,
  DimensionCoordinate
} from '../ast/dimensions';
import { ResolvedInfo, ResolvedSymbol, ResolvedPathSegment, SymbolKind, TimelineInfo } from './types';
import { UnitRegistry, buildUnitRegistry, classifyOperands, unitMismatchMessage, aggregateResultUnit } from './unit-compatibility';
import { KenmerkEquivalenceRegistry } from '../kenmerk-equivalence-registry';
import { PeriodDefinition, TimelineExpression } from '../ast/timelines';

/**
 * Scope frame for tracking variable bindings
 */
export interface ScopeFrame {
  /** Variable name → its type information */
  variables: Map<string, ResolvedVariable>;
}

export interface ResolvedVariable {
  name: string;
  objectType?: string;
  resolvedType?: ResolvedInfo['resolvedType'];
  unit?: string;
  timeline?: TimelineInfo;
}

/**
 * Context for resolution
 */
export interface ResolutionContext {
  /** The domain model containing all definitions */
  model: DomainModel;

  /** Current object type in scope (for possessive resolution) */
  currentObjectType?: string;

  /** Current variable name (for possessive owner) */
  currentVariable?: string;

  /** Stack of scope frames from 'waar' clauses */
  scopeStack: ScopeFrame[];

  /** Root lookup strategy for bare attribute paths in scoped contexts */
  rootResolution?: 'global-first' | 'relative-only';
}

/**
 * Lookup maps for fast resolution
 */
export interface ResolutionMaps {
  objectTypes: Map<string, ObjectTypeDefinition>;
  parameters: Map<string, ParameterDefinition>;
  feitTypes: Map<string, FeitType>;
  /** objectType → attribute name → AttributeSpecification */
  attributes: Map<string, Map<string, AttributeSpecification>>;
  /** objectType → kenmerk name → KenmerkSpecification */
  kenmerken: Map<string, Map<string, KenmerkSpecification>>;
  /** objectType → KenmerkEquivalenceRegistry for variant matching */
  kenmerkRegistries: Map<string, KenmerkEquivalenceRegistry>;
  /** domain name → DomainReference */
  domains: Map<string, DomainReference>;
  /** domain name → its declared baseType, for resolving a DomainReference to its underlying datatype */
  domainBaseTypes: Map<string, string>;
  /** dimension name → Dimension definition */
  dimensions: Map<string, Dimension>;
  /** label → dimension name (for reverse lookup) */
  labelToDimension: Map<string, string>;
  /** canonical day type name → Dagsoort declaration */
  dagsoorten: Map<string, Dagsoort>;
  /** unit (eenheid) compatibility/conversion over declared eenheidsystemen */
  units: UnitRegistry;
}

/**
 * Possessive markers in Dutch RegelSpraak.
 * 'self' is the canonical placeholder the parser emits for any possessive
 * pronoun ("zijn", "haar", "hun") in path form.
 */
const POSSESSIVE_PRONOUNS = ['zijn', 'haar', 'hun', 'self'];

type ResolvableDeclaredValueType = DeclaredValueType | ObjectTypeReference;

/**
 * Normalize compound possessives in path arrays.
 * Example: ["zijn reis", "vluchtdatum"] → ["self", "reis", "vluchtdatum"]
 *
 * This handles cases where the parser emits a compound segment like "zijn reis"
 * instead of separate ["zijn", "reis"] segments.
 */
function normalizeCompoundPossessives(path: string[]): string[] {
  if (path.length === 0) return path;

  const firstSegment = path[0];
  const firstSegmentLower = firstSegment.toLowerCase();

  // Check if first segment is a compound possessive: "zijn X", "haar X", "hun X"
  for (const possessive of ['zijn ', 'haar ', 'hun ']) {
    if (firstSegmentLower.startsWith(possessive)) {
      // Split: "zijn reis" → "self" + "reis"
      const remainder = firstSegment.substring(possessive.length).trim();
      if (remainder) {
        return ['self', remainder, ...path.slice(1)];
      }
    }
  }

  return path;
}

/**
 * Build lookup maps from domain model
 */
function buildMaps(model: DomainModel): ResolutionMaps {
  const objectTypes = new Map<string, ObjectTypeDefinition>();
  const parameters = new Map<string, ParameterDefinition>();
  const feitTypes = new Map<string, FeitType>();
  const attributes = new Map<string, Map<string, AttributeSpecification>>();
  const kenmerken = new Map<string, Map<string, KenmerkSpecification>>();
  const kenmerkRegistries = new Map<string, KenmerkEquivalenceRegistry>();
  const domains = new Map<string, DomainReference>();
  const domainBaseTypes = new Map<string, string>();
  const dimensions = new Map<string, Dimension>();
  const labelToDimension = new Map<string, string>();
  const dagsoorten = new Map<string, Dagsoort>();

  for (const ot of model.objectTypes || []) {
    objectTypes.set(ot.name, ot);
    objectTypes.set(ot.name.toLowerCase(), ot);

    const attrMap = new Map<string, AttributeSpecification>();
    const kenmerkMap = new Map<string, KenmerkSpecification>();
    const registry = new KenmerkEquivalenceRegistry();

    for (const member of ot.members) {
      if (member.type === 'AttributeSpecification') {
        attrMap.set(member.name, member);
        attrMap.set(member.name.toLowerCase(), member);
      } else if (member.type === 'KenmerkSpecification') {
        kenmerkMap.set(member.name, member);
        kenmerkMap.set(member.name.toLowerCase(), member);
        // Register kenmerk with equivalence registry for variant matching
        registry.registerKenmerk(member);
      }
    }

    attributes.set(ot.name, attrMap);
    attributes.set(ot.name.toLowerCase(), attrMap);
    kenmerken.set(ot.name, kenmerkMap);
    kenmerken.set(ot.name.toLowerCase(), kenmerkMap);
    kenmerkRegistries.set(ot.name, registry);
    kenmerkRegistries.set(ot.name.toLowerCase(), registry);
  }

  for (const param of model.parameters || []) {
    parameters.set(param.name, param);
    parameters.set(param.name.toLowerCase(), param);
  }

  for (const domain of model.domains || []) {
    const reference: DomainReference = { type: 'DomainReference', domain: domain.name };
    domains.set(domain.name, reference);
    domains.set(domain.name.toLowerCase(), reference);
    domainBaseTypes.set(domain.name, domain.baseType);
    domainBaseTypes.set(domain.name.toLowerCase(), domain.baseType);
  }

  // Check both 'feitTypes' and 'feittypen' - AST uses 'feittypen', some code uses 'feitTypes'
  for (const ft of model.feitTypes || (model as any).feittypen || []) {
    feitTypes.set(ft.naam, ft);
    feitTypes.set(ft.naam.toLowerCase(), ft);
  }

  // Build dimension lookup maps
  for (const dim of model.dimensions || []) {
    dimensions.set(dim.name, dim);
    dimensions.set(dim.name.toLowerCase(), dim);

    // Map each label to its dimension for reverse lookup
    for (const label of dim.labels) {
      const labelKey = label.label.toLowerCase();
      // Check for duplicate labels across dimensions
      if (labelToDimension.has(labelKey)) {
        const existingDim = labelToDimension.get(labelKey);
        if (existingDim !== dim.name.toLowerCase()) {
          // Label exists in multiple dimensions - store as ambiguous marker
          labelToDimension.set(labelKey, '__AMBIGUOUS__');
        }
      } else {
        labelToDimension.set(labelKey, dim.name);
      }
    }
  }

  for (const dagsoort of model.dagsoorten || []) {
    dagsoorten.set(dagsoort.canonicalName || normalizeDagsoortName(dagsoort.name), dagsoort);
    dagsoorten.set(normalizeDagsoortName(dagsoort.name), dagsoort);
    if (dagsoort.canonicalPlural) {
      dagsoorten.set(dagsoort.canonicalPlural, dagsoort);
    }
    if (dagsoort.plural) {
      dagsoorten.set(normalizeDagsoortName(dagsoort.plural), dagsoort);
    }
  }

  return {
    objectTypes,
    parameters,
    feitTypes,
    attributes,
    kenmerken,
    kenmerkRegistries,
    domains,
    domainBaseTypes,
    dimensions,
    labelToDimension,
    dagsoorten,
    units: buildUnitRegistry(model.unitSystems),
  };
}

/**
 * Create an initial resolution context from a domain model
 */
export function createResolutionContext(
  model: DomainModel,
  currentObjectType?: string,
  currentVariable?: string
): ResolutionContext {
  return {
    model,
    currentObjectType,
    currentVariable,
    scopeStack: [],
  };
}

/**
 * Push a new scope frame (e.g., entering a 'waar' clause)
 */
export function pushScope(context: ResolutionContext, frame: ScopeFrame): ResolutionContext {
  return {
    ...context,
    scopeStack: [...context.scopeStack, frame],
  };
}

export function createResolutionMaps(model: DomainModel): ResolutionMaps {
  return buildMaps(model);
}

/**
 * Resolve all expressions in an expression tree.
 * Mutates expr.resolved in place.
 */
export function resolveExpression(
  expr: Expression,
  context: ResolutionContext
): Expression {
  const maps = createResolutionMaps(context.model);

  return resolveExpressionWithMaps(expr, context, maps);
}

export function resolveExpressionWithMaps(
  expr: Expression,
  context: ResolutionContext,
  maps: ResolutionMaps
): Expression {
  return resolveExpressionInternal(expr, context, maps);
}

function resolveExpressionInternal(
  expr: Expression,
  context: ResolutionContext,
  maps: ResolutionMaps
): Expression {
  switch (expr.type) {
    case 'NumberLiteral':
      return resolveNumberLiteral(expr as NumberLiteral);

    case 'StringLiteral':
      return resolveStringLiteral(expr as StringLiteral);

    case 'Literal':
      return resolveLiteral(expr as Literal);

    case 'DateLiteral':
      return resolveDateLiteral(expr);

    case 'TekstreeksExpression':
      return resolveTekstreeksExpression(expr as TekstreeksExpression, context, maps);

    case 'BooleanLiteral':
      return resolveBooleanLiteral(expr as BooleanLiteral);

    case 'SelfReference':
      return resolveSelfReference(expr as SelfReference, context, maps);

    case 'VariableReference':
      return resolveVariableReference(expr as VariableReference, context, maps);

    case 'ParameterReference':
      return resolveParameterReference(expr as ParameterReference, context, maps);

    case 'AttributeReference':
      return resolveAttributeReference(expr as AttributeReference, context, maps);

    case 'DimensionedAttributeReference':
      return resolveDimensionedAttributeReference(expr as any, context, maps);

    case 'BinaryExpression':
      return resolveBinaryExpression(expr as BinaryExpression, context, maps);

    case 'UnaryExpression':
      return resolveUnaryExpression(expr as UnaryExpression, context, maps);

    case 'AggregationExpression':
      return resolveAggregationExpression(expr as AggregationExpression, context, maps);

    case 'AfrondingExpression':
      return resolveAfrondingExpression(expr as AfrondingExpression, context, maps);

    case 'BegrenzingExpression':
      return resolveBegrenzingExpression(expr as BegrenzingExpression, context, maps);

    case 'BegrenzingAfrondingExpression':
      return resolveBegrenzingAfrondingExpression(expr as BegrenzingAfrondingExpression, context, maps);

    case 'SubselectieExpression':
      return resolveSubselectieExpression(expr as SubselectieExpression, context, maps);

    case 'FunctionCall':
      return resolveFunctionCall(expr as FunctionCall, context, maps);

    case 'SamengesteldeVoorwaarde':
      return resolveSamengesteldeVoorwaarde(expr as SamengesteldeVoorwaarde, context, maps);

    case 'VergelijkingInPredicaat':
      resolveVergelijkingInPredicaat(expr, context, maps);
      return expr;

    case 'ConjunctionExpression':
      return resolveConjunctionExpression(expr as ConjunctionExpression, context, maps);

    case 'DisjunctionExpression':
      return resolveDisjunctionExpression(expr as DisjunctionExpression, context, maps);

    case 'RegelStatusExpression':
      return resolveRegelStatusExpression(expr as RegelStatusExpression, context, maps);

    case 'PeriodDefinition':
      return resolvePeriodDefinition(expr as PeriodDefinition, context, maps);

    case 'TimelineExpression':
      return resolveTimelineExpression(expr as TimelineExpression, context, maps);

    default:
      // Unknown expression type - leave unresolved
      return expr;
  }
}

// ============================================================================
// Literal Resolvers
// ============================================================================

function resolveNumberLiteral(expr: NumberLiteral): NumberLiteral {
  expr.resolved = {
    resolvedType: { type: 'Numeriek' },
    unit: expr.unit,
  };
  return expr;
}

function resolveStringLiteral(expr: StringLiteral): StringLiteral {
  expr.resolved = {
    resolvedType: { type: 'Tekst' },
  };
  return expr;
}

function resolveLiteral(expr: Literal): Literal {
  const literalType = (expr as any).literalType;
  let resolvedType: DataType;

  if (literalType === 'date' || expr.value instanceof Date) {
    resolvedType = { type: 'Datum' };
  } else if (literalType === 'boolean' || typeof expr.value === 'boolean') {
    resolvedType = { type: 'Boolean' };
  } else if (literalType === 'number' || typeof expr.value === 'number') {
    resolvedType = { type: 'Numeriek' };
  } else {
    resolvedType = { type: 'Tekst' };
  }

  expr.resolved = { resolvedType };
  return expr;
}

function resolveDateLiteral<T extends Expression>(expr: T): T {
  expr.resolved = {
    resolvedType: { type: 'Datum' },
  };
  return expr;
}

function resolveTekstreeksExpression(
  expr: TekstreeksExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): TekstreeksExpression {
  for (const part of expr.parts) {
    if (part.type === 'TekstreeksInterpolation') {
      resolveExpressionInternal(part.expression, context, maps);
    }
  }

  expr.resolved = {
    resolvedType: { type: 'Tekst' },
  };
  return expr;
}

function resolveBooleanLiteral(expr: BooleanLiteral): BooleanLiteral {
  expr.resolved = {
    resolvedType: { type: 'Boolean' },
  };
  return expr;
}

// ============================================================================
// Reference Resolvers
// ============================================================================

function requireSelfBinding(
  context: ResolutionContext,
  maps: ResolutionMaps,
  sourceName: string
): { variableName: string; objectTypeName: string } {
  if (!context.currentObjectType || !context.currentVariable) {
    throw new Error(`Cannot resolve '${sourceName}' without a current object binding`);
  }

  const objectType =
    maps.objectTypes.get(context.currentObjectType) ||
    maps.objectTypes.get(context.currentObjectType.toLowerCase());
  if (!objectType) {
    throw new Error(`Cannot resolve '${sourceName}': unknown object type '${context.currentObjectType}'`);
  }

  return {
    variableName: context.currentVariable,
    objectTypeName: objectType.name,
  };
}

function resolveSelfReference(
  expr: SelfReference,
  context: ResolutionContext,
  maps: ResolutionMaps
): SelfReference {
  const binding = requireSelfBinding(context, maps, expr.pronoun);
  const resolvedType = { type: 'ObjectType', name: binding.objectTypeName } as any;

  expr.resolved = {
    resolvedSymbol: {
      kind: 'self',
      name: binding.variableName,
      dataType: resolvedType,
    },
    resolvedType,
    possessiveOwner: binding.variableName,
    resolvedPath: [{
      sourceName: expr.pronoun,
      resolvedName: binding.variableName,
      kind: 'possessive',
      sourceType: 'context',
      targetType: binding.objectTypeName,
      cardinality: '1',
    }],
  };

  return expr;
}

function resolveVariableReference(
  expr: VariableReference,
  context: ResolutionContext,
  maps: ResolutionMaps
): VariableReference {
  const name = expr.variableName;
  const nameLower = name.toLowerCase();

  // Check scope stack first (innermost to outermost)
  for (let i = context.scopeStack.length - 1; i >= 0; i--) {
    const frame = context.scopeStack[i];
    const scopeVar = frame.variables.get(name) || frame.variables.get(nameLower);
    if (scopeVar) {
      const objectType = scopeVar.objectType ? maps.objectTypes.get(scopeVar.objectType) : undefined;
      const resolvedType = objectType
        ? ({ type: 'ObjectType', name: objectType.name } as any)
        : scopeVar.resolvedType;
      expr.resolved = {
        resolvedSymbol: {
          kind: 'variable',
          name: scopeVar.name,
          dataType: resolvedType,
        },
        resolvedType,
        unit: scopeVar.unit,
        timeline: scopeVar.timeline,
      };
      return expr;
    }
  }

  // Check if it's an object type name
  const objectType = maps.objectTypes.get(name) || maps.objectTypes.get(nameLower);
  if (objectType) {
    expr.resolved = {
      resolvedSymbol: {
        kind: 'objecttype',
        name: objectType.name,
      },
      resolvedType: { type: 'ObjectType', name: objectType.name } as any,
    };
    return expr;
  }

  // Check if it's a parameter
  const param = maps.parameters.get(name) || maps.parameters.get(nameLower);
  if (param) {
    const resolvedDataType = resolveDeclaredSymbolType(param.dataType, maps);
    expr.resolved = {
      resolvedSymbol: {
        kind: 'parameter',
        name: param.name,
        dataType: resolvedDataType,
      },
      resolvedType: resolvedDataType,
      unit: param.unit,
    };
    return expr;
  }

  // Unresolved - leave without resolved info
  return expr;
}

function resolveParameterReference(
  expr: ParameterReference,
  context: ResolutionContext,
  maps: ResolutionMaps
): ParameterReference {
  const name = expr.parameterName;
  const nameLower = name.toLowerCase();

  const param = maps.parameters.get(name) || maps.parameters.get(nameLower);
  if (param) {
    const resolvedDataType = resolveDeclaredSymbolType(param.dataType, maps);
    const resolved: ResolvedInfo = {
      resolvedSymbol: {
        kind: 'parameter',
        name: param.name,
        dataType: resolvedDataType,
      },
      resolvedType: resolvedDataType,
      unit: param.unit,
    };

    // Propagate timeline metadata if the parameter is time-dependent
    if (param.timelineGranularity) {
      resolved.timeline = {
        granularity: param.timelineGranularity,
        source: 'parameter',
      };
    }

    expr.resolved = resolved;
  }

  return expr;
}

/**
 * Resolve FeitType navigation: given a segment name and a sourceType,
 * find a FeitType role that navigates from sourceType to another objectType.
 *
 * Example: from "Natuurlijk persoon", segment "reis" resolves via
 * FeitType "vlucht van natuurlijke personen" → role "reis" → "Vlucht"
 *
 * Also supports plural aliases: from "Vlucht", segment "passagiers" resolves
 * via the same FeitType → role "passagier" (meervoud: "passagiers") → "Natuurlijk persoon"
 * with cardinality 'N'.
 */
interface NavigationCandidate {
  segment: ResolvedPathSegment;
  nextType?: string;
  unit?: string;
  timeline?: TimelineInfo;
  description: string;
}

function resolveFeitTypeNavigation(
  segment: string,
  sourceType: string,
  feitTypes: Map<string, FeitType>,
  objectTypes: Map<string, ObjectTypeDefinition>
): NavigationCandidate[] {
  let segmentLower = segment.toLowerCase();
  const sourceTypeLower = sourceType.toLowerCase();
  const candidates: NavigationCandidate[] = [];

  let forceCollectionCardinality = false;
  if (segmentLower.startsWith('alle ')) {
    segmentLower = segmentLower.substring(5);
    forceCollectionCardinality = true;
  }

  // The map double-keys each FeitType (original + lowercase name) for lookup, so
  // iterate distinct values — visiting a capitalized-name FeitType twice would
  // manufacture a false "ambiguous navigation" from two identical candidates.
  for (const feitType of new Set(feitTypes.values())) {
    const sourceRoles = feitType.rollen.filter(
      (r) => r.objectType?.toLowerCase() === sourceTypeLower
    );

    if (sourceRoles.length === 0) {
      continue;
    }

    for (const targetRole of feitType.rollen) {
      if (!targetRole.objectType) continue;

      const matchesSingular = targetRole.naam.toLowerCase() === segmentLower;
      const matchesPlural = targetRole.meervoud?.toLowerCase() === segmentLower;

      if (matchesSingular || matchesPlural) {
        const viableSourceRoles = sourceRoles.filter(sourceRole => sourceRole !== targetRole);
        if (viableSourceRoles.length === 0) {
          continue;
        }

        // Verify the target objectType exists
        const targetObjectType =
          objectTypes.get(targetRole.objectType) ||
          objectTypes.get(targetRole.objectType.toLowerCase());

        if (targetObjectType) {
          const cardinality = resolveRoleCardinality(targetRole, feitType.naam);
          if (forceCollectionCardinality && cardinality !== 'N') {
            throw new Error(
              `Collection navigation 'alle ${segment}' conflicts with one-cardinality role ` +
              `'${targetRole.naam}' in FeitType '${feitType.naam}'`
            );
          }

          const resolvedName = matchesPlural ? (targetRole.meervoud || targetRole.naam) : targetRole.naam;
          candidates.push({
            segment: {
              sourceName: segment,
              resolvedName,
              kind: 'feittype',
              sourceType,
              targetType: targetObjectType.name,
              cardinality,
              feitType: {
                feitTypeName: feitType.naam,
                sourceRoleName: viableSourceRoles[0].naam,
                targetRoleName: targetRole.naam,
              },
            },
            nextType: targetObjectType.name,
            description: `FeitType '${feitType.naam}' role '${resolvedName}' -> '${targetObjectType.name}'`,
          });
        }
      }
    }
  }

  return candidates;
}

/**
 * Resolve a FeitType role name to its object type.
 * Used when the first path segment is a role name (e.g., "verdeler" → "Budgetverdeler").
 *
 * Returns all role matches so the caller can reject ambiguous roots.
 */
function resolveFeitTypeRole(
  segment: string,
  feitTypes: Map<string, FeitType>,
  objectTypes: Map<string, ObjectTypeDefinition>
): NavigationCandidate[] {
  const segmentLower = segment.toLowerCase();
  const candidates: NavigationCandidate[] = [];

  // Iterate distinct values: the map double-keys each FeitType for lookup.
  for (const feitType of new Set(feitTypes.values())) {
    for (const role of feitType.rollen) {
      if (!role.objectType) continue;

      const matchesSingular = role.naam.toLowerCase() === segmentLower;
      const matchesPlural = role.meervoud?.toLowerCase() === segmentLower;

      if (matchesSingular || matchesPlural) {
        const targetObjectType =
          objectTypes.get(role.objectType) ||
          objectTypes.get(role.objectType.toLowerCase());

        if (targetObjectType) {
          candidates.push({
            segment: {
              sourceName: segment,
              resolvedName: targetObjectType.name,
              kind: 'feittype',
              sourceType: 'context',
              targetType: targetObjectType.name,
              cardinality: resolveRoleCardinality(role, feitType.naam),
              feitType: {
                feitTypeName: feitType.naam,
                sourceRoleName: role.naam,
                targetRoleName: role.naam,
              },
            },
            nextType: targetObjectType.name,
            description: `FeitType '${feitType.naam}' root role ` +
              `'${matchesPlural ? (role.meervoud || role.naam) : role.naam}' -> '${targetObjectType.name}'`,
          });
        }
      }
    }
  }

  return candidates;
}

function resolveRoleCardinality(role: Rol, feitTypeName: string): '1' | 'N' {
  if (role.cardinality === 'one') {
    return '1';
  }
  if (role.cardinality === 'many') {
    return 'N';
  }
  throw new Error(
    `Missing cardinality for role '${role.naam}' in FeitType '${feitTypeName}'. ` +
    `Cardinality must come from the FeitType cardinality line, not from plural aliases.`
  );
}

/**
 * Resolve the relation an ObjectCreation asserts: from `subjectType`, navigate the
 * created `role` to an object of `createdType`. Returns the single enriched
 * `feittype` navigation segment, or `undefined` when the navigation is unknown or
 * ambiguous. This is the resolver's authority for ObjectCreation relations; the
 * Drools transpiler reads it instead of re-searching the FeitTypes.
 */
export function resolveObjectCreationRelationSegment(
  role: string,
  subjectType: string,
  createdType: string,
  maps: ResolutionMaps
): ResolvedPathSegment | undefined {
  const createdLower = createdType.toLowerCase();
  const matches = resolveFeitTypeNavigation(
    role,
    subjectType,
    maps.feitTypes,
    maps.objectTypes
  ).filter(candidate => candidate.segment.targetType.toLowerCase() === createdLower);

  return matches.length === 1 ? matches[0].segment : undefined;
}

function formatPath(path: string[]): string {
  return path.join(' -> ');
}

function lookupObjectType(
  name: string,
  maps: ResolutionMaps
): ObjectTypeDefinition | undefined {
  return maps.objectTypes.get(name) || maps.objectTypes.get(name.toLowerCase());
}

function lookupDomain(
  name: string,
  maps: ResolutionMaps
): DomainReference | undefined {
  return maps.domains.get(name) || maps.domains.get(name.toLowerCase());
}

function resolveNamedTypeReference(
  reference: NamedTypeReference,
  maps: ResolutionMaps
): DomainReference | ObjectTypeReference {
  const domain = lookupDomain(reference.name, maps);
  const objectType = lookupObjectType(reference.name, maps);

  if (domain && objectType) {
    throw new Error(
      `Type reference '${reference.name}' is ambiguous: both a domain and object type are defined`
    );
  }

  if (domain) {
    return domain;
  }

  if (objectType) {
    return { type: 'ObjectType', name: objectType.name };
  }

  throw new Error(`Unknown type reference '${reference.name}'`);
}

function lookupScopeVariable(
  name: string,
  context: ResolutionContext
): ResolvedVariable | undefined {
  for (let i = context.scopeStack.length - 1; i >= 0; i--) {
    const frame = context.scopeStack[i];
    const variable = frame.variables.get(name) || frame.variables.get(name.toLowerCase());
    if (variable) {
      return variable;
    }
  }
  return undefined;
}

function resolveDeclaredValueType(
  dataType: ResolvableDeclaredValueType,
  maps: ResolutionMaps
): DataType | DomainReference | ObjectTypeReference {
  if (dataType.type === 'ObjectType') {
    return dataType;
  }

  if (dataType.type === 'NamedTypeReference') {
    return resolveNamedTypeReference(dataType, maps);
  }

  if ('domain' in dataType) {
    return dataType;
  }

  if (dataType.type === 'Lijst') {
    return {
      ...dataType,
      elementType: resolveDeclaredValueType(dataType.elementType, maps),
    };
  }

  return dataType;
}

function resolveDeclaredSymbolType(
  dataType: DataType | DomainReference,
  maps: ResolutionMaps
): DataType | DomainReference {
  const resolved = resolveDeclaredValueType(dataType, maps);

  if (resolved.type === 'ObjectType') {
    throw new Error(`Object type '${resolved.name}' cannot be used as a scalar value type`);
  }

  return resolved;
}

function resolveDeclaredTarget(
  dataType: ResolvableDeclaredValueType,
  maps: ResolutionMaps
): { targetType: string; cardinality: '1' | 'N' } {
  if (dataType.type === 'ObjectType') {
    return { targetType: dataType.name, cardinality: '1' };
  }

  if (dataType.type === 'NamedTypeReference') {
    const resolved = resolveNamedTypeReference(dataType, maps);
    return {
      targetType: resolved.type === 'ObjectType' ? resolved.name : resolved.domain,
      cardinality: '1',
    };
  }

  if ('domain' in dataType) {
    return { targetType: dataType.domain, cardinality: '1' };
  }

  if (dataType.type === 'Lijst') {
    const elementTarget = resolveDeclaredTarget(dataType.elementType, maps);
    const elementType = dataType.elementType;
    const targetType = elementType.type === 'Lijst'
      ? formatDeclaredType(elementType, maps)
      : elementTarget.targetType;

    return {
      targetType,
      cardinality: 'N',
    };
  }

  return { targetType: dataType.type, cardinality: '1' };
}

function resolveAttributeTarget(
  attr: AttributeSpecification,
  maps: ResolutionMaps
): { targetType: string; cardinality: '1' | 'N' } {
  return resolveDeclaredTarget(attr.dataType, maps);
}

function formatDeclaredType(
  dataType: ResolvableDeclaredValueType,
  maps: ResolutionMaps
): string {
  if (dataType.type === 'ObjectType') {
    return dataType.name;
  }

  if (dataType.type === 'NamedTypeReference') {
    const resolved = resolveNamedTypeReference(dataType, maps);
    return resolved.type === 'ObjectType' ? resolved.name : resolved.domain;
  }

  if ('domain' in dataType) {
    return dataType.domain;
  }

  if (dataType.type === 'Lijst') {
    return `Lijst van ${formatDeclaredType(dataType.elementType, maps)}`;
  }

  return dataType.type;
}

function resolveTimelineFromAttribute(
  attr: AttributeSpecification
): TimelineInfo | undefined {
  if (!attr.timelineGranularity) {
    return undefined;
  }
  return {
    granularity: attr.timelineGranularity,
    source: 'attribute',
  };
}

function resolveTimelineFromKenmerk(
  kenmerk: KenmerkSpecification
): TimelineInfo | undefined {
  if (!kenmerk.timelineGranularity) {
    return undefined;
  }
  return {
    granularity: kenmerk.timelineGranularity,
    source: 'kenmerk',
  };
}

function selectSingleCandidate(
  candidates: NavigationCandidate[],
  errorPrefix: string
): NavigationCandidate {
  if (candidates.length === 0) {
    throw new Error(errorPrefix);
  }
  if (candidates.length > 1) {
    const descriptions = candidates.map(candidate => candidate.description).join('; ');
    throw new Error(`${errorPrefix}. Candidates: ${descriptions}`);
  }
  return candidates[0];
}

function resolveRootCandidates(
  segment: string,
  context: ResolutionContext,
  maps: ResolutionMaps
): NavigationCandidate[] {
  const candidates: NavigationCandidate[] = [];
  const objectType = lookupObjectType(segment, maps);
  if (objectType) {
    candidates.push({
      segment: {
        sourceName: segment,
        resolvedName: objectType.name,
        kind: 'variable',
        sourceType: 'context',
        targetType: objectType.name,
        cardinality: '1',
      },
      nextType: objectType.name,
      description: `ObjectType '${objectType.name}'`,
    });
  }

  const scopeVariable = lookupScopeVariable(segment, context);
  if (scopeVariable?.objectType) {
    candidates.push({
      segment: {
        sourceName: segment,
        resolvedName: scopeVariable.name,
        kind: 'variable',
        sourceType: 'context',
        targetType: scopeVariable.objectType,
        cardinality: '1',
      },
      nextType: scopeVariable.objectType,
      description: `scope variable '${scopeVariable.name}' -> '${scopeVariable.objectType}'`,
    });
  }

  candidates.push(...resolveFeitTypeRole(segment, maps.feitTypes, maps.objectTypes));
  return candidates;
}

function resolveSegmentCandidates(
  segment: string,
  currentType: string,
  maps: ResolutionMaps
): NavigationCandidate[] {
  const candidates: NavigationCandidate[] = [];
  const segmentLower = segment.toLowerCase();

  const attrMap = maps.attributes.get(currentType) || maps.attributes.get(currentType.toLowerCase());
  const attr = attrMap?.get(segment) || attrMap?.get(segmentLower);
  if (attr) {
    const { targetType, cardinality } = resolveAttributeTarget(attr, maps);
    candidates.push({
      segment: {
        sourceName: segment,
        resolvedName: attr.name,
        kind: 'attribute',
        sourceType: currentType,
        targetType,
        cardinality,
      },
      nextType: lookupObjectType(targetType, maps)?.name,
      unit: attr.unit,
      timeline: resolveTimelineFromAttribute(attr),
      description: `attribute '${attr.name}' on '${currentType}'`,
    });
  }

  const kenmerkMap = maps.kenmerken.get(currentType) || maps.kenmerken.get(currentType.toLowerCase());
  const registry = maps.kenmerkRegistries.get(currentType) || maps.kenmerkRegistries.get(currentType.toLowerCase());
  let kenmerk = kenmerkMap?.get(segment) || kenmerkMap?.get(segmentLower);
  if (!kenmerk && registry && kenmerkMap) {
    const canonicalName = registry.getCanonicalLabel(segment);
    kenmerk = kenmerkMap.get(canonicalName) || kenmerkMap.get(canonicalName.toLowerCase());
  }

  // When an attribute and a kenmerk share a name (the casus declares both
  // "bereikbaar per trein" forms on Vlucht), a value/navigation position reads the
  // attribute; the kenmerk is reached through the kenmerk-check predicate, not here.
  // Suppressing the duplicate kenmerk candidate resolves the otherwise-ambiguous segment.
  if (kenmerk && !attr) {
    candidates.push({
      segment: {
        sourceName: segment,
        resolvedName: kenmerk.name,
        kind: 'attribute',
        sourceType: currentType,
        targetType: 'Boolean',
        cardinality: '1',
      },
      timeline: resolveTimelineFromKenmerk(kenmerk),
      description: `kenmerk '${kenmerk.name}' on '${currentType}'`,
    });
  }

  candidates.push(...resolveFeitTypeNavigation(segment, currentType, maps.feitTypes, maps.objectTypes));
  return candidates;
}

/**
 * A navigation segment may carry a unit projection: "afstand tot bestemming in kilometers"
 * names the attribute "afstand tot bestemming" expressed in kilometers. The naamwoord parser
 * leaves the "in <eenheid>" glued to the attribute name, so the plain segment lookup misses it.
 * Strip a trailing "in <known-unit>" and resolve the base attribute — but accept only when the
 * projection is identity (the projected unit is the attribute's own unit), so a value-changing
 * conversion is never silently dropped here; a genuine cast falls through to the original error.
 */
function resolveUnitProjectionSegment(
  segment: string,
  currentType: string,
  maps: ResolutionMaps
): NavigationCandidate[] {
  const match = segment.match(/^(.+) in (\S+)$/i);
  if (!match) {
    return [];
  }
  const [, base, unitToken] = match;
  const projected = maps.units.byToken.get(unitToken.toLowerCase());
  if (!projected) {
    return [];
  }
  const canonicalOf = (unit: string): string =>
    maps.units.byToken.get(unit.toLowerCase())?.canonical ?? unit.toLowerCase();
  return resolveSegmentCandidates(base, currentType, maps).filter(
    candidate => candidate.unit !== undefined && canonicalOf(candidate.unit) === projected.canonical
  );
}

function resolveFinalType(
  finalType: string,
  maps: ResolutionMaps
): DataType | DomainReference | { type: 'ObjectType'; name: string } {
  const finalObjectType = lookupObjectType(finalType, maps);
  if (finalObjectType) {
    return { type: 'ObjectType', name: finalObjectType.name } as any;
  }

  switch (finalType) {
    case 'Numeriek':
    case 'Tekst':
    case 'Boolean':
    case 'Datum':
    case 'DatumTijd':
    case 'Percentage':
      return { type: finalType } as DataType;
    default:
      return { type: 'DomainReference', domain: finalType } as DomainReference;
  }
}

function stripDanglingDimensionPreposition(text: string): string {
  return text.replace(/\s+(van|op|bij|in|met|voor)$/i, '').trim();
}

function resolveAttributeReference(
  expr: AttributeReference,
  context: ResolutionContext,
  maps: ResolutionMaps
): AttributeReference {
  const path = normalizeCompoundPossessives(expr.path);
  if (path.length === 0) {
    return expr;
  }

  const resolvedPath: ResolvedPathSegment[] = [];
  let currentType = context.currentObjectType;
  let possessiveOwner: string | undefined;
  let hasCollectionNavigation = false;
  let terminalUnit: string | undefined;
  let terminalTimelineInfo: TimelineInfo | undefined;
  let startIndex = 0;

  const firstSegment = path[0].toLowerCase();
  const isPossessive = POSSESSIVE_PRONOUNS.includes(firstSegment);

  if (isPossessive) {
    const binding = requireSelfBinding(context, maps, path[0]);
    possessiveOwner = binding.variableName;
    resolvedPath.push({
      sourceName: path[0],
      resolvedName: binding.variableName,
      kind: 'possessive',
      sourceType: 'context',
      targetType: binding.objectTypeName,
      cardinality: '1',
    });
    currentType = binding.objectTypeName;
    startIndex = 1;
  } else {
    const rootCandidates = context.rootResolution === 'relative-only'
      ? []
      : resolveRootCandidates(path[0], context, maps);
    if (rootCandidates.length > 0) {
      const root = selectSingleCandidate(
        rootCandidates,
        `Ambiguous navigation root '${path[0]}' in path '${formatPath(path)}'`
      );
      resolvedPath.push(root.segment);
      currentType = root.nextType;
      if (root.segment.cardinality === 'N') {
        hasCollectionNavigation = true;
      }
      startIndex = 1;
    } else if (!currentType) {
      throw new Error(`Unknown navigation root '${path[0]}' in path '${formatPath(path)}'`);
    }
  }

  for (let i = startIndex; i < path.length; i++) {
    const segment = path[i];
    if (!currentType) {
      const previousSegment = resolvedPath[resolvedPath.length - 1]?.sourceName ?? path[i - 1];
      throw new Error(
        `Cannot navigate through scalar segment '${previousSegment}' in path '${formatPath(path)}'`
      );
    }

    let segmentCandidates = resolveSegmentCandidates(segment, currentType, maps);
    if (segmentCandidates.length === 0) {
      segmentCandidates = resolveUnitProjectionSegment(segment, currentType, maps);
    }
    const candidate = selectSingleCandidate(
      segmentCandidates,
      segmentCandidates.length > 1
        ? `Ambiguous navigation segment '${segment}' from '${currentType}' in path '${formatPath(path)}'`
        : `Cannot resolve navigation segment '${segment}' from '${currentType}' in path '${formatPath(path)}'`
    );

    resolvedPath.push(candidate.segment);
    if (candidate.segment.cardinality === 'N') {
      hasCollectionNavigation = true;
    }
    terminalUnit = candidate.unit;
    terminalTimelineInfo = candidate.timeline;
    currentType = candidate.nextType;
  }

  if (resolvedPath.length > 0) {
    const lastSegment = resolvedPath[resolvedPath.length - 1];
    expr.resolved = {
      resolvedPath,
      resolvedType: resolveFinalType(lastSegment.targetType, maps),
      possessiveOwner,
      hasCollectionNavigation,
      unit: terminalUnit,
      timeline: terminalTimelineInfo,
    };
  }

  return expr;
}

/**
 * Decompose a FeitCreatie subject phrase (an `<onderwerpketen>`, spec §9.4 / L1615) into
 * navigation segments, root first.
 *
 * The FeitCreatie grammar (initial scaffold) still carries each subject as one opaque string
 * (e.g. "een club met pas", "de club van de vereniging met pas") instead of a structural
 * `onderwerpketen`. This implements the spec production literally:
 *
 *   <onderwerpketen> ::= (<lidwoord> (<objecttypenaam> | <rolnaam>)) | (<selector> "van" <onderwerpketen>)
 *
 * - A single leading `<lidwoord>` (de/het/een) is a determiner and is stripped.
 * - The chain is right-recursive on `van <lidwoord>` boundaries; the rightmost element is the
 *   root subject, elements to its left are `selector` hops. We return segments root-first so the
 *   resolver navigates left-to-right from the root.
 * - Other prepositions inside a segment (e.g. "met" in "club met pas") stay part of the name.
 *
 * NOTE: This is the fallback (Option A) of PLAN_FEITCREATIE_SUBJECTS_20260610. It is the single
 * spec-decomposition for subject phrases and is exported so the transpiler's parallel
 * `parseVanNavigationChain` can be retired against it later (finding G2).
 */
export function decomposeOnderwerpketenPhrase(phrase: string): string[] {
  const stripped = phrase.replace(/^\s*(?:de|het|een)\s+/i, '').trim();
  if (!stripped) {
    return [];
  }
  const segments = stripped
    .split(/\s+van\s+(?:de|het|een)\s+/i)
    .map(segment => segment.trim())
    .filter(segment => segment.length > 0);
  return segments.reverse();
}

/**
 * Resolve a FeitCreatie subject phrase to navigation metadata.
 *
 * Root resolution follows the spec precedence (objecttypenaam OR rolnaam): an `<objecttypenaam>`
 * is tried first, then a `<rolnaam>` via FeitType roles. Trying the object type first avoids a
 * false ambiguity when a name is both an object type and a role (e.g. "club"). `selector` hops are
 * resolved right-to-left as FeitType navigations. Unknown roots, unnavigable hops and genuine
 * ambiguity throw, so the model resolver can surface them as diagnostics.
 */
export function resolveOnderwerpketenSubject(
  phrase: string,
  context: ResolutionContext,
  maps: ResolutionMaps
): ResolvedInfo {
  const segments = decomposeOnderwerpketenPhrase(phrase);
  if (segments.length === 0) {
    throw new Error(`Empty FeitCreatie subject '${phrase}'`);
  }

  const resolvedPath: ResolvedPathSegment[] = [];
  let hasCollectionNavigation = false;

  const rootName = segments[0];
  let currentType: string | undefined;

  const objectType = lookupObjectType(rootName, maps);
  if (objectType) {
    resolvedPath.push({
      sourceName: rootName,
      resolvedName: objectType.name,
      kind: 'variable',
      sourceType: 'context',
      targetType: objectType.name,
      cardinality: '1',
    });
    currentType = objectType.name;
  } else {
    const rootCandidates = resolveFeitTypeRole(rootName, maps.feitTypes, maps.objectTypes);
    const root = selectSingleCandidate(
      rootCandidates,
      rootCandidates.length > 1
        ? `Ambiguous FeitCreatie subject root '${rootName}' in '${phrase}'`
        : `Unknown FeitCreatie subject root '${rootName}' in '${phrase}'`
    );
    resolvedPath.push(root.segment);
    currentType = root.nextType;
    if (root.segment.cardinality === 'N') {
      hasCollectionNavigation = true;
    }
  }

  for (let i = 1; i < segments.length; i++) {
    const segment = segments[i];
    if (!currentType) {
      throw new Error(
        `Cannot navigate FeitCreatie subject hop '${segment}' through a scalar in '${phrase}'`
      );
    }
    const hopCandidates = resolveFeitTypeNavigation(segment, currentType, maps.feitTypes, maps.objectTypes);
    const hop = selectSingleCandidate(
      hopCandidates,
      hopCandidates.length > 1
        ? `Ambiguous FeitCreatie subject hop '${segment}' from '${currentType}' in '${phrase}'`
        : `Cannot navigate FeitCreatie subject hop '${segment}' from '${currentType}' in '${phrase}'`
    );
    resolvedPath.push(hop.segment);
    currentType = hop.nextType;
    if (hop.segment.cardinality === 'N') {
      hasCollectionNavigation = true;
    }
  }

  const finalType = resolvedPath[resolvedPath.length - 1].targetType;
  return {
    resolvedPath,
    resolvedType: resolveFinalType(finalType, maps),
    hasCollectionNavigation,
  };
}

/**
 * Return the names of FeitTypes that declare a role matching `roleName` (singular or plural).
 * Used to validate FeitCreatie `role1`/`role2`: zero matches is an unknown role, more than one is
 * an ambiguous role.
 */
export function findFeitTypesForRole(roleName: string, maps: ResolutionMaps): string[] {
  const target = roleName.toLowerCase();
  const matches: string[] = [];
  // Iterate distinct values: the map double-keys each FeitType for lookup.
  for (const feitType of new Set(maps.feitTypes.values())) {
    const hasRole = feitType.rollen.some(
      role => role.naam.toLowerCase() === target || role.meervoud?.toLowerCase() === target
    );
    if (hasRole) {
      matches.push(feitType.naam);
    }
  }
  return matches;
}

/**
 * Resolve a DimensionedAttributeReference.
 *
 * This validates that:
 * 1. The base attribute exists and is dimensioned
 * 2. All dimension labels match declared dimensions
 * 3. All required dimensions are present
 * 4. No duplicate dimensions
 * 5. Preposition/style matches dimension definition (if applicable)
 *
 * After resolution, populates `expr.coordinates` with resolved bindings.
 */
function resolveDimensionedAttributeReference(
  expr: DimensionedAttributeReference,
  context: ResolutionContext,
  maps: ResolutionMaps
): DimensionedAttributeReference {
  const rawLabels = expr.dimensionLabels || [];

  // Build a set of dimension labels for fast lookup (case-insensitive)
  const dimensionLabelSet = new Set(rawLabels.map(l => l.toLowerCase()));

  // Clean the base attribute path by removing dimension labels from path segments.
  // The parser-produced path keeps its source form — the resolver annotates, never
  // rewrites (see Expression.resolved) — so the label-free path is resolved on a
  // clone and carried in the annotation as `cleanedPath` for consumers that
  // navigate by path text.
  if (expr.baseAttribute?.type === 'AttributeReference') {
    const baseAttr = expr.baseAttribute as AttributeReference;
    const cleanedPath: string[] = [];

    for (const segment of baseAttr.path) {
      // Check if this segment is a dimension label (exact match)
      if (dimensionLabelSet.has(segment.toLowerCase())) {
        continue; // Skip dimension labels in path
      }

      // Check if segment contains dimension labels that should be stripped
      let cleanedSegment = segment;
      for (const label of rawLabels) {
        // Use word boundary matching to strip labels from compound segments
        const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const wordBoundaryRegex = new RegExp(`(^|\\s)${escapedLabel}(\\s|$)`, 'gi');
        if (wordBoundaryRegex.test(cleanedSegment)) {
          cleanedSegment = stripDanglingDimensionPreposition(
            cleanedSegment.replace(wordBoundaryRegex, ' ').trim().replace(/\s+/g, ' ')
          );
        }
      }

      if (cleanedSegment) {
        cleanedPath.push(cleanedSegment);
      }
    }

    const probe: AttributeReference = { ...baseAttr, path: cleanedPath };
    resolveAttributeReference(probe, context, maps);
    baseAttr.resolved = { ...probe.resolved, cleanedPath };
  } else if (expr.baseAttribute?.type === 'SubselectieExpression') {
    resolveSubselectieExpression(expr.baseAttribute as SubselectieExpression, context, maps);
  }

  if (rawLabels.length === 0) {
    // No dimension labels to resolve
    expr.coordinates = [];
    return expr;
  }

  // Find the attribute specification to get declared dimensions
  const baseResolved = expr.baseAttribute?.resolved;
  if (!baseResolved?.resolvedPath || baseResolved.resolvedPath.length === 0) {
    // Can't resolve without knowing the attribute
    expr.coordinates = [];
    return expr;
  }

  // Get the attribute specification from the resolved path
  const lastPathSegment = baseResolved.resolvedPath[baseResolved.resolvedPath.length - 1];
  const sourceType = lastPathSegment.sourceType;
  const attrName = lastPathSegment.resolvedName;

  // Look up the attribute specification
  const attrMap = maps.attributes.get(sourceType) || maps.attributes.get(sourceType?.toLowerCase() || '');
  const attrSpec = attrMap?.get(attrName) || attrMap?.get(attrName?.toLowerCase() || '');

  if (!attrSpec?.dimensions || attrSpec.dimensions.length === 0) {
    // Attribute is not dimensioned - error
    throw new Error(
      `Attribute '${attrName}' is not dimensioned, but was referenced with dimension labels: [${rawLabels.join(', ')}]`
    );
  }

  const declaredDimensionNames = attrSpec.dimensions;
  const resolvedCoordinates: DimensionCoordinate[] = [];
  const usedDimensions = new Set<string>();

  // Match each raw label to a dimension
  for (const rawLabel of rawLabels) {
    const labelLower = rawLabel.toLowerCase();

    // Look up which dimension this label belongs to
    const dimensionName = maps.labelToDimension.get(labelLower);

    if (!dimensionName) {
      throw new Error(
        `Unknown dimension label '${rawLabel}' in reference to '${attrName}'. ` +
        `No dimension defines this label.`
      );
    }

    if (dimensionName === '__AMBIGUOUS__') {
      // Label exists in multiple dimensions - need disambiguation
      // Try to find which of the declared dimensions contains this label
      let matchedDim: Dimension | undefined;
      for (const declaredDimName of declaredDimensionNames) {
        const dim = maps.dimensions.get(declaredDimName) || maps.dimensions.get(declaredDimName.toLowerCase());
        if (dim?.labels.some(l => l.label.toLowerCase() === labelLower)) {
          if (matchedDim) {
            throw new Error(
              `Ambiguous dimension label '${rawLabel}' in reference to '${attrName}'. ` +
              `Label exists in multiple dimensions declared on this attribute. ` +
              `Use explicit preposition or style to disambiguate.`
            );
          }
          matchedDim = dim;
        }
      }
      if (!matchedDim) {
        throw new Error(
          `Dimension label '${rawLabel}' does not belong to any dimension declared on attribute '${attrName}'.`
        );
      }
      // Found unambiguous match among declared dimensions
      if (usedDimensions.has(matchedDim.name)) {
        throw new Error(
          `Duplicate dimension '${matchedDim.name}' in reference to '${attrName}'. ` +
          `Each dimension can only have one coordinate.`
        );
      }
      usedDimensions.add(matchedDim.name);
      resolvedCoordinates.push({
        dimension: matchedDim.name,
        label: rawLabel,
        sourceStyle: matchedDim.usageStyle,
        preposition: matchedDim.preposition,
      });
    } else {
      // Clear dimension match
      const dim = maps.dimensions.get(dimensionName);
      if (!dim) {
        throw new Error(
          `Internal error: dimension '${dimensionName}' not found for label '${rawLabel}'.`
        );
      }

      // Verify this dimension is declared on the attribute
      if (!declaredDimensionNames.some(d => d.toLowerCase() === dim.name.toLowerCase())) {
        throw new Error(
          `Dimension '${dim.name}' (from label '${rawLabel}') is not declared on attribute '${attrName}'. ` +
          `Declared dimensions: [${declaredDimensionNames.join(', ')}]`
        );
      }

      if (usedDimensions.has(dim.name)) {
        throw new Error(
          `Duplicate dimension '${dim.name}' in reference to '${attrName}'. ` +
          `Each dimension can only have one coordinate.`
        );
      }

      usedDimensions.add(dim.name);
      resolvedCoordinates.push({
        dimension: dim.name,
        label: rawLabel,
        sourceStyle: dim.usageStyle,
        preposition: dim.preposition,
      });
    }
  }

  // Check that all declared dimensions are covered
  const missingDimensions = declaredDimensionNames.filter(d => !usedDimensions.has(d));
  if (missingDimensions.length > 0) {
    throw new Error(
      `Missing dimension coordinates for attribute '${attrName}'. ` +
      `Missing dimensions: [${missingDimensions.join(', ')}]. ` +
      `Provided labels: [${rawLabels.join(', ')}]`
    );
  }

  // Sort coordinates by declared dimension order
  const dimensionOrder = new Map(declaredDimensionNames.map((d, i) => [d.toLowerCase(), i]));
  resolvedCoordinates.sort((a, b) => {
    const orderA = dimensionOrder.get(a.dimension.toLowerCase()) ?? 999;
    const orderB = dimensionOrder.get(b.dimension.toLowerCase()) ?? 999;
    return orderA - orderB;
  });

  expr.coordinates = resolvedCoordinates;

  // Set resolved info based on base attribute
  if (baseResolved) {
    (expr as any).resolved = {
      resolvedPath: baseResolved.resolvedPath,
      resolvedType: baseResolved.resolvedType,
      possessiveOwner: baseResolved.possessiveOwner,
      hasCollectionNavigation: baseResolved.hasCollectionNavigation,
      unit: baseResolved.unit,
      timeline: baseResolved.timeline,
      dimensions: {
        attributeDimensions: declaredDimensionNames,
        coordinates: resolvedCoordinates,
      },
    };
  }

  return expr;
}

// ============================================================================
// Compound Expression Resolvers
// ============================================================================

/**
 * Combine timeline info from two operands.
 * Returns the finest granularity (dag < maand < jaar).
 * If only one operand has timeline info, returns that.
 * If neither has timeline info, returns undefined.
 */
function combineTimelineInfo(
  left: TimelineInfo | undefined,
  right: TimelineInfo | undefined
): TimelineInfo | undefined {
  if (!left && !right) return undefined;
  if (!left) return right;
  if (!right) return left;

  // Granularity ordering: dag is finest (0), maand is middle (1), jaar is coarsest (2)
  const granularityOrder: Record<TimelineGranularity, number> = {
    'dag': 0,
    'maand': 1,
    'jaar': 2,
  };

  const leftOrder = granularityOrder[left.granularity];
  const rightOrder = granularityOrder[right.granularity];

  // Return the finest granularity (lower order number)
  if (leftOrder <= rightOrder) {
    return { granularity: left.granularity, source: 'expression' };
  } else {
    return { granularity: right.granularity, source: 'expression' };
  }
}

/**
 * Classify an operand's resolved type for ordinal comparison (typeringen §5.1-5.10). Only Numeriek,
 * Percentage and Datum(-tijd) admit <,<=,>,>=; Tekst, Boolean and Enumeratie admit only ==/!=. A
 * domein is classified by its declared baseType — most numerieke attributen are domein-typed, so the
 * raw resolvedType is a DomainReference that must be looked through. An unresolved or purely
 * structural type (ObjectType, Lijst, …) is 'unknown', and the caller fails open on it so that
 * resolution incompleteness never masquerades as a type error.
 */
function ordinalComparisonClass(
  rt: DataType | DomainReference | { type: string } | undefined,
  maps: ResolutionMaps,
): { kind: 'ordinal' | 'non-ordinal' | 'unknown'; baseType: string } {
  let baseType = (rt as any)?.type as string | undefined;
  if (baseType === 'DomainReference') {
    const domain = (rt as DomainReference).domain;
    baseType = maps.domainBaseTypes.get(domain) ?? maps.domainBaseTypes.get(domain.toLowerCase());
  }
  switch (baseType) {
    case 'Numeriek':
    case 'Percentage':
    case 'Datum':
    case 'DatumTijd':
    case 'Datum in dagen':                 // domein baseType spelling for Datum
    case 'Datum en tijd in millisecondes': // domein baseType spelling for DatumTijd
      return { kind: 'ordinal', baseType };
    case 'Tekst':
    case 'Boolean':
    case 'Enumeratie':
      return { kind: 'non-ordinal', baseType };
    default:
      return { kind: 'unknown', baseType: baseType ?? 'onbekend' };
  }
}

function resolveBinaryExpression(
  expr: BinaryExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): BinaryExpression {
  // Resolve operands
  resolveExpressionInternal(expr.left, context, maps);
  resolveExpressionInternal(expr.right, context, maps);
  classifyMembershipPredicate(expr, maps);

  // Determine result type based on operator
  const comparisonOps = ['==', '!=', '>', '<', '>=', '<='];
  const logicalOps = ['&&', '||'];
  const arithmeticOps = ['+', '-', '*', '/', '^'];
  const predicateOps = [
    'is een dagsoort',
    'zijn een dagsoort',
    'is geen dagsoort',
    'zijn geen dagsoort',
    'is een kenmerk',
    'zijn een kenmerk',
    'is geen kenmerk',
    'zijn geen kenmerk',
    'is een rol',
    'zijn een rol',
    'is geen rol',
    'zijn geen rol',
    'is numeriek met exact',
    'is niet numeriek met exact',
    'zijn numeriek met exact',
    'zijn niet numeriek met exact',
  ];

  // Combine timeline info from operands
  const combinedTimeline = combineTimelineInfo(
    expr.left.resolved?.timeline,
    expr.right.resolved?.timeline
  );

  if (comparisonOps.includes(expr.operator) ||
      logicalOps.includes(expr.operator) ||
      predicateOps.includes(expr.operator)) {
    // Comparisons produce Boolean, but may still be time-dependent
    // if operands are time-dependent (result is Boolean timeline). A numeric
    // comparison over units requires its operands to be equal-or-convertible
    // (§5.1-5.6); a convertible pair carries the conversion the transpiler must
    // apply to the right operand before comparing. Logical/predicate operators
    // carry no units, so the check is scoped to true comparison operators.
    let unitConversion: ResolvedInfo['unitConversion'];
    if (comparisonOps.includes(expr.operator)) {
      const cls = classifyOperands(maps.units, expr.left.resolved?.unit, expr.right.resolved?.unit);
      if (cls.kind === 'incompatible') {
        throw new Error(unitMismatchMessage(`operator '${expr.operator}'`, cls.left, cls.right));
      }
      if (cls.kind === 'convertible') {
        unitConversion = { operand: 'right', multiplyBy: cls.multiplyBy, divideBy: cls.divideBy };
      }
    }
    // Typeringen §5.1-5.10: an ordinal comparison is defined only for numerieke, percentage and
    // Datum(-tijd) operands — "kleiner/groter dan (of gelijk aan)" on numbers (§5.1/5.2/5.4/5.5) and
    // the datum-ordening "eerder/later dan" on dates (§5.7-5.10). Tekst, Boolean and Enumeratie admit
    // only gelijk/ongelijk aan (==/!=, §5.3/5.6). The visitor folds both surface families onto the
    // same <,<=,>,>= symbols, so accept either ordinal family and reject the rest. Unresolved operands
    // are skipped: resolution incompleteness must fail open, not masquerade as a type error.
    const orderedComparisonOps = ['>', '<', '>=', '<='];
    if (orderedComparisonOps.includes(expr.operator)) {
      const leftClass = ordinalComparisonClass(expr.left.resolved?.resolvedType, maps);
      const rightClass = ordinalComparisonClass(expr.right.resolved?.resolvedType, maps);
      const bad =
        leftClass.kind === 'non-ordinal' ? { side: 'linker', t: leftClass.baseType } :
        rightClass.kind === 'non-ordinal' ? { side: 'rechter', t: rightClass.baseType } : null;
      if (bad) {
        throw new Error(
          `Operator '${expr.operator}' is een ordinale vergelijking en vereist Numeriek-, ` +
          `Percentage- of Datum(-tijd)-operanden (typeringen §5.1-5.10); de ${bad.side}expressie is ${bad.t}.`,
        );
      }
    }
    expr.resolved = {
      resolvedType: { type: 'Boolean' },
      timeline: combinedTimeline,
      ...(unitConversion ? { unitConversion } : {}),
    };
  } else if (arithmeticOps.includes(expr.operator)) {
    // Type-aware arithmetic: Datum ± Numeriek → Datum
    const leftType = (expr.left.resolved?.resolvedType as any)?.type;
    const rightType = (expr.right.resolved?.resolvedType as any)?.type;
    const isDateLike = (t: string | undefined) => t === 'Datum' || t === 'DatumTijd';

    if (expr.operator === '^') {
      if ((leftType && leftType !== 'Numeriek') || (rightType && rightType !== 'Numeriek')) {
        throw new Error(
          `Power operator requires numeric operands, got ${leftType ?? 'unknown'} and ${rightType ?? 'unknown'}`
        );
      }
      if (expr.left.resolved?.unit || expr.right.resolved?.unit) {
        throw new Error('Power operator requires unitless operands');
      }
      expr.resolved = {
        resolvedType: { type: 'Numeriek' },
        timeline: combinedTimeline,
      };
    } else if ((expr.operator === '+' || expr.operator === '-') &&
        isDateLike(leftType) && rightType === 'Numeriek') {
      expr.resolved = {
        resolvedType: { type: leftType } as DataType,
        timeline: combinedTimeline,
      };
    } else if (expr.operator === '-' && isDateLike(leftType) && isDateLike(rightType)) {
      // Date - Date → Numeriek (duration). Unit unknown without explicit annotation.
      expr.resolved = {
        resolvedType: { type: 'Numeriek' },
        timeline: combinedTimeline,
      };
    } else {
      // Numeriek arithmetic. Unit semantics per typeringen §4:
      //  +,- : operands must be equal or convertible (§4.1/§4.2/§4.3); the result
      //        takes the left operand's unit (Eenheid1) and a convertible right
      //        operand carries the conversion the transpiler folds in.
      //  *,/ : no restriction (§4.4/§4.5); unit × scalar keeps the unit, while
      //        unit × unit forms a composite this scalar `unit` field cannot name,
      //        so it is dropped (the transpiler erases units at the Drools boundary
      //        and additive/comparison checks are where mixing actually matters).
      const lu = expr.left.resolved?.unit;
      const ru = expr.right.resolved?.unit;
      let resultUnit: string | undefined;
      let unitConversion: ResolvedInfo['unitConversion'];
      if (expr.operator === '+' || expr.operator === '-') {
        const cls = classifyOperands(maps.units, lu, ru);
        if (cls.kind === 'incompatible') {
          throw new Error(unitMismatchMessage(`operator '${expr.operator}'`, cls.left, cls.right));
        }
        if (cls.kind !== 'both-unitless') {
          resultUnit = cls.unit;
        }
        if (cls.kind === 'convertible') {
          unitConversion = { operand: 'right', multiplyBy: cls.multiplyBy, divideBy: cls.divideBy };
        }
      } else if (lu !== undefined && ru === undefined) {
        // unit (×|÷) scalar → keep the unit.
        resultUnit = lu;
      } else if (lu === undefined && ru !== undefined && expr.operator === '*') {
        // scalar × unit → unit (scalar ÷ unit is a reciprocal this field can't name).
        resultUnit = ru;
      }
      expr.resolved = {
        resolvedType: { type: 'Numeriek' },
        timeline: combinedTimeline,
        ...(resultUnit !== undefined ? { unit: resultUnit } : {}),
        ...(unitConversion ? { unitConversion } : {}),
      };
    }
  }

  return expr;
}

function classifyMembershipPredicate(
  expr: BinaryExpression,
  maps: ResolutionMaps
): void {
  const dagsoortOperators = new Set([
    'is een dagsoort',
    'zijn een dagsoort',
    'is geen dagsoort',
    'zijn geen dagsoort',
  ]);
  if (!dagsoortOperators.has(expr.operator)) {
    return;
  }

  const name = extractDagsoortName(expr.right);
  if (!name) {
    throw new Error(`Dagsoort predicate requires a dagsoort name`);
  }
  // A declared dagsoort keeps the §8.1.5 dagsoortcontrole reading.
  if (maps.dagsoorten.has(normalizeDagsoortName(name))) {
    return;
  }

  // The "X is een <noun>" surface is a kenmerkcheck or a §8.1.7 rolcheck when <noun> is a kenmerk
  // or a rol rather than a dagsoort — the three share the article, so the grammar routes all to the
  // dagsoortcontrole and the kind is decided here from the left operand's type. Re-tag the operator
  // (and the unified predicate) so the rest of the pipeline reads the right kind of check.
  const resolvedType = expr.left.resolved?.resolvedType as any;
  const leftType: string | undefined =
    resolvedType?.type === 'ObjectType' ? resolvedType.name : undefined;
  const kenmerkMap = leftType
    ? maps.kenmerken.get(leftType) ?? maps.kenmerken.get(leftType.toLowerCase())
    : undefined;
  const isKenmerk = !!(kenmerkMap?.get(name) ?? kenmerkMap?.get(name.toLowerCase()));
  const isRol = findFeitTypesForRole(name, maps).length > 0;

  if (isKenmerk) {
    retagMembership(expr, 'kenmerk', name);
  } else if (isRol) {
    retagMembership(expr, 'rol', name);
  } else {
    throw new Error(
      `Unknown dagsoort, kenmerk or rol '${name}'` + (leftType ? ` on '${leftType}'` : '')
    );
  }
}

function retagMembership(expr: BinaryExpression, kind: 'kenmerk' | 'rol', name: string): void {
  expr.operator = expr.operator.replace('dagsoort', kind) as BinaryExpression['operator'];
  const negated = expr.operator.includes('geen');
  (expr as any).predicate = {
    type: 'SimplePredicate',
    operator: kind,
    left: expr.left,
    negated,
    ...(kind === 'kenmerk' ? { kenmerk: name } : { rol: name }),
  };
}

function extractDagsoortName(expr: Expression): string | undefined {
  if (expr.type === 'StringLiteral') {
    return (expr as StringLiteral).value;
  }
  if (expr.type === 'Literal' && typeof (expr as Literal).value === 'string') {
    return (expr as Literal).value;
  }
  if (expr.type === 'VariableReference') {
    return (expr as VariableReference).variableName;
  }
  if (expr.type === 'AttributeReference') {
    return (expr as AttributeReference).path.join(' ');
  }
  return undefined;
}

function resolveUnaryExpression(
  expr: UnaryExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): UnaryExpression {
  resolveExpressionInternal(expr.operand, context, maps);

  // Propagate timeline info from operand
  const operandTimeline = expr.operand.resolved?.timeline;

  if (expr.operator === '-') {
    // Negation preserves the numeric type and the unit (−5 km is still km). The
    // unit must carry through, or a negated unit-bearing operand of an additive
    // op or comparison would look unitless and slip past the §3.7 mixing check.
    expr.resolved = {
      resolvedType: { type: 'Numeriek' },
      timeline: operandTimeline,
      ...(expr.operand.resolved?.unit ? { unit: expr.operand.resolved.unit } : {}),
    };
  } else if (expr.operator === '!' ||
      expr.operator === 'niet' ||
      expr.operator === 'is leeg' ||
      expr.operator === 'is gevuld' ||
      expr.operator === 'zijn leeg' ||
      expr.operator === 'zijn gevuld' ||
      expr.operator === 'voldoet aan de elfproef' ||
      expr.operator === 'voldoen aan de elfproef' ||
      expr.operator === 'voldoet niet aan de elfproef' ||
      expr.operator === 'voldoen niet aan de elfproef' ||
      expr.operator === 'moeten uniek zijn') {
    // An emptiness check (§5.8.2/§8) or boolean unary resolves to Boolean
    // regardless of the operand's type.
    expr.resolved = {
      resolvedType: { type: 'Boolean' },
      timeline: operandTimeline,
    };
  }

  return expr;
}

function resolveAggregationExpression(
  expr: AggregationExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): AggregationExpression {
  // Resolve target(s)
  if (Array.isArray(expr.target)) {
    for (const t of expr.target) {
      resolveExpressionInternal(t, context, maps);
    }
  } else {
    resolveExpressionInternal(expr.target, context, maps);
  }

  if (!expr.dimensionSelection && expr.dimensionRange) {
    expr.dimensionSelection = {
      type: 'DimensionAggregationSelection',
      kind: 'range',
      dimensionName: expr.dimensionRange.dimension || undefined,
      fromLabel: expr.dimensionRange.from,
      toLabel: expr.dimensionRange.to
    };
  }

  if (expr.dimensionSelection) {
    resolveDimensionAggregationSelection(expr, expr.dimensionSelection, maps);
  }

  // Aggregation result type depends on aggregationType
  switch (expr.aggregationType) {
    case 'som':
    case 'maximum':
    case 'minimum': {
      // Carry the aggregated members' unit and reject incompatible members
      // (§4.10/§4.12/§4.13), matching the FunctionCall aggregate form.
      const memberUnits = Array.isArray(expr.target)
        ? expr.target.map(t => t.resolved?.unit)
        : [expr.target.resolved?.unit];
      const aggUnit = aggregateResultUnit(maps.units, memberUnits);
      expr.resolved = {
        resolvedType: { type: 'Numeriek' },
        ...(aggUnit !== undefined ? { unit: aggUnit } : {}),
      };
      break;
    }
    case 'aantal':
      // A count is dimensionless regardless of the counted element's unit.
      expr.resolved = {
        resolvedType: { type: 'Numeriek' },
      };
      break;
    case 'eerste':
    case 'laatste':
      // Result type is the element type of the collection
      // For now, inherit from target if available
      if (!Array.isArray(expr.target) && expr.target.resolved?.resolvedType) {
        expr.resolved = {
          resolvedType: expr.target.resolved.resolvedType,
        };
      }
      break;
  }

  return expr;
}

function resolveDimensionAggregationSelection(
  expr: AggregationExpression,
  selection: DimensionAggregationSelection,
  maps: ResolutionMaps
): void {
  if (Array.isArray(expr.target)) {
    throw new Error('Dimension aggregation requires a single dimensioned attribute target');
  }

  const attrSpec = getResolvedAggregationAttribute(expr.target, maps);
  if (!attrSpec.dimensions || attrSpec.dimensions.length === 0) {
    throw new Error(`Attribute '${attrSpec.name}' is not dimensioned`);
  }

  const dimension = selection.dimensionName
    ? resolveSelectedDimensionByName(selection.dimensionName, attrSpec.dimensions, maps, attrSpec.name)
    : inferSelectedDimensionFromLabels(selection, attrSpec.dimensions, maps, attrSpec.name);

  const labels = resolveSelectedDimensionLabels(selection, dimension);
  if (labels.length === 0) {
    throw new Error(`Dimension selection for '${dimension.name}' is empty`);
  }

  selection.resolvedDimension = dimension.name;
  selection.resolvedLabels = labels;
  selection.fixedCoordinates = resolveFixedAggregationCoordinates(
    selection,
    dimension,
    attrSpec.dimensions,
    maps,
    attrSpec.name
  );
}

function getResolvedAggregationAttribute(
  target: Expression,
  maps: ResolutionMaps
): AttributeSpecification {
  const resolvedPath = target.resolved?.resolvedPath;
  const lastPathSegment = resolvedPath?.[resolvedPath.length - 1];
  if (!lastPathSegment) {
    throw new Error('Cannot resolve dimension aggregation target');
  }

  const attrMap = maps.attributes.get(lastPathSegment.sourceType) ||
    maps.attributes.get(lastPathSegment.sourceType.toLowerCase());
  const attrSpec = attrMap?.get(lastPathSegment.resolvedName) ||
    attrMap?.get(lastPathSegment.resolvedName.toLowerCase());

  if (!attrSpec) {
    throw new Error(`Cannot resolve attribute '${lastPathSegment.resolvedName}' for dimension aggregation`);
  }

  return attrSpec;
}

function resolveSelectedDimensionByName(
  rawName: string,
  declaredDimensionNames: string[],
  maps: ResolutionMaps,
  attributeName: string
): Dimension {
  const normalizedRawName = normalizeDimensionName(rawName);
  const matches = declaredDimensionNames
    .map(name => maps.dimensions.get(name) || maps.dimensions.get(name.toLowerCase()))
    .filter((dimension): dimension is Dimension => !!dimension)
    .filter(dimension =>
      normalizeDimensionName(dimension.name) === normalizedRawName ||
      normalizeDimensionName(dimension.plural) === normalizedRawName
    );

  if (matches.length === 0) {
    throw new Error(
      `Dimension '${rawName}' is not declared on attribute '${attributeName}'. ` +
      `Declared dimensions: [${declaredDimensionNames.join(', ')}]`
    );
  }
  if (matches.length > 1) {
    throw new Error(`Ambiguous dimension '${rawName}' on attribute '${attributeName}'`);
  }
  return matches[0];
}

function inferSelectedDimensionFromLabels(
  selection: DimensionAggregationSelection,
  declaredDimensionNames: string[],
  maps: ResolutionMaps,
  attributeName: string
): Dimension {
  const labels = labelsMentionedBySelection(selection);
  if (labels.length === 0) {
    throw new Error(`Dimension selection for '${attributeName}' must name a dimension`);
  }

  const matches = declaredDimensionNames
    .map(name => maps.dimensions.get(name) || maps.dimensions.get(name.toLowerCase()))
    .filter((dimension): dimension is Dimension => !!dimension)
    .filter(dimension => labels.every(label => findDimensionLabel(dimension, label)));

  if (matches.length === 0) {
    throw new Error(
      `Dimension labels [${labels.join(', ')}] do not belong to any dimension declared on attribute '${attributeName}'`
    );
  }
  if (matches.length > 1) {
    throw new Error(
      `Ambiguous dimension labels [${labels.join(', ')}] for attribute '${attributeName}'`
    );
  }
  return matches[0];
}

function resolveSelectedDimensionLabels(
  selection: DimensionAggregationSelection,
  dimension: Dimension
): string[] {
  switch (selection.kind) {
    case 'all':
      // Copy before sorting — `dimension` is the model's definition node, and
      // expression resolution must not reorder it in place.
      return [...dimension.labels]
        .sort((a, b) => a.position - b.position)
        .map(label => label.label);
    case 'range':
      if (!selection.fromLabel || !selection.toLabel) {
        throw new Error(`Range selection for '${dimension.name}' requires two labels`);
      }
      return labelsInDeclaredRange(dimension, selection.fromLabel, selection.toLabel);
    case 'set':
      if (!selection.labels || selection.labels.length === 0) {
        throw new Error(`Set selection for '${dimension.name}' requires labels`);
      }
      return resolveExplicitLabels(dimension, selection.labels);
    default:
      throw new Error(`Unknown dimension selection kind: ${(selection as any).kind}`);
  }
}

function labelsInDeclaredRange(dimension: Dimension, fromLabel: string, toLabel: string): string[] {
  const from = findDimensionLabel(dimension, fromLabel);
  const to = findDimensionLabel(dimension, toLabel);
  if (!from || !to) {
    const missing = [from ? undefined : fromLabel, to ? undefined : toLabel].filter(Boolean).join(', ');
    throw new Error(`Unknown label(s) [${missing}] for dimension '${dimension.name}'`);
  }
  if (from.position > to.position) {
    throw new Error(
      `Invalid range for dimension '${dimension.name}': '${from.label}' comes after '${to.label}'`
    );
  }

  return dimension.labels
    .filter(label => label.position >= from.position && label.position <= to.position)
    .sort((a, b) => a.position - b.position)
    .map(label => label.label);
}

function resolveExplicitLabels(dimension: Dimension, labels: string[]): string[] {
  const resolved: string[] = [];
  const seen = new Set<string>();

  for (const rawLabel of labels) {
    const label = findDimensionLabel(dimension, rawLabel);
    if (!label) {
      throw new Error(`Unknown label '${rawLabel}' for dimension '${dimension.name}'`);
    }
    const key = label.label.toLowerCase();
    if (seen.has(key)) {
      throw new Error(`Duplicate label '${label.label}' in dimension selection for '${dimension.name}'`);
    }
    seen.add(key);
    resolved.push(label.label);
  }

  return resolved;
}

function resolveFixedAggregationCoordinates(
  selection: DimensionAggregationSelection,
  aggregationDimension: Dimension,
  declaredDimensionNames: string[],
  maps: ResolutionMaps,
  attributeName: string
): DimensionCoordinate[] {
  const fixedLabels = selection.fixedLabels ?? [];
  if (fixedLabels.length === 0) {
    return [];
  }

  const coordinates: DimensionCoordinate[] = [];
  const usedDimensions = new Set<string>();

  for (const rawLabel of fixedLabels) {
    const dimension = resolveFixedLabelDimension(rawLabel, declaredDimensionNames, maps, attributeName);
    if (dimension.name.toLowerCase() === aggregationDimension.name.toLowerCase()) {
      throw new Error(
        `Dimension label '${rawLabel}' fixes aggregation dimension '${aggregationDimension.name}' on '${attributeName}'`
      );
    }
    if (usedDimensions.has(dimension.name.toLowerCase())) {
      throw new Error(`Duplicate fixed dimension '${dimension.name}' in aggregation target '${attributeName}'`);
    }
    const label = findDimensionLabel(dimension, rawLabel);
    if (!label) {
      throw new Error(`Internal error: label '${rawLabel}' not found in dimension '${dimension.name}'`);
    }

    usedDimensions.add(dimension.name.toLowerCase());
    coordinates.push({
      dimension: dimension.name,
      label: label.label,
      sourceStyle: dimension.usageStyle,
      preposition: dimension.preposition
    });
  }

  const dimensionOrder = new Map(declaredDimensionNames.map((name, index) => [name.toLowerCase(), index]));
  coordinates.sort((a, b) =>
    (dimensionOrder.get(a.dimension.toLowerCase()) ?? 999) -
    (dimensionOrder.get(b.dimension.toLowerCase()) ?? 999)
  );

  return coordinates;
}

function resolveFixedLabelDimension(
  rawLabel: string,
  declaredDimensionNames: string[],
  maps: ResolutionMaps,
  attributeName: string
): Dimension {
  const matches = declaredDimensionNames
    .map(name => maps.dimensions.get(name) || maps.dimensions.get(name.toLowerCase()))
    .filter((dimension): dimension is Dimension => !!dimension)
    .filter(dimension => !!findDimensionLabel(dimension, rawLabel));

  if (matches.length === 0) {
    throw new Error(`Unknown fixed dimension label '${rawLabel}' in aggregation target '${attributeName}'`);
  }
  if (matches.length > 1) {
    throw new Error(`Ambiguous fixed dimension label '${rawLabel}' in aggregation target '${attributeName}'`);
  }
  return matches[0];
}

function labelsMentionedBySelection(selection: DimensionAggregationSelection): string[] {
  if (selection.kind === 'range') {
    return [selection.fromLabel, selection.toLabel].filter((label): label is string => !!label);
  }
  if (selection.kind === 'set') {
    return selection.labels ?? [];
  }
  return [];
}

function findDimensionLabel(dimension: Dimension, rawLabel: string): { position: number; label: string } | undefined {
  return dimension.labels.find(label => label.label.toLowerCase() === rawLabel.toLowerCase());
}

function normalizeDimensionName(name: string): string {
  return name
    .toLowerCase()
    .replace(/^(de|het|een)\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function resolveAfrondingExpression(
  expr: AfrondingExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): AfrondingExpression {
  resolveExpressionInternal(expr.expression, context, maps);

  expr.resolved = {
    resolvedType: { type: 'Numeriek' },
    unit: expr.expression.resolved?.unit,
    timeline: expr.expression.resolved?.timeline,
  };

  return expr;
}

function resolveBegrenzingExpression(
  expr: BegrenzingExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): BegrenzingExpression {
  resolveExpressionInternal(expr.expression, context, maps);

  if (expr.minimum) {
    resolveExpressionInternal(expr.minimum, context, maps);
  }
  if (expr.maximum) {
    resolveExpressionInternal(expr.maximum, context, maps);
  }

  // The bounded result is in the bounded expression's unit (like afronding); carry
  // it so a begrenzing feeding an additive op or comparison is still unit-checked.
  // The min/max bound's own unit compatibility (§4) is a separate, deferred check.
  expr.resolved = {
    resolvedType: { type: 'Numeriek' },
    ...(expr.expression.resolved?.unit ? { unit: expr.expression.resolved.unit } : {}),
  };

  return expr;
}

function resolveBegrenzingAfrondingExpression(
  expr: BegrenzingAfrondingExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): BegrenzingAfrondingExpression {
  resolveExpressionInternal(expr.expression, context, maps);

  if (expr.minimum) {
    resolveExpressionInternal(expr.minimum, context, maps);
  }
  if (expr.maximum) {
    resolveExpressionInternal(expr.maximum, context, maps);
  }

  // As resolveBegrenzingExpression: the rounded-and-bounded result keeps the
  // bounded expression's unit so downstream mixing checks still see it.
  expr.resolved = {
    resolvedType: { type: 'Numeriek' },
    ...(expr.expression.resolved?.unit ? { unit: expr.expression.resolved.unit } : {}),
  };

  return expr;
}

function resolveSubselectieExpression(
  expr: SubselectieExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): SubselectieExpression {
  resolveExpressionInternal(expr.collection, context, maps);

  const elementObjectType = resolveCollectionElementObjectType(expr.collection, maps);
  const predicateContext = elementObjectType
    ? {
      ...context,
      currentObjectType: elementObjectType,
      currentVariable: lowerInitial(elementObjectType),
      rootResolution: 'relative-only' as const,
    }
    : context;
  resolveLegacyPredicateExpressions(expr.predicaat, predicateContext, maps);
  resolveUnifiedPredicateExpressions((expr.predicaat as any)?.predicate, predicateContext, maps);
  resolveUnifiedPredicateExpressions(expr.predicate, predicateContext, maps);

  // The result is still a collection of the same element type
  if (expr.collection.resolved?.resolvedType) {
    expr.resolved = {
      resolvedType: expr.collection.resolved.resolvedType,
      hasCollectionNavigation: true,
    };
  }

  return expr;
}

function resolveLegacyPredicateExpressions(
  predicate: any,
  context: ResolutionContext,
  maps: ResolutionMaps
): void {
  if (!predicate) return;

  switch (predicate.type) {
    case 'AttributeComparisonPredicaat':
      resolvePredicateAttribute(predicate, context, maps);
      if (predicate.value) resolveExpressionInternal(predicate.value, context, maps);
      return;
    case 'VergelijkingInPredicaat':
      resolveVergelijkingInPredicaat(predicate, context, maps);
      return;
    case 'GenesteVoorwaardeInPredicaat':
      resolveLegacyPredicateExpressions(predicate.voorwaarde, context, maps);
      return;
    case 'SamengesteldPredicaat':
      predicate.voorwaarden?.forEach((voorwaarde: any) =>
        resolveLegacyPredicateExpressions(voorwaarde, context, maps)
      );
      return;
  }
}

function resolveUnifiedPredicateExpressions(
  predicate: any,
  context: ResolutionContext,
  maps: ResolutionMaps
): void {
  if (!predicate) return;

  switch (predicate.type) {
    case 'SimplePredicate':
      if (predicate.left) resolveExpressionInternal(predicate.left, context, maps);
      if (predicate.right) resolveExpressionInternal(predicate.right, context, maps);
      // "zijn reis is duurzaam": resolve the hop to the related object — and thereby
      // validate the kenmerk on it — so the transpiler reads the resolved relation path.
      if (predicate.navigation) resolveExpressionInternal(predicate.navigation, context, maps);
      return;
    case 'AttributePredicate':
      resolvePredicateAttribute(predicate, context, maps);
      if (predicate.value) resolveExpressionInternal(predicate.value, context, maps);
      return;
    case 'CompoundPredicate':
      predicate.predicates?.forEach((nested: any) =>
        resolveUnifiedPredicateExpressions(nested, context, maps)
      );
      return;
    case 'NotPredicate':
      resolveUnifiedPredicateExpressions(predicate.predicate, context, maps);
      return;
  }
}

function resolvePredicateAttribute(
  predicate: { attribute?: string; location?: any; resolvedAttribute?: ResolvedInfo },
  context: ResolutionContext,
  maps: ResolutionMaps
): void {
  if (!predicate.attribute) {
    return;
  }

  const attributeRef: AttributeReference = {
    type: 'AttributeReference',
    path: predicate.attribute.split('.').map(segment => segment.trim()).filter(Boolean),
    location: predicate.location,
  };
  resolveAttributeReference(attributeRef, context, maps);
  predicate.resolvedAttribute = attributeRef.resolved;
}

function resolveConjunctionExpression(
  expr: ConjunctionExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): ConjunctionExpression {
  for (const value of expr.values) {
    resolveExpressionInternal(value, context, maps);
  }

  expr.resolved = {
    resolvedType: { type: 'Boolean' },
  };

  return expr;
}

function resolveDisjunctionExpression(
  expr: DisjunctionExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): DisjunctionExpression {
  for (const value of expr.values) {
    resolveExpressionInternal(value, context, maps);
  }

  expr.resolved = {
    resolvedType: { type: 'Boolean' },
  };

  return expr;
}

function resolveRegelStatusExpression(
  expr: RegelStatusExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): RegelStatusExpression {
  resolveUnifiedPredicateExpressions((expr as any).predicate, context, maps);

  expr.resolved = {
    resolvedType: { type: 'Boolean' },
  };

  return expr;
}

function resolveFunctionCall(
  expr: FunctionCall,
  context: ResolutionContext,
  maps: ResolutionMaps
): FunctionCall {
  const functionName = expr.functionName.toLowerCase();
  if (isCollectionAggregateFunction(functionName) && expr.arguments.length === 2) {
    return resolveCollectionAggregateFunction(expr, context, maps);
  }

  // Resolve arguments
  for (const arg of expr.arguments) {
    resolveExpressionInternal(arg, context, maps);
  }

  // Type depends on function
  const numericFunctions = [
    'sqrt',
    'abs',
    'aantal',
    'som',
    'som_van',
    'maximum',
    'minimum',
    'maximum_van',
    'minimum_van',
    'maximum_van_values',
    'minimum_van_values',
    'tijdsduur_van',
    'abs_tijdsduur_van',
    'aantal_dagen_in',
    'maand_uit',
    'dag_uit',
    'jaar_uit',
  ];
  const dateFunctions = ['datum_met', 'eerste_paasdag_van'];
  const firstArgumentFunctions = ['eerste_van', 'laatste_van'];

  if (numericFunctions.includes(functionName)) {
    // som/min/max carry the aggregated members' unit (§4.10/§4.12/§4.13) and
    // reject incompatible members; the other numeric functions (aantal — a
    // dimensionless count — sqrt, tijdsduur, ...) produce a bare Numeriek.
    const aggregators = ['som', 'som_van', 'maximum', 'maximum_van', 'minimum', 'minimum_van'];
    const aggUnit = aggregators.includes(functionName)
      ? aggregateResultUnit(maps.units, expr.arguments.map(a => a.resolved?.unit))
      : undefined;
    expr.resolved = {
      resolvedType: { type: 'Numeriek' },
      ...(aggUnit !== undefined ? { unit: aggUnit } : {}),
    };
  } else if (dateFunctions.includes(functionName)) {
    expr.resolved = {
      resolvedType: { type: 'Datum' },
    };
  } else if (firstArgumentFunctions.includes(functionName)) {
    expr.resolved = {
      resolvedType: expr.arguments[0]?.resolved?.resolvedType,
      unit: expr.arguments[0]?.resolved?.unit,
      timeline: expr.arguments[0]?.resolved?.timeline,
    };
  }

  return expr;
}

function isCollectionAggregateFunction(functionName: string): boolean {
  return functionName === 'som_van' ||
    functionName === 'maximum_van' ||
    functionName === 'minimum_van' ||
    functionName === 'eerste_van' ||
    functionName === 'laatste_van';
}

function resolveCollectionAggregateFunction(
  expr: FunctionCall,
  context: ResolutionContext,
  maps: ResolutionMaps
): FunctionCall {
  const functionName = expr.functionName.toLowerCase();
  const selector = expr.arguments[0];
  const collection = expr.arguments[1];

  resolveExpressionInternal(collection, context, maps);

  const elementObjectType = resolveCollectionElementObjectType(collection, maps);
  if (elementObjectType) {
    resolveExpressionInternal(selector, {
      ...context,
      currentObjectType: elementObjectType,
      currentVariable: lowerInitial(elementObjectType),
      rootResolution: 'relative-only',
    }, maps);
  } else {
    resolveExpressionInternal(selector, context, maps);
  }

  expr.resolved = {
    resolvedType: isSelectorTypedCollectionAggregate(functionName)
      ? selector.resolved?.resolvedType
      : { type: 'Numeriek' },
    // The aggregated field is the selector, so the result is in the selector's
    // unit for eerste/laatste AND for som/min/max (sum of km values is km). Carry
    // it so a unit-bearing aggregation feeding a later operation is unit-checked.
    unit: selector.resolved?.unit,
    timeline: isSelectorTypedCollectionAggregate(functionName) ? selector.resolved?.timeline : undefined,
  };

  return expr;
}

function isSelectorTypedCollectionAggregate(functionName: string): boolean {
  return functionName === 'eerste_van' || functionName === 'laatste_van';
}

function resolveCollectionElementObjectType(expr: Expression, maps: ResolutionMaps): string | undefined {
  const resolvedType = expr.resolved?.resolvedType as any;
  if (resolvedType?.type === 'ObjectType') {
    return resolvedType.name;
  }
  if (resolvedType?.type === 'Lijst' && resolvedType.elementType?.type === 'ObjectType') {
    return resolvedType.elementType.name;
  }
  const collectionSegment = expr.resolved?.resolvedPath
    ?.slice()
    .reverse()
    .find(segment => segment.cardinality === 'N' && maps.objectTypes.has(segment.targetType));
  if (collectionSegment) {
    return collectionSegment.targetType;
  }
  return undefined;
}

function lowerInitial(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function resolvePeriodDefinition(
  expr: PeriodDefinition,
  context: ResolutionContext,
  maps: ResolutionMaps
): PeriodDefinition {
  if (expr.startDate) {
    resolveExpressionInternal(expr.startDate, context, maps);
  }
  if (expr.endDate) {
    resolveExpressionInternal(expr.endDate, context, maps);
  }

  expr.resolved = {
    resolvedType: { type: 'Period' },
  };

  return expr;
}

function resolveTimelineExpression(
  expr: TimelineExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): TimelineExpression {
  resolveExpressionInternal(expr.target, context, maps);

  if (expr.period) {
    resolvePeriodDefinition(expr.period, context, maps);
  }
  if (expr.condition) {
    resolveExpressionInternal(expr.condition, context, maps);
  }

  const numericOperations = new Set([
    'aantal_dagen',
    'naar_verhouding',
    'tijdsevenredig_deel_per_maand',
    'tijdsevenredig_deel_per_jaar',
  ]);

  expr.resolved = {
    resolvedType: numericOperations.has(expr.operation)
      ? { type: 'Numeriek' }
      : expr.target.resolved?.resolvedType ?? { type: 'Timeline' },
    unit: expr.target.resolved?.unit,
    timeline: expr.target.resolved?.timeline,
  };

  return expr;
}

/**
 * Resolve a SamengesteldeVoorwaarde (compound condition).
 *
 * The compound itself has Boolean type. Each inner voorwaarde is an
 * Expression that must be resolved in the same context — without this
 * recursion, AttributeReferences inside compound conditions never receive
 * `resolved` metadata and downstream consumers (transpilers) cannot
 * disambiguate possessive `self` references or detect date types.
 */
function resolveSamengesteldeVoorwaarde(
  expr: SamengesteldeVoorwaarde,
  context: ResolutionContext,
  maps: ResolutionMaps
): SamengesteldeVoorwaarde {
  for (const voorwaarde of expr.voorwaarden) {
    resolveExpressionInternal(voorwaarde, context, maps);
  }
  expr.resolved = {
    resolvedType: { type: 'Boolean' },
  };
  return expr;
}

/**
 * Resolve a VergelijkingInPredicaat criterion (a §5.6/§8.3 bullet). Its operands are resolved
 * and the node is typed as the Boolean a predicate evaluates to. A kenmerk/rol check written
 * with an article ("hij is een passagier jonger dan 18 jaar") keeps that article in the captured
 * name; it is stripped so the name matches the declared kenmerk or rol — both for resolution and
 * for the field/relation the transpiler then generates.
 */
function resolveVergelijkingInPredicaat(
  node: any,
  context: ResolutionContext,
  maps: ResolutionMaps
): void {
  if (node.onderwerp) resolveExpressionInternal(node.onderwerp, context, maps);
  if (node.attribuut) resolveExpressionInternal(node.attribuut, context, maps);
  if (node.waarde) resolveExpressionInternal(node.waarde, context, maps);
  if (typeof node.kenmerkNaam === 'string') {
    node.kenmerkNaam = node.kenmerkNaam.replace(/^(een|de|het)\s+/i, '');
  }
  node.resolved = { resolvedType: { type: 'Boolean' } };
}
