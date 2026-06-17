lexer grammar RegelSpraakLexer;

// NO @lexer::members

// --- Keywords (Order matters: Longest matches first, then categories, then IDENTIFIER) ---

// --- Longest Multi-Word Keywords First ---
// Removed HET_AANTAL_DAGEN_IN to allow these words in attribute names
// HET_AANTAL_DAGEN_IN: 'het aantal dagen in';
// Commented out to avoid conflicts with attribute names like "het kwartaal bedrag"
// HET_KWARTAAL: 'het kwartaal';
// HET_DEEL_PER_MAAND: 'het deel per maand';
// HET_DEEL_PER_JAAR: 'het deel per jaar';
VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL: '(voor het attribuut zonder voorzetsel):';
NA_HET_ATTRIBUUT_MET_VOORZETSEL: '(na het attribuut met voorzetsel';
DATUM_TIJD_MILLIS: 'Datum en tijd in millisecondes';
GEDURENDE_DE_TIJD_DAT: 'gedurende de tijd dat';
GEDURENDE_HET_GEHELE: 'gedurende het gehele';
GEDURENDE_DE_GEHELE: 'gedurende de gehele';
HET_IS_DE_PERIODE: [Hh]'et is de periode';
WORDT_BEREKEND_ALS: 'moet berekend worden als';
WORDT_GESTELD_OP: 'moet gesteld worden op';
WORDT_GEINITIALISEERD_OP: 'moet geïnitialiseerd worden op';
DE_ABSOLUTE_TIJDSDUUR_VAN: 'de absolute tijdsduur van';
DE_ABSOLUTE_WAARDE_VAN: 'de absolute waarde van';
DE_MAXIMALE_WAARDE_VAN: 'de maximale waarde van';
DE_MINIMALE_WAARDE_VAN: 'de minimale waarde van';
HET_TOTAAL_VAN: 'het totaal van';
HET_TIJDSEVENREDIG_DEEL_PER: 'het tijdsevenredig deel per';
// HET_AANTAL: 'het aantal';  // Removed to allow "het aantal" in attribute names
DE_DATUM_MET: 'de datum met jaar, maand en dag';
DE_EERSTE_PAASDAG_VAN: 'de eerste paasdag van';
ALS_ONVERDEELDE_REST_BLIJFT: 'Als onverdeelde rest blijft';
MET_EEN_MINIMUM_VAN: 'met een minimum van';
MET_EEN_MAXIMUM_VAN: 'met een maximum van';
GROTER_OF_GELIJK_AAN: 'groter of gelijk aan';
KLEINER_OF_GELIJK_AAN: 'kleiner of gelijk aan';
LATER_OF_GELIJK_AAN: 'later of gelijk aan';
EERDER_OF_GELIJK_AAN: 'eerder of gelijk aan';
WAARBIJ_WORDT_VERDEELD: 'waarbij wordt verdeeld';
BESTAANDE_UIT: ', bestaande uit de';
WEDERKERIG_FEITTYPE: 'Wederkerig feittype';
IS_VAN_HET_TYPE: 'is van het type';
CONCATENATIE_VAN: 'de concatenatie van';
VOLGEND_CRITERIUM: 'het volgende criterium:';
VOLGENDE_CRITERIA: 'volgende criteria:';
BIJ_EVEN_GROOT_CRITERIUM: 'bij een even groot criterium';
OP_VOLGORDE_VAN: 'op volgorde van';
NAAR_RATO_VAN: 'naar rato van';
NUMERIEK_MET_EXACT: 'numeriek met exact';
AAN_DE_ELFPROEF: 'aan de elfproef';
// §5.8.2: the sommatie opt-out "of 0 als die er niet zijn" — one fixed phrase, lexed as a single
// token so it cannot be mistaken for the boolean "of" followed by a literal (maximal munch wins).
OF_NUL_ALS_DIE_ER_NIET_ZIJN: 'of 0 als die er niet zijn';
GROTER_IS_DAN: 'groter is dan';
KLEINER_IS_DAN: 'kleiner is dan';
WORDT_VOLDAAN: 'wordt voldaan';

