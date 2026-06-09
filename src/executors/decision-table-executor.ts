import { RuntimeContext, Value } from '../interfaces';
import {
  DecisionTable,
  DecisionTableCondition,
  DecisionTableConclusionColumn,
  DecisionTableConditionColumn,
  DecisionTableResult,
  DecisionTableRow,
  DecisionTableVersion
} from '../ast/decision-tables';
import { ExpressionEvaluator } from '../evaluators/expression-evaluator';
import { Expression } from '../ast/expressions';
import type { RuleVersion } from '../ast/rules';
import { UnitRegistry } from '../units/unit-registry';
import { compareRuntimeValues } from '../units/value-semantics';

export interface DecisionTableExecutionResult {
  success: boolean;
  matchedRow?: number;
  target?: string;
  value?: Value;
  error?: Error;
}

/**
 * Executes RegelSpraak decision tables
 */
export class DecisionTableExecutor {
  private expressionEvaluator = new ExpressionEvaluator();
  private unitRegistry = new UnitRegistry();

  execute(table: DecisionTable, context: RuntimeContext): DecisionTableExecutionResult {
    try {
      const executionModel = this.getExecutionModel(table, context);
      if (!executionModel) {
        return {
          success: false,
          error: new Error('No active decision table version')
        };
      }

      // Evaluate each row
      for (const row of executionModel.rows) {
        if (this.evaluateRow(row, executionModel.conditionColumns, context)) {
          let lastTarget: string | undefined;
          let lastValue: Value | undefined;

          for (const conclusionColumn of executionModel.conclusionColumns) {
            const cell = row.cells?.[conclusionColumn.columnIndex];
            if (!cell || cell.value === 'n.v.t.') {
              throw new Error(
                `Decision table row ${row.rowNumber} has no conclusion value for column ${conclusionColumn.columnIndex + 1}`
              );
            }
            const value = this.expressionEvaluator.evaluate(cell.value as Expression, context);
            const targetName = this.assignConclusion(conclusionColumn.result, value, context);
            lastTarget = targetName;
            lastValue = value;
          }

          return {
            success: true,
            matchedRow: row.rowNumber,
            target: lastTarget,
            value: lastValue
          };
        }
      }

      // No matching row found
      return {
        success: false,
        error: new Error('No matching row in decision table')
      };
    } catch (error) {
      return {
        success: false,
        error: error as Error
      };
    }
  }

  private getExecutionModel(
    table: DecisionTable,
    context: RuntimeContext
  ): {
    rows: DecisionTableRow[];
    conclusionColumns: DecisionTableConclusionColumn[];
    conditionColumns: DecisionTableConditionColumn[];
  } | undefined {
    const activeVersion = this.selectActiveVersion(table.versions, context.evaluation_date);
    if (activeVersion) {
      return {
        rows: activeVersion.rows,
        conclusionColumns: activeVersion.conclusionColumns,
        conditionColumns: activeVersion.conditionColumns
      };
    }

    if (table.versions && table.versions.length > 0) {
      return undefined;
    }

    if (!table.parsedResult || !table.parsedConditions) {
      throw new Error(`Decision table '${table.name}' has no typed column metadata`);
    }

    const conclusionColumn: DecisionTableConclusionColumn = {
      type: 'DecisionTableConclusionColumn',
      columnIndex: 0,
      headerText: table.parsedResult.headerText,
      result: table.parsedResult
    };
    const conditionColumns: DecisionTableConditionColumn[] = table.parsedConditions.map((condition, index) => ({
      type: 'DecisionTableConditionColumn',
      columnIndex: index + 1,
      headerText: condition.headerText,
      condition
    }));

    return {
      rows: table.rows,
      conclusionColumns: [conclusionColumn],
      conditionColumns
    };
  }

  private selectActiveVersion(
    versions: DecisionTableVersion[] | undefined,
    evaluationDate: Date
  ): DecisionTableVersion | undefined {
    if (!versions || versions.length === 0) {
      return undefined;
    }
    return versions.find(version => this.isVersionActive(version.version, evaluationDate));
  }

