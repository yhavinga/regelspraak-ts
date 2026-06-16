# Spec conversion HOWTO — RegelSpraak PDF → Markdown

Self-contained procedure for turning a new RegelSpraak specification release (the
three Belastingdienst PDFs) into reviewed Markdown under `specification/v<version>/`,
and for deriving the two companion docs (TOKA case study + ANTLR grammar).

This is what produced `specification/v2.1.0/` and `specification/v2.3.0/`. It is
designed to run inside Claude Code with the **Workflow** tool (Opus 4.8 [1m]
subagents), but every step is a plain shell/agent action you can also do by hand.

---

## 0. What you get and why this approach

Three source PDFs per release:
- `RegelSpraak-specificatie v<ver>.pdf` — the main spec
- `RegelSpraak-specificatie - syntaxdiagrammen v<ver>.pdf` — Chapter 13 EBNF + railroad diagrams
- `RegelSpraak-specificatie - typeringen v<ver>.pdf` — operator/datatype semantics

The PDFs are **born-digital** (real embedded text layer, not scanned). So the method is
**hybrid**: the `pdftotext` layer is the word-accurate anchor, the 200-dpi page render is
the structural/visual truth (tables, railroad diagrams, indentation). Pure vision-OCR of
hundreds of pages is both less accurate and unnecessary; pure text-extraction loses tables
and diagrams. Hybrid gives verbatim text + faithful structure.

**Correctness rule:** the spec is the oracle. Reproduce content exactly. Fix *extraction*
artifacts silently (de-hyphenation, column shuffle, lost indentation, missing `<`/`>` in
EBNF) against the page image; **never** fix genuine *source* errors — flag them instead.

---

## 1. Prerequisites (macOS / Homebrew)

```bash
brew install poppler        # provides pdftoppm, pdftotext, pdfinfo, pdffonts
brew install mermaid-cli     # provides mmdc (validates Mermaid diagrams render)
# ImageMagick/ghostscript optional. Node is needed for mmdc.
```

Confirm a PDF is born-digital before trusting the text layer:
```bash
pdffonts "RegelSpraak-specificatie - typeringen v<ver>.pdf" | head   # fonts listed = real text layer
pdftotext -layout -f 3 -l 3 "<pdf>" -                                # eyeball page 3 text
```

---

## 2. Directory layout convention

```
specification/
  conversion/                                              # this HOWTO + the *.workflow.js conversion scripts
  v<ver>/
    RegelSpraak-specificatie v<ver>.pdf                      # source PDFs (committed)
    RegelSpraak-specificatie - syntaxdiagrammen v<ver>.pdf
    RegelSpraak-specificatie - typeringen v<ver>.pdf
    RegelSpraak-specificatie v<ver>.md                       # outputs (committed)
    RegelSpraak-specificatie - syntaxdiagrammen v<ver>.md
    RegelSpraak-specificatie - typeringen v<ver>.md
    RegelSpraak-TOKA-casus-v<ver>.md                         # derived (committed)
    RegelSpraak-spec-for-ANTLR-v<ver>.md                     # derived (committed)
    conversie-bevindingen.md                                 # findings report (NOT committed)
    _work/                                                   # scratch: page PNGs + .txt (gitignored)
    _old/                                                    # superseded prior-version md, if re-converting
```

`.gitignore` contains `specification/*/_work/` — the page renders are regenerable scratch,
kept locally for re-verification/linting but never committed. Output `.md` names mirror the
PDF names (spaces, not underscores). `conversie-bevindingen.md` is a working report and is
**not** committed.

---

## 3. Render + extract (inline shell)

200 dpi, normalize to 3-digit zero-padded filenames, extract one text file per page:

```bash
cd specification/v<ver>
mkdir -p _work/spec _work/syntax _work/typeringen
render() {            # $1=pdf  $2=workdir  $3=pagecount
  pdftoppm -png -r 200 "$1" "$2/page"
  for f in "$2"/page-*.png; do
    n=$(basename "$f" | sed -E 's/page-0*([0-9]+)\.png/\1/'); printf -v p "%03d" "$n"
    [ "$f" != "$2/page-$p.png" ] && mv "$f" "$2/page-$p.png"
  done
  for pp in $(seq 1 "$3"); do printf -v q "%03d" "$pp"; pdftotext -layout -f "$pp" -l "$pp" "$1" "$2/page-$q.txt"; done
}
# page counts:  mdls -name kMDItemNumberOfPages -raw "<pdf>"   (or: pdfinfo "<pdf>" | grep Pages)
render "RegelSpraak-specificatie v<ver>.pdf"                       _work/spec       <N>
render "RegelSpraak-specificatie - syntaxdiagrammen v<ver>.pdf"    _work/syntax     <N>
render "RegelSpraak-specificatie - typeringen v<ver>.pdf"          _work/typeringen <N>
```

