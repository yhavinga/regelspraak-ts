/**
 * Engine-level / unit regression tests locking in the 2026-06 spec-conformance batch
 * (PLAN_REGELSPRAAK_uptodate_20260615.md). Each test cites the RegelSpraak v2.1.0 section it
 * pins and corresponds to a finding (and, where noted, an adversarially-confirmed defect fix).
 */
import { Context } from '../../src';
import { isLeeg, resolveEmptySom } from '../../src/interfaces/value';
import { checkElfproef, isNumeriekExact, ExpressionEvaluator } from '../../src/evaluators/expression-evaluator';
import { compareRuntimeValues, reduceWithReferenceUnit, applyResolvedUnitConversion } from '../../src/units/value-semantics';
import { UnitRegistry } from '../../src/units/unit-registry';
import { TimelineEvaluator } from '../../src/evaluators/timeline-evaluator';
import type { Value } from '../../src/interfaces';
import type { Timeline } from '../../src/ast/timelines';

const num = (value: number, unit?: string): Value => unit ? { type: 'number', value, unit: { name: unit } } : { type: 'number', value };
const leeg: Value = { type: 'null', value: null };

describe('Spec-conformance batch (2026-06)', () => {
  describe('§8.1.2 lege waarde — isLeeg (#2/#3/#7/...)', () => {
    test('null / type=null / missing are leeg; 0, false, "" are NOT', () => {
      expect(isLeeg(undefined)).toBe(true);
      expect(isLeeg(leeg)).toBe(true);
      expect(isLeeg({ type: 'number', value: null } as any)).toBe(true);
      expect(isLeeg(num(0))).toBe(false);
      expect(isLeeg({ type: 'boolean', value: false })).toBe(false);
      expect(isLeeg({ type: 'string', value: '' })).toBe(false);
    });
  });

  describe('§5.8.2 resolveEmptySom (#2)', () => {
    test('empty sommatie is leeg by default, 0 with the opt-out', () => {
      expect(resolveEmptySom(undefined)).toEqual(leeg);
      expect(resolveEmptySom(false)).toEqual(leeg);
      expect(resolveEmptySom(true)).toEqual({ type: 'number', value: 0 });
    });
  });

  describe('§8.1.3 elfproef (#18) — shared checkElfproef', () => {
    test('valid 9-digit number passes; all-zeros and non-divisible fail', () => {
      expect(checkElfproef('111222333')).toBe(true);  // weighted sum 66
      expect(checkElfproef('000000000')).toBe(false); // sum 0, not positive
      expect(checkElfproef('123456789')).toBe(false); // sum 147, not /11
      expect(checkElfproef('a23456789')).toBe(false); // non-digit
    });
  });

  describe('§8.1.4 getalcontrole (#10) — no stripping, leading zeros count', () => {
    test('exact length all-digit; leading zeros count; non-digit rejected', () => {
      expect(isNumeriekExact('000456789', 9)).toBe(true);
      expect(isNumeriekExact('12345678', 9)).toBe(false);
      expect(isNumeriekExact('1a3456789', 9)).toBe(false); // must NOT strip
      expect(isNumeriekExact(null, 9)).toBe(false);
      expect(isNumeriekExact('123', 0)).toBe(false);
    });
  });

  describe('§8.1.1 ordinal comparison lege-waarde (#20)', () => {
    const reg = new UnitRegistry();
    test('exactly one empty => onwaar; numeric both-empty => onwaar (no throw)', () => {
      expect(compareRuntimeValues(num(5), '<', leeg, reg)).toBe(false);
      expect(compareRuntimeValues(leeg, '>', num(5), reg)).toBe(false);
      expect(compareRuntimeValues(leeg, '<', leeg, reg)).toBe(false);
    });
    test('both-empty Datum => foutmelding (throws)', () => {
      const emptyDate: Value = { type: 'date', value: null };
      expect(() => compareRuntimeValues(emptyDate, '<', emptyDate, reg)).toThrow();
    });
  });

  describe('§5.8/§6 aggregation unit-carrying + leeg (#14, regression fix)', () => {
    test('identical custom unit does NOT consult the registry / throw', () => {
      // Pre-fix this threw "Cannot convert from punt to punt".
      const r = reduceWithReferenceUnit([num(5, 'punt'), num(3, 'punt')], ns => ns.reduce((a, b) => a + b, 0), {} as any);
      expect(r.value).toBe(8);
      expect((r.unit as any)?.name).toBe('punt');
    });
    test('lege members are skipped; all-empty => leeg', () => {
      const r = reduceWithReferenceUnit([leeg, num(10, 'punt'), leeg], ns => ns.reduce((a, b) => a + b, 0), {} as any);
      expect(r.value).toBe(10);
      expect(reduceWithReferenceUnit([leeg, leeg], ns => ns.reduce((a, b) => a + b, 0), {} as any)).toEqual(leeg);
    });
    test('a genuinely non-numeric member fails fast', () => {
      expect(() => reduceWithReferenceUnit([num(1, 'punt'), { type: 'string', value: 'x' }], ns => ns[0], {} as any)).toThrow();
    });
  });

  describe('§7.3.1 exact unit conversion (#23/#12) — applyResolvedUnitConversion', () => {
    test('120 ÷ 12 = 10 (€/jr -> €/mnd factor chain)', () => {
      const r = applyResolvedUnitConversion(num(120), { multiplyBy: [], divideBy: ['12'] });
      expect(r.value).toBe(10);
      expect(isLeeg(applyResolvedUnitConversion(leeg, { multiplyBy: [], divideBy: ['12'] }))).toBe(true);
    });
  });

  describe('§8.1.7 rolcheck — Context.hasRol is direction-aware (#15)', () => {
    function rel(ctx: Context, feittypeNaam: string, rollen: any[], subjType: string, objType: string) {
      ctx.registerFeittype({ naam: feittypeNaam, rollen } as any);
      ctx.createObject(subjType, 's1', {});
      ctx.createObject(objType, 'o1', {});
      const subj = ctx.getObjectsByType(subjType).find((o: any) => o.objectId === 's1')!;
      const obj = ctx.getObjectsByType(objType).find((o: any) => o.objectId === 'o1')!;
      ctx.addRelationship(feittypeNaam, subj, obj);
      return { subj, obj };
    }

    test('different-type roles: subject fills the role it occupies', () => {
      const ctx = new Context();
      const { subj: vlucht, obj: persoon } = rel(ctx, 'Reis',
        [{ naam: 'reis', objectType: 'Vlucht' }, { naam: 'passagier', objectType: 'Persoon', meervoud: 'passagiers' }],
        'Vlucht', 'Persoon');
      expect(ctx.hasRol(persoon, 'passagier')).toBe(true);   // "hij is een passagier"
      expect(ctx.hasRol(vlucht, 'passagier')).toBe(true);    // "de Vlucht heeft een passagier"
    });

    test('two roles of the SAME objecttype: no false positive (the #15 bug)', () => {
      const ctx = new Context();
      const { subj: baas, obj: knecht } = rel(ctx, 'Dienstverband',
        [{ naam: 'werkgever', objectType: 'Persoon' }, { naam: 'werknemer', objectType: 'Persoon' }],
        'Persoon', 'Persoon');
      expect(ctx.hasRol(baas, 'werkgever')).toBe(true);
      expect(ctx.hasRol(knecht, 'werknemer')).toBe(true);
      // Pre-fix these returned true (direction-blind):
      expect(ctx.hasRol(baas, 'werknemer')).toBe(false);
      expect(ctx.hasRol(knecht, 'werkgever')).toBe(false);
    });
  });

  describe('§6.3 Tabel 7/8 timeline subtraction lege-waarde (#21)', () => {
    const tlEval = new TimelineEvaluator(new ExpressionEvaluator());
    const oneYear = (value: Value): Timeline => ({
      granularity: 'jaar',
      periods: [{ startDate: new Date(2024, 0, 1), endDate: new Date(2025, 0, 1), value }],
    });
    const at = (tv: any) => tlEval.getValueAt(tv, new Date(2024, 5, 1));

    test('"verminderd met" with a leeg left period => leeg (no throw)', () => {
      const result = tlEval.evaluateTimelineBinaryOp(oneYear(leeg), oneYear(num(4)), '-', {} as any, 'verminderd met');
      expect(isLeeg(at(result) ?? leeg)).toBe(true);
    });
    test('"min" with a leeg left period => leeg counts as 0', () => {
      const result = tlEval.evaluateTimelineBinaryOp(oneYear(leeg), oneYear(num(4)), '-', {} as any, 'min');
      expect(at(result)).toEqual({ type: 'number', value: -4, unit: undefined });
    });
  });
});
