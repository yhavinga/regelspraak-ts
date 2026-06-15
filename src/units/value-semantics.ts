import Decimal from 'decimal.js';
import { Value, isLeeg } from '../interfaces/value';
import type { RuntimeContext } from '../interfaces/runtime';
import { UnitRegistry } from './unit-registry';
import type { UnitValue } from './unit-arithmetic';
import { CompositeUnit } from './composite-unit';
import { unitExpressionToCompositeUnit } from './unit-expression';

export type ComparisonOperator = '==' | '!=' | '>' | '<' | '>=' | '<=';

/**
 * §3.7 — Apply the resolver-computed exact unit-conversion factor chain to a value:
 * result = value × Π(multiplyBy) ÷ Π(divideBy), each factor an exact decimal string from
 * the eenheidsysteem's omrekenspecificatie. Leeg / non-numeric passes through unchanged.
 * THE single source of truth for exact-factor conversion (assignment §7.3.1, binary §8.1.1,
 * tijdsevenredig eenheidsysteem step), consumed only when ResolvedInfo.unitConversion is present
 * so it never double-converts with the float convertComposite path.
 */
export function applyResolvedUnitConversion(
  value: Value,
  conv: { multiplyBy: string[]; divideBy: string[] }
): Value {
  // A timeline value (e.g. the §7.3.2 tijdsevenredig result) converts per period, so the
  // assignment-time §7.3.1 omrekening (120 €/jr → 10 €/mnd) reaches every period uniformly.
  if (value.type === 'timeline') {
    const tl = (value as any).value;
    const periods = (tl.periods as Array<{ value?: Value }>).map(p => ({
      ...p,
      value: p.value ? applyResolvedUnitConversion(p.value, conv) : p.value,
    }));
    return { ...(value as any), value: { ...tl, periods } } as Value;
  }
  if (isLeeg(value) || value.type !== 'number') {
    return value;
  }
  let d = new Decimal(value.value as number);
  for (const factor of conv.multiplyBy) {
    d = d.mul(new Decimal(factor));
  }
  for (const factor of conv.divideBy) {
    d = d.div(new Decimal(factor));
  }
  return { ...value, value: d.toNumber() };
}

/**
 * Unit-carrying reduction over a value list (§5.8 aggregations). Skips leeg members,
 * takes the first valid member as the unit reference, converts every other member into
 * that reference unit, reduces, and returns {...reference, value} so the unit travels.
 * Returns leeg when no valid members remain; the sommatie caller maps that to 0-or-leeg
 * via resolveEmptySom. Extracted from selectExtremeNumericValue so som/maximum/minimum
 * share the already-correct 1-arg min/max unit handling.
 */
export function reduceWithReferenceUnit(
  values: Value[],
  reduce: (nums: number[]) => number,
  context: RuntimeContext
): Value {
  // Skip lege waarden (§5.8.2); a non-leeg, non-numeric member is a genuine type error (fail fast).
  const valid = values.filter(v => !isLeeg(v));
  if (valid.length === 0) {
    return { type: 'null', value: null };
  }
  for (const v of valid) {
    if (v.type !== 'number') {
      throw new Error(`Cannot aggregate ${v.type} values`);
    }
  }

  const registry: UnitRegistry = (context as any).unitRegistry || new UnitRegistry();
  const reference = valid[0];
  const referenceUnit = getValueCompositeUnit(reference);
  const nums: number[] = [reference.value as number];

  for (const value of valid.slice(1)) {
    const valueUnit = getValueCompositeUnit(value);
    let n = value.value as number;
    if (referenceUnit || valueUnit) {
      if (!referenceUnit || !valueUnit) {
        throw new Error('Cannot reduce unit-bearing and unitless numbers');
      }
      // Identical units need no conversion — and must NOT consult the registry, which may not
      // know a custom/opaque unit (that would wrongly throw on an otherwise-valid same-unit sum).
      if (!referenceUnit.equals(valueUnit)) {
        const converted = registry.convertComposite(n, valueUnit, referenceUnit);
        if (converted === undefined) {
          throw new Error(`Cannot convert from ${valueUnit.toString()} to ${referenceUnit.toString()}`);
        }
        n = converted;
      }
    }
    nums.push(n);
  }

  return { ...reference, value: reduce(nums) };
}

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

  // §8.1.1 datum-ordening / numeric ordering lege-waarde rule: an ordinal comparison with an
  // empty operand does NOT throw. Exactly one empty => onwaar (false). Both empty => a
  // foutmelding for Datum (the spec's stricter rule, L3148/L3154) but onwaar for numeric (L3146).
  const isOrdinal = operator === '>' || operator === '<' || operator === '>=' || operator === '<=';
  if (isOrdinal && (isLeeg(left) || isLeeg(right))) {
    if (isLeeg(left) && isLeeg(right) && (left.type === 'date' || right.type === 'date')) {
      throw new Error('Kan twee lege datums niet ordenen (foutmelding)');
    }
    return false;
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
