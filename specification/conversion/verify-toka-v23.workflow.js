export const meta = {
  name: 'verify-toka-v23',
  description: 'Fact-check the v2.3.0 TOKA case-study doc section-by-section against the authoritative v2.3.0 RegelSpraak spec. Opus 4.8 [1m] verifiers, parallel.',
  phases: [{ title: 'Verify', detail: 'one verifier per TOKA section' }],
}

const REPO = (args && args.repoRoot)
if (!REPO) throw new Error('args.repoRoot is required: the absolute path to the regelspraak-ts checkout (subagent tools require absolute paths).')
const V23 = `${REPO}/specification/v2.3.0`
const TOKA = `${V23}/RegelSpraak-TOKA-casus-v2.3.0.md`
const SPEC = `${V23}/RegelSpraak-specificatie v2.3.0.md`
const TYPE = `${V23}/RegelSpraak-specificatie - typeringen v2.3.0.md`
const SYNTAX = `${V23}/RegelSpraak-specificatie - syntaxdiagrammen v2.3.0.md`

const SECTIONS = [
  { key: 'objecttypes', range: '24-104', focus: '§2.1 Object Types (Natuurlijk persoon, Vlucht, Contingent treinmiles): every attribute name, datatype, unit, and kenmerk modifier (bijvoeglijk/bezittelijk).' },
  { key: 'domains-params', range: '105-146', focus: '§2.2 Domains and §2.3 Parameters: every domain definition and parameter (name, datatype, unit). Note the flagged STANDAARDTERMIJN VOOR RESERVERING assumption.' },
  { key: 'feittypen-units', range: '147-228', focus: '§2.4 Feittypen, §2.5 Eenheidssystemen, §2.6 Dagsoorten, §2.7 Tijdlijn (variabel startpunt, new in v2.3.0): role specs, cardinality lines, unit conversions, the new timeline declaration.' },
  { key: 'rules-1', range: '229-336', focus: '§3.1–3.8 Regels (leeftijd, kenmerktoekenning minderjarig, aggregations, date calcs, bounding, datetime arithmetic, hoogseizoen, paaskorting): rule names and full rule bodies.' },
  { key: 'rules-2', range: '337-495', focus: '§3.9–3.15 Regels (object creation, fact creation, consistency, initialization, distribution/verdeling, day-type, conditional kenmerk): rule names and full rule bodies, especially the verdeling variants.' },
  { key: 'startpunt-complex', range: '496-539', focus: '§3.16 Startpuntbepaling (new in v2.3.0) and §3.17 complex conditional belasting-op-basis-van-afstand: verify the startpuntbepaling examples exist in the v2.3.0 spec and the complex rule body matches.' },
  { key: 'decision-appendix', range: '540-632', focus: '§4 Beslistabellen (Woonregio factor, Belasting op basis van reisduur, the minderjarig/passagier table) and the closing appendix (Key EBNF Sections list / developer notes): table rows, geldigheid, and the renumbered §13.4.x references in the appendix.' },
]

const FINDINGS_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    section: { type: 'string' },
    checked: { type: 'integer' },
    findings: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          construct: { type: 'string' },
          tokaLocation: { type: 'string' },
          status: { type: 'string', enum: ['match', 'mismatch', 'not-in-spec', 'syntax-issue', 'assembled-ok'] },
          severity: { type: 'string', enum: ['ok', 'note', 'likely-error', 'error'] },
          specRef: { type: 'string' },
          detail: { type: 'string' },
        },
        required: ['construct', 'status', 'severity', 'detail'],
      },
    },
  },
  required: ['section', 'checked', 'findings'],
}

function prompt(s) {
  return `You are verifying the **v2.3.0 TOKA case-study document** against the authoritative v2.3.0 RegelSpraak specification. The TOKA doc presents RegelSpraak constructs as executable syntax (GegevensSpraak definitions, Regels, Beslistabellen) for the fictional "Wet Treinen Op Korte Afstand". Your job: confirm each construct in your assigned section is faithful to the v2.3.0 spec, and flag every discrepancy.

ASSIGNED SECTION (lines ${s.range} of the TOKA doc): ${s.focus}

Files:
- TOKA doc to verify: \`${TOKA}\` (read lines ${s.range}; read a bit around for context).
- Authoritative v2.3.0 spec (the oracle): \`${SPEC}\`
- v2.3.0 typeringen (operator/datatype semantics): \`${TYPE}\`
- v2.3.0 syntaxdiagrammen (grammar/EBNF): \`${SYNTAX}\`

Method: for EACH construct in your section, locate the corresponding definition/rule/example/table in the v2.3.0 spec (use Grep on names like "Natuurlijk persoon", "Vlucht", "Beslistabel", the rule name, the attribute name, etc.; then Read the surrounding lines). Compare exactly: attribute names, datatypes, units, kenmerk modifiers, rule bodies, conditions, decision-table rows/geldigheid, §-references.

Classify each construct's \`status\`:
- **match** — faithfully matches the v2.3.0 spec.
- **assembled-ok** — the TOKA doc consolidates/assembles content the spec shows piecemeal across examples; each piece is faithful (this is expected for a case study, NOT an error).
- **mismatch** — the TOKA doc CONTRADICTS the v2.3.0 spec (give the exact spec text vs TOKA text).
- **not-in-spec** — present in TOKA but no basis found in the v2.3.0 spec (possibly invented).
- **syntax-issue** — the RegelSpraak syntax in the TOKA doc looks malformed vs the grammar.

Set \`severity\`: ok (match/assembled-ok), note (minor/cosmetic), likely-error, error (clear contradiction or invention). Only emit findings worth a human's attention plus a count; you do NOT need a finding row for every trivially-correct line, but DO report every mismatch/not-in-spec/syntax-issue and any noteworthy assembled-ok.

Be precise and cite spec section/line. Return {section: "${s.key}", checked: <how many constructs you compared>, findings: [...]}.`
}

phase('Verify')
const results = await parallel(SECTIONS.map(s => () =>
  agent(prompt(s), { label: `verify:${s.key}`, phase: 'Verify', schema: FINDINGS_SCHEMA })
))

const all = results.filter(Boolean)
const flat = all.flatMap(r => (r.findings || []).map(f => ({ section: r.section, ...f })))
const bySev = (sev) => flat.filter(f => f.severity === sev)
return {
  sectionsChecked: all.length,
  totalConstructsChecked: all.reduce((n, r) => n + (r.checked || 0), 0),
  counts: {
    error: bySev('error').length,
    likelyError: bySev('likely-error').length,
    note: bySev('note').length,
    ok: flat.filter(f => f.severity === 'ok').length,
  },
  errors: bySev('error'),
  likelyErrors: bySev('likely-error'),
  notes: bySev('note'),
}
