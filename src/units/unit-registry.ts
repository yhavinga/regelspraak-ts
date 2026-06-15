import { UnitSystem, BaseUnit } from './base-unit';
import { CompositeUnit } from './composite-unit';

/**
 * Registry of all unit systems in the domain
 */
export class UnitRegistry {
  private systems: Map<string, UnitSystem> = new Map();

  constructor() {
    this.initStandardSystems();
  }

  /**
   * Initialize standard unit systems from the specification
   * Uses hub-and-spoke pattern: all units have toBaseFactor relative to base unit
   */
  private initStandardSystems(): void {
    // Time system (Tijd) - base unit: seconde
    const timeSystem = new UnitSystem("Tijd");

    // Base unit: seconde (toBaseFactor = 1)
    timeSystem.addUnit({
      name: "seconde",
      plural: "seconden",
      abbreviation: "s",
      toBaseFactor: 1,  // Base unit
      baseUnitName: "seconde"
    });

    timeSystem.addUnit({
      name: "milliseconde",
      plural: "milliseconden",
      abbreviation: "ms",
      toBaseFactor: 0.001,  // 1 ms = 0.001 s
      baseUnitName: "seconde"
    });

    timeSystem.addUnit({
      name: "minuut",
      plural: "minuten",
      abbreviation: "minuut",
      toBaseFactor: 60,  // 1 min = 60 s
      baseUnitName: "seconde"
    });

    timeSystem.addUnit({
      name: "uur",
      plural: "uren",
      abbreviation: "u",
      toBaseFactor: 3600,  // 1 hr = 3600 s
      baseUnitName: "seconde"
    });

    timeSystem.addUnit({
      name: "dag",
      plural: "dagen",
      abbreviation: "dg",
      toBaseFactor: 86400,  // 1 day = 86400 s
      baseUnitName: "seconde"
    });

    timeSystem.addUnit({
      name: "week",
      plural: "weken",
      abbreviation: "wk",
      toBaseFactor: 604800,  // 7 days = 604800 s
      baseUnitName: "seconde"
    });

    // §3.7: calendar units (maand/kwartaal/jaar) form a SEPARATE base from seconde. A month is
    // not a fixed number of seconds/days, so maand/jaar/kwartaal must NOT convert to dagen/seconden
    // via an average. They convert exactly among themselves via the genuine omrekenfactoren
    // (1 jaar = 12 maanden, 1 kwartaal = 3 maanden); cross-base conversion (e.g. maand<->dagen)
    // reports incompatible. Exact day/second proportioning is the job of tijdsevenredig (§7.3.2).
    timeSystem.addUnit({
      name: "maand",
      plural: "maanden",
      abbreviation: "mnd",
      toBaseFactor: 1,  // calendar base
      baseUnitName: "maand"
    });

    timeSystem.addUnit({
      name: "kwartaal",
      plural: "kwartalen",
      abbreviation: "kw",
      toBaseFactor: 3,  // 1 kwartaal = 3 maanden
      baseUnitName: "maand"
    });

    timeSystem.addUnit({
      name: "jaar",
      plural: "jaren",
      abbreviation: "jr",
      toBaseFactor: 12,  // 1 jaar = 12 maanden
      baseUnitName: "maand"
    });

    this.systems.set("Tijd", timeSystem);

    // Currency system (Valuta) - no conversions between currencies
    // Each currency is its own base (toBaseFactor = 1)
    const currencySystem = new UnitSystem("Valuta");

    currencySystem.addUnit({
      name: "euro",
      plural: "euros",
      abbreviation: "EUR",
      symbol: "€",
      toBaseFactor: 1,  // Base for euro
      baseUnitName: "euro"
    });

    currencySystem.addUnit({
      name: "dollar",
      plural: "dollars",
      abbreviation: "USD",
      symbol: "$",
      toBaseFactor: 1,  // Base for dollar (no cross-currency conversion)
      baseUnitName: "dollar"
    });

    this.systems.set("Valuta", currencySystem);
  }

  /**
   * Add a new unit system
   */
  addSystem(system: UnitSystem): void {
    this.systems.set(system.name, system);
  }

  /**
   * Get a unit system by name
   */
  getSystem(name: string): UnitSystem | undefined {
    return this.systems.get(name);
  }

  /**
   * Find a unit across all systems
   */
  findUnit(identifier: string): { unit: BaseUnit; system: UnitSystem } | undefined {
    for (const system of this.systems.values()) {
      const unit = system.findUnit(identifier);
      if (unit) {
        return { unit, system };
      }
    }
    return undefined;
  }

  /**
   * Check if two units are compatible (same system)
   */
  areUnitsCompatible(unit1: string, unit2: string): boolean {
    const result1 = this.findUnit(unit1);
    const result2 = this.findUnit(unit2);

    if (!result1 || !result2) {
      return false;
    }

    return result1.system.name === result2.system.name &&
      (result1.unit.baseUnitName ?? result1.unit.name) === (result2.unit.baseUnitName ?? result2.unit.name);
  }

  /**
   * Convert a value between units
   */
  convert(value: number, fromUnit: string, toUnit: string): number | undefined {
    const result1 = this.findUnit(fromUnit);
    const result2 = this.findUnit(toUnit);

    if (!result1 || !result2) {
      return undefined;
    }

    if (result1.system.name !== result2.system.name) {
      return undefined; // Can't convert between different systems
    }

    return result1.system.convert(value, fromUnit, toUnit);
  }

  areCompositeUnitsCompatible(unit1: CompositeUnit, unit2: CompositeUnit): boolean {
    const normalized1 = this.normalizeCompositeUnit(unit1);
    const normalized2 = this.normalizeCompositeUnit(unit2);
    return normalized1 !== undefined &&
      normalized2 !== undefined &&
      haveSameSignature(normalized1.signature, normalized2.signature);
  }

  convertComposite(value: number, fromUnit: CompositeUnit, toUnit: CompositeUnit): number | undefined {
    const from = this.normalizeCompositeUnit(fromUnit);
    const to = this.normalizeCompositeUnit(toUnit);

    if (!from || !to || !haveSameSignature(from.signature, to.signature)) {
      return undefined;
    }

    return value * from.factor / to.factor;
  }

  private normalizeCompositeUnit(unit: CompositeUnit): {
    signature: Map<string, number>;
    factor: number;
  } | undefined {
    const signature = new Map<string, number>();
    let factor = 1;

    for (const [unitName, exponent] of unit.numerator) {
      const result = this.findUnit(unitName);
      if (!result) {
        return undefined;
      }
      const component = `${result.system.name}:${result.unit.baseUnitName ?? result.unit.name}`;
      signature.set(component, (signature.get(component) ?? 0) + exponent);
      factor *= Math.pow(result.unit.toBaseFactor ?? 1, exponent);
    }

    for (const [unitName, exponent] of unit.denominator) {
      const result = this.findUnit(unitName);
      if (!result) {
        return undefined;
      }
      const component = `${result.system.name}:${result.unit.baseUnitName ?? result.unit.name}`;
      signature.set(component, (signature.get(component) ?? 0) - exponent);
      factor /= Math.pow(result.unit.toBaseFactor ?? 1, exponent);
    }

    for (const [system, exponent] of signature.entries()) {
      if (exponent === 0) {
        signature.delete(system);
      }
    }

    return { signature, factor };
  }
}

function haveSameSignature(left: Map<string, number>, right: Map<string, number>): boolean {
  if (left.size !== right.size) {
    return false;
  }
  for (const [system, exponent] of left.entries()) {
    if (right.get(system) !== exponent) {
      return false;
    }
  }
  return true;
}