# NORA/MIM Naming Methodology for Regelspraak

This guide describes how to apply Dutch government naming standards (NORA/MIM) when designing Regelspraak data models for Rules-as-Code implementations.

## What is NORA/MIM?

- **NORA** (Nederlandse Overheid Referentiearchitectuur) - Dutch Government Reference Architecture
- **MIM** (Metamodel Informatiemodellering) - Geonovum's information modeling metamodel

These standards ensure consistent naming across government systems and enable interoperability with:
- **BRP** - Basisregistratie Personen (Persons Registry)
- **BRI** - Basisregistratie Inkomen (Income Registry)
- **BAG** - Basisregistraties Adressen en Gebouwen (Address & Buildings Registry)
- **RSGB/RGBZ** - Common Municipal Data Models

## Entity Groups for Rules-as-Code

When modeling a domain in Regelspraak, it helps to classify entities by their role in the system:

| Group | Name | Description | Examples |
|-------|------|-------------|----------|
| 1 | **Real-world** | Physical/legal entities that exist independently | NatuurlijkPersoon, Verblijfsobject, Pensioenuitvoerder |
| 2 | **Juridisch** | Legal constructs created by law/contract | Huishouden, Pensioenaanspraak, BedragIneensKeuze |
| 3 | **Berekend** | Computed output - **core of Rules-as-Code** | Belastingaanslag, Heffingskorting, Toeslag |
| 4 | **Parameters** | External facts that change periodically | Belastingtarief, Toeslaggrens, AOWBedrag |
| 5 | **Validatie** | Yes/no results from rule application | Geschiktheidsbeoordeling, Risicoprofiel |
| 6 | **Meta-analyse** | Decision support tools | Berekeningsscenario, Scenariovergelijking |

### Group 1: Real-world Entities
Entities that exist independent of the rules system. These are typically **input data**.
```regelspraak
Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
    de geboortedatum Datum;
    het burgerservicenummer Tekst;
```

### Group 2: Legal Constructs
Abstract entities that exist by virtue of law. They have legal consequences.
```regelspraak
Objecttype het Huishouden (mv: Huishoudens)
    het huishoudtype Tekst;  // 'alleenstaand', 'partners'
    het aantal minderjarigen Numeriek;
```

### Group 3: Computed Information
**This is the core of Rules-as-Code.** These are the calculation results.
```regelspraak
Objecttype de Belastingaanslag (mv: Belastingaanslagen)
    de belasting box1 bruto Bedrag;
    de totale heffingskortingen Bedrag;
    het netto inkomen Bedrag;
```

### Group 4: Parameters
External facts that change periodically (typically annually). The system uses them but doesn't compute them.
```regelspraak
Parameter de eerste schijfgrens: Bedrag
Parameter het tarief eerste schijf AOW: Numeriek
```

### Group 5: Validation Output
Yes/no answers from rule application. Often implemented as kenmerken.
```regelspraak
is AOW gerechtigd kenmerk (bijvoeglijk);
is alleenstaand kenmerk (bijvoeglijk);
```

### Group 6: Meta-analysis
Tools for decision support - "what if" scenarios and recommendations.
```regelspraak
Objecttype het Berekeningsscenario (mv: Berekeningsscenarios)
    het opname percentage Numeriek;
    // Computed results for this scenario...
```

## Naming Conventions

### Entity Names
- Use canonical Dutch names from government registries
- Include grammatical article: `de` or `het`
- Include plural form: `(mv: ...)`
- Mark living entities: `(bezield)`

```regelspraak
// NORA-aligned
Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)

// Pragmatic deviation (acceptable)
Objecttype de Persoon (mv: Personen) (bezield)
```

### Attribute Names
- Use lowercase
- Use full Dutch words (not abbreviations)
- Include article prefix: `de`, `het`

```regelspraak
// NORA-aligned
de geboortedatum Datum;
het burgerservicenummer Tekst;

// Pragmatic (acceptable)
het AOW inkomen Bedrag;
```

### Kenmerken (Boolean Characteristics)
- Start with `is` or `heeft`
- Declare as `kenmerk (bijvoeglijk)`

```regelspraak
is AOW gerechtigd kenmerk (bijvoeglijk);
is alleenstaand kenmerk (bijvoeglijk);
heeft partner kenmerk (bijvoeglijk);
```

## When to Deviate

Strict NORA/MIM naming is ideal but not always practical. Acceptable deviations:

| Strict NORA | Pragmatic | When to use pragmatic |
|-------------|-----------|----------------------|
| `NatuurlijkPersoon` | `Persoon` | When domain only has natural persons |
| `Verblijfsobject` | `Woning` | When BAG precision isn't needed |
| `InkomensafhankelijkeBijdrageZvw` | `Zvw bijdrage` | For readability in rules |

**Recommendation**: Start with pragmatic names for rapid prototyping, then refine to NORA-aligned names when integrating with government systems.

## Example: Bedrag Ineens Domain

The `examples/bedrag-ineens/` example uses pragmatic naming:

| NORA/MIM | Implementation | Rationale |
|----------|----------------|-----------|
| `NatuurlijkPersoon` | `Persoon` | Simpler, domain only has persons |
| `Inkomensjaar` | `Scenario` | Clearer for "what-if" calculations |
| `BedragIneensKeuze` | attribute `opname percentage` | Flattened into scenario |

See `examples/bedrag-ineens/` for a complete working example.

## Related Resources

- [begrippen-mapping-template.md](begrippen-mapping-template.md) - Template for mapping terminology
- [examples/bedrag-ineens/](../examples/bedrag-ineens/) - Pragmatic implementation example
- [examples/toka/](../examples/toka/) - More complex example with relationships
