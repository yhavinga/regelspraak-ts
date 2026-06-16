export const meta = {
  name: 'derive-v23-docs',
  description: 'Update the two derived RegelSpraak docs (TOKA-casus + ANTLR grammar) from v2.1.0 to v2.3.0 by diffing the v2.1.0→v2.3.0 source, then applying the delta. Opus 4.8 [1m] subagents.',
  phases: [
    { title: 'Delta', detail: 'compute v2.1.0→v2.3.0 changes per doc' },
    { title: 'Produce', detail: 'write the v2.3.0 doc from the v2.1.0 base + delta' },
  ],
}

const REPO = (args && args.repoRoot)
if (!REPO) throw new Error('args.repoRoot is required: the absolute path to the regelspraak-ts checkout (subagent tools require absolute paths).')
const ROOT = `${REPO}/specification`
const V21 = `${ROOT}/v2.1.0`
const V23 = `${ROOT}/v2.3.0`

const DOCS = [
  {
    name: 'toka',
    base: `${V21}/_old/RegelSpraak-TOKA-casus-v2.1.0.md`,
    out: `${V23}/RegelSpraak-TOKA-casus-v2.3.0.md`,
    deltaPrompt: `Compare the RegelSpraak **TOKA case study** ("Wet Treinen Op Korte Afstand") between spec v2.1.0 and v2.3.0 and produce a precise, exhaustive changelist for updating the TOKA-casus document.

Read these files (quote the spaced filenames in your tool calls):
- v2.1.0 curated TOKA doc (the base to be updated): \`${V21}/_old/RegelSpraak-TOKA-casus-v2.1.0.md\`
- v2.1.0 main spec: \`${V21}/RegelSpraak-specificatie v2.1.0.md\`
- v2.3.0 main spec: \`${V23}/RegelSpraak-specificatie v2.3.0.md\`
- v2.3.0 typeringen (for new operators): \`${V23}/RegelSpraak-specificatie - typeringen v2.3.0.md\`

The TOKA case is the worked example threaded through the spec: Objecttypes (Natuurlijk persoon, Vlucht, Contingent treinmiles), Domeinen, Parameters, Feittypen, Eenheidssystemen, Dagsoorten, Regels, Beslistabellen; the fictional law is in Bijlage 1. Use Grep/Read to find every TOKA construct in BOTH spec versions (search e.g. "Objecttype", "Beslistabel", "Vlucht", "Natuurlijk persoon", "Contingent", "Bijlage 1", "Startpuntbepaling").

Identify EVERYTHING that changed in the TOKA material v2.1.0 → v2.3.0:
- Added/removed/changed Objecttype attributes & kenmerken (exact lines).
- Added/removed/changed Regels, Beslistabellen, Parameters, Feittypen, Eenheidssystemen, Domeinen, Dagsoorten.
- RegelSpraak constructs new in v2.2.0/v2.3.0 that appear in the TOKA examples (e.g. Startpuntbepaling §6.8; "uur/minuut/seconde/milliseconde uit"; anything else).
- Bijlage 1 (TOKA law) text changes.

Return a structured Markdown changelist with headers **## Added**, **## Changed (v2.1.0 → v2.3.0)**, **## Removed**, **## New constructs**, including exact RegelSpraak snippets and spec section/page references. If something is unchanged, say so briefly. Be exact — this drives a regeneration.`,
    producePrompt: (delta) => `Produce the **v2.3.0** version of the RegelSpraak TOKA case-study document.

Base template (read it FULLY; keep its structure, section ordering, and "proper RegelSpraak syntax as code blocks" style — it deliberately shows executable RegelSpraak, not prose): \`${V21}/_old/RegelSpraak-TOKA-casus-v2.1.0.md\`

Authoritative v2.3.0 source (read the relevant parts to verify each definition/rule): \`${V23}/RegelSpraak-specificatie v2.3.0.md\` and \`${V23}/RegelSpraak-specificatie - typeringen v2.3.0.md\`.

Apply this v2.1.0→v2.3.0 changelist:
=== CHANGELIST ===
${delta}
=== END CHANGELIST ===

Instructions:
- Update the title and all version references to v2.3.0.
- Verify EVERY GegevensSpraak definition (Objecttype/Domein/Parameter/Feittype/Eenheidsysteem/Dagsoort) and every Regel/Beslistabel against the v2.3.0 spec; correct anything that changed, add new TOKA constructs, remove obsolete ones. Add a section for any v2.3.0-new construct used in the case (e.g. Startpuntbepaling).
- Keep the executable-RegelSpraak presentation (\`\`\`regelspraak code blocks with indented members; tables for beslistabellen) and faithfully match v2.3.0 spec wording.
- Preserve and update the closing developer-notes / "Key EBNF Sections" appendix for v2.3.0.
- This is reference material derived from the spec oracle; do not invent constructs not in the v2.3.0 spec.

Write the complete document (Write tool) to the output path given at the end of this message.
Return a concise summary of what changed versus v2.1.0.`,
  },
  {
    name: 'antlr',
    base: `${V21}/_old/RegelSpraak-spec-for-ANTLR.md`,
    out: `${V23}/RegelSpraak-spec-for-ANTLR-v2.3.0.md`,
    deltaPrompt: `Compare the RegelSpraak **EBNF grammar** (Chapter 13, the "syntaxdiagrammen" document) between v2.1.0 and v2.3.0 and produce a precise, exhaustive grammar-change list for updating an ANTLR v4 grammar spec.

Read these files (they contain the full EBNF in \`\`\`ebnf blocks for every numbered rule 13.2.x / 13.3.x / 13.4.x):
- v2.1.0: \`${V21}/RegelSpraak-specificatie - syntaxdiagrammen v2.1.0.md\`
- v2.3.0: \`${V23}/RegelSpraak-specificatie - syntaxdiagrammen v2.3.0.md\`

Identify every grammar difference v2.1.0 → v2.3.0:
- **New** EBNF productions (new non-terminals) with their full definitions.
- **Changed** productions — show the v2.1.0 RHS and the v2.3.0 RHS side by side.
- **Removed** productions.
- **New terminals / keywords / literals** introduced in v2.3.0 (these become lexer tokens).
- Note structural renumbering only where it changes rule identity.

Compare the EBNF blocks systematically (walk both docs section by section). Be exhaustive and exact — these differences become ANTLR lexer/parser rules. Where the v2.3.0 EBNF has a known source defect (unbalanced parens, missing \`<\`/\`>\`), note it so the ANTLR rule can be written sensibly.

Return a structured Markdown changelist with headers **## New rules**, **## Changed rules (v2.1.0 → v2.3.0)**, **## Removed rules**, **## New keywords/terminals**, with the exact EBNF and the §-numbers.`,
    producePrompt: (delta) => `Produce the **v2.3.0** RegelSpraak ANTLR v4 grammar specification.

Base (read it FULLY; keep its exact structure and conventions: 1 Introduction, 2 Lexer Specification [keywords / identifiers / literals / operators / whitespace], 3 Parser Specification [grammar rules in ANTLR v4], 4 Illustrative Examples, 5 Handling Specific Constructs; keep the ANTLR naming conventions — lexer rules UPPERCASE, parser rules lowerCamel — and the \`// §13.x\` comments): \`${V21}/_old/RegelSpraak-spec-for-ANTLR.md\`

Authoritative v2.3.0 grammar source (consult as needed): \`${V23}/RegelSpraak-specificatie - syntaxdiagrammen v2.3.0.md\`.

Apply this v2.1.0→v2.3.0 grammar changelist:
=== CHANGELIST ===
${delta}
=== END CHANGELIST ===

Instructions:
- Update version references (v2.1.0 → v2.3.0) and the §-citations in comments.
- Add lexer keyword/token rules for every new v2.3.0 terminal (respect longest-keyword-first ordering).
- Add or update parser rules for new/changed v2.3.0 productions, in ANTLR v4 syntax that matches the existing style and rule-naming, and keep all still-valid rules intact.
- Where the source EBNF has a defect, keep the ANTLR rule buildable/sensible and add a \`//\` comment noting the source discrepancy.
- The result should be a coherent, internally consistent ANTLR grammar spec for v2.3.0 (not a diff).

Write the complete document (Write tool) to the output path given at the end of this message.
Return a concise summary of the grammar changes applied.`,
  },
]

phase('Delta')
const results = await pipeline(
  DOCS,
  (cfg) => agent(cfg.deltaPrompt, { label: `${cfg.name}:delta`, phase: 'Delta' }),
  (delta, cfg) => {
    if (!delta) return { name: cfg.name, ok: false, reason: 'delta agent returned null' }
    const prompt = `${cfg.producePrompt(delta)}\n\n=== OUTPUT PATH (write the finished document here with the Write tool) ===\n${cfg.out}`
    return agent(prompt, { label: `${cfg.name}:produce`, phase: 'Produce' })
      .then((summary) => ({ name: cfg.name, out: cfg.out, ok: true, summary }))
  }
)

return { docs: results }
