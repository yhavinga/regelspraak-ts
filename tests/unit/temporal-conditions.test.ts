/**
 * Tests for §10.3 - Temporal conditions on rule results
 *
 * Temporal conditions can be attached to rule result parts:
 * - "van dd. X tot dd. Y" - explicit date period
 * - "gedurende de tijd dat ..." - boolean temporal condition
 */

import { Engine } from '../../src/engine';

describe('Temporal Conditions on Rule Results (§10.3)', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  // Helper to get the first rule from parse result
  const getRule = (result: any) => {
    if (result.ast?.rules?.length > 0) {
      return result.ast.rules[0];
    }
    return result.ast;
  };

  describe('Explicit date periods', () => {
    it('parses "van dd. X tot dd. Y" on gelijkstelling', () => {
      const input = `
Objecttype de Passagier (bezield)
  de belasting Numeriek;

Regel belasting berekening
  geldig altijd
    De belasting van een passagier moet berekend worden als 100
    van dd. 1-1-2024 tot dd. 8-2-2025
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule).toBeDefined();
      expect(rule.result?.type).toBe('Gelijkstelling');
      expect(rule.result?.temporalCondition).toBeDefined();
      expect(rule.result?.temporalCondition?.type).toBe('PeriodDefinition');
      expect(rule.result?.temporalCondition?.periodType).toBe('van_tot');
    });

    it('parses "vanaf dd. X" on gelijkstelling', () => {
      const input = `
Objecttype de Passagier (bezield)
  de belasting Numeriek;

Regel belasting berekening
  geldig altijd
    De belasting van een passagier moet berekend worden als 100
    vanaf dd. 1-1-2024
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule).toBeDefined();
      expect(rule.result?.temporalCondition?.type).toBe('PeriodDefinition');
      expect(rule.result?.temporalCondition?.periodType).toBe('vanaf');
    });

    it('parses "tot en met dd. X" on gelijkstelling', () => {
      const input = `
Objecttype de Passagier (bezield)
  de belasting Numeriek;

Regel belasting berekening
  geldig altijd
    De belasting van een passagier moet berekend worden als 100
    tot en met dd. 31-12-2024
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule?.result?.temporalCondition?.periodType).toBe('tot_en_met');
    });

    it('parses "tot dd. X" on gelijkstelling', () => {
      const input = `
Objecttype de Passagier (bezield)
  de belasting Numeriek;

Regel belasting berekening
  geldig altijd
    De belasting van een passagier moet berekend worden als 100
    tot dd. 31-12-2024
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule?.result?.temporalCondition?.periodType).toBe('tot');
    });
  });

  describe('Boolean temporal conditions', () => {
    it('parses "gedurende de tijd dat" with kenmerk reference', () => {
      const input = `
Objecttype de Passagier (bezield)
  heeft recht op belastingvermindering kenmerk;
  de belasting Numeriek;

Regel belasting berekening
  geldig altijd
    De belasting van een passagier moet berekend worden als 100
    gedurende de tijd dat hij recht op belastingvermindering heeft
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule).toBeDefined();
      expect(rule.result?.temporalCondition).toBeDefined();
      // The condition is an expression, not a PeriodDefinition
      expect(rule.result?.temporalCondition?.type).not.toBe('PeriodDefinition');
    });

    it('parses "gedurende de tijd dat" with attribute comparison', () => {
      const input = `
Objecttype de Passagier (bezield)
  de status Tekst;
  de belasting Numeriek;

Regel belasting berekening
  geldig altijd
    De belasting van een passagier moet berekend worden als 100
    gedurende de tijd dat zijn status gelijk is aan "actief"
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule?.result?.temporalCondition).toBeDefined();
    });
  });

  describe('Kenmerktoekenning with temporal conditions', () => {
    it('parses temporal condition on kenmerktoekenning', () => {
      const input = `
Objecttype de Passagier (bezield)
  is actief kenmerk (bijvoeglijk);

Regel actief markeren
  geldig altijd
    Een passagier is actief
    van dd. 1-1-2024 tot dd. 31-12-2024
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule).toBeDefined();
      expect(rule.result?.type).toBe('Kenmerktoekenning');
      expect(rule.result?.temporalCondition).toBeDefined();
      expect(rule.result?.temporalCondition?.type).toBe('PeriodDefinition');
    });
  });

  describe('No temporal condition', () => {
    it('parses rule without temporal condition', () => {
      const input = `
Objecttype de Passagier (bezield)
  de belasting Numeriek;

Regel belasting berekening
  geldig altijd
    De belasting van een passagier moet berekend worden als 100
      `;

      const result = engine.parse(input);
      if (!result.success) {
        console.error('Parse errors:', result.errors);
      }
      expect(result.success).toBe(true);

      const rule = getRule(result);
      expect(rule?.result?.temporalCondition).toBeUndefined();
    });
  });
});
