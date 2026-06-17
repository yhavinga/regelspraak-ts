import { Engine, Context, AntlrParser } from '../../src';

// The vragende (verb-last / verb-mid) predicate forms of Tabel 16 (§8.1) — the complete surface.
// Most are also in the syntaxdiagrammen EBNF "toplevel ...vergelijkingsoperator" (§13.4.14.20-33);
// a few are table-only (the EBNF omits them): the negated-vragende elfproef, the verb-last
// getalcontrole, and the verb-last regel-status. All are surface variants only — the visitor folds
// each onto the same canonical operator its verb-first sibling produces, so they must parse, resolve
// and evaluate identically. That equivalence is exactly what these tests pin.
describe('Tabel 16 vragende predicate forms', () => {
  let engine: Engine;
  let parser: AntlrParser;

  beforeEach(() => {
    engine = new Engine();
    parser = new AntlrParser();
  });

  // §13.4.14.24 toplevel tweezijdige getalvergelijkingsoperator meervoud. Run end-to-end so the
  // assertion covers parse + resolve + evaluate, and pair each with its stellende sibling.
  describe('vragende-meervoud numeric comparisons evaluate like their stellende sibling', () => {
    const cases: Array<[string, string, boolean]> = [
      ['gelijk zijn aan', 'is gelijk aan', true],
      ['ongelijk zijn aan', 'is ongelijk aan', false],
      ['groter zijn dan', 'is groter dan', false],
      ['groter of gelijk zijn aan', 'is groter of gelijk aan', true],
      ['kleiner zijn dan', 'is kleiner dan', false],
      ['kleiner of gelijk zijn aan', 'is kleiner of gelijk aan', true],
    ];
    test.each(cases)('5 %s 5 === 5 %s 5', (vragend, stellend, expected) => {
      const vr = engine.run(`5 ${vragend} 5`);
      const st = engine.run(`5 ${stellend} 5`);
      expect(vr.success).toBe(true);
      expect(vr.value).toEqual({ type: 'boolean', value: expected });
      expect(vr.value).toEqual(st.value);
    });
  });

  // §13.4.14.30 toplevel tweezijdige datumvergelijkingsoperator meervoud. Bare date-literal
  // expressions are not evaluable via engine.run (a pre-existing harness limit shared by the
  // stellende forms), so the datum forms are pinned at the parse level: the operator must collapse
  // to the same symbol as "later dan"/"eerder dan" (datum-ordening, §8.1.1).
  describe('vragende-meervoud datum comparisons map to the ordening symbol', () => {
    const cases: Array<[string, string]> = [
      ['gelijk zijn aan', '=='],
      ['ongelijk zijn aan', '!='],
      ['later zijn dan', '>'],
      ['later of gelijk zijn aan', '>='],
      ['eerder zijn dan', '<'],
      ['eerder of gelijk zijn aan', '<='],
    ];
    test.each(cases)('x %s y -> %s', (vragend, symbol) => {
      const ast = parser.parseExpression(`x ${vragend} y`) as { type: string; operator: string };
      expect(ast.type).toBe('BinaryExpression');
      expect(ast.operator).toBe(symbol);
    });
  });

  // §13.4.14.20/.21 vragende (verb-last) elfproef "aan de elfproef voldoet/voldoen".
  describe('verb-last elfproef', () => {
    const model = (predicate: string) => `
      Objecttype de Natuurlijk persoon
          het burgerservicenummer Tekst;
          is BSNgeldig kenmerk;
      Regel check BSN
      geldig altijd
          Een Natuurlijk persoon is BSNgeldig
          indien zijn burgerservicenummer ${predicate}.
    `;

    test('enkelvoud parses to the verb-first canonical operator', () => {
      const result = engine.parse(model('aan de elfproef voldoet'));
      expect(result.success).toBe(true);
      expect(result.ast).toMatchObject({
        rules: [{ condition: { expression: { type: 'UnaryExpression', operator: 'voldoet aan de elfproef' } } }],
      });
    });

    test('meervoud parses to the verb-first canonical operator', () => {
      const result = engine.parse(model('aan de elfproef voldoen'));
      expect(result.success).toBe(true);
      expect(result.ast).toMatchObject({
        rules: [{ condition: { expression: { type: 'UnaryExpression', operator: 'voldoen aan de elfproef' } } }],
      });
    });

    test('evaluates a valid BSN like the verb-first form', () => {
      const context = new Context();
      const id = context.generateObjectId('Natuurlijk persoon');
      context.createObject('Natuurlijk persoon', id, {
        burgerservicenummer: { type: 'string', value: '999999990' }, // valid: 396 % 11 === 0
      });
      const result = engine.run(model('aan de elfproef voldoet'), context);
      expect(result.success).toBe(true);
      expect(context.getObjectsByType('Natuurlijk persoon')[0].kenmerken['is BSNgeldig']).toBe(true);
    });

    test('rejects an invalid BSN like the verb-first form', () => {
      const context = new Context();
      const id = context.generateObjectId('Natuurlijk persoon');
      context.createObject('Natuurlijk persoon', id, {
        burgerservicenummer: { type: 'string', value: '111111111' },
      });
      const result = engine.run(model('aan de elfproef voldoet'), context);
      expect(result.success).toBe(true);
      expect(context.getObjectsByType('Natuurlijk persoon')[0].kenmerken['is BSNgeldig']).toBe(false);
    });
  });

  // §13.4.14.32/.33 vragende getalcontrole "numeriek is/zijn met exact <n> cijfers" — the verb
  // sits after "numeriek", not as a trailing "... cijfers is".
  describe('verb-mid getalcontrole', () => {
    const model = (predicate: string) => `
      Objecttype de Natuurlijk persoon
          het burgerservicenummer Tekst;
          is BSNnegencijferig kenmerk;
      Regel check lengte
      geldig altijd
          Een Natuurlijk persoon is BSNnegencijferig
          indien zijn burgerservicenummer ${predicate}.
    `;

    test('enkelvoud parses to the verb-first canonical operator and predicate', () => {
      const result = engine.parse(model('numeriek is met exact 9 cijfers'));
      expect(result.success).toBe(true);
      expect(result.ast).toMatchObject({
        rules: [{ condition: { expression: {
          operator: 'is numeriek met exact',
          predicate: { operator: 'numeriek_exact', digits: 9, negated: false },
        } } }],
      });
    });

    test('meervoud parses to the verb-first canonical operator', () => {
      const result = engine.parse(model('numeriek zijn met exact 9 cijfers'));
      expect(result.success).toBe(true);
      expect(result.ast).toMatchObject({
        rules: [{ condition: { expression: { operator: 'zijn numeriek met exact' } } }],
      });
    });

    test('evaluates a 9-digit value to true', () => {
      const context = new Context();
      const id = context.generateObjectId('Natuurlijk persoon');
      context.createObject('Natuurlijk persoon', id, {
        burgerservicenummer: { type: 'string', value: '999999990' },
      });
      const result = engine.run(model('numeriek is met exact 9 cijfers'), context);
      expect(result.success).toBe(true);
      expect(context.getObjectsByType('Natuurlijk persoon')[0].kenmerken['is BSNnegencijferig']).toBe(true);
    });

    test('evaluates a 7-digit value to false', () => {
      const context = new Context();
      const id = context.generateObjectId('Natuurlijk persoon');
      context.createObject('Natuurlijk persoon', id, {
        burgerservicenummer: { type: 'string', value: '1234567' },
      });
      const result = engine.run(model('numeriek is met exact 9 cijfers'), context);
      expect(result.success).toBe(true);
      expect(context.getObjectsByType('Natuurlijk persoon')[0].kenmerken['is BSNnegencijferig']).toBe(false);
    });
  });

  // ── Table-only forms: Tabel 16 lists these, the syntaxdiagrammen EBNF omits them. ──

  // Negated vragende elfproef "niet aan de elfproef voldoet/voldoen".
  describe('verb-last negated elfproef', () => {
    const model = (predicate: string) => `
      Objecttype de Natuurlijk persoon (mv: Natuurlijke personen)
          het burgerservicenummer Tekst;
          is BSNongeldig kenmerk;
      Regel controleer
      geldig altijd
          Een Natuurlijk persoon is BSNongeldig
          indien zijn burgerservicenummer ${predicate}.
    `;
    const run = (predicate: string, bsn: string) => {
      const context = new Context();
      const id = context.generateObjectId('Natuurlijk persoon');
      context.createObject('Natuurlijk persoon', id, { burgerservicenummer: { type: 'string', value: bsn } });
      const result = engine.run(model(predicate), context);
      expect(result.success).toBe(true);
      return context.getObjectsByType('Natuurlijk persoon')[0].kenmerken['is BSNongeldig'];
    };

    test('enkelvoud parses to the verb-first negated operator', () => {
      const result = engine.parse(model('niet aan de elfproef voldoet'));
      expect(result.success).toBe(true);
      expect(result.ast).toMatchObject({
        rules: [{ condition: { expression: {
          operator: 'voldoet niet aan de elfproef',
          predicate: { operator: 'elfproef', negated: true },
        } } }],
      });
    });

    test('a valid BSN does NOT satisfy "niet ... voldoet"', () => {
      expect(run('niet aan de elfproef voldoet', '999999990')).toBe(false);
    });
    test('an invalid BSN satisfies "niet ... voldoet"', () => {
      expect(run('niet aan de elfproef voldoet', '111111111')).toBe(true);
    });
  });

  // Verb-last getalcontrole "numeriek met exact <n> cijfers is" (the table form, vs the verb-mid EBNF form).
  describe('verb-last getalcontrole', () => {
    const model = (predicate: string) => `
      Objecttype de Natuurlijk persoon (mv: Natuurlijke personen)
          het burgerservicenummer Tekst;
          is BSNnegencijferig kenmerk;
      Regel check
      geldig altijd
          Een Natuurlijk persoon is BSNnegencijferig
          indien zijn burgerservicenummer ${predicate}.
    `;
    const run = (predicate: string, bsn: string) => {
      const context = new Context();
      const id = context.generateObjectId('Natuurlijk persoon');
      context.createObject('Natuurlijk persoon', id, { burgerservicenummer: { type: 'string', value: bsn } });
      const result = engine.run(model(predicate), context);
      expect(result.success).toBe(true);
      return context.getObjectsByType('Natuurlijk persoon')[0].kenmerken['is BSNnegencijferig'];
    };

    test('parses to the same canonical operator + predicate as the verb-mid form', () => {
      const result = engine.parse(model('numeriek met exact 9 cijfers is'));
      expect(result.success).toBe(true);
      expect(result.ast).toMatchObject({
        rules: [{ condition: { expression: {
          operator: 'is numeriek met exact',
          predicate: { operator: 'numeriek_exact', digits: 9, negated: false },
        } } }],
      });
    });

    test('evaluates a 9-digit value to true', () => {
      expect(run('numeriek met exact 9 cijfers is', '999999990')).toBe(true);
    });
    test('the negated "niet numeriek met exact ... is" inverts it', () => {
      expect(run('niet numeriek met exact 9 cijfers is', '999999990')).toBe(false);
    });
  });

  // Verb-last regel-status "<regelversie> gevuurd is" / "inconsistent is".
  describe('verb-last regel-status', () => {
    test('parses "regelversie X gevuurd is"', () => {
      const result = engine.parse(`
        Objecttype de Persoon
            de leeftijd Numeriek;
        Regel basisregel
        geldig altijd
            De leeftijd van een Persoon moet berekend worden als 25 indien regelversie basisregel gevuurd is.
      `);
      expect(result.success).toBe(true);
    });

    test('a fired rule makes "regelversie X gevuurd is" hold', () => {
      const source = `
        Objecttype de Persoon (mv: Personen)
            de leeftijd Numeriek;
            is gecontroleerd kenmerk;
        Regel basisregel
        geldig altijd
            De leeftijd van een Persoon moet berekend worden als 25.
        Regel afgeleide
        geldig altijd
            Een Persoon is gecontroleerd indien regelversie basisregel gevuurd is.
      `;
      const context = new Context();
      const id = context.generateObjectId('Persoon');
      context.createObject('Persoon', id, {});
      const result = engine.run(source, context);
      expect(result.success).toBe(true);
      expect(context.getObjectsByType('Persoon')[0].kenmerken['is gecontroleerd']).toBe(true);
    });
  });
});
