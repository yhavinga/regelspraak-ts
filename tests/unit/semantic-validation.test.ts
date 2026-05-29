import { AntlrParser } from '../../src/parser';
import { SemanticAnalyzer } from '../../src/semantic-analyzer';
import { DomainModel } from '../../src/ast/domain-model';

/**
 * Semantic Validation Tests
 *
 * Tests verify semantic analyzer validation using spec-compliant syntax:
 * - ObjectCreation: "Een X heeft een Y"
 * - Kenmerktoekenning: "Een X is kenmerk"
 * - Parameter references
 */
describe('Semantic Validation', () => {
  const parser = new AntlrParser();
  const analyzer = new SemanticAnalyzer();

  describe('Unknown Role Validation (ObjectCreation)', () => {
    test('should warn when role not found in any FeitType', () => {
      const modelText = `
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Regel MaakOnbekend
    geldig altijd
        Een winkel heeft het onbekendeRol.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      expect(errors.length).toBeGreaterThan(0);
      const roleError = errors.find(e => e.message.includes('unknown role'));
      expect(roleError).toBeDefined();
    });

    test('should pass when role exists in FeitType', () => {
      const modelText = `
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;

Feittype producten van winkel
    de winkel	Winkel
    het product (mv: producten)	Product
één winkel heeft meerdere producten

Regel MaakProduct
    geldig altijd
        Een winkel heeft het product.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have any role errors
      const roleErrors = errors.filter(e => e.message.includes('unknown role'));
      expect(roleErrors.length).toBe(0);
    });
  });

  describe('Unknown Attribute Validation (ObjectCreation)', () => {
    test('should fail when setting unknown attribute', () => {
      const modelText = `
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;
    de prijs Numeriek;

Feittype producten van winkel
    de winkel	Winkel
    het product (mv: producten)	Product
één winkel heeft meerdere producten

Regel MaakProductFout
    geldig altijd
        Een winkel heeft het product
        met naam gelijk aan "Test" en onbekend attribuut gelijk aan 123.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      expect(errors.length).toBeGreaterThan(0);
      const attrError = errors.find(e => e.message.includes('onbekend'));
      expect(attrError).toBeDefined();
    });

    test('should pass when setting known attributes', () => {
      const modelText = `
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;
    de prijs Numeriek;

Feittype producten van winkel
    de winkel	Winkel
    het product (mv: producten)	Product
één winkel heeft meerdere producten

Regel MaakProduct
    geldig altijd
        Een winkel heeft het product
        met naam gelijk aan "Test" en prijs gelijk aan 100.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have any attribute errors
      const attrErrors = errors.filter(e => e.message.includes('Attribute') && e.message.includes('not defined'));
      expect(attrErrors.length).toBe(0);
    });
  });

  describe('ObjectCreation Subject/Role Required', () => {
    test('should require subject field', () => {
      // This is validated at parse time - new syntax requires subject
      // Testing that a properly formed ObjectCreation doesn't generate missing subject error
      const modelText = `
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;

Feittype producten van winkel
    de winkel	Winkel
    het product (mv: producten)	Product
één winkel heeft meerdere producten

Regel MaakProduct
    geldig altijd
        Een winkel heeft het product.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have missing subject/role errors
      const subjectErrors = errors.filter(e => e.message.includes('missing'));
      expect(subjectErrors.length).toBe(0);
    });
  });

  describe('Unknown Kenmerk Validation', () => {
    test('should fail when setting unknown kenmerk', () => {
      const modelText = `
Objecttype de Persoon (mv: personen)
    de naam Tekst;
    is minderjarig kenmerk (bijvoeglijk);

Regel TestOnbekendKenmerk
    geldig altijd
        Een Persoon is onbekend_kenmerk.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      expect(errors.length).toBeGreaterThan(0);
      const kenmerkError = errors.find(e => e.message.includes('onbekend_kenmerk'));
      expect(kenmerkError).toBeDefined();
      expect(kenmerkError!.message).toContain("Kenmerk 'onbekend_kenmerk' not defined");
    });

    test('should pass when setting known kenmerk', () => {
      const modelText = `
Objecttype de Persoon (mv: personen)
    de naam Tekst;
    is minderjarig kenmerk (bijvoeglijk);

Regel TestKenmerk
    geldig altijd
        Een Persoon is minderjarig.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have any kenmerk errors
      const kenmerkErrors = errors.filter(e => e.message.includes('Kenmerk'));
      expect(kenmerkErrors.length).toBe(0);
    });
  });

  describe('Unknown Parameter Validation', () => {
    test('should fail when referencing unknown parameter', () => {
      const modelText = `
Parameter de leeftijdsgrens : Numeriek

Objecttype de Persoon (mv: personen)
    de leeftijd Numeriek;

Regel TestParameter
    geldig altijd
        De leeftijd van een Persoon moet berekend worden als de onbekende_parameter.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      expect(errors.length).toBeGreaterThan(0);
      const paramError = errors.find(e => e.message.includes('Unknown parameter'));
      expect(paramError).toBeDefined();
      expect(paramError!.message).toContain('Unknown parameter: onbekende_parameter');
    });

    test('should pass when referencing known parameter', () => {
      const modelText = `
Parameter de leeftijdsgrens : Numeriek

Objecttype de Persoon (mv: personen)
    de leeftijd Numeriek;

Regel TestParameter
    geldig altijd
        De leeftijd van een Persoon moet berekend worden als de leeftijdsgrens.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have any parameter errors
      const paramErrors = errors.filter(e => e.message.includes('Unknown parameter'));
      expect(paramErrors.length).toBe(0);
    });
  });
});
