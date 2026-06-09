import { DimensionedRuntimeValue, RuntimeContext, Value, isDimensionedValue } from '../interfaces';
import { AggregationExpression, Expression } from '../ast/expressions';
import { ExpressionEvaluator } from './expression-evaluator';
import { Dimension, DimensionAggregationSelection, DimensionCoordinate } from '../ast/dimensions';

/**
 * Engine for evaluating aggregation expressions in RegelSpraak
 */
export class AggregationEngine {
  constructor(private expressionEvaluator: any) { }

  evaluate(expr: AggregationExpression, context: RuntimeContext): Value {
    if (!expr.dimensionSelection && expr.dimensionRange) {
      expr.dimensionSelection = {
        type: 'DimensionAggregationSelection',
        kind: 'range',
        dimensionName: expr.dimensionRange.dimension || undefined,
        fromLabel: expr.dimensionRange.from,
        toLabel: expr.dimensionRange.to
      };
    }

    if (expr.dimensionSelection) {
      return this.evaluateDimensionAggregation(expr, expr.dimensionSelection, context);
    }

    // Collect values to aggregate
    const values = this.collectValues(expr.target, context);

    // Perform aggregation
    return this.aggregate(values, expr.aggregationType);
  }

  private collectValues(target: Expression | Expression[], context: RuntimeContext): Value[] {
    if (Array.isArray(target)) {
      // Multiple expressions (e.g., "de som van X, Y en Z")
      return target.map(expr => this.expressionEvaluator.evaluate(expr, context));
    } else {
      // Single expression - might return a collection
      const result = this.expressionEvaluator.evaluate(target, context);

      // If it's a list, extract all values
      if (result.type === 'list' && Array.isArray(result.value)) {
        return result.value as Value[];
      } else {
        // Single value - for dimensional objects, return it as-is
        return [result];
      }
    }
  }

  private evaluateDimensionAggregation(
    expr: AggregationExpression,
    selection: DimensionAggregationSelection,
    context: RuntimeContext
  ): Value {
    if (Array.isArray(expr.target)) {
      throw new Error('Dimension aggregation requires a single dimensioned attribute target');
    }

    const value = this.expressionEvaluator.evaluate(expr.target, context);
    if (!isDimensionedValue(value)) {
      throw new Error(`Dimension aggregation requires a dimensioned value, got ${value.type}`);
    }

    const { dimension, labels } = this.resolveRuntimeSelection(selection, context);
    const fixedCoordinates = this.resolveRuntimeFixedCoordinates(selection, dimension, context);
    const selected = this.selectDimensionedCells(value, dimension.name, labels, fixedCoordinates);
    return this.aggregate(selected, expr.aggregationType);
  }

  private resolveRuntimeSelection(
    selection: DimensionAggregationSelection,
    context: RuntimeContext
  ): { dimension: Dimension; labels: string[] } {
    const dimension = selection.resolvedDimension
      ? this.dimensionByName(selection.resolvedDimension, context)
      : selection.dimensionName
        ? this.dimensionBySelectionName(selection.dimensionName, context)
        : this.dimensionBySelectedLabels(selection, context);

    if (!dimension) {
      throw new Error(`Cannot resolve dimension selection '${selection.dimensionName ?? ''}'`);
    }

    const labels = selection.resolvedLabels ?? this.resolveRuntimeLabels(selection, dimension);
    if (labels.length === 0) {
      throw new Error(`Dimension selection for '${dimension.name}' is empty`);
    }

    return { dimension, labels };
  }

  private dimensionByName(name: string, context: RuntimeContext): Dimension | undefined {
    return (context.domainModel.dimensions || []).find(
      dimension => dimension.name.toLowerCase() === name.toLowerCase()
    );
  }

  private dimensionBySelectionName(name: string, context: RuntimeContext): Dimension | undefined {
    const normalized = this.normalizeDimensionName(name);
    const matches = (context.domainModel.dimensions || []).filter(dimension =>
      this.normalizeDimensionName(dimension.name) === normalized ||
      this.normalizeDimensionName(dimension.plural) === normalized
    );
    if (matches.length > 1) {
      throw new Error(`Ambiguous dimension '${name}'`);
    }
    return matches[0];
  }

