import { describe, it, expect } from '@jest/globals';
import { AntlrParser } from '../../src/parser';

/**
 * Resolver regressions for FeitCreatie subjects (finding G7,
 * PLAN_FEITCREATIE_SUBJECTS_20260610.md §5). The parser still carries each subject as one opaque
 * `<onderwerpketen>` string; the model resolver decomposes it per the spec and resolves it
 * structurally, owning unknown-role / unnavigable-hop / ambiguity diagnostics.
 */

function findNode(node: any, predicate: (node: any) => boolean): any | undefined {
  if (!node || typeof node !== 'object') {
    return undefined;
  }
  if (predicate(node)) {
    return node;
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        const match = findNode(item, predicate);
        if (match) return match;
      }
    } else {
      const match = findNode(value, predicate);
      if (match) return match;
    }
  }
  return undefined;
}

function resolve(source: string) {
  return new AntlrParser().parseResolvedModel(source);
}

function feitCreatie(model: any): any {
  return findNode(model, node => node.type === 'FeitCreatie');
}

// Shared object/feittype declarations reused across fixtures.
const PERSOON_CLUB = `
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Club (mv: clubs)
    de naam Tekst;
`;

const LIDMAATSCHAP = `
Feittype lidmaatschap
    het lid (mv: leden)\tPersoon
    de club (mv: clubs)\tClub
meerdere leden kunnen lid zijn van één club
`;

const PASHOUDER_CLUB = `
Feittype pashouder
    de pashouder (mv: pashouders)\tPersoon
    de club met pas\tClub
meerdere pashouders kunnen pas hebben voor één club met pas
`;

