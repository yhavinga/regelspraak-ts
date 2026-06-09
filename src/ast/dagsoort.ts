/**
 * AST nodes for RegelSpraak dagsoort (day type) definitions
 */

import { Expression } from './expressions';

export function normalizeDagsoortName(name: string): string {
  return name
    .trim()
    .replace(/^(de|het|een)\s+/i, '')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

export interface Dagsoort {
  type: 'Dagsoort';
  name: string;
  canonicalName: string;
  plural?: string;
  canonicalPlural?: string;
}

export interface DagsoortDefinitie {
  type: 'DagsoortDefinitie';
  dagsoortName: string;
  canonicalDagsoortName: string;
  condition?: Expression;
}