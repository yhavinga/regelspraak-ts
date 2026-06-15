import { Value, RuntimeContext, isLeeg } from '../interfaces';
import { Timeline, Period, TimelineValue, TimelineExpression, PeriodDefinition, TimelineValueImpl } from '../ast/timelines';
import { Expression } from '../ast/expressions';
import { ExpressionEvaluator } from './expression-evaluator';
import {
  mergeKnips,
  getEvaluationPeriods,
  removeRedundantKnips,
  alignDate,
  nextPeriod
} from '../utils/timeline-utils';
import { Context } from '../context';
import { UnitRegistry } from '../units/unit-registry';
import { compareRuntimeValues } from '../units/value-semantics';
import Decimal from 'decimal.js';

/**
 * Evaluator for timeline expressions and operations
 */
export class TimelineEvaluator {
  private unitRegistry = new UnitRegistry();

  constructor(private expressionEvaluator: ExpressionEvaluator) {}

  /**
   * §8.2 — Lift a comparison/emptiness check pointwise into a boolean mask timeline,
   * WITHOUT throwing (unlike evaluateTimelineBinaryOp which rejects comparison ops).
   * At least one operand must be a timeline; scalar operands are broadcast. A leeg
   * value on either side makes that sub-period's mask false (the check is "not waar"),
   * never leeg — per §8.2 a moment that is empty is not a "waar" moment.
   */
  compareTimelinePointwise(
    left: Value,
    right: Value,
    operator: string,
    context: RuntimeContext
  ): TimelineValue {
    const registry = (context as any).unitRegistry || this.unitRegistry;
    const leftTL = left.type === 'timeline' ? (left as any as TimelineValue).value : null;
    const rightTL = right.type === 'timeline' ? (right as any as TimelineValue).value : null;
    const timelines = [leftTL, rightTL].filter((t): t is Timeline => t !== null);
    if (timelines.length === 0) {
      throw new Error('compareTimelinePointwise requires at least one timeline operand');
    }

    const knips = this.mergeKnips(...timelines);
    const periods: Period[] = [];
    for (let i = 0; i < knips.length - 1; i++) {
      const startDate = knips[i];
      const endDate = knips[i + 1];
      const lv = leftTL ? this.getValueAtDate(leftTL, startDate) : left;
      const rv = rightTL ? this.getValueAtDate(rightTL, startDate) : right;
      const result = (lv == null || rv == null || isLeeg(lv) || isLeeg(rv))
        ? false
        : compareRuntimeValues(lv, operator, rv, registry);
      periods.push({ startDate, endDate, value: { type: 'boolean', value: result } });
    }

    const granularity = timelines.reduce<'dag' | 'maand' | 'jaar'>(
      (finest, tl) => this.getFinestGranularity(finest, tl.granularity),
      timelines[0].granularity
    );
    return { type: 'timeline', value: { periods, granularity } };
  }

  /**
   * §8.2 — THE single whole-period reducer. Collapses a boolean mask timeline to a
   * scalar boolean that is true only if the mask is true on EVERY day of the calendar
   * jaar/maand containing the rekendatum (L3318). Reuses alignDate/nextPeriod so the
   * calendar-period definition (§3.8) lives in one place. An empty period counts as
   * "not waar" (=> false). Returns false when the rekendatum is absent (unanchored
   * period — mirrors transpiler TimelineOps.trueGehelePeriode). Negation is applied last.
   */
  reduceGehelePeriode(
    mask: Timeline,
    period: 'jaar' | 'maand',
    rekendatum: Date | undefined,
    negated: boolean
  ): boolean {
    let all: boolean;
    if (!rekendatum) {
      all = false;
    } else {
      const start = alignDate(rekendatum, period);
      const end = nextPeriod(start, period);
      all = true;
      const cursor = new Date(start);
      while (cursor < end) {
        const v = this.getValueAtDate(mask, cursor);
        if (!(v && v.type === 'boolean' && v.value === true)) {
          all = false;
          break;
        }
        cursor.setDate(cursor.getDate() + 1);
      }
    }
    return negated ? !all : all;
  }

