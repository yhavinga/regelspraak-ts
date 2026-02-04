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
