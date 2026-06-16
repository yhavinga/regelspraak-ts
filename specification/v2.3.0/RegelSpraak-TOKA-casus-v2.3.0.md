# RegelSpraak TOKA Casus (v2.3.0)

**Objective:** Provide the complete TOKA case study with **proper RegelSpraak syntax** as it appears in the RegelSpraak v2.3.0 specification, not documentation-style descriptions.

> **Version note (v2.1.0 → v2.3.0).** The TOKA *data model and rule bodies* are
> essentially identical to v2.1.0. The substantive RegelSpraak changes since
> v2.1.0 are:
> - **v2.2.0**: §3.1.2 *Extensie van objecttype*; §5.5.3 *rangtelwoord*; §6.12
>   extended with *uur/minuut/seconde/milliseconde uit*.
> - **v2.3.0**: §3.8 / §13.3.6 *Tijdlijn-specificaties* extended (fixed and
>   variable start points, named timelines); §9.9 / §13.4.12 *Startpuntbepaling*
>   added.
>
> This document therefore adds two new constructs exercised on TOKA — a named
> **Tijdlijn** with a variable start point and the **Startpuntbepaling** that
> drives it (§2.7, §3.16) — and a new parameter (*STANDAARDTERMIJN VOOR
> RESERVERING*). All other GegevensSpraak definitions and rule bodies are
> reproduced verbatim from the v2.3.0 spec.

## 1. TOKA Casus Overview

**Fictive Law:** "Wet Treinen Op Korte Afstand" (TOKA) aims to tax short flights to stimulate train travel.

## 2. GegevensSpraak Definitions

### 2.1 Object Types

```regelspraak
Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
    is minderjarig kenmerk (bijvoeglijk);
    is passagier van 18 tot en met 24 jaar kenmerk;
    is passagier van 25 tot en met 64 jaar kenmerk;
    is passagier van 65 jaar of ouder kenmerk;
    het recht op duurzaamheidskorting kenmerk (bezittelijk);
    het identificatienummer Numeriek (positief geheel getal);
    de geboortedatum Datum in dagen;
    de leeftijd Numeriek (niet-negatief geheel getal) met eenheid jr;
    de belasting op basis van afstand Bedrag;
    de belasting op basis van reisduur Bedrag;
    de te betalen belasting Bedrag;
    de treinmiles op basis van evenredige verdeling Numeriek (geheel getal);
    de maximaal te ontvangen treinmiles bij evenredige verdeling volgens rangorde Numeriek (geheel getal);
    het burgerservicenummer Tekst;
    de woonprovincie Tekst;
    de woonregio factor Numeriek (geheel getal);
```

```regelspraak
Objecttype de Vlucht (mv: Vluchten)
    is bereikbaar per trein kenmerk (bijvoeglijk);
    de gebruik fossiele brandstoffen minder dan 50% kenmerk (bezittelijk);
    de reis met paaskorting kenmerk;
    de reiziger kenmerk (bezittelijk);
    is duurzaam kenmerk (bijvoeglijk);
    is belaste reis kenmerk;
    is belast kenmerk (bijvoeglijk);
    is rondvlucht kenmerk;
    is bestemd voor minderjarigen kenmerk;
    de luchthaven van vertrek Luchthavens;
    de luchthaven van bestemming Luchthavens;
    de vluchtdatum Datum in dagen;
    de afstand tot bestemming Numeriek (geheel getal) met eenheid km;
    bereikbaar per trein Boolean;
    gebruik fossiele brandstof minder dan 50 procent Boolean;
    de reisduur per trein Numeriek (geheel getal) met eenheid minuut;
    de hoeveelheid passagiers Numeriek (geheel getal);
    de hoeveelheid uitzonderingspassagiers Numeriek (geheel getal);
    de leeftijd van de oudste passagier Numeriek (niet-negatief geheel getal) met eenheid jr;
    de totale belasting op basis van afstand Bedrag;
    de totale belasting op basis van reisduur Bedrag;
    de totaal te betalen belasting Bedrag;
    de verwachte datum-tijd van aankomst Datum en tijd in millisecondes;
    de verwachte datum-tijd van vertrek Datum en tijd in millisecondes;
    de verwachte duur Numeriek (geheel getal) met eenheid minuut;
    de datum-tijd voor het berekenen van de belasting op basis van afstand Datum en tijd in millisecondes;
    het bevestigingstijdstip Datum en tijd in millisecondes;
    het uiterste boekingstijdstip Datum en tijd in millisecondes;
    de datum van vertrek van de vlucht Datum in dagen;
```

