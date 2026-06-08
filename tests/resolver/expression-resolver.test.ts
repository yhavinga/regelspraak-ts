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

  describe('Kenmerk Resolution with Equivalence', () => {
    function createKenmerkModel(): DomainModel {
      return {
        objectTypes: [{
          type: 'ObjectTypeDefinition',
          name: 'Natuurlijk persoon',
          animated: true,
          members: [
            {
              type: 'KenmerkSpecification',
              name: 'minderjarig',
              kenmerkType: 'bijvoeglijk',
            },
            {
              type: 'KenmerkSpecification',
              name: 'recht op kindkorting',
              kenmerkType: 'bezittelijk',
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

    it('resolves ["self", "is minderjarig"] to canonical "minderjarig" for bijvoeglijk kenmerk', () => {
      const model = createKenmerkModel();
      const context = createResolutionContext(model, 'Natuurlijk persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'is minderjarig'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedPath).toHaveLength(2);
      const [possessive, kenmerkSegment] = expr.resolved!.resolvedPath!;

      expect(possessive.kind).toBe('possessive');
      expect(possessive.targetType).toBe('Natuurlijk persoon');

      expect(kenmerkSegment.sourceName).toBe('is minderjarig');
      expect(kenmerkSegment.resolvedName).toBe('minderjarig');
      expect(kenmerkSegment.kind).toBe('attribute');
      expect(kenmerkSegment.targetType).toBe('Boolean');
    });

    it('resolves ["self", "heeft recht op kindkorting"] to canonical "recht op kindkorting" for bezittelijk kenmerk', () => {
      const model = createKenmerkModel();
      const context = createResolutionContext(model, 'Natuurlijk persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'heeft recht op kindkorting'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedPath).toHaveLength(2);
      const [, kenmerkSegment] = expr.resolved!.resolvedPath!;

      expect(kenmerkSegment.sourceName).toBe('heeft recht op kindkorting');
      expect(kenmerkSegment.resolvedName).toBe('recht op kindkorting');
      expect(kenmerkSegment.targetType).toBe('Boolean');
    });

    it('does NOT resolve ["self", "heeft minderjarig"] for bijvoeglijk kenmerk', () => {
      const model = createKenmerkModel();
      const context = createResolutionContext(model, 'Natuurlijk persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'heeft minderjarig'],
      };

      resolveExpression(expr, context);

      // Should only have possessive segment, kenmerk should NOT resolve
      // because "heeft" is not valid for bijvoeglijk kenmerken
      expect(expr.resolved?.resolvedPath).toHaveLength(1);
      expect(expr.resolved?.resolvedPath![0].kind).toBe('possessive');
    });

    it('resolves direct kenmerk name without prefix', () => {
      const model = createKenmerkModel();
      const context = createResolutionContext(model, 'Natuurlijk persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'minderjarig'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedPath).toHaveLength(2);
      const [, kenmerkSegment] = expr.resolved!.resolvedPath!;

      expect(kenmerkSegment.sourceName).toBe('minderjarig');
      expect(kenmerkSegment.resolvedName).toBe('minderjarig');
      expect(kenmerkSegment.targetType).toBe('Boolean');
    });
  });

  describe('FeitType Navigation Resolution', () => {
    function createFlightModel(): DomainModel {
      return {
        objectTypes: [
          {
            type: 'ObjectTypeDefinition',
            name: 'Natuurlijk persoon',
            animated: true,
            members: [
              { type: 'AttributeSpecification', name: 'geboortedatum', dataType: { type: 'Datum' } },
            ],
          },
          {
            type: 'ObjectTypeDefinition',
            name: 'Vlucht',
            animated: false,
            members: [
              { type: 'AttributeSpecification', name: 'vluchtdatum', dataType: { type: 'Datum' } },
            ],
          },
        ],
        parameters: [],
        regels: [],
        regelGroepen: [],
        beslistabels: [],
        dimensions: [],
        dagsoortDefinities: [],
        domains: [],
        feitTypes: [
          {
            type: 'FeitType',
            naam: 'vlucht van natuurlijke personen',
            wederkerig: false,
            rollen: [
              { naam: 'reis', objectType: 'Vlucht', cardinality: 'one' },
              { naam: 'passagier', meervoud: 'passagiers', objectType: 'Natuurlijk persoon', cardinality: 'many' },
            ],
          },
        ],
        unitSystems: [],
      };
    }

    it('resolves forward FeitType navigation: Natuurlijk persoon -> reis -> Vlucht (cardinality 1)', () => {
      const model = createFlightModel();
      const context = createResolutionContext(model, 'Natuurlijk persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['zijn', 'reis', 'vluchtdatum'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedPath).toHaveLength(3);
      const [possessive, feitNav, attr] = expr.resolved!.resolvedPath!;

      expect(possessive.kind).toBe('possessive');
      expect(possessive.targetType).toBe('Natuurlijk persoon');

      expect(feitNav.kind).toBe('feittype');
      expect(feitNav.resolvedName).toBe('reis');
      expect(feitNav.sourceType).toBe('Natuurlijk persoon');
      expect(feitNav.targetType).toBe('Vlucht');
      expect(feitNav.cardinality).toBe('1');

      expect(attr.kind).toBe('attribute');
      expect(attr.resolvedName).toBe('vluchtdatum');
      expect(attr.targetType).toBe('Datum');

      expect(expr.resolved?.hasCollectionNavigation).toBeFalsy();
    });

    it('resolves reverse FeitType navigation with plural alias: Vlucht -> passagiers -> Natuurlijk persoon (cardinality N)', () => {
      const model = createFlightModel();
      const context = createResolutionContext(model, 'Vlucht', 'vlucht');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['Vlucht', 'passagiers'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedPath).toHaveLength(2);
      const [objSegment, feitNav] = expr.resolved!.resolvedPath!;

      expect(objSegment.kind).toBe('variable');
      expect(objSegment.targetType).toBe('Vlucht');

      expect(feitNav.kind).toBe('feittype');
      expect(feitNav.resolvedName).toBe('passagiers');
      expect(feitNav.sourceType).toBe('Vlucht');
      expect(feitNav.targetType).toBe('Natuurlijk persoon');
      expect(feitNav.cardinality).toBe('N');

      expect(expr.resolved?.hasCollectionNavigation).toBe(true);
    });

    it('resolves reverse FeitType navigation with singular role spelling using semantic cardinality', () => {
      const model = createFlightModel();
      const context = createResolutionContext(model, 'Vlucht', 'vlucht');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['Vlucht', 'passagier'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.resolvedPath).toHaveLength(2);
      const [, feitNav] = expr.resolved!.resolvedPath!;

      expect(feitNav.kind).toBe('feittype');
      expect(feitNav.resolvedName).toBe('passagier');
      expect(feitNav.cardinality).toBe('N');
    });

    it('uses FeitType cardinality, not plural alias spelling, for navigation cardinality', () => {
      const model = createFlightModel();
      model.feitTypes = [
        {
          type: 'FeitType',
          naam: 'badge van persoon',
          wederkerig: false,
          rollen: [
            { naam: 'eigenaar', objectType: 'Natuurlijk persoon', cardinality: 'one' },
            { naam: 'badge', meervoud: 'badges', objectType: 'Vlucht', cardinality: 'one' },
          ],
        },
      ];
      const context = createResolutionContext(model, 'Natuurlijk persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['zijn', 'badges'],
      };

      resolveExpression(expr, context);

      const [, feitNav] = expr.resolved!.resolvedPath!;
      expect(feitNav.kind).toBe('feittype');
      expect(feitNav.resolvedName).toBe('badges');
      expect(feitNav.cardinality).toBe('1');
      expect(expr.resolved?.hasCollectionNavigation).toBeFalsy();
    });
  });

  describe('Timeline Metadata Propagation', () => {
    function createTimelineModel(): DomainModel {
      return {
        objectTypes: [{
          type: 'ObjectTypeDefinition',
          name: 'Persoon',
          animated: true,
          members: [
            {
              type: 'AttributeSpecification',
              name: 'inkomen',
              dataType: { type: 'DomainReference', domain: 'Bedrag' },
              timelineGranularity: 'jaar',
            },
            {
              type: 'AttributeSpecification',
              name: 'salaris',
              dataType: { type: 'DomainReference', domain: 'Bedrag' },
              timelineGranularity: 'maand',
            },
            {
              type: 'AttributeSpecification',
              name: 'aanwezigheid',
              dataType: { type: 'Boolean' },
              timelineGranularity: 'dag',
            },
            {
              type: 'AttributeSpecification',
              name: 'leeftijd',
              dataType: { type: 'Numeriek' },
              // No timeline - scalar attribute
            },
          ],
        }],
        parameters: [
          {
            type: 'ParameterDefinition',
            name: 'belastingpercentage',
            dataType: { type: 'Numeriek' },
            timelineGranularity: 'jaar',
          },
          {
            type: 'ParameterDefinition',
            name: 'vaste aftrek',
            dataType: { type: 'DomainReference', domain: 'Bedrag' },
            // No timeline - scalar parameter
          },
        ],
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

    it('resolves attribute with yearly timeline', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'inkomen'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('jaar');
      expect(expr.resolved?.timeline?.source).toBe('attribute');
    });

    it('resolves attribute with monthly timeline', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'salaris'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('maand');
      expect(expr.resolved?.timeline?.source).toBe('attribute');
    });

    it('resolves attribute with daily timeline', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'aanwezigheid'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('dag');
      expect(expr.resolved?.timeline?.source).toBe('attribute');
    });

    it('resolves scalar attribute without timeline', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr: AttributeReference = {
        type: 'AttributeReference',
        path: ['self', 'leeftijd'],
      };

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeUndefined();
    });

    it('resolves parameter with yearly timeline', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model);

      const expr = {
        type: 'ParameterReference',
        parameterName: 'belastingpercentage',
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('jaar');
      expect(expr.resolved?.timeline?.source).toBe('parameter');
    });

    it('resolves scalar parameter without timeline', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model);

      const expr = {
        type: 'ParameterReference',
        parameterName: 'vaste aftrek',
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeUndefined();
    });

    it('propagates timeline through binary expression (timeline + scalar)', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr = {
        type: 'BinaryExpression',
        operator: '+',
        left: {
          type: 'AttributeReference',
          path: ['self', 'inkomen'],
        },
        right: {
          type: 'NumberLiteral',
          value: 1000,
        },
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('jaar');
      // When only one operand has timeline, we preserve its source (attribute/parameter)
      expect(expr.resolved?.timeline?.source).toBe('attribute');
    });

    it('combines timelines using finest granularity (year + month = month)', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr = {
        type: 'BinaryExpression',
        operator: '+',
        left: {
          type: 'AttributeReference',
          path: ['self', 'inkomen'],  // yearly
        },
        right: {
          type: 'AttributeReference',
          path: ['self', 'salaris'],  // monthly
        },
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('maand');
      expect(expr.resolved?.timeline?.source).toBe('expression');
    });

    it('combines timelines using finest granularity (month + day = day)', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      // We need a numeric expression, so let's create one that makes sense
      // aanwezigheid is Boolean daily, salaris is Bedrag monthly
      // In practice we wouldn't add these, but the resolver doesn't check semantics
      const expr = {
        type: 'BinaryExpression',
        operator: '*',
        left: {
          type: 'AttributeReference',
          path: ['self', 'salaris'],  // monthly
        },
        right: {
          type: 'UnaryExpression',
          operator: '-',
          operand: {
            type: 'AttributeReference',
            path: ['self', 'aanwezigheid'],  // daily
          },
        },
      } as Expression;

      resolveExpression(expr, context);

      // The inner unary should have day timeline
      expect((expr as any).right.resolved?.timeline?.granularity).toBe('dag');

      // The outer binary should combine month and day to day (finest)
      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('dag');
      expect(expr.resolved?.timeline?.source).toBe('expression');
    });

    it('propagates timeline through unary expression', () => {
      const model = createTimelineModel();
      const context = createResolutionContext(model, 'Persoon', 'persoon');

      const expr = {
        type: 'UnaryExpression',
        operator: '-',
        operand: {
          type: 'AttributeReference',
          path: ['self', 'inkomen'],
        },
      } as Expression;

      resolveExpression(expr, context);

      expect(expr.resolved?.timeline).toBeDefined();
      expect(expr.resolved?.timeline?.granularity).toBe('jaar');
    });
  });
});
