import { Engine } from '../../src';
import {
  createResolutionContext,
  resolveExpression,
  ResolvedInfo,
  ResolvedPathSegment,
} from '../../src/resolver';
import { DomainModel } from '../../src/ast/domain-model';
import { AttributeReference, ParameterReference, VariableReference, Expression } from '../../src/ast/expressions';

/**
 * Tests for expression resolution - annotating AST nodes with semantic information.
 */
describe('Expression Resolver', () => {
  let engine: Engine;

  beforeEach(() => {
    engine = new Engine();
  });

  describe('Literal Resolution', () => {
    it('resolves NumberLiteral to Numeriek type', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = { type: 'NumberLiteral', value: 42 } as Expression;
      resolveExpression(expr, context);

      expect(expr.resolved).toBeDefined();
      expect(expr.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    });

    it('resolves StringLiteral to Tekst type', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = { type: 'StringLiteral', value: 'hello' } as Expression;
      resolveExpression(expr, context);

      expect(expr.resolved).toBeDefined();
      expect(expr.resolved?.resolvedType).toEqual({ type: 'Tekst' });
    });

    it('resolves BooleanLiteral to Boolean type', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = { type: 'BooleanLiteral', value: true } as Expression;
      resolveExpression(expr, context);

      expect(expr.resolved).toBeDefined();
      expect(expr.resolved?.resolvedType).toEqual({ type: 'Boolean' });
    });
  });

  describe('Parameter Resolution', () => {
    it('resolves ParameterReference to parameter definition', () => {
      const model: DomainModel = {
        objectTypes: [],
        parameters: [{
          type: 'ParameterDefinition',
          name: 'startdatum',
          dataType: { type: 'Datum' },
        }],
        regels: [],
        regelGroepen: [],
        beslistabels: [],
        dimensions: [],
        dagsoortDefinities: [],
        domains: [],
        feitTypes: [],
        unitSystems: [],
      };

      const context = createResolutionContext(model);
      const expr: ParameterReference = {
        type: 'ParameterReference',
        parameterName: 'startdatum',
      };

      resolveExpression(expr, context);

      expect(expr.resolved).toBeDefined();
      expect(expr.resolved?.resolvedSymbol?.kind).toBe('parameter');
      expect(expr.resolved?.resolvedSymbol?.name).toBe('startdatum');
      expect(expr.resolved?.resolvedType).toEqual({ type: 'Datum' });
    });

    it('resolves parameter with case-insensitive lookup', () => {
      const model: DomainModel = {
        objectTypes: [],
        parameters: [{
          type: 'ParameterDefinition',
          name: 'De Startdatum',
          dataType: { type: 'Datum' },
        }],
        regels: [],
        regelGroepen: [],
        beslistabels: [],
        dimensions: [],
        dagsoortDefinities: [],
        domains: [],
        feitTypes: [],
        unitSystems: [],
      };

      const context = createResolutionContext(model);
      const expr: ParameterReference = {
        type: 'ParameterReference',
        parameterName: 'de startdatum',
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedSymbol?.name).toBe('De Startdatum');
    });
  });

  describe('Possessive Pronoun Resolution', () => {
    it('resolves "zijn" to current object attribute', () => {
      const model = createPersonModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['zijn', 'leeftijd'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved).toBeDefined();
      expect(expr.resolved?.possessiveOwner).toBe('persoon');
      expect(expr.resolved?.resolvedPath).toHaveLength(2);

      const [possessiveSegment, attrSegment] = expr.resolved!.resolvedPath!;
      expect(possessiveSegment.kind).toBe('possessive');
      expect(possessiveSegment.resolvedName).toBe('persoon');
      expect(possessiveSegment.targetType).toBe('Persoon');

      expect(attrSegment.kind).toBe('attribute');
      expect(attrSegment.resolvedName).toBe('leeftijd');
      expect(attrSegment.targetType).toBe('Numeriek');
    });

    it('resolves "haar" to current object attribute', () => {
      const model = createVrouwModel();
      const context = createResolutionContext(model, 'Vrouw', 'vrouw');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['haar', 'naam'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.possessiveOwner).toBe('vrouw');
      expect(expr.resolved?.resolvedPath).toHaveLength(2);
      expect(expr.resolved?.resolvedPath![1].resolvedName).toBe('naam');
      expect(expr.resolved?.resolvedPath![1].targetType).toBe('Tekst');
    });

    it('resolves "hun" to current object attribute', () => {
      const model = createTeamModel();
      const context = createResolutionContext(model, 'Team', 'team');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['hun', 'motto'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.possessiveOwner).toBe('team');
      expect(expr.resolved?.resolvedPath![1].resolvedName).toBe('motto');
    });
  });

  describe('Attribute Path Resolution', () => {
    it('resolves direct attribute access: persoon.leeftijd', () => {
      const model = createPersonModel();
      const context = createResolutionContext(model);

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['Persoon', 'leeftijd'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedPath).toHaveLength(2);

      const [objSegment, attrSegment] = expr.resolved!.resolvedPath!;
      expect(objSegment.kind).toBe('variable');
      expect(objSegment.resolvedName).toBe('Persoon');
      expect(objSegment.targetType).toBe('Persoon');

      expect(attrSegment.kind).toBe('attribute');
      expect(attrSegment.resolvedName).toBe('leeftijd');
      expect(attrSegment.sourceType).toBe('Persoon');
      expect(attrSegment.targetType).toBe('Numeriek');
    });

    it('detects collection navigation (1:N)', () => {
      const model: DomainModel = {
        objectTypes: [{
          type: 'ObjectTypeDefinition',
          name: 'Factuur',
          members: [{
            type: 'AttributeSpecification',
            name: 'regels',
            dataType: { type: 'Lijst', specification: 'FactuurRegel' },
          }],
        }, {
          type: 'ObjectTypeDefinition',
          name: 'FactuurRegel',
          members: [{
            type: 'AttributeSpecification',
            name: 'bedrag',
            dataType: { type: 'Numeriek' },
          }],
        }],
        parameters: [],
        regels: [],
        regelGroepen: [],
        beslistabels: [],
        dimensions: [],
        dagsoortDefinities: [],
        domains: [],
        feitTypes: [],
        unitSystems: [],
      };

      const context = createResolutionContext(model);
      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['Factuur', 'regels'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.hasCollectionNavigation).toBe(true);
      expect(expr.resolved?.resolvedPath![1].cardinality).toBe('N');
    });
  });

  describe('Binary Expression Resolution', () => {
    it('resolves comparison to Boolean type', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = {
        type: 'BinaryExpression',
        operator: '>',
        left: { type: 'NumberLiteral', value: 10 },
        right: { type: 'NumberLiteral', value: 5 },
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedType).toEqual({ type: 'Boolean' });
    });

    it('resolves arithmetic to Numeriek type', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = {
        type: 'BinaryExpression',
        operator: '+',
        left: { type: 'NumberLiteral', value: 10 },
        right: { type: 'NumberLiteral', value: 5 },
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    });

    it('resolves nested operands', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = {
        type: 'BinaryExpression',
        operator: '+',
        left: { type: 'NumberLiteral', value: 10 },
        right: { type: 'NumberLiteral', value: 5 },
      } as Expression;

      resolveExpression(expr, context);

      // Both operands should also be resolved
      expect((expr as any).left.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
      expect((expr as any).right.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    });
  });

  describe('Aggregation Resolution', () => {
    it('resolves som to Numeriek type', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = {
        type: 'AggregationExpression',
        aggregationType: 'som',
        target: { type: 'NumberLiteral', value: 42 },
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    });

    it('resolves aantal to Numeriek type', () => {
      const model = createMinimalModel();
      const context = createResolutionContext(model);

      const expr = {
        type: 'AggregationExpression',
        aggregationType: 'aantal',
        target: { type: 'VariableReference', variableName: 'items' },
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedType).toEqual({ type: 'Numeriek' });
    });
  });

  // Helper functions to create test models

  function createMinimalModel(): DomainModel {
    return {
      objectTypes: [],
      parameters: [],
      regels: [],
      regelGroepen: [],
      beslistabels: [],
      dimensions: [],
      dagsoortDefinities: [],
      domains: [],
      feitTypes: [],
      unitSystems: [],
    };
  }

  function createPersonModel(): DomainModel {
    return {
      objectTypes: [{
        type: 'ObjectTypeDefinition',
        name: 'Persoon',
        animated: true,
        members: [
          {
            type: 'AttributeSpecification',
            name: 'naam',
            dataType: { type: 'Tekst' },
          },
          {
            type: 'AttributeSpecification',
            name: 'leeftijd',
            dataType: { type: 'Numeriek' },
          },
        ],
      }],
      parameters: [],
      regels: [],
      regelGroepen: [],
      beslistabels: [],
      dimensions: [],
      dagsoortDefinities: [],
      domains: [],
      feitTypes: [],
      unitSystems: [],
    };
  }

  function createVrouwModel(): DomainModel {
    return {
      objectTypes: [{
        type: 'ObjectTypeDefinition',
        name: 'Vrouw',
        animated: true,
        members: [
          {
            type: 'AttributeSpecification',
            name: 'naam',
            dataType: { type: 'Tekst' },
          },
        ],
      }],
      parameters: [],
      regels: [],
      regelGroepen: [],
      beslistabels: [],
      dimensions: [],
      dagsoortDefinities: [],
      domains: [],
      feitTypes: [],
      unitSystems: [],
    };
  }

  function createTeamModel(): DomainModel {
    return {
      objectTypes: [{
        type: 'ObjectTypeDefinition',
        name: 'Team',
        animated: false,
        members: [
          {
            type: 'AttributeSpecification',
            name: 'motto',
            dataType: { type: 'Tekst' },
          },
        ],
      }],
      parameters: [],
      regels: [],
      regelGroepen: [],
      beslistabels: [],
      dimensions: [],
      dagsoortDefinities: [],
      domains: [],
      feitTypes: [],
      unitSystems: [],
    };
  }
});