> The `de datum van vertrek van de vlucht` attribute is the start-point source
> consumed by the variable-start-point timeline introduced in v2.3.0
> (§2.7 / §3.16, *Startpuntbepaling*).

```regelspraak
Objecttype het Contingent treinmiles
    het totaal aantal treinmiles Numeriek (positief geheel getal);
    het aantal treinmiles op basis van aantal passagiers Numeriek (positief geheel getal);
    het restant na verdeling Numeriek (positief geheel getal);
```

> **Extensie van objecttype (new in v2.2.0).** For readability the properties of
> an objecttype may be clustered in separate extensions instead of one block:
>
> ```regelspraak
> Extensie van objecttype de Natuurlijk persoon
>     het burgerservicenummer Tekst;
>     de woonprovincie Tekst;
>     de woonregio factor Numeriek (geheel getal);
> ```
>
> An extension introduces no new attributes; it is an alternative way to spread
> the existing ones across the model.

### 2.2 Domains

```regelspraak
Domein Bedrag is van het type Numeriek (getal met 2 decimalen)
```

```regelspraak
Domein Luchthavens is van het type Enumeratie
    'Amsterdam Schiphol'
    'Groningen Eelde'
    'Parijs Charles de Gaulle'
    'Londen Heathrow'
```

### 2.3 Parameters

```regelspraak
Parameter de korting bij gebruik niet-fossiele brandstof : Bedrag
Parameter de volwassenleeftijd : Numeriek (niet-negatief geheel getal) met eenheid jr
Parameter de bevestigingsinterval : Datum en tijd in millisecondes
Parameter de eerste boekingsdatum : Datum in dagen
Parameter de aantal treinmiles per passagier voor contingent : Numeriek (positief geheel getal)
Parameter de initiele belasting : Bedrag
Parameter de pensioenleeftijd : Numeriek (geheel getal) met eenheid jr
Parameter de duurzaamheidskorting minimale afstand : Numeriek (geheel getal) met eenheid km
Parameter de burgerservicenummer lengte : Numeriek (geheel getal)
Parameter de bovengrens afstand eerste schijf : Numeriek (geheel getal) met eenheid km
Parameter het lage basistarief eerste schijf : Bedrag
Parameter het lage tarief vermindering eerste schijf : Bedrag
Parameter het percentage reisduur eerste schijf : Percentage (geheel getal)
Parameter het percentage reisduur tweede schijf : Percentage (geheel getal)
Parameter het percentage reisduur derde schijf : Percentage (geheel getal)
Parameter de bovengrens reisduur eerste schijf : Numeriek (geheel getal) met eenheid minuut
Parameter de bovengrens reisduur tweede schijf : Numeriek (geheel getal) met eenheid minuut
Parameter de STANDAARDTERMIJN VOOR RESERVERING : Numeriek (geheel getal) met eenheid mnd
```

> `de STANDAARDTERMIJN VOOR RESERVERING` is **new in v2.3.0** (§9.9). The spec
> shows it only as a duration subtracted from a `Datum in dagen` start point;
> its datatype is not stated in the spec, so the month-duration typing above is
> an assumption consistent with that usage.

### 2.4 Fact Types (Feittypen)

```regelspraak
Feittype Vlucht van natuurlijke personen
    de reis Vlucht
    de passagier Natuurlijk persoon
Eén reis betreft de verplaatsing van meerdere passagiers
```

```regelspraak
Feittype reis met contingent treinmiles
    de reis met treinmiles Vlucht
    het vastgestelde contingent treinmiles Contingent treinmiles
Eén reis met treinmiles heeft één vastgestelde contingent treinmiles
```

```regelspraak
Feittype verdeling contingent treinmiles over passagiers
    het te verdelen contingent treinmiles Contingent treinmiles
    de passagier met recht op treinmiles Natuurlijk persoon
Eén te verdelen contingent treinmiles wordt verdeeld over meerdere passagiers met recht op treinmiles
```

```regelspraak
Wederkerig feittype Partnerrelatie
    de partner Natuurlijk persoon
Eén partner heeft één partner
```

### 2.5 Unit Systems (Eenheidssystemen)