  private dimensionBySelectedLabels(
    selection: DimensionAggregationSelection,
    context: RuntimeContext
  ): Dimension | undefined {
    const labels = this.labelsMentionedBySelection(selection);
    if (labels.length === 0) {
      return undefined;
    }

    const matches = (context.domainModel.dimensions || []).filter(dimension =>
      labels.every(label => this.findDimensionLabel(dimension, label))
    );
    if (matches.length > 1) {
      throw new Error(`Ambiguous dimension labels [${labels.join(', ')}]`);
    }
    return matches[0];
  }

  private resolveRuntimeLabels(selection: DimensionAggregationSelection, dimension: Dimension): string[] {
    switch (selection.kind) {
      case 'all':
        return [...dimension.labels]
          .sort((a, b) => a.position - b.position)
          .map(label => label.label);
      case 'range':
        if (!selection.fromLabel || !selection.toLabel) {
          throw new Error(`Range selection for '${dimension.name}' requires two labels`);
        }
        return this.labelsInRange(dimension, selection.fromLabel, selection.toLabel);
      case 'set':
        if (!selection.labels || selection.labels.length === 0) {
          throw new Error(`Set selection for '${dimension.name}' requires labels`);
        }
        return this.resolveExplicitLabels(dimension, selection.labels);
      default:
        throw new Error(`Unknown dimension selection kind: ${(selection as any).kind}`);
    }
  }

  private labelsInRange(dimension: Dimension, fromLabel: string, toLabel: string): string[] {
    const from = this.findDimensionLabel(dimension, fromLabel);
    const to = this.findDimensionLabel(dimension, toLabel);
    if (!from || !to) {
      const missing = [from ? undefined : fromLabel, to ? undefined : toLabel].filter(Boolean).join(', ');
      throw new Error(`Unknown label(s) [${missing}] for dimension '${dimension.name}'`);
    }
    if (from.position > to.position) {
      throw new Error(`Invalid range for dimension '${dimension.name}': '${from.label}' comes after '${to.label}'`);
    }
    return dimension.labels
      .filter(label => label.position >= from.position && label.position <= to.position)
      .sort((a, b) => a.position - b.position)
      .map(label => label.label);
  }

  private resolveExplicitLabels(dimension: Dimension, labels: string[]): string[] {
    const resolved: string[] = [];
    const seen = new Set<string>();
    for (const rawLabel of labels) {
      const label = this.findDimensionLabel(dimension, rawLabel);
      if (!label) {
        throw new Error(`Unknown label '${rawLabel}' for dimension '${dimension.name}'`);
      }
      const key = label.label.toLowerCase();
      if (seen.has(key)) {
        throw new Error(`Duplicate label '${label.label}' in dimension selection for '${dimension.name}'`);
      }
      seen.add(key);
      resolved.push(label.label);
    }
    return resolved;
  }

  private resolveRuntimeFixedCoordinates(
    selection: DimensionAggregationSelection,
    aggregationDimension: Dimension,
    context: RuntimeContext
  ): DimensionCoordinate[] {
    if (selection.fixedCoordinates) {
      return selection.fixedCoordinates;
    }

    const fixedLabels = selection.fixedLabels ?? [];
    if (fixedLabels.length === 0) {
      return [];
    }

    const coordinates: DimensionCoordinate[] = [];
    const usedDimensions = new Set<string>();

    for (const rawLabel of fixedLabels) {
      const matches = (context.domainModel.dimensions || []).filter(dimension =>
        this.findDimensionLabel(dimension, rawLabel)
      );
      if (matches.length === 0) {
        throw new Error(`Unknown fixed dimension label '${rawLabel}'`);
      }
      if (matches.length > 1) {
        throw new Error(`Ambiguous fixed dimension label '${rawLabel}'`);
      }

      const dimension = matches[0];
      if (dimension.name.toLowerCase() === aggregationDimension.name.toLowerCase()) {
        throw new Error(`Dimension label '${rawLabel}' fixes aggregation dimension '${aggregationDimension.name}'`);
      }
      if (usedDimensions.has(dimension.name.toLowerCase())) {
        throw new Error(`Duplicate fixed dimension '${dimension.name}' in aggregation target`);
      }

      usedDimensions.add(dimension.name.toLowerCase());
      coordinates.push({
        dimension: dimension.name,
        label: this.findDimensionLabel(dimension, rawLabel)!.label,
        sourceStyle: dimension.usageStyle,
        preposition: dimension.preposition
      });
    }

    return coordinates;
  }

