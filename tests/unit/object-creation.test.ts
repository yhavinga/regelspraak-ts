import { Engine, Context } from '../../src';

/**
 * Object Creation Engine Tests
 *
 * Tests verify execution of spec-compliant ObjectCreation syntax:
 *   "Een <subject> heeft <artikel> <rolnaam> [met <attribuut> gelijk aan <expressie>]"
 *
 * The relational syntax requires:
 * 1. A subject (onderwerpketen) - the existing object that owns the new object
 * 2. A role (rolnaam) - maps to a FeitType definition
 * 3. A FeitType establishing the relationship
 */
describe('Object Creation', () => {
    let engine: Engine;

    beforeEach(() => {
        engine = new Engine();
    });

    test('should create a simple object without attributes', () => {
        const modelText = `
Objecttype de Organisatie (mv: organisaties)
    de naam Tekst;

Objecttype de Persoon (mv: personen)
    de naam Tekst;
    is actief kenmerk;

Feittype medewerkers van organisatie
    de werkgever	Organisatie
    de medewerker (mv: medewerkers)	Persoon
één werkgever heeft meerdere medewerkers

Regel MaakNieuwePersoon
    geldig altijd
        Een organisatie heeft een medewerker.
        `;

        const parseResult = engine.parseModel(modelText);
        expect(parseResult.success).toBe(true);

        const context = new Context(parseResult.model);
        context.createObject('Organisatie', 'org_1', {
            'naam': { type: 'string', value: 'ACME Corp' }
        });

        const result = engine.execute(parseResult.model, context);
        expect(result.success).toBe(true);
    });

    test('should create an object with attributes', () => {
        const modelText = `
Objecttype de Bedrijf (mv: bedrijven)
    de naam Tekst;

Objecttype de Klant (mv: klanten)
    de naam Tekst;
    de leeftijd Numeriek;
    de email Tekst;

Feittype klanten van bedrijf
    het bedrijf	Bedrijf
    de klant (mv: klanten)	Klant
één bedrijf heeft meerdere klanten

Regel MaakVasteKlant
    geldig altijd
        Een bedrijf heeft een klant
        met naam gelijk aan "Jan Jansen", leeftijd gelijk aan 35 en email gelijk aan "jan@example.com".
        `;

        const parseResult = engine.parseModel(modelText);
        expect(parseResult.success).toBe(true);

        const context = new Context(parseResult.model);
        context.createObject('Bedrijf', 'bedrijf_1', {
            'naam': { type: 'string', value: 'WebShop BV' }
        });

        const result = engine.execute(parseResult.model, context);
        expect(result.success).toBe(true);

        // Verify object was created with correct attributes
        const klanten = context.getObjectsByType('Klant');
        expect(klanten.length).toBe(1);
        expect((klanten[0] as any).value['naam']?.value).toBe('Jan Jansen');
        expect((klanten[0] as any).value['leeftijd']?.value).toBe(35);
    });

    test('should create object with computed attribute values', () => {
        const modelText = `
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;
    de prijs Numeriek;
    de btw Numeriek;

Parameter het btw percentage : Numeriek

Feittype producten van winkel
    de winkel	Winkel
    het product (mv: producten)	Product
één winkel heeft meerdere producten

Regel MaakProduct
    geldig altijd
        Een winkel heeft een product
        met naam gelijk aan "Laptop", prijs gelijk aan 1000 en btw gelijk aan het btw percentage.
        `;

        const parseResult = engine.parseModel(modelText);
        expect(parseResult.success).toBe(true);

        const context = new Context(parseResult.model);
        context.setVariable('btw percentage', { type: 'number', value: 21 });
        context.createObject('Winkel', 'winkel_1', {
            'naam': { type: 'string', value: 'TechStore' }
        });

        const result = engine.execute(parseResult.model, context);
        expect(result.success).toBe(true);

        const producten = context.getObjectsByType('Product');
        expect(producten.length).toBe(1);
        expect((producten[0] as any).value['btw']?.value).toBe(21);
    });

    test('should create object with conditional rule', () => {
        const modelText = `
Objecttype de Afdeling (mv: afdelingen)
    de naam Tekst;
    de actief Boolean;

Objecttype de Werknemer (mv: werknemers)
    de naam Tekst;
    de salaris Numeriek;

Feittype werknemers van afdeling
    de afdeling	Afdeling
    de werknemer (mv: werknemers)	Werknemer
één afdeling heeft meerdere werknemers

Regel MaakWerknemer
    geldig altijd
        Een afdeling heeft een werknemer
        met naam gelijk aan "Peter"
        en salaris gelijk aan 3000
        indien de actief van de afdeling gelijk is aan waar.
        `;

        const parseResult = engine.parseModel(modelText);
        expect(parseResult.success).toBe(true);

        const context = new Context(parseResult.model);
        context.createObject('Afdeling', 'afd_1', {
            'naam': { type: 'string', value: 'IT' },
            'actief': { type: 'boolean', value: true }
        });

        const result = engine.execute(parseResult.model, context);
        expect(result.success).toBe(true);

        // Condition is true, so werknemer should be created
        const werknemers = context.getObjectsByType('Werknemer');
        expect(werknemers.length).toBe(1);
    });

    test('should not create object when condition is false', () => {
        const modelText = `
Objecttype de Afdeling (mv: afdelingen)
    de naam Tekst;
    de actief Boolean;

Objecttype de Werknemer (mv: werknemers)
    de naam Tekst;

Feittype werknemers van afdeling
    de afdeling	Afdeling
    de werknemer (mv: werknemers)	Werknemer
één afdeling heeft meerdere werknemers

Regel MaakWerknemer
    geldig altijd
        Een afdeling heeft een werknemer
        met naam gelijk aan "Peter"
        indien de actief van de afdeling gelijk is aan waar.
        `;

        const parseResult = engine.parseModel(modelText);
        expect(parseResult.success).toBe(true);

        const context = new Context(parseResult.model);
        context.createObject('Afdeling', 'afd_1', {
            'naam': { type: 'string', value: 'HR' },
            'actief': { type: 'boolean', value: false }
        });

        const result = engine.execute(parseResult.model, context);
        expect(result.success).toBe(true);

        // Condition is false, so no werknemer should be created
        const werknemers = context.getObjectsByType('Werknemer');
        expect(werknemers.length).toBe(0);
    });
});