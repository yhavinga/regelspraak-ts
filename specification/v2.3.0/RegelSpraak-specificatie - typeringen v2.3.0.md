*(logo Belastingdienst)*

# RegelSpraak-specificatie – typeringen

| | |
|---|---|
| Datum: | 4-12-2025 |
| Versie | 2.3.0 |

© 2025 Belastingdienst

Alle rechten voorbehouden.
Niets uit deze uitgave mag worden verveelvoudigd, opgeslagen in een geautomatiseerd gegevensbestand en/of openbaar gemaakt in enige vorm of op enige wijze, hetzij elektronisch, mechanisch, door fotokopieën, opnamen of op enige andere manier zonder voorafgaande schriftelijke toestemming van de auteur.

*pagina 1*

## Inhoudsopgave:

1. Versiebeheer .... 4
2. Introductie .... 5
3. Tijdsafhankelijkheid .... 6
4. Operatoren .... 7
   - 4.1 Optellen: plus .... 7
   - 4.2 Aftrekken: min .... 8
   - 4.3 Aftrekken: verminderd met .... 9
   - 4.4 Vermenigvuldigen: maal .... 11
   - 4.5 Delen: gedeeld door en gedeeld door (ABS) .... 12
   - 4.6 Worteltrekken: de wortel van .... 13
   - 4.7 Machtsverheffen: tot de macht .... 14
   - 4.8 Percentage bepalen: van .... 15
   - 4.9 Absolute waarde van .... 15
   - 4.10 Sommatie: som van .... 16
   - 4.11 Telling van instanties: aantal .... 17
   - 4.12 Minimale waarde van .... 17
   - 4.13 Maximale waarde van .... 18
   - 4.14 Eerste waarde: eerste van .... 18
   - 4.15 Laatste waarde: laatste van .... 19
   - 4.16 Tijdsduur van … tot … .... 19
   - 4.17 Absolute tijdsduur van … tot … .... 20
   - 4.18 Jaar/maand/dag/uur/minuut/seconde/milliseconde uit .... 20
   - 4.19 Eerste paasdag van .... 21
   - 4.20 Aggregeren in de tijd: totaal van .... 21
   - 4.21 Tellen van dagen: aantal dagen in … dat … .... 22
   - 4.22 Omrekening met gebroken jaren of maanden: tijdsevenredig deel .... 22
5. Condities en predicaten .... 24
   - 5.1 Kleiner dan .... 24
   - 5.2 Kleiner of gelijk aan .... 25
   - 5.3 Gelijk aan .... 26
   - 5.4 Groter of gelijk aan .... 27
   - 5.5 Groter dan .... 28
   - 5.6 Ongelijk aan .... 29
   - 5.7 Eerder dan .... 30

*pagina 2*

   - 5.8 Eerder of gelijk aan .... 30
   - 5.9 Later of gelijk aan .... 31
   - 5.10 Later dan .... 31
   - 5.11 Is gevuld .... 32
   - 5.12 Is leeg .... 32
   - 5.13 Voldoet aan de elfproef .... 33
   - 5.14 Is kenmerk/ is rol .... 34
   - 5.15 Is dagsoort .... 34
   - 5.16 Is numeriek .... 35
6. Resultaatdeel .... 36
   - 6.1 Gelijkstelling .... 36
   - 6.2 Initialisatie .... 37
   - 6.3 Kenmerktoekenning .... 38
   - 6.4 Feitcreatie .... 38
   - 6.5 ObjectCreatie .... 38
   - 6.6 Consistentieregel .... 38
   - 6.7 Dagsoortdefinitie .... 38
   - 6.8 Startpuntbepaling .... 38

*pagina 3*

## 1. Versiebeheer

Onderstaande tabel bevat het overzicht van definitieve versies. In de omschrijving staan de wijzigingen ten opzichte van de vorige versie.

| Versie | Status | Datum | Omschrijving |
|---|---|---|---|
| 1.00 | Definitief | 01-05-2023 | Initiële versie. |
| 1.0.1 | Definitief | 16-05-2023 | Aanpassingen t.b.v. publicatie. Namen en informatie over concept-versies en mogelijke toekomstige aanpassingen verwijderd. |
| 1.1.0 | Definitief | 24-10-2023 | Ophoging versienummer voor aansluiting bij overige documenten. |
| 1.2.0 | Definitief | 11-04-2024 | <ul><li>Par. 3.7 Typeringen voor expressie machtsverheffen toegevoegd.</li><li>Par. 3.9 Typeringen voor expresssie "absolute waarde van" toegevoegd.</li><li>Par. 3.17 Typeringen voor expressie "absolute tijdsduur van … tot …" toegevoegd.</li></ul> |
| 2.0.0 | Definitief | 27-09-2024 | Hoofdstuk 3 met toelichting op tijdsafhankelijkheid toegevoegd. Specifieke tijdsafhankelijke expressies toegevoegd:<ul><li>Par. 4.20 – totaal van.</li><li>Par. 4.21 – aantal dagen in … dat ….</li><li>Par. 4.22 – tijdsevenredig deel.</li></ul> |
| 2.1.0 | Definitief | 24-1-2025 | Ophoging versienummer om aan te sluiten op set met generieke specificatiedocumenten. |
| 2.2.0 | Definitief | 4-9-2025 | Par. 4.18 expressies "uur/minuut/seconde/milliseconde uit" toegevoegd. |
| 2.3.0 | Definitief | 4-12-2025 | Par. 6.8 Startpuntbepaling toegevoegd. |

*Tabel 1*

*pagina 4*

## 2. Introductie

In dit document wordt de werking van de verschillende operatoren, predicaten en acties op een gestructureerde manier vastgelegd. Waar van toepassing wordt voor ieder taalpatroon beschreven:

1. met welke expressies dit taalpatroon gebruikt kan worden,
2. wat de eenheid restricties zijn bij gebruik van numerieke expressies,
3. hoe omgegaan moet worden met leegwaarden, en
4. met welke decimale precisie berekeningen met numerieke expressies worden uitgevoerd.

Voor een nadere detailuitleg van gebruikte termen en concepten wordt verwezen naar het hoofddocument 'RegelSpraak specificatie'.

*pagina 5*

## 3. Tijdsafhankelijkheid

Tijdsafhankelijkheid is een algemeen aspect dat van invloed is op de datatypes. Een expressie heeft een type met tijdsdimensie als er sprake is van een gegeven met een tijdlijn, of als er een periode (van … tot) in voorkomt.

Generiek geldt dat de granulariteit van de tijdlijn van de resultaatexpressie kleiner of gelijk moet zijn aan de kleinste granulariteit van de expressies van de argumenten.

Aanvullend geldt hierbij dat als in een expressie een periode wordt opgegeven dat dan een tijdlijn voor elke dag geldt, tenzij de periodegrenzen worden gespecificeerd met datum-tijd-literals die precies op maand- of jaargrenzen vallen.

*pagina 6*

## 4. Operatoren

### 4.1 Optellen: plus

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

