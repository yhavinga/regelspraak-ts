import { Engine, Context } from '../../src';

describe('Engine - Number Literals with Units', () => {
  let engine: Engine;
  let context: Context;

  beforeEach(() => {
    engine = new Engine();
    context = new Context();
  });

  test('should parse simple number with unit', () => {
    const result = engine.run('10 EUR', context);
    
    expect(result.success).toBe(true);
    expect(result.value).toMatchObject({
      type: 'number',
      value: 10,
      unit: { name: 'euro' }
    });
  });

  test('should parse number with time unit', () => {
    const result = engine.run('5 uur', context);
    
    expect(result.success).toBe(true);
    expect(result.value).toMatchObject({
      type: 'number',
      value: 5,
      unit: { name: 'uur' }
    });
  });

  test('should parse number with abbreviation', () => {
    const result = engine.run('3,5 u', context);
    
    expect(result.success).toBe(true);
    expect(result.value).toMatchObject({
      type: 'number',
      value: 3.5,
      unit: { name: 'uur' }
    });
  });

  test('should handle Euro symbol', () => {
    const result = engine.run('100 €', context);
    
    expect(result.success).toBe(true);
    expect(result.value).toMatchObject({
      type: 'number',
      value: 100,
      unit: { name: 'euro', symbol: '€' }
    });
  });

  test('should add numbers with same units', () => {
    const result = engine.run('10 EUR plus 20 EUR', context);
    
    expect(result.success).toBe(true);
    expect(result.value).toMatchObject({
      type: 'number',
      value: 30,
      unit: { name: 'euro' }
    });
  });

  test('should also work with Euro symbol', () => {
    const result = engine.run('10 € plus 20 €', context);
    
    expect(result.success).toBe(true);
    expect(result.value).toMatchObject({
      type: 'number',
      value: 30,
      unit: { name: 'euro', symbol: '€' }
    });
  });

  test('should add numbers with convertible units', () => {
    const result = engine.run('1 uur plus 30 minuut', context);
    
    expect(result.success).toBe(true);
    expect(result.value).toMatchObject({
      type: 'number',
      value: 1.5,
      unit: { name: 'uur' }
    });
  });

  test('should fail adding incompatible units', () => {
    const result = engine.run('10 EUR plus 5 uur', context);
    
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('incompatible units');
  });

  test('should reject non-convertible currencies in one unit system', () => {
    const sum = engine.run('1 EUR plus 1 USD', context);
    expect(sum.success).toBe(false);
    expect(sum.error?.message).toContain('incompatible units');

    const comparison = engine.run('1 EUR gelijk is aan 1 USD', context);
    expect(comparison.success).toBe(false);
    expect(comparison.error?.message).toContain('Cannot convert from');
  });

  test('should multiply to create composite units', () => {
    const result = engine.run('50 km gedeeld door 2 u', context);
    
    expect(result.success).toBe(true);
    expect(result.value?.value).toBe(25);
    const unitValue = result.value as any;
    expect(unitValue.compositeUnit?.toString()).toBe('km/u');
  });

  test('should support arithmetic with EUR unit', () => {
    const result = engine.run('1000 EUR gedeeld door 12', context);
    
    expect(result.success).toBe(true);
    expect(result.value?.value).toBeCloseTo(1000/12);
    
    // Check that euro unit is preserved
    const unitValue = result.value as any;
    expect(unitValue.compositeUnit?.numerator).toEqual([['EUR', 1]]);
    expect(unitValue.compositeUnit?.denominator).toEqual([]);
  });

  test('should parse powered compound unit expressions structurally', () => {
    const result = engine.run('10 m/s^2', context);

    expect(result.success).toBe(true);
    expect((result.value as any).compositeUnit?.toString()).toBe('m/s^2');
  });

  test('should compare convertible built-in units', () => {
    const result = engine.run('1 uur gelijk is aan 60 minuut', context);

    expect(result.success).toBe(true);
    expect(result.value).toEqual({ type: 'boolean', value: true });
  });

  test('should reject incompatible unit comparisons', () => {
    const result = engine.run('1 uur gelijk is aan 1 EUR', context);

    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('Cannot convert from');
  });

  test('should compare custom compound units through one registry', () => {
    const unitSystem = `
Eenheidsysteem afstand
de meter m
de kilometer km = 1000 m
`;

    const registration = engine.run(unitSystem, context);
    expect(registration.success).toBe(true);

    const result = engine.run('1 km/u gelijk is aan 1000 m/u', context);

    expect(result.success).toBe(true);
    expect(result.value).toEqual({ type: 'boolean', value: true });
  });

  test('should reject unconnected custom units in one unit system', () => {
    const unitSystem = `
Eenheidsysteem tokens
de punt pt
de krediet kr
`;

    const registration = engine.run(unitSystem, context);
    expect(registration.success).toBe(true);

    const result = engine.run('1 pt plus 1 kr', context);

    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('incompatible units');
  });
});