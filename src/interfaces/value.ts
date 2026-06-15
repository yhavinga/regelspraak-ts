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

/**
 * THE single canonical "lege waarde" (empty/null) predicate for the whole engine.
 *
 * Per spec §8.1.2 a value is leeg when it is absent or explicitly null. A numeric 0,
 * a boolean false and an empty string '' are NOT leeg — they are genuine values, so a
 * naive truthiness check would wrongly drop a 0-valued sum or a 0 verdeelplafond.
 *
 * Collection-emptiness (an empty 1:N navigation surfacing as {type:'array',value:[]})
 * is intentionally NOT decided here: the plural emptiness operator (§8.1.2 "zijn leeg")
 * handles the array case so this scalar predicate stays unambiguous.
 */
export function isLeeg(v: Value | undefined): boolean {
  return v == null || v.type === 'null' || v.value === null || v.value === undefined;
}

/**
 * The all-empty / empty-collection outcome for a sommatie (§5.8.2). Default is leeg;
 * the "of 0 als die er niet zijn" opt-out (defaultZeroWhenEmpty) yields the number 0.
 * Shared by both sommatie paths (ExpressionEvaluator.som_van_special and
 * AggregationEngine.sum) so they stop disagreeing.
 */
export function resolveEmptySom(defaultZeroWhenEmpty?: boolean): Value {
  return defaultZeroWhenEmpty ? { type: 'number', value: 0 } : { type: 'null', value: null };
}