// Object creation tokens (old syntax removed - spec uses "Een X heeft een Y" form)
// ER_WORDT_EEN_NIEUW, WORDT_EEN_NIEUW, AANGEMAAKT, CREEER removed per spec §9.3
NIEUWE: 'nieuwe';  // Still used in naamPhrase for rule names
ER_AAN: [Ee]'r aan';

// --- Comparison Phrase Tokens ---
// Spec Tabel 16 (§8.1) lists four variants per comparison (vragende/stellende × enkelvoud/meervoud);
// the formal EBNF — "toplevel tweezijdige getal-/datumvergelijkingsoperator", §13.4.14.22-30 of
// "RegelSpraak-specificatie - syntaxdiagrammen v2.1.0.md" — is the oracle and enumerates the full
// set. We tokenize all four: stellende-enkelvoud (IS_*), stellende-meervoud (ZIJN_*), vragende-
// enkelvoud (*_IS_*) and vragende-meervoud (the *_ZIJN_* suffix forms "gelijk zijn aan",
// "groter zijn dan", "later zijn dan", … added below; ONGELIJK_ZIJN_AAN sits in the keyword block
// further down, where the TOKA "moet ongelijk zijn aan" first introduced it). The visitor folds all
// four onto one symbol (mapComparisonOperatorText), so `comparisonOperator` in RegelSpraak.g4 just
// lists them and the resolver/engine/transpiler are untouched — mood/number is surface syntax only.
GELIJK_IS_AAN: 'gelijk is aan';
// Vragende (verb-in-middle) operators completing §13.4.11 forms 23 (getal) and 29 (datum), the
// siblings of GROTER_IS_DAN / GELIJK_IS_AAN: the verb "is" sits inside the operator phrase. Without
// these the vragende inequality and datum-ordening forms ("ongelijk is aan", "later is dan") did not
// tokenize at all (only the stellende "is ongelijk aan" / "is later dan" existed).
ONGELIJK_IS_AAN: 'ongelijk is aan';
LATER_OF_GELIJK_IS_AAN: 'later of gelijk is aan';
EERDER_OF_GELIJK_IS_AAN: 'eerder of gelijk is aan';
LATER_IS_DAN: 'later is dan';
EERDER_IS_DAN: 'eerder is dan';
IS_GELIJK_AAN: 'is gelijk aan';
IS_ONGELIJK_AAN: 'is ongelijk aan';
IS_KLEINER_DAN: 'is kleiner dan';
IS_KLEINER_OF_GELIJK_AAN: 'is kleiner of gelijk aan';
IS_GROTER_DAN: 'is groter dan';
IS_GROTER_OF_GELIJK_AAN: 'is groter of gelijk aan';
ZIJN_GELIJK_AAN: 'zijn gelijk aan';
ZIJN_ONGELIJK_AAN: 'zijn ongelijk aan';
ZIJN_GROTER_DAN: 'zijn groter dan';
ZIJN_GROTER_OF_GELIJK_AAN: 'zijn groter of gelijk aan';
ZIJN_KLEINER_DAN: 'zijn kleiner dan';
ZIJN_KLEINER_OF_GELIJK_AAN: 'zijn kleiner of gelijk aan';
IS_LATER_DAN: 'is later dan';
IS_LATER_OF_GELIJK_AAN: 'is later of gelijk aan';
IS_EERDER_DAN: 'is eerder dan';
IS_EERDER_OF_GELIJK_AAN: 'is eerder of gelijk aan';
ZIJN_LATER_DAN: 'zijn later dan';
ZIJN_LATER_OF_GELIJK_AAN: 'zijn later of gelijk aan';
ZIJN_EERDER_DAN: 'zijn eerder dan';
ZIJN_EERDER_OF_GELIJK_AAN: 'zijn eerder of gelijk aan';
// Vragende-meervoud (§13.4.14.24/.30): the verb "zijn" sits inside the phrase ("gelijk zijn aan"),
// the meervoud sibling of the vragende-enkelvoud "gelijk is aan" (GELIJK_IS_AAN). ONGELIJK_ZIJN_AAN
// completes the set but lives in the keyword block below for historical reasons.
GELIJK_ZIJN_AAN: 'gelijk zijn aan';
GROTER_ZIJN_DAN: 'groter zijn dan';
GROTER_OF_GELIJK_ZIJN_AAN: 'groter of gelijk zijn aan';
KLEINER_ZIJN_DAN: 'kleiner zijn dan';
KLEINER_OF_GELIJK_ZIJN_AAN: 'kleiner of gelijk zijn aan';
LATER_ZIJN_DAN: 'later zijn dan';
LATER_OF_GELIJK_ZIJN_AAN: 'later of gelijk zijn aan';
EERDER_ZIJN_DAN: 'eerder zijn dan';
EERDER_OF_GELIJK_ZIJN_AAN: 'eerder of gelijk zijn aan';

