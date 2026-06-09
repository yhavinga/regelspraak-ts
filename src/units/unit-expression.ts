import { UnitExpression, UnitFactor } from '../ast/unit-systems';
import { CompositeUnit } from './composite-unit';

export function unitExpression(factors: UnitFactor[]): UnitExpression {
  return {
    type: 'UnitExpression',
    factors: normalizeFactors(factors)
  };
}

export function unitExpressionFromUnit(unit: string): UnitExpression {
  return unitExpression([{ unit, exponent: 1 }]);
}

export function unitExpressionToString(expression: UnitExpression): string {
  const normalized = unitExpression(expression.factors);
  if (normalized.factors.length === 0) {
    return '1';
  }

  const numerator: string[] = [];
  const denominator: string[] = [];

  for (const factor of normalized.factors) {
    const rendered = renderFactor(factor.unit, Math.abs(factor.exponent));
    if (factor.exponent > 0) {
      numerator.push(rendered);
    } else {
      denominator.push(rendered);
    }
  }

  const numeratorText = numerator.length > 0 ? numerator.join('*') : '1';
  return denominator.length > 0
    ? `${numeratorText}/${denominator.join('*')}`
    : numeratorText;
}

export function unitExpressionToCompositeUnit(expression: UnitExpression): CompositeUnit {
  const normalized = unitExpression(expression.factors);
  const numerator: Array<[string, number]> = [];
  const denominator: Array<[string, number]> = [];

  for (const factor of normalized.factors) {
    if (factor.exponent > 0) {
      numerator.push([factor.unit, factor.exponent]);
    } else {
      denominator.push([factor.unit, -factor.exponent]);
    }
  }

  return new CompositeUnit(numerator, denominator);
}

export function compositeUnitToUnitExpression(unit: CompositeUnit): UnitExpression {
  const factors: UnitFactor[] = [];
  for (const [name, exponent] of unit.numerator) {
    factors.push({ unit: name, exponent });
  }
  for (const [name, exponent] of unit.denominator) {
    factors.push({ unit: name, exponent: -exponent });
  }
  return unitExpression(factors);
}

function normalizeFactors(factors: UnitFactor[]): UnitFactor[] {
  const exponents = new Map<string, number>();
  for (const factor of factors) {
    if (!Number.isInteger(factor.exponent)) {
      throw new Error(`Unit exponent must be an integer: ${factor.exponent}`);
    }
    exponents.set(factor.unit, (exponents.get(factor.unit) ?? 0) + factor.exponent);
  }

  return [...exponents.entries()]
    .filter(([, exponent]) => exponent !== 0)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([unit, exponent]) => ({ unit, exponent }));
}

function renderFactor(unit: string, exponent: number): string {
  return exponent === 1 ? unit : `${unit}^${exponent}`;
}
