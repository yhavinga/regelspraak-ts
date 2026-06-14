import { Engine } from '../../src';
import { stripLocations } from '../test-utils';

describe('Engine - Object Type Definitions', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  describe('basic object type parsing', () => {
    test('should parse simple object type', () => {
      const source = `Objecttype persoon`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ObjectTypeDefinition',
        name: 'persoon',
        plural: ['personen'],
        animated: false,
        members: []
      });
    });

    test('should parse object type with plural', () => {
      const source = `Objecttype persoon (mv:personen)`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ObjectTypeDefinition',
        name: 'persoon',
        plural: ['personen'],
        animated: false,
        members: []
      });
    });

    test('should parse animated object type', () => {
      const source = `Objecttype persoon (bezield)`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ObjectTypeDefinition',
        name: 'persoon',
        plural: ['personen'],
        animated: true,
        members: []
      });
    });
  });

  describe('kenmerk specifications', () => {
    test('should parse simple kenmerk', () => {
      const source = `Objecttype persoon
  aanwezig kenmerk;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ObjectTypeDefinition',
        name: 'persoon',
        plural: ['personen'],
        animated: false,
        members: [{
          type: 'KenmerkSpecification',
          name: 'aanwezig'
        }]
      });
    });

    test('should parse bijvoeglijk kenmerk', () => {
      const source = `Objecttype persoon
  gelukkig kenmerk (bijvoeglijk);`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'KenmerkSpecification',
        name: 'gelukkig',
        kenmerkType: 'bijvoeglijk'
      });
    });

    test('should drop the copula from a multi-word bijvoeglijk kenmerk name', () => {
      // A single-word name loses the copula through the grammar's `IS? identifier`
      // ("is gelukkig" → "gelukkig"); a multi-word name arrives through the naamwoord
      // alternative, which the leading "is" is part of. The canonical name must still
      // be copula-free so it matches every reference ("... is te hoog" → "te hoog").
      const source = `Objecttype persoon
  is te hoog kenmerk (bijvoeglijk);`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'KenmerkSpecification',
        name: 'te hoog',
        kenmerkType: 'bijvoeglijk'
      });
    });

    test('should parse bezittelijk kenmerk', () => {
      const source = `Objecttype persoon
  gehuwd kenmerk (bezittelijk);`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'KenmerkSpecification',
        name: 'gehuwd',
        kenmerkType: 'bezittelijk'
      });
    });
  });

  describe('attribute specifications', () => {
    test('should parse simple text attribute', () => {
      const source = `Objecttype persoon
  naam Tekst;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'naam',
        dataType: { type: 'Tekst' }
      });
    });

    test('should parse list attribute with primitive element type', () => {
      const source = `Objecttype factuur
  bedragen Lijst van Numeriek;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'bedragen',
        dataType: {
          type: 'Lijst',
          elementType: { type: 'Numeriek' }
        }
      });
    });

    test('should parse list attribute with named element type', () => {
      const source = `Objecttype factuur
  regels Lijst van FactuurRegel;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'regels',
        dataType: {
          type: 'Lijst',
          elementType: { type: 'NamedTypeReference', name: 'FactuurRegel' }
        }
      });
    });

    test('should parse nested list attribute structurally', () => {
      const source = `Objecttype matrix
  rijen Lijst van Lijst van Numeriek;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'rijen',
        dataType: {
          type: 'Lijst',
          elementType: {
            type: 'Lijst',
            elementType: { type: 'Numeriek' }
          }
        }
      });
    });

    test('should parse number attribute', () => {
      const source = `Objecttype persoon
  leeftijd Numeriek (geheel getal);`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'leeftijd',
        dataType: { type: 'Numeriek', numericSpec: { format: 'geheel getal', signConstraint: undefined, decimals: undefined } }
      });
    });

    test('should parse attribute with unit', () => {
      const source = `Objecttype auto
  snelheid Numeriek (getal) met eenheid km;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'snelheid',
        dataType: { type: 'Numeriek', numericSpec: { format: 'getal', signConstraint: undefined, decimals: undefined } },
        unit: 'km',
        unitExpression: { type: 'UnitExpression', factors: [{ unit: 'km', exponent: 1 }] }
      });
    });

    test('should parse attribute with Euro symbol', () => {
      const source = `Objecttype product
  prijs Bedrag met eenheid €;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'prijs',
        dataType: { type: 'DomainReference', domain: 'Bedrag' },
        unit: '€',
        unitExpression: { type: 'UnitExpression', factors: [{ unit: '€', exponent: 1 }] }
      });
    });

    test('should parse attribute with dimensions', () => {
      // Note: dimensieRef expects IDENTIFIER tokens, not keywords like 'jaar'
      // This is a limitation in the grammar
      const source = `Objecttype verkoop
  omzet Bedrag gedimensioneerd met dimension1 en dimension2;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'omzet',
        dataType: { type: 'DomainReference', domain: 'Bedrag' },
        dimensions: ['dimension1', 'dimension2']
      });
    });

    test('should parse attribute with timeline', () => {
      const source = `Objecttype persoon
  inkomen Bedrag voor elk jaar;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'inkomen',
        dataType: { type: 'DomainReference', domain: 'Bedrag' },
        timelineGranularity: 'jaar'
      });
    });

    test('should parse attribute with monthly timeline', () => {
      const source = `Objecttype persoon
  salaris Bedrag voor elke maand;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'salaris',
        dataType: { type: 'DomainReference', domain: 'Bedrag' },
        timelineGranularity: 'maand'
      });
    });

    test('should parse attribute with daily timeline', () => {
      const source = `Objecttype persoon
  aanwezig Boolean voor elke dag;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast?.members[0])).toEqual({
        type: 'AttributeSpecification',
        name: 'aanwezig',
        dataType: { type: 'Boolean' },
        timelineGranularity: 'dag'
      });
    });
  });

  describe('complex object types', () => {
    test('should parse object type with multiple members', () => {
      const source = `Objecttype persoon (mv:personen) (bezield)
  aanwezig kenmerk;
  naam Tekst;
  leeftijd Numeriek (geheel getal);
  inkomen Bedrag met eenheid € voor elk jaar;`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ObjectTypeDefinition',
        name: 'persoon',
        plural: ['personen'],
        animated: true,
        members: [
          {
            type: 'KenmerkSpecification',
            name: 'aanwezig'
          },
          {
            type: 'AttributeSpecification',
            name: 'naam',
            dataType: { type: 'Tekst' }
          },
          {
            type: 'AttributeSpecification',
            name: 'leeftijd',
            dataType: { type: 'Numeriek', numericSpec: { format: 'geheel getal', signConstraint: undefined, decimals: undefined } }
          },
          {
            type: 'AttributeSpecification',
            name: 'inkomen',
            dataType: { type: 'DomainReference', domain: 'Bedrag' },
            unit: '€',
            unitExpression: { type: 'UnitExpression', factors: [{ unit: '€', exponent: 1 }] },
            timelineGranularity: 'jaar'
          }
        ]
      });
    });
  });

  describe('execution', () => {
    test('should execute object type definition', () => {
      const source = `Objecttype persoon
  naam tekst;`;

      const result = engine.run(source);

      expect(result.success).toBe(true);
      expect(result.value).toEqual({
        type: 'string',
        value: 'Object type registered'
      });
    });
  });
});