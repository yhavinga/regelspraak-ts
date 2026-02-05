import { KenmerkEquivalenceRegistry } from '../../src/kenmerk-equivalence-registry';
import { KenmerkSpecification } from '../../src/ast/object-types';
import { Context } from '../../src/context';
import { DomainModel } from '../../src/ast/domain-model';

describe('KenmerkEquivalenceRegistry', () => {
  describe('heeft prefix handling', () => {
    it('heeft X is NOT equivalent to X for bijvoeglijk kenmerken', () => {
      const registry = new KenmerkEquivalenceRegistry();
      // bijvoeglijk by default when kenmerkType is undefined
      registry.registerKenmerk({ type: 'KenmerkSpecification', name: 'minderjarig' });

      expect(registry.areEquivalent('heeft minderjarig', 'minderjarig')).toBe(false);
      expect(registry.areEquivalent('is minderjarig', 'minderjarig')).toBe(true);
    });

    it('heeft X is NOT equivalent to X for explicit bijvoeglijk kenmerken', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({
        type: 'KenmerkSpecification',
        name: 'duurzaam',
        kenmerkType: 'bijvoeglijk'
      });

      expect(registry.areEquivalent('heeft duurzaam', 'duurzaam')).toBe(false);
      expect(registry.areEquivalent('is duurzaam', 'duurzaam')).toBe(true);
    });

    it('heeft X IS equivalent to X for bezittelijk kenmerken', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({
        type: 'KenmerkSpecification',
        name: 'recht op korting',
        kenmerkType: 'bezittelijk'
      });

      expect(registry.areEquivalent('heeft recht op korting', 'recht op korting')).toBe(true);
      expect(registry.areEquivalent('is recht op korting', 'recht op korting')).toBe(true);
    });
  });

  describe('is prefix handling', () => {
    it('is X is always equivalent to X', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({ type: 'KenmerkSpecification', name: 'minderjarig' });

      expect(registry.areEquivalent('is minderjarig', 'minderjarig')).toBe(true);
      expect(registry.areEquivalent('minderjarig', 'is minderjarig')).toBe(true);
    });
  });

  describe('article handling', () => {
    it('de X, het X, een X are equivalent to X', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({ type: 'KenmerkSpecification', name: 'minderjarig' });

      expect(registry.areEquivalent('de minderjarig', 'minderjarig')).toBe(true);
      expect(registry.areEquivalent('het minderjarig', 'minderjarig')).toBe(true);
      expect(registry.areEquivalent('een minderjarig', 'minderjarig')).toBe(true);
    });

    it('is de X is equivalent to X', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({ type: 'KenmerkSpecification', name: 'minderjarig' });

      expect(registry.areEquivalent('is de minderjarig', 'minderjarig')).toBe(true);
      expect(registry.areEquivalent('is het minderjarig', 'minderjarig')).toBe(true);
    });
  });

  describe('multi-word kenmerk round-trip', () => {
    it('preserves spaces in multi-word kenmerken', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({
        type: 'KenmerkSpecification',
        name: 'passagier jonger dan 18 jaar'
      });

      expect(registry.getCanonicalLabel('passagier jonger dan 18 jaar'))
        .toBe('passagier jonger dan 18 jaar');
      expect(registry.getCanonicalLabel('is passagier jonger dan 18 jaar'))
        .toBe('passagier jonger dan 18 jaar');
    });

    it('multi-word bezittelijk kenmerk with heeft prefix', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({
        type: 'KenmerkSpecification',
        name: 'recht op duurzaamheidskorting',
        kenmerkType: 'bezittelijk'
      });

      expect(registry.getCanonicalLabel('heeft recht op duurzaamheidskorting'))
        .toBe('recht op duurzaamheidskorting');
      expect(registry.areEquivalent('heeft recht op duurzaamheidskorting', 'recht op duurzaamheidskorting'))
        .toBe(true);
    });
  });

  describe('canonical label stability', () => {
    it('canonical label does not change after additional unions', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({ type: 'KenmerkSpecification', name: 'minderjarig' });

      const label1 = registry.getCanonicalLabel('minderjarig');

      // Additional lookups with variants should not change the canonical label
      registry.find('is minderjarig');
      registry.find('de minderjarig');

      const label2 = registry.getCanonicalLabel('minderjarig');
      expect(label2).toBe(label1);
      expect(label2).toBe('minderjarig');
    });

    it('canonical label remains stable regardless of query form', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({ type: 'KenmerkSpecification', name: 'duurzaam' });

      // All forms should return the same canonical label
      expect(registry.getCanonicalLabel('duurzaam')).toBe('duurzaam');
      expect(registry.getCanonicalLabel('is duurzaam')).toBe('duurzaam');
      expect(registry.getCanonicalLabel('de duurzaam')).toBe('duurzaam');
      expect(registry.getCanonicalLabel('is de duurzaam')).toBe('duurzaam');
    });
  });

  describe('case insensitivity', () => {
    it('handles case differences in kenmerk names', () => {
      const registry = new KenmerkEquivalenceRegistry();
      registry.registerKenmerk({ type: 'KenmerkSpecification', name: 'Minderjarig' });

      expect(registry.areEquivalent('minderjarig', 'Minderjarig')).toBe(true);
      expect(registry.areEquivalent('MINDERJARIG', 'minderjarig')).toBe(true);
      expect(registry.areEquivalent('is Minderjarig', 'minderjarig')).toBe(true);
    });
  });
});