In de volgende tabel wordt voor de *plus* operator weergegeven welke expressies gebruikt kunnen worden in combinatie met de betreffende operator. Bij de *plus* operator is het mogelijk om numerieke expressies zonder eenheden bij elkaar op te tellen en een numerieke tijdswaarde op te tellen bij een datum.

N.B. Dit soort tabellen zullen in de rest van het document terugkomen, waarbij de getallen in de eerste kolom de verschillende mogelijke scenario's weergeven. Verder staat, wanneer het om numerieke expressies gaat, in de laatste kolom ook beschreven welke eenheden gebruikt mogen worden en hoe deze zich verhouden tot het resultaat dat volgt na het uitvoeren van de betreffende operator. Het gebruik van eenheden is optioneel maar zodra een expressie in het taalpatroon een eenheid gebruikt, moeten de andere expressies ook een eenheid gebruiken.

| | **plus** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | plus | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid3 die om te rekenen is in Eenheid1 |
| **2** | Linkerexpressie | Datum-tijd | - |
| | Operator | plus | - |
| | Rechterexpressie | Numeriek | Eenheid1 uit Tijdseenheidsysteem |
| | Resultaatexpressie | Datum-tijd | - |

*Tabel 2*

**Rekentabel**

In de volgende tabel wordt weergegeven hoe leegwaarden het resultaat beïnvloeden na het uitvoeren van de aangegeven operator. In de regel wordt een leegwaarde als 0 beschouwd bij het uitvoeren van de *plus* operator.

| **plus** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **Leeg** | **Y** |
| **Leeg** | 0 | Y |
| **X** | X | X+Y |

*Tabel 3*

**Precisie**

In de volgende tabel wordt uitgebeeld hoeveel decimalen het resultaat krijgt bij het uitvoeren van de aangegeven operator op decimale getallen. In de regel krijgt het resultaat evenveel decimalen als het aantal decimalen van de waarde met de meeste decimalen.

*pagina 7*

Wanneer er met waarden met ongelijke eenheden wordt gerekend maar wel eenheden die in elkaar omgerekend kunnen worden, worden de waarden eerst omgerekend naar eenzelfde eenheid waarna vervolgens de standaardregel wordt toegepast. Het kan hierbij echter voorkomen dat er door een omrekening decimalen wegvallen: bij het omzetten van uren naar seconden bijvoorbeeld wordt met 3600 vermenigvuldigd, waardoor er 2 decimalen wegvallen (0,123 uur = 442,8 seconden).

| **plus** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **X,X** | **X,XXX** |
| **X,X** | X,X | X,XXX |
| **X,XXXX** | X,XXXX | X,XXXX |

*Tabel 4*

Wanneer een expressie met tijdseenheid bij een datum(-tijd)expressie opgeteld wordt, is de precisie afhankelijk van de tijdeenheid en de datum(-tijd)expressie:

1) Het resultaat zal een datumexpressie zijn wanneer er bij een datumexpressie een expressie met een tijdseenheid groter dan 'dag' wordt opgeteld.
2) Het resultaat zal altijd een datum-tijdexpressie zijn wanneer er opgeteld wordt bij een datum-tijdexpressie óf wanneer de expressie die opgeteld wordt een tijdseenheid kleiner dan 'dag' is.

### 4.2 Aftrekken: min

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *min* operator is het mogelijk om numerieke expressies zonder en met eenheden van elkaar af te trekken, en een numerieke tijdswaarde af te trekken van een datum.

| | **min** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | min | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid3 die om te rekenen is in Eenheid1 |
| **2** | Linkerexpressie | Datum-tijd | - |
| | Operator | min | - |
| | Rechterexpressie | Numeriek | Eenheid1 uit Tijdseenheidsysteem |
| | Resultaatexpressie | Datum-tijd | - |

*Tabel 5*

**Rekentabel**

*pagina 8*

In de regel wordt een leegwaarde als 0 beschouwd bij het uitvoeren van de *min* operator.

| **min** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **Leeg** | **Y** |
| **Leeg** | 0 | -Y |
| **X** | X | X-Y |

*Tabel 6*

**Precisie**

In de regel krijgt het resultaat evenveel decimalen als het aantal decimalen van de waarde met de meeste decimalen. Wanneer er met waarden met ongelijke eenheden wordt gerekend maar wel met eenheden die in elkaar omgerekend kunnen worden, worden de waarden eerst omgerekend naar dezelfde eenheid waarna vervolgens de standaardregel wordt toegepast.

| **min** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **X,X** | **X,XXX** |
| **X,X** | X,X | X,XXX |
| **X,XXXX** | X,XXXX | X,XXXX |

*Tabel 7*

Wanneer een expressie met tijdseenheid van een datum(-tijd)expressie afgetrokken wordt, is de precisie afhankelijk van de tijdeenheid en de datum(-tijd)expressie:

1) Het resultaat zal een datumexpressie zijn wanneer er van een datumexpressie een expressie met een tijdseenheid groter dan 'dag' wordt afgetrokken.
2) Het resultaat zal altijd een datum-tijdexpressie zijn wanneer er afgetrokken wordt van een datum-tijdexpressie óf wanneer de expressie die afgetrokken wordt een tijdseenheid kleiner dan 'dag' is.

### 4.3 Aftrekken: verminderd met

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *verminderd met* operator is het mogelijk om numerieke expressies zonder eenheden van elkaar af te trekken.

| | **verminderd met** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | verminderd met | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid3 die om te rekenen is in Eenheid1 |

*Tabel 8*

*pagina 9*

**Rekentabel**

In de regel krijgt het resultaat een leegwaarde wanneer de waarde van de linkerexpressie leeg is en wordt een leegwaarde van de rechterexpressie als 0 beschouwd.

| **verminderd met** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **Leeg** | **Y** |
| **Leeg** | leeg | leeg |
| **X** | X | X-Y |

*Tabel 9*

**Precisie**

In de regel krijgt het resultaat evenveel decimalen als het aantal decimalen van de waarde met de meeste decimalen.

Wanneer er met waarden met ongelijke eenheden wordt gerekend maar wel met eenheden die in elkaar omgerekend kunnen worden, worden de waarden eerst omgerekend naar dezelfde eenheid waarna vervolgens de standaardregel wordt toegepast.

| **verminderd met** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **X,X** | **X,XXX** |
| **X,X** | X,X | X,XXX |
| **X,XXXX** | X,XXXX | X,XXXX |

*Tabel 10*

*pagina 10*

### 4.4 Vermenigvuldigen: maal

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *maal* operator is het mogelijk om een numerieke expressie met een eenheid te vermenigvuldigen met een numerieke expressie die een andere, dezelfde of géén eenheid heeft. Ook is het mogelijk om twee numerieke expressies die beide géén eenheid hebben met elkaar te vermenigvuldigen.

