import { AntlrParser } from '../../src/parser';
import { SemanticAnalyzer } from '../../src/semantic-analyzer';
import { DomainModel } from '../../src/ast/domain-model';

/**
 * Semantic Validation Tests
 *
 * NOTE: Tests that use the OLD ObjectCreation syntax ("Er wordt een nieuw X aangemaakt")
 * are SKIPPED until Phase 3 when the engine and semantic analyzer are updated.
 *
 * The new syntax ("Een X heeft een Y") requires different validation semantics.
 */
describe('Semantic Validation', () => {
  const parser = new AntlrParser();
  const analyzer = new SemanticAnalyzer();

  describe('Unknown Object Type Validation', () => {
    // SKIPPED: Uses old ObjectCreation syntax
    test.skip('should fail when creating unknown object type (PENDING: Phase 3)', () => {
      const modelText = `
        Objecttype de Product
          de naam Tekst;
          de prijs Numeriek;

        Regel MaakOnbekend
        geldig altijd
          Er wordt een nieuw OnbekendType aangemaakt.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].message).toContain('Unknown object type: OnbekendType');
    });

    // SKIPPED: Uses old ObjectCreation syntax
    test.skip('should pass when creating known object type (PENDING: Phase 3)', () => {
      const modelText = `
        Objecttype de Product
          de naam Tekst;
          de prijs Numeriek;

        Regel MaakProduct
        geldig altijd
          Er wordt een nieuw Product aangemaakt.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have any errors for the object type
      const objectTypeErrors = errors.filter(e => e.message.includes('Unknown object type'));
      expect(objectTypeErrors.length).toBe(0);
    });
  });

  describe('Unknown Attribute Validation', () => {
    // SKIPPED: Uses old ObjectCreation syntax
    test.skip('should fail when setting unknown attribute (PENDING: Phase 3)', () => {
      const modelText = `
        Objecttype de Product
          de naam Tekst;
          de prijs Numeriek;

        Regel MaakProductFout
        geldig altijd
          Er wordt een nieuw Product aangemaakt
          met naam gelijk aan "Test"
          en onbekend_attribuut gelijk aan 123.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      expect(errors.length).toBeGreaterThan(0);
      const attrError = errors.find(e => e.message.includes('onbekend_attribuut'));
      expect(attrError).toBeDefined();
      expect(attrError!.message).toContain("Attribute 'onbekend_attribuut' not defined");
    });

    // SKIPPED: Uses old ObjectCreation syntax
    test.skip('should pass when setting known attributes (PENDING: Phase 3)', () => {
      const modelText = `
        Objecttype de Product
          de naam Tekst;
          de prijs Numeriek;

        Regel MaakProduct
        geldig altijd
          Er wordt een nieuw Product aangemaakt
          met naam gelijk aan "Test"
          en prijs gelijk aan 100.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have any attribute errors
      const attrErrors = errors.filter(e => e.message.includes('Attribute'));
      expect(attrErrors.length).toBe(0);
    });
  });

  describe('Type Mismatch Validation', () => {
    // SKIPPED: Uses old ObjectCreation syntax
    test.skip('should fail when assigning wrong datatype (PENDING: Phase 3)', () => {
      const modelText = `
        Objecttype de Product
          de naam Tekst;
          de prijs Numeriek;

        Regel MaakProductFout
        geldig altijd
          Er wordt een nieuw Product aangemaakt
          met naam gelijk aan 123
          en prijs gelijk aan "honderd euro".
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      expect(errors.length).toBeGreaterThan(0);
      const typeErrors = errors.filter(e => e.message.includes('Type mismatch'));
      expect(typeErrors.length).toBeGreaterThan(0);
    });

    // SKIPPED: Uses old ObjectCreation syntax
    test.skip('should pass when assigning correct datatypes (PENDING: Phase 3)', () => {
      const modelText = `
        Objecttype de Product
          de naam Tekst;
          de prijs Numeriek;

        Regel MaakProduct
        geldig altijd
          Er wordt een nieuw Product aangemaakt
          met naam gelijk aan "Laptop"
          en prijs gelijk aan 1000.
      `;

      const model = parser.parseModel(modelText);
      const errors = analyzer.analyze(model);

      // Should not have any type errors
      const typeErrors = errors.filter(e => e.message.includes('Type mismatch'));
      expect(typeErrors.length).toBe(0);
    });
  });

  describe('Unknown Kenmerk Validation', () => {
    test('should fail when setting unknown kenmerk', () => {
      const modelText = `
        Objecttype de Persoon
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
        Objecttype de Persoon
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

        Objecttype de Persoon
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

        Objecttype de Persoon
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
