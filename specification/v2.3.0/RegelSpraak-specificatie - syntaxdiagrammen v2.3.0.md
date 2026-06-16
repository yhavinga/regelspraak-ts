*(logo Belastingdienst)*

# RegelSpraak-specificatie – syntaxdiagrammen

| | |
|---|---|
| Datum: | 4-12-2025 |
| Versie | 2.3.0 |

© 2025 Belastingdienst

Alle rechten voorbehouden.
Niets uit deze uitgave mag worden verveelvoudigd, opgeslagen in een geautomatiseerd
gegevensbestand en/of openbaar gemaakt in enige vorm of op enige wijze, hetzij elektronisch,
mechanisch, door fotokopieën, opnamen of op enige andere manier zonder voorafgaande
schriftelijke toestemming van de auteur.

*pagina 1*

## Inhoudsopgave:

- Versiebeheer .... 4
- Syntaxdiagrammen .... 5
- 13.2 Standaard syntax patronen .... 7
  - 13.2.1 Digit .... 7
  - 13.2.2 Getal .... 7
  - 13.2.3 Geheel getal .... 7
  - 13.2.4 Decimaal getal .... 7
  - 13.2.5 Rationeel getal .... 8
  - 13.2.6 Letter .... 8
  - 13.2.7 Leesteken .... 10
  - 13.2.8 Karakterreeks .... 10
  - 13.2.9 Lidwoord .... 10
  - 13.2.10 Bepaallidwoord .... 11
  - 13.2.11 Onbepaaldlidwoord .... 11
  - 13.2.12 Rangtelwoord .... 11
  - 13.2.13 Waarde .... 11
  - 13.2.14 Enumeratiewaarde .... 12
  - 13.2.15 Tekstwaarde .... 12
  - 13.2.16 Boolean waarde .... 12
  - 13.2.17 Getalwaarde .... 12
  - 13.2.18 Percentage .... 12
  - 13.2.19 De dato .... 12
  - 13.2.20 Datumwaarde .... 12
  - 13.2.21 Tijdwaarde .... 13
  - 13.2.22 Dag .... 13
  - 13.2.23 Maand .... 14
  - 13.2.24 Jaar .... 15
  - 13.2.25 Uur .... 16
  - 13.2.26 Minuut .... 17
  - 13.2.27 Seconde .... 18
  - 13.2.28 Milliseconde .... 19
  - 13.2.29 Naamwoord .... 20
  - 13.2.30 Naam .... 20
  - 13.2.31 Meervoudsvorm .... 20
- 13.3 Objecten en parameters .... 21
  - 13.3.1 Objecttypen .... 21
  - 13.3.2 Attributen en kenmerken .... 22
  - 13.3.3 Datatypen .... 23
  - 13.3.4 Domeinen .... 24
  - 13.3.5 Eenheden .... 25
  - 13.3.6 Tijdlijnen .... 26
  - 13.3.7 Dimensies .... 28
  - 13.3.8 Parameters .... 30
  - 13.3.9 Feittypen .... 30
  - 13.3.10 Dagsoort .... 32
- 13.4 RegelSpraak .... 33
  - 13.4.1 Onderwerpketen .... 33
  - 13.4.2 RegelSpraak-regel .... 34

*pagina 2*

- 13.4.3 Resultaatdeel .... 36
- 13.4.4 Gelijkstelling .... 36
- 13.4.5 Kenmerktoekenning .... 37
- 13.4.6 ObjectCreatie .... 37
- 13.4.7 FeitCreatie .... 38
- 13.4.8 Consistentieregels .... 38
- 13.4.9 Initialisatie .... 41
- 13.4.10 Verdeling .... 41
- 13.4.11 Dagsoortdefinitie .... 43
- 13.4.12 Startpuntbepaling .... 43
- 13.4.13 Voorwaardendeel .... 43
- 13.4.14 Samengestelde voorwaarde .... 45
- 13.4.15 Elementaire voorwaarde .... 47
- 13.4.16 Berekening .... 69
- 13.4.17 Expressie .... 70

*pagina 3*

## Versiebeheer

Onderstaande tabel bevat het overzicht van gepubliceerde versies. In de omschrijving staan de
wijzigingen ten opzichte van de vorige versie.

| Versie | Status | Datum | Omschrijving |
|---|---|---|---|
| 1.00 | Definitief | 01-05-2023 | Initiële versie. |
| 1.0.1 | Definitief | 16-05-2023 | Aanpassingen t.b.v. publicatie. Namen en informatie over concept-versies en mogelijke toekomstige aanpassingen verwijderd. |
| 1.1.0 | Definitief | 24-10-2023 | <ul><li>Par. 12.2.13 - Enumeratiewaarde als aparte literal expressie toegevoegd in verband met presentatie met enkele aanhalingstekens.</li><li>Par. 12.3.3.7 - In getalspecificatie “reëel getal” gewijzigd in “getal”.</li><li>Par. 12.3.8 - Aanduiding “binair” verwijderd bij feittype.</li><li>Par. 12.4.16.2 - Specificatie syntax Concatenatie expressie aangescherpt met gebruik “of”.</li><li>Par. 12.4.16.21/22/23 - Begrenzingexpressie en expressies voor minimum en maximum begrenzing toegevoegd.</li></ul> |
| 1.2.0 | Definitief | 11-04-2024 | <ul><li>Specificatie van de expressie renteberekening verwijderd. Deze expressie maakt geen deel meer uit van RegelSpraak.</li><li>Par. 12.4.16.14 Machtsverheffenfunctie toegevoegd.</li><li>Par 12.4.16.17 Specificatie rekenkundige expressie “absolute waarde van” toegevoegd</li><li>12.4.16.28 Alternatief “de absolute tijdsduur van” toegevoegd.</li><li>Par. 12.4.16.40-49 Specificaties syntax van aggregatie gecorrigeerd.</li></ul> |
| 2.0.0 | Definitief | 27-09-2024 | <ul><li>Groot aantal aanvullingen op de syntax in verband met het toevoegen van tijdsafhankelijk rekenen.</li></ul> |
| 2.1.0 | Definitief | 24-1-2025 | <ul><li>Par. 13.4.2.11 Mogelijkheid van lidwoord bij naam variabele toegevoegd.</li><li>Par 13.4.14.44/45 Mogelijkheid om “heeft” te gebruiken bij rolcheck toegevoegd.</li></ul> |
| 2.2.0 | Definitief | 4-9-2025 | <ul><li>Par. 13.4.1 - 13.4.3 / 13.4.2.9 Rangtelwoord toegevoegd aan syntax-specificatie onderwerpketen. Naar aanleiding daarvan structuur van de specificatie onderwerpketen aangepast.</li><li>Par. 13.4.2.7 Specificatie selector gecorrigeerd.</li><li>Par. 13.4.16 Expressies “uur uit”, “minuut uit”, “seconde uit”, “milliseconde uit” toegevoegd.</li><li>Par. 13.4.16 Expressie “datumtijd met” toegevoegd en syntax van expressies “datum met” en “eerste paasdag van” gewijzigd.</li></ul> |
| 2.3.0 | Definitief | 4-12-2025 | <ul><li>Par. 13.3.6 Tijdlijnspecificaties uitgebreid.</li><li>Par. 13.4.12 Startpuntbepaling toegevoegd.</li><li>Par. 13.4 Subkopindeling gerepareerd.</li></ul> |

*Tabel 1*

*pagina 4*

## Syntaxdiagrammen

In hoofdstuk 13 van het RegelSpraak specificatie document is de RegelSpraak Syntax formeel
vastgelegd met gebruik van de CORBA scripting taal. Om deze formele vastlegging inzichtelijker
te maken, is ervoor gekozen om deze in dit document ook weer te geven in syntaxdiagrammen.
Bij de opbouw van dit document is daarom gekozen voor het aanhouden van de
hoofdstukstructuur en (sub)nummering zoals gebruikt in het RegelSpraak specificatie
document.

Voor het genereren van syntaxdiagrammen uit syntax is gebruik gemaakt van de website
Railroad Diagram Generator: https://www.bottlecaps.de/rr/ui. Deze website kan EBNF syntax
omzetten in syntaxdiagrammen en is gebaseerd op de GitHub-pagina
https://github.com/GuntherRademacher/rr. Voor de syntaxspecificatie van RegelSpraak is
gekozen voor de notatiewijze die de OMG voor de CORBA scripting taal hanteert, waardoor een
aantal transformaties nodig was om voor de website bruikbare input te leveren. Deze
transformaties staan beschreven in onderstaande tabel. Bij de syntaxdiagrammen van paragraaf
13.3.1 zal ter illustratie de syntax, zoals die in dit document gebruikt wordt, worden
weergegeven samen met de gewijzigde input die is ingegeven op de website.

| Symbool | Is vervangen door |
|---|---|
| `<` | |
| `>` | |
| `{` | `(` |
| `}` | `)` |
| `[` | `(` |
| `]` | `)?` |
| `\n` | `“\n”` |
| `\t` | `“\t”` |

*Tabel 1: benodigde transformaties van de syntax voor de generatie van syntaxdiagrammen.*

Hoewel syntaxdiagrammen voor velen intuïtiever te lezen zijn dan de syntax zelf is een
toelichting van de elementen die voorkomen in een syntaxdiagram van belang om eventuele
misverstanden te voorkomen. Een legenda is daarom toegevoegd in onderstaande tabel.

| Symbool/Weergave | Betekenis |
|---|---|
| *(begin-markering ►►-)* | Begin van het diagram |
| *(eind-markering -►◄)* | Eind van het diagram |
| *(pijl naar rechts onderaan)* | Diagram gaat verder op de volgende regel |
| *(pijl van links bovenaan)* | Vervolg van het diagram op de vorige regel |
| *(stadium-node met ‘A’)* | Element bestaat uit karakter ‘A’ |
| *(rechthoek-node met ‘A’)* | Element A is op een andere plek gedefinieerd |

*pagina 5*
| Weergave | Betekenis |
|---|---|
| *(keuze A / B / C, A bovenaan op de hoofdlijn)* | Er zijn meerdere keuzemogelijkheden, waarvan A de default optie is. B of C kan gekozen worden door deze expliciet te vermelden |
| *(keuze A / B / C zonder default)* | Er zijn meerdere keuzemogelijkheden waaruit gekozen moet worden |
| *(keuze A / B / C met bypass over alle opties)* | Er zijn meerdere keuzemogelijkheden, maar het is ook mogelijk geen van de opties te kiezen |
| *(element A met loop-back)* | Element A wordt minimaal één keer gebruikt |
| *(element A met bypass en loop-back)* | Element A is optioneel en kan meerdere malen gebruikt worden |

*Tabel 2: Legenda syntaxdiagrammen.*

*pagina 6*

## 13.2 Standaard syntax patronen

### 13.2.1 Digit

```ebnf
<digit> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
```

```mermaid
flowchart LR
  s0(( )) --> n0(["0"]) --> s1(( ))
  s0 --> n1(["1"]) --> s1
  s0 --> n2(["2"]) --> s1
  s0 --> n3(["3"]) --> s1
  s0 --> n4(["4"]) --> s1
  s0 --> n5(["5"]) --> s1
  s0 --> n6(["6"]) --> s1
  s0 --> n7(["7"]) --> s1
  s0 --> n8(["8"]) --> s1
  s0 --> n9(["9"]) --> s1
```

### 13.2.2 Getal

```ebnf
<getal> ::= <geheelgetal> | <decimaalgetal> | <rationeelgetal>
```

```mermaid
flowchart LR
  s0(( )) --> n1["geheelgetal"] --> s1(( ))
  s0 --> n2["decimaalgetal"] --> s1
  s0 --> n3["rationeelgetal"] --> s1
```

### 13.2.3 Geheel getal

```ebnf
<geheelgetal> ::= ["-"]<digit>+
```

```mermaid
flowchart LR
  s0(( )) --> n1(["-"]) --> n2["digit"]
  s0 --> n2
  n2 -->|+| n2
  n2 --> s1(( ))
```

### 13.2.4 Decimaal getal

```ebnf
<decimaalgetal> ::= ["-"]<digit>+ "," <digit>+
```

```mermaid
flowchart LR
  s0(( )) --> n1(["-"]) --> n2["digit"]
  s0 --> n2
  n2 -->|+| n2
  n2 --> n3([","]) --> n4["digit"]
  n4 -->|+| n4
  n4 --> s1(( ))
```

*pagina 7*

### 13.2.5 Rationeel getal

```ebnf
<rationeelgetal> ::= <geheelgetal>["_"<geheelgetal>]"/"<geheelgetal>
```

```mermaid
flowchart LR
  s0(( )) --> n1["geheelgetal"]
  n1 --> n2(["_"]) --> n3["geheelgetal"] --> n4(["/"])
  n1 --> n4
  n4 --> n5["geheelgetal"] --> s1(( ))
```

### 13.2.6 Letter

```ebnf
<letter> ::= "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" |
"n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "A" | "B" |
"C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" |
"R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "á" | "à" | "â" | "ä" | "é" | "è" |
"ê" | "ë" | "ó" | "ò" | "ô" | "ö" | "ú" | "ù" | "û" | "ü" | "í" | "ì" | "î" | "ï"
```

*pagina 8*

*(syntaxdiagram te complex voor Mermaid — zie PDF pagina 9)*

*pagina 9*

### 13.2.7 Leesteken

```ebnf
<leesteken> ::= "," | "." | "!" | "?" | ":" | ";" | "(" | ")" | "-"
```

```mermaid
flowchart LR
  s0(( )) --> n1([","]) --> s1(( ))
  s0 --> n2(["."]) --> s1
  s0 --> n3(["!"]) --> s1
  s0 --> n4(["?"]) --> s1
  s0 --> n5([":"]) --> s1
  s0 --> n6([";"]) --> s1
  s0 --> n7(["("]) --> s1
  s0 --> n8([")"]) --> s1
  s0 --> n9(["-"]) --> s1
```

### 13.2.8 Karakterreeks

```ebnf
<karakterreeks> ::= (<digit> | <letter> | " " | <leesteken> | <unicode>)+
```

```mermaid
flowchart LR
  s0(( )) --> fork(( ))
  fork --> n1["digit"] --> join(( ))
  fork --> n2["letter"] --> join
  fork --> n3([" "]) --> join
  fork --> n4["leesteken"] --> join
  fork --> n5["unicode"] --> join
  join -->|+| fork
  join --> s1(( ))
```

*Let op: zoals hierboven is te zien, kunnen in RegelSpraak Unicode karakters gebruikt worden. Unicode omvat (in 2023) bijna 150 duizend karakters. Deze karakters zijn vanwege de omvang niet volledig uitgewerkt in de syntax specificaties.*

### 13.2.9 Lidwoord

```ebnf
<lidwoord> ::= <bepaaldlidwoord> | <onbepaaldlidwoord>
```

```mermaid
flowchart LR
  s0(( )) --> n1["bepaaldlidwoord"] --> s1(( ))
  s0 --> n2["onbepaaldlidwoord"] --> s1
```

*pagina 10*

#### 13.2.10 Bepaallidwoord

```ebnf
<bepaaldlidwoord> ::= "de" | "het"
```

```mermaid
flowchart LR
  s0(( )) --> n1(["de"]) --> s1(( ))
  s0 --> n2(["het"]) --> s1
```

#### 13.2.11 Onbepaaldlidwoord

```ebnf
<onbepaaldlidwoord> ::= "een"
```

```mermaid
flowchart LR
  s0(( )) --> n1(["een"]) --> s1(( ))
```

#### 13.2.12 Rangtelwoord

```ebnf
<rangtelwoord> ::= “eerstgenoemde” | “als tweede genoemde” | “als derde genoemde” | “als
vierde genoemde” | “als” <geheelgetal> “e genoemde” | “laatstgenoemde”
```

```mermaid
flowchart LR
  s0(( )) --> n1(["eerstgenoemde"]) --> s1(( ))
  s0 --> n2(["als tweede genoemde"]) --> s1
  s0 --> n3(["als derde genoemde"]) --> s1
  s0 --> n4(["als vierde genoemde"]) --> s1
  s0 --> n5(["als"]) --> n6["geheelgetal"] --> n7(["e genoemde"]) --> s1
  s0 --> n8(["laatstgenoemde"]) --> s1
```

#### 13.2.13 Waarde

```ebnf
<waarde> ::= <tekstwaarde> | <booleanwaarde> | <getalwaarde> | <dedato>
```

```mermaid
flowchart LR
  s0(( )) --> n1["tekstwaarde"] --> s1(( ))
  s0 --> n2["booleanwaarde"] --> s1
  s0 --> n3["getalwaarde"] --> s1
  s0 --> n4["dedato"] --> s1
```

*pagina 11*

#### 13.2.14 Enumeratiewaarde

```ebnf
<enumeratiewaarde> ::= "’" <karakterreeks> "‘"
```

```mermaid
flowchart LR
  s0(( )) --> n1(["’"]) --> n2["karakterreeks"] --> n3(["‘"]) --> s1(( ))
```

#### 13.2.15 Tekstwaarde

```ebnf
<tekstwaarde> ::= "\"" <karakterreeks> "\""
```

```mermaid
flowchart LR
  s0(( )) --> n1(["&quot;"]) --> n2["karakterreeks"] --> n3(["&quot;"]) --> s1(( ))
```

#### 13.2.16 Boolean waarde

```ebnf
<booleanwaarde> ::= ("waar" | "onwaar")
```

```mermaid
flowchart LR
  s0(( )) --> n1(["waar"]) --> s1(( ))
  s0 --> n2(["onwaar"]) --> s1
```

#### 13.2.17 Getalwaarde

```ebnf
<getalwaarde> ::= <getal> [(<eenheidsafkorting>+) | (<eenheidsafkorting>+ "/"
<eenheidsafkorting>+)]
```

```mermaid
flowchart LR
  s0(( )) --> n1["getal"] --> fork(( ))
  fork --> n2["eenheidsafkorting"] --> j2(( ))
  n2 -->|+| n2
  fork --> n3["eenheidsafkorting"] --> n4(["/"]) --> n5["eenheidsafkorting"] --> j2
  n3 -->|+| n3
  n5 -->|+| n5
  fork -->|?| j2
  j2 --> s1(( ))
```

#### 13.2.18 Percentage

```ebnf
<percentage> ::= <getal> "%"
```

```mermaid
flowchart LR
  s0(( )) --> n1["getal"] --> n2(["%"]) --> s1(( ))
```

#### 13.2.19 De dato

```ebnf
<dedato> ::= "dd. "<datumwaarde> [<tijdwaarde>]
```

```mermaid
flowchart LR
  s0(( )) --> n1(["dd. "]) --> n2["datumwaarde"] --> n3["tijdwaarde"] --> s1(( ))
  n2 -->|?| s1
```

#### 13.2.20 Datumwaarde

```ebnf
<datumwaarde> ::= <dag>"-"<maand>"-"<jaar>
```

*pagina 12*

```mermaid
flowchart LR
  s0(( )) --> n1["dag"] --> n2(["-"]) --> n3["maand"] --> n4(["-"]) --> n5["jaar"] --> s1(( ))
```

#### 13.2.21 Tijdwaarde

```ebnf
<tijdwaarde> ::= <uur>":"<minuut>":"<seconde>"."<milliseconde>
```

```mermaid
flowchart LR
  s0(( )) --> n1["uur"] --> n2([":"]) --> n3["minuut"] --> n4([":"]) --> n5["seconde"] --> n6(["."]) --> n7["milliseconde"] --> s1(( ))
```

#### 13.2.22 Dag

```ebnf
<dag> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13"
| "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26"
| "27" | "28" | "29" | "30" | "31"
```

*pagina 13*

