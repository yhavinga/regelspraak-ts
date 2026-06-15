/**
 * Unit (eenheid) compatibility and conversion, derived from a model's declared
 * eenheidsystemen (§3.7).
 *
 * RegelSpraak attributes, parameters and numeric literals may carry a unit. The
 * typeringen specification governs how units combine: additive operators
 * (optellen/aftrekken/verminderd met), comparisons and assignment require their
 * numeric operands to be "gelijk aan elkaar of in elkaar om te rekenen"
 * (§4.1/§4.2/§5.1-5.6/§6.1); when convertible, the spec is prescriptive that the
 * values "worden eerst omgerekend" — conversion is mandatory, not optional.
 * Multiplicative operators (maal/gedeeld door) impose no such restriction and
 * produce composite units (§4.4/§4.5).
 *
 * This module answers two questions over the *declared* eenheidsystemen:
 *  - are two units equal, convertible, or incompatible?
 *  - if convertible, what exact factor converts one to the other?
 *
 * Convertibility is connectivity in the per-system conversion graph, not mere
 * same-system membership: §3.7 forbids converting maand/jaar to dagen ("het
 * aantal dagen van een maand of jaar niet altijd gelijk is"), which surfaces here
 * naturally as two units reaching *different* base units within one system — they
 * are reported incompatible without any special case.
 *
 * Conversion factors are carried as the chains of declared edge factors (strings,
 * exactly as written) rather than a single pre-multiplied number, so the consumer
 * can fold them in exact decimal arithmetic. Units not mentioned by any declared
 * eenheidsysteem are opaque labels: equal to themselves, incompatible with any
 * other — never silently combined.
 */

import { UnitSystemDefinition } from '../ast/unit-systems';

interface UnitNode {
  /** Stable lowercased id (the abbreviation, or name when none). */
  canonical: string;
  /** The eenheidsysteem this unit belongs to. */
  system: string;
  /** Edge toward the system base: this unit = factor × toUnit. */
  conversion?: { factor: number; toUnit: string };
}

export interface UnitRegistry {
  /** name / abbreviation / symbol (all lowercased) → node. */
  byToken: Map<string, UnitNode>;
}

/**
 * The standard Tijd eenheidsysteem (§3.7), which GegevensSpraak provides built-in —
 * a model may use jr/mnd/kw/wk/dg/u/… without declaring it. Two disconnected
 * components, exactly as the spec table specifies: a calendar component
 * (maand ← kwartaal ←jaar) and a clock component (seconde ← … ← week). They share
 * no edge, so §3.7's "maanden niet direct omrekenen in dagen" falls out of the
 * connectivity check rather than a special case. Factors are kept exact (the clock
 * edges fold to whole seconds; ms is the one exact decimal) so the resolver folds
 * them in exact decimal arithmetic. A model's own declaration overrides these,
 * because declared systems are layered on top (later writes win).
 */
const STANDARD_TIJD_SYSTEM: UnitSystemDefinition = {
  type: 'UnitSystemDefinition',
  name: 'Tijd',
  units: [
    { name: 'seconde', plural: 'seconden', abbreviation: 's' },
    { name: 'milliseconde', plural: 'milliseconden', abbreviation: 'ms', conversion: { factor: 0.001, toUnit: 's' } },
    { name: 'minuut', plural: 'minuten', abbreviation: 'minuut', conversion: { factor: 60, toUnit: 's' } },
    { name: 'uur', plural: 'uren', abbreviation: 'u', conversion: { factor: 3600, toUnit: 's' } },
    { name: 'dag', plural: 'dagen', abbreviation: 'dg', conversion: { factor: 86400, toUnit: 's' } },
    { name: 'week', plural: 'weken', abbreviation: 'wk', conversion: { factor: 604800, toUnit: 's' } },
    { name: 'maand', plural: 'maanden', abbreviation: 'mnd' },
    { name: 'kwartaal', plural: 'kwartalen', abbreviation: 'kw', conversion: { factor: 3, toUnit: 'mnd' } },
    { name: 'jaar', plural: 'jaren', abbreviation: 'jr', conversion: { factor: 12, toUnit: 'mnd' } },
  ],
};

