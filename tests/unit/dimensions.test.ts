import { Engine, Context } from '../../src';
import { AntlrParser } from '../../src/parser';
import { createResolutionContext, resolveExpression } from '../../src/resolver/expression-resolver';

describe('Engine - Dimensions', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  test('should parse a simple dimension definition', () => {
    const dimensionDef = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar
`;
    
    const result = engine.parse(dimensionDef);
    
    expect(result.success).toBe(true);
    expect(result.ast).toMatchObject({
      type: 'Dimension',
      name: 'jaardimensie',
      plural: 'jaardimensies',
      usageStyle: 'prepositional',
      preposition: 'van',
      labels: [
        { position: 1, label: 'vorig jaar' },
        { position: 2, label: 'huidig jaar' }
      ]
    });
  });

  test('should parse an adjectival dimension', () => {
    const dimensionDef = `
Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto
`;
    
    const result = engine.parse(dimensionDef);
    
    expect(result.success).toBe(true);
    expect(result.ast).toMatchObject({
      type: 'Dimension',
      name: 'brutonettodimensie',
      plural: 'brutonettodimensies',
      usageStyle: 'adjectival',
      labels: [
        { position: 1, label: 'bruto' },
        { position: 2, label: 'netto' }
      ]
    });
    expect(result.ast?.preposition).toBeUndefined();
  });

  test('should parse dimension with alternative preposition', () => {
    const dimensionDef = `
Dimensie de periodetypedimensie, bestaande uit de periodetypedimensies (na het attribuut met voorzetsel in):
  1. maandelijks
  2. jaarlijks
`;
    
    const result = engine.parse(dimensionDef);
    
    expect(result.success).toBe(true);
    expect(result.ast).toMatchObject({
      type: 'Dimension',
      name: 'periodetypedimensie',
      plural: 'periodetypedimensies',
      usageStyle: 'prepositional',
      preposition: 'in',
      labels: [
        { position: 1, label: 'maandelijks' },
        { position: 2, label: 'jaarlijks' }
      ]
    });
  });

  test('should parse attribute with dimensions', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
  het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;
`;
    
    const result = engine.parse(model);
    
    expect(result.success).toBe(true);
    expect(result.ast?.type).toBe('Model');
    
    // Check dimensions are parsed
    expect(result.ast?.dimensions).toHaveLength(2);
    
    // Check object type with dimensioned attribute
    expect(result.ast?.objectTypes).toHaveLength(1);
    const objectType = result.ast?.objectTypes[0];
    const inkomenAttr = objectType.members.find((m: any) => m.name === 'inkomen');
    
    expect(inkomenAttr).toMatchObject({
      type: 'AttributeSpecification',
      name: 'inkomen',
      dataType: { type: 'Numeriek', numericSpec: { format: 'geheel getal', signConstraint: undefined, decimals: undefined } },
      dimensions: ['jaardimensie', 'brutonettodimensie']
    });
  });

  test('should parse dimension reference in expression', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;

Parameter de persoon : Persoon

Regel bereken netto inkomen huidig jaar
geldig altijd
Het netto inkomen van huidig jaar van de persoon moet berekend worden als het bruto inkomen van huidig jaar van de persoon maal 0,7.
`;
    
    // For now, just test that the model parses successfully
    // Full dimension reference evaluation would require expression evaluator updates
    const result = engine.parse(model);
    
    // Log the error if parsing fails
    if (!result.success) {
      console.error('Parse error:', result.errors);
    }
    
    expect(result.success).toBe(true);
    expect(result.ast?.type).toBe('Model');
    expect(result.ast?.dimensions).toHaveLength(2);
    expect(result.ast?.rules).toHaveLength(1);
  });

  describe('Dimension Resolution', () => {
    test('should resolve DimensionedAttributeReference coordinates', () => {
      const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;

Parameter de persoon : Persoon

Regel bereken netto inkomen huidig jaar
geldig altijd
Het netto inkomen van huidig jaar van de persoon moet berekend worden als het bruto inkomen van huidig jaar van de persoon maal 0,7.
`;

      const parser = new AntlrParser();
      const domainModel = parser.parseModel(model);

      expect(domainModel.dimensions).toHaveLength(2);
      expect(domainModel.regels).toHaveLength(1);

      const rule = domainModel.regels[0];
      const resultaat = rule.resultaat || rule.result;

      expect(resultaat).toBeDefined();
      expect(resultaat.type).toBe('Gelijkstelling');

      // The target should be a DimensionedAttributeReference
      const target = resultaat.target;
      expect(target.type).toBe('DimensionedAttributeReference');
      expect(target.dimensionLabels).toContain('netto');
      expect(target.dimensionLabels).toContain('huidig jaar');

      // Resolve the expression to populate coordinates
      const ctx = createResolutionContext(domainModel, 'Persoon', 'persoon');
      resolveExpression(target, ctx);

      // After resolution, coordinates should be populated
      expect(target.coordinates).toBeDefined();
      expect(target.coordinates).toHaveLength(2);

      // Check that coordinates are sorted by declared dimension order (jaardimensie first, then brutonettodimensie)
      expect(target.coordinates[0].dimension).toBe('jaardimensie');
      expect(target.coordinates[0].label).toBe('huidig jaar');
      expect(target.coordinates[1].dimension).toBe('brutonettodimensie');
      expect(target.coordinates[1].label).toBe('netto');
    });

    test('should error on missing dimension coordinate', () => {
      const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;

Parameter de persoon : Persoon
`;

      const parser = new AntlrParser();
      const domainModel = parser.parseModel(model);

      // Create a DimensionedAttributeReference with only one label (missing a dimension)
      const incompleteRef: any = {
        type: 'DimensionedAttributeReference',
        baseAttribute: {
          type: 'AttributeReference',
          path: ['Persoon', 'inkomen'],
          resolved: {
            resolvedPath: [
              { sourceName: 'Persoon', resolvedName: 'Persoon', kind: 'variable', sourceType: 'context', targetType: 'Persoon', cardinality: '1' },
              { sourceName: 'inkomen', resolvedName: 'inkomen', kind: 'attribute', sourceType: 'Persoon', targetType: 'Numeriek', cardinality: '1' }
            ]
          }
        },
        dimensionLabels: ['bruto']  // Missing jaardimensie label!
      };

      const ctx = createResolutionContext(domainModel, 'Persoon', 'persoon');

      // Should throw an error about missing dimension
      expect(() => resolveExpression(incompleteRef, ctx)).toThrow(/Missing dimension/);
    });

    test('should error on unknown dimension label', () => {
      const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Objecttype de Persoon (mv: Personen) (bezield)
  het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie;

Parameter de persoon : Persoon
`;

      const parser = new AntlrParser();
      const domainModel = parser.parseModel(model);

      // Create a DimensionedAttributeReference with an unknown label
      const invalidRef: any = {
        type: 'DimensionedAttributeReference',
        baseAttribute: {
          type: 'AttributeReference',
          path: ['Persoon', 'inkomen'],
          resolved: {
            resolvedPath: [
              { sourceName: 'Persoon', resolvedName: 'Persoon', kind: 'variable', sourceType: 'context', targetType: 'Persoon', cardinality: '1' },
              { sourceName: 'inkomen', resolvedName: 'inkomen', kind: 'attribute', sourceType: 'Persoon', targetType: 'Numeriek', cardinality: '1' }
            ]
          }
        },
        dimensionLabels: ['volgend jaar']  // Not a valid label!
      };

      const ctx = createResolutionContext(domainModel, 'Persoon', 'persoon');

      // Should throw an error about unknown label
      expect(() => resolveExpression(invalidRef, ctx)).toThrow(/Unknown dimension label/);
    });
  });
});