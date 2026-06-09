import { Value } from '../interfaces/value';
import { CompositeUnit } from './composite-unit';
import { UnitRegistry } from './unit-registry';
import { UnitExpression } from '../ast/unit-systems';
import {
  unitExpressionFromUnit,
  unitExpressionToCompositeUnit
} from './unit-expression';
import { getValueCompositeUnit } from './value-semantics';

/**
 * Extended value interface with composite unit support
 */
export interface UnitValue extends Value {
  compositeUnit?: CompositeUnit;
}

/**
 * Create a value with unit information
 */
export function createUnitValue(
  value: number,
  unit?: string | UnitExpression,
  registry?: UnitRegistry
): UnitValue {
  if (!unit) {
    return { type: 'number', value };
  }

  const unitExpression = typeof unit === 'string'
    ? unitExpressionFromUnit(unit)
    : unit;
  const compositeUnit = unitExpressionToCompositeUnit(unitExpression);

  // For simple units, also store the unit info
  if (compositeUnit.numerator.length === 1 &&
      compositeUnit.denominator.length === 0 &&
      compositeUnit.numerator[0][1] === 1) {
    const unitName = compositeUnit.numerator[0][0];
    const unitInfo = registry?.findUnit(unitName);

    return {
      type: 'number',
      value,
      unit: unitInfo
        ? {
          name: unitInfo.unit.name,
          symbol: unitInfo.unit.symbol,
          system: unitInfo.system.name
        }
        : { name: unitName },
      compositeUnit
    };
  }

  return {
    type: 'number',
    value,
    compositeUnit
  };
}

/**
 * Perform arithmetic operations with unit handling
 */
export function performUnitArithmetic(
  operation: '+' | '-' | '*' | '/',
  left: UnitValue,
  right: UnitValue,
  registry: UnitRegistry
): UnitValue {
  switch (operation) {
    case '+':
    case '-':
      return performAdditionSubtraction(operation, left, right, registry);
    case '*':
      return performMultiplication(left, right);
    case '/':
      return performDivision(left, right);
  }
}

function performAdditionSubtraction(
  operation: '+' | '-',
  left: UnitValue,
  right: UnitValue,
  registry: UnitRegistry
): UnitValue {
  const leftUnit = getCompositeUnit(left);
  const rightUnit = getCompositeUnit(right);

  if (!leftUnit && !rightUnit) {
    const value = operation === '+' ? left.value + right.value : left.value - right.value;
    return { type: 'number', value };
  }

  if (!leftUnit || !rightUnit) {
    throw new Error(`Cannot ${operation === '+' ? 'add' : 'subtract'} unit-bearing and unitless numbers`);
  }

  const converted = registry.convertComposite(right.value, rightUnit, leftUnit);
  if (converted === undefined) {
    throw new Error(
      `Cannot ${operation === '+' ? 'add' : 'subtract'} incompatible units: ` +
      `${leftUnit.toString()} and ${rightUnit.toString()}`
    );
  }

  const value = operation === '+' ? left.value + converted : left.value - converted;
  const result: UnitValue = {
    type: 'number',
    value,
    unit: left.unit
  };
  if (left.compositeUnit) {
    result.compositeUnit = left.compositeUnit;
  }
  return result;
}

function performMultiplication(left: UnitValue, right: UnitValue): UnitValue {
  const value = left.value * right.value;

  // Get composite units, creating them from simple units if needed
  const leftComposite = getCompositeUnit(left);
  const rightComposite = getCompositeUnit(right);

  // No units
  if (!leftComposite && !rightComposite) {
    return { type: 'number', value };
  }

  // One has unit
  if (!leftComposite) {
    const unit = rightComposite;
    if (!unit) {
      throw new Error('Right operand must have a unit');
    }
    return {
      type: 'number',
      value,
      compositeUnit: unit
    };
  }
  if (!rightComposite) {
    return {
      type: 'number',
      value,
      compositeUnit: leftComposite
    };
  }

  // Both have units - multiply them
  const compositeUnit = leftComposite.multiply(rightComposite);

  return {
    type: 'number',
    value,
    compositeUnit: compositeUnit.isDimensionless() ? undefined : compositeUnit
  };
}

function performDivision(left: UnitValue, right: UnitValue): UnitValue {
  if (right.value === 0) {
    throw new Error('Division by zero');
  }

  const value = left.value / right.value;

  // Get composite units, creating them from simple units if needed
  const leftComposite = getCompositeUnit(left);
  const rightComposite = getCompositeUnit(right);

  // No units
  if (!leftComposite && !rightComposite) {
    return { type: 'number', value };
  }

  // Create composite units if needed
  const leftUnit = leftComposite || new CompositeUnit();
  const rightUnit = rightComposite || new CompositeUnit();

  // Divide units
  const compositeUnit = leftUnit.divide(rightUnit);

  return {
    type: 'number',
    value,
    compositeUnit: compositeUnit.isDimensionless() ? undefined : compositeUnit
  };
}

/**
 * Get composite unit from a value, creating it from simple unit if needed
 */
function getCompositeUnit(value: UnitValue): CompositeUnit | undefined {
  return getValueCompositeUnit(value);
}