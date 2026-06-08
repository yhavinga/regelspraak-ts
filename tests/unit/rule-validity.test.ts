import { AntlrParser } from '../../src/parser';

const utcDate = (year: number, month: number, day: number) =>
  new Date(Date.UTC(year, month - 1, day));

describe('rule validity intervals', () => {
  let parser: AntlrParser;

  beforeEach(() => {
    parser = new AntlrParser();
  });

  test('parses always validity as an unbounded version', () => {
    const model = parser.parseModel(`Regel bepaal bedrag
geldig altijd
Het bedrag van een berekening moet berekend worden als 1.`);

    const rule = model.regels[0];

    expect(rule.versions).toHaveLength(1);
    expect(rule.version).toMatchObject({
      type: 'RuleVersion',
      kind: 'altijd',
      validity: 'altijd'
    });
    expect(rule.version?.start).toBeUndefined();
    expect(rule.version?.end).toBeUndefined();
    expect(rule.result).toBe(rule.version?.result);
  });

  test('parses open-start and open-end validity intervals', () => {
    const [openEnd, openStart] = parser.parseModel(`Regel toekomstig bedrag
geldig vanaf 01-01-2021
Het bedrag van een berekening moet berekend worden als 1.

Regel historisch bedrag
geldig t/m 31-12-2020
Het bedrag van een berekening moet berekend worden als 2.`).regels;

    expect(openEnd.version).toMatchObject({
      kind: 'interval',
      validity: 'vanaf',
      start: utcDate(2021, 1, 1)
    });
    expect(openEnd.version?.end).toBeUndefined();

    expect(openStart.version).toMatchObject({
      kind: 'interval',
      validity: 'tot',
      end: utcDate(2020, 12, 31)
    });
    expect(openStart.version?.start).toBeUndefined();
  });

  test('parses closed date and year validity intervals', () => {
    const [dateRule, yearRule] = parser.parseModel(`Regel datum bedrag
geldig vanaf 01-01-2021 t/m 31-12-2021
Het bedrag van een berekening moet berekend worden als 1.

Regel jaar bedrag
geldig vanaf 2020 t/m 2021
Het bedrag van een berekening moet berekend worden als 2.`).regels;

    expect(dateRule.version).toMatchObject({
      kind: 'interval',
      validity: 'vanaf',
      start: utcDate(2021, 1, 1),
      end: utcDate(2021, 12, 31)
    });

    expect(yearRule.version).toMatchObject({
      kind: 'interval',
      validity: 'vanaf',
      start: utcDate(2020, 1, 1),
      end: utcDate(2021, 12, 31)
    });
  });

  test('keeps multiple versions under one rule name', () => {
    const model = parser.parseModel(`Regel bepaal bedrag
geldig t/m 31-12-2020
Het bedrag van een berekening moet berekend worden als 1.
geldig vanaf 01-01-2021
Het bedrag van een berekening moet berekend worden als 2.`);

    expect(model.regels).toHaveLength(1);
    expect(model.regels[0].versions).toHaveLength(2);
    expect(model.regels[0].version).toBe(model.regels[0].versions?.[0]);
    expect(model.regels[0].result).toBe(model.regels[0].versions?.[0].result);
    expect(model.regels[0].versions?.[1].result).toMatchObject({
      type: 'Gelijkstelling'
    });
  });

  test('rejects overlapping versions of one rule', () => {
    expect(() => parser.parseModel(`Regel bepaal bedrag
geldig vanaf 01-01-2020 t/m 31-12-2020
Het bedrag van een berekening moet berekend worden als 1.
geldig vanaf 31-12-2020
Het bedrag van een berekening moet berekend worden als 2.`))
      .toThrow("Rule 'bepaal bedrag' has overlapping validity intervals");
  });

  test('allows identical validity intervals on different rule names', () => {
    const model = parser.parseModel(`Regel eerste bedrag
geldig vanaf 01-01-2020 t/m 31-12-2020
Het bedrag van een berekening moet berekend worden als 1.

Regel tweede bedrag
geldig vanaf 01-01-2020 t/m 31-12-2020
Het bedrag van een berekening moet berekend worden als 2.`);

    expect(model.regels).toHaveLength(2);
  });

  test('parses decision-table validity as the same interval model', () => {
    const model = parser.parseModel(`Beslistabel bedrag
geldig vanaf 01-01-2021 t/m 31-12-2021
|   | de uitkomst moet gesteld worden op | indien waarde gelijk is aan |
|---|------------------------------------|-----------------------------|
| 1 | 10                                 | 1                           |`);

    expect(model.beslistabels[0].version).toMatchObject({
      kind: 'interval',
      validity: 'vanaf',
      start: utcDate(2021, 1, 1),
      end: utcDate(2021, 12, 31)
    });
    expect(model.beslistabels[0].validity).toBe('vanaf');
  });
});
