/**
 * Expression Resolution Module
 *
 * Provides static resolution of references in RegelSpraak expression trees.
 * After resolution, expressions have a `resolved` field with type information,
 * symbol bindings, and navigation paths.
 */

export type {
  ResolvedInfo,
  ResolvedSymbol,
  ResolvedPathSegment,
  SymbolKind,
  TimelineInfo,
} from './types';

export type {
  ResolutionContext,
  ResolutionMaps,
  ResolvedVariable,
  ScopeFrame,
} from './expression-resolver';

export {
  createResolutionMaps,
  createResolutionContext,
  pushScope,
  resolveExpression,
  resolveExpressionWithMaps,
} from './expression-resolver';

export type {
  ModelResolutionDiagnostic,
  ModelResolutionOptions,
  ModelResolutionResult,
} from './model-resolver';

export {
  ModelResolutionError,
  resolveModel,
} from './model-resolver';
