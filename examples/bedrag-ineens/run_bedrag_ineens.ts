#!/usr/bin/env npx ts-node
/**
 * Bedrag Ineens Example Runner - Execute bedrag ineens scenarios in TypeScript.
 *
 * This demonstrates Dutch pension lump-sum ("bedrag ineens") tax calculations
 * based on EK Nota parliamentary calculations (Kamerstuk 36.154).
 *
 * Usage:
 *   npx ts-node examples/bedrag-ineens/run_bedrag_ineens.ts ek_nota_table1
 *   npx ts-node examples/bedrag-ineens/run_bedrag_ineens.ts profile_001 --verbose
 */

import * as fs from 'fs';
import * as path from 'path';
import { Engine, Context, Value } from '../../src';

// Validation tolerance for tax calculations (euros)
// Higher tolerance needed because EK Nota uses simplified formulas and rounding
// while our implementation uses exact official Belastingdienst 2024 parameters
const VALIDATION_TOLERANCE = 400;

interface ScenarioData {
    name: string;
    description?: string;
    rekendatum?: string;
    parameters: Record<string, any>;
    objects: {
        personen?: any[];
        scenarios?: any[];
    };
    relationships?: Array<{
        type: string;
        scenario: string;
        persoon: string;
    }>;
    kenmerken?: Record<string, Record<string, Record<string, boolean>>>;
    expected?: Record<string, Record<string, any>>;
}

/**
 * Bedrag Ineens Runner class - orchestrates scenario execution
 */
export class BedragIneensRunner {
    private exampleDir: string;
    private engine: Engine;
    private context: Context | null = null;
    private model: any = null;
    private verbose: boolean;

    constructor(verbose: boolean = false) {
        this.exampleDir = path.resolve(__dirname);
        this.engine = new Engine();
        this.verbose = verbose;
    }

    /**
     * Load and combine RegelSpraak files
     */
    loadRules(): string {
        const gegevensPath = path.join(this.exampleDir, 'gegevens.rs');
        const regelsPath = path.join(this.exampleDir, 'regels.rs');

        const gegevens = fs.readFileSync(gegevensPath, 'utf-8');
        const regels = fs.readFileSync(regelsPath, 'utf-8');

        return `${gegevens}\n\n${regels}`;
    }

    /**
     * Load test scenario from JSON file
     */
    loadScenario(scenarioName: string): ScenarioData {
        const scenarioPath = path.join(this.exampleDir, 'scenarios', `${scenarioName}.json`);
        if (!fs.existsSync(scenarioPath)) {
            throw new Error(`Scenario not found: ${scenarioPath}`);
        }

        const content = fs.readFileSync(scenarioPath, 'utf-8');
        return JSON.parse(content);
    }

    /**
     * Parse a scenario value into a proper Value object
     */
    private parseValue(data: any): Value {
        if (typeof data === 'object' && data !== null && 'value' in data) {
            return {
                type: 'number',
                value: data.value,
                unit: data.unit ? { name: data.unit } : undefined
            };
        }

        if (typeof data === 'number') {
            return { type: 'number', value: data };
        }

        if (typeof data === 'boolean') {
            return { type: 'boolean', value: data };
        }

        if (typeof data === 'string') {
            // Check for ISO date format
            if (/^\d{4}-\d{2}-\d{2}/.test(data)) {
                return { type: 'date', value: new Date(data) };
            }
            return { type: 'string', value: data };
        }

        return { type: 'null', value: null };
    }

    /**
     * Add parameters to the context
     */
    private addParameters(parameters: Record<string, any>): void {
        if (!this.context) return;

        for (const [paramName, paramData] of Object.entries(parameters)) {
            const value = this.parseValue(paramData);
            this.context.setVariable(paramName, value);
        }

        if (this.verbose) {
            console.log(`  Added ${Object.keys(parameters).length} parameters`);
        }
    }

    /**
     * Create object instances
     */
    private createObjects(objects: ScenarioData['objects']): void {
        if (!this.context) return;

        let objectCount = 0;

        // Create Persoon objects
        for (const persoonData of objects.personen || []) {
            const attributes: Record<string, Value> = {};

            for (const [key, value] of Object.entries(persoonData)) {
                if (key === 'id') continue;
                attributes[key] = this.parseValue(value);
            }

            this.context.createObject('Persoon', persoonData.id, attributes);
            objectCount++;
        }

        // Create Scenario objects
        for (const scenarioData of objects.scenarios || []) {
            const attributes: Record<string, Value> = {};

            for (const [key, value] of Object.entries(scenarioData)) {
                if (key === 'id') continue;
                attributes[key] = this.parseValue(value);
            }

            this.context.createObject('Scenario', scenarioData.id, attributes);
            objectCount++;
        }

        if (this.verbose) {
            console.log(`  Created ${objectCount} objects`);
        }
    }