| | **maal** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | maal | - |
| | Rechterexpressie | Numeriek | Eenheid2 |
| | Resultaatexpressie | Numeriek | Eenheid1 * Eenheid2 |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | maal | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid1 * Eenheid1 |
| **3** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | maal | - |
| | Rechterexpressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | Eenheid1 |
| **4** | Linkerexpressie | Numeriek | - |
| | Operator | maal | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid1 |
| **5** | Linkerexpressie | Numeriek | - |
| | Operator | maal | - |
| | Rechterexpressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |

*Tabel 11*

**Rekentabel**

In de regel wordt een leegwaarde als 0 beschouwd bij het uitvoeren van de *maal* operator.

| **maal** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **Leeg** | **Y** |
| **Leeg** | 0 | 0 |
| **X** | 0 | X*Y |

*Tabel 12*

*pagina 11*

**Precisie**

In de regel krijgt het resultaat evenveel decimalen als de som van het aantal decimalen van de twee expressies die vermenigvuldigd worden.

Wanneer er met waarden met ongelijke eenheden wordt gerekend maar wel met eenheden die in elkaar omgerekend kunnen worden, worden de waarden eerst omgerekend naar dezelfde eenheid waarna vervolgens de standaardregel wordt toegepast. Het kan hierbij voorkomen dat er door vermenigvuldiging met constanten decimalen wegvallen: bijvoorbeeld bij het vermenigvuldigen van bijvoorbeeld een attribuutwaarde 0,123 met 1000 komen 3 decimalen te vervallen.

| **maal** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **X,XX** | **X,XXX** |
| **X,X** | X,XXX | X,XXXX |
| **X,XXXX** | X,XXXXXX | X,XXXXXXX |

*Tabel 13*

### 4.5 Delen: gedeeld door en gedeeld door (ABS)

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *gedeeld door* en *gedeeld door (ABS)* operatoren is het mogelijk om een numerieke expressie met een eenheid te delen door een numerieke expressie die een andere, dezelfde of géén eenheid heeft. Ook is het mogelijk om twee numerieke expressies die beide géén eenheid hebben door elkaar te delen.

| | **gedeeld door**<br>**gedeeld door (ABS)** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | gedeeld door<br>gedeeld door (ABS) | - |
| | Rechterexpressie | Numeriek | Eenheid2 |
| | Resultaatexpressie | Numeriek | Eenheid1/Eenheid2 |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | gedeeld door<br>gedeeld door (ABS) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Numeriek | - |
| **3** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | gedeeld door<br>gedeeld door (ABS) | - |
| | Rechterexpressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*pagina 12*

| | **gedeeld door**<br>**gedeeld door (ABS)** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **4** | Linkerexpressie | Numeriek | - |
| | Operator | gedeeld door<br>gedeeld door (ABS) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid1 |
| **5** | Linkerexpressie | Numeriek | - |
| | Operator | gedeeld door<br>gedeeld door (ABS) | - |
| | Rechterexpressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |

*Tabel 14*

**Rekentabel**

In de regel wordt een leegwaarde als 0 beschouwd bij het uitvoeren van de *gedeeld door* operator. Als uitzondering geldt wanneer een leegwaarde door een andere leegwaarde gedeeld wordt, dan is het resultaat geen error maar gelijk aan 0.

| **gedeeld door**<br>**gedeeld door (ABS)** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **Leeg** | **Y** |
| **Leeg** | 0 | 0 |
| **X** | Error | X/Y |

*Tabel 15*

**Precisie**

Bij de *gedeeld door* en *gedeeld door (ABS)* operatoren is het resultaat in basis altijd een geheel getal of een breuk. Hierbij wordt dus geen decimale precisie gebruikt voor. Slechts in de gevallen wanneer een breuk ook te schrijven is als een decimaal getal zonder verlies van precisie wordt de decimale notatie gebruikt en dit zal dan altijd het exacte getal zijn.

Merk op dat specifiek voor de *gedeeld door (ABS)* operator het aantal decimalen van het resultaat (waar nodig) altijd gelijk is aan 5 waarbij het resultaat richting 0 is/wordt afgerond.

Het kan hierbij voorkomen dat er door te delen met constanten er decimalen ontstaan: bijvoorbeeld door de attribuutwaarde 1 te delen door 1000 zullen er 3 decimalen extra ontstaan.

### 4.6 Worteltrekken: de wortel van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij een *wortel van* expressie wordt slechts één expressie gebruikt. Dit is namelijk de expressie waarvan de wortel genomen wordt. Deze expressie kan wel of geen eenheid hebben. Welke resultaten er dan mogelijk zijn, volgt in de navolgende tabel.

*pagina 13*

| | **wortel van** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Operator | wortel van | - |
| | Expressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |
| **2** | Operator | wortel van | - |
| | Expressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*Tabel 16*

**Rekentabel**

Wanneer van een leegwaarde de wortel wordt genomen, levert dit ook een leegwaarde als resultaat.

**Precisie**

Bij de *wortel van* operator is het verplicht om een afronding te doen. De precisie wordt dus bepaald door te specificeren op hoeveel decimalen afgerond moet worden. Wanneer het resultaat minder decimalen heeft dan het opgegeven aantal decimalen worden er geen (achterloop)nullen geïntroduceerd.

### 4.7 Machtsverheffen: tot de macht

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij een *tot de macht* expressie mogen uitsluitend expressies gebruikt worden met een numeriek datatype zonder eenheid.

| | **tot de macht** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | - |
| | Operator | tot de macht | |
| | Rechterexpressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |

*Tabel 17*

**Rekentabel**

Als sprake is van een leegwaarde voor de linker- of rechterexpressie of voor beide expressies, dan levert dit ook een leegwaarde als resultaat.

**Precisie**

Bij de *tot de macht* operator is het verplicht om een afronding toe te voegen. De precisie wordt dus bepaald door te specificeren op hoeveel decimalen afgerond moet worden. Wanneer het resultaat minder decimalen heeft dan het opgegeven aantal decimalen worden er geen (achterloop)nullen geïntroduceerd.

*pagina 14*

### 4.8 Percentage bepalen: van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *percentage van* operator is de eenheid van de linkerexpressie altijd van het soort procent '%'. De rechterexpressie mag hierbij geen afwijkende eenheid hebben.

| | **percentage van** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | % |
| | Operator | van | - |
| | Rechterexpressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |
| **2** | Linkerexpressie | Numeriek | % |
| | Operator | van | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*Tabel 18*

**Rekentabel**

In de regel wordt een leegwaarde als 0 beschouwd bij het uitvoeren van de *percentage van* operator. Zie verder de navolgende tabel.

| **percentage van** | **Rechterexpressie** | |
|---|---|---|
| **Linkerexpressie** | **Leeg** | **Y** |
| **Leeg** | 0 | 0 |
| **X** | 0 | (X*Y)/100 |

*Tabel 19*

**Precisie**

Bij de *percentage van* operator is het resultaat in basis altijd een geheel getal of een breuk. Hierbij wordt dus geen decimale precisie gebruikt. Slechts in de gevallen wanneer een breuk ook te schrijven is als een decimaal getal zonder verlies van precisie wordt de decimale notatie gebruikt, en dit zal dan altijd het exacte getal zijn.

