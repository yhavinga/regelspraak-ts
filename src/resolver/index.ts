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
} from './types';

export type {
  ResolutionContext,
  ScopeFrame,
} from './expression-resolver';

export {
  createResolutionContext,
  pushScope,
  resolveExpression,
} from './expression-resolver';