// --- Condition Phrase Tokens ---
// The vragende forms of the unary predicates. Tabel 16 (§8.1) is the authoritative, complete
// enumeration of the predicate surface; the syntaxdiagrammen EBNF is a secondary cross-check whose
// surface coverage is less complete (a PDF→Markdown rendering), so where the two disagree we follow
// the table. We tokenize the full Tabel 16 surface:
//   - elfproef: "aan de elfproef voldoet/voldoen" and the negated "niet aan de elfproef
//     voldoet/voldoen" (verb-last vragende; the stellende VOLDOET_*/VOLDOEN_* are above);
//   - getalcontrole: BOTH the table's verb-last "numeriek met exact <n> cijfers is" and the
//     syntaxdiagrammen's verb-mid "numeriek is/zijn met exact <n> cijfers" — the two specs put the
//     verb in different places, and the loose parser accepts either;
//   - regel-status: the verb-last "gevuurd is" / "inconsistent is" (Tabel 16 lists it; the
//     syntaxdiagrammen <consistentievoorwaarde> shows only "is gevuurd"/"is inconsistent", but the
//     table is the surface oracle).
// Each folds onto the same canonical operator its verb-first sibling (IS_*/ZIJN_*) produces, so the
// resolver, engine and transpiler are untouched — mood/number/verb-position is surface syntax only.
IS_LEEG: 'is leeg';
IS_GEVULD: 'is gevuld';
ZIJN_LEEG: 'zijn leeg';
ZIJN_GEVULD: 'zijn gevuld';
IS_KENMERK: 'is kenmerk';
IS_ROL: 'is rol';
ZIJN_KENMERK: 'zijn kenmerk';
ZIJN_ROL: 'zijn rol';
IS_NIET_KENMERK: 'is niet kenmerk';
IS_NIET_ROL: 'is niet rol';
ZIJN_NIET_KENMERK: 'zijn niet kenmerk';
ZIJN_NIET_ROL: 'zijn niet rol';
VOLDOET_AAN_DE_ELFPROEF: 'voldoet aan de elfproef';
VOLDOEN_AAN_DE_ELFPROEF: 'voldoen aan de elfproef';
VOLDOET_NIET_AAN_DE_ELFPROEF: 'voldoet niet aan de elfproef';
VOLDOEN_NIET_AAN_DE_ELFPROEF: 'voldoen niet aan de elfproef';
// Vragende (verb-last) elfproef: "aan de elfproef voldoet" (enkelvoud) / "voldoen" (meervoud) and
// the negated "niet aan de elfproef voldoet/voldoen" (Tabel 16). The visitor maps each to the
// verb-first canonical operator (VOLDOET/VOLDOEN ± niet).
AAN_DE_ELFPROEF_VOLDOET: 'aan de elfproef voldoet';
AAN_DE_ELFPROEF_VOLDOEN: 'aan de elfproef voldoen';
NIET_AAN_DE_ELFPROEF_VOLDOET: 'niet aan de elfproef voldoet';
NIET_AAN_DE_ELFPROEF_VOLDOEN: 'niet aan de elfproef voldoen';
IS_NUMERIEK_MET_EXACT: 'is numeriek met exact';
IS_NIET_NUMERIEK_MET_EXACT: 'is niet numeriek met exact';
ZIJN_NUMERIEK_MET_EXACT: 'zijn numeriek met exact';
ZIJN_NIET_NUMERIEK_MET_EXACT: 'zijn niet numeriek met exact';
// Vragende getalcontrole. Two surfaces, kept in parallel (see the block comment above): the table's
// verb-last "numeriek met exact <n> cijfers is" (the pre-existing NUMERIEK_MET_EXACT token + NUMBER
// CIJFERS + is/zijn) and the syntaxdiagrammen's verb-mid "numeriek is/zijn met exact <n> cijfers".
NIET_NUMERIEK_MET_EXACT: 'niet numeriek met exact';
NUMERIEK_IS_MET_EXACT: 'numeriek is met exact';
NUMERIEK_ZIJN_MET_EXACT: 'numeriek zijn met exact';
MOETEN_UNIEK_ZIJN: 'moeten uniek zijn';
IS_GEVUURD: 'is gevuurd';
IS_INCONSISTENT: 'is inconsistent';
// Vragende (verb-last) regel-status, Tabel 16: "<regelversie> gevuurd is" / "inconsistent is".
// Maximal-munch tokens (mirroring IS_GEVUURD/IS_INCONSISTENT) so regelversieNaam stops cleanly
// before them; folded into the existing regelStatusCondition labels.
GEVUURD_IS: 'gevuurd is';
INCONSISTENT_IS: 'inconsistent is';

