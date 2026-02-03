# Architecture

## Pipeline

```
Source (.rs)
    |
    v
ANTLR Lexer/Parser (src/_generated/antlr/)
    |
    v
Visitor (src/_visitors/regelspraak-visitor-impl.ts)
    |
    v
AST (src/ast/)
    |
    v
Semantic Analysis (src/semantic-analyzer.ts)
    |
    v
Runtime Context (src/context.ts)
    |
    v
Execution Engine (src/engine.ts)
```

## Module Dependency Graph

```
                        index.ts
                           |
                           v
    +------------------------------------------+
    |               engine.ts                   |
    |          (main orchestrator)              |
    +------------------------------------------+
           |              |              |
           v              v              v
    parser.ts      context.ts      semantic-analyzer.ts
           |              |
           v              v
    _visitors/      evaluators/
           |              |
           v              v
    _generated/     executors/
                          |
                          v
                    predicates/
                          |
                          v
                      units/
```

All modules depend on `ast/` and `interfaces/`.

## Grammar Implementation

### Token Strategy

RegelSpraak is a Dutch natural-language DSL. Dutch free word order would cause ANTLR lookahead explosion without aggressive tokenization. The grammar uses ~300 multi-word tokens to prevent ambiguous parse trees.

```antlr
IS_GROTER_OF_GELIJK_AAN: 'is groter of gelijk aan';
```

Multi-word tokens MUST precede their constituents in lexer order. ANTLR's longest-match-first rule makes this mandatory. Reordering breaks parsing.

### Grammar Files

- `grammar/RegelSpraakLexer.g4` - Lexer with ~300 tokens
- `grammar/RegelSpraak.g4` - Combined parser grammar

Generated output in `src/_generated/antlr/`:
- `RegelSpraakLexer.ts`
- `RegelSpraakParser.ts`
- `RegelSpraakVisitor.ts`

### Whitespace Handling

```antlr
WS: [ \t\r\n]+ -> channel(HIDDEN);
```

Not skipped - sent to HIDDEN channel. Preserves formatting for multi-word token reconstruction.

### Grammar/Visitor Trade-off

Grammar is intentionally permissive. Disambiguation happens in the visitor (`RegelSpraakVisitorImpl`) rather than the grammar. A pure grammar solution would require excessive lookahead and become unmaintainable.

## Visitor Pattern

`src/_visitors/regelspraak-visitor-impl.ts` transforms ANTLR parse tree to AST nodes.

### Stateful Traversal

The visitor maintains a `DomainModel` that mutates during tree walking. Definitions parsed early immediately influence later disambiguation:

```typescript
class RegelSpraakVisitorImpl {
  private domainModel: DomainModel;
  private objectTypeAttributes: Map<string, string[]>;
  // ...
}
```

### Parameter Tracking

A `parameter_names` set shared across visitor methods distinguishes parameters from attributes. Without this, "de leeftijd" would be ambiguous in every context.

### Reference Disambiguation

"de leeftijd" could be:
1. A parameter
2. A variable in scope
3. An attribute of current object

Resolution order:
1. Check `parameter_names` set
2. Check local variable scope
3. Assume attribute reference (requires `VAN` clause)

## AST Design

### Node Types

All AST nodes are TypeScript interfaces in `src/ast/`:

- `domain-model.ts` - Top-level model container
- `expressions.ts` - Expression nodes
- `rules.ts` - Rule definitions
- `object-types.ts` - Object type definitions
- `parameters.ts` - Parameter definitions
- `decision-tables.ts` - Beslistabel structures
- `timelines.ts` - Timeline/temporal nodes
- `dimensions.ts` - Dimension definitions
- `feittype.ts` - Relationship type definitions

### Location Tracking

All nodes include optional `location` field:

```typescript
interface SourceLocation {
  startLine: number;
  startColumn: number;
  endLine: number;
  endColumn: number;
}
```

### Value Objects

All runtime values wrapped in `Value`:

```typescript
interface Value {
  type: 'number' | 'string' | 'boolean' | 'date' | 'null' | 'object' | 'list';
  value: any;
  unit?: { name: string };
}
```

Enables unit arithmetic and null propagation without special-casing.

## Engine Architecture

`src/engine.ts` is the main orchestrator (~1500 lines).

### Entry Points

```typescript
class Engine {
  parseModel(source: string): ParseResult;
  parse(source: string): ParseResult;  // Single expression
  execute(model: DomainModel, context: Context): ExecutionResult;
}
```

### Execution Flow

1. `parseModel()` tokenizes and parses source via `AntlrParser`
2. Visitor builds `DomainModel` AST
3. `SemanticAnalyzer` validates references and types
4. `Context` created and populated with initial state
5. `execute()` iterates rules in definition order
6. Each rule evaluates conditions via `ExpressionEvaluator`
7. Matching rules fire via `RuleExecutor`
8. Context updated with results

### Component Delegation

Engine delegates to specialized components:

- `ExpressionEvaluator` - All expression evaluation
- `RuleExecutor` - Rule firing logic
- `DecisionTableExecutor` - Beslistabel execution
- `TimelineEvaluator` - Temporal expressions
- `AggregationEngine` - Aggregation functions (som, aantal, etc.)

## Context (Runtime State)

`src/context.ts` holds execution state:

