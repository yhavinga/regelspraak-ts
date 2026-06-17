# RegelSpraak TypeScript

ANTLR4-based parser and execution engine for RegelSpraak v2.1.0 (Dutch DSL for business rules).
Split from [regelspraak-parser](https://github.com/yhavinga/regelspraak-parser) for independent NPM packaging.

## Specification

| Document | PDF | Markdown |
|----------|-----|----------|
| RegelSpraak Specificatie v2.1.0 | [PDF](https://github.com/yhavinga/regelspraak-parser/blob/main/specification/RegelSpraak-specificatie%20v2.1.0.pdf) | [MD](https://github.com/yhavinga/regelspraak-parser/blob/main/specification/RegelSpraak-specificatie%20v2.1.0.md) |
| Typeringen v2.1.0 | [PDF](https://github.com/yhavinga/regelspraak-parser/blob/main/specification/RegelSpraak-specificatie%20-%20typeringen%20v2.1.0.pdf) | [MD](https://github.com/yhavinga/regelspraak-parser/blob/main/specification/RegelSpraak-specificatie%20-%20typeringen%20v2.1.0.md) |
| Syntaxdiagrammen v2.1.0 | [PDF](https://github.com/yhavinga/regelspraak-parser/blob/main/specification/RegelSpraak-specificatie%20-%20syntaxdiagrammen%20v2.1.0.pdf) | [MD](https://github.com/yhavinga/regelspraak-parser/blob/main/specification/RegelSpraak-specificatie%20-%20syntaxdiagrammen%20v2.1.0.md) |
| TOKA Casus v2.1.0 | — | [MD](https://github.com/yhavinga/regelspraak-parser/blob/main/specification/RegelSpraak-TOKA-casus-v2.1.0.md) |

## Installation

```bash
npm install
npm run build
```

For global CLI access:

```bash
npm link
```

## Quick Start (CLI)

`rules.rs`
```rs
Objecttype de Persoon (bezield)
    is minderjarig kenmerk (bijvoeglijk);
    de leeftijd Numeriek;

Regel Minderjarigheid
geldig altijd
    Een Persoon is minderjarig indien
        zijn leeftijd kleiner is dan 18.
```

`input.json`
```json
{
  "objects": {
    "Persoon": [
      {"id": "p1", "leeftijd": 12}
    ]
  }
}
```

Run:
```bash
regelspraak run rules.rs --data input.json
```

Output:
```json
{
  "success": true,
  "objects": {
    "Persoon": {
      "p1": {"leeftijd": 12, "is minderjarig": true}
    }
  },
  "fired_rules": ["Minderjarigheid"]
}
```

## CLI

```bash
regelspraak <command> [options]
```

Commands:
```bash
regelspraak validate <files...>
regelspraak run <files...> --data <json>
regelspraak serve <files...>
```

Options:
```bash
--data <file>    JSON input (optional for run)
--port <number>  Port for serve (default: 3000)
--cors           Enable CORS for serve
--help           Show help
```

Notes:
- Multiple `.rs` files are concatenated in order.
- `run` executes with an empty context if `--data` is omitted.

## Input Data Model

Input JSON fields:
- `rekendatum`: ISO date string (YYYY-MM-DD), used as evaluation date.
- `parameters`: map of parameter name to value.
- `objects`: map of object type to array of instances, each with `id` and attributes.
- `relationships`: array of `{type, from, to, fromType?, toType?}` using object ids.

Value encoding:
- Numbers, booleans, and strings map to `number`, `boolean`, and `string` values.
- ISO date strings map to date values.
- Unit values can be `{"value": 18, "unit": "jr"}`.

Example schema:
```json
{
  "rekendatum": "2024-07-15",
  "parameters": {
    "volwassenleeftijd": {"value": 18, "unit": "jr"}
  },
  "objects": {
    "Persoon": [
      {"id": "p1", "leeftijd": 25, "geboortedatum": "1999-03-15"}
    ]
  },
  "relationships": [
    {"type": "vlucht van natuurlijke personen", "from": "v1", "to": "p1"}
  ]
}
```

## Output Model

```json
{
  "success": true,
  "objects": {
    "Persoon": {
      "p1": {"leeftijd": 25, "is minderjarig": false}
    }
  },
  "fired_rules": ["Minderjarigheid"]
}
```

## Error Model

On failure, the CLI returns JSON and exits with code 1.

Parse/validate errors:
```json
{
  "success": false,
  "errors": ["..."]
}
```

Execution errors:
```json
{
  "success": false,
  "error": "..."
}
```

## Library API

```ts
import { Engine, Context } from 'regelspraak';

const engine = new Engine();
const parse = engine.parseModel(source);

if (parse.success) {
  const context = new Context(parse.model);
  context.createObject('Persoon', 'p1', {
    leeftijd: { type: 'number', value: 25 }
  });
  engine.execute(parse.model, context);
}
```

Public entrypoints:
- `regelspraak` exports the engine, context, parser, analyzer, evaluator, AST types, and interfaces.
- `regelspraak/server` exports the REST server helpers.

## REST Server

Express is optional and required only for the server:

```bash
npm install express
```

Start:
```bash
regelspraak serve gegevens.rs regels.rs --port 3000 --cors
```

Programmatic:
```ts
import { Engine } from 'regelspraak';
import { startServer } from 'regelspraak/server';

const engine = new Engine();
const result = engine.parseModel(source);

startServer({
  model: result.model,
  engine,
  files: ['rules.rs'],
  port: 3000,
  cors: true
});
```

Endpoints:
- `GET /api/` health check.
- `GET /api/model` model metadata.
- `POST /api/validate` validate input against the model.
- `POST /api/execute` execute rules with input JSON.

## Examples

See `examples/quickstart/README.md` and `examples/toka/`.

## Grammar & spec notes (hard-won)

The one thing to understand before touching this code: **the pipeline is parse → resolve →
execute, and the resolver is where meaning lives.** The grammar parses RegelSpraak *loosely* —
Dutch lets one surface phrase carry several readings, so the parser deliberately keeps ambiguous
forms together and lets the resolver decide what they mean from declared types. The engine no
longer re-derives any of this: it resolves a model, then *executes the annotated tree the resolver
produced*. Parser, resolver, transpiler and runtime all read one IR.

The spec is the oracle; the engine runtime is a fallible cross-check — when they disagree, fix the
parser/resolver, not the spec.

### The spec is the oracle, and it lives in-repo

- **Vendored, versioned spec corpus.** `specification/v2.1.0/` and `specification/v2.3.0/` hold the
  Markdown + PDF of the specificatie, the syntaxdiagrammen (EBNF + railroad), and the typeringen
  (datatype matrices), plus the TOKA casus. `specification/conversion/` carries the PDF→Markdown
  pipeline and `SPEC_CONVERSION_HOWTO.md`. Cite these local files, not a sibling checkout — and
  note that section *numbers* drift between editions, so anchor references by title, not by §-number.
- **For the predicate surface, Tabel 16 is the complete enumeration; the syntaxdiagrammen EBNF is a
  secondary cross-check.** Tabel 16 (§8 *Condities en predicaten*) hand-lists every predicate's four
  mood/number schrijfwijzen; the formal productions — a PDF→Markdown rendering — drop some, so where
  the two disagree on the predicate surface, follow the table. The lexer tokenizes the full table
  surface, including the verb-last regel-status `gevuurd is` / `inconsistent is` the EBNF omits, and
  where the two give a different surface for one form the loose parser accepts both. Adding a form is
  cheap and semantics-free — a lexer token, a `comparisonOperator`/`unaryCondition` alternative, and a
  `mapComparisonOperatorText` case — because the visitor folds every variant onto the symbol its
  verb-first sibling produces, with no resolver/engine/transpiler change. (This is narrower than the
  rule that the formal EBNF outranks the §13.4.16 example *stencils* — that still holds; it is the
  syntaxdiagrammen *rendering* of the predicate productions, specifically, that Tabel 16 beats.)

### The grammar parses loosely; the resolver assigns meaning

- **One surface phrase, several readings — decided at resolution.** `X is een <noun>` parses to a
  single dagsoortcontrole node wherever it appears (a top-level `indien …` condition, a value
  position, a decision-table header). The resolver then classifies it *three* ways from the left
  operand's type: a declared **dagsoort**, else a **kenmerk** on that type, else a **rol** the
  subject can fill — re-tagging the node so downstream reads the right check, and erroring
  "Unknown dagsoort, kenmerk or rol" when it is none. Disambiguate structurally where the grammar
  can (an article `een`/`geen`, a trailing `heeft`); resolve the rest.
- **The resolver annotates; it never rewrites.** Resolution decorates AST nodes with a `resolved`
  side-channel (type, symbol, cleaned navigation path, exact unit-conversion factors, timeline and
  whole-period markers) and leaves the source form untouched. Execution reads `resolved.*`; the
  transpiler reads the source fields to preserve author intent — that split is what lets generated
  code stay faithful while the engine runs the optimized tree. Resolution is best-effort: a model
  with unresolved bindings still runs, so adding a stricter check never silently breaks a model
  that worked before.
- **Type rules are the typeringen matrix, enforced at resolution.** The visitor folds date-ordering
  (`later`/`eerder dan`) and numeric (`kleiner`/`groter dan`) onto the same `<`/`>` symbols, so the
  *resolver* enforces families: Numeriek + Percentage are one ordinal family, Datum + DatumTijd
  another; cross-family comparisons are rejected, and `DomainReference` operands are dereferenced to
  their base type first. Unresolved operands fail *open* so a resolution gap never masquerades as a
  type error.

### Lexing Dutch: operators fuse, names sprawl

- **Multiword operators are single tokens** (`IS_GELIJK_AAN`, `GROTER_IS_DAN`, `IS_LEEG`), so a
  bare `IS` in a rule alternative never collides with them. Multi-word *names* use `naamwoord`, not
  `identifier` — a day-type/kenmerk like "tweede paasdag" is one name, not three tokens.
- **A fused operator de-fuses when a token splits it.** `is groter dan` is one `IS_GROTER_DAN`
  token only while contiguous; insert a qualifier (`is gedurende het gehele jaar groter dan`) and
  it lexes as `IS` + `GROTER_DAN`. So the §8.2 whole-period prefix is handled by a grammar
  alternative over the *bare* operator — no new lexer tokens, no lexer surgery.
- **Hidden whitespace is significant.** The spec layout separates an attribute name from its
  datatype with a TAB; the attribute rule must accept an optional `TAB?`, or hand-written
  tab-indented models fail on the very first attribute.

### Parse-order traps

- **A subordinate clause will silently eat `<datum> een <noun> is`** as a kenmerk and *drop the
  datum operand* — resolution can't recover what the parse threw away. The fix is ordering: a
  dedicated alternative placed *ahead* of the subordinate clause captures the operand.
- **Verb-first and verb-last both parse; only verb-last is the spec form for a kenmerk-check.**
  `hij is volwassen` (verb-second) and `hij volwassen is` (verb-last) both resolve to a Boolean
  predicate, but verb-last is what the spec endorses — which is why the verb-first slot is free for
  the dagsoortcontrole without colliding with a *working* kenmerk reading.
- **Match declared names longest-first.** The `van`-splitter peels navigation at every `van <art>`;
  test "is this a declared attribute?" before each peel so `leeftijd van de oudste passagier`
  resolves as one attribute, not a `leeftijd ← passagier ← reis` chain.

### The maintenance loop

- **Regen dance.** Edit `grammar/*.g4` + the visitor → `make parser` (regenerates the parser,
  normalizes it to a clean diff, and re-extracts the multiword-keyword tables) → `npm run build` →
  commit the grammar, the regenerated `RegelSpraak*.ts` / `.interp`, the `multiword-keywords.*`
  (only when a keyword genuinely changed), and the visitor together. No manual revert is needed —
  `make parser` is a clean no-op when the grammar is unchanged. Labeled-alt visitor methods
  auto-dispatch via `this.visit(ctx)`; alternatives with identical operand labels can share one
  method.
- **Validation belongs in the resolver, not a separate pass.** Model errors — an unknown role on an
  object-creation, an unknown kenmerk, an undeclared sommatie plural — surface as resolution
  diagnostics, not as downstream compile failures (the old standalone semantic-analyzer was folded
  in). Likewise a parse reports *every* syntax error at once, each as a structured
  `{severity, line, column, message}` matching the resolver's diagnostic shape.

## Development

```bash
npm install
npm run build
npm test
npm run typecheck
npm run lint
```

## License

Apache-2.0