### 4.9 Absolute waarde van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij een *absolute waarde van* expressie wordt slechts één expressie gebruikt. Dit is namelijk de expressie waarvan de absolute waarde genomen wordt. Deze expressie kan wel of geen eenheid hebben. Welke resultaten er dan mogelijk zijn, volgt in de navolgende tabel.

*pagina 15*

| | **absolute waarde van** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Operator | absolute waarde van | - |
| | Expressie | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |
| **2** | Operator | absolute waarde van | - |
| | Expressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*Tabel 20*

**Rekentabel**

Wanneer van een leegwaarde de absolute waarde wordt genomen, levert dit ook een leegwaarde als resultaat.

**Precisie**

Bij de *absolute waarde van* operator komt de precisie van het resultaat overeen met de precisie van de expressie waarvan de absolute waarde wordt genomen.

### 4.10 Sommatie: som van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de getalaggregatie *som van* operator kan een concatenatie van expressies gebruikt worden. De hoeveelheid expressies is niet vooraf gedefinieerd maar de expressies moeten wel allemaal numeriek zijn. Verder moeten, wanneer er eenheden worden gebruikt, deze in elkaar om te rekenen zijn.

| | **som van** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Operator | som van | - |
| | Expressies | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |
| **2** | Operator | som van | - |
| | Expressies | Numeriek | Eenheden die om te rekenen zijn naar Eenheid1 (resultaat eenheid) |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*Tabel 21*

**Rekentabel**

In de regel worden leegwaarden van expressies in de som als zijnde 0 geteld. Wanneer alle expressies een leegwaarde bevatten zal het resultaat ook een leegwaarde zijn, tenzij gebruik is gemaakt van het ‘of 0 als die er niet zijn’ patroon.

**Precisie**

*pagina 16*

Net als bij de *plus* operator krijgt het resultaat bij de *som van* operator evenveel decimalen als het aantal decimalen van de waarde met de meeste decimalen.

Wanneer er met waarden met ongelijke eenheden wordt gerekend maar wel met eenheden die in elkaar omgerekend kunnen worden, dan worden de waarden eerst omgerekend naar dezelfde eenheid waarna vervolgens de standaardregel wordt toegepast.

### 4.11 Telling van instanties: aantal

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *aantal* operator kan een concatenatie van expressies gebruikt worden. De hoeveelheid expressies is niet vooraf gedefinieerd. De *aantal* operator kan alleen gebruik maken van onderwerpexpressies.

**Rekentabel**

Aangezien alleen onderwerpexpressies gebruikt kunnen worden, zijn leegwaarden niet van toepassing bij de *aantal* operator.

**Precisie**

Het resultaat van de *aantal* operator zal altijd een niet-negatief geheel getal zijn.

### 4.12 Minimale waarde van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de getalaggregatiefunctie *minimale waarde van* operator kan een concatenatie van expressies gebruikt worden. De hoeveelheid expressies is niet vooraf gedefinieerd maar het moeten wel allemaal numerieke expressies zijn. Verder moeten wanneer eenheden worden gebruikt, deze in elkaar om te rekenen zijn.

| | **minimale waarde van** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Operator | minimale waarde van | - |
| | Expressies | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |
| **2** | Operator | minimale waarde van | - |
| | Expressies | Numeriek | Eenheden die om te rekenen zijn naar Eenheid1 (resultaat eenheid) |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*Tabel 22*

**Rekentabel**

In de regel worden leegwaarden van expressies in de *minimale waarde van* operator niet meegeteld. Wanneer alle expressies een leegwaarde bevatten, zal het resultaat ook een leegwaarde zijn.

*pagina 17*

**Precisie**

Het aantal decimalen van het resultaat zal gelijk zijn aan het aantal decimalen van de waarde van de numerieke expressie met de kleinste waarde.

### 4.13 Maximale waarde van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de getalaggregatiefunctie *maximale waarde van* operator kan een concatenatie van expressies gebruikt worden. De hoeveelheid expressies is niet vooraf gedefinieerd maar het moeten wel allemaal numerieke expressies zijn. Verder moeten, wanneer er eenheden worden gebruikt, deze in elkaar om te rekenen zijn.

| | **maximale waarde van** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Operator | maximale waarde van | - |
| | Expressies | Numeriek | - |
| | Resultaatexpressie | Numeriek | - |
| **2** | Operator | maximale waarde van | - |
| | Expressies | Numeriek | Eenheden die om te rekenen zijn naar Eenheid1 (resultaat eenheid) |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*Tabel 23*

**Rekentabel**

In de regel worden leegwaarden van expressies in de *maximale waarde van* operator niet meegeteld. Wanneer alle expressies een leegwaarde bevatten, zal het resultaat ook een leegwaarde zijn.

**Precisie**

Het aantal decimalen van het resultaat zal gelijk zijn aan het aantal decimalen van de waarde van de numerieke expressie met de grootste waarde.

### 4.14 Eerste waarde: eerste van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de datumaggregatiefunctie *eerste van* operator kan een concatenatie van expressies gebruikt worden. De hoeveelheid expressies is niet vooraf gedefinieerd maar het moeten wel allemaal datumexpressies zijn. Verder moeten alle expressies dezelfde tijd-precisie bevatten.

*pagina 18*

| | **eerste van** | **Datatype** |
|---|---|---|
| **1** | Operator | eerste van |
| | Expressies | Datum-tijd |
| | Resultaatexpressie | Datum-tijd |

*Tabel 24*

**Rekentabel**

In de regel worden leegwaarden van expressies in de *eerste van* operator niet meegeteld. Wanneer alle expressies een leegwaarde bevatten, zal het resultaat ook een leegwaarde zijn.

**Precisie**

Het aantal decimalen is niet van toepassing bij het bepalen van de eerste datum.

### 4.15 Laatste waarde: laatste van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de datumaggregatiefunctie *laatste van* operator kan een concatenatie van expressies gebruikt worden. De hoeveelheid expressies is niet vooraf gedefinieerd maar het moeten wel allemaal datumexpressies zijn. Verder moeten alle expressies dezelfde tijd-precisie bevatten.

| | **laatste van** | **Datatype** |
|---|---|---|
| **1** | Operator | Laatste van |
| | Expressies | Datum-tijd |
| | Resultaatexpressie | Datum-tijd |

*Tabel 25*

**Rekentabel**

In de regel worden leegwaarden van expressies in de *laatste van* operator niet meegeteld. Wanneer alle expressies een leegwaarde bevatten, zal het resultaat ook een leegwaarde zijn.

**Precisie**

Het aantal decimalen is niet van toepassing bij het bepalen van de laatste datum.

### 4.16 Tijdsduur van … tot …

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *tijdsduur van … tot …* operator/functie worden twee expressies gebruikt, beide van het datatype datum. Beide expressies moeten dezelfde tijd-precisie bevatten. Het resultaat is een Numerieke expressie met een tijdseenheid.

*pagina 19*

| | **tijdsduur van tot** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Datum-tijd | - |
| | Operator | tijdsduur van … tot … | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Numeriek | Tijdseenheid |

