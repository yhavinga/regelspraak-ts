/**
 * Extract fired rule names from execution trace.
 * Returns deduplicated list of rule names that fired during execution.
 */
export function extractFiredRules(executionTrace: string[]): string[] {
  return [...new Set(
    executionTrace
      .filter(t => t.includes('RULE_FIRED'))
      .map(t => {
        const match = t.match(/rule_name='([^']+)'/);
        return match ? match[1] : t;
      })
  )];
}

/**
 * Detailed information about a fired rule for explainability.
 */
export interface FiredRuleInfo {
  ruleName: string;
  target?: string;
  value?: string;
}

/**
 * Extract fired rules with detailed information (target, value) from execution trace.
 * Returns deduplicated list by rule name, preserving first occurrence's details.
 */
export function extractFiredRulesWithDetails(executionTrace: string[]): FiredRuleInfo[] {
  const seen = new Set<string>();
  const results: FiredRuleInfo[] = [];

  for (const trace of executionTrace) {
    if (!trace.includes('RULE_FIRED')) continue;

    const nameMatch = trace.match(/rule_name='([^']+)'/);
    if (!nameMatch) continue;

    const ruleName = nameMatch[1];
    if (seen.has(ruleName)) continue;
    seen.add(ruleName);

    const targetMatch = trace.match(/target='([^']+)'/);
    const valueMatch = trace.match(/value=([^,\s]+)/);

    results.push({
      ruleName,
      target: targetMatch?.[1],
      value: valueMatch?.[1]
    });
  }

  return results;
}
