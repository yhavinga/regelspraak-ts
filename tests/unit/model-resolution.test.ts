import { AntlrParser } from '../../src/parser';
import { Engine } from '../../src/engine';
import { resolveModel } from '../../src/resolver';
import { SemanticAnalyzer } from '../../src/semantic-analyzer';

function findNode(node: any, predicate: (node: any) => boolean): any | undefined {
  if (!node || typeof node !== 'object') {
    return undefined;
  }
  if (predicate(node)) {
    return node;
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        const match = findNode(item, predicate);
        if (match) return match;
      }
    } else {
      const match = findNode(value, predicate);
      if (match) return match;
    }
  }
  return undefined;
}

describe('model-wide resolution', () => {
  const source = `
Objecttype de Persoon (mv: personen) (bezield)
  de leeftijd Numeriek;
  de toeslag Numeriek;

Regel bereken toeslag
geldig altijd
De toeslag van een Persoon moet berekend worden als zijn leeftijd.
`;

  test('keeps parseModel syntax-only for compatibility', () => {
    const parser = new AntlrParser();
    const model = parser.parseModel(source);
    const result = model.regels[0].versions?.[0].result;

    expect(result?.type).toBe('Gelijkstelling');
    expect((result as any).expression.resolved).toBeUndefined();
  });

  test('parseResolvedModel annotates rule targets and expressions', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(source);

    expect(result.success).toBe(true);
    expect(result.diagnostics).toEqual([]);

    const ruleResult = result.model.regels[0].versions?.[0].result as any;
    expect(ruleResult.target.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    expect(ruleResult.expression.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    expect(ruleResult.expression.resolved?.resolvedPath.at(-1)).toMatchObject({
      resolvedName: 'leeftijd',
      sourceType: 'Persoon',
      targetType: 'Numeriek',
    });
  });

  test('resolveModel reports unresolved references as diagnostics', () => {
    const parser = new AntlrParser();
    const model = parser.parseModel(`
Objecttype de Persoon (mv: personen) (bezield)
  de toeslag Numeriek;

Regel bereken toeslag
geldig altijd
De toeslag van een Persoon moet berekend worden als zijn leeftijd.
`);

    const result = resolveModel(model);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(diagnostic =>
      diagnostic.message.includes('Unknown navigation root') ||
      diagnostic.message.includes('Cannot resolve navigation segment') ||
      diagnostic.message.includes('was not resolved')
    )).toBe(true);
  });

  test('engine exposes an explicit resolved-model API', () => {
    const engine = new Engine();
    const result = engine.parseResolvedModel(source);

    expect(result.success).toBe(true);
    expect(result.model?.regels[0].versions?.[0].result.expression.resolved).toBeDefined();
  });

  test('resolves temporal period wrappers without treating them as scalar expressions', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Passagier (mv: passagiers) (bezield)
  de belasting Numeriek;

Regel tijdelijke belasting
geldig altijd
De belasting van een Passagier moet berekend worden als 100
van dd. 1-1-2024 tot dd. 8-2-2025.
`);

    expect(result.success).toBe(true);
    const temporalCondition = (result.model.regels[0].versions?.[0].result as any).temporalCondition;
    expect(temporalCondition.resolved?.resolvedType).toEqual({ type: 'Period' });
    expect(temporalCondition.startDate.resolved?.resolvedType).toEqual({ type: 'Datum' });
    expect(temporalCondition.endDate.resolved?.resolvedType).toEqual({ type: 'Datum' });
  });

  test('resolves evaluator-backed duration functions', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Berekening (mv: berekeningen) (bezield)
  het resultaat Numeriek;
  de geboortedatum Datum;
  de peildatum Datum;

Regel bereken leeftijd
geldig altijd
Het resultaat van een Berekening moet berekend worden als
de tijdsduur van zijn geboortedatum tot zijn peildatum in hele jaren.
`);

    expect(result.success).toBe(true);
    const expression = (result.model.regels[0].versions?.[0].result as any).expression;
    expect(expression).toMatchObject({
      type: 'FunctionCall',
      functionName: 'tijdsduur_van',
      resolved: { resolvedType: { type: 'Numeriek' } },
    });
  });

  test('resolves supported boolean predicate operators', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Dagsoort de feestdag;

Objecttype de Dagcheck (mv: dagchecks) (bezield)
  de datum Datum;
  de uitkomst Boolean;

Regel check feestdag
geldig altijd
De uitkomst van een Dagcheck moet berekend worden als zijn datum is een dagsoort feestdag.
`);

    expect(result.success).toBe(true);
    const expression = (result.model.regels[0].versions?.[0].result as any).expression;
    expect(expression.resolved?.resolvedType).toEqual({ type: 'Boolean' });
  });

  test('resolves collection aggregate selectors against collection elements', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Persoon (mv: personen) (bezield)
  de leeftijd Numeriek;

Objecttype de Berekening (mv: berekeningen) (bezield)
  het totaal Numeriek;
  de personen Lijst van Persoon;

Regel bereken totaal
geldig altijd
Het totaal van een Berekening moet berekend worden als de som van de leeftijd van alle personen.
`);

    expect(result.success).toBe(true);
    const expression = (result.model.regels[0].versions?.[0].result as any).expression;
    expect(expression).toMatchObject({
      type: 'FunctionCall',
      functionName: 'som_van',
      resolved: { resolvedType: { type: 'Numeriek' } },
    });
    expect(expression.arguments[0].resolved?.resolvedPath.at(-1)).toMatchObject({
      resolvedName: 'leeftijd',
      sourceType: 'Persoon',
    });
  });

  test('resolves first and last collection aggregate selectors against collection elements', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Persoon (mv: personen) (bezield)
  de geboortedatum Datum;

Objecttype de Berekening (mv: berekeningen) (bezield)
  de oudste Datum;
  de jongste Datum;
  de personen Lijst van Persoon;

Regel bepaal oudste
geldig altijd
De oudste van een Berekening moet berekend worden als de eerste van de geboortedatum van alle personen.

Regel bepaal jongste
geldig altijd
De jongste van een Berekening moet berekend worden als de laatste van de geboortedatum van alle personen.
`);

    expect(result.success).toBe(true);
    const firstExpression = (result.model.regels[0].versions?.[0].result as any).expression;
    const lastExpression = (result.model.regels[1].versions?.[0].result as any).expression;
    for (const expression of [firstExpression, lastExpression]) {
      expect(expression.resolved?.resolvedType).toEqual({ type: 'Datum' });
      expect(expression.arguments[0].resolved?.resolvedPath.at(-1)).toMatchObject({
        resolvedName: 'geboortedatum',
        sourceType: 'Persoon',
      });
    }
  });

  test('prefers collection element members over global roots in aggregate selectors', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Geboortedatum (mv: geboortedatums) (bezield)
  de dummy Numeriek;

Objecttype de Persoon (mv: personen) (bezield)
  de geboortedatum Datum;

Objecttype de Berekening (mv: berekeningen) (bezield)
  de oudste Datum;
  de personen Lijst van Persoon;

Regel R
geldig altijd
De oudste van een Berekening moet berekend worden als de eerste van de geboortedatum van alle personen.
`);

    expect(result.success).toBe(true);
    const expression = (result.model.regels[0].versions?.[0].result as any).expression;
    expect(expression.resolved?.resolvedType).toEqual({ type: 'Datum' });
    expect(expression.arguments[0].resolved?.resolvedPath.at(-1)).toMatchObject({
      resolvedName: 'geboortedatum',
      sourceType: 'Persoon',
      targetType: 'Datum',
    });
  });

  test('resolves dagsoort definition conditions with implicit dag binding', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Dagsoort de werkdag;

Regel Werkdag
geldig altijd
Een dag is een werkdag
indien de maand uit (de dag) is gelijk aan 1.
`);

    expect(result.success).toBe(true);
    const condition = result.model.regels[0].versions?.[0].condition?.expression as any;
    expect(condition.left.arguments[0].resolved?.resolvedSymbol).toMatchObject({
      kind: 'variable',
      name: 'dag',
    });
    expect(condition.left.arguments[0].resolved?.resolvedType).toEqual({ type: 'Datum' });
  });

  test('resolves compatibility rule.version fallback', () => {
    const parser = new AntlrParser();
    const model = parser.parseModel(source) as any;
    model.regels[0].version = model.regels[0].versions[0];
    model.regels[0].versions = [];
    delete model.regels[0].result;
    delete model.regels[0].resultaat;

    const result = resolveModel(model);

    expect(result.success).toBe(true);
    expect(model.regels[0].version.result.expression.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
  });

  test('validates subselectie predicate attributes against collection elements', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Persoon (mv: personen) (bezield)
  de leeftijd Numeriek;

Objecttype de Berekening (mv: berekeningen) (bezield)
  het aantal Numeriek;
  de personen Lijst van Persoon;

Regel R
geldig altijd
Het aantal van een Berekening moet berekend worden als
het aantal personen die een onbekend hebben groter dan 18.
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(diagnostic =>
      diagnostic.message.includes("Cannot resolve navigation segment 'onbekend'") ||
      diagnostic.message.includes("Unknown attribute 'onbekend'")
    )).toBe(true);
  });

  test('rejects subselectie predicate attributes that only match global roots', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Berekening (mv: berekeningen) (bezield)
  de dummy Numeriek;
  het aantal Numeriek;
  de personen Lijst van Persoon;

Objecttype de Persoon (mv: personen) (bezield)
  de leeftijd Numeriek;

Regel R
geldig altijd
Het aantal van een Berekening moet berekend worden als
het aantal personen die een Berekening hebben groter dan 18.
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(diagnostic =>
      diagnostic.message.includes("Cannot resolve navigation segment 'Berekening'") ||
      diagnostic.message.includes("Unknown attribute 'Berekening'")
    )).toBe(true);
  });

  test('resolves dotted unified predicate attributes in compound subselecties', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Persoon (mv: personen) (bezield)
  de leeftijd Numeriek;

Objecttype de Berekening (mv: berekeningen) (bezield)
  de selectie Lijst van Persoon;
  de personen Lijst van Persoon;

Regel R
geldig altijd
De selectie van een Berekening moet berekend worden als
de personen die aan alle volgende voorwaarden voldoen:
• de leeftijd van hij is kleiner dan 16.
`);

    expect(result.success).toBe(true);
    const expression = (result.model.regels[0].versions?.[0].result as any).expression;
    const unifiedPredicate = expression.predicate.predicates[0];
    expect(unifiedPredicate.attribute).toBe('self.leeftijd');
    expect(unifiedPredicate.resolvedAttribute?.resolvedPath.at(-1)).toMatchObject({
      resolvedName: 'leeftijd',
      sourceType: 'Persoon',
      targetType: 'Numeriek',
    });
  });

  test('resolves subselectie predicates against collection elements before scalar leaves', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Persoon (mv: personen) (bezield)
  de leeftijd Numeriek;
  de belasting Numeriek;

Objecttype de Berekening (mv: berekeningen) (bezield)
  de totaal Numeriek;
  de personen Lijst van Persoon;

Regel R
geldig altijd
De totaal van een Berekening moet berekend worden als
de som van alle belasting van de personen die aan alle volgende voorwaarden voldoen:
• de leeftijd van hij is kleiner dan 16.
`);

    expect(result.success).toBe(true);
    const expression = (result.model.regels[0].versions?.[0].result as any).expression;
    const unifiedPredicate = findNode(expression, node =>
      node.type === 'AttributePredicate' && node.attribute === 'self.leeftijd'
    );
    expect(unifiedPredicate?.resolvedAttribute?.resolvedPath.at(-1)).toMatchObject({
      resolvedName: 'leeftijd',
      sourceType: 'Persoon',
      targetType: 'Numeriek',
    });
  });

  test('rejects unknown dagsoort names in predicates', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Dagsoort de feestdag;

Objecttype de Dagcheck (mv: dagchecks) (bezield)
  de datum Datum;
  de uitkomst Boolean;

Regel R
geldig altijd
De uitkomst van een Dagcheck moet berekend worden als zijn datum is een dagsoort onbekende.
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(diagnostic =>
      diagnostic.message.includes("Unknown dagsoort 'onbekende'")
    )).toBe(true);
  });

  test('resolves embedded rule status predicate expressions', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de X (mv: xen) (bezield)
  de y Numeriek;

Regel andere regel
geldig altijd
De y van een X moet berekend worden als 1.

Regel R
geldig altijd
De y van een X moet berekend worden als 2 indien regelversie andere regel is gevuurd.
`);

    expect(result.success).toBe(true);
    const condition = result.model.regels[1].versions?.[0].condition?.expression as any;
    expect(condition.predicate.left).toMatchObject({
      type: 'StringLiteral',
      value: 'andere regel',
    });
    expect(condition.predicate.left.resolved?.resolvedType).toEqual({ type: 'Tekst' });
  });

  test('resolves uniqueness consistency targets structurally', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Persoon (mv: Personen) (bezield)
  het burgerservicenummer Tekst;

Consistentieregel BSN uniekheid
De burgerservicenummers van alle Personen moeten uniek zijn.
`);

    expect(result.success).toBe(true);
    const target = (result.model.regels[0].result as any).target;
    expect(target.resolved?.resolvedPath).toMatchObject([
      { resolvedName: 'Persoon', cardinality: 'N' },
      { resolvedName: 'burgerservicenummer', sourceType: 'Persoon' },
    ]);
  });

  test('semantic analyzer exposes transpilation-grade diagnostics', () => {
    const parser = new AntlrParser();
    const analyzer = new SemanticAnalyzer();
    const model = parser.parseModel(`
Objecttype de Persoon (mv: personen) (bezield)
  de toeslag Numeriek;

Regel bereken toeslag
geldig altijd
De toeslag van een Persoon moet berekend worden als zijn leeftijd.
`);

    const diagnostics = analyzer.analyzeForTranspilation(model);

    expect(diagnostics.some(diagnostic =>
      diagnostic.message.includes("Cannot resolve navigation segment 'leeftijd'")
    )).toBe(true);
  });

  test('ObjectCreation with an unknown initializer attribute is a diagnostic', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Bedrijf (mv: bedrijven)
    de naam Tekst;

Objecttype de Klant (mv: klanten)
    de naam Tekst;

Feittype klantrelatie
    de leverancier\tBedrijf
    de klant (mv: klanten)\tKlant
één leverancier heeft meerdere klanten

Regel MaakKlant
    geldig altijd
        Een bedrijf heeft een klant met kleur gelijk aan "rood".
`);

    expect(result.success).toBe(false);
    expect(result.diagnostics.some(d =>
      /Unknown attribute or kenmerk 'kleur' on ObjectType 'Klant'/.test(d.message)
    )).toBe(true);
  });

  test('ObjectCreation with a known initializer attribute resolves', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Bedrijf (mv: bedrijven)
    de naam Tekst;

Objecttype de Klant (mv: klanten)
    de naam Tekst;

Feittype klantrelatie
    de leverancier\tBedrijf
    de klant (mv: klanten)\tKlant
één leverancier heeft meerdere klanten

Regel MaakKlant
    geldig altijd
        Een bedrijf heeft een klant met naam gelijk aan "Jan".
`);

    expect(result.success).toBe(true);
    expect(result.diagnostics).toEqual([]);
  });

  test('decision-table condition columns resolve against the conclusion object type', () => {
    const parser = new AntlrParser();
    const result = parser.parseResolvedModel(`
Objecttype de Persoon (bezield)
    is volwassen kenmerk (bijvoeglijk);
    de leeftijd Numeriek;

Beslistabel Volwassenheid
geldig altijd
|   | een Persoon is volwassen | indien leeftijd groter of gelijk is aan |
|---|--------------------------|-----------------------------------------|
| 1 | waar                     | 18                                      |
`);

    // "leeftijd" in the condition column only resolves because the table is
    // scoped to Persoon (the conclusion subject); without that scope it has no
    // navigation root.
    expect(result.success).toBe(true);
    expect(result.diagnostics).toEqual([]);
  });
});
