import { CharStream, CommonTokenStream } from 'antlr4';
import RegelSpraakLexer from './_generated/antlr/RegelSpraakLexer';
import RegelSpraakParser from './_generated/antlr/RegelSpraakParser';
import { RegelSpraakVisitorImpl } from './_visitors/regelspraak-visitor-impl';
import { Expression } from './ast/expressions';
import { Rule } from './ast/rules';
import { DecisionTable } from './ast/decision-tables';
import { ObjectTypeDefinition } from './ast/object-types';
import { ParameterDefinition } from './ast/parameters';
import { DomainModel } from './ast/domain-model';
import { CollectingErrorListener } from './parser-error-listener';
import { ModelResolutionOptions, ModelResolutionResult, resolveModel } from './resolver';

/**
 * Parser service using ANTLR4-generated parser
 */
export interface ParseResult {
  model: DomainModel;
  locationMap?: WeakMap<any, any>; // Deprecated, kept for compatibility
}

export class AntlrParser {

  /**
   * Unary function keywords that take a single argument. Used only to turn a
   * parse failure into a function-specific diagnostic; the function name is
   * read from the token stream (the grammar's view of the input) rather than
   * from the raw source text.
   */
  private static readonly UNARY_FUNCTION_KEYWORDS: ReadonlyArray<{ type: number; name: string }> = [
    { type: RegelSpraakParser.DE_WORTEL_VAN, name: 'de wortel van' },
    { type: RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN, name: 'de absolute waarde van' },
  ];

  /**
   * Build a lexer/parser for `source` with a single error listener attached to
   * BOTH the lexer and the parser.
   *
   * The parser boundary is a conservation law: a lexical token-recognition
   * error must fail here, not silently vanish and let a later phase operate on
   * a partial token stream. Every entry point constructs its parser through
   * this method so that contract holds uniformly and is defined in exactly one
   * place.
   */
  private createParser(source: string): {
    parser: RegelSpraakParser;
    errorListener: CollectingErrorListener;
  } {
    const errorListener = new CollectingErrorListener();

    const chars = new CharStream(source);
    const lexer = new RegelSpraakLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);

