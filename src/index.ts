// Main entry point
export * from './interfaces';
export { Engine } from './engine';
export { Context } from './context';
export { AntlrParser } from './parser';
export { SemanticAnalyzer } from './semantic-analyzer';
export * from './ast';

// Unified predicate system
export * from './predicates/predicate-types';
export { PredicateEvaluator } from './predicates/predicate-evaluator';