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
});
