import { RuntimeContext } from './runtime';
import { ExecutionResult } from './result';

export interface EngineExecutionOptions {
  strict?: boolean;
}

/**
 * Main engine interface
 */
export interface IEngine {
  // Parse and validate
  parse(source: string): ParseResult;
  
  // Execute parsed program
  execute(program: any, context?: RuntimeContext, options?: EngineExecutionOptions): ExecutionResult;
  
  // Convenience method: parse and execute
  run(source: string, context?: RuntimeContext, options?: EngineExecutionOptions): ExecutionResult;

  executeStrict?(program: any, context?: RuntimeContext): ExecutionResult;

  runStrict?(source: string, context?: RuntimeContext): ExecutionResult;
}

export interface ParseResult {
  success: boolean;
  ast?: any;
  errors?: ParseError[];
}

export interface ParseError {
  line: number;
  column: number;
  message: string;
}