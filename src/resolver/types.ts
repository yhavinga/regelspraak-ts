/**
 * Types for expression resolution
 *
 * Resolution annotates AST nodes with semantic information that would
 * otherwise only be available at runtime. This enables:
 * - Static type checking
 * - JDM transpilation
 * - IDE support (hover, go-to-definition)
 */

import { DataType, DomainReference, TimelineGranularity } from '../ast/object-types';

/**
 * Kind of symbol a reference resolves to
 */
export type SymbolKind = 'parameter' | 'variable' | 'attribute' | 'kenmerk' | 'feittype' | 'objecttype' | 'self';

/**
 * Timeline metadata from RegelSpraak §3.8
 * Attached to resolved expressions that reference time-dependent values
 * or that compute time-dependent results.
 */
export interface TimelineInfo {
  /** The timeline granularity: dag, maand, or jaar */
  granularity: TimelineGranularity;
  /**
   * Source of the timeline:
   * - 'attribute': from an AttributeSpecification with timelineGranularity
   * - 'parameter': from a ParameterDefinition with timelineGranularity
   * - 'kenmerk': from a KenmerkSpecification with timelineGranularity
   * - 'expression': computed from time-dependent operands
   */
  source: 'attribute' | 'parameter' | 'kenmerk' | 'expression';
}

/**
 * A resolved symbol - what a reference points to
 */
export interface ResolvedSymbol {
  /** What kind of symbol this is */
  kind: SymbolKind;

  /** The canonical name of the symbol */
  name: string;

  /** For attributes/kenmerken: the ObjectType that declares this member */
  declaringType?: string;

  /** The data type of this symbol's value */
  dataType?: DataType | DomainReference;
}

/**
 * A segment in a resolved navigation path
 */
export interface ResolvedPathSegment {
  /** The name used in the source (may include possessive prefixes) */
  sourceName: string;

  /** The canonical name after resolution */
  resolvedName: string;

  /** What kind of navigation this is */
  kind: 'attribute' | 'feittype' | 'variable' | 'possessive';

  /** ObjectType we're navigating from (or 'context' for root) */
  sourceType: string;

  /** ObjectType we arrive at (or data type name for leaf attributes) */
  targetType: string;

  /** Relationship cardinality: '1' for 1:1, 'N' for 1:N */
  cardinality: '1' | 'N';

  /**
   * For `kind: 'feittype'` segments: the structured identity of the FeitType hop.
   * Carries the canonical (singular) FeitType and role names so downstream
   * consumers (e.g. the Drools transpiler) can map a navigation hop to schema
   * field names without re-resolving which FeitType the hop traverses.
   *
   * - `feitTypeName`: the navigated FeitType (FeitType.naam).
   * - `sourceRoleName`: canonical name of the role we navigate FROM.
   * - `targetRoleName`: canonical name of the role we navigate TO (independent of
   *   whether the source used the singular or a plural alias).
   */
  feitType?: {
    feitTypeName: string;
    sourceRoleName: string;
    targetRoleName: string;
  };
}

export type ResolvedType =
  | DataType
  | DomainReference
  | { type: 'ObjectType'; name: string }
  | { type: 'Period' }
  | { type: 'Timeline' };

/**
 * Resolution metadata attached to Expression nodes
 */
export interface ResolvedInfo {
  /**
   * The type this expression evaluates to.
   * For references: the type of the referenced value.
   * For operators: the result type.
   */
  resolvedType?: ResolvedType;

  /**
   * For references: what symbol this resolves to
   */
  resolvedSymbol?: ResolvedSymbol;

  /**
   * For possessive references: which variable is the owner.
   * e.g., "zijn salaris" → possessiveOwner = "persoon"
   */
  possessiveOwner?: string;

  /**
   * For navigation expressions: the full resolved path.
   * Each segment shows the navigation from source to target.
   */
  resolvedPath?: ResolvedPathSegment[];

  /**
   * Whether this reference involves a 1:N relationship anywhere in the path.
   * Important for transpilation: 1:N requires materialization.
   */
  hasCollectionNavigation?: boolean;

  /**
   * Source-language unit string (e.g. 'jr', 'mnd', 'dg') propagated from
   * the originating AttributeSpecification, ParameterDefinition or NumberLiteral.
   * Required by transpilers for date arithmetic codegen. Absence is meaningful:
   * a Numeriek without a unit cannot be added to a Datum.
   */
  unit?: string;

  /**
   * Timeline metadata from RegelSpraak §3.8.
   * Present when this expression evaluates to a time-dependent value.
   * The transpiler uses this to determine result granularity and validate
   * compatibility between time-dependent operands and targets.
   */
  timeline?: TimelineInfo;

  /**
   * For the base attribute of a dimensioned reference (§3.6): the path with the
   * dimension labels stripped out. The parser-produced `path` keeps its source
   * form; consumers that navigate by path text should prefer this when present.
   */
  cleanedPath?: string[];
}