  /**
   * §10.3 — THE single result-clipping helper. Restricts a timeline to the part covered
   * by a tijdsafhankelijke voorwaarde. A PeriodDefinition (van dd. / vanaf / tot (en met))
   * CLAMPS each kept period to [start,end) so a mid-period boundary cuts cleanly. An
   * Expression ("gedurende de tijd dat ...") keeps only the sub-periods where the
   * condition holds. Reuses the (now public) evaluatePeriodDefinition / filterPeriodsWithCondition.
   */
  restrictTimelineToCondition(
    timeline: Timeline,
    temporalCondition: PeriodDefinition | Expression,
    context: RuntimeContext
  ): Timeline {
    if ((temporalCondition as PeriodDefinition).type === 'PeriodDefinition') {
      const { start, end } = this.evaluatePeriodDefinition(temporalCondition as PeriodDefinition, context);
      const clamped: Period[] = [];
      for (const p of timeline.periods) {
        const startDate = p.startDate > start ? p.startDate : start;
        const endDate = p.endDate < end ? p.endDate : end;
        if (startDate < endDate) {
          clamped.push({ startDate, endDate, value: p.value });
        }
      }
      return { periods: clamped, granularity: timeline.granularity };
    }
    // Expression form ("gedurende de tijd dat ..."): keep only the sub-periods where the condition
    // holds, SPLITTING a result period at the condition's interior knips (§10.3 para 3 / §8.4.2) —
    // not the whole-period keep/drop of filterPeriodsWithCondition.
    return {
      periods: this.maskTimelineByCondition(timeline, temporalCondition as Expression, context),
      granularity: timeline.granularity
    };
  }

  /**
   * Walk each period day-by-day, evaluating the condition at each day, and emit the maximal
   * sub-periods where it is true. This carries a knip at every point the condition flips, so a
   * result period whose condition turns false mid-period is cut at exactly that day.
   */
  private maskTimelineByCondition(timeline: Timeline, condition: Expression, context: RuntimeContext): Period[] {
    const masked: Period[] = [];
    const ctx = context as any;
    for (const period of timeline.periods) {
      let segmentStart: Date | null = null;
      const cursor = new Date(period.startDate);
      while (cursor < period.endDate) {
        const savedDate = ctx.evaluation_date;
        ctx.evaluation_date = new Date(cursor);
        const r = this.expressionEvaluator.evaluate(condition, context);
        ctx.evaluation_date = savedDate;
        const isTrue = r.type === 'boolean' && r.value === true;
        if (isTrue && segmentStart === null) {
          segmentStart = new Date(cursor);
        } else if (!isTrue && segmentStart !== null) {
          masked.push({ startDate: segmentStart, endDate: new Date(cursor), value: period.value });
          segmentStart = null;
        }
        cursor.setDate(cursor.getDate() + 1);
      }
      if (segmentStart !== null) {
        masked.push({ startDate: segmentStart, endDate: new Date(period.endDate), value: period.value });
      }
    }
    return masked;
  }

  /**
   * Evaluate a timeline expression
   */
  evaluate(expr: TimelineExpression, context: RuntimeContext): Value {
    switch (expr.operation) {
      case 'totaal':
        return this.evaluateTotaal(expr, context);
      case 'aantal_dagen':
        return this.evaluateAantalDagen(expr, context);
      case 'naar_verhouding':
        return this.evaluateNaarVerhouding(expr, context);
      case 'tijdsevenredig_deel_per_maand':
        return this.evaluateTijdsevenredigPerMaand(expr, context);
      case 'tijdsevenredig_deel_per_jaar':
        return this.evaluateTijdsevenredigPerJaar(expr, context);
      default:
        throw new Error(`Unknown timeline operation: ${expr.operation}`);
    }
  }

