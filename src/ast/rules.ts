/**
 * AST nodes for RegelSpraak rules
 */

import { Expression, AttributeReference } from './expressions';
import { SourceLocation } from './location';
import { DagsoortDefinitie } from './dagsoort';
import { PeriodDefinition } from './timelines';
import { DimensionedAttributeReference } from './dimensions';

export interface Rule {
  type: 'Rule';
  name?: string;  // Make optional for compatibility
  version?: RuleVersion;  // Make optional for compatibility
  resultaat?: ResultPart;  // Also support 'resultaat' property name
  result?: ResultPart;  // Keep for backward compatibility
  voorwaarde?: Voorwaarde;  // Also support 'voorwaarde' property name
  condition?: Voorwaarde; // Keep for backward compatibility
  variables?: VariableAssignment[];  // Optional variable assignments from "Daarbij geldt:" section
  naam?: string;  // Alternative property name
  location?: SourceLocation;  // Set by visitor - guaranteed to exist after parsing
}

export interface VariableAssignment {
  type: 'VariableAssignment';
  name: string;  // Variable name (e.g., 'X', 'Y')
  expression: Expression;  // The expression to evaluate
  location?: SourceLocation;
}

export interface RuleVersion {
  type: 'RuleVersion';
  validity: 'altijd' | 'vanaf' | 'tot'; // Simplified for now
}

export type ResultPart = Gelijkstelling | ObjectCreation | MultipleResults | Kenmerktoekenning | Consistentieregel | Verdeling | FeitCreatie | DagsoortDefinitie;

export interface Gelijkstelling {
  type: 'Gelijkstelling';
  target: AttributeReference | DimensionedAttributeReference; // The attribute being assigned to
  expression: Expression;
  assignmentKind?: 'berekend' | 'gesteld' | 'geinitialiseerd';
  temporalCondition?: PeriodDefinition | Expression;  // §10.3: "van dd. X tot dd. Y" or "gedurende de tijd dat ..."
}

export interface ObjectCreation {
  type: 'ObjectCreation';
  subject: Expression;          // REQUIRED: The onderwerpketen (e.g., "Persoon")
  role: string;                 // REQUIRED: The rolnaam (e.g., "badge")
  objectType: string;           // Resolved from FeitType via role lookup
  attributeInits: Array<{
    attribute: string;
    value: Expression;
  }>;
}

export interface MultipleResults {
  type: 'MultipleResults';
  results: ResultPart[];
}

export interface Kenmerktoekenning {
  type: 'Kenmerktoekenning';
  subject: Expression; // The object to assign the characteristic to
  characteristic: string; // The kenmerk name
  temporalCondition?: PeriodDefinition | Expression;  // §10.3: "van dd. X tot dd. Y" or "gedurende de tijd dat ..."
}

export interface Voorwaarde {
  type: 'Voorwaarde';
  expression: Expression; // The condition expression
}

export interface Consistentieregel {
  type: 'Consistentieregel';
  criteriumType: 'uniek' | 'inconsistent';
  target?: Expression;  // For uniqueness checks (e.g., "de BSN")
  condition?: Expression;  // For conditional inconsistency
}

// Distribution method types
export interface VerdelingMethode {
  type: string;
}

export interface VerdelingGelijkeDelen extends VerdelingMethode {
  type: 'VerdelingGelijkeDelen';
}

export interface VerdelingNaarRato extends VerdelingMethode {
  type: 'VerdelingNaarRato';
  ratioExpression: Expression;
}

export interface VerdelingOpVolgorde extends VerdelingMethode {
  type: 'VerdelingOpVolgorde';
  orderDirection: 'toenemende' | 'afnemende';
  orderExpression: Expression;
}

export interface VerdelingTieBreak extends VerdelingMethode {
  type: 'VerdelingTieBreak';
  tieBreakMethod: VerdelingMethode;
}

export interface VerdelingMaximum extends VerdelingMethode {
  type: 'VerdelingMaximum';
  maxExpression: Expression;
}

export interface VerdelingAfronding extends VerdelingMethode {
  type: 'VerdelingAfronding';
  decimals: number;
  // §9.7.4: "Dit kan in deze situatie alleen naar beneden"
}

export interface Verdeling {
  type: 'Verdeling';
  sourceAmount: Expression;  // What to distribute
  targetCollection: Expression;  // Collection to distribute over
  distributionMethods: VerdelingMethode[];  // Methods and constraints
  remainderTarget?: Expression;  // Where to store remainder
}

export interface FeitCreatie {
  type: 'FeitCreatie';
  role1: string;  // Left side role name (e.g., "passagier met recht op treinmiles")
  subject1: Expression;  // Left side subject reference
  role2: string;  // Right side role name (e.g., "passagier")
  subject2: Expression;  // Right side subject reference (navigation pattern)
}

export interface RegelGroep {
  type: 'RegelGroep';
  name: string;
  isRecursive: boolean;
  rules: Rule[];  // The rules contained in this group
}