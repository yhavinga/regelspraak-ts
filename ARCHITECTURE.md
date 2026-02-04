# Architecture

RegelSpraak is a Dutch natural-language DSL for business rules. This codebase implements an ANTLR4 lexer/parser for RegelSpraak v2.1.0, a stateful visitor that builds an AST and domain model, optional semantic validation, and an interpreted execution engine with rules, decision tables, timelines, aggregations, and relationships.

**Pipeline**
```
Source (.rs)
-> ANTLR Lexer/Parser (grammar/*.g4, src/_generated/antlr/*)
-> Visitor (src/_visitors/regelspraak-visitor-impl.ts)
-> AST + DomainModel (src/ast/*)
-> Optional Semantic Analysis (src/semantic-analyzer.ts)
-> Runtime Context (src/context.ts)
-> Execution Engine (src/engine.ts)
```

**Repository Map**
- `grammar/` ANTLR lexer + parser grammars.
- `src/_generated/antlr/` generated ANTLR TypeScript parser.
- `src/_generated/multiword-keywords.*` generated multi-word token data.
- `src/_visitors/` parse tree to AST visitor.
- `src/ast/` AST node types and domain model.
- `src/engine.ts` execution orchestration.
- `src/context.ts` runtime state and storage.
- `src/evaluators/` expression, aggregation, timeline evaluators.
- `src/executors/` rule, decision table, relationship executors.
- `src/predicates/` unified predicate model + evaluator.
- `src/units/` unit registry and arithmetic.
- `src/utils/` navigation and timeline utilities.
- `src/server/` REST API server.
- `src/cli.ts` CLI entry.

**Build and Generation**
- Regenerate the ANTLR parser with `make parser`.
- This runs `antlr4` and `scripts/extract-multiword.js`.
- Do not edit files under `src/_generated/` by hand.

**Grammar and Lexer Design**
- RegelSpraak uses natural Dutch phrasing. The grammar is deliberately permissive.
- Disambiguation happens in the visitor and evaluator layers, not in the grammar.
- Lexer uses aggressive multi-word tokens to avoid ANTLR lookahead explosion.
- Token order is load-bearing. Longer multi-word tokens must appear before their constituents.
- Whitespace is sent to the HIDDEN channel, not skipped. Example: `WS: [ \t\r\n]+ -> channel(HIDDEN);`.
- Some tokens are intentionally removed or disabled to allow natural attribute names.
- Multi-word token list is generated at build time from the lexer via `scripts/extract-multiword.js`.

**Parser Entry Points**
- `AntlrParser.parseModel()` parses a full document and returns a `DomainModel`.
- `Engine.parse()` selects a parse mode based on detected keywords.
- `AntlrParser.parseExpression()` parses a single expression with extra validation (e.g., missing function arguments).

**Visitor Architecture**
The visitor (`src/_visitors/regelspraak-visitor-impl.ts`) is stateful by design.
- It builds a mutable `DomainModel` during traversal.
- Definitions must appear before use. There is no forward declaration.
- It tracks `parameterNames` to disambiguate parameters vs attributes in ambiguous phrases.
- It tracks `objectTypeAttributes` to avoid splitting valid compound attribute names.
- It tracks `feitTypes` for relationship resolution.
- It reads raw input text to preserve tabs and spacing when the token stream loses them.
- It attaches `location` to all AST nodes using `createSourceLocation()`.

**AST and Domain Model**
- Root model: `DomainModel` in `src/ast/domain-model.ts`.
- Major node categories include definitions, rules and rule groups, decision tables, expressions, and predicates.
- `AttributeReference.path` is object-first order, consistent with Dutch right-to-left navigation.
- Example path: `['Vlucht', 'passagier', 'leeftijd']`.
- `DimensionedAttributeReference` wraps a base reference plus dimension labels.
- All nodes include `location` with 1-based line and 0-based column offsets.

**Value Model**
- `Value` is the universal runtime value.
- Types: `number`, `string`, `boolean`, `date`, `object`, `list`, `array`, `null`, `timeline`.
- Units are attached via `unit: { name, symbol? }`.
- Objects are plain attribute maps plus identity fields on the `Value` wrapper.
- Kenmerken are stored separately from attributes in the runtime context.

**Semantic Analysis**
- `SemanticAnalyzer` provides two passes: collect definitions into a symbol table, then validate references and types.
- It is optional and not run by the CLI or Engine by default.
- It validates rules, rule groups, decision tables, parameters, object types, dimensions, and dagsoorten.
- It currently rejects complex subjects for conditional kenmerk assignments.

**Runtime Context**
`Context` is the mutable execution state.
- Variable scopes: a stack of `Map<string, Value>`.
- Objects: `Map<objectType, Map<objectId, attributes>>`.
- Kenmerken: separate `Map` keyed by type/id with boolean values.
- Relationships: `FeitType` definitions + instance list.
- Timeline attributes and parameters stored separately.
- `current_instance` drives object-scoped evaluation and pronoun resolution.
- `evaluation_date` is required for timeline semantics.
- Rule execution tracking uses `executedRules` (gevuurd) and `inconsistentRules` (inconsistent).
- Canonicalization strips articles and normalizes type names to reduce lookup failures.

**Execution Engine**
`Engine.execute()` is the orchestration point. It accepts a `DomainModel`, a single AST node, or an array of definitions.

For a full `DomainModel`, execution phases are:
1. Register unit systems into the `UnitRegistry`.
2. Register FeitTypes in the `Context`.
3. Decision tables phase 1: execute per instance to populate lookup values.
4. Rules phase: execute rules in definition order.
5. Decision tables phase 3: re-run tables that depend on rule outputs.
6. Gelijkstelling phase 4: re-run equality assignments that depend on decision tables.
7. RegelGroepen execute in sequence.

