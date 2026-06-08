import { Engine, Context, AntlrParser } from '../../src';

describe('Engine - String Interpolation (Tekstreeks)', () => {
  let engine: Engine;
  let parser: AntlrParser;

  beforeEach(() => {
    engine = new Engine();
    parser = new AntlrParser();
  });

  describe('plain strings (no interpolation)', () => {
    test('should parse plain string as StringLiteral', () => {
      const expr = parser.parseExpression('"Dit is gewone tekst"');

      expect(expr).toMatchObject({
        type: 'StringLiteral',
        value: 'Dit is gewone tekst'
      });
    });

    test('should handle plain string without interpolation', () => {
      const result = engine.run('"Dit is gewone tekst"');
      expect(result.success).toBe(true);
      expect(result.value).toEqual({ type: 'string', value: 'Dit is gewone tekst' });
    });

    test('should handle empty string', () => {
      const result = engine.run('""');
      expect(result.success).toBe(true);
      expect(result.value).toEqual({ type: 'string', value: '' });
    });
  });

  describe('variable interpolation', () => {
    test('should parse interpolated string as structured TekstreeksExpression', () => {
      const expr = parser.parseExpression('"Hallo «naam»"');

      expect(expr.type).toBe('TekstreeksExpression');
      expect((expr as any).parts).toEqual([
        { type: 'TekstreeksText', text: 'Hallo ' },
        {
          type: 'TekstreeksInterpolation',
          expression: {
            type: 'VariableReference',
            variableName: 'naam',
            location: expect.any(Object)
          }
        }
      ]);
    });

    test('should parse multiple interpolations and preserve adjacent structure', () => {
      const expr = parser.parseExpression('"«voornaam»«achternaam»"');

      expect(expr.type).toBe('TekstreeksExpression');
      expect((expr as any).parts).toEqual([
        {
          type: 'TekstreeksInterpolation',
          expression: {
            type: 'VariableReference',
            variableName: 'voornaam',
            location: expect.any(Object)
          }
        },
        {
          type: 'TekstreeksInterpolation',
          expression: {
            type: 'VariableReference',
            variableName: 'achternaam',
            location: expect.any(Object)
          }
        }
      ]);
    });

    test('should preserve nested expression AST inside interpolation', () => {
      const expr = parser.parseExpression('"Som: «basis plus toeslag»"');

      expect(expr.type).toBe('TekstreeksExpression');
      expect((expr as any).parts[1]).toMatchObject({
        type: 'TekstreeksInterpolation',
        expression: {
          type: 'BinaryExpression',
          operator: '+',
          left: { type: 'VariableReference', variableName: 'basis' },
          right: { type: 'VariableReference', variableName: 'toeslag' }
        }
      });
    });

    test('should interpolate single variable', () => {
      const context = new Context();
      context.setVariable('naam', { type: 'string', value: 'Jan' });
      const result = engine.run('"Hallo «naam»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Hallo Jan');
    });

    test('should interpolate multiple variables', () => {
      const context = new Context();
      context.setVariable('voornaam', { type: 'string', value: 'Jan' });
      context.setVariable('achternaam', { type: 'string', value: 'Jansen' });
      const result = engine.run('"«voornaam» «achternaam»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Jan Jansen');
    });

    test('should handle adjacent interpolations', () => {
      const context = new Context();
      context.setVariable('eerste', { type: 'string', value: 'Hallo' });
      context.setVariable('tweede', { type: 'string', value: 'Wereld' });
      const result = engine.run('"«eerste»«tweede»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('HalloWereld');
    });

    test('should handle interpolation at start', () => {
      const context = new Context();
      context.setVariable('naam', { type: 'string', value: 'Jan' });
      const result = engine.run('"«naam» is hier"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Jan is hier');
    });

    test('should handle interpolation at end', () => {
      const context = new Context();
      context.setVariable('naam', { type: 'string', value: 'Jan' });
      const result = engine.run('"Dit is «naam»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Dit is Jan');
    });
  });

  describe('type formatting', () => {
    test('should format number with Dutch decimal', () => {
      const context = new Context();
      context.setVariable('prijs', { type: 'number', value: 12.50 });
      const result = engine.run('"De prijs is «prijs» euro"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('De prijs is 12,5 euro');
    });

    test('should format integer without decimal', () => {
      const context = new Context();
      context.setVariable('mijnwaarde', { type: 'number', value: 42 });
      const result = engine.run('"Aantal: «mijnwaarde»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Aantal: 42');
    });

    test('should format date in Dutch format (dd-mm-yyyy)', () => {
      const context = new Context();
      context.setVariable('datum', { type: 'date', value: new Date(2024, 2, 15) });
      const result = engine.run('"Datum: «datum»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Datum: 15-03-2024');
    });

    test('should format boolean as waar', () => {
      const context = new Context();
      context.setVariable('actief', { type: 'boolean', value: true });
      const result = engine.run('"Status: «actief»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Status: waar');
    });

    test('should format boolean as onwaar', () => {
      const context = new Context();
      context.setVariable('actief', { type: 'boolean', value: false });
      const result = engine.run('"Status: «actief»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Status: onwaar');
    });

    test('should format null as empty string', () => {
      const context = new Context();
      context.setVariable('waarde', { type: 'null', value: null });
      const result = engine.run('"Waarde: «waarde»"', context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe('Waarde: ');
    });
  });

  describe('error handling', () => {
    test('should fail on unclosed interpolation marker', () => {
      const result = engine.run('"Hallo «naam"');
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain('Unclosed «');
    });
  });
});