export function buildUnitRegistry(
  systems: UnitSystemDefinition[] | undefined,
): UnitRegistry {
  const byToken = new Map<string, UnitNode>();
  // Built-in standard systems first; a model's declared systems are layered on
  // top so a re-declared token (e.g. its own Tijd) overrides the standard one.
  for (const sys of [STANDARD_TIJD_SYSTEM, ...(systems ?? [])]) {
    for (const u of sys.units ?? []) {
      const node: UnitNode = {
        canonical: (u.abbreviation ?? u.name).toLowerCase(),
        system: sys.name,
        conversion: u.conversion,
      };
      for (const token of [u.name, u.plural, u.abbreviation, u.symbol]) {
        if (token) byToken.set(token.toLowerCase(), node);
      }
    }
  }
  return { byToken };
}

/** The chain of edge factors from a unit to its system base, and that base's id. */
interface BaseChain {
  base: string;
  factors: string[];
}

/**
 * Walk conversion edges to the system base, collecting each declared factor as a
 * string (exactly as parsed). Returns null for an unknown unit. A malformed
 * (cyclic) declaration is bounded by the unit count so resolution still terminates.
 */
function chainToBase(reg: UnitRegistry, token: string): BaseChain | null {
  let node = reg.byToken.get(token.toLowerCase());
  if (!node) return null;
  const factors: string[] = [];
  const guard = reg.byToken.size + 1;
  for (let i = 0; i < guard; i++) {
    if (!node.conversion) return { base: node.canonical, factors };
    factors.push(String(node.conversion.factor));
    const next = reg.byToken.get(node.conversion.toUnit.toLowerCase());
    if (!next) return { base: node.conversion.toUnit.toLowerCase(), factors };
    node = next;
  }
  // Cyclic conversion graph — treat as its own base so callers fail loud rather
  // than loop. (A well-formed eenheidsysteem is acyclic.)
  return { base: node.canonical, factors };
}

export type UnitClassification =
  | { kind: 'both-unitless' }
  /** Exactly one operand carries a unit; the result takes that unit. */
  | { kind: 'one-unit'; unit: string }
  /** Identical units (possibly written via different tokens); no conversion. */
  | { kind: 'equal'; unit: string }
  /**
   * Convertible within one eenheidsystem. To express the right operand in the
   * left operand's unit, multiply it by every factor in `multiplyBy` and divide
   * by every factor in `divideBy` (value × Π(right→base) ÷ Π(left→base)).
   */
  | { kind: 'convertible'; unit: string; multiplyBy: string[]; divideBy: string[] }
  | { kind: 'incompatible'; left: string; right: string };

/**
 * Classify a left/right unit pair for an operation whose result unit is the left
 * operand's unit (additive operators and comparisons — the spec converts the
 * right operand into the left's unit). `undefined` means the operand is unitless.
 */
export function classifyOperands(
  reg: UnitRegistry,
  left: string | undefined,
  right: string | undefined,
): UnitClassification {
  if (left === undefined && right === undefined) return { kind: 'both-unitless' };
  if (left === undefined) return { kind: 'one-unit', unit: right! };
  if (right === undefined) return { kind: 'one-unit', unit: left };

  // Composite (rate) units like '€/jr' vs '€/mnd' (§7.3.1): decompose into numerator/denominator
  // and combine. A unit in the DENOMINATOR converts inversely (1/jr -> 1/mnd divides by the
  // jr->mnd factor), so €/jr -> €/mnd yields divideBy:['12'] => 120 €/jr stored as 10 €/mnd.
  if (left.includes('/') || right.includes('/')) {
    return classifyComposite(reg, left, right);
  }

  return classifyScalar(reg, left, right);
}