Object-scoped rule execution:
- `Engine` deduces a target object type for each rule.
- If a target is found, the rule is evaluated for every instance of that type.
- `current_instance` is set during each iteration.

**Target Type Deduction**
Target type deduction is heuristic and best-effort.
- `Engine.deduceRuleTargetType()` scans the rule result and condition for object type hints.
- It uses object type capitalization, attribute paths, and FeitType role mappings.
- Decision table targets are inferred from column headers and parsed header expressions.
- Ambiguous cases can produce incorrect targeting. There is no strict compile-time guarantee.

**Expression Evaluation**
`ExpressionEvaluator` handles all expression types.
- Binary and unary ops: arithmetic, logical, comparison, and domain-specific operators.
- Built-in functions include `sqrt`, `abs`, `aantal`, `som`, `som_van`, `maximum_van`, `minimum_van`, `tijdsduur_van`, `abs_tijdsduur_van`, `aantal_dagen_in`, `maand_uit`, `dag_uit`, `jaar_uit`, `datum_met`, `eerste_van`, `laatste_van`, and `eerste_paasdag_van`.
- Navigation and pronoun resolution use `self` for the `current_instance` and fall back to FeitType relationships.
- Null and empty handling is permissive. Missing attributes often return `null` or empty arrays, and some arithmetic paths degrade nulls to 0.
- Disjunction/conjunction expressions return `array` values. Disjunction extraction can use `context.sourceText` when available.

**Aggregation**
- Aggregations are evaluated by `AggregationEngine`.
- Supported types: `som`, `aantal`, `maximum`, `minimum`, `eerste`, `laatste`.
- Dimension ranges use `DimensionRegistry` for label ordering.
- Some dimensional aggregation paths are simplified and require nested object structures.

**Timeline Evaluation**
- Timeline values are `TimelineValueImpl` with ordered `Period`s.
- `TimelineEvaluator` supports `totaal`, `aantal_dagen`, `naar_verhouding`, `tijdsevenredig_deel_per_maand`, and `tijdsevenredig_deel_per_jaar`.
- Timeline utilities handle knip merging, period alignment, and proportional values.

**Rule Execution**
`RuleExecutor` executes all rule result types.
- Variable assignments (`Daarbij geldt`) are evaluated before conditions.
- Conditions are evaluated to a strict boolean for most rule types.
- Kenmerk assignment is stored in the context's kenmerken map, not as attributes.
- Conditional kenmerk rules write `true` or `false`.
- Object creation uses `Context.generateObjectId()` when no id is provided.
- Feit creation uses `FeitExecutor` to build relationships and avoids duplicates. Reciprocal FeitTypes are supported.
- Consistency rules implement `uniek` and `inconsistent` via predicate evaluation and context rule tracking.
- Verdeling defaults to equal distribution with optional ratio, ordering, tie-breakers, maximum caps, and rounding. Remainders can be stored to a target attribute.

**Decision Tables**
- Decision tables parse headers using `DecisionTableHeaderParser` regex patterns.
- Row evaluation uses `ExpressionEvaluator` plus a unit-aware comparator.
- `n.v.t.` cells are skipped.
- Results are written to `current_instance` when object-scoped.
- Unit conversion in decision tables is approximate and limited.

**Units and Arithmetic**
- `UnitRegistry` ships with standard systems (Time, Currency).
- Custom unit systems from the model are registered at execution time.
- `performUnitArithmetic` handles compatible unit operations.
- Decision table conversions use a simplified fallback path.

**Predicates**
- Unified predicate types are in `src/predicates/predicate-types.ts`.
- `PredicateEvaluator` handles comparison operators, kenmerk checks, dagsoort checks, elfproef validation, uniqueness checks, and regel status checks.
- Compound predicates implement quantifiers: alle, geen, ten minste, ten hoogste, precies.

**CLI and REST**
- CLI is in `src/cli.ts` and exposes `validate`, `run`, `serve`.
- CLI and server parse JSON input into `Value` objects and populate `Context`.
- Both do not run `SemanticAnalyzer` by default.
- REST server is Express-based and optional via peer dependency.

**Critical Invariants**
- Token order in `RegelSpraakLexer.g4` is sacred.
- Whitespace must remain on the HIDDEN channel.
- Visitor must remain stateful for parameter and attribute disambiguation.
- `current_instance` is required for object-scoped rule evaluation and pronoun resolution.
- `DomainModel` definitions must precede references.

**Known Limitations and Gaps**
- Power operator (`^`) is parsed but not supported in the visitor.
- Pronoun expression parsing uses fallbacks for some contexts.
- `Tekstreeks` uses a string literal fallback in some paths.
- Dagsoort evaluation is hardcoded and not model-driven.
- Decision table unit conversion is approximate.
- `AggregationParser` and `RuleParser` are not used by the engine and are incomplete.
- `DomainModel.feitTypes` is typed as `any[]` in `DomainModel` (actual type exists in `ast/feittype.ts`).
- Disjunction parsing can require `context.sourceText` for correctness.

**Performance Characteristics**
- Interpreted execution model, no compilation or caching.
- Large multi-word token DFA yields predictable parsing at the cost of memory.
- Decision tables execute per row per object instance.
- Timeline operations may expand and merge many periods.
- `Context.clone()` is deep and non-trivial in cost.

**Extension Checklist**
- Grammar changes: update `grammar/*.g4`, keep token order intact, regenerate with `make parser`.
- Visitor changes: update AST construction and location assignment, keep parameter and attribute disambiguation consistent.
- Runtime changes: update evaluators and executors in lock-step with AST changes.
- Tests: add parse and execution coverage for any new grammar or semantics.
