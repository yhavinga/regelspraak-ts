# Begrippen Mapping Template

A "Rosetta Stone" for translating between terminology systems in Rules-as-Code implementations.

## Purpose

When implementing rules from legislation, you need to map between:
- **NORA/MIM**: Standardized government information model terms
- **Rules JSON**: Terms used in your input/output data structures
- **Wetgeving**: Official legal terminology from the source law
- **Regelspraak**: Objecttype and attribute names in your `.rs` files

This template helps maintain consistent terminology across all layers.

## Entity Groups Reference

| Group | Name | Description |
|-------|------|-------------|
| 1 | **Real-world** | Physical/legal entities that exist independently |
| 2 | **Juridisch** | Legal constructs from law/contracts |
| 3 | **Berekend** | Computed output - core of Rules-as-Code |
| 4 | **Parameters** | External facts that change periodically |
| 5 | **Validatie** | Yes/no results from rule application |
| 6 | **Meta-analyse** | Decision support tools |

---

## Entity Mapping Template

### Core Entities (Group 1-2)

| Group | NORA/MIM | Rules JSON | Wetgeving | Regelspraak | Definition |
|-------|----------|------------|-----------|-------------|------------|
| 1 | `NatuurlijkPersoon` | `profiel` | BRP: "Ingeschreven natuurlijk persoon" | `de Natuurlijk persoon (bezield)` | A human who can be a legal subject |
| 2 | `Huishouden` | `huishouden` | AWIR: "huishouden" | `het Huishouden` | Persons sharing a dwelling |
| | | | | | |
| | | | | | |

### Computed Entities (Group 3)

| Group | NORA/MIM | Rules JSON | Wetgeving | Regelspraak | Definition |
|-------|----------|------------|-----------|-------------|------------|
| 3 | `Inkomensjaar` | `bruto_inkomen` | BRI: "geregistreerd inkomen" | `het Inkomensjaar` | Computed income for a calendar year |
| 3 | `Belastingaanslag` | `belasting` | Wet IB 2001: "aanslag" | `de Belastingaanslag` | Calculated tax for a year |
| | | | | | |
| | | | | | |

### Parameters (Group 4)

| Group | NORA/MIM | Rules JSON path | Wetgeving | Regelspraak | Definition |
|-------|----------|-----------------|-----------|-------------|------------|
| 4 | `Belastingtarief` | `constanten.schijf_1_tarief` | Wet IB 2001 art. 2.10 | `het tarief eerste schijf` | Progressive tax rate per bracket |
| | | | | | |
| | | | | | |

---

## Attribute Mapping Template

### Person Attributes

| NORA/MIM attribute | Rules JSON | Wetgeving | Regelspraak | Source Column |
|--------------------|------------|-----------|-------------|---------------|
| `burgerservicenummer` | `bsn` | BRP: "BSN" | `het burgerservicenummer` | - |
| `geboortedatum` | `geboortedatum` | BRP: "geboortedatum" | `de geboortedatum` | - |
| `isAlleenstaand` | `huishouden: 'alleenstaand'` | AWIR | `is alleenstaand (kenmerk)` | - |
| | | | | |
| | | | | |

### Income Attributes

| NORA/MIM attribute | Rules JSON | Wetgeving | Regelspraak | Source Column |
|--------------------|------------|-----------|-------------|---------------|
| `brutoInkomen` | `bruto_inkomen` | - | `het bruto inkomen` | "Bruto-inkomen" |
| `nettoInkomen` | `netto_inkomen` | - | `het netto inkomen` | "Netto-inkomen" |
| | | | | |
| | | | | |

---

## Enumeration Mapping Template

### Household Types

| NORA/MIM | Rules JSON | Wetgeving | Regelspraak |
|----------|------------|-----------|-------------|
| `ALLEENSTAAND` | `'alleenstaand'` | AWIR | `'alleenstaand'` |
| `PARTNERS` | `'partners'` | AWIR | `'partners'` |
| | | | |

### Other Enumerations

| NORA/MIM | Rules JSON | Wetgeving | Regelspraak |
|----------|------------|-----------|-------------|
| | | | |
| | | | |

---

## Legal References Template

| Law | Article | NORA/MIM Entity | Group | Description |
|-----|---------|-----------------|-------|-------------|
| Wet IB 2001 | art. 2.10 | `Belastingtarief` | 4 | Box 1 tax rates |
| Wet IB 2001 | art. 8.10 | `Heffingskorting` | 3 | General tax credit |
| AWIR | art. 7, 8 | `Inkomensjaar` | 3 | Income and test income |
| | | | | |
| | | | | |

---

## Usage

1. **Copy this template** for each new domain
2. **Fill in mappings** from your source legislation
3. **Validate** that Regelspraak names match what rules reference
4. **Update** as requirements evolve

## Example Implementation

See `examples/bedrag-ineens/` for a working implementation that uses pragmatic naming (not strict NORA/MIM).

The original hackathon mapping document is preserved in `begrippen_mapping.md` in the hackathon repository.
