import { DataType, DomainReference, TimelineGranularity } from './object-types';
import { SourceLocation } from './location';
import { UnitExpression } from './unit-systems';

/**
 * Parameter definition
 */
export interface ParameterDefinition {
  type: 'ParameterDefinition';
  name: string;
  dataType: DataType | DomainReference;
  unit?: string;
  unitExpression?: UnitExpression;
  /**
   * Timeline granularity from RegelSpraak §3.8.
   * When set, the parameter is time-dependent with the specified granularity.
   */
  timelineGranularity?: TimelineGranularity;
  location?: SourceLocation;  // Set by visitor - guaranteed to exist after parsing
}