// --- Other Keywords (Grouped by category) ---

// Top-Level & Definition Keywords
CONSISTENTIEREGEL: 'Consistentieregel';
REGEL: 'Regel';
REGELGROEP: 'Regelgroep';
BESLISTABEL: 'Beslistabel';
OBJECTTYPE: 'Objecttype';
DOMEIN: 'Domein';
LIJST: 'Lijst';
DIMENSIE: 'Dimensie';
EENHEIDSYSTEEM: 'Eenheidsysteem';
PARAMETER: 'Parameter';
FEITTYPE: 'Feittype';
DAGSOORT: 'Dagsoort';

// Rule Structure & Result Keywords
DAARBIJ_GELDT: 'Daarbij geldt:';
GELDIG: 'geldig';
HEBBEN: 'hebben';
HEEFT: 'heeft';
INDIEN: 'indien';
IS_RECURSIEF: 'is recursief';
IS: 'is';
MOET: 'moet';
MOETEN: 'moeten';
WORDT_VERDEELD_OVER: 'wordt verdeeld over';
WORDT: 'wordt';  // Used in "wordt voldaan" pattern
VOLDAAN: 'voldaan';  // Used in "wordt voldaan" pattern
ZIJN: 'zijn';
HAAR: 'haar';
HUN: 'hun';

// Conditions & Operator Keywords
AAN: 'aan';
AFGEROND_OP: 'afgerond op';
ALLE: 'alle';
EERDER_DAN: 'eerder dan';
GEDEELD_DOOR: 'gedeeld door';
GEDEELD_DOOR_ABS: 'gedeeld door (ABS)';
GELIJK_AAN: 'gelijk aan';
GEVULD: 'gevuld';
GEVUURD: 'gevuurd';
GROTER_DAN: 'groter dan';
INCONSISTENT: 'inconsistent';
KLEINER_DAN: 'kleiner dan';
LATER_DAN: 'later dan';
LEEG: 'leeg';
MAAL: 'maal';
MIN: 'min';
NAAR_BENEDEN: 'naar beneden';
NAAR_BOVEN: 'naar boven';
NIET: 'niet';
ONGELIJK_ZIJN_AAN: 'ongelijk zijn aan';
ONGELIJK_AAN: 'ongelijk aan';
PLUS: 'plus';
REKENKUNDIG: 'rekenkundig';
RICHTING_NUL: 'richting nul';
TOT: 'tot';
TOT_DE_MACHT: 'tot de macht';
TOT_EN_MET: 'tot en met';
UNIEK: 'uniek';
VANAF: 'vanaf';
VERENIGD_MET: 'verenigd met';
VERMINDERD_MET: 'verminderd met';
VOLDOEN: 'voldoen';
VOLDOET: 'voldoet';
WEG_VAN_NUL: 'weg van nul';
DE_WORTEL_VAN: 'de wortel van';
TENMINSTE: 'tenminste';
TEN_MINSTE: 'ten minste';
TEN_HOOGSTE: 'ten hoogste';
PRECIES: 'precies';
VOORWAARDE: 'voorwaarde';
VOORWAARDEN: 'voorwaarden';