---

## 4. Convert (Workflow: `specification/conversion/pdf2md.workflow.js`)

Sequential batches of 5 pages per doc (so appends stay ordered and cross-page blocks merge);
run the three docs as separate background workflows (they touch different files). Each batch
agent reads the page image + text, transcribes faithfully, and appends to the target `.md`.

Invoke once per doc via the Workflow tool with `scriptPath: specification/conversion/pdf2md.workflow.js`:
```json
{ "version": "<ver>", "doc": "typeringen", "total": <N>, "batch": 5, "repoRoot": "<abs path to regelspraak-ts checkout>" }
{ "version": "<ver>", "doc": "syntax",     "total": <N>, "batch": 5, "repoRoot": "<abs path to regelspraak-ts checkout>" }
{ "version": "<ver>", "doc": "spec",       "total": <N>, "batch": 5, "repoRoot": "<abs path to regelspraak-ts checkout>" }
```
(`doc` ∈ syntax|typeringen|spec; `total` = page count.) The script computes all paths from
`version` + `repoRoot`. `repoRoot` is the absolute path to your `regelspraak-ts` checkout — it
is required because the Workflow sandbox cannot read the cwd and the subagent Read/Write tools
require absolute paths. It writes per-batch fragments to `_work/<doc>/frag-NNN.md` and `cat >>`-appends to
the target. Pilot a small `start`/`end`/`target` range first if you want to sanity-check.

The agents are told to:
- Headings by numbering depth; RegelSpraak code → ```regelspraak; tables → GFM tables
  (`<br>`/`<ul><li>` for multi-line/bulleted cells); operator captions → `*Tabel N*`.
- **Syntax doc:** each rule → its EBNF verbatim in a ```ebnf block (authoritative grammar)
  **plus** a Mermaid `flowchart LR` of the railroad diagram (alternation→fork/join `{ }`,
  `+`/`*`→labelled back-edge, `?`/`[...]`→bypass, terminals→`(["..."])`, non-terminals→`["name"]`).
  Too-complex diagram → omit Mermaid, keep EBNF, add `*(syntaxdiagram te complex voor Mermaid — zie PDF pagina N)*`.
- **Page markers:** see the convention below.
- Fix extraction artifacts silently; flag genuine source errors as `possible-spec-error` (never fix).

### Page-marker convention (critical — get this right)
`*pagina N*` is a **FOOTER**: placed at the END of page N's content, on its own line
**between blocks** — never inside a paragraph/table/code block/diagram. A batch emits one
footer per page after that page's content; it does **not** emit a leading/header marker.
If a block straddles a page boundary, keep the block whole and put the marker **after** it.
(This convention is what prevents the double-marker / off-by-one bug at batch seams.)

---

## 5. Review gate (always; the spec is the oracle)

Run these per output `.md`. All must pass.

