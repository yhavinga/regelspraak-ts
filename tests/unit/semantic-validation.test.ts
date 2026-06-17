import { AntlrParser } from '../../src/parser';

/**
 * Resolver validation tests (migrated from the retired semantic-analyzer).
 *
 * The resolver is the single semantic authority — parseResolvedModel runs it and surfaces
 * diagnostics — so these assertions exercise the live resolution path that gates the transpiler,
 * not a dead pre-flight pass. Unknown ObjectCreation roles and unknown kenmerk assignments are now
 * caught here (they previously lived only in the analyzer, which nothing called).
 */
describe('Resolver Validation', () => {
  const parser = new AntlrParser();
  const diagnose = (src: string): string[] =>
    parser.parseResolvedModel(src, { strict: true }).diagnostics.map(d => d.message);

  describe('Unknown Role Validation (ObjectCreation)', () => {
    test('reports a role not backed by any FeitType', () => {
      const messages = diagnose(`
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Regel MaakOnbekend
    geldig altijd
        Een winkel heeft het onbekendeRol.
      `);
      expect(messages.some(m => /unknown role/.test(m))).toBe(true);
    });

    test('accepts a role backed by a FeitType', () => {
      const messages = diagnose(`
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;

Feittype producten van winkel
    de winkel\tWinkel
    het product (mv: producten)\tProduct
één winkel heeft meerdere producten

Regel MaakProduct
    geldig altijd
        Een winkel heeft het product.
      `);
      expect(messages.some(m => /unknown role/.test(m))).toBe(false);
    });
  });

  describe('Unknown Attribute Validation (ObjectCreation)', () => {
    test('reports an unknown initializer attribute', () => {
      const messages = diagnose(`
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;
    de prijs Numeriek;

Feittype producten van winkel
    de winkel\tWinkel
    het product (mv: producten)\tProduct
één winkel heeft meerdere producten

Regel MaakProductFout
    geldig altijd
        Een winkel heeft het product
        met naam gelijk aan "Test" en onbekend attribuut gelijk aan 123.
      `);
      expect(messages.some(m => /Unknown attribute or kenmerk 'onbekend/.test(m))).toBe(true);
    });

    test('accepts known initializer attributes', () => {
      const messages = diagnose(`
Objecttype de Winkel (mv: winkels)
    de naam Tekst;

Objecttype de Product (mv: producten)
    de naam Tekst;
    de prijs Numeriek;

Feittype producten van winkel
    de winkel\tWinkel
    het product (mv: producten)\tProduct
één winkel heeft meerdere producten

Regel MaakProduct
    geldig altijd
        Een winkel heeft het product
        met naam gelijk aan "Test" en prijs gelijk aan 100.
      `);
      expect(messages.some(m => /Unknown attribute or kenmerk/.test(m))).toBe(false);
    });
  });

  describe('Unknown Kenmerk Validation (Kenmerktoekenning)', () => {
    test('reports a kenmerk the object type does not declare', () => {
      const messages = diagnose(`
Objecttype de Persoon (mv: personen)
    de naam Tekst;
    is minderjarig kenmerk (bijvoeglijk);

Regel TestOnbekendKenmerk
    geldig altijd
        Een Persoon is onbekend_kenmerk.
      `);
      expect(messages.some(m => /Kenmerk 'onbekend_kenmerk' not defined/.test(m))).toBe(true);
    });

    test('accepts a declared kenmerk', () => {
      const messages = diagnose(`
Objecttype de Persoon (mv: personen)
    de naam Tekst;
    is minderjarig kenmerk (bijvoeglijk);

Regel TestKenmerk
    geldig altijd
        Een Persoon is minderjarig.
      `);
      expect(messages.some(m => /not defined/.test(m))).toBe(false);
    });
  });

  describe('Unknown Parameter Validation', () => {
    test('reports an unresolved parameter reference', () => {
      const messages = diagnose(`
Parameter de leeftijdsgrens : Numeriek

Objecttype de Persoon (mv: personen)
    de leeftijd Numeriek;

Regel TestParameter
    geldig altijd
        De leeftijd van een Persoon moet berekend worden als de onbekende_parameter.
      `);
      // The reference resolves to no parameter, attribute or variable, so the resolver rejects it.
      expect(messages.some(m => /not resolved|navigation segment/.test(m))).toBe(true);
    });

    test('accepts a declared parameter', () => {
      const messages = diagnose(`
Parameter de leeftijdsgrens : Numeriek

Objecttype de Persoon (mv: personen)
    de leeftijd Numeriek;

Regel TestParameter
    geldig altijd
        De leeftijd van een Persoon moet berekend worden als de leeftijdsgrens.
      `);
      expect(messages.some(m => /not resolved/.test(m))).toBe(false);
    });
  });
});