describe('FeitCreatie subject resolution (G7)', () => {
  it('#1 resolves simple role-reference subjects to the role object type', () => {
    const result = resolve(`${PERSOON_CLUB}${LIDMAATSCHAP}${PASHOUDER_CLUB}
Regel PasshouderIsLid
    geldig altijd
        Een pashouder van een club met pas is een lid van de club met pas.
`);

    expect(result.diagnostics).toEqual([]);
    expect(result.success).toBe(true);

    const node = feitCreatie(result.model);
    expect(node.subject1.resolved?.resolvedType).toEqual({ type: 'ObjectType', name: 'Club' });
    expect(node.subject2.resolved?.resolvedType).toEqual({ type: 'ObjectType', name: 'Club' });
    // Root is a rolnaam ("club met pas") rather than an object type name.
    expect(node.subject1.resolved?.resolvedPath?.[0]).toMatchObject({ kind: 'feittype' });
  });

  it('#2 resolves a compound "van" chain right-to-left', () => {
    const result = resolve(`
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Club (mv: clubs)
    de naam Tekst;

Objecttype de Vereniging (mv: verenigingen)
    de naam Tekst;

Feittype lidmaatschap
    het lid (mv: leden)\tPersoon
    de club (mv: clubs)\tClub
meerdere leden kunnen lid zijn van één club

Feittype clubvanvereniging
    de club (mv: clubs)\tClub
    de vereniging\tVereniging
meerdere clubs horen bij één vereniging

Feittype pashouder
    de pashouder (mv: pashouders)\tPersoon
    de vereniging met pas\tVereniging
meerdere pashouders kunnen pas hebben voor één vereniging met pas

Regel PasshouderIsLid
    geldig altijd
        Een pashouder van een vereniging met pas is een lid van de club van de vereniging met pas.
`);

    expect(result.diagnostics).toEqual([]);
    expect(result.success).toBe(true);

    const node = feitCreatie(result.model);
    // subject1: "vereniging met pas" -> Vereniging
    expect(node.subject1.resolved?.resolvedType).toEqual({ type: 'ObjectType', name: 'Vereniging' });
    // subject2: "club van de vereniging met pas" -> root Vereniging, hop "club" -> Club
    const path = node.subject2.resolved?.resolvedPath;
    expect(path).toHaveLength(2);
    expect(path[0]).toMatchObject({ targetType: 'Vereniging' });
    expect(path[1]).toMatchObject({ sourceName: 'club', targetType: 'Club' });
    expect(node.subject2.resolved?.resolvedType).toEqual({ type: 'ObjectType', name: 'Club' });
  });

  it('#3 resolves both an objecttypenaam root and a rolnaam root', () => {
    const result = resolve(`${PERSOON_CLUB}${LIDMAATSCHAP}${PASHOUDER_CLUB}
Regel ObjectVsRol
    geldig altijd
        Een pashouder van een Club is een lid van de club met pas.
`);

    expect(result.diagnostics).toEqual([]);
    expect(result.success).toBe(true);

    const node = feitCreatie(result.model);
    // "een Club" -> object type root (kind 'variable', sourceType 'context')
    expect(node.subject1.resolved?.resolvedPath?.[0]).toMatchObject({
      kind: 'variable',
      sourceType: 'context',
      targetType: 'Club',
    });
    // "de club met pas" -> rolnaam root (kind 'feittype')
    expect(node.subject2.resolved?.resolvedPath?.[0]).toMatchObject({ kind: 'feittype', targetType: 'Club' });
  });

  it('#4 reports an unknown role1 as a diagnostic', () => {
    const result = resolve(`${PERSOON_CLUB}${PASHOUDER_CLUB}
Regel OnbekendRole1
    geldig altijd
        Een onbekendrol van een club met pas is een pashouder van de club met pas.
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(d => /Unknown FeitCreatie role 'onbekendrol'/.test(d.message))).toBe(true);
    expect(result.diagnostics.some(d => d.path.endsWith('.role1'))).toBe(true);
  });

  it('#5 reports an unknown role2 as a diagnostic (object-type root, no false ambiguity)', () => {
    const result = resolve(`
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Club (mv: clubs)
    de naam Tekst;

Feittype lidmaatschap
    het lid (mv: leden)\tPersoon
    de club\tClub
meerdere leden kunnen lid zijn van één club

Regel OnbekendRole2
    geldig altijd
        Een lid van een club is een onbekendrol van de club.
`);

    expect(result.success).toBe(false);
    // "club" is both an object type and the "club" role; object-type precedence must avoid a
    // false "Ambiguous navigation root" — the only diagnostic is the unknown role2.
    expect(result.diagnostics.some(d => /Ambiguous/.test(d.message))).toBe(false);
    expect(result.diagnostics.some(d => /Unknown FeitCreatie role 'onbekendrol'/.test(d.message))).toBe(true);
    expect(result.diagnostics.some(d => d.path.endsWith('.role2'))).toBe(true);
  });

  it('#6 reports a missing intermediate FeitType as a "Cannot navigate" diagnostic', () => {
    const result = resolve(`
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Club (mv: clubs)
    de naam Tekst;

Objecttype de Vereniging (mv: verenigingen)
    de naam Tekst;

Feittype lidmaatschap
    het lid (mv: leden)\tPersoon
    de club (mv: clubs)\tClub
meerdere leden kunnen lid zijn van één club

Feittype pashouder
    de pashouder (mv: pashouders)\tPersoon
    de vereniging met pas\tVereniging
meerdere pashouders kunnen pas hebben voor één vereniging met pas

Regel PasshouderIsLid
    geldig altijd
        Een pashouder van een vereniging met pas is een lid van de club van de vereniging met pas.
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(d =>
      /Cannot navigate FeitCreatie subject hop 'club' from 'Vereniging'/.test(d.message)
    )).toBe(true);
  });

  it('#7 reports an ambiguous role across two FeitTypes (not first-match)', () => {
    const result = resolve(`
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Club (mv: clubs)
    de naam Tekst;

Objecttype de Bond (mv: bonden)
    de naam Tekst;

Feittype lidmaatschap
    het lid (mv: leden)\tPersoon
    de club (mv: clubs)\tClub
meerdere leden kunnen lid zijn van één club

Feittype bondslidmaatschap
    het lid (mv: leden)\tPersoon
    de bond (mv: bonden)\tBond
meerdere leden kunnen lid zijn van één bond

Regel AmbiguRole
    geldig altijd
        Een lid van een club is een lid van de bond.
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(d =>
      /Ambiguous FeitCreatie role 'lid'/.test(d.message)
    )).toBe(true);
  });

  it('#7b reports an ambiguous subject root across two FeitTypes', () => {
    const result = resolve(`
Objecttype de Persoon (mv: personen) (bezield)
    de naam Tekst;

Objecttype de Club (mv: clubs)
    de naam Tekst;

Objecttype de Stichting (mv: stichtingen)
    de naam Tekst;

Feittype pashouder
    de pashouder (mv: pashouders)\tPersoon
    de houder met pas\tClub
meerdere pashouders kunnen pas hebben voor één houder met pas

Feittype stichtinghouder
    de stichtinghouder (mv: stichtinghouders)\tPersoon
    de houder met pas\tStichting
meerdere stichtinghouders kunnen pas hebben voor één houder met pas

Regel AmbiguRoot
    geldig altijd
        Een pashouder van een houder met pas is een stichtinghouder van de houder met pas.
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(d =>
      /Ambiguous FeitCreatie subject root 'houder met pas'/.test(d.message)
    )).toBe(true);
  });
});