  private isVersionActive(version: RuleVersion, evaluationDate: Date): boolean {
    const time = evaluationDate.getTime();
    const startsBeforeOrAt = !version.start || version.start.getTime() <= time;
    const endsAfterOrAt = !version.end || version.end.getTime() >= time;
    return startsBeforeOrAt && endsAfterOrAt;
  }

  private assignConclusion(result: DecisionTableResult, value: Value, context: RuntimeContext): string {
    if (result.targetType === 'attribute' && result.targetExpression) {
      const targetName = this.extractTargetName(result.targetExpression);
      const currentInstance = context.current_instance;
      if (currentInstance && currentInstance.value) {
        const objData = currentInstance.value as Record<string, Value>;
        objData[targetName] = value;
      } else {
        context.setVariable(targetName, value);
      }
      return targetName;
    }

    if (result.targetType === 'kenmerk') {
      const targetName = result.kenmerkName || 'kenmerk';
      const boolValue = this.asBoolean(value);
      const currentInstance = context.current_instance as any;
      if (currentInstance?.objectType && currentInstance?.objectId) {
        context.setKenmerk(currentInstance.objectType, currentInstance.objectId, targetName, boolValue);
      } else {
        context.setVariable(targetName, { type: 'boolean', value: boolValue });
      }
      return targetName;
    }

    throw new Error('Unknown target type in decision table result');
  }

  private asBoolean(value: Value): boolean {
    if (value.type === 'boolean') {
      return Boolean(value.value);
    }
    throw new Error('Decision table kenmerk conclusion must evaluate to a boolean');
  }

  private extractTargetName(expr: Expression): string {
    // Extract a simple name from the target expression for storage
    switch (expr.type) {
      case 'AttributeReference':
        const path = (expr as any).path;
        // Use the last path element (attribute name) for storage
        // E.g., ['Natuurlijk persoon', 'woonregio factor'] -> 'woonregio factor'
        return path.length > 0 ? path[path.length - 1] : 'result';
      case 'VariableReference':
        return (expr as any).variableName;
      default:
        return 'result';
    }
  }

  private evaluateRow(
    row: DecisionTableRow,
    conditions: DecisionTableConditionColumn[],
    context: RuntimeContext
  ): boolean {
    // Check all conditions
    for (let i = 0; i < conditions.length; i++) {
      const conditionColumn = conditions[i];
      const condition = conditionColumn.condition;
      const cellValue = row.cells?.[conditionColumn.columnIndex]?.value ?? row.conditionValues[i];

      // Skip n.v.t. conditions
      if (cellValue === 'n.v.t.') {
        continue;
      }

      // Handle kenmerk checks specially
      if (condition.isKenmerkCheck) {
        const expectedValue = this.expressionEvaluator.evaluate(cellValue as Expression, context);
        if (!this.compareValues(this.evaluateKenmerkCondition(condition, context), expectedValue, '==', context)) {
          return false;
        }
        continue;
      }

      // Evaluate the subject expression
      if (!condition.subjectExpression) {
        throw new Error(`Decision table condition has no subject expression: ${condition.headerText}`);
      }
      const subjectValue = this.expressionEvaluator.evaluate(condition.subjectExpression, context);

      if (!subjectValue || subjectValue.type === 'null') {
        return false; // Subject not found or null
      }

      // Evaluate the condition value
      const conditionValue = this.expressionEvaluator.evaluate(cellValue as Expression, context);

      // Compare based on operator
      if (!this.compareValues(subjectValue, conditionValue, condition.operator ?? '==', context)) {
        return false;
      }
    }

    return true; // All conditions matched
  }

  private evaluateKenmerkCondition(condition: DecisionTableCondition, context: RuntimeContext): Value {
    const currentInstance = context.current_instance as any;
    if (!currentInstance?.objectType || !currentInstance?.objectId || !condition.kenmerkName) {
      return { type: 'boolean', value: false };
    }
    return {
      type: 'boolean',
      value: context.getKenmerk(currentInstance.objectType, currentInstance.objectId, condition.kenmerkName) === true
    };
  }

  private compareValues(left: Value, right: Value, operator: string, context: RuntimeContext): boolean {
    const registry = (context as any).unitRegistry || this.unitRegistry;
    return compareRuntimeValues(left, operator, right, registry);
  }
}