/**
 * Value types in RegelSpraak
 */
import { UnitExpression } from '../ast/unit-systems';

export type ValueType =
  | 'number'
  | 'string'
  | 'boolean'
  | 'date'
  | 'object'
  | 'list'
  | 'array'
  | 'null'
  | 'timeline'
  | 'dimensioned';

/**
 * Unit information for numeric values
 */
export interface Unit {
  name: string;
  symbol?: string;
  system?: string;
  expression?: UnitExpression;
}

/**
 * Base value interface
 */
export interface Value {
  type: ValueType;
  value: any;
  unit?: Unit;
  unitExpression?: UnitExpression;
}

export interface DimensionedValueCell {
  coordinates: Record<string, string>;
  value: Value;
}

export interface DimensionedRuntimeValue extends Value {
  type: 'dimensioned';
  value: DimensionedValueCell[];
}

export function isDimensionedValue(value: Value): value is DimensionedRuntimeValue {
  return value.type === 'dimensioned' && Array.isArray(value.value);
}