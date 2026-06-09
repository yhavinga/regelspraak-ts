import { Engine } from '../../src';

// Helper to strip location properties from AST nodes for testing
function stripLocations(obj: any): any {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) {
    return obj.map(stripLocations);
  }
  const result: any = {};
  for (const key in obj) {
    if (key !== 'location') {
      result[key] = stripLocations(obj[key]);
    }
  }
  return result;
}

describe('Engine - Parameter Definitions', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  describe('basic parameter parsing', () => {
    test('should parse simple numeric parameter', () => {
      const source = `Parameter de volwassenleeftijd : Numeriek (geheel getal)`;
      
      const result = engine.parse(source);
      
      if (!result.success) {
        console.log('Parse error:', result.errors);
      }
      
      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'volwassenleeftijd',
        dataType: { type: 'Numeriek', numericSpec: { format: 'geheel getal', signConstraint: undefined, decimals: undefined } }
      });
    });

    test('should parse parameter with unit', () => {
      const source = `Parameter de volwassenleeftijd : Numeriek (geheel getal) met eenheid jr`;

      const result = engine.parse(source);

      if (!result.success) {
        console.log('Parse error:', result.errors);
      }

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'volwassenleeftijd',
        dataType: { type: 'Numeriek', numericSpec: { format: 'geheel getal', signConstraint: undefined, decimals: undefined } },
        unit: 'jr',
        unitExpression: { type: 'UnitExpression', factors: [{ unit: 'jr', exponent: 1 }] }
      });
    });

    test('should parse parameter with domain reference', () => {
      const source = `Parameter het aantal kinderen : AantalKinderen`;
      
      const result = engine.parse(source);
      
      if (!result.success) {
        console.log('Parse error:', result.errors);
      }
      
      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'aantal kinderen',
        dataType: { type: 'DomainReference', domain: 'AantalKinderen' }
      });
    });

    test('should parse text parameter', () => {
      const source = `Parameter de standaard locatie : Tekst`;
      
      const result = engine.parse(source);
      
      if (!result.success) {
        console.log('Parse error:', result.errors);
      }
      
      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'standaard locatie',
        dataType: { type: 'Tekst' }
      });
    });

    test('should parse date parameter', () => {
      const source = `Parameter de startdatum : Datum in dagen`;
      
      const result = engine.parse(source);
      
      if (!result.success) {
        console.log('Parse error:', result.errors);
      }
      
      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'startdatum',
        dataType: { type: 'Datum' }
      });
    });

    test('should parse parameter with timeline', () => {
      const source = `Parameter de startdatum : Datum in dagen voor elke dag`;

      const result = engine.parse(source);

      if (!result.success) {
        console.log('Parse error:', result.errors);
      }

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'startdatum',
        dataType: { type: 'Datum' },
        timelineGranularity: 'dag'
      });
    });

    test('should parse parameter with monthly timeline', () => {
      const source = `Parameter het uitkeringspercentage : Numeriek (geheel getal) voor elke maand`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'uitkeringspercentage',
        dataType: { type: 'Numeriek', numericSpec: { format: 'geheel getal', signConstraint: undefined, decimals: undefined } },
        timelineGranularity: 'maand'
      });
    });

    test('should parse parameter with yearly timeline', () => {
      const source = `Parameter de belastingschijf : Bedrag voor elk jaar`;

      const result = engine.parse(source);

      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'belastingschijf',
        dataType: { type: 'DomainReference', domain: 'Bedrag' },
        timelineGranularity: 'jaar'
      });
    });

    test('should parse parameter with Euro unit', () => {
      const source = `Parameter de initiele belasting : Bedrag met eenheid €`;
      
      const result = engine.parse(source);
      
      if (!result.success) {
        console.log('Parse error:', result.errors);
      }
      
      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'initiele belasting',
        dataType: { type: 'DomainReference', domain: 'Bedrag' },
        unit: '€',
        unitExpression: { type: 'UnitExpression', factors: [{ unit: '€', exponent: 1 }] }
      });
    });

    test('should parse parameter with semicolon', () => {
      const source = `Parameter de volwassenleeftijd : Numeriek (geheel getal) met eenheid jr`;
      
      const result = engine.parse(source);
      
      if (!result.success) {
        console.log('Parse error:', result.errors);
      }
      
      expect(result.success).toBe(true);
      expect(stripLocations(result.ast)).toEqual({
        type: 'ParameterDefinition',
        name: 'volwassenleeftijd',
        dataType: { type: 'Numeriek', numericSpec: { format: 'geheel getal', signConstraint: undefined, decimals: undefined } },
        unit: 'jr',
        unitExpression: { type: 'UnitExpression', factors: [{ unit: 'jr', exponent: 1 }] }
      });
    });
  });

  describe('execution', () => {
    test('should execute parameter definition', () => {
      const source = `Parameter de volwassenleeftijd : Numeriek (geheel getal)`;
      
      const result = engine.run(source);
      
      if (!result.success) {
        console.log('Run error:', result.error);
      }
      
      expect(result.success).toBe(true);
      expect(result.value).toEqual({
        type: 'string',
        value: 'Parameter registered'
      });
    });
  });
});