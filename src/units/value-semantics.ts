import Decimal from 'decimal.js';
import { Value } from '../interfaces/value';
import { UnitRegistry } from './unit-registry';
import type { UnitValue } from './unit-arithmetic';
import { CompositeUnit } from './composite-unit';
import { unitExpressionToCompositeUnit } from './unit-expression';

export type ComparisonOperator = '==' | '!=' | '>' | '<' | '>=' | '<=';

export function compareRuntimeValues(
  left: Value,
  operator: string,
  right: Value,
  registry: UnitRegistry
): boolean {
  if (!isComparisonOperator(operator)) {
    throw new Error(`Unknown comparison operator: ${operator}`);
  }

  if (right.type === 'array') {
    const values = right.value as Value[];
    if (values.length === 0) {
      return false;
    }
    return values.some(value => compareRuntimeValues(left, operator, value, registry));
  }

  if (left.type === 'number' && right.type === 'number') {
    return compareNumbers(left, operator, right, registry);
  }

  if (left.type !== right.type) {
    if (left.type === 'null' || right.type === 'null') {
      return compareNulls(left, operator, right);
    }
    throw new Error(`Cannot compare ${left.type} with ${right.type}`);
  }

  switch (left.type) {
    case 'string':
      return compareOrdered(left.value as string, operator, right.value as string);
    case 'boolean':
      return compareBooleans(left.value as boolean, operator, right.value as boolean);
    case 'date':
      return compareOrdered(
        new Date(left.value).getTime(),
        operator,
        new Date(right.value).getTime()
      );
    case 'null':
      return compareNulls(left, operator, right);
    default:
      if (operator === '==') {
        return left.value === right.value;
      }
      if (operator === '!=') {
        return left.value !== right.value;
      }
      throw new Error(`Cannot use ${operator} with ${left.type}`);
  }
}

export function getValueCompositeUnit(value: Value): CompositeUnit | undefined {
  const unitValue = value as UnitValue;
  if (unitValue.compositeUnit) {
    return unitValue.compositeUnit;
  }
  if (value.unitExpression) {
    return unitExpressionToCompositeUnit(value.unitExpression);
  }
  if (typeof value.unit === 'string') {
    return new CompositeUnit([[value.unit, 1]], []);
  }
  if (value.unit?.expression) {
    return unitExpressionToCompositeUnit(value.unit.expression);
  }
  if (value.unit) {
    return new CompositeUnit([[value.unit.name, 1]], []);
  }
  return undefined;
}

function compareNumbers(
  left: Value,
  operator: ComparisonOperator,
  right: Value,
  registry: UnitRegistry
): boolean {
  const leftUnit = getValueCompositeUnit(left);
  const rightUnit = getValueCompositeUnit(right);

  if (leftUnit || rightUnit) {
    if (!leftUnit || !rightUnit) {
      throw new Error('Cannot compare unit-bearing and unitless numbers');
    }
    const convertedRight = registry.convertComposite(right.value as number, rightUnit, leftUnit);
    if (convertedRight === undefined) {
      throw new Error(`Cannot convert from ${rightUnit.toString()} to ${leftUnit.toString()}`);
    }
    return compareDecimals(new Decimal(left.value), operator, new Decimal(convertedRight));
  }

  return compareDecimals(new Decimal(left.value), operator, new Decimal(right.value));
}

function compareDecimals(left: Decimal, operator: ComparisonOperator, right: Decimal): boolean {
  switch (operator) {
    case '==': return left.equals(right);
    case '!=': return !left.equals(right);
    case '>': return left.greaterThan(right);
    case '<': return left.lessThan(right);
    case '>=': return left.greaterThanOrEqualTo(right);
    case '<=': return left.lessThanOrEqualTo(right);
  }
}

function compareOrdered<T extends string | number>(
  left: T,
  operator: ComparisonOperator,
  right: T
): boolean {
  switch (operator) {
    case '==': return left === right;
    case '!=': return left !== right;
    case '>': return left > right;
    case '<': return left < right;
    case '>=': return left >= right;
    case '<=': return left <= right;
  }
}

function compareBooleans(
  left: boolean,
  operator: ComparisonOperator,
  right: boolean
): boolean {
  switch (operator) {
    case '==': return left === right;
    case '!=': return left !== right;
    default: throw new Error(`Cannot use ${operator} with boolean`);
  }
}

function compareNulls(left: Value, operator: ComparisonOperator, right: Value): boolean {
  switch (operator) {
    case '==': return left.type === 'null' && right.type === 'null';
    case '!=': return left.type !== right.type;
    default: throw new Error(`Cannot use ${operator} with null`);
  }
}

function isComparisonOperator(operator: string): operator is ComparisonOperator {
  return operator === '==' || operator === '!=' || operator === '>' ||
    operator === '<' || operator === '>=' || operator === '<=';
}
