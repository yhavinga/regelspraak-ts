import { Engine, Context } from '../../src';
import { DimensionedRuntimeValue, Value } from '../../src/interfaces';
import { AntlrParser } from '../../src/parser';
import { createResolutionContext, resolveExpression } from '../../src/resolver/expression-resolver';

function dimensionedNumbers(
  dimension: string,
  values: Record<string, number>
): DimensionedRuntimeValue {
  return {
    type: 'dimensioned',
    value: Object.entries(values).map(([label, value]) => ({
      coordinates: { [dimension]: label },
      value: { type: 'number', value }
    }))
  };
}

function dimensionedDates(
  dimension: string,
  values: Record<string, Date>
): DimensionedRuntimeValue {
  return {
    type: 'dimensioned',
    value: Object.entries(values).map(([label, value]) => ({
      coordinates: { [dimension]: label },
      value: { type: 'date', value }
    }))
  };
}

function twoDimensionalNumbers(
  firstDimension: string,
  secondDimension: string,
  cells: Array<[string, string, number]>
): DimensionedRuntimeValue {
  return {
    type: 'dimensioned',
    value: cells.map(([firstLabel, secondLabel, value]) => ({
      coordinates: {
        [firstDimension]: firstLabel,
        [secondDimension]: secondLabel
      },
      value: { type: 'number', value }
    }))
  };
}