```regelspraak
Eenheidsysteem Valuta
    de euro (mv: euros) EUR €
```

```regelspraak
Eenheidsysteem Tijd
    de milliseconde     ms       =    1/1000 s
    de seconde          s        =    1/60 minuut
    de minuut           minuut   =    1/60 u
    het uur             u        =    1/24 dg
    de dag              dg
    de week             wk       =    7 dg
    de maand            mnd
    het kwartaal        kw       =    3 mnd
    het jaar            jr       =    12 mnd
```

```regelspraak
Eenheidsysteem afstand
    de millimeter (mv: millimeters)   mm      =    1/1000 m
    de centimeter (mv: centimeters)   cm      =    1/100 m
    de meter (mv: meters)             m
    de kilometer (mv: kilometers)     km      =    1000 m
```

### 2.6 Day Types (Dagsoorten)

```regelspraak
Dagsoort de kerstdag (mv: kerstdagen)
```

### 2.7 Timelines (Tijdlijnen) — variable start point (new in v2.3.0)

In v2.3.0 a timeline can be declared separately in the object model with a name
and, optionally, a variable start point. The start point itself is then bound to
a model value through a *Startpuntbepaling* (see §3.16).

```regelspraak
Tijdlijn de variabele periode van 3 maanden heeft tijdvakken van een kwartaal met variabel startpunt;
```

Once declared, the named timeline can be attached to an attribute, kenmerk or
parameter of an objecttype, e.g. `... voor elke variabele periode van 3 maanden`.

> The exact period unit of "variabele periode van 3 maanden" is not written out
> verbatim in the spec; it is reconstructed here from the §3.8
> `Tijdlijn ... heeft tijdvakken van ... met variabel startpunt` pattern.

## 3. RegelSpraak Rule Examples

### 3.1 Basic Calculations

```regelspraak
Regel bepaal leeftijd
    geldig altijd
        De leeftijd van een Natuurlijk persoon moet berekend worden als de tijdsduur van zijn
        geboortedatum tot de vluchtdatum van zijn reis in hele jaren.
```

### 3.2 Kenmerk Assignment

```regelspraak
Regel Kenmerktoekenning persoon minderjarig
    geldig altijd
        Een Natuurlijk persoon is minderjarig
        indien X kleiner is dan de volwassenleeftijd.
        Daarbij geldt:
            X is de tijdsduur van zijn geboortedatum tot de vluchtdatum van zijn reis in hele jaren.
```

### 3.3 Aggregations

```regelspraak
Regel Hoeveelheid passagiers van een reis
    geldig altijd
        De hoeveelheid passagiers van een reis moet berekend worden als het aantal passagiers van de reis.
```

```regelspraak
Regel Totaal te betalen belasting
    geldig altijd
        De totaal te betalen belasting van een reis moet berekend worden als de som van de te
        betalen belasting van alle passagiers van de reis.
```

```regelspraak
Regel Leeftijd oudste passagier
    geldig altijd
        De leeftijd van de oudste passagier van een reis moet gesteld worden op de maximale waarde van
        de leeftijden van alle passagiers van de reis.
```

### 3.4 Date Calculations

```regelspraak
Regel Datum-tijd voor het berekenen van de belasting op basis van afstand
    geldig altijd
        De datum-tijd voor het berekenen van de belasting op basis van afstand van een vlucht moet berekend worden als de eerste van de verwachte datum-tijd van vertrek van de vlucht en de
        daadwerkelijke datum-tijd van vertrek van de vlucht.
```

```regelspraak
Regel Bevestigingstijdstip vlucht
    geldig altijd
        Het bevestigingstijdstip van een vlucht moet berekend worden als de laatste van A en B.
        Daarbij geldt:
            A is het uiterste boekingstijdstip van de vlucht plus bevestigingsinterval
            B is eerste boekingsdatum.
```

### 3.5 Calculations with Bounding

```regelspraak
Regel Te betalen belasting van een passagier
    geldig altijd
        De te betalen belasting van een passagier moet berekend worden als zijn belasting op
        basis van afstand min de korting bij gebruik niet-fossiele brandstof, met een minimum
        van 0 € naar beneden afgerond op 0 decimalen.
```

### 3.6 Date/Time Arithmetic

