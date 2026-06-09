import { AntlrParser } from '../parser';
import { Rule } from '../ast/rules';

export class RuleParser {
  constructor(private readonly input: string) {}

  parseRule(): Rule {
    return new AntlrParser().parseRule(this.input);
  }
}
