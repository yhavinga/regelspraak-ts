import { AntlrParser } from '../../src/parser';
import { ParseError } from '../../src/parser-error-listener';

describe('ANTLR Parser Integration', () => {
  let parser: AntlrParser;

  beforeEach(() => {
    parser = new AntlrParser();
  });

  describe('Expression Parsing', () => {
    test('should parse number literal', () => {
      const expr = parser.parseExpression('42');
      expect(expr).toMatchObject({
        type: 'NumberLiteral',
        value: 42
      });
    });

    test('should parse simple addition', () => {
      const expr = parser.parseExpression('10 plus 20');
      expect(expr).toMatchObject({
        type: 'BinaryExpression',
        operator: '+',
        left: {
          type: 'NumberLiteral',
          value: 10
        },
        right: {
          type: 'NumberLiteral',
          value: 20
        }
      });
    });

    test('should parse variable reference', () => {
      const expr = parser.parseExpression('x');
      expect(expr).toMatchObject({
        type: 'VariableReference',
        variableName: 'x'
      });
    });

    test('should parse complex expression', () => {
      const expr = parser.parseExpression('x plus 10 maal 2');
      expect(expr).toMatchObject({
        type: 'BinaryExpression',
        operator: '+',
        left: {
          type: 'VariableReference',
          variableName: 'x'
        },
        right: {
          type: 'BinaryExpression',
          operator: '*',
          left: {
            type: 'NumberLiteral',
            value: 10
          },
          right: {
            type: 'NumberLiteral',
            value: 2
          }
        }
      });
    });
  });

  describe('Structured parse diagnostics', () => {
    test('a syntax error throws a ParseError carrying structured diagnostics', () => {
      // A missing ';' on an attribuut: the parser collects it and throws ParseError, whose
      // .diagnostics expose the resolver-style {severity, line, column, message}, while .message stays
      // the joined human-readable string callers historically matched on.
      let caught: unknown;
      try {
        parser.parseModel('Objecttype de zaak\n    de naam Tekst');
      } catch (e) {
        caught = e;
      }
      expect(caught).toBeInstanceOf(ParseError);
      const err = caught as ParseError;
      expect(err.diagnostics.length).toBeGreaterThan(0);
      expect(err.diagnostics[0]).toMatchObject({
        severity: 'error',
        line: expect.any(Number),
        column: expect.any(Number),
        message: expect.any(String),
      });
      expect(err.message).toContain('line');
    });
  });
});