```regelspraak
Regel Verwachte datum-tijd van aankomst van een Vlucht
    geldig altijd
        De verwachte datum-tijd van aankomst van een vlucht moet berekend worden als de verwachte
        Datum-tijd van vertrek van de Vlucht plus de verwachte duur van de vlucht.
```

### 3.7 Seasonal Calculations

```regelspraak
Regel Hoogseizoen
    geldig altijd
        Een Vlucht is in het hoogseizoen
        indien er aan ten minste één van de volgende voorwaarden wordt voldaan:
        - de maand uit (de vluchtdatum van de Vlucht) is gelijk aan 6
        - de maand uit (de vluchtdatum van de Vlucht) is gelijk aan 7
        - de maand uit (de vluchtdatum van de Vlucht) is gelijk aan 8.
```

> **§6.12 widened in v2.2.0.** The extraction family is now *Jaar/maand/dag/uur/
> minuut/seconde/milliseconde uit*: alongside `het jaar uit`, `de maand uit` and
> `de dag uit`, RegelSpraak now also offers `het uur uit`, `de minuut uit`,
> `de seconde uit` and `de milliseconde uit`. These new operators apply to the
> `Datum en tijd in millisecondes` attributes of `Vlucht` (e.g. the verwachte
> datum-tijd van vertrek/aankomst, het bevestigingstijdstip, het uiterste
> boekingstijdstip); the `Regel Hoogseizoen` body itself is unchanged.

### 3.8 Easter Calculation

```regelspraak
Regel Paaskorting
    geldig altijd
        Een Vlucht is een reis met paaskorting
        indien de vluchtdatum van de Vlucht gelijk is aan de eerste paasdag van (het jaar uit (de vluchtdatum van de Vlucht)).
```

### 3.9 Object Creation

```regelspraak
Regel vastgestelde contingent treinmiles
    geldig altijd
        Een vlucht heeft het vastgestelde contingent treinmiles met
        aantal treinmiles op basis van aantal passagiers gelijk aan het aantal passagiers
        van de Vlucht maal het aantal treinmiles per passagier voor contingent.
```

### 3.10 Fact Creation

```regelspraak
Regel passagier met recht op treinmiles
    geldig altijd
        Een passagier met recht op treinmiles van een vastgestelde contingent treinmiles is een
        passagier van de reis met treinmiles van het vastgestelde contingent treinmiles.
```

### 3.11 Consistency Rules

```regelspraak
Regel Controleer of vlucht geen rondvlucht is
    geldig altijd
        De luchthaven van vertrek van een vlucht moet ongelijk zijn aan de luchthaven van
        bestemming van de vlucht.
```

### 3.12 Initialization

```regelspraak
Regel Initialiseer te betalen belasting op initiele belasting
    geldig altijd
        De te betalen belasting van een passagier moet geïnitialiseerd worden op de initiele belasting.
```

### 3.13 Distribution Rules (Verdeling)

```regelspraak
Regel verdeling treinmiles in gelijke delen
    geldig altijd
        Het totaal aantal treinmiles van een te verdelen contingent treinmiles wordt verdeeld over
        de treinmiles van alle passagiers met recht op treinmiles van het te verdelen
        contingent treinmiles, waarbij wordt verdeeld in gelijke delen.
```

```regelspraak
Regel verdeling treinmiles op basis van woonregio factor
    geldig altijd
        Het totaal aantal treinmiles van een te verdelen contingent treinmiles wordt verdeeld over
        de treinmiles van alle passagiers met recht op treinmiles van het te verdelen
        contingent treinmiles, waarbij wordt verdeeld naar rato van de woonregio factor.
```

```regelspraak
Regel Verdeling treinmiles op basis van leeftijd en woonregio factor
    geldig altijd
        Het totaal aantal treinmiles van een te verdelen contingent treinmiles wordt verdeeld over
        de treinmiles van alle passagiers met recht op treinmiles van het te verdelen
        contingent treinmiles, waarbij wordt verdeeld:
        - op volgorde van toenemende de leeftijd,
        - bij een even groot criterium naar rato van de woonregio factor.
        Als onverdeelde rest blijft het restant na verdeling van het te verdelen contingent treinmiles over.
```

