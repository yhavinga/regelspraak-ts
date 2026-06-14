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

## Grammar & spec notes (hard-won)

Things that repeatedly bite when extending the grammar/visitor. The spec is the oracle, and the
engine runtime is a fallible cross-check — fix the parser/resolver when it diverges.

- **The §13.4.11 EBNF outranks the §13.4.16 stencils.** When they disagree, the formal operator
  tables (§13.4.11) are authoritative; support every surface form they list. The stencils
  (§13.4.16) are a useful surface-template index but are *not* exhaustive — e.g. they listed only
  the singular dagsoortcontrole, while §13.4.11 forms 27/79 sanction the meervoud `… zijn`.
- **Stellend (verb-first) vs vragend (verb-last).** Most eenzijdige datum predicates have both:
  `is een <dagsoort>` / `een <dagsoort> is`, `is leeg` / `leeg is`. A condition may be written
  either way; support both and map them to one operator tag so the resolver/consumers don't care.
- **One surface phrase, three grammar paths.** A predicate like `is een <X>` routes differently
  by position: `comparisonExpression` (top-level `indien …` conditions *and* value position, e.g.
  an RHS), `vergelijkingInPredicaat` (criteria inside a samengestelde voorwaarde), and
  `resultaatDeel` (rule conclusions). Adding a form in one place does not add it in the others.
- **A verb-second kenmerk-check does not resolve at top-level.** `hij is volwassen` (verb-second)
  parses to a `VergelijkingInPredicaat` that strict resolution rejects; the *working* kenmerk
  condition is verb-last (`hij volwassen is` → an `AttributeReference` to the boolean getter).
  This is why `<datum> is een <noun>` (verb-first) can be claimed unambiguously for the
  dagsoortcontrole — there is no competing *working* kenmerk reading at that position.
- **A subordinate clause silently mis-parses `<datum> een <noun> is`** as a kenmerk and *drops the
  datum operand*. A dedicated alternative (placed ahead of the subordinate clause) is required to
  capture the operand; resolution can't recover what the parse threw away.
- **Multiword operators lex as single tokens** (`IS_GELIJK_AAN`, `GROTER_IS_DAN`, `IS_LEEG`), so a
  bare `IS` in a rule alternative never collides with them. Names that span words use `naamwoord`
  (multi-word), not `identifier` (one token) — a day-type/kenmerk like "tweede paasdag".
- **Disambiguate semantically at resolution, structurally at parse where you can.** `X is een
  <noun>` is dagsoort-vs-kenmerk only by whether `<noun>` is a declared dagsoort — a resolution-
  time fact. Where the grammar *can* discriminate (an article `een`/`geen`, a trailing `heeft`),
  use it; otherwise resolve it and emit a clear "Unknown dagsoort/kenmerk" error.
- **Regen dance.** Edit `grammar/*.g4` and the visitor → `make parser` → `npm run build` →
  **revert the timestamp-only churn** in `src/_generated/multiword-keywords.{json,ts}` (`git
  checkout --`) unless a keyword was genuinely added/removed → commit grammar + the regenerated
  `RegelSpraak.interp` / `RegelSpraakParser.ts` / `RegelSpraakVisitor.ts` + the visitor together.
  Labeled-alt visitor methods are auto-dispatched by `this.visit(ctx)`; two alts with identical
  operand labels can share one visitor method.

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
