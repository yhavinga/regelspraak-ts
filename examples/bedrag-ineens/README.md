# Bedrag Ineens Example

A complete Rules-as-Code implementation of Dutch pension lump-sum ("bedrag ineens") tax calculations, demonstrating how a one-time pension withdrawal affects income tax, heffingskortingen (tax credits), and toeslagen (income support benefits).

## Domain Overview

In the Netherlands, retirees can opt to withdraw up to 10% of their pension capital as a lump sum ("bedrag ineens"). This creates a trade-off:

- **Higher income in withdrawal year** → More tax, potentially losing zorgtoeslag/huurtoeslag
- **Lower pension in subsequent years** → Permanently reduced income

This example implements the calculation methodology from the official EK Nota (Eerste Kamer Parliamentary Note, Kamerstuk 36.154).

## Files

```
bedrag-ineens/
├── gegevens.rs           # Data model: Persoon, Scenario, Parameters
├── regels.rs             # 21 calculation rules in 6 phases
├── run_bedrag_ineens.ts  # TypeScript runner
├── scenarios/
│   ├── ek_nota_table1.json   # EK Nota Table 1: 10% @ €600/month
│   ├── ek_nota_table2.json   # EK Nota Table 2: 10% @ €1,200/month
│   ├── ek_nota_table3.json   # EK Nota Table 3: 10% @ €2,100/month (high income)
│   ├── ek_nota_table4.json   # EK Nota Table 4: 5% @ €600/month
│   ├── profile_001.json      # High income, no toeslagen
│   ├── profile_004.json      # Low income, keeps toeslagen
│   ├── profile_014.json      # Mid income, loses toeslagen
│   └── profile_029.json      # Mid income, loses toeslagen
└── docs/
    └── source_ek_nota.md     # Canonical calculation tables
```

## Usage

```bash
# Run EK Nota canonical scenarios
npx ts-node examples/bedrag-ineens/run_bedrag_ineens.ts ek_nota_table1
npx ts-node examples/bedrag-ineens/run_bedrag_ineens.ts ek_nota_table4

# Run diverse profile scenarios
npx ts-node examples/bedrag-ineens/run_bedrag_ineens.ts profile_001
npx ts-node examples/bedrag-ineens/run_bedrag_ineens.ts profile_004 --verbose
```

## Calculation Phases

The rules implement 6 calculation phases:

1. **Bedrag Ineens Basics** (4 rules)
   - Calculate lump sum amount based on percentage
   - Compute remaining pension after withdrawal

2. **Bruto Inkomen** (2 rules)
   - Add AOW + reduced pension + lump sum (in withdrawal year)

3. **Belasting Box 1** (5 rules)
   - Progressive tax brackets (19.07% / 36.93% / 49.50%)
   - ZVW health insurance contribution

4. **Heffingskortingen** (6 rules)
   - Algemene Heffingskorting (general tax credit)
   - Ouderenkorting (elderly tax credit)
   - Alleenstaande Ouderenkorting (single elderly tax credit)

5. **Toeslagen** (4 rules)
   - Zorgtoeslag (healthcare allowance) - income-dependent
   - Huurtoeslag (rent allowance) - income-dependent

6. **Besteedbaar Inkomen** (final result)
   - Net income minus healthcare costs plus toeslagen

## Key Concepts

### Kenmerken (Boolean Characteristics)

- `is AOW gerechtigd` - Person receives AOW (state pension)
- `is alleenstaand` - Person is single (affects tax credits)
- `is jaar met opname` - Scenario is the withdrawal year (vs subsequent years)

### Relationships

- `scenario van persoon` - Links each calculation scenario to a person

### Parameters (2024 Tax Year)

All tax rates, thresholds, and benefit limits are passed as parameters:
- AOW amounts
- Tax bracket boundaries and rates
- Heffingskorting amounts and phase-out rates
- Toeslag income limits and benefit amounts

## Validation

Results are validated against EK Nota expected values with a 400 euro tolerance.

### Why 300 Euro Tolerance?

Small discrepancies exist between our calculations and EK Nota because:

1. **Official 2024 Parameters**: This implementation uses exact Belastingdienst 2024 parameters:
   - Ouderenkorting maximum: €2,010 (EK Nota may have used earlier estimate)
   - Alleenstaande ouderenkorting: €524
   - ZVW percentage: 5.32%
   - Tax bracket rates: 19.07% / 36.97% / 49.50%

2. **Rounding**: EK Nota rounds all values to hundreds for parliamentary presentation

3. **Simplified Huurtoeslag**: Our huurtoeslag uses a linear approximation; the real calculation depends on actual rent, household composition, and multiple thresholds

**Key insight**: The core tax calculation (belasting na heffingskortingen) now matches within 10-300 euros, validating the methodology is correct.

## Canonical Source

The calculation methodology is derived from:
- **EK Nota** (Kamerstuk 36.154): Official parliamentary calculation examples
- **Belastingdienst 2024**: Tax rates and heffingskortingen parameters
- See `docs/source_ek_nota.md` for the source tables

## Comparison with TOKA Example

| Aspect | TOKA | Bedrag Ineens |
|--------|------|---------------|
| Domain | Aviation tax | Pension tax |
| Object types | 3 (Persoon, Vlucht, Contingent) | 2 (Persoon, Scenario) |
| Rules | ~20 + decision tables | 21 calculation rules |
| Source | Internal specification | Parliamentary document |
| Validation | Exact match | 400 euro tolerance |