  /**
   * Get value at a specific date from a timeline value
   */
  getValueAt(timelineValue: TimelineValue, date: Date): Value | null {
    const timeline = timelineValue.value;
    
    for (const period of timeline.periods) {
      if (date >= period.startDate && date < period.endDate) {
        return period.value || null;
      }
    }
    
    return null;
  }

  /**
   * Merge knips (change points) from multiple timelines
   */
  mergeKnips(...timelines: Timeline[]): Date[] {
    const knips = new Set<number>();
    
    for (const timeline of timelines) {
      for (const period of timeline.periods) {
        knips.add(period.startDate.getTime());
        knips.add(period.endDate.getTime());
      }
    }
    
    return Array.from(knips)
      .sort((a, b) => a - b)
      .map(time => new Date(time));
  }

  /**
   * Evaluate timeline addition, multiplication, etc.
   */
  evaluateTimelineBinaryOp(
    leftTimeline: Timeline,
    rightTimeline: Timeline,
    operator: '+' | '-' | '*' | '/' | '==' | '!=' | '>' | '<' | '>=' | '<=' | '&&' | '||',
    context: RuntimeContext,
    sourceOperator?: string
  ): TimelineValue {
    // Check if operator is valid for timeline operations
    if (['==', '!=', '>', '<', '>=', '<=', '&&', '||'].includes(operator)) {
      throw new Error(`Operator ${operator} not supported for timeline operations`);
    }
    // Get all knips from both timelines
    const knips = this.mergeKnips(leftTimeline, rightTimeline);
    const periods: Period[] = [];

    // Create evaluation periods between consecutive knips
    for (let i = 0; i < knips.length - 1; i++) {
      const startDate = knips[i];
      const endDate = knips[i + 1];

      // Get values from both timelines at this period's start
      const leftValue = this.getValueAtDate(leftTimeline, startDate);
      const rightValue = this.getValueAtDate(rightTimeline, startDate);

      // For subtraction a leeg operand is meaningful (§6.3 Tabel 7/8), so combine when EITHER
      // side is present; other operators still require both.
      const isSub = operator === '-';
      if ((leftValue && rightValue) || (isSub && (leftValue || rightValue))) {
        const resultValue = this.performBinaryOp(
          leftValue ?? { type: 'null', value: null },
          rightValue ?? { type: 'null', value: null },
          operator,
          sourceOperator
        );
        periods.push({
          startDate,
          endDate,
          value: resultValue
        });
      }
    }
    
    // Determine result granularity (finest of the two)
    const granularity = this.getFinestGranularity(
      leftTimeline.granularity,
      rightTimeline.granularity
    );
    
    return {
      type: 'timeline',
      value: {
        periods,
        granularity
      }
    };
  }

  private evaluateTotaal(expr: TimelineExpression, context: RuntimeContext): Value {
    // Evaluate the target expression
    const targetValue = this.expressionEvaluator.evaluate(expr.target, context);
    
    // Handle timeline values
    if (targetValue.type === 'timeline') {
      const timelineValue = targetValue as any as TimelineValue;
      const timeline = timelineValue.value;
      
      // If there's a temporal condition, filter periods
      let periodsToSum = timeline.periods;
      if (expr.condition) {
        periodsToSum = this.filterPeriodsWithCondition(timeline, expr.condition, context);
      }
      
      // Per specification section 7.1: totaal_van returns a scalar sum
      // The sum accounts for the actual duration of each period
      let total = new Decimal(0);
      
      for (const period of periodsToSum) {
        if (!period.value) {
          // Skip empty periods
          continue;
        }
        if (period.value.type !== 'number') {
          throw new Error('Cannot sum non-numeric timeline values');
        }
        
        // For timeline aggregation, we sum the values directly
        // The timeline values are already adjusted for their period duration
        total = total.plus(new Decimal(period.value.value as number));
      }
      
      return {
        type: 'number',
        value: total.toNumber(),
        unit: timeline.periods[0]?.value?.unit
      };
    }
    
    // Handle array values (backward compatibility)
    if (targetValue.type === 'array') {
      const values = targetValue.value as Value[];
      let total = 0;
      
      for (const val of values) {
        if (val.type !== 'number') {
          throw new Error(`totaal_van expects numeric values, got ${val.type}`);
        }
        total += val.value as number;
      }
      
      return {
        type: 'number',
        value: total,
        unit: values[0]?.unit
      };
    }
    
    // Handle scalar values (single number)
    if (targetValue.type === 'number') {
      return targetValue; // The total of a single number is itself
    }
    
    throw new Error(`totaal operation expects a timeline, array, or number value, got ${targetValue.type}`);
  }

