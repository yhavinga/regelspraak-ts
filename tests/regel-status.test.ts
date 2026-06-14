import { AntlrParser } from '../src/parser';

describe('Regel Status Conditions', () => {
  describe('Parsing', () => {
    it('should parse regelversie is gevuurd condition', () => {
      const code = `
        Objecttype de Persoon
            de leeftijd Numeriek;

        Regel test regel
            geldig altijd
                De leeftijd van een persoon moet berekend worden als 25 indien regelversie basisregel is gevuurd.
      `;

      const parser = new AntlrParser();
      const model = parser.parseModel(code);

      expect(model).toBeDefined();
      expect(model.regels).toHaveLength(1);

      const regel = model.regels[0];
      // TypeScript uses 'condition' not 'voorwaarde'
      expect(regel.condition).toBeDefined();
    });

    it('should parse regelversie is inconsistent condition', () => {
      const code = `
        Objecttype de Persoon (mv: Personen)
            de burgerservicenummer Tekst;
            fout kenmerk (bezittelijk);

        Consistentieregel uniekheidcontrole
            De burgerservicenummers van alle Personen moeten uniek zijn.

        Regel controleregel
            geldig altijd
                Een persoon heeft fout indien regelversie uniekheidcontrole is inconsistent.
      `;

      const parser = new AntlrParser();
      const model = parser.parseModel(code);

      expect(model).toBeDefined();
      expect(model.regels.length).toBeGreaterThanOrEqual(2);

      // Find the controleregel (TypeScript uses 'name' not 'naam')
      const controleRegel = model.regels.find(r =>
        r.name && r.name.toLowerCase().includes('controleregel')
      );
      expect(controleRegel).toBeDefined();
      expect(controleRegel!.condition).toBeDefined();
    });

    it('should parse the canonical §8.1.9 reference whose name contains "geen"', () => {
      // "Controleer of vlucht geen rondvlucht is" (TOKA §9.5) — a bare naamwoord cannot span "geen",
      // and regelName would demand a trailing standalone "is" the maximal-munch IS_INCONSISTENT token
      // swallows; the permissive regelversieNaam parses it, dropping that final "is" into the token.
      const code = `
        Objecttype de Vlucht (mv: vluchten)
            de vertrek Tekst;
            de bestemming Tekst;
            is rond kenmerk (bijvoeglijk);

        Regel Controleer of vlucht geen rondvlucht is
            geldig altijd
                Een Vlucht is rond indien de vertrek van de vlucht gelijk is aan de bestemming van de vlucht.

        Regel lees status
            geldig altijd
                Een Vlucht is rond indien regelversie Controleer of vlucht geen rondvlucht is inconsistent.
      `;

      const parser = new AntlrParser();
      const model = parser.parseModel(code);

      const reader = model.regels.find(r => r.name === 'lees status')!;
      const expr = (reader.condition as any).expression;
      expect(expr.type).toBe('RegelStatusExpression');
      expect(expr.check).toBe('inconsistent');
      // The name is one "is" short of the declared "...rondvlucht is" — the resolver reconciles it.
      expect(expr.regelNaam).toBe('Controleer of vlucht geen rondvlucht');
    });

    it('should parse multi-word regel name in regelversie condition', () => {
      const code = `
        Objecttype de Aanvraag
            de status Tekst;

        Regel basis berekening regel
            geldig altijd
                De status van de aanvraag moet berekend worden als "verwerkt".

        Regel vervolgstap
            geldig altijd
                De status van de aanvraag moet berekend worden als "afgerond" indien regelversie basis berekening regel is gevuurd.
      `;

      const parser = new AntlrParser();
      const model = parser.parseModel(code);

      expect(model).toBeDefined();
      expect(model.regels).toHaveLength(2);
    });
  });

  describe('AST Structure', () => {
    it('should create RegelStatusExpression node for is gevuurd', () => {
      const code = `
        Objecttype de X
            de y Numeriek;

        Regel test
            geldig altijd
                De y van de x moet berekend worden als 1 indien regelversie andere regel is gevuurd.
      `;

      const parser = new AntlrParser();
      const model = parser.parseModel(code);

      expect(model.regels).toHaveLength(1);
      const regel = model.regels[0];
      expect(regel.condition).toBeDefined();

      // The condition is wrapped in a Voorwaarde node, the expression is inside
      const voorwaarde = regel.condition as any;
      expect(voorwaarde.type).toBe('Voorwaarde');
      expect(voorwaarde.expression).toBeDefined();

      const condition = voorwaarde.expression;
      expect(condition.type).toBe('RegelStatusExpression');
      expect(condition.check).toBe('gevuurd');
      expect(condition.regelNaam).toContain('andere');

      // Verify predicate structure per GPT-5 review recommendation
      expect(condition.predicate).toBeDefined();
      expect(condition.predicate.type).toBe('SimplePredicate');
      expect(condition.predicate.operator).toBe('gevuurd');
      expect(condition.predicate.left).toBeDefined();
      expect(condition.predicate.left.type).toBe('StringLiteral');
      expect(condition.predicate.left.value).toContain('andere');
    });

    it('should create RegelStatusExpression node for is inconsistent', () => {
      const code = `
        Objecttype de X
            de y Numeriek;

        Regel test
            geldig altijd
                De y van de x moet berekend worden als 1 indien regelversie controle is inconsistent.
      `;

      const parser = new AntlrParser();
      const model = parser.parseModel(code);

      expect(model.regels).toHaveLength(1);
      const regel = model.regels[0];
      expect(regel.condition).toBeDefined();

      const voorwaarde = regel.condition as any;
      expect(voorwaarde.type).toBe('Voorwaarde');
      expect(voorwaarde.expression).toBeDefined();

      const condition = voorwaarde.expression;
      expect(condition.type).toBe('RegelStatusExpression');
      expect(condition.check).toBe('inconsistent');

      // Verify predicate structure per GPT-5 review recommendation
      expect(condition.predicate).toBeDefined();
      expect(condition.predicate.type).toBe('SimplePredicate');
      expect(condition.predicate.operator).toBe('inconsistent');
      expect(condition.predicate.left).toBeDefined();
      expect(condition.predicate.left.type).toBe('StringLiteral');
    });
  });
});
