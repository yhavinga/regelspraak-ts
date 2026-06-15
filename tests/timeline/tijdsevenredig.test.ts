/**
 * §7.3.2 — "het tijdsevenredig deel per maand|jaar". The omrekenfactor for a (broken)
 * calendar period is (days the conditiebijexpressie holds) ÷ (calendar days of that
 * maand/jaar); the result applies to the WHOLE period because values are derived per
 * maand/jaar. Any eenheidsysteem omrekening between the source and target units (§7.3.1,
 * e.g. €/jr → €/mnd ÷12) is a SEPARATE step applied once at assignment — never folded into
 * a hardcoded /12 here. These three tests are the spec's own worked examples (voorbeeld
 * 1/2/3), re-derived from the spec (not the old engine), so they are the oracle for the
 * operator. The passagier has the right from 1-1-2024 tot 8-2-2025, so February 2025 is the
 * single broken month: 7 of its 28 days are covered.
 */

import { Engine, Context } from '../../src';
import { ExpressionEvaluator } from '../../src/evaluators/expression-evaluator';
import { TimelineEvaluator } from '../../src/evaluators/timeline-evaluator';
import { TimelineValueImpl, Period } from '../../src/ast/timelines';

/** Build a model + context for the tijdsevenredig examples, varying only the units/period. */
function setup(opts: {
  perPeriode: 'maand' | 'jaar';
  bron: { eenheid: string; value2024: number; value2025: number };
}): { engine: Engine; context: Context } {
  const code = `
    Objecttype de Passagier
      de belastingvermindering Numeriek (getal met 2 decimalen) met eenheid € / mnd voor elke maand;
      het recht op belastingvermindering kenmerk (bezittelijk);

    Parameter de STANDAARD_BELASTINGVERMINDERING : Numeriek (getal met 2 decimalen) met eenheid ${opts.bron.eenheid} voor elk jaar

    Regel Belastingvermindering
      geldig altijd
      De belastingvermindering van een passagier moet gesteld worden op
      (het tijdsevenredig deel per ${opts.perPeriode} van de STANDAARD_BELASTINGVERMINDERING
       gedurende de tijd dat hij een recht op belastingvermindering heeft).
  `;

  const context = new Context();

  // STANDAARD BELASTINGVERMINDERING: changes yearly (spec: 12/18 €/mnd or 120/180 €/jr).
  const paramTimeline = new TimelineValueImpl({
    periods: [
      { startDate: new Date(2024, 0, 1), endDate: new Date(2025, 0, 1),
        value: { type: 'number', value: opts.bron.value2024, unit: { name: '€' } } },
      { startDate: new Date(2025, 0, 1), endDate: new Date(2026, 0, 1),
        value: { type: 'number', value: opts.bron.value2025, unit: { name: '€' } } },
    ],
    granularity: 'jaar',
  });
  context.setTimelineParameter('STANDAARD_BELASTINGVERMINDERING', paramTimeline);

  context.createObject('Passagier', 'p1', {});

  // Recht op belastingvermindering: van 1-1-2024 tot 8-2-2025 (Feb 2025 covered 7 of 28 days).
  const rechtPeriods: Period[] = [
    { startDate: new Date(2024, 0, 1), endDate: new Date(2025, 1, 8), value: { type: 'boolean', value: true } },
    { startDate: new Date(2025, 1, 8), endDate: new Date(2026, 0, 1), value: { type: 'boolean', value: false } },
  ];
  context.setTimelineAttribute('Passagier', 'p1', 'recht_op_belastingvermindering',
    new TimelineValueImpl({ periods: rechtPeriods, granularity: 'dag' }));

  const engine = new Engine();
  const result = engine.run(code, context);
  if (!result.success) throw new Error(`run failed: ${result.error}`);
  return { engine, context };
}

const at = (context: Context, date: Date) => {
  context.evaluation_date = date;
  return context.getTimelineAttribute('Passagier', 'p1', 'belastingvermindering');
};

