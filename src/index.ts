// Main entry point
export * from './interfaces';
export { Engine } from './engine';
export { Context } from './context';
export type { StructuredTraceEntry } from './context';
export { AntlrParser } from './parser';
export { SemanticAnalyzer } from './semantic-analyzer';
export * from './ast';

// Unified predicate system
export * from './predicates/predicate-types';
export { PredicateEvaluator } from './predicates/predicate-evaluator';

// Utility functions for extracting fired rules from execution trace
export { extractFiredRules, extractFiredRulesWithDetails } from './utils/fired-rules';
export type { FiredRuleInfo } from './utils/fired-rules';