```mermaid
flowchart LR
  s0(( )) --> n1(["1"]) --> s1(( ))
  s0 --> n2(["2"]) --> s1
  s0 --> n3(["3"]) --> s1
  s0 --> n4(["4"]) --> s1
  s0 --> n5(["5"]) --> s1
  s0 --> n6(["6"]) --> s1
  s0 --> n7(["7"]) --> s1
  s0 --> n8(["8"]) --> s1
  s0 --> n9(["9"]) --> s1
  s0 --> n10(["10"]) --> s1
  s0 --> n11(["11"]) --> s1
  s0 --> n12(["12"]) --> s1
  s0 --> n13(["13"]) --> s1
  s0 --> n14(["14"]) --> s1
  s0 --> n15(["15"]) --> s1
  s0 --> n16(["16"]) --> s1
  s0 --> n17(["17"]) --> s1
  s0 --> n18(["18"]) --> s1
  s0 --> n19(["19"]) --> s1
  s0 --> n20(["20"]) --> s1
  s0 --> n21(["21"]) --> s1
  s0 --> n22(["22"]) --> s1
  s0 --> n23(["23"]) --> s1
  s0 --> n24(["24"]) --> s1
  s0 --> n25(["25"]) --> s1
  s0 --> n26(["26"]) --> s1
  s0 --> n27(["27"]) --> s1
  s0 --> n28(["28"]) --> s1
  s0 --> n29(["29"]) --> s1
  s0 --> n30(["30"]) --> s1
  s0 --> n31(["31"]) --> s1
```

#### 13.2.23 Maand

```ebnf
<maand> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
```

*pagina 14*

```mermaid
flowchart LR
  s0(( )) --> n1(["1"]) --> s1(( ))
  s0 --> n2(["2"]) --> s1
  s0 --> n3(["3"]) --> s1
  s0 --> n4(["4"]) --> s1
  s0 --> n5(["5"]) --> s1
  s0 --> n6(["6"]) --> s1
  s0 --> n7(["7"]) --> s1
  s0 --> n8(["8"]) --> s1
  s0 --> n9(["9"]) --> s1
  s0 --> n10(["10"]) --> s1
  s0 --> n11(["11"]) --> s1
  s0 --> n12(["12"]) --> s1
```

#### 13.2.24 Jaar

```ebnf
<jaar> ::= ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") ("0" | "1" | "2" |
"3" | "4" | "5" | "6" | "7" | "8" | "9") ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" |
"8" | "9") ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")
```

```mermaid
flowchart LR
  s0(( )) --> g1(( ))
  g1 --> d10(["0"]) --> g1e(( ))
  g1 --> d11(["1"]) --> g1e
  g1 --> d12(["2"]) --> g1e
  g1 --> d13(["3"]) --> g1e
  g1 --> d14(["4"]) --> g1e
  g1 --> d15(["5"]) --> g1e
  g1 --> d16(["6"]) --> g1e
  g1 --> d17(["7"]) --> g1e
  g1 --> d18(["8"]) --> g1e
  g1 --> d19(["9"]) --> g1e
  g1e --> g2(( ))
  g2 --> d20(["0"]) --> g2e(( ))
  g2 --> d21(["1"]) --> g2e
  g2 --> d22(["2"]) --> g2e
  g2 --> d23(["3"]) --> g2e
  g2 --> d24(["4"]) --> g2e
  g2 --> d25(["5"]) --> g2e
  g2 --> d26(["6"]) --> g2e
  g2 --> d27(["7"]) --> g2e
  g2 --> d28(["8"]) --> g2e
  g2 --> d29(["9"]) --> g2e
  g2e --> g3(( ))
  g3 --> d30(["0"]) --> g3e(( ))
  g3 --> d31(["1"]) --> g3e
  g3 --> d32(["2"]) --> g3e
  g3 --> d33(["3"]) --> g3e
  g3 --> d34(["4"]) --> g3e
  g3 --> d35(["5"]) --> g3e
  g3 --> d36(["6"]) --> g3e
  g3 --> d37(["7"]) --> g3e
  g3 --> d38(["8"]) --> g3e
  g3 --> d39(["9"]) --> g3e
  g3e --> g4(( ))
  g4 --> d40(["0"]) --> s1(( ))
  g4 --> d41(["1"]) --> s1
  g4 --> d42(["2"]) --> s1
  g4 --> d43(["3"]) --> s1
  g4 --> d44(["4"]) --> s1
  g4 --> d45(["5"]) --> s1
  g4 --> d46(["6"]) --> s1
  g4 --> d47(["7"]) --> s1
  g4 --> d48(["8"]) --> s1
  g4 --> d49(["9"]) --> s1
```

*pagina 15*

#### 13.2.25 Uur

```ebnf
<uur> ::= "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" |
"11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23"
```

*pagina 16*

```mermaid
flowchart LR
  s0(( )) --> n0(["00"]) --> s1(( ))
  s0 --> n1(["01"]) --> s1
  s0 --> n2(["02"]) --> s1
  s0 --> n3(["03"]) --> s1
  s0 --> n4(["04"]) --> s1
  s0 --> n5(["05"]) --> s1
  s0 --> n6(["06"]) --> s1
  s0 --> n7(["07"]) --> s1
  s0 --> n8(["08"]) --> s1
  s0 --> n9(["09"]) --> s1
  s0 --> n10(["10"]) --> s1
  s0 --> n11(["11"]) --> s1
  s0 --> n12(["12"]) --> s1
  s0 --> n13(["13"]) --> s1
  s0 --> n14(["14"]) --> s1
  s0 --> n15(["15"]) --> s1
  s0 --> n16(["16"]) --> s1
  s0 --> n17(["17"]) --> s1
  s0 --> n18(["18"]) --> s1
  s0 --> n19(["19"]) --> s1
  s0 --> n20(["20"]) --> s1
  s0 --> n21(["21"]) --> s1
  s0 --> n22(["22"]) --> s1
  s0 --> n23(["23"]) --> s1
```

#### 13.2.26 Minuut

```ebnf
<minuut> ::= ("0" | "1" | "2" | "3" | "4" | "5") ("0" | "1" | "2" | "3" | "4" | "5" | "6"
| "7" | "8" | "9")
```

*pagina 17*

```mermaid
flowchart LR
  s0(( )) --> g1(( ))
  g1 --> a0(["0"]) --> g1e(( ))
  g1 --> a1(["1"]) --> g1e
  g1 --> a2(["2"]) --> g1e
  g1 --> a3(["3"]) --> g1e
  g1 --> a4(["4"]) --> g1e
  g1 --> a5(["5"]) --> g1e
  g1e --> g2(( ))
  g2 --> b0(["0"]) --> s1(( ))
  g2 --> b1(["1"]) --> s1
  g2 --> b2(["2"]) --> s1
  g2 --> b3(["3"]) --> s1
  g2 --> b4(["4"]) --> s1
  g2 --> b5(["5"]) --> s1
  g2 --> b6(["6"]) --> s1
  g2 --> b7(["7"]) --> s1
  g2 --> b8(["8"]) --> s1
  g2 --> b9(["9"]) --> s1
```

#### 13.2.27 Seconde

```ebnf
<seconde> ::= ("0" | "1" | "2" | "3" | "4" | "5") ("0" | "1" | "2" | "3" | "4" | "5" | "6"
| "7" | "8" | "9")
```

*pagina 18*

```mermaid
flowchart LR
  s0(( )) --> g1(( ))
  g1 --> a0(["0"]) --> g1e(( ))
  g1 --> a1(["1"]) --> g1e
  g1 --> a2(["2"]) --> g1e
  g1 --> a3(["3"]) --> g1e
  g1 --> a4(["4"]) --> g1e
  g1 --> a5(["5"]) --> g1e
  g1e --> g2(( ))
  g2 --> b0(["0"]) --> s1(( ))
  g2 --> b1(["1"]) --> s1
  g2 --> b2(["2"]) --> s1
  g2 --> b3(["3"]) --> s1
  g2 --> b4(["4"]) --> s1
  g2 --> b5(["5"]) --> s1
  g2 --> b6(["6"]) --> s1
  g2 --> b7(["7"]) --> s1
  g2 --> b8(["8"]) --> s1
  g2 --> b9(["9"]) --> s1
```

#### 13.2.28 Milliseconde

```ebnf
<milliseconde> ::= ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") ("0" | "1"
| "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") ("0" | "1" | "2" | "3" | "4" | "5" | "6"
| "7" | "8" | "9")
```

*pagina 19*

```mermaid
flowchart LR
  s0(( )) --> g1(( ))
  g1 --> a0(["0"]) --> g1e(( ))
  g1 --> a1(["1"]) --> g1e
  g1 --> a2(["2"]) --> g1e
  g1 --> a3(["3"]) --> g1e
  g1 --> a4(["4"]) --> g1e
  g1 --> a5(["5"]) --> g1e
  g1 --> a6(["6"]) --> g1e
  g1 --> a7(["7"]) --> g1e
  g1 --> a8(["8"]) --> g1e
  g1 --> a9(["9"]) --> g1e
  g1e --> g2(( ))
  g2 --> b0(["0"]) --> g2e(( ))
  g2 --> b1(["1"]) --> g2e
  g2 --> b2(["2"]) --> g2e
  g2 --> b3(["3"]) --> g2e
  g2 --> b4(["4"]) --> g2e
  g2 --> b5(["5"]) --> g2e
  g2 --> b6(["6"]) --> g2e
  g2 --> b7(["7"]) --> g2e
  g2 --> b8(["8"]) --> g2e
  g2 --> b9(["9"]) --> g2e
  g2e --> g3(( ))
  g3 --> c0(["0"]) --> s1(( ))
  g3 --> c1(["1"]) --> s1
  g3 --> c2(["2"]) --> s1
  g3 --> c3(["3"]) --> s1
  g3 --> c4(["4"]) --> s1
  g3 --> c5(["5"]) --> s1
  g3 --> c6(["6"]) --> s1
  g3 --> c7(["7"]) --> s1
  g3 --> c8(["8"]) --> s1
  g3 --> c9(["9"]) --> s1
```

#### 13.2.29 Naamwoord

```ebnf
<naamwoord> ::= [<bepaaldlidwoord>] <naam> ["(mv:" <meervoudsvorm> ")"]
```

```mermaid
flowchart LR
  s0(( )) --> bl["bepaaldlidwoord"]
  s0 --> nm["naam"]
  bl --> nm
  nm --> mv1(["(mv:"])
  nm --> s1(( ))
  mv1 --> mvv["meervoudsvorm"] --> mv2([")"]) --> s1
```

#### 13.2.30 Naam

```ebnf
<naam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.2.31 Meervoudsvorm

```ebnf
<meervoudsvorm> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

*pagina 20*

## 13.3 Objecten en parameters

### 13.3.1 Objecttypen

#### 13.3.1.1 Objecttypedefinitie

```ebnf
<objecttypedefinitie> ::= "Objecttype" <naamwoord> ["(bezield)"] \n
((<koptekst> | <kenmerk> | <attribuut>) \n)+
```

```mermaid
flowchart LR
  s0(( )) --> ot(["Objecttype"]) --> nw["naamwoord"]
  nw --> bz(["(bezield)"]) --> nl1(["\n"])
  nw --> nl1
  nl1 --> kt["koptekst"]
  nl1 --> km["kenmerk"]
  nl1 --> at["attribuut"]
  kt --> nl2(["\n"])
  km --> nl2
  at --> nl2
  nl2 --> s1(( ))
  nl2 -->|+| kt
```

#### 13.3.1.2 Extensie van objecttype

```ebnf
<extensievanobjecttype> ::= "Extensie van objecttype" <objecttypemetlidwoord> \n
((<koptekst> | <kenmerk> | <attribuut>) \n)+
```

```mermaid
flowchart LR
  s0(( )) --> ev(["Extensie van objecttype"]) --> ol["objecttypemetlidwoord"] --> nl1(["\n"])
  nl1 --> kt["koptekst"]
  nl1 --> km["kenmerk"]
  nl1 --> at["attribuut"]
  kt --> nl2(["\n"])
  km --> nl2
  at --> nl2
  nl2 --> s1(( ))
  nl2 -->|+| kt
```

#### 13.3.1.3 Objecttype met lidwoord

```ebnf
<objecttypemetlidwoord> ::= <bepaaldlidwoord> <objecttypenaam>
```

```mermaid
flowchart LR
  s0(( )) --> bl["bepaaldlidwoord"] --> on["objecttypenaam"] --> s1(( ))
```

#### 13.3.1.4 Objecttypenaam

```ebnf
<objecttypenaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.1.5 Koptekst

```ebnf
<koptekst> ::= "---" <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> d(["---"]) --> n1["karakterreeks"] --> s1(( ))
```

*pagina 21*

### 13.3.2 Attributen en kenmerken

#### 13.3.2.1 Kenmerk

```ebnf
<kenmerk> ::= ((<naamwoord> "kenmerk") | <bezittelijkkenmerk> | <bijvoeglijkkenmerk>)";"
```

```mermaid
flowchart LR
  s0(( )) --> nw["naamwoord"] --> km(["kenmerk"]) --> sc([";"])
  s0 --> bz["bezittelijkkenmerk"] --> sc
  s0 --> bv["bijvoeglijkkenmerk"] --> sc
  sc --> s1(( ))
```

#### 13.3.2.2 Bezittelijk kenmerk

```ebnf
<bezittelijkkenmerk> ::= <naamwoord> "kenmerk (bezittelijk)"
```

```mermaid
flowchart LR
  s0(( )) --> nw["naamwoord"] --> km(["kenmerk (bezittelijk)"]) --> s1(( ))
```

#### 13.3.2.3 Bijvoeglijk kenmerk

```ebnf
<bijvoeglijkkenmerk> ::= "is" <naam> ["(mv: " <meervoudsvorm> ")"] "kenmerk (bijvoeglijk)"
```

```mermaid
flowchart LR
  s0(( )) --> is(["is"]) --> nm["naam"]
  nm --> mv1(["(mv:"]) --> mvv["meervoudsvorm"] --> mv2([")"]) --> km(["kenmerk (bijvoeglijk)"])
  nm --> km
  km --> s1(( ))
```

#### 13.3.2.4 Kenmerknaam

```ebnf
<kenmerknaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.2.5 Attribuut

```ebnf
<attribuut> ::= <naamwoord> \t (<datatype> | <domeinnaam>) ["gedimensioneerd met"
<dimensienaam>] ";"
```

```mermaid
flowchart LR
  s0(( )) --> nw["naamwoord"] --> tab(["\t"])
  tab --> dt["datatype"]
  tab --> dn["domeinnaam"]
  dt --> gd(["gedimensioneerd met"])
  dn --> gd
  dt --> sc([";"])
  dn --> sc
  gd --> dim["dimensienaam"] --> sc
  sc --> s1(( ))
```

#### 13.3.2.6 Attribuut met lidwoord

```ebnf
<attribuutmetlidwoord> ::= [<bepaaldlidwoord>] <attribuutnaam>
```

```mermaid
flowchart LR
  s0(( )) --> bl["bepaaldlidwoord"] --> an["attribuutnaam"]
  s0 --> an
  an --> s1(( ))
```

*pagina 22*

#### 13.3.2.7 Attribuutnaam

```ebnf
<attribuutnaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

### 13.3.3 Datatypen

#### 13.3.3.1 Datatype

```ebnf
<datatype> ::= <numeriekdatatype> | <percentagedatatype> | <tekstdatatype> |
<booleandatatype> | <datumtijddatatype>
```

```mermaid
flowchart LR
  s0(( ))
  s0 --> n1["numeriekdatatype"] --> s1(( ))
  s0 --> n2["percentagedatatype"] --> s1
  s0 --> n3["tekstdatatype"] --> s1
  s0 --> n4["booleandatatype"] --> s1
  s0 --> n5["datumtijddatatype"] --> s1
```

#### 13.3.3.2 Numeriek datatype

```ebnf
<numeriekdatatype> ::= "Numeriek (" <getalspecificatie>   ")" ["met eenheid"
[(<eenheidmacht>+ | "1") "/"](<eenheidmacht>+)]
```

```mermaid
flowchart LR
  s0(( )) --> nm(["Numeriek ("]) --> gs["getalspecificatie"] --> rp([")"])
  rp --> me(["met eenheid"])
  rp --> s1(( ))
  me --> em1["eenheidmacht"]
  me --> one(["1"])
  me --> em2["eenheidmacht"]
  em1 -->|+| em1
  em1 --> sl(["/"])
  one --> sl
  sl --> em2
  em2 -->|+| em2
  em2 --> s1
```

#### 13.3.3.3 Percentage datatype

```ebnf
<percentagedatatype> ::= "Percentage (" <getalspecificatie>   ")" ["met eenheid %" ["/"
<eenheidsafkorting>]]
```

```mermaid
flowchart LR
  s0(( )) --> pc(["Percentage ("]) --> gs["getalspecificatie"] --> rp([")"])
  rp --> me(["met eenheid %"])
  rp --> s1(( ))
  me --> sl(["/"]) --> ea["eenheidsafkorting"] --> s1
  me --> s1
```

#### 13.3.3.4 Tekst datatype

```ebnf
<tekstdatatype> ::= "Tekst"
```

```mermaid
flowchart LR
  s0(( )) --> t(["Tekst"]) --> s1(( ))
```

*pagina 23*

#### 13.3.3.5 Boolean datatype

```ebnf
<booleandatatype> ::= "Boolean"
```

```mermaid
flowchart LR
  s0(( )) --> b(["Boolean"]) --> s1(( ))
```

#### 13.3.3.6 Datum-tijd datatype

```ebnf
<datumtijddatatype> ::= "Datum in dagen" | "Datum en tijd in millisecondes"
```

```mermaid
flowchart LR
  s0(( ))
  s0 --> d1(["Datum in dagen"]) --> s1(( ))
  s0 --> d2(["Datum en tijd in millisecondes"]) --> s1
```

#### 13.3.3.7 Getalspecificatie

```ebnf
<getalspecificatie> ::= ["negatief" | "niet-negatief" | "positief"] ("geheel getal" |
"getal met " <aantaldecimalen> " decimalen" | "getal")
```

```mermaid
flowchart LR
  s0(( )) --> fork(( ))
  s0 --> neg(["negatief"]) --> fork
  s0 --> nneg(["niet-negatief"]) --> fork
  s0 --> pos(["positief"]) --> fork
  fork --> gg(["geheel getal"]) --> s1(( ))
  fork --> gm(["getal met"]) --> ad["aantaldecimalen"] --> dec(["decimalen"]) --> s1
  fork --> g(["getal"]) --> s1
```

#### 13.3.3.8 Aantal decimalen

```ebnf
<aantaldecimalen> ::= <positiefgeheelgetal>
```

```mermaid
flowchart LR
  s0(( )) --> n1["positiefgeheelgetal"] --> s1(( ))
```

### 13.3.4 Domeinen

#### 13.3.4.1 Domeindefinitie

```ebnf
<domeindefinitie> ::= "Domein" <domeinnaam> "is van het type" (<datatype> |
<enumeratiespecificatie>)
```

```mermaid
flowchart LR
  s0(( )) --> dm(["Domein"]) --> dn["domeinnaam"] --> ivh(["is van het type"])
  ivh --> dt["datatype"] --> s1(( ))
  ivh --> es["enumeratiespecificatie"] --> s1
```

#### 13.3.4.2 Enumeratiespecificatie

```ebnf
<enumeratiespecificatie> ::= "Enumeratie" \n (\t <enumeratiewaarde> \n)+
```

```mermaid
flowchart LR
  s0(( )) --> en(["Enumeratie"]) --> nl1(["\n"]) --> tab(["\t"]) --> ew["enumeratiewaarde"] --> nl2(["\n"])
  nl2 --> s1(( ))
  nl2 -->|+| tab
```

*pagina 24*

#### 13.3.4.3 Domeinnaam

```ebnf
<domeinnaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.4.4 Enumeratiewaarde

```ebnf
<enumeratiewaarde> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

### 13.3.5 Eenheden

#### 13.3.5.1 Eenheidsysteem

```ebnf
<eenheidsysteem> ::= "Eenheidsysteem" <eenheidsysteemnaam>
(\n <naamwoord> <eenheidsafkorting> [<omrekenspecificatie>])+
```

```mermaid
flowchart LR
  s0(( )) --> es(["Eenheidsysteem"]) --> esn["eenheidsysteemnaam"] --> nl(["\n"])
  nl --> nw["naamwoord"] --> ea["eenheidsafkorting"]
  ea --> om["omrekenspecificatie"] --> s1(( ))
  ea --> s1
  om -->|+| nl
  ea -->|+| nl
```

#### 13.3.5.2 Omrekenspecificatie

```ebnf
<omrekenspecificatie> ::= "=" ["1/"]<geheelgetal> <eenheidsafkorting>
```

```mermaid
flowchart LR
  s0(( )) --> eq(["="]) --> gg["geheelgetal"]
  eq --> inv(["1/"]) --> gg
  gg --> ea["eenheidsafkorting"] --> s1(( ))
