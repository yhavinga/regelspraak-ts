import { Expression } from './expressions';
import type { RuleVersion } from './rules';

/**
 * Decision table AST nodes for RegelSpraak Beslistabel
 */

export interface DecisionTableCondition {
  type: 'DecisionTableCondition';
  headerText: string; // Original column header text
  columnIndex?: number;
  subjectExpression?: Expression; // The expression to evaluate for the subject
  operator?: string; // Comparison operator
  isKenmerkCheck?: boolean; // Whether this is a kenmerk check
  kenmerkName?: string; // Name of kenmerk for kenmerk checks
  isDagsoortCheck?: boolean; // Whether this is a dagsoortcontrole (§8.1.5)
  dagsoortName?: string; // Day-type name for a dagsoortcontrole
  dagsoortNegated?: boolean; // "is geen <dagsoort>" rather than "is een"
}

export interface DecisionTableResult {
  type: 'DecisionTableResult';
  headerText: string; // Original column header text
  columnIndex?: number;
  targetType: 'attribute' | 'kenmerk'; // Type of assignment
  targetExpression?: Expression; // The target expression to assign to
  kenmerkName?: string; // Name of kenmerk for kenmerk assignments
}

export interface DecisionTableConclusionColumn {
  type: 'DecisionTableConclusionColumn';
  columnIndex: number;
  headerText: string;
  result: DecisionTableResult;
}

export interface DecisionTableConditionColumn {
  type: 'DecisionTableConditionColumn';
  columnIndex: number;
  headerText: string;
  condition: DecisionTableCondition;
}

export type DecisionTableColumn = DecisionTableConclusionColumn | DecisionTableConditionColumn;

export type DecisionTableCellValue = Expression | 'n.v.t.';

export interface DecisionTableCell {
  type: 'DecisionTableCell';
  columnIndex: number;
  value: DecisionTableCellValue;
}

export interface DecisionTableRow {
  type: 'DecisionTableRow';
  rowNumber: number;
  resultExpression: Expression;
  conditionValues: DecisionTableCellValue[]; // n.v.t. = not applicable
  cells?: DecisionTableCell[];
}

export interface DecisionTableVersion {
  type: 'DecisionTableVersion';
  version: RuleVersion;
  validity: string; // Compatibility projection
  columns: DecisionTableColumn[];
  conclusionColumns: DecisionTableConclusionColumn[];
  conditionColumns: DecisionTableConditionColumn[];
  rows: DecisionTableRow[];
}

export interface DecisionTable {
  type: 'DecisionTable';
  name: string;
  versions?: DecisionTableVersion[];
  version?: RuleVersion;
  validity: string; // Compatibility projection
  resultColumn: string; // Header text for result column
  conditionColumns: string[]; // Header texts for condition columns
  rows: DecisionTableRow[];
  // Parsed headers (populated during semantic analysis)
  parsedResult?: DecisionTableResult;
  parsedConditions?: DecisionTableCondition[];
}