*Tabel 26*

**Rekentabel**

Als sprake is van een leegwaarde voor de linker- of rechterexpressie of voor beide expressies, dan levert dit ook een leegwaarde als resultaat.

**Precisie**

Het aantal decimalen is niet van toepassing bij het bepalen van de tijdsduur.

### 4.17 Absolute tijdsduur van … tot …

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de (nagenoeg) gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *absolute tijdsduur van … tot …* operator/functie worden twee expressies gebruikt, beide van het datatype datum. Beide expressies moeten dezelfde tijd-precisie bevatten. Het resultaat is een Numerieke expressie met een tijdseenheid.

| | **absolute tijdsduur van tot** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Datum-tijd | - |
| | Operator | absolute tijdsduur van … tot … | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Numeriek | Tijdseenheid |

*Tabel 27*

**Rekentabel**

Als sprake is van een leegwaarde voor de linker- of rechterexpressie of voor beide expressies, dan levert dit ook een leegwaarde als resultaat.

**Precisie**

Het aantal decimalen is niet van toepassing bij het bepalen van de tijdsduur.

### 4.18 Jaar/maand/dag/uur/minuut/seconde/milliseconde uit

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *jaar/maand/dag/uur/minuut/seconde/milliseconde uit* operatoren/functies wordt één datum-/datumtijdexpressie als invoer gebruikt. Het resultaat is een numerieke expressie zonder eenheid.

*pagina 20*

| | **Jaar/maand/dag/uur/minuut/seconde/milliseconde uit** | **Datatype** |
|---|---|---|
| | Operator | dag/maand/jaar uit |
| **1** | Expressie | Datum |
| | Resultaatexpressie | Numeriek |

*Tabel 28*

**Rekentabel**

Als de inputexpressie een leegwaarde bevat, krijgt het resultaat ook een leegwaarde.

**Precisie**

Het resultaat zal altijd een geheel getal zijn.

### 4.19 Eerste paasdag van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *eerste paasdag van* operator/functie wordt één numerieke expressie zonder eenheid gebruikt. De expressie is altijd een geheel getal met 4 cijfers. Het resultaat is een datumexpressie.

| | **eerste paasdag van** | **Datatype** |
|---|---|---|
| | Operator | eerste paasdag van |
| **1** | Expressie | Numeriek |
| | Resultaatexpressie | Datum |

*Tabel 29*

**Rekentabel**

Als de inputexpressie een leegwaarde bevat, krijgt het resultaat ook een leegwaarde. Het resultaat zal de datum van de eerste paasdag in het jaar dat uitgedrukt wordt door het getal met 4 cijfers.

**Precisie**

Het aantal decimalen is niet van toepassing bij het bepalen van de eerste paasdag.

### 4.20 Aggregeren in de tijd: totaal van

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij het aggregeren van waarden in de tijd met de *totaal van* operator moet de expressie numeriek zijn met een eenheid per tijdseenheid.

*pagina 21*

| | **totaal van** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Operator | totaal van | - |
| | Expressies | Numeriek | 1/tijdseenheid |
| | Resultaatexpressie | Numeriek | - |
| **2** | Operator | som van | - |
| | Expressies | Numeriek | Eenheden die om te rekenen zijn naar Eenheid1 (resultaat eenheid)/tijdseenheid |
| | Resultaatexpressie | Numeriek | Eenheid1 |

*Tabel 30*

**Rekentabel**

In de regel worden leegwaarden van expressies in de tijd in de som als zijnde 0 geteld. Wanneer alle expressies een leegwaarde bevatten zal het resultaat 0 zijn.

**Precisie**

Net als bij de *plus* operator krijgt het resultaat bij de *totaal van* operator evenveel decimalen als het aantal decimalen van de waarde met de meeste decimalen.
Wanneer er met waarden met ongelijke eenheden wordt gerekend maar wel met eenheden die in elkaar omgerekend kunnen worden, dan worden de waarden eerst omgerekend naar dezelfde eenheid waarna vervolgens de standaardregel wordt toegepast.

### 4.21 Tellen van dagen: aantal dagen in … dat …

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

Bij de *aantal dagen dat* operator heeft het resultaat altijd een numeriek datatype met als eenheid dagen per tijdseenheid. Deze tijdseenheid moet overeenkomen met de in de operator gekozen tijdseenheid (de tijdseenheid na “aantal dagen in…”)

**Rekentabel**

Leegwaarden zijn niet van toepassing bij de *aantal dagen dat* operator. Als er geen dagen zijn waarop de voorwaarde geldt, dan is het resultaat 0 dagen per tijdseenheid.

**Precisie**

Het resultaat van de *aantal dagen dat* operator zal altijd een niet-negatief geheel getal per tijdseenheid zijn.

### 4.22 Omrekening met gebroken jaren of maanden: tijdsevenredig deel

Vooraf: voor meer (basis) informatie over deze operator wordt verwezen naar de gelijknamige paragraaf in het RegelSpraak specificatiedocument.

**Datatypen en eenheden**

*pagina 22*

Bij het berekenen van een tijdsevenredig deel met de *tijdsevenredig deel van* operator moet de expressie numeriek zijn met een eenheid per tijdseenheid.

| | **tijdsevenredig deel** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Operator | Tijdsevenredig deel van | - |
| | Expressies | Numeriek | 1/tijdseenheid |
| | Resultaatexpressie | Numeriek | 1/tijdseenheid |
| **2** | Operator | Tijdsevenredig deel van | - |
| | Expressies | Numeriek | Eenheden die om te rekenen zijn naar Eenheid1 (resultaat eenheid)/tijdseenheid die om te rekenen is naar tijdseenheid1 (resultaat eenheid) |
| | Resultaatexpressie | Numeriek | Eenheid1/tijdseenheid1 |

*Tabel 31*

**Rekentabel**

Wanneer de expressie een leegwaarde bevat dan zal het resultaat ook leeg zijn.

**Precisie**

Bij de *tijdsevenredig deel van* operator is het resultaat in basis altijd een geheel getal of een breuk. Hierbij wordt dus geen decimale precisie gebruikt. Slechts in de gevallen wanneer een breuk ook te schrijven is als een decimaal getal zonder verlies van precisie wordt de decimale notatie gebruikt, en dit zal dan altijd het exacte getal zijn.

*pagina 23*

## 5. Condities en predicaten

Vooraf: voor meer (basis) informatie over dit onderwerp wordt verwezen naar het gelijknamige hoofdstuk in het RegelSpraak specificatiedocument.
Daarbij zijn predicaten die uitsluitend gebruikt worden in combinatie met consistentieregels niet in dit hoofdstuk niet uitgewerkt. Dit zijn de predicaten: *is uniek*, *is gevuurd* en *is inconsistent*.

### 5.1 Kleiner dan

**Datatypen en eenheden**

De *kleiner dan* vergelijking kan alleen worden toegepast op numerieke en percentage expressies. Als er bij numerieke expressies gebruik wordt gemaakt van eenheden, dan moeten deze eenheden gelijk zijn aan elkaar of in elkaar om te rekenen zijn.