describe('Tijdsevenredig deel (§7.3.2)', () => {
  it('voorbeeld 1: per maand, source €/mnd — full months unchanged, broken month proportioned', () => {
    // Units match (€/mnd → €/mnd): no eenheidsysteem omrekening, only the day-proportional factor.
    const { context } = setup({ perPeriode: 'maand', bron: { eenheid: '€ / mnd', value2024: 12, value2025: 18 } });

    expect(at(context, new Date(2024, 5, 15))?.value).toBeCloseTo(12, 2);   // full month in 2024
    expect(at(context, new Date(2025, 0, 15))?.value).toBeCloseTo(18, 2);   // Jan 2025, full month
    expect(at(context, new Date(2025, 1, 15))?.value).toBeCloseTo(4.5, 2);  // Feb 2025: 7/28 × 18
    expect(at(context, new Date(2025, 5, 15))).toBeNull();                  // condition ended → leeg
  });

  it('voorbeeld 2: per jaar, source €/mnd — the year-proportional value covers the whole year', () => {
    const { context } = setup({ perPeriode: 'jaar', bron: { eenheid: '€ / mnd', value2024: 12, value2025: 18 } });

    expect(at(context, new Date(2024, 5, 15))?.value).toBeCloseTo(12, 2);          // full year 2024
    // 2025: covered 38 of 365 days (Jan 31 + Feb 7) → 18 × 38/365, spread over ALL of 2025.
    const expected2025 = (18 * 38) / 365; // 1 319/365 ≈ 1,8740
    expect(at(context, new Date(2025, 0, 15))?.value).toBeCloseTo(expected2025, 4);
    expect(at(context, new Date(2025, 5, 15))?.value).toBeCloseTo(expected2025, 4); // mid-year, still set
  });

  it('voorbeeld 3: per maand, source €/jr — ÷12 omrekening THEN the day-proportional factor', () => {
    // Source €/jr, target €/mnd: the resolver records the ÷12 omrekenfactor on the assignment,
    // folded over every period of the tijdsevenredig timeline result (§7.3.1).
    const { context } = setup({ perPeriode: 'maand', bron: { eenheid: '€ / jr', value2024: 120, value2025: 180 } });

    expect(at(context, new Date(2024, 5, 15))?.value).toBeCloseTo(10, 2);    // 120/12, full month
    expect(at(context, new Date(2025, 0, 15))?.value).toBeCloseTo(15, 2);    // 180/12, Jan 2025
    expect(at(context, new Date(2025, 1, 15))?.value).toBeCloseTo(3.75, 2);  // (180 × 7/28)/12
    expect(at(context, new Date(2025, 5, 15))).toBeNull();                   // condition ended → leeg
  });

  it('does not drop a calendar period when the source range starts mid-period', () => {
    // Source defined only from 15-1-2024: the aligned January period starts 1-1, before the source.
    // Sampling must read the value that is genuinely present in January (100), not null — otherwise
    // the whole month is silently dropped (data loss).
    const evaluator = new ExpressionEvaluator();
    const timelineEvaluator = new TimelineEvaluator(evaluator);
    const source = new TimelineValueImpl({
      periods: [{ startDate: new Date(2024, 0, 15), endDate: new Date(2024, 2, 1),
        value: { type: 'number', value: 100, unit: { name: '€' } } }],
      granularity: 'maand',
    });

    const result = timelineEvaluator.applyTijdsevenredigToTimeline(source, 'maand', undefined, new Context());
    // January AND February are present (one value per period); January is not dropped.
    const jan = result.value.periods.find(p => p.startDate.getMonth() === 0 && p.startDate.getDate() === 1);
    expect(jan).toBeDefined();
    expect(jan?.value?.value).toBeCloseTo(100, 2);
  });

  it('applyTijdsevenredigToTimeline keeps a full period unchanged (no spurious /12)', () => {
    // Direct check that the operator no longer divides by 12 by granularity: a full month with
    // no condition is factor 1, so the value is preserved (the §7.3.1 omrekening is elsewhere).
    const evaluator = new ExpressionEvaluator();
    const timelineEvaluator = new TimelineEvaluator(evaluator);
    const source = new TimelineValueImpl({
      periods: [{ startDate: new Date(2024, 0, 1), endDate: new Date(2024, 1, 1),
        value: { type: 'number', value: 31, unit: { name: '€' } } }],
      granularity: 'maand',
    });

    const result = timelineEvaluator.applyTijdsevenredigToTimeline(source, 'maand', undefined, new Context());
    expect(result.type).toBe('timeline');
    expect(result.value.periods).toHaveLength(1);
    expect(result.value.periods[0].value?.value).toBeCloseTo(31, 2);
  });
});