```

#### 13.3.5.3 Eenheidsysteemnaam

```ebnf
<eenheidsysteemnaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.5.4 Eenheidsafkorting

```ebnf
<eenheidsafkorting> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

*pagina 25*

#### 13.3.5.5 Eenheidmacht

```ebnf
<eenheidmacht> ::= <eenheidsafkorting>[^(<exponent>)]
```

```mermaid
flowchart LR
  s0(( )) --> ea["eenheidsafkorting"] --> caret(["^"]) --> exp["exponent"] --> s1(( ))
  ea --> s1
```

#### 13.3.5.6 Exponent

```ebnf
<exponent> ::= <geheelgetal>
```

```mermaid
flowchart LR
  s0(( )) --> n1["geheelgetal"] --> s1(( ))
```

### 13.3.6 Tijdlijnen

#### 13.3.6.1 Tijdlijn

```ebnf
<tijdlijn> ::= "voor" (<enkelvoudigeperiode> | <meervoudigeperiode> | “elke”
<tijdlijnnaam>)
```

```mermaid
flowchart LR
  s0(( )) --> voor(["voor"]) --> ep["enkelvoudigeperiode"] --> s1(( ))
  voor --> mp["meervoudigeperiode"] --> s1
  voor --> elke(["elke"]) --> tn["tijdlijnnaam"] --> s1
```

#### 13.3.6.2 Enkelvoudige periode

```ebnf
<enkelvoudigeperiode> ::= ("elke dag" | “elke week" <vaststartpuntdatum> | "elke maand"
[<vaststartpuntmaand>] | "elk kwartaal" [<vaststartpuntkwartaal>] | "elk jaar"
[<vaststartpuntjaar>])
```

```mermaid
flowchart LR
  s0(( )) --> d(["elke dag"]) --> s1(( ))
  s0 --> w(["elke week"]) --> wd["vaststartpuntdatum"] --> s1
  s0 --> m(["elke maand"]) --> md["vaststartpuntmaand"] --> s1
  m --> s1
  s0 --> k(["elk kwartaal"]) --> kd["vaststartpuntkwartaal"] --> s1
  k --> s1
  s0 --> j(["elk jaar"]) --> jd["vaststartpuntjaar"] --> s1
  j --> s1
```

*pagina 26*

#### 13.3.6.3 Vast startpunt datum

```ebnf
<vaststartpuntdatum> ::= “startend op” <datumwaarde>
```

```mermaid
flowchart LR
  s0(( )) --> so(["startend op"]) --> dw["datumwaarde"] --> s1(( ))
```

#### 13.3.6.4 Vast startpunt maand

```ebnf
<vaststartpuntmaand> ::= “startend op dag” <dag> “van de maand”
```

```mermaid
flowchart LR
  s0(( )) --> so(["startend op dag"]) --> dag["dag"] --> vm(["van de maand"]) --> s1(( ))
```

#### 13.3.6.5 Vast startpunt kwartaal

```ebnf
<vaststartpuntkwartaal> ::= “startend op dag” <dag> “van maand” (“1, 4, 7 en 10” | “2, 5,
8 en 11” | “3, 6, 9 en 12”)
```

```mermaid
flowchart LR
  s0(( )) --> so(["startend op dag"]) --> dag["dag"] --> vm(["van maand"])
  vm --> a(["1, 4, 7 en 10"]) --> s1(( ))
  vm --> b(["2, 5, 8 en 11"]) --> s1
  vm --> c(["3, 6, 9 en 12"]) --> s1
```

#### 13.3.6.6 Vast startpunt jaar

```ebnf
<vaststartpuntjaar> ::= “startend op dag” <dag> “van maand” <maand>
```

```mermaid
flowchart LR
  s0(( )) --> so(["startend op dag"]) --> dag["dag"] --> vm(["van maand"]) --> mnd["maand"] --> s1(( ))
```

#### 13.3.6.7 Meervoudige periode

```ebnf
<meervoudigeperiode> ::= "elke” <tijdseenhedenmeervoud> <vaststartpuntdatum>
```

```mermaid
flowchart LR
  s0(( )) --> elke(["elke"]) --> tm["tijdseenhedenmeervoud"] --> vd["vaststartpuntdatum"] --> s1(( ))
```

#### 13.3.6.8 Tijdseenheden meervoud

```ebnf
<tijdseenhedenmeervoud> ::= <digit>+ (“dagen” | “weken” | “maanden” | “kwartalen” |
“jaren”)
```

```mermaid
flowchart LR
  s0(( )) --> dg["digit"]
  dg -->|+| dg
  dg --> dagen(["dagen"]) --> s1(( ))
  dg --> weken(["weken"]) --> s1
  dg --> maanden(["maanden"]) --> s1
  dg --> kwartalen(["kwartalen"]) --> s1
  dg --> jaren(["jaren"]) --> s1
```

*pagina 27*

#### 13.3.6.9 Tijdlijnnaam

```ebnf
<tijdlijnnaam> ::= <naamwoord>
```

```mermaid
flowchart LR
  s0(( )) --> n1["naamwoord"] --> s1(( ))