```regelspraak
Regel verdeling treinmiles op basis van woonregio factor en met maximum waarde
    geldig altijd
        Het totaal aantal treinmiles van een te verdelen contingent treinmiles wordt verdeeld
        over de treinmiles van alle passagiers met recht op treinmiles van het te verdelen
        contingent treinmiles, waarbij wordt verdeeld:
        - naar rato van de woonregio factor,
        - met een maximum van het maximaal aantal te ontvangen treinmiles.
        Als onverdeelde rest blijft het restant na verdeling van het te verdelen contingent
        treinmiles over.
```

```regelspraak
Regel verdeling treinmiles op basis van woonregio factor met afronding
    geldig altijd
        Het totaal aantal treinmiles van een te verdelen contingent treinmiles wordt verdeeld
        over de treinmiles van alle passagiers met recht op treinmiles van het te verdelen
        contingent treinmiles, waarbij wordt verdeeld:
        - naar rato van de woonregio factor,
        - afgerond op 0 decimalen naar beneden
        Als onverdeelde rest blijft het restant na verdeling van het te verdelen contingent
        treinmiles over.
```

```regelspraak
Regel Verdeling treinmiles op basis van leeftijd, woonregio factor, met maximum waarde en afronding
    geldig altijd
        Het totaal aantal treinmiles van een te verdelen contingent treinmiles wordt verdeeld over
        de treinmiles van alle passagiers met recht op treinmiles van het te verdelen
        contingent treinmiles, waarbij wordt verdeeld:
        - op volgorde van toenemende de leeftijd,
        - bij een even groot criterium naar rato van de woonregio factor,
        - met een maximum van het maximaal aantal te ontvangen treinmiles,
        - afgerond op 0 decimalen naar beneden.
        Als onverdeelde rest blijft het restant na verdeling van het te verdelen contingent treinmiles over.
```

### 3.14 Day Type Definitions

```regelspraak
Regel Kerstdag
    geldig altijd
        Een dag is een kerstdag
        indien de dag aan alle volgende voorwaarden voldoet:
        - de maand uit (de dag) is gelijk aan 12
        - de dag voldoet aan ten minste één van de volgende voorwaarden:
            .. de dag uit (de dag) is gelijk aan 25
            .. de dag uit (de dag) is gelijk aan 26.
```

### 3.15 Conditional Kenmerk Assignment

```regelspraak
Regel belaste reis
    geldig altijd
        Een Vlucht is een belaste reis
        indien bereikbaar per trein van de vlucht gelijk is aan waar.
```

```regelspraak
Regel Recht op Duurzaamheidskorting
    geldig altijd
        Een passagier heeft recht op duurzaamheidskorting
        indien hij aan alle volgende voorwaarden voldoet:
        - zijn reis is duurzaam
        - de afstand tot bestemming in kilometers van zijn reis is groter of gelijk aan
          de duurzaamheidskorting minimale afstand
        - zijn leeftijd is groter of gelijk aan de pensioenleeftijd
```

```regelspraak
Regel Recht op Duurzaamheidskorting alternatief
    geldig altijd
        Een passagier heeft recht op duurzaamheidskorting
        indien hij aan alle volgende voorwaarden voldoet:
        - zijn reis is duurzaam
        - de afstand tot bestemming in kilometers van zijn reis is groter of gelijk aan
          de duurzaamheidskorting minimale afstand
        - hij voldoet aan geen van de volgende voorwaarden:
            .. hij is een passagier jonger dan 18 jaar
            .. hij is een passagier van 18 tot en met 24 jaar
            .. hij is een passagier van 25 tot en met 64 jaar.
```

```regelspraak
Regel Passagier van 18 tm 24 jaar
    geldig altijd
        Een Natuurlijk persoon is een passagier van 18 tot en met 24 jaar
        indien hij aan alle volgende voorwaarden voldoet:
        - zijn leeftijd is groter of gelijk aan de volwassenleeftijd
        - zijn leeftijd is kleiner of gelijk aan 24 jr
        - hij is een passagier.
```

### 3.16 Startpuntbepaling (new in v2.3.0)

A *Startpuntbepaling* (§9.9) supplies the start point for a named timeline that
was declared `met variabel startpunt` (see §2.7). The start point is given by a
`Datum in dagen` expression. For the same timeline, start points may be
specified for different objecttypes, or under different conditions.

```regelspraak
Regel Startpunt variabele periode op datum van vertrek
    geldig altijd
        Het startpunt van een variabele periode van 3 maanden voor een reis wordt bepaald door
        de datum van vertrek van de reis.
```

Or, offset by a reservation term:

