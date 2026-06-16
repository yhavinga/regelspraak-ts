export const meta = {
  name: 'pdf-to-md',
  description: 'Hybrid PDF→Markdown for a RegelSpraak spec document (text-layer anchor + page image), EBNF+Mermaid for syntax diagrams, footer page markers, artifact-fix + spec-error flags. Parameterised by args.version/doc/total.',
  phases: [{ title: 'Transcribe', detail: 'sequential batches, ordered append' }],
}

const a = args || {}
if (!a.version || !a.doc || !a.total || !a.repoRoot) throw new Error('args needs {version, doc, total, repoRoot}; optional {batch,start,end,target}. repoRoot = absolute path to the regelspraak-ts checkout (subagent tools require absolute paths).')
const VERSION = a.version
const DIR = `${a.repoRoot}/specification/v${VERSION}`

const DOCS = {
  syntax:     { sub: 'syntax',     kind: 'syntax', base: `RegelSpraak-specificatie - syntaxdiagrammen v${VERSION}.md` },
  typeringen: { sub: 'typeringen', kind: 'spec',   base: `RegelSpraak-specificatie - typeringen v${VERSION}.md` },
  spec:       { sub: 'spec',       kind: 'spec',   base: `RegelSpraak-specificatie v${VERSION}.md` },
}
const doc = DOCS[a.doc]
if (!doc) throw new Error('args.doc must be syntax | typeringen | spec')
doc.work = `${DIR}/_work/${doc.sub}`
doc.target = a.target || `${DIR}/${doc.base}`

const TOTAL = a.total
const START = a.start || 1
const END = a.end || TOTAL
const TARGET = doc.target
const BATCH = a.batch || 5

const FLAGS_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    batchLabel: { type: 'string' },
    pagesWritten: { type: 'array', items: { type: 'integer' } },
    mermaidCount: { type: 'integer' },
    ebnfFallbackPages: { type: 'array', items: { type: 'integer' } },
    flags: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          page: { type: 'integer' },
          severity: { type: 'string', enum: ['fixed-artifact', 'possible-spec-error', 'uncertain'] },
          location: { type: 'string' },
          issue: { type: 'string' },
        },
        required: ['page', 'severity', 'issue'],
      },
    },
  },
  required: ['batchLabel', 'pagesWritten', 'flags'],
}

function pad(n) { return String(n).padStart(3, '0') }

const MARKER_RULES = `FOOTER PAGE MARKERS (critical — a known failure mode):
- After the content of each page N, on its own line surrounded by blank lines, insert exactly \`*pagina N*\` where N is the number from the page footer ("N van ${TOTAL}").
- A marker is a FOOTER: it goes at the END of that page's content. Do NOT emit a marker at the very top/start of your batch, and never emit two markers with nothing between them.
- A marker must sit BETWEEN blocks — never inside a paragraph, sentence, list, table, code block, or diagram. If a block straddles a page boundary, keep the block whole (merge it) and place the page marker immediately AFTER the whole block.`

const CORRECTNESS_RULES = `CORRECTNESS PASS (required):
- Silently FIX obvious text-layer extraction artifacts so the Markdown matches the IMAGE: rejoin hyphen-split words, restore indentation, repair column-shuffled tables, fix mojibake/diacritics, merge lines wrongly broken mid-sentence.
- Do NOT alter the spec's actual wording or meaning. If you spot a GENUINE error in the source (typo, inconsistent token, a diagram that contradicts its EBNF, a duplicated heading), do NOT change it — record it in \`flags\` (severity "possible-spec-error", precise location). Use "uncertain" when unsure if it is a source error or an artifact you fixed.`

function fileList(s, e) {
  const r = []
  for (let p = s; p <= e; p++) r.push(`  - page ${p}: image \`${doc.work}/page-${pad(p)}.png\` + text \`${doc.work}/page-${pad(p)}.txt\``)
  return r.join('\n')
}

function syntaxPrompt(s, e, isFirst) {
  const frag = `${doc.work}/frag-${pad(s)}.md`
  return `You are transcribing the authoritative RegelSpraak v${VERSION} "syntaxdiagrammen" specification from PDF into faithful GitHub-flavored Markdown. This is the correctness ORACLE — reproduce content exactly.

Each grammar rule has three parts: (a) a numbered section heading like "13.2.7 Leesteken"; (b) an EBNF definition in monospace, e.g. \`<leesteken> ::= "," | "." | ...\`; (c) a railroad/syntax diagram (blue stadium nodes = terminals/literals, blue rectangles = <non-terminal> references, left-to-right track = sequence, parallel branches = alternation "|", a loop-back arrow = repetition "+"/"*", a bypass = optional "?").

You are handling pages ${s}–${e} of ${TOTAL}. Inputs:
${fileList(s, e)}
The .txt is the PDF's embedded text layer (exact words, mangled layout). The .png is visual truth for the diagrams.

PRODUCE MARKDOWN:
1. Headings by numbering depth: "13" → \`##\`, "13.2" → \`###\`, "13.2.7" → \`####\`, "13.2.7.1" → \`#####\`. Match the document exactly.
2. The EBNF definition → a fenced \`\`\`ebnf block, copied VERBATIM from the text layer (preserve <...>, ::=, |, quotes, + * ?, parentheses). This is the authoritative grammar; repair any text-layer glitch against the image so it is exactly right.
3. The railroad diagram → a \`\`\`mermaid \`flowchart LR\` representing the SAME grammar as the EBNF:
   - start \`s0(( ))\` ... end \`s1(( ))\`; terminals → stadium nodes \`id(["literal"])\`; <non-terminal> references → rectangles \`id["name"]\`.
   - sequence → edges in series; alternation ("|") → parallel branches from a fork to a join; repetition ("+"/"*") → a back edge (label it \`+\`/\`*\`); optional ("?") → a bypass edge.
   - Derive structure from the EBNF (exact), cross-checked with the diagram image. Use short safe node ids (n1,n2,...); put the visible text in the node label. To show a literal double-quote " in a label, write &quot; (never a backslash-escaped quote).
   - If a diagram is too complex to render faithfully, OMIT the mermaid block, keep the EBNF, and add \`*(syntaxdiagram te complex voor Mermaid — zie PDF pagina N)*\`. Record that page in \`ebnfFallbackPages\`. Prefer producing Mermaid; fall back only when faithful rendering is infeasible.
4. Prose / "Let op:" notes → normal Markdown, preserve italics/bold.
5. Cover/intro/TOC pages: reproduce faithfully. Cover logo → \`*(logo Belastingdienst)*\` (NO external image URLs). TOC → nested Markdown list with page numbers.

${MARKER_RULES}

${CORRECTNESS_RULES}

${isFirst ? 'This is the FIRST batch — CREATE the target file.' : `CONTINUITY: first \`Read\` the last ~40 lines of \`${TARGET}\` (offset near EOF). If it ends mid-block and page ${s} continues it, continue seamlessly with no marker inside the block.`}