```bash
F="RegelSpraak-specificatie - syntaxdiagrammen v<ver>.md"; TOTAL=<N>
# markers: count / duplicates / missing / monotonic
nums=$(grep -oE '^\*pagina [0-9]+\*' "$F" | grep -oE '[0-9]+')
echo "count $(echo "$nums"|wc -l) (expect $TOTAL)"; echo "$nums"|sort -n|uniq -d|sed 's/^/DUP /'
seq 1 $TOTAL | while read x; do echo "$nums"|grep -qx "$x" || echo "MISSING $x"; done
echo "$nums"|awk 'NR>1&&$1<=p{print "NONMONO "$1}{p=$1}'
# adjacent markers (the seam bug):
awk '/^\*pagina [0-9]+\*$/{if(prev)print "ADJ "prevl" "$0;prev=1;prevl=$0;next}/^[[:space:]]*$/{next}{prev=0}' "$F"
# code fences balanced (count of ```-lines must be even):
grep -cE '^`{3}' "$F"
# mid-sentence marker splits (marker between continuing prose):
awk '/^[[:space:]]*$/{next}{if(pm){fc=substr($0,1,1);lc=substr(bt,length(bt),1); if(lc!~/[.:!?|*)\]>]/&&fc~/[a-zàéëï("0-9]/)print "SPLIT @"mnr; pm=0} if($0~/^\*pagina [0-9]+\*$/){pm=1;mnr=NR;bt=last} last=$0}' "$F"
```

**Validate every Mermaid diagram actually renders** (mmdc OOMs on a whole big doc at once, so
render in chunks of ~40):
```bash
rm -rf _work/mmd _work/mmc && mkdir -p _work/mmd _work/mmc
awk '/^`{3}mermaid$/{m=1;n++;fn=sprintf("_work/mmd/d%03d.mmd",n);next} m&&/^`{3}$/{m=0;next} m{print>fn}' "$F"
files=(_work/mmd/d*.mmd); i=0; c=0
while [ $i -lt ${#files[@]} ]; do c=$((c+1)); md="_work/mmc/c$c.md"; : >"$md"
  for j in $(seq $i $((i+39))); do f="${files[$((j+1))]}"; [ -f "$f" ] && { printf '\n```mermaid\n'; cat "$f"; printf '```\n'; } >>"$md"; done
  NODE_OPTIONS=--max-old-space-size=6144 mmdc -i "$md" -o "_work/mmc/c$c.svg" >/dev/null 2>"_work/mmc/c$c.err" \
    && echo "chunk $c ok" || { echo "chunk $c FAIL"; grep -iE 'parse error|expecting|lexical' "_work/mmc/c$c.err"|head; }
  i=$((i+40)); done
rm -rf _work/mmd _work/mmc
```
Also spot-check a few rendered pages against their PNGs.

### Fixes you will likely need
- **Mid-sentence marker splits** (prose paragraph straddles a page break): merge the sentence
  and move the marker to the next block boundary. Deterministic transform:
  ```bash
  python3 - "$F" <<'PY'
  import re,sys; fn=sys.argv[1]; L=open(fn,encoding='utf-8').read().split('\n')
  M=re.compile(r'^\*pagina \d+\*$'); TERM=set('.:!?|*)]>'); CONT="abcdefghijklmnopqrstuvwxyzáéíóúëïöü(«\"0123456789"
  out=[];i=0;n=0
  while i<len(L):
    ln=L[i]
    if M.match(ln):
      p=len(out)-1
      while p>=0 and out[p].strip()=='':p-=1
      j=i+1
      while j<len(L) and L[j].strip()=='':j+=1
      if p>=0 and j<len(L):
        A,B=out[p].rstrip(),L[j];fc=B.lstrip()[:1]
        if A and A[-1] not in TERM and not A.startswith(('#','|','*pagina','*Tabel','```')) and fc in CONT and not B.startswith(('#','|','*pagina','*Tabel','```')):
          out[p]=A+' '+B.lstrip()
          while len(out)>p+1 and out[-1].strip()=='':out.pop()
          out+=['',ln,''];i=j+1
          while i<len(L) and L[i].strip()=='':i+=1
          n+=1;continue
    out.append(ln);i+=1
  open(fn,'w',encoding='utf-8').write('\n'.join(out));print(f"merged {n}")
  PY
  ```
- **Adjacent `*pagina N* *pagina N+1*`** (a big table straddled the boundary and both footers
  landed after it, mislabeling the next section): look at the two page images, then relocate
  the second marker to after the next section's first (straddling) block — see how the v2.3.0
  spec §3.4 / Tabel 2 case was fixed.

---

## 6. Derived docs (Workflow: `specification/conversion/derive-v23-docs.workflow.js`)

The TOKA case study and the ANTLR grammar are **derived** from the spec (originally authored by
an earlier model). Don't regenerate blind — **update the previous version's doc** by diffing the
prior→new source, then applying the delta. The workflow does, per doc, **delta → produce** with
Opus [1m] subagents. The version-specific paths (v2.1.0→v2.3.0) and `out` filenames live in the
script's consts — edit them for a new hop; the repo root comes from `args.repoRoot`. It reads the prior derived doc as the curated base + the new
syntaxdiagrammen/spec, and writes the updated docs.

Then **verify** the TOKA doc against the new spec with `specification/conversion/verify-toka-v23.workflow.js`
(fan-out: one Opus verifier per section, classifying each construct match / assembled-ok /
mismatch / not-in-spec / syntax-issue).

### Key derived-doc conventions learned
- **Units:** the regelspraak-ts resolver (`src/resolver/expression-resolver.ts`
  `resolveUnitProjectionSegment`) only accepts `... in <eenheid>` when the attribute was declared
  `met eenheid <eenheid>`. So in the TOKA model, **keep** `met eenheid km`/`minuut` on attributes
  that rules access via `in kilometers`/`in minuten` (matches `examples/toka/gegevens.rs`). Don't
  strip them to match the spec's bare declarations — the bare form wouldn't resolve. `Domein Bedrag`
  stays unit-less (it's never projected with `in €`; the fixture omits the unit too).
- The engine's `examples/toka/*.rs` is the executable ground truth — prefer it over the spec's
  informal/duplicated presentations when they disagree (e.g. quoted-vs-unquoted enum values:
  enumeratiewaarde is single-quoted per the EBNF, so use `'Londen Heathrow'`).
- Reproduce verbatim; transparently annotate any reconstruction/assumption (e.g. a datatype the
  spec never states).

---

## 7. Gotchas (hard-won)

- **Mermaid quotes:** `&quot;` works in **node** labels (`(["&quot;"])`) but **not** in **edge**
  labels (Mermaid lexes edge text differently → "Lexical error"). A backslash-escaped `\"` breaks
  both. If a railroad terminal is a literal `"`, write `&quot;` in the node. If a figure needs a
  long quoted caption on an edge, put the text in a **node** and connect with plain edges instead.
- **mmdc OOM:** rendering hundreds of diagrams in one process exhausts the Node heap. Render in
  chunks (~40) with `NODE_OPTIONS=--max-old-space-size=6144`.
- **`end` is a Mermaid reserved word** — never use it as a bare node id.
- **zsh** does not word-split unquoted variables — use arrays (`SAMPLE=(...)`, `"${SAMPLE[@]}"`).
- **Source inconsistencies are normal:** the same construct often appears twice in a spec with
  different presentations (quoted/unquoted enums, `met eenheid €` present/absent, duplicate or
  skipped section numbers). Prefer the canonical/EBNF-correct form; flag the rest.
- **A spec's own Versiebeheer changelog can be incomplete** (the v2.3.0 syntaxdiagrammen never
  itemized "Extensie van objecttype" even though it's a real new §13.3.1.2 production). Diff the
  actual headings/EBNF, don't trust the changelog alone.

---

## 8. Tooling (in `specification/conversion/`)

| Script | Purpose | Invoke (Workflow tool, `scriptPath:`) |
|---|---|---|
| `pdf2md.workflow.js` | Hybrid PDF→Markdown for one doc; version-parameterized | `args {version,doc,total,repoRoot,[batch,start,end,target]}` |
| `derive-v23-docs.workflow.js` | Update TOKA + ANTLR docs prior→new version (delta→produce) | `args {repoRoot}` (edit the `V21`/`V23`/`out` consts per hop) |
| `verify-toka-v23.workflow.js` | Fan-out verify TOKA doc vs spec | `args {repoRoot}` |

All three take `repoRoot` = the absolute path to the `regelspraak-ts` checkout (no path is
hardcoded in the scripts). Run them via the Workflow tool from that checkout.

These are Claude Code **Workflow** scripts (run via the Workflow tool, Opus [1m] subagents). They
are plain JS, not TypeScript, and have no project build dependency. The conversion/verification
review steps (§5) are shell and need no special tooling beyond poppler + mermaid-cli.

---

## 9. Commit convention

Commit the PDFs + the `.md` outputs + the derived docs + these scripts + this HOWTO.
**Do not commit** `conversie-bevindingen.md` (working report) or `_work/` (gitignored scratch).
Stage files explicitly by path (this repo has untracked dirs that must not be added — never
`git add -A`/`git add .`). Note `regelspraak-ts` is a git submodule, so commits land in the
submodule's history.
