import { Engine, Context, extractFiredRules, extractFiredRulesWithDetails } from '../../src';

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

  describe('Enhanced trace format for Gelijkstelling', () => {
    test('includes target and numeric value for computation rules', () => {
      const context = new Context();
      const id = context.generateObjectId('Scenario');
      context.createObject('Scenario', id, {
        pensioenvermogen: { type: 'number', value: 85000 },
        'opname percentage': { type: 'number', value: 10 }
      });

      const result = engine.run(`
Objecttype het Scenario
    het bedrag ineens Numeriek;
    het opname percentage Numeriek;
    het pensioenvermogen Numeriek;

Regel Bereken bedrag ineens
geldig altijd
    De bedrag ineens van een Scenario moet berekend worden als
        het pensioenvermogen maal het opname percentage gedeeld door 100.
`, context);

      expect(result.success).toBe(true);

      const trace = context.getExecutionTrace();
      const ruleTrace = trace.find(t => t.includes("rule_name='Bereken bedrag ineens'"));

      expect(ruleTrace).toBeDefined();
      expect(ruleTrace).toContain("target='Scenario.bedrag ineens'");
      expect(ruleTrace).toContain('value=8500');
    });

    test('extractFiredRules works with enhanced format (backward compatibility)', () => {
      const trace = [
        "RULE_FIRED rule_name='Rule1',target='A.b',value=100",
        "RULE_FIRED rule_name='Rule2'"
      ];
      expect(extractFiredRules(trace)).toEqual(['Rule1', 'Rule2']);
    });

    test('extractFiredRulesWithDetails extracts target and value', () => {
      const trace = [
        "RULE_FIRED rule_name='Bereken bedrag',target='Scenario.bedrag',value=8500",
        "RULE_FIRED rule_name='Bereken percentage',target='Scenario.percentage',value=10.5",
        "RULE_FIRED rule_name='Simple Rule'"
      ];

      const details = extractFiredRulesWithDetails(trace);

      expect(details).toHaveLength(3);
      expect(details[0]).toEqual({
        ruleName: 'Bereken bedrag',
        target: 'Scenario.bedrag',
        value: '8500'
      });
      expect(details[1]).toEqual({
        ruleName: 'Bereken percentage',
        target: 'Scenario.percentage',
        value: '10.5'
      });
      expect(details[2]).toEqual({
        ruleName: 'Simple Rule',
        target: undefined,
        value: undefined
      });
    });

    test('handles string values with quotes', () => {
      const context = new Context();
      const id = context.generateObjectId('Rapport');
      context.createObject('Rapport', id, {});

      const result = engine.run(`
Objecttype het Rapport
    de status Tekst;

Regel Zet status
geldig altijd
    De status van een Rapport moet gesteld worden op "voltooid".
`, context);

      expect(result.success).toBe(true);

      const trace = context.getExecutionTrace();
      const ruleTrace = trace.find(t => t.includes("rule_name='Zet status'"));

      expect(ruleTrace).toBeDefined();
      expect(ruleTrace).toContain("target='Rapport.status'");
      expect(ruleTrace).toContain('value="voltooid"');
    });

    test('handles boolean values', () => {
      const context = new Context();
      const id = context.generateObjectId('Status');
      context.createObject('Status', id, {
        bereikbaar: { type: 'boolean', value: true }
      });

      const result = engine.run(`
Objecttype de Status
    de actief Boolean;
    de bereikbaar Boolean;

Regel Zet actief
geldig altijd
    De actief van een Status moet gesteld worden op de bereikbaar van de Status.
`, context);

      expect(result.success).toBe(true);

      const trace = context.getExecutionTrace();
      const ruleTrace = trace.find(t => t.includes("rule_name='Zet actief'"));

      expect(ruleTrace).toBeDefined();
      expect(ruleTrace).toContain("target='Status.actief'");
      expect(ruleTrace).toContain('value=true');
    });

    test('deduplicates rules when iterating over multiple objects', () => {
      const context = new Context();
      // Create multiple objects
      context.createObject('Scenario', context.generateObjectId('Scenario'), {
        pensioenvermogen: { type: 'number', value: 85000 },
        'opname percentage': { type: 'number', value: 10 }
      });
      context.createObject('Scenario', context.generateObjectId('Scenario'), {
        pensioenvermogen: { type: 'number', value: 170000 },
        'opname percentage': { type: 'number', value: 5 }
      });

      const result = engine.run(`
Objecttype het Scenario
    het bedrag ineens Numeriek;
    het opname percentage Numeriek;
    het pensioenvermogen Numeriek;

Regel Bereken bedrag ineens
geldig altijd
    De bedrag ineens van een Scenario moet berekend worden als
        het pensioenvermogen maal het opname percentage gedeeld door 100.
`, context);

      expect(result.success).toBe(true);

      // Check that extractFiredRulesWithDetails deduplicates
      const details = extractFiredRulesWithDetails(context.getExecutionTrace());
      const berekeningRules = details.filter(d => d.ruleName === 'Bereken bedrag ineens');

      // Should only have one entry even with multiple objects
      expect(berekeningRules).toHaveLength(1);
    });
  });
});
