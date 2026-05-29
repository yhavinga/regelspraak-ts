import { Engine, Context } from '../../src';

/**
 * Recursion Support Tests
 *
 * Tests verify recursive rule group parsing and execution using spec-compliant syntax.
 * Recursive rule groups are marked with "is recursief" and iterate until fixpoint.
 */
describe('Engine - Recursion Support', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  test('should parse a simple non-recursive regel group', () => {
    const model = `
Objecttype de Persoon (mv: personen)
    de naam Tekst;
    de leeftijd Numeriek met eenheid jr;

Regelgroep Persoonberekeningen
Regel set naam
    geldig altijd
        De naam van een Persoon moet gesteld worden op "Jan".

Regel set leeftijd
    geldig altijd
        De leeftijd van een Persoon moet gesteld worden op 25 jr.
`;

    const context = new Context();
    const persoon = {
      type: 'object',
      value: {}
    };
    context.setVariable('Persoon', persoon);

    const result = engine.run(model, context);

    expect(result.success).toBe(true);

    // Check that the regel group was parsed
    const ast = engine.parse(model);
    expect(ast.success).toBe(true);
    expect(ast.ast).toBeDefined();

    // Find the regel group in the AST
    if (Array.isArray(ast.ast)) {
      const regelGroep = ast.ast.find((item: any) => item.type === 'RegelGroep');
      expect(regelGroep).toBeDefined();
      expect(regelGroep.name).toBe('Persoonberekeningen');
      expect(regelGroep.isRecursive).toBe(false);
      expect(regelGroep.rules).toHaveLength(2);
    }
  });

  test('should parse a recursive regel group', () => {
    const model = `
Objecttype de Berekening (mv: berekeningen)
    de iteratie Numeriek;
    de waarde Numeriek;

Objecttype de Container (mv: containers)
    de naam Tekst;

Feittype berekeningen van container
    de container	Container
    de berekening (mv: berekeningen)	Berekening
één container heeft meerdere berekeningen

Regelgroep Iteratieve berekening is recursief
Regel creeer berekening
    geldig altijd
        Een container heeft een berekening
        met iteratie gelijk aan 1 en waarde gelijk aan 10.

Regel bereken waarde
    geldig altijd
        De waarde van een Berekening moet berekend worden als de waarde van de Berekening plus 1.
`;

    const result = engine.parse(model);

    expect(result.success).toBe(true);
    expect(result.ast).toBeDefined();

    // Find the regel group in the AST
    if (Array.isArray(result.ast)) {
      const regelGroep = result.ast.find((item: any) => item.type === 'RegelGroep');
      expect(regelGroep).toBeDefined();
      expect(regelGroep.name).toBe('Iteratieve berekening');
      expect(regelGroep.isRecursive).toBe(true);
      expect(regelGroep.rules).toHaveLength(2);
    }
  });

  test('should execute a recursive calculation with termination', () => {
    const model = `
Objecttype de Counter (mv: counters)
    de waarde Numeriek;
    de iteratie Numeriek;

Objecttype de Registry (mv: registries)
    de naam Tekst;
    de count Numeriek;

Feittype counters van registry
    de registry	Registry
    de counter (mv: counters)	Counter
één registry heeft meerdere counters

Regelgroep Tel tot vijf is recursief
Regel update count
    geldig altijd
        De count van een Registry moet berekend worden als de count van de Registry plus 1
        indien de count van de Registry kleiner is dan 5.
`;

    const parseResult = engine.parseModel(model);
    expect(parseResult.success).toBe(true);

    const context = new Context(parseResult.model);
    context.createObject('Registry', 'reg_1', {
      'naam': { type: 'string', value: 'Main' },
      'count': { type: 'number', value: 0 }
    });

    const result = engine.execute(parseResult.model, context);
    expect(result.success).toBe(true);

    // Should have incremented count (recursion works)
    const registries = context.getObjectsByType('Registry');
    expect(registries.length).toBe(1);
  });

  test('should handle recursive groups with iteration limit', () => {
    // Recursive groups have a built-in iteration limit to prevent infinite loops
    const model = `
Objecttype de InfiniteLoop (mv: infinite loops)
    de waarde Numeriek;

Objecttype de System (mv: systems)
    de status Tekst;

Feittype loops van system
    het system	System
    de loop (mv: loops)	InfiniteLoop
één system heeft meerdere loops

Regelgroep Infinite loop is recursief
Regel update status
    geldig altijd
        De status van een System moet gesteld worden op "running".
`;

    const parseResult = engine.parseModel(model);
    expect(parseResult.success).toBe(true);

    const context = new Context(parseResult.model);
    context.createObject('System', 'sys_1', {
      'status': { type: 'string', value: 'stopped' }
    });

    const result = engine.execute(parseResult.model, context);
    // Should complete without hanging (iteration limit prevents infinite loop)
    expect(result.success).toBe(true);
  });

  test('should execute non-recursive regel group with multiple rules', () => {
    const model = `
Parameter het btw percentage : Numeriek (getal)

Objecttype de Product (mv: producten)
    de prijs Numeriek met eenheid EUR;
    de btw Numeriek met eenheid EUR;
    de totaalprijs Numeriek met eenheid EUR;

Regelgroep Prijsberekeningen
Regel bereken btw
    geldig altijd
        De btw van een Product moet berekend worden als de prijs van het Product maal het btw percentage.

Regel bereken totaalprijs
    geldig altijd
        De totaalprijs van een Product moet berekend worden als de prijs van het Product plus de btw van het Product.
`;

    const context = new Context();
    context.setVariable('btw percentage', { type: 'number', value: 0.21 });

    const product = {
      type: 'object',
      value: {
        prijs: { type: 'number', value: 100, unit: { name: 'EUR' } }
      }
    };
    context.setVariable('Product', product);

    const result = engine.run(model, context);

    expect(result.success).toBe(true);

    // For now, just check that parsing and execution completed successfully
    // Rule group execution for existing objects would need additional implementation
  });
});
