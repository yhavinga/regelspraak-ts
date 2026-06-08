import { Engine } from '../../src';
import { BinaryExpression } from '../../src/ast/expressions';
import { AntlrParser } from '../../src/parser';
import { createResolutionContext, resolveExpression } from '../../src/resolver';

describe('Power expressions', () => {
  let parser: AntlrParser;
  let engine: Engine;

  beforeEach(() => {
    parser = new AntlrParser();
    engine = new Engine();
  });

  describe('parsing', () => {
    it('parses tot de macht as an explicit binary operator', () => {
      const expr = parser.parseExpression('2 tot de macht 3');

      expect(expr).toMatchObject({
        type: 'BinaryExpression',
        operator: '^',
        left: { type: 'NumberLiteral', value: 2 },
        right: { type: 'NumberLiteral', value: 3 },
      });
    });

    it('rejects caret syntax because the language specifies tot de macht', () => {
      expect(() => parser.parseExpression('2 ^ 3')).toThrow(/tot de macht/);
    });

    it('binds power tighter than multiplication and addition', () => {
      const expr = parser.parseExpression('2 plus 3 maal 4 tot de macht 2');

      expect(expr).toMatchObject({
        type: 'BinaryExpression',
        operator: '+',
        left: { type: 'NumberLiteral', value: 2 },
        right: {
          type: 'BinaryExpression',
          operator: '*',
          left: { type: 'NumberLiteral', value: 3 },
          right: {
            type: 'BinaryExpression',
            operator: '^',
            left: { type: 'NumberLiteral', value: 4 },
            right: { type: 'NumberLiteral', value: 2 },
          },
        },
      });
    });

    it('builds chained power expressions right-associatively', () => {
      const expr = parser.parseExpression('2 tot de macht 3 tot de macht 2');

      expect(expr).toMatchObject({
        type: 'BinaryExpression',
        operator: '^',
        left: { type: 'NumberLiteral', value: 2 },
        right: {
          type: 'BinaryExpression',
          operator: '^',
          left: { type: 'NumberLiteral', value: 3 },
          right: { type: 'NumberLiteral', value: 2 },
        },
      });
    });

    it('keeps rounded power under the existing rounding node', () => {
      const expr = parser.parseExpression(
        '2 tot de macht 3 rekenkundig afgerond op 0 decimalen'
      );

      expect(expr).toMatchObject({
        type: 'AfrondingExpression',
        expression: {
          type: 'BinaryExpression',
          operator: '^',
        },
        direction: 'rekenkundig',
        decimals: 0,
      });
    });
  });

  describe('resolution', () => {
    it('resolves power expressions to Numeriek', () => {
      const expr = parser.parseExpression(
        '2 tot de macht 3 rekenkundig afgerond op 0 decimalen'
      );
      const context = createResolutionContext({
        objectTypes: [],
        parameters: [],
        regels: [],
        regelGroepen: [],
        beslistabels: [],
        dimensions: [],
        dagsoortDefinities: [],
        domains: [],
        feitTypes: [],
        unitSystems: [],
      });

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
      expect((expr as any).expression.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    });

    it('rejects rounded unit-bearing operands during resolution', () => {
      const expr = parser.parseExpression(
        '(2 meter rekenkundig afgerond op 0 decimalen) tot de macht 3 rekenkundig afgerond op 0 decimalen'
      );
      const context = createResolutionContext({
        objectTypes: [],
        parameters: [],
        regels: [],
        regelGroepen: [],
        beslistabels: [],
        dimensions: [],
        dagsoortDefinities: [],
        domains: [],
        feitTypes: [],
        unitSystems: [],
      });

      expect(() => resolveExpression(expr, context)).toThrow(/unitless/);
    });
  });

  describe('evaluation', () => {
    it('evaluates rounded power expressions', () => {
      const result = engine.run('2 tot de macht 3 rekenkundig afgerond op 0 decimalen');

      expect(result.success).toBe(true);
      expect(result.value).toEqual({ type: 'number', value: 8 });
    });

    it('rejects direct unrounded power evaluation', () => {
      const result = engine.run('2 tot de macht 3');

      expect(result.success).toBe(false);
      expect(result.error?.message).toContain('must be rounded');
    });

    it('rejects unrounded power nested inside a rounded ancestor expression', () => {
      const result = engine.run(
        '2 tot de macht 0,5 plus 0,4 rekenkundig afgerond op 0 decimalen'
      );

      expect(result.success).toBe(false);
      expect(result.error?.message).toContain('must be rounded');
    });

    it('rejects power operands with units', () => {
      const result = engine.run('2 meter tot de macht 3 rekenkundig afgerond op 0 decimalen');

      expect(result.success).toBe(false);
      expect(result.error?.message).toContain('unit');
    });

    it('evaluates chained power expressions right-associatively under rounding', () => {
      const expr = parser.parseExpression(
        '2 tot de macht 3 tot de macht 2 rekenkundig afgerond op 0 decimalen'
      ) as any;
      const powerExpr = expr.expression as BinaryExpression;

      expect(powerExpr.right.type).toBe('BinaryExpression');

      const result = engine.run(
        '2 tot de macht 3 tot de macht 2 rekenkundig afgerond op 0 decimalen'
      );

      expect(result.success).toBe(true);
      expect(result.value).toEqual({ type: 'number', value: 512 });
    });
  });
});
