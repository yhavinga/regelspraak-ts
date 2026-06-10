#!/usr/bin/env node
/**
 * Normalize ANTLR-generated TypeScript to the committed whitespace style.
 *
 * The ANTLR TypeScript target emits two stylistic artifacts that are not present
 * in the committed generated sources:
 *   1. Trailing whitespace on many lines.
 *   2. A stray run of four spaces immediately before a tab ("    \t") in the
 *      leading indentation of context-class method bodies.
 *
 * Running this after `antlr4 ... RegelSpraak.g4` keeps regeneration diffs limited
 * to genuine grammar changes. Spaces that follow tabs (legitimate continuation
 * alignment) are preserved.
 */
const fs = require('fs');

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('usage: normalize-generated-parser.js <file...>');
  process.exit(1);
}

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n').map((line) => {
    line = line.replace(/[ \t]+$/, '');
    let previous;
    do {
      previous = line;
      line = line.replace(/    \t/g, '\t');
    } while (line !== previous);
    return line;
  });
  fs.writeFileSync(file, lines.join('\n'));
}
