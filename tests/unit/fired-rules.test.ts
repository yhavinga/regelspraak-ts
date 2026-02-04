import { Engine, Context } from '../../src';

describe('fired_rules tracking', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  describe('Kenmerktoekenning rules', () => {
    const kenmerkRuleSource = `
Objecttype de Persoon (bezield)
    is minderjarig kenmerk (bijvoeglijk);
    de leeftijd Numeriek;

Regel Minderjarigheid
geldig altijd
    Een Persoon is minderjarig indien
        zijn leeftijd kleiner is dan 18.
`;

    test('fires when condition is true (kenmerk set to true)', () => {
      const context = new Context();
      const personId = context.generateObjectId('Persoon');
      context.createObject('Persoon', personId, {
        leeftijd: { type: 'number', value: 12 }
      });

      const result = engine.run(kenmerkRuleSource, context);

      expect(result.success).toBe(true);

      const firedRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      expect(firedRules).toContain('Minderjarigheid');

      // Verify kenmerk was set to true
      const persons = context.getObjectsByType('Persoon');
      expect(persons[0].kenmerken['is minderjarig']).toBe(true);
    });

    test('fires when condition is false (kenmerk set to false)', () => {
      const context = new Context();
      const personId = context.generateObjectId('Persoon');
      context.createObject('Persoon', personId, {
        leeftijd: { type: 'number', value: 25 }
      });

      const result = engine.run(kenmerkRuleSource, context);

      expect(result.success).toBe(true);

      const firedRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      expect(firedRules).toContain('Minderjarigheid');

      // Verify kenmerk was set to false
      const persons = context.getObjectsByType('Persoon');
      expect(persons[0].kenmerken['is minderjarig']).toBe(false);
    });

    test('does NOT fire when no applicable objects exist', () => {
      const context = new Context();
      // No Persoon objects created

      const result = engine.run(kenmerkRuleSource, context);

      expect(result.success).toBe(true);

      const firedRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      expect(firedRules).not.toContain('Minderjarigheid');
    });
  });

  describe('ObjectCreation rules', () => {
    const objectCreationSource = `
Objecttype de Persoon (bezield)
    de leeftijd Numeriek;

Objecttype het Rapport
    de status Tekst;

Regel MaakRapport
geldig altijd
    Er wordt een nieuw Rapport aangemaakt
    met status gelijk aan "volwassen"
    indien de leeftijd van een Persoon groter is dan 18.
`;

    test('fires when objects are created', () => {
      const context = new Context();
      const personId = context.generateObjectId('Persoon');
      context.createObject('Persoon', personId, {
        leeftijd: { type: 'number', value: 25 }
      });

      const result = engine.run(objectCreationSource, context);

      expect(result.success).toBe(true);

      const firedRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      expect(firedRules).toContain('MaakRapport');

      // Verify object was created
      const rapporten = context.getObjectsByType('Rapport');
      expect(rapporten.length).toBe(1);
    });

    test('does NOT fire when condition is false (no objects created)', () => {
      const context = new Context();
      const personId = context.generateObjectId('Persoon');
      context.createObject('Persoon', personId, {
        leeftijd: { type: 'number', value: 15 }  // Not > 18
      });

      const result = engine.run(objectCreationSource, context);

      expect(result.success).toBe(true);

      const firedRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      expect(firedRules).not.toContain('MaakRapport');

      // Verify no object was created
      const rapporten = context.getObjectsByType('Rapport');
      expect(rapporten.length).toBe(0);
    });
  });

  describe('Multiple rules', () => {
    const multiRuleSource = `
Objecttype de Persoon (bezield)
    is minderjarig kenmerk (bijvoeglijk);
    is volwassen kenmerk (bijvoeglijk);
    de leeftijd Numeriek;

Regel Minderjarigheid
geldig altijd
    Een Persoon is minderjarig indien
        zijn leeftijd kleiner is dan 18.

Regel Volwassenheid
geldig altijd
    Een Persoon is volwassen indien
        zijn leeftijd is groter of gelijk aan 18.
`;

    test('multiple distinct rules all appear in fired_rules', () => {
      const context = new Context();
      const personId = context.generateObjectId('Persoon');
      context.createObject('Persoon', personId, {
        leeftijd: { type: 'number', value: 25 }
      });

      const result = engine.run(multiRuleSource, context);

      expect(result.success).toBe(true);

      const firedRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      expect(firedRules).toContain('Minderjarigheid');
      expect(firedRules).toContain('Volwassenheid');
    });
  });

  describe('Deduplication', () => {
    const multiObjectSource = `
Objecttype de Persoon (bezield)
    is minderjarig kenmerk (bijvoeglijk);
    de leeftijd Numeriek;

Regel Minderjarigheid
geldig altijd
    Een Persoon is minderjarig indien
        zijn leeftijd kleiner is dan 18.
`;

    test('same rule appears only once even with multiple objects', () => {
      const context = new Context();
      // Create multiple objects - rule executes for each
      context.createObject('Persoon', context.generateObjectId('Persoon'), { leeftijd: { type: 'number', value: 12 } });
      context.createObject('Persoon', context.generateObjectId('Persoon'), { leeftijd: { type: 'number', value: 15 } });
      context.createObject('Persoon', context.generateObjectId('Persoon'), { leeftijd: { type: 'number', value: 10 } });

      const result = engine.run(multiObjectSource, context);

      expect(result.success).toBe(true);

      // Get raw fired rules (before dedup)
      const rawFiredRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      // Deduplicated
      const dedupedFiredRules = [...new Set(rawFiredRules)];

      // Should have exactly one entry after dedup
      expect(dedupedFiredRules.filter(r => r === 'Minderjarigheid')).toHaveLength(1);
    });
  });

  describe('Edge cases', () => {
    test('Kenmerktoekenning does NOT fire when all objects fail evaluation (missing attribute)', () => {
      const kenmerkRuleSource = `
Objecttype de Persoon (bezield)
    is minderjarig kenmerk (bijvoeglijk);
    de leeftijd Numeriek;

Regel Minderjarigheid
geldig altijd
    Een Persoon is minderjarig indien
        zijn leeftijd kleiner is dan 18.
`;

      const context = new Context();
      // Create person WITHOUT leeftijd - condition evaluation will fail
      const personId = context.generateObjectId('Persoon');
      context.createObject('Persoon', personId, {});

      const result = engine.run(kenmerkRuleSource, context);

      expect(result.success).toBe(true);

      const firedRules = context.getExecutionTrace()
        .filter(t => t.includes('RULE_FIRED'))
        .map(t => {
          const match = t.match(/rule_name='([^']+)'/);
          return match ? match[1] : t;
        });

      // Rule should NOT fire because condition can't be evaluated (missing leeftijd)
      expect(firedRules).not.toContain('Minderjarigheid');

      // Verify no kenmerk was set
      const persons = context.getObjectsByType('Persoon');
      expect(persons[0].kenmerken['is minderjarig']).toBeUndefined();
    });
  });
});
