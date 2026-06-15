import { DimensionedRuntimeValue, RuntimeContext, Value, isDimensionedValue, isLeeg, resolveEmptySom } from '../interfaces';
import { AggregationExpression, Expression } from '../ast/expressions';
import { ExpressionEvaluator } from './expression-evaluator';
import { Dimension, DimensionAggregationSelection, DimensionCoordinate } from '../ast/dimensions';
import { reduceWithReferenceUnit } from '../units/value-semantics';

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
    return this.aggregate(values, expr.aggregationType, expr.defaultZeroWhenEmpty, context);
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
    return this.aggregate(selected, expr.aggregationType, expr.defaultZeroWhenEmpty, context);
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

  private aggregate(values: Value[], type: string, defaultZeroWhenEmpty: boolean | undefined, context: RuntimeContext): Value {
    if (values.length === 0) {
      // §5.8.2: an empty sommatie is leeg (or 0 with the opt-out); other reductions of an empty
      // collection are leeg too — never an error.
      return type === 'som' ? resolveEmptySom(defaultZeroWhenEmpty) : { type: 'null', value: null };
    }

    switch (type) {
      case 'som':
        return this.sum(values, defaultZeroWhenEmpty, context);
      case 'aantal':
        return this.count(values);
      case 'maximum':
        return this.maximum(values, context);
      case 'minimum':
        return this.minimum(values, context);
      case 'eerste':
        return this.first(values);
      case 'laatste':
        return this.last(values);
      default:
        throw new Error(`Unknown aggregation type: ${type}`);
    }
  }

  private sum(values: Value[], defaultZeroWhenEmpty: boolean | undefined, context: RuntimeContext): Value {
    // §5.8.2: lege attribuutwaarden are skipped; the unit of the selector attribute travels with
    // the result (§6). All-empty => leeg by default, 0 only with the "of 0 als die er niet zijn".
    const reduced = reduceWithReferenceUnit(values, nums => nums.reduce((acc, n) => acc + n, 0), context);
    return isLeeg(reduced) ? resolveEmptySom(defaultZeroWhenEmpty) : reduced;
  }

  private count(values: Value[]): Value {
    return {
      type: 'number',
      value: values.length
    };
  }

  private maximum(values: Value[], context: RuntimeContext): Value {
    return reduceWithReferenceUnit(values, nums => Math.max(...nums), context);
  }

  private minimum(values: Value[], context: RuntimeContext): Value {
    return reduceWithReferenceUnit(values, nums => Math.min(...nums), context);
  }

  private first(values: Value[]): Value {
    return values[0];
  }

  private last(values: Value[]): Value {
    return values[values.length - 1];
  }
}