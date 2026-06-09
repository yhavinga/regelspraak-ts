/**
 * AST nodes for RegelSpraak dimensions
 */

export interface Dimension {
  type: 'Dimension';
  name: string;
  plural: string;
  usageStyle: 'prepositional' | 'adjectival';
  preposition?: string;
  labels: DimensionLabel[];
}

export interface DimensionLabel {
  position: number;
  label: string;
  dimension_name?: string;
}

export interface DimensionedAttribute {
  type: 'DimensionedAttribute';
  attribute: string;
  dimensions: string[];
}

/**
 * A resolved coordinate binding a label to its dimension.
 * Created by the resolver after matching raw labels to dimension definitions.
 */
export interface DimensionCoordinate {
  dimension: string;           // e.g., "jaardimensie"
  label: string;               // e.g., "huidig jaar"
  sourceStyle: 'prepositional' | 'adjectival';
  preposition?: string;        // e.g., "van" (only if prepositional)
}

export interface DimensionReference {
  type: 'DimensionReference';
  attribute: string;
  coordinates: DimensionCoordinate[];
}

export interface DimensionCoordinates {
  [dimensionName: string]: string; // Map of dimension name to label
}

export interface DimensionedValue {
  coordinates: DimensionCoordinates;
  value: any;
}

export interface DimensionedAttributeReference {
  type: 'DimensionedAttributeReference';
  baseAttribute: any; // AttributeReference or SubselectieExpression
  /**
   * Resolved coordinates binding labels to dimensions.
   * Populated by the resolver after validating against dimension definitions.
   * Order follows the attribute's declared dimension order, not source order.
   */
  coordinates: DimensionCoordinate[];
  /**
   * @deprecated Use coordinates instead. Raw labels kept for backward compatibility.
   */
  dimensionLabels?: string[]; // e.g., ["bruto", "huidig jaar"]
}

export type DimensionAggregationSelectionKind = 'all' | 'range' | 'set';

export interface DimensionAggregationSelection {
  type: 'DimensionAggregationSelection';
  kind: DimensionAggregationSelectionKind;
  /**
   * Dimension name or plural exactly as written in the selection. Older
   * range syntax without an explicit dimension leaves this undefined and is
   * resolved from declared labels on the target attribute.
   */
  dimensionName?: string;
  fromLabel?: string;
  toLabel?: string;
  labels?: string[];
  fixedLabels?: string[];
  fixedCoordinates?: DimensionCoordinate[];
  resolvedDimension?: string;
  resolvedLabels?: string[];
}