/**
 * Value types in RegelSpraak
 */
import { UnitExpression } from '../ast/unit-systems';

export type ValueType = 'number' | 'string' | 'boolean' | 'date' | 'object' | 'list' | 'array' | 'null' | 'timeline';

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