```

#### 13.3.6.10 Tijdlijndefinitie

```ebnf
<tijdlijndefinitie> ::= “Tijdlijn” <tijdlijnnaam> “heeft tijdvakken van” ((“een” (“dag” |
“week” (<vaststartpuntdatum> | “met variabel startpunt”) | “maand” (<vaststartpuntmaand>
| “met variabel startpunt”) | “kwartaal” (<vaststartpuntkwartaal> | “met variabel
startpunt”) | “jaar” (<vaststartpuntjaar> | “met variabel startpunt”))) |
(<tijdseenhedenmeervoud> (<vaststartpuntdatum> | “met variabel startpunt”))
```

```mermaid
flowchart LR
  s0(( )) --> tl(["Tijdlijn"]) --> tn["tijdlijnnaam"] --> htv(["heeft tijdvakken van"])
  htv --> een(["een"])
  een --> dag(["dag"]) --> s1(( ))
  een --> week(["week"]) --> wvd["vaststartpuntdatum"] --> s1
  week --> wvar(["met variabel startpunt"]) --> s1
  een --> maand(["maand"]) --> mvm["vaststartpuntmaand"] --> s1
  maand --> mvar(["met variabel startpunt"]) --> s1
  een --> kwartaal(["kwartaal"]) --> kvk["vaststartpuntkwartaal"] --> s1
  kwartaal --> kvar(["met variabel startpunt"]) --> s1
  een --> jaar(["jaar"]) --> jvj["vaststartpuntjaar"] --> s1
  jaar --> jvar(["met variabel startpunt"]) --> s1
  htv --> tm["tijdseenhedenmeervoud"] --> tvd["vaststartpuntdatum"] --> s1
  tm --> tvar(["met variabel startpunt"]) --> s1
```

### 13.3.7 Dimensies

#### 13.3.7.1 Dimensie

```ebnf
<dimensie> ::= "Dimensie" <bepaaldlidwoord> <dimensienaam> ", bestaande uit de "
<dimensienaammeervoud> <voorzetselspecificatie> \n (<labelwaardespecificatie> \n)+
```

```mermaid
flowchart LR
  s0(( )) --> dim(["Dimensie"]) --> bl["bepaaldlidwoord"] --> dn["dimensienaam"]
  dn --> beu([", bestaande uit de "]) --> dnm["dimensienaammeervoud"]
  dnm --> vs["voorzetselspecificatie"] --> nl(["\n"]) --> lw["labelwaardespecificatie"] --> nl2(["\n"]) --> s1(( ))
  nl2 -->|+| lw
```

*pagina 28*

#### 13.3.7.2 Voorzetselspecificatie

```ebnf
<voorzetselspecificatie> ::= ("(na het attribuut met voorzetsel" ( "van" | "in" | "voor" |
"over" | "op" | "bij" | "uit" ) "):" | "(voor het attribuut zonder voorzetsel):")
```

```mermaid
flowchart LR
  s0(( )) --> na(["(na het attribuut met voorzetsel"])
  na --> van(["van"]) --> close(["):"])
  na --> in(["in"]) --> close
  na --> voor(["voor"]) --> close
  na --> over(["over"]) --> close
  na --> op(["op"]) --> close
  na --> bij(["bij"]) --> close
  na --> uit(["uit"]) --> close
  close --> s1(( ))
  s0 --> voorz(["(voor het attribuut zonder voorzetsel):"]) --> s1
```

#### 13.3.7.3 Dimensienaam

```ebnf
<dimensienaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.7.4 Dimensienaam meervoud

```ebnf
<dimensienaammeervoud> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.7.5 Labelwaardespecificatie

```ebnf
<labelwaardespecificatie> ::= <digit>+". " <dimensiewaarde>
```

```mermaid
flowchart LR
  s0(( )) --> dg["digit"]
  dg -->|+| dg
  dg --> dot(["."]) --> dw["dimensiewaarde"] --> s1(( ))
```

*pagina 29*

#### 13.3.7.6 Dimensiewaarde

```ebnf
<dimensiewaarde> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

### 13.3.8 Parameters

#### 13.3.7.1 Parameterdefinitie

```ebnf
<parameterdefinitie> ::= "Parameter" <parametermetlidwoord> ":" (<datatype> |
<domeinnaam>)
```

```mermaid
flowchart LR
  s0(( )) --> p(["Parameter"]) --> pml["parametermetlidwoord"] --> colon([":"])
  colon --> dt["datatype"] --> s1(( ))
  colon --> dn["domeinnaam"] --> s1
```

#### 13.3.8.2 Parameter met lidwoord

```ebnf
<parametermetlidwoord> ::= <bepaaldlidwoord> <parameternaam>
```

```mermaid
flowchart LR
  s0(( )) --> bl["bepaaldlidwoord"] --> pn["parameternaam"] --> s1(( ))
```

#### 13.3.8.3 Parameternaam

```ebnf
<parameternaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

### 13.3.9 Feittypen

#### 13.3.9.1 Feittype definitie

```ebnf
<feittypedefinitie> ::= "Feittype" <feittypenaam> \n [<bepaaldlidwoord>] <rolnaam> ["(mv:
" <meervoudrolnaam> ")"] \t <objecttypenaam> \n [<bepaaldlidwoord>] <rolnaam> ["(mv: "
<meervoudrolnaam> ")"] \t <objecttypenaam> \n ("één" <rolnaam> | "meerdere"
<meervoudrolnaam>) <relatiebeschrijving> ("één" <rolnaam> | "meerdere" <meervoudrolnaam>)
```

*(syntaxdiagram te complex voor Mermaid — zie PDF pagina 30)*

*pagina 30*

#### 13.3.9.2 Wederkerig feittype definitie

```ebnf
<wederkerigfeittypedefinitie> ::= "Wederkerig feittype" <feittypenaam> \n
[<bepaaldlidwoord>] <rolnaam> ["(mv: " <meervoudrolnaam> ")"] \t <objecttypenaam>   \n
(("één" <rolnaam> <relatiebeschrijving> "één" <rolnaam>) | ("meerdere" <rolnaam>
<relatiebeschrijving> "meerdere" <rolnaam>))
```

*(syntaxdiagram te complex voor Mermaid — zie PDF pagina 31)*

#### 13.3.9.3 Feittypenaam

```ebnf
<feittypenaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.9.4 Rolnaam

```ebnf
<rolnaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.9.5 Meervoudrolnaam

```ebnf
<meervoudrolnaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.3.9.6 Relatiebeschrijving

```ebnf
<relatiebeschrijving> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

*pagina 31*

### 13.3.10 Dagsoort

#### 13.3.10.1 Dagsoort

```ebnf
<dagsoort> ::= "Dagsoort" <naamwoord>
```

```mermaid
flowchart LR
  s0(( )) --> d(["Dagsoort"]) --> n1["naamwoord"] --> s1(( ))
```

#### 13.3.10.2 Dagsoortnaam

```ebnf
<dagsoortnaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

*pagina 32*

## 13.4 RegelSpraak

### 13.4.1 Onderwerpketen

#### 13.4.1.1 Onderwerpketen

```ebnf
<onderwerpketen> ::= <universeelonderwerp> | <onderwerpverwijzing> | ((<selector> "van"
<onderwerpketen>) | (“zijn” (<rolnaam> | <attribuutnaam>)) | <subselectie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> uo["universeelonderwerp"] --> j{ }
  f --> ov["onderwerpverwijzing"] --> j
  f --> sel["selector"] --> van(["van"]) --> ok["onderwerpketen"] --> j
  f --> zijn(["zijn"]) --> rn["rolnaam"] --> j
  zijn --> an["attribuutnaam"] --> j
  f --> sub["subselectie"] --> j
  j --> s1(( ))
```

#### 13.4.1.2 Universeel onderwerp

```ebnf
<universeelonderwerp> ::= <onbepaaldlidwoord> (<objecttypenaam> | <rolnaam> |
<kenmerknaam>)
```

```mermaid
flowchart LR
  s0(( )) --> ol["onbepaaldlidwoord"] --> f{ }
  f --> otn["objecttypenaam"] --> j{ }
  f --> rn["rolnaam"] --> j
  f --> kn["kenmerknaam"] --> j
  j --> s1(( ))
```

#### 13.4.1.3 Onderwerpverwijzing

```ebnf
<onderwerpverwijzing> ::= <bepaaldlidwoord> [<rangtelwoord>] (<objecttypenaam> | <rolnaam>
| <kenmerknaam> | <attribuutnaam>)
```

```mermaid
flowchart LR
  s0(( )) --> bl["bepaaldlidwoord"] --> rt["rangtelwoord"] --> f{ }
  bl --> f
  f --> otn["objecttypenaam"] --> j{ }
  f --> rn["rolnaam"] --> j
  f --> kn["kenmerknaam"] --> j
  f --> an["attribuutnaam"] --> j
  j --> s1(( ))
```

*pagina 33*

### 13.4.2 RegelSpraak-regel

#### 13.4.2.1 Regel

```ebnf
<regel> ::= "Regel" <regelnaam> (\n <regelversie>)+
```

```mermaid
flowchart LR
  s0(( )) --> r(["Regel"]) --> rn["regelnaam"] --> nl(["\n"]) --> rv["regelversie"] --> s1(( ))
  rv -- "+" --> nl
```

#### 13.4.2.2 Regelnaam

```ebnf
<regelnaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

#### 13.4.2.3 Regelversie

```ebnf
<regelversie> ::= <versie> \n <regelspraakregel>
```

```mermaid
flowchart LR
  s0(( )) --> v["versie"] --> nl(["\n"]) --> rsr["regelspraakregel"] --> s1(( ))
```

#### 13.4.2.4 Versie

```ebnf
<versie> ::= "geldig" <versiegeldigheid>
```

```mermaid
flowchart LR
  s0(( )) --> g(["geldig"]) --> vg["versiegeldigheid"] --> s1(( ))
```

#### 13.4.2.5 Versiegeldigheid

```ebnf
<versiegeldigheid> ::= "altijd" | ("vanaf " (<datumwaarde> | <jaar>) ["t/m "
(<datumwaarde> | <jaar>)]) | ("t/m " (<datumwaarde> | <jaar>))
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> alt(["altijd"]) --> j{ }
  f --> vanaf(["vanaf "]) --> v1{ }
  v1 --> dw1["datumwaarde"] --> v2{ }
  v1 --> jr1["jaar"] --> v2
  v2 --> tm1(["t/m "]) --> v3{ }
  v3 --> dw2["datumwaarde"] --> j
  v3 --> jr2["jaar"] --> j
  v2 --> j
  f --> tm2(["t/m "]) --> v4{ }
  v4 --> dw3["datumwaarde"] --> j
  v4 --> jr3["jaar"] --> j
  j --> s1(( ))
```

#### 13.4.2.6 RegelSpraakregel

```ebnf
<regelSpraakregel> ::= <resultaatdeel> \n [<voorwaardendeel>] "." [<variabelendeel>]
```

```mermaid
flowchart LR
  s0(( )) --> rd["resultaatdeel"] --> nl(["\n"]) --> vwd["voorwaardendeel"] --> dot(["."])
  nl --> dot
  dot --> vbd["variabelendeel"] --> s1(( ))
  dot --> s1
```

*pagina 34*

#### 13.4.2.7 Selector

```ebnf
<selector> ::= <lidwoord> (<rolnaam> | <attribuutnaam>)
```

```mermaid
flowchart LR
  s0(( )) --> lw["lidwoord"] --> f{ }
  f --> rn["rolnaam"] --> j{ }
  f --> an["attribuutnaam"] --> j
  j --> s1(( ))
```

#### 13.4.2.8 Subselectie

```ebnf
<subselectie> ::= <onderwerpketen> ("die" | "dat") <predicaat>
```

```mermaid
flowchart LR
  s0(( )) --> ok["onderwerpketen"] --> f{ }
  f --> die(["die"]) --> j{ }
  f --> dat(["dat"]) --> j
  j --> pr["predicaat"] --> s1(( ))
```

#### 13.4.2.9 Attribuut van onderwerp

```ebnf
<attribuutvanonderwerp> ::= ([<kwantificatie>] <attribuutmetlidwoord> | <bepaaldlidwoord>
<rangtelwoord> <attribuutnaam>) "van" <onderwerpketen>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> kw["kwantificatie"] --> aml["attribuutmetlidwoord"] --> j{ }
  f --> aml
  f --> bl["bepaaldlidwoord"] --> rt["rangtelwoord"] --> an["attribuutnaam"] --> j
  j --> van(["van"]) --> ok["onderwerpketen"] --> s1(( ))
```

#### 13.4.2.10 Variabelendeel

```ebnf
<variabelendeel> ::= "Daarbij geldt:" (\n \t <variabeleonderdeel>)* "."
```

```mermaid
flowchart LR
  s0(( )) --> dg(["Daarbij geldt:"]) --> nl(["\n"]) --> tab(["\t"]) --> vo["variabeleonderdeel"] --> dot(["."])
  dg --> dot
  vo -- "*" --> nl
  dot --> s1(( ))
```

#### 13.4.2.11 Variabele onderdeel

```ebnf
<variabeleonderdeel> ::= [ <bepaaldlidwoord> ] <variabelenaam> "is" <expressie>
```

```mermaid
flowchart LR
  s0(( )) --> bl["bepaaldlidwoord"] --> vn["variabelenaam"]
  s0 --> vn
  vn --> is(["is"]) --> ex["expressie"] --> s1(( ))
```

#### 13.4.2.12 Variabelenaam

```ebnf
<variabelenaam> ::= <karakterreeks>
```

```mermaid
flowchart LR
  s0(( )) --> n1["karakterreeks"] --> s1(( ))
```

*pagina 35*

### 13.4.3 Resultaatdeel

#### 13.4.3.1 Resultaatdeel

```ebnf
<resultaatdeel> ::= <gelijkstelling> | <kenmerktoekenning> | <objectcreatie> |
<feitcreatie> | <consistentieregel> | <initialisatie> | <verdeling> | <dagsoortdefinitie>
| <startpuntbepaling>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["gelijkstelling"]
  f --> n2["kenmerktoekenning"]
  f --> n3["objectcreatie"]
  f --> n4["feitcreatie"]
  f --> n5["consistentieregel"]
  f --> n6["initialisatie"]
  f --> n7["verdeling"]
  f --> n8["dagsoortdefinitie"]
  f --> n9["startpuntbepaling"]
  n1 --> j{ }
  n2 --> j
  n3 --> j
  n4 --> j
  n5 --> j
  n6 --> j
  n7 --> j
  n8 --> j
  n9 --> j
  j --> s1(( ))
```

### 13.4.4 Gelijkstelling

#### 13.4.4.1 Gelijkstelling

```ebnf
<gelijkstelling> ::= (<gelijkstellingtoekenning> | <gelijkstellingberekening>)
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["gelijkstellingtoekenning"]
  f --> n2["gelijkstellingberekening"]
  n1 --> j{ }
  n2 --> j
  j --> s1(( ))
```

#### 13.4.4.2 Gelijkstellingtoekenning

```ebnf
<gelijkstellingtoekenning> ::= <attribuutvanonderwerp> "moet gesteld worden op"
<expressie>
```

```mermaid
flowchart LR
  s0(( )) --> n1["attribuutvanonderwerp"] --> n2(["moet gesteld worden op"]) --> n3["expressie"] --> s1(( ))
```

*pagina 36*

#### 13.4.4.3 Gelijkstellingberekening

```ebnf
<gelijkstellingberekening> ::= <attribuutvanonderwerp> "moet berekend worden als"
(<getalexpressie> | <datumexpressie>)
```

```mermaid
flowchart LR
  s0(( )) --> n1["attribuutvanonderwerp"] --> n2(["moet berekend worden als"]) --> f{ }
  f --> n3["getalexpressie"]
  f --> n4["datumexpressie"]
  n3 --> j{ }
  n4 --> j
  j --> s1(( ))
```

### 13.4.5 Kenmerktoekenning

#### 13.4.5.1 Kenmerktoekenning

```ebnf
<kenmerktoekenning> ::= <onderwerpketen> ("is" | "heeft") ["een"] <kenmerknaam>
```

```mermaid
flowchart LR
  s0(( )) --> n1["onderwerpketen"] --> f{ }
  f --> is(["is"])
  f --> heeft(["heeft"])
  is --> j{ }
  heeft --> j
  j --> een(["een"]) --> n2["kenmerknaam"]
  j --> n2
  n2 --> s1(( ))
```

### 13.4.6 ObjectCreatie

#### 13.4.6.1 Objectcreatie

```ebnf
<objectcreatie> ::= "Een" <onderwerpketen> "heeft een" <rolnaam> [ "met"
<waardetoekenning> [("," <waardetoekenning>)* "en" <waardetoekenning>] ]
```

```mermaid
flowchart LR
  s0(( )) --> een(["Een"]) --> ok["onderwerpketen"] --> he(["heeft een"]) --> rn["rolnaam"]
  rn --> s1(( ))
  rn --> met(["met"]) --> w1["waardetoekenning"]
  w1 --> en(["en"]) --> w3["waardetoekenning"] --> s1
  w1 --> en
  w1 --> comma([","]) --> w2["waardetoekenning"] --> en
  w2 -- "*" --> comma
```

#### 13.4.6.2 Waarde toekenning

```ebnf
<waardetoekenning> ::= <attribuutwaardetoekenning> | <kenmerkwaardetoekenning>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["attribuutwaardetoekenning"]
  f --> n2["kenmerkwaardetoekenning"]
  n1 --> j{ }
  n2 --> j
  j --> s1(( ))
```

#### 13.4.6.3 Attribuutwaarde toekenning

```ebnf
<attribuutwaardetoekenning> ::= <attribuut> "gelijk aan" <expressie>
```

```mermaid
flowchart LR
  s0(( )) --> n1["attribuut"] --> n2(["gelijk aan"]) --> n3["expressie"] --> s1(( ))
```

#### 13.4.6.4 Kenmerkwaarde toekenning

```ebnf
<kenmerkwaardetoekenning> ::= <kenmerknaam> "gelijk aan" ("waar" | "onwaar")
```

```mermaid
flowchart LR
  s0(( )) --> n1["kenmerknaam"] --> ga(["gelijk aan"]) --> f{ }
  f --> waar(["waar"])
  f --> onwaar(["onwaar"])
  waar --> j{ }
  onwaar --> j
  j --> s1(( ))
```

*pagina 37*

### 13.4.7 FeitCreatie

#### 13.4.7.1 Feitcreatie

```ebnf
<feitcreatie> ::= "Een" <rolnaam> "van een" <onderwerpketen> "is een" <rolnaam> "van een"
<onderwerpketen>
```

```mermaid
flowchart LR
  s0(( )) --> een(["Een"]) --> rn1["rolnaam"] --> vae1(["van een"]) --> ok1["onderwerpketen"] --> ise(["is een"]) --> rn2["rolnaam"] --> vae2(["van een"]) --> ok2["onderwerpketen"] --> s1(( ))
```

### 13.4.8 Consistentieregels

#### 13.4.8.1 Consistentieregel

```ebnf
<consistentieregel> ::= <enkelvoudigeconsistentieregel> | <toplevelsamengesteldcriterium> |
<uniciteitscontrole>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["enkelvoudigeconsistentieregel"]
  f --> n2["toplevelsamengesteldcriterium"]
  f --> n3["uniciteitscontrole"]
  n1 --> j{ }
  n2 --> j
  n3 --> j
  j --> s1(( ))
```

#### 13.4.8.2 Enkelvoudige consistentieregel

```ebnf
<enkelvoudigeconsistentieregel> ::= <getalconsistentie> | <datumconsistentie> |
<tekstconsistentie> | <objectconsistentie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["getalconsistentie"]
  f --> n2["datumconsistentie"]
  f --> n3["tekstconsistentie"]
  f --> n4["objectconsistentie"]
  n1 --> j{ }
  n2 --> j
  n3 --> j
  n4 --> j
  j --> s1(( ))
```

#### 13.4.8.3 Getalconsistentie

```ebnf
<getalconsistentie> ::= <getalexpressie> "moet"
(<topleveleenzijdigegetalvergelijkingsoperatormeervoud> |
<topleveltweezijdigegetalvergelijkingsoperatormeervoud>)
```

```mermaid
flowchart LR
  s0(( )) --> n1["getalexpressie"] --> moet(["moet"]) --> f{ }
  f --> n2["topleveleenzijdigegetalvergelijkingsoperatormeervoud"]
  f --> n3["topleveltweezijdigegetalvergelijkingsoperatormeervoud"]
  n2 --> j{ }
  n3 --> j
  j --> s1(( ))
```

*pagina 38*

#### 13.4.8.4 Datumconsistentie

```ebnf
<datumconsistentie> ::= <datumexpressie> "moet"
(<topleveleenzijdigedatumvergelijkingsoperatormeervoud> |
<topleveltweezijdigedatumvergelijkingsoperatormeervoud>)
```

```mermaid
flowchart LR
  s0(( )) --> n1["datumexpressie"] --> moet(["moet"]) --> f{ }
  f --> n2["topleveleenzijdigedatumvergelijkingsoperatormeervoud"]
  f --> n3["topleveltweezijdigedatumvergelijkingsoperatormeervoud"]
  n2 --> j{ }
  n3 --> j
  j --> s1(( ))
```

#### 13.4.8.5 Tekstconsistentie

```ebnf
<tekstconsistentie> ::= <tekstexpressie> "moet"
(<topleveleenzijdigetekstvergelijkingsoperatormeervoud> |
<topleveltweezijdigetekstvergelijkingsoperatormeervoud>)
```

```mermaid
flowchart LR
  s0(( )) --> n1["tekstexpressie"] --> moet(["moet"]) --> f{ }
  f --> n2["topleveleenzijdigetekstvergelijkingsoperatormeervoud"]
  f --> n3["topleveltweezijdigetekstvergelijkingsoperatormeervoud"]
  n2 --> j{ }
  n3 --> j
  j --> s1(( ))
```

#### 13.4.8.6 Objectconsistentie

```ebnf
<objectconsistentie> ::= <objectexpressie> "moet"
(<topleveleenzijdigeobjectvergelijkingsoperatormeervoud> |
<topleveltweezijdigeobjectvergelijkingsoperatormeervoud>)
```

```mermaid
flowchart LR
  s0(( )) --> n1["objectexpressie"] --> moet(["moet"]) --> f{ }
  f --> n2["topleveleenzijdigeobjectvergelijkingsoperatormeervoud"]
  f --> n3["topleveltweezijdigeobjectvergelijkingsoperatormeervoud"]
  n2 --> j{ }
  n3 --> j
  j --> s1(( ))
```

#### 13.4.8.7 Toplevel samengesteld criterium

```ebnf
<toplevelsamengesteldcriterium> ::= "er moet worden voldaan aan" ("het volgende
criterium:" | (<consistentiekwantificatie> "volgende criteria:")
<samengesteldcriteriumonderdeel>
```

```mermaid
flowchart LR
  s0(( )) --> emwva(["er moet worden voldaan aan"]) --> f{ }
  f --> hvc(["het volgende criterium:"])
  f --> ck["consistentiekwantificatie"] --> vc(["volgende criteria:"])
  hvc --> j{ }
  vc --> j
  j --> sco["samengesteldcriteriumonderdeel"] --> s1(( ))
```

#### 13.4.8.8 Samengesteld criterium onderdeel

```ebnf
<samengesteldcriteriumonderdeel> ::= \n \t   <genestcriterium> (\n <genestcriterium>)+
```

```mermaid
flowchart LR
  s0(( )) --> nl1(["\n"]) --> tab(["\t"]) --> gc1["genestcriterium"] --> nl2(["\n"]) --> gc2["genestcriterium"] --> s1(( ))
  gc2 -- "+" --> nl2
```

*pagina 39*

#### 13.4.8.9 Genest criterium

```ebnf
<genestcriterium> ::= ("•")+ (<voorwaardevergelijking> | <samengesteldcriterium>)
```

```mermaid
flowchart LR
  s0(( )) --> bullet(["•"]) --> f{ }
  bullet -- "+" --> bullet
  f --> n1["voorwaardevergelijking"]
  f --> n2["samengesteldcriterium"]
  n1 --> j{ }
  n2 --> j
  j --> s1(( ))
```

#### 13.4.8.10 Samengesteld criterium

```ebnf
<samengesteldcriterium> ::= "er wordt voldaan aan" ("het volgende criterium:" |
(<consistentiekwantificatie> "volgende criteria:") <samengesteldcriteriumonderdeel>
```

```mermaid
flowchart LR
  s0(( )) --> ewva(["er wordt voldaan aan"]) --> f{ }
  f --> hvc(["het volgende criterium:"])
  f --> ck["consistentiekwantificatie"] --> vc(["volgende criteria:"])
  hvc --> j{ }
  vc --> j
  j --> sco["samengesteldcriteriumonderdeel"] --> s1(( ))
```

#### 13.4.8.11 Uniciteitscontrole

```ebnf
<uniciteitscontrole> ::= (<alleattribuutvanonderwerp> | <uniciteitconcatenatie>)
<vereniging>* "moeten uniek zijn."
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["alleattribuutvanonderwerp"]
  f --> n2["uniciteitconcatenatie"]
  n1 --> j{ }
  n2 --> j
  j --> v["vereniging"] --> muz(["moeten uniek zijn."])
  j --> muz
  v -- "*" --> v
  muz --> s1(( ))
```

#### 13.4.8.12 Vereniging

```ebnf
<vereniging> ::= "verenigd met" (<alleattribuutvanonderwerp> | <uniciteitconcatenatie>)
```

```mermaid
flowchart LR
  s0(( )) --> vm(["verenigd met"]) --> f{ }
  f --> n1["alleattribuutvanonderwerp"]
  f --> n2["uniciteitconcatenatie"]
  n1 --> j{ }
  n2 --> j
  j --> s1(( ))
```

#### 13.4.8.13 Alle attribuut van onderwerp

```ebnf
<alleattribuutvanonderwerp> ::= "de" <meervoudsvorm> "van alle" ((<objecttypenaam> |
<rolnaam>) "van" <onderwerpketen>) ["van" <onderwerpketen>]
```

```mermaid
flowchart LR
  s0(( )) --> de(["de"]) --> mv["meervoudsvorm"] --> vanalle(["van alle"]) --> f{ }
  f --> otn["objecttypenaam"]
  f --> rn["rolnaam"]
  otn --> j{ }
  rn --> j
  j --> van1(["van"]) --> ok1["onderwerpketen"]
  ok1 --> s1(( ))
  ok1 --> van2(["van"]) --> ok2["onderwerpketen"] --> s1
```

*pagina 40*

#### 13.4.8.14 Uniciteitsconcatenatie

```ebnf
<uniciteitconcatenatie> ::= "de concatenatie van" <meervoudsvorm> ("," <meervoudsvorm>)*
"en" <meervoudsvorm> "van alle" ((<objecttypenaam> | <rolnaam>) "van" <onderwerpketen>)
["van" <onderwerpketen>]
```

```mermaid
flowchart LR
  s0(( )) --> dcv(["de concatenatie van"]) --> mv1["meervoudsvorm"]
  mv1 --> komma([","]) --> mv2["meervoudsvorm"]
  mv2 -- "*" --> komma
  mv1 --> en(["en"])
  mv2 --> en
  en --> mv3["meervoudsvorm"] --> vanalle(["van alle"]) --> f{ }
  f --> otn["objecttypenaam"]
  f --> rn["rolnaam"]
  otn --> j{ }
  rn --> j
  j --> van1(["van"]) --> ok1["onderwerpketen"]
  ok1 --> s1(( ))
  ok1 --> van2(["van"]) --> ok2["onderwerpketen"] --> s1
```

### 13.4.9 Initialisatie

#### 13.4.9.1 Initialisatie

```ebnf
<initialisatie> ::= <attribuutvanonderwerp> "moet geïnitialiseerd worden op" <expressie>
```

```mermaid
flowchart LR
  s0(( )) --> avo["attribuutvanonderwerp"] --> mgi(["moet geïnitialiseerd worden op"]) --> e["expressie"] --> s1(( ))
```

### 13.4.10 Verdeling

Opmerkingen:
* Als <maximumaanspraak> of <verdeelafronding> worden gebruikt, dan is <onverdeelderest> verplicht.
* <maximumaanspraak> kan alleen worden gebruikt als <verdelenzondergroepen> of <criteriumbijgelijkevolgorde> gelijk zijn aan "naar rato van".

#### 13.4.10.1 Verdeling

```ebnf
<verdeling> ::= <attribuutvanonderwerp> "wordt verdeeld over" <attribuutvanonderwerp> ",
waarbij wordt verdeeld" (<verdelenzondergroepen> | <meervoudigcriterium>)
```

```mermaid
flowchart LR
  s0(( )) --> avo1["attribuutvanonderwerp"] --> wvo(["wordt verdeeld over"]) --> avo2["attribuutvanonderwerp"] --> wwv([", waarbij wordt verdeeld"]) --> f{ }
  f --> vzg["verdelenzondergroepen"]
  f --> mc["meervoudigcriterium"]
  vzg --> j{ }
  mc --> j
  j --> s1(( ))
```

#### 13.4.10.2 Verdelen zonder groepen

```ebnf
<verdelenzondergroepen> ::= "in gelijke delen" | ("naar rato van" <attribuutmetlidwoord>)
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> igd(["in gelijke delen"])
  f --> nrv(["naar rato van"]) --> aml["attribuutmetlidwoord"]
  igd --> j{ }
  aml --> j
  j --> s1(( ))
```

*pagina 41*

#### 13.4.10.3 Meervoudig criterium

```ebnf
<meervoudigcriterium> ::= ":" \n (<verdelenovergroepen> | (<verdelenzondergroepen> ","))
[\n <maximumaanspraak>] [\n <veldeelafronding>] [\n <onverdeelderest>]
```

```mermaid
flowchart LR
  s0(( )) --> dp([":"]) --> f{ }
  f --> vog["verdelenovergroepen"]
  f --> vzg["verdelenzondergroepen"] --> komma([","])
  vog --> j{ }
  komma --> j
  j --> ma["maximumaanspraak"]
  j --> j2{ }
  ma --> j2
  j2 --> va["verdeelafronding"]
  j2 --> j3{ }
  va --> j3
  j3 --> or["onverdeelderest"]
  j3 --> s1(( ))
  or --> s1
```

#### 13.4.10.4 Verdelen over groepen

```ebnf
<verdelenovergroepen> ::= "- op volgorde van" (afnemende | toenemende)
<attribuutmetlidwoord> \n <criteriumbijgelijkevolgorde> ","
```

```mermaid
flowchart LR
  s0(( )) --> opv(["- op volgorde van"]) --> f{ }
  f --> afn(["afnemende"])
  f --> toe(["toenemende"])
  afn --> j{ }
  toe --> j
  j --> aml["attribuutmetlidwoord"] --> cbg["criteriumbijgelijkevolgorde"] --> komma([","]) --> s1(( ))
```

#### 13.4.10.5 Criterium bij gelijke volgorde

```ebnf
<criteriumbijgelijkevolgorde> ::= "- bij even groot criterium" ("in gelijke delen" |
("naar rato van" <attribuutmetlidwoord>)) ","
```

```mermaid
flowchart LR
  s0(( )) --> begc(["- bij even groot criterium"]) --> f{ }
  f --> igd(["in gelijke delen"])
  f --> nrv(["naar rato van"]) --> aml["attribuutmetlidwoord"]
  igd --> j{ }
  aml --> j
  j --> komma([","]) --> s1(( ))
```

#### 13.4.10.6 Maximum aanspraak

```ebnf
<maximumaanspraak> ::= "- met een maximum van" <attribuutmetlidwoord> ","
```

```mermaid
flowchart LR
  s0(( )) --> mmv(["- met een maximum van"]) --> aml["attribuutmetlidwoord"] --> komma([","]) --> s1(( ))
```

#### 13.4.10.7 Verdeelafronding

```ebnf
<verdeelafronding> ::= "- afgerond op" <geheelgetal> "decimalen naar beneden."
```

```mermaid
flowchart LR
  s0(( )) --> ao(["- afgerond op"]) --> gg["geheelgetal"] --> dnb(["decimalen naar beneden."]) --> s1(( ))
```

*pagina 42*

#### 13.4.10.8 Onverdeelde rest

```ebnf
<onverdeelderest> ::= "Als onverdeelde rest blijft" <attribuutvanonderwerp> "over."
```

```mermaid
flowchart LR
  s0(( )) --> aorb(["Als onverdeelde rest blijft"]) --> avo["attribuutvanonderwerp"] --> over(["over."]) --> s1(( ))
```

### 13.4.11 Dagsoortdefinitie

#### 13.4.11.1 Dagsoortdefinitie

```ebnf
<dagsoortdefinitie> ::= "Een dag is een" <dagsoortnaam>
```

```mermaid
flowchart LR
  s0(( )) --> edie(["Een dag is een"]) --> dsn["dagsoortnaam"] --> s1(( ))
```

### 13.4.12 Startpuntbepaling

#### 13.4.12.1 Startpuntbepaling

```ebnf
< startpuntbepaling> ::= "Het startpunt van" <tijdlijnnaam> "voor" <universeelonderwerp>
"wordt bepaald door" <datumexpressie >
```

```mermaid
flowchart LR
  s0(( )) --> hsv(["Het startpunt van"]) --> tn["tijdlijnnaam"] --> voor(["voor"]) --> uo["universeelonderwerp"] --> wbd(["wordt bepaald door"]) --> de["datumexpressie"] --> s1(( ))
```

### 13.4.13 Voorwaardendeel

#### 13.4.13.1 Voorwaardendeel

```ebnf
<voorwaardendeel> ::= "indien" (<toplevelelementairevoorwaarde> |
<toplevelsamengesteldevoorwaarde>)
```

```mermaid
flowchart LR
  s0(( )) --> ind(["indien"]) --> f{ }
  f --> tev["toplevelelementairevoorwaarde"]
  f --> tsv["toplevelsamengesteldevoorwaarde"]
  tev --> j{ }
  tsv --> j
  j --> s1(( ))
```

#### 13.4.13.2 Predicaat

```ebnf
<predicaat> ::= <elementairpredicaat> | <samengesteldpredicaat>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> ep["elementairpredicaat"]
  f --> sp["samengesteldpredicaat"]
  ep --> j{ }
  sp --> j
  j --> s1(( ))
```

#### 13.4.13.3 Elementair predicaat

```ebnf
<elementairpredicaat> ::= <getalpredicaat> | <tekstpredicaat> | <datumpredicaat> |
<objectpredicaat>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> gp["getalpredicaat"]
  f --> tp["tekstpredicaat"]
  f --> dp["datumpredicaat"]
  f --> op["objectpredicaat"]
  gp --> j{ }
  tp --> j
  dp --> j
  op --> j
  j --> s1(( ))
```

*pagina 43*

#### 13.4.13.4 Samengesteld predicaat

```ebnf
<samengesteldpredicaat> ::= "aan" <kwantificatie> "volgende voorwaarde"["n"]" voldoen:"
(<samengesteldevoorwaardeonderdeel> | <toplevelvoorwaardevergelijking>)
```

```mermaid
flowchart LR
  s0(( )) --> aan(["aan"]) --> kw["kwantificatie"] --> vv(["volgende voorwaarde"])
  vv --> n(["n"]) --> vold(["voldoen:"])
  vv --> vold
  vold --> f{ }
  f --> svo["samengesteldevoorwaardeonderdeel"]
  f --> tvv["toplevelvoorwaardevergelijking"]
  svo --> j{ }
  tvv --> j
  j --> s1(( ))
```

#### 13.4.13.5 Getalpredicaat

```ebnf
<getalpredicaat> ::= <topleveltweezijdigegetalvergelijkingsoperatormeervoud>
<getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> op["topleveltweezijdigegetalvergelijkingsoperatormeervoud"] --> ge["getalexpressie"] --> s1(( ))
```

#### 13.4.13.6 Tekstpredicaat

```ebnf
<tekstpredicaat> ::= <topleveltweezijdigetekstvergelijkingsoperatormeervoud>
<tekstexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> op["topleveltweezijdigetekstvergelijkingsoperatormeervoud"] --> te["tekstexpressie"] --> s1(( ))
```

#### 13.4.13.7 Datumpredicaat

```ebnf
<datumpredicaat> ::= <topleveltweezijdigedatumvergelijkingsoperatormeervoud>
<datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> op["topleveltweezijdigedatumvergelijkingsoperatormeervoud"] --> de["datumexpressie"] --> s1(( ))
```

#### 13.4.13.8 Objectpredicaat

```ebnf
<objectpredicaat> ::= <topleveltweezijdigeobjectvergelijkingsoperatormeervoud>
<objectexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> op["topleveltweezijdigeobjectvergelijkingsoperatormeervoud"] --> oe["objectexpressie"] --> s1(( ))
```

*pagina 44*

### 13.4.14 Samengestelde voorwaarde

#### 13.4.14.1 Toplevel samengestelde voorwaarde

```ebnf
<toplevelsamengesteldevoorwaarde> ::= (<objectexpressie> | <referentie> | <aggregatie> |
"er") "aan" <voorwaardekwantificatie> "volgende voorwaarde"["n"] ("voldoet" | "voldoen" |
"wordt voldaan") ":" <samengesteldevoorwaardeonderdeel>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> oe["objectexpressie"]
  f --> ref["referentie"]
  f --> agg["aggregatie"]
  f --> er(["er"])
  oe --> j{ }
  ref --> j
  agg --> j
  er --> j
  j --> aan(["aan"]) --> vk["voorwaardekwantificatie"] --> vv(["volgende voorwaarde"])
  vv --> n(["n"]) --> g2{ }
  vv --> g2
  g2 --> vt(["voldoet"])
  g2 --> vn(["voldoen"])
  g2 --> wv(["wordt voldaan"])
  vt --> j2{ }
  vn --> j2
  wv --> j2
  j2 --> dp([":"]) --> svo["samengesteldevoorwaardeonderdeel"] --> s1(( ))
```

#### 13.4.14.2 Geneste samengestelde voorwaarde

```ebnf
<genestesamengesteldevoorwaarde> ::= (<objectexpressie> | <referentie> | <aggregatie> |
"er") ("voldoet" | "voldoen" | "wordt voldaan") "aan" <voorwaardekwantificatie> "volgende
voorwaarde"["n"]":" <samengesteldevoorwaardeonderdeel>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> oe["objectexpressie"]
  f --> ref["referentie"]
  f --> agg["aggregatie"]
  f --> er(["er"])
  oe --> j{ }
  ref --> j
  agg --> j
  er --> j
  j --> g1{ }
  g1 --> vt(["voldoet"])
  g1 --> vn(["voldoen"])
  g1 --> wv(["wordt voldaan"])
  vt --> j1{ }
  vn --> j1
  wv --> j1
  j1 --> aan(["aan"]) --> vk["voorwaardekwantificatie"] --> vv(["volgende voorwaarde"])
  vv --> n(["n"]) --> dp([":"])
  vv --> dp
  dp --> svo["samengesteldevoorwaardeonderdeel"] --> s1(( ))
```

#### 13.4.14.3 Consistentiekwantificatie

```ebnf
<consistentiekwantificatie> ::= "alle" | "geen van de" | (("ten minste" | "ten hoogste" |
"precies") (<getal> | "één" | "twee" | "drie" | "vier") "van de")
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> alle(["alle"])
  f --> gvd(["geen van de"])
  f --> g1{ }
  g1 --> tm(["ten minste"])
  g1 --> th(["ten hoogste"])
  g1 --> pr(["precies"])
  tm --> g2{ }
  th --> g2
  pr --> g2
  g2 --> getal["getal"]
  g2 --> een(["één"])
  g2 --> twee(["twee"])
  g2 --> drie(["drie"])
  g2 --> vier(["vier"])
  getal --> g3{ }
  een --> g3
  twee --> g3
  drie --> g3
  vier --> g3
  g3 --> vandeR(["van de"])
  alle --> j(( ))
  gvd --> j
  vandeR --> j
  j --> s1(( ))
```

*pagina 45*
#### 13.4.14.4 Voorwaardekwantificatie

```ebnf
<voorwaardekwantificatie> ::= "de" | "alle" | "geen van de" | (("ten minste" | "ten
hoogste" | "precies") (<getal> | "één" | "twee" | "drie" | "vier") "van de")
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> de(["de"])
  f --> alle(["alle"])
  f --> gvd(["geen van de"])
  f --> g1{ }
  g1 --> tm(["ten minste"])
  g1 --> th(["ten hoogste"])
  g1 --> pr(["precies"])
  tm --> g2{ }
  th --> g2
  pr --> g2
  g2 --> getal["getal"]
  g2 --> een(["één"])
  g2 --> twee(["twee"])
  g2 --> drie(["drie"])
  g2 --> vier(["vier"])
  getal --> g3{ }
  een --> g3
  twee --> g3
  drie --> g3
  vier --> g3
  g3 --> vandeR(["van de"])
  de --> j(( ))
  alle --> j
  gvd --> j
  vandeR --> j
  j --> s1(( ))
```

#### 13.4.14.5 Kwantificatie

```ebnf
<kwantificatie> ::= "de" | "alle" | "al" | "geen van de" | (("ten minste" | "ten hoogste"
| "precies") (<getal> | "één" | "twee" | "drie" | "vier") "van de")
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> de(["de"])
  f --> alle(["alle"])
  f --> al(["al"])
  f --> gvd(["geen van de"])
  f --> g1{ }
  g1 --> tm(["ten minste"])
  g1 --> th(["ten hoogste"])
  g1 --> pr(["precies"])
  tm --> g2{ }
  th --> g2
  pr --> g2
  g2 --> getal["getal"]
  g2 --> een(["één"])
  g2 --> twee(["twee"])
  g2 --> drie(["drie"])
  g2 --> vier(["vier"])
  getal --> g3{ }
  een --> g3
  twee --> g3
  drie --> g3
  vier --> g3
  g3 --> vandeR(["van de"])
  de --> j(( ))
  alle --> j
  al --> j
  gvd --> j
  vandeR --> j
  j --> s1(( ))
```

#### 13.4.14.6 Samengestelde voorwaarde onderdeel

```ebnf
<samengesteldevoorwaardeonderdeel> ::= \n \t   <genestevoorwaarde> (\n
<genestevoorwaarde>)+
```

```mermaid
flowchart LR
  s0(( )) --> nl1(["\n"]) --> tb(["\t"]) --> gv1["genestevoorwaarde"]
  gv1 --> nl2(["\n"]) --> gv2["genestevoorwaarde"] --> s1(( ))
  gv2 -- "+" --> nl2
```

*pagina 46*

#### 13.4.14.7 Geneste voorwaarde

```ebnf
<genestevoorwaarde> ::= ("•")+ (<elementairevoorwaarde> |
<genestesamengesteldevoorwaarde>)
```

```mermaid
flowchart LR
  s0(( )) --> b(["•"]) --> j{ }
  j -- "+" --> b
  j --> f{ }
  f --> ev["elementairevoorwaarde"]
  f --> gsv["genestesamengesteldevoorwaarde"]
  ev --> s1(( ))
  gsv --> s1
```

### 13.4.15 Elementaire voorwaarde

#### 13.4.15.1 Toplevel elementaire voorwaarde

```ebnf
<toplevelelementairevoorwaarde> ::= <toplevelvoorwaardevergelijking> |
<consistentievoorwaarde>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> tvv["toplevelvoorwaardevergelijking"]
  f --> cv["consistentievoorwaarde"]
  tvv --> s1(( ))
  cv --> s1
```

#### 13.4.15.2 Toplevel voorwaardevergelijking

```ebnf
<toplevelvoorwaardevergelijking> ::= <toplevelgetalvergelijking> |
<toplevelobjectvergelijking> | <topleveltekstvergelijking> | <topleveldatumvergelijking> |
<toplevelbooleanvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> g["toplevelgetalvergelijking"]
  f --> o["toplevelobjectvergelijking"]
  f --> t["topleveltekstvergelijking"]
  f --> d["topleveldatumvergelijking"]
  f --> b["toplevelbooleanvergelijking"]
  g --> j(( ))
  o --> j
  t --> j
  d --> j
  b --> j
  j --> s1(( ))
```

#### 13.4.15.3 Toplevel getalvergelijking

```ebnf
<toplevelgetalvergelijking> ::= <topleveleenzijdigegetalvergelijking> |
<topleveltweezijdigegetalvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigegetalvergelijking"]
  f --> t["topleveltweezijdigegetalvergelijking"]
  e --> s1(( ))
  t --> s1
```

*pagina 47*

#### 13.4.15.4 Toplevel eenzijdige getalvergelijking

```ebnf
<topleveleenzijdigegetalvergelijking> ::= <getalexpressie>
<topleveleenzijdigegetalvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> ge["getalexpressie"] --> op["topleveleenzijdigegetalvergelijkingsoperator"] --> s1(( ))
```

#### 13.4.15.5 Toplevel tweezijdige getalvergelijking

```ebnf
<topleveltweezijdigegetalvergelijking> ::= <getalexpressie>
<topleveltweezijdigegetalvergelijkingsoperator> <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> ge1["getalexpressie"] --> op["topleveltweezijdigegetalvergelijkingsoperator"] --> ge2["getalexpressie"] --> s1(( ))
```

#### 13.4.15.6 Toplevel datumvergelijking

```ebnf
<topleveldatumvergelijking> ::= <topleveleenzijdigedatumvergelijking> |
<topleveltweezijdigedatumvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigedatumvergelijking"]
  f --> t["topleveltweezijdigedatumvergelijking"]
  e --> s1(( ))
  t --> s1
```

#### 13.4.15.7 Toplevel eenzijdige datumvergelijking

```ebnf
<topleveleenzijdigedatumvergelijking> ::= <datumexpressie>
<topleveleenzijdigedatumvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> de["datumexpressie"] --> op["topleveleenzijdigedatumvergelijkingsoperator"] --> s1(( ))
```

#### 13.4.15.8 Toplevel tweezijdige datumvergelijking

```ebnf
<topleveltweezijdigedatumvergelijking> ::= <datumexpressie>
<topleveltweezijdigedatumvergelijkingsoperator> <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> de1["datumexpressie"] --> op["topleveltweezijdigedatumvergelijkingsoperator"] --> de2["datumexpressie"] --> s1(( ))
```

#### 13.4.15.9 Toplevel tekstvergelijking

```ebnf
<topleveltekstvergelijking> ::= <topleveleenzijdigetekstvergelijking> |
<topleveltweezijdigetekstvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigetekstvergelijking"]
  f --> t["topleveltweezijdigetekstvergelijking"]
  e --> s1(( ))
  t --> s1
```

*pagina 48*

#### 13.4.15.10 Toplevel eenzijdige tekstvergelijking

```ebnf
<topleveleenzijdigetekstvergelijking> ::= <tekstexpressie>
<topleveleenzijdigetekstvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> te["tekstexpressie"] --> op["topleveleenzijdigetekstvergelijkingsoperator"] --> s1(( ))
```

#### 13.4.15.11 Toplevel tweezijdige tekstvergelijking

```ebnf
<topleveltweezijdigetekstvergelijking> ::= <tekstexpressie>
<topleveltweezijdigetekstvergelijkingsoperator> <tekstexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> te1["tekstexpressie"] --> op["topleveltweezijdigetekstvergelijkingsoperator"] --> te2["tekstexpressie"] --> s1(( ))
```

#### 13.4.15.12 Toplevel booleanvergelijking

```ebnf
<toplevelbooleanvergelijking> ::= <topleveleenzijdigebooleanvergelijking> |
<topleveltweezijdigebooleanvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigebooleanvergelijking"]
  f --> t["topleveltweezijdigebooleanvergelijking"]
  e --> s1(( ))
  t --> s1
```

#### 13.4.15.13 Toplevel eenzijdige booleanvergelijking

```ebnf
<topleveleenzijdigebooleanvergelijking> ::= <booleanexpressie>
<topleveleenzijdigebooleanvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> be["booleanexpressie"] --> op["topleveleenzijdigebooleanvergelijkingsoperator"] --> s1(( ))
```

#### 13.4.15.14 Toplevel tweezijdige booleanvergelijking

```ebnf
<topleveltweezijdigebooleanvergelijking> ::= <booleanexpressie>
<topleveltweezijdigebooleanvergelijkingsoperator> <booleanexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> be1["booleanexpressie"] --> op["topleveltweezijdigebooleanvergelijkingsoperator"] --> be2["booleanexpressie"] --> s1(( ))
```

#### 13.4.15.15 Toplevel objectvergelijking

```ebnf
<toplevelobjectvergelijking> ::= <topleveleenzijdigeobjectvergelijking> |
<topleveltweezijdigeobjectvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigeobjectvergelijking"]
  f --> t["topleveltweezijdigeobjectvergelijking"]
  e --> s1(( ))
  t --> s1
```

*pagina 49*

#### 13.4.15.16 Toplevel eenzijdige objectvergelijking

```ebnf
<topleveleenzijdigeobjectvergelijking> ::= <objectexpressie>
<topleveleenzijdigeobjectvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> oe["objectexpressie"] --> op["topleveleenzijdigeobjectvergelijkingsoperator"] --> s1(( ))
```

#### 13.4.15.17 Toplevel tweezijdige objectvergelijking

```ebnf
<topleveltweezijdigeobjectvergelijking> ::= (<objectexpressie> | <referentie>)
<topleveltweezijdigeobjectvergelijkingsoperator> <objectexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> oe1["objectexpressie"]
  f --> ref["referentie"]
  oe1 --> j(( ))
  ref --> j
  j --> op["topleveltweezijdigeobjectvergelijkingsoperator"] --> oe2["objectexpressie"] --> s1(( ))
```

#### 13.4.15.18 Consistentievoorwaarde

```ebnf
<consistentievoorwaarde> ::= "regelversie" <karakterreeks> "is" ("gevuurd" |
"inconsistent")
```

```mermaid
flowchart LR
  s0(( )) --> rv(["regelversie"]) --> kr["karakterreeks"] --> is(["is"]) --> f{ }
  f --> gv(["gevuurd"])
  f --> ic(["inconsistent"])
  gv --> j(( ))
  ic --> j
  j --> s1(( ))
```

#### 13.4.15.19 Toplevel eenzijdige getalvergelijkingsoperator

```ebnf
<topleveleenzijdigegetalvergelijkingsoperator> ::=
<topleveleenzijdigegetalvergelijkingsoperatorenkelvoud> |
<topleveleenzijdigegetalvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigegetalvergelijkingsoperatorenkelvoud"]
  f --> m["topleveleenzijdigegetalvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.20 Toplevel eenzijdige getalvergelijkingsoperator enkelvoud

```ebnf
<topleveleenzijdigegetalvergelijkingsoperatorenkelvoud> ::= [<geheleperiodevergelijking>]
("leeg is" | "gevuld is" | "aan de elfproef voldoet")
```

*pagina 50*


```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg is"])
  f --> b(["gevuld is"])
  f --> c(["aan de elfproef voldoet"])
  a --> j(( ))
  b --> j
  c --> j
  j --> s1(( ))
```

#### 13.4.15.21 Toplevel eenzijdige getalvergelijkingsoperator meervoud

```ebnf
<topleveleenzijdigegetalvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("leeg zijn" | "gevuld zijn" | "aan de elfproef voldoen")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg zijn"])
  f --> b(["gevuld zijn"])
  f --> c(["aan de elfproef voldoen"])
  a --> j(( ))
  b --> j
  c --> j
  j --> s1(( ))
```

#### 13.4.15.22 Toplevel tweezijdige getalvergelijkingsoperator

```ebnf
<topleveltweezijdigegetalvergelijkingsoperator> ::=
<topleveltweezijdigegetalvergelijkingsoperatorenkelvoud> |
<topleveltweezijdigegetalvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveltweezijdigegetalvergelijkingsoperatorenkelvoud"]
  f --> m["topleveltweezijdigegetalvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.23 Toplevel tweezijdige getalvergelijkingsoperator enkelvoud

```ebnf
<topleveltweezijdigegetalvergelijkingsoperatorenkelvoud> ::= [<geheleperiodevergelijking>]
("gelijk is aan" | "ongelijk is aan" | "groter is dan" | "groter of gelijk is aan" |
"kleiner of gelijk is aan" | "kleiner is dan")
```

*pagina 51*

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk is aan"])
  f --> b(["ongelijk is aan"])
  f --> c(["groter is dan"])
  f --> d(["groter of gelijk is aan"])
  f --> e(["kleiner of gelijk is aan"])
  f --> h(["kleiner is dan"])
  a --> j(( ))
  b --> j
  c --> j
  d --> j
  e --> j
  h --> j
  j --> s1(( ))
```

#### 13.4.15.24 Toplevel tweezijdige getalvergelijkingsoperator meervoud

```ebnf
<topleveltweezijdigegetalvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("gelijk zijn aan" | "ongelijk zijn aan" | "groter zijn dan" | "groter of gelijk zijn aan"
| "kleiner of gelijk zijn aan" | "kleiner zijn dan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk zijn aan"])
  f --> b(["ongelijk zijn aan"])
  f --> c(["groter zijn dan"])
  f --> d(["groter of gelijk zijn aan"])
  f --> e(["kleiner of gelijk zijn aan"])
  f --> h(["kleiner zijn dan"])
  a --> j(( ))
  b --> j
  c --> j
  d --> j
  e --> j
  h --> j
  j --> s1(( ))
```

#### 13.4.15.25 Toplevel eenzijdige datumvergelijkingsoperator

```ebnf
<topleveleenzijdigedatumvergelijkingsoperator> ::=
<topleveleenzijdigedatumvergelijkingsoperatorenkelvoud> |
<topleveleenzijdigedatumvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigedatumvergelijkingsoperatorenkelvoud"]
  f --> m["topleveleenzijdigedatumvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.26 Toplevel eenzijdige datumvergelijkingsoperator enkelvoud

```ebnf
<topleveleenzijdigedatumvergelijkingsoperatorenkelvoud> ::= [<geheleperiodevergelijking>]
("leeg is" | "gevuld is" | ("een" <dagsoort> "is"))
```

*pagina 52*

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg is"])
  f --> b(["gevuld is"])
  f --> e1(["een"])
  e1 --> ds["dagsoort"] --> is(["is"]) --> j(( ))
  a --> j
  b --> j
  j --> s1(( ))
```

#### 13.4.15.27 Toplevel eenzijdige datumvergelijkingsoperator meervoud

```ebnf
<topleveleenzijdigedatumvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("leeg zijn" | "gevuld zijn" | ("een" <dagsoort> "zijn"))
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg zijn"])
  f --> b(["gevuld zijn"])
  f --> e1(["een"])
  e1 --> ds["dagsoort"] --> zn(["zijn"]) --> j(( ))
  a --> j
  b --> j
  j --> s1(( ))
```

#### 13.4.15.28 Toplevel tweezijdige datumvergelijkingsoperator

```ebnf
<topleveltweezijdigedatumvergelijkingsoperator> ::=
<topleveltweezijdigedatumvergelijkingsoperatorenkelvoud> |
<topleveltweezijdigedatumvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveltweezijdigedatumvergelijkingsoperatorenkelvoud"]
  f --> m["topleveltweezijdigedatumvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.29 Toplevel tweezijdige datumvergelijkingsoperator enkelvoud

```ebnf
<topleveltweezijdigedatumvergelijkingsoperatorenkelvoud> ::= [<geheleperiodevergelijking>]
("gelijk is aan" | "ongelijk is aan" | "later is dan" | "later of gelijk is aan" | "eerder
of gelijk is aan" | "eerder is dan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk is aan"])
  f --> b(["ongelijk is aan"])
  f --> c(["later is dan"])
  f --> d(["later of gelijk is aan"])
  f --> e(["eerder of gelijk is aan"])
  f --> h(["eerder is dan"])
  a --> j(( ))
  b --> j
  c --> j
  d --> j
  e --> j
  h --> j
  j --> s1(( ))
```

*pagina 53*

#### 13.4.15.30 Toplevel tweezijdige datumvergelijkingsoperator meervoud

```ebnf
<topleveltweezijdigedatumvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("gelijk zijn aan" | "ongelijk zijn aan" | "later zijn dan" | "later of gelijk zijn aan" |
"eerder of gelijk zijn aan" | "eerder zijn dan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk zijn aan"])
  f --> b(["ongelijk zijn aan"])
  f --> c(["later zijn dan"])
  f --> d(["later of gelijk zijn aan"])
  f --> e(["eerder of gelijk zijn aan"])
  f --> h(["eerder zijn dan"])
  a --> j(( ))
  b --> j
  c --> j
  d --> j
  e --> j
  h --> j
  j --> s1(( ))
```

#### 13.4.15.31 Toplevel eenzijdige tekstvergelijkingsoperator

```ebnf
<topleveleenzijdigetekstvergelijkingsoperator> ::=
<topleveleenzijdigetekstvergelijkingsoperatorenkelvoud> |
<topleveleenzijdigetekstvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigetekstvergelijkingsoperatorenkelvoud"]
  f --> m["topleveleenzijdigetekstvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.32 Toplevel eenzijdige tekstvergelijkingsoperator enkelvoud

```ebnf
<topleveleenzijdigetekstvergelijkingsoperatorenkelvoud> ::= [<geheleperiodevergelijking>]
("leeg is" | "gevuld is" | ("numeriek is met exact" <geheelgetal> "cijfers") | "aan de
elfproef voldoet")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg is"])
  f --> b(["gevuld is"])
  f --> n1(["numeriek is met exact"])
  n1 --> gg["geheelgetal"] --> cf(["cijfers"]) --> j(( ))
  f --> d(["aan de elfproef voldoet"])
  a --> j
  b --> j
  d --> j
  j --> s1(( ))
```

#### 13.4.15.33 Toplevel eenzijdige tekstvergelijkingsoperator meervoud

```ebnf
<topleveleenzijdigetekstvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("leeg zijn" | "gevuld zijn" | ("numeriek zijn met exact" <geheelgetal> "cijfers") | "aan
de elfproef voldoen")
```

*pagina 54*

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg zijn"])
  f --> b(["gevuld zijn"])
  f --> n1(["numeriek zijn met exact"])
  n1 --> gg["geheelgetal"] --> cf(["cijfers"]) --> j(( ))
  f --> d(["aan de elfproef voldoen"])
  a --> j
  b --> j
  d --> j
  j --> s1(( ))
```

#### 13.4.15.34 Toplevel tweezijdige tekstvergelijkingsoperator

```ebnf
<topleveltweezijdigetekstvergelijkingsoperator> ::=
<topleveltweezijdigetekstvergelijkingsoperatorenkelvoud> |
<topleveltweezijdigetekstvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveltweezijdigetekstvergelijkingsoperatorenkelvoud"]
  f --> m["topleveltweezijdigetekstvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.35 Toplevel tweezijdige tekstvergelijkingsoperator enkelvoud

```ebnf
<topleveltweezijdigetekstvergelijkingsoperatorenkelvoud> ::= [<geheleperiodevergelijking>]
("gelijk is aan" | "ongelijk is aan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk is aan"])
  f --> b(["ongelijk is aan"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

#### 13.4.15.36 Toplevel tweezijdige tekstvergelijkingsoperator meervoud

```ebnf
<topleveltweezijdigetekstvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("gelijk zijn aan" | "ongelijk zijn aan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk zijn aan"])
  f --> b(["ongelijk zijn aan"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

#### 13.4.15.37 Toplevel eenzijdige booleanvergelijkingsoperator

```ebnf
<topleveleenzijdigebooleanvergelijkingsoperator> ::=
<topleveleenzijdigebooleanvergelijkingsoperatorenkelvoud> |
<topleveleenzijdigebooleanvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigebooleanvergelijkingsoperatorenkelvoud"]
  f --> m["topleveleenzijdigebooleanvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

*pagina 55*

#### 13.4.15.38 Toplevel eenzijdige booleanvergelijkingsoperator enkelvoud

```ebnf
<topleveleenzijdigebooleanvergelijkingsoperatorenkelvoud> ::=
[<geheleperiodevergelijking>] ("leeg is" | "gevuld is")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg is"])
  f --> b(["gevuld is"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

#### 13.4.15.39 Toplevel eenzijdige booleanvergelijkingsoperator meervoud

```ebnf
<topleveleenzijdigebooleanvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("leeg zijn" | "gevuld zijn")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["leeg zijn"])
  f --> b(["gevuld zijn"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

#### 13.4.15.40 Toplevel tweezijdige booleanvergelijkingsoperator

```ebnf
<topleveltweezijdigebooleanvergelijkingsoperator> ::=
<topleveltweezijdigebooleanvergelijkingsoperatorenkelvoud> |
<topleveltweezijdigebooleanvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveltweezijdigebooleanvergelijkingsoperatorenkelvoud"]
  f --> m["topleveltweezijdigebooleanvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.41 Toplevel tweezijdige booleanvergelijkingsoperator enkelvoud

```ebnf
<topleveltweezijdigebooleanvergelijkingsoperatorenkelvoud> ::=
[<geheleperiodevergelijking>] ("gelijk is aan" | "ongelijk is aan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk is aan"])
  f --> b(["ongelijk is aan"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

#### 13.4.15.42 Toplevel tweezijdige booleanvergelijkingsoperator meervoud

```ebnf
<topleveltweezijdigebooleanvergelijkingsoperatormeervoud> ::=
[<geheleperiodevergelijking>] ("gelijk zijn aan" | "ongelijk zijn aan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk zijn aan"])
  f --> b(["ongelijk zijn aan"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

#### 13.4.15.43 Toplevel eenzijdige objectvergelijkingsoperator

```ebnf
<topleveleenzijdigeobjectvergelijkingsoperator> ::=
<topleveleenzijdigeobjectvergelijkingsoperatorenkelvoud> |
<topleveleenzijdigeobjectvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveleenzijdigeobjectvergelijkingsoperatorenkelvoud"]
  f --> m["topleveleenzijdigeobjectvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

*pagina 56*

#### 13.4.15.44 Toplevel eenzijdige objectvergelijkingsoperator enkelvoud

```ebnf
<topleveleenzijdigeobjectvergelijkingsoperatorenkelvoud> ::= [<geheleperiodevergelijking>]
["een"] (<rolnaam> | <kenmerknaam>) ("is" | "heeft")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> n1
  g --> n1(["een"])
  s0 -.-> f1{ }
  n1 --> f1
  f1 --> r["rolnaam"]
  f1 --> k["kenmerknaam"]
  r --> f2{ }
  k --> f2
  f2 --> a(["is"])
  f2 --> b(["heeft"])
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.45 Toplevel eenzijdige objectvergelijkingsoperator meervoud

```ebnf
<topleveleenzijdigeobjectvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
["een"] (<rolnaam> | <kenmerknaam>) ("zijn" | "hebben")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> n1
  g --> n1(["een"])
  s0 -.-> f1{ }
  n1 --> f1
  f1 --> r["rolnaam"]
  f1 --> k["kenmerknaam"]
  r --> f2{ }
  k --> f2
  f2 --> a(["zijn"])
  f2 --> b(["hebben"])
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.46 Toplevel tweezijdige objectvergelijkingsoperator

```ebnf
<topleveltweezijdigeobjectvergelijkingsoperator> ::=
<topleveltweezijdigeobjectvergelijkingsoperatorenkelvoud> |
<topleveltweezijdigeobjectvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> e["topleveltweezijdigeobjectvergelijkingsoperatorenkelvoud"]
  f --> m["topleveltweezijdigeobjectvergelijkingsoperatormeervoud"]
  e --> s1(( ))
  m --> s1
```

#### 13.4.15.47 Toplevel tweezijdige objectvergelijkingsoperator enkelvoud

```ebnf
<topleveltweezijdigeobjectvergelijkingsoperatorenkelvoud> ::=
[<geheleperiodevergelijking>] ("gelijk is aan" | "ongelijk is aan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk is aan"])
  f --> b(["ongelijk is aan"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

#### 13.4.15.48 Toplevel tweezijdige objectvergelijkingsoperator meervoud

```ebnf
<topleveltweezijdigeobjectvergelijkingsoperatormeervoud> ::= [<geheleperiodevergelijking>]
("gelijk zijn aan" | "ongelijk zijn aan")
```

```mermaid
flowchart LR
  s0(( )) --> g["geheleperiodevergelijking"]
  s0 -.-> f{ }
  g --> f
  f --> a(["gelijk zijn aan"])
  f --> b(["ongelijk zijn aan"])
  a --> j(( ))
  b --> j
  j --> s1(( ))
```

*pagina 57*

#### 13.4.15.49 Elementaire voorwaarde

```ebnf
<elementairevoorwaarde> ::= <voorwaardevergelijking> | <consistentievoorwaarde>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["voorwaardevergelijking"]
  f --> b["consistentievoorwaarde"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.50 Voorwaardevergelijking

```ebnf
<voorwaardevergelijking> ::= <getalvergelijking> | <objectvergelijking> |
<tekstvergelijking> | <datumvergelijking> | <booleanvergelijking> |
<periodevergelijkingelementair>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["getalvergelijking"]
  f --> b["objectvergelijking"]
  f --> c["tekstvergelijking"]
  f --> d["datumvergelijking"]
  f --> e["booleanvergelijking"]
  f --> g["periodevergelijkingelementair"]
  a --> j(( ))
  b --> j
  c --> j
  d --> j
  e --> j
  g --> j
  j --> s1(( ))
```

#### 13.4.15.51 Getalvergelijking

```ebnf
<getalvergelijking> ::= <eenzijdigegetalvergelijking> | <tweezijdigegetalvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigegetalvergelijking"]
  f --> b["tweezijdigegetalvergelijking"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.52 Eenzijdige getalvergelijking

```ebnf
<eenzijdigegetalvergelijking> ::= <getalexpressie> <eenzijdigegetalvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> a["getalexpressie"]
  a --> b["eenzijdigegetalvergelijkingsoperator"]
  b --> s1(( ))
```

*pagina 58*

#### 13.4.15.53 Tweezijdige getalvergelijking

```ebnf
<tweezijdigegetalvergelijking> ::= <getalexpressie>
<tweezijdigegetalvergelijkingsoperator> <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> a["getalexpressie"]
  a --> b["tweezijdigegetalvergelijkingsoperator"]
  b --> c["getalexpressie"]
  c --> s1(( ))
```

#### 13.4.15.54 Datumvergelijking

```ebnf
<datumvergelijking> ::= <eenzijdigedatumvergelijking> | <tweezijdigedatumvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigedatumvergelijking"]
  f --> b["tweezijdigedatumvergelijking"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.55 Eenzijdige datumvergelijking

```ebnf
<eenzijdigedatumvergelijking> ::= <datumexpressie> <eenzijdigedatumvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> a["datumexpressie"]
  a --> b["eenzijdigedatumvergelijkingsoperator"]
  b --> s1(( ))
```

#### 13.4.15.56 Tweezijdige datumvergelijking

```ebnf
<tweezijdigedatumvergelijking> ::= <datumexpressie>
<tweezijdigedatumvergelijkingsoperator> <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> a["datumexpressie"]
  a --> b["tweezijdigedatumvergelijkingsoperator"]
  b --> c["datumexpressie"]
  c --> s1(( ))
```

#### 13.4.15.57 Tekstvergelijking

```ebnf
<tekstvergelijking> ::= <eenzijdigetekstvergelijking> | <tweezijdigetekstvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigetekstvergelijking"]
  f --> b["tweezijdigetekstvergelijking"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.58 Eenzijdige tekstvergelijking

```ebnf
<eenzijdigetekstvergelijking> ::= <tekstexpressie> <eenzijdigetekstvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> a["tekstexpressie"]
  a --> b["eenzijdigetekstvergelijkingsoperator"]
  b --> s1(( ))
```

#### 13.4.15.59 Tweezijdige tekstvergelijking

```ebnf
<tweezijdigetekstvergelijking> ::= <tekstexpressie>
<tweezijdigetekstvergelijkingsoperator> <tekstexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> a["tekstexpressie"]
  a --> b["tweezijdigetekstvergelijkingsoperator"]
  b --> c["tekstexpressie"]
  c --> s1(( ))
```

*pagina 59*

#### 13.4.15.60 Booleanvergelijking

```ebnf
<booleanvergelijking> ::= <eenzijdigebooleanvergelijking> |
<tweezijdigebooleanvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigebooleanvergelijking"]
  f --> b["tweezijdigebooleanvergelijking"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.61 Eenzijdige booleanvergelijking

```ebnf
<eenzijdigebooleanvergelijking> ::= <booleanexpressie>
<eenzijdigebooleanvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> a["booleanexpressie"]
  a --> b["eenzijdigebooleanvergelijkingsoperator"]
  b --> s1(( ))
```

#### 13.4.15.62 Tweezijdige booleanvergelijking

```ebnf
<tweezijdigebooleanvergelijking> ::= <booleanexpressie>
<tweezijdigebooleanvergelijkingsoperator> <booleanexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> a["booleanexpressie"]
  a --> b["tweezijdigebooleanvergelijkingsoperator"]
  b --> c["booleanexpressie"]
  c --> s1(( ))
```

#### 13.4.15.63 Objectvergelijking

```ebnf
<objectvergelijking> ::= <eenzijdigeobjectvergelijking> | <tweezijdigeobjectvergelijking>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigeobjectvergelijking"]
  f --> b["tweezijdigeobjectvergelijking"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.64 Eenzijdige objectvergelijking

```ebnf
<eenzijdigeobjectvergelijking> ::= <objectexpressie>
<eenzijdigeobjectvergelijkingsoperator>
```

```mermaid
flowchart LR
  s0(( )) --> a["objectexpressie"]
  a --> b["eenzijdigeobjectvergelijkingsoperator"]
  b --> s1(( ))
```

#### 13.4.15.65 Tweezijdige objectvergelijking

```ebnf
<tweezijdigeobjectvergelijking> ::= (<objectexpressie> | <referentie>)
<tweezijdigeobjectvergelijkingsoperator> <objectexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["objectexpressie"]
  f --> b["referentie"]
  a --> j(( ))
  b --> j
  j --> op["tweezijdigeobjectvergelijkingsoperator"]
  op --> c["objectexpressie"]
  c --> s1(( ))
```

*pagina 60*

#### 13.4.15.66 Consistentievoorwaarde

```ebnf
<consistentievoorwaarde> ::= "regelversie" <karakterreeks> "is" ("gevuurd" |
"inconsistent")
```

```mermaid
flowchart LR
  s0(( )) --> a(["regelversie"])
  a --> b["karakterreeks"]
  b --> c(["is"])
  c --> f{ }
  f --> d(["gevuurd"])
  f --> e(["inconsistent"])
  d --> s1(( ))
  e --> s1
```

#### 13.4.15.67 Periodevergelijking

```ebnf
<periodevergelijking> ::= <periodevergelijkingenkelvoudig> |
<periodevergelijkingelementair>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["periodevergelijkingenkelvoudig"]
  f --> b["periodevergelijkingelementair"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.68 Periodevergelijking enkelvoudig

```ebnf
<periodevergelijkingenkelvoudig> ::= (“vanaf” <datumexpressie>) | (“van” <datumexpressie>
“tot” <datumexpressie>) | (“van” <datumexpressie> “tot en met” <datumexpressie>) | (“tot”
<datumexpressie>) | (“tot en met” <datumexpressie>)
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> v1(["vanaf"])
  v1 --> d1["datumexpressie"]
  d1 --> s1(( ))

  f --> v2(["van"])
  v2 --> d2["datumexpressie"]
  d2 --> t1(["tot"])
  t1 --> d3["datumexpressie"]
  d3 --> s1

  f --> v3(["van"])
  v3 --> d4["datumexpressie"]
  d4 --> tm1(["tot en met"])
  tm1 --> d5["datumexpressie"]
  d5 --> s1

  f --> t2(["tot"])
  t2 --> d6["datumexpressie"]
  d6 --> s1

  f --> tm2(["tot en met"])
  tm2 --> d7["datumexpressie"]
  d7 --> s1
```

#### 13.4.15.69 Periodevergelijking elementair

```ebnf
<periodevergelijkingelementair> ::= ”het is de periode” <periodevergelijkingenkelvoudig>
```

```mermaid
flowchart LR
  s0(( )) --> a(["het is de periode"])
  a --> b["periodevergelijkingenkelvoudig"]
  b --> s1(( ))
```

#### 13.4.15.70 Gehele periodevergelijking

```ebnf
<geheleperiodevergelijking> ::= [“niet”] “gedurende” (“het gehele jaar” | “de gehele
maand”)
```

*pagina 61*

```mermaid
flowchart LR
  s0(( )) --> opt{ }
  opt --> n1(["niet"])
  opt --> g
  n1 --> g(["gedurende"])
  g --> f{ }
  f --> a(["het gehele jaar"])
  f --> b(["de gehele maand"])
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.71 Eenzijdige getalvergelijkingsoperator

```ebnf
<eenzijdigegetalvergelijkingsoperator> ::= <eenzijdigegetalvergelijkingsoperatorenkelvoud>
| <eenzijdigegetalvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigegetalvergelijkingsoperatorenkelvoud"]
  f --> b["eenzijdigegetalvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.72 Eenzijdige getalvergelijkingsoperator enkelvoud

```ebnf
<eenzijdigegetalvergelijkingsoperatorenkelvoud> ::= ("is" [<geheleperiodevergelijking>]
("leeg" | "gevuld")) | ("voldoet” [<geheleperiodevergelijking>] “aan de elfproef")
```

```mermaid
flowchart LR
  s0(( )) --> br{ }
  br --> is(["is"])
  is --> opt1{ }
  opt1 --> gpv1["geheleperiodevergelijking"]
  opt1 --> lf1{ }
  gpv1 --> lf1
  lf1 --> leeg(["leeg"])
  lf1 --> gevuld(["gevuld"])
  leeg --> s1(( ))
  gevuld --> s1

  br --> vol(["voldoet"])
  vol --> opt2{ }
  opt2 --> gpv2["geheleperiodevergelijking"]
  opt2 --> elf(["aan de elfproef"])
  gpv2 --> elf
  elf --> s1
```

#### 13.4.15.73 Eenzijdige getalvergelijkingsoperator meervoud

```ebnf
<eenzijdigegetalvergelijkingsoperatormeervoud> ::= ("zijn" [<geheleperiodevergelijking>]
("leeg" | "gevuld")) | ("voldoen” [<geheleperiodevergelijking>] “aan de elfproef")
```

```mermaid
flowchart LR
  s0(( )) --> br{ }
  br --> zijn(["zijn"])
  zijn --> opt1{ }
  opt1 --> gpv1["geheleperiodevergelijking"]
  opt1 --> lf1{ }
  gpv1 --> lf1
  lf1 --> leeg(["leeg"])
  lf1 --> gevuld(["gevuld"])
  leeg --> s1(( ))
  gevuld --> s1

  br --> vol(["voldoen"])
  vol --> opt2{ }
  opt2 --> gpv2["geheleperiodevergelijking"]
  opt2 --> elf(["aan de elfproef"])
  gpv2 --> elf
  elf --> s1
```

#### 13.4.15.74 Tweezijdige getalvergelijkingsoperator

```ebnf
<tweezijdigegetalvergelijkingsoperator> ::=
<tweezijdigegetalvergelijkingsoperatorenkelvoud> |
<tweezijdigegetalvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["tweezijdigegetalvergelijkingsoperatorenkelvoud"]
  f --> b["tweezijdigegetalvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

*pagina 62*

#### 13.4.15.75 Tweezijdige getalvergelijkingsoperator enkelvoud

```ebnf
<tweezijdigegetalvergelijkingsoperatorenkelvoud> ::= "is" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan" | "groter dan" | "groter of gelijk aan" | "kleiner of
gelijk aan" | "kleiner dan")
```

```mermaid
flowchart LR
  s0(( )) --> is(["is"])
  is --> opt{ }
  opt --> gpv["geheleperiodevergelijking"]
  opt --> f{ }
  gpv --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  f --> o3(["groter dan"])
  f --> o4(["groter of gelijk aan"])
  f --> o5(["kleiner of gelijk aan"])
  f --> o6(["kleiner dan"])
  o1 --> s1(( ))
  o2 --> s1
  o3 --> s1
  o4 --> s1
  o5 --> s1
  o6 --> s1
```

#### 13.4.15.76 Tweezijdige getalvergelijkingsoperator meervoud

```ebnf
<tweezijdigegetalvergelijkingsoperatormeervoud> ::= "zijn" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan" | "groter dan" | "groter of gelijk aan" | "kleiner of
gelijk aan" | "kleiner dan")
```

```mermaid
flowchart LR
  s0(( )) --> zijn(["zijn"])
  zijn --> opt{ }
  opt --> gpv["geheleperiodevergelijking"]
  opt --> f{ }
  gpv --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  f --> o3(["groter dan"])
  f --> o4(["groter of gelijk aan"])
  f --> o5(["kleiner of gelijk aan"])
  f --> o6(["kleiner dan"])
  o1 --> s1(( ))
  o2 --> s1
  o3 --> s1
  o4 --> s1
  o5 --> s1
  o6 --> s1
```

#### 13.4.15.77 Eenzijdige datumvergelijkingsoperator

```ebnf
<eenzijdigedatumvergelijkingsoperator> ::= <eenzijdigedatumvergelijkingsoperatorenkelvoud>
| <eenzijdigedatumvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigedatumvergelijkingsoperatorenkelvoud"]
  f --> b["eenzijdigedatumvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

*pagina 63*

#### 13.4.15.78 Eenzijdige datumvergelijkingsoperator enkelvoud

```ebnf
<eenzijdigedatumvergelijkingsoperatorenkelvoud> ::= ("is" [<geheleperiodevergelijking>]
("leeg" | "gevuld")) | ([<geheleperiodevergelijking>] "een" <dagsoort> "is")
```

```mermaid
flowchart LR
  s0(( )) --> br{ }
  br --> is(["is"])
  is --> opt1{ }
  opt1 --> gpv1["geheleperiodevergelijking"]
  opt1 --> lf{ }
  gpv1 --> lf
  lf --> leeg(["leeg"])
  lf --> gevuld(["gevuld"])
  leeg --> s1(( ))
  gevuld --> s1

  br --> opt2{ }
  opt2 --> gpv2["geheleperiodevergelijking"]
  opt2 --> een(["een"])
  gpv2 --> een
  een --> dag["dagsoort"]
  dag --> is2(["is"])
  is2 --> s1
```

#### 13.4.15.79 Eenzijdige datumvergelijkingsoperator meervoud

```ebnf
<eenzijdigedatumvergelijkingsoperatormeervoud> ::= ("zijn" [<geheleperiodevergelijking>]
("leeg" | "gevuld")) | ([<geheleperiodevergelijking>] "een" <dagsoort> "zijn")
```

```mermaid
flowchart LR
  s0(( )) --> br{ }
  br --> zijn(["zijn"])
  zijn --> opt1{ }
  opt1 --> gpv1["geheleperiodevergelijking"]
  opt1 --> lf{ }
  gpv1 --> lf
  lf --> leeg(["leeg"])
  lf --> gevuld(["gevuld"])
  leeg --> s1(( ))
  gevuld --> s1

  br --> opt2{ }
  opt2 --> gpv2["geheleperiodevergelijking"]
  opt2 --> een(["een"])
  gpv2 --> een
  een --> dag["dagsoort"]
  dag --> zijn2(["zijn"])
  zijn2 --> s1
```

#### 13.4.15.80 Tweezijdige datumvergelijkingsoperator

```ebnf
<tweezijdigedatumvergelijkingsoperator> ::=
<tweezijdigedatumvergelijkingsoperatorenkelvoud> |
<tweezijdigedatumvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["tweezijdigedatumvergelijkingsoperatorenkelvoud"]
  f --> b["tweezijdigedatumvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.81 Tweezijdige datumvergelijkingsoperator enkelvoud

```ebnf
<tweezijdigedatumvergelijkingsoperatorenkelvoud> ::= "is" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan" | "later dan" | "later of gelijk aan" | "eerder of gelijk
aan" | "eerder dan")
```

*pagina 64*

```mermaid
flowchart LR
  s0(( )) --> is(["is"])
  is --> opt{ }
  opt --> gpv["geheleperiodevergelijking"]
  opt --> f{ }
  gpv --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  f --> o3(["later dan"])
  f --> o4(["later of gelijk aan"])
  f --> o5(["eerder of gelijk aan"])
  f --> o6(["eerder dan"])
  o1 --> s1(( ))
  o2 --> s1
  o3 --> s1
  o4 --> s1
  o5 --> s1
  o6 --> s1
```

#### 13.4.15.82 Tweezijdige datumvergelijkingsoperator meervoud

```ebnf
<tweezijdigedatumvergelijkingsoperatormeervoud> ::= "zijn" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan" | "later dan" | "later of gelijk aan" | "eerder of gelijk
aan" | "eerder dan")
```

```mermaid
flowchart LR
  s0(( )) --> zijn(["zijn"])
  zijn --> opt{ }
  opt --> gpv["geheleperiodevergelijking"]
  opt --> f{ }
  gpv --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  f --> o3(["later dan"])
  f --> o4(["later of gelijk aan"])
  f --> o5(["eerder of gelijk aan"])
  f --> o6(["eerder dan"])
  o1 --> s1(( ))
  o2 --> s1
  o3 --> s1
  o4 --> s1
  o5 --> s1
  o6 --> s1
```

#### 13.4.15.83 Eenzijdige tekstvergelijkingsoperator

```ebnf
<eenzijdigetekstvergelijkingsoperator> ::= <eenzijdigetekstvergelijkingsoperatorenkelvoud>
| <eenzijdigetekstvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigetekstvergelijkingsoperatorenkelvoud"]
  f --> b["eenzijdigetekstvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.84 Eenzijdige tekstvergelijkingsoperator enkelvoud

```ebnf
<eenzijdigetekstvergelijkingsoperatorenkelvoud> ::= ("is" [<geheleperiodevergelijking>]
("leeg" | "gevuld" | ("numeriek met exact" <geheelgetal> "cijfers"))) | ("voldoet”
[<geheleperiodevergelijking>] “aan de elfproef")
```

*pagina 65*

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> i(["is"])
  i --> g1["geheleperiodevergelijking"]
  i --> j1{ }
  g1 --> j1
  j1 --> leeg(["leeg"])
  j1 --> gevuld(["gevuld"])
  j1 --> num(["numeriek met exact"])
  num --> gg["geheelgetal"]
  gg --> cij(["cijfers"])
  f --> v(["voldoet"])
  v --> g2["geheleperiodevergelijking"]
  v --> elf(["aan de elfproef"])
  g2 --> elf
  leeg --> s1(( ))
  gevuld --> s1
  cij --> s1
  elf --> s1
```

#### 13.4.15.85 Eenzijdige tekstvergelijkingsoperator meervoud

```ebnf
<eenzijdigetekstvergelijkingsoperatormeervoud> ::= ("zijn" [<geheleperiodevergelijking>]
("leeg" | "gevuld" | ("numeriek met exact" <geheelgetal> "cijfers"))) | ("voldoen”
[<geheleperiodevergelijking>] “aan de elfproef")
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> z(["zijn"])
  z --> g1["geheleperiodevergelijking"]
  z --> j1{ }
  g1 --> j1
  j1 --> leeg(["leeg"])
  j1 --> gevuld(["gevuld"])
  j1 --> num(["numeriek met exact"])
  num --> gg["geheelgetal"]
  gg --> cij(["cijfers"])
  f --> v(["voldoen"])
  v --> g2["geheleperiodevergelijking"]
  v --> elf(["aan de elfproef"])
  g2 --> elf
  leeg --> s1(( ))
  gevuld --> s1
  cij --> s1
  elf --> s1
```

#### 13.4.15.86 Tweezijdige tekstvergelijkingsoperator

```ebnf
<tweezijdigetekstvergelijkingsoperator> ::=
<tweezijdigetekstvergelijkingsoperatorenkelvoud> |
<tweezijdigetekstvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["tweezijdigetekstvergelijkingsoperatorenkelvoud"]
  f --> b["tweezijdigetekstvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.87 Tweezijdige tekstvergelijkingsoperator enkelvoud

```ebnf
<tweezijdigetekstvergelijkingsoperatorenkelvoud> ::= "is" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan")
```

```mermaid
flowchart LR
  s0(( )) --> i(["is"])
  i --> g["geheleperiodevergelijking"]
  i --> f{ }
  g --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  o1 --> s1(( ))
  o2 --> s1
```

#### 13.4.15.88 Tweezijdige tekstvergelijkingsoperator meervoud

```ebnf
<tweezijdigetekstvergelijkingsoperatormeervoud> ::= "zijn" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan")
```

*pagina 66*

```mermaid
flowchart LR
  s0(( )) --> z(["zijn"])
  z --> g["geheleperiodevergelijking"]
  z --> f{ }
  g --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  o1 --> s1(( ))
  o2 --> s1
```

#### 13.4.15.89 Eenzijdige booleanvergelijkingsoperator

```ebnf
<eenzijdigebooleanvergelijkingsoperator> ::=
<eenzijdigebooleanvergelijkingsoperatorenkelvoud> |
<eenzijdigebooleanvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigebooleanvergelijkingsoperatorenkelvoud"]
  f --> b["eenzijdigebooleanvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.90 Eenzijdige booleanvergelijkingsoperator enkelvoud

```ebnf
<eenzijdigebooleanvergelijkingsoperatorenkelvoud> ::= "is" [<geheleperiodevergelijking>]
("leeg" | "gevuld")
```

```mermaid
flowchart LR
  s0(( )) --> i(["is"])
  i --> g["geheleperiodevergelijking"]
  i --> f{ }
  g --> f
  f --> o1(["leeg"])
  f --> o2(["gevuld"])
  o1 --> s1(( ))
  o2 --> s1
```

#### 13.4.15.91 Eenzijdige booleanvergelijkingsoperator meervoud

```ebnf
<eenzijdigebooleanvergelijkingsoperatormeervoud> ::= "zijn" [<geheleperiodevergelijking>]
("leeg" | "gevuld”)
```

```mermaid
flowchart LR
  s0(( )) --> z(["zijn"])
  z --> g["geheleperiodevergelijking"]
  z --> f{ }
  g --> f
  f --> o1(["leeg"])
  f --> o2(["gevuld"])
  o1 --> s1(( ))
  o2 --> s1
```

#### 13.4.15.92 Tweezijdige booleanvergelijkingsoperator

```ebnf
<tweezijdigebooleanvergelijkingsoperator> ::=
<tweezijdigebooleanvergelijkingsoperatorenkelvoud> |
<tweezijdigebooleanvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["tweezijdigebooleanvergelijkingsoperatorenkelvoud"]
  f --> b["tweezijdigebooleanvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.93 Tweezijdige booleanvergelijkingsoperator enkelvoud

```ebnf
<tweezijdigebooleanvergelijkingsoperatorenkelvoud> ::= "is" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan")
```

*pagina 67*

```mermaid
flowchart LR
  s0(( )) --> i(["is"])
  i --> g["geheleperiodevergelijking"]
  i --> f{ }
  g --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  o1 --> s1(( ))
  o2 --> s1
```

#### 13.4.15.94 Tweezijdige booleanvergelijkingsoperator meervoud

```ebnf
<tweezijdigebooleanvergelijkingsoperatormeervoud> ::= "zijn" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan")
```

```mermaid
flowchart LR
  s0(( )) --> z(["zijn"])
  z --> g["geheleperiodevergelijking"]
  z --> f{ }
  g --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  o1 --> s1(( ))
  o2 --> s1
```

#### 13.4.15.95 Eenzijdige objectvergelijkingsoperator

```ebnf
<eenzijdigeobjectvergelijkingsoperator> ::=
<eenzijdigeobjectvergelijkingsoperatorenkelvoud> |
<eenzijdigeobjectvergelijkingsoperatormeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["eenzijdigeobjectvergelijkingsoperatorenkelvoud"]
  f --> b["eenzijdigeobjectvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.96 Eenzijdige objectvergelijkingsoperator enkelvoud

```ebnf
<eenzijdigeobjectvergelijkingsoperatorenkelvoud> ::= ("is" | "heeft")
[<geheleperiodevergelijking>] ["een"] <kenmerknaam>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> i(["is"])
  f --> h(["heeft"])
  i --> g["geheleperiodevergelijking"]
  h --> g
  i --> e(["een"])
  h --> e
  g --> e
  i --> k["kenmerknaam"]
  h --> k
  g --> k
  e --> k
  k --> s1(( ))
```

#### 13.4.15.97 Eenzijdige objectvergelijkingsoperator meervoud

```ebnf
<eenzijdigeobjectvergelijkingsoperatormeervoud> ::= ("zijn" | "hebben")
[<geheleperiodevergelijking>] ["een"] <kenmerknaam>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> z(["zijn"])
  f --> h(["hebben"])
  z --> g["geheleperiodevergelijking"]
  h --> g
  z --> e(["een"])
  h --> e
  g --> e
  z --> k["kenmerknaam"]
  h --> k
  g --> k
  e --> k
  k --> s1(( ))
```

#### 13.4.15.98 Tweezijdige objectvergelijkingsoperator

```ebnf
<tweezijdigeobjectvergelijkingsoperator> ::=
<tweezijdigeobjectvergelijkingsoperatorenkelvoud> |
<tweezijdigeobjectvergelijkingsoperatormeervoud>
```

*pagina 68*

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a["tweezijdigeobjectvergelijkingsoperatorenkelvoud"]
  f --> b["tweezijdigeobjectvergelijkingsoperatormeervoud"]
  a --> s1(( ))
  b --> s1
```

#### 13.4.15.99 Tweezijdige objectvergelijkingsoperator enkelvoud

```ebnf
<tweezijdigeobjectvergelijkingsoperatorenkelvoud> ::= "is" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan")
```

```mermaid
flowchart LR
  s0(( )) --> i(["is"])
  i --> g["geheleperiodevergelijking"]
  i --> f{ }
  g --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  o1 --> s1(( ))
  o2 --> s1
```

#### 13.4.15.100 Tweezijdige objectvergelijkingsoperator meervoud

```ebnf
<tweezijdigeobjectvergelijkingsoperatormeervoud> ::= "zijn" [<geheleperiodevergelijking>]
("gelijk aan" | "ongelijk aan")
```

```mermaid
flowchart LR
  s0(( )) --> z(["zijn"])
  z --> g["geheleperiodevergelijking"]
  z --> f{ }
  g --> f
  f --> o1(["gelijk aan"])
  f --> o2(["ongelijk aan"])
  o1 --> s1(( ))
  o2 --> s1
```

### 13.4.16 Berekening

#### 13.4.16.1 Berekening

```ebnf
<berekening> ::= <getalexpressie> ("plus" | "min" | "verminderd met" | "maal" | "gedeeld
door" | "gedeeld door (ABS)") <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> g1["getalexpressie"]
  g1 --> f{ }
  f --> o1(["plus"])
  f --> o2(["min"])
  f --> o3(["verminderd met"])
  f --> o4(["maal"])
  f --> o5(["gedeeld door"])
  f --> o6(["gedeeld door (ABS)"])
  o1 --> g2["getalexpressie"]
  o2 --> g2
  o3 --> g2
  o4 --> g2
  o5 --> g2
  o6 --> g2
  g2 --> s1(( ))
```

*pagina 69*

### 13.4.17 Expressie

#### 13.4.17.1 Expressie

```ebnf
<expressie> ::= <getalexpressie> | <objectexpressie> | <datumexpressie> | <tekstexpressie>
| <booleanexpressie> | <expressietussenhaakjes> | <parametermetlidwoord> | <variabelenaam>
| <concatenatie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["getalexpressie"]
  f --> n2["objectexpressie"]
  f --> n3["datumexpressie"]
  f --> n4["tekstexpressie"]
  f --> n5["booleanexpressie"]
  f --> n6["expressietussenhaakjes"]
  f --> n7["parametermetlidwoord"]
  f --> n8["variabelenaam"]
  f --> n9["concatenatie"]
  n1 --> s1(( ))
  n2 --> s1
  n3 --> s1
  n4 --> s1
  n5 --> s1
  n6 --> s1
  n7 --> s1
  n8 --> s1
  n9 --> s1
```

#### 13.4.17.2 Concatenatie

```ebnf
<concatenatie> ::= <expressie> [ (", " <expressie>)*] (“ en ” | “ of “) <expressie>
```

```mermaid
flowchart LR
  s0(( )) --> e1["expressie"]
  e1 --> komma([", "])
  e1 --> f{ }
  komma --> e2["expressie"]
  e2 --> komma
  e2 --> f
  f --> en(["en"])
  f --> of(["of"])
  en --> e3["expressie"]
  of --> e3
  e3 --> s1(( ))
```

#### 13.4.17.3 Getal expressie

```ebnf
<getalexpressie> ::= <begrenzingexpressie> | afrondingexpressie> | <getalfunctie> |
<getalaggregatie> | <attribuutvanonderwerp> | <getalwaarde> | <rekenjaar> |
<jaaruitfunctie> | <maanduitfunctie> | <daguitfunctie>
```

*pagina 70*

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["begrenzingexpressie"]
  f --> n2["afrondingexpressie"]
  f --> n3["getalfunctie"]
  f --> n4["getalaggregatie"]
  f --> n5["attribuutvanonderwerp"]
  f --> n6["getalwaarde"]
  f --> n7["rekenjaar"]
  f --> n8["jaaruitfunctie"]
  f --> n9["maanduitfunctie"]
  f --> n10["daguitfunctie"]
  n1 --> s1(( ))
  n2 --> s1
  n3 --> s1
  n4 --> s1
  n5 --> s1
  n6 --> s1
  n7 --> s1
  n8 --> s1
  n9 --> s1
  n10 --> s1
```

#### 13.4.17.4 Datumexpressie

```ebnf
<datumexpressie> ::= <datumfunctie> | <attribuutvanonderwerp> | <dedato> |
<datumaggregatie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["datumfunctie"]
  f --> n2["attribuutvanonderwerp"]
  f --> n3["parametermetlidwoord"]
  f --> n4["variabelenaam"]
  f --> n5["dedato"]
  f --> n6["datumaggregatie"]
  n1 --> s1(( ))
  n2 --> s1
  n3 --> s1
  n4 --> s1
  n5 --> s1
  n6 --> s1
```

#### 13.4.17.5 Objectexpressie

```ebnf
<objectexpressie> ::= [<kwantificatie>] <onderwerpketen>
```

*pagina 71*

```mermaid
flowchart LR
  s0(( )) --> kw["kwantificatie"]
  s0 --> ok["onderwerpketen"]
  kw --> ok
  ok --> s1(( ))
```

#### 13.4.17.6 Tekstexpressie

```ebnf
<tekstexpressie> ::= <tekstenwaardereeks> | <tekstwaarde> | <attribuutvanonderwerp>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["tekstenwaardereeks"]
  f --> n2["tekstwaarde"]
  f --> n3["attribuutvanonderwerp"]
  f --> n4["parametermetlidwoord"]
  f --> n5["variabelenaam"]
  n1 --> s1(( ))
  n2 --> s1
  n3 --> s1
  n4 --> s1
  n5 --> s1
```

#### 13.4.17.7 Boolean expressie

```ebnf
<booleanexpressie> ::= <booleanwaarde> | <attribuutvanonderwerp>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["booleanwaarde"]
  f --> n2["attribuutvanonderwerp"]
  f --> n3["parametermetlidwoord"]
  f --> n4["variabelenaam"]
  n1 --> s1(( ))
  n2 --> s1
  n3 --> s1
  n4 --> s1
```

#### 13.4.17.8 Expressie tussen haakjes

```ebnf
<expressietussenhaakjes> ::= "(" <expressie> ")"
```

```mermaid
flowchart LR
  s0(( )) --> haakopen(["("])
  haakopen --> e["expressie"]
  e --> haakdicht([")"])
  haakdicht --> s1(( ))
```

#### 13.4.17.9 Tekst en waardereeks

```ebnf
<tekstenwaardereeks> ::= "\"" (("«" <expressie> "»") | <karakterreeks>)+ "\""
```

```mermaid
flowchart LR
  s0(( )) --> q1(["&quot;"])
  q1 --> f{ }
  f --> open(["«"])
  open --> e["expressie"]
  e --> close(["»"])
  f --> kr["karakterreeks"]
  close --> j{ }
  kr --> j
  j --> q2(["&quot;"])
  j -->|+| f
  q2 --> s1(( ))
```

*pagina 72*

#### 13.4.17.10 Functie

```ebnf
<functie> ::= <datumfunctie> | <getalfunctie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["datumfunctie"]
  f --> n2["getalfunctie"]
  n1 --> s1(( ))
  n2 --> s1
```

#### 13.4.17.11 Getalfunctie

```ebnf
<getalfunctie>::= <percentagefunctie> | <wortelfunctie> | <minimalewaardefunctie> |
<maximalewaardefunctie> | <verminderdmetfunctie> | <tijdsduurtussen>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["percentagefunctie"]
  f --> n2["wortelfunctie"]
  f --> n3["minimalewaardefunctie"]
  f --> n4["maximalewaardefunctie"]
  f --> n5["verminderdmetfunctie"]
  f --> n6["tijdsduurtussen"]
  n1 --> s1(( ))
  n2 --> s1
  n3 --> s1
  n4 --> s1
  n5 --> s1
  n6 --> s1
```

#### 13.4.17.12 Percentagefunctie

```ebnf
<percentagefunctie> ::= <getalexpressie> ["%"] "van" <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> e1["getalexpressie"]
  e1 --> pct(["%"])
  e1 --> van(["van"])
  pct --> van
  van --> e2["getalexpressie"]
  e2 --> s1(( ))
```

#### 13.4.17.13 Wortelfunctie

```ebnf
<wortelfunctie> ::= "de wortel van" <getalexpressie> <afronding>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de wortel van"])
  lit --> e["getalexpressie"]
  e --> a["afronding"]
  a --> s1(( ))
```

#### 13.4.17.14 Machtsverheffenfunctie

```ebnf
<machtsverheffenfunctie> ::= <getalexpressie> "tot de macht" <getalexpressie> <afronding>
```

```mermaid
flowchart LR
  s0(( )) --> e1["getalexpressie"]
  e1 --> lit(["tot de macht"])
  lit --> e2["getalexpressie"]
  e2 --> a["afronding"]
  a --> s1(( ))
```

#### 13.4.17.15 Minimale waardefunctie

```ebnf
<minimalewaardefunctie> ::= "de minimale waarde van" <getalexpressie> (", "
<getalexpressie>)* "en " <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de minimale waarde van"])
  lit --> e1["getalexpressie"]
  e1 --> komma([", "])
  komma --> e2["getalexpressie"]
  e2 -->|*| komma
  e1 --> en(["en "])
  e2 --> en
  en --> e3["getalexpressie"]
  e3 --> s1(( ))
```

*pagina 73*

#### 13.4.17.16 Maximale waardefunctie

```ebnf
<maximalewaardefunctie> ::= "de maximale waarde van" <getalexpressie> (", "
<getalexpressie>)* "en " <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de maximale waarde van"])
  lit --> e1["getalexpressie"]
  e1 --> komma([", "])
  komma --> e2["getalexpressie"]
  e2 -->|*| komma
  e1 --> en(["en "])
  e2 --> en
  en --> e3["getalexpressie"]
  e3 --> s1(( ))
```

#### 13.4.17.17 Absolute waarde functie

```ebnf
<absolutewaardefunctie> ::= "de absolute waarde van (" <getalexpressie> ")"
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de absolute waarde van ("])
  lit --> e["getalexpressie"]
  e --> haakdicht([")"])
  haakdicht --> s1(( ))
```

#### 13.4.17.18 Jaar uit functie

```ebnf
<jaaruitfunctie> ::= "het jaar uit" <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["het jaar uit"])
  lit --> e["datumexpressie"]
  e --> s1(( ))
```

#### 13.4.17.19 Maand uit functie

```ebnf
<maanduitfunctie> ::= "de maand uit" <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de maand uit"])
  lit --> e["datumexpressie"]
  e --> s1(( ))
```

#### 13.4.17.20 Dag uit functie

```ebnf
<daguitfunctie> ::= "de dag uit" <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de dag uit"])
  lit --> e["datumexpressie"]
  e --> s1(( ))
```

#### 13.4.17.21 Uur uit functie

```ebnf
<uuruitfunctie> ::= "het uur uit" <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["het uur uit"])
  lit --> e["datumexpressie"]
  e --> s1(( ))
```

#### 13.4.17.22 Minuut uit functie

```ebnf
<minuutuitfunctie> ::= "de minuut uit" <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de minuut uit"])
  lit --> e["datumexpressie"]
  e --> s1(( ))
```

*pagina 74*

#### 13.4.17.23 Seconde uit functie

```ebnf
<secondeuitfunctie> ::= "de seconde uit" <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de seconde uit"])
  lit --> e["datumexpressie"]
  e --> s1(( ))
```

#### 13.4.17.24 Milliseconde uit functie

```ebnf
<millisecondeuitfunctie> ::= "de milliseconde uit" <datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de milliseconde uit"])
  lit --> e["datumexpressie"]
  e --> s1(( ))
```

#### 13.4.17.25 Afronding expressie

```ebnf
<afrondingexpressie> ::= <getalexpressie> <afronding>
```

```mermaid
flowchart LR
  s0(( )) --> e["getalexpressie"]
  e --> a["afronding"]
  a --> s1(( ))
```

#### 13.4.17.26 Afronding

```ebnf
<afronding> ::= ("naar beneden" | "naar boven" | "rekenkundig" | "richting nul" | "weg van
nul") "afgerond op" <geheelgetal> "decimalen"
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1(["naar beneden"])
  f --> n2(["naar boven"])
  f --> n3(["rekenkundig"])
  f --> n4(["richting nul"])
  f --> n5(["weg van nul"])
  n1 --> j{ }
  n2 --> j
  n3 --> j
  n4 --> j
  n5 --> j
  j --> lit(["afgerond op"])
  lit --> g["geheelgetal"]
  g --> dec(["decimalen"])
  dec --> s1(( ))
```

#### 13.4.17.27 Begrenzing expressie

```ebnf
<begrenzingexpressie> ::= <getalexpressie> "," <begrenzing>
```

```mermaid
flowchart LR
  s0(( )) --> e["getalexpressie"]
  e --> komma([","])
  komma --> b["begrenzing"]
  b --> s1(( ))
```

#### 13.4.17.28 Begrenzing

```ebnf
<begrenzing> ::= (<begrenzingminimum> | <begrenzingmaximum> | <begrenzingminimum> "en"
<begrenzingmaximum>)
```

*pagina 75*

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["begrenzingminimum"]
  f --> n3["begrenzingmaximum"]
  n1 --> en(["en"])
  en --> n2["begrenzingmaximum"]
  n1 --> j{ }
  en --> j
  n2 --> j
  n3 --> j
  j --> s1(( ))
```

#### 13.4.17.29 Begrenzingminimum

```ebnf
<begrenzingminimum> ::= "met een minimum van" <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["met een minimum van"])
  lit --> g["getalexpressie"]
  g --> s1(( ))
```

#### 13.4.17.30 Begrenzingmaximum

```ebnf
<begrenzingmaximum> ::= "met een maximum van" <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["met een maximum van"])
  lit --> g["getalexpressie"]
  g --> s1(( ))
```

#### 13.4.17.31 Rekenjaar

```ebnf
<rekenjaar> ::= "Rekenjaar"
```

```mermaid
flowchart LR
  s0(( )) --> lit(["Rekenjaar"])
  lit --> s1(( ))
```

#### 13.4.17.32 Tijdsduur tussen

```ebnf
<tijdsduurtussen> ::= ("de tijdsduur van "| "de absolute tijdsduur van ") <datumexpressie>
"tot" <datumexpressie> "in" ["hele"] <eenheidmeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> a(["de tijdsduur van"])
  f --> b(["de absolute tijdsduur van"])
  a --> j{ }
  b --> j
  j --> d1["datumexpressie"]
  d1 --> tot(["tot"])
  tot --> d2["datumexpressie"]
  d2 --> in(["in"])
  in --> hele(["hele"])
  in --> e["eenheidmeervoud"]
  hele --> e
  e --> s1(( ))
```

#### 13.4.17.33 Datumfunctie

```ebnf
<datumfunctie>::= <datummet> | <datumtijdmet> | <eerstepaasdagvan> | <dedato> |
<datumberekening> | <eerstevan> | <laatstevan> | <rekendatum>
```

*pagina 76*

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["datummet"]
  f --> n2["datumtijdmet"]
  f --> n3["eerstepaasdagvan"]
  f --> n4["dedato"]
  f --> n5["datumberekening"]
  f --> n6["eerstevan"]
  f --> n7["laatstevan"]
  f --> n8["rekendatum"]
  n1 --> j{ }
  n2 --> j
  n3 --> j
  n4 --> j
  n5 --> j
  n6 --> j
  n7 --> j
  n8 --> j
  j --> s1(( ))
```

#### 13.4.17.34 Rekendatum

```ebnf
<rekendatum> ::= "Rekendatum"
```

```mermaid
flowchart LR
  s0(( )) --> lit(["Rekendatum"])
  lit --> s1(( ))
```

#### 13.4.17.35 Datum met

```ebnf
<datummet> ::= "de datum met jaar:" <getalexpressie> ", maand:" <getalexpressie> " en
dag:" <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> l1(["de datum met jaar:"])
  l1 --> g1["getalexpressie"]
  g1 --> l2([", maand:"])
  l2 --> g2["getalexpressie"]
  g2 --> l3(["en dag:"])
  l3 --> g3["getalexpressie"]
  g3 --> s1(( ))
```

#### 13.4.17.36 Datumtijd met

```ebnf
<datumtijdmet> ::= "de datumtijd met jaar:" <getalexpressie> ", maand:" <getalexpressie>
", dag:" <getalexpressie> ", uur:" <getalexpressie> ", minuut:" <getalexpressie> ",
seconde:" <getalexpressie> " en milliseconde:" <getalexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> l1(["de datumtijd met jaar:"])
  l1 --> g1["getalexpressie"]
  g1 --> l2([", maand:"])
  l2 --> g2["getalexpressie"]
  g2 --> l3([", dag:"])
  l3 --> g3["getalexpressie"]
  g3 --> l4([", uur:"])
  l4 --> g4["getalexpressie"]
  g4 --> l5([", minuut:"])
  l5 --> g5["getalexpressie"]
  g5 --> l6([", seconde:"])
  l6 --> g6["getalexpressie"]
  g6 --> l7(["en milliseconde:"])
  l7 --> g7["getalexpressie"]
  g7 --> s1(( ))
```

#### 13.4.17.37 Eerste paasdag van

```ebnf
<eerstepaasdagvan> ::= "de eerste paasdag van" <jaar>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de eerste paasdag van"])
  lit --> j["jaar"]
  j --> s1(( ))
```

*pagina 77*

#### 13.4.17.38 Datumberekening

```ebnf
<datumberekening> ::= <datumexpressie> ("plus" | "min") <getalexpressie>
<eenheidsafkorting>
```

```mermaid
flowchart LR
  s0(( )) --> d["datumexpressie"]
  d --> f{ }
  f --> plus(["plus"])
  f --> min(["min"])
  plus --> j{ }
  min --> j
  j --> g["getalexpressie"]
  g --> e["eenheidsafkorting"]
  e --> s1(( ))
```

#### 13.4.17.39 Eerste van

```ebnf
<eerstevan> ::= "de eerste van" <datumexpressie> (", " <datumexpressie>)* "en"
<datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de eerste van"])
  lit --> d1["datumexpressie"]
  d1 --> en(["en"])
  d1 --> komma([","])
  komma --> d2["datumexpressie"]
  d2 -- "*" --> komma
  d2 --> en
  en --> d3["datumexpressie"]
  d3 --> s1(( ))
```

#### 13.4.17.40 Laatste van

```ebnf
<laatstevan> ::= "de laatste van" <datumexpressie> (", " <datumexpressie>)* "en"
<datumexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de laatste van"])
  lit --> d1["datumexpressie"]
  d1 --> en(["en"])
  d1 --> komma([","])
  komma --> d2["datumexpressie"]
  d2 -- "*" --> komma
  d2 --> en
  en --> d3["datumexpressie"]
  d3 --> s1(( ))
```

#### 13.4.17.41 Referentie

```ebnf
<referentie> ::= <bezieldereferentie> | <nietbezieldereferentie> | <dagsoortreferentie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["bezieldereferentie"]
  f --> n2["nietbezieldereferentie"]
  f --> n3["dagsoortreferentie"]
  n1 --> j{ }
  n2 --> j
  n3 --> j
  j --> s1(( ))
```

#### 13.4.17.42 Bezielde referentie

```ebnf
<bezieldereferentie> ::= "hij" | ("zijn" <attribuutnaam>) | ("zijn" <rolnaam>)
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> hij(["hij"])
  f --> z1(["zijn"])
  f --> z2(["zijn"])
  z1 --> a["attribuutnaam"]
  z2 --> r["rolnaam"]
  hij --> j{ }
  a --> j
  r --> j
  j --> s1(( ))
```

*pagina 78*

#### 13.4.17.43 Niet bezielde referentie

```ebnf
<nietbezieldereferentie> ::= <objecttypemetlidwoord>
```

```mermaid
flowchart LR
  s0(( )) --> n["objecttypemetlidwoord"]
  n --> s1(( ))
```

#### 13.4.17.44 Dagsoort referentie

```ebnf
<dagsoortreferentie> ::= "de dag"
```

```mermaid
flowchart LR
  s0(( )) --> lit(["de dag"])
  lit --> s1(( ))
```

#### 13.4.17.45 Aggregatie

```ebnf
<aggregatie> ::= <getalaggregatie> | <datumaggregatie> | <dimensieaggregatie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["getalaggregatie"]
  f --> n2["datumaggregatie"]
  f --> n3["dimensieaggregatie"]
  n1 --> j{ }
  n2 --> j
  n3 --> j
  j --> s1(( ))
```

#### 13.4.17.46 Getalaggregatie

```ebnf
<getalaggregatie> ::= <getalaggregatiefunctie> <expressie>
```

```mermaid
flowchart LR
  s0(( )) --> f["getalaggregatiefunctie"]
  f --> e["expressie"]
  e --> s1(( ))
```

#### 13.4.17.47 Getalaggregatiefunctie

```ebnf
<getalaggregatiefunctie> ::= "het aantal" | "de maximale waarde van" | "de minimale waarde
van" | "de som van"
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1(["het aantal"])
  f --> n2(["de maximale waarde van"])
  f --> n3(["de minimale waarde van"])
  f --> n4(["de som van"])
  n1 --> j{ }
  n2 --> j
  n3 --> j
  n4 --> j
  j --> s1(( ))
```

#### 13.4.17.48 Datumaggregatie

```ebnf
<datumaggregatie> ::= <datumaggregatiefunctie> <expressie>
```

*pagina 79*

```mermaid
flowchart LR
  s0(( )) --> f["datumaggregatiefunctie"]
  f --> e["expressie"]
  e --> s1(( ))
```

#### 13.4.17.49 Datumaggregatiefunctie

```ebnf
<datumaggregatiefunctie> ::= "de eerste van" | "de laatste van"
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1(["de eerste van"])
  f --> n2(["de laatste van"])
  n1 --> j{ }
  n2 --> j
  j --> s1(( ))
```

#### 13.4.17.50 Dimensieaggregatie

```ebnf
<dimensieaggregatie> ::= (<getalaggregatiefunctie> | <datumaggregatiefunctie>)
<attribuutvanonderwerp> <dimensieselectie>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> n1["getalaggregatiefunctie"]
  f --> n2["datumaggregatiefunctie"]
  n1 --> j{ }
  n2 --> j
  j --> a["attribuutvanonderwerp"]
  a --> d["dimensieselectie"]
  d --> s1(( ))
```

#### 13.4.17.51 Dimensieselectie

```ebnf
<dimensieselectie> ::= "over" (<aggregerenoveralledimensies> | <aggregerenoververzameling>
| <aggregerenoverbereik>)
```

```mermaid
flowchart LR
  s0(( )) --> over(["over"])
  over --> f{ }
  f --> n1["aggregerenoveralledimensies"]
  f --> n2["aggregerenoververzameling"]
  f --> n3["aggregerenoverbereik"]
  n1 --> j{ }
  n2 --> j
  n3 --> j
  j --> s1(( ))
```

#### 13.4.17.52 Aggregatie over alle dimensies

```ebnf
<aggregerenoveralledimensies> ::= "alle" <dimensienaammeervoud>
```

```mermaid
flowchart LR
  s0(( )) --> alle(["alle"])
  alle --> d["dimensienaammeervoud"]
  d --> s1(( ))
```

#### 13.4.17.53 Aggregatie over verzameling

```ebnf
<aggregerenoververzameling> ::= "de" <dimensienaammeervoud> "vanaf" <> "t/m" <>
```

```mermaid
flowchart LR
  s0(( )) --> de(["de"])
  de --> d["dimensienaammeervoud"]
  d --> vanaf(["vanaf"])
  vanaf --> tm(["t/m"])
  tm --> s1(( ))
```

*pagina 80*

#### 13.4.17.54 Aggregeren over bereik

```ebnf
<aggregerenoverbereik> ::= "de" <dimensienaammeervoud> "in {" <dimensiewaarde> [(", "
<dimensiewaarde>)* "en" <dimensiewaarde>] "}"
```

```mermaid
flowchart LR
  s0(( )) --> de(["de"])
  de --> d["dimensienaammeervoud"]
  d --> inacc(["in {"])
  inacc --> dw1["dimensiewaarde"]
  dw1 --> opt{ }
  opt --> komma([", "])
  komma --> dw2["dimensiewaarde"]
  dw2 --> komma
  dw2 --> en(["en"])
  opt --> en
  en --> dw3["dimensiewaarde"]
  dw3 --> acc(["}"])
  opt --> acc
  dw1 --> acc
  acc --> s1(( ))
```

#### 13.4.17.55 Conditie bij expressie

```ebnf
<conditiebijexpressie> ::= “gedurende de tijd dat” (<toplevelelementairevoorwaarde> |
<toplevelsamengesteldevoorwaarde>) | <periodevergelijkingenkelvoudig>
```

```mermaid
flowchart LR
  s0(( )) --> f{ }
  f --> g(["gedurende de tijd dat"])
  g --> fb{ }
  fb --> n1["toplevelelementairevoorwaarde"]
  fb --> n2["toplevelsamengesteldevoorwaarde"]
  n1 --> j{ }
  n2 --> j
  f --> n3["periodevergelijkingenkelvoudig"]
  j --> e{ }
  n3 --> e
  e --> s1(( ))
```

#### 13.4.17.56 Aggregeren over waarden per tijdseenheid

```ebnf
<waardepertijdseenheidaggregatie> ::= "het totaal van" <expressie>
[<conditiebijexpressie>]
```

```mermaid
flowchart LR
  s0(( )) --> ht(["het totaal van"])
  ht --> e["expressie"]
  e --> c["conditiebijexpressie"]
  e --> s1(( ))
  c --> s1
```

#### 13.4.17.57 Telling aantal dagen

```ebnf
<tellingaantaldagen> ::= "het aantal dagen in” ("de maand" | "het jaar") “dat" <expressie>
```

```mermaid
flowchart LR
  s0(( )) --> had(["het aantal dagen in"])
  had --> f{ }
  f --> dm(["de maand"])
  f --> hj(["het jaar"])
  dm --> j{ }
  hj --> j
  j --> dat(["dat"])
  dat --> e["expressie"]
  e --> s1(( ))
```

#### 13.4.17.58 Tijdsevenredig deel

```ebnf
<tijdsevenredigdeel> ::= "het tijdsevenredig deel per” ("maand" | "jaar") “van"
<expressie> <conditiebijexpressie>
```

```mermaid
flowchart LR
  s0(( )) --> htd(["het tijdsevenredig deel per"])
  htd --> f{ }
  f --> mnd(["maand"])
  f --> jr(["jaar"])
  mnd --> j{ }
  jr --> j
  j --> van(["van"])
  van --> e["expressie"]
  e --> c["conditiebijexpressie"]
  c --> s1(( ))
```

*pagina 81*
