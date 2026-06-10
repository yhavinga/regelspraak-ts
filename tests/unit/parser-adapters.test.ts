import { AggregationParser } from '../../src/parsers/aggregation-parser';
import { RuleParser } from '../../src/parsers/rule-parser';

const utcDate = (year: number, month: number, day: number) =>
  new Date(Date.UTC(year, month - 1, day));

describe('parser adapters', () => {
  test('RuleParser delegates rule validity parsing to the grammar parser', () => {
    const rule = new RuleParser(`
Regel toekomstig bedrag
geldig vanaf 01-01-2021
Het bedrag van een berekening moet berekend worden als 1.
`).parseRule();

    expect(rule.version).toMatchObject({
      type: 'RuleVersion',
      kind: 'interval',
      validity: 'vanaf',
      start: utcDate(2021, 1, 1),
    });
  });

  test('AggregationParser delegates compound aggregation syntax to the grammar parser', () => {
    const expression = new AggregationParser(
      'de som van alle belasting op basis van afstand'
    ).parseAggregation();

    expect(expression).toMatchObject({
      type: 'FunctionCall',
      functionName: 'som_van',
      arguments: [
        {
          type: 'AttributeReference',
          path: ['belasting op basis van afstand'],
        },
      ],
    });
  });

  test('AggregationParser returns null for a valid non-aggregation expression', () => {
    const expression = new AggregationParser('1').parseAggregation();

    expect(expression).toBeNull();
  });

  // A lexical token-recognition error must fail at the parser boundary. The
  // adapter delegates to AntlrParser, which attaches one error listener to both
  // the lexer and the parser; if the lexer's errors were ignored, an invalid
  // trailing character would be dropped and the adapter would fabricate a valid
  // aggregation, so `null` would no longer reliably mean "valid non-aggregation
  // expression".
  test('AggregationParser rejects invalid lexical trailing input instead of fabricating an aggregation', () => {
    expect(() => new AggregationParser('het aantal personen @').parseAggregation())
      .toThrow(/token recognition error/);
  });

  test('AggregationParser rejects invalid lexical input on a non-aggregation expression', () => {
    expect(() => new AggregationParser('1 @').parseAggregation())
      .toThrow(/token recognition error/);
  });
});