OUTPUT:
- Write your Markdown for pages ${s}–${e} to \`${frag}\` (Write tool; exact content only).
- Append to the target with Bash (quote the spaced filename): ${isFirst ? `\`cat "${frag}" > "${TARGET}"\`` : `\`cat "${frag}" >> "${TARGET}"\``}.
- Return: batchLabel "${s}-${e}", pagesWritten, mermaidCount, ebnfFallbackPages, and flags.`
}

function specPrompt(s, e, isFirst) {
  const frag = `${doc.work}/frag-${pad(s)}.md`
  return `You are transcribing the authoritative RegelSpraak v${VERSION} specification (${a.doc === 'typeringen' ? 'the "typeringen" document' : 'the main document'}) from PDF into faithful GitHub-flavored Markdown. This is the correctness ORACLE — reproduce content exactly; do not reword, summarize, or "improve" meaning.

You are handling pages ${s}–${e} of ${TOTAL}. Inputs:
${fileList(s, e)}
The .txt is the PDF's embedded text layer (exact words, mangled layout); the .png is visual truth for structure, tables, and figures.

PRODUCE MARKDOWN:
1. Numbered section headings → Markdown headings by depth (e.g. "3" → \`##\`, "3.4" → \`###\`, "3.4.2" → \`####\`). Match the document's numbering.
2. RegelSpraak rule examples / code shown in monospace → fenced \`\`\`regelspraak blocks; preserve exact indentation and line breaks from the IMAGE.
3. Tables → GitHub Markdown tables (use the image to get columns/rows right; the text layer shuffles columns). Multi-line cells: use \`<br>\`; bullet lists in cells: \`<ul><li>…</li></ul>\`. Table/operator captions like "Tabel 5" → an italic line \`*Tabel 5*\`.
4. Figures/diagrams → a \`\`\`mermaid diagram when the structure maps cleanly (flowchart/graph/sequence/state); otherwise an EBNF-style or plain fenced text block or, if neither fits, an italic description. NEVER drop a figure. No external image URLs; cover logo → \`*(logo Belastingdienst)*\`.
5. Preserve bold/italic where the source uses them. Front matter (cover, copyright, TOC) → reproduce faithfully; TOC as a nested Markdown list with page numbers.

${MARKER_RULES}

${CORRECTNESS_RULES}

${isFirst ? 'This is the FIRST batch — CREATE the target file.' : `CONTINUITY: first \`Read\` the last ~40 lines of \`${TARGET}\` (offset near EOF). If it ends mid-block and page ${s} continues it, continue seamlessly with no marker inside the block.`}

OUTPUT:
- Write your Markdown for pages ${s}–${e} to \`${frag}\` (Write tool; exact content only).
- Append to the target with Bash (quote the spaced filename): ${isFirst ? `\`cat "${frag}" > "${TARGET}"\`` : `\`cat "${frag}" >> "${TARGET}"\``}.
- Return: batchLabel "${s}-${e}", pagesWritten, mermaidCount, ebnfFallbackPages (empty if none), and flags.`
}

const build = doc.kind === 'syntax' ? syntaxPrompt : specPrompt

phase('Transcribe')
log(`v${VERSION} ${a.doc}: pages ${START}-${END} → ${TARGET} (batch ${BATCH})`)
const batches = []
for (let s = START; s <= END; s += BATCH) batches.push([s, Math.min(s + BATCH - 1, END)])

const allFlags = []
let totalMermaid = 0
const fallbacks = []
for (let i = 0; i < batches.length; i++) {
  const [s, e] = batches[i]
  const isFirst = (i === 0 && START === 1)
  const res = await agent(build(s, e, isFirst), { label: `v${VERSION} ${a.doc} p${s}-${e}`, phase: 'Transcribe', schema: FLAGS_SCHEMA })
  if (res) {
    totalMermaid += res.mermaidCount || 0
    for (const f of (res.flags || [])) allFlags.push(f)
    for (const p of (res.ebnfFallbackPages || [])) fallbacks.push(p)
    log(`p${s}-${e}: ${(res.pagesWritten || []).length} pages, ${res.mermaidCount || 0} mermaid, ${(res.flags || []).length} flag(s)`)
  } else {
    log(`p${s}-${e}: agent returned null`)
  }
}

return { version: VERSION, doc: a.doc, target: TARGET, range: [START, END], batches: batches.length, totalMermaid, ebnfFallbackPages: fallbacks, totalFlags: allFlags.length, flags: allFlags }
