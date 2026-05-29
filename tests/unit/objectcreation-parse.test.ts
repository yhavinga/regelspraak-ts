/**
 * ObjectCreation parsing tests (Phase 1+2)
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
 * Phase 2 additions:
 *   - subject and role are now REQUIRED fields in ObjectCreation AST
 *   - Semantic analyzer validates role exists in FeitType (when FeitType defined)
 *
 * NOTE: Some tests use "meerdere" cardinality instead of "één...heeft één..." due to
 * a pre-existing FeitType parsing bug where rolObjectType greedily consumes tokens.
 * This is tracked separately from the ObjectCreation grammar change.
 */

import { AntlrParser } from '../../src';
import { SemanticAnalyzer } from '../../src/semantic-analyzer';
import { ObjectCreation } from '../../src/ast/rules';

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
    de reis	Vlucht
    het contingent	Contingent
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
    de reis	Vlucht
    het contingent	Contingent
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
    de houder	Persoon
    de badge	Badge
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
    de reiziger	Persoon
    de reis	Reis
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
    de vlucht	Vlucht
    het ticket	Ticket
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
    de reis	Vlucht
    de passagier	Passagier
één reis heeft meerdere passagiers

Feittype boardingpass van passagier
    de reiziger	Passagier
    de boardingpass	Boardingpass
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
    de reis	Vlucht
    het contingent	Contingent
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

  describe('Phase 2: subject and role in AST', () => {
    it('includes subject and role in ObjectCreation AST', () => {
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de naam Tekst;

Objecttype het Contingent (mv: contingenten)
    het totaal Numeriek;

Regel maak contingent
    geldig altijd
        Een vlucht heeft het contingent.
`;
      const model = parser.parseModel(source);
      const creation = model.regels[0].result as ObjectCreation;

      expect(creation.type).toBe('ObjectCreation');
      expect(creation.subject).toBeDefined();
      expect(creation.role).toBeDefined();
      expect(creation.role).toBe('contingent');
    });

    it('extracts subject path from possessive chain', () => {
      const source = `
Regel boardingpass voor passagier
    geldig altijd
        Een passagier van de vlucht heeft een boardingpass.
`;
      const model = parser.parseModel(source);
      const creation = model.regels[0].result as ObjectCreation;

      expect(creation.subject).toBeDefined();
      // Subject should be an AttributeReference with the possessive chain
      expect(creation.subject.type).toBe('AttributeReference');
      expect(creation.role).toBe('boardingpass');
    });

    it('includes role with attribute initializations', () => {
      const source = `
Regel badge met type
    geldig altijd
        Een persoon heeft een badge
        met type gelijk aan "senior".
`;
      const model = parser.parseModel(source);
      const creation = model.regels[0].result as ObjectCreation;

      expect(creation.role).toBe('badge');
      expect(creation.attributeInits).toHaveLength(1);
    });
  });

  describe('Phase 2: Semantic analyzer FeitType validation', () => {
    it('warns when role not found in any FeitType', () => {
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de naam Tekst;

Regel MaakOnbekendeRol
    geldig altijd
        Een vlucht heeft het onbekendeRol.
`;
      const model = parser.parseModel(source);
      const analyzer = new SemanticAnalyzer();
      const errors = analyzer.analyze(model);

      // Should have an error about unknown role
      const roleError = errors.find(e => e.message.includes('unknown role'));
      expect(roleError).toBeDefined();
    });

    it('accepts role when FeitType is defined', () => {
      const source = `
Objecttype de Vlucht (mv: vluchten)
    de naam Tekst;

Objecttype het Contingent (mv: contingenten)
    het totaal Numeriek;

Feittype reis met contingent
    de reis	Vlucht
    het contingent	Contingent
één reis heeft meerdere contingenten

Regel maak contingent
    geldig altijd
        Een vlucht heeft het contingent.
`;
      const model = parser.parseModel(source);
      const analyzer = new SemanticAnalyzer();
      const errors = analyzer.analyze(model);

      // Should NOT have an error about unknown role
      const roleError = errors.find(e => e.message.includes('unknown role'));
      expect(roleError).toBeUndefined();
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

  describe('FeitType role lookup (regression tests)', () => {
    it('resolves correct objectType when role names overlap (onderdeel vs deel)', () => {
      // Regression test for substring matching bug:
      // "onderdeel".includes("deel") === true caused wrong FeitType to be selected
      const source = `
Objecttype de Auto (mv: autos)
    de merk Tekst;

Objecttype de Motor (mv: motoren)
    de merk Tekst;

Objecttype de Uitlaat (mv: uitlaten)
    de materiaal Tekst;

Objecttype de Knalpijp (mv: knalpijpen)
    de diameter Numeriek;

Feittype uitlaat van auto
    de eigenaar	Auto
    het onderdeel (mv: onderdelen)	Uitlaat
één eigenaar heeft meerdere onderdelen

Feittype knalpijp van motor
    de eigenaar	Motor
    het deel (mv: delen)	Knalpijp
één eigenaar heeft meerdere delen

Regel MaakUitlaat
    geldig altijd
        Een auto heeft het onderdeel
        met materiaal gelijk aan "rvs".
`;
      const model = parser.parseModel(source);
      const creation = model.regels[0].result as ObjectCreation;

      // Should resolve to Uitlaat, not Knalpijp
      expect(creation.objectType).toBe('Uitlaat');
      expect(creation.role).toBe('onderdeel');
    });

    it('resolves correct objectType with similar role prefixes (reis vs reisbagage)', () => {
      // Another test for substring matching: "reisbagage".includes("reis") === true
      // Use distinct objectType names to clearly show correct matching
      const source = `
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Vliegtuig (mv: vliegtuigen)
    de type Tekst;

Objecttype de Vlucht (mv: vluchten)
    de nummer Tekst;

Objecttype de Koffer (mv: koffers)
    de gewicht Numeriek;

Feittype reis van persoon
    de reiziger	Persoon
    de reis (mv: reizen)	Vlucht
één reiziger heeft meerdere reizen

Feittype bagage van vliegtuig
    het vliegtuig	Vliegtuig
    de reisbagage (mv: reisbagages)	Koffer
één vliegtuig heeft meerdere reisbagages

Regel MaakReis
    geldig altijd
        Een persoon heeft de reis
        met nummer gelijk aan "KL123".
`;
      const model = parser.parseModel(source);
      const creation = model.regels[0].result as ObjectCreation;

      // Should resolve to Vlucht (from "reis" role), not Koffer (from "reisbagage" role)
      expect(creation.objectType).toBe('Vlucht');
      expect(creation.role).toBe('reis');
    });
  });
});