describe('Context kenmerk methods with equivalence', () => {
  let model: DomainModel;
  let context: Context;

  beforeEach(() => {
    model = {
      objectTypes: [{
        type: 'ObjectTypeDefinition',
        name: 'Passagier',
        members: [
          { type: 'KenmerkSpecification', name: 'minderjarig' },
          { type: 'KenmerkSpecification', name: 'recht op korting', kenmerkType: 'bezittelijk' }
        ]
      }],
      parameters: [],
      regels: [],
      regelGroepen: [],
      beslistabels: [],
      dimensions: [],
      dagsoortDefinities: [],
      domains: [],
      feitTypes: [],
      unitSystems: []
    };
    context = new Context(model);
  });

  describe('setKenmerk stores under canonical key', () => {
    it('stores "is X" under canonical key X', () => {
      context.setKenmerk('Passagier', 'p1', 'is minderjarig', true);

      // Should be retrievable by base name
      expect(context.getKenmerk('Passagier', 'p1', 'minderjarig')).toBe(true);
      // And by variant
      expect(context.getKenmerk('Passagier', 'p1', 'is minderjarig')).toBe(true);
    });

    it('stores bezittelijk with "heeft" under canonical key', () => {
      context.setKenmerk('Passagier', 'p1', 'heeft recht op korting', true);

      expect(context.getKenmerk('Passagier', 'p1', 'recht op korting')).toBe(true);
      expect(context.getKenmerk('Passagier', 'p1', 'heeft recht op korting')).toBe(true);
    });
  });

  describe('getKenmerk finds equivalent keys', () => {
    it('finds kenmerk by variant name', () => {
      context.setKenmerk('Passagier', 'p1', 'minderjarig', true);

      expect(context.getKenmerk('Passagier', 'p1', 'is minderjarig')).toBe(true);
      expect(context.getKenmerk('Passagier', 'p1', 'de minderjarig')).toBe(true);
    });

    it('returns undefined for non-existent kenmerk', () => {
      expect(context.getKenmerk('Passagier', 'p1', 'nonexistent')).toBeUndefined();
    });

    it('returns undefined for heeft + bijvoeglijk kenmerk', () => {
      context.setKenmerk('Passagier', 'p1', 'minderjarig', true);

      // "heeft minderjarig" is NOT equivalent for bijvoeglijk kenmerken
      expect(context.getKenmerk('Passagier', 'p1', 'heeft minderjarig')).toBeUndefined();
    });
  });

  describe('backward compatibility with legacy data', () => {
    it('reads legacy "is X" stored keys via equivalence fallback', () => {
      // Simulate legacy data stored with "is " prefix by directly setting
      // (bypassing the canonical key resolution)
      const passagierMap = new Map<string, boolean>();
      passagierMap.set('is minderjarig', true); // Legacy format

      // Access private field for test setup
      (context as any).objectKenmerken.set('Passagier', new Map([['p1', passagierMap]]));

      // Should still find via equivalence fallback
      expect(context.getKenmerk('Passagier', 'p1', 'minderjarig')).toBe(true);
      expect(context.getKenmerk('Passagier', 'p1', 'is minderjarig')).toBe(true);
    });
  });
});
