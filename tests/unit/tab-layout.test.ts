import { AntlrParser } from '../../src/parser';
import { resolveModel } from '../../src/resolver';

/**
 * TAB-indented layout (spec conformance).
 *
 * The RegelSpraak v2.1.0 layout EBNF mandates tab indentation:
 *   <enumeratiespecificatie> ::= "Enumeratie" \n (\t <enumeratiewaarde> \n)+
 * and the same \t appears in <attribuut> and the feittype role lines. Documents
 * written exactly per the specification must parse; space indentation (the
 * whole existing corpus) must keep parsing. Line-leading tabs are layout; a
 * TAB *inside* a line remains the structural separator of a feittype role
 * line (rolnaam \t objecttype).
 */
describe('TAB-indented documents (spec layout EBNF)', () => {
  const parse = (src: string) => new AntlrParser().parseModel(src);

  it('parses a tab-indented enumeratie domein', () => {
    const model = parse(
      'Domein provincies is van het type Enumeratie\n' +
      "\t'Utrecht'\n" +
      "\t'Friesland'\n",
    );
    expect(model.domains).toHaveLength(1);
    expect(model.domains[0].enumerationValues).toEqual(['Utrecht', 'Friesland']);
  });

  it('parses tab-indented objecttype members (attribuut and kenmerk)', () => {
    const model = parse(
      'Objecttype de Persoon (mv: personen) (bezield)\n' +
      '\tis volwassen kenmerk (bijvoeglijk);\n' +
      '\tde leeftijd Numeriek (geheel getal);\n',
    );
    const members = model.objectTypes[0].members.map((m: any) => m.name);
    expect(members).toEqual(['volwassen', 'leeftijd']);
  });

  it('parses tab-indented feittype role lines (leading tab + separator tab)', () => {
    const model = parse(
      'Objecttype de Persoon (mv: personen) (bezield)\n' +
      '\tde naam Tekst;\n' +
      '\n' +
      'Objecttype de Vlucht (mv: vluchten)\n' +
      '\tde afstand Numeriek (geheel getal);\n' +
      '\n' +
      'Feittype vlucht van personen\n' +
      '\tde reis\tVlucht\n' +
      '\tde passagier (mv: passagiers)\tPersoon\n' +
      'één reis betreft de verplaatsing van meerdere passagiers\n',
    );
    expect(model.feitTypes).toHaveLength(1);
    const roles = model.feitTypes[0].rollen.map((r: any) => r.naam);
    expect(roles).toEqual(['reis', 'passagier']);
  });

  it('a layout tab parses identically to space indentation', () => {
    // Line-leading whitespace carries no meaning beyond layout: the tab- and
    // space-indented forms of one document must yield the same model.
    const body = (indent: string) =>
      'Objecttype de Persoon (mv: personen) (bezield)\n' +
      `${indent}is volwassen kenmerk (bijvoeglijk);\n` +
      `${indent}de leeftijd Numeriek (geheel getal);\n` +
      '\n' +
      'Regel bepaal volwassen\n' +
      'geldig altijd\n' +
      'Een Persoon is volwassen\n' +
      'indien zijn leeftijd groter of gelijk is aan 18.\n';
    const tab = parse(body('\t'));
    const spaces = parse(body('    '));
    // Source locations differ by column, nothing else may.
    const stripLocations = (node: any): string =>
      JSON.stringify(node, (k, v) => (k === 'location' ? undefined : v), 1);
    expect(stripLocations(tab.objectTypes[0].members))
      .toEqual(stripLocations(spaces.objectTypes[0].members));
    expect(tab.regels).toHaveLength(1);
    expect(resolveModel(tab, { strict: true }).success).toBe(true);
  });
});
