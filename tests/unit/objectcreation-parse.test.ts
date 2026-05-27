/**
 * ObjectCreation parsing tests (Phase 1)
 *
 * These tests verify that the grammar accepts spec-compliant ObjectCreation syntax
 * and rejects the old non-compliant forms.
 *
 * Spec syntax (§13.4.6 / §9.3):
 *   <objectcreatie> ::= "Een" <onderwerpketen> "heeft" ("een"|"de"|"het") <rolnaam>
 *                       [ "met" <attribuut> "gelijk aan" <expressie> ... ]
 *
 * Example: "Een vlucht heeft het vastgestelde contingent treinmiles."
 *
 * NOTE: Some tests use "meerdere" cardinality instead of "één...heeft één..." due to
 * a pre-existing FeitType parsing bug where rolObjectType greedily consumes tokens.
 * This is tracked separately from the ObjectCreation grammar change.
 */

import { AntlrParser } from '../../src';

describe('ObjectCreation parsing (Phase 1)', () => {
  let parser: AntlrParser;

  beforeEach(() => {
    parser = new AntlrParser();
  });

  describe('Spec-compliant syntax (should parse)', () => {
    it('parses basic ObjectCreation without attributes', () => {
      // Using "meerdere" cardinality to avoid FeitType parsing bug
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de naam Tekst;

Objecttype het Contingent (mv: contingenten)
    het totaal Numeriek;

Feittype reis met contingent
    de reis Vlucht
    het contingent Contingent
één reis heeft meerdere contingenten

Regel maak contingent
    geldig altijd
        Een vlucht heeft het contingent.
`;
      expect(() => parser.parseModel(source)).not.toThrow();
      const model = parser.parseModel(source);
      expect(model.regels).toHaveLength(1);
      expect(model.regels[0].result).toBeDefined();
      expect(model.regels[0].result.type).toBe('ObjectCreation');
    });

    it('parses ObjectCreation with single attribute initialization', () => {
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de naam Tekst;

Objecttype het Contingent (mv: contingenten)
    het totaal Numeriek;

Feittype reis met contingent
    de reis Vlucht
    het contingent Contingent
één reis heeft meerdere contingenten

Regel maak contingent met waarde
    geldig altijd
        Een vlucht heeft het contingent
        met totaal gelijk aan 1000.
`;
      expect(() => parser.parseModel(source)).not.toThrow();
      const model = parser.parseModel(source);
      expect(model.regels[0].result.type).toBe('ObjectCreation');
      expect(model.regels[0].result.attributeInits).toHaveLength(1);
      expect(model.regels[0].result.attributeInits[0].attribute).toBe('totaal');
    });

    it('parses ObjectCreation with multiple attribute initializations', () => {
      const source = `
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Badge (mv: badges)
    de type Tekst;
    de kleur Tekst;

Feittype badge van personen
    de houder Persoon
    de badge Badge
één houder heeft meerdere badges

Regel maak badge
    geldig altijd
        Een persoon heeft een badge
        met type gelijk aan "senior"
        en kleur gelijk aan "goud".
`;
      expect(() => parser.parseModel(source)).not.toThrow();
      const model = parser.parseModel(source);
      expect(model.regels[0].result.type).toBe('ObjectCreation');
      expect(model.regels[0].result.attributeInits).toHaveLength(2);
    });

    it('parses ObjectCreation with "de" article', () => {
      const source = `
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Reis (mv: reizen)
    de bestemming Tekst;

Feittype reis van personen
    de reiziger Persoon
    de reis Reis
één reiziger heeft meerdere reizen

Regel maak reis
    geldig altijd
        Een persoon heeft de reis.
`;
      expect(() => parser.parseModel(source)).not.toThrow();
    });

    it('parses ObjectCreation with "een" article', () => {
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de naam Tekst;

Objecttype het Ticket (mv: tickets)
    de prijs Numeriek;

Feittype ticket van vluchten
    de vlucht Vlucht
    het ticket Ticket
één vlucht heeft meerdere tickets

Regel maak ticket
    geldig altijd
        Een vlucht heeft een ticket.
`;
      expect(() => parser.parseModel(source)).not.toThrow();
    });

    it('parses ObjectCreation with possessive chain subject', () => {
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de naam Tekst;

Objecttype de Passagier (mv: passagiers) (bezield)
    de naam Tekst;

Objecttype de Boardingpass (mv: boardingpassen)
    de gate Tekst;

Feittype passagiers van vlucht
    de reis Vlucht
    de passagier Passagier
één reis heeft meerdere passagiers

Feittype boardingpass van passagier
    de reiziger Passagier
    de boardingpass Boardingpass
één reiziger heeft meerdere boardingpassen

Regel maak boardingpass
    geldig altijd
        Een passagier van de vlucht heeft een boardingpass.
`;
      expect(() => parser.parseModel(source)).not.toThrow();
    });

    it('parses TOKA-style ObjectCreation with attribute initialization', () => {
      // Adapted from TOKA case study - using "meerdere" to avoid FeitType parsing bug
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de hoeveelheid passagiers Numeriek;

Objecttype het Contingent (mv: contingenten)
    het aantal treinmiles Numeriek;

Parameter de treinmiles per passagier : Numeriek

Feittype reis met contingent
    de reis Vlucht
    het contingent Contingent
één reis heeft meerdere contingenten

Regel maak contingent treinmiles
    geldig altijd
        Een vlucht heeft het contingent met
        aantal treinmiles gelijk aan de hoeveelheid passagiers
        van de Vlucht maal de treinmiles per passagier.
`;
      expect(() => parser.parseModel(source)).not.toThrow();
      const model = parser.parseModel(source);
      expect(model.regels[0].result.type).toBe('ObjectCreation');
    });

    it('parses ObjectCreation without FeitType', () => {
      // ObjectCreation can also work without explicit FeitType in the model
      const source = `
Regel simpele objectcreatie
    geldig altijd
        Een vlucht heeft het contingent.
`;
      expect(() => parser.parseModel(source)).not.toThrow();
      const model = parser.parseModel(source);
      expect(model.regels[0].result.type).toBe('ObjectCreation');
    });
  });

  describe('Old syntax (should be rejected)', () => {
    it('rejects "Er wordt een nieuw X aangemaakt" form', () => {
      const source = `
Objecttype de Persoon (mv: personen)
    de naam Tekst;

Regel MaakPersoon
    geldig altijd
        Er wordt een nieuw Persoon aangemaakt.
`;
      // The old form should cause a parse error
      expect(() => parser.parseModel(source)).toThrow();
    });

    it('rejects "Creëer een nieuwe X" form', () => {
      const source = `
Objecttype de Badge (mv: badges)
    de type Tekst;

Regel MaakBadge
    geldig altijd
        Creëer een nieuwe Badge.
`;
      // The old form should cause a parse error
      expect(() => parser.parseModel(source)).toThrow();
    });

    it('rejects "Er wordt een nieuw X aangemaakt met" form with attributes', () => {
      const source = `
Objecttype de Klant (mv: klanten)
    de naam Tekst;
    de leeftijd Numeriek;

Regel MaakKlant
    geldig altijd
        Er wordt een nieuw Klant aangemaakt
        met naam gelijk aan "Jan".
`;
      expect(() => parser.parseModel(source)).toThrow();
    });
  });
});
