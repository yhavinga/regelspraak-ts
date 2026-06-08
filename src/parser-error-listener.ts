import { ErrorListener, RecognitionException, Recognizer } from 'antlr4';

export class CollectingErrorListener extends ErrorListener<any> {
  private errors: string[] = [];

  syntaxError(
    _recognizer: Recognizer<any>,
    _offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    _error: RecognitionException | undefined
  ): void {
    this.errors.push(`line ${line}:${column} ${msg}`);
  }

  getErrors(): string[] {
    return this.errors;
  }
}