describe('Engine - Dimension Aggregation with Range Filtering', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  describe('parser and resolver', () => {
    function parseAggregationExpression(expressionSource: string): any {
      const parser = new AntlrParser();
      const model = parser.parseModel(`
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari
  3. maart

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de totaalomzet Numeriek (getal met 2 decimalen);

Regel bereken totaalomzet
geldig altijd
De totaalomzet van een Verkoop moet berekend worden als
${expressionSource}.
`);
      const rule = model.regels[0] as any;
      const result = rule.resultaat || rule.result || rule.versions?.[0]?.resultaat || rule.versions?.[0]?.result;
      const expression = result.expression;
      const context = createResolutionContext(model, 'Verkoop', 'verkoop');
      resolveExpression(expression, context);
      return expression;
    }

    test('should parse and resolve aggregation over all labels', () => {
      const expression = parseAggregationExpression('de som van zijn omzet in maand over alle maanddimensies');

      expect(expression).toMatchObject({
        type: 'AggregationExpression',
        aggregationType: 'som',
        dimensionSelection: {
          kind: 'all',
          dimensionName: 'maanddimensies',
          resolvedDimension: 'maanddimensie',
          resolvedLabels: ['januari', 'februari', 'maart']
        }
      });
    });

    test('should parse and resolve aggregation over a label range', () => {
      const expression = parseAggregationExpression(
        'de som van zijn omzet in maand over de maanddimensies vanaf januari t/m februari'
      );

      expect(expression.dimensionSelection).toMatchObject({
        kind: 'range',
        dimensionName: 'maanddimensies',
        fromLabel: 'januari',
        toLabel: 'februari',
        resolvedDimension: 'maanddimensie',
        resolvedLabels: ['januari', 'februari']
      });
    });

    test('should parse and resolve aggregation over an explicit label set', () => {
      const expression = parseAggregationExpression(
        'de som van zijn omzet in maand over de maanddimensies in { januari, maart en februari }'
      );

      expect(expression.dimensionSelection).toMatchObject({
        kind: 'set',
        dimensionName: 'maanddimensies',
        labels: ['januari', 'maart', 'februari'],
        resolvedDimension: 'maanddimensie',
        resolvedLabels: ['januari', 'maart', 'februari']
      });
    });

    test('should reject unknown labels during resolution', () => {
      expect(() => parseAggregationExpression(
        'de som van zijn omzet in maand over de maanddimensies in { januari en april }'
      )).toThrow(/Unknown label 'april'/);
    });

    test('should resolve fixed dimension labels in the aggregation target', () => {
      const parser = new AntlrParser();
      const model = parser.parseModel(`
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel in):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen in jaar Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;
  het totaal geselecteerd inkomen Numeriek (geheel getal);

Regel bereken totaal geselecteerd inkomen
geldig altijd
Het totaal geselecteerd inkomen van een Persoon moet berekend worden als
de som van zijn netto inkomen in jaar over alle jaardimensies.
`);
      const rule = model.regels[0] as any;
      const result = rule.resultaat || rule.result || rule.versions?.[0]?.resultaat || rule.versions?.[0]?.result;
      const expression = result.expression;
      const context = createResolutionContext(model, 'Persoon', 'persoon');
      resolveExpression(expression, context);

      expect(expression).toMatchObject({
        type: 'AggregationExpression',
        target: {
          type: 'AttributeReference',
          path: ['zijn inkomen in jaar']
        },
        dimensionSelection: {
          kind: 'all',
          resolvedDimension: 'jaardimensie',
          fixedLabels: ['netto'],
          fixedCoordinates: [
            {
              dimension: 'brutonettodimensie',
              label: 'netto'
            }
          ]
        }
      });
    });
  });

  test('should aggregate over dimension range using vanaf...t/m syntax', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. zes jaar geleden
  2. vijf jaar geleden
  3. vier jaar geleden
  4. drie jaar geleden
  5. twee jaar geleden
  6. een jaar geleden
  7. heden

Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
  de betaalde belasting in jaar Numeriek (getal met 2 decimalen) gedimensioneerd met jaardimensie;
  de vierjaarstotaal Numeriek (getal met 2 decimalen);

Regel bereken vierjaarstotaal
geldig altijd
De vierjaarstotaal van een Natuurlijk persoon moet berekend worden als 
de som van zijn betaalde belasting in jaar vanaf vier jaar geleden t/m een jaar geleden.
`;
    
    const context = new Context();
    
    // Create a person object with dimensional tax values
    const persoonAttributes: Record<string, Value> = {
      'betaalde belasting in jaar': dimensionedNumbers('jaardimensie', {
        'zes jaar geleden': 10000,
        'vijf jaar geleden': 11000,
        'vier jaar geleden': 12000,
        'drie jaar geleden': 13000,
        'twee jaar geleden': 14000,
        'een jaar geleden': 15000,
        'heden': 16000
      })
    };
    
    // Add object - visitor concatenates to "Natuurlijkpersoon"
    context.createObject('Natuurlijkpersoon', 'persoon1', persoonAttributes as any);
    
    const result = engine.run(model, context);
    
    if (!result.success) {
      console.error('Parse/execution error:', result.error);
    }
    
    expect(result.success).toBe(true);
    
    // Check that the rule calculated the sum correctly
    // Should sum: 12000 + 13000 + 14000 + 15000 = 54000
    const persoonObj = context.getObject('Natuurlijkpersoon', 'persoon1');
    expect(persoonObj).toBeDefined();
    expect(persoonObj?.['vierjaarstotaal']).toMatchObject({
      type: 'number',
      value: 54000
    });
  });

  test('should handle empty dimension range', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari
  3. maart

Objecttype de Verkoop (mv: Verkopen)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de Q1 omzet Numeriek (getal met 2 decimalen);

Regel bereken Q1 omzet
geldig altijd
De Q1 omzet van een Verkoop moet berekend worden als 
de som van zijn omzet in maand vanaf januari t/m maart.
`;
    
    const context = new Context();
    
    // Create a sales object with only some months having values
    const verkoopAttributes: Record<string, Value> = {
      'omzet in maand': dimensionedNumbers('maanddimensie', {
        'januari': 5000,
        'februari': 6000,
        'maart': 7000
      })
    };
    
    context.createObject('Verkoop', 'verkoop1', verkoopAttributes as any);
    
    const result = engine.run(model, context);
    
    if (!result.success) {
      console.error('Parse/execution error:', result.error);
    }
    
    expect(result.success).toBe(true);
    
    // Check that the rule calculated the sum correctly
    // Should sum: 5000 + 6000 + 7000 = 18000
    const verkoopObj = context.getObject('Verkoop', 'verkoop1');
    expect(verkoopObj).toBeDefined();
    expect(verkoopObj?.['Q1 omzet']).toMatchObject({
      type: 'number',
      value: 18000
    });
  });

  test('should handle dimension range with missing values', () => {
    const model = `
Dimensie de kwartaaldimensie, bestaande uit de kwartaaldimensies (na het attribuut met voorzetsel in):
  1. Q1
  2. Q2
  3. Q3
  4. Q4

Objecttype de Bedrijf (mv: Bedrijven)
  de winst in kwartaal Numeriek (getal met 2 decimalen) gedimensioneerd met kwartaaldimensie;
  de eerste helft winst Numeriek (getal met 2 decimalen);

Regel bereken eerste helft
geldig altijd
De eerste helft winst van een Bedrijf moet berekend worden als 
de som van zijn winst in kwartaal vanaf Q1 t/m Q2.
`;
    
    const context = new Context();
    
    // Create a company object with only Q1 having a value (Q2 missing)
    const bedrijfAttributes: Record<string, Value> = {
      'winst in kwartaal': dimensionedNumbers('kwartaaldimensie', {
        'Q1': 25000,
        // Q2 is missing
        'Q3': 30000,
        'Q4': 35000
      })
    };
    
    context.createObject('Bedrijf', 'bedrijf1', bedrijfAttributes as any);
    
    const result = engine.run(model, context);
    
    if (!result.success) {
      console.error('Parse/execution error:', result.error);
    }
    
    expect(result.success).toBe(true);
    
    // Check that the rule handled the missing value gracefully
    // Should sum only Q1: 25000 (Q2 is missing)
    const bedrijfObj = context.getObject('Bedrijf', 'bedrijf1');
    expect(bedrijfObj).toBeDefined();
    // The aggregation should handle missing values - only sum what's available
    expect(bedrijfObj?.['eerste helft winst']).toMatchObject({
      type: 'number',
      value: 25000  // Only Q1 since Q2 is missing
    });
  });

  test('should aggregate over all labels on an explicit dimension axis', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari
  3. maart

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de jaaromzet Numeriek (getal met 2 decimalen);

Regel bereken jaaromzet
geldig altijd
De jaaromzet van een Verkoop moet berekend worden als
de som van zijn omzet in maand over alle maanddimensies.
`;

    const context = new Context();
    context.createObject('Verkoop', 'verkoop1', {
      'omzet in maand': dimensionedNumbers('maanddimensie', {
        januari: 5000,
        februari: 6000,
        maart: 7000
      })
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(true);
    expect(context.getObject('Verkoop', 'verkoop1')?.['jaaromzet']).toMatchObject({
      type: 'number',
      value: 18000
    });
  });

  test('should aggregate over an explicit dimension label set', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari
  3. maart
  4. april

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de geselecteerde omzet Numeriek (getal met 2 decimalen);

Regel bereken geselecteerde omzet
geldig altijd
De geselecteerde omzet van een Verkoop moet berekend worden als
de som van zijn omzet in maand over de maanddimensies in { januari, maart en april }.
`;

    const context = new Context();
    context.createObject('Verkoop', 'verkoop1', {
      'omzet in maand': dimensionedNumbers('maanddimensie', {
        januari: 5000,
        februari: 6000,
        maart: 7000,
        april: 8000
      })
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(true);
    expect(context.getObject('Verkoop', 'verkoop1')?.['geselecteerde omzet']).toMatchObject({
      type: 'number',
      value: 20000
    });
  });

  test('should aggregate date values over a selected dimension range', () => {
    const model = `
Dimensie de stapdimensie, bestaande uit de stapdimensies (na het attribuut met voorzetsel in):
  1. aanvraag
  2. beoordeling
  3. besluit

Objecttype de Dossier (mv: Dossiers) (bezield)
  de datum in stap Datum gedimensioneerd met stapdimensie;
  de eerste datum Datum;

Regel bepaal eerste datum
geldig altijd
De eerste datum van een Dossier moet berekend worden als
de eerste van zijn datum in stap over de stapdimensies vanaf aanvraag t/m besluit.
`;

    const context = new Context();
    context.createObject('Dossier', 'dossier1', {
      'datum in stap': dimensionedDates('stapdimensie', {
        aanvraag: new Date('2026-01-03'),
        beoordeling: new Date('2026-01-02'),
        besluit: new Date('2026-01-05')
      })
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(true);
    expect(context.getObject('Dossier', 'dossier1')?.['eerste datum']).toMatchObject({
      type: 'date',
      value: new Date('2026-01-03')
    });
  });

  test('should aggregate one axis of a multi-dimensional attribute', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel in):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen in jaar Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;
  het totaal inkomen Numeriek (geheel getal);

Regel bereken totaal inkomen
geldig altijd
Het totaal inkomen van een Persoon moet berekend worden als
de som van zijn inkomen in jaar over alle jaardimensies.
`;

    const context = new Context();
    context.createObject('Persoon', 'persoon1', {
      'inkomen in jaar': twoDimensionalNumbers('jaardimensie', 'brutonettodimensie', [
        ['vorig jaar', 'bruto', 100],
        ['vorig jaar', 'netto', 80],
        ['huidig jaar', 'bruto', 200],
        ['huidig jaar', 'netto', 160]
      ])
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(true);
    expect(context.getObject('Persoon', 'persoon1')?.['totaal inkomen']).toMatchObject({
      type: 'number',
      value: 540
    });
  });

  test('should aggregate one axis while fixing another dimension from the target label', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel in):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen in jaar Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;
  het totaal geselecteerd inkomen Numeriek (geheel getal);

Regel bereken totaal geselecteerd inkomen
geldig altijd
Het totaal geselecteerd inkomen van een Persoon moet berekend worden als
de som van zijn netto inkomen in jaar over alle jaardimensies.
`;

    const context = new Context();
    context.createObject('Persoon', 'persoon1', {
      'inkomen in jaar': twoDimensionalNumbers('jaardimensie', 'brutonettodimensie', [
        ['vorig jaar', 'bruto', 100],
        ['vorig jaar', 'netto', 80],
        ['huidig jaar', 'bruto', 200],
        ['huidig jaar', 'netto', 160]
      ])
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(true);
    expect(context.getObject('Persoon', 'persoon1')?.['totaal geselecteerd inkomen']).toMatchObject({
      type: 'number',
      value: 240
    });
  });

  test('should apply fixed target labels with legacy range syntax', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel in):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen in jaar Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;
  het geselecteerd inkomen Numeriek (geheel getal);

Regel bereken geselecteerd inkomen
geldig altijd
Het geselecteerd inkomen van een Persoon moet berekend worden als
de som van zijn netto inkomen in jaar vanaf vorig jaar t/m huidig jaar.
`;

    const context = new Context();
    context.createObject('Persoon', 'persoon1', {
      'inkomen in jaar': twoDimensionalNumbers('jaardimensie', 'brutonettodimensie', [
        ['vorig jaar', 'bruto', 100],
        ['vorig jaar', 'netto', 80],
        ['huidig jaar', 'bruto', 200],
        ['huidig jaar', 'netto', 160]
      ])
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(true);
    expect(context.getObject('Persoon', 'persoon1')?.['geselecteerd inkomen']).toMatchObject({
      type: 'number',
      value: 240
    });
  });

  test('should reject legacy plain object maps for dimensioned attributes', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de jaaromzet Numeriek (getal met 2 decimalen);

Regel bereken jaaromzet
geldig altijd
De jaaromzet van een Verkoop moet berekend worden als
de som van zijn omzet in maand over alle maanddimensies.
`;

    const context = new Context();
    context.createObject('Verkoop', 'verkoop1', {
      'omzet in maand': {
        januari: 5000,
        februari: 6000
      } as any
    });

    expect(() => engine.run(model, context)).toThrow(/requires a dimensioned value/);
  });

  test('should reject unknown labels in explicit selections', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de jaaromzet Numeriek (getal met 2 decimalen);

Regel bereken jaaromzet
geldig altijd
De jaaromzet van een Verkoop moet berekend worden als
de som van zijn omzet in maand over de maanddimensies in { januari en maart }.
`;

    const context = new Context();
    context.createObject('Verkoop', 'verkoop1', {
      'omzet in maand': dimensionedNumbers('maanddimensie', {
        januari: 5000,
        februari: 6000
      })
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/Unknown label 'maart'/);
  });

  test('should reject duplicate labels in explicit selections', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de jaaromzet Numeriek (getal met 2 decimalen);

Regel bereken jaaromzet
geldig altijd
De jaaromzet van een Verkoop moet berekend worden als
de som van zijn omzet in maand over de maanddimensies in { januari, januari en februari }.
`;

    const context = new Context();
    context.createObject('Verkoop', 'verkoop1', {
      'omzet in maand': dimensionedNumbers('maanddimensie', {
        januari: 5000,
        februari: 6000
      })
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/Duplicate label 'januari'/);
  });

  test('should reject reversed dimension ranges', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari
  3. maart

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet in maand Numeriek (getal met 2 decimalen) gedimensioneerd met maanddimensie;
  de jaaromzet Numeriek (getal met 2 decimalen);

Regel bereken jaaromzet
geldig altijd
De jaaromzet van een Verkoop moet berekend worden als
de som van zijn omzet in maand over de maanddimensies vanaf maart t/m januari.
`;

    const context = new Context();
    context.createObject('Verkoop', 'verkoop1', {
      'omzet in maand': dimensionedNumbers('maanddimensie', {
        januari: 5000,
        februari: 6000,
        maart: 7000
      })
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/comes after/);
  });

  test('should reject dimension aggregation over a non-dimensioned target', () => {
    const model = `
Dimensie de maanddimensie, bestaande uit de maanddimensies (na het attribuut met voorzetsel in):
  1. januari
  2. februari

Objecttype de Verkoop (mv: Verkopen) (bezield)
  de omzet Numeriek (getal met 2 decimalen);
  de jaaromzet Numeriek (getal met 2 decimalen);

Regel bereken jaaromzet
geldig altijd
De jaaromzet van een Verkoop moet berekend worden als
de som van zijn omzet over alle maanddimensies.
`;

    const context = new Context();
    context.createObject('Verkoop', 'verkoop1', {
      omzet: { type: 'number', value: 5000 }
    });

    const result = engine.run(model, context);
    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/requires a dimensioned value/);
  });
});