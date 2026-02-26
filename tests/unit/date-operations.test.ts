import { Engine, Context } from '../../src';
import { ExpressionEvaluator } from '../../src/evaluators/expression-evaluator';

describe('Date Operations', () => {
  let engine: Engine;
  let context: Context;
  let evaluator: ExpressionEvaluator;

  beforeEach(() => {
    engine = new Engine();
    context = new Context();
    evaluator = new ExpressionEvaluator();
  });

  describe('Date Comparisons', () => {
    test('should compare dates with groter dan (later date)', () => {
      context.setVariable('datum1', {
        type: 'date',
        value: new Date('2024-06-15')
      });
      context.setVariable('datum2', {
        type: 'date',
        value: new Date('2024-01-01')
      });

      const parseResult = engine.parse('datum1 is groter dan datum2');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('boolean');
      expect(result.value).toBe(true);
    });

    test('should compare dates with kleiner dan (earlier date)', () => {
      context.setVariable('datum1', {
        type: 'date',
        value: new Date('2024-01-01')
      });
      context.setVariable('datum2', {
        type: 'date',
        value: new Date('2024-06-15')
      });

      const parseResult = engine.parse('datum1 is kleiner dan datum2');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('boolean');
      expect(result.value).toBe(true);
    });

    test('should compare dates with kleiner of gelijk aan (same date)', () => {
      context.setVariable('datum1', {
        type: 'date',
        value: new Date('2024-06-15')
      });
      context.setVariable('datum2', {
        type: 'date',
        value: new Date('2024-06-15')
      });

      const parseResult = engine.parse('datum1 is kleiner of gelijk aan datum2');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('boolean');
      expect(result.value).toBe(true);
    });

    test('should compare dates with groter of gelijk aan (same date)', () => {
      context.setVariable('datum1', {
        type: 'date',
        value: new Date('2024-06-15')
      });
      context.setVariable('datum2', {
        type: 'date',
        value: new Date('2024-06-15')
      });

      const parseResult = engine.parse('datum1 is groter of gelijk aan datum2');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('boolean');
      expect(result.value).toBe(true);
    });

    test('should handle date comparison with date literal', () => {
      context.setVariable('geboortedatum', {
        type: 'date',
        value: new Date('1947-12-31')
      });

      const parseResult = engine.parse('geboortedatum is kleiner of gelijk aan 31-12-1947');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('boolean');
      expect(result.value).toBe(true);
    });

    test('should return false for date not greater than', () => {
      context.setVariable('datum1', {
        type: 'date',
        value: new Date('2024-01-01')
      });
      context.setVariable('datum2', {
        type: 'date',
        value: new Date('2024-06-15')
      });

      const parseResult = engine.parse('datum1 is groter dan datum2');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('boolean');
      expect(result.value).toBe(false);
    });
  });

  describe('Date Arithmetic - Year Addition', () => {
    test('should add years to date correctly', () => {
      context.setVariable('startdatum', {
        type: 'date',
        value: new Date(Date.UTC(1960, 2, 15)) // March 15, 1960
      });

      const parseResult = engine.parse('startdatum plus 67 jr');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('date');

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2027);
      expect(resultDate.getUTCMonth()).toBe(2); // March (0-indexed)
      expect(resultDate.getUTCDate()).toBe(15);
    });

    test('should handle leap year edge case (Feb 29 + years)', () => {
      // Feb 29, 2000 (leap year) + 1 year = Feb 28, 2001 (non-leap year)
      context.setVariable('startdatum', {
        type: 'date',
        value: new Date(Date.UTC(2000, 1, 29)) // Feb 29, 2000
      });

      const parseResult = engine.parse('startdatum plus 1 jr');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('date');

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2001);
      expect(resultDate.getUTCMonth()).toBe(1); // February
      expect(resultDate.getUTCDate()).toBe(28); // Clamped to Feb 28
    });
  });

  describe('Date Arithmetic - Month Addition', () => {
    test('should add months to date correctly', () => {
      context.setVariable('startdatum', {
        type: 'date',
        value: new Date(Date.UTC(2024, 0, 15)) // Jan 15, 2024
      });

      const parseResult = engine.parse('startdatum plus 3 mnd');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('date');

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2024);
      expect(resultDate.getUTCMonth()).toBe(3); // April
      expect(resultDate.getUTCDate()).toBe(15);
    });

    test('should handle month overflow (Jan 31 + 1 month)', () => {
      // Jan 31 + 1 month = Feb 28/29 (day clamped)
      context.setVariable('startdatum', {
        type: 'date',
        value: new Date(Date.UTC(2024, 0, 31)) // Jan 31, 2024
      });

      const parseResult = engine.parse('startdatum plus 1 mnd');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('date');

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2024);
      expect(resultDate.getUTCMonth()).toBe(1); // February
      expect(resultDate.getUTCDate()).toBe(29); // 2024 is leap year
    });

    test('should handle year rollover (Dec + 2 months)', () => {
      context.setVariable('startdatum', {
        type: 'date',
        value: new Date(Date.UTC(2024, 11, 15)) // Dec 15, 2024
      });

      const parseResult = engine.parse('startdatum plus 2 mnd');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('date');

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2025);
      expect(resultDate.getUTCMonth()).toBe(1); // February
      expect(resultDate.getUTCDate()).toBe(15);
    });
  });

  describe('Date Arithmetic - Combined Years and Months', () => {
    test('should add years then months correctly', () => {
      // This tests the AOW calculation pattern: birthdate + 67 years + 3 months
      context.setVariable('geboortedatum', {
        type: 'date',
        value: new Date(Date.UTC(1990, 0, 1)) // Jan 1, 1990
      });

      // First add years
      let parseResult = engine.parse('geboortedatum plus 67 jr');
      expect(parseResult.success).toBe(true);
      let result = evaluator.evaluate(parseResult.ast as any, context);

      // Then add months (need to store intermediate result)
      context.setVariable('tussenresultaat', result);
      parseResult = engine.parse('tussenresultaat plus 3 mnd');
      expect(parseResult.success).toBe(true);
      result = evaluator.evaluate(parseResult.ast as any, context);

      expect(result.type).toBe('date');
      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2057);
      expect(resultDate.getUTCMonth()).toBe(3); // April
      expect(resultDate.getUTCDate()).toBe(1);
    });

    test('should handle AOW calculation for cohort boundary (Sep 30, 1964)', () => {
      // Person born Sep 30, 1964 + 67 years + 3 months = Dec 30, 2031
      context.setVariable('geboortedatum', {
        type: 'date',
        value: new Date(Date.UTC(1964, 8, 30)) // Sep 30, 1964
      });

      // Add 67 years
      let parseResult = engine.parse('geboortedatum plus 67 jr');
      let result = evaluator.evaluate(parseResult.ast as any, context);
      context.setVariable('plus67', result);

      // Add 3 months
      parseResult = engine.parse('plus67 plus 3 mnd');
      result = evaluator.evaluate(parseResult.ast as any, context);

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2031);
      expect(resultDate.getUTCMonth()).toBe(11); // December
      expect(resultDate.getUTCDate()).toBe(30);
    });
  });

  describe('Date Arithmetic - Subtraction', () => {
    test('should subtract months from date', () => {
      context.setVariable('startdatum', {
        type: 'date',
        value: new Date(Date.UTC(2024, 5, 15)) // June 15, 2024
      });

      const parseResult = engine.parse('startdatum min 3 mnd');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('date');

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2024);
      expect(resultDate.getUTCMonth()).toBe(2); // March
      expect(resultDate.getUTCDate()).toBe(15);
    });

    test('should handle year rollback when subtracting months', () => {
      context.setVariable('startdatum', {
        type: 'date',
        value: new Date(Date.UTC(2024, 1, 15)) // Feb 15, 2024
      });

      const parseResult = engine.parse('startdatum min 3 mnd');
      expect(parseResult.success).toBe(true);

      const result = evaluator.evaluate(parseResult.ast as any, context);
      expect(result.type).toBe('date');

      const resultDate = result.value as Date;
      expect(resultDate.getUTCFullYear()).toBe(2023);
      expect(resultDate.getUTCMonth()).toBe(10); // November
      expect(resultDate.getUTCDate()).toBe(15);
    });
  });
});
