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
import { TimelineValueImpl } from '../../src/ast/timelines';
import { setValueAtPath } from '../../src/utils/navigation';

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

  describe('Initialisatie is order-independent (§9.6)', () => {
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

    test('initialisatie is order-independent: it does NOT overwrite a prior conditional result (§9.6)', () => {
      const context = new Context();
      context.setVariable('OK maximum', { type: 'number', value: 2010 });
      context.setVariable('OK afbouwgrens', { type: 'number', value: 44770 });
      context.createObject('Scenario', 'test', {
        'bruto inkomen': { type: 'number', value: 30000 }  // Below threshold
      });

      const result = engine.run(wrongOrderCode, context);
      expect(result.success).toBe(true);

      // §9.6: an initialisatieregel is a default-when-empty assignment. Even though it appears
      // LAST in file order, it must not overwrite the value the conditional rule already set —
      // ouderenkorting stays 2010, not 0.
      const scenarios = context.getObjectsByType('Scenario');
      const ouderenkorting = (scenarios[0] as any).attributes?.ouderenkorting?.value
        ?? (scenarios[0] as any).value?.ouderenkorting?.value;

      expect(ouderenkorting).toBe(2010);
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

  describe('Initialisatie leeg-guard covers the latent write paths (§9.6)', () => {
    // The canonical object-attribute write was already guarded; these cover the two paths the
    // guard previously missed: a timeline-valued write, and a navigated (setValueAtPath) write.

    test('a timeline initialisatie does NOT overwrite a timeline already produced for the attribute', () => {
      // toeslag already holds a timeline (99 € throughout 2024). The initialisatieregel would set
      // it from a default timeline parameter — but the target is not leeg, so it must be skipped.
      const code = `
Objecttype de Passagier
    de toeslag Numeriek met eenheid € voor elke maand;

Parameter de DEFAULT_TOESLAG : Numeriek met eenheid € voor elk jaar

Regel Initialiseer toeslag
    geldig altijd
        De toeslag van een passagier moet geïnitialiseerd worden op de DEFAULT_TOESLAG.
`;
      const context = new Context();
      context.createObject('Passagier', 'p1', {});
      context.setTimelineAttribute('Passagier', 'p1', 'toeslag', new TimelineValueImpl({
        periods: [{ startDate: new Date(2024, 0, 1), endDate: new Date(2025, 0, 1),
          value: { type: 'number', value: 99, unit: { name: '€' } } }],
        granularity: 'jaar',
      }));
      context.setTimelineParameter('DEFAULT_TOESLAG', new TimelineValueImpl({
        periods: [{ startDate: new Date(2024, 0, 1), endDate: new Date(2025, 0, 1),
          value: { type: 'number', value: 5, unit: { name: '€' } } }],
        granularity: 'jaar',
      }));

      const result = new Engine().run(code, context);
      expect(result.success).toBe(true);

      context.evaluation_date = new Date(2024, 5, 15);
      expect(context.getTimelineAttribute('Passagier', 'p1', 'toeslag')?.value).toBe(99);
    });

    test('setValueAtPath skips a filled target when skipIfFilled, but writes when not', () => {
      const context = new Context();
      context.createObject('Doos', 'd1', { inhoud: { type: 'number', value: 7 } });
      const doos = context.getObjectsByType('Doos')[0];
      context.current_instance = doos;

      // skipIfFilled (the initialisatie case): a non-leeg target is left untouched.
      const skipped = setValueAtPath(['Doos', 'inhoud'], { type: 'number', value: 99 }, context, true);
      expect(skipped.success).toBe(true);
      expect((doos.value as any).inhoud.value).toBe(7);

      // Without the guard (a normal gelijkstelling), the write goes through.
      setValueAtPath(['Doos', 'inhoud'], { type: 'number', value: 99 }, context, false);
      expect((doos.value as any).inhoud.value).toBe(99);
    });
  });
});