| | **kleiner dan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | kleiner dan (<) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | kleiner dan (<) | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **3** | Linkerexpressie | Percentage | % |
| | Operator | kleiner dan (<) | - |
| | Rechterexpressie | Percentage | % |
| | Resultaatexpressie | Boolean | - |

*Tabel 32*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken, zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren.

| **kleiner dan** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Linkerexpressie: Leeg** | onwaar | onwaar |
| **Linkerexpressie: X** | onwaar | X<Y? |

*Tabel 33*

*pagina 24*

### 5.2 Kleiner of gelijk aan

**Datatypen en eenheden**

De *kleiner of gelijk aan* vergelijking kan alleen worden toegepast op numerieke en percentage expressies. Als er bij numerieke expressies gebruik wordt gemaakt van eenheden, dan moeten deze eenheden gelijk zijn aan elkaar of in elkaar om te rekenen zijn.

| | **kleiner of gelijk aan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | kleiner of gelijk aan (<=) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | kleiner of gelijk aan (<=) | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **3** | Linkerexpressie | Percentage | % |
| | Operator | kleiner of gelijk aan (<=) | - |
| | Rechterexpressie | Percentage | % |
| | Resultaatexpressie | Boolean | - |

*Tabel 34*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken, zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren.

| **kleiner of gelijk aan** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Linkerexpressie: Leeg** | onwaar | onwaar |
| **Linkerexpressie: X** | onwaar | X<=Y? |

*Tabel 35*

*pagina 25*

### 5.3 Gelijk aan

**Datatypen en eenheden**

De *gelijk aan* vergelijking kan op expressies met ieder soort datatype toegepast worden. Belangrijk is wel dat de linker- en rechterexpressie hetzelfde datatype hebben. Als bij numeriek expressies eenheden gebruikt worden, is het tevens belangrijk dat deze eenheden aan elkaar gelijk zijn of in elkaar om te rekenen zijn.

| | **gelijk aan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | gelijk aan (==) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | gelijk aan (==) | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **3** | Linkerexpressie | Tekst | - |
| | Operator | gelijk aan (==) | - |
| | Rechterexpressie | Tekst | - |
| | Resultaatexpressie | Boolean | - |
| **4** | Linkerexpressie | Datum-tijd | - |
| | Operator | gelijk aan (==) | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Boolean | - |
| **5** | Linkerexpressie | Boolean | - |
| | Operator | gelijk aan (==) | - |
| | Rechterexpressie | Boolean | - |
| | Resultaatexpressie | Boolean | - |
| **6** | Linkerexpressie | Percentage | % |
| | Operator | gelijk aan (==) | - |
| | Rechterexpressie | Percentage | % |
| | Resultaatexpressie | Boolean | - |
| **7** | Linkerexpressie | Enumeratie | - |
| | Operator | gelijk aan (==) | - |
| | Rechterexpressie | Enumeratie | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 36*

*pagina 26*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken, is het resultaat afhankelijk van het datatype van de expressies die vergeleken worden. In die situatie geldt voor expressies met datatype numeriek en percentage dat het resultaat ‘waar’ (eerste tabel) is en in alle andere situaties geeft dit een fout (tweede tabel).

| **gelijk aan (Numeriek & Percentage)** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | waar | onwaar |
| **X** | onwaar | X==Y? |

*Tabel 37*

| **gelijk aan (Anders)** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | fout | onwaar |
| **X** | onwaar | X==Y? |

*Tabel 38*

### 5.4 Groter of gelijk aan

**Datatypen en eenheden**

De *groter of gelijk aan* vergelijking kan alleen worden toegepast op numerieke en percentage expressies. Als er bij numerieke expressies gebruik wordt gemaakt van eenheden, dan moeten deze eenheden gelijk zijn aan elkaar of in elkaar om te rekenen zijn.

| | **groter of gelijk aan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | groter of gelijk aan (>=) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | groter of gelijk aan (>=) | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **3** | Linkerexpressie | Percentage | % |
| | Operator | groter of gelijk aan (>=) | - |
| | Rechterexpressie | Percentage | % |
| | Resultaatexpressie | Boolean | - |

*Tabel 39*

*pagina 27*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren.

| **groter of gelijk aan** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | onwaar | onwaar |
| **X** | onwaar | X>=Y? |

*Tabel 40*

### 5.5 Groter dan

**Datatypen en eenheden**

De *groter dan* vergelijking kan alleen worden toegepast op numerieke en percentage expressies. Als er bij numerieke expressies gebruik gemaakt wordt van eenheden moeten deze eenheden aan elkaar gelijk zijn of in elkaar om te rekenen zijn.

| | **groter dan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | groter dan (>) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | groter dan (>) | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **3** | Linkerexpressie | Percentage | % |
| | Operator | groter dan (>) | - |
| | Rechterexpressie | Percentage | % |
| | Resultaatexpressie | Boolean | - |

*Tabel 41*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren.

| **groter dan** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | onwaar | onwaar |
| **X** | onwaar | X>Y? |

*Tabel 42*

*pagina 28*

### 5.6 Ongelijk aan

**Datatypen en eenheden**

De *ongelijk aan* vergelijking kan op expressies met ieder soort datatype toegepast worden. Belangrijk is wel dat de linker- en rechterexpressie hetzelfde datatype hebben. Als bij numerieke expressies eenheden gebruikt worden, is het tevens belangrijk dat deze eenheden gelijk zijn aan elkaar of in elkaar om te rekenen zijn.

| | **ongelijk aan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | ongelijk aan (!=) | - |
| | Rechterexpressie | Numeriek | Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **2** | Linkerexpressie | Numeriek | Eenheid1 |
| | Operator | ongelijk aan (!=) | - |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| | Resultaatexpressie | Boolean | - |
| **3** | Linkerexpressie | Tekst | - |
| | Operator | ongelijk aan (!=) | - |
| | Rechterexpressie | Tekst | - |
| | Resultaatexpressie | Boolean | - |
| **4** | Linkerexpressie | Datum-tijd | - |
| | Operator | ongelijk aan (!=) | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Boolean | - |
| **5** | Linkerexpressie | Boolean | - |
| | Operator | ongelijk aan (!=) | - |
| | Rechterexpressie | Boolean | - |
| | Resultaatexpressie | Boolean | - |
| **6** | Linkerexpressie | Percentage | % |
| | Operator | ongelijk aan (!=) | - |
| | Rechterexpressie | Percentage | % |
| | Resultaatexpressie | Boolean | - |
| **7** | Linkerexpressie | Enumeratie | - |
| | Operator | ongelijk aan (!=) | - |
| | Rechterexpressie | Enumeratie | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 43*

*pagina 29*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken zal dit altijd resulteren in ‘onwaar’ wanneer beide expressie een leeg waarde bevatten en ‘waar’ zijn wanneer exact één van de twee een leeg waarde bevat.

| **ongelijk aan** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | onwaar | waar |
| **X** | waar | X!=Y? |