```regelspraak
Regel Startpunt variabele periode op datum van vertrek min reserveringstermijn
    geldig altijd
        Het startpunt van een variabele periode van 3 maanden voor een reis wordt bepaald door
        de datum van vertrek van de reis min de STANDAARDTERMIJN VOOR RESERVERING.
```

### 3.17 Complex Conditional Calculations

```regelspraak
Regel belasting op basis van afstand
    geldig vanaf 2018
        De belasting op basis van afstand van een passagier moet gesteld worden op X min Y
        indien hij aan alle volgende voorwaarden voldoet:
        - zijn reis is een belaste reis
        - hij voldoet aan ten minste één van de volgende voorwaarden:
            .. hij is een passagier jonger dan 18 jaar
            .. hij is een passagier van 25 tot en met 64 jaar
        - de afstand tot bestemming in kilometers van zijn reis is groter dan 0
        - de afstand tot bestemming in kilometers van zijn reis is kleiner of gelijk aan de
          bovengrens afstand eerste schijf
        - X min Y is groter of gelijk aan 0.
        Daarbij geldt:
            X is het lage basistarief eerste schijf
            Y is het lage tarief vermindering eerste schijf maal
                  de afstand tot bestemming in kilometers van zijn reis.
```

## 4. Decision Tables (Beslistabellen)

```regelspraak
Beslistabel Woonregio factor
    geldig altijd
```

|   | de woonregio factor van een Natuurlijk persoon moet gesteld worden op | indien zijn woonprovincie gelijk is aan |
|---|----------------------------------------------------------------------|------------------------------------------|
| 1 | 1 | 'Friesland', 'Groningen', 'Drenthe', 'Zeeland' of 'Limburg' |
| 2 | 2 | 'Noord-Brabant', 'Gelderland', 'Overijssel' of 'Flevoland' |
| 3 | 3 | 'Noord-Holland', 'Zuid-Holland' of 'Utrecht' |

```regelspraak
Beslistabel Belasting op basis van reisduur
    geldig vanaf 2018
```

|   | de belasting op basis van reisduur van een passagier moet gesteld worden op | indien de reisduur per trein in minuten van zijn reis groter is dan | indien de reisduur per trein in minuten van zijn reis kleiner of gelijk is aan |
|---|-----------------------------------------------------------------------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1 | het percentage reisduur eerste schijf van zijn belasting op basis van afstand naar beneden afgerond op 0 decimalen | n.v.t. | de bovengrens reisduur eerste schijf |
| 2 | het percentage reisduur tweede schijf van zijn belasting op basis van afstand naar beneden afgerond op 0 decimalen | de bovengrens reisduur eerste schijf | de bovengrens reisduur tweede schijf |
| 3 | het percentage reisduur derde schijf van zijn belasting op basis van afstand naar beneden afgerond op 0 decimalen | de bovengrens reisduur tweede schijf | n.v.t. |

A decision table may also hold a kenmerktoekenning in the conclusion column:

|   | een passagier is een passagier jonger dan 18 jaar | indien zijn leeftijd kleiner is dan |
|---|---------------------------------------------------|--------------------------------------|
| 1 | waar | 18 jr |

## Key Points

This document presents the TOKA case study using **proper RegelSpraak syntax** exactly as it should appear in actual RegelSpraak code files for v2.3.0.

Critical differences from documentation style:
1. Object types are defined as code blocks with indented members, not bullet points
2. Attributes and kenmerken are listed within the object type definition block
3. All syntax follows the exact patterns from the v2.3.0 specification
4. The "gelijk aan" pattern is correctly used in ObjectCreatie

This is executable RegelSpraak code, not a description of RegelSpraak code.

**v2.3.0 deltas exercised in this document:**

*   **§3.8 / §13.3.6 Tijdlijn** – a named timeline `met variabel startpunt` (§2.7).
*   **§9.9 / §13.4.12 Startpuntbepaling** – binds a variable timeline start point to a model value (§3.16); introduces the parameter *STANDAARDTERMIJN VOOR RESERVERING*.
*   **§3.1.2 Extensie van objecttype** (v2.2.0) – alternative clustering of existing properties (§2.1).
*   **§6.12** (v2.2.0) – extraction operators extended with *uur/minuut/seconde/milliseconde uit* (§3.7).

**Key EBNF Sections to copy (v2.3.0 numbering):**

