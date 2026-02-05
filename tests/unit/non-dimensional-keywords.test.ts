import { Engine, Context } from '../../src';

describe('Engine - Non-Dimensional Keyword Attributes', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  /**
   * CORE TEST: When NO dimension is defined with "netto" as a label,
   * the word "netto" should NOT be stripped from attribute names.
   */
  test('should allow "netto inkomen" as plain attribute when no bruto/netto dimension defined', () => {
    const model = `
Eenheidsysteem Valuta
    de euro (mv: euros) EUR €

Domein Bedrag is van het type Numeriek (getal met 2 decimalen)

Objecttype de Persoon (mv: Personen) (bezield)
    het netto inkomen Bedrag;

Regel Initialiseer netto inkomen
geldig altijd
    Het netto inkomen van een Persoon moet geïnitialiseerd worden op 0 €.

Regel Bereken netto inkomen
geldig altijd
    Het netto inkomen van een Persoon moet gesteld worden op 35000 €.
`;

    const result = engine.parse(model);

    // Should parse successfully
    expect(result.success).toBe(true);
    expect(result.ast?.type).toBe('Model');

    // The attribute should be named "netto inkomen", NOT "inkomen"
    const persoon = result.ast?.objectTypes.find((ot: any) => ot.name === 'Persoon');
    expect(persoon).toBeDefined();
    const nettoInkomenAttr = persoon?.members.find((m: any) =>
      m.name === 'netto inkomen' || m.name === 'nettoinkomen'
    );
    expect(nettoInkomenAttr).toBeDefined();
  });

  test('should execute rules with "netto inkomen" as plain attribute', () => {
    const model = `
Eenheidsysteem Valuta
    de euro (mv: euros) EUR €

Domein Bedrag is van het type Numeriek (getal met 2 decimalen)

Objecttype de Persoon (mv: Personen) (bezield)
    het netto inkomen Bedrag;

Regel Bereken netto inkomen
geldig altijd
    Het netto inkomen van een Persoon moet gesteld worden op 35000 €.
`;

    const context = new Context();
    context.setEvaluationDate(new Date('2024-01-01'));
    context.createObject('Persoon', 'persoon1', {});

    const result = engine.run(model, context);

    expect(result.success).toBe(true);

    // Check the computed value
    const persoon = context.getObject('Persoon', 'persoon1');
    expect(persoon?.['netto inkomen']?.value ?? persoon?.['nettoinkomen']?.value).toBe(35000);
  });

  test('should allow "bruto inkomen" as plain attribute when no dimension defined', () => {
    const model = `
Eenheidsysteem Valuta
    de euro (mv: euros) EUR €

Domein Bedrag is van het type Numeriek (getal met 2 decimalen)

Objecttype de Persoon (mv: Personen) (bezield)
    het bruto inkomen Bedrag;

Regel Bereken bruto inkomen
geldig altijd
    Het bruto inkomen van een Persoon moet gesteld worden op 50000 €.
`;

    const context = new Context();
    context.setEvaluationDate(new Date('2024-01-01'));
    context.createObject('Persoon', 'persoon1', {});

    const result = engine.run(model, context);

    expect(result.success).toBe(true);

    const persoon = context.getObject('Persoon', 'persoon1');
    expect(persoon?.['bruto inkomen']?.value ?? persoon?.['brutoinkomen']?.value).toBe(50000);
  });

  /**
   * CONTRAST TEST: When a dimension IS defined with "netto" as a label,
   * AND an attribute is declared "gedimensioneerd met" that dimension,
   * THEN "netto" should be treated as a dimension coordinate.
   */
  test('should strip "netto" only when dimension is defined and attribute is dimensioned', () => {
    const model = `
Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
    het inkomen Numeriek (geheel getal) gedimensioneerd met brutonettodimensie;
`;

    const result = engine.parse(model);

    expect(result.success).toBe(true);

    // The attribute should be named "inkomen" (base name)
    const persoon = result.ast?.objectTypes.find((ot: any) => ot.name === 'Persoon');
    expect(persoon).toBeDefined();
    const inkomenAttr = persoon?.members.find((m: any) => m.name === 'inkomen');
    expect(inkomenAttr).toBeDefined();
    expect(inkomenAttr?.dimensions).toContain('brutonettodimensie');
  });

  /**
   * Realistic test based on bedrag-ineens use case with both bruto and netto inkomen
   * Simpler test without complex calculations
   */
  test('should support realistic bedrag-ineens scenario with netto inkomen', () => {
    const model = `
Eenheidsysteem Valuta
    de euro (mv: euros) EUR €

Domein Bedrag is van het type Numeriek (getal met 2 decimalen)

Objecttype de Persoon (mv: Personen) (bezield)
    het bruto inkomen Bedrag;
    het netto inkomen Bedrag;

Regel Bereken netto inkomen
geldig altijd
    Het netto inkomen van een Persoon moet gesteld worden op 35000 €.
`;

    const context = new Context();
    context.setEvaluationDate(new Date('2024-01-01'));
    context.createObject('Persoon', 'p1', {});

    const result = engine.run(model, context);

    expect(result.success).toBe(true);

    const persoon = context.getObject('Persoon', 'p1');
    // Both bruto and netto inkomen should be valid attribute names without dimensions defined
    expect(persoon?.['netto inkomen']?.value).toBe(35000);
  });

  test('should allow "huidig jaar" in attribute name when no year dimension defined', () => {
    const model = `
Eenheidsysteem Valuta
    de euro (mv: euros) EUR €

Domein Bedrag is van het type Numeriek (getal met 2 decimalen)

Objecttype de Persoon (mv: Personen) (bezield)
    het inkomen huidig jaar Bedrag;

Regel Bereken inkomen huidig jaar
geldig altijd
    Het inkomen huidig jaar van een Persoon moet gesteld worden op 45000 €.
`;

    const context = new Context();
    context.setEvaluationDate(new Date('2024-01-01'));
    context.createObject('Persoon', 'persoon1', {});

    const result = engine.run(model, context);

    expect(result.success).toBe(true);

    const persoon = context.getObject('Persoon', 'persoon1');
    // The attribute name should be preserved as-is
    expect(persoon?.['inkomen huidig jaar']?.value ?? persoon?.['inkomenhuidig jaar']?.value).toBe(45000);
  });

  test('should strip year keywords only when year dimension is defined', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Objecttype de Persoon (mv: Personen) (bezield)
    het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie;
`;

    const result = engine.parse(model);

    expect(result.success).toBe(true);

    const persoon = result.ast?.objectTypes.find((ot: any) => ot.name === 'Persoon');
    expect(persoon).toBeDefined();
    const inkomenAttr = persoon?.members.find((m: any) => m.name === 'inkomen');
    expect(inkomenAttr).toBeDefined();
    expect(inkomenAttr?.dimensions).toContain('jaardimensie');
  });
});
