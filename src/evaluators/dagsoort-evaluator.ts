import { Dagsoort, DagsoortDefinitie, normalizeDagsoortName } from '../ast/dagsoort';
import { Expression } from '../ast/expressions';
import { MultipleResults, ResultPart, Rule, RuleVersion, Voorwaarde } from '../ast/rules';
import { DomainModel } from '../ast/domain-model';
import { RuntimeContext, Value } from '../interfaces';

interface ExpressionEvaluatorLike {
  evaluate(expr: Expression, context: RuntimeContext): Value;
}

interface DagsoortRule {
  definition: DagsoortDefinitie;
  condition?: Voorwaarde;
}

export function evaluateDagsoort(
  dateValue: Value,
  dagsoortName: string,
  isPositiveCheck: boolean,
  context: RuntimeContext,
  expressionEvaluator: ExpressionEvaluatorLike
): boolean {
  if (dateValue.type === 'null' || dateValue.value === null || dateValue.value === undefined) {
    return !isPositiveCheck;
  }

  if (dateValue.type !== 'date') {
    throw new Error(`Cannot apply dagsoort check to ${dateValue.type}`);
  }

  const date = dateValue.value;
  if (!(date instanceof Date)) {
    throw new Error('Dagsoort check requires a Date value');
  }

  const canonicalName = normalizeDagsoortName(dagsoortName);
  const dagsoort = findDagsoort(context.domainModel, canonicalName);
  if (!dagsoort) {
    return !isPositiveCheck;
  }

  const rules = findDagsoortRules(context.domainModel, dagsoort.canonicalName, context.evaluation_date);
  if (rules.length === 0) {
    return !isPositiveCheck;
  }

  const matches = rules.some(rule => evaluateDagsoortRule(rule, date, context, expressionEvaluator));
  return isPositiveCheck ? matches : !matches;
}

function findDagsoort(model: DomainModel, canonicalName: string): Dagsoort | undefined {
  return (model.dagsoorten || []).find(dagsoort =>
    dagsoort.canonicalName === canonicalName ||
    dagsoort.canonicalPlural === canonicalName ||
    normalizeDagsoortName(dagsoort.name) === canonicalName ||
    (dagsoort.plural !== undefined && normalizeDagsoortName(dagsoort.plural) === canonicalName)
  );
}

function findDagsoortRules(model: DomainModel, canonicalName: string, evaluationDate: Date): DagsoortRule[] {
  const rules = model.regels || (model as any).rules || [];
  const result: DagsoortRule[] = [];

  for (const rule of rules) {
    for (const dagsoortRule of dagsoortDefinitionsFromRule(rule, evaluationDate)) {
      const definition = dagsoortRule.definition;
      if (definition.canonicalDagsoortName === canonicalName ||
        normalizeDagsoortName(definition.dagsoortName) === canonicalName) {
        result.push(dagsoortRule);
      }
    }
  }

  return result;
}

function dagsoortDefinitionsFromRule(rule: Rule, evaluationDate: Date): DagsoortRule[] {
  const versioned = rule.versions || [];
  if (versioned.length > 0) {
    const definitions: DagsoortRule[] = [];
    for (const version of versioned) {
      if (isRuleVersionActive(version, evaluationDate)) {
        collectDagsoortDefinitions(version.result, version.condition, definitions);
      }
    }
    return definitions;
  }

  const definitions: DagsoortRule[] = [];
  collectDagsoortDefinitions(rule.result || rule.resultaat, rule.voorwaarde || rule.condition, definitions);
  return definitions;
}

function collectDagsoortDefinitions(
  result: ResultPart | undefined,
  condition: Voorwaarde | undefined,
  definitions: DagsoortRule[]
): void {
  if (!result) {
    return;
  }

  if (result.type === 'DagsoortDefinitie') {
    definitions.push({ definition: result, condition });
    return;
  }

  if (result.type === 'MultipleResults') {
    for (const nested of (result as MultipleResults).results) {
      collectDagsoortDefinitions(nested, condition, definitions);
    }
  }
}

function evaluateDagsoortRule(
  rule: DagsoortRule,
  date: Date,
  context: RuntimeContext,
  expressionEvaluator: ExpressionEvaluatorLike
): boolean {
  const expression = extractConditionExpression(rule.condition);
  if (!expression) {
    return true;
  }

  const scopedContext = context.clone ? context.clone() : context;
  scopedContext.pushScope();
  const previousInstance = scopedContext.current_instance;

  try {
    scopedContext.current_instance = undefined;
    scopedContext.setVariable('dag', { type: 'date', value: date });

    const conditionResult = expressionEvaluator.evaluate(expression, scopedContext);
    if (conditionResult.type !== 'boolean') {
      throw new Error(`Dagsoort rule condition must evaluate to boolean, got ${conditionResult.type}`);
    }

    return conditionResult.value === true;
  } finally {
    scopedContext.current_instance = previousInstance;
    scopedContext.popScope();
  }
}

function extractConditionExpression(voorwaarde: Voorwaarde | undefined): Expression | undefined {
  if (!voorwaarde) {
    return undefined;
  }

  return voorwaarde.expression || (voorwaarde as any).expressie;
}

function isRuleVersionActive(version: RuleVersion, evaluationDate: Date): boolean {
  const start = version.start?.getTime() ?? Number.NEGATIVE_INFINITY;
  const end = version.end?.getTime() ?? Number.POSITIVE_INFINITY;
  const time = evaluationDate.getTime();
  return start <= time && time <= end;
}