/** Classify two single (non-composite) unit tokens, converting right into left's unit. */
function classifyScalar(
  reg: UnitRegistry,
  left: string,
  right: string,
): UnitClassification {
  const leftChain = chainToBase(reg, left);
  const rightChain = chainToBase(reg, right);

  // Opaque labels (not in any declared eenheidsysteem): equal to self only.
  if (!leftChain || !rightChain) {
    return left.toLowerCase() === right.toLowerCase()
      ? { kind: 'equal', unit: left }
      : { kind: 'incompatible', left, right };
  }

  const sameCanonical = reg.byToken.get(left.toLowerCase())!.canonical ===
    reg.byToken.get(right.toLowerCase())!.canonical;
  if (sameCanonical) return { kind: 'equal', unit: left };

  // Convertible iff both reach the same base (same connected component). Different
  // bases within one system (maand/jaar vs dagen, §3.7) are incompatible.
  if (leftChain.base !== rightChain.base) {
    return { kind: 'incompatible', left, right };
  }
  return {
    kind: 'convertible',
    unit: left,
    multiplyBy: rightChain.factors,
    divideBy: leftChain.factors,
  };
}

/** Split a composite unit string "a/b" into a single numerator and optional single denominator. */
function splitComposite(u: string): { num: string; den?: string } | undefined {
  const parts = u.split('/').map(s => s.trim()).filter(Boolean);
  if (parts.length === 1) return { num: parts[0] };
  if (parts.length === 2) return { num: parts[0], den: parts[1] };
  return undefined; // unsupported multi-slash shape
}

function classifyComposite(
  reg: UnitRegistry,
  left: string,
  right: string,
): UnitClassification {
  const L = splitComposite(left);
  const R = splitComposite(right);
  if (!L || !R) {
    return left.toLowerCase() === right.toLowerCase()
      ? { kind: 'equal', unit: left }
      : { kind: 'incompatible', left, right };
  }

  const multiplyBy: string[] = [];
  const divideBy: string[] = [];

  // Numerator: convert right into left (same orientation as a scalar).
  const num = classifyScalar(reg, L.num, R.num);
  if (num.kind === 'incompatible') return { kind: 'incompatible', left, right };
  if (num.kind === 'convertible') {
    multiplyBy.push(...num.multiplyBy);
    divideBy.push(...num.divideBy);
  }

  // Denominator: a unit in the denominator converts inversely (swap multiplyBy/divideBy).
  if (L.den || R.den) {
    if (!L.den || !R.den) return { kind: 'incompatible', left, right };
    const den = classifyScalar(reg, L.den, R.den);
    if (den.kind === 'incompatible') return { kind: 'incompatible', left, right };
    if (den.kind === 'convertible') {
      multiplyBy.push(...den.divideBy);
      divideBy.push(...den.multiplyBy);
    }
  }

  if (multiplyBy.length === 0 && divideBy.length === 0) {
    return { kind: 'equal', unit: left };
  }
  return { kind: 'convertible', unit: left, multiplyBy, divideBy };
}

/**
 * The unit of an aggregation result (som/minimale/maximale waarde van, §4.10/§4.12/
 * §4.13): every member must be equal or convertible to the first; the result takes
 * the first member's unit. A single-field aggregation over a collection has one
 * member and simply inherits its unit. Incompatible members throw; convertible-
 * but-unequal members in a multi-member form throw a deferral — the list-form
 * lowering does not yet convert per member, so summing them raw would be wrong.
 */
export function aggregateResultUnit(
  reg: UnitRegistry,
  memberUnits: Array<string | undefined>,
): string | undefined {
  const withUnit = memberUnits.filter((u): u is string => u !== undefined);
  if (withUnit.length === 0) return undefined;
  const first = withUnit[0];
  for (const other of withUnit.slice(1)) {
    const cls = classifyOperands(reg, first, other);
    if (cls.kind === 'incompatible') {
      throw new Error(unitMismatchMessage('aggregatie', cls.left, cls.right));
    }
    if (cls.kind === 'convertible') {
      throw new Error(
        `Aggregatie over convertible-but-unequal units ('${first}' and '${other}') ` +
        `not yet supported — declare the members in one unit (§4.10)`,
      );
    }
  }
  return first;
}

/** Diagnostic for two numeric operands whose units neither match nor convert. */
export function unitMismatchMessage(context: string, left: string, right: string): string {
  return (
    `Unit mismatch: cannot combine '${left}' and '${right}' (${context}) — ` +
    `units must be equal or convertible within one eenheidsysteem (§3.7)`
  );
}
