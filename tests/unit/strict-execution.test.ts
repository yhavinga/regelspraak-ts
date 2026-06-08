import { Engine, Context } from '../../src';

describe('Strict execution', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  test('surfaces model-level decision-table failures in strict mode', () => {
    const source = `
Objecttype het Scenario
  de korting Numeriek;

Beslistabel Korting
geldig altijd
|   | de korting van een Scenario moet gesteld worden op | indien score gelijk is aan |
|---|----------------------------------------------------|----------------------------|
| 1 | 10                                                 | 5                          |
`;

    const parsed = engine.parseModel(source);
    expect(parsed.success).toBe(true);

    const context = new Context(parsed.model);
    context.createObject('Scenario', 'scenario1', {});
    context.setVariable('score', { type: 'number', value: 7 });

    const strictResult = engine.executeStrict(parsed.model, context);
    expect(strictResult.success).toBe(false);
    expect(strictResult.error?.message).toContain("Decision table 'Korting' failed in phase 3");
    expect(strictResult.error?.message).toContain('No matching row');
  });

  test('keeps legacy model-level decision-table failures lenient by default', () => {
    const source = `
Objecttype het Scenario
  de korting Numeriek;

Beslistabel Korting
geldig altijd
|   | de korting van een Scenario moet gesteld worden op | indien score gelijk is aan |
|---|----------------------------------------------------|----------------------------|
| 1 | 10                                                 | 5                          |
`;

    const parsed = engine.parseModel(source);
    expect(parsed.success).toBe(true);

    const context = new Context(parsed.model);
    context.createObject('Scenario', 'scenario1', {});
    context.setVariable('score', { type: 'number', value: 7 });

    const result = engine.execute(parsed.model, context);
    expect(result.success).toBe(true);
  });

  test('fails strict type Model execution when condition evaluation errors', () => {
    const source = `
Objecttype het Scenario
  het bedrag Numeriek;

Regel bepaal bedrag
geldig altijd
  Het bedrag van een Scenario moet gesteld worden op 1
  indien 1 gedeeld door 0 is gelijk aan 1.
`;

    const context = new Context();
    context.createObject('Scenario', 'scenario1', {});

    const result = engine.runStrict(source, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain("Condition evaluation failed for rule 'bepaal bedrag'");
    expect(result.error?.message).toContain('Division by zero');
  });

  test('fails strict object-scoped assignment when navigation cannot be completed', () => {
    const source = `
Objecttype de Adres
  de straatnaam Tekst;

Objecttype de Persoon
  het adres Adres;

Objecttype de Bedrijf
  de eigenaar Persoon;

Regel bepaal straatnaam
geldig altijd
  De straatnaam van het adres van de eigenaar van een Bedrijf moet gesteld worden op "Test".
`;

    const context = new Context();
    context.createObject('Bedrijf', 'bedrijf1', {
      eigenaar: { type: 'object', value: {} }
    });

    const result = engine.runStrict(source, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('Navigation failed at segment: adres');
  });

  test('fails strict standalone rule assignment when navigation cannot be completed', () => {
    const source = `
Regel bepaal straatnaam
geldig altijd
  De straatnaam van het adres van de eigenaar van een Bedrijf moet gesteld worden op "Test".
`;

    const context = new Context();
    context.createObject('Bedrijf', 'bedrijf1', {
      eigenaar: { type: 'object', value: {} }
    });

    const result = engine.runStrict(source, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('Navigation failed at segment: adres');
  });

  test('fails strict standalone characteristic assignment when condition evaluation errors', () => {
    const source = `
Regel bepaal minderjarig
geldig altijd
  Een Persoon is minderjarig indien 1 gedeeld door 0 is gelijk aan 1.
`;

    const context = new Context();
    context.createObject('Persoon', 'persoon1', {});

    const result = engine.runStrict(source, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain("Condition evaluation failed for rule 'bepaal minderjarig'");
    expect(result.error?.message).toContain('Division by zero');
  });

  test('fails strict rule group execution when an inner rule fails', () => {
    const source = `
Objecttype het Scenario
  het bedrag Numeriek;

Regelgroep Scenario berekeningen
Regel bepaal bedrag
  geldig altijd
    Het bedrag van een Scenario moet gesteld worden op 1
    indien 1 gedeeld door 0 is gelijk aan 1.
`;

    const context = new Context();
    context.createObject('Scenario', 'scenario1', {});

    const result = engine.runStrict(source, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('Condition evaluation failed');
    expect(result.error?.message).toContain('Division by zero');
  });
});