// GegevensSpraak Detail Keywords
BEZITTELIJK: '(bezittelijk)';
BIJVOEGLIJK: '(bijvoeglijk)';
BEZIELD: '(bezield)';
BOOLEAN: 'Boolean';
CIJFERS: 'cijfers';
DATUM_IN_DAGEN: 'Datum in dagen';
DECIMALEN: 'decimalen';
ENUMERATIE: 'Enumeratie';
GEDIMENSIONEERD_MET: 'gedimensioneerd met';
GEHEEL_GETAL: 'geheel getal';
GETAL: 'getal';
KENMERK: 'kenmerk';
KENMERKEN: 'kenmerken';
MET: 'met';
MET_EENHEID: 'met eenheid';
MV_START : '(mv:';
NEGATIEF: 'negatief';
NIET_NEGATIEF: 'niet-negatief';
NUMERIEK: 'Numeriek';
PERCENTAGE: 'Percentage';
POSITIEF: 'positief';
ROL: 'rol';
ROLLEN: 'rollen';
TEKST: 'Tekst';
VOOR_ELK_JAAR: 'voor elk jaar';
VOOR_ELKE_DAG: 'voor elke dag';
VOOR_ELKE_MAAND: 'voor elke maand';

// Functions & Aggregation Keywords
AANTAL: 'aantal';
EERSTE_VAN: 'de eerste van';
IN_HELE: 'in hele';
LAATSTE_VAN: 'de laatste van';
REEKS_VAN_TEKSTEN_EN_WAARDEN: 'reeks van teksten en waarden';
SOM_VAN: 'de som van';
TIJDSDUUR_VAN: 'de tijdsduur van';

// Verdeling Detail Keywords
AFNEMENDE: 'afnemende';
IN_GELIJKE_DELEN: 'in gelijke delen';
OVER_VERDELING: 'over.';
TOENEMENDE: 'toenemende';

// Quantifier Keywords
DRIE_TELWOORD: 'drie';
EEN_TELWOORD: 'één';
GEEN_VAN_DE: 'geen van de';
GEEN: 'geen';
TWEE_TELWOORD: 'twee';
VIER_TELWOORD: 'vier';

// Common words, Dates, Misc Keywords
ALTIJD: 'altijd';
BIJ: 'bij';
DAG: 'dag';
DAGEN: 'dagen';
DAT: 'dat';
DE: [Dd]'e';
DD_PUNT: 'dd.';
DIE: 'die';
EEN: [Ee]'en';
EN: 'en';
HET: [Hh]'et';
MEERDERE: 'meerdere';
HIJ: 'hij';
IN: 'in';
JAAR: 'jaar';
JAREN: 'jaren';
KWARTAAL: 'kwartaal';
MAAND: 'maand';
MAANDEN: 'maanden';
MILLISECONDE: 'milliseconde';
MINUUT: 'minuut';
MINUTEN: 'minuten';
OF: 'of';
ONWAAR: 'onwaar';
OP: 'op';
OUDER: 'ouder';
OVER: 'over';
PERIODE: 'periode';
REKENDATUM: 'Rekendatum';
REKENJAAR: 'Rekenjaar';
REGELVERSIE: 'regelversie';
SECONDE: 'seconde';
SECONDEN: 'seconden';
TM: 't/m';
UIT: 'uit';
UUR: 'uur';
UREN: 'uren';
VAN: 'van';
VOLGENDE_VOORWAARDE: 'volgende voorwaarde';
VOLGENDE_VOORWAARDEN: 'volgende voorwaarden';
VOLGENDE: 'volgende';  // Must be after compound tokens
VOOR: 'voor';
WAAR: 'waar';
WEEK: 'week';
WEKEN: 'weken';
ER: 'er';

