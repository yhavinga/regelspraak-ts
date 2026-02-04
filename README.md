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

## Development

```bash
npm install
npm run build
npm test
npm run typecheck
npm run lint
```

## License

MIT