  private selectDimensionedCells(
    value: DimensionedRuntimeValue,
    dimensionName: string,
    labels: string[],
    fixedCoordinates: DimensionCoordinate[]
  ): Value[] {
    const selectedLabels = new Set(labels.map(label => label.toLowerCase()));
    return value.value
      .filter(cell => {
        const coordinate = Object.entries(cell.coordinates).find(
          ([dimension]) => dimension.toLowerCase() === dimensionName.toLowerCase()
        );
        if (!coordinate || !selectedLabels.has(coordinate[1].toLowerCase())) {
          return false;
        }

        return fixedCoordinates.every(fixedCoordinate =>
          cell.coordinates[fixedCoordinate.dimension]?.toLowerCase() === fixedCoordinate.label.toLowerCase()
        );
      })
      .map(cell => cell.value);
  }

  private labelsMentionedBySelection(selection: DimensionAggregationSelection): string[] {
    if (selection.kind === 'range') {
      return [selection.fromLabel, selection.toLabel].filter((label): label is string => !!label);
    }
    if (selection.kind === 'set') {
      return selection.labels ?? [];
    }
    return [];
  }

  private findDimensionLabel(dimension: Dimension, rawLabel: string): { position: number; label: string } | undefined {
    return dimension.labels.find(label => label.label.toLowerCase() === rawLabel.toLowerCase());
  }

  private normalizeDimensionName(name: string): string {
    return name
      .toLowerCase()
      .replace(/^(de|het|een)\s+/, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private aggregate(values: Value[], type: string): Value {
    if (values.length === 0) {
      throw new Error('Cannot aggregate empty collection');
    }

    switch (type) {
      case 'som':
        return this.sum(values);
      case 'aantal':
        return this.count(values);
      case 'maximum':
        return this.maximum(values);
      case 'minimum':
        return this.minimum(values);
      case 'eerste':
        return this.first(values);
      case 'laatste':
        return this.last(values);
      default:
        throw new Error(`Unknown aggregation type: ${type}`);
    }
  }

  private sum(values: Value[]): Value {
    // Filter out null/undefined values first (Python parity - see engine.py:6954)
    const validValues = values.filter(v =>
      v.type !== 'null' && v.value !== null && v.value !== undefined
    );

    if (validValues.length === 0) {
      // Python returns 0 for all-null (engine.py:6976)
      return { type: 'number', value: 0 };
    }

    // Ensure remaining values are numbers
    const numbers = validValues.map(v => {
      if (v.type !== 'number') {
        throw new Error(`Cannot sum ${v.type} values`);
      }
      return v.value as number;
    });

    return {
      type: 'number',
      value: numbers.reduce((acc, n) => acc + n, 0)
    };
  }

  private count(values: Value[]): Value {
    return {
      type: 'number',
      value: values.length
    };
  }

  private maximum(values: Value[]): Value {
    // Filter out null/undefined values (Python parity)
    const validValues = values.filter(v =>
      v.type !== 'null' && v.value !== null && v.value !== undefined
    );

    if (validValues.length === 0) {
      return { type: 'null', value: null };
    }

    const numbers = validValues.map(v => {
      if (v.type !== 'number') {
        throw new Error(`Cannot find maximum of ${v.type} values`);
      }
      return v.value as number;
    });

    return {
      type: 'number',
      value: Math.max(...numbers)
    };
  }

  private minimum(values: Value[]): Value {
    // Filter out null/undefined values (Python parity)
    const validValues = values.filter(v =>
      v.type !== 'null' && v.value !== null && v.value !== undefined
    );

    if (validValues.length === 0) {
      return { type: 'null', value: null };
    }

    const numbers = validValues.map(v => {
      if (v.type !== 'number') {
        throw new Error(`Cannot find minimum of ${v.type} values`);
      }
      return v.value as number;
    });

    return {
      type: 'number',
      value: Math.min(...numbers)
    };
  }

  private first(values: Value[]): Value {
    return values[0];
  }

  private last(values: Value[]): Value {
    return values[values.length - 1];
  }
}