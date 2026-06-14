import { Engine, Context, AntlrParser } from '../../src';
import { DisjunctionExpression, StringLiteral } from '../../src/ast/expressions';

describe('Engine - Decision Tables', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  describe('simple decision table', () => {
    test('should execute decision table with string matching', () => {
      const decisionTable = `Beslistabel Woonregio factor
geldig altijd
|   | de woonregio factor van een Natuurlijk persoon moet gesteld worden op | indien zijn woonprovincie gelijk is aan |
|---|-------------------------------------------------------------------------|------------------------------------------|
| 1 | 1                                                                       | 'Friesland'                              |
| 2 | 2                                                                       | 'Noord-Brabant'                          |
| 3 | 3                                                                       | 'Noord-Holland'                          |`;
      
      const context = new Context();
      context.setVariable('woonprovincie', { type: 'string', value: 'Noord-Brabant' });
      
      const result = engine.run(decisionTable, context);
      
      expect(result.success).toBe(true);
      expect(result.value).toEqual({
        type: 'number',
        value: 2
      });
      
      // Check that the variable was set in context
      // The parser now preserves multi-word attributes as single strings
      const storedValue = context.getVariable('woonregio factor');
      expect(storedValue).toEqual({
        type: 'number',
        value: 2
      });
    });

    test('should match first row when condition matches', () => {
      const decisionTable = `Beslistabel Test
geldig altijd
|   | de result moet gesteld worden op | indien value gelijk is aan |
|---|-----------------------------------|----------------------------|
| 1 | 10                                | 5                          |
| 2 | 20                                | 10                         |
| 3 | 30                                | 15                         |`;
      
      const context = new Context();
      context.setVariable('value', { type: 'number', value: 5 });
      
      const result = engine.run(decisionTable, context);
      
      expect(result.success).toBe(true);
      expect(result.value).toEqual({
        type: 'number',
        value: 10
      });
    });

    test('should fail when no row matches', () => {
      const decisionTable = `Beslistabel Test
geldig altijd
|   | de result moet gesteld worden op | indien value gelijk is aan |
|---|-----------------------------------|----------------------------|
| 1 | 10                                | 5                          |
| 2 | 20                                | 10                         |`;
      
      const context = new Context();
      context.setVariable('value', { type: 'number', value: 7 });
      
      const result = engine.run(decisionTable, context);
      
      expect(result.success).toBe(false);
      expect(result.error?.message).toContain('No matching row');
    });
  });

  describe('decision table with n.v.t.', () => {
    test('should handle n.v.t. conditions', () => {
      const decisionTable = `Beslistabel Belasting
geldig altijd
|   | de belasting moet gesteld worden op | indien value groter is dan | indien value kleiner of gelijk is aan |
|---|--------------------------------------|---------------------------|---------------------------------------|
| 1 | 10                                   | n.v.t.                    | 100                                   |
| 2 | 20                                   | 100                       | 200                                   |
| 3 | 30                                   | 200                       | n.v.t.                                |`;
      
      const context = new Context();
      
      // Test first row (value <= 100)
      context.setVariable('value', { type: 'number', value: 50 });
      let result = engine.run(decisionTable, context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe(10);
      
      // Test second row (100 < value <= 200)
      context.setVariable('value', { type: 'number', value: 150 });
      result = engine.run(decisionTable, context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe(20);
      
      // Test third row (value > 200)
      context.setVariable('value', { type: 'number', value: 250 });
      result = engine.run(decisionTable, context);
      expect(result.success).toBe(true);
      expect(result.value?.value).toBe(30);
    });
  });

  describe('decision table with EUR amounts', () => {
    test('should parse EUR amounts', () => {
      const decisionTable = `Beslistabel Korting
geldig altijd
|   | de korting moet gesteld worden op | indien aankoopbedrag groter is dan |
|---|-------------------------------------|-------------------------------------|
| 1 | 5 EUR                               | 50                                  |
| 2 | 10 EUR                              | 100                                 |
| 3 | 20 EUR                              | 200                                 |`;

      const context = new Context();
      context.setVariable('aankoopbedrag', { type: 'number', value: 150 });

      const result = engine.run(decisionTable, context);

      expect(result.success).toBe(true);
      // First matching row wins - aankoopbedrag (150) > 50, so row 1 matches
      expect(result.value).toMatchObject({
        type: 'number',
        value: 5,
        unit: { name: 'euro' }
      });
    });

    test('should compare convertible units in conditions', () => {
      const model = `
Eenheidsysteem afstand
de meter m
de kilometer km = 1000 m

Beslistabel Afstand klasse
geldig altijd
|   | de klasse moet gesteld worden op | indien afstand gelijk is aan |
|---|----------------------------------|------------------------------|
| 1 | 'lang'                           | 1000 m                       |`;

      const context = new Context();
      context.setVariable('afstand', { type: 'number', value: 1, unit: { name: 'kilometer' } });

      const result = engine.run(model, context);

      expect(result.success).toBe(true);
      expect(context.getVariable('klasse')).toEqual({ type: 'string', value: 'lang' });
    });

    test('should reject incompatible units in conditions', () => {
      const model = `
Eenheidsysteem afstand
de meter m
de kilometer km = 1000 m

Beslistabel Afstand klasse
geldig altijd
|   | de klasse moet gesteld worden op | indien afstand gelijk is aan |
|---|----------------------------------|------------------------------|
| 1 | 'lang'                           | 1 EUR                        |`;

      const context = new Context();
      context.setVariable('afstand', { type: 'number', value: 1, unit: { name: 'kilometer' } });

      const result = engine.runStrict(model, context);

      expect(result.success).toBe(false);
      expect(result.error?.message).toContain('Cannot convert from');
    });
  });

  describe('decision table with percentage literals', () => {
    test('should parse percentage literals as result values', () => {
      const decisionTable = `Beslistabel Korting
geldig altijd
|   | de korting moet gesteld worden op | indien leeftijd kleiner is dan |
|---|-----------------------------------|--------------------------------|
| 1 | 50%                               | 12                             |
| 2 | 30%                               | 18                             |
| 3 | 10%                               | 65                             |`;

      const context = new Context();
      context.setVariable('leeftijd', { type: 'number', value: 10 });

      const result = engine.run(decisionTable, context);

      expect(result.success).toBe(true);
      expect(result.value).toEqual({
        type: 'number',
        value: 50
      });
    });

    test('should parse percentage with decimal (Dutch notation)', () => {
      const decisionTable = `Beslistabel Tarief
geldig altijd
|   | het tarief moet gesteld worden op | indien waarde groter is dan |
|---|-----------------------------------|------------------------------|
| 1 | 12,5%                             | 100                          |
| 2 | 7,5%                              | 50                           |`;

      const context = new Context();
      context.setVariable('waarde', { type: 'number', value: 75 });

      const result = engine.run(decisionTable, context);

      expect(result.success).toBe(true);
      expect(result.value).toEqual({
        type: 'number',
        value: 7.5
      });
    });
  });

  describe('error handling', () => {
    test('an unparseable column header surfaces the sub-parse reason', () => {
      // The header is sub-parsed as a result header and a condition header; both
      // attempts swallow their own ANTLR errors, so a malformed header used to
      // fail with a bare "Invalid" and no clue. The message now carries why.
      const parser = new AntlrParser();
      expect(() => parser.parseModel(`Objecttype de Persoon (mv: personen)
  de korting Numeriek;
Beslistabel t
geldig altijd
| | de korting van een Persoon zomaar iets |
|---|---|
| 1 | 5 |
`)).toThrow(/Invalid decision table column header.*not a result header.*nor a condition header.*expecting 'indien'/s);
    });

    test('should fail on invalid syntax', () => {
      const invalidTable = `Beslistabel Test
geldig altijd
Invalid table content`;
      
      const result = engine.run(invalidTable);
      
      expect(result.success).toBe(false);
      expect(result.error?.message).toBeDefined();
    });

    test('should fail on missing Beslistabel keyword', () => {
      const invalidTable = `Test
geldig altijd
|   | result | condition |
|---|--------|-----------|
| 1 | 10     | 5         |`;
      
      const result = engine.run(invalidTable);
      
      expect(result.success).toBe(false);
    });

    test('should handle missing geldig keyword with default validity', () => {
      const tableWithoutGeldig = `Beslistabel Test
|   | de result moet gesteld worden op | indien value gelijk is aan |
|---|-----------------------------------|----------------------------|
| 1 | 10                                | 5                          |`;
      
      const context = new Context();
      context.setVariable('value', { type: 'number', value: 5 });
      
      const result = engine.run(tableWithoutGeldig, context);
      
      // The grammar allows optional geldig, defaulting to 'altijd'
      expect(result.success).toBe(true);
      expect(result.value).toEqual({ type: 'number', value: 10 });
    });

    test('should fail when condition variable is undefined', () => {
      const decisionTable = `Beslistabel Test
geldig altijd
|   | de result moet gesteld worden op | indien value gelijk is aan |
|---|-----------------------------------|----------------------------|
| 1 | 10                                | 5                          |`;

      const context = new Context();
      // 'value' is not defined in context

      const result = engine.run(decisionTable, context);

      expect(result.success).toBe(false);
      expect(result.error?.message).toContain('No matching row');
    });
  });

  describe('disjunction conditions ("X of Y of Z" pattern)', () => {
    // Regression tests for parser bug where DisjunctionExpression.values was empty

    describe('AST parsing', () => {
      test('should parse disjunction condition as DisjunctionExpression with populated values', () => {
        const parser = new AntlrParser();
        const decisionTable = `Beslistabel Woonregio
geldig altijd
|   | de factor moet gesteld worden op | indien provincie gelijk is aan |
|---|----------------------------------|--------------------------------|
| 1 | 1                                | 'Friesland', 'Groningen' of 'Drenthe' |
| 2 | 3                                | 'Noord-Holland', 'Zuid-Holland' of 'Utrecht' |`;

        const model = parser.parseModel(decisionTable);

        expect(model.beslistabels).toHaveLength(1);
        const table = model.beslistabels[0];
        expect(table.rows).toHaveLength(2);

        // Check row 1 condition
        const row1Cond = table.rows[0].conditionValues[0];
        expect(row1Cond).not.toBe('n.v.t.');
        expect((row1Cond as DisjunctionExpression).type).toBe('DisjunctionExpression');
        expect((row1Cond as DisjunctionExpression).values).toHaveLength(3);
        expect(((row1Cond as DisjunctionExpression).values[0] as StringLiteral).value).toBe('Friesland');
        expect(((row1Cond as DisjunctionExpression).values[1] as StringLiteral).value).toBe('Groningen');
        expect(((row1Cond as DisjunctionExpression).values[2] as StringLiteral).value).toBe('Drenthe');

        // Check row 2 condition
        const row2Cond = table.rows[1].conditionValues[0];
        expect(row2Cond).not.toBe('n.v.t.');
        expect((row2Cond as DisjunctionExpression).type).toBe('DisjunctionExpression');
        expect((row2Cond as DisjunctionExpression).values).toHaveLength(3);
        expect(((row2Cond as DisjunctionExpression).values[0] as StringLiteral).value).toBe('Noord-Holland');
        expect(((row2Cond as DisjunctionExpression).values[1] as StringLiteral).value).toBe('Zuid-Holland');
        expect(((row2Cond as DisjunctionExpression).values[2] as StringLiteral).value).toBe('Utrecht');
      });

      test('should parse longer disjunction with 5 values', () => {
        const parser = new AntlrParser();
        const decisionTable = `Beslistabel Test
geldig altijd
|   | de factor moet gesteld worden op | indien regio gelijk is aan |
|---|----------------------------------|----------------------------|
| 1 | 1                                | 'A', 'B', 'C', 'D' of 'E'  |`;

        const model = parser.parseModel(decisionTable);
        const cond = model.beslistabels[0].rows[0].conditionValues[0];

        expect((cond as DisjunctionExpression).type).toBe('DisjunctionExpression');
        expect((cond as DisjunctionExpression).values).toHaveLength(5);
      });
    });

    describe('execution', () => {
      test('should match first value in disjunction', () => {
        const decisionTable = `Beslistabel Woonregio
geldig altijd
|   | de factor moet gesteld worden op | indien provincie gelijk is aan |
|---|----------------------------------|--------------------------------|
| 1 | 1                                | 'Friesland', 'Groningen' of 'Drenthe' |
| 2 | 3                                | 'Noord-Holland', 'Zuid-Holland' of 'Utrecht' |`;

        const context = new Context();
        context.setVariable('provincie', { type: 'string', value: 'Friesland' });

        const result = engine.run(decisionTable, context);

        expect(result.success).toBe(true);
        expect(result.value?.value).toBe(1);
      });

      test('should match middle value in disjunction (Groningen)', () => {
        const decisionTable = `Beslistabel Woonregio
geldig altijd
|   | de factor moet gesteld worden op | indien provincie gelijk is aan |
|---|----------------------------------|--------------------------------|
| 1 | 1                                | 'Friesland', 'Groningen' of 'Drenthe' |
| 2 | 3                                | 'Noord-Holland', 'Zuid-Holland' of 'Utrecht' |`;

        const context = new Context();
        context.setVariable('provincie', { type: 'string', value: 'Groningen' });

        const result = engine.run(decisionTable, context);

        expect(result.success).toBe(true);
        expect(result.value?.value).toBe(1);
      });

      test('should match last value in disjunction (Drenthe)', () => {
        const decisionTable = `Beslistabel Woonregio
geldig altijd
|   | de factor moet gesteld worden op | indien provincie gelijk is aan |
|---|----------------------------------|--------------------------------|
| 1 | 1                                | 'Friesland', 'Groningen' of 'Drenthe' |
| 2 | 3                                | 'Noord-Holland', 'Zuid-Holland' of 'Utrecht' |`;

        const context = new Context();
        context.setVariable('provincie', { type: 'string', value: 'Drenthe' });

        const result = engine.run(decisionTable, context);

        expect(result.success).toBe(true);
        expect(result.value?.value).toBe(1);
      });

      test('should match second row disjunction (Utrecht)', () => {
        const decisionTable = `Beslistabel Woonregio
geldig altijd
|   | de factor moet gesteld worden op | indien provincie gelijk is aan |
|---|----------------------------------|--------------------------------|
| 1 | 1                                | 'Friesland', 'Groningen' of 'Drenthe' |
| 2 | 3                                | 'Noord-Holland', 'Zuid-Holland' of 'Utrecht' |`;

        const context = new Context();
        context.setVariable('provincie', { type: 'string', value: 'Utrecht' });

        const result = engine.run(decisionTable, context);

        expect(result.success).toBe(true);
        expect(result.value?.value).toBe(3);
      });

      test('should not match value not in any disjunction', () => {
        const decisionTable = `Beslistabel Woonregio
geldig altijd
|   | de factor moet gesteld worden op | indien provincie gelijk is aan |
|---|----------------------------------|--------------------------------|
| 1 | 1                                | 'Friesland', 'Groningen' of 'Drenthe' |
| 2 | 3                                | 'Noord-Holland', 'Zuid-Holland' of 'Utrecht' |`;

        const context = new Context();
        context.setVariable('provincie', { type: 'string', value: 'Limburg' });

        const result = engine.run(decisionTable, context);

        expect(result.success).toBe(false);
        expect(result.error?.message).toContain('No matching row');
      });
    });

    describe('typed decision table columns', () => {
      test('should preserve typed columns independent of conclusion position', () => {
        const parser = new AntlrParser();
        const model = parser.parseModel(`Beslistabel Test
  geldig altijd
  |   | indien leeftijd groter is dan | de korting moet gesteld worden op | de toeslag moet gesteld worden op |
  |---|--------------------------------|-----------------------------------|-----------------------------------|
  | 1 | 18                             | 10                                | 20                                |`);

        const version = model.beslistabels[0].versions![0];

        expect(version.columns.map(column => column.type)).toEqual([
          'DecisionTableConditionColumn',
          'DecisionTableConclusionColumn',
          'DecisionTableConclusionColumn'
        ]);
        expect(version.conditionColumns[0].condition.subjectExpression).toMatchObject({
          type: 'AttributeReference',
          path: ['leeftijd']
        });
        expect(version.conclusionColumns.map(column => column.result.targetExpression)).toMatchObject([
          { type: 'AttributeReference', path: ['korting'] },
          { type: 'AttributeReference', path: ['toeslag'] }
        ]);
        expect(model.beslistabels[0].rows[0].conditionValues).toHaveLength(1);
      });

      test('parses a dagsoortcontrole condition column, including a multi-word day-type', () => {
        const parser = new AntlrParser();
        const model = parser.parseModel(`Dagsoort de kerstdag (mv: kerstdagen)
Dagsoort de tweede paasdag (mv: tweede paasdagen)

Objecttype de Vlucht (mv: vluchten) (bezield)
  de vertrekdatum Datum in dagen;
  de toeslag Numeriek;

Beslistabel Toeslag
geldig altijd
| | de toeslag van een Vlucht moet gesteld worden op | indien zijn vertrekdatum is een kerstdag | indien zijn vertrekdatum is geen tweede paasdag |
|---|---|---|---|
| 1 | 100 | waar | n.v.t. |
| 2 | 0 | n.v.t. | waar |`);

        const version = model.beslistabels[0].versions![0];
        expect(version.conditionColumns[0].condition).toMatchObject({
          isDagsoortCheck: true,
          dagsoortName: 'kerstdag',
          dagsoortNegated: false
        });
        // A multi-word day-type name parses here (the column header uses kenmerkNaam),
        // and "is geen" sets the negation flag.
        expect(version.conditionColumns[1].condition).toMatchObject({
          isDagsoortCheck: true,
          dagsoortName: 'tweede paasdag',
          dagsoortNegated: true
        });
      });

      test('parses eenzijdige predicaat condition columns (leeg/gevuld/elfproef)', () => {
        const parser = new AntlrParser();
        const model = parser.parseModel(`Objecttype de Persoon (mv: personen) (bezield)
  de correctie Numeriek;
  het bsn Numeriek;
  de status Numeriek;

Beslistabel Status
geldig altijd
| | de status van een Persoon moet gesteld worden op | indien zijn correctie is leeg | indien zijn bsn voldoet aan de elfproef |
|---|---|---|---|
| 1 | 1 | waar | n.v.t. |
| 2 | 2 | n.v.t. | waar |`);

        const version = model.beslistabels[0].versions![0];
        expect(version.conditionColumns[0].condition).toMatchObject({
          isUnaryCheck: true,
          unaryOperator: 'is leeg'
        });
        expect(version.conditionColumns[1].condition).toMatchObject({
          isUnaryCheck: true,
          unaryOperator: 'voldoet aan de elfproef'
        });
      });

      test('should execute every conclusion column for the first matching row', () => {
        const decisionTable = `Beslistabel Test
  geldig altijd
  |   | indien leeftijd groter is dan | de korting moet gesteld worden op | de toeslag moet gesteld worden op |
  |---|--------------------------------|-----------------------------------|-----------------------------------|
  | 1 | 18                             | 10                                | 20                                |`;

        const context = new Context();
        context.setVariable('leeftijd', { type: 'number', value: 20 });

        const result = engine.run(decisionTable, context);

        expect(result.success).toBe(true);
        expect(context.getVariable('korting')).toEqual({ type: 'number', value: 10 });
        expect(context.getVariable('toeslag')).toEqual({ type: 'number', value: 20 });
        expect(result.value).toEqual({ type: 'number', value: 20 });
      });

      test('should evaluate kenmerk condition columns against the current object', () => {
        const model = `Objecttype de Persoon (bezield)
      is recht op korting kenmerk (bijvoeglijk);
      de korting Numeriek;

  Beslistabel Korting
  geldig altijd
  |   | de korting van een Persoon moet gesteld worden op | indien hij een recht op korting heeft |
  |---|---------------------------------------------------|---------------------------------------|
  | 1 | 10                                                | waar                                  |
  | 2 | 0                                                 | onwaar                                |`;
        const context = new Context();
        context.createObject('Persoon', 'p1', {});
        context.setKenmerk('Persoon', 'p1', 'recht op korting', true);

        const result = engine.run(model, context);
        const [persoon] = context.getObjectsByType('Persoon');

        expect(result.success).toBe(true);
        expect((persoon.value as Record<string, unknown>).korting).toEqual({ type: 'number', value: 10 });
      });

      test('should execute kenmerk conclusion columns per target object', () => {
        const model = `Objecttype de Persoon (bezield)
      is volwassen kenmerk (bijvoeglijk);
      de leeftijd Numeriek;

  Beslistabel Volwassenheid
  geldig altijd
  |   | een Persoon is volwassen | indien leeftijd groter of gelijk is aan |
  |---|--------------------------|-----------------------------------------|
  | 1 | waar                     | 18                                      |`;
        const context = new Context();
        context.createObject('Persoon', 'p1', { leeftijd: { type: 'number', value: 20 } });

        const result = engine.run(model, context);

        expect(result.success).toBe(true);
        expect(context.getKenmerk('Persoon', 'p1', 'volwassen')).toBe(true);
        expect(context.getVariable('volwassen')).toBeUndefined();
      });

      test('should reject n.v.t. in conclusion columns', () => {
        const parser = new AntlrParser();

        expect(() => parser.parseModel(`Beslistabel Test
  geldig altijd
  |   | de korting moet gesteld worden op | indien leeftijd groter is dan |
  |---|-----------------------------------|--------------------------------|
  | 1 | n.v.t.                            | 18                             |`))
          .toThrow('uses n.v.t. in a conclusion column');
      });
    });

    describe('decision table validity', () => {
      test('should execute only the version active on the evaluation date', () => {
        const source = `Beslistabel Tarief
  geldig t/m 31-12-2020
  |   | de tarief moet gesteld worden op | indien leeftijd groter is dan |
  |---|----------------------------------|--------------------------------|
  | 1 | 1                                | 18                             |

  Beslistabel Tarief
  geldig vanaf 01-01-2021
  |   | de tarief moet gesteld worden op | indien leeftijd groter is dan |
  |---|----------------------------------|--------------------------------|
  | 1 | 2                                | 18                             |`;
        const context = new Context();
        context.evaluation_date = new Date(Date.UTC(2021, 0, 1));
        context.setVariable('leeftijd', { type: 'number', value: 20 });

        const result = engine.run(source, context);

        expect(result.success).toBe(true);
        expect(context.getVariable('tarief')).toEqual({ type: 'number', value: 2 });
      });

      test('should reject overlapping decision table versions with the same name', () => {
        const parser = new AntlrParser();

        expect(() => parser.parseModel(`Beslistabel Tarief
  geldig vanaf 01-01-2020 t/m 31-12-2021
  |   | de tarief moet gesteld worden op | indien leeftijd groter is dan |
  |---|----------------------------------|--------------------------------|
  | 1 | 1                                | 18                             |

  Beslistabel Tarief
  geldig vanaf 01-01-2021
  |   | de tarief moet gesteld worden op | indien leeftijd groter is dan |
  |---|----------------------------------|--------------------------------|
  | 1 | 2                                | 18                             |`))
          .toThrow("Decision table 'Tarief' has overlapping validity intervals");
      });
    });
  });
});