*   **13.1 Gebruikte notatie:** Explains the EBNF symbols used (::=, |, *, +, (), [], "", <>, \n, \t).
*   **13.2 Standaard syntax patronen:** Basic building blocks like `<digit>`, `<getal>`, `<naamwoord>`, `<waarde>`.
*   **13.3 Objecten en parameters:** Syntax for defining `Objecttype` (incl. 13.3.1 and *Extensie van objecttype*), `Attribuut`, `Kenmerk`, `Datatype`, `Domein`, `Eenheid`, `Tijdlijn` (13.3.6, incl. fixed/variable start points), `Dimensie`, `Parameter`, `Feittype`, `Dagsoort`.
*   **13.4 RegelSpraak:** The main syntax rules.
    *   13.4.1 `Onderwerpketen`
    *   13.4.2 `RegelSpraak-regel` (Top-level rule structure)
    *   13.4.3 `Resultaatdeel` (Alternatives)
    *   13.4.4 `Gelijkstelling`
    *   13.4.5 `Kenmerktoekenning`
    *   13.4.6 `ObjectCreatie`
    *   13.4.7 `FeitCreatie`
    *   13.4.8 `Consistentieregels`
    *   13.4.9 `Initialisatie`
    *   13.4.10 `Verdeling`
    *   13.4.11 `Dagsoortdefinitie`
    *   13.4.12 `Startpuntbepaling` (**new in v2.3.0**)
    *   13.4.13 `Voorwaardendeel` (Overall conditional part)
    *   13.4.14 `Samengestelde voorwaarde`
    *   13.4.15 `Elementaire voorwaarde` (Includes all predicate syntax)
    *   13.4.16 `Berekening` (Basic arithmetic operations)
    *   13.4.17 `Expressie` (All expression types, functions, aggregations)

The `Startpuntbepaling` EBNF (§13.4.12) reads:

```ebnf
<startpuntbepaling> ::= "Het startpunt van" <tijdlijnnaam> "voor" <universeelonderwerp>
"wordt bepaald door" <datumexpressie>
```

**6. Implementation Notes for Developer**

*   **ANTLR Visitor/Listener:** The extracted examples and EBNF form the basis for creating an ANTLR grammar file (`.g4`). The developer will then implement either a Visitor or Listener pattern to traverse the parse tree generated by ANTLR and execute the logic defined by the RegelSpraak rules (e.g., perform calculations, update object attributes, check conditions).
*   **Data Model:** The GegevensSpraak definitions need to be mapped to classes or data structures in the target language. The visitor/listener will interact with instances of these structures.
*   **Time Dependency:** Pay close attention to time-dependent attributes/kenmerken/parameters and rules. v2.3.0 expands this with named timelines and **variable start points** (§3.8) resolved through a **Startpuntbepaling** (§9.9). The implementation needs a mechanism to manage and query these time-sliced values and to compute a timeline's start point from a model expression at runtime, including handling of "knips" (points where values change).
*   **Empty Values:** RegelSpraak has specific rules for handling empty (`leeg`) values in calculations and comparisons, which vary between operators (e.g., `plus` vs `som van`, `min` vs `verminderd met`). These need careful implementation (see tables in Ch 6, 8). The `... uit` extraction operators (§6.12) yield `leeg` on a `leeg` input; `de eerste paasdag van` (§6.13) yields `leeg` on a `leeg` jaartal.
*   **Data Types and Units:** The system must enforce type compatibility and handle unit conversions (based on defined `Eenheidsysteem`) during calculations and assignments.
*   **Recursion:** Section 9.10 (renumbered from 9.9 in v2.1.0) describes allowed recursion patterns within designated `regelgroep`s, requiring checks for termination conditions.
*   **Beslistabellen:** These are an alternative representation. The parser might need to handle this syntax, or they could be pre-processed into standard `Regel` format. The core logic they represent is the same as standard rules.
*   **EBNF Variant:** Ensure the ANTLR grammar correctly reflects the specific EBNF notation used in Chapter 13.
*   **Color Coding:** The color conventions (purple for Objecttype, green for Attribuut/Enum, orange for Kenmerk/Dimensie, blue for Rol/Parameter) might be useful for IDE syntax highlighting or debugging output.

This structured information should provide the developer with a comprehensive starting point for implementing the RegelSpraak parser and interpreter, using the TOKA case as the primary guide and test set.
