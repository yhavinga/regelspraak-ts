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
  BooleanLiteral,
  FunctionCall,
  SamengesteldeVoorwaarde,
} from '../ast/expressions';
import {
  ObjectTypeDefinition,
  AttributeSpecification,
  KenmerkSpecification,
  DataType,
  DomainReference,
  TimelineGranularity,
} from '../ast/object-types';
import { ParameterDefinition } from '../ast/parameters';
import { DomainModel } from '../ast/domain-model';
import { FeitType, Rol } from '../ast/feittype';
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
}

/**
 * Possessive markers in Dutch RegelSpraak.
 * 'self' is the canonical placeholder the parser emits for any possessive
 * pronoun ("zijn", "haar", "hun") in path form.
 */
const POSSESSIVE_PRONOUNS = ['zijn', 'haar', 'hun', 'self'];

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

  for (const ft of model.feitTypes || []) {
    feitTypes.set(ft.naam, ft);
    feitTypes.set(ft.naam.toLowerCase(), ft);
  }

  return { objectTypes, parameters, feitTypes, attributes, kenmerken, kenmerkRegistries };
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

    case 'BooleanLiteral':
      return resolveBooleanLiteral(expr as BooleanLiteral);

    case 'VariableReference':
      return resolveVariableReference(expr as VariableReference, context, maps);

    case 'ParameterReference':
      return resolveParameterReference(expr as ParameterReference, context, maps);

    case 'AttributeReference':
      return resolveAttributeReference(expr as AttributeReference, context, maps);

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

function resolveBooleanLiteral(expr: BooleanLiteral): BooleanLiteral {
  expr.resolved = {
    resolvedType: { type: 'Boolean' },
  };
  return expr;
}