    /**
     * Set kenmerken (boolean characteristics) on objects
     */
    private setKenmerken(kenmerken: ScenarioData['kenmerken']): void {
        if (!this.context || !kenmerken) return;

        let count = 0;
        for (const [typeName, objects] of Object.entries(kenmerken)) {
            for (const [objectId, kenmerkMap] of Object.entries(objects)) {
                for (const [kenmerkName, value] of Object.entries(kenmerkMap)) {
                    this.context.setKenmerk(typeName, objectId, kenmerkName, value);
                    count++;
                }
            }
        }

        if (this.verbose) {
            console.log(`  Set ${count} kenmerken`);
        }
    }

    /**
     * Create relationships between objects
     */
    private createRelationships(relationships: ScenarioData['relationships']): void {
        if (!this.context || !relationships) return;

        for (const rel of relationships) {
            if (rel.type === 'scenario van persoon') {
                const scenario = this.findObjectById('Scenario', rel.scenario);
                const persoon = this.findObjectById('Persoon', rel.persoon);

                if (scenario && persoon) {
                    this.context.addRelationship('scenario van persoon', scenario, persoon);

                    // Store reference for navigation "zijn persoon"
                    const scenarioData = (scenario as any).value as Record<string, Value>;
                    scenarioData['persoon'] = persoon;
                }
            }
        }

        if (this.verbose) {
            console.log(`  Created ${relationships.length} relationships`);
        }
    }

    /**
     * Find an object by its ID
     */
    private findObjectById(type: string, id: string): Value | null {
        if (!this.context) return null;

        const objects = this.context.getObjectsByType(type);
        for (const obj of objects) {
            if ((obj as any).objectId === id) {
                return obj;
            }
        }
        return null;
    }

    /**
     * Execute a bedrag ineens scenario
     */
    async executeScenario(scenarioName: string): Promise<{
        scenario: string;
        status: 'success' | 'failed';
        validation?: { passed: number; failed: number; details: string[] };
        error?: string;
    }> {
        try {
            // Load and parse rules
            console.log('Loading bedrag ineens rules...');
            const rulesText = this.loadRules();
            const parseResult = this.engine.parseModel(rulesText);

            if (!parseResult.success) {
                throw new Error(`Parse error: ${parseResult.errors?.join(', ')}`);
            }

            this.model = parseResult.model;
            console.log('  Rules parsed successfully');

            // Load scenario
            console.log(`Loading scenario: ${scenarioName}`);
            const scenario = this.loadScenario(scenarioName);
            console.log(`  Loaded: ${scenario.name}`);

            // Create runtime context
            this.context = new Context(this.model);

            // Set rekendatum if provided
            if (scenario.rekendatum) {
                this.context.setEvaluationDate(new Date(scenario.rekendatum));
            }

            // Add parameters
            console.log('Setting up context...');
            this.addParameters(scenario.parameters);

            // Create objects
            this.createObjects(scenario.objects);

            // Set kenmerken
            this.setKenmerken(scenario.kenmerken);

            // Create relationships
            this.createRelationships(scenario.relationships);

            // Execute rules
            console.log('Executing rules...');
            const result = this.engine.execute(this.model, this.context);

            if (!result.success) {
                throw new Error(`Execution error: ${result.error?.message}`);
            }
            console.log('  Rule execution completed');

            // Debug: Print fired rules trace if verbose
            if (this.verbose && result.trace) {
                console.log('\n  FIRED RULES:');
                const firedRules = result.trace.filter((t: string) => t.includes('RULE_FIRED'));
                for (const rule of firedRules.slice(0, 50)) {  // First 50 for brevity
                    console.log(`    ${rule}`);
                }
                if (firedRules.length > 50) {
                    console.log(`    ... and ${firedRules.length - 50} more`);
                }
            }

            // Print results
            this.printResults();

            // Validate results if expected values provided
            let validation: { passed: number; failed: number; details: string[] } | undefined;
            if (scenario.expected) {
                validation = this.validateResults(scenario.expected);
                this.printValidationResults(validation);
            }

            return {
                scenario: scenarioName,
                status: validation && validation.failed > 0 ? 'failed' : 'success',
                validation
            };

        } catch (error) {
            console.error(`Error: ${error}`);
            return {
                scenario: scenarioName,
                status: 'failed',
                error: (error as Error).message
            };
        }
    }