```typescript
class Context {
  // Variable scopes (stack for nested contexts)
  private scopes: Map<string, Value>[];

  // Objects by type
  private objects: Map<string, Map<string, any>>;

  // Relationships (Feittype instances)
  private relationships: Relationship[];

  // Execution trace
  private executionTrace: string[];

  // Current object being processed
  current_instance: Value | undefined;

  // Evaluation date for timeline rules
  evaluation_date: Date;
}
```

### Object Management

```typescript
createObject(typeName: string, id: string, attrs: Record<string, Value>): void;
getObjectsByType(typeName: string): Value[];
getAttribute(object: Value, attrName: string): Value;
setAttribute(object: Value, attrName: string, value: Value): void;
```

### Relationship Management

```typescript
addRelationship(feittypeNaam: string, subject: Value, object: Value): void;
getRelatedObjects(feittypeNaam: string, subject: Value): Value[];
```

## Expression Evaluation

`src/evaluators/expression-evaluator.ts` handles all expression types.

### Supported Expressions

- Arithmetic: `+`, `-`, `*`, `/`, `^`, `%`
- Comparison: `=`, `<>`, `<`, `>`, `<=`, `>=`
- Logical: `en`, `of`, `niet`
- Aggregation: `som van`, `aantal`, `gemiddelde`, `minimum`, `maximum`
- Navigation: `X van de Y`
- Subselectie: `alle X die Y`
- Timeline: `voor elke dag`, `gedurende`

### Unit Arithmetic

Uses `src/units/` for dimensional analysis:

```typescript
3 km + 500 m = 3.5 km
100 EUR / 5 dagen = 20 EUR/dag
```

`UnitRegistry` implements hub-and-spoke conversion via base units.

## Rule Execution

`src/executors/rule-executor.ts` handles rule types:

- `Gelijkstelling` - Attribute assignment
- `Kenmerktoekenning` - Boolean kenmerk assignment
- `Consistentieregel` - Validation rules (throw on violation)
- `Verdeling` - Distribution rules
- `ObjectCreation` - Create new objects
- `FeitCreatie` - Create relationships

### Distribution Rules (Verdeling)

Complex allocation logic:
- `op volgorde van` - Ordered allocation
- `naar rato van` - Proportional allocation
- `in gelijke delen` - Equal distribution
- `met maximum` - Per-recipient caps
- `afgerond naar` - Rounding modes

## Key Design Decisions

### Flattened Structure

Top-level modules at `src/`:
- `engine.ts` (not `engine/engine.ts`)
- `context.ts` (not `runtime/context.ts`)
- `parser.ts` (not `parsers/antlr-parser.ts`)

Internal modules prefixed with underscore:
- `_generated/` - ANTLR output
- `_visitors/` - Visitor implementations

Rationale: Minimize import path depth, obvious public vs internal.

### Optional Express

Express in `optionalDependencies`. Server code isolated to `src/server/`. CLI users don't install Express unless they use `serve` command.

### No Autocomplete

Removed `antlr4-c3` dependency. Autocomplete belongs in VSCode extension, not core library. Keeps dependencies minimal.

## Grammar Gotchas

From experience maintaining this parser:

1. **Token order is sacred** - Never reorder lexer tokens. Precedence is load-bearing.

2. **Multi-word before constituents** - `IS_GROTER_DAN` must come before `IS` and `GROTER`.

3. **Grammar deliberately permissive** - Expect complex visitor logic. The grammar accepts linguistically plausible constructs; the visitor applies business logic.

4. **Parse order matters** - Definitions must precede usage. The visitor's stateful `DomainModel` enforces this.

5. **HIDDEN channel mandatory** - Changing WS to skip breaks multi-word token reconstruction.

6. **Reserved words in identifiers** - Dutch speakers expect "vlucht" (flight) as identifier even though it's a keyword in some contexts.

## Extension Points

### TraceSink

Implement custom execution monitoring:

```typescript
interface TraceSink {
  trace(event: string): void;
}
```

### UnitRegistry

Register custom units:

```typescript
const registry = new UnitRegistry();
registry.registerUnit('foo', baseUnit, conversionFactor);
```

### Function Registry

Engine maintains function registry for aggregation and built-in functions. Extend via engine internals (not yet public API).

## Performance Notes

- Interpreted execution model, no compilation
- DFA from ~300 tokens is large but eliminates backtracking
- Timeline operations can be memory-intensive (expand to daily values)
- Aggregations compute lazily per dimension

Suitable for rule sets up to moderate complexity. Not designed for high-throughput transaction processing.

## File Reference

| File | Purpose |
|------|---------|
| `src/engine.ts` | Main orchestrator |
| `src/context.ts` | Runtime state |
| `src/parser.ts` | ANTLR facade |
| `src/semantic-analyzer.ts` | Validation |
| `src/evaluators/expression-evaluator.ts` | Expression evaluation |
| `src/evaluators/timeline-evaluator.ts` | Temporal expressions |
| `src/evaluators/aggregation-engine.ts` | Aggregation functions |
| `src/executors/rule-executor.ts` | Rule firing |
| `src/executors/decision-table-executor.ts` | Beslistabel |
| `src/executors/feit-executor.ts` | Relationship creation |
| `src/_visitors/regelspraak-visitor-impl.ts` | Parse tree to AST |
| `src/_generated/antlr/*` | ANTLR output |
| `grammar/*.g4` | ANTLR grammars |