  private evaluateAantalDagen(expr: TimelineExpression, context: RuntimeContext): Value {
    // Pattern: "het aantal dagen in [period] dat [condition]"
    if (!expr.condition) {
      throw new Error('aantal_dagen requires a condition');
    }
    
    // Get the period to evaluate
    let startDate: Date;
    let endDate: Date;
    
    if (expr.period) {
      // Use the specified period
      const periodBounds = this.evaluatePeriodDefinition(expr.period, context);
      startDate = periodBounds.start;
      endDate = periodBounds.end;
    } else {
      // Use current evaluation context period (e.g., current month)
      startDate = alignDate(context.evaluation_date, 'maand');
      endDate = nextPeriod(startDate, 'maand');
    }
    
    // Count days where condition is true
    let dayCount = 0;
    const currentDate = new Date(startDate);
    
    while (currentDate < endDate) {
      // Save current evaluation date
      const savedDate = context.evaluation_date;
      context.evaluation_date = currentDate;
      
      // Evaluate condition for this day
      const conditionResult = this.expressionEvaluator.evaluate(expr.condition, context);
      
      // Restore evaluation date
      context.evaluation_date = savedDate;
      
      if (conditionResult.type === 'boolean' && conditionResult.value === true) {
        dayCount++;
      }
      
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return {
      type: 'number',
      value: dayCount
    };
  }

  private evaluateNaarVerhouding(expr: TimelineExpression, context: RuntimeContext): Value {
    // Calculate prorated value based on time duration
    const targetValue = this.expressionEvaluator.evaluate(expr.target, context);
    
    if (targetValue.type !== 'number') {
      throw new Error('naar_verhouding requires a numeric value');
    }
    
    // This would need period information to calculate proportion
    // For now, return the original value
    return targetValue;
  }
  
  /**
   * §7.3.2 — the tijdsevenredig deel per maand. A plain scalar source has no broken period, so
   * it passes through (factor 1); the eenheidsysteem omrekening (e.g. €/jr → €/mnd) is applied
   * once at assignment from the resolver's unitConversion (§7.3.1), never a hardcoded /12 here.
   */
  private evaluateTijdsevenredigPerMaand(expr: TimelineExpression, context: RuntimeContext): Value | TimelineValue {
    const targetValue = this.expressionEvaluator.evaluate(expr.target, context);

    if (targetValue.type === 'timeline') {
      return this.applyTijdsevenredigToTimeline(
        targetValue as any as TimelineValue, 'maand', expr.condition, context
      );
    } else if (targetValue.type === 'number') {
      return targetValue;
    }

    throw new Error('tijdsevenredig_deel_per_maand requires numeric or timeline value');
  }

  /**
   * §7.3.2 — the tijdsevenredig deel per jaar. See evaluateTijdsevenredigPerMaand.
   */
  private evaluateTijdsevenredigPerJaar(expr: TimelineExpression, context: RuntimeContext): Value | TimelineValue {
    const targetValue = this.expressionEvaluator.evaluate(expr.target, context);

    if (targetValue.type === 'timeline') {
      return this.applyTijdsevenredigToTimeline(
        targetValue as any as TimelineValue, 'jaar', expr.condition, context
      );
    } else if (targetValue.type === 'number') {
      return targetValue;
    }

    throw new Error('tijdsevenredig_deel_per_jaar requires numeric or timeline value');
  }
  
  /**
   * §7.3.2 — derive a value per calendar maand/jaar from a source timeline. For each aligned
   * calendar period the omrekenfactor is (days the conditiebijexpressie holds) ÷ (calendar days
   * of that maand/jaar), and the result is the source value of that period times the factor —
   * applied to the WHOLE period because values are derived per maand/jaar (spec voorbeeld 1:
   * Feb 2025 has 28 days, 7 covered → 7/28 × 18 = 4,5 for the whole month). A period the
   * condition never covers yields no value (leeg). The source unit is preserved; any
   * eenheidsysteem omrekening between source and target units is the assignment's job (§7.3.1),
   * so a €/jr source assigned to a €/mnd attribute is divided by 12 exactly once. Without a
   * condition every period is full (factor 1), re-expressing a coarser source onto the maand/jaar
   * grid.
   */
  public applyTijdsevenredigToTimeline(
    timelineValue: TimelineValue,
    periodType: 'maand' | 'jaar',
    condition: Expression | undefined,
    context: RuntimeContext
  ): TimelineValue {
    const source = timelineValue.value;
    const resultPeriods: Period[] = [];

    if (source.periods.length > 0) {
      const rangeStart = source.periods.reduce(
        (min, p) => (p.startDate < min ? p.startDate : min), source.periods[0].startDate);
      const rangeEnd = source.periods.reduce(
        (max, p) => (p.endDate > max ? p.endDate : max), source.periods[0].endDate);

      let cursor = alignDate(rangeStart, periodType);
      while (cursor < rangeEnd) {
        const periodEnd = nextPeriod(cursor, periodType);
        // Sample inside the source's defined range: the first aligned period may start before the
        // source does (alignDate snaps back to the 1st), so sampling at `cursor` would read null and
        // drop a period the source actually covers. max(cursor, rangeStart) reads the value that is
        // genuinely present during this calendar period (one value per period, per §7.3.2).
        const sourceValue = this.getValueAtDate(source, cursor > rangeStart ? cursor : rangeStart);
        if (sourceValue && sourceValue.type === 'number') {
          // One day-by-day walk yields both the calendar length and the condition coverage, so the
          // factor (e.g. 7/28) is exact and DST-safe (setDate advances exactly one calendar day).
          let totalDays = 0;
          let conditionDays = 0;
          const day = new Date(cursor);
          while (day < periodEnd) {
            totalDays++;
            if (!condition) {
              conditionDays++;
            } else {
              const saved = context.evaluation_date;
              context.evaluation_date = new Date(day);
              const r = this.expressionEvaluator.evaluate(condition, context);
              context.evaluation_date = saved;
              if (r.type === 'boolean' && r.value === true) conditionDays++;
            }
            day.setDate(day.getDate() + 1);
          }
          if (conditionDays > 0) {
            const factor = new Decimal(conditionDays).div(new Decimal(totalDays));
            const proportioned = new Decimal(sourceValue.value as number).mul(factor).toNumber();
            resultPeriods.push({
              startDate: new Date(cursor),
              endDate: periodEnd,
              value: { type: 'number', value: proportioned, unit: sourceValue.unit },
            });
          }
        }
        cursor = periodEnd;
      }
    }

    return {
      type: 'timeline',
      value: {
        // Adjacent periods carrying the same value collapse, so full maanden/jaren read as one
        // span (spec voorbeeld 1: "12 €/mnd van 1-1-2024 tot 1-1-2025").
        periods: removeRedundantKnips(resultPeriods, periodType),
        granularity: periodType,
      },
    };
  }

  /**
   * Filter periods based on a temporal condition.
   */
  public filterPeriodsWithCondition(
    timeline: Timeline,
    condition: Expression,
    context: RuntimeContext
  ): Period[] {
    const filteredPeriods: Period[] = [];
    
    for (const period of timeline.periods) {
      // Evaluate condition at the start of this period
      const savedDate = context.evaluation_date;
      context.evaluation_date = period.startDate;
      
      const conditionResult = this.expressionEvaluator.evaluate(condition, context);
      
      context.evaluation_date = savedDate;
      
      if (conditionResult.type === 'boolean' && conditionResult.value === true) {
        filteredPeriods.push(period);
      }
    }
    
    return filteredPeriods;
  }
  
  /**
   * Evaluate a period definition to get start and end dates.
   */
  public evaluatePeriodDefinition(
    periodDef: PeriodDefinition,
    context: RuntimeContext
  ): { start: Date; end: Date } {
    let start: Date;
    let end: Date;
    
    switch (periodDef.periodType) {
      case 'vanaf':
        if (!periodDef.startDate) {
          throw new Error('vanaf requires a start date');
        }
        const startValue = this.expressionEvaluator.evaluate(periodDef.startDate, context);
        if (startValue.type !== 'date') {
          throw new Error('Period start must be a date');
        }
        start = startValue.value as Date;
        // End is open-ended, use a far future date
        end = new Date(2100, 0, 1);
        break;
        
      case 'tot':
      case 'tot_en_met':
        if (!periodDef.endDate) {
          throw new Error(`${periodDef.periodType} requires an end date`);
        }
        // Start is open-ended, use a far past date
        start = new Date(1900, 0, 1);
        const endValue = this.expressionEvaluator.evaluate(periodDef.endDate, context);
        if (endValue.type !== 'date') {
          throw new Error('Period end must be a date');
        }
        end = endValue.value as Date;
        if (periodDef.periodType === 'tot_en_met') {
          // Include the end date
          end = new Date(end);
          end.setDate(end.getDate() + 1);
        }
        break;
        
      case 'van_tot':
      case 'van_tot_en_met':
        if (!periodDef.startDate || !periodDef.endDate) {
          throw new Error(`${periodDef.periodType} requires both start and end dates`);
        }
        const startVal = this.expressionEvaluator.evaluate(periodDef.startDate, context);
        const endVal = this.expressionEvaluator.evaluate(periodDef.endDate, context);
        if (startVal.type !== 'date' || endVal.type !== 'date') {
          throw new Error('Period bounds must be dates');
        }
        start = startVal.value as Date;
        end = endVal.value as Date;
        if (periodDef.periodType === 'van_tot_en_met') {
          // Include the end date
          end = new Date(end);
          end.setDate(end.getDate() + 1);
        }
        break;
        
      default:
        throw new Error(`Unknown period type: ${periodDef.periodType}`);
    }
    
    return { start, end };
  }

  private getValueAtDate(timeline: Timeline, date: Date): Value | null {
    for (const period of timeline.periods) {
      if (date >= period.startDate && date < period.endDate) {
        return period.value || null;
      }
    }
    return null;
  }

  private performBinaryOp(left: Value, right: Value, operator: string, sourceOperator?: string): Value {
    // §6.3 Tabel 7/8 lege-waarde for subtraction, applied pointwise on timelines (so a leeg
    // per-period operand does not crash, and "min" vs "verminderd met" differ correctly).
    if (operator === '-' && (isLeeg(left) || isLeeg(right))) {
      if (sourceOperator === 'verminderd met') {
        // Tabel 8: left leeg => leeg; a leeg right counts as 0.
        if (isLeeg(left)) {
          return { type: 'null', value: null };
        }
        return { type: 'number', value: left.value as number, unit: left.unit };
      }
      // Tabel 7 ("min"): a lege waarde counts as 0 on either side.
      const l = isLeeg(left) ? 0 : (left.value as number);
      const r = isLeeg(right) ? 0 : (right.value as number);
      return { type: 'number', value: l - r, unit: isLeeg(left) ? right.unit : left.unit };
    }

    if (left.type !== 'number' || right.type !== 'number') {
      throw new Error(`Cannot apply ${operator} to ${left.type} and ${right.type}`);
    }

    const leftVal = left.value as number;
    const rightVal = right.value as number;
    let result: number;
    
    switch (operator) {
      case '+':
        result = leftVal + rightVal;
        break;
      case '-':
        result = leftVal - rightVal;
        break;
      case '*':
        result = leftVal * rightVal;
        break;
      case '/':
        if (rightVal === 0) {
          throw new Error('Division by zero');
        }
        result = leftVal / rightVal;
        break;
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }
    
    return {
      type: 'number',
      value: result,
      unit: left.unit
    };
  }

  private getFinestGranularity(
    g1: 'dag' | 'maand' | 'jaar',
    g2: 'dag' | 'maand' | 'jaar'
  ): 'dag' | 'maand' | 'jaar' {
    const order = { 'dag': 0, 'maand': 1, 'jaar': 2 };
    return order[g1] < order[g2] ? g1 : g2;
  }

  /**
   * Evaluate timeline × scalar operation.
   * Broadcasts the scalar value across all periods in the timeline.
   */
  evaluateTimelineScalarOp(
    timeline: Timeline,
    scalar: Value,
    operator: '+' | '-' | '*' | '/',
    context: RuntimeContext,
    sourceOperator?: string
  ): TimelineValue {
    const periods: Period[] = [];

    // Apply the operation to each period in the timeline
    for (const period of timeline.periods) {
      if (period.value) {
        // Apply binary operation between timeline value and scalar
        const resultValue = this.performBinaryOp(period.value, scalar, operator, sourceOperator);
        
        periods.push({
          startDate: period.startDate,
          endDate: period.endDate,
          value: resultValue
        });
      } else {
        // Keep empty periods but ensure value is undefined, not null
        periods.push({
          startDate: period.startDate,
          endDate: period.endDate
          // Omit value property entirely for empty periods
        });
      }
    }
    
    // Create result timeline with same granularity
    const cleanedPeriods = removeRedundantKnips(periods, timeline.granularity);
    const resultTimeline: Timeline = {
      periods: cleanedPeriods,
      granularity: timeline.granularity
    };
    
    return {
      type: 'timeline',
      value: resultTimeline
    };
  }

  /**
   * Evaluate scalar × timeline operation.
   * Broadcasts the scalar value across all periods in the timeline.
   * Order matters for non-commutative operations (-, /).
   */
  evaluateScalarTimelineOp(
    scalar: Value,
    timeline: Timeline,
    operator: '+' | '-' | '*' | '/',
    context: RuntimeContext,
    sourceOperator?: string
  ): TimelineValue {
    const periods: Period[] = [];

    // Apply the operation to each period in the timeline
    for (const period of timeline.periods) {
      if (period.value) {
        // Apply binary operation between scalar and timeline value (order matters!)
        const resultValue = this.performBinaryOp(scalar, period.value, operator, sourceOperator);
        
        periods.push({
          startDate: period.startDate,
          endDate: period.endDate,
          value: resultValue
        });
      } else {
        // For operations with empty values, follow specification rules
        // Most operations with empty values return empty
        periods.push({
          startDate: period.startDate,
          endDate: period.endDate
          // Omit value property entirely for empty periods
        });
      }
    }
    
    // Create result timeline with same granularity
    const cleanedPeriods = removeRedundantKnips(periods, timeline.granularity);
    const resultTimeline: Timeline = {
      periods: cleanedPeriods,
      granularity: timeline.granularity
    };
    
    return {
      type: 'timeline',
      value: resultTimeline
    };
  }
}