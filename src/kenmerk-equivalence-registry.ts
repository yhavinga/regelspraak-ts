import { KenmerkSpecification } from './ast/object-types';

/**
 * Union-Find (DSU) for kenmerk equivalence classes.
 * Supports morphological variants: "is X", "de X", etc.
 *
 * NOTE: "heeft" is only equivalent to base name for bezittelijk kenmerken.
 * This is enforced via explicit variant registration, NOT via normalization.
 */
export class KenmerkEquivalenceRegistry {
  private parent: Map<string, string> = new Map();
  private rank: Map<string, number> = new Map();

  // Stable canonical label per class (doesn't drift with unions)
  // Key: DSU root, Value: declared kenmerk name
  private canonicalLabel: Map<string, string> = new Map();

  /**
   * Find with path compression.
   */
  find(name: string): string {
    const normalized = this.normalizeForLookup(name);
    if (!this.parent.has(normalized)) {
      this.parent.set(normalized, normalized);
      this.rank.set(normalized, 0);
    }

    if (this.parent.get(normalized) !== normalized) {
      this.parent.set(normalized, this.find(this.parent.get(normalized)!));
    }
    return this.parent.get(normalized)!;
  }

  /**
   * Union by rank. Preserves canonical label from winning root.
   * INVARIANT: Only call union() for variants of the SAME declared kenmerk.
   */
  union(name1: string, name2: string): void {
    const root1 = this.find(name1);
    const root2 = this.find(name2);

    if (root1 === root2) return;

    const rank1 = this.rank.get(root1) || 0;
    const rank2 = this.rank.get(root2) || 0;

    // Transfer canonical label to surviving root
    const label1 = this.canonicalLabel.get(root1);
    const label2 = this.canonicalLabel.get(root2);

    if (rank1 < rank2) {
      this.parent.set(root1, root2);
      if (label1 && !label2) {
        this.canonicalLabel.set(root2, label1);
      }
      this.canonicalLabel.delete(root1);
    } else if (rank1 > rank2) {
      this.parent.set(root2, root1);
      if (label2 && !label1) {
        this.canonicalLabel.set(root1, label2);
      }
      this.canonicalLabel.delete(root2);
    } else {
      this.parent.set(root2, root1);
      this.rank.set(root1, rank1 + 1);
      if (label2 && !label1) {
        this.canonicalLabel.set(root1, label2);
      }
      this.canonicalLabel.delete(root2);
    }
  }

  /**
   * Register a kenmerk from model definition.
   * Sets the declared name as the stable canonical label.
   */
  registerKenmerk(spec: KenmerkSpecification): void {
    const declaredName = spec.name;
    const normalized = this.normalizeForLookup(declaredName);

    // Ensure element exists in DSU
    this.find(normalized);

    // Set declared name as canonical label (explicit, stable)
    const root = this.find(normalized);
    if (!this.canonicalLabel.has(root)) {
      this.canonicalLabel.set(root, declaredName);
    }

    // Register morphological variants (only variants of THIS kenmerk)
    this.registerMorphologicalVariants(declaredName, spec.kenmerkType);
  }

  /**
   * Get stable canonical label (for storage key).
   * Always returns the explicitly set declared name.
   */
  getCanonicalLabel(name: string): string {
    const root = this.find(name);
    const label = this.canonicalLabel.get(root);
    if (!label) {
      // Fallback: use normalized form (shouldn't happen if properly initialized)
      return this.normalizeForLookup(name);
    }
    return label;
  }

  /**
   * Check if two names are equivalent.
   */
  areEquivalent(name1: string, name2: string): boolean {
    return this.find(name1) === this.find(name2);
  }

  /**
   * Register morphological variants as equivalent.
   * Only called for variants of the SAME declared kenmerk.
   */
  private registerMorphologicalVariants(
    baseName: string,
    kenmerkType?: 'bijvoeglijk' | 'bezittelijk'
  ): void {
    const normalized = this.normalizeForLookup(baseName);

    // Variants with articles (always valid)
    const articleVariants = [
      normalized,
      `de ${normalized}`,
      `het ${normalized}`,
      `een ${normalized}`,
    ];

    // "is" prefix variant (always valid for bijvoeglijk, common usage)
    const isVariants = [
      `is ${normalized}`,
      `is de ${normalized}`,
      `is het ${normalized}`,
      `is een ${normalized}`,
    ];

    // "heeft" prefix variants (ONLY for bezittelijk kenmerken)
    // These are explicitly registered here, NOT via normalization
    const heeftVariants = kenmerkType === 'bezittelijk' ? [
      `heeft ${normalized}`,
      `heeft de ${normalized}`,
      `heeft het ${normalized}`,
      `heeft een ${normalized}`,
    ] : [];

    const allVariants = [...articleVariants, ...isVariants, ...heeftVariants];

    // Union all variants together (all variants of same kenmerk)
    for (const variant of allVariants) {
      this.union(normalized, variant);
    }
  }

  /**
   * Normalize for lookup: lowercase, strip "is " prefix, strip articles.
   *
   * IMPORTANT: Does NOT strip "heeft " prefix.
   * "heeft X" is only equivalent to "X" for bezittelijk kenmerken,
   * and that equivalence is established via explicit variant registration,
   * not via normalization.
   */
  private normalizeForLookup(name: string): string {
    let result = name.toLowerCase().trim();

    // Strip "is " prefix (always valid for lookup)
    result = result.replace(/^is\s+/, '');

    // Strip articles
    result = result.replace(/^(de|het|een)\s+/, '');

    return result.trim();
  }
}
