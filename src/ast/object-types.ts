/**
 * AST nodes for object type definitions in RegelSpraak
 */

import { SourceLocation } from './location';

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
}

export interface AttributeSpecification {
  type: 'AttributeSpecification';
  name: string;
  dataType: DataType | DomainReference;
  unit?: string;
  dimensions?: string[];
  timeline?: boolean;
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
  | { type: 'Lijst'; specification?: string };

export interface DomainReference {
  type: 'DomainReference';
  domain: string;
}

export interface DomainDefinition {
  type: 'DomainDefinition';
  name: string;
  // Base types match exact lexer token texts from RegelSpraakLexer.g4
  baseType: 'Numeriek' | 'Tekst' | 'Boolean' | 'Datum in dagen' | 'Datum en tijd in millisecondes' | 'Enumeratie';
  unit?: string;
  decimals?: number;
  enumerationValues?: string[];
  location?: SourceLocation;
}