*Tabel 44*

### 5.7 Eerder dan

**Datatypen en eenheden**

De *eerder dan* vergelijking kan alleen worden toegepast op Datum(-tijd)expressies.

| | **eerder dan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Datum-tijd | - |
| | Operator | eerder dan | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 45*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren. Als beide waarden leeg zijn, dan levert dit een fout op.

| **eerder dan** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | fout | onwaar |
| **X** | onwaar | X eerder dan Y? |

*Tabel 46*

### 5.8 Eerder of gelijk aan

**Datatypen en eenheden**

De *eerder of gelijk aan* vergelijking kan alleen worden toegepast op Datum(-tijd)expressies.

| | **eerder of gelijk aan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Datum-tijd | - |
| | Operator | eerder of gelijk aan | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 47*

*pagina 30*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken, zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren. Als beide waarden leeg zijn levert dit een fout op.

| **eerder of gelijk aan** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | fout | onwaar |
| **X** | onwaar | X eerder of gelijk aan Y? |

*Tabel 48*

### 5.9 Later of gelijk aan

**Datatypen en eenheden**

De *later of gelijk aan* vergelijking kan alleen worden toegepast op Datum(-tijd)expressies.

| | **later of gelijk aan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Datum-tijd | - |
| | Operator | later of gelijk aan | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 49*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken, dan zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren. Als beide waarden leeg zijn, dan levert dit een fout op.

| **Later of gelijk aan** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | fout | onwaar |
| **X** | onwaar | X later of gelijk aan Y? |

*Tabel 50*

### 5.10 Later dan

**Datatypen en eenheden**

De *later dan* vergelijking kan alleen worden toegepast op Datum(-tijd)expressies.

| | **later dan** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Linkerexpressie | Datum-tijd | - |
| | Operator | later dan | - |
| | Rechterexpressie | Datum-tijd | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 51*

*pagina 31*

**Rekentabel**

Wanneer met leegwaarden wordt vergeleken, dan zal dit altijd resulteren in een vergelijking die niet kan worden uitgevoerd en dus een ‘onwaar’ opleveren. Als beide waarden leeg zijn, dan levert dit een fout op.

| **later dan** / **Linkerexpressie** | **Rechterexpressie: Leeg** | **Rechterexpressie: Y** |
|---|---|---|
| **Leeg** | fout | onwaar |
| **X** | onwaar | X later dan Y? |

*Tabel 52*

### 5.11 Is gevuld

**Datatypen en eenheden**

Het *is gevuld* predicaat kan alleen op één enkele onderwerpexpressie toegepast worden. Het resultaat zal altijd een Booleaanse waarde opleveren.

**Rekentabel**

Het *is gevuld* predicaat is speciaal om te controleren of een onderwerpexpressie géén leegwaarde bevat.

| **is gevuld** / **Linkerexpressie** | **Resultaat** |
|---|---|
| **Leeg** | onwaar |
| **X** | waar |

*Tabel 53*

### 5.12 Is leeg

**Datatypen en eenheden**

Het *is leeg* predicaat kan alleen op één enkele onderwerpexpressie toegepast worden. Het resultaat zal altijd een Booleaanse waarde opleveren.

**Rekentabel**

Het *is leeg* predicaat is speciaal om te controleren of een onderwerpexpressie een leegwaarde bevat.

| **is leeg** / **Linkerexpressie** | **Resultaat** |
|---|---|
| **Leeg** | waar |
| **X** | onwaar |

*Tabel 54*

*pagina 32*

### 5.13 Voldoet aan de elfproef

De elfproef is een toets om te controleren of een identificatienummer geldig is. Hierbij wordt ieder cijfer “gewogen” en bij elkaar opgeteld. Gewogen betekent dat een cijfer vermenigvuldigd wordt met een afgesproken waarde, afhankelijk van zijn positie in de cijferreeks. Het toekennen van een weging begint bij het laatste cijfer in de reeks: het laatste cijfer in de reeks (het controlecijfer) krijgt een gewicht van –1, het een-na-laatste cijfer een gewicht van 2, het twee-na-laatste cijfer een gewicht van 3, etc. Als de gebruikte cijferreeks bijvoorbeeld een geldig BSN-nummer is, moet de som hiervan bij delen door 11 (vandaar de naam “elfproef”) een positief geheel getal opleveren en het getal mag niet uitsluitend uit nullen bestaan.

De genoemde weging van cijfers bij het toepassen van de elfproef impliceert dat slechts enkele datatypen mogelijk zijn: het datatype Numeriek (geheel getal) en Tekst zijn toegestaan, met als kanttekening dat bij het datatype Tekst alleen cijfers in de waarde mogen voorkomen (dit kan bijvoorbeeld het geval zijn bij het gebruik van eventuele voor- of achterloopnullen).

Om de werking van de elfproef te verduidelijken, is hierna een uitgewerkt voorbeeld gegeven aan de hand van fictief BSN-nummer 192837465. Eerst wordt zoals hierboven aangegeven voor ieder cijfer een gewicht toegekend, waarna het cijfer met zijn gewicht wordt vermenigvuldigd. De som van deze producten wordt berekend en vervolgens gedeeld door 11. De som is 205 en delen door 11 geeft 18 rest 7. Dit betekent dat het fictief BSN-nummer 192837465 *geen geldig* burgerservicenummer is.

| **BSN** | 1 | 9 | 2 | 8 | 3 | 7 | 4 | 6 | 5 |
|---|---|---|---|---|---|---|---|---|---|
| **Gewicht** | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | -1 |
| **Product** | 9 | 72 | 14 | 48 | 15 | 28 | 12 | 12 | -5 |
| **Som** | 9 | 81 | 95 | 143 | 158 | 186 | 198 | 210 | 205 |

**Datatypen en eenheden**

Het *voldoet aan de elfproef* predicaat kan worden toegepast op numerieke en tekstuele expressies.

**Datatypen en eenheden**

| | **voldoet aan de elfproef** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Expressie | Numeriek | - |
| | Operator | voldoet aan de elfproef | - |
| | Resultaatexpressie | Boolean | - |
| **2** | Expressie | Tekst | - |
| | Operator | voldoet aan de elfproef | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 55*

*pagina 33*

**Rekentabel**

Een leegwaarde voldoet nooit aan de elfproef.

| **voldoet aan de elfproef** / **Linkerexpressie** | **Resultaat** |
|---|---|
| **Leeg** | onwaar |
| **X** | X voldoet aan de elfproef? |

*Tabel 56*

### 5.14 Is kenmerk/ is rol

**Datatypen en eenheden**

De *is kenmerk* en *is rol* predicaten checken of een instantie van een objecttype of rol een bepaald kenmerk bevat of een bepaalde rol is. Er hangt dus geen datatype beperking aan de *is kenmerk* en *is rol* predicaten.

**Rekentabel**

Er hoeft geen rekening gehouden te worden met leegwaarden omdat in deze context objecten of rollen niet leeg kunnen zijn.

### 5.15 Is dagsoort

