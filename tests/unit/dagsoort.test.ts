import { Engine, Context } from '../../src';

const DAGSOORT_RULES = `
    Dagsoort de werkdag;
    Dagsoort het weekend;
    Dagsoort de feestdag;

    Regel Werkdag
    geldig altijd
        Een dag is een werkdag
        indien de dag voldoet aan alle volgende voorwaarden:
        - de maand uit (de dag) is gelijk aan 1
        - de dag uit (de dag) is gelijk aan 2.

    Regel Weekend
    geldig altijd
        Een dag is een weekend
        indien de dag voldoet aan alle volgende voorwaarden:
        - de maand uit (de dag) is gelijk aan 1
        - de dag voldoet aan ten minste één van de volgende voorwaarden:
          .. de dag uit (de dag) is gelijk aan 6
          .. de dag uit (de dag) is gelijk aan 7.

    Regel Feestdag
    geldig altijd
        Een dag is een feestdag
        indien de dag voldoet aan ten minste één van de volgende voorwaarden:
        - de dag voldoet aan alle volgende voorwaarden:
          .. de maand uit (de dag) is gelijk aan 1
          .. de dag uit (de dag) is gelijk aan 1
        - de dag voldoet aan alle volgende voorwaarden:
          .. de maand uit (de dag) is gelijk aan 4
          .. de dag uit (de dag) is gelijk aan 27
        - de dag voldoet aan alle volgende voorwaarden:
          .. de maand uit (de dag) is gelijk aan 12
          .. de dag uit (de dag) is gelijk aan 25.
`;

