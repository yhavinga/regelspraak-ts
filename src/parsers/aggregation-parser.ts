import { AntlrParser } from '../parser';
import { AggregationExpression, Expression, FunctionCall } from '../ast/expressions';

export type ParsedAggregationExpression = AggregationExpression | FunctionCall;

const AGGREGATION_FUNCTIONS = new Set([
  'aantal',
  'som',
  'som_van',
  'maximum_van',
  'minimum_van',
  'maximum_van_values',
  'minimum_van_values',
  'eerste_van',
  'laatste_van',
]);

export class AggregationParser {
  constructor(private readonly input: string) {}

  parseAggregation(): ParsedAggregationExpression | null {
    const expression = new AntlrParser().parseExpression(this.input);
    return isAggregationExpression(expression) ? expression : null;
  }
}

function isAggregationExpression(expression: Expression): expression is ParsedAggregationExpression {
  if (expression.type === 'AggregationExpression') {
    return true;
  }

  return expression.type === 'FunctionCall' &&
    AGGREGATION_FUNCTIONS.has((expression as FunctionCall).functionName);
}