**Datatypen en eenheden**

Het *is dagsoort* predicaat checkt of een datumexpressie een bepaalde dagsoort is. Het te gebruiken datatype is het datum(-tijd)datatype.

**Datatypen en eenheden**

| | **is dagsoort** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Expressie | Datum-tijd | - |
| | Operator | is dagsoort | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 57*

**Rekentabel**

Een leegwaarde is nooit een bepaalde dagsoort.

| **is dagsoort** / **Linkerexpressie** | **Resultaat** |
|---|---|
| **Leeg** | onwaar |
| **X** | X is dagsoort? |

*Tabel 58*

*pagina 34*

### 5.16 Is numeriek

**Datatypen en eenheden**

Het *is numeriek* predicaat checkt of een tekstexpressie een numerieke waarde representeert. Het te gebruiken datatype is het Tekst datatype.

**Datatypen en eenheden**

| | **is numeriek** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Expressie | Tekst | - |
| | Operator | is numeriek | - |
| | Resultaatexpressie | Boolean | - |

*Tabel 59*

**Rekentabel**

Een leegwaarde is nooit een numerieke waarde.

| **is numeriek** / **Linkerexpressie** | **Resultaat** |
|---|---|
| **Leeg** | onwaar |
| **X** | X is numeriek? |

*Tabel 60*

*pagina 35*

## 6. Resultaatdeel

Vooraf: voor meer (basis) informatie over dit onderwerp wordt verwezen naar het gelijknamige hoofdstuk in het RegelSpraak specificatiedocument.

### 6.1 Gelijkstelling

**Datatypen en eenheden**

Een gelijkstelling kan gebruik maken van ieder soort datatype. Het datatype van het resultaat en de expressie waaraan het resultaat gelijkgesteld wordt (rechterexpressie) moeten wel overeenkomen. Bij numerieke expressies is het belangrijk dat wanneer eenheden gebruikt worden, deze aan elkaar gelijk zijn of in elkaar om te rekenen zijn.

| | **Gelijkstelling** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Resultaatexpressie | Numeriek | Eenheid1 |
| | Rechterexpressie | Numeriek | Eenheid1 |
| **2** | Resultaatexpressie | Numeriek | Eenheid1 |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| **3** | Resultaatexpressie | Tekst | - |
| | Rechterexpressie | Tekst | - |
| **4** | Resultaatexpressie | Datum-tijd | - |
| | Rechterexpressie | Datum-tijd | - |
| **5** | Resultaatexpressie | Boolean | - |
| | Rechterexpressie | Boolean | - |
| **6** | Resultaatexpressie | Percentage | % |
| | Rechterexpressie | Percentage | % |
| **7** | Resultaatexpressie | Enumeratie | - |
| | Rechterexpressie | Enumeratie | - |

*Tabel 61*

**Rekentabel**

Wanneer gelijkgesteld wordt aan een leegwaarde zal het resultaat ook een leegwaarde zijn.

| **Gelijkstelling** / **Links** | **Rechts** | **Output** |
|---|---|---|
| X | Y | X := Y |
| X | leeg | X := leeg |

*Tabel 62*

*pagina 36*

### 6.2 Initialisatie

**Datatypen en eenheden**

Net als bij een gelijkstelling kan een initialisatie gebruik maken van ieder soort datatype. Het datatype van het resultaat en de expressie waarmee het resultaat geïnitialiseerd wordt (rechterexpressie) moeten wel overeenkomen. Bij numerieke expressies is het belangrijk dat wanneer eenheden gebruikt worden, deze aan elkaar gelijk zijn of in elkaar om te rekenen zijn.

| | **Initialisatie** | **Datatype** | **Eenheid restrictie** |
|---|---|---|---|
| **1** | Resultaatexpressie | Numeriek | Eenheid1 |
| | Rechterexpressie | Numeriek | Eenheid1 |
| **2** | Resultaatexpressie | Numeriek | Eenheid1 |
| | Rechterexpressie | Numeriek | Eenheid2 die om te rekenen is in Eenheid1 |
| **3** | Resultaatexpressie | Tekst | - |
| | Rechterexpressie | Tekst | - |
| **4** | Resultaatexpressie | Datum-tijd | - |
| | Rechterexpressie | Datum-tijd | - |
| **5** | Resultaatexpressie | Boolean | - |
| | Rechterexpressie | Boolean | - |
| **6** | Resultaatexpressie | Percentage | % |
| | Rechterexpressie | Percentage | % |
| **7** | Resultaatexpressie | Enumeratie | - |
| | Rechterexpressie | Enumeratie | - |

*Tabel 63*

**Rekentabel**

Wanneer geïnitialiseerd wordt met een leegwaarde zal het resultaat ook een leegwaarde zijn.

| **Initialisatie** / **Links** | **Rechts** | **Output** |
|---|---|---|
| X | Y | X := Y |
| X | Leeg | X := leeg |

*Tabel 64*

*pagina 37*

### 6.3 Kenmerktoekenning

**Datatypen en eenheden**

Een kenmerktoekenning maakt alleen gebruik van objecttypen, rollen en kenmerken en heeft dus geen restricties op datatypen en eenheden.

**Rekentabel**

Een kenmerk kan geen leegwaarde bevatten. Wanneer een kenmerk wordt toegekend aan een object, krijgt dit object automatisch dat kenmerk.

### 6.4 Feitcreatie

**Datatypen en eenheden**

Een feitcreatie maakt alleen gebruik van objecttypen en rollen, deze actie heeft dus geen restricties op datatypen en eenheden.

**Rekentabel**

Een rol kan nooit een leegwaarde zijn, de rol bestaat voor een objecttype of hij bestaat niet. Wanneer alle rollen in de feitcreatie bestaan kan ook het additionele feit (twee rollen) gecreëerd worden.

### 6.5 ObjectCreatie

**Datatypen en eenheden**

Een constructie heeft geen directe beperking op datatypen en eenheden. Bij een constructie kunnen wel attributen van het objecttype van het geconstrueerde object geïnitialiseerd worden. Dit gaat volgens dezelfde beperkingen als bij initialisatie.

**Rekentabel**

De initialisatie van attributen in een constructie-actie volgen ook dezelfde regels voor het omgaan met leegwaarden als de initialisatie-actie.

### 6.6 Consistentieregel

Consistentieregels volgen dezelfde regels als de regels van predicaten die in het hoofdstuk over predicaten zijn uitgewerkt.

### 6.7 Dagsoortdefinitie

**Datatypen en eenheden**

Een dagsoortdefinitie maakt geen gebruik van elementen die een datatype of eenheid hebben.

**Rekentabel**

Leegwaarden zijn niet van toepassing op een dagsoortdefinitie, de dag bestaat in principe altijd.

### 6.8 Startpuntbepaling

**Datatypen en eenheden**

De expressie waarmee het resultaat wordt afgeleid moet het datatype datum in dagen hebben.

**Rekentabel**

Een leegwaarde van de expressie waarmee het resultaat wordt afgeleid leidt tot een fout.

*pagina 38*
