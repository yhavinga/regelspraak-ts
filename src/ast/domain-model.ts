/**
 * Domain model - the root AST node containing all parsed RegelSpraak elements
 */

import { ObjectTypeDefinition } from './object-types';
import { ParameterDefinition } from './parameters';
import { Rule, RegelGroep } from './rules';
import { DecisionTable } from './decision-tables';
import { Dimension } from './dimensions';
import { Dagsoort, DagsoortDefinitie } from './dagsoort';
import { DomainReference, DomainDefinition } from './object-types';
import { UnitSystemDefinition } from './unit-systems';
import { FeitType } from './feittype';

export interface DomainModel {
  objectTypes: ObjectTypeDefinition[];
  parameters: ParameterDefinition[];
  regels: Rule[];
  regelGroepen: RegelGroep[];
  beslistabels: DecisionTable[];
  dimensions: Dimension[];
  dagsoorten?: Dagsoort[];
  dagsoortDefinities: DagsoortDefinitie[];
  domains: DomainDefinition[];
  feitTypes: FeitType[];
  unitSystems: UnitSystemDefinition[];
}