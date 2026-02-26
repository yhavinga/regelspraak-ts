/**
 * Bedrag-ineens Integration Tests
 *
 * End-to-end tests for Dutch pension lump-sum tax calculations.
 * Based on EK Nota (Eerste Kamer Parliamentary Note, Kamerstuk 36.154).
 *
 * These tests load the actual .rs rule files and validate against
 * expected values from the EK Nota with a 400€ tolerance (due to
 * rounding in parliamentary presentation).
 */

import { Engine, Context, Value } from '../src';
import * as fs from 'fs';
import * as path from 'path';

// Tolerance for EK Nota validation (parliamentary documents round to hundreds)
const VALIDATION_TOLERANCE = 400;

interface ScenarioData {
  name: string;
  description?: string;
  parameters: Record<string, number>;
  objects: {
    personen?: Array<{ id: string; [key: string]: any }>;
    scenarios?: Array<{ id: string; [key: string]: any }>;
  };
  relationships?: Array<{ type: string; scenario: string; persoon: string }>;
  kenmerken?: Record<string, Record<string, Record<string, boolean>>>;
  expected?: Record<string, Record<string, number>>;
}

describe('Bedrag-ineens Integration', () => {
  let engine: Engine;
  let bedragIneensDir: string;

  beforeEach(() => {
    engine = new Engine();
    bedragIneensDir = path.resolve(__dirname, '../examples/bedrag-ineens');
  });

  function loadBedragIneensRules(): string {
    const gegevensPath = path.join(bedragIneensDir, 'gegevens.rs');
    const regelsPath = path.join(bedragIneensDir, 'regels.rs');

    const gegevens = fs.readFileSync(gegevensPath, 'utf-8');
    const regels = fs.readFileSync(regelsPath, 'utf-8');

    return `${gegevens}\n\n${regels}`;
  }

  function loadScenario(name: string): ScenarioData {
    const scenarioPath = path.join(bedragIneensDir, 'scenarios', `${name}.json`);
    return JSON.parse(fs.readFileSync(scenarioPath, 'utf-8'));
  }

  function setupContext(model: any, scenario: ScenarioData): Context {
    const context = new Context(model);

    // Set parameters
    for (const [name, value] of Object.entries(scenario.parameters)) {
      context.setVariable(name, { type: 'number', value });
    }

    // Create Persoon objects
    for (const persoon of scenario.objects.personen || []) {
      const attrs: Record<string, Value> = {};
      for (const [key, value] of Object.entries(persoon)) {
        if (key === 'id') continue;
        attrs[key] = { type: 'number', value: value as number };
      }
      context.createObject('Persoon', persoon.id, attrs);
    }

    // Create Scenario objects
    for (const scenarioObj of scenario.objects.scenarios || []) {
      const attrs: Record<string, Value> = {};
      for (const [key, value] of Object.entries(scenarioObj)) {
        if (key === 'id') continue;
        attrs[key] = { type: 'number', value: value as number };
      }
      context.createObject('Scenario', scenarioObj.id, attrs);
    }

    // Set kenmerken
    if (scenario.kenmerken) {
      for (const [typeName, objects] of Object.entries(scenario.kenmerken)) {
        for (const [objectId, kenmerkMap] of Object.entries(objects)) {
          for (const [kenmerkName, value] of Object.entries(kenmerkMap)) {
            context.setKenmerk(typeName, objectId, kenmerkName, value);
          }
        }
      }
    }

    // Create relationships
    for (const rel of scenario.relationships || []) {
      if (rel.type === 'scenario van persoon') {
        const scenarioObj = context.getObjectsByType('Scenario').find(s => (s as any).objectId === rel.scenario);
        const persoonObj = context.getObjectsByType('Persoon').find(p => (p as any).objectId === rel.persoon);
        if (scenarioObj && persoonObj) {
          context.addRelationship('scenario van persoon', scenarioObj, persoonObj);
          // Store reference for navigation
          if ((scenarioObj as any).value) {
            (scenarioObj as any).value['persoon'] = persoonObj;
          }
        }
      }
    }

    return context;
  }

  function validateResults(context: Context, expected: Record<string, Record<string, number>>): { passed: number; failed: number; details: string[] } {
    const results = { passed: 0, failed: 0, details: [] as string[] };
    const scenarios = context.getObjectsByType('Scenario');

    for (const [objectId, expectedValues] of Object.entries(expected)) {
      const obj = scenarios.find(s => (s as any).objectId === objectId);
      if (!obj) {
        results.failed++;
        results.details.push(`${objectId}: not found`);
        continue;
      }

      const attrs = (obj as any).value || (obj as any).attributes || {};

      for (const [attrName, expectedValue] of Object.entries(expectedValues)) {
        const actual = attrs[attrName];
        const actualValue = actual?.value ?? actual;

        if (actualValue === undefined) {
          results.failed++;
          results.details.push(`${objectId}.${attrName}: not computed`);
        } else if (typeof expectedValue === 'number' && typeof actualValue === 'number') {
          const diff = Math.abs(actualValue - expectedValue);
          if (diff <= VALIDATION_TOLERANCE) {
            results.passed++;
          } else {
            results.failed++;
            results.details.push(`${objectId}.${attrName}: ${actualValue.toFixed(0)} (expected ${expectedValue}, diff: ${diff.toFixed(0)})`);
          }
        }
      }
    }

    return results;
  }

  describe('Parse complete files', () => {
    test('should parse combined gegevens.rs and regels.rs', () => {
      const rules = loadBedragIneensRules();
      const result = engine.parseModel(rules);

      expect(result.success).toBe(true);
      expect(result.model).toBeDefined();
    });
  });

  describe('EK Nota scenarios', () => {
    const ekNotaScenarios = ['ek_nota_table1', 'ek_nota_table2', 'ek_nota_table3', 'ek_nota_table4'];

    test.each(ekNotaScenarios)('should validate %s within tolerance', (scenarioName) => {
      const rules = loadBedragIneensRules();
      const parseResult = engine.parseModel(rules);
      expect(parseResult.success).toBe(true);

      const scenario = loadScenario(scenarioName);
      const context = setupContext(parseResult.model, scenario);

      const execResult = engine.execute(parseResult.model, context);
      expect(execResult.success).toBe(true);

      if (scenario.expected) {
        const validation = validateResults(context, scenario.expected);

        if (validation.failed > 0) {
          console.log(`Validation failures for ${scenarioName}:`, validation.details);
        }

        expect(validation.failed).toBe(0);
      }
    });
  });

  describe('Profile scenarios', () => {
    const profileScenarios = ['profile_001', 'profile_004', 'profile_014', 'profile_029'];

    test.each(profileScenarios)('should execute %s without errors', (scenarioName) => {
      const rules = loadBedragIneensRules();
      const parseResult = engine.parseModel(rules);
      expect(parseResult.success).toBe(true);

      const scenario = loadScenario(scenarioName);
      const context = setupContext(parseResult.model, scenario);

      const execResult = engine.execute(parseResult.model, context);
      expect(execResult.success).toBe(true);

      // Verify key outputs are computed
      const scenarios = context.getObjectsByType('Scenario');
      expect(scenarios.length).toBeGreaterThan(0);

      for (const s of scenarios) {
        const attrs = (s as any).value || (s as any).attributes || {};
        expect(attrs['besteedbaar inkomen incl huurtoeslag']).toBeDefined();
      }
    });
  });

  describe('Specific calculations', () => {
    test('should calculate bedrag ineens correctly for 10% withdrawal', () => {
      const rules = loadBedragIneensRules();
      const parseResult = engine.parseModel(rules);
      expect(parseResult.success).toBe(true);

      const scenario = loadScenario('ek_nota_table1');
      const context = setupContext(parseResult.model, scenario);

      const execResult = engine.execute(parseResult.model, context);
      expect(execResult.success).toBe(true);

      const scenarios = context.getObjectsByType('Scenario');
      const jaarMetOpname = scenarios.find(s => (s as any).objectId === 'jaar_met_opname');
      expect(jaarMetOpname).toBeDefined();

      const bedragIneens = (jaarMetOpname as any)?.value?.['bedrag ineens']?.value ??
                           (jaarMetOpname as any)?.attributes?.['bedrag ineens']?.value;

      // 10% of 133000 pensioenvermogen = 13300
      expect(bedragIneens).toBeCloseTo(13300, -1);
    });
  });
});