// Units and Common Measurements
METER: 'meter';
KILOGRAM: 'kilogram';
VOET: 'voet';
POND: 'pond';
MIJL: 'mijl';

// Decision-table comparison variants that are not prefixes of shorter tokens.
GROTER_OF_GELIJK_IS_AAN: 'groter of gelijk is aan';
KLEINER_OF_GELIJK_IS_AAN: 'kleiner of gelijk is aan';

// Add Abbreviations (Place before IDENTIFIER)
M: 'm';
KG: 'kg';
S: 's';
FT: 'ft';
LB: 'lb';
MI: 'mi';

// Monetary and Other Units
EURO_SYMBOL: '€';
DOLLAR_SYMBOL: '$';
DEGREE_SYMBOL: '°';


// --- Standard Tokens (No predicates) ---
IDENTIFIER : LETTER (LETTER | DIGIT | '_' | '\'' | '-')* ;
NUMBER: (MINUS? DIGIT+ (',' DIGIT+)? | MINUS? DIGIT+ '_' DIGIT+ '/' DIGIT+ | MINUS? DIGIT+ '/' DIGIT+);
EQUALS: '=';

// --- Other Literals, Punctuation, WS, Comments, Fragments ---
fragment DAY_PART  : ('0'?[1-9] | [12] DIGIT | '3'[01]) ;
fragment MONTH_PART: ('0'?[1-9] | '1'[0-2]) ;
fragment YEAR_PART : DIGIT DIGIT DIGIT DIGIT ;
fragment HOUR_PART   : ('0'|'1') DIGIT | '2' [0-3];
fragment MINUTE_PART : [0-5] DIGIT ;
fragment SECOND_PART : [0-5] DIGIT ;
fragment MILLI_PART  : DIGIT DIGIT DIGIT ;
fragment TIME_PART : HOUR_PART ':' MINUTE_PART ':' SECOND_PART '.' MILLI_PART ;
DATE_TIME_LITERAL: (DD_PUNT WS)? DAY_PART '-' MONTH_PART '-' YEAR_PART ( WS TIME_PART )? ;
PERCENTAGE_LITERAL: NUMBER PERCENT_SIGN;
// String literal - now accepts angle quotes for interpolation
STRING_LITERAL: '"' ( '\\' . | ~["\\] )*? '"' ;
ENUM_LITERAL: '\'' ( '\\' . | ~['\\] )*? '\'' ;
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COMMA: ',';
DOT: '.';
COLON: ':';
SEMICOLON: ';';
SLASH: '/';
PERCENT_SIGN: '%';
BULLET: '•';
ASTERISK: '*';
L_ANGLE_QUOTE: '«';
R_ANGLE_QUOTE: '»';
CARET: '^';
DOUBLE_DOT: '..';
// Line-leading whitespace is layout. The spec's layout EBNF *mandates* tab
// indentation (e.g. <enumeratiespecificatie> ::= "Enumeratie" \n (\t
// <enumeratiewaarde> \n)+, and the same \t in <attribuut> and the feittype
// role lines), so tabs after a newline must lex exactly like spaces there —
// hidden. Matching the newline run plus any following spaces/tabs as ONE
// hidden token is what keeps a line-leading tab out of the parser while a
// TAB *inside* a line stays visible: that interior tab is the structural
// separator of a feittype role line (rolnaam \t objecttype, spec §3.11),
// which rolDefinition anchors on.
LINE_WS: [\r\n]+ [ \t]* -> channel(HIDDEN);
TAB: '\t';
WS: [ \r\n]+ -> channel(HIDDEN);
LINE_COMMENT: '//' ~[\r\n]* -> skip;
MINUS: '-';
PIPE: '|';
NVT: 'n.v.t.';
fragment LETTER: [a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ];
fragment DIGIT : [0-9] ;

// New keywords
