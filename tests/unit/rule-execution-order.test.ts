/**
 * Rule Execution Order Tests
 *
 * Tests that initialization rules execute before conditional rules
 * when both target the same attribute. This is critical for the
 * "initialize then override" pattern used in bedrag-ineens.
 *
 * Background: The ouderenkorting calculation requires:
 * 1. Initialize to 0€ (default for high income)
 * 2. Conditionally set to OK_maximum if income <= threshold
 *
 * If initialization runs AFTER conditional, the value gets
 * overwritten to 0€ even when the condition matched.
 */

import { Engine, Context } from '../../src';

describe('Rule execution order', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  describe('Initialize before conditional pattern', () => {
    // This is the CORRECT pattern from bedrag-ineens/regels.rs
    const correctOrderCode = `
Objecttype het Scenario
    de ouderenkorting Numeriek;
    het bruto inkomen Numeriek;

Parameter de OK maximum: Numeriek
Parameter de OK afbouwgrens: Numeriek

// Initialize FIRST - sets default value
Regel Initialiseer ouderenkorting
    geldig altijd
        De ouderenkorting van een Scenario moet geïnitialiseerd worden op 0.

// Conditional SECOND - overrides if condition met
Regel Bereken ouderenkorting onder grens
    geldig altijd
        De ouderenkorting van een Scenario moet gesteld worden op de OK maximum
        indien het bruto inkomen van het scenario is kleiner of gelijk aan de OK afbouwgrens.
`;

    test('correct order: conditional overrides initialization when condition true', () => {
      const context = new Context();
      context.setVariable('OK maximum', { type: 'number', value: 2010 });
      context.setVariable('OK afbouwgrens', { type: 'number', value: 44770 });
      context.createObject('Scenario', 'test', {
        'bruto inkomen': { type: 'number', value: 30000 }  // Below threshold
      });

      const result = engine.run(correctOrderCode, context);
      expect(result.success).toBe(true);

      // Must be 2010 (OK maximum), NOT 0
      const scenarios = context.getObjectsByType('Scenario');
      const ouderenkorting = (scenarios[0] as any).attributes?.ouderenkorting?.value
        ?? (scenarios[0] as any).value?.ouderenkorting?.value;
      expect(ouderenkorting).toBe(2010);
    });

    test('correct order: initialization value kept when condition false', () => {
      const context = new Context();
      context.setVariable('OK maximum', { type: 'number', value: 2010 });
      context.setVariable('OK afbouwgrens', { type: 'number', value: 44770 });
      context.createObject('Scenario', 'test', {
        'bruto inkomen': { type: 'number', value: 50000 }  // Above threshold
      });

      const result = engine.run(correctOrderCode, context);
      expect(result.success).toBe(true);

      // Must be 0 (initialized value, condition not met)
      const scenarios = context.getObjectsByType('Scenario');
      const ouderenkorting = (scenarios[0] as any).attributes?.ouderenkorting?.value
        ?? (scenarios[0] as any).value?.ouderenkorting?.value;
      expect(ouderenkorting).toBe(0);
    });
  });

  describe('Document the bug (wrong order)', () => {
    // This documents what happens with WRONG order
    // If the engine changes to NOT execute in file order, this test
    // documents the expected behavior change needed
    const wrongOrderCode = `
Objecttype het Scenario
    de ouderenkorting Numeriek;
    het bruto inkomen Numeriek;

Parameter de OK maximum: Numeriek
Parameter de OK afbouwgrens: Numeriek

// WRONG: Conditional FIRST
Regel Bereken ouderenkorting onder grens
    geldig altijd
        De ouderenkorting van een Scenario moet gesteld worden op de OK maximum
        indien het bruto inkomen van het scenario is kleiner of gelijk aan de OK afbouwgrens.

// WRONG: Initialize SECOND - will overwrite!
Regel Initialiseer ouderenkorting
    geldig altijd
        De ouderenkorting van een Scenario moet geïnitialiseerd worden op 0.
`;

    test('wrong order: initialization overwrites conditional result', () => {
      const context = new Context();
      context.setVariable('OK maximum', { type: 'number', value: 2010 });
      context.setVariable('OK afbouwgrens', { type: 'number', value: 44770 });
      context.createObject('Scenario', 'test', {
        'bruto inkomen': { type: 'number', value: 30000 }  // Below threshold
      });

      const result = engine.run(wrongOrderCode, context);
      expect(result.success).toBe(true);

      // With wrong order, this will be 0 (bug behavior)
      // This test DOCUMENTS the bug, not validates correctness
      const scenarios = context.getObjectsByType('Scenario');
      const ouderenkorting = (scenarios[0] as any).attributes?.ouderenkorting?.value
        ?? (scenarios[0] as any).value?.ouderenkorting?.value;

      // The engine executes in file order, so init comes last and overwrites
      expect(ouderenkorting).toBe(0);
    });
  });

  describe('Multiple initialization-conditional pairs', () => {
    // Test with 3 pairs like bedrag-ineens has (ouderenkorting, alleenstaande ouderenkorting, huurtoeslag)
    const multipleAttrsCode = `
Objecttype het Scenario
    de korting a Numeriek;
    de korting b Numeriek;
    het inkomen Numeriek;

Parameter de max a: Numeriek
Parameter de max b: Numeriek
Parameter de grens: Numeriek

// All initializations
Regel Init a
    geldig altijd
        De korting a van een Scenario moet geïnitialiseerd worden op 0.

Regel Init b
    geldig altijd
        De korting b van een Scenario moet geïnitialiseerd worden op 0.

// All conditionals
Regel Set a
    geldig altijd
        De korting a van een Scenario moet gesteld worden op de max a
        indien het inkomen van het scenario is kleiner dan de grens.

Regel Set b
    geldig altijd
        De korting b van een Scenario moet gesteld worden op de max b
        indien het inkomen van het scenario is groter of gelijk aan de grens.
`;

    test('multiple pairs: each attribute gets correct value', () => {
      const context = new Context();
      context.setVariable('max a', { type: 'number', value: 100 });
      context.setVariable('max b', { type: 'number', value: 200 });
      context.setVariable('grens', { type: 'number', value: 50000 });
      context.createObject('Scenario', 'low', {
        'inkomen': { type: 'number', value: 30000 }  // Below grens
      });
      context.createObject('Scenario', 'high', {
        'inkomen': { type: 'number', value: 70000 }  // Above grens
      });

      const result = engine.run(multipleAttrsCode, context);
      expect(result.success).toBe(true);

      const scenarios = context.getObjectsByType('Scenario');
      const low = scenarios.find(s => (s as any).objectId === 'low');
      const high = scenarios.find(s => (s as any).objectId === 'high');

      // Low income: korting a = 100 (condition true), korting b = 0 (condition false)
      const lowA = (low as any)?.attributes?.['korting a']?.value ?? (low as any)?.value?.['korting a']?.value;
      const lowB = (low as any)?.attributes?.['korting b']?.value ?? (low as any)?.value?.['korting b']?.value;
      expect(lowA).toBe(100);
      expect(lowB).toBe(0);

      // High income: korting a = 0 (condition false), korting b = 200 (condition true)
      const highA = (high as any)?.attributes?.['korting a']?.value ?? (high as any)?.value?.['korting a']?.value;
      const highB = (high as any)?.attributes?.['korting b']?.value ?? (high as any)?.value?.['korting b']?.value;
      expect(highA).toBe(0);
      expect(highB).toBe(200);
    });
  });
});