    const tokens = new CommonTokenStream(lexer);
    const parser = new RegelSpraakParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    return { parser, errorListener };
  }

  /**
   * If the token stream contains a unary function keyword, return its display
   * name. Lets a failed expression parse report which function was malformed
   * without inspecting the raw source string.
   */
  private findUnaryFunctionKeyword(parser: RegelSpraakParser): string | undefined {
    const stream = parser.getTokenStream() as CommonTokenStream;
    stream.fill();
    for (const token of stream.tokens) {
      const match = AntlrParser.UNARY_FUNCTION_KEYWORDS.find(fn => fn.type === token.type);
      if (match) {
        return match.name;
      }
    }
    return undefined;
  }

  /**
   * Parse RegelSpraak source code and return array of definitions (backward compatibility)
   */
  parse(source: string): any {
    const model = this.parseModel(source);

    // Convert DomainModel back to array for backward compatibility
    const results = [];

    // Add object types
    for (const objectType of model.objectTypes) {
      results.push(objectType);
    }

    // Add parameters
    for (const param of model.parameters) {
      results.push(param);
    }

    // Add dimensions
    for (const dimension of model.dimensions) {
      results.push(dimension);
    }

    // Add day type declarations
    for (const dagsoort of model.dagsoorten || []) {
      results.push(dagsoort);
    }

    // Add rules
    for (const regel of model.regels) {
      results.push(regel);
    }

    // Add regel groups
    for (const regelGroep of model.regelGroepen) {
      results.push(regelGroep);
    }

    // Add decision tables
    for (const beslistabel of model.beslistabels) {
      results.push(beslistabel);
    }

    // Add domains
    for (const domain of model.domains) {
      results.push(domain);
    }

    // Add feit types
    for (const feitType of model.feitTypes) {
      results.push(feitType);
    }

    // Add unit systems
    for (const unitSystem of model.unitSystems) {
      results.push(unitSystem);
    }

    return results;
  }

  /**
   * Parse RegelSpraak source code and return both model and location map
   */
  parseWithLocations(source: string): ParseResult {
    const { parser, errorListener } = this.createParser(source);

    // Parse starting from the root rule
    const tree = parser.regelSpraakDocument();

    // Check for parse errors
    const errors = errorListener.getErrors();
    if (errors.length > 0) {
      throw new Error(errors[0]);
    }

    // Visit the tree to build our AST
    const visitor = new RegelSpraakVisitorImpl();
    const model = visitor.visit(tree);
    // LocationMap removed - locations are now stored directly on nodes
    return { model, locationMap: new WeakMap() }; // Empty map for compatibility
  }

  /**
   * Parse RegelSpraak source code and return a DomainModel
   */
  parseModel(source: string): DomainModel {
    const { parser, errorListener } = this.createParser(source);

    // Parse starting from the root rule
    const tree = parser.regelSpraakDocument();

    // Check for parse errors
    const errors = errorListener.getErrors();
    if (errors.length > 0) {
      throw new Error(errors[0]);
    }

    // Visit the tree to build our AST
    const visitor = new RegelSpraakVisitorImpl();
    return visitor.visit(tree);
  }

  /**
   * Parse and resolve a complete RegelSpraak model for static consumers.
   * `parseModel` remains syntax-only; callers that need transpiler-grade
   * metadata opt into this method.
   */
  parseResolvedModel(
    source: string,
    options: ModelResolutionOptions = {}
  ): ModelResolutionResult {
    const model = this.parseModel(source);
    return resolveModel(model, options);
  }

  /**
   * Parse just an expression
   */
  parseExpression(source: string): Expression {
    try {
      const { parser, errorListener } = this.createParser(source);

      // Parse just an expression
      const tree = parser.expressie();

      // Check for parse errors
      const errors = errorListener.getErrors();
      if (errors.length > 0) {
        const firstError = errors[0];
        // Map a missing-argument parse failure to a function-specific message,
        // identifying the function from the token stream rather than the source.
        if (firstError.includes('no viable alternative')) {
          const fn = this.findUnaryFunctionKeyword(parser);
          if (fn) {
            throw new Error(`Missing argument for "${fn}"`);
          }
        }
        throw new Error(firstError);
      }

      // Check if there's unparsed input (multiple arguments)
      const currentToken = parser.getCurrentToken();
      if (currentToken && currentToken.type !== RegelSpraakParser.EOF) {
        if (currentToken.text === ',') {
          const fn = this.findUnaryFunctionKeyword(parser);
          if (fn) {
            throw new Error(`Multiple arguments not supported for "${fn}"`);
          }
        }
        // Generic error for other cases
        throw new Error(`Unexpected input after expression: ${currentToken.text}`);
      }

      if (!tree) {
        throw new Error('Failed to parse expression: parser returned null');
      }

      const visitor = new RegelSpraakVisitorImpl();
      return visitor.visit(tree);
    } catch (error) {
      // Don't add "Parse error: " prefix for specific error messages
      if (error instanceof Error &&
        (error.message === 'Expected "geldig" keyword' ||
          error.message.includes('Expected gelijkstelling pattern') ||
          error.message.includes('Missing argument for') ||
          error.message.includes('Multiple arguments not supported'))) {
        throw error;
      }
      throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Parse a rule definition
   */
  parseRule(source: string): Rule {
    try {
      const { parser, errorListener } = this.createParser(source);

      // Parse a regel (rule definition)
      const tree = parser.regel();

      // Check for parse errors
      const errors = errorListener.getErrors();
      if (errors.length > 0) {
        const firstError = errors[0];
        // Map ANTLR errors to user-friendly messages
        if (firstError.includes("expecting 'geldig'") ||
          (firstError.includes("no viable alternative") && !source.includes('geldig'))) {
          throw new Error('Expected "geldig" keyword');
        }
        if (firstError.includes("mismatched input 'is'") ||
          firstError.includes("expecting 'wordt")) {
          throw new Error('Expected gelijkstelling pattern (moet berekend worden als)');
        }
        throw new Error(firstError);
      }

      if (!tree) {
        throw new Error('Failed to parse rule: parser returned null');
      }

      const visitor = new RegelSpraakVisitorImpl();
      return visitor.visit(tree);
    } catch (error) {
      // Don't add "Parse error: " prefix for specific error messages
      if (error instanceof Error &&
        (error.message === 'Expected "geldig" keyword' ||
          error.message.includes('Expected gelijkstelling pattern'))) {
        throw error;
      }
      throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Parse an object type definition
   */
  parseObjectType(source: string): ObjectTypeDefinition {
    try {
      const { parser, errorListener } = this.createParser(source);

      // Parse an objectTypeDefinition
      const tree = parser.objectTypeDefinition();

      // Check for parse errors
      const errors = errorListener.getErrors();
      if (errors.length > 0) {
        throw new Error(errors[0]);
      }

      if (!tree) {
        throw new Error('Failed to parse object type: parser returned null');
      }

      const visitor = new RegelSpraakVisitorImpl();
      return visitor.visit(tree);
    } catch (error) {
      throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Parse a parameter definition
   */
  parseParameter(source: string): ParameterDefinition {
    try {
      const { parser, errorListener } = this.createParser(source);

      // Parse a parameterDefinition
      const tree = parser.parameterDefinition();

      // Check for parse errors
      const errors = errorListener.getErrors();
      if (errors.length > 0) {
        throw new Error(errors[0]);
      }

      if (!tree) {
        throw new Error('Failed to parse parameter: parser returned null');
      }

      const visitor = new RegelSpraakVisitorImpl();
      return visitor.visit(tree);
    } catch (error) {
      throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Parse a decision table (beslistabel)
   */
  parseDecisionTable(source: string): DecisionTable {
    try {
      const { parser, errorListener } = this.createParser(source);

      // Parse a beslistabel
      const tree = parser.beslistabel();

      // Check for parse errors
      const errors = errorListener.getErrors();
      if (errors.length > 0) {
        throw new Error(errors[0]);
      }

      if (!tree) {
        throw new Error('Failed to parse decision table: parser returned null');
      }

      const visitor = new RegelSpraakVisitorImpl();
      return visitor.visit(tree);
    } catch (error) {
      throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}