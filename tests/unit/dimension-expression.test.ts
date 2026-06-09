import { Engine, Context } from '../../src';
import { DimensionedRuntimeValue } from '../../src/interfaces';

describe('Engine - Dimension Expression Evaluation', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  test('should evaluate dimensional attribute with prepositional dimensions', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
  het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie en brutonettodimensie;


Regel bereken belasting huidig jaar
geldig altijd
De belasting van de persoon moet berekend worden als het netto inkomen van huidig jaar van de persoon maal 0,3.
`;
    
    const context = new Context();
    
    // Create a person object with dimensional income values
    const persoon = {
      type: 'object',
      value: {
        'inkomen': {
          type: 'dimensioned',
          value: [
            {
              coordinates: { jaardimensie: 'huidig jaar', brutonettodimensie: 'bruto' },
              value: { type: 'number', value: 100000 }
            },
            {
              coordinates: { jaardimensie: 'huidig jaar', brutonettodimensie: 'netto' },
              value: { type: 'number', value: 70000 }
            },
            {
              coordinates: { jaardimensie: 'vorig jaar', brutonettodimensie: 'bruto' },
              value: { type: 'number', value: 90000 }
            },
            {
              coordinates: { jaardimensie: 'vorig jaar', brutonettodimensie: 'netto' },
              value: { type: 'number', value: 63000 }
            }
          ]
        } as DimensionedRuntimeValue
      }
    };
    
    context.setVariable('persoon', persoon);
    
    const result = engine.run(model, context);
    
    if (!result.success) {
      console.error('Parse/execution error:', result.error);
    }
    
    expect(result.success).toBe(true);
    
    // Check that the rule calculated belasting based on netto inkomen van huidig jaar
    const persoonVar = context.getVariable('persoon');
    expect(persoonVar?.type).toBe('object');
    const persoonObj = persoonVar?.value as any;
    expect(persoonObj.belasting).toMatchObject({
      type: 'number',
      value: 21000 // 70000 * 0.3
    });
  });

  test('should evaluate dimensional attribute with adjectival dimensions', () => {
    const model = `
Dimensie de brutonettodimensie, bestaande uit de brutonettodimensies (voor het attribuut zonder voorzetsel):
  1. bruto
  2. netto

Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
  het salaris Numeriek (geheel getal) gedimensioneerd met brutonettodimensie;


Regel bereken verschil
geldig altijd
Het verschil van de persoon moet berekend worden als het bruto salaris van de persoon min het netto salaris van de persoon.
`;
    
    const context = new Context();
    
    // Create a person object with dimensional salary values
    const persoon = {
      type: 'object',
      value: {
        'salaris': {
          type: 'dimensioned',
          value: [
            {
              coordinates: { brutonettodimensie: 'bruto' },
              value: { type: 'number', value: 50000 }
            },
            {
              coordinates: { brutonettodimensie: 'netto' },
              value: { type: 'number', value: 35000 }
            }
          ]
        } as DimensionedRuntimeValue
      }
    };
    
    context.setVariable('persoon', persoon);
    
    const result = engine.run(model, context);
    
    if (!result.success) {
      console.error('Parse/execution error:', result.error);
    }
    
    expect(result.success).toBe(true);
    
    // Check that the rule calculated verschil
    const persoonVar = context.getVariable('persoon');
    expect(persoonVar?.type).toBe('object');
    const persoonObj = persoonVar?.value as any;
    expect(persoonObj.verschil).toMatchObject({
      type: 'number',
      value: 15000 // 50000 - 35000
    });
  });

  test('should handle missing dimensional values gracefully', () => {
    const model = `
Dimensie de jaardimensie, bestaande uit de jaardimensies (na het attribuut met voorzetsel van):
  1. vorig jaar
  2. huidig jaar

Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
  het inkomen Numeriek (geheel getal) gedimensioneerd met jaardimensie;


Regel bereken inkomen volgend jaar
geldig altijd
Het inkomen volgend jaar van de persoon moet berekend worden als 0.
`;
    
    const context = new Context();
    
    // Create a person object without volgend jaar dimension
    const persoon = {
      type: 'object',
      value: {
        'inkomen': {
          type: 'dimensioned',
          value: [
            {
              coordinates: { jaardimensie: 'huidig jaar' },
              value: { type: 'number', value: 100000 }
            },
            {
              coordinates: { jaardimensie: 'vorig jaar' },
              value: { type: 'number', value: 90000 }
            }
          ]
        } as DimensionedRuntimeValue
      }
    };
    
    context.setVariable('persoon', persoon);
    
    const result = engine.run(model, context);
    
    if (!result.success) {
      console.error('Parse/execution error:', result.error);
    }
    
    // Should not throw error, but the dimension lookup should return null
    expect(result.success).toBe(true);
  });
});