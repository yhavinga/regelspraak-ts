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
  SubselectieExpression,
  NumberLiteral,
  StringLiteral,
  SelfReference,
  TekstreeksExpression,
  BooleanLiteral,
  FunctionCall,
  SamengesteldeVoorwaarde,
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
import { Dimension, DimensionedAttributeReference, DimensionCoordinate } from '../ast/dimensions';
import { ResolvedInfo, ResolvedSymbol, ResolvedPathSegment, SymbolKind, TimelineInfo } from './types';
import { KenmerkEquivalenceRegistry } from '../kenmerk-equivalence-registry';

/**
 * Scope frame for tracking variable bindings
 */
export interface ScopeFrame {
  /** Variable name → its type information */
  variables: Map<string, { name: string; objectType: string }>;
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
}

/**
 * Lookup maps for fast resolution
 */
interface ResolutionMaps {
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
  /** dimension name → Dimension definition */
  dimensions: Map<string, Dimension>;
  /** label → dimension name (for reverse lookup) */
  labelToDimension: Map<string, string>;
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
  const dimensions = new Map<string, Dimension>();
  const labelToDimension = new Map<string, string>();

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

  return {
    objectTypes,
    parameters,
    feitTypes,
    attributes,
    kenmerken,
    kenmerkRegistries,
    domains,
    dimensions,
    labelToDimension,
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

/**
 * Resolve all expressions in an expression tree.
 * Mutates expr.resolved in place.
 */
export function resolveExpression(
  expr: Expression,
  context: ResolutionContext
): Expression {
  const maps = buildMaps(context.model);

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

    case 'SubselectieExpression':
      return resolveSubselectieExpression(expr as SubselectieExpression, context, maps);

    case 'FunctionCall':
      return resolveFunctionCall(expr as FunctionCall, context, maps);

    case 'SamengesteldeVoorwaarde':
      return resolveSamengesteldeVoorwaarde(expr as SamengesteldeVoorwaarde, context, maps);

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
      const objectType = maps.objectTypes.get(scopeVar.objectType);
      expr.resolved = {
        resolvedSymbol: {
          kind: 'variable',
          name: scopeVar.name,
          dataType: objectType ? { type: 'ObjectType', name: objectType.name } as any : undefined,
        },
        resolvedType: objectType ? { type: 'ObjectType', name: objectType.name } as any : undefined,
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

  for (const [, feitType] of feitTypes) {
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

  for (const [, feitType] of feitTypes) {
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
): { name: string; objectType: string } | undefined {
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
  if (scopeVariable) {
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

  if (kenmerk) {
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
    const rootCandidates = resolveRootCandidates(path[0], context, maps);
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

    const segmentCandidates = resolveSegmentCandidates(segment, currentType, maps);
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

  // Clean the base attribute path by removing dimension labels from path segments
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

    // Update the path for resolution
    baseAttr.path = cleanedPath;
  }

  // Now resolve the cleaned base attribute
  if (expr.baseAttribute?.type === 'AttributeReference') {
    resolveAttributeReference(expr.baseAttribute as AttributeReference, context, maps);
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

function resolveBinaryExpression(
  expr: BinaryExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): BinaryExpression {
  // Resolve operands
  resolveExpressionInternal(expr.left, context, maps);
  resolveExpressionInternal(expr.right, context, maps);

  // Determine result type based on operator
  const comparisonOps = ['==', '!=', '>', '<', '>=', '<='];
  const logicalOps = ['&&', '||'];
  const arithmeticOps = ['+', '-', '*', '/', '^'];

  // Combine timeline info from operands
  const combinedTimeline = combineTimelineInfo(
    expr.left.resolved?.timeline,
    expr.right.resolved?.timeline
  );

  if (comparisonOps.includes(expr.operator) || logicalOps.includes(expr.operator)) {
    // Comparisons produce Boolean, but may still be time-dependent
    // if operands are time-dependent (result is Boolean timeline)
    expr.resolved = {
      resolvedType: { type: 'Boolean' },
      timeline: combinedTimeline,
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
      expr.resolved = {
        resolvedType: { type: 'Numeriek' },
        timeline: combinedTimeline,
      };
    }
  }

  return expr;
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
    expr.resolved = {
      resolvedType: { type: 'Numeriek' },
      timeline: operandTimeline,
    };
  } else if (expr.operator === '!' || expr.operator === 'niet') {
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

  // Aggregation result type depends on aggregationType
  switch (expr.aggregationType) {
    case 'som':
    case 'maximum':
    case 'minimum':
      expr.resolved = {
        resolvedType: { type: 'Numeriek' },
      };
      break;
    case 'aantal':
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

  expr.resolved = {
    resolvedType: { type: 'Numeriek' },
  };

  return expr;
}

function resolveSubselectieExpression(
  expr: SubselectieExpression,
  context: ResolutionContext,
  maps: ResolutionMaps
): SubselectieExpression {
  resolveExpressionInternal(expr.collection, context, maps);

  // The result is still a collection of the same element type
  if (expr.collection.resolved?.resolvedType) {
    expr.resolved = {
      resolvedType: expr.collection.resolved.resolvedType,
      hasCollectionNavigation: true,
    };
  }

  return expr;
}

function resolveFunctionCall(
  expr: FunctionCall,
  context: ResolutionContext,
  maps: ResolutionMaps
): FunctionCall {
  // Resolve arguments
  for (const arg of expr.arguments) {
    resolveExpressionInternal(arg, context, maps);
  }

  // Type depends on function
  const numericFunctions = ['sqrt', 'abs', 'som', 'aantal', 'maximum', 'minimum'];
  const dateFunctions = ['datum_met', 'eerste_paasdag_van'];

  if (numericFunctions.includes(expr.functionName.toLowerCase())) {
    expr.resolved = {
      resolvedType: { type: 'Numeriek' },
    };
  } else if (dateFunctions.includes(expr.functionName.toLowerCase())) {
    expr.resolved = {
      resolvedType: { type: 'Datum' },
    };
  }

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