    /**
     * Print computation results
     */
    private printResults(): void {
        console.log('\n' + '='.repeat(60));
        console.log('RESULTS');
        console.log('='.repeat(60));

        if (!this.context) return;

        const scenarios = this.context.getObjectsByType('Scenario');
        for (const s of scenarios) {
            console.log(`\nScenario: ${(s as any).objectId}`);
            const attrs = (s as any).value || {};

            // Key output attributes in order
            const keyAttrs = [
                'opname percentage',
                'bedrag ineens',
                'bruto inkomen',
                'belasting box1',
                'algemene heffingskorting',
                'ouderenkorting',
                'alleenstaande ouderenkorting',
                'totale heffingskortingen',
                'belasting na heffingskortingen',
                'zorgtoeslag',
                'huurtoeslag',
                'netto inkomen',
                'besteedbaar inkomen',
                'besteedbaar inkomen incl huurtoeslag'
            ];

            for (const key of keyAttrs) {
                const val = attrs[key];
                if (val !== undefined) {
                    const value = val?.value ?? val;
                    if (typeof value === 'number') {
                        console.log(`  ${key}: ${value.toFixed(2)}`);
                    }
                }
            }
        }
    }

    /**
     * Validate execution results against expected values
     */
    private validateResults(expected: Record<string, Record<string, any>>): {
        passed: number;
        failed: number;
        details: string[];
    } {
        const results = { passed: 0, failed: 0, details: [] as string[] };

        if (!this.context) return results;

        const scenarios = this.context.getObjectsByType('Scenario');

        for (const [objectId, expectedValues] of Object.entries(expected)) {
            const obj = scenarios.find(s => (s as any).objectId === objectId);

            if (!obj) {
                results.failed++;
                results.details.push(`${objectId}: not found`);
                continue;
            }

            const attrs = (obj as any).value || {};

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
                        if (this.verbose) {
                            results.details.push(`${objectId}.${attrName}: ${actualValue.toFixed(0)} (expected ${expectedValue})`);
                        }
                    } else {
                        results.failed++;
                        results.details.push(
                            `${objectId}.${attrName}: ${actualValue.toFixed(0)} (expected ${expectedValue}, diff: ${diff.toFixed(0)})`
                        );
                    }
                } else {
                    if (actualValue === expectedValue) {
                        results.passed++;
                    } else {
                        results.failed++;
                        results.details.push(`${objectId}.${attrName}: ${actualValue} (expected ${expectedValue})`);
                    }
                }
            }
        }

        return results;
    }

    /**
     * Print validation results
     */
    private printValidationResults(results: { passed: number; failed: number; details: string[] }): void {
        console.log('\n' + '='.repeat(60));
        console.log('VALIDATION');
        console.log('='.repeat(60));

        console.log(`Passed: ${results.passed}`);
        console.log(`Failed: ${results.failed}`);

        if (results.details.length > 0) {
            console.log('\nDetails:');
            for (const detail of results.details) {
                const icon = detail.includes('expected') && !detail.includes('diff:') ? '  ' :
                    detail.includes('diff:') || detail.includes('not computed') || detail.includes('not found') ? '  ' : '  ';
                console.log(`${icon}${detail}`);
            }
        }
    }
}

// Main execution
async function main() {
    const args = process.argv.slice(2);
    const scenarioName = args[0] || 'ek_nota_table1';
    const verbose = args.includes('--verbose') || args.includes('-v');

    console.log('='.repeat(60));
    console.log('BEDRAG INEENS EXAMPLE RUNNER');
    console.log('='.repeat(60));
    console.log();

    const runner = new BedragIneensRunner(verbose);
    const result = await runner.executeScenario(scenarioName);

    console.log('\n' + '='.repeat(60));
    console.log(`FINAL STATUS: ${result.status.toUpperCase()}`);
    console.log('='.repeat(60));

    if (result.status === 'failed') {
        process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main().catch(console.error);
}