// ============================================================================
// Reference Resolvers
// ============================================================================

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
    expr.resolved = {
      resolvedSymbol: {
        kind: 'parameter',
        name: param.name,
        dataType: param.dataType,
      },
      resolvedType: param.dataType,
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
    const resolved: ResolvedInfo = {
      resolvedSymbol: {
        kind: 'parameter',
        name: param.name,
        dataType: param.dataType,
      },
      resolvedType: param.dataType,
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
function resolveFeitTypeNavigation(
  segment: string,
  sourceType: string,
  feitTypes: Map<string, FeitType>,
  objectTypes: Map<string, ObjectTypeDefinition>
): ResolvedPathSegment | null {
  const segmentLower = segment.toLowerCase();
  const sourceTypeLower = sourceType.toLowerCase();

  // Search all FeitTypes for a matching navigation
  for (const [, feitType] of feitTypes) {
    // Find which roles involve sourceType
    const sourceRoles = feitType.rollen.filter(
      (r) => r.objectType?.toLowerCase() === sourceTypeLower
    );

    if (sourceRoles.length === 0) {
      continue; // This FeitType doesn't involve our sourceType
    }

    // Find a role that matches the segment name (this is the navigation target)
    // Check both singular (naam) and plural (meervoud) forms
    for (const targetRole of feitType.rollen) {
      if (!targetRole.objectType) continue;

      const matchesSingular = targetRole.naam.toLowerCase() === segmentLower;
      const matchesPlural = targetRole.meervoud?.toLowerCase() === segmentLower;

      if (matchesSingular || matchesPlural) {
        // Verify the target objectType exists
        const targetObjectType =
          objectTypes.get(targetRole.objectType) ||
          objectTypes.get(targetRole.objectType.toLowerCase());

        if (targetObjectType) {
          // Determine cardinality: plural match = N, singular match = 1
          const cardinality: '1' | 'N' = matchesPlural ? 'N' : '1';

          return {
            sourceName: segment,
            resolvedName: matchesPlural ? (targetRole.meervoud || targetRole.naam) : targetRole.naam,
            kind: 'feittype',
            sourceType: sourceType,
            targetType: targetObjectType.name,
            cardinality,
          };
        }
      }
    }
  }

  return null;
}

function resolveAttributeReference(
  expr: AttributeReference,
  context: ResolutionContext,
  maps: ResolutionMaps
): AttributeReference {
  // Normalize path: handle compound possessives like "zijn reis" → ["self", "reis"]
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

  // Check if first segment is a possessive pronoun
  const firstSegment = path[0].toLowerCase();
  const isPossessive = POSSESSIVE_PRONOUNS.includes(firstSegment);

  if (isPossessive) {
    if (context.currentVariable && context.currentObjectType) {
      possessiveOwner = context.currentVariable;
      resolvedPath.push({
        sourceName: path[0],
        resolvedName: context.currentVariable,
        kind: 'possessive',
        sourceType: 'context',
        targetType: context.currentObjectType,
        cardinality: '1',
      });
      currentType = context.currentObjectType;
    }
  } else {
    // First segment might be an object type or variable
    const objectType = maps.objectTypes.get(path[0]) || maps.objectTypes.get(path[0].toLowerCase());
    if (objectType) {
      currentType = objectType.name;
      resolvedPath.push({
        sourceName: path[0],
        resolvedName: objectType.name,
        kind: 'variable',
        sourceType: 'context',
        targetType: objectType.name,
        cardinality: '1',
      });
    } else {
      // Check scope for variable
      for (let i = context.scopeStack.length - 1; i >= 0; i--) {
        const frame = context.scopeStack[i];
        const scopeVar = frame.variables.get(path[0]) || frame.variables.get(path[0].toLowerCase());
        if (scopeVar) {
          currentType = scopeVar.objectType;
          resolvedPath.push({
            sourceName: path[0],
            resolvedName: scopeVar.name,
            kind: 'variable',
            sourceType: 'context',
            targetType: scopeVar.objectType,
            cardinality: '1',
          });
          break;
        }
      }
    }
  }

  // Resolve remaining path segments as attributes
  const startIndex = isPossessive ? 1 : (resolvedPath.length > 0 ? 1 : 0);

  for (let i = startIndex; i < path.length; i++) {
    const segment = path[i];
    const segmentLower = segment.toLowerCase();

    if (!currentType) {
      // Can't resolve further without knowing the type
      break;
    }

    // Look up attribute in current type
    const attrMap = maps.attributes.get(currentType) || maps.attributes.get(currentType.toLowerCase());
    const attr = attrMap?.get(segment) || attrMap?.get(segmentLower);

    if (attr) {
      // Determine target type
      let targetType: string;
      let cardinality: '1' | 'N' = '1';

      if ('domain' in attr.dataType) {
        targetType = attr.dataType.domain;
      } else if (attr.dataType.type === 'Lijst') {
        cardinality = 'N';
        hasCollectionNavigation = true;
        targetType = attr.dataType.specification || 'unknown';
      } else {
        targetType = attr.dataType.type;
      }

      resolvedPath.push({
        sourceName: segment,
        resolvedName: attr.name,
        kind: 'attribute',
        sourceType: currentType,
        targetType,
        cardinality,
      });

      // Capture unit from this attribute. If it's not the terminal segment,
      // it'll be overwritten or cleared by subsequent navigation.
      terminalUnit = attr.unit;

      // Capture timeline info from this attribute
      if (attr.timelineGranularity) {
        terminalTimelineInfo = {
          granularity: attr.timelineGranularity,
          source: 'attribute',
        };
      } else {
        terminalTimelineInfo = undefined;
      }

      // Update current type for next segment (if it's an object type)
      const nextObjectType = maps.objectTypes.get(targetType) || maps.objectTypes.get(targetType.toLowerCase());
      currentType = nextObjectType?.name;
    } else {
      // Check if it's a kenmerk (using equivalence registry for variant matching)
      const kenmerkMap = maps.kenmerken.get(currentType) || maps.kenmerken.get(currentType.toLowerCase());
      const registry = maps.kenmerkRegistries.get(currentType) || maps.kenmerkRegistries.get(currentType.toLowerCase());

      // First try direct lookup
      let kenmerk = kenmerkMap?.get(segment) || kenmerkMap?.get(segmentLower);

      // If not found, use registry to resolve variant (e.g., "is minderjarig" → "minderjarig")
      if (!kenmerk && registry && kenmerkMap) {
        const canonicalName = registry.getCanonicalLabel(segment);
        kenmerk = kenmerkMap.get(canonicalName) || kenmerkMap.get(canonicalName.toLowerCase());
      }

      if (kenmerk) {
        resolvedPath.push({
          sourceName: segment,
          resolvedName: kenmerk.name,
          kind: 'attribute', // kenmerken are treated as boolean attributes
          sourceType: currentType,
          targetType: 'Boolean',
          cardinality: '1',
        });

        // Capture timeline info from kenmerk if present
        if (kenmerk.timelineGranularity) {
          terminalTimelineInfo = {
            granularity: kenmerk.timelineGranularity,
            source: 'kenmerk',
          };
        } else {
          terminalTimelineInfo = undefined;
        }

        currentType = undefined; // Boolean is a leaf type
      } else {
        // Try FeitType navigation - check if segment matches a role name
        // that navigates from currentType to another objectType
        const feitTypeNavigation = resolveFeitTypeNavigation(
          segment,
          currentType,
          maps.feitTypes,
          maps.objectTypes
        );

        if (feitTypeNavigation) {
          resolvedPath.push(feitTypeNavigation);
          currentType = feitTypeNavigation.targetType;
          if (feitTypeNavigation.cardinality === 'N') {
            hasCollectionNavigation = true;
          }
        } else {
          // Could not resolve - unknown segment
          break;
        }
      }
    }
  }

  // Set resolved info
  if (resolvedPath.length > 0) {
    const lastSegment = resolvedPath[resolvedPath.length - 1];
    const finalType = lastSegment.targetType;

    // Determine the resolved type
    let resolvedType: DataType | DomainReference | { type: 'ObjectType'; name: string } | undefined;
    const finalObjectType = maps.objectTypes.get(finalType) || maps.objectTypes.get(finalType?.toLowerCase() || '');

    if (finalObjectType) {
      resolvedType = { type: 'ObjectType', name: finalObjectType.name } as any;
    } else {
      // It's a primitive type
      switch (finalType) {
        case 'Numeriek':
        case 'Tekst':
        case 'Boolean':
        case 'Datum':
        case 'DatumTijd':
          resolvedType = { type: finalType } as DataType;
          break;
        default:
          // Might be a domain reference
          resolvedType = { type: 'DomainReference', domain: finalType } as DomainReference;
      }
    }

    expr.resolved = {
      resolvedPath,
      resolvedType,
      possessiveOwner,
      hasCollectionNavigation,
      unit: terminalUnit,
      timeline: terminalTimelineInfo,
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
  const arithmeticOps = ['+', '-', '*', '/'];

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

    if ((expr.operator === '+' || expr.operator === '-') &&
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
