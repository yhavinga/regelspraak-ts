/**
 * AST nodes for object type definitions in RegelSpraak
 */

import { SourceLocation } from './location';
import { UnitExpression } from './unit-systems';

export interface ObjectTypeDefinition {
  type: 'ObjectTypeDefinition';
  name: string;
  plural?: string[];
  animated?: boolean; // bezield
  members: ObjectTypeMember[];
  location?: SourceLocation;  // Set by visitor - guaranteed to exist after parsing
}

export type ObjectTypeMember = KenmerkSpecification | AttributeSpecification;

export interface KenmerkSpecification {
  type: 'KenmerkSpecification';
  name: string;
  kenmerkType?: 'bijvoeglijk' | 'bezittelijk';
  /**
   * Timeline granularity from RegelSpraak §3.8.
   * When set, the kenmerk is time-dependent with the specified granularity.
   */
  timelineGranularity?: TimelineGranularity;
}

/**
 * Timeline granularity as specified in RegelSpraak §3.8
 * - 'dag': voor elke dag
 * - 'maand': voor elke maand
 * - 'jaar': voor elk jaar
 */
export type TimelineGranularity = 'dag' | 'maand' | 'jaar';

export interface AttributeSpecification {
  type: 'AttributeSpecification';
  name: string;
  dataType: DataType | DomainReference;
  unit?: string;
  unitExpression?: UnitExpression;
  dimensions?: string[];
  /**
   * Timeline granularity from RegelSpraak §3.8.
   * When set, the attribute is time-dependent with the specified granularity.
   */
  timelineGranularity?: TimelineGranularity;
}

// Numeric constraint types - derived from ANTLR grammar tokens
export type SignConstraint = 'negatief' | 'niet-negatief' | 'positief';
export type NumberFormat = 'geheel getal' | 'getal';

export interface NumericSpecification {
  signConstraint?: SignConstraint;
  format: NumberFormat;
  decimals?: number;  // only for 'getal met N decimalen'
}

export type DataType =
  | { type: 'Tekst' }
  | { type: 'Numeriek'; numericSpec?: NumericSpecification }
  | { type: 'Boolean' }
  | { type: 'Datum' }
  | { type: 'DatumTijd' }
  | { type: 'Percentage'; numericSpec?: NumericSpecification }
  | { type: 'Lijst'; elementType: ListElementType };

export type ListElementType = DataType | DomainReference | NamedTypeReference | ObjectTypeReference;

export type DeclaredValueType = DataType | DomainReference | NamedTypeReference;

export interface DomainReference {
  type: 'DomainReference';
  domain: string;
}

export interface NamedTypeReference {
  type: 'NamedTypeReference';
  name: string;
}

export interface ObjectTypeReference {
  type: 'ObjectType';
  name: string;
}

export interface DomainDefinition {
  type: 'DomainDefinition';
  name: string;
  // Base types match exact lexer token texts from RegelSpraakLexer.g4
  baseType: 'Numeriek' | 'Tekst' | 'Boolean' | 'Datum in dagen' | 'Datum en tijd in millisecondes' | 'Enumeratie';
  unit?: string;
  unitExpression?: UnitExpression;
  decimals?: number;
  enumerationValues?: string[];
  location?: SourceLocation;
}