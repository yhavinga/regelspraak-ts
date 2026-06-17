import { ErrorListener, RecognitionException, Recognizer } from 'antlr4';

/**
 * A single syntax error in the resolver's diagnostic shape: a severity, a human message and the
 * source location. Parse errors thus carry the same structured form as a ModelResolutionDiagnostic,
 * so a consumer can read line/column directly instead of re-parsing the raw ANTLR string. (No path or
 * file: a syntax error has no resolved path, and the parser is handed a source string, not a file —
 * the caller that knows the filename is the one that can attach it.)
 */
export interface ParseDiagnostic {
  severity: 'error';
  line: number;
  column: number;
  message: string;
}

/**
 * Thrown by the parser entry points. `.message` is every collected error joined (backward-compatible
 * with callers that match on the string), while `.diagnostics` exposes the structured per-error form.
 */
export class ParseError extends Error {
  constructor(message: string, public readonly diagnostics: ParseDiagnostic[]) {
    super(message);
    this.name = 'ParseError';
  }
}

export class CollectingErrorListener extends ErrorListener<any> {
  private diagnostics: ParseDiagnostic[] = [];

  syntaxError(
    _recognizer: Recognizer<any>,
    _offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    _error: RecognitionException | undefined
  ): void {
    this.diagnostics.push({ severity: 'error', line, column, message: msg });
  }

  /** Formatted "line L:C msg" strings — the historical shape, kept for existing callers. */
  getErrors(): string[] {
    return this.diagnostics.map(d => `line ${d.line}:${d.column} ${d.message}`);
  }

  /** The structured form: severity + location per error, for consumers that surface diagnostics. */
  getDiagnostics(): ParseDiagnostic[] {
    return this.diagnostics;
  }
}