describe('Dagsoort Predicate', () => {
    let engine: Engine;

    beforeEach(() => {
        engine = new Engine();
    });

    describe('parsing dagsoort predicates', () => {
        test('should parse "is een werkdag" predicate', () => {
            const source = `
                Objecttype de Periode
                    de startdatum Datum;
                    is werkdag kenmerk;
                    
                Regel check werkdag
                geldig altijd
                    Een Periode is werkdag
                    indien de startdatum is een werkdag.
            `;
            
            const result = engine.parse(source);
            
            expect(result.success).toBe(true);
            expect(result.ast).toMatchObject({
                type: 'Model',
                rules: [{
                    type: 'Rule',
                    name: 'check werkdag',
                    result: {
                        type: 'Kenmerktoekenning',
                        subject: expect.any(Object),
                        characteristic: 'werkdag'
                    },
                    condition: {
                        type: 'Voorwaarde',
                        expression: {
                            type: 'BinaryExpression',
                            operator: 'is een dagsoort',
                            left: expect.any(Object),
                            right: {
                                type: 'StringLiteral',
                                value: 'werkdag'
                            }
                        }
                    }
                }]
            });
        });

        test('should parse "is een weekend" predicate', () => {
            const source = `
                Objecttype de Vakantie
                    de datum Datum;
                    is weekenddatum kenmerk;
                    
                Regel check weekend
                geldig altijd
                    Een Vakantie is weekenddatum
                    indien zijn datum is een weekend.
            `;
            
            const result = engine.parse(source);
            
            expect(result.success).toBe(true);
            expect(result.ast?.rules[0].condition).toMatchObject({
                type: 'Voorwaarde',
                expression: {
                    type: 'BinaryExpression',
                    operator: 'is een dagsoort',
                    left: expect.any(Object),
                    right: {
                        type: 'StringLiteral',
                        value: 'weekend'
                    }
                }
            });
        });

        test('should parse "is een feestdag" predicate', () => {
            const source = `
                Objecttype de Afspraak
                    de datum Datum;
                    is feestdag kenmerk;
                    
                Regel check feestdag
                geldig altijd
                    Een Afspraak is feestdag
                    indien zijn datum is een feestdag.
            `;
            
            const result = engine.parse(source);
            
            expect(result.success).toBe(true);
            expect(result.ast?.rules[0].condition).toMatchObject({
                type: 'Voorwaarde',
                expression: {
                    type: 'BinaryExpression',
                    operator: 'is een dagsoort',
                    left: expect.any(Object),
                    right: {
                        type: 'StringLiteral',
                        value: 'feestdag'
                    }
                }
            });
        });

        test('should parse a multi-word day-type name (§3.12 naamwoord)', () => {
            const source = `
                Dagsoort de tweede paasdag (mv: tweede paasdagen)

                Objecttype de Afspraak
                    de datum Datum;
                    is bijzonder kenmerk;

                Regel check
                geldig altijd
                    Een Afspraak is bijzonder
                    indien zijn datum is een tweede paasdag.
            `;

            const result = engine.parse(source);

            expect(result.success).toBe(true);
            expect(result.ast?.rules[0].condition).toMatchObject({
                type: 'Voorwaarde',
                expression: {
                    type: 'BinaryExpression',
                    operator: 'is een dagsoort',
                    left: expect.any(Object),
                    right: {
                        type: 'StringLiteral',
                        value: 'tweede paasdag'
                    }
                }
            });
        });

        test('should parse the vragend (verb-last) form "een <dagsoort> is" (§13.4.11)', () => {
            const source = `
                Dagsoort de kerstdag (mv: kerstdagen)

                Objecttype de Afspraak
                    de datum Datum;
                    is bijzonder kenmerk;

                Regel check
                geldig altijd
                    Een Afspraak is bijzonder
                    indien zijn datum een kerstdag is.
            `;

            const result = engine.parse(source);

            expect(result.success).toBe(true);
            // The vragend form parses to the same AST tag as the stellend "is een kerstdag".
            expect(result.ast?.rules[0].condition).toMatchObject({
                type: 'Voorwaarde',
                expression: {
                    type: 'BinaryExpression',
                    operator: 'is een dagsoort',
                    right: { type: 'StringLiteral', value: 'kerstdag' }
                }
            });
        });

        test('should parse the vragend negative form "geen <dagsoort> is"', () => {
            const source = `
                Dagsoort de kerstdag (mv: kerstdagen)

                Objecttype de Afspraak
                    de datum Datum;
                    is bijzonder kenmerk;

                Regel check
                geldig altijd
                    Een Afspraak is bijzonder
                    indien zijn datum geen kerstdag is.
            `;

            const result = engine.parse(source);

            expect(result.success).toBe(true);
            expect(result.ast?.rules[0].condition).toMatchObject({
                type: 'Voorwaarde',
                expression: {
                    type: 'BinaryExpression',
                    operator: 'is geen dagsoort',
                    right: { type: 'StringLiteral', value: 'kerstdag' }
                }
            });
        });

        test('should parse negative dagsoort predicates', () => {
            const source = `
                Objecttype de Werkschema
                    de datum Datum;
                    is nietWerkdag kenmerk;
                    
                Regel NietWerkdagCheck
                geldig altijd
                    Een Werkschema is nietWerkdag
                    indien zijn datum is geen werkdag.
            `;
            
            const result = engine.parse(source);
            
            expect(result.success).toBe(true);
            expect(result.ast?.rules[0].condition).toMatchObject({
                type: 'Voorwaarde',
                expression: {
                    type: 'BinaryExpression',
                    operator: 'is geen dagsoort',
                    left: expect.any(Object),
                    right: {
                        type: 'StringLiteral',
                        value: 'werkdag'
                    }
                }
            });
        });
    });

    describe('executing dagsoort validation', () => {
        test('should identify Tuesday as werkdag', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Planning
                    de datum Datum;
                    is werkdag kenmerk;
                    
                Regel check werkdag
                geldig altijd
                    Een Planning is werkdag
                    indien zijn datum is een werkdag.
            `;
            
            const context = new Context();
            
            // Create planning with Tuesday 2024-01-02
            const planningId = context.generateObjectId('Planning');
            context.createObject('Planning', planningId, {
                datum: { type: 'date', value: new Date('2024-01-02') } // Tuesday (not a holiday)
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const plannings = context.getObjectsByType('Planning');
            expect(plannings.length).toBe(1);
            expect(plannings[0].kenmerken['is werkdag']).toBe(true);
        });

        test('should consume conditional dagsoort rules in strict engine execution', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Planning
                    de datum Datum;
                    is werkdag kenmerk;

                Regel check werkdag
                geldig altijd
                    Een Planning is werkdag
                    indien zijn datum is een werkdag.
            `;

            const context = new Context();
            const planningId = context.generateObjectId('Planning');
            context.createObject('Planning', planningId, {
                datum: { type: 'date', value: new Date('2024-01-02') }
            });

            const result = engine.runStrict(modelText, context);

            expect(result.success).toBe(true);
            const plannings = context.getObjectsByType('Planning');
            expect(plannings.length).toBe(1);
            expect(plannings[0].kenmerken['is werkdag']).toBe(true);
        });

        test('should consume unconditional dagsoort rules in strict engine execution', () => {
            const modelText = `
                Dagsoort de testdag;

                Regel Testdag
                geldig altijd
                    Een dag is een testdag.

                Objecttype de Planning
                    de datum Datum;
                    is testdag kenmerk;

                Regel check testdag
                geldig altijd
                    Een Planning is testdag
                    indien zijn datum is een testdag.
            `;

            const context = new Context();
            const planningId = context.generateObjectId('Planning');
            context.createObject('Planning', planningId, {
                datum: { type: 'date', value: new Date('2024-06-15') }
            });

            const result = engine.runStrict(modelText, context);

            expect(result.success).toBe(true);
            const plannings = context.getObjectsByType('Planning');
            expect(plannings.length).toBe(1);
            expect(plannings[0].kenmerken['is testdag']).toBe(true);
        });

        test('should identify Saturday as weekend', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Afspraak
                    de datum Datum;
                    is weekenddatum kenmerk;
                    
                Regel check weekend
                geldig altijd
                    Een Afspraak is weekenddatum
                    indien zijn datum is een weekend.
            `;
            
            const context = new Context();
            
            // Create afspraak with Saturday 2024-01-06
            const afspraakId = context.generateObjectId('Afspraak');
            context.createObject('Afspraak', afspraakId, {
                datum: { type: 'date', value: new Date('2024-01-06') } // Saturday
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const afspraken = context.getObjectsByType('Afspraak');
            expect(afspraken.length).toBe(1);
            expect(afspraken[0].kenmerken['is weekenddatum']).toBe(true);
        });

        test('should not identify Saturday as weekend without model rules', () => {
            const modelText = `
                Objecttype de Afspraak
                    de datum Datum;
                    is weekenddatum kenmerk;

                Regel check weekend
                geldig altijd
                    Een Afspraak is weekenddatum
                    indien zijn datum is een weekend.
            `;

            const context = new Context();
            const afspraakId = context.generateObjectId('Afspraak');
            context.createObject('Afspraak', afspraakId, {
                datum: { type: 'date', value: new Date('2024-01-06') }
            });

            const result = engine.run(modelText, context);

            expect(result.success).toBe(true);
            const afspraken = context.getObjectsByType('Afspraak');
            expect(afspraken.length).toBe(1);
            expect(afspraken[0].kenmerken['is weekenddatum']).toBeFalsy();
        });

        test('should identify Sunday as weekend', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Activiteit
                    de datum Datum;
                    is weekenddatum kenmerk;
                    
                Regel check weekend
                geldig altijd
                    Een Activiteit is weekenddatum
                    indien zijn datum is een weekend.
            `;
            
            const context = new Context();
            
            // Create activiteit with Sunday 2024-01-07
            const activiteitId = context.generateObjectId('Activiteit');
            context.createObject('Activiteit', activiteitId, {
                datum: { type: 'date', value: new Date('2024-01-07') } // Sunday
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const activiteiten = context.getObjectsByType('Activiteit');
            expect(activiteiten.length).toBe(1);
            expect(activiteiten[0].kenmerken['is weekenddatum']).toBe(true);
        });

        test('should identify Christmas as feestdag', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Evenement
                    de datum Datum;
                    is feestdag kenmerk;
                    
                Regel check feestdag
                geldig altijd
                    Een Evenement is feestdag
                    indien zijn datum is een feestdag.
            `;
            
            const context = new Context();
            
            // Create evenement with Christmas
            const evenementId = context.generateObjectId('Evenement');
            context.createObject('Evenement', evenementId, {
                datum: { type: 'date', value: new Date('2024-12-25') } // Christmas
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const evenementen = context.getObjectsByType('Evenement');
            expect(evenementen.length).toBe(1);
            expect(evenementen[0].kenmerken['is feestdag']).toBe(true);
        });

        test('should identify New Year as feestdag', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Viering
                    de datum Datum;
                    is feestdag kenmerk;
                    
                Regel check feestdag
                geldig altijd
                    Een Viering is feestdag
                    indien zijn datum is een feestdag.
            `;
            
            const context = new Context();
            
            // Create viering with New Year
            const vieringId = context.generateObjectId('Viering');
            context.createObject('Viering', vieringId, {
                datum: { type: 'date', value: new Date('2024-01-01') } // New Year (Monday, but a holiday)
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const vieringen = context.getObjectsByType('Viering');
            expect(vieringen.length).toBe(1);
            expect(vieringen[0].kenmerken['is feestdag']).toBe(true);
        });

        test('should handle negative werkdag check', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Rustdag
                    de datum Datum;
                    is vrij kenmerk;
                    
                Regel check vrije dag
                geldig altijd
                    Een Rustdag is vrij
                    indien zijn datum is geen werkdag.
            `;
            
            const context = new Context();
            
            // Create rustdag with Sunday
            const rustdagId = context.generateObjectId('Rustdag');
            context.createObject('Rustdag', rustdagId, {
                datum: { type: 'date', value: new Date('2024-01-07') } // Sunday
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const rustdagen = context.getObjectsByType('Rustdag');
            expect(rustdagen.length).toBe(1);
            expect(rustdagen[0].kenmerken['is vrij']).toBe(true);
        });

        test('should handle missing date', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Planning
                    de datum Datum;
                    is werkdag kenmerk;
                    
                Regel check werkdag
                geldig altijd
                    Een Planning is werkdag
                    indien zijn datum is een werkdag.
            `;
            
            const context = new Context();
            
            // Create planning without date
            const planningId = context.generateObjectId('Planning');
            context.createObject('Planning', planningId, {
                // No datum set
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const plannings = context.getObjectsByType('Planning');
            expect(plannings.length).toBe(1);
            expect(plannings[0].kenmerken['is werkdag']).toBeFalsy();
        });

        test('should handle King\'s Day (Koningsdag)', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Feest
                    de datum Datum;
                    is feestdag kenmerk;
                    
                Regel check feestdag
                geldig altijd
                    Een Feest is feestdag
                    indien zijn datum is een feestdag.
            `;
            
            const context = new Context();
            
            // Create feest with King's Day
            const feestId = context.generateObjectId('Feest');
            context.createObject('Feest', feestId, {
                datum: { type: 'date', value: new Date('2024-04-27') } // King's Day
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const feesten = context.getObjectsByType('Feest');
            expect(feesten.length).toBe(1);
            expect(feesten[0].kenmerken['is feestdag']).toBe(true);
        });

        test('should handle regular Tuesday as not feestdag', () => {
            const modelText = `
                ${DAGSOORT_RULES}
                Objecttype de Werkdag
                    de datum Datum;
                    is feestdag kenmerk;
                    
                Regel check feestdag
                geldig altijd
                    Een Werkdag is feestdag
                    indien zijn datum is een feestdag.
            `;
            
            const context = new Context();
            
            // Create werkdag with regular Tuesday
            const werkdagId = context.generateObjectId('Werkdag');
            context.createObject('Werkdag', werkdagId, {
                datum: { type: 'date', value: new Date('2024-01-09') } // Regular Tuesday
            });
            
            const result = engine.run(modelText, context);
            
            expect(result.success).toBe(true);
            const werkdagen = context.getObjectsByType('Werkdag');
            expect(werkdagen.length).toBe(1);
            expect(werkdagen[0].kenmerken['is feestdag']).toBeFalsy();
        });
    });
});
