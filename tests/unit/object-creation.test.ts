import { Engine, Context } from '../../src';

/**
 * Object Creation Engine Tests
 *
 * NOTE: These tests use the OLD ObjectCreation syntax ("Er wordt een nieuw X aangemaakt")
 * which has been replaced by the spec-compliant syntax ("Een X heeft een Y") in Phase 1.
 *
 * The new syntax requires:
 * 1. A subject (onderwerpketen) that specifies which existing object gets the new object
 * 2. A role (rolnaam) that maps to a FeitType definition
 * 3. Iteration semantics: for each matching subject, create the object
 *
 * These tests are SKIPPED until Phase 3 when the engine is updated to support the new
 * ObjectCreation semantics with iterate-then-condition execution.
 *
 * See tests/unit/objectcreation-parse.test.ts for parser tests using the new syntax.
 */
describe('Object Creation', () => {
    let engine: Engine;

    beforeEach(() => {
        engine = new Engine();
    });

    test.skip('should create a simple object without attributes (PENDING: Phase 3 engine update)', () => {
        // OLD SYNTAX - no longer supported
        // New syntax requires: Een X heeft een Y (with FeitType definition)
        const modelText = `
            Objecttype de Persoon
                de naam Tekst;
                is actief kenmerk;

            Regel MaakNieuwePersoon
            geldig altijd
                Er wordt een nieuw Persoon aangemaakt.
        `;

        const context = new Context();
        const result = engine.run(modelText, context);
        expect(result.success).toBe(true);
    });

    test.skip('should create an object with attributes (PENDING: Phase 3 engine update)', () => {
        // OLD SYNTAX - no longer supported
        const modelText = `
            Objecttype de Klant
                de naam Tekst;
                de leeftijd Numeriek;
                de email Tekst;

            Regel MaakVasteKlant
            geldig altijd
                Er wordt een nieuw Klant aangemaakt
                met naam gelijk aan "Jan Jansen"
                en leeftijd gelijk aan 35
                en email gelijk aan "jan@example.com".
        `;

        const context = new Context();
        const result = engine.run(modelText, context);
        expect(result.success).toBe(true);
    });

    test.skip('should create object with computed attribute values (PENDING: Phase 3 engine update)', () => {
        // OLD SYNTAX - no longer supported
        const modelText = `
            Objecttype de Product
                de naam Tekst;
                de prijs Numeriek met eenheid EUR;
                de btw Numeriek met eenheid EUR;

            Parameter de btw_percentage : Numeriek

            Regel MaakProduct
            geldig altijd
                Er wordt een nieuw Product aangemaakt
                met naam gelijk aan "Laptop"
                en prijs gelijk aan 1000
                en btw gelijk aan (de prijs maal de btw_percentage gedeeld door 100).
        `;

        const context = new Context();
        context.setVariable('btw_percentage', { type: 'number', value: 21 });

        const result = engine.run(modelText, context);
        expect(result.success).toBe(true);
    });

    test.skip('should create object with conditional rule (PENDING: Phase 3 engine update)', () => {
        // OLD SYNTAX - no longer supported
        const modelText = `
            Objecttype de Werknemer
                de naam Tekst;
                de salaris Numeriek met eenheid EUR;

            Parameter de minimum_leeftijd : Numeriek

            Regel MaakWerknemer
            geldig altijd
                Er wordt een nieuw Werknemer aangemaakt
                met naam gelijk aan "Peter"
                en salaris gelijk aan 3000
                indien de leeftijd groter is dan de minimum_leeftijd.
        `;

        const context = new Context();
        context.setVariable('minimum_leeftijd', { type: 'number', value: 18 });
        context.setVariable('leeftijd', { type: 'number', value: 25 });

        const result = engine.run(modelText, context);
        expect(result.success).toBe(true);
    });

    test.skip('should handle multiple object creation in one rule - not supported by grammar', () => {
        // This was already skipped - multiple object creation in one rule is not supported
        const modelText = `
            Objecttype de Order
                de ordernummer Numeriek;
                de status Tekst;

            Objecttype de Factuur
                de factuurnummer Numeriek;
                de ordernummer Numeriek;

            Regel MaakOrderEnFactuur
            geldig altijd
                Er wordt een nieuw Order aangemaakt
                met ordernummer 12345
                en status "nieuw".

                Er wordt een nieuw Factuur aangemaakt
                met factuurnummer 67890
                en ordernummer 12345.
        `;

        const context = new Context();
        const result = engine.run(modelText, context);
        expect(result.success).toBe(true);
    });
});
