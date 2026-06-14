// Generated from RegelSpraak.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import RegelSpraakVisitor from "./RegelSpraakVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class RegelSpraakParser extends Parser {
	public static readonly VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL = 1;
	public static readonly NA_HET_ATTRIBUUT_MET_VOORZETSEL = 2;
	public static readonly DATUM_TIJD_MILLIS = 3;
	public static readonly GEDURENDE_DE_TIJD_DAT = 4;
	public static readonly GEDURENDE_HET_GEHELE = 5;
	public static readonly GEDURENDE_DE_GEHELE = 6;
	public static readonly HET_IS_DE_PERIODE = 7;
	public static readonly WORDT_BEREKEND_ALS = 8;
	public static readonly WORDT_GESTELD_OP = 9;
	public static readonly WORDT_GEINITIALISEERD_OP = 10;
	public static readonly DE_ABSOLUTE_TIJDSDUUR_VAN = 11;
	public static readonly DE_ABSOLUTE_WAARDE_VAN = 12;
	public static readonly DE_MAXIMALE_WAARDE_VAN = 13;
	public static readonly DE_MINIMALE_WAARDE_VAN = 14;
	public static readonly HET_TOTAAL_VAN = 15;
	public static readonly HET_TIJDSEVENREDIG_DEEL_PER = 16;
	public static readonly DE_DATUM_MET = 17;
	public static readonly DE_EERSTE_PAASDAG_VAN = 18;
	public static readonly ALS_ONVERDEELDE_REST_BLIJFT = 19;
	public static readonly MET_EEN_MINIMUM_VAN = 20;
	public static readonly MET_EEN_MAXIMUM_VAN = 21;
	public static readonly GROTER_OF_GELIJK_AAN = 22;
	public static readonly KLEINER_OF_GELIJK_AAN = 23;
	public static readonly LATER_OF_GELIJK_AAN = 24;
	public static readonly EERDER_OF_GELIJK_AAN = 25;
	public static readonly WAARBIJ_WORDT_VERDEELD = 26;
	public static readonly BESTAANDE_UIT = 27;
	public static readonly WEDERKERIG_FEITTYPE = 28;
	public static readonly IS_VAN_HET_TYPE = 29;
	public static readonly CONCATENATIE_VAN = 30;
	public static readonly VOLGEND_CRITERIUM = 31;
	public static readonly VOLGENDE_CRITERIA = 32;
	public static readonly BIJ_EVEN_GROOT_CRITERIUM = 33;
	public static readonly OP_VOLGORDE_VAN = 34;
	public static readonly NAAR_RATO_VAN = 35;
	public static readonly NUMERIEK_MET_EXACT = 36;
	public static readonly AAN_DE_ELFPROEF = 37;
	public static readonly OF_NUL_ALS_DIE_ER_NIET_ZIJN = 38;
	public static readonly GROTER_IS_DAN = 39;
	public static readonly KLEINER_IS_DAN = 40;
	public static readonly WORDT_VOLDAAN = 41;
	public static readonly NIEUWE = 42;
	public static readonly ER_AAN = 43;
	public static readonly GELIJK_IS_AAN = 44;
	public static readonly IS_GELIJK_AAN = 45;
	public static readonly IS_ONGELIJK_AAN = 46;
	public static readonly IS_KLEINER_DAN = 47;
	public static readonly IS_KLEINER_OF_GELIJK_AAN = 48;
	public static readonly IS_GROTER_DAN = 49;
	public static readonly IS_GROTER_OF_GELIJK_AAN = 50;
	public static readonly ZIJN_GELIJK_AAN = 51;
	public static readonly ZIJN_ONGELIJK_AAN = 52;
	public static readonly ZIJN_GROTER_DAN = 53;
	public static readonly ZIJN_GROTER_OF_GELIJK_AAN = 54;
	public static readonly ZIJN_KLEINER_DAN = 55;
	public static readonly ZIJN_KLEINER_OF_GELIJK_AAN = 56;
	public static readonly IS_LATER_DAN = 57;
	public static readonly IS_LATER_OF_GELIJK_AAN = 58;
	public static readonly IS_EERDER_DAN = 59;
	public static readonly IS_EERDER_OF_GELIJK_AAN = 60;
	public static readonly ZIJN_LATER_DAN = 61;
	public static readonly ZIJN_LATER_OF_GELIJK_AAN = 62;
	public static readonly ZIJN_EERDER_DAN = 63;
	public static readonly ZIJN_EERDER_OF_GELIJK_AAN = 64;
	public static readonly IS_LEEG = 65;
	public static readonly IS_GEVULD = 66;
	public static readonly ZIJN_LEEG = 67;
	public static readonly ZIJN_GEVULD = 68;
	public static readonly IS_KENMERK = 69;
	public static readonly IS_ROL = 70;
	public static readonly ZIJN_KENMERK = 71;
	public static readonly ZIJN_ROL = 72;
	public static readonly IS_NIET_KENMERK = 73;
	public static readonly IS_NIET_ROL = 74;
	public static readonly ZIJN_NIET_KENMERK = 75;
	public static readonly ZIJN_NIET_ROL = 76;
	public static readonly VOLDOET_AAN_DE_ELFPROEF = 77;
	public static readonly VOLDOEN_AAN_DE_ELFPROEF = 78;
	public static readonly VOLDOET_NIET_AAN_DE_ELFPROEF = 79;
	public static readonly VOLDOEN_NIET_AAN_DE_ELFPROEF = 80;
	public static readonly IS_NUMERIEK_MET_EXACT = 81;
	public static readonly IS_NIET_NUMERIEK_MET_EXACT = 82;
	public static readonly ZIJN_NUMERIEK_MET_EXACT = 83;
	public static readonly ZIJN_NIET_NUMERIEK_MET_EXACT = 84;
	public static readonly MOETEN_UNIEK_ZIJN = 85;
	public static readonly IS_GEVUURD = 86;
	public static readonly IS_INCONSISTENT = 87;
	public static readonly CONSISTENTIEREGEL = 88;
	public static readonly REGEL = 89;
	public static readonly REGELGROEP = 90;
	public static readonly BESLISTABEL = 91;
	public static readonly OBJECTTYPE = 92;
	public static readonly DOMEIN = 93;
	public static readonly LIJST = 94;
	public static readonly DIMENSIE = 95;
	public static readonly EENHEIDSYSTEEM = 96;
	public static readonly PARAMETER = 97;
	public static readonly FEITTYPE = 98;
	public static readonly DAGSOORT = 99;
	public static readonly DAARBIJ_GELDT = 100;
	public static readonly GELDIG = 101;
	public static readonly HEBBEN = 102;
	public static readonly HEEFT = 103;
	public static readonly INDIEN = 104;
	public static readonly IS_RECURSIEF = 105;
	public static readonly IS = 106;
	public static readonly MOET = 107;
	public static readonly MOETEN = 108;
	public static readonly WORDT_VERDEELD_OVER = 109;
	public static readonly WORDT = 110;
	public static readonly VOLDAAN = 111;
	public static readonly ZIJN = 112;
	public static readonly HAAR = 113;
	public static readonly HUN = 114;
	public static readonly AAN = 115;
	public static readonly AFGEROND_OP = 116;
	public static readonly ALLE = 117;
	public static readonly EERDER_DAN = 118;
	public static readonly GEDEELD_DOOR = 119;
	public static readonly GEDEELD_DOOR_ABS = 120;
	public static readonly GELIJK_AAN = 121;
	public static readonly GEVULD = 122;
	public static readonly GEVUURD = 123;
	public static readonly GROTER_DAN = 124;
	public static readonly INCONSISTENT = 125;
	public static readonly KLEINER_DAN = 126;
	public static readonly LATER_DAN = 127;
	public static readonly LEEG = 128;
	public static readonly MAAL = 129;
	public static readonly MIN = 130;
	public static readonly NAAR_BENEDEN = 131;
	public static readonly NAAR_BOVEN = 132;
	public static readonly NIET = 133;
	public static readonly ONGELIJK_ZIJN_AAN = 134;
	public static readonly ONGELIJK_AAN = 135;
	public static readonly PLUS = 136;
	public static readonly REKENKUNDIG = 137;
	public static readonly RICHTING_NUL = 138;
	public static readonly TOT = 139;
	public static readonly TOT_DE_MACHT = 140;
	public static readonly TOT_EN_MET = 141;
	public static readonly UNIEK = 142;
	public static readonly VANAF = 143;
	public static readonly VERENIGD_MET = 144;
	public static readonly VERMINDERD_MET = 145;
	public static readonly VOLDOEN = 146;
	public static readonly VOLDOET = 147;
	public static readonly WEG_VAN_NUL = 148;
	public static readonly DE_WORTEL_VAN = 149;
	public static readonly TENMINSTE = 150;
	public static readonly TEN_MINSTE = 151;
	public static readonly TEN_HOOGSTE = 152;
	public static readonly PRECIES = 153;
	public static readonly VOORWAARDE = 154;
	public static readonly VOORWAARDEN = 155;
	public static readonly BEZITTELIJK = 156;
	public static readonly BIJVOEGLIJK = 157;
	public static readonly BEZIELD = 158;
	public static readonly BOOLEAN = 159;
	public static readonly CIJFERS = 160;
	public static readonly DATUM_IN_DAGEN = 161;
	public static readonly DECIMALEN = 162;
	public static readonly ENUMERATIE = 163;
	public static readonly GEDIMENSIONEERD_MET = 164;
	public static readonly GEHEEL_GETAL = 165;
	public static readonly GETAL = 166;
	public static readonly KENMERK = 167;
	public static readonly KENMERKEN = 168;
	public static readonly MET = 169;
	public static readonly MET_EENHEID = 170;
	public static readonly MV_START = 171;
	public static readonly NEGATIEF = 172;
	public static readonly NIET_NEGATIEF = 173;
	public static readonly NUMERIEK = 174;
	public static readonly PERCENTAGE = 175;
	public static readonly POSITIEF = 176;
	public static readonly ROL = 177;
	public static readonly ROLLEN = 178;
	public static readonly TEKST = 179;
	public static readonly VOOR_ELK_JAAR = 180;
	public static readonly VOOR_ELKE_DAG = 181;
	public static readonly VOOR_ELKE_MAAND = 182;
	public static readonly AANTAL = 183;
	public static readonly EERSTE_VAN = 184;
	public static readonly IN_HELE = 185;
	public static readonly LAATSTE_VAN = 186;
	public static readonly REEKS_VAN_TEKSTEN_EN_WAARDEN = 187;
	public static readonly SOM_VAN = 188;
	public static readonly TIJDSDUUR_VAN = 189;
	public static readonly AFNEMENDE = 190;
	public static readonly IN_GELIJKE_DELEN = 191;
	public static readonly OVER_VERDELING = 192;
	public static readonly TOENEMENDE = 193;
	public static readonly DRIE_TELWOORD = 194;
	public static readonly EEN_TELWOORD = 195;
	public static readonly GEEN_VAN_DE = 196;
	public static readonly GEEN = 197;
	public static readonly TWEE_TELWOORD = 198;
	public static readonly VIER_TELWOORD = 199;
	public static readonly ALTIJD = 200;
	public static readonly BIJ = 201;
	public static readonly DAG = 202;
	public static readonly DAGEN = 203;
	public static readonly DAT = 204;
	public static readonly DE = 205;
	public static readonly DD_PUNT = 206;
	public static readonly DIE = 207;
	public static readonly EEN = 208;
	public static readonly EN = 209;
	public static readonly HET = 210;
	public static readonly MEERDERE = 211;
	public static readonly HIJ = 212;
	public static readonly IN = 213;
	public static readonly JAAR = 214;
	public static readonly JAREN = 215;
	public static readonly KWARTAAL = 216;
	public static readonly MAAND = 217;
	public static readonly MAANDEN = 218;
	public static readonly MILLISECONDE = 219;
	public static readonly MINUUT = 220;
	public static readonly MINUTEN = 221;
	public static readonly OF = 222;
	public static readonly ONWAAR = 223;
	public static readonly OP = 224;
	public static readonly OUDER = 225;
	public static readonly OVER = 226;
	public static readonly PERIODE = 227;
	public static readonly REKENDATUM = 228;
	public static readonly REKENJAAR = 229;
	public static readonly REGELVERSIE = 230;
	public static readonly SECONDE = 231;
	public static readonly SECONDEN = 232;
	public static readonly TM = 233;
	public static readonly UIT = 234;
	public static readonly UUR = 235;
	public static readonly UREN = 236;
	public static readonly VAN = 237;
	public static readonly VOLGENDE_VOORWAARDE = 238;
	public static readonly VOLGENDE_VOORWAARDEN = 239;
	public static readonly VOLGENDE = 240;
	public static readonly VOOR = 241;
	public static readonly WAAR = 242;
	public static readonly WEEK = 243;
	public static readonly WEKEN = 244;
	public static readonly ER = 245;
	public static readonly METER = 246;
	public static readonly KILOGRAM = 247;
	public static readonly VOET = 248;
	public static readonly POND = 249;
	public static readonly MIJL = 250;
	public static readonly GROTER_OF_GELIJK_IS_AAN = 251;
	public static readonly KLEINER_OF_GELIJK_IS_AAN = 252;
	public static readonly M = 253;
	public static readonly KG = 254;
	public static readonly S = 255;
	public static readonly FT = 256;
	public static readonly LB = 257;
	public static readonly MI = 258;
	public static readonly EURO_SYMBOL = 259;
	public static readonly DOLLAR_SYMBOL = 260;
	public static readonly DEGREE_SYMBOL = 261;
	public static readonly IDENTIFIER = 262;
	public static readonly NUMBER = 263;
	public static readonly EQUALS = 264;
	public static readonly DATE_TIME_LITERAL = 265;
	public static readonly PERCENTAGE_LITERAL = 266;
	public static readonly STRING_LITERAL = 267;
	public static readonly ENUM_LITERAL = 268;
	public static readonly LPAREN = 269;
	public static readonly RPAREN = 270;
	public static readonly LBRACE = 271;
	public static readonly RBRACE = 272;
	public static readonly COMMA = 273;
	public static readonly DOT = 274;
	public static readonly COLON = 275;
	public static readonly SEMICOLON = 276;
	public static readonly SLASH = 277;
	public static readonly PERCENT_SIGN = 278;
	public static readonly BULLET = 279;
	public static readonly ASTERISK = 280;
	public static readonly L_ANGLE_QUOTE = 281;
	public static readonly R_ANGLE_QUOTE = 282;
	public static readonly CARET = 283;
	public static readonly DOUBLE_DOT = 284;
	public static readonly LINE_WS = 285;
	public static readonly TAB = 286;
	public static readonly WS = 287;
	public static readonly LINE_COMMENT = 288;
	public static readonly MINUS = 289;
	public static readonly PIPE = 290;
	public static readonly NVT = 291;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_regelSpraakDocument = 0;
	public static readonly RULE_definitie = 1;
	public static readonly RULE_beslistabel = 2;
	public static readonly RULE_beslistabelTable = 3;
	public static readonly RULE_beslistabelHeader = 4;
	public static readonly RULE_beslistabelSeparator = 5;
	public static readonly RULE_beslistabelRow = 6;
	public static readonly RULE_beslistabelCellValue = 7;
	public static readonly RULE_beslistabelColumnText = 8;
	public static readonly RULE_beslistabelResultaatHeader = 9;
	public static readonly RULE_beslistabelVoorwaardeHeader = 10;
	public static readonly RULE_beslistabelAttribuutHeader = 11;
	public static readonly RULE_beslistabelAttribuutNaam = 12;
	public static readonly RULE_beslistabelAttribuutEerstePhrase = 13;
	public static readonly RULE_beslistabelAttribuutVervolgPhrase = 14;
	public static readonly RULE_beslistabelAttribuutVoorzetsel = 15;
	public static readonly RULE_identifier = 16;
	public static readonly RULE_identifierOrKeyword = 17;
	public static readonly RULE_identifierOrKeywordNoIs = 18;
	public static readonly RULE_naamPhrase = 19;
	public static readonly RULE_naamPhraseWithNumbers = 20;
	public static readonly RULE_identifierOrKeywordWithNumbers = 21;
	public static readonly RULE_naamPhraseNoIs = 22;
	public static readonly RULE_naamwoord = 23;
	public static readonly RULE_naamwoordWithNumbers = 24;
	public static readonly RULE_naamwoordNoIs = 25;
	public static readonly RULE_voorzetsel = 26;
	public static readonly RULE_datumLiteral = 27;
	public static readonly RULE_unit = 28;
	public static readonly RULE_timeUnit = 29;
	public static readonly RULE_objectTypeDefinition = 30;
	public static readonly RULE_objectTypeMember = 31;
	public static readonly RULE_kenmerkSpecificatie = 32;
	public static readonly RULE_attribuutSpecificatie = 33;
	public static readonly RULE_datatype = 34;
	public static readonly RULE_lijstDatatype = 35;
	public static readonly RULE_numeriekDatatype = 36;
	public static readonly RULE_tekstDatatype = 37;
	public static readonly RULE_percentageDatatype = 38;
	public static readonly RULE_booleanDatatype = 39;
	public static readonly RULE_datumTijdDatatype = 40;
	public static readonly RULE_getalSpecificatie = 41;
	public static readonly RULE_domeinDefinition = 42;
	public static readonly RULE_domeinType = 43;
	public static readonly RULE_enumeratieSpecificatie = 44;
	public static readonly RULE_domeinRef = 45;
	public static readonly RULE_objectTypeRef = 46;
	public static readonly RULE_eenheidsysteemDefinition = 47;
	public static readonly RULE_eenheidEntry = 48;
	public static readonly RULE_unitIdentifier = 49;
	public static readonly RULE_unitIdentifierWithTime = 50;
	public static readonly RULE_eenheidExpressie = 51;
	public static readonly RULE_unitProduct = 52;
	public static readonly RULE_eenheidMacht = 53;
	public static readonly RULE_dimensieDefinition = 54;
	public static readonly RULE_voorzetselSpecificatie = 55;
	public static readonly RULE_labelWaardeSpecificatie = 56;
	public static readonly RULE_tijdlijn = 57;
	public static readonly RULE_dimensieRef = 58;
	public static readonly RULE_parameterDefinition = 59;
	public static readonly RULE_parameterNamePhrase = 60;
	public static readonly RULE_parameterNamePart = 61;
	public static readonly RULE_parameterMetLidwoord = 62;
	public static readonly RULE_feitTypeDefinition = 63;
	public static readonly RULE_rolDefinition = 64;
	public static readonly RULE_rolNameWords = 65;
	public static readonly RULE_cardinalityLine = 66;
	public static readonly RULE_cardinalityWord = 67;
	public static readonly RULE_regel = 68;
	public static readonly RULE_regelVersieBlok = 69;
	public static readonly RULE_regelGroep = 70;
	public static readonly RULE_regelName = 71;
	public static readonly RULE_regelNameExtension = 72;
	public static readonly RULE_regelVersie = 73;
	public static readonly RULE_versieGeldigheid = 74;
	public static readonly RULE_geldigheidsDatum = 75;
	public static readonly RULE_resultaatDeel = 76;
	public static readonly RULE_consistencyOperator = 77;
	public static readonly RULE_feitCreatiePattern = 78;
	public static readonly RULE_feitCreatieRolPhrase = 79;
	public static readonly RULE_feitCreatieSubjectPhrase = 80;
	public static readonly RULE_feitCreatieSubjectWord = 81;
	public static readonly RULE_feitCreatieWord = 82;
	public static readonly RULE_voorzetselNietVan = 83;
	public static readonly RULE_objectCreatie = 84;
	public static readonly RULE_objectAttributeInit = 85;
	public static readonly RULE_waardetoekenning = 86;
	public static readonly RULE_simpleNaamwoord = 87;
	public static readonly RULE_consistentieregel = 88;
	public static readonly RULE_uniekzijnResultaat = 89;
	public static readonly RULE_alleAttributenVanObjecttype = 90;
	public static readonly RULE_inconsistentResultaat = 91;
	public static readonly RULE_voorwaardeDeel = 92;
	public static readonly RULE_toplevelSamengesteldeVoorwaarde = 93;
	public static readonly RULE_voorwaardeKwantificatie = 94;
	public static readonly RULE_samengesteldeVoorwaardeOnderdeel = 95;
	public static readonly RULE_outerBulletPrefix = 96;
	public static readonly RULE_nestedBulletPrefix = 97;
	public static readonly RULE_bulletPrefix = 98;
	public static readonly RULE_elementaireVoorwaarde = 99;
	public static readonly RULE_genesteSamengesteldeVoorwaarde = 100;
	public static readonly RULE_genesteSamengesteldeVoorwaardeOnderdeel = 101;
	public static readonly RULE_onderwerpReferentie = 102;
	public static readonly RULE_onderwerpReferentieWithNumbers = 103;
	public static readonly RULE_onderwerpBasis = 104;
	public static readonly RULE_onderwerpBasisWithNumbers = 105;
	public static readonly RULE_basisOnderwerp = 106;
	public static readonly RULE_basisOnderwerpWithNumbers = 107;
	public static readonly RULE_attribuutReferentie = 108;
	public static readonly RULE_attribuutMetLidwoord = 109;
	public static readonly RULE_kenmerkNaam = 110;
	public static readonly RULE_kenmerkPhrase = 111;
	public static readonly RULE_bezieldeReferentie = 112;
	public static readonly RULE_aggregationSubject = 113;
	public static readonly RULE_predicaat = 114;
	public static readonly RULE_elementairPredicaat = 115;
	public static readonly RULE_objectPredicaat = 116;
	public static readonly RULE_eenzijdigeObjectVergelijking = 117;
	public static readonly RULE_rolNaam = 118;
	public static readonly RULE_attribuutVergelijkingsPredicaat = 119;
	public static readonly RULE_getalPredicaat = 120;
	public static readonly RULE_tekstPredicaat = 121;
	public static readonly RULE_datumPredicaat = 122;
	public static readonly RULE_samengesteldPredicaat = 123;
	public static readonly RULE_samengesteldeVoorwaardeOnderdeelInPredicaat = 124;
	public static readonly RULE_elementaireVoorwaardeInPredicaat = 125;
	public static readonly RULE_vergelijkingInPredicaat = 126;
	public static readonly RULE_genesteSamengesteldeVoorwaardeInPredicaat = 127;
	public static readonly RULE_getalVergelijkingsOperatorMeervoud = 128;
	public static readonly RULE_tekstVergelijkingsOperatorMeervoud = 129;
	public static readonly RULE_datumVergelijkingsOperatorMeervoud = 130;
	public static readonly RULE_getalExpressie = 131;
	public static readonly RULE_tekstExpressie = 132;
	public static readonly RULE_datumExpressie = 133;
	public static readonly RULE_variabeleDeel = 134;
	public static readonly RULE_variabeleToekenning = 135;
	public static readonly RULE_variabeleExpressie = 136;
	public static readonly RULE_expressie = 137;
	public static readonly RULE_simpleExpressie = 138;
	public static readonly RULE_logicalExpression = 139;
	public static readonly RULE_comparisonExpression = 140;
	public static readonly RULE_literalValue = 141;
	public static readonly RULE_gelijkIsAanOperator = 142;
	public static readonly RULE_comparisonOperator = 143;
	public static readonly RULE_additiveExpression = 144;
	public static readonly RULE_additiveOperator = 145;
	public static readonly RULE_multiplicativeExpression = 146;
	public static readonly RULE_multiplicativeOperator = 147;
	public static readonly RULE_powerExpression = 148;
	public static readonly RULE_powerOperator = 149;
	public static readonly RULE_primaryExpression = 150;
	public static readonly RULE_afronding = 151;
	public static readonly RULE_begrenzing = 152;
	public static readonly RULE_begrenzingMinimum = 153;
	public static readonly RULE_begrenzingMaximum = 154;
	public static readonly RULE_conditieBijExpressie = 155;
	public static readonly RULE_periodevergelijkingElementair = 156;
	public static readonly RULE_periodevergelijkingEnkelvoudig = 157;
	public static readonly RULE_periodeDefinitie = 158;
	public static readonly RULE_dateExpression = 159;
	public static readonly RULE_getalAggregatieFunctie = 160;
	public static readonly RULE_datumAggregatieFunctie = 161;
	public static readonly RULE_dimensieSelectie = 162;
	public static readonly RULE_aggregerenOverAlleDimensies = 163;
	public static readonly RULE_aggregerenOverVerzameling = 164;
	public static readonly RULE_aggregerenOverBereik = 165;
	public static readonly RULE_unaryCondition = 166;
	public static readonly RULE_regelStatusCondition = 167;
	public static readonly RULE_regelversieNaam = 168;
	public static readonly RULE_subordinateClauseExpression = 169;
	public static readonly RULE_dagsoortDefinition = 170;
	public static readonly RULE_tekstreeksExpr = 171;
	public static readonly RULE_verdelingResultaat = 172;
	public static readonly RULE_verdelingMethodeSimple = 173;
	public static readonly RULE_verdelingMethodeMultiLine = 174;
	public static readonly RULE_verdelingMethodeBulletList = 175;
	public static readonly RULE_verdelingMethodeBullet = 176;
	public static readonly RULE_verdelingMethode = 177;
	public static readonly RULE_verdelingRest = 178;
	public static readonly literalNames: (string | null)[] = [ null, "'(voor het attribuut zonder voorzetsel):'",
                                                            "'(na het attribuut met voorzetsel'",
                                                            "'Datum en tijd in millisecondes'",
                                                            "'gedurende de tijd dat'",
                                                            "'gedurende het gehele'",
                                                            "'gedurende de gehele'",
                                                            null, "'moet berekend worden als'",
                                                            "'moet gesteld worden op'",
                                                            "'moet ge\\u00EFnitialiseerd worden op'",
                                                            "'de absolute tijdsduur van'",
                                                            "'de absolute waarde van'",
                                                            "'de maximale waarde van'",
                                                            "'de minimale waarde van'",
                                                            "'het totaal van'",
                                                            "'het tijdsevenredig deel per'",
                                                            "'de datum met jaar, maand en dag'",
                                                            "'de eerste paasdag van'",
                                                            "'Als onverdeelde rest blijft'",
                                                            "'met een minimum van'",
                                                            "'met een maximum van'",
                                                            "'groter of gelijk aan'",
                                                            "'kleiner of gelijk aan'",
                                                            "'later of gelijk aan'",
                                                            "'eerder of gelijk aan'",
                                                            "'waarbij wordt verdeeld'",
                                                            "', bestaande uit de'",
                                                            "'Wederkerig feittype'",
                                                            "'is van het type'",
                                                            "'de concatenatie van'",
                                                            "'het volgende criterium:'",
                                                            "'volgende criteria:'",
                                                            "'bij een even groot criterium'",
                                                            "'op volgorde van'",
                                                            "'naar rato van'",
                                                            "'numeriek met exact'",
                                                            "'aan de elfproef'",
                                                            "'of 0 als die er niet zijn'",
                                                            "'groter is dan'",
                                                            "'kleiner is dan'",
                                                            "'wordt voldaan'",
                                                            "'nieuwe'",
                                                            null, "'gelijk is aan'",
                                                            "'is gelijk aan'",
                                                            "'is ongelijk aan'",
                                                            "'is kleiner dan'",
                                                            "'is kleiner of gelijk aan'",
                                                            "'is groter dan'",
                                                            "'is groter of gelijk aan'",
                                                            "'zijn gelijk aan'",
                                                            "'zijn ongelijk aan'",
                                                            "'zijn groter dan'",
                                                            "'zijn groter of gelijk aan'",
                                                            "'zijn kleiner dan'",
                                                            "'zijn kleiner of gelijk aan'",
                                                            "'is later dan'",
                                                            "'is later of gelijk aan'",
                                                            "'is eerder dan'",
                                                            "'is eerder of gelijk aan'",
                                                            "'zijn later dan'",
                                                            "'zijn later of gelijk aan'",
                                                            "'zijn eerder dan'",
                                                            "'zijn eerder of gelijk aan'",
                                                            "'is leeg'",
                                                            "'is gevuld'",
                                                            "'zijn leeg'",
                                                            "'zijn gevuld'",
                                                            "'is kenmerk'",
                                                            "'is rol'",
                                                            "'zijn kenmerk'",
                                                            "'zijn rol'",
                                                            "'is niet kenmerk'",
                                                            "'is niet rol'",
                                                            "'zijn niet kenmerk'",
                                                            "'zijn niet rol'",
                                                            "'voldoet aan de elfproef'",
                                                            "'voldoen aan de elfproef'",
                                                            "'voldoet niet aan de elfproef'",
                                                            "'voldoen niet aan de elfproef'",
                                                            "'is numeriek met exact'",
                                                            "'is niet numeriek met exact'",
                                                            "'zijn numeriek met exact'",
                                                            "'zijn niet numeriek met exact'",
                                                            "'moeten uniek zijn'",
                                                            "'is gevuurd'",
                                                            "'is inconsistent'",
                                                            "'Consistentieregel'",
                                                            "'Regel'", "'Regelgroep'",
                                                            "'Beslistabel'",
                                                            "'Objecttype'",
                                                            "'Domein'",
                                                            "'Lijst'", "'Dimensie'",
                                                            "'Eenheidsysteem'",
                                                            "'Parameter'",
                                                            "'Feittype'",
                                                            "'Dagsoort'",
                                                            "'Daarbij geldt:'",
                                                            "'geldig'",
                                                            "'hebben'",
                                                            "'heeft'", "'indien'",
                                                            "'is recursief'",
                                                            "'is'", "'moet'",
                                                            "'moeten'",
                                                            "'wordt verdeeld over'",
                                                            "'wordt'", "'voldaan'",
                                                            "'zijn'", "'haar'",
                                                            "'hun'", "'aan'",
                                                            "'afgerond op'",
                                                            "'alle'", "'eerder dan'",
                                                            "'gedeeld door'",
                                                            "'gedeeld door (ABS)'",
                                                            "'gelijk aan'",
                                                            "'gevuld'",
                                                            "'gevuurd'",
                                                            "'groter dan'",
                                                            "'inconsistent'",
                                                            "'kleiner dan'",
                                                            "'later dan'",
                                                            "'leeg'", "'maal'",
                                                            "'min'", "'naar beneden'",
                                                            "'naar boven'",
                                                            "'niet'", "'ongelijk zijn aan'",
                                                            "'ongelijk aan'",
                                                            "'plus'", "'rekenkundig'",
                                                            "'richting nul'",
                                                            "'tot'", "'tot de macht'",
                                                            "'tot en met'",
                                                            "'uniek'", "'vanaf'",
                                                            "'verenigd met'",
                                                            "'verminderd met'",
                                                            "'voldoen'",
                                                            "'voldoet'",
                                                            "'weg van nul'",
                                                            "'de wortel van'",
                                                            "'tenminste'",
                                                            "'ten minste'",
                                                            "'ten hoogste'",
                                                            "'precies'",
                                                            "'voorwaarde'",
                                                            "'voorwaarden'",
                                                            "'(bezittelijk)'",
                                                            "'(bijvoeglijk)'",
                                                            "'(bezield)'",
                                                            "'Boolean'",
                                                            "'cijfers'",
                                                            "'Datum in dagen'",
                                                            "'decimalen'",
                                                            "'Enumeratie'",
                                                            "'gedimensioneerd met'",
                                                            "'geheel getal'",
                                                            "'getal'", "'kenmerk'",
                                                            "'kenmerken'",
                                                            "'met'", "'met eenheid'",
                                                            "'(mv:'", "'negatief'",
                                                            "'niet-negatief'",
                                                            "'Numeriek'",
                                                            "'Percentage'",
                                                            "'positief'",
                                                            "'rol'", "'rollen'",
                                                            "'Tekst'", "'voor elk jaar'",
                                                            "'voor elke dag'",
                                                            "'voor elke maand'",
                                                            "'aantal'",
                                                            "'de eerste van'",
                                                            "'in hele'",
                                                            "'de laatste van'",
                                                            "'reeks van teksten en waarden'",
                                                            "'de som van'",
                                                            "'de tijdsduur van'",
                                                            "'afnemende'",
                                                            "'in gelijke delen'",
                                                            "'over.'", "'toenemende'",
                                                            "'drie'", "'\\u00E9\\u00E9n'",
                                                            "'geen van de'",
                                                            "'geen'", "'twee'",
                                                            "'vier'", "'altijd'",
                                                            "'bij'", "'dag'",
                                                            "'dagen'", "'dat'",
                                                            null, "'dd.'",
                                                            "'die'", null,
                                                            "'en'", null,
                                                            "'meerdere'",
                                                            "'hij'", "'in'",
                                                            "'jaar'", "'jaren'",
                                                            "'kwartaal'",
                                                            "'maand'", "'maanden'",
                                                            "'milliseconde'",
                                                            "'minuut'",
                                                            "'minuten'",
                                                            "'of'", "'onwaar'",
                                                            "'op'", "'ouder'",
                                                            "'over'", "'periode'",
                                                            "'Rekendatum'",
                                                            "'Rekenjaar'",
                                                            "'regelversie'",
                                                            "'seconde'",
                                                            "'seconden'",
                                                            "'t/m'", "'uit'",
                                                            "'uur'", "'uren'",
                                                            "'van'", "'volgende voorwaarde'",
                                                            "'volgende voorwaarden'",
                                                            "'volgende'",
                                                            "'voor'", "'waar'",
                                                            "'week'", "'weken'",
                                                            "'er'", "'meter'",
                                                            "'kilogram'",
                                                            "'voet'", "'pond'",
                                                            "'mijl'", "'groter of gelijk is aan'",
                                                            "'kleiner of gelijk is aan'",
                                                            "'m'", "'kg'",
                                                            "'s'", "'ft'",
                                                            "'lb'", "'mi'",
                                                            "'\\u20AC'",
                                                            "'$'", "'\\u00B0'",
                                                            null, null,
                                                            "'='", null,
                                                            null, null,
                                                            null, "'('",
                                                            "')'", "'{'",
                                                            "'}'", "','",
                                                            "'.'", "':'",
                                                            "';'", "'/'",
                                                            "'%'", "'\\u2022'",
                                                            "'*'", "'\\u00AB'",
                                                            "'\\u00BB'",
                                                            "'^'", "'..'",
                                                            null, "'\\t'",
                                                            null, null,
                                                            "'-'", "'|'",
                                                            "'n.v.t.'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL",
                                                             "NA_HET_ATTRIBUUT_MET_VOORZETSEL",
                                                             "DATUM_TIJD_MILLIS",
                                                             "GEDURENDE_DE_TIJD_DAT",
                                                             "GEDURENDE_HET_GEHELE",
                                                             "GEDURENDE_DE_GEHELE",
                                                             "HET_IS_DE_PERIODE",
                                                             "WORDT_BEREKEND_ALS",
                                                             "WORDT_GESTELD_OP",
                                                             "WORDT_GEINITIALISEERD_OP",
                                                             "DE_ABSOLUTE_TIJDSDUUR_VAN",
                                                             "DE_ABSOLUTE_WAARDE_VAN",
                                                             "DE_MAXIMALE_WAARDE_VAN",
                                                             "DE_MINIMALE_WAARDE_VAN",
                                                             "HET_TOTAAL_VAN",
                                                             "HET_TIJDSEVENREDIG_DEEL_PER",
                                                             "DE_DATUM_MET",
                                                             "DE_EERSTE_PAASDAG_VAN",
                                                             "ALS_ONVERDEELDE_REST_BLIJFT",
                                                             "MET_EEN_MINIMUM_VAN",
                                                             "MET_EEN_MAXIMUM_VAN",
                                                             "GROTER_OF_GELIJK_AAN",
                                                             "KLEINER_OF_GELIJK_AAN",
                                                             "LATER_OF_GELIJK_AAN",
                                                             "EERDER_OF_GELIJK_AAN",
                                                             "WAARBIJ_WORDT_VERDEELD",
                                                             "BESTAANDE_UIT",
                                                             "WEDERKERIG_FEITTYPE",
                                                             "IS_VAN_HET_TYPE",
                                                             "CONCATENATIE_VAN",
                                                             "VOLGEND_CRITERIUM",
                                                             "VOLGENDE_CRITERIA",
                                                             "BIJ_EVEN_GROOT_CRITERIUM",
                                                             "OP_VOLGORDE_VAN",
                                                             "NAAR_RATO_VAN",
                                                             "NUMERIEK_MET_EXACT",
                                                             "AAN_DE_ELFPROEF",
                                                             "OF_NUL_ALS_DIE_ER_NIET_ZIJN",
                                                             "GROTER_IS_DAN",
                                                             "KLEINER_IS_DAN",
                                                             "WORDT_VOLDAAN",
                                                             "NIEUWE", "ER_AAN",
                                                             "GELIJK_IS_AAN",
                                                             "IS_GELIJK_AAN",
                                                             "IS_ONGELIJK_AAN",
                                                             "IS_KLEINER_DAN",
                                                             "IS_KLEINER_OF_GELIJK_AAN",
                                                             "IS_GROTER_DAN",
                                                             "IS_GROTER_OF_GELIJK_AAN",
                                                             "ZIJN_GELIJK_AAN",
                                                             "ZIJN_ONGELIJK_AAN",
                                                             "ZIJN_GROTER_DAN",
                                                             "ZIJN_GROTER_OF_GELIJK_AAN",
                                                             "ZIJN_KLEINER_DAN",
                                                             "ZIJN_KLEINER_OF_GELIJK_AAN",
                                                             "IS_LATER_DAN",
                                                             "IS_LATER_OF_GELIJK_AAN",
                                                             "IS_EERDER_DAN",
                                                             "IS_EERDER_OF_GELIJK_AAN",
                                                             "ZIJN_LATER_DAN",
                                                             "ZIJN_LATER_OF_GELIJK_AAN",
                                                             "ZIJN_EERDER_DAN",
                                                             "ZIJN_EERDER_OF_GELIJK_AAN",
                                                             "IS_LEEG",
                                                             "IS_GEVULD",
                                                             "ZIJN_LEEG",
                                                             "ZIJN_GEVULD",
                                                             "IS_KENMERK",
                                                             "IS_ROL", "ZIJN_KENMERK",
                                                             "ZIJN_ROL",
                                                             "IS_NIET_KENMERK",
                                                             "IS_NIET_ROL",
                                                             "ZIJN_NIET_KENMERK",
                                                             "ZIJN_NIET_ROL",
                                                             "VOLDOET_AAN_DE_ELFPROEF",
                                                             "VOLDOEN_AAN_DE_ELFPROEF",
                                                             "VOLDOET_NIET_AAN_DE_ELFPROEF",
                                                             "VOLDOEN_NIET_AAN_DE_ELFPROEF",
                                                             "IS_NUMERIEK_MET_EXACT",
                                                             "IS_NIET_NUMERIEK_MET_EXACT",
                                                             "ZIJN_NUMERIEK_MET_EXACT",
                                                             "ZIJN_NIET_NUMERIEK_MET_EXACT",
                                                             "MOETEN_UNIEK_ZIJN",
                                                             "IS_GEVUURD",
                                                             "IS_INCONSISTENT",
                                                             "CONSISTENTIEREGEL",
                                                             "REGEL", "REGELGROEP",
                                                             "BESLISTABEL",
                                                             "OBJECTTYPE",
                                                             "DOMEIN", "LIJST",
                                                             "DIMENSIE",
                                                             "EENHEIDSYSTEEM",
                                                             "PARAMETER",
                                                             "FEITTYPE",
                                                             "DAGSOORT",
                                                             "DAARBIJ_GELDT",
                                                             "GELDIG", "HEBBEN",
                                                             "HEEFT", "INDIEN",
                                                             "IS_RECURSIEF",
                                                             "IS", "MOET",
                                                             "MOETEN", "WORDT_VERDEELD_OVER",
                                                             "WORDT", "VOLDAAN",
                                                             "ZIJN", "HAAR",
                                                             "HUN", "AAN",
                                                             "AFGEROND_OP",
                                                             "ALLE", "EERDER_DAN",
                                                             "GEDEELD_DOOR",
                                                             "GEDEELD_DOOR_ABS",
                                                             "GELIJK_AAN",
                                                             "GEVULD", "GEVUURD",
                                                             "GROTER_DAN",
                                                             "INCONSISTENT",
                                                             "KLEINER_DAN",
                                                             "LATER_DAN",
                                                             "LEEG", "MAAL",
                                                             "MIN", "NAAR_BENEDEN",
                                                             "NAAR_BOVEN",
                                                             "NIET", "ONGELIJK_ZIJN_AAN",
                                                             "ONGELIJK_AAN",
                                                             "PLUS", "REKENKUNDIG",
                                                             "RICHTING_NUL",
                                                             "TOT", "TOT_DE_MACHT",
                                                             "TOT_EN_MET",
                                                             "UNIEK", "VANAF",
                                                             "VERENIGD_MET",
                                                             "VERMINDERD_MET",
                                                             "VOLDOEN",
                                                             "VOLDOET",
                                                             "WEG_VAN_NUL",
                                                             "DE_WORTEL_VAN",
                                                             "TENMINSTE",
                                                             "TEN_MINSTE",
                                                             "TEN_HOOGSTE",
                                                             "PRECIES",
                                                             "VOORWAARDE",
                                                             "VOORWAARDEN",
                                                             "BEZITTELIJK",
                                                             "BIJVOEGLIJK",
                                                             "BEZIELD",
                                                             "BOOLEAN",
                                                             "CIJFERS",
                                                             "DATUM_IN_DAGEN",
                                                             "DECIMALEN",
                                                             "ENUMERATIE",
                                                             "GEDIMENSIONEERD_MET",
                                                             "GEHEEL_GETAL",
                                                             "GETAL", "KENMERK",
                                                             "KENMERKEN",
                                                             "MET", "MET_EENHEID",
                                                             "MV_START",
                                                             "NEGATIEF",
                                                             "NIET_NEGATIEF",
                                                             "NUMERIEK",
                                                             "PERCENTAGE",
                                                             "POSITIEF",
                                                             "ROL", "ROLLEN",
                                                             "TEKST", "VOOR_ELK_JAAR",
                                                             "VOOR_ELKE_DAG",
                                                             "VOOR_ELKE_MAAND",
                                                             "AANTAL", "EERSTE_VAN",
                                                             "IN_HELE",
                                                             "LAATSTE_VAN",
                                                             "REEKS_VAN_TEKSTEN_EN_WAARDEN",
                                                             "SOM_VAN",
                                                             "TIJDSDUUR_VAN",
                                                             "AFNEMENDE",
                                                             "IN_GELIJKE_DELEN",
                                                             "OVER_VERDELING",
                                                             "TOENEMENDE",
                                                             "DRIE_TELWOORD",
                                                             "EEN_TELWOORD",
                                                             "GEEN_VAN_DE",
                                                             "GEEN", "TWEE_TELWOORD",
                                                             "VIER_TELWOORD",
                                                             "ALTIJD", "BIJ",
                                                             "DAG", "DAGEN",
                                                             "DAT", "DE",
                                                             "DD_PUNT",
                                                             "DIE", "EEN",
                                                             "EN", "HET",
                                                             "MEERDERE",
                                                             "HIJ", "IN",
                                                             "JAAR", "JAREN",
                                                             "KWARTAAL",
                                                             "MAAND", "MAANDEN",
                                                             "MILLISECONDE",
                                                             "MINUUT", "MINUTEN",
                                                             "OF", "ONWAAR",
                                                             "OP", "OUDER",
                                                             "OVER", "PERIODE",
                                                             "REKENDATUM",
                                                             "REKENJAAR",
                                                             "REGELVERSIE",
                                                             "SECONDE",
                                                             "SECONDEN",
                                                             "TM", "UIT",
                                                             "UUR", "UREN",
                                                             "VAN", "VOLGENDE_VOORWAARDE",
                                                             "VOLGENDE_VOORWAARDEN",
                                                             "VOLGENDE",
                                                             "VOOR", "WAAR",
                                                             "WEEK", "WEKEN",
                                                             "ER", "METER",
                                                             "KILOGRAM",
                                                             "VOET", "POND",
                                                             "MIJL", "GROTER_OF_GELIJK_IS_AAN",
                                                             "KLEINER_OF_GELIJK_IS_AAN",
                                                             "M", "KG",
                                                             "S", "FT",
                                                             "LB", "MI",
                                                             "EURO_SYMBOL",
                                                             "DOLLAR_SYMBOL",
                                                             "DEGREE_SYMBOL",
                                                             "IDENTIFIER",
                                                             "NUMBER", "EQUALS",
                                                             "DATE_TIME_LITERAL",
                                                             "PERCENTAGE_LITERAL",
                                                             "STRING_LITERAL",
                                                             "ENUM_LITERAL",
                                                             "LPAREN", "RPAREN",
                                                             "LBRACE", "RBRACE",
                                                             "COMMA", "DOT",
                                                             "COLON", "SEMICOLON",
                                                             "SLASH", "PERCENT_SIGN",
                                                             "BULLET", "ASTERISK",
                                                             "L_ANGLE_QUOTE",
                                                             "R_ANGLE_QUOTE",
                                                             "CARET", "DOUBLE_DOT",
                                                             "LINE_WS",
                                                             "TAB", "WS",
                                                             "LINE_COMMENT",
                                                             "MINUS", "PIPE",
                                                             "NVT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"regelSpraakDocument", "definitie", "beslistabel", "beslistabelTable",
		"beslistabelHeader", "beslistabelSeparator", "beslistabelRow", "beslistabelCellValue",
		"beslistabelColumnText", "beslistabelResultaatHeader", "beslistabelVoorwaardeHeader",
		"beslistabelAttribuutHeader", "beslistabelAttribuutNaam", "beslistabelAttribuutEerstePhrase",
		"beslistabelAttribuutVervolgPhrase", "beslistabelAttribuutVoorzetsel",
		"identifier", "identifierOrKeyword", "identifierOrKeywordNoIs", "naamPhrase",
		"naamPhraseWithNumbers", "identifierOrKeywordWithNumbers", "naamPhraseNoIs",
		"naamwoord", "naamwoordWithNumbers", "naamwoordNoIs", "voorzetsel", "datumLiteral",
		"unit", "timeUnit", "objectTypeDefinition", "objectTypeMember", "kenmerkSpecificatie",
		"attribuutSpecificatie", "datatype", "lijstDatatype", "numeriekDatatype",
		"tekstDatatype", "percentageDatatype", "booleanDatatype", "datumTijdDatatype",
		"getalSpecificatie", "domeinDefinition", "domeinType", "enumeratieSpecificatie",
		"domeinRef", "objectTypeRef", "eenheidsysteemDefinition", "eenheidEntry",
		"unitIdentifier", "unitIdentifierWithTime", "eenheidExpressie", "unitProduct",
		"eenheidMacht", "dimensieDefinition", "voorzetselSpecificatie", "labelWaardeSpecificatie",
		"tijdlijn", "dimensieRef", "parameterDefinition", "parameterNamePhrase",
		"parameterNamePart", "parameterMetLidwoord", "feitTypeDefinition", "rolDefinition",
		"rolNameWords", "cardinalityLine", "cardinalityWord", "regel", "regelVersieBlok",
		"regelGroep", "regelName", "regelNameExtension", "regelVersie", "versieGeldigheid",
		"geldigheidsDatum", "resultaatDeel", "consistencyOperator", "feitCreatiePattern",
		"feitCreatieRolPhrase", "feitCreatieSubjectPhrase", "feitCreatieSubjectWord",
		"feitCreatieWord", "voorzetselNietVan", "objectCreatie", "objectAttributeInit",
		"waardetoekenning", "simpleNaamwoord", "consistentieregel", "uniekzijnResultaat",
		"alleAttributenVanObjecttype", "inconsistentResultaat", "voorwaardeDeel",
		"toplevelSamengesteldeVoorwaarde", "voorwaardeKwantificatie", "samengesteldeVoorwaardeOnderdeel",
		"outerBulletPrefix", "nestedBulletPrefix", "bulletPrefix", "elementaireVoorwaarde",
		"genesteSamengesteldeVoorwaarde", "genesteSamengesteldeVoorwaardeOnderdeel",
		"onderwerpReferentie", "onderwerpReferentieWithNumbers", "onderwerpBasis",
		"onderwerpBasisWithNumbers", "basisOnderwerp", "basisOnderwerpWithNumbers",
		"attribuutReferentie", "attribuutMetLidwoord", "kenmerkNaam", "kenmerkPhrase",
		"bezieldeReferentie", "aggregationSubject", "predicaat", "elementairPredicaat",
		"objectPredicaat", "eenzijdigeObjectVergelijking", "rolNaam", "attribuutVergelijkingsPredicaat",
		"getalPredicaat", "tekstPredicaat", "datumPredicaat", "samengesteldPredicaat",
		"samengesteldeVoorwaardeOnderdeelInPredicaat", "elementaireVoorwaardeInPredicaat",
		"vergelijkingInPredicaat", "genesteSamengesteldeVoorwaardeInPredicaat",
		"getalVergelijkingsOperatorMeervoud", "tekstVergelijkingsOperatorMeervoud",
		"datumVergelijkingsOperatorMeervoud", "getalExpressie", "tekstExpressie",
		"datumExpressie", "variabeleDeel", "variabeleToekenning", "variabeleExpressie",
		"expressie", "simpleExpressie", "logicalExpression", "comparisonExpression",
		"literalValue", "gelijkIsAanOperator", "comparisonOperator", "additiveExpression",
		"additiveOperator", "multiplicativeExpression", "multiplicativeOperator",
		"powerExpression", "powerOperator", "primaryExpression", "afronding",
		"begrenzing", "begrenzingMinimum", "begrenzingMaximum", "conditieBijExpressie",
		"periodevergelijkingElementair", "periodevergelijkingEnkelvoudig", "periodeDefinitie",
		"dateExpression", "getalAggregatieFunctie", "datumAggregatieFunctie",
		"dimensieSelectie", "aggregerenOverAlleDimensies", "aggregerenOverVerzameling",
		"aggregerenOverBereik", "unaryCondition", "regelStatusCondition", "regelversieNaam",
		"subordinateClauseExpression", "dagsoortDefinition", "tekstreeksExpr",
		"verdelingResultaat", "verdelingMethodeSimple", "verdelingMethodeMultiLine",
		"verdelingMethodeBulletList", "verdelingMethodeBullet", "verdelingMethode",
		"verdelingRest",
	];
	public get grammarFileName(): string { return "RegelSpraak.g4"; }
	public get literalNames(): (string | null)[] { return RegelSpraakParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return RegelSpraakParser.symbolicNames; }
	public get ruleNames(): string[] { return RegelSpraakParser.ruleNames; }
	public get serializedATN(): number[] { return RegelSpraakParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, RegelSpraakParser._ATN, RegelSpraakParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public regelSpraakDocument(): RegelSpraakDocumentContext {
		let localctx: RegelSpraakDocumentContext = new RegelSpraakDocumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, RegelSpraakParser.RULE_regelSpraakDocument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===28 || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 4031) !== 0)) {
				{
				this.state = 364;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 28:
				case 92:
				case 93:
				case 95:
				case 97:
				case 98:
				case 99:
					{
					this.state = 358;
					this.definitie();
					}
					break;
				case 89:
					{
					this.state = 359;
					this.regel();
					}
					break;
				case 90:
					{
					this.state = 360;
					this.regelGroep();
					}
					break;
				case 91:
					{
					this.state = 361;
					this.beslistabel();
					}
					break;
				case 88:
					{
					this.state = 362;
					this.consistentieregel();
					}
					break;
				case 96:
					{
					this.state = 363;
					this.eenheidsysteemDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 369;
			this.match(RegelSpraakParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public definitie(): DefinitieContext {
		let localctx: DefinitieContext = new DefinitieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, RegelSpraakParser.RULE_definitie);
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 371;
				this.objectTypeDefinition();
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 372;
				this.domeinDefinition();
				}
				break;
			case 97:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 373;
				this.parameterDefinition();
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 374;
				this.dimensieDefinition();
				}
				break;
			case 28:
			case 98:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 375;
				this.feitTypeDefinition();
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 376;
				this.dagsoortDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabel(): BeslistabelContext {
		let localctx: BeslistabelContext = new BeslistabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, RegelSpraakParser.RULE_beslistabel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 379;
			this.match(RegelSpraakParser.BESLISTABEL);
			this.state = 380;
			this.naamwoord();
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===101) {
				{
				this.state = 381;
				this.regelVersie();
				}
			}

			this.state = 384;
			this.beslistabelTable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelTable(): BeslistabelTableContext {
		let localctx: BeslistabelTableContext = new BeslistabelTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, RegelSpraakParser.RULE_beslistabelTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.beslistabelHeader();
			this.state = 387;
			this.beslistabelSeparator();
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 388;
				this.beslistabelRow();
				}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===290);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelHeader(): BeslistabelHeaderContext {
		let localctx: BeslistabelHeaderContext = new BeslistabelHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RegelSpraakParser.RULE_beslistabelHeader);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 393;
			this.match(RegelSpraakParser.PIPE);
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===290) {
				{
				this.state = 394;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 397;
			localctx._beslistabelColumnText = this.beslistabelColumnText();
			localctx._columns.push(localctx._beslistabelColumnText);
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 398;
					this.match(RegelSpraakParser.PIPE);
					this.state = 399;
					localctx._beslistabelColumnText = this.beslistabelColumnText();
					localctx._columns.push(localctx._beslistabelColumnText);
					}
					}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 406;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 405;
				this.match(RegelSpraakParser.PIPE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelSeparator(): BeslistabelSeparatorContext {
		let localctx: BeslistabelSeparatorContext = new BeslistabelSeparatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, RegelSpraakParser.RULE_beslistabelSeparator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===290) {
				{
				this.state = 408;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 419;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 412;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 411;
							this.match(RegelSpraakParser.MINUS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 414;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 417;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						this.state = 416;
						this.match(RegelSpraakParser.PIPE);
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 421;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===289) {
				{
				{
				this.state = 423;
				this.match(RegelSpraakParser.MINUS);
				}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelRow(): BeslistabelRowContext {
		let localctx: BeslistabelRowContext = new BeslistabelRowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, RegelSpraakParser.RULE_beslistabelRow);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 429;
			this.match(RegelSpraakParser.PIPE);
			this.state = 430;
			localctx._rowNumber = this.match(RegelSpraakParser.NUMBER);
			this.state = 431;
			this.match(RegelSpraakParser.PIPE);
			this.state = 432;
			localctx._beslistabelCellValue = this.beslistabelCellValue();
			localctx._cellValues.push(localctx._beslistabelCellValue);
			this.state = 437;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 433;
					this.match(RegelSpraakParser.PIPE);
					this.state = 434;
					localctx._beslistabelCellValue = this.beslistabelCellValue();
					localctx._cellValues.push(localctx._beslistabelCellValue);
					}
					}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 441;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 440;
				this.match(RegelSpraakParser.PIPE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelCellValue(): BeslistabelCellValueContext {
		let localctx: BeslistabelCellValueContext = new BeslistabelCellValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, RegelSpraakParser.RULE_beslistabelCellValue);
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 30:
			case 42:
			case 89:
			case 103:
			case 106:
			case 112:
			case 113:
			case 114:
			case 117:
			case 125:
			case 130:
			case 133:
			case 149:
			case 154:
			case 183:
			case 184:
			case 186:
			case 188:
			case 189:
			case 194:
			case 195:
			case 198:
			case 199:
			case 202:
			case 203:
			case 205:
			case 208:
			case 210:
			case 212:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 223:
			case 225:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 235:
			case 236:
			case 242:
			case 243:
			case 244:
			case 246:
			case 262:
			case 263:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 289:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 443;
				this.expressie();
				}
				break;
			case 291:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 444;
				this.match(RegelSpraakParser.NVT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelColumnText(): BeslistabelColumnTextContext {
		let localctx: BeslistabelColumnTextContext = new BeslistabelColumnTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, RegelSpraakParser.RULE_beslistabelColumnText);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 447;
					_la = this._input.LA(1);
					if(_la<=0 || _la===290) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelResultaatHeader(): BeslistabelResultaatHeaderContext {
		let localctx: BeslistabelResultaatHeaderContext = new BeslistabelResultaatHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, RegelSpraakParser.RULE_beslistabelResultaatHeader);
		let _la: number;
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				localctx = new BeslistabelGelijkstellingHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 452;
				this.beslistabelAttribuutHeader();
				this.state = 453;
				this.match(RegelSpraakParser.WORDT_GESTELD_OP);
				this.state = 454;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelKenmerkHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 456;
				this.onderwerpReferentie();
				this.state = 457;
				_la = this._input.LA(1);
				if(!(_la===103 || _la===106)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 458;
				this.kenmerkNaam();
				this.state = 459;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelVoorwaardeHeader(): BeslistabelVoorwaardeHeaderContext {
		let localctx: BeslistabelVoorwaardeHeaderContext = new BeslistabelVoorwaardeHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, RegelSpraakParser.RULE_beslistabelVoorwaardeHeader);
		let _la: number;
		try {
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				localctx = new BeslistabelDagsoortVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 463;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 464;
				this.beslistabelAttribuutHeader();
				this.state = 465;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				    (localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 466;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===197 || _la===208)) {
				    (localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 467;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._dagsoort = this.kenmerkNaam();
				this.state = 468;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelUnaryVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 470;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 471;
				this.beslistabelAttribuutHeader();
				this.state = 472;
				(localctx as BeslistabelUnaryVoorwaardeHeaderContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 20483) !== 0))) {
				    (localctx as BeslistabelUnaryVoorwaardeHeaderContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 473;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 3:
				localctx = new BeslistabelGetalcontroleVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 475;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 476;
				this.beslistabelAttribuutHeader();
				this.state = 477;
				(localctx as BeslistabelGetalcontroleVoorwaardeHeaderContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 15) !== 0))) {
				    (localctx as BeslistabelGetalcontroleVoorwaardeHeaderContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 478;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 479;
				this.match(RegelSpraakParser.CIJFERS);
				this.state = 480;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 4:
				localctx = new BeslistabelAttribuutVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 482;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 483;
				this.beslistabelAttribuutHeader();
				this.state = 484;
				this.comparisonOperator();
				this.state = 485;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 5:
				localctx = new BeslistabelKenmerkVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 487;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 488;
				this.onderwerpReferentie();
				this.state = 490;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 489;
					_la = this._input.LA(1);
					if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 492;
				this.kenmerkNaam();
				this.state = 493;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 494;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelAttribuutHeader(): BeslistabelAttribuutHeaderContext {
		let localctx: BeslistabelAttribuutHeaderContext = new BeslistabelAttribuutHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, RegelSpraakParser.RULE_beslistabelAttribuutHeader);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.beslistabelAttribuutNaam();
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===237) {
				{
				this.state = 499;
				this.match(RegelSpraakParser.VAN);
				this.state = 500;
				this.onderwerpReferentie();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelAttribuutNaam(): BeslistabelAttribuutNaamContext {
		let localctx: BeslistabelAttribuutNaamContext = new BeslistabelAttribuutNaamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, RegelSpraakParser.RULE_beslistabelAttribuutNaam);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 503;
			this.beslistabelAttribuutEerstePhrase();
			this.state = 509;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 504;
					this.beslistabelAttribuutVoorzetsel();
					this.state = 505;
					this.beslistabelAttribuutVervolgPhrase();
					}
					}
				}
				this.state = 511;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelAttribuutEerstePhrase(): BeslistabelAttribuutEerstePhraseContext {
		let localctx: BeslistabelAttribuutEerstePhraseContext = new BeslistabelAttribuutEerstePhraseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, RegelSpraakParser.RULE_beslistabelAttribuutEerstePhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
				{
				this.state = 512;
				_la = this._input.LA(1);
				if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 515;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268451841) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelAttribuutVervolgPhrase(): BeslistabelAttribuutVervolgPhraseContext {
		let localctx: BeslistabelAttribuutVervolgPhraseContext = new BeslistabelAttribuutVervolgPhraseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, RegelSpraakParser.RULE_beslistabelAttribuutVervolgPhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 520;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268451841) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public beslistabelAttribuutVoorzetsel(): BeslistabelAttribuutVoorzetselContext {
		let localctx: BeslistabelAttribuutVoorzetselContext = new BeslistabelAttribuutVoorzetselContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, RegelSpraakParser.RULE_beslistabelAttribuutVoorzetsel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 525;
			_la = this._input.LA(1);
			if(!(((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, RegelSpraakParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 527;
			this.match(RegelSpraakParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierOrKeyword(): IdentifierOrKeywordContext {
		let localctx: IdentifierOrKeywordContext = new IdentifierOrKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, RegelSpraakParser.RULE_identifierOrKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 529;
			_la = this._input.LA(1);
			if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierOrKeywordNoIs(): IdentifierOrKeywordNoIsContext {
		let localctx: IdentifierOrKeywordNoIsContext = new IdentifierOrKeywordNoIsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, RegelSpraakParser.RULE_identifierOrKeywordNoIs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 531;
			_la = this._input.LA(1);
			if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268451841) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public naamPhrase(): NaamPhraseContext {
		let localctx: NaamPhraseContext = new NaamPhraseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, RegelSpraakParser.RULE_naamPhrase);
		let _la: number;
		try {
			let _alt: number;
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
					{
					this.state = 533;
					_la = this._input.LA(1);
					if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 537;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 536;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 539;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 542;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 541;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 544;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 546;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 548;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 547;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 550;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 552;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 553;
					this.identifierOrKeyword();
					}
					}
					this.state = 556;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 558;
				this.match(RegelSpraakParser.MET);
				this.state = 560;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 559;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 562;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 564;
					this.identifierOrKeyword();
					}
					}
					this.state = 567;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 569;
				this.match(RegelSpraakParser.MET);
				this.state = 571;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 570;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 573;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 575;
				this.match(RegelSpraakParser.NIET);
				this.state = 577;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 576;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 579;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 581;
				this.match(RegelSpraakParser.HET);
				this.state = 582;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 583;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 584;
				this.match(RegelSpraakParser.IN);
				this.state = 586;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 585;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 588;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public naamPhraseWithNumbers(): NaamPhraseWithNumbersContext {
		let localctx: NaamPhraseWithNumbersContext = new NaamPhraseWithNumbersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, RegelSpraakParser.RULE_naamPhraseWithNumbers);
		let _la: number;
		try {
			let _alt: number;
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
					{
					this.state = 592;
					_la = this._input.LA(1);
					if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 596;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 595;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 598;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 601;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 600;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 603;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 605;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 607;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 606;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 609;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 611;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 612;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 615;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262 || _la===263);
				this.state = 617;
				this.match(RegelSpraakParser.MET);
				this.state = 619;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 618;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 621;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 623;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 626;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262 || _la===263);
				this.state = 628;
				this.match(RegelSpraakParser.MET);
				this.state = 630;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 629;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 632;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 634;
				this.match(RegelSpraakParser.NIET);
				this.state = 636;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 635;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 638;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 640;
				this.match(RegelSpraakParser.HET);
				this.state = 641;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 642;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 643;
				this.match(RegelSpraakParser.IN);
				this.state = 645;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 644;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 647;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierOrKeywordWithNumbers(): IdentifierOrKeywordWithNumbersContext {
		let localctx: IdentifierOrKeywordWithNumbersContext = new IdentifierOrKeywordWithNumbersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, RegelSpraakParser.RULE_identifierOrKeywordWithNumbers);
		try {
			this.state = 653;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 89:
			case 103:
			case 106:
			case 117:
			case 125:
			case 154:
			case 183:
			case 194:
			case 195:
			case 198:
			case 199:
			case 202:
			case 203:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 225:
			case 227:
			case 231:
			case 232:
			case 235:
			case 236:
			case 243:
			case 244:
			case 246:
			case 262:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 651;
				this.identifierOrKeyword();
				}
				break;
			case 263:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 652;
				this.match(RegelSpraakParser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public naamPhraseNoIs(): NaamPhraseNoIsContext {
		let localctx: NaamPhraseNoIsContext = new NaamPhraseNoIsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, RegelSpraakParser.RULE_naamPhraseNoIs);
		let _la: number;
		try {
			let _alt: number;
			this.state = 703;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
					{
					this.state = 655;
					_la = this._input.LA(1);
					if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 659;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 658;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 661;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 664;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 663;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 666;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 668;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 670;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 669;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 672;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 674;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 675;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 678;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268451841) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 680;
				this.match(RegelSpraakParser.MET);
				this.state = 682;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 681;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 684;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 686;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 689;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268451841) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 691;
				this.match(RegelSpraakParser.MET);
				this.state = 693;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 692;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 695;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 697;
				this.match(RegelSpraakParser.NIET);
				this.state = 699;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 698;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 701;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public naamwoord(): NaamwoordContext {
		let localctx: NaamwoordContext = new NaamwoordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, RegelSpraakParser.RULE_naamwoord);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 705;
			this.naamPhrase();
			this.state = 711;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 706;
					this.voorzetsel();
					this.state = 707;
					this.naamPhrase();
					}
					}
				}
				this.state = 713;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		let localctx: NaamwoordWithNumbersContext = new NaamwoordWithNumbersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, RegelSpraakParser.RULE_naamwoordWithNumbers);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 714;
			this.naamPhraseWithNumbers();
			this.state = 720;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 715;
					this.voorzetsel();
					this.state = 716;
					this.naamPhraseWithNumbers();
					}
					}
				}
				this.state = 722;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public naamwoordNoIs(): NaamwoordNoIsContext {
		let localctx: NaamwoordNoIsContext = new NaamwoordNoIsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, RegelSpraakParser.RULE_naamwoordNoIs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 723;
			this.naamPhraseNoIs();
			this.state = 729;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 724;
					this.voorzetsel();
					this.state = 725;
					this.naamPhraseNoIs();
					}
					}
				}
				this.state = 731;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public voorzetsel(): VoorzetselContext {
		let localctx: VoorzetselContext = new VoorzetselContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, RegelSpraakParser.RULE_voorzetsel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 732;
			_la = this._input.LA(1);
			if(!(((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datumLiteral(): DatumLiteralContext {
		let localctx: DatumLiteralContext = new DatumLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, RegelSpraakParser.RULE_datumLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 734;
			this.match(RegelSpraakParser.DATE_TIME_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let localctx: UnitContext = new UnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, RegelSpraakParser.RULE_unit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 736;
			this.match(RegelSpraakParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeUnit(): TimeUnitContext {
		let localctx: TimeUnitContext = new TimeUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, RegelSpraakParser.RULE_timeUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 738;
			_la = this._input.LA(1);
			if(!(((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 1611509763) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & 771) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectTypeDefinition(): ObjectTypeDefinitionContext {
		let localctx: ObjectTypeDefinitionContext = new ObjectTypeDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, RegelSpraakParser.RULE_objectTypeDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 740;
			this.match(RegelSpraakParser.OBJECTTYPE);
			this.state = 741;
			this.naamwoordNoIs();
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 742;
				this.match(RegelSpraakParser.MV_START);
				this.state = 744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 743;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 746;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 748;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===158) {
				{
				this.state = 751;
				this.match(RegelSpraakParser.BEZIELD);
				}
			}

			this.state = 757;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 754;
					this.objectTypeMember();
					}
					}
				}
				this.state = 759;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectTypeMember(): ObjectTypeMemberContext {
		let localctx: ObjectTypeMemberContext = new ObjectTypeMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, RegelSpraakParser.RULE_objectTypeMember);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 762;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 760;
				this.kenmerkSpecificatie();
				}
				break;
			case 2:
				{
				this.state = 761;
				this.attribuutSpecificatie();
				}
				break;
			}
			this.state = 764;
			this.match(RegelSpraakParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public kenmerkSpecificatie(): KenmerkSpecificatieContext {
		let localctx: KenmerkSpecificatieContext = new KenmerkSpecificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, RegelSpraakParser.RULE_kenmerkSpecificatie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 771;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===106) {
					{
					this.state = 766;
					this.match(RegelSpraakParser.IS);
					}
				}

				this.state = 769;
				this.identifier();
				}
				break;
			case 2:
				{
				this.state = 770;
				this.naamwoordWithNumbers();
				}
				break;
			}
			this.state = 773;
			this.match(RegelSpraakParser.KENMERK);
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156 || _la===157) {
				{
				this.state = 774;
				_la = this._input.LA(1);
				if(!(_la===156 || _la===157)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & 7) !== 0)) {
				{
				this.state = 777;
				this.tijdlijn();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribuutSpecificatie(): AttribuutSpecificatieContext {
		let localctx: AttribuutSpecificatieContext = new AttribuutSpecificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, RegelSpraakParser.RULE_attribuutSpecificatie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 780;
			this.naamwoordWithNumbers();
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 781;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 782;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 783;
				this.objectTypeRef();
				}
				break;
			}
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===170) {
				{
				this.state = 786;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 787;
				this.eenheidExpressie();
				}
			}

			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===164) {
				{
				this.state = 790;
				this.match(RegelSpraakParser.GEDIMENSIONEERD_MET);
				this.state = 791;
				this.dimensieRef();
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===209) {
					{
					{
					this.state = 792;
					this.match(RegelSpraakParser.EN);
					this.state = 793;
					this.dimensieRef();
					}
					}
					this.state = 798;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & 7) !== 0)) {
				{
				this.state = 801;
				this.tijdlijn();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datatype(): DatatypeContext {
		let localctx: DatatypeContext = new DatatypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, RegelSpraakParser.RULE_datatype);
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 174:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 804;
				this.numeriekDatatype();
				}
				break;
			case 179:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 805;
				this.tekstDatatype();
				}
				break;
			case 159:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 806;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 161:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 807;
				this.datumTijdDatatype();
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 808;
				this.lijstDatatype();
				}
				break;
			case 175:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 809;
				this.percentageDatatype();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lijstDatatype(): LijstDatatypeContext {
		let localctx: LijstDatatypeContext = new LijstDatatypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, RegelSpraakParser.RULE_lijstDatatype);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 812;
			this.match(RegelSpraakParser.LIJST);
			this.state = 813;
			this.match(RegelSpraakParser.VAN);
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 814;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 815;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 816;
				this.objectTypeRef();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numeriekDatatype(): NumeriekDatatypeContext {
		let localctx: NumeriekDatatypeContext = new NumeriekDatatypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, RegelSpraakParser.RULE_numeriekDatatype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			this.match(RegelSpraakParser.NUMERIEK);
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===269) {
				{
				this.state = 820;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 821;
				this.getalSpecificatie();
				this.state = 822;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tekstDatatype(): TekstDatatypeContext {
		let localctx: TekstDatatypeContext = new TekstDatatypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, RegelSpraakParser.RULE_tekstDatatype);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 826;
			this.match(RegelSpraakParser.TEKST);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public percentageDatatype(): PercentageDatatypeContext {
		let localctx: PercentageDatatypeContext = new PercentageDatatypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, RegelSpraakParser.RULE_percentageDatatype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 828;
			this.match(RegelSpraakParser.PERCENTAGE);
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===269) {
				{
				this.state = 829;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 830;
				this.getalSpecificatie();
				this.state = 831;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanDatatype(): BooleanDatatypeContext {
		let localctx: BooleanDatatypeContext = new BooleanDatatypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, RegelSpraakParser.RULE_booleanDatatype);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 835;
			this.match(RegelSpraakParser.BOOLEAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datumTijdDatatype(): DatumTijdDatatypeContext {
		let localctx: DatumTijdDatatypeContext = new DatumTijdDatatypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, RegelSpraakParser.RULE_datumTijdDatatype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 837;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===161)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getalSpecificatie(): GetalSpecificatieContext {
		let localctx: GetalSpecificatieContext = new GetalSpecificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, RegelSpraakParser.RULE_getalSpecificatie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 19) !== 0)) {
				{
				this.state = 839;
				_la = this._input.LA(1);
				if(!(((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 19) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 848;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 842;
				this.match(RegelSpraakParser.GEHEEL_GETAL);
				}
				break;
			case 2:
				{
				{
				this.state = 843;
				this.match(RegelSpraakParser.GETAL);
				this.state = 844;
				this.match(RegelSpraakParser.MET);
				this.state = 845;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 846;
				this.match(RegelSpraakParser.DECIMALEN);
				}
				}
				break;
			case 3:
				{
				this.state = 847;
				this.match(RegelSpraakParser.GETAL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public domeinDefinition(): DomeinDefinitionContext {
		let localctx: DomeinDefinitionContext = new DomeinDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, RegelSpraakParser.RULE_domeinDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 850;
			this.match(RegelSpraakParser.DOMEIN);
			this.state = 851;
			localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 852;
			this.match(RegelSpraakParser.IS_VAN_HET_TYPE);
			this.state = 853;
			this.domeinType();
			this.state = 856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===170) {
				{
				this.state = 854;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 855;
				this.eenheidExpressie();
				}
			}

			this.state = 859;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 858;
				this.match(RegelSpraakParser.SEMICOLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public domeinType(): DomeinTypeContext {
		let localctx: DomeinTypeContext = new DomeinTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, RegelSpraakParser.RULE_domeinType);
		try {
			this.state = 866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 163:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 861;
				this.enumeratieSpecificatie();
				}
				break;
			case 174:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 862;
				this.numeriekDatatype();
				}
				break;
			case 179:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 863;
				this.tekstDatatype();
				}
				break;
			case 159:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 864;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 161:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 865;
				this.datumTijdDatatype();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumeratieSpecificatie(): EnumeratieSpecificatieContext {
		let localctx: EnumeratieSpecificatieContext = new EnumeratieSpecificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, RegelSpraakParser.RULE_enumeratieSpecificatie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 868;
			this.match(RegelSpraakParser.ENUMERATIE);
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 869;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				}
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===268);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public domeinRef(): DomeinRefContext {
		let localctx: DomeinRefContext = new DomeinRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, RegelSpraakParser.RULE_domeinRef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 874;
			localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectTypeRef(): ObjectTypeRefContext {
		let localctx: ObjectTypeRefContext = new ObjectTypeRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, RegelSpraakParser.RULE_objectTypeRef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 876;
			this.match(RegelSpraakParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eenheidsysteemDefinition(): EenheidsysteemDefinitionContext {
		let localctx: EenheidsysteemDefinitionContext = new EenheidsysteemDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, RegelSpraakParser.RULE_eenheidsysteemDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 878;
			this.match(RegelSpraakParser.EENHEIDSYSTEEM);
			this.state = 879;
			localctx._name = this.identifier();
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===205 || _la===210) {
				{
				{
				this.state = 880;
				this.eenheidEntry();
				}
				}
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eenheidEntry(): EenheidEntryContext {
		let localctx: EenheidEntryContext = new EenheidEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, RegelSpraakParser.RULE_eenheidEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 886;
			_la = this._input.LA(1);
			if(!(_la===205 || _la===210)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 887;
			localctx._unitName = this.unitIdentifierWithTime();
			this.state = 892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 888;
				this.match(RegelSpraakParser.MV_START);
				this.state = 889;
				localctx._pluralName = this.unitIdentifierWithTime();
				this.state = 890;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 894;
			localctx._abbrev = this.unitIdentifierWithTime();
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===130 || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 1611657219) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & 268237571) !== 0)) {
				{
				this.state = 895;
				localctx._symbol_ = this.unitIdentifierWithTime();
				}
			}

			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===264) {
				{
				this.state = 898;
				this.match(RegelSpraakParser.EQUALS);
				this.state = 900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===277) {
					{
					this.state = 899;
					this.match(RegelSpraakParser.SLASH);
					}
				}

				this.state = 902;
				localctx._value = this.match(RegelSpraakParser.NUMBER);
				this.state = 903;
				localctx._targetUnit = this.unitIdentifierWithTime();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unitIdentifier(): UnitIdentifierContext {
		let localctx: UnitIdentifierContext = new UnitIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, RegelSpraakParser.RULE_unitIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 906;
			_la = this._input.LA(1);
			if(!(_la===130 || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 4160958471) !== 0) || ((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 1023) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unitIdentifierWithTime(): UnitIdentifierWithTimeContext {
		let localctx: UnitIdentifierWithTimeContext = new UnitIdentifierWithTimeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, RegelSpraakParser.RULE_unitIdentifierWithTime);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 130:
			case 219:
			case 220:
			case 221:
			case 231:
			case 232:
			case 235:
			case 236:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 260:
			case 261:
			case 262:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 908;
				this.unitIdentifier();
				}
				break;
			case 202:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 909;
				this.match(RegelSpraakParser.DAG);
				}
				break;
			case 203:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 910;
				this.match(RegelSpraakParser.DAGEN);
				}
				break;
			case 217:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 911;
				this.match(RegelSpraakParser.MAAND);
				}
				break;
			case 218:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 912;
				this.match(RegelSpraakParser.MAANDEN);
				}
				break;
			case 214:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 913;
				this.match(RegelSpraakParser.JAAR);
				}
				break;
			case 215:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 914;
				this.match(RegelSpraakParser.JAREN);
				}
				break;
			case 243:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 915;
				this.match(RegelSpraakParser.WEEK);
				}
				break;
			case 244:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 916;
				this.match(RegelSpraakParser.WEKEN);
				}
				break;
			case 216:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 917;
				this.match(RegelSpraakParser.KWARTAAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eenheidExpressie(): EenheidExpressieContext {
		let localctx: EenheidExpressieContext = new EenheidExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, RegelSpraakParser.RULE_eenheidExpressie);
		try {
			let _alt: number;
			this.state = 932;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 920;
				this.unitProduct();
				this.state = 925;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 921;
						this.match(RegelSpraakParser.SLASH);
						this.state = 922;
						this.unitProduct();
						}
						}
					}
					this.state = 927;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 928;
				this.match(RegelSpraakParser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 929;
				this.match(RegelSpraakParser.PERCENT_SIGN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 930;
				this.match(RegelSpraakParser.EURO_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 931;
				this.match(RegelSpraakParser.DOLLAR_SYMBOL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unitProduct(): UnitProductContext {
		let localctx: UnitProductContext = new UnitProductContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, RegelSpraakParser.RULE_unitProduct);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 934;
			this.eenheidMacht();
			this.state = 939;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 935;
					this.match(RegelSpraakParser.ASTERISK);
					this.state = 936;
					this.eenheidMacht();
					}
					}
				}
				this.state = 941;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eenheidMacht(): EenheidMachtContext {
		let localctx: EenheidMachtContext = new EenheidMachtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, RegelSpraakParser.RULE_eenheidMacht);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 942;
			this.unitIdentifier();
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 943;
				this.match(RegelSpraakParser.CARET);
				this.state = 944;
				this.match(RegelSpraakParser.NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensieDefinition(): DimensieDefinitionContext {
		let localctx: DimensieDefinitionContext = new DimensieDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, RegelSpraakParser.RULE_dimensieDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 947;
			this.match(RegelSpraakParser.DIMENSIE);
			this.state = 948;
			this.naamwoord();
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===273) {
				{
				this.state = 949;
				this.match(RegelSpraakParser.COMMA);
				}
			}

			this.state = 952;
			this.match(RegelSpraakParser.BESTAANDE_UIT);
			this.state = 953;
			localctx._dimensieNaamMeervoud = this.naamwoord();
			this.state = 954;
			this.voorzetselSpecificatie();
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 955;
				this.labelWaardeSpecificatie();
				}
				}
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===263);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public voorzetselSpecificatie(): VoorzetselSpecificatieContext {
		let localctx: VoorzetselSpecificatieContext = new VoorzetselSpecificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, RegelSpraakParser.RULE_voorzetselSpecificatie);
		let _la: number;
		try {
			this.state = 967;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 960;
				this.match(RegelSpraakParser.NA_HET_ATTRIBUUT_MET_VOORZETSEL);
				this.state = 961;
				localctx._vz = this.voorzetsel();
				this.state = 962;
				this.match(RegelSpraakParser.RPAREN);
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===275) {
					{
					this.state = 963;
					this.match(RegelSpraakParser.COLON);
					}
				}

				}
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 966;
				this.match(RegelSpraakParser.VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelWaardeSpecificatie(): LabelWaardeSpecificatieContext {
		let localctx: LabelWaardeSpecificatieContext = new LabelWaardeSpecificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, RegelSpraakParser.RULE_labelWaardeSpecificatie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 969;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 970;
			this.match(RegelSpraakParser.DOT);
			this.state = 971;
			localctx._dimWaarde = this.naamwoord();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tijdlijn(): TijdlijnContext {
		let localctx: TijdlijnContext = new TijdlijnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, RegelSpraakParser.RULE_tijdlijn);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			_la = this._input.LA(1);
			if(!(((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensieRef(): DimensieRefContext {
		let localctx: DimensieRefContext = new DimensieRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, RegelSpraakParser.RULE_dimensieRef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 975;
			localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterDefinition(): ParameterDefinitionContext {
		let localctx: ParameterDefinitionContext = new ParameterDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, RegelSpraakParser.RULE_parameterDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 977;
			this.match(RegelSpraakParser.PARAMETER);
			this.state = 978;
			this.parameterNamePhrase();
			this.state = 979;
			this.match(RegelSpraakParser.COLON);
			this.state = 982;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 94:
			case 159:
			case 161:
			case 174:
			case 175:
			case 179:
				{
				this.state = 980;
				this.datatype();
				}
				break;
			case 262:
				{
				this.state = 981;
				this.domeinRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===170) {
				{
				this.state = 984;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 985;
				this.eenheidExpressie();
				}
			}

			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===106) {
				{
				this.state = 988;
				this.match(RegelSpraakParser.IS);
				this.state = 989;
				this.expressie();
				}
			}

			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & 7) !== 0)) {
				{
				this.state = 992;
				this.tijdlijn();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterNamePhrase(): ParameterNamePhraseContext {
		let localctx: ParameterNamePhraseContext = new ParameterNamePhraseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, RegelSpraakParser.RULE_parameterNamePhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===205 || _la===210) {
				{
				this.state = 995;
				_la = this._input.LA(1);
				if(!(_la===205 || _la===210)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 998;
			this.parameterNamePart();
			this.state = 1004;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				{
				this.state = 999;
				this.voorzetsel();
				this.state = 1000;
				this.parameterNamePart();
				}
				}
				this.state = 1006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterNamePart(): ParameterNamePartContext {
		let localctx: ParameterNamePartContext = new ParameterNamePartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, RegelSpraakParser.RULE_parameterNamePart);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1007;
			_la = this._input.LA(1);
			if(!(_la===183 || _la===262)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1011;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1008;
					_la = this._input.LA(1);
					if(!(_la===183 || _la===262 || _la===263)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 1013;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterMetLidwoord(): ParameterMetLidwoordContext {
		let localctx: ParameterMetLidwoordContext = new ParameterMetLidwoordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, RegelSpraakParser.RULE_parameterMetLidwoord);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1027;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===205 || _la===210) {
					{
					this.state = 1014;
					_la = this._input.LA(1);
					if(!(_la===205 || _la===210)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1017;
				this.parameterNamePart();
				this.state = 1023;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1018;
						this.voorzetsel();
						this.state = 1019;
						this.parameterNamePart();
						}
						}
					}
					this.state = 1025;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1026;
				this.naamwoord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public feitTypeDefinition(): FeitTypeDefinitionContext {
		let localctx: FeitTypeDefinitionContext = new FeitTypeDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, RegelSpraakParser.RULE_feitTypeDefinition);
		try {
			let _alt: number;
			this.state = 1044;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1029;
				this.match(RegelSpraakParser.FEITTYPE);
				this.state = 1030;
				localctx._feittypenaam = this.naamwoord();
				this.state = 1031;
				this.rolDefinition();
				this.state = 1033;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1032;
						this.rolDefinition();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1035;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1037;
				this.cardinalityLine();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1039;
				this.match(RegelSpraakParser.WEDERKERIG_FEITTYPE);
				this.state = 1040;
				localctx._feittypenaam = this.naamwoord();
				this.state = 1041;
				this.rolDefinition();
				this.state = 1042;
				this.cardinalityLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rolDefinition(): RolDefinitionContext {
		let localctx: RolDefinitionContext = new RolDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, RegelSpraakParser.RULE_rolDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1046;
			localctx._article = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===205 || _la===210)) {
			    localctx._article = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1047;
			this.rolNameWords();
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 1048;
				this.match(RegelSpraakParser.MV_START);
				this.state = 1049;
				localctx._meervoud = this.naamwoord();
				this.state = 1050;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 1054;
			this.match(RegelSpraakParser.TAB);
			this.state = 1056;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1055;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._objectTypeName.push(localctx._IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1058;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rolNameWords(): RolNameWordsContext {
		let localctx: RolNameWordsContext = new RolNameWordsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, RegelSpraakParser.RULE_rolNameWords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1062;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 89:
				case 103:
				case 106:
				case 117:
				case 125:
				case 154:
				case 183:
				case 194:
				case 195:
				case 198:
				case 199:
				case 202:
				case 203:
				case 214:
				case 215:
				case 216:
				case 217:
				case 218:
				case 219:
				case 220:
				case 221:
				case 225:
				case 227:
				case 231:
				case 232:
				case 235:
				case 236:
				case 243:
				case 244:
				case 246:
				case 262:
					{
					this.state = 1060;
					this.identifierOrKeyword();
					}
					break;
				case 139:
				case 141:
				case 169:
				case 201:
				case 209:
				case 213:
				case 222:
				case 224:
				case 226:
				case 234:
				case 237:
				case 241:
					{
					this.state = 1061;
					this.voorzetsel();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & 536952833) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & 1711292417) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 3351245063) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 268441231) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cardinalityLine(): CardinalityLineContext {
		let localctx: CardinalityLineContext = new CardinalityLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, RegelSpraakParser.RULE_cardinalityLine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1066;
				this.cardinalityWord();
				}
				}
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4026531838) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1090519039) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 4294967295) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 4294967295) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4294967295) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 4294967295) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4294967295) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 4294901759) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cardinalityWord(): CardinalityWordContext {
		let localctx: CardinalityWordContext = new CardinalityWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, RegelSpraakParser.RULE_cardinalityWord);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1071;
			_la = this._input.LA(1);
			if(_la<=0 || _la===28 || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 4031) !== 0) || _la===276) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regel(): RegelContext {
		let localctx: RegelContext = new RegelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, RegelSpraakParser.RULE_regel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1073;
			this.match(RegelSpraakParser.REGEL);
			this.state = 1074;
			this.regelName();
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===263) {
				{
				this.state = 1075;
				this.match(RegelSpraakParser.NUMBER);
				}
			}

			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1078;
				this.regelVersieBlok();
				}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===101);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regelVersieBlok(): RegelVersieBlokContext {
		let localctx: RegelVersieBlokContext = new RegelVersieBlokContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, RegelSpraakParser.RULE_regelVersieBlok);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1083;
			this.regelVersie();
			this.state = 1084;
			this.resultaatDeel();
			this.state = 1090;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 104:
				{
				this.state = 1085;
				this.voorwaardeDeel();
				this.state = 1087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===274) {
					{
					this.state = 1086;
					this.match(RegelSpraakParser.DOT);
					}
				}

				}
				break;
			case 274:
				{
				this.state = 1089;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			case -1:
			case 28:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
				break;
			default:
				break;
			}
			this.state = 1093;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===100) {
				{
				this.state = 1092;
				this.variabeleDeel();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regelGroep(): RegelGroepContext {
		let localctx: RegelGroepContext = new RegelGroepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, RegelSpraakParser.RULE_regelGroep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1095;
			this.match(RegelSpraakParser.REGELGROEP);
			this.state = 1096;
			this.naamwoord();
			this.state = 1098;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 1097;
				localctx._isRecursive = this.match(RegelSpraakParser.IS_RECURSIEF);
				}
			}

			this.state = 1102;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1102;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 89:
						{
						this.state = 1100;
						this.regel();
						}
						break;
					case 88:
						{
						this.state = 1101;
						this.consistentieregel();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regelName(): RegelNameContext {
		let localctx: RegelNameContext = new RegelNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, RegelSpraakParser.RULE_regelName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1106;
			this.naamwoordWithNumbers();
			this.state = 1110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===106 || ((((_la - 191)) & ~0x1F) === 0 && ((1 << (_la - 191)) & 262209) !== 0) || _la===273) {
				{
				{
				this.state = 1107;
				this.regelNameExtension();
				}
				}
				this.state = 1112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regelNameExtension(): RegelNameExtensionContext {
		let localctx: RegelNameExtensionContext = new RegelNameExtensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, RegelSpraakParser.RULE_regelNameExtension);
		try {
			this.state = 1127;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1113;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1114;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1115;
				this.naamwoordWithNumbers();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1116;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1117;
				this.match(RegelSpraakParser.MET);
				this.state = 1118;
				this.naamwoordWithNumbers();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1119;
				this.match(RegelSpraakParser.EN);
				this.state = 1120;
				this.naamwoordWithNumbers();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1121;
				this.match(RegelSpraakParser.IS);
				this.state = 1122;
				this.naamwoordWithNumbers();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1123;
				this.match(RegelSpraakParser.GEEN);
				this.state = 1124;
				this.naamwoordWithNumbers();
				this.state = 1125;
				this.match(RegelSpraakParser.IS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regelVersie(): RegelVersieContext {
		let localctx: RegelVersieContext = new RegelVersieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, RegelSpraakParser.RULE_regelVersie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1129;
			this.match(RegelSpraakParser.GELDIG);
			this.state = 1130;
			this.versieGeldigheid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public versieGeldigheid(): VersieGeldigheidContext {
		let localctx: VersieGeldigheidContext = new VersieGeldigheidContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, RegelSpraakParser.RULE_versieGeldigheid);
		let _la: number;
		try {
			this.state = 1141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 200:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1132;
				this.match(RegelSpraakParser.ALTIJD);
				}
				break;
			case 143:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1133;
				this.match(RegelSpraakParser.VANAF);
				this.state = 1134;
				this.geldigheidsDatum();
				this.state = 1137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===141 || _la===233) {
					{
					this.state = 1135;
					_la = this._input.LA(1);
					if(!(_la===141 || _la===233)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1136;
					this.geldigheidsDatum();
					}
				}

				}
				break;
			case 141:
			case 233:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1139;
				_la = this._input.LA(1);
				if(!(_la===141 || _la===233)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1140;
				this.geldigheidsDatum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public geldigheidsDatum(): GeldigheidsDatumContext {
		let localctx: GeldigheidsDatumContext = new GeldigheidsDatumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, RegelSpraakParser.RULE_geldigheidsDatum);
		try {
			this.state = 1145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1143;
				this.datumLiteral();
				}
				break;
			case 263:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1144;
				this.match(RegelSpraakParser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resultaatDeel(): ResultaatDeelContext {
		let localctx: ResultaatDeelContext = new ResultaatDeelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, RegelSpraakParser.RULE_resultaatDeel);
		let _la: number;
		try {
			this.state = 1187;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				localctx = new DagsoortdefinitieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1147;
				this.match(RegelSpraakParser.EEN);
				this.state = 1148;
				this.match(RegelSpraakParser.DAG);
				this.state = 1149;
				this.match(RegelSpraakParser.IS);
				this.state = 1150;
				this.match(RegelSpraakParser.EEN);
				this.state = 1151;
				this.naamwoord();
				}
				break;
			case 2:
				localctx = new GelijkstellingResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1152;
				this.attribuutReferentie();
				this.state = 1159;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
					{
					this.state = 1153;
					this.match(RegelSpraakParser.WORDT_BEREKEND_ALS);
					this.state = 1154;
					this.expressie();
					}
					break;
				case 9:
					{
					this.state = 1155;
					this.match(RegelSpraakParser.WORDT_GESTELD_OP);
					this.state = 1156;
					this.expressie();
					}
					break;
				case 10:
					{
					this.state = 1157;
					this.match(RegelSpraakParser.WORDT_GEINITIALISEERD_OP);
					this.state = 1158;
					this.expressie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 21) !== 0) || _la===237) {
					{
					this.state = 1161;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 3:
				localctx = new ConsistencyCheckResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1164;
				this.attribuutReferentie();
				this.state = 1165;
				this.match(RegelSpraakParser.MOET);
				this.state = 1166;
				this.consistencyOperator();
				this.state = 1167;
				this.expressie();
				}
				break;
			case 4:
				localctx = new FeitCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1169;
				this.feitCreatiePattern();
				}
				break;
			case 5:
				localctx = new ObjectCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1170;
				this.objectCreatie();
				}
				break;
			case 6:
				localctx = new RelationshipWithAttributeResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1171;
				this.onderwerpReferentie();
				this.state = 1172;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1173;
				_la = this._input.LA(1);
				if(!(_la===205 || _la===210)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1174;
				this.naamwoord();
				this.state = 1175;
				this.match(RegelSpraakParser.MET);
				this.state = 1176;
				this.attribuutMetLidwoord();
				this.state = 1177;
				_la = this._input.LA(1);
				if(!(_la===44 || _la===45 || _la===121)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1178;
				this.expressie();
				}
				break;
			case 7:
				localctx = new KenmerkFeitResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1180;
				this.onderwerpReferentie();
				this.state = 1181;
				_la = this._input.LA(1);
				if(!(_la===103 || _la===106)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1182;
				this.kenmerkNaam();
				this.state = 1184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 21) !== 0) || _la===237) {
					{
					this.state = 1183;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 8:
				localctx = new VerdelingContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1186;
				this.verdelingResultaat();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public consistencyOperator(): ConsistencyOperatorContext {
		let localctx: ConsistencyOperatorContext = new ConsistencyOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, RegelSpraakParser.RULE_consistencyOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1189;
			_la = this._input.LA(1);
			if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 23) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 24617) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public feitCreatiePattern(): FeitCreatiePatternContext {
		let localctx: FeitCreatiePatternContext = new FeitCreatiePatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, RegelSpraakParser.RULE_feitCreatiePattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1191;
			this.match(RegelSpraakParser.EEN);
			this.state = 1192;
			localctx._role1 = this.feitCreatieRolPhrase();
			this.state = 1193;
			this.match(RegelSpraakParser.VAN);
			this.state = 1194;
			this.match(RegelSpraakParser.EEN);
			this.state = 1195;
			localctx._subject1 = this.feitCreatieSubjectPhrase();
			this.state = 1196;
			this.match(RegelSpraakParser.IS);
			this.state = 1197;
			localctx._article2 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
			    localctx._article2 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1198;
			localctx._role2 = this.feitCreatieRolPhrase();
			this.state = 1199;
			this.match(RegelSpraakParser.VAN);
			this.state = 1200;
			localctx._article3 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
			    localctx._article3 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1201;
			localctx._subject2 = this.feitCreatieSubjectPhrase();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public feitCreatieRolPhrase(): FeitCreatieRolPhraseContext {
		let localctx: FeitCreatieRolPhraseContext = new FeitCreatieRolPhraseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, RegelSpraakParser.RULE_feitCreatieRolPhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1203;
				this.feitCreatieWord();
				}
				}
				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & 536887297) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & 1711292417) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 3349147911) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 268441223) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public feitCreatieSubjectPhrase(): FeitCreatieSubjectPhraseContext {
		let localctx: FeitCreatieSubjectPhraseContext = new FeitCreatieSubjectPhraseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, RegelSpraakParser.RULE_feitCreatieSubjectPhrase);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1209;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1208;
					this.feitCreatieSubjectWord();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1211;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public feitCreatieSubjectWord(): FeitCreatieSubjectWordContext {
		let localctx: FeitCreatieSubjectWordContext = new FeitCreatieSubjectWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, RegelSpraakParser.RULE_feitCreatieSubjectWord);
		try {
			this.state = 1218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 89:
			case 103:
			case 106:
			case 117:
			case 125:
			case 154:
			case 183:
			case 194:
			case 195:
			case 198:
			case 199:
			case 202:
			case 203:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 225:
			case 227:
			case 231:
			case 232:
			case 235:
			case 236:
			case 243:
			case 244:
			case 246:
			case 262:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1213;
				this.identifierOrKeyword();
				}
				break;
			case 139:
			case 141:
			case 169:
			case 201:
			case 209:
			case 213:
			case 222:
			case 224:
			case 226:
			case 234:
			case 237:
			case 241:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1214;
				this.voorzetsel();
				}
				break;
			case 205:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1215;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 210:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1216;
				this.match(RegelSpraakParser.HET);
				}
				break;
			case 208:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1217;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public feitCreatieWord(): FeitCreatieWordContext {
		let localctx: FeitCreatieWordContext = new FeitCreatieWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, RegelSpraakParser.RULE_feitCreatieWord);
		try {
			this.state = 1222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 89:
			case 103:
			case 106:
			case 117:
			case 125:
			case 154:
			case 183:
			case 194:
			case 195:
			case 198:
			case 199:
			case 202:
			case 203:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 225:
			case 227:
			case 231:
			case 232:
			case 235:
			case 236:
			case 243:
			case 244:
			case 246:
			case 262:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1220;
				this.identifierOrKeyword();
				}
				break;
			case 139:
			case 169:
			case 201:
			case 209:
			case 213:
			case 224:
			case 226:
			case 234:
			case 241:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1221;
				this.voorzetselNietVan();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public voorzetselNietVan(): VoorzetselNietVanContext {
		let localctx: VoorzetselNietVanContext = new VoorzetselNietVanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, RegelSpraakParser.RULE_voorzetselNietVan);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1224;
			_la = this._input.LA(1);
			if(!(_la===139 || _la===169 || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 41947393) !== 0) || _la===234 || _la===241)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectCreatie(): ObjectCreatieContext {
		let localctx: ObjectCreatieContext = new ObjectCreatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, RegelSpraakParser.RULE_objectCreatie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1226;
			localctx._subject = this.onderwerpReferentie();
			this.state = 1227;
			this.match(RegelSpraakParser.HEEFT);
			this.state = 1228;
			localctx._roleArticle = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
			    localctx._roleArticle = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1229;
			localctx._role = this.naamwoord();
			this.state = 1231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===169) {
				{
				this.state = 1230;
				this.objectAttributeInit();
				}
			}

			this.state = 1234;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1233;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectAttributeInit(): ObjectAttributeInitContext {
		let localctx: ObjectAttributeInitContext = new ObjectAttributeInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, RegelSpraakParser.RULE_objectAttributeInit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1236;
			this.match(RegelSpraakParser.MET);
			this.state = 1237;
			this.waardetoekenning();
			this.state = 1242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===273) {
				{
				{
				this.state = 1238;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1239;
				this.waardetoekenning();
				}
				}
				this.state = 1244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===209) {
				{
				this.state = 1245;
				this.match(RegelSpraakParser.EN);
				this.state = 1246;
				this.waardetoekenning();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public waardetoekenning(): WaardetoekenningContext {
		let localctx: WaardetoekenningContext = new WaardetoekenningContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, RegelSpraakParser.RULE_waardetoekenning);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1249;
			localctx._attribuut = this.simpleNaamwoord();
			this.state = 1250;
			this.match(RegelSpraakParser.GELIJK_AAN);
			this.state = 1251;
			localctx._waarde = this.simpleExpressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleNaamwoord(): SimpleNaamwoordContext {
		let localctx: SimpleNaamwoordContext = new SimpleNaamwoordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, RegelSpraakParser.RULE_simpleNaamwoord);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1253;
			this.naamPhrase();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public consistentieregel(): ConsistentieregelContext {
		let localctx: ConsistentieregelContext = new ConsistentieregelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, RegelSpraakParser.RULE_consistentieregel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1255;
			this.match(RegelSpraakParser.CONSISTENTIEREGEL);
			this.state = 1256;
			this.naamwoord();
			this.state = 1266;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1257;
				this.uniekzijnResultaat();
				}
				break;
			case 2:
				{
				this.state = 1258;
				this.inconsistentResultaat();
				this.state = 1264;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 104:
					{
					this.state = 1259;
					this.voorwaardeDeel();
					this.state = 1261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===274) {
						{
						this.state = 1260;
						this.match(RegelSpraakParser.DOT);
						}
					}

					}
					break;
				case 274:
					{
					this.state = 1263;
					this.match(RegelSpraakParser.DOT);
					}
					break;
				case -1:
				case 28:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
					break;
				default:
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uniekzijnResultaat(): UniekzijnResultaatContext {
		let localctx: UniekzijnResultaatContext = new UniekzijnResultaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, RegelSpraakParser.RULE_uniekzijnResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1268;
			this.alleAttributenVanObjecttype();
			this.state = 1269;
			this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
			this.state = 1271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===274) {
				{
				this.state = 1270;
				this.match(RegelSpraakParser.DOT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alleAttributenVanObjecttype(): AlleAttributenVanObjecttypeContext {
		let localctx: AlleAttributenVanObjecttypeContext = new AlleAttributenVanObjecttypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, RegelSpraakParser.RULE_alleAttributenVanObjecttype);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1273;
			this.match(RegelSpraakParser.DE);
			this.state = 1274;
			this.naamwoord();
			this.state = 1275;
			this.match(RegelSpraakParser.VAN);
			this.state = 1276;
			this.match(RegelSpraakParser.ALLE);
			this.state = 1277;
			this.naamwoord();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inconsistentResultaat(): InconsistentResultaatContext {
		let localctx: InconsistentResultaatContext = new InconsistentResultaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, RegelSpraakParser.RULE_inconsistentResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1279;
				_la = this._input.LA(1);
				if(!(_la===205 || _la===210 || _la===245)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1282;
			this.naamwoord();
			this.state = 1283;
			this.match(RegelSpraakParser.IS_INCONSISTENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public voorwaardeDeel(): VoorwaardeDeelContext {
		let localctx: VoorwaardeDeelContext = new VoorwaardeDeelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, RegelSpraakParser.RULE_voorwaardeDeel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1285;
			this.match(RegelSpraakParser.INDIEN);
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1286;
				this.expressie();
				}
				break;
			case 2:
				{
				this.state = 1287;
				this.toplevelSamengesteldeVoorwaarde();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public toplevelSamengesteldeVoorwaarde(): ToplevelSamengesteldeVoorwaardeContext {
		let localctx: ToplevelSamengesteldeVoorwaardeContext = new ToplevelSamengesteldeVoorwaardeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, RegelSpraakParser.RULE_toplevelSamengesteldeVoorwaarde);
		let _la: number;
		try {
			this.state = 1332;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1290;
				this.match(RegelSpraakParser.ER_AAN);
				this.state = 1291;
				this.voorwaardeKwantificatie();
				this.state = 1292;
				_la = this._input.LA(1);
				if(!(_la===238 || _la===239)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1293;
				this.match(RegelSpraakParser.WORDT_VOLDAAN);
				this.state = 1294;
				this.match(RegelSpraakParser.COLON);
				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1295;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===279 || _la===289);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1304;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1300;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1301;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1302;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1303;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1306;
				this.match(RegelSpraakParser.AAN);
				this.state = 1307;
				this.voorwaardeKwantificatie();
				this.state = 1308;
				_la = this._input.LA(1);
				if(!(_la===238 || _la===239)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1309;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1310;
				this.match(RegelSpraakParser.COLON);
				this.state = 1312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1311;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===279 || _la===289);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1320;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1316;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1317;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1318;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1319;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1322;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1323;
				this.match(RegelSpraakParser.AAN);
				this.state = 1324;
				this.voorwaardeKwantificatie();
				this.state = 1325;
				_la = this._input.LA(1);
				if(!(_la===238 || _la===239)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1326;
				this.match(RegelSpraakParser.COLON);
				this.state = 1328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1327;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===279 || _la===289);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public voorwaardeKwantificatie(): VoorwaardeKwantificatieContext {
		let localctx: VoorwaardeKwantificatieContext = new VoorwaardeKwantificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, RegelSpraakParser.RULE_voorwaardeKwantificatie);
		let _la: number;
		try {
			this.state = 1349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 205:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1334;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 117:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1335;
				this.match(RegelSpraakParser.ALLE);
				}
				break;
			case 196:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1336;
				this.match(RegelSpraakParser.GEEN_VAN_DE);
				}
				break;
			case 150:
			case 151:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1337;
				_la = this._input.LA(1);
				if(!(_la===150 || _la===151)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1338;
				_la = this._input.LA(1);
				if(!(((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 16435) !== 0) || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1339;
				this.match(RegelSpraakParser.VAN);
				this.state = 1340;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 152:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1341;
				this.match(RegelSpraakParser.TEN_HOOGSTE);
				this.state = 1342;
				_la = this._input.LA(1);
				if(!(((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 16435) !== 0) || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1343;
				this.match(RegelSpraakParser.VAN);
				this.state = 1344;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 153:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1345;
				this.match(RegelSpraakParser.PRECIES);
				this.state = 1346;
				_la = this._input.LA(1);
				if(!(((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 16435) !== 0) || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1347;
				this.match(RegelSpraakParser.VAN);
				this.state = 1348;
				this.match(RegelSpraakParser.DE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public samengesteldeVoorwaardeOnderdeel(): SamengesteldeVoorwaardeOnderdeelContext {
		let localctx: SamengesteldeVoorwaardeOnderdeelContext = new SamengesteldeVoorwaardeOnderdeelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1351;
			this.outerBulletPrefix();
			this.state = 1354;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1352;
				this.elementaireVoorwaarde();
				}
				break;
			case 2:
				{
				this.state = 1353;
				this.genesteSamengesteldeVoorwaarde();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outerBulletPrefix(): OuterBulletPrefixContext {
		let localctx: OuterBulletPrefixContext = new OuterBulletPrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, RegelSpraakParser.RULE_outerBulletPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1356;
			_la = this._input.LA(1);
			if(!(_la===279 || _la===289)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nestedBulletPrefix(): NestedBulletPrefixContext {
		let localctx: NestedBulletPrefixContext = new NestedBulletPrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, RegelSpraakParser.RULE_nestedBulletPrefix);
		try {
			this.state = 1361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 284:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1358;
				this.match(RegelSpraakParser.DOUBLE_DOT);
				}
				break;
			case 279:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1359;
				this.match(RegelSpraakParser.BULLET);
				this.state = 1360;
				this.match(RegelSpraakParser.BULLET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bulletPrefix(): BulletPrefixContext {
		let localctx: BulletPrefixContext = new BulletPrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, RegelSpraakParser.RULE_bulletPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1363;
				_la = this._input.LA(1);
				if(!(((((_la - 279)) & ~0x1F) === 0 && ((1 << (_la - 279)) & 1059) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 1366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 279)) & ~0x1F) === 0 && ((1 << (_la - 279)) & 1059) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementaireVoorwaarde(): ElementaireVoorwaardeContext {
		let localctx: ElementaireVoorwaardeContext = new ElementaireVoorwaardeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, RegelSpraakParser.RULE_elementaireVoorwaarde);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1368;
			this.expressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public genesteSamengesteldeVoorwaarde(): GenesteSamengesteldeVoorwaardeContext {
		let localctx: GenesteSamengesteldeVoorwaardeContext = new GenesteSamengesteldeVoorwaardeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaarde);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1373;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1370;
				this.onderwerpReferentie();
				}
				break;
			case 2:
				{
				this.state = 1371;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 3:
				{
				this.state = 1372;
				this.match(RegelSpraakParser.ER);
				}
				break;
			}
			this.state = 1375;
			this.match(RegelSpraakParser.VOLDOET);
			this.state = 1376;
			this.match(RegelSpraakParser.AAN);
			this.state = 1377;
			this.voorwaardeKwantificatie();
			this.state = 1378;
			_la = this._input.LA(1);
			if(!(_la===238 || _la===239)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1379;
			this.match(RegelSpraakParser.COLON);
			this.state = 1381;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1380;
					this.genesteSamengesteldeVoorwaardeOnderdeel();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1383;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public genesteSamengesteldeVoorwaardeOnderdeel(): GenesteSamengesteldeVoorwaardeOnderdeelContext {
		let localctx: GenesteSamengesteldeVoorwaardeOnderdeelContext = new GenesteSamengesteldeVoorwaardeOnderdeelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeOnderdeel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1385;
			this.nestedBulletPrefix();
			this.state = 1388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1386;
				this.elementaireVoorwaarde();
				}
				break;
			case 2:
				{
				this.state = 1387;
				this.genesteSamengesteldeVoorwaarde();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public onderwerpReferentie(): OnderwerpReferentieContext {
		let localctx: OnderwerpReferentieContext = new OnderwerpReferentieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, RegelSpraakParser.RULE_onderwerpReferentie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1390;
			this.onderwerpBasis();
			this.state = 1393;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1391;
				_la = this._input.LA(1);
				if(!(_la===204 || _la===207)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1392;
				this.predicaat();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public onderwerpReferentieWithNumbers(): OnderwerpReferentieWithNumbersContext {
		let localctx: OnderwerpReferentieWithNumbersContext = new OnderwerpReferentieWithNumbersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, RegelSpraakParser.RULE_onderwerpReferentieWithNumbers);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1395;
			this.onderwerpBasisWithNumbers();
			this.state = 1398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===204 || _la===207) {
				{
				this.state = 1396;
				_la = this._input.LA(1);
				if(!(_la===204 || _la===207)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1397;
				this.predicaat();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public onderwerpBasis(): OnderwerpBasisContext {
		let localctx: OnderwerpBasisContext = new OnderwerpBasisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, RegelSpraakParser.RULE_onderwerpBasis);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1400;
			this.basisOnderwerp();
			this.state = 1406;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1401;
					this.voorzetsel();
					this.state = 1402;
					this.basisOnderwerp();
					}
					}
				}
				this.state = 1408;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public onderwerpBasisWithNumbers(): OnderwerpBasisWithNumbersContext {
		let localctx: OnderwerpBasisWithNumbersContext = new OnderwerpBasisWithNumbersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, RegelSpraakParser.RULE_onderwerpBasisWithNumbers);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1409;
			this.basisOnderwerpWithNumbers();
			this.state = 1415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				{
				this.state = 1410;
				this.voorzetsel();
				this.state = 1411;
				this.basisOnderwerpWithNumbers();
				}
				}
				this.state = 1417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basisOnderwerp(): BasisOnderwerpContext {
		let localctx: BasisOnderwerpContext = new BasisOnderwerpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, RegelSpraakParser.RULE_basisOnderwerp);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1425;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 112:
			case 205:
			case 208:
			case 210:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1418;
				_la = this._input.LA(1);
				if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1420;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1419;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1422;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 212:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1424;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basisOnderwerpWithNumbers(): BasisOnderwerpWithNumbersContext {
		let localctx: BasisOnderwerpWithNumbersContext = new BasisOnderwerpWithNumbersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, RegelSpraakParser.RULE_basisOnderwerpWithNumbers);
		let _la: number;
		try {
			this.state = 1434;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 112:
			case 205:
			case 208:
			case 210:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1427;
				_la = this._input.LA(1);
				if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1428;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 1431;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262 || _la===263);
				}
				break;
			case 212:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1433;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribuutReferentie(): AttribuutReferentieContext {
		let localctx: AttribuutReferentieContext = new AttribuutReferentieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, RegelSpraakParser.RULE_attribuutReferentie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1436;
			this.attribuutMetLidwoord();
			this.state = 1437;
			this.match(RegelSpraakParser.VAN);
			this.state = 1438;
			this.onderwerpReferentie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribuutMetLidwoord(): AttribuutMetLidwoordContext {
		let localctx: AttribuutMetLidwoordContext = new AttribuutMetLidwoordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, RegelSpraakParser.RULE_attribuutMetLidwoord);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1440;
			this.naamwoordNoIs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public kenmerkNaam(): KenmerkNaamContext {
		let localctx: KenmerkNaamContext = new KenmerkNaamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, RegelSpraakParser.RULE_kenmerkNaam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				this.state = 1442;
				this.voorzetsel();
				}
			}

			this.state = 1445;
			this.naamwoordWithNumbers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public kenmerkPhrase(): KenmerkPhraseContext {
		let localctx: KenmerkPhraseContext = new KenmerkPhraseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, RegelSpraakParser.RULE_kenmerkPhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				this.state = 1447;
				this.voorzetsel();
				}
			}

			this.state = 1451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
				{
				this.state = 1450;
				_la = this._input.LA(1);
				if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1453;
				this.identifierOrKeywordWithNumbers();
				}
				}
				this.state = 1456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262 || _la===263);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bezieldeReferentie(): BezieldeReferentieContext {
		let localctx: BezieldeReferentieContext = new BezieldeReferentieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, RegelSpraakParser.RULE_bezieldeReferentie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1458;
			_la = this._input.LA(1);
			if(!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1459;
			this.naamwoord();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregationSubject(): AggregationSubjectContext {
		let localctx: AggregationSubjectContext = new AggregationSubjectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, RegelSpraakParser.RULE_aggregationSubject);
		let _la: number;
		try {
			this.state = 1468;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1461;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1462;
				this.naamwoord();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1463;
				this.naamwoord();
				this.state = 1466;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
				case 1:
					{
					this.state = 1464;
					_la = this._input.LA(1);
					if(!(_la===204 || _la===207)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1465;
					this.predicaat();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public predicaat(): PredicaatContext {
		let localctx: PredicaatContext = new PredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, RegelSpraakParser.RULE_predicaat);
		try {
			this.state = 1472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 61:
			case 62:
			case 63:
			case 64:
			case 89:
			case 103:
			case 106:
			case 112:
			case 117:
			case 125:
			case 133:
			case 139:
			case 141:
			case 154:
			case 169:
			case 183:
			case 194:
			case 195:
			case 198:
			case 199:
			case 201:
			case 202:
			case 203:
			case 205:
			case 208:
			case 209:
			case 210:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 224:
			case 225:
			case 226:
			case 227:
			case 231:
			case 232:
			case 234:
			case 235:
			case 236:
			case 237:
			case 241:
			case 243:
			case 244:
			case 246:
			case 262:
			case 263:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1470;
				this.elementairPredicaat();
				}
				break;
			case 115:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1471;
				this.samengesteldPredicaat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementairPredicaat(): ElementairPredicaatContext {
		let localctx: ElementairPredicaatContext = new ElementairPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, RegelSpraakParser.RULE_elementairPredicaat);
		try {
			this.state = 1479;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1474;
				this.attribuutVergelijkingsPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1475;
				this.objectPredicaat();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1476;
				this.getalPredicaat();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1477;
				this.tekstPredicaat();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1478;
				this.datumPredicaat();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectPredicaat(): ObjectPredicaatContext {
		let localctx: ObjectPredicaatContext = new ObjectPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, RegelSpraakParser.RULE_objectPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1481;
			this.eenzijdigeObjectVergelijking();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eenzijdigeObjectVergelijking(): EenzijdigeObjectVergelijkingContext {
		let localctx: EenzijdigeObjectVergelijkingContext = new EenzijdigeObjectVergelijkingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, RegelSpraakParser.RULE_eenzijdigeObjectVergelijking);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1484;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				{
				this.state = 1483;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			}
			this.state = 1488;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1486;
				this.kenmerkNaam();
				}
				break;
			case 2:
				{
				this.state = 1487;
				this.rolNaam();
				}
				break;
			}
			this.state = 1490;
			_la = this._input.LA(1);
			if(!(_la===102 || _la===112)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rolNaam(): RolNaamContext {
		let localctx: RolNaamContext = new RolNaamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, RegelSpraakParser.RULE_rolNaam);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1492;
			this.naamwoord();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribuutVergelijkingsPredicaat(): AttribuutVergelijkingsPredicaatContext {
		let localctx: AttribuutVergelijkingsPredicaatContext = new AttribuutVergelijkingsPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, RegelSpraakParser.RULE_attribuutVergelijkingsPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1495;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1494;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			}
			this.state = 1497;
			localctx._attribuutNaam = this.naamwoord();
			this.state = 1498;
			this.match(RegelSpraakParser.HEBBEN);
			this.state = 1499;
			this.comparisonOperator();
			this.state = 1500;
			this.expressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getalPredicaat(): GetalPredicaatContext {
		let localctx: GetalPredicaatContext = new GetalPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, RegelSpraakParser.RULE_getalPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1502;
			this.getalVergelijkingsOperatorMeervoud();
			this.state = 1503;
			this.getalExpressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tekstPredicaat(): TekstPredicaatContext {
		let localctx: TekstPredicaatContext = new TekstPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, RegelSpraakParser.RULE_tekstPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1505;
			this.tekstVergelijkingsOperatorMeervoud();
			this.state = 1506;
			this.tekstExpressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datumPredicaat(): DatumPredicaatContext {
		let localctx: DatumPredicaatContext = new DatumPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, RegelSpraakParser.RULE_datumPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1508;
			this.datumVergelijkingsOperatorMeervoud();
			this.state = 1509;
			this.datumExpressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public samengesteldPredicaat(): SamengesteldPredicaatContext {
		let localctx: SamengesteldPredicaatContext = new SamengesteldPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, RegelSpraakParser.RULE_samengesteldPredicaat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1511;
			this.match(RegelSpraakParser.AAN);
			this.state = 1512;
			this.voorwaardeKwantificatie();
			this.state = 1513;
			_la = this._input.LA(1);
			if(!(_la===238 || _la===239)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1514;
			_la = this._input.LA(1);
			if(!(_la===146 || _la===147)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1515;
			this.match(RegelSpraakParser.COLON);
			this.state = 1517;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1516;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1519;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public samengesteldeVoorwaardeOnderdeelInPredicaat(): SamengesteldeVoorwaardeOnderdeelInPredicaatContext {
		let localctx: SamengesteldeVoorwaardeOnderdeelInPredicaatContext = new SamengesteldeVoorwaardeOnderdeelInPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeelInPredicaat);
		try {
			this.state = 1527;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1521;
				this.bulletPrefix();
				this.state = 1522;
				this.elementaireVoorwaardeInPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1524;
				this.bulletPrefix();
				this.state = 1525;
				this.genesteSamengesteldeVoorwaardeInPredicaat();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementaireVoorwaardeInPredicaat(): ElementaireVoorwaardeInPredicaatContext {
		let localctx: ElementaireVoorwaardeInPredicaatContext = new ElementaireVoorwaardeInPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, RegelSpraakParser.RULE_elementaireVoorwaardeInPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1529;
			this.vergelijkingInPredicaat();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public vergelijkingInPredicaat(): VergelijkingInPredicaatContext {
		let localctx: VergelijkingInPredicaatContext = new VergelijkingInPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, RegelSpraakParser.RULE_vergelijkingInPredicaat);
		let _la: number;
		try {
			this.state = 1549;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1533;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1531;
					this.attribuutReferentie();
					}
					break;
				case 2:
					{
					this.state = 1532;
					this.bezieldeReferentie();
					}
					break;
				}
				this.state = 1535;
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1536;
				this.kenmerkNaam();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1540;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1538;
					this.attribuutReferentie();
					}
					break;
				case 2:
					{
					this.state = 1539;
					this.bezieldeReferentie();
					}
					break;
				}
				this.state = 1542;
				this.comparisonOperator();
				this.state = 1543;
				this.expressie();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1545;
				this.onderwerpReferentie();
				this.state = 1546;
				this.eenzijdigeObjectVergelijking();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1548;
				this.eenzijdigeObjectVergelijking();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public genesteSamengesteldeVoorwaardeInPredicaat(): GenesteSamengesteldeVoorwaardeInPredicaatContext {
		let localctx: GenesteSamengesteldeVoorwaardeInPredicaatContext = new GenesteSamengesteldeVoorwaardeInPredicaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeInPredicaat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1555;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 147:
				{
				this.state = 1551;
				this.match(RegelSpraakParser.VOLDOET);
				}
				break;
			case 146:
				{
				this.state = 1552;
				this.match(RegelSpraakParser.VOLDOEN);
				}
				break;
			case 110:
				{
				this.state = 1553;
				this.match(RegelSpraakParser.WORDT);
				this.state = 1554;
				this.match(RegelSpraakParser.VOLDAAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1557;
			this.match(RegelSpraakParser.AAN);
			this.state = 1558;
			this.voorwaardeKwantificatie();
			this.state = 1559;
			_la = this._input.LA(1);
			if(!(_la===238 || _la===239)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1560;
			this.match(RegelSpraakParser.COLON);
			this.state = 1562;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1561;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1564;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getalVergelijkingsOperatorMeervoud(): GetalVergelijkingsOperatorMeervoudContext {
		let localctx: GetalVergelijkingsOperatorMeervoudContext = new GetalVergelijkingsOperatorMeervoudContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, RegelSpraakParser.RULE_getalVergelijkingsOperatorMeervoud);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1566;
			_la = this._input.LA(1);
			if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tekstVergelijkingsOperatorMeervoud(): TekstVergelijkingsOperatorMeervoudContext {
		let localctx: TekstVergelijkingsOperatorMeervoudContext = new TekstVergelijkingsOperatorMeervoudContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, RegelSpraakParser.RULE_tekstVergelijkingsOperatorMeervoud);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1568;
			_la = this._input.LA(1);
			if(!(_la===51 || _la===52)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datumVergelijkingsOperatorMeervoud(): DatumVergelijkingsOperatorMeervoudContext {
		let localctx: DatumVergelijkingsOperatorMeervoudContext = new DatumVergelijkingsOperatorMeervoudContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, RegelSpraakParser.RULE_datumVergelijkingsOperatorMeervoud);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1570;
			_la = this._input.LA(1);
			if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 15363) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getalExpressie(): GetalExpressieContext {
		let localctx: GetalExpressieContext = new GetalExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, RegelSpraakParser.RULE_getalExpressie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1572;
			this.expressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tekstExpressie(): TekstExpressieContext {
		let localctx: TekstExpressieContext = new TekstExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, RegelSpraakParser.RULE_tekstExpressie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1574;
			this.expressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datumExpressie(): DatumExpressieContext {
		let localctx: DatumExpressieContext = new DatumExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, RegelSpraakParser.RULE_datumExpressie);
		try {
			this.state = 1600;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1576;
				this.datumLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1577;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1578;
				this.match(RegelSpraakParser.REKENJAAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1579;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1580;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1581;
				this.primaryExpression(0);
				this.state = 1582;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1583;
				this.primaryExpression(0);
				this.state = 1584;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1585;
				this.primaryExpression(0);
				this.state = 1586;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1588;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1589;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1590;
				this.primaryExpression(0);
				this.state = 1591;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1593;
				this.attribuutReferentie();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1594;
				this.bezieldeReferentie();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1595;
				this.parameterMetLidwoord();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1596;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1597;
				this.expressie();
				this.state = 1598;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variabeleDeel(): VariabeleDeelContext {
		let localctx: VariabeleDeelContext = new VariabeleDeelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, RegelSpraakParser.RULE_variabeleDeel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1602;
			this.match(RegelSpraakParser.DAARBIJ_GELDT);
			this.state = 1606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===205 || _la===210 || _la===262) {
				{
				{
				this.state = 1603;
				this.variabeleToekenning();
				}
				}
				this.state = 1608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1609;
			this.match(RegelSpraakParser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variabeleToekenning(): VariabeleToekenningContext {
		let localctx: VariabeleToekenningContext = new VariabeleToekenningContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, RegelSpraakParser.RULE_variabeleToekenning);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===205 || _la===210) {
				{
				this.state = 1611;
				localctx._article = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===205 || _la===210)) {
				    localctx._article = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1614;
			localctx._varName = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 1615;
			this.match(RegelSpraakParser.IS);
			this.state = 1616;
			localctx._varExpr = this.variabeleExpressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variabeleExpressie(): VariabeleExpressieContext {
		let localctx: VariabeleExpressieContext = new VariabeleExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, RegelSpraakParser.RULE_variabeleExpressie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1618;
			this.primaryExpression(0);
			this.state = 1627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 67243011) !== 0)) {
				{
				{
				this.state = 1621;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 130:
				case 136:
				case 145:
					{
					this.state = 1619;
					this.additiveOperator();
					}
					break;
				case 119:
				case 120:
				case 129:
					{
					this.state = 1620;
					this.multiplicativeOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1623;
				this.primaryExpression(0);
				}
				}
				this.state = 1629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressie(): ExpressieContext {
		let localctx: ExpressieContext = new ExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, RegelSpraakParser.RULE_expressie);
		try {
			this.state = 1643;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				localctx = new ExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1630;
				this.logicalExpression();
				this.state = 1631;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1632;
				this.begrenzing();
				this.state = 1633;
				this.afronding();
				}
				break;
			case 2:
				localctx = new ExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1635;
				this.logicalExpression();
				this.state = 1636;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1637;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new ExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1639;
				this.logicalExpression();
				this.state = 1640;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1642;
				this.logicalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleExpressie(): SimpleExpressieContext {
		let localctx: SimpleExpressieContext = new SimpleExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, RegelSpraakParser.RULE_simpleExpressie);
		try {
			this.state = 1658;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				localctx = new SimpleExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1645;
				this.comparisonExpression();
				this.state = 1646;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1647;
				this.begrenzing();
				this.state = 1648;
				this.afronding();
				}
				break;
			case 2:
				localctx = new SimpleExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1650;
				this.comparisonExpression();
				this.state = 1651;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1652;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new SimpleExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1654;
				this.comparisonExpression();
				this.state = 1655;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprBaseContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1657;
				this.comparisonExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalExpression(): LogicalExpressionContext {
		let localctx: LogicalExpressionContext = new LogicalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, RegelSpraakParser.RULE_logicalExpression);
		let _la: number;
		try {
			localctx = new LogicalExprContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1660;
			(localctx as LogicalExprContext)._left = this.comparisonExpression();
			this.state = 1663;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				{
				this.state = 1661;
				(localctx as LogicalExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===209 || _la===222)) {
				    (localctx as LogicalExprContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1662;
				(localctx as LogicalExprContext)._right = this.logicalExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonExpression(): ComparisonExpressionContext {
		let localctx: ComparisonExpressionContext = new ComparisonExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, RegelSpraakParser.RULE_comparisonExpression);
		let _la: number;
		try {
			this.state = 1706;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				localctx = new IsDagsoortExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1665;
				(localctx as IsDagsoortExprContext)._left = this.additiveExpression();
				this.state = 1666;
				(localctx as IsDagsoortExprContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				    (localctx as IsDagsoortExprContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1667;
				(localctx as IsDagsoortExprContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===197 || _la===208)) {
				    (localctx as IsDagsoortExprContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1668;
				(localctx as IsDagsoortExprContext)._dagsoort = this.naamwoord();
				}
				break;
			case 2:
				localctx = new DagsoortVragendExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1670;
				(localctx as DagsoortVragendExprContext)._left = this.additiveExpression();
				this.state = 1671;
				(localctx as DagsoortVragendExprContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===197 || _la===208)) {
				    (localctx as DagsoortVragendExprContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1672;
				(localctx as DagsoortVragendExprContext)._dagsoort = this.naamwoord();
				this.state = 1673;
				(localctx as DagsoortVragendExprContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				    (localctx as DagsoortVragendExprContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 3:
				localctx = new SubordinateClauseExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1675;
				this.subordinateClauseExpression();
				}
				break;
			case 4:
				localctx = new PeriodeCheckExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1676;
				this.periodevergelijkingElementair();
				}
				break;
			case 5:
				localctx = new IsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1677;
				(localctx as IsKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1678;
				this.match(RegelSpraakParser.IS);
				this.state = 1679;
				this.naamwoordWithNumbers();
				}
				break;
			case 6:
				localctx = new HeeftKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1681;
				(localctx as HeeftKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1682;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1683;
				this.naamwoordWithNumbers();
				}
				break;
			case 7:
				localctx = new GelijkIsAanOfExprContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1685;
				(localctx as GelijkIsAanOfExprContext)._left = this.additiveExpression();
				this.state = 1686;
				(localctx as GelijkIsAanOfExprContext)._op = this.gelijkIsAanOperator();
				this.state = 1687;
				(localctx as GelijkIsAanOfExprContext)._firstValue = this.literalValue();
				this.state = 1692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1688;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1689;
					(localctx as GelijkIsAanOfExprContext)._literalValue = this.literalValue();
					(localctx as GelijkIsAanOfExprContext)._middleValues.push((localctx as GelijkIsAanOfExprContext)._literalValue);
					}
					}
					this.state = 1694;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1695;
				this.match(RegelSpraakParser.OF);
				this.state = 1696;
				(localctx as GelijkIsAanOfExprContext)._lastValue = this.literalValue();
				}
				break;
			case 8:
				localctx = new BinaryComparisonExprContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1698;
				(localctx as BinaryComparisonExprContext)._left = this.additiveExpression();
				this.state = 1702;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1699;
					this.comparisonOperator();
					this.state = 1700;
					(localctx as BinaryComparisonExprContext)._right = this.additiveExpression();
					}
					break;
				}
				}
				break;
			case 9:
				localctx = new UnaryConditionExprContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1704;
				this.unaryCondition();
				}
				break;
			case 10:
				localctx = new RegelStatusConditionExprContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1705;
				this.regelStatusCondition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literalValue(): LiteralValueContext {
		let localctx: LiteralValueContext = new LiteralValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, RegelSpraakParser.RULE_literalValue);
		try {
			this.state = 1717;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 268:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1708;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 267:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1709;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 263:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1710;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 1712;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1711;
					this.eenheidExpressie();
					}
					break;
				}
				}
				break;
			case 266:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1714;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 265:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1715;
				this.datumLiteral();
				}
				break;
			case 262:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1716;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gelijkIsAanOperator(): GelijkIsAanOperatorContext {
		let localctx: GelijkIsAanOperatorContext = new GelijkIsAanOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, RegelSpraakParser.RULE_gelijkIsAanOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1719;
			_la = this._input.LA(1);
			if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 131) !== 0) || _la===121)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, RegelSpraakParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1721;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 67108835) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 674533377) !== 0) || _la===213 || _la===251 || _la===252)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, RegelSpraakParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1723;
			localctx._left = this.multiplicativeExpression();
			this.state = 1729;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 199, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1724;
					this.additiveOperator();
					this.state = 1725;
					localctx._right = this.multiplicativeExpression();
					}
					}
				}
				this.state = 1731;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 199, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveOperator(): AdditiveOperatorContext {
		let localctx: AdditiveOperatorContext = new AdditiveOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, RegelSpraakParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1732;
			_la = this._input.LA(1);
			if(!(((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 32833) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, RegelSpraakParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1734;
			localctx._left = this.powerExpression();
			this.state = 1740;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1735;
					this.multiplicativeOperator();
					this.state = 1736;
					localctx._right = this.powerExpression();
					}
					}
				}
				this.state = 1742;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 200, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeOperator(): MultiplicativeOperatorContext {
		let localctx: MultiplicativeOperatorContext = new MultiplicativeOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, RegelSpraakParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1743;
			_la = this._input.LA(1);
			if(!(((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 1027) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public powerExpression(): PowerExpressionContext {
		let localctx: PowerExpressionContext = new PowerExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, RegelSpraakParser.RULE_powerExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1745;
			localctx._left = this.primaryExpression(0);
			this.state = 1751;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1746;
					this.powerOperator();
					this.state = 1747;
					localctx._right = this.primaryExpression(0);
					}
					}
				}
				this.state = 1753;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 201, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public powerOperator(): PowerOperatorContext {
		let localctx: PowerOperatorContext = new PowerOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, RegelSpraakParser.RULE_powerOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1754;
			_la = this._input.LA(1);
			if(!(_la===140 || _la===283)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = localctx;
		let _startState: number = 300;
		this.enterRecursionRule(localctx, 300, RegelSpraakParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2021;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1757;
				this.match(RegelSpraakParser.MIN);
				this.state = 1758;
				this.primaryExpression(55);
				}
				break;
			case 2:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1759;
				this.match(RegelSpraakParser.MINUS);
				this.state = 1760;
				this.primaryExpression(54);
				}
				break;
			case 3:
				{
				localctx = new UnaryNietExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1761;
				this.match(RegelSpraakParser.NIET);
				this.state = 1762;
				this.primaryExpression(53);
				}
				break;
			case 4:
				{
				localctx = new AbsTijdsduurFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1763;
				this.match(RegelSpraakParser.DE_ABSOLUTE_TIJDSDUUR_VAN);
				this.state = 1764;
				this.primaryExpression(0);
				this.state = 1765;
				this.match(RegelSpraakParser.TOT);
				this.state = 1766;
				this.primaryExpression(0);
				this.state = 1769;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1767;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1768;
					this.unitIdentifierWithTime();
					}
					break;
				}
				}
				break;
			case 5:
				{
				localctx = new TijdsduurFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1771;
				this.match(RegelSpraakParser.TIJDSDUUR_VAN);
				this.state = 1772;
				this.primaryExpression(0);
				this.state = 1773;
				this.match(RegelSpraakParser.TOT);
				this.state = 1774;
				this.primaryExpression(0);
				this.state = 1777;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1775;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1776;
					this.unitIdentifierWithTime();
					}
					break;
				}
				}
				break;
			case 6:
				{
				localctx = new SomFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1779;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1780;
				this.primaryExpression(0);
				this.state = 1785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1781;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1782;
					this.primaryExpression(0);
					}
					}
					this.state = 1787;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1788;
				this.match(RegelSpraakParser.EN);
				this.state = 1789;
				this.primaryExpression(50);
				}
				break;
			case 7:
				{
				localctx = new SomAlleExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1791;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1792;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1793;
				this.naamwoord();
				}
				break;
			case 8:
				{
				localctx = new SomAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1794;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1795;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1796;
				this.attribuutReferentie();
				}
				break;
			case 9:
				{
				localctx = new AantalFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1800;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 210:
					{
					this.state = 1797;
					this.match(RegelSpraakParser.HET);
					this.state = 1798;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				case 183:
					{
					this.state = 1799;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1802;
				this.aggregationSubject();
				}
				break;
			case 10:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1803;
				this.match(RegelSpraakParser.HET);
				this.state = 1804;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1805;
				this.attribuutReferentie();
				}
				break;
			case 11:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1806;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1807;
				this.attribuutReferentie();
				}
				break;
			case 12:
				{
				localctx = new PercentageFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1814;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 263:
					{
					this.state = 1808;
					this.match(RegelSpraakParser.NUMBER);
					this.state = 1811;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 278:
						{
						this.state = 1809;
						this.match(RegelSpraakParser.PERCENT_SIGN);
						}
						break;
					case 262:
						{
						this.state = 1810;
						(localctx as PercentageFuncExprContext)._p = this.match(RegelSpraakParser.IDENTIFIER);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case 266:
					{
					this.state = 1813;
					this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1816;
				this.match(RegelSpraakParser.VAN);
				this.state = 1817;
				this.primaryExpression(44);
				}
				break;
			case 13:
				{
				localctx = new PercentageOfExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1818;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				this.state = 1819;
				this.match(RegelSpraakParser.VAN);
				this.state = 1820;
				this.primaryExpression(43);
				}
				break;
			case 14:
				{
				localctx = new ConcatenatieExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1821;
				this.match(RegelSpraakParser.CONCATENATIE_VAN);
				this.state = 1822;
				this.primaryExpression(0);
				this.state = 1827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1823;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1824;
					this.primaryExpression(0);
					}
					}
					this.state = 1829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1830;
				_la = this._input.LA(1);
				if(!(_la===209 || _la===222)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1831;
				this.primaryExpression(39);
				}
				break;
			case 15:
				{
				localctx = new WortelFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1833;
				this.match(RegelSpraakParser.DE_WORTEL_VAN);
				this.state = 1834;
				this.primaryExpression(37);
				}
				break;
			case 16:
				{
				localctx = new AbsValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1835;
				this.match(RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN);
				this.state = 1836;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1837;
				this.expressie();
				this.state = 1838;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 17:
				{
				localctx = new MinValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1840;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1841;
				this.primaryExpression(0);
				this.state = 1846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1842;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1843;
					this.primaryExpression(0);
					}
					}
					this.state = 1848;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1849;
				this.match(RegelSpraakParser.EN);
				this.state = 1850;
				this.primaryExpression(35);
				}
				break;
			case 18:
				{
				localctx = new MinAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1852;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1853;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1854;
				this.attribuutReferentie();
				}
				break;
			case 19:
				{
				localctx = new MaxValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1855;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1856;
				this.primaryExpression(0);
				this.state = 1861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1857;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1858;
					this.primaryExpression(0);
					}
					}
					this.state = 1863;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1864;
				this.match(RegelSpraakParser.EN);
				this.state = 1865;
				this.primaryExpression(33);
				}
				break;
			case 20:
				{
				localctx = new MaxAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1867;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1868;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1869;
				this.attribuutReferentie();
				}
				break;
			case 21:
				{
				localctx = new JaarUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1870;
				this.match(RegelSpraakParser.HET);
				this.state = 1871;
				this.match(RegelSpraakParser.JAAR);
				this.state = 1872;
				this.match(RegelSpraakParser.UIT);
				this.state = 1873;
				this.primaryExpression(31);
				}
				break;
			case 22:
				{
				localctx = new MaandUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1874;
				this.match(RegelSpraakParser.DE);
				this.state = 1875;
				this.match(RegelSpraakParser.MAAND);
				this.state = 1876;
				this.match(RegelSpraakParser.UIT);
				this.state = 1877;
				this.primaryExpression(30);
				}
				break;
			case 23:
				{
				localctx = new DagUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1878;
				this.match(RegelSpraakParser.DE);
				this.state = 1879;
				this.match(RegelSpraakParser.DAG);
				this.state = 1880;
				this.match(RegelSpraakParser.UIT);
				this.state = 1881;
				this.primaryExpression(29);
				}
				break;
			case 24:
				{
				localctx = new DatumMetFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1882;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1883;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1884;
				this.primaryExpression(0);
				this.state = 1885;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1886;
				this.primaryExpression(0);
				this.state = 1887;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1888;
				this.primaryExpression(0);
				this.state = 1889;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 25:
				{
				localctx = new PasenFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1891;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1892;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1893;
				this.primaryExpression(0);
				this.state = 1894;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 26:
				{
				localctx = new DateCalcExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1896;
				this.datumExpressie();
				this.state = 1897;
				_la = this._input.LA(1);
				if(!(_la===130 || _la===136)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1898;
				this.primaryExpression(0);
				this.state = 1899;
				this.timeUnit();
				}
				break;
			case 27:
				{
				localctx = new EersteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1901;
				this.match(RegelSpraakParser.EERSTE_VAN);
				this.state = 1902;
				this.primaryExpression(0);
				this.state = 1907;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1903;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1904;
					this.primaryExpression(0);
					}
					}
					this.state = 1909;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1910;
				this.match(RegelSpraakParser.EN);
				this.state = 1911;
				this.primaryExpression(25);
				}
				break;
			case 28:
				{
				localctx = new LaatsteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1913;
				this.match(RegelSpraakParser.LAATSTE_VAN);
				this.state = 1914;
				this.primaryExpression(0);
				this.state = 1919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1915;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1916;
					this.primaryExpression(0);
					}
					}
					this.state = 1921;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1922;
				this.match(RegelSpraakParser.EN);
				this.state = 1923;
				this.primaryExpression(24);
				}
				break;
			case 29:
				{
				localctx = new TotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1925;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1926;
				this.expressie();
				this.state = 1928;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 1927;
					this.conditieBijExpressie();
					}
					break;
				}
				}
				break;
			case 30:
				{
				localctx = new HetAantalDagenInExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1930;
				this.match(RegelSpraakParser.HET);
				this.state = 1931;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1932;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 1933;
				this.match(RegelSpraakParser.IN);
				this.state = 1942;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 205:
				case 217:
					{
					this.state = 1935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===205) {
						{
						this.state = 1934;
						this.match(RegelSpraakParser.DE);
						}
					}

					this.state = 1937;
					this.match(RegelSpraakParser.MAAND);
					}
					break;
				case 210:
				case 214:
					{
					this.state = 1939;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===210) {
						{
						this.state = 1938;
						this.match(RegelSpraakParser.HET);
						}
					}

					this.state = 1941;
					this.match(RegelSpraakParser.JAAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1944;
				this.match(RegelSpraakParser.DAT);
				this.state = 1945;
				this.expressie();
				}
				break;
			case 31:
				{
				localctx = new CapitalizedTotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1946;
					this.identifier();
					}
					}
					this.state = 1949;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 1951;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1952;
				this.expressie();
				this.state = 1954;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
				case 1:
					{
					this.state = 1953;
					this.conditieBijExpressie();
					}
					break;
				}
				}
				break;
			case 32:
				{
				localctx = new TijdsevenredigDeelExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1956;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 1957;
				_la = this._input.LA(1);
				if(!(_la===214 || _la===217)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1958;
				this.match(RegelSpraakParser.VAN);
				this.state = 1959;
				this.expressie();
				this.state = 1961;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
				case 1:
					{
					this.state = 1960;
					this.conditieBijExpressie();
					}
					break;
				}
				}
				break;
			case 33:
				{
				localctx = new CapitalizedTijdsevenredigDeelExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1963;
					this.identifier();
					}
					}
					this.state = 1966;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 1968;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 1969;
				_la = this._input.LA(1);
				if(!(_la===214 || _la===217)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1970;
				this.match(RegelSpraakParser.VAN);
				this.state = 1971;
				this.expressie();
				this.state = 1973;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1972;
					this.conditieBijExpressie();
					}
					break;
				}
				}
				break;
			case 34:
				{
				localctx = new DimensieAggExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1977;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 183:
				case 188:
				case 210:
					{
					this.state = 1975;
					this.getalAggregatieFunctie();
					}
					break;
				case 184:
				case 186:
					{
					this.state = 1976;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1979;
				this.attribuutMetLidwoord();
				this.state = 1980;
				this.dimensieSelectie();
				this.state = 1982;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
				case 1:
					{
					this.state = 1981;
					this.match(RegelSpraakParser.OF_NUL_ALS_DIE_ER_NIET_ZIJN);
					}
					break;
				}
				}
				break;
			case 35:
				{
				localctx = new DimensieRangeAggExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1986;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 183:
				case 188:
				case 210:
					{
					this.state = 1984;
					this.getalAggregatieFunctie();
					}
					break;
				case 184:
				case 186:
					{
					this.state = 1985;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1990;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1988;
					this.bezieldeReferentie();
					}
					break;
				case 2:
					{
					this.state = 1989;
					this.attribuutReferentie();
					}
					break;
				}
				this.state = 1992;
				this.match(RegelSpraakParser.VANAF);
				this.state = 1993;
				this.naamwoord();
				this.state = 1994;
				this.match(RegelSpraakParser.TM);
				this.state = 1995;
				this.naamwoord();
				this.state = 1997;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
				case 1:
					{
					this.state = 1996;
					this.match(RegelSpraakParser.DOT);
					}
					break;
				}
				}
				break;
			case 36:
				{
				localctx = new NumberLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1999;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 2001;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 2000;
					this.eenheidExpressie();
					}
					break;
				}
				}
				break;
			case 37:
				{
				localctx = new RekendatumKeywordExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2003;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 38:
				{
				localctx = new IdentifierExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2004;
				this.identifier();
				}
				break;
			case 39:
				{
				localctx = new BezieldeRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2005;
				this.bezieldeReferentie();
				}
				break;
			case 40:
				{
				localctx = new AttrRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2006;
				this.attribuutReferentie();
				}
				break;
			case 41:
				{
				localctx = new OnderwerpRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2007;
				this.onderwerpReferentie();
				}
				break;
			case 42:
				{
				localctx = new NaamwoordExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2008;
				this.naamwoord();
				}
				break;
			case 43:
				{
				localctx = new ParamRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2009;
				this.parameterMetLidwoord();
				}
				break;
			case 44:
				{
				localctx = new PercentageLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2010;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 45:
				{
				localctx = new StringLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2011;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 46:
				{
				localctx = new EnumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2012;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 47:
				{
				localctx = new DatumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2013;
				this.datumLiteral();
				}
				break;
			case 48:
				{
				localctx = new BooleanTrueLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2014;
				this.match(RegelSpraakParser.WAAR);
				}
				break;
			case 49:
				{
				localctx = new BooleanFalseLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2015;
				this.match(RegelSpraakParser.ONWAAR);
				}
				break;
			case 50:
				{
				localctx = new PronounExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2016;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 51:
				{
				localctx = new ParenExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2017;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 2018;
				this.expressie();
				this.state = 2019;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2045;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2043;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
					case 1:
						{
						localctx = new SimpleConcatenatieExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2023;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 2026;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 2024;
							this.match(RegelSpraakParser.COMMA);
							this.state = 2025;
							this.primaryExpression(0);
							}
							}
							this.state = 2028;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la===273);
						this.state = 2030;
						_la = this._input.LA(1);
						if(!(_la===209 || _la===222)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 2031;
						this.primaryExpression(39);
						}
						break;
					case 2:
						{
						localctx = new AfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2033;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 2034;
						this.afronding();
						}
						break;
					case 3:
						{
						localctx = new BegrenzingAfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2035;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 2036;
						this.match(RegelSpraakParser.COMMA);
						this.state = 2037;
						this.begrenzing();
						this.state = 2038;
						this.afronding();
						}
						break;
					case 4:
						{
						localctx = new BegrenzingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2040;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 2041;
						this.match(RegelSpraakParser.COMMA);
						this.state = 2042;
						this.begrenzing();
						}
						break;
					}
					}
				}
				this.state = 2047;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public afronding(): AfrondingContext {
		let localctx: AfrondingContext = new AfrondingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, RegelSpraakParser.RULE_afronding);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2048;
			_la = this._input.LA(1);
			if(!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 131267) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2049;
			this.match(RegelSpraakParser.AFGEROND_OP);
			this.state = 2050;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 2051;
			this.match(RegelSpraakParser.DECIMALEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public begrenzing(): BegrenzingContext {
		let localctx: BegrenzingContext = new BegrenzingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, RegelSpraakParser.RULE_begrenzing);
		try {
			this.state = 2059;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2053;
				this.begrenzingMinimum();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2054;
				this.begrenzingMaximum();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2055;
				this.begrenzingMinimum();
				this.state = 2056;
				this.match(RegelSpraakParser.EN);
				this.state = 2057;
				this.begrenzingMaximum();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public begrenzingMinimum(): BegrenzingMinimumContext {
		let localctx: BegrenzingMinimumContext = new BegrenzingMinimumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, RegelSpraakParser.RULE_begrenzingMinimum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2061;
			this.match(RegelSpraakParser.MET_EEN_MINIMUM_VAN);
			this.state = 2062;
			this.expressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public begrenzingMaximum(): BegrenzingMaximumContext {
		let localctx: BegrenzingMaximumContext = new BegrenzingMaximumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, RegelSpraakParser.RULE_begrenzingMaximum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2064;
			this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
			this.state = 2065;
			this.expressie();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditieBijExpressie(): ConditieBijExpressieContext {
		let localctx: ConditieBijExpressieContext = new ConditieBijExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, RegelSpraakParser.RULE_conditieBijExpressie);
		try {
			this.state = 2070;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2067;
				this.match(RegelSpraakParser.GEDURENDE_DE_TIJD_DAT);
				this.state = 2068;
				localctx._condition = this.expressie();
				}
				break;
			case 139:
			case 141:
			case 143:
			case 237:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2069;
				this.periodevergelijkingEnkelvoudig();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public periodevergelijkingElementair(): PeriodevergelijkingElementairContext {
		let localctx: PeriodevergelijkingElementairContext = new PeriodevergelijkingElementairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, RegelSpraakParser.RULE_periodevergelijkingElementair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2072;
			this.match(RegelSpraakParser.HET_IS_DE_PERIODE);
			this.state = 2073;
			this.periodevergelijkingEnkelvoudig();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public periodevergelijkingEnkelvoudig(): PeriodevergelijkingEnkelvoudigContext {
		let localctx: PeriodevergelijkingEnkelvoudigContext = new PeriodevergelijkingEnkelvoudigContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, RegelSpraakParser.RULE_periodevergelijkingEnkelvoudig);
		try {
			this.state = 2091;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2075;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2076;
				this.datumExpressie();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2077;
				this.match(RegelSpraakParser.VAN);
				this.state = 2078;
				this.datumExpressie();
				this.state = 2079;
				this.match(RegelSpraakParser.TOT);
				this.state = 2080;
				this.datumExpressie();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2082;
				this.match(RegelSpraakParser.VAN);
				this.state = 2083;
				this.datumExpressie();
				this.state = 2084;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2085;
				this.datumExpressie();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2087;
				this.match(RegelSpraakParser.TOT);
				this.state = 2088;
				this.datumExpressie();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2089;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2090;
				this.datumExpressie();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public periodeDefinitie(): PeriodeDefinitieContext {
		let localctx: PeriodeDefinitieContext = new PeriodeDefinitieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, RegelSpraakParser.RULE_periodeDefinitie);
		try {
			this.state = 2109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				localctx = new VanafPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2093;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2094;
				this.dateExpression();
				}
				break;
			case 2:
				localctx = new TotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2095;
				this.match(RegelSpraakParser.TOT);
				this.state = 2096;
				this.dateExpression();
				}
				break;
			case 3:
				localctx = new TotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2097;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2098;
				this.dateExpression();
				}
				break;
			case 4:
				localctx = new VanTotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2099;
				this.match(RegelSpraakParser.VAN);
				this.state = 2100;
				this.dateExpression();
				this.state = 2101;
				this.match(RegelSpraakParser.TOT);
				this.state = 2102;
				this.dateExpression();
				}
				break;
			case 5:
				localctx = new VanTotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2104;
				this.match(RegelSpraakParser.VAN);
				this.state = 2105;
				this.dateExpression();
				this.state = 2106;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2107;
				this.dateExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dateExpression(): DateExpressionContext {
		let localctx: DateExpressionContext = new DateExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, RegelSpraakParser.RULE_dateExpression);
		try {
			this.state = 2115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2111;
				this.datumLiteral();
				}
				break;
			case 228:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2112;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 229:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2113;
				this.match(RegelSpraakParser.REKENJAAR);
				}
				break;
			case 42:
			case 89:
			case 103:
			case 112:
			case 117:
			case 125:
			case 133:
			case 154:
			case 183:
			case 194:
			case 195:
			case 198:
			case 199:
			case 202:
			case 203:
			case 205:
			case 208:
			case 210:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 225:
			case 227:
			case 231:
			case 232:
			case 235:
			case 236:
			case 243:
			case 244:
			case 246:
			case 262:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2114;
				this.attribuutReferentie();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getalAggregatieFunctie(): GetalAggregatieFunctieContext {
		let localctx: GetalAggregatieFunctieContext = new GetalAggregatieFunctieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, RegelSpraakParser.RULE_getalAggregatieFunctie);
		try {
			this.state = 2123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 210:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2117;
				this.match(RegelSpraakParser.HET);
				this.state = 2118;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 183:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2119;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2120;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2121;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				}
				break;
			case 188:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2122;
				this.match(RegelSpraakParser.SOM_VAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datumAggregatieFunctie(): DatumAggregatieFunctieContext {
		let localctx: DatumAggregatieFunctieContext = new DatumAggregatieFunctieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, RegelSpraakParser.RULE_datumAggregatieFunctie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2125;
			_la = this._input.LA(1);
			if(!(_la===184 || _la===186)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensieSelectie(): DimensieSelectieContext {
		let localctx: DimensieSelectieContext = new DimensieSelectieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, RegelSpraakParser.RULE_dimensieSelectie);
		try {
			this.state = 2137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 226:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2127;
				this.match(RegelSpraakParser.OVER);
				this.state = 2131;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 2128;
					this.aggregerenOverAlleDimensies();
					}
					break;
				case 2:
					{
					this.state = 2129;
					this.aggregerenOverVerzameling();
					}
					break;
				case 3:
					{
					this.state = 2130;
					this.aggregerenOverBereik();
					}
					break;
				}
				this.state = 2133;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			case 237:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2135;
				this.match(RegelSpraakParser.VAN);
				this.state = 2136;
				this.aggregerenOverAlleDimensies();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregerenOverAlleDimensies(): AggregerenOverAlleDimensiesContext {
		let localctx: AggregerenOverAlleDimensiesContext = new AggregerenOverAlleDimensiesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, RegelSpraakParser.RULE_aggregerenOverAlleDimensies);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2139;
			this.match(RegelSpraakParser.ALLE);
			this.state = 2140;
			this.naamwoord();
			this.state = 2143;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				this.state = 2141;
				_la = this._input.LA(1);
				if(!(_la===204 || _la===207)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2142;
				this.predicaat();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregerenOverVerzameling(): AggregerenOverVerzamelingContext {
		let localctx: AggregerenOverVerzamelingContext = new AggregerenOverVerzamelingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, RegelSpraakParser.RULE_aggregerenOverVerzameling);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2145;
			this.match(RegelSpraakParser.DE);
			this.state = 2146;
			this.naamwoord();
			this.state = 2147;
			this.match(RegelSpraakParser.VANAF);
			this.state = 2148;
			this.naamwoord();
			this.state = 2149;
			this.match(RegelSpraakParser.TM);
			this.state = 2150;
			this.naamwoord();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregerenOverBereik(): AggregerenOverBereikContext {
		let localctx: AggregerenOverBereikContext = new AggregerenOverBereikContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, RegelSpraakParser.RULE_aggregerenOverBereik);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2152;
			this.match(RegelSpraakParser.DE);
			this.state = 2153;
			this.naamwoord();
			this.state = 2154;
			this.match(RegelSpraakParser.IN);
			this.state = 2155;
			this.match(RegelSpraakParser.LBRACE);
			this.state = 2156;
			this.naamwoord();
			this.state = 2161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===273) {
				{
				{
				this.state = 2157;
				this.match(RegelSpraakParser.COMMA);
				this.state = 2158;
				this.naamwoord();
				}
				}
				this.state = 2163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2164;
			this.match(RegelSpraakParser.EN);
			this.state = 2165;
			this.naamwoord();
			this.state = 2166;
			this.match(RegelSpraakParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryCondition(): UnaryConditionContext {
		let localctx: UnaryConditionContext = new UnaryConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, RegelSpraakParser.RULE_unaryCondition);
		let _la: number;
		try {
			this.state = 2194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				localctx = new UnaryCheckConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2168;
				(localctx as UnaryCheckConditionContext)._expr = this.primaryExpression(0);
				this.state = 2169;
				(localctx as UnaryCheckConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 61455) !== 0))) {
				    (localctx as UnaryCheckConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				localctx = new UnaryCheckVragendConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2171;
				(localctx as UnaryCheckVragendConditionContext)._expr = this.primaryExpression(0);
				this.state = 2172;
				(localctx as UnaryCheckVragendConditionContext)._check = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===122 || _la===128)) {
				    (localctx as UnaryCheckVragendConditionContext)._check = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2173;
				(localctx as UnaryCheckVragendConditionContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				    (localctx as UnaryCheckVragendConditionContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 3:
				localctx = new UnaryNumeriekExactConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2175;
				(localctx as UnaryNumeriekExactConditionContext)._expr = this.primaryExpression(0);
				this.state = 2176;
				(localctx as UnaryNumeriekExactConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 15) !== 0))) {
				    (localctx as UnaryNumeriekExactConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2177;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 2178;
				this.match(RegelSpraakParser.CIJFERS);
				}
				break;
			case 4:
				localctx = new UnaryKenmerkConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2180;
				(localctx as UnaryKenmerkConditionContext)._expr = this.primaryExpression(0);
				this.state = 2181;
				(localctx as UnaryKenmerkConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 85) !== 0))) {
				    (localctx as UnaryKenmerkConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2182;
				(localctx as UnaryKenmerkConditionContext)._kenmerk = this.identifier();
				}
				break;
			case 5:
				localctx = new UnaryRolConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2184;
				(localctx as UnaryRolConditionContext)._expr = this.primaryExpression(0);
				this.state = 2185;
				(localctx as UnaryRolConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 85) !== 0))) {
				    (localctx as UnaryRolConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2186;
				(localctx as UnaryRolConditionContext)._rol = this.identifier();
				}
				break;
			case 6:
				localctx = new UnaryUniekConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2188;
				(localctx as UnaryUniekConditionContext)._ref = this.onderwerpReferentie();
				this.state = 2189;
				this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
				}
				break;
			case 7:
				localctx = new UnaryInconsistentDataConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2191;
				(localctx as UnaryInconsistentDataConditionContext)._expr = this.primaryExpression(0);
				this.state = 2192;
				this.match(RegelSpraakParser.IS_INCONSISTENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regelStatusCondition(): RegelStatusConditionContext {
		let localctx: RegelStatusConditionContext = new RegelStatusConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, RegelSpraakParser.RULE_regelStatusCondition);
		try {
			this.state = 2204;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				localctx = new RegelStatusGevuurdCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2196;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2197;
				(localctx as RegelStatusGevuurdCheckContext)._name = this.regelversieNaam();
				this.state = 2198;
				this.match(RegelSpraakParser.IS_GEVUURD);
				}
				break;
			case 2:
				localctx = new RegelStatusInconsistentCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2200;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2201;
				(localctx as RegelStatusInconsistentCheckContext)._name = this.regelversieNaam();
				this.state = 2202;
				this.match(RegelSpraakParser.IS_INCONSISTENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regelversieNaam(): RegelversieNaamContext {
		let localctx: RegelversieNaamContext = new RegelversieNaamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, RegelSpraakParser.RULE_regelversieNaam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 2208;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 42:
				case 89:
				case 103:
				case 106:
				case 112:
				case 117:
				case 125:
				case 133:
				case 154:
				case 183:
				case 194:
				case 195:
				case 198:
				case 199:
				case 202:
				case 203:
				case 205:
				case 208:
				case 210:
				case 214:
				case 215:
				case 216:
				case 217:
				case 218:
				case 219:
				case 220:
				case 221:
				case 225:
				case 227:
				case 231:
				case 232:
				case 235:
				case 236:
				case 243:
				case 244:
				case 246:
				case 262:
					{
					this.state = 2206;
					this.naamwoord();
					}
					break;
				case 197:
					{
					this.state = 2207;
					this.match(RegelSpraakParser.GEEN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 2210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===42 || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 276971521) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & 536871169) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2321143809) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subordinateClauseExpression(): SubordinateClauseExpressionContext {
		let localctx: SubordinateClauseExpressionContext = new SubordinateClauseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, RegelSpraakParser.RULE_subordinateClauseExpression);
		try {
			this.state = 2224;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				localctx = new SubordinateHasExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2212;
				(localctx as SubordinateHasExprContext)._subject = this.onderwerpReferentie();
				this.state = 2213;
				(localctx as SubordinateHasExprContext)._object = this.naamwoordWithNumbers();
				this.state = 2214;
				(localctx as SubordinateHasExprContext)._verb = this.match(RegelSpraakParser.HEEFT);
				}
				break;
			case 2:
				localctx = new SubordinateIsWithExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2216;
				(localctx as SubordinateIsWithExprContext)._subject = this.onderwerpReferentie();
				this.state = 2217;
				(localctx as SubordinateIsWithExprContext)._prepPhrase = this.naamwoordWithNumbers();
				this.state = 2218;
				(localctx as SubordinateIsWithExprContext)._verb = this.match(RegelSpraakParser.IS);
				}
				break;
			case 3:
				localctx = new SubordinateIsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2220;
				(localctx as SubordinateIsKenmerkExprContext)._subject = this.onderwerpReferentie();
				this.state = 2221;
				(localctx as SubordinateIsKenmerkExprContext)._verb = this.match(RegelSpraakParser.IS);
				this.state = 2222;
				(localctx as SubordinateIsKenmerkExprContext)._kenmerk = this.naamwoordWithNumbers();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dagsoortDefinition(): DagsoortDefinitionContext {
		let localctx: DagsoortDefinitionContext = new DagsoortDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, RegelSpraakParser.RULE_dagsoortDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2226;
			this.match(RegelSpraakParser.DAGSOORT);
			this.state = 2227;
			this.naamwoord();
			this.state = 2235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 2228;
				this.match(RegelSpraakParser.MV_START);
				this.state = 2230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2229;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 2232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 2234;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 2238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 2237;
				this.match(RegelSpraakParser.SEMICOLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tekstreeksExpr(): TekstreeksExprContext {
		let localctx: TekstreeksExprContext = new TekstreeksExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, RegelSpraakParser.RULE_tekstreeksExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2240;
			this.match(RegelSpraakParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verdelingResultaat(): VerdelingResultaatContext {
		let localctx: VerdelingResultaatContext = new VerdelingResultaatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, RegelSpraakParser.RULE_verdelingResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2242;
			localctx._sourceAmount = this.expressie();
			this.state = 2243;
			this.match(RegelSpraakParser.WORDT_VERDEELD_OVER);
			this.state = 2244;
			localctx._targetCollection = this.expressie();
			this.state = 2245;
			this.match(RegelSpraakParser.COMMA);
			this.state = 2246;
			this.match(RegelSpraakParser.WAARBIJ_WORDT_VERDEELD);
			this.state = 2249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 33:
			case 34:
			case 35:
			case 116:
			case 191:
				{
				this.state = 2247;
				this.verdelingMethodeSimple();
				}
				break;
			case 275:
				{
				this.state = 2248;
				this.verdelingMethodeMultiLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2251;
				this.verdelingRest();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verdelingMethodeSimple(): VerdelingMethodeSimpleContext {
		let localctx: VerdelingMethodeSimpleContext = new VerdelingMethodeSimpleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, RegelSpraakParser.RULE_verdelingMethodeSimple);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2254;
			this.verdelingMethode();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verdelingMethodeMultiLine(): VerdelingMethodeMultiLineContext {
		let localctx: VerdelingMethodeMultiLineContext = new VerdelingMethodeMultiLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, RegelSpraakParser.RULE_verdelingMethodeMultiLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2256;
			this.match(RegelSpraakParser.COLON);
			this.state = 2257;
			this.verdelingMethodeBulletList();
			this.state = 2259;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				{
				this.state = 2258;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verdelingMethodeBulletList(): VerdelingMethodeBulletListContext {
		let localctx: VerdelingMethodeBulletListContext = new VerdelingMethodeBulletListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, RegelSpraakParser.RULE_verdelingMethodeBulletList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2261;
			this.verdelingMethodeBullet();
			this.state = 2265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===289) {
				{
				{
				this.state = 2262;
				this.verdelingMethodeBullet();
				}
				}
				this.state = 2267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verdelingMethodeBullet(): VerdelingMethodeBulletContext {
		let localctx: VerdelingMethodeBulletContext = new VerdelingMethodeBulletContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, RegelSpraakParser.RULE_verdelingMethodeBullet);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2268;
			this.match(RegelSpraakParser.MINUS);
			this.state = 2269;
			this.verdelingMethode();
			this.state = 2271;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				{
				this.state = 2270;
				_la = this._input.LA(1);
				if(!(_la===273 || _la===274)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verdelingMethode(): VerdelingMethodeContext {
		let localctx: VerdelingMethodeContext = new VerdelingMethodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, RegelSpraakParser.RULE_verdelingMethode);
		let _la: number;
		try {
			this.state = 2287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 191:
				localctx = new VerdelingGelijkeDelenContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2273;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 35:
				localctx = new VerdelingNaarRatoContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2274;
				this.match(RegelSpraakParser.NAAR_RATO_VAN);
				this.state = 2275;
				(localctx as VerdelingNaarRatoContext)._ratioExpression = this.expressie();
				}
				break;
			case 34:
				localctx = new VerdelingOpVolgordeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2276;
				this.match(RegelSpraakParser.OP_VOLGORDE_VAN);
				this.state = 2277;
				(localctx as VerdelingOpVolgordeContext)._orderDirection = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===190 || _la===193)) {
				    (localctx as VerdelingOpVolgordeContext)._orderDirection = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2278;
				(localctx as VerdelingOpVolgordeContext)._orderExpression = this.expressie();
				}
				break;
			case 33:
				localctx = new VerdelingTieBreakContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2279;
				this.match(RegelSpraakParser.BIJ_EVEN_GROOT_CRITERIUM);
				this.state = 2280;
				(localctx as VerdelingTieBreakContext)._tieBreakMethod = this.verdelingMethode();
				}
				break;
			case 21:
				localctx = new VerdelingMaximumContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2281;
				this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
				this.state = 2282;
				(localctx as VerdelingMaximumContext)._maxExpression = this.attribuutMetLidwoord();
				}
				break;
			case 116:
				localctx = new VerdelingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2283;
				this.match(RegelSpraakParser.AFGEROND_OP);
				this.state = 2284;
				(localctx as VerdelingAfrondingContext)._decimals = this.match(RegelSpraakParser.NUMBER);
				this.state = 2285;
				this.match(RegelSpraakParser.DECIMALEN);
				this.state = 2286;
				this.match(RegelSpraakParser.NAAR_BENEDEN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verdelingRest(): VerdelingRestContext {
		let localctx: VerdelingRestContext = new VerdelingRestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, RegelSpraakParser.RULE_verdelingRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2289;
			this.match(RegelSpraakParser.ALS_ONVERDEELDE_REST_BLIJFT);
			this.state = 2290;
			localctx._remainderTarget = this.expressie();
			this.state = 2292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===192) {
				{
				this.state = 2291;
				this.match(RegelSpraakParser.OVER_VERDELING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 150:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 38);
		case 1:
			return this.precpred(this._ctx, 42);
		case 2:
			return this.precpred(this._ctx, 41);
		case 3:
			return this.precpred(this._ctx, 40);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,291,2295,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,1,0,1,0,1,0,1,0,1,0,1,0,5,0,365,
	8,0,10,0,12,0,368,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,378,8,1,1,2,1,
	2,1,2,3,2,383,8,2,1,2,1,2,1,3,1,3,1,3,4,3,390,8,3,11,3,12,3,391,1,4,1,4,
	3,4,396,8,4,1,4,1,4,1,4,5,4,401,8,4,10,4,12,4,404,9,4,1,4,3,4,407,8,4,1,
	5,3,5,410,8,5,1,5,4,5,413,8,5,11,5,12,5,414,1,5,3,5,418,8,5,4,5,420,8,5,
	11,5,12,5,421,1,5,5,5,425,8,5,10,5,12,5,428,9,5,1,6,1,6,1,6,1,6,1,6,1,6,
	5,6,436,8,6,10,6,12,6,439,9,6,1,6,3,6,442,8,6,1,7,1,7,3,7,446,8,7,1,8,4,
	8,449,8,8,11,8,12,8,450,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,462,8,9,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,491,
	8,10,1,10,1,10,1,10,1,10,3,10,497,8,10,1,11,1,11,1,11,3,11,502,8,11,1,12,
	1,12,1,12,1,12,5,12,508,8,12,10,12,12,12,511,9,12,1,13,3,13,514,8,13,1,
	13,4,13,517,8,13,11,13,12,13,518,1,14,4,14,522,8,14,11,14,12,14,523,1,15,
	1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,3,19,535,8,19,1,19,4,19,538,8,19,
	11,19,12,19,539,1,19,4,19,543,8,19,11,19,12,19,544,1,19,1,19,4,19,549,8,
	19,11,19,12,19,550,1,19,1,19,4,19,555,8,19,11,19,12,19,556,1,19,1,19,4,
	19,561,8,19,11,19,12,19,562,1,19,4,19,566,8,19,11,19,12,19,567,1,19,1,19,
	4,19,572,8,19,11,19,12,19,573,1,19,1,19,4,19,578,8,19,11,19,12,19,579,1,
	19,1,19,1,19,1,19,1,19,4,19,587,8,19,11,19,12,19,588,3,19,591,8,19,1,20,
	3,20,594,8,20,1,20,4,20,597,8,20,11,20,12,20,598,1,20,4,20,602,8,20,11,
	20,12,20,603,1,20,1,20,4,20,608,8,20,11,20,12,20,609,1,20,1,20,4,20,614,
	8,20,11,20,12,20,615,1,20,1,20,4,20,620,8,20,11,20,12,20,621,1,20,4,20,
	625,8,20,11,20,12,20,626,1,20,1,20,4,20,631,8,20,11,20,12,20,632,1,20,1,
	20,4,20,637,8,20,11,20,12,20,638,1,20,1,20,1,20,1,20,1,20,4,20,646,8,20,
	11,20,12,20,647,3,20,650,8,20,1,21,1,21,3,21,654,8,21,1,22,3,22,657,8,22,
	1,22,4,22,660,8,22,11,22,12,22,661,1,22,4,22,665,8,22,11,22,12,22,666,1,
	22,1,22,4,22,671,8,22,11,22,12,22,672,1,22,1,22,4,22,677,8,22,11,22,12,
	22,678,1,22,1,22,4,22,683,8,22,11,22,12,22,684,1,22,4,22,688,8,22,11,22,
	12,22,689,1,22,1,22,4,22,694,8,22,11,22,12,22,695,1,22,1,22,4,22,700,8,
	22,11,22,12,22,701,3,22,704,8,22,1,23,1,23,1,23,1,23,5,23,710,8,23,10,23,
	12,23,713,9,23,1,24,1,24,1,24,1,24,5,24,719,8,24,10,24,12,24,722,9,24,1,
	25,1,25,1,25,1,25,5,25,728,8,25,10,25,12,25,731,9,25,1,26,1,26,1,27,1,27,
	1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,4,30,745,8,30,11,30,12,30,746,1,
	30,3,30,750,8,30,1,30,3,30,753,8,30,1,30,5,30,756,8,30,10,30,12,30,759,
	9,30,1,31,1,31,3,31,763,8,31,1,31,1,31,1,32,3,32,768,8,32,1,32,1,32,3,32,
	772,8,32,1,32,1,32,3,32,776,8,32,1,32,3,32,779,8,32,1,33,1,33,1,33,1,33,
	3,33,785,8,33,1,33,1,33,3,33,789,8,33,1,33,1,33,1,33,1,33,5,33,795,8,33,
	10,33,12,33,798,9,33,3,33,800,8,33,1,33,3,33,803,8,33,1,34,1,34,1,34,1,
	34,1,34,1,34,3,34,811,8,34,1,35,1,35,1,35,1,35,1,35,3,35,818,8,35,1,36,
	1,36,1,36,1,36,1,36,3,36,825,8,36,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,
	38,834,8,38,1,39,1,39,1,40,1,40,1,41,3,41,841,8,41,1,41,1,41,1,41,1,41,
	1,41,1,41,3,41,849,8,41,1,42,1,42,1,42,1,42,1,42,1,42,3,42,857,8,42,1,42,
	3,42,860,8,42,1,43,1,43,1,43,1,43,1,43,3,43,867,8,43,1,44,1,44,4,44,871,
	8,44,11,44,12,44,872,1,45,1,45,1,46,1,46,1,47,1,47,1,47,5,47,882,8,47,10,
	47,12,47,885,9,47,1,48,1,48,1,48,1,48,1,48,1,48,3,48,893,8,48,1,48,1,48,
	3,48,897,8,48,1,48,1,48,3,48,901,8,48,1,48,1,48,3,48,905,8,48,1,49,1,49,
	1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,919,8,50,1,51,1,
	51,1,51,5,51,924,8,51,10,51,12,51,927,9,51,1,51,1,51,1,51,1,51,3,51,933,
	8,51,1,52,1,52,1,52,5,52,938,8,52,10,52,12,52,941,9,52,1,53,1,53,1,53,3,
	53,946,8,53,1,54,1,54,1,54,3,54,951,8,54,1,54,1,54,1,54,1,54,4,54,957,8,
	54,11,54,12,54,958,1,55,1,55,1,55,1,55,3,55,965,8,55,1,55,3,55,968,8,55,
	1,56,1,56,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,59,1,59,1,59,3,59,983,
	8,59,1,59,1,59,3,59,987,8,59,1,59,1,59,3,59,991,8,59,1,59,3,59,994,8,59,
	1,60,3,60,997,8,60,1,60,1,60,1,60,1,60,5,60,1003,8,60,10,60,12,60,1006,
	9,60,1,61,1,61,5,61,1010,8,61,10,61,12,61,1013,9,61,1,62,3,62,1016,8,62,
	1,62,1,62,1,62,1,62,5,62,1022,8,62,10,62,12,62,1025,9,62,1,62,3,62,1028,
	8,62,1,63,1,63,1,63,1,63,4,63,1034,8,63,11,63,12,63,1035,1,63,1,63,1,63,
	1,63,1,63,1,63,1,63,3,63,1045,8,63,1,64,1,64,1,64,1,64,1,64,1,64,3,64,1053,
	8,64,1,64,1,64,4,64,1057,8,64,11,64,12,64,1058,1,65,1,65,4,65,1063,8,65,
	11,65,12,65,1064,1,66,4,66,1068,8,66,11,66,12,66,1069,1,67,1,67,1,68,1,
	68,1,68,3,68,1077,8,68,1,68,4,68,1080,8,68,11,68,12,68,1081,1,69,1,69,1,
	69,1,69,3,69,1088,8,69,1,69,3,69,1091,8,69,1,69,3,69,1094,8,69,1,70,1,70,
	1,70,3,70,1099,8,70,1,70,1,70,4,70,1103,8,70,11,70,12,70,1104,1,71,1,71,
	5,71,1109,8,71,10,71,12,71,1112,9,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,
	1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,1128,8,72,1,73,1,73,1,73,1,74,1,
	74,1,74,1,74,1,74,3,74,1138,8,74,1,74,1,74,3,74,1142,8,74,1,75,1,75,3,75,
	1146,8,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,
	76,1160,8,76,1,76,3,76,1163,8,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1185,8,
	76,1,76,3,76,1188,8,76,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
	1,78,1,78,1,78,1,78,1,79,4,79,1205,8,79,11,79,12,79,1206,1,80,4,80,1210,
	8,80,11,80,12,80,1211,1,81,1,81,1,81,1,81,1,81,3,81,1219,8,81,1,82,1,82,
	3,82,1223,8,82,1,83,1,83,1,84,1,84,1,84,1,84,1,84,3,84,1232,8,84,1,84,3,
	84,1235,8,84,1,85,1,85,1,85,1,85,5,85,1241,8,85,10,85,12,85,1244,9,85,1,
	85,1,85,3,85,1248,8,85,1,86,1,86,1,86,1,86,1,87,1,87,1,88,1,88,1,88,1,88,
	1,88,1,88,3,88,1262,8,88,1,88,3,88,1265,8,88,3,88,1267,8,88,1,89,1,89,1,
	89,3,89,1272,8,89,1,90,1,90,1,90,1,90,1,90,1,90,1,91,3,91,1281,8,91,1,91,
	1,91,1,91,1,92,1,92,1,92,3,92,1289,8,92,1,93,1,93,1,93,1,93,1,93,1,93,4,
	93,1297,8,93,11,93,12,93,1298,1,93,1,93,1,93,1,93,3,93,1305,8,93,1,93,1,
	93,1,93,1,93,1,93,1,93,4,93,1313,8,93,11,93,12,93,1314,1,93,1,93,1,93,1,
	93,3,93,1321,8,93,1,93,1,93,1,93,1,93,1,93,1,93,4,93,1329,8,93,11,93,12,
	93,1330,3,93,1333,8,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,
	1,94,1,94,1,94,1,94,1,94,3,94,1350,8,94,1,95,1,95,1,95,3,95,1355,8,95,1,
	96,1,96,1,97,1,97,1,97,3,97,1362,8,97,1,98,4,98,1365,8,98,11,98,12,98,1366,
	1,99,1,99,1,100,1,100,1,100,3,100,1374,8,100,1,100,1,100,1,100,1,100,1,
	100,1,100,4,100,1382,8,100,11,100,12,100,1383,1,101,1,101,1,101,3,101,1389,
	8,101,1,102,1,102,1,102,3,102,1394,8,102,1,103,1,103,1,103,3,103,1399,8,
	103,1,104,1,104,1,104,1,104,5,104,1405,8,104,10,104,12,104,1408,9,104,1,
	105,1,105,1,105,1,105,5,105,1414,8,105,10,105,12,105,1417,9,105,1,106,1,
	106,4,106,1421,8,106,11,106,12,106,1422,1,106,3,106,1426,8,106,1,107,1,
	107,4,107,1430,8,107,11,107,12,107,1431,1,107,3,107,1435,8,107,1,108,1,
	108,1,108,1,108,1,109,1,109,1,110,3,110,1444,8,110,1,110,1,110,1,111,3,
	111,1449,8,111,1,111,3,111,1452,8,111,1,111,4,111,1455,8,111,11,111,12,
	111,1456,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,3,113,1467,8,113,
	3,113,1469,8,113,1,114,1,114,3,114,1473,8,114,1,115,1,115,1,115,1,115,1,
	115,3,115,1480,8,115,1,116,1,116,1,117,3,117,1485,8,117,1,117,1,117,3,117,
	1489,8,117,1,117,1,117,1,118,1,118,1,119,3,119,1496,8,119,1,119,1,119,1,
	119,1,119,1,119,1,120,1,120,1,120,1,121,1,121,1,121,1,122,1,122,1,122,1,
	123,1,123,1,123,1,123,1,123,1,123,4,123,1518,8,123,11,123,12,123,1519,1,
	124,1,124,1,124,1,124,1,124,1,124,3,124,1528,8,124,1,125,1,125,1,126,1,
	126,3,126,1534,8,126,1,126,1,126,1,126,1,126,1,126,3,126,1541,8,126,1,126,
	1,126,1,126,1,126,1,126,1,126,1,126,3,126,1550,8,126,1,127,1,127,1,127,
	1,127,3,127,1556,8,127,1,127,1,127,1,127,1,127,1,127,4,127,1563,8,127,11,
	127,12,127,1564,1,128,1,128,1,129,1,129,1,130,1,130,1,131,1,131,1,132,1,
	132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,
	133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,
	133,3,133,1601,8,133,1,134,1,134,5,134,1605,8,134,10,134,12,134,1608,9,
	134,1,134,1,134,1,135,3,135,1613,8,135,1,135,1,135,1,135,1,135,1,136,1,
	136,1,136,3,136,1622,8,136,1,136,1,136,5,136,1626,8,136,10,136,12,136,1629,
	9,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,1,137,3,137,1644,8,137,1,138,1,138,1,138,1,138,1,138,1,138,1,138,
	1,138,1,138,1,138,1,138,1,138,1,138,3,138,1659,8,138,1,139,1,139,1,139,
	3,139,1664,8,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,
	1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,
	1,140,1,140,1,140,1,140,5,140,1691,8,140,10,140,12,140,1694,9,140,1,140,
	1,140,1,140,1,140,1,140,1,140,1,140,3,140,1703,8,140,1,140,1,140,3,140,
	1707,8,140,1,141,1,141,1,141,1,141,3,141,1713,8,141,1,141,1,141,1,141,3,
	141,1718,8,141,1,142,1,142,1,143,1,143,1,144,1,144,1,144,1,144,5,144,1728,
	8,144,10,144,12,144,1731,9,144,1,145,1,145,1,146,1,146,1,146,1,146,5,146,
	1739,8,146,10,146,12,146,1742,9,146,1,147,1,147,1,148,1,148,1,148,1,148,
	5,148,1750,8,148,10,148,12,148,1753,9,148,1,149,1,149,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,3,150,1770,
	8,150,1,150,1,150,1,150,1,150,1,150,1,150,3,150,1778,8,150,1,150,1,150,
	1,150,1,150,5,150,1784,8,150,10,150,12,150,1787,9,150,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,3,150,1801,8,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,3,150,1812,8,150,
	1,150,3,150,1815,8,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
	1,150,5,150,1826,8,150,10,150,12,150,1829,9,150,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,5,150,1845,
	8,150,10,150,12,150,1848,9,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,5,150,1860,8,150,10,150,12,150,1863,9,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,5,150,1906,8,150,10,150,12,150,1909,9,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,5,150,1918,8,150,10,150,12,150,1921,9,150,
	1,150,1,150,1,150,1,150,1,150,1,150,3,150,1929,8,150,1,150,1,150,1,150,
	1,150,1,150,3,150,1936,8,150,1,150,1,150,3,150,1940,8,150,1,150,3,150,1943,
	8,150,1,150,1,150,1,150,4,150,1948,8,150,11,150,12,150,1949,1,150,1,150,
	1,150,3,150,1955,8,150,1,150,1,150,1,150,1,150,1,150,3,150,1962,8,150,1,
	150,4,150,1965,8,150,11,150,12,150,1966,1,150,1,150,1,150,1,150,1,150,3,
	150,1974,8,150,1,150,1,150,3,150,1978,8,150,1,150,1,150,1,150,3,150,1983,
	8,150,1,150,1,150,3,150,1987,8,150,1,150,1,150,3,150,1991,8,150,1,150,1,
	150,1,150,1,150,1,150,3,150,1998,8,150,1,150,1,150,3,150,2002,8,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,3,150,2022,8,150,1,150,1,150,1,150,4,150,
	2027,8,150,11,150,12,150,2028,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,150,1,150,5,150,2044,8,150,10,150,12,150,2047,
	9,150,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,152,1,152,
	3,152,2060,8,152,1,153,1,153,1,153,1,154,1,154,1,154,1,155,1,155,1,155,
	3,155,2071,8,155,1,156,1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,
	1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,3,157,2092,
	8,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,
	1,158,1,158,1,158,1,158,1,158,3,158,2110,8,158,1,159,1,159,1,159,1,159,
	3,159,2116,8,159,1,160,1,160,1,160,1,160,1,160,1,160,3,160,2124,8,160,1,
	161,1,161,1,162,1,162,1,162,1,162,3,162,2132,8,162,1,162,1,162,1,162,1,
	162,3,162,2138,8,162,1,163,1,163,1,163,1,163,3,163,2144,8,163,1,164,1,164,
	1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,1,165,
	5,165,2160,8,165,10,165,12,165,2163,9,165,1,165,1,165,1,165,1,165,1,166,
	1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,
	1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,
	1,166,3,166,2195,8,166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,
	3,167,2205,8,167,1,168,1,168,4,168,2209,8,168,11,168,12,168,2210,1,169,
	1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,3,169,
	2225,8,169,1,170,1,170,1,170,1,170,4,170,2231,8,170,11,170,12,170,2232,
	1,170,3,170,2236,8,170,1,170,3,170,2239,8,170,1,171,1,171,1,172,1,172,1,
	172,1,172,1,172,1,172,1,172,3,172,2250,8,172,1,172,3,172,2253,8,172,1,173,
	1,173,1,174,1,174,1,174,3,174,2260,8,174,1,175,1,175,5,175,2264,8,175,10,
	175,12,175,2267,9,175,1,176,1,176,1,176,3,176,2272,8,176,1,177,1,177,1,
	177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,3,
	177,2288,8,177,1,178,1,178,1,178,3,178,2293,8,178,1,178,0,1,300,179,0,2,
	4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
	54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
	102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,
	138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,
	174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,
	210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,
	246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,
	282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,
	318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,
	354,356,0,54,1,0,290,290,2,0,103,103,106,106,2,0,106,106,112,112,2,0,197,
	197,208,208,3,0,65,66,77,77,79,79,1,0,81,84,3,0,205,205,208,208,210,210,
	4,0,112,112,205,205,208,208,210,210,12,0,139,139,141,141,169,169,201,201,
	209,209,213,213,222,222,224,224,226,226,234,234,237,237,241,241,18,0,89,
	89,103,103,106,106,117,117,125,125,154,154,183,183,194,195,198,199,202,
	203,214,221,225,225,227,227,231,232,235,236,243,244,246,246,262,262,17,
	0,89,89,103,103,117,117,125,125,154,154,183,183,194,195,198,199,202,203,
	214,221,225,225,227,227,231,232,235,236,243,244,246,246,262,262,7,0,202,
	203,214,215,217,218,220,221,231,232,235,236,243,244,1,0,156,157,2,0,3,3,
	161,161,2,0,172,173,176,176,2,0,205,205,210,210,6,0,130,130,219,221,231,
	232,235,236,246,250,253,262,1,0,180,182,2,0,183,183,262,262,2,0,183,183,
	262,263,4,0,28,28,88,93,95,99,276,276,2,0,141,141,233,233,2,0,44,45,121,
	121,6,0,45,47,49,49,121,121,124,124,126,126,134,135,9,0,139,139,169,169,
	201,201,209,209,213,213,224,224,226,226,234,234,241,241,3,0,205,205,210,
	210,245,245,1,0,238,239,1,0,150,151,4,0,194,195,198,199,208,208,263,263,
	2,0,279,279,289,289,3,0,279,280,284,284,289,289,2,0,204,204,207,207,1,0,
	112,114,2,0,102,102,112,112,1,0,146,147,1,0,51,56,1,0,51,52,2,0,51,52,61,
	64,2,0,209,209,222,222,3,0,44,45,51,51,121,121,12,0,22,25,39,40,44,64,106,
	106,118,118,121,121,124,124,126,127,133,133,135,135,213,213,251,252,3,0,
	130,130,136,136,145,145,2,0,119,120,129,129,2,0,140,140,283,283,2,0,130,
	130,136,136,2,0,214,214,217,217,3,0,131,132,137,138,148,148,2,0,184,184,
	186,186,2,0,65,68,77,80,2,0,122,122,128,128,4,0,69,69,71,71,73,73,75,75,
	4,0,70,70,72,72,74,74,76,76,1,0,273,274,2,0,190,190,193,193,2548,0,366,
	1,0,0,0,2,377,1,0,0,0,4,379,1,0,0,0,6,386,1,0,0,0,8,393,1,0,0,0,10,409,
	1,0,0,0,12,429,1,0,0,0,14,445,1,0,0,0,16,448,1,0,0,0,18,461,1,0,0,0,20,
	496,1,0,0,0,22,498,1,0,0,0,24,503,1,0,0,0,26,513,1,0,0,0,28,521,1,0,0,0,
	30,525,1,0,0,0,32,527,1,0,0,0,34,529,1,0,0,0,36,531,1,0,0,0,38,590,1,0,
	0,0,40,649,1,0,0,0,42,653,1,0,0,0,44,703,1,0,0,0,46,705,1,0,0,0,48,714,
	1,0,0,0,50,723,1,0,0,0,52,732,1,0,0,0,54,734,1,0,0,0,56,736,1,0,0,0,58,
	738,1,0,0,0,60,740,1,0,0,0,62,762,1,0,0,0,64,771,1,0,0,0,66,780,1,0,0,0,
	68,810,1,0,0,0,70,812,1,0,0,0,72,819,1,0,0,0,74,826,1,0,0,0,76,828,1,0,
	0,0,78,835,1,0,0,0,80,837,1,0,0,0,82,840,1,0,0,0,84,850,1,0,0,0,86,866,
	1,0,0,0,88,868,1,0,0,0,90,874,1,0,0,0,92,876,1,0,0,0,94,878,1,0,0,0,96,
	886,1,0,0,0,98,906,1,0,0,0,100,918,1,0,0,0,102,932,1,0,0,0,104,934,1,0,
	0,0,106,942,1,0,0,0,108,947,1,0,0,0,110,967,1,0,0,0,112,969,1,0,0,0,114,
	973,1,0,0,0,116,975,1,0,0,0,118,977,1,0,0,0,120,996,1,0,0,0,122,1007,1,
	0,0,0,124,1027,1,0,0,0,126,1044,1,0,0,0,128,1046,1,0,0,0,130,1062,1,0,0,
	0,132,1067,1,0,0,0,134,1071,1,0,0,0,136,1073,1,0,0,0,138,1083,1,0,0,0,140,
	1095,1,0,0,0,142,1106,1,0,0,0,144,1127,1,0,0,0,146,1129,1,0,0,0,148,1141,
	1,0,0,0,150,1145,1,0,0,0,152,1187,1,0,0,0,154,1189,1,0,0,0,156,1191,1,0,
	0,0,158,1204,1,0,0,0,160,1209,1,0,0,0,162,1218,1,0,0,0,164,1222,1,0,0,0,
	166,1224,1,0,0,0,168,1226,1,0,0,0,170,1236,1,0,0,0,172,1249,1,0,0,0,174,
	1253,1,0,0,0,176,1255,1,0,0,0,178,1268,1,0,0,0,180,1273,1,0,0,0,182,1280,
	1,0,0,0,184,1285,1,0,0,0,186,1332,1,0,0,0,188,1349,1,0,0,0,190,1351,1,0,
	0,0,192,1356,1,0,0,0,194,1361,1,0,0,0,196,1364,1,0,0,0,198,1368,1,0,0,0,
	200,1373,1,0,0,0,202,1385,1,0,0,0,204,1390,1,0,0,0,206,1395,1,0,0,0,208,
	1400,1,0,0,0,210,1409,1,0,0,0,212,1425,1,0,0,0,214,1434,1,0,0,0,216,1436,
	1,0,0,0,218,1440,1,0,0,0,220,1443,1,0,0,0,222,1448,1,0,0,0,224,1458,1,0,
	0,0,226,1468,1,0,0,0,228,1472,1,0,0,0,230,1479,1,0,0,0,232,1481,1,0,0,0,
	234,1484,1,0,0,0,236,1492,1,0,0,0,238,1495,1,0,0,0,240,1502,1,0,0,0,242,
	1505,1,0,0,0,244,1508,1,0,0,0,246,1511,1,0,0,0,248,1527,1,0,0,0,250,1529,
	1,0,0,0,252,1549,1,0,0,0,254,1555,1,0,0,0,256,1566,1,0,0,0,258,1568,1,0,
	0,0,260,1570,1,0,0,0,262,1572,1,0,0,0,264,1574,1,0,0,0,266,1600,1,0,0,0,
	268,1602,1,0,0,0,270,1612,1,0,0,0,272,1618,1,0,0,0,274,1643,1,0,0,0,276,
	1658,1,0,0,0,278,1660,1,0,0,0,280,1706,1,0,0,0,282,1717,1,0,0,0,284,1719,
	1,0,0,0,286,1721,1,0,0,0,288,1723,1,0,0,0,290,1732,1,0,0,0,292,1734,1,0,
	0,0,294,1743,1,0,0,0,296,1745,1,0,0,0,298,1754,1,0,0,0,300,2021,1,0,0,0,
	302,2048,1,0,0,0,304,2059,1,0,0,0,306,2061,1,0,0,0,308,2064,1,0,0,0,310,
	2070,1,0,0,0,312,2072,1,0,0,0,314,2091,1,0,0,0,316,2109,1,0,0,0,318,2115,
	1,0,0,0,320,2123,1,0,0,0,322,2125,1,0,0,0,324,2137,1,0,0,0,326,2139,1,0,
	0,0,328,2145,1,0,0,0,330,2152,1,0,0,0,332,2194,1,0,0,0,334,2204,1,0,0,0,
	336,2208,1,0,0,0,338,2224,1,0,0,0,340,2226,1,0,0,0,342,2240,1,0,0,0,344,
	2242,1,0,0,0,346,2254,1,0,0,0,348,2256,1,0,0,0,350,2261,1,0,0,0,352,2268,
	1,0,0,0,354,2287,1,0,0,0,356,2289,1,0,0,0,358,365,3,2,1,0,359,365,3,136,
	68,0,360,365,3,140,70,0,361,365,3,4,2,0,362,365,3,176,88,0,363,365,3,94,
	47,0,364,358,1,0,0,0,364,359,1,0,0,0,364,360,1,0,0,0,364,361,1,0,0,0,364,
	362,1,0,0,0,364,363,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,0,
	0,0,367,369,1,0,0,0,368,366,1,0,0,0,369,370,5,0,0,1,370,1,1,0,0,0,371,378,
	3,60,30,0,372,378,3,84,42,0,373,378,3,118,59,0,374,378,3,108,54,0,375,378,
	3,126,63,0,376,378,3,340,170,0,377,371,1,0,0,0,377,372,1,0,0,0,377,373,
	1,0,0,0,377,374,1,0,0,0,377,375,1,0,0,0,377,376,1,0,0,0,378,3,1,0,0,0,379,
	380,5,91,0,0,380,382,3,46,23,0,381,383,3,146,73,0,382,381,1,0,0,0,382,383,
	1,0,0,0,383,384,1,0,0,0,384,385,3,6,3,0,385,5,1,0,0,0,386,387,3,8,4,0,387,
	389,3,10,5,0,388,390,3,12,6,0,389,388,1,0,0,0,390,391,1,0,0,0,391,389,1,
	0,0,0,391,392,1,0,0,0,392,7,1,0,0,0,393,395,5,290,0,0,394,396,5,290,0,0,
	395,394,1,0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,402,3,16,8,0,398,399,
	5,290,0,0,399,401,3,16,8,0,400,398,1,0,0,0,401,404,1,0,0,0,402,400,1,0,
	0,0,402,403,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,405,407,5,290,0,0,406,
	405,1,0,0,0,406,407,1,0,0,0,407,9,1,0,0,0,408,410,5,290,0,0,409,408,1,0,
	0,0,409,410,1,0,0,0,410,419,1,0,0,0,411,413,5,289,0,0,412,411,1,0,0,0,413,
	414,1,0,0,0,414,412,1,0,0,0,414,415,1,0,0,0,415,417,1,0,0,0,416,418,5,290,
	0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,420,1,0,0,0,419,412,1,0,0,0,420,
	421,1,0,0,0,421,419,1,0,0,0,421,422,1,0,0,0,422,426,1,0,0,0,423,425,5,289,
	0,0,424,423,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,
	11,1,0,0,0,428,426,1,0,0,0,429,430,5,290,0,0,430,431,5,263,0,0,431,432,
	5,290,0,0,432,437,3,14,7,0,433,434,5,290,0,0,434,436,3,14,7,0,435,433,1,
	0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,437,438,1,0,0,0,438,441,1,0,0,0,439,
	437,1,0,0,0,440,442,5,290,0,0,441,440,1,0,0,0,441,442,1,0,0,0,442,13,1,
	0,0,0,443,446,3,274,137,0,444,446,5,291,0,0,445,443,1,0,0,0,445,444,1,0,
	0,0,446,15,1,0,0,0,447,449,8,0,0,0,448,447,1,0,0,0,449,450,1,0,0,0,450,
	448,1,0,0,0,450,451,1,0,0,0,451,17,1,0,0,0,452,453,3,22,11,0,453,454,5,
	9,0,0,454,455,5,0,0,1,455,462,1,0,0,0,456,457,3,204,102,0,457,458,7,1,0,
	0,458,459,3,220,110,0,459,460,5,0,0,1,460,462,1,0,0,0,461,452,1,0,0,0,461,
	456,1,0,0,0,462,19,1,0,0,0,463,464,5,104,0,0,464,465,3,22,11,0,465,466,
	7,2,0,0,466,467,7,3,0,0,467,468,3,220,110,0,468,469,5,0,0,1,469,497,1,0,
	0,0,470,471,5,104,0,0,471,472,3,22,11,0,472,473,7,4,0,0,473,474,5,0,0,1,
	474,497,1,0,0,0,475,476,5,104,0,0,476,477,3,22,11,0,477,478,7,5,0,0,478,
	479,5,263,0,0,479,480,5,160,0,0,480,481,5,0,0,1,481,497,1,0,0,0,482,483,
	5,104,0,0,483,484,3,22,11,0,484,485,3,286,143,0,485,486,5,0,0,1,486,497,
	1,0,0,0,487,488,5,104,0,0,488,490,3,204,102,0,489,491,7,6,0,0,490,489,1,
	0,0,0,490,491,1,0,0,0,491,492,1,0,0,0,492,493,3,220,110,0,493,494,5,103,
	0,0,494,495,5,0,0,1,495,497,1,0,0,0,496,463,1,0,0,0,496,470,1,0,0,0,496,
	475,1,0,0,0,496,482,1,0,0,0,496,487,1,0,0,0,497,21,1,0,0,0,498,501,3,24,
	12,0,499,500,5,237,0,0,500,502,3,204,102,0,501,499,1,0,0,0,501,502,1,0,
	0,0,502,23,1,0,0,0,503,509,3,26,13,0,504,505,3,30,15,0,505,506,3,28,14,
	0,506,508,1,0,0,0,507,504,1,0,0,0,508,511,1,0,0,0,509,507,1,0,0,0,509,510,
	1,0,0,0,510,25,1,0,0,0,511,509,1,0,0,0,512,514,7,7,0,0,513,512,1,0,0,0,
	513,514,1,0,0,0,514,516,1,0,0,0,515,517,3,36,18,0,516,515,1,0,0,0,517,518,
	1,0,0,0,518,516,1,0,0,0,518,519,1,0,0,0,519,27,1,0,0,0,520,522,3,36,18,
	0,521,520,1,0,0,0,522,523,1,0,0,0,523,521,1,0,0,0,523,524,1,0,0,0,524,29,
	1,0,0,0,525,526,7,8,0,0,526,31,1,0,0,0,527,528,5,262,0,0,528,33,1,0,0,0,
	529,530,7,9,0,0,530,35,1,0,0,0,531,532,7,10,0,0,532,37,1,0,0,0,533,535,
	7,7,0,0,534,533,1,0,0,0,534,535,1,0,0,0,535,537,1,0,0,0,536,538,3,34,17,
	0,537,536,1,0,0,0,538,539,1,0,0,0,539,537,1,0,0,0,539,540,1,0,0,0,540,591,
	1,0,0,0,541,543,3,34,17,0,542,541,1,0,0,0,543,544,1,0,0,0,544,542,1,0,0,
	0,544,545,1,0,0,0,545,591,1,0,0,0,546,548,5,42,0,0,547,549,3,34,17,0,548,
	547,1,0,0,0,549,550,1,0,0,0,550,548,1,0,0,0,550,551,1,0,0,0,551,591,1,0,
	0,0,552,554,5,42,0,0,553,555,3,34,17,0,554,553,1,0,0,0,555,556,1,0,0,0,
	556,554,1,0,0,0,556,557,1,0,0,0,557,558,1,0,0,0,558,560,5,169,0,0,559,561,
	3,34,17,0,560,559,1,0,0,0,561,562,1,0,0,0,562,560,1,0,0,0,562,563,1,0,0,
	0,563,591,1,0,0,0,564,566,3,34,17,0,565,564,1,0,0,0,566,567,1,0,0,0,567,
	565,1,0,0,0,567,568,1,0,0,0,568,569,1,0,0,0,569,571,5,169,0,0,570,572,3,
	34,17,0,571,570,1,0,0,0,572,573,1,0,0,0,573,571,1,0,0,0,573,574,1,0,0,0,
	574,591,1,0,0,0,575,577,5,133,0,0,576,578,3,34,17,0,577,576,1,0,0,0,578,
	579,1,0,0,0,579,577,1,0,0,0,579,580,1,0,0,0,580,591,1,0,0,0,581,582,5,210,
	0,0,582,583,5,183,0,0,583,584,5,203,0,0,584,586,5,213,0,0,585,587,3,34,
	17,0,586,585,1,0,0,0,587,588,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,
	591,1,0,0,0,590,534,1,0,0,0,590,542,1,0,0,0,590,546,1,0,0,0,590,552,1,0,
	0,0,590,565,1,0,0,0,590,575,1,0,0,0,590,581,1,0,0,0,591,39,1,0,0,0,592,
	594,7,7,0,0,593,592,1,0,0,0,593,594,1,0,0,0,594,596,1,0,0,0,595,597,3,42,
	21,0,596,595,1,0,0,0,597,598,1,0,0,0,598,596,1,0,0,0,598,599,1,0,0,0,599,
	650,1,0,0,0,600,602,3,42,21,0,601,600,1,0,0,0,602,603,1,0,0,0,603,601,1,
	0,0,0,603,604,1,0,0,0,604,650,1,0,0,0,605,607,5,42,0,0,606,608,3,42,21,
	0,607,606,1,0,0,0,608,609,1,0,0,0,609,607,1,0,0,0,609,610,1,0,0,0,610,650,
	1,0,0,0,611,613,5,42,0,0,612,614,3,42,21,0,613,612,1,0,0,0,614,615,1,0,
	0,0,615,613,1,0,0,0,615,616,1,0,0,0,616,617,1,0,0,0,617,619,5,169,0,0,618,
	620,3,42,21,0,619,618,1,0,0,0,620,621,1,0,0,0,621,619,1,0,0,0,621,622,1,
	0,0,0,622,650,1,0,0,0,623,625,3,42,21,0,624,623,1,0,0,0,625,626,1,0,0,0,
	626,624,1,0,0,0,626,627,1,0,0,0,627,628,1,0,0,0,628,630,5,169,0,0,629,631,
	3,42,21,0,630,629,1,0,0,0,631,632,1,0,0,0,632,630,1,0,0,0,632,633,1,0,0,
	0,633,650,1,0,0,0,634,636,5,133,0,0,635,637,3,42,21,0,636,635,1,0,0,0,637,
	638,1,0,0,0,638,636,1,0,0,0,638,639,1,0,0,0,639,650,1,0,0,0,640,641,5,210,
	0,0,641,642,5,183,0,0,642,643,5,203,0,0,643,645,5,213,0,0,644,646,3,42,
	21,0,645,644,1,0,0,0,646,647,1,0,0,0,647,645,1,0,0,0,647,648,1,0,0,0,648,
	650,1,0,0,0,649,593,1,0,0,0,649,601,1,0,0,0,649,605,1,0,0,0,649,611,1,0,
	0,0,649,624,1,0,0,0,649,634,1,0,0,0,649,640,1,0,0,0,650,41,1,0,0,0,651,
	654,3,34,17,0,652,654,5,263,0,0,653,651,1,0,0,0,653,652,1,0,0,0,654,43,
	1,0,0,0,655,657,7,7,0,0,656,655,1,0,0,0,656,657,1,0,0,0,657,659,1,0,0,0,
	658,660,3,36,18,0,659,658,1,0,0,0,660,661,1,0,0,0,661,659,1,0,0,0,661,662,
	1,0,0,0,662,704,1,0,0,0,663,665,3,36,18,0,664,663,1,0,0,0,665,666,1,0,0,
	0,666,664,1,0,0,0,666,667,1,0,0,0,667,704,1,0,0,0,668,670,5,42,0,0,669,
	671,3,36,18,0,670,669,1,0,0,0,671,672,1,0,0,0,672,670,1,0,0,0,672,673,1,
	0,0,0,673,704,1,0,0,0,674,676,5,42,0,0,675,677,3,36,18,0,676,675,1,0,0,
	0,677,678,1,0,0,0,678,676,1,0,0,0,678,679,1,0,0,0,679,680,1,0,0,0,680,682,
	5,169,0,0,681,683,3,36,18,0,682,681,1,0,0,0,683,684,1,0,0,0,684,682,1,0,
	0,0,684,685,1,0,0,0,685,704,1,0,0,0,686,688,3,36,18,0,687,686,1,0,0,0,688,
	689,1,0,0,0,689,687,1,0,0,0,689,690,1,0,0,0,690,691,1,0,0,0,691,693,5,169,
	0,0,692,694,3,36,18,0,693,692,1,0,0,0,694,695,1,0,0,0,695,693,1,0,0,0,695,
	696,1,0,0,0,696,704,1,0,0,0,697,699,5,133,0,0,698,700,3,36,18,0,699,698,
	1,0,0,0,700,701,1,0,0,0,701,699,1,0,0,0,701,702,1,0,0,0,702,704,1,0,0,0,
	703,656,1,0,0,0,703,664,1,0,0,0,703,668,1,0,0,0,703,674,1,0,0,0,703,687,
	1,0,0,0,703,697,1,0,0,0,704,45,1,0,0,0,705,711,3,38,19,0,706,707,3,52,26,
	0,707,708,3,38,19,0,708,710,1,0,0,0,709,706,1,0,0,0,710,713,1,0,0,0,711,
	709,1,0,0,0,711,712,1,0,0,0,712,47,1,0,0,0,713,711,1,0,0,0,714,720,3,40,
	20,0,715,716,3,52,26,0,716,717,3,40,20,0,717,719,1,0,0,0,718,715,1,0,0,
	0,719,722,1,0,0,0,720,718,1,0,0,0,720,721,1,0,0,0,721,49,1,0,0,0,722,720,
	1,0,0,0,723,729,3,44,22,0,724,725,3,52,26,0,725,726,3,44,22,0,726,728,1,
	0,0,0,727,724,1,0,0,0,728,731,1,0,0,0,729,727,1,0,0,0,729,730,1,0,0,0,730,
	51,1,0,0,0,731,729,1,0,0,0,732,733,7,8,0,0,733,53,1,0,0,0,734,735,5,265,
	0,0,735,55,1,0,0,0,736,737,5,262,0,0,737,57,1,0,0,0,738,739,7,11,0,0,739,
	59,1,0,0,0,740,741,5,92,0,0,741,749,3,50,25,0,742,744,5,171,0,0,743,745,
	5,262,0,0,744,743,1,0,0,0,745,746,1,0,0,0,746,744,1,0,0,0,746,747,1,0,0,
	0,747,748,1,0,0,0,748,750,5,270,0,0,749,742,1,0,0,0,749,750,1,0,0,0,750,
	752,1,0,0,0,751,753,5,158,0,0,752,751,1,0,0,0,752,753,1,0,0,0,753,757,1,
	0,0,0,754,756,3,62,31,0,755,754,1,0,0,0,756,759,1,0,0,0,757,755,1,0,0,0,
	757,758,1,0,0,0,758,61,1,0,0,0,759,757,1,0,0,0,760,763,3,64,32,0,761,763,
	3,66,33,0,762,760,1,0,0,0,762,761,1,0,0,0,763,764,1,0,0,0,764,765,5,276,
	0,0,765,63,1,0,0,0,766,768,5,106,0,0,767,766,1,0,0,0,767,768,1,0,0,0,768,
	769,1,0,0,0,769,772,3,32,16,0,770,772,3,48,24,0,771,767,1,0,0,0,771,770,
	1,0,0,0,772,773,1,0,0,0,773,775,5,167,0,0,774,776,7,12,0,0,775,774,1,0,
	0,0,775,776,1,0,0,0,776,778,1,0,0,0,777,779,3,114,57,0,778,777,1,0,0,0,
	778,779,1,0,0,0,779,65,1,0,0,0,780,784,3,48,24,0,781,785,3,68,34,0,782,
	785,3,90,45,0,783,785,3,92,46,0,784,781,1,0,0,0,784,782,1,0,0,0,784,783,
	1,0,0,0,785,788,1,0,0,0,786,787,5,170,0,0,787,789,3,102,51,0,788,786,1,
	0,0,0,788,789,1,0,0,0,789,799,1,0,0,0,790,791,5,164,0,0,791,796,3,116,58,
	0,792,793,5,209,0,0,793,795,3,116,58,0,794,792,1,0,0,0,795,798,1,0,0,0,
	796,794,1,0,0,0,796,797,1,0,0,0,797,800,1,0,0,0,798,796,1,0,0,0,799,790,
	1,0,0,0,799,800,1,0,0,0,800,802,1,0,0,0,801,803,3,114,57,0,802,801,1,0,
	0,0,802,803,1,0,0,0,803,67,1,0,0,0,804,811,3,72,36,0,805,811,3,74,37,0,
	806,811,3,78,39,0,807,811,3,80,40,0,808,811,3,70,35,0,809,811,3,76,38,0,
	810,804,1,0,0,0,810,805,1,0,0,0,810,806,1,0,0,0,810,807,1,0,0,0,810,808,
	1,0,0,0,810,809,1,0,0,0,811,69,1,0,0,0,812,813,5,94,0,0,813,817,5,237,0,
	0,814,818,3,68,34,0,815,818,3,90,45,0,816,818,3,92,46,0,817,814,1,0,0,0,
	817,815,1,0,0,0,817,816,1,0,0,0,818,71,1,0,0,0,819,824,5,174,0,0,820,821,
	5,269,0,0,821,822,3,82,41,0,822,823,5,270,0,0,823,825,1,0,0,0,824,820,1,
	0,0,0,824,825,1,0,0,0,825,73,1,0,0,0,826,827,5,179,0,0,827,75,1,0,0,0,828,
	833,5,175,0,0,829,830,5,269,0,0,830,831,3,82,41,0,831,832,5,270,0,0,832,
	834,1,0,0,0,833,829,1,0,0,0,833,834,1,0,0,0,834,77,1,0,0,0,835,836,5,159,
	0,0,836,79,1,0,0,0,837,838,7,13,0,0,838,81,1,0,0,0,839,841,7,14,0,0,840,
	839,1,0,0,0,840,841,1,0,0,0,841,848,1,0,0,0,842,849,5,165,0,0,843,844,5,
	166,0,0,844,845,5,169,0,0,845,846,5,263,0,0,846,849,5,162,0,0,847,849,5,
	166,0,0,848,842,1,0,0,0,848,843,1,0,0,0,848,847,1,0,0,0,849,83,1,0,0,0,
	850,851,5,93,0,0,851,852,5,262,0,0,852,853,5,29,0,0,853,856,3,86,43,0,854,
	855,5,170,0,0,855,857,3,102,51,0,856,854,1,0,0,0,856,857,1,0,0,0,857,859,
	1,0,0,0,858,860,5,276,0,0,859,858,1,0,0,0,859,860,1,0,0,0,860,85,1,0,0,
	0,861,867,3,88,44,0,862,867,3,72,36,0,863,867,3,74,37,0,864,867,3,78,39,
	0,865,867,3,80,40,0,866,861,1,0,0,0,866,862,1,0,0,0,866,863,1,0,0,0,866,
	864,1,0,0,0,866,865,1,0,0,0,867,87,1,0,0,0,868,870,5,163,0,0,869,871,5,
	268,0,0,870,869,1,0,0,0,871,872,1,0,0,0,872,870,1,0,0,0,872,873,1,0,0,0,
	873,89,1,0,0,0,874,875,5,262,0,0,875,91,1,0,0,0,876,877,5,262,0,0,877,93,
	1,0,0,0,878,879,5,96,0,0,879,883,3,32,16,0,880,882,3,96,48,0,881,880,1,
	0,0,0,882,885,1,0,0,0,883,881,1,0,0,0,883,884,1,0,0,0,884,95,1,0,0,0,885,
	883,1,0,0,0,886,887,7,15,0,0,887,892,3,100,50,0,888,889,5,171,0,0,889,890,
	3,100,50,0,890,891,5,270,0,0,891,893,1,0,0,0,892,888,1,0,0,0,892,893,1,
	0,0,0,893,894,1,0,0,0,894,896,3,100,50,0,895,897,3,100,50,0,896,895,1,0,
	0,0,896,897,1,0,0,0,897,904,1,0,0,0,898,900,5,264,0,0,899,901,5,277,0,0,
	900,899,1,0,0,0,900,901,1,0,0,0,901,902,1,0,0,0,902,903,5,263,0,0,903,905,
	3,100,50,0,904,898,1,0,0,0,904,905,1,0,0,0,905,97,1,0,0,0,906,907,7,16,
	0,0,907,99,1,0,0,0,908,919,3,98,49,0,909,919,5,202,0,0,910,919,5,203,0,
	0,911,919,5,217,0,0,912,919,5,218,0,0,913,919,5,214,0,0,914,919,5,215,0,
	0,915,919,5,243,0,0,916,919,5,244,0,0,917,919,5,216,0,0,918,908,1,0,0,0,
	918,909,1,0,0,0,918,910,1,0,0,0,918,911,1,0,0,0,918,912,1,0,0,0,918,913,
	1,0,0,0,918,914,1,0,0,0,918,915,1,0,0,0,918,916,1,0,0,0,918,917,1,0,0,0,
	919,101,1,0,0,0,920,925,3,104,52,0,921,922,5,277,0,0,922,924,3,104,52,0,
	923,921,1,0,0,0,924,927,1,0,0,0,925,923,1,0,0,0,925,926,1,0,0,0,926,933,
	1,0,0,0,927,925,1,0,0,0,928,933,5,263,0,0,929,933,5,278,0,0,930,933,5,259,
	0,0,931,933,5,260,0,0,932,920,1,0,0,0,932,928,1,0,0,0,932,929,1,0,0,0,932,
	930,1,0,0,0,932,931,1,0,0,0,933,103,1,0,0,0,934,939,3,106,53,0,935,936,
	5,280,0,0,936,938,3,106,53,0,937,935,1,0,0,0,938,941,1,0,0,0,939,937,1,
	0,0,0,939,940,1,0,0,0,940,105,1,0,0,0,941,939,1,0,0,0,942,945,3,98,49,0,
	943,944,5,283,0,0,944,946,5,263,0,0,945,943,1,0,0,0,945,946,1,0,0,0,946,
	107,1,0,0,0,947,948,5,95,0,0,948,950,3,46,23,0,949,951,5,273,0,0,950,949,
	1,0,0,0,950,951,1,0,0,0,951,952,1,0,0,0,952,953,5,27,0,0,953,954,3,46,23,
	0,954,956,3,110,55,0,955,957,3,112,56,0,956,955,1,0,0,0,957,958,1,0,0,0,
	958,956,1,0,0,0,958,959,1,0,0,0,959,109,1,0,0,0,960,961,5,2,0,0,961,962,
	3,52,26,0,962,964,5,270,0,0,963,965,5,275,0,0,964,963,1,0,0,0,964,965,1,
	0,0,0,965,968,1,0,0,0,966,968,5,1,0,0,967,960,1,0,0,0,967,966,1,0,0,0,968,
	111,1,0,0,0,969,970,5,263,0,0,970,971,5,274,0,0,971,972,3,46,23,0,972,113,
	1,0,0,0,973,974,7,17,0,0,974,115,1,0,0,0,975,976,5,262,0,0,976,117,1,0,
	0,0,977,978,5,97,0,0,978,979,3,120,60,0,979,982,5,275,0,0,980,983,3,68,
	34,0,981,983,3,90,45,0,982,980,1,0,0,0,982,981,1,0,0,0,983,986,1,0,0,0,
	984,985,5,170,0,0,985,987,3,102,51,0,986,984,1,0,0,0,986,987,1,0,0,0,987,
	990,1,0,0,0,988,989,5,106,0,0,989,991,3,274,137,0,990,988,1,0,0,0,990,991,
	1,0,0,0,991,993,1,0,0,0,992,994,3,114,57,0,993,992,1,0,0,0,993,994,1,0,
	0,0,994,119,1,0,0,0,995,997,7,15,0,0,996,995,1,0,0,0,996,997,1,0,0,0,997,
	998,1,0,0,0,998,1004,3,122,61,0,999,1000,3,52,26,0,1000,1001,3,122,61,0,
	1001,1003,1,0,0,0,1002,999,1,0,0,0,1003,1006,1,0,0,0,1004,1002,1,0,0,0,
	1004,1005,1,0,0,0,1005,121,1,0,0,0,1006,1004,1,0,0,0,1007,1011,7,18,0,0,
	1008,1010,7,19,0,0,1009,1008,1,0,0,0,1010,1013,1,0,0,0,1011,1009,1,0,0,
	0,1011,1012,1,0,0,0,1012,123,1,0,0,0,1013,1011,1,0,0,0,1014,1016,7,15,0,
	0,1015,1014,1,0,0,0,1015,1016,1,0,0,0,1016,1017,1,0,0,0,1017,1023,3,122,
	61,0,1018,1019,3,52,26,0,1019,1020,3,122,61,0,1020,1022,1,0,0,0,1021,1018,
	1,0,0,0,1022,1025,1,0,0,0,1023,1021,1,0,0,0,1023,1024,1,0,0,0,1024,1028,
	1,0,0,0,1025,1023,1,0,0,0,1026,1028,3,46,23,0,1027,1015,1,0,0,0,1027,1026,
	1,0,0,0,1028,125,1,0,0,0,1029,1030,5,98,0,0,1030,1031,3,46,23,0,1031,1033,
	3,128,64,0,1032,1034,3,128,64,0,1033,1032,1,0,0,0,1034,1035,1,0,0,0,1035,
	1033,1,0,0,0,1035,1036,1,0,0,0,1036,1037,1,0,0,0,1037,1038,3,132,66,0,1038,
	1045,1,0,0,0,1039,1040,5,28,0,0,1040,1041,3,46,23,0,1041,1042,3,128,64,
	0,1042,1043,3,132,66,0,1043,1045,1,0,0,0,1044,1029,1,0,0,0,1044,1039,1,
	0,0,0,1045,127,1,0,0,0,1046,1047,7,15,0,0,1047,1052,3,130,65,0,1048,1049,
	5,171,0,0,1049,1050,3,46,23,0,1050,1051,5,270,0,0,1051,1053,1,0,0,0,1052,
	1048,1,0,0,0,1052,1053,1,0,0,0,1053,1054,1,0,0,0,1054,1056,5,286,0,0,1055,
	1057,5,262,0,0,1056,1055,1,0,0,0,1057,1058,1,0,0,0,1058,1056,1,0,0,0,1058,
	1059,1,0,0,0,1059,129,1,0,0,0,1060,1063,3,34,17,0,1061,1063,3,52,26,0,1062,
	1060,1,0,0,0,1062,1061,1,0,0,0,1063,1064,1,0,0,0,1064,1062,1,0,0,0,1064,
	1065,1,0,0,0,1065,131,1,0,0,0,1066,1068,3,134,67,0,1067,1066,1,0,0,0,1068,
	1069,1,0,0,0,1069,1067,1,0,0,0,1069,1070,1,0,0,0,1070,133,1,0,0,0,1071,
	1072,8,20,0,0,1072,135,1,0,0,0,1073,1074,5,89,0,0,1074,1076,3,142,71,0,
	1075,1077,5,263,0,0,1076,1075,1,0,0,0,1076,1077,1,0,0,0,1077,1079,1,0,0,
	0,1078,1080,3,138,69,0,1079,1078,1,0,0,0,1080,1081,1,0,0,0,1081,1079,1,
	0,0,0,1081,1082,1,0,0,0,1082,137,1,0,0,0,1083,1084,3,146,73,0,1084,1090,
	3,152,76,0,1085,1087,3,184,92,0,1086,1088,5,274,0,0,1087,1086,1,0,0,0,1087,
	1088,1,0,0,0,1088,1091,1,0,0,0,1089,1091,5,274,0,0,1090,1085,1,0,0,0,1090,
	1089,1,0,0,0,1090,1091,1,0,0,0,1091,1093,1,0,0,0,1092,1094,3,268,134,0,
	1093,1092,1,0,0,0,1093,1094,1,0,0,0,1094,139,1,0,0,0,1095,1096,5,90,0,0,
	1096,1098,3,46,23,0,1097,1099,5,105,0,0,1098,1097,1,0,0,0,1098,1099,1,0,
	0,0,1099,1102,1,0,0,0,1100,1103,3,136,68,0,1101,1103,3,176,88,0,1102,1100,
	1,0,0,0,1102,1101,1,0,0,0,1103,1104,1,0,0,0,1104,1102,1,0,0,0,1104,1105,
	1,0,0,0,1105,141,1,0,0,0,1106,1110,3,48,24,0,1107,1109,3,144,72,0,1108,
	1107,1,0,0,0,1109,1112,1,0,0,0,1110,1108,1,0,0,0,1110,1111,1,0,0,0,1111,
	143,1,0,0,0,1112,1110,1,0,0,0,1113,1128,5,191,0,0,1114,1115,5,273,0,0,1115,
	1128,3,48,24,0,1116,1117,5,273,0,0,1117,1118,5,169,0,0,1118,1128,3,48,24,
	0,1119,1120,5,209,0,0,1120,1128,3,48,24,0,1121,1122,5,106,0,0,1122,1128,
	3,48,24,0,1123,1124,5,197,0,0,1124,1125,3,48,24,0,1125,1126,5,106,0,0,1126,
	1128,1,0,0,0,1127,1113,1,0,0,0,1127,1114,1,0,0,0,1127,1116,1,0,0,0,1127,
	1119,1,0,0,0,1127,1121,1,0,0,0,1127,1123,1,0,0,0,1128,145,1,0,0,0,1129,
	1130,5,101,0,0,1130,1131,3,148,74,0,1131,147,1,0,0,0,1132,1142,5,200,0,
	0,1133,1134,5,143,0,0,1134,1137,3,150,75,0,1135,1136,7,21,0,0,1136,1138,
	3,150,75,0,1137,1135,1,0,0,0,1137,1138,1,0,0,0,1138,1142,1,0,0,0,1139,1140,
	7,21,0,0,1140,1142,3,150,75,0,1141,1132,1,0,0,0,1141,1133,1,0,0,0,1141,
	1139,1,0,0,0,1142,149,1,0,0,0,1143,1146,3,54,27,0,1144,1146,5,263,0,0,1145,
	1143,1,0,0,0,1145,1144,1,0,0,0,1146,151,1,0,0,0,1147,1148,5,208,0,0,1148,
	1149,5,202,0,0,1149,1150,5,106,0,0,1150,1151,5,208,0,0,1151,1188,3,46,23,
	0,1152,1159,3,216,108,0,1153,1154,5,8,0,0,1154,1160,3,274,137,0,1155,1156,
	5,9,0,0,1156,1160,3,274,137,0,1157,1158,5,10,0,0,1158,1160,3,274,137,0,
	1159,1153,1,0,0,0,1159,1155,1,0,0,0,1159,1157,1,0,0,0,1160,1162,1,0,0,0,
	1161,1163,3,310,155,0,1162,1161,1,0,0,0,1162,1163,1,0,0,0,1163,1188,1,0,
	0,0,1164,1165,3,216,108,0,1165,1166,5,107,0,0,1166,1167,3,154,77,0,1167,
	1168,3,274,137,0,1168,1188,1,0,0,0,1169,1188,3,156,78,0,1170,1188,3,168,
	84,0,1171,1172,3,204,102,0,1172,1173,5,103,0,0,1173,1174,7,15,0,0,1174,
	1175,3,46,23,0,1175,1176,5,169,0,0,1176,1177,3,218,109,0,1177,1178,7,22,
	0,0,1178,1179,3,274,137,0,1179,1188,1,0,0,0,1180,1181,3,204,102,0,1181,
	1182,7,1,0,0,1182,1184,3,220,110,0,1183,1185,3,310,155,0,1184,1183,1,0,
	0,0,1184,1185,1,0,0,0,1185,1188,1,0,0,0,1186,1188,3,344,172,0,1187,1147,
	1,0,0,0,1187,1152,1,0,0,0,1187,1164,1,0,0,0,1187,1169,1,0,0,0,1187,1170,
	1,0,0,0,1187,1171,1,0,0,0,1187,1180,1,0,0,0,1187,1186,1,0,0,0,1188,153,
	1,0,0,0,1189,1190,7,23,0,0,1190,155,1,0,0,0,1191,1192,5,208,0,0,1192,1193,
	3,158,79,0,1193,1194,5,237,0,0,1194,1195,5,208,0,0,1195,1196,3,160,80,0,
	1196,1197,5,106,0,0,1197,1198,7,6,0,0,1198,1199,3,158,79,0,1199,1200,5,
	237,0,0,1200,1201,7,6,0,0,1201,1202,3,160,80,0,1202,157,1,0,0,0,1203,1205,
	3,164,82,0,1204,1203,1,0,0,0,1205,1206,1,0,0,0,1206,1204,1,0,0,0,1206,1207,
	1,0,0,0,1207,159,1,0,0,0,1208,1210,3,162,81,0,1209,1208,1,0,0,0,1210,1211,
	1,0,0,0,1211,1209,1,0,0,0,1211,1212,1,0,0,0,1212,161,1,0,0,0,1213,1219,
	3,34,17,0,1214,1219,3,52,26,0,1215,1219,5,205,0,0,1216,1219,5,210,0,0,1217,
	1219,5,208,0,0,1218,1213,1,0,0,0,1218,1214,1,0,0,0,1218,1215,1,0,0,0,1218,
	1216,1,0,0,0,1218,1217,1,0,0,0,1219,163,1,0,0,0,1220,1223,3,34,17,0,1221,
	1223,3,166,83,0,1222,1220,1,0,0,0,1222,1221,1,0,0,0,1223,165,1,0,0,0,1224,
	1225,7,24,0,0,1225,167,1,0,0,0,1226,1227,3,204,102,0,1227,1228,5,103,0,
	0,1228,1229,7,6,0,0,1229,1231,3,46,23,0,1230,1232,3,170,85,0,1231,1230,
	1,0,0,0,1231,1232,1,0,0,0,1232,1234,1,0,0,0,1233,1235,5,274,0,0,1234,1233,
	1,0,0,0,1234,1235,1,0,0,0,1235,169,1,0,0,0,1236,1237,5,169,0,0,1237,1242,
	3,172,86,0,1238,1239,5,273,0,0,1239,1241,3,172,86,0,1240,1238,1,0,0,0,1241,
	1244,1,0,0,0,1242,1240,1,0,0,0,1242,1243,1,0,0,0,1243,1247,1,0,0,0,1244,
	1242,1,0,0,0,1245,1246,5,209,0,0,1246,1248,3,172,86,0,1247,1245,1,0,0,0,
	1247,1248,1,0,0,0,1248,171,1,0,0,0,1249,1250,3,174,87,0,1250,1251,5,121,
	0,0,1251,1252,3,276,138,0,1252,173,1,0,0,0,1253,1254,3,38,19,0,1254,175,
	1,0,0,0,1255,1256,5,88,0,0,1256,1266,3,46,23,0,1257,1267,3,178,89,0,1258,
	1264,3,182,91,0,1259,1261,3,184,92,0,1260,1262,5,274,0,0,1261,1260,1,0,
	0,0,1261,1262,1,0,0,0,1262,1265,1,0,0,0,1263,1265,5,274,0,0,1264,1259,1,
	0,0,0,1264,1263,1,0,0,0,1264,1265,1,0,0,0,1265,1267,1,0,0,0,1266,1257,1,
	0,0,0,1266,1258,1,0,0,0,1267,177,1,0,0,0,1268,1269,3,180,90,0,1269,1271,
	5,85,0,0,1270,1272,5,274,0,0,1271,1270,1,0,0,0,1271,1272,1,0,0,0,1272,179,
	1,0,0,0,1273,1274,5,205,0,0,1274,1275,3,46,23,0,1275,1276,5,237,0,0,1276,
	1277,5,117,0,0,1277,1278,3,46,23,0,1278,181,1,0,0,0,1279,1281,7,25,0,0,
	1280,1279,1,0,0,0,1280,1281,1,0,0,0,1281,1282,1,0,0,0,1282,1283,3,46,23,
	0,1283,1284,5,87,0,0,1284,183,1,0,0,0,1285,1288,5,104,0,0,1286,1289,3,274,
	137,0,1287,1289,3,186,93,0,1288,1286,1,0,0,0,1288,1287,1,0,0,0,1289,185,
	1,0,0,0,1290,1291,5,43,0,0,1291,1292,3,188,94,0,1292,1293,7,26,0,0,1293,
	1294,5,41,0,0,1294,1296,5,275,0,0,1295,1297,3,190,95,0,1296,1295,1,0,0,
	0,1297,1298,1,0,0,0,1298,1296,1,0,0,0,1298,1299,1,0,0,0,1299,1333,1,0,0,
	0,1300,1305,3,204,102,0,1301,1305,5,212,0,0,1302,1305,5,210,0,0,1303,1305,
	5,245,0,0,1304,1300,1,0,0,0,1304,1301,1,0,0,0,1304,1302,1,0,0,0,1304,1303,
	1,0,0,0,1305,1306,1,0,0,0,1306,1307,5,115,0,0,1307,1308,3,188,94,0,1308,
	1309,7,26,0,0,1309,1310,5,147,0,0,1310,1312,5,275,0,0,1311,1313,3,190,95,
	0,1312,1311,1,0,0,0,1313,1314,1,0,0,0,1314,1312,1,0,0,0,1314,1315,1,0,0,
	0,1315,1333,1,0,0,0,1316,1321,3,204,102,0,1317,1321,5,212,0,0,1318,1321,
	5,210,0,0,1319,1321,5,245,0,0,1320,1316,1,0,0,0,1320,1317,1,0,0,0,1320,
	1318,1,0,0,0,1320,1319,1,0,0,0,1321,1322,1,0,0,0,1322,1323,5,147,0,0,1323,
	1324,5,115,0,0,1324,1325,3,188,94,0,1325,1326,7,26,0,0,1326,1328,5,275,
	0,0,1327,1329,3,190,95,0,1328,1327,1,0,0,0,1329,1330,1,0,0,0,1330,1328,
	1,0,0,0,1330,1331,1,0,0,0,1331,1333,1,0,0,0,1332,1290,1,0,0,0,1332,1304,
	1,0,0,0,1332,1320,1,0,0,0,1333,187,1,0,0,0,1334,1350,5,205,0,0,1335,1350,
	5,117,0,0,1336,1350,5,196,0,0,1337,1338,7,27,0,0,1338,1339,7,28,0,0,1339,
	1340,5,237,0,0,1340,1350,5,205,0,0,1341,1342,5,152,0,0,1342,1343,7,28,0,
	0,1343,1344,5,237,0,0,1344,1350,5,205,0,0,1345,1346,5,153,0,0,1346,1347,
	7,28,0,0,1347,1348,5,237,0,0,1348,1350,5,205,0,0,1349,1334,1,0,0,0,1349,
	1335,1,0,0,0,1349,1336,1,0,0,0,1349,1337,1,0,0,0,1349,1341,1,0,0,0,1349,
	1345,1,0,0,0,1350,189,1,0,0,0,1351,1354,3,192,96,0,1352,1355,3,198,99,0,
	1353,1355,3,200,100,0,1354,1352,1,0,0,0,1354,1353,1,0,0,0,1355,191,1,0,
	0,0,1356,1357,7,29,0,0,1357,193,1,0,0,0,1358,1362,5,284,0,0,1359,1360,5,
	279,0,0,1360,1362,5,279,0,0,1361,1358,1,0,0,0,1361,1359,1,0,0,0,1362,195,
	1,0,0,0,1363,1365,7,30,0,0,1364,1363,1,0,0,0,1365,1366,1,0,0,0,1366,1364,
	1,0,0,0,1366,1367,1,0,0,0,1367,197,1,0,0,0,1368,1369,3,274,137,0,1369,199,
	1,0,0,0,1370,1374,3,204,102,0,1371,1374,5,212,0,0,1372,1374,5,245,0,0,1373,
	1370,1,0,0,0,1373,1371,1,0,0,0,1373,1372,1,0,0,0,1374,1375,1,0,0,0,1375,
	1376,5,147,0,0,1376,1377,5,115,0,0,1377,1378,3,188,94,0,1378,1379,7,26,
	0,0,1379,1381,5,275,0,0,1380,1382,3,202,101,0,1381,1380,1,0,0,0,1382,1383,
	1,0,0,0,1383,1381,1,0,0,0,1383,1384,1,0,0,0,1384,201,1,0,0,0,1385,1388,
	3,194,97,0,1386,1389,3,198,99,0,1387,1389,3,200,100,0,1388,1386,1,0,0,0,
	1388,1387,1,0,0,0,1389,203,1,0,0,0,1390,1393,3,208,104,0,1391,1392,7,31,
	0,0,1392,1394,3,228,114,0,1393,1391,1,0,0,0,1393,1394,1,0,0,0,1394,205,
	1,0,0,0,1395,1398,3,210,105,0,1396,1397,7,31,0,0,1397,1399,3,228,114,0,
	1398,1396,1,0,0,0,1398,1399,1,0,0,0,1399,207,1,0,0,0,1400,1406,3,212,106,
	0,1401,1402,3,52,26,0,1402,1403,3,212,106,0,1403,1405,1,0,0,0,1404,1401,
	1,0,0,0,1405,1408,1,0,0,0,1406,1404,1,0,0,0,1406,1407,1,0,0,0,1407,209,
	1,0,0,0,1408,1406,1,0,0,0,1409,1415,3,214,107,0,1410,1411,3,52,26,0,1411,
	1412,3,214,107,0,1412,1414,1,0,0,0,1413,1410,1,0,0,0,1414,1417,1,0,0,0,
	1415,1413,1,0,0,0,1415,1416,1,0,0,0,1416,211,1,0,0,0,1417,1415,1,0,0,0,
	1418,1420,7,7,0,0,1419,1421,3,34,17,0,1420,1419,1,0,0,0,1421,1422,1,0,0,
	0,1422,1420,1,0,0,0,1422,1423,1,0,0,0,1423,1426,1,0,0,0,1424,1426,5,212,
	0,0,1425,1418,1,0,0,0,1425,1424,1,0,0,0,1426,213,1,0,0,0,1427,1429,7,7,
	0,0,1428,1430,3,42,21,0,1429,1428,1,0,0,0,1430,1431,1,0,0,0,1431,1429,1,
	0,0,0,1431,1432,1,0,0,0,1432,1435,1,0,0,0,1433,1435,5,212,0,0,1434,1427,
	1,0,0,0,1434,1433,1,0,0,0,1435,215,1,0,0,0,1436,1437,3,218,109,0,1437,1438,
	5,237,0,0,1438,1439,3,204,102,0,1439,217,1,0,0,0,1440,1441,3,50,25,0,1441,
	219,1,0,0,0,1442,1444,3,52,26,0,1443,1442,1,0,0,0,1443,1444,1,0,0,0,1444,
	1445,1,0,0,0,1445,1446,3,48,24,0,1446,221,1,0,0,0,1447,1449,3,52,26,0,1448,
	1447,1,0,0,0,1448,1449,1,0,0,0,1449,1451,1,0,0,0,1450,1452,7,6,0,0,1451,
	1450,1,0,0,0,1451,1452,1,0,0,0,1452,1454,1,0,0,0,1453,1455,3,42,21,0,1454,
	1453,1,0,0,0,1455,1456,1,0,0,0,1456,1454,1,0,0,0,1456,1457,1,0,0,0,1457,
	223,1,0,0,0,1458,1459,7,32,0,0,1459,1460,3,46,23,0,1460,225,1,0,0,0,1461,
	1462,5,117,0,0,1462,1469,3,46,23,0,1463,1466,3,46,23,0,1464,1465,7,31,0,
	0,1465,1467,3,228,114,0,1466,1464,1,0,0,0,1466,1467,1,0,0,0,1467,1469,1,
	0,0,0,1468,1461,1,0,0,0,1468,1463,1,0,0,0,1469,227,1,0,0,0,1470,1473,3,
	230,115,0,1471,1473,3,246,123,0,1472,1470,1,0,0,0,1472,1471,1,0,0,0,1473,
	229,1,0,0,0,1474,1480,3,238,119,0,1475,1480,3,232,116,0,1476,1480,3,240,
	120,0,1477,1480,3,242,121,0,1478,1480,3,244,122,0,1479,1474,1,0,0,0,1479,
	1475,1,0,0,0,1479,1476,1,0,0,0,1479,1477,1,0,0,0,1479,1478,1,0,0,0,1480,
	231,1,0,0,0,1481,1482,3,234,117,0,1482,233,1,0,0,0,1483,1485,5,208,0,0,
	1484,1483,1,0,0,0,1484,1485,1,0,0,0,1485,1488,1,0,0,0,1486,1489,3,220,110,
	0,1487,1489,3,236,118,0,1488,1486,1,0,0,0,1488,1487,1,0,0,0,1489,1490,1,
	0,0,0,1490,1491,7,33,0,0,1491,235,1,0,0,0,1492,1493,3,46,23,0,1493,237,
	1,0,0,0,1494,1496,5,208,0,0,1495,1494,1,0,0,0,1495,1496,1,0,0,0,1496,1497,
	1,0,0,0,1497,1498,3,46,23,0,1498,1499,5,102,0,0,1499,1500,3,286,143,0,1500,
	1501,3,274,137,0,1501,239,1,0,0,0,1502,1503,3,256,128,0,1503,1504,3,262,
	131,0,1504,241,1,0,0,0,1505,1506,3,258,129,0,1506,1507,3,264,132,0,1507,
	243,1,0,0,0,1508,1509,3,260,130,0,1509,1510,3,266,133,0,1510,245,1,0,0,
	0,1511,1512,5,115,0,0,1512,1513,3,188,94,0,1513,1514,7,26,0,0,1514,1515,
	7,34,0,0,1515,1517,5,275,0,0,1516,1518,3,248,124,0,1517,1516,1,0,0,0,1518,
	1519,1,0,0,0,1519,1517,1,0,0,0,1519,1520,1,0,0,0,1520,247,1,0,0,0,1521,
	1522,3,196,98,0,1522,1523,3,250,125,0,1523,1528,1,0,0,0,1524,1525,3,196,
	98,0,1525,1526,3,254,127,0,1526,1528,1,0,0,0,1527,1521,1,0,0,0,1527,1524,
	1,0,0,0,1528,249,1,0,0,0,1529,1530,3,252,126,0,1530,251,1,0,0,0,1531,1534,
	3,216,108,0,1532,1534,3,224,112,0,1533,1531,1,0,0,0,1533,1532,1,0,0,0,1534,
	1535,1,0,0,0,1535,1536,7,2,0,0,1536,1537,3,220,110,0,1537,1550,1,0,0,0,
	1538,1541,3,216,108,0,1539,1541,3,224,112,0,1540,1538,1,0,0,0,1540,1539,
	1,0,0,0,1541,1542,1,0,0,0,1542,1543,3,286,143,0,1543,1544,3,274,137,0,1544,
	1550,1,0,0,0,1545,1546,3,204,102,0,1546,1547,3,234,117,0,1547,1550,1,0,
	0,0,1548,1550,3,234,117,0,1549,1533,1,0,0,0,1549,1540,1,0,0,0,1549,1545,
	1,0,0,0,1549,1548,1,0,0,0,1550,253,1,0,0,0,1551,1556,5,147,0,0,1552,1556,
	5,146,0,0,1553,1554,5,110,0,0,1554,1556,5,111,0,0,1555,1551,1,0,0,0,1555,
	1552,1,0,0,0,1555,1553,1,0,0,0,1556,1557,1,0,0,0,1557,1558,5,115,0,0,1558,
	1559,3,188,94,0,1559,1560,7,26,0,0,1560,1562,5,275,0,0,1561,1563,3,248,
	124,0,1562,1561,1,0,0,0,1563,1564,1,0,0,0,1564,1562,1,0,0,0,1564,1565,1,
	0,0,0,1565,255,1,0,0,0,1566,1567,7,35,0,0,1567,257,1,0,0,0,1568,1569,7,
	36,0,0,1569,259,1,0,0,0,1570,1571,7,37,0,0,1571,261,1,0,0,0,1572,1573,3,
	274,137,0,1573,263,1,0,0,0,1574,1575,3,274,137,0,1575,265,1,0,0,0,1576,
	1601,3,54,27,0,1577,1601,5,228,0,0,1578,1601,5,229,0,0,1579,1580,5,17,0,
	0,1580,1581,5,269,0,0,1581,1582,3,300,150,0,1582,1583,5,273,0,0,1583,1584,
	3,300,150,0,1584,1585,5,273,0,0,1585,1586,3,300,150,0,1586,1587,5,270,0,
	0,1587,1601,1,0,0,0,1588,1589,5,18,0,0,1589,1590,5,269,0,0,1590,1591,3,
	300,150,0,1591,1592,5,270,0,0,1592,1601,1,0,0,0,1593,1601,3,216,108,0,1594,
	1601,3,224,112,0,1595,1601,3,124,62,0,1596,1597,5,269,0,0,1597,1598,3,274,
	137,0,1598,1599,5,270,0,0,1599,1601,1,0,0,0,1600,1576,1,0,0,0,1600,1577,
	1,0,0,0,1600,1578,1,0,0,0,1600,1579,1,0,0,0,1600,1588,1,0,0,0,1600,1593,
	1,0,0,0,1600,1594,1,0,0,0,1600,1595,1,0,0,0,1600,1596,1,0,0,0,1601,267,
	1,0,0,0,1602,1606,5,100,0,0,1603,1605,3,270,135,0,1604,1603,1,0,0,0,1605,
	1608,1,0,0,0,1606,1604,1,0,0,0,1606,1607,1,0,0,0,1607,1609,1,0,0,0,1608,
	1606,1,0,0,0,1609,1610,5,274,0,0,1610,269,1,0,0,0,1611,1613,7,15,0,0,1612,
	1611,1,0,0,0,1612,1613,1,0,0,0,1613,1614,1,0,0,0,1614,1615,5,262,0,0,1615,
	1616,5,106,0,0,1616,1617,3,272,136,0,1617,271,1,0,0,0,1618,1627,3,300,150,
	0,1619,1622,3,290,145,0,1620,1622,3,294,147,0,1621,1619,1,0,0,0,1621,1620,
	1,0,0,0,1622,1623,1,0,0,0,1623,1624,3,300,150,0,1624,1626,1,0,0,0,1625,
	1621,1,0,0,0,1626,1629,1,0,0,0,1627,1625,1,0,0,0,1627,1628,1,0,0,0,1628,
	273,1,0,0,0,1629,1627,1,0,0,0,1630,1631,3,278,139,0,1631,1632,5,273,0,0,
	1632,1633,3,304,152,0,1633,1634,3,302,151,0,1634,1644,1,0,0,0,1635,1636,
	3,278,139,0,1636,1637,5,273,0,0,1637,1638,3,304,152,0,1638,1644,1,0,0,0,
	1639,1640,3,278,139,0,1640,1641,3,302,151,0,1641,1644,1,0,0,0,1642,1644,
	3,278,139,0,1643,1630,1,0,0,0,1643,1635,1,0,0,0,1643,1639,1,0,0,0,1643,
	1642,1,0,0,0,1644,275,1,0,0,0,1645,1646,3,280,140,0,1646,1647,5,273,0,0,
	1647,1648,3,304,152,0,1648,1649,3,302,151,0,1649,1659,1,0,0,0,1650,1651,
	3,280,140,0,1651,1652,5,273,0,0,1652,1653,3,304,152,0,1653,1659,1,0,0,0,
	1654,1655,3,280,140,0,1655,1656,3,302,151,0,1656,1659,1,0,0,0,1657,1659,
	3,280,140,0,1658,1645,1,0,0,0,1658,1650,1,0,0,0,1658,1654,1,0,0,0,1658,
	1657,1,0,0,0,1659,277,1,0,0,0,1660,1663,3,280,140,0,1661,1662,7,38,0,0,
	1662,1664,3,278,139,0,1663,1661,1,0,0,0,1663,1664,1,0,0,0,1664,279,1,0,
	0,0,1665,1666,3,288,144,0,1666,1667,7,2,0,0,1667,1668,7,3,0,0,1668,1669,
	3,46,23,0,1669,1707,1,0,0,0,1670,1671,3,288,144,0,1671,1672,7,3,0,0,1672,
	1673,3,46,23,0,1673,1674,7,2,0,0,1674,1707,1,0,0,0,1675,1707,3,338,169,
	0,1676,1707,3,312,156,0,1677,1678,3,288,144,0,1678,1679,5,106,0,0,1679,
	1680,3,48,24,0,1680,1707,1,0,0,0,1681,1682,3,288,144,0,1682,1683,5,103,
	0,0,1683,1684,3,48,24,0,1684,1707,1,0,0,0,1685,1686,3,288,144,0,1686,1687,
	3,284,142,0,1687,1692,3,282,141,0,1688,1689,5,273,0,0,1689,1691,3,282,141,
	0,1690,1688,1,0,0,0,1691,1694,1,0,0,0,1692,1690,1,0,0,0,1692,1693,1,0,0,
	0,1693,1695,1,0,0,0,1694,1692,1,0,0,0,1695,1696,5,222,0,0,1696,1697,3,282,
	141,0,1697,1707,1,0,0,0,1698,1702,3,288,144,0,1699,1700,3,286,143,0,1700,
	1701,3,288,144,0,1701,1703,1,0,0,0,1702,1699,1,0,0,0,1702,1703,1,0,0,0,
	1703,1707,1,0,0,0,1704,1707,3,332,166,0,1705,1707,3,334,167,0,1706,1665,
	1,0,0,0,1706,1670,1,0,0,0,1706,1675,1,0,0,0,1706,1676,1,0,0,0,1706,1677,
	1,0,0,0,1706,1681,1,0,0,0,1706,1685,1,0,0,0,1706,1698,1,0,0,0,1706,1704,
	1,0,0,0,1706,1705,1,0,0,0,1707,281,1,0,0,0,1708,1718,5,268,0,0,1709,1718,
	5,267,0,0,1710,1712,5,263,0,0,1711,1713,3,102,51,0,1712,1711,1,0,0,0,1712,
	1713,1,0,0,0,1713,1718,1,0,0,0,1714,1718,5,266,0,0,1715,1718,3,54,27,0,
	1716,1718,3,32,16,0,1717,1708,1,0,0,0,1717,1709,1,0,0,0,1717,1710,1,0,0,
	0,1717,1714,1,0,0,0,1717,1715,1,0,0,0,1717,1716,1,0,0,0,1718,283,1,0,0,
	0,1719,1720,7,39,0,0,1720,285,1,0,0,0,1721,1722,7,40,0,0,1722,287,1,0,0,
	0,1723,1729,3,292,146,0,1724,1725,3,290,145,0,1725,1726,3,292,146,0,1726,
	1728,1,0,0,0,1727,1724,1,0,0,0,1728,1731,1,0,0,0,1729,1727,1,0,0,0,1729,
	1730,1,0,0,0,1730,289,1,0,0,0,1731,1729,1,0,0,0,1732,1733,7,41,0,0,1733,
	291,1,0,0,0,1734,1740,3,296,148,0,1735,1736,3,294,147,0,1736,1737,3,296,
	148,0,1737,1739,1,0,0,0,1738,1735,1,0,0,0,1739,1742,1,0,0,0,1740,1738,1,
	0,0,0,1740,1741,1,0,0,0,1741,293,1,0,0,0,1742,1740,1,0,0,0,1743,1744,7,
	42,0,0,1744,295,1,0,0,0,1745,1751,3,300,150,0,1746,1747,3,298,149,0,1747,
	1748,3,300,150,0,1748,1750,1,0,0,0,1749,1746,1,0,0,0,1750,1753,1,0,0,0,
	1751,1749,1,0,0,0,1751,1752,1,0,0,0,1752,297,1,0,0,0,1753,1751,1,0,0,0,
	1754,1755,7,43,0,0,1755,299,1,0,0,0,1756,1757,6,150,-1,0,1757,1758,5,130,
	0,0,1758,2022,3,300,150,55,1759,1760,5,289,0,0,1760,2022,3,300,150,54,1761,
	1762,5,133,0,0,1762,2022,3,300,150,53,1763,1764,5,11,0,0,1764,1765,3,300,
	150,0,1765,1766,5,139,0,0,1766,1769,3,300,150,0,1767,1768,5,185,0,0,1768,
	1770,3,100,50,0,1769,1767,1,0,0,0,1769,1770,1,0,0,0,1770,2022,1,0,0,0,1771,
	1772,5,189,0,0,1772,1773,3,300,150,0,1773,1774,5,139,0,0,1774,1777,3,300,
	150,0,1775,1776,5,185,0,0,1776,1778,3,100,50,0,1777,1775,1,0,0,0,1777,1778,
	1,0,0,0,1778,2022,1,0,0,0,1779,1780,5,188,0,0,1780,1785,3,300,150,0,1781,
	1782,5,273,0,0,1782,1784,3,300,150,0,1783,1781,1,0,0,0,1784,1787,1,0,0,
	0,1785,1783,1,0,0,0,1785,1786,1,0,0,0,1786,1788,1,0,0,0,1787,1785,1,0,0,
	0,1788,1789,5,209,0,0,1789,1790,3,300,150,50,1790,2022,1,0,0,0,1791,1792,
	5,188,0,0,1792,1793,5,117,0,0,1793,2022,3,46,23,0,1794,1795,5,188,0,0,1795,
	1796,5,117,0,0,1796,2022,3,216,108,0,1797,1798,5,210,0,0,1798,1801,5,183,
	0,0,1799,1801,5,183,0,0,1800,1797,1,0,0,0,1800,1799,1,0,0,0,1801,1802,1,
	0,0,0,1802,2022,3,226,113,0,1803,1804,5,210,0,0,1804,1805,5,183,0,0,1805,
	2022,3,216,108,0,1806,1807,5,183,0,0,1807,2022,3,216,108,0,1808,1811,5,
	263,0,0,1809,1812,5,278,0,0,1810,1812,5,262,0,0,1811,1809,1,0,0,0,1811,
	1810,1,0,0,0,1812,1815,1,0,0,0,1813,1815,5,266,0,0,1814,1808,1,0,0,0,1814,
	1813,1,0,0,0,1815,1816,1,0,0,0,1816,1817,5,237,0,0,1817,2022,3,300,150,
	44,1818,1819,5,266,0,0,1819,1820,5,237,0,0,1820,2022,3,300,150,43,1821,
	1822,5,30,0,0,1822,1827,3,300,150,0,1823,1824,5,273,0,0,1824,1826,3,300,
	150,0,1825,1823,1,0,0,0,1826,1829,1,0,0,0,1827,1825,1,0,0,0,1827,1828,1,
	0,0,0,1828,1830,1,0,0,0,1829,1827,1,0,0,0,1830,1831,7,38,0,0,1831,1832,
	3,300,150,39,1832,2022,1,0,0,0,1833,1834,5,149,0,0,1834,2022,3,300,150,
	37,1835,1836,5,12,0,0,1836,1837,5,269,0,0,1837,1838,3,274,137,0,1838,1839,
	5,270,0,0,1839,2022,1,0,0,0,1840,1841,5,14,0,0,1841,1846,3,300,150,0,1842,
	1843,5,273,0,0,1843,1845,3,300,150,0,1844,1842,1,0,0,0,1845,1848,1,0,0,
	0,1846,1844,1,0,0,0,1846,1847,1,0,0,0,1847,1849,1,0,0,0,1848,1846,1,0,0,
	0,1849,1850,5,209,0,0,1850,1851,3,300,150,35,1851,2022,1,0,0,0,1852,1853,
	5,14,0,0,1853,1854,5,117,0,0,1854,2022,3,216,108,0,1855,1856,5,13,0,0,1856,
	1861,3,300,150,0,1857,1858,5,273,0,0,1858,1860,3,300,150,0,1859,1857,1,
	0,0,0,1860,1863,1,0,0,0,1861,1859,1,0,0,0,1861,1862,1,0,0,0,1862,1864,1,
	0,0,0,1863,1861,1,0,0,0,1864,1865,5,209,0,0,1865,1866,3,300,150,33,1866,
	2022,1,0,0,0,1867,1868,5,13,0,0,1868,1869,5,117,0,0,1869,2022,3,216,108,
	0,1870,1871,5,210,0,0,1871,1872,5,214,0,0,1872,1873,5,234,0,0,1873,2022,
	3,300,150,31,1874,1875,5,205,0,0,1875,1876,5,217,0,0,1876,1877,5,234,0,
	0,1877,2022,3,300,150,30,1878,1879,5,205,0,0,1879,1880,5,202,0,0,1880,1881,
	5,234,0,0,1881,2022,3,300,150,29,1882,1883,5,17,0,0,1883,1884,5,269,0,0,
	1884,1885,3,300,150,0,1885,1886,5,273,0,0,1886,1887,3,300,150,0,1887,1888,
	5,273,0,0,1888,1889,3,300,150,0,1889,1890,5,270,0,0,1890,2022,1,0,0,0,1891,
	1892,5,18,0,0,1892,1893,5,269,0,0,1893,1894,3,300,150,0,1894,1895,5,270,
	0,0,1895,2022,1,0,0,0,1896,1897,3,266,133,0,1897,1898,7,44,0,0,1898,1899,
	3,300,150,0,1899,1900,3,58,29,0,1900,2022,1,0,0,0,1901,1902,5,184,0,0,1902,
	1907,3,300,150,0,1903,1904,5,273,0,0,1904,1906,3,300,150,0,1905,1903,1,
	0,0,0,1906,1909,1,0,0,0,1907,1905,1,0,0,0,1907,1908,1,0,0,0,1908,1910,1,
	0,0,0,1909,1907,1,0,0,0,1910,1911,5,209,0,0,1911,1912,3,300,150,25,1912,
	2022,1,0,0,0,1913,1914,5,186,0,0,1914,1919,3,300,150,0,1915,1916,5,273,
	0,0,1916,1918,3,300,150,0,1917,1915,1,0,0,0,1918,1921,1,0,0,0,1919,1917,
	1,0,0,0,1919,1920,1,0,0,0,1920,1922,1,0,0,0,1921,1919,1,0,0,0,1922,1923,
	5,209,0,0,1923,1924,3,300,150,24,1924,2022,1,0,0,0,1925,1926,5,15,0,0,1926,
	1928,3,274,137,0,1927,1929,3,310,155,0,1928,1927,1,0,0,0,1928,1929,1,0,
	0,0,1929,2022,1,0,0,0,1930,1931,5,210,0,0,1931,1932,5,183,0,0,1932,1933,
	5,203,0,0,1933,1942,5,213,0,0,1934,1936,5,205,0,0,1935,1934,1,0,0,0,1935,
	1936,1,0,0,0,1936,1937,1,0,0,0,1937,1943,5,217,0,0,1938,1940,5,210,0,0,
	1939,1938,1,0,0,0,1939,1940,1,0,0,0,1940,1941,1,0,0,0,1941,1943,5,214,0,
	0,1942,1935,1,0,0,0,1942,1939,1,0,0,0,1943,1944,1,0,0,0,1944,1945,5,204,
	0,0,1945,2022,3,274,137,0,1946,1948,3,32,16,0,1947,1946,1,0,0,0,1948,1949,
	1,0,0,0,1949,1947,1,0,0,0,1949,1950,1,0,0,0,1950,1951,1,0,0,0,1951,1952,
	5,15,0,0,1952,1954,3,274,137,0,1953,1955,3,310,155,0,1954,1953,1,0,0,0,
	1954,1955,1,0,0,0,1955,2022,1,0,0,0,1956,1957,5,16,0,0,1957,1958,7,45,0,
	0,1958,1959,5,237,0,0,1959,1961,3,274,137,0,1960,1962,3,310,155,0,1961,
	1960,1,0,0,0,1961,1962,1,0,0,0,1962,2022,1,0,0,0,1963,1965,3,32,16,0,1964,
	1963,1,0,0,0,1965,1966,1,0,0,0,1966,1964,1,0,0,0,1966,1967,1,0,0,0,1967,
	1968,1,0,0,0,1968,1969,5,16,0,0,1969,1970,7,45,0,0,1970,1971,5,237,0,0,
	1971,1973,3,274,137,0,1972,1974,3,310,155,0,1973,1972,1,0,0,0,1973,1974,
	1,0,0,0,1974,2022,1,0,0,0,1975,1978,3,320,160,0,1976,1978,3,322,161,0,1977,
	1975,1,0,0,0,1977,1976,1,0,0,0,1978,1979,1,0,0,0,1979,1980,3,218,109,0,
	1980,1982,3,324,162,0,1981,1983,5,38,0,0,1982,1981,1,0,0,0,1982,1983,1,
	0,0,0,1983,2022,1,0,0,0,1984,1987,3,320,160,0,1985,1987,3,322,161,0,1986,
	1984,1,0,0,0,1986,1985,1,0,0,0,1987,1990,1,0,0,0,1988,1991,3,224,112,0,
	1989,1991,3,216,108,0,1990,1988,1,0,0,0,1990,1989,1,0,0,0,1991,1992,1,0,
	0,0,1992,1993,5,143,0,0,1993,1994,3,46,23,0,1994,1995,5,233,0,0,1995,1997,
	3,46,23,0,1996,1998,5,274,0,0,1997,1996,1,0,0,0,1997,1998,1,0,0,0,1998,
	2022,1,0,0,0,1999,2001,5,263,0,0,2000,2002,3,102,51,0,2001,2000,1,0,0,0,
	2001,2002,1,0,0,0,2002,2022,1,0,0,0,2003,2022,5,228,0,0,2004,2022,3,32,
	16,0,2005,2022,3,224,112,0,2006,2022,3,216,108,0,2007,2022,3,204,102,0,
	2008,2022,3,46,23,0,2009,2022,3,124,62,0,2010,2022,5,266,0,0,2011,2022,
	5,267,0,0,2012,2022,5,268,0,0,2013,2022,3,54,27,0,2014,2022,5,242,0,0,2015,
	2022,5,223,0,0,2016,2022,5,212,0,0,2017,2018,5,269,0,0,2018,2019,3,274,
	137,0,2019,2020,5,270,0,0,2020,2022,1,0,0,0,2021,1756,1,0,0,0,2021,1759,
	1,0,0,0,2021,1761,1,0,0,0,2021,1763,1,0,0,0,2021,1771,1,0,0,0,2021,1779,
	1,0,0,0,2021,1791,1,0,0,0,2021,1794,1,0,0,0,2021,1800,1,0,0,0,2021,1803,
	1,0,0,0,2021,1806,1,0,0,0,2021,1814,1,0,0,0,2021,1818,1,0,0,0,2021,1821,
	1,0,0,0,2021,1833,1,0,0,0,2021,1835,1,0,0,0,2021,1840,1,0,0,0,2021,1852,
	1,0,0,0,2021,1855,1,0,0,0,2021,1867,1,0,0,0,2021,1870,1,0,0,0,2021,1874,
	1,0,0,0,2021,1878,1,0,0,0,2021,1882,1,0,0,0,2021,1891,1,0,0,0,2021,1896,
	1,0,0,0,2021,1901,1,0,0,0,2021,1913,1,0,0,0,2021,1925,1,0,0,0,2021,1930,
	1,0,0,0,2021,1947,1,0,0,0,2021,1956,1,0,0,0,2021,1964,1,0,0,0,2021,1977,
	1,0,0,0,2021,1986,1,0,0,0,2021,1999,1,0,0,0,2021,2003,1,0,0,0,2021,2004,
	1,0,0,0,2021,2005,1,0,0,0,2021,2006,1,0,0,0,2021,2007,1,0,0,0,2021,2008,
	1,0,0,0,2021,2009,1,0,0,0,2021,2010,1,0,0,0,2021,2011,1,0,0,0,2021,2012,
	1,0,0,0,2021,2013,1,0,0,0,2021,2014,1,0,0,0,2021,2015,1,0,0,0,2021,2016,
	1,0,0,0,2021,2017,1,0,0,0,2022,2045,1,0,0,0,2023,2026,10,38,0,0,2024,2025,
	5,273,0,0,2025,2027,3,300,150,0,2026,2024,1,0,0,0,2027,2028,1,0,0,0,2028,
	2026,1,0,0,0,2028,2029,1,0,0,0,2029,2030,1,0,0,0,2030,2031,7,38,0,0,2031,
	2032,3,300,150,39,2032,2044,1,0,0,0,2033,2034,10,42,0,0,2034,2044,3,302,
	151,0,2035,2036,10,41,0,0,2036,2037,5,273,0,0,2037,2038,3,304,152,0,2038,
	2039,3,302,151,0,2039,2044,1,0,0,0,2040,2041,10,40,0,0,2041,2042,5,273,
	0,0,2042,2044,3,304,152,0,2043,2023,1,0,0,0,2043,2033,1,0,0,0,2043,2035,
	1,0,0,0,2043,2040,1,0,0,0,2044,2047,1,0,0,0,2045,2043,1,0,0,0,2045,2046,
	1,0,0,0,2046,301,1,0,0,0,2047,2045,1,0,0,0,2048,2049,7,46,0,0,2049,2050,
	5,116,0,0,2050,2051,5,263,0,0,2051,2052,5,162,0,0,2052,303,1,0,0,0,2053,
	2060,3,306,153,0,2054,2060,3,308,154,0,2055,2056,3,306,153,0,2056,2057,
	5,209,0,0,2057,2058,3,308,154,0,2058,2060,1,0,0,0,2059,2053,1,0,0,0,2059,
	2054,1,0,0,0,2059,2055,1,0,0,0,2060,305,1,0,0,0,2061,2062,5,20,0,0,2062,
	2063,3,274,137,0,2063,307,1,0,0,0,2064,2065,5,21,0,0,2065,2066,3,274,137,
	0,2066,309,1,0,0,0,2067,2068,5,4,0,0,2068,2071,3,274,137,0,2069,2071,3,
	314,157,0,2070,2067,1,0,0,0,2070,2069,1,0,0,0,2071,311,1,0,0,0,2072,2073,
	5,7,0,0,2073,2074,3,314,157,0,2074,313,1,0,0,0,2075,2076,5,143,0,0,2076,
	2092,3,266,133,0,2077,2078,5,237,0,0,2078,2079,3,266,133,0,2079,2080,5,
	139,0,0,2080,2081,3,266,133,0,2081,2092,1,0,0,0,2082,2083,5,237,0,0,2083,
	2084,3,266,133,0,2084,2085,5,141,0,0,2085,2086,3,266,133,0,2086,2092,1,
	0,0,0,2087,2088,5,139,0,0,2088,2092,3,266,133,0,2089,2090,5,141,0,0,2090,
	2092,3,266,133,0,2091,2075,1,0,0,0,2091,2077,1,0,0,0,2091,2082,1,0,0,0,
	2091,2087,1,0,0,0,2091,2089,1,0,0,0,2092,315,1,0,0,0,2093,2094,5,143,0,
	0,2094,2110,3,318,159,0,2095,2096,5,139,0,0,2096,2110,3,318,159,0,2097,
	2098,5,141,0,0,2098,2110,3,318,159,0,2099,2100,5,237,0,0,2100,2101,3,318,
	159,0,2101,2102,5,139,0,0,2102,2103,3,318,159,0,2103,2110,1,0,0,0,2104,
	2105,5,237,0,0,2105,2106,3,318,159,0,2106,2107,5,141,0,0,2107,2108,3,318,
	159,0,2108,2110,1,0,0,0,2109,2093,1,0,0,0,2109,2095,1,0,0,0,2109,2097,1,
	0,0,0,2109,2099,1,0,0,0,2109,2104,1,0,0,0,2110,317,1,0,0,0,2111,2116,3,
	54,27,0,2112,2116,5,228,0,0,2113,2116,5,229,0,0,2114,2116,3,216,108,0,2115,
	2111,1,0,0,0,2115,2112,1,0,0,0,2115,2113,1,0,0,0,2115,2114,1,0,0,0,2116,
	319,1,0,0,0,2117,2118,5,210,0,0,2118,2124,5,183,0,0,2119,2124,5,183,0,0,
	2120,2124,5,13,0,0,2121,2124,5,14,0,0,2122,2124,5,188,0,0,2123,2117,1,0,
	0,0,2123,2119,1,0,0,0,2123,2120,1,0,0,0,2123,2121,1,0,0,0,2123,2122,1,0,
	0,0,2124,321,1,0,0,0,2125,2126,7,47,0,0,2126,323,1,0,0,0,2127,2131,5,226,
	0,0,2128,2132,3,326,163,0,2129,2132,3,328,164,0,2130,2132,3,330,165,0,2131,
	2128,1,0,0,0,2131,2129,1,0,0,0,2131,2130,1,0,0,0,2132,2133,1,0,0,0,2133,
	2134,5,274,0,0,2134,2138,1,0,0,0,2135,2136,5,237,0,0,2136,2138,3,326,163,
	0,2137,2127,1,0,0,0,2137,2135,1,0,0,0,2138,325,1,0,0,0,2139,2140,5,117,
	0,0,2140,2143,3,46,23,0,2141,2142,7,31,0,0,2142,2144,3,228,114,0,2143,2141,
	1,0,0,0,2143,2144,1,0,0,0,2144,327,1,0,0,0,2145,2146,5,205,0,0,2146,2147,
	3,46,23,0,2147,2148,5,143,0,0,2148,2149,3,46,23,0,2149,2150,5,233,0,0,2150,
	2151,3,46,23,0,2151,329,1,0,0,0,2152,2153,5,205,0,0,2153,2154,3,46,23,0,
	2154,2155,5,213,0,0,2155,2156,5,271,0,0,2156,2161,3,46,23,0,2157,2158,5,
	273,0,0,2158,2160,3,46,23,0,2159,2157,1,0,0,0,2160,2163,1,0,0,0,2161,2159,
	1,0,0,0,2161,2162,1,0,0,0,2162,2164,1,0,0,0,2163,2161,1,0,0,0,2164,2165,
	5,209,0,0,2165,2166,3,46,23,0,2166,2167,5,272,0,0,2167,331,1,0,0,0,2168,
	2169,3,300,150,0,2169,2170,7,48,0,0,2170,2195,1,0,0,0,2171,2172,3,300,150,
	0,2172,2173,7,49,0,0,2173,2174,7,2,0,0,2174,2195,1,0,0,0,2175,2176,3,300,
	150,0,2176,2177,7,5,0,0,2177,2178,5,263,0,0,2178,2179,5,160,0,0,2179,2195,
	1,0,0,0,2180,2181,3,300,150,0,2181,2182,7,50,0,0,2182,2183,3,32,16,0,2183,
	2195,1,0,0,0,2184,2185,3,300,150,0,2185,2186,7,51,0,0,2186,2187,3,32,16,
	0,2187,2195,1,0,0,0,2188,2189,3,204,102,0,2189,2190,5,85,0,0,2190,2195,
	1,0,0,0,2191,2192,3,300,150,0,2192,2193,5,87,0,0,2193,2195,1,0,0,0,2194,
	2168,1,0,0,0,2194,2171,1,0,0,0,2194,2175,1,0,0,0,2194,2180,1,0,0,0,2194,
	2184,1,0,0,0,2194,2188,1,0,0,0,2194,2191,1,0,0,0,2195,333,1,0,0,0,2196,
	2197,5,230,0,0,2197,2198,3,336,168,0,2198,2199,5,86,0,0,2199,2205,1,0,0,
	0,2200,2201,5,230,0,0,2201,2202,3,336,168,0,2202,2203,5,87,0,0,2203,2205,
	1,0,0,0,2204,2196,1,0,0,0,2204,2200,1,0,0,0,2205,335,1,0,0,0,2206,2209,
	3,46,23,0,2207,2209,5,197,0,0,2208,2206,1,0,0,0,2208,2207,1,0,0,0,2209,
	2210,1,0,0,0,2210,2208,1,0,0,0,2210,2211,1,0,0,0,2211,337,1,0,0,0,2212,
	2213,3,204,102,0,2213,2214,3,48,24,0,2214,2215,5,103,0,0,2215,2225,1,0,
	0,0,2216,2217,3,204,102,0,2217,2218,3,48,24,0,2218,2219,5,106,0,0,2219,
	2225,1,0,0,0,2220,2221,3,204,102,0,2221,2222,5,106,0,0,2222,2223,3,48,24,
	0,2223,2225,1,0,0,0,2224,2212,1,0,0,0,2224,2216,1,0,0,0,2224,2220,1,0,0,
	0,2225,339,1,0,0,0,2226,2227,5,99,0,0,2227,2235,3,46,23,0,2228,2230,5,171,
	0,0,2229,2231,5,262,0,0,2230,2229,1,0,0,0,2231,2232,1,0,0,0,2232,2230,1,
	0,0,0,2232,2233,1,0,0,0,2233,2234,1,0,0,0,2234,2236,5,270,0,0,2235,2228,
	1,0,0,0,2235,2236,1,0,0,0,2236,2238,1,0,0,0,2237,2239,5,276,0,0,2238,2237,
	1,0,0,0,2238,2239,1,0,0,0,2239,341,1,0,0,0,2240,2241,5,267,0,0,2241,343,
	1,0,0,0,2242,2243,3,274,137,0,2243,2244,5,109,0,0,2244,2245,3,274,137,0,
	2245,2246,5,273,0,0,2246,2249,5,26,0,0,2247,2250,3,346,173,0,2248,2250,
	3,348,174,0,2249,2247,1,0,0,0,2249,2248,1,0,0,0,2250,2252,1,0,0,0,2251,
	2253,3,356,178,0,2252,2251,1,0,0,0,2252,2253,1,0,0,0,2253,345,1,0,0,0,2254,
	2255,3,354,177,0,2255,347,1,0,0,0,2256,2257,5,275,0,0,2257,2259,3,350,175,
	0,2258,2260,5,274,0,0,2259,2258,1,0,0,0,2259,2260,1,0,0,0,2260,349,1,0,
	0,0,2261,2265,3,352,176,0,2262,2264,3,352,176,0,2263,2262,1,0,0,0,2264,
	2267,1,0,0,0,2265,2263,1,0,0,0,2265,2266,1,0,0,0,2266,351,1,0,0,0,2267,
	2265,1,0,0,0,2268,2269,5,289,0,0,2269,2271,3,354,177,0,2270,2272,7,52,0,
	0,2271,2270,1,0,0,0,2271,2272,1,0,0,0,2272,353,1,0,0,0,2273,2288,5,191,
	0,0,2274,2275,5,35,0,0,2275,2288,3,274,137,0,2276,2277,5,34,0,0,2277,2278,
	7,53,0,0,2278,2288,3,274,137,0,2279,2280,5,33,0,0,2280,2288,3,354,177,0,
	2281,2282,5,21,0,0,2282,2288,3,218,109,0,2283,2284,5,116,0,0,2284,2285,
	5,263,0,0,2285,2286,5,162,0,0,2286,2288,5,131,0,0,2287,2273,1,0,0,0,2287,
	2274,1,0,0,0,2287,2276,1,0,0,0,2287,2279,1,0,0,0,2287,2281,1,0,0,0,2287,
	2283,1,0,0,0,2288,355,1,0,0,0,2289,2290,5,19,0,0,2290,2292,3,274,137,0,
	2291,2293,5,192,0,0,2292,2291,1,0,0,0,2292,2293,1,0,0,0,2293,357,1,0,0,
	0,257,364,366,377,382,391,395,402,406,409,414,417,421,426,437,441,445,450,
	461,490,496,501,509,513,518,523,534,539,544,550,556,562,567,573,579,588,
	590,593,598,603,609,615,621,626,632,638,647,649,653,656,661,666,672,678,
	684,689,695,701,703,711,720,729,746,749,752,757,762,767,771,775,778,784,
	788,796,799,802,810,817,824,833,840,848,856,859,866,872,883,892,896,900,
	904,918,925,932,939,945,950,958,964,967,982,986,990,993,996,1004,1011,1015,
	1023,1027,1035,1044,1052,1058,1062,1064,1069,1076,1081,1087,1090,1093,1098,
	1102,1104,1110,1127,1137,1141,1145,1159,1162,1184,1187,1206,1211,1218,1222,
	1231,1234,1242,1247,1261,1264,1266,1271,1280,1288,1298,1304,1314,1320,1330,
	1332,1349,1354,1361,1366,1373,1383,1388,1393,1398,1406,1415,1422,1425,1431,
	1434,1443,1448,1451,1456,1466,1468,1472,1479,1484,1488,1495,1519,1527,1533,
	1540,1549,1555,1564,1600,1606,1612,1621,1627,1643,1658,1663,1692,1702,1706,
	1712,1717,1729,1740,1751,1769,1777,1785,1800,1811,1814,1827,1846,1861,1907,
	1919,1928,1935,1939,1942,1949,1954,1961,1966,1973,1977,1982,1986,1990,1997,
	2001,2021,2028,2043,2045,2059,2070,2091,2109,2115,2123,2131,2137,2143,2161,
	2194,2204,2208,2210,2224,2232,2235,2238,2249,2252,2259,2265,2271,2287,2292];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegelSpraakParser.__ATN) {
			RegelSpraakParser.__ATN = new ATNDeserializer().deserialize(RegelSpraakParser._serializedATN);
		}

		return RegelSpraakParser.__ATN;
	}


	static DecisionsToDFA = RegelSpraakParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RegelSpraakDocumentContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	public definitie_list(): DefinitieContext[] {
		return this.getTypedRuleContexts(DefinitieContext) as DefinitieContext[];
	}
	public definitie(i: number): DefinitieContext {
		return this.getTypedRuleContext(DefinitieContext, i) as DefinitieContext;
	}
	public regel_list(): RegelContext[] {
		return this.getTypedRuleContexts(RegelContext) as RegelContext[];
	}
	public regel(i: number): RegelContext {
		return this.getTypedRuleContext(RegelContext, i) as RegelContext;
	}
	public regelGroep_list(): RegelGroepContext[] {
		return this.getTypedRuleContexts(RegelGroepContext) as RegelGroepContext[];
	}
	public regelGroep(i: number): RegelGroepContext {
		return this.getTypedRuleContext(RegelGroepContext, i) as RegelGroepContext;
	}
	public beslistabel_list(): BeslistabelContext[] {
		return this.getTypedRuleContexts(BeslistabelContext) as BeslistabelContext[];
	}
	public beslistabel(i: number): BeslistabelContext {
		return this.getTypedRuleContext(BeslistabelContext, i) as BeslistabelContext;
	}
	public consistentieregel_list(): ConsistentieregelContext[] {
		return this.getTypedRuleContexts(ConsistentieregelContext) as ConsistentieregelContext[];
	}
	public consistentieregel(i: number): ConsistentieregelContext {
		return this.getTypedRuleContext(ConsistentieregelContext, i) as ConsistentieregelContext;
	}
	public eenheidsysteemDefinition_list(): EenheidsysteemDefinitionContext[] {
		return this.getTypedRuleContexts(EenheidsysteemDefinitionContext) as EenheidsysteemDefinitionContext[];
	}
	public eenheidsysteemDefinition(i: number): EenheidsysteemDefinitionContext {
		return this.getTypedRuleContext(EenheidsysteemDefinitionContext, i) as EenheidsysteemDefinitionContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelSpraakDocument;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelSpraakDocument) {
			return visitor.visitRegelSpraakDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public objectTypeDefinition(): ObjectTypeDefinitionContext {
		return this.getTypedRuleContext(ObjectTypeDefinitionContext, 0) as ObjectTypeDefinitionContext;
	}
	public domeinDefinition(): DomeinDefinitionContext {
		return this.getTypedRuleContext(DomeinDefinitionContext, 0) as DomeinDefinitionContext;
	}
	public parameterDefinition(): ParameterDefinitionContext {
		return this.getTypedRuleContext(ParameterDefinitionContext, 0) as ParameterDefinitionContext;
	}
	public dimensieDefinition(): DimensieDefinitionContext {
		return this.getTypedRuleContext(DimensieDefinitionContext, 0) as DimensieDefinitionContext;
	}
	public feitTypeDefinition(): FeitTypeDefinitionContext {
		return this.getTypedRuleContext(FeitTypeDefinitionContext, 0) as FeitTypeDefinitionContext;
	}
	public dagsoortDefinition(): DagsoortDefinitionContext {
		return this.getTypedRuleContext(DagsoortDefinitionContext, 0) as DagsoortDefinitionContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_definitie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDefinitie) {
			return visitor.visitDefinitie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public BESLISTABEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.BESLISTABEL, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public beslistabelTable(): BeslistabelTableContext {
		return this.getTypedRuleContext(BeslistabelTableContext, 0) as BeslistabelTableContext;
	}
	public regelVersie(): RegelVersieContext {
		return this.getTypedRuleContext(RegelVersieContext, 0) as RegelVersieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabel) {
			return visitor.visitBeslistabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelTableContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public beslistabelHeader(): BeslistabelHeaderContext {
		return this.getTypedRuleContext(BeslistabelHeaderContext, 0) as BeslistabelHeaderContext;
	}
	public beslistabelSeparator(): BeslistabelSeparatorContext {
		return this.getTypedRuleContext(BeslistabelSeparatorContext, 0) as BeslistabelSeparatorContext;
	}
	public beslistabelRow_list(): BeslistabelRowContext[] {
		return this.getTypedRuleContexts(BeslistabelRowContext) as BeslistabelRowContext[];
	}
	public beslistabelRow(i: number): BeslistabelRowContext {
		return this.getTypedRuleContext(BeslistabelRowContext, i) as BeslistabelRowContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelTable;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelTable) {
			return visitor.visitBeslistabelTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelHeaderContext extends ParserRuleContext {
	public _beslistabelColumnText!: BeslistabelColumnTextContext;
	public _columns: BeslistabelColumnTextContext[] = [];
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PIPE_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.PIPE, i);
	}
	public beslistabelColumnText_list(): BeslistabelColumnTextContext[] {
		return this.getTypedRuleContexts(BeslistabelColumnTextContext) as BeslistabelColumnTextContext[];
	}
	public beslistabelColumnText(i: number): BeslistabelColumnTextContext {
		return this.getTypedRuleContext(BeslistabelColumnTextContext, i) as BeslistabelColumnTextContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelHeader;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelHeader) {
			return visitor.visitBeslistabelHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelSeparatorContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PIPE_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.PIPE, i);
	}
	public MINUS_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUS, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelSeparator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelSeparator) {
			return visitor.visitBeslistabelSeparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelRowContext extends ParserRuleContext {
	public _rowNumber!: Token;
	public _beslistabelCellValue!: BeslistabelCellValueContext;
	public _cellValues: BeslistabelCellValueContext[] = [];
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PIPE_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.PIPE, i);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public beslistabelCellValue_list(): BeslistabelCellValueContext[] {
		return this.getTypedRuleContexts(BeslistabelCellValueContext) as BeslistabelCellValueContext[];
	}
	public beslistabelCellValue(i: number): BeslistabelCellValueContext {
		return this.getTypedRuleContext(BeslistabelCellValueContext, i) as BeslistabelCellValueContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelRow;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelRow) {
			return visitor.visitBeslistabelRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelCellValueContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public NVT(): TerminalNode {
		return this.getToken(RegelSpraakParser.NVT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelCellValue;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelCellValue) {
			return visitor.visitBeslistabelCellValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelColumnTextContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PIPE_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.PIPE, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelColumnText;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelColumnText) {
			return visitor.visitBeslistabelColumnText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelResultaatHeaderContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelResultaatHeader;
	}
	public copyFrom(ctx: BeslistabelResultaatHeaderContext): void {
		super.copyFrom(ctx);
	}
}
export class BeslistabelKenmerkHeaderContext extends BeslistabelResultaatHeaderContext {
	constructor(parser: RegelSpraakParser, ctx: BeslistabelResultaatHeaderContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public kenmerkNaam(): KenmerkNaamContext {
		return this.getTypedRuleContext(KenmerkNaamContext, 0) as KenmerkNaamContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelKenmerkHeader) {
			return visitor.visitBeslistabelKenmerkHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BeslistabelGelijkstellingHeaderContext extends BeslistabelResultaatHeaderContext {
	constructor(parser: RegelSpraakParser, ctx: BeslistabelResultaatHeaderContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public beslistabelAttribuutHeader(): BeslistabelAttribuutHeaderContext {
		return this.getTypedRuleContext(BeslistabelAttribuutHeaderContext, 0) as BeslistabelAttribuutHeaderContext;
	}
	public WORDT_GESTELD_OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.WORDT_GESTELD_OP, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelGelijkstellingHeader) {
			return visitor.visitBeslistabelGelijkstellingHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelVoorwaardeHeaderContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelVoorwaardeHeader;
	}
	public copyFrom(ctx: BeslistabelVoorwaardeHeaderContext): void {
		super.copyFrom(ctx);
	}
}
export class BeslistabelAttribuutVoorwaardeHeaderContext extends BeslistabelVoorwaardeHeaderContext {
	constructor(parser: RegelSpraakParser, ctx: BeslistabelVoorwaardeHeaderContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INDIEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.INDIEN, 0);
	}
	public beslistabelAttribuutHeader(): BeslistabelAttribuutHeaderContext {
		return this.getTypedRuleContext(BeslistabelAttribuutHeaderContext, 0) as BeslistabelAttribuutHeaderContext;
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelAttribuutVoorwaardeHeader) {
			return visitor.visitBeslistabelAttribuutVoorwaardeHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BeslistabelDagsoortVoorwaardeHeaderContext extends BeslistabelVoorwaardeHeaderContext {
	public _v!: Token;
	public _neg!: Token;
	public _dagsoort!: KenmerkNaamContext;
	constructor(parser: RegelSpraakParser, ctx: BeslistabelVoorwaardeHeaderContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INDIEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.INDIEN, 0);
	}
	public beslistabelAttribuutHeader(): BeslistabelAttribuutHeaderContext {
		return this.getTypedRuleContext(BeslistabelAttribuutHeaderContext, 0) as BeslistabelAttribuutHeaderContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	public kenmerkNaam(): KenmerkNaamContext {
		return this.getTypedRuleContext(KenmerkNaamContext, 0) as KenmerkNaamContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public GEEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEEN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelDagsoortVoorwaardeHeader) {
			return visitor.visitBeslistabelDagsoortVoorwaardeHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BeslistabelUnaryVoorwaardeHeaderContext extends BeslistabelVoorwaardeHeaderContext {
	public _op!: Token;
	constructor(parser: RegelSpraakParser, ctx: BeslistabelVoorwaardeHeaderContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INDIEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.INDIEN, 0);
	}
	public beslistabelAttribuutHeader(): BeslistabelAttribuutHeaderContext {
		return this.getTypedRuleContext(BeslistabelAttribuutHeaderContext, 0) as BeslistabelAttribuutHeaderContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	public IS_LEEG(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_LEEG, 0);
	}
	public IS_GEVULD(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GEVULD, 0);
	}
	public VOLDOET_AAN_DE_ELFPROEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET_AAN_DE_ELFPROEF, 0);
	}
	public VOLDOET_NIET_AAN_DE_ELFPROEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET_NIET_AAN_DE_ELFPROEF, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelUnaryVoorwaardeHeader) {
			return visitor.visitBeslistabelUnaryVoorwaardeHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BeslistabelGetalcontroleVoorwaardeHeaderContext extends BeslistabelVoorwaardeHeaderContext {
	public _op!: Token;
	constructor(parser: RegelSpraakParser, ctx: BeslistabelVoorwaardeHeaderContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INDIEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.INDIEN, 0);
	}
	public beslistabelAttribuutHeader(): BeslistabelAttribuutHeaderContext {
		return this.getTypedRuleContext(BeslistabelAttribuutHeaderContext, 0) as BeslistabelAttribuutHeaderContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public CIJFERS(): TerminalNode {
		return this.getToken(RegelSpraakParser.CIJFERS, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	public IS_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_NUMERIEK_MET_EXACT, 0);
	}
	public IS_NIET_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_NIET_NUMERIEK_MET_EXACT, 0);
	}
	public ZIJN_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_NUMERIEK_MET_EXACT, 0);
	}
	public ZIJN_NIET_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_NIET_NUMERIEK_MET_EXACT, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelGetalcontroleVoorwaardeHeader) {
			return visitor.visitBeslistabelGetalcontroleVoorwaardeHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BeslistabelKenmerkVoorwaardeHeaderContext extends BeslistabelVoorwaardeHeaderContext {
	constructor(parser: RegelSpraakParser, ctx: BeslistabelVoorwaardeHeaderContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INDIEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.INDIEN, 0);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public kenmerkNaam(): KenmerkNaamContext {
		return this.getTypedRuleContext(KenmerkNaamContext, 0) as KenmerkNaamContext;
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(RegelSpraakParser.EOF, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelKenmerkVoorwaardeHeader) {
			return visitor.visitBeslistabelKenmerkVoorwaardeHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelAttribuutHeaderContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public beslistabelAttribuutNaam(): BeslistabelAttribuutNaamContext {
		return this.getTypedRuleContext(BeslistabelAttribuutNaamContext, 0) as BeslistabelAttribuutNaamContext;
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelAttribuutHeader;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelAttribuutHeader) {
			return visitor.visitBeslistabelAttribuutHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelAttribuutNaamContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public beslistabelAttribuutEerstePhrase(): BeslistabelAttribuutEerstePhraseContext {
		return this.getTypedRuleContext(BeslistabelAttribuutEerstePhraseContext, 0) as BeslistabelAttribuutEerstePhraseContext;
	}
	public beslistabelAttribuutVoorzetsel_list(): BeslistabelAttribuutVoorzetselContext[] {
		return this.getTypedRuleContexts(BeslistabelAttribuutVoorzetselContext) as BeslistabelAttribuutVoorzetselContext[];
	}
	public beslistabelAttribuutVoorzetsel(i: number): BeslistabelAttribuutVoorzetselContext {
		return this.getTypedRuleContext(BeslistabelAttribuutVoorzetselContext, i) as BeslistabelAttribuutVoorzetselContext;
	}
	public beslistabelAttribuutVervolgPhrase_list(): BeslistabelAttribuutVervolgPhraseContext[] {
		return this.getTypedRuleContexts(BeslistabelAttribuutVervolgPhraseContext) as BeslistabelAttribuutVervolgPhraseContext[];
	}
	public beslistabelAttribuutVervolgPhrase(i: number): BeslistabelAttribuutVervolgPhraseContext {
		return this.getTypedRuleContext(BeslistabelAttribuutVervolgPhraseContext, i) as BeslistabelAttribuutVervolgPhraseContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelAttribuutNaam;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelAttribuutNaam) {
			return visitor.visitBeslistabelAttribuutNaam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelAttribuutEerstePhraseContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeywordNoIs_list(): IdentifierOrKeywordNoIsContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordNoIsContext) as IdentifierOrKeywordNoIsContext[];
	}
	public identifierOrKeywordNoIs(i: number): IdentifierOrKeywordNoIsContext {
		return this.getTypedRuleContext(IdentifierOrKeywordNoIsContext, i) as IdentifierOrKeywordNoIsContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelAttribuutEerstePhrase;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelAttribuutEerstePhrase) {
			return visitor.visitBeslistabelAttribuutEerstePhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelAttribuutVervolgPhraseContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeywordNoIs_list(): IdentifierOrKeywordNoIsContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordNoIsContext) as IdentifierOrKeywordNoIsContext[];
	}
	public identifierOrKeywordNoIs(i: number): IdentifierOrKeywordNoIsContext {
		return this.getTypedRuleContext(IdentifierOrKeywordNoIsContext, i) as IdentifierOrKeywordNoIsContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelAttribuutVervolgPhrase;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelAttribuutVervolgPhrase) {
			return visitor.visitBeslistabelAttribuutVervolgPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeslistabelAttribuutVoorzetselContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
	public VOOR(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOOR, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(RegelSpraakParser.OVER, 0);
	}
	public OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.OP, 0);
	}
	public BIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.BIJ, 0);
	}
	public UIT(): TerminalNode {
		return this.getToken(RegelSpraakParser.UIT, 0);
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(RegelSpraakParser.OF, 0);
	}
	public TOT_EN_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_beslistabelAttribuutVoorzetsel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBeslistabelAttribuutVoorzetsel) {
			return visitor.visitBeslistabelAttribuutVoorzetsel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_identifier;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierOrKeywordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
	public DAG(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAG, 0);
	}
	public DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGEN, 0);
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public MAANDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAANDEN, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public JAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAREN, 0);
	}
	public WEEK(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEEK, 0);
	}
	public WEKEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEKEN, 0);
	}
	public UUR(): TerminalNode {
		return this.getToken(RegelSpraakParser.UUR, 0);
	}
	public UREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.UREN, 0);
	}
	public MINUUT(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUUT, 0);
	}
	public MINUTEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUTEN, 0);
	}
	public SECONDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDE, 0);
	}
	public SECONDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDEN, 0);
	}
	public MILLISECONDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.MILLISECONDE, 0);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	public PERIODE(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERIODE, 0);
	}
	public REGEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGEL, 0);
	}
	public VOORWAARDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOORWAARDE, 0);
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public INCONSISTENT(): TerminalNode {
		return this.getToken(RegelSpraakParser.INCONSISTENT, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public KWARTAAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.KWARTAAL, 0);
	}
	public METER(): TerminalNode {
		return this.getToken(RegelSpraakParser.METER, 0);
	}
	public EEN_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN_TELWOORD, 0);
	}
	public TWEE_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.TWEE_TELWOORD, 0);
	}
	public DRIE_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.DRIE_TELWOORD, 0);
	}
	public VIER_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.VIER_TELWOORD, 0);
	}
	public OUDER(): TerminalNode {
		return this.getToken(RegelSpraakParser.OUDER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_identifierOrKeyword;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitIdentifierOrKeyword) {
			return visitor.visitIdentifierOrKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierOrKeywordNoIsContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
	public DAG(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAG, 0);
	}
	public DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGEN, 0);
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public MAANDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAANDEN, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public JAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAREN, 0);
	}
	public WEEK(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEEK, 0);
	}
	public WEKEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEKEN, 0);
	}
	public UUR(): TerminalNode {
		return this.getToken(RegelSpraakParser.UUR, 0);
	}
	public UREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.UREN, 0);
	}
	public MINUUT(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUUT, 0);
	}
	public MINUTEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUTEN, 0);
	}
	public SECONDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDE, 0);
	}
	public SECONDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDEN, 0);
	}
	public MILLISECONDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.MILLISECONDE, 0);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	public PERIODE(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERIODE, 0);
	}
	public REGEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGEL, 0);
	}
	public VOORWAARDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOORWAARDE, 0);
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public INCONSISTENT(): TerminalNode {
		return this.getToken(RegelSpraakParser.INCONSISTENT, 0);
	}
	public KWARTAAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.KWARTAAL, 0);
	}
	public METER(): TerminalNode {
		return this.getToken(RegelSpraakParser.METER, 0);
	}
	public EEN_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN_TELWOORD, 0);
	}
	public TWEE_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.TWEE_TELWOORD, 0);
	}
	public DRIE_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.DRIE_TELWOORD, 0);
	}
	public VIER_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.VIER_TELWOORD, 0);
	}
	public OUDER(): TerminalNode {
		return this.getToken(RegelSpraakParser.OUDER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_identifierOrKeywordNoIs;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitIdentifierOrKeywordNoIs) {
			return visitor.visitIdentifierOrKeywordNoIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NaamPhraseContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeyword_list(): IdentifierOrKeywordContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordContext) as IdentifierOrKeywordContext[];
	}
	public identifierOrKeyword(i: number): IdentifierOrKeywordContext {
		return this.getTypedRuleContext(IdentifierOrKeywordContext, i) as IdentifierOrKeywordContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public NIEUWE(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIEUWE, 0);
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public NIET(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIET, 0);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	public DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGEN, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_naamPhrase;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNaamPhrase) {
			return visitor.visitNaamPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NaamPhraseWithNumbersContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeywordWithNumbers_list(): IdentifierOrKeywordWithNumbersContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordWithNumbersContext) as IdentifierOrKeywordWithNumbersContext[];
	}
	public identifierOrKeywordWithNumbers(i: number): IdentifierOrKeywordWithNumbersContext {
		return this.getTypedRuleContext(IdentifierOrKeywordWithNumbersContext, i) as IdentifierOrKeywordWithNumbersContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public NIEUWE(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIEUWE, 0);
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public NIET(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIET, 0);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	public DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGEN, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_naamPhraseWithNumbers;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNaamPhraseWithNumbers) {
			return visitor.visitNaamPhraseWithNumbers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierOrKeywordWithNumbersContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeyword(): IdentifierOrKeywordContext {
		return this.getTypedRuleContext(IdentifierOrKeywordContext, 0) as IdentifierOrKeywordContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_identifierOrKeywordWithNumbers;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitIdentifierOrKeywordWithNumbers) {
			return visitor.visitIdentifierOrKeywordWithNumbers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NaamPhraseNoIsContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeywordNoIs_list(): IdentifierOrKeywordNoIsContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordNoIsContext) as IdentifierOrKeywordNoIsContext[];
	}
	public identifierOrKeywordNoIs(i: number): IdentifierOrKeywordNoIsContext {
		return this.getTypedRuleContext(IdentifierOrKeywordNoIsContext, i) as IdentifierOrKeywordNoIsContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public NIEUWE(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIEUWE, 0);
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public NIET(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_naamPhraseNoIs;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNaamPhraseNoIs) {
			return visitor.visitNaamPhraseNoIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NaamwoordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamPhrase_list(): NaamPhraseContext[] {
		return this.getTypedRuleContexts(NaamPhraseContext) as NaamPhraseContext[];
	}
	public naamPhrase(i: number): NaamPhraseContext {
		return this.getTypedRuleContext(NaamPhraseContext, i) as NaamPhraseContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_naamwoord;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNaamwoord) {
			return visitor.visitNaamwoord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NaamwoordWithNumbersContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamPhraseWithNumbers_list(): NaamPhraseWithNumbersContext[] {
		return this.getTypedRuleContexts(NaamPhraseWithNumbersContext) as NaamPhraseWithNumbersContext[];
	}
	public naamPhraseWithNumbers(i: number): NaamPhraseWithNumbersContext {
		return this.getTypedRuleContext(NaamPhraseWithNumbersContext, i) as NaamPhraseWithNumbersContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_naamwoordWithNumbers;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNaamwoordWithNumbers) {
			return visitor.visitNaamwoordWithNumbers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NaamwoordNoIsContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamPhraseNoIs_list(): NaamPhraseNoIsContext[] {
		return this.getTypedRuleContexts(NaamPhraseNoIsContext) as NaamPhraseNoIsContext[];
	}
	public naamPhraseNoIs(i: number): NaamPhraseNoIsContext {
		return this.getTypedRuleContext(NaamPhraseNoIsContext, i) as NaamPhraseNoIsContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_naamwoordNoIs;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNaamwoordNoIs) {
			return visitor.visitNaamwoordNoIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VoorzetselContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
	public VOOR(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOOR, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(RegelSpraakParser.OVER, 0);
	}
	public OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.OP, 0);
	}
	public BIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.BIJ, 0);
	}
	public UIT(): TerminalNode {
		return this.getToken(RegelSpraakParser.UIT, 0);
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(RegelSpraakParser.OF, 0);
	}
	public TOT_EN_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_voorzetsel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVoorzetsel) {
			return visitor.visitVoorzetsel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatumLiteralContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DATE_TIME_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.DATE_TIME_LITERAL, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_datumLiteral;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumLiteral) {
			return visitor.visitDatumLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_unit;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeUnitContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DAG(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAG, 0);
	}
	public DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGEN, 0);
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public MAANDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAANDEN, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public JAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAREN, 0);
	}
	public WEEK(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEEK, 0);
	}
	public WEKEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEKEN, 0);
	}
	public UUR(): TerminalNode {
		return this.getToken(RegelSpraakParser.UUR, 0);
	}
	public UREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.UREN, 0);
	}
	public MINUUT(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUUT, 0);
	}
	public MINUTEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUTEN, 0);
	}
	public SECONDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDE, 0);
	}
	public SECONDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_timeUnit;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTimeUnit) {
			return visitor.visitTimeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeDefinitionContext extends ParserRuleContext {
	public _IDENTIFIER!: Token;
	public _plural: Token[] = [];
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public OBJECTTYPE(): TerminalNode {
		return this.getToken(RegelSpraakParser.OBJECTTYPE, 0);
	}
	public naamwoordNoIs(): NaamwoordNoIsContext {
		return this.getTypedRuleContext(NaamwoordNoIsContext, 0) as NaamwoordNoIsContext;
	}
	public MV_START(): TerminalNode {
		return this.getToken(RegelSpraakParser.MV_START, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	public BEZIELD(): TerminalNode {
		return this.getToken(RegelSpraakParser.BEZIELD, 0);
	}
	public objectTypeMember_list(): ObjectTypeMemberContext[] {
		return this.getTypedRuleContexts(ObjectTypeMemberContext) as ObjectTypeMemberContext[];
	}
	public objectTypeMember(i: number): ObjectTypeMemberContext {
		return this.getTypedRuleContext(ObjectTypeMemberContext, i) as ObjectTypeMemberContext;
	}
	public IDENTIFIER_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_objectTypeDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitObjectTypeDefinition) {
			return visitor.visitObjectTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeMemberContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.SEMICOLON, 0);
	}
	public kenmerkSpecificatie(): KenmerkSpecificatieContext {
		return this.getTypedRuleContext(KenmerkSpecificatieContext, 0) as KenmerkSpecificatieContext;
	}
	public attribuutSpecificatie(): AttribuutSpecificatieContext {
		return this.getTypedRuleContext(AttribuutSpecificatieContext, 0) as AttribuutSpecificatieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_objectTypeMember;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitObjectTypeMember) {
			return visitor.visitObjectTypeMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KenmerkSpecificatieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public KENMERK(): TerminalNode {
		return this.getToken(RegelSpraakParser.KENMERK, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public tijdlijn(): TijdlijnContext {
		return this.getTypedRuleContext(TijdlijnContext, 0) as TijdlijnContext;
	}
	public BIJVOEGLIJK(): TerminalNode {
		return this.getToken(RegelSpraakParser.BIJVOEGLIJK, 0);
	}
	public BEZITTELIJK(): TerminalNode {
		return this.getToken(RegelSpraakParser.BEZITTELIJK, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_kenmerkSpecificatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitKenmerkSpecificatie) {
			return visitor.visitKenmerkSpecificatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribuutSpecificatieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public datatype(): DatatypeContext {
		return this.getTypedRuleContext(DatatypeContext, 0) as DatatypeContext;
	}
	public domeinRef(): DomeinRefContext {
		return this.getTypedRuleContext(DomeinRefContext, 0) as DomeinRefContext;
	}
	public objectTypeRef(): ObjectTypeRefContext {
		return this.getTypedRuleContext(ObjectTypeRefContext, 0) as ObjectTypeRefContext;
	}
	public MET_EENHEID(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET_EENHEID, 0);
	}
	public eenheidExpressie(): EenheidExpressieContext {
		return this.getTypedRuleContext(EenheidExpressieContext, 0) as EenheidExpressieContext;
	}
	public GEDIMENSIONEERD_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEDIMENSIONEERD_MET, 0);
	}
	public dimensieRef_list(): DimensieRefContext[] {
		return this.getTypedRuleContexts(DimensieRefContext) as DimensieRefContext[];
	}
	public dimensieRef(i: number): DimensieRefContext {
		return this.getTypedRuleContext(DimensieRefContext, i) as DimensieRefContext;
	}
	public tijdlijn(): TijdlijnContext {
		return this.getTypedRuleContext(TijdlijnContext, 0) as TijdlijnContext;
	}
	public EN_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.EN);
	}
	public EN(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_attribuutSpecificatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAttribuutSpecificatie) {
			return visitor.visitAttribuutSpecificatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatatypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public numeriekDatatype(): NumeriekDatatypeContext {
		return this.getTypedRuleContext(NumeriekDatatypeContext, 0) as NumeriekDatatypeContext;
	}
	public tekstDatatype(): TekstDatatypeContext {
		return this.getTypedRuleContext(TekstDatatypeContext, 0) as TekstDatatypeContext;
	}
	public booleanDatatype(): BooleanDatatypeContext {
		return this.getTypedRuleContext(BooleanDatatypeContext, 0) as BooleanDatatypeContext;
	}
	public datumTijdDatatype(): DatumTijdDatatypeContext {
		return this.getTypedRuleContext(DatumTijdDatatypeContext, 0) as DatumTijdDatatypeContext;
	}
	public lijstDatatype(): LijstDatatypeContext {
		return this.getTypedRuleContext(LijstDatatypeContext, 0) as LijstDatatypeContext;
	}
	public percentageDatatype(): PercentageDatatypeContext {
		return this.getTypedRuleContext(PercentageDatatypeContext, 0) as PercentageDatatypeContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_datatype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatatype) {
			return visitor.visitDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LijstDatatypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LIJST(): TerminalNode {
		return this.getToken(RegelSpraakParser.LIJST, 0);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public datatype(): DatatypeContext {
		return this.getTypedRuleContext(DatatypeContext, 0) as DatatypeContext;
	}
	public domeinRef(): DomeinRefContext {
		return this.getTypedRuleContext(DomeinRefContext, 0) as DomeinRefContext;
	}
	public objectTypeRef(): ObjectTypeRefContext {
		return this.getTypedRuleContext(ObjectTypeRefContext, 0) as ObjectTypeRefContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_lijstDatatype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitLijstDatatype) {
			return visitor.visitLijstDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumeriekDatatypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public NUMERIEK(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMERIEK, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LPAREN, 0);
	}
	public getalSpecificatie(): GetalSpecificatieContext {
		return this.getTypedRuleContext(GetalSpecificatieContext, 0) as GetalSpecificatieContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_numeriekDatatype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNumeriekDatatype) {
			return visitor.visitNumeriekDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TekstDatatypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public TEKST(): TerminalNode {
		return this.getToken(RegelSpraakParser.TEKST, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_tekstDatatype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTekstDatatype) {
			return visitor.visitTekstDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PercentageDatatypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PERCENTAGE(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERCENTAGE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LPAREN, 0);
	}
	public getalSpecificatie(): GetalSpecificatieContext {
		return this.getTypedRuleContext(GetalSpecificatieContext, 0) as GetalSpecificatieContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_percentageDatatype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPercentageDatatype) {
			return visitor.visitPercentageDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanDatatypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_booleanDatatype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBooleanDatatype) {
			return visitor.visitBooleanDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatumTijdDatatypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DATUM_IN_DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DATUM_IN_DAGEN, 0);
	}
	public DATUM_TIJD_MILLIS(): TerminalNode {
		return this.getToken(RegelSpraakParser.DATUM_TIJD_MILLIS, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_datumTijdDatatype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumTijdDatatype) {
			return visitor.visitDatumTijdDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetalSpecificatieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GEHEEL_GETAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEHEEL_GETAL, 0);
	}
	public GETAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.GETAL, 0);
	}
	public NEGATIEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.NEGATIEF, 0);
	}
	public NIET_NEGATIEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIET_NEGATIEF, 0);
	}
	public POSITIEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.POSITIEF, 0);
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public DECIMALEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DECIMALEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_getalSpecificatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGetalSpecificatie) {
			return visitor.visitGetalSpecificatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DomeinDefinitionContext extends ParserRuleContext {
	public _name!: Token;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DOMEIN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOMEIN, 0);
	}
	public IS_VAN_HET_TYPE(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_VAN_HET_TYPE, 0);
	}
	public domeinType(): DomeinTypeContext {
		return this.getTypedRuleContext(DomeinTypeContext, 0) as DomeinTypeContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
	public MET_EENHEID(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET_EENHEID, 0);
	}
	public eenheidExpressie(): EenheidExpressieContext {
		return this.getTypedRuleContext(EenheidExpressieContext, 0) as EenheidExpressieContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_domeinDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDomeinDefinition) {
			return visitor.visitDomeinDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DomeinTypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public enumeratieSpecificatie(): EnumeratieSpecificatieContext {
		return this.getTypedRuleContext(EnumeratieSpecificatieContext, 0) as EnumeratieSpecificatieContext;
	}
	public numeriekDatatype(): NumeriekDatatypeContext {
		return this.getTypedRuleContext(NumeriekDatatypeContext, 0) as NumeriekDatatypeContext;
	}
	public tekstDatatype(): TekstDatatypeContext {
		return this.getTypedRuleContext(TekstDatatypeContext, 0) as TekstDatatypeContext;
	}
	public booleanDatatype(): BooleanDatatypeContext {
		return this.getTypedRuleContext(BooleanDatatypeContext, 0) as BooleanDatatypeContext;
	}
	public datumTijdDatatype(): DatumTijdDatatypeContext {
		return this.getTypedRuleContext(DatumTijdDatatypeContext, 0) as DatumTijdDatatypeContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_domeinType;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDomeinType) {
			return visitor.visitDomeinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratieSpecificatieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ENUMERATIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ENUMERATIE, 0);
	}
	public ENUM_LITERAL_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.ENUM_LITERAL);
	}
	public ENUM_LITERAL(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.ENUM_LITERAL, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_enumeratieSpecificatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEnumeratieSpecificatie) {
			return visitor.visitEnumeratieSpecificatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DomeinRefContext extends ParserRuleContext {
	public _name!: Token;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_domeinRef;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDomeinRef) {
			return visitor.visitDomeinRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeRefContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_objectTypeRef;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitObjectTypeRef) {
			return visitor.visitObjectTypeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EenheidsysteemDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public EENHEIDSYSTEEM(): TerminalNode {
		return this.getToken(RegelSpraakParser.EENHEIDSYSTEEM, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public eenheidEntry_list(): EenheidEntryContext[] {
		return this.getTypedRuleContexts(EenheidEntryContext) as EenheidEntryContext[];
	}
	public eenheidEntry(i: number): EenheidEntryContext {
		return this.getTypedRuleContext(EenheidEntryContext, i) as EenheidEntryContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_eenheidsysteemDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEenheidsysteemDefinition) {
			return visitor.visitEenheidsysteemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EenheidEntryContext extends ParserRuleContext {
	public _unitName!: UnitIdentifierWithTimeContext;
	public _pluralName!: UnitIdentifierWithTimeContext;
	public _abbrev!: UnitIdentifierWithTimeContext;
	public _symbol_!: UnitIdentifierWithTimeContext;
	public _value!: Token;
	public _targetUnit!: UnitIdentifierWithTimeContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public unitIdentifierWithTime_list(): UnitIdentifierWithTimeContext[] {
		return this.getTypedRuleContexts(UnitIdentifierWithTimeContext) as UnitIdentifierWithTimeContext[];
	}
	public unitIdentifierWithTime(i: number): UnitIdentifierWithTimeContext {
		return this.getTypedRuleContext(UnitIdentifierWithTimeContext, i) as UnitIdentifierWithTimeContext;
	}
	public MV_START(): TerminalNode {
		return this.getToken(RegelSpraakParser.MV_START, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(RegelSpraakParser.EQUALS, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(RegelSpraakParser.SLASH, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_eenheidEntry;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEenheidEntry) {
			return visitor.visitEenheidEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitIdentifierContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
	public METER(): TerminalNode {
		return this.getToken(RegelSpraakParser.METER, 0);
	}
	public KILOGRAM(): TerminalNode {
		return this.getToken(RegelSpraakParser.KILOGRAM, 0);
	}
	public MILLISECONDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.MILLISECONDE, 0);
	}
	public SECONDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDE, 0);
	}
	public MINUUT(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUUT, 0);
	}
	public MINUTEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUTEN, 0);
	}
	public UUR(): TerminalNode {
		return this.getToken(RegelSpraakParser.UUR, 0);
	}
	public UREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.UREN, 0);
	}
	public VOET(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOET, 0);
	}
	public POND(): TerminalNode {
		return this.getToken(RegelSpraakParser.POND, 0);
	}
	public MIJL(): TerminalNode {
		return this.getToken(RegelSpraakParser.MIJL, 0);
	}
	public M(): TerminalNode {
		return this.getToken(RegelSpraakParser.M, 0);
	}
	public KG(): TerminalNode {
		return this.getToken(RegelSpraakParser.KG, 0);
	}
	public S(): TerminalNode {
		return this.getToken(RegelSpraakParser.S, 0);
	}
	public FT(): TerminalNode {
		return this.getToken(RegelSpraakParser.FT, 0);
	}
	public LB(): TerminalNode {
		return this.getToken(RegelSpraakParser.LB, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MIN, 0);
	}
	public MI(): TerminalNode {
		return this.getToken(RegelSpraakParser.MI, 0);
	}
	public EURO_SYMBOL(): TerminalNode {
		return this.getToken(RegelSpraakParser.EURO_SYMBOL, 0);
	}
	public DOLLAR_SYMBOL(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOLLAR_SYMBOL, 0);
	}
	public DEGREE_SYMBOL(): TerminalNode {
		return this.getToken(RegelSpraakParser.DEGREE_SYMBOL, 0);
	}
	public SECONDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SECONDEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_unitIdentifier;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnitIdentifier) {
			return visitor.visitUnitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitIdentifierWithTimeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public unitIdentifier(): UnitIdentifierContext {
		return this.getTypedRuleContext(UnitIdentifierContext, 0) as UnitIdentifierContext;
	}
	public DAG(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAG, 0);
	}
	public DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGEN, 0);
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public MAANDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAANDEN, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public JAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAREN, 0);
	}
	public WEEK(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEEK, 0);
	}
	public WEKEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEKEN, 0);
	}
	public KWARTAAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.KWARTAAL, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_unitIdentifierWithTime;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnitIdentifierWithTime) {
			return visitor.visitUnitIdentifierWithTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EenheidExpressieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public unitProduct_list(): UnitProductContext[] {
		return this.getTypedRuleContexts(UnitProductContext) as UnitProductContext[];
	}
	public unitProduct(i: number): UnitProductContext {
		return this.getTypedRuleContext(UnitProductContext, i) as UnitProductContext;
	}
	public SLASH_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.SLASH);
	}
	public SLASH(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.SLASH, i);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public PERCENT_SIGN(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERCENT_SIGN, 0);
	}
	public EURO_SYMBOL(): TerminalNode {
		return this.getToken(RegelSpraakParser.EURO_SYMBOL, 0);
	}
	public DOLLAR_SYMBOL(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOLLAR_SYMBOL, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_eenheidExpressie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEenheidExpressie) {
			return visitor.visitEenheidExpressie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitProductContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public eenheidMacht_list(): EenheidMachtContext[] {
		return this.getTypedRuleContexts(EenheidMachtContext) as EenheidMachtContext[];
	}
	public eenheidMacht(i: number): EenheidMachtContext {
		return this.getTypedRuleContext(EenheidMachtContext, i) as EenheidMachtContext;
	}
	public ASTERISK_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.ASTERISK);
	}
	public ASTERISK(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.ASTERISK, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_unitProduct;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnitProduct) {
			return visitor.visitUnitProduct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EenheidMachtContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public unitIdentifier(): UnitIdentifierContext {
		return this.getTypedRuleContext(UnitIdentifierContext, 0) as UnitIdentifierContext;
	}
	public CARET(): TerminalNode {
		return this.getToken(RegelSpraakParser.CARET, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_eenheidMacht;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEenheidMacht) {
			return visitor.visitEenheidMacht(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensieDefinitionContext extends ParserRuleContext {
	public _dimensieNaamMeervoud!: NaamwoordContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DIMENSIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DIMENSIE, 0);
	}
	public naamwoord_list(): NaamwoordContext[] {
		return this.getTypedRuleContexts(NaamwoordContext) as NaamwoordContext[];
	}
	public naamwoord(i: number): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, i) as NaamwoordContext;
	}
	public BESTAANDE_UIT(): TerminalNode {
		return this.getToken(RegelSpraakParser.BESTAANDE_UIT, 0);
	}
	public voorzetselSpecificatie(): VoorzetselSpecificatieContext {
		return this.getTypedRuleContext(VoorzetselSpecificatieContext, 0) as VoorzetselSpecificatieContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public labelWaardeSpecificatie_list(): LabelWaardeSpecificatieContext[] {
		return this.getTypedRuleContexts(LabelWaardeSpecificatieContext) as LabelWaardeSpecificatieContext[];
	}
	public labelWaardeSpecificatie(i: number): LabelWaardeSpecificatieContext {
		return this.getTypedRuleContext(LabelWaardeSpecificatieContext, i) as LabelWaardeSpecificatieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_dimensieDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDimensieDefinition) {
			return visitor.visitDimensieDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VoorzetselSpecificatieContext extends ParserRuleContext {
	public _vz!: VoorzetselContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public NA_HET_ATTRIBUUT_MET_VOORZETSEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.NA_HET_ATTRIBUUT_MET_VOORZETSEL, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	public voorzetsel(): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, 0) as VoorzetselContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.COLON, 0);
	}
	public VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_voorzetselSpecificatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVoorzetselSpecificatie) {
			return visitor.visitVoorzetselSpecificatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelWaardeSpecificatieContext extends ParserRuleContext {
	public _dimWaarde!: NaamwoordContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_labelWaardeSpecificatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitLabelWaardeSpecificatie) {
			return visitor.visitLabelWaardeSpecificatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TijdlijnContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public VOOR_ELKE_DAG(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOOR_ELKE_DAG, 0);
	}
	public VOOR_ELKE_MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOOR_ELKE_MAAND, 0);
	}
	public VOOR_ELK_JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOOR_ELK_JAAR, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_tijdlijn;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTijdlijn) {
			return visitor.visitTijdlijn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensieRefContext extends ParserRuleContext {
	public _name!: Token;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_dimensieRef;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDimensieRef) {
			return visitor.visitDimensieRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDefinitionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PARAMETER(): TerminalNode {
		return this.getToken(RegelSpraakParser.PARAMETER, 0);
	}
	public parameterNamePhrase(): ParameterNamePhraseContext {
		return this.getTypedRuleContext(ParameterNamePhraseContext, 0) as ParameterNamePhraseContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.COLON, 0);
	}
	public datatype(): DatatypeContext {
		return this.getTypedRuleContext(DatatypeContext, 0) as DatatypeContext;
	}
	public domeinRef(): DomeinRefContext {
		return this.getTypedRuleContext(DomeinRefContext, 0) as DomeinRefContext;
	}
	public MET_EENHEID(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET_EENHEID, 0);
	}
	public eenheidExpressie(): EenheidExpressieContext {
		return this.getTypedRuleContext(EenheidExpressieContext, 0) as EenheidExpressieContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public tijdlijn(): TijdlijnContext {
		return this.getTypedRuleContext(TijdlijnContext, 0) as TijdlijnContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_parameterDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitParameterDefinition) {
			return visitor.visitParameterDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterNamePhraseContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public parameterNamePart_list(): ParameterNamePartContext[] {
		return this.getTypedRuleContexts(ParameterNamePartContext) as ParameterNamePartContext[];
	}
	public parameterNamePart(i: number): ParameterNamePartContext {
		return this.getTypedRuleContext(ParameterNamePartContext, i) as ParameterNamePartContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_parameterNamePhrase;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitParameterNamePhrase) {
			return visitor.visitParameterNamePhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterNamePartContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, i);
	}
	public AANTAL_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.AANTAL);
	}
	public AANTAL(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, i);
	}
	public NUMBER_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_parameterNamePart;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitParameterNamePart) {
			return visitor.visitParameterNamePart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterMetLidwoordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public parameterNamePart_list(): ParameterNamePartContext[] {
		return this.getTypedRuleContexts(ParameterNamePartContext) as ParameterNamePartContext[];
	}
	public parameterNamePart(i: number): ParameterNamePartContext {
		return this.getTypedRuleContext(ParameterNamePartContext, i) as ParameterNamePartContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_parameterMetLidwoord;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitParameterMetLidwoord) {
			return visitor.visitParameterMetLidwoord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeitTypeDefinitionContext extends ParserRuleContext {
	public _feittypenaam!: NaamwoordContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public FEITTYPE(): TerminalNode {
		return this.getToken(RegelSpraakParser.FEITTYPE, 0);
	}
	public rolDefinition_list(): RolDefinitionContext[] {
		return this.getTypedRuleContexts(RolDefinitionContext) as RolDefinitionContext[];
	}
	public rolDefinition(i: number): RolDefinitionContext {
		return this.getTypedRuleContext(RolDefinitionContext, i) as RolDefinitionContext;
	}
	public cardinalityLine(): CardinalityLineContext {
		return this.getTypedRuleContext(CardinalityLineContext, 0) as CardinalityLineContext;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public WEDERKERIG_FEITTYPE(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEDERKERIG_FEITTYPE, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_feitTypeDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitFeitTypeDefinition) {
			return visitor.visitFeitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RolDefinitionContext extends ParserRuleContext {
	public _article!: Token;
	public _meervoud!: NaamwoordContext;
	public _IDENTIFIER!: Token;
	public _objectTypeName: Token[] = [];
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public rolNameWords(): RolNameWordsContext {
		return this.getTypedRuleContext(RolNameWordsContext, 0) as RolNameWordsContext;
	}
	public TAB(): TerminalNode {
		return this.getToken(RegelSpraakParser.TAB, 0);
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public MV_START(): TerminalNode {
		return this.getToken(RegelSpraakParser.MV_START, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public IDENTIFIER_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_rolDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRolDefinition) {
			return visitor.visitRolDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RolNameWordsContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeyword_list(): IdentifierOrKeywordContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordContext) as IdentifierOrKeywordContext[];
	}
	public identifierOrKeyword(i: number): IdentifierOrKeywordContext {
		return this.getTypedRuleContext(IdentifierOrKeywordContext, i) as IdentifierOrKeywordContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_rolNameWords;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRolNameWords) {
			return visitor.visitRolNameWords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CardinalityLineContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public cardinalityWord_list(): CardinalityWordContext[] {
		return this.getTypedRuleContexts(CardinalityWordContext) as CardinalityWordContext[];
	}
	public cardinalityWord(i: number): CardinalityWordContext {
		return this.getTypedRuleContext(CardinalityWordContext, i) as CardinalityWordContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_cardinalityLine;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitCardinalityLine) {
			return visitor.visitCardinalityLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CardinalityWordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public OBJECTTYPE(): TerminalNode {
		return this.getToken(RegelSpraakParser.OBJECTTYPE, 0);
	}
	public PARAMETER(): TerminalNode {
		return this.getToken(RegelSpraakParser.PARAMETER, 0);
	}
	public REGELGROEP(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGELGROEP, 0);
	}
	public REGEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGEL, 0);
	}
	public FEITTYPE(): TerminalNode {
		return this.getToken(RegelSpraakParser.FEITTYPE, 0);
	}
	public WEDERKERIG_FEITTYPE(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEDERKERIG_FEITTYPE, 0);
	}
	public DIMENSIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DIMENSIE, 0);
	}
	public DOMEIN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOMEIN, 0);
	}
	public BESLISTABEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.BESLISTABEL, 0);
	}
	public CONSISTENTIEREGEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.CONSISTENTIEREGEL, 0);
	}
	public EENHEIDSYSTEEM(): TerminalNode {
		return this.getToken(RegelSpraakParser.EENHEIDSYSTEEM, 0);
	}
	public DAGSOORT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGSOORT, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_cardinalityWord;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitCardinalityWord) {
			return visitor.visitCardinalityWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public REGEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGEL, 0);
	}
	public regelName(): RegelNameContext {
		return this.getTypedRuleContext(RegelNameContext, 0) as RegelNameContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public regelVersieBlok_list(): RegelVersieBlokContext[] {
		return this.getTypedRuleContexts(RegelVersieBlokContext) as RegelVersieBlokContext[];
	}
	public regelVersieBlok(i: number): RegelVersieBlokContext {
		return this.getTypedRuleContext(RegelVersieBlokContext, i) as RegelVersieBlokContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegel) {
			return visitor.visitRegel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelVersieBlokContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public regelVersie(): RegelVersieContext {
		return this.getTypedRuleContext(RegelVersieContext, 0) as RegelVersieContext;
	}
	public resultaatDeel(): ResultaatDeelContext {
		return this.getTypedRuleContext(ResultaatDeelContext, 0) as ResultaatDeelContext;
	}
	public voorwaardeDeel(): VoorwaardeDeelContext {
		return this.getTypedRuleContext(VoorwaardeDeelContext, 0) as VoorwaardeDeelContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
	public variabeleDeel(): VariabeleDeelContext {
		return this.getTypedRuleContext(VariabeleDeelContext, 0) as VariabeleDeelContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelVersieBlok;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelVersieBlok) {
			return visitor.visitRegelVersieBlok(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelGroepContext extends ParserRuleContext {
	public _isRecursive!: Token;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public REGELGROEP(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGELGROEP, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public regel_list(): RegelContext[] {
		return this.getTypedRuleContexts(RegelContext) as RegelContext[];
	}
	public regel(i: number): RegelContext {
		return this.getTypedRuleContext(RegelContext, i) as RegelContext;
	}
	public consistentieregel_list(): ConsistentieregelContext[] {
		return this.getTypedRuleContexts(ConsistentieregelContext) as ConsistentieregelContext[];
	}
	public consistentieregel(i: number): ConsistentieregelContext {
		return this.getTypedRuleContext(ConsistentieregelContext, i) as ConsistentieregelContext;
	}
	public IS_RECURSIEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_RECURSIEF, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelGroep;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelGroep) {
			return visitor.visitRegelGroep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelNameContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public regelNameExtension_list(): RegelNameExtensionContext[] {
		return this.getTypedRuleContexts(RegelNameExtensionContext) as RegelNameExtensionContext[];
	}
	public regelNameExtension(i: number): RegelNameExtensionContext {
		return this.getTypedRuleContext(RegelNameExtensionContext, i) as RegelNameExtensionContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelName;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelName) {
			return visitor.visitRegelName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelNameExtensionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IN_GELIJKE_DELEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN_GELIJKE_DELEN, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public GEEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelNameExtension;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelNameExtension) {
			return visitor.visitRegelNameExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelVersieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GELDIG(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELDIG, 0);
	}
	public versieGeldigheid(): VersieGeldigheidContext {
		return this.getTypedRuleContext(VersieGeldigheidContext, 0) as VersieGeldigheidContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelVersie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelVersie) {
			return visitor.visitRegelVersie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersieGeldigheidContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ALTIJD(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALTIJD, 0);
	}
	public VANAF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VANAF, 0);
	}
	public geldigheidsDatum_list(): GeldigheidsDatumContext[] {
		return this.getTypedRuleContexts(GeldigheidsDatumContext) as GeldigheidsDatumContext[];
	}
	public geldigheidsDatum(i: number): GeldigheidsDatumContext {
		return this.getTypedRuleContext(GeldigheidsDatumContext, i) as GeldigheidsDatumContext;
	}
	public TM(): TerminalNode {
		return this.getToken(RegelSpraakParser.TM, 0);
	}
	public TOT_EN_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_versieGeldigheid;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVersieGeldigheid) {
			return visitor.visitVersieGeldigheid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GeldigheidsDatumContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public datumLiteral(): DatumLiteralContext {
		return this.getTypedRuleContext(DatumLiteralContext, 0) as DatumLiteralContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_geldigheidsDatum;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGeldigheidsDatum) {
			return visitor.visitGeldigheidsDatum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultaatDeelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_resultaatDeel;
	}
	public copyFrom(ctx: ResultaatDeelContext): void {
		super.copyFrom(ctx);
	}
}
export class GelijkstellingResultaatContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	public WORDT_BEREKEND_ALS(): TerminalNode {
		return this.getToken(RegelSpraakParser.WORDT_BEREKEND_ALS, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public WORDT_GESTELD_OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.WORDT_GESTELD_OP, 0);
	}
	public WORDT_GEINITIALISEERD_OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.WORDT_GEINITIALISEERD_OP, 0);
	}
	public conditieBijExpressie(): ConditieBijExpressieContext {
		return this.getTypedRuleContext(ConditieBijExpressieContext, 0) as ConditieBijExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGelijkstellingResultaat) {
			return visitor.visitGelijkstellingResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationshipWithAttributeResultaatContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public attribuutMetLidwoord(): AttribuutMetLidwoordContext {
		return this.getTypedRuleContext(AttribuutMetLidwoordContext, 0) as AttribuutMetLidwoordContext;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
	}
	public IS_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
	}
	public GELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_IS_AAN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRelationshipWithAttributeResultaat) {
			return visitor.visitRelationshipWithAttributeResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConsistencyCheckResultaatContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	public MOET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MOET, 0);
	}
	public consistencyOperator(): ConsistencyOperatorContext {
		return this.getTypedRuleContext(ConsistencyOperatorContext, 0) as ConsistencyOperatorContext;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitConsistencyCheckResultaat) {
			return visitor.visitConsistencyCheckResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VerdelingContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public verdelingResultaat(): VerdelingResultaatContext {
		return this.getTypedRuleContext(VerdelingResultaatContext, 0) as VerdelingResultaatContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdeling) {
			return visitor.visitVerdeling(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectCreatieResultaatContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public objectCreatie(): ObjectCreatieContext {
		return this.getTypedRuleContext(ObjectCreatieContext, 0) as ObjectCreatieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitObjectCreatieResultaat) {
			return visitor.visitObjectCreatieResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DagsoortdefinitieResultaatContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EEN_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.EEN);
	}
	public EEN(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, i);
	}
	public DAG(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAG, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDagsoortdefinitieResultaat) {
			return visitor.visitDagsoortdefinitieResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class KenmerkFeitResultaatContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public kenmerkNaam(): KenmerkNaamContext {
		return this.getTypedRuleContext(KenmerkNaamContext, 0) as KenmerkNaamContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	public conditieBijExpressie(): ConditieBijExpressieContext {
		return this.getTypedRuleContext(ConditieBijExpressieContext, 0) as ConditieBijExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitKenmerkFeitResultaat) {
			return visitor.visitKenmerkFeitResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FeitCreatieResultaatContext extends ResultaatDeelContext {
	constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public feitCreatiePattern(): FeitCreatiePatternContext {
		return this.getTypedRuleContext(FeitCreatiePatternContext, 0) as FeitCreatiePatternContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitFeitCreatieResultaat) {
			return visitor.visitFeitCreatieResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsistencyOperatorContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ONGELIJK_ZIJN_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ONGELIJK_ZIJN_AAN, 0);
	}
	public ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ONGELIJK_AAN, 0);
	}
	public IS_ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_ONGELIJK_AAN, 0);
	}
	public GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
	}
	public IS_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
	}
	public GROTER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GROTER_DAN, 0);
	}
	public IS_GROTER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GROTER_DAN, 0);
	}
	public KLEINER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.KLEINER_DAN, 0);
	}
	public IS_KLEINER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_KLEINER_DAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_consistencyOperator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitConsistencyOperator) {
			return visitor.visitConsistencyOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeitCreatiePatternContext extends ParserRuleContext {
	public _role1!: FeitCreatieRolPhraseContext;
	public _subject1!: FeitCreatieSubjectPhraseContext;
	public _article2!: Token;
	public _role2!: FeitCreatieRolPhraseContext;
	public _article3!: Token;
	public _subject2!: FeitCreatieSubjectPhraseContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public EEN_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.EEN);
	}
	public EEN(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, i);
	}
	public VAN_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.VAN);
	}
	public VAN(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, i);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public feitCreatieRolPhrase_list(): FeitCreatieRolPhraseContext[] {
		return this.getTypedRuleContexts(FeitCreatieRolPhraseContext) as FeitCreatieRolPhraseContext[];
	}
	public feitCreatieRolPhrase(i: number): FeitCreatieRolPhraseContext {
		return this.getTypedRuleContext(FeitCreatieRolPhraseContext, i) as FeitCreatieRolPhraseContext;
	}
	public feitCreatieSubjectPhrase_list(): FeitCreatieSubjectPhraseContext[] {
		return this.getTypedRuleContexts(FeitCreatieSubjectPhraseContext) as FeitCreatieSubjectPhraseContext[];
	}
	public feitCreatieSubjectPhrase(i: number): FeitCreatieSubjectPhraseContext {
		return this.getTypedRuleContext(FeitCreatieSubjectPhraseContext, i) as FeitCreatieSubjectPhraseContext;
	}
	public DE_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.DE);
	}
	public DE(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, i);
	}
	public HET_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.HET);
	}
	public HET(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_feitCreatiePattern;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitFeitCreatiePattern) {
			return visitor.visitFeitCreatiePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeitCreatieRolPhraseContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public feitCreatieWord_list(): FeitCreatieWordContext[] {
		return this.getTypedRuleContexts(FeitCreatieWordContext) as FeitCreatieWordContext[];
	}
	public feitCreatieWord(i: number): FeitCreatieWordContext {
		return this.getTypedRuleContext(FeitCreatieWordContext, i) as FeitCreatieWordContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_feitCreatieRolPhrase;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitFeitCreatieRolPhrase) {
			return visitor.visitFeitCreatieRolPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeitCreatieSubjectPhraseContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public feitCreatieSubjectWord_list(): FeitCreatieSubjectWordContext[] {
		return this.getTypedRuleContexts(FeitCreatieSubjectWordContext) as FeitCreatieSubjectWordContext[];
	}
	public feitCreatieSubjectWord(i: number): FeitCreatieSubjectWordContext {
		return this.getTypedRuleContext(FeitCreatieSubjectWordContext, i) as FeitCreatieSubjectWordContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_feitCreatieSubjectPhrase;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitFeitCreatieSubjectPhrase) {
			return visitor.visitFeitCreatieSubjectPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeitCreatieSubjectWordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeyword(): IdentifierOrKeywordContext {
		return this.getTypedRuleContext(IdentifierOrKeywordContext, 0) as IdentifierOrKeywordContext;
	}
	public voorzetsel(): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, 0) as VoorzetselContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_feitCreatieSubjectWord;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitFeitCreatieSubjectWord) {
			return visitor.visitFeitCreatieSubjectWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeitCreatieWordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifierOrKeyword(): IdentifierOrKeywordContext {
		return this.getTypedRuleContext(IdentifierOrKeywordContext, 0) as IdentifierOrKeywordContext;
	}
	public voorzetselNietVan(): VoorzetselNietVanContext {
		return this.getTypedRuleContext(VoorzetselNietVanContext, 0) as VoorzetselNietVanContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_feitCreatieWord;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitFeitCreatieWord) {
			return visitor.visitFeitCreatieWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VoorzetselNietVanContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
	public VOOR(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOOR, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(RegelSpraakParser.OVER, 0);
	}
	public OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.OP, 0);
	}
	public BIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.BIJ, 0);
	}
	public UIT(): TerminalNode {
		return this.getToken(RegelSpraakParser.UIT, 0);
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_voorzetselNietVan;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVoorzetselNietVan) {
			return visitor.visitVoorzetselNietVan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectCreatieContext extends ParserRuleContext {
	public _subject!: OnderwerpReferentieContext;
	public _roleArticle!: Token;
	public _role!: NaamwoordContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public objectAttributeInit(): ObjectAttributeInitContext {
		return this.getTypedRuleContext(ObjectAttributeInitContext, 0) as ObjectAttributeInitContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_objectCreatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitObjectCreatie) {
			return visitor.visitObjectCreatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectAttributeInitContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET, 0);
	}
	public waardetoekenning_list(): WaardetoekenningContext[] {
		return this.getTypedRuleContexts(WaardetoekenningContext) as WaardetoekenningContext[];
	}
	public waardetoekenning(i: number): WaardetoekenningContext {
		return this.getTypedRuleContext(WaardetoekenningContext, i) as WaardetoekenningContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_objectAttributeInit;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitObjectAttributeInit) {
			return visitor.visitObjectAttributeInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaardetoekenningContext extends ParserRuleContext {
	public _attribuut!: SimpleNaamwoordContext;
	public _waarde!: SimpleExpressieContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
	}
	public simpleNaamwoord(): SimpleNaamwoordContext {
		return this.getTypedRuleContext(SimpleNaamwoordContext, 0) as SimpleNaamwoordContext;
	}
	public simpleExpressie(): SimpleExpressieContext {
		return this.getTypedRuleContext(SimpleExpressieContext, 0) as SimpleExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_waardetoekenning;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitWaardetoekenning) {
			return visitor.visitWaardetoekenning(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleNaamwoordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamPhrase(): NaamPhraseContext {
		return this.getTypedRuleContext(NaamPhraseContext, 0) as NaamPhraseContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_simpleNaamwoord;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSimpleNaamwoord) {
			return visitor.visitSimpleNaamwoord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsistentieregelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public CONSISTENTIEREGEL(): TerminalNode {
		return this.getToken(RegelSpraakParser.CONSISTENTIEREGEL, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public uniekzijnResultaat(): UniekzijnResultaatContext {
		return this.getTypedRuleContext(UniekzijnResultaatContext, 0) as UniekzijnResultaatContext;
	}
	public inconsistentResultaat(): InconsistentResultaatContext {
		return this.getTypedRuleContext(InconsistentResultaatContext, 0) as InconsistentResultaatContext;
	}
	public voorwaardeDeel(): VoorwaardeDeelContext {
		return this.getTypedRuleContext(VoorwaardeDeelContext, 0) as VoorwaardeDeelContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_consistentieregel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitConsistentieregel) {
			return visitor.visitConsistentieregel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UniekzijnResultaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public alleAttributenVanObjecttype(): AlleAttributenVanObjecttypeContext {
		return this.getTypedRuleContext(AlleAttributenVanObjecttypeContext, 0) as AlleAttributenVanObjecttypeContext;
	}
	public MOETEN_UNIEK_ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MOETEN_UNIEK_ZIJN, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_uniekzijnResultaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUniekzijnResultaat) {
			return visitor.visitUniekzijnResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlleAttributenVanObjecttypeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public naamwoord_list(): NaamwoordContext[] {
		return this.getTypedRuleContexts(NaamwoordContext) as NaamwoordContext[];
	}
	public naamwoord(i: number): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, i) as NaamwoordContext;
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_alleAttributenVanObjecttype;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAlleAttributenVanObjecttype) {
			return visitor.visitAlleAttributenVanObjecttype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InconsistentResultaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public IS_INCONSISTENT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_INCONSISTENT, 0);
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public ER(): TerminalNode {
		return this.getToken(RegelSpraakParser.ER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_inconsistentResultaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitInconsistentResultaat) {
			return visitor.visitInconsistentResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VoorwaardeDeelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public INDIEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.INDIEN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public toplevelSamengesteldeVoorwaarde(): ToplevelSamengesteldeVoorwaardeContext {
		return this.getTypedRuleContext(ToplevelSamengesteldeVoorwaardeContext, 0) as ToplevelSamengesteldeVoorwaardeContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_voorwaardeDeel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVoorwaardeDeel) {
			return visitor.visitVoorwaardeDeel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToplevelSamengesteldeVoorwaardeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ER_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ER_AAN, 0);
	}
	public voorwaardeKwantificatie(): VoorwaardeKwantificatieContext {
		return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0) as VoorwaardeKwantificatieContext;
	}
	public WORDT_VOLDAAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.WORDT_VOLDAAN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.COLON, 0);
	}
	public VOLGENDE_VOORWAARDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
	}
	public VOLGENDE_VOORWAARDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
	}
	public samengesteldeVoorwaardeOnderdeel_list(): SamengesteldeVoorwaardeOnderdeelContext[] {
		return this.getTypedRuleContexts(SamengesteldeVoorwaardeOnderdeelContext) as SamengesteldeVoorwaardeOnderdeelContext[];
	}
	public samengesteldeVoorwaardeOnderdeel(i: number): SamengesteldeVoorwaardeOnderdeelContext {
		return this.getTypedRuleContext(SamengesteldeVoorwaardeOnderdeelContext, i) as SamengesteldeVoorwaardeOnderdeelContext;
	}
	public AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.AAN, 0);
	}
	public VOLDOET(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET, 0);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public HIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.HIJ, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public ER(): TerminalNode {
		return this.getToken(RegelSpraakParser.ER, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_toplevelSamengesteldeVoorwaarde;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitToplevelSamengesteldeVoorwaarde) {
			return visitor.visitToplevelSamengesteldeVoorwaarde(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VoorwaardeKwantificatieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public GEEN_VAN_DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEEN_VAN_DE, 0);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public TEN_MINSTE(): TerminalNode {
		return this.getToken(RegelSpraakParser.TEN_MINSTE, 0);
	}
	public TENMINSTE(): TerminalNode {
		return this.getToken(RegelSpraakParser.TENMINSTE, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public EEN_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN_TELWOORD, 0);
	}
	public TWEE_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.TWEE_TELWOORD, 0);
	}
	public DRIE_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.DRIE_TELWOORD, 0);
	}
	public VIER_TELWOORD(): TerminalNode {
		return this.getToken(RegelSpraakParser.VIER_TELWOORD, 0);
	}
	public TEN_HOOGSTE(): TerminalNode {
		return this.getToken(RegelSpraakParser.TEN_HOOGSTE, 0);
	}
	public PRECIES(): TerminalNode {
		return this.getToken(RegelSpraakParser.PRECIES, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_voorwaardeKwantificatie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVoorwaardeKwantificatie) {
			return visitor.visitVoorwaardeKwantificatie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SamengesteldeVoorwaardeOnderdeelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public outerBulletPrefix(): OuterBulletPrefixContext {
		return this.getTypedRuleContext(OuterBulletPrefixContext, 0) as OuterBulletPrefixContext;
	}
	public elementaireVoorwaarde(): ElementaireVoorwaardeContext {
		return this.getTypedRuleContext(ElementaireVoorwaardeContext, 0) as ElementaireVoorwaardeContext;
	}
	public genesteSamengesteldeVoorwaarde(): GenesteSamengesteldeVoorwaardeContext {
		return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeContext, 0) as GenesteSamengesteldeVoorwaardeContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSamengesteldeVoorwaardeOnderdeel) {
			return visitor.visitSamengesteldeVoorwaardeOnderdeel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OuterBulletPrefixContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUS, 0);
	}
	public BULLET(): TerminalNode {
		return this.getToken(RegelSpraakParser.BULLET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_outerBulletPrefix;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitOuterBulletPrefix) {
			return visitor.visitOuterBulletPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedBulletPrefixContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DOUBLE_DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOUBLE_DOT, 0);
	}
	public BULLET_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.BULLET);
	}
	public BULLET(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.BULLET, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_nestedBulletPrefix;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNestedBulletPrefix) {
			return visitor.visitNestedBulletPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BulletPrefixContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MINUS_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUS, i);
	}
	public DOUBLE_DOT_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.DOUBLE_DOT);
	}
	public DOUBLE_DOT(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.DOUBLE_DOT, i);
	}
	public BULLET_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.BULLET);
	}
	public BULLET(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.BULLET, i);
	}
	public ASTERISK_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.ASTERISK);
	}
	public ASTERISK(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.ASTERISK, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_bulletPrefix;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBulletPrefix) {
			return visitor.visitBulletPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaireVoorwaardeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_elementaireVoorwaarde;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitElementaireVoorwaarde) {
			return visitor.visitElementaireVoorwaarde(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenesteSamengesteldeVoorwaardeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public VOLDOET(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET, 0);
	}
	public AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.AAN, 0);
	}
	public voorwaardeKwantificatie(): VoorwaardeKwantificatieContext {
		return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0) as VoorwaardeKwantificatieContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.COLON, 0);
	}
	public VOLGENDE_VOORWAARDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
	}
	public VOLGENDE_VOORWAARDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public HIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.HIJ, 0);
	}
	public ER(): TerminalNode {
		return this.getToken(RegelSpraakParser.ER, 0);
	}
	public genesteSamengesteldeVoorwaardeOnderdeel_list(): GenesteSamengesteldeVoorwaardeOnderdeelContext[] {
		return this.getTypedRuleContexts(GenesteSamengesteldeVoorwaardeOnderdeelContext) as GenesteSamengesteldeVoorwaardeOnderdeelContext[];
	}
	public genesteSamengesteldeVoorwaardeOnderdeel(i: number): GenesteSamengesteldeVoorwaardeOnderdeelContext {
		return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeOnderdeelContext, i) as GenesteSamengesteldeVoorwaardeOnderdeelContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_genesteSamengesteldeVoorwaarde;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGenesteSamengesteldeVoorwaarde) {
			return visitor.visitGenesteSamengesteldeVoorwaarde(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenesteSamengesteldeVoorwaardeOnderdeelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public nestedBulletPrefix(): NestedBulletPrefixContext {
		return this.getTypedRuleContext(NestedBulletPrefixContext, 0) as NestedBulletPrefixContext;
	}
	public elementaireVoorwaarde(): ElementaireVoorwaardeContext {
		return this.getTypedRuleContext(ElementaireVoorwaardeContext, 0) as ElementaireVoorwaardeContext;
	}
	public genesteSamengesteldeVoorwaarde(): GenesteSamengesteldeVoorwaardeContext {
		return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeContext, 0) as GenesteSamengesteldeVoorwaardeContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeOnderdeel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGenesteSamengesteldeVoorwaardeOnderdeel) {
			return visitor.visitGenesteSamengesteldeVoorwaardeOnderdeel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnderwerpReferentieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public onderwerpBasis(): OnderwerpBasisContext {
		return this.getTypedRuleContext(OnderwerpBasisContext, 0) as OnderwerpBasisContext;
	}
	public predicaat(): PredicaatContext {
		return this.getTypedRuleContext(PredicaatContext, 0) as PredicaatContext;
	}
	public DIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DIE, 0);
	}
	public DAT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_onderwerpReferentie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitOnderwerpReferentie) {
			return visitor.visitOnderwerpReferentie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnderwerpReferentieWithNumbersContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public onderwerpBasisWithNumbers(): OnderwerpBasisWithNumbersContext {
		return this.getTypedRuleContext(OnderwerpBasisWithNumbersContext, 0) as OnderwerpBasisWithNumbersContext;
	}
	public predicaat(): PredicaatContext {
		return this.getTypedRuleContext(PredicaatContext, 0) as PredicaatContext;
	}
	public DIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DIE, 0);
	}
	public DAT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_onderwerpReferentieWithNumbers;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitOnderwerpReferentieWithNumbers) {
			return visitor.visitOnderwerpReferentieWithNumbers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnderwerpBasisContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public basisOnderwerp_list(): BasisOnderwerpContext[] {
		return this.getTypedRuleContexts(BasisOnderwerpContext) as BasisOnderwerpContext[];
	}
	public basisOnderwerp(i: number): BasisOnderwerpContext {
		return this.getTypedRuleContext(BasisOnderwerpContext, i) as BasisOnderwerpContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_onderwerpBasis;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitOnderwerpBasis) {
			return visitor.visitOnderwerpBasis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnderwerpBasisWithNumbersContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public basisOnderwerpWithNumbers_list(): BasisOnderwerpWithNumbersContext[] {
		return this.getTypedRuleContexts(BasisOnderwerpWithNumbersContext) as BasisOnderwerpWithNumbersContext[];
	}
	public basisOnderwerpWithNumbers(i: number): BasisOnderwerpWithNumbersContext {
		return this.getTypedRuleContext(BasisOnderwerpWithNumbersContext, i) as BasisOnderwerpWithNumbersContext;
	}
	public voorzetsel_list(): VoorzetselContext[] {
		return this.getTypedRuleContexts(VoorzetselContext) as VoorzetselContext[];
	}
	public voorzetsel(i: number): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, i) as VoorzetselContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_onderwerpBasisWithNumbers;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitOnderwerpBasisWithNumbers) {
			return visitor.visitOnderwerpBasisWithNumbers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasisOnderwerpContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public identifierOrKeyword_list(): IdentifierOrKeywordContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordContext) as IdentifierOrKeywordContext[];
	}
	public identifierOrKeyword(i: number): IdentifierOrKeywordContext {
		return this.getTypedRuleContext(IdentifierOrKeywordContext, i) as IdentifierOrKeywordContext;
	}
	public HIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.HIJ, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_basisOnderwerp;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBasisOnderwerp) {
			return visitor.visitBasisOnderwerp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasisOnderwerpWithNumbersContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public identifierOrKeywordWithNumbers_list(): IdentifierOrKeywordWithNumbersContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordWithNumbersContext) as IdentifierOrKeywordWithNumbersContext[];
	}
	public identifierOrKeywordWithNumbers(i: number): IdentifierOrKeywordWithNumbersContext {
		return this.getTypedRuleContext(IdentifierOrKeywordWithNumbersContext, i) as IdentifierOrKeywordWithNumbersContext;
	}
	public HIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.HIJ, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_basisOnderwerpWithNumbers;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBasisOnderwerpWithNumbers) {
			return visitor.visitBasisOnderwerpWithNumbers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribuutReferentieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public attribuutMetLidwoord(): AttribuutMetLidwoordContext {
		return this.getTypedRuleContext(AttribuutMetLidwoordContext, 0) as AttribuutMetLidwoordContext;
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_attribuutReferentie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAttribuutReferentie) {
			return visitor.visitAttribuutReferentie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribuutMetLidwoordContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoordNoIs(): NaamwoordNoIsContext {
		return this.getTypedRuleContext(NaamwoordNoIsContext, 0) as NaamwoordNoIsContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_attribuutMetLidwoord;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAttribuutMetLidwoord) {
			return visitor.visitAttribuutMetLidwoord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KenmerkNaamContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public voorzetsel(): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, 0) as VoorzetselContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_kenmerkNaam;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitKenmerkNaam) {
			return visitor.visitKenmerkNaam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KenmerkPhraseContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public voorzetsel(): VoorzetselContext {
		return this.getTypedRuleContext(VoorzetselContext, 0) as VoorzetselContext;
	}
	public identifierOrKeywordWithNumbers_list(): IdentifierOrKeywordWithNumbersContext[] {
		return this.getTypedRuleContexts(IdentifierOrKeywordWithNumbersContext) as IdentifierOrKeywordWithNumbersContext[];
	}
	public identifierOrKeywordWithNumbers(i: number): IdentifierOrKeywordWithNumbersContext {
		return this.getTypedRuleContext(IdentifierOrKeywordWithNumbersContext, i) as IdentifierOrKeywordWithNumbersContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_kenmerkPhrase;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitKenmerkPhrase) {
			return visitor.visitKenmerkPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BezieldeReferentieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public HAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.HAAR, 0);
	}
	public HUN(): TerminalNode {
		return this.getToken(RegelSpraakParser.HUN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_bezieldeReferentie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBezieldeReferentie) {
			return visitor.visitBezieldeReferentie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregationSubjectContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public predicaat(): PredicaatContext {
		return this.getTypedRuleContext(PredicaatContext, 0) as PredicaatContext;
	}
	public DIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DIE, 0);
	}
	public DAT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_aggregationSubject;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAggregationSubject) {
			return visitor.visitAggregationSubject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public elementairPredicaat(): ElementairPredicaatContext {
		return this.getTypedRuleContext(ElementairPredicaatContext, 0) as ElementairPredicaatContext;
	}
	public samengesteldPredicaat(): SamengesteldPredicaatContext {
		return this.getTypedRuleContext(SamengesteldPredicaatContext, 0) as SamengesteldPredicaatContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_predicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPredicaat) {
			return visitor.visitPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementairPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public attribuutVergelijkingsPredicaat(): AttribuutVergelijkingsPredicaatContext {
		return this.getTypedRuleContext(AttribuutVergelijkingsPredicaatContext, 0) as AttribuutVergelijkingsPredicaatContext;
	}
	public objectPredicaat(): ObjectPredicaatContext {
		return this.getTypedRuleContext(ObjectPredicaatContext, 0) as ObjectPredicaatContext;
	}
	public getalPredicaat(): GetalPredicaatContext {
		return this.getTypedRuleContext(GetalPredicaatContext, 0) as GetalPredicaatContext;
	}
	public tekstPredicaat(): TekstPredicaatContext {
		return this.getTypedRuleContext(TekstPredicaatContext, 0) as TekstPredicaatContext;
	}
	public datumPredicaat(): DatumPredicaatContext {
		return this.getTypedRuleContext(DatumPredicaatContext, 0) as DatumPredicaatContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_elementairPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitElementairPredicaat) {
			return visitor.visitElementairPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public eenzijdigeObjectVergelijking(): EenzijdigeObjectVergelijkingContext {
		return this.getTypedRuleContext(EenzijdigeObjectVergelijkingContext, 0) as EenzijdigeObjectVergelijkingContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_objectPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitObjectPredicaat) {
			return visitor.visitObjectPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EenzijdigeObjectVergelijkingContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public HEBBEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEBBEN, 0);
	}
	public kenmerkNaam(): KenmerkNaamContext {
		return this.getTypedRuleContext(KenmerkNaamContext, 0) as KenmerkNaamContext;
	}
	public rolNaam(): RolNaamContext {
		return this.getTypedRuleContext(RolNaamContext, 0) as RolNaamContext;
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_eenzijdigeObjectVergelijking;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEenzijdigeObjectVergelijking) {
			return visitor.visitEenzijdigeObjectVergelijking(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RolNaamContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_rolNaam;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRolNaam) {
			return visitor.visitRolNaam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribuutVergelijkingsPredicaatContext extends ParserRuleContext {
	public _attribuutNaam!: NaamwoordContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public HEBBEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEBBEN, 0);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_attribuutVergelijkingsPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAttribuutVergelijkingsPredicaat) {
			return visitor.visitAttribuutVergelijkingsPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetalPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public getalVergelijkingsOperatorMeervoud(): GetalVergelijkingsOperatorMeervoudContext {
		return this.getTypedRuleContext(GetalVergelijkingsOperatorMeervoudContext, 0) as GetalVergelijkingsOperatorMeervoudContext;
	}
	public getalExpressie(): GetalExpressieContext {
		return this.getTypedRuleContext(GetalExpressieContext, 0) as GetalExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_getalPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGetalPredicaat) {
			return visitor.visitGetalPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TekstPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public tekstVergelijkingsOperatorMeervoud(): TekstVergelijkingsOperatorMeervoudContext {
		return this.getTypedRuleContext(TekstVergelijkingsOperatorMeervoudContext, 0) as TekstVergelijkingsOperatorMeervoudContext;
	}
	public tekstExpressie(): TekstExpressieContext {
		return this.getTypedRuleContext(TekstExpressieContext, 0) as TekstExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_tekstPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTekstPredicaat) {
			return visitor.visitTekstPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatumPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public datumVergelijkingsOperatorMeervoud(): DatumVergelijkingsOperatorMeervoudContext {
		return this.getTypedRuleContext(DatumVergelijkingsOperatorMeervoudContext, 0) as DatumVergelijkingsOperatorMeervoudContext;
	}
	public datumExpressie(): DatumExpressieContext {
		return this.getTypedRuleContext(DatumExpressieContext, 0) as DatumExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_datumPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumPredicaat) {
			return visitor.visitDatumPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SamengesteldPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.AAN, 0);
	}
	public voorwaardeKwantificatie(): VoorwaardeKwantificatieContext {
		return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0) as VoorwaardeKwantificatieContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.COLON, 0);
	}
	public VOLGENDE_VOORWAARDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
	}
	public VOLGENDE_VOORWAARDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
	}
	public VOLDOET(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET, 0);
	}
	public VOLDOEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOEN, 0);
	}
	public samengesteldeVoorwaardeOnderdeelInPredicaat_list(): SamengesteldeVoorwaardeOnderdeelInPredicaatContext[] {
		return this.getTypedRuleContexts(SamengesteldeVoorwaardeOnderdeelInPredicaatContext) as SamengesteldeVoorwaardeOnderdeelInPredicaatContext[];
	}
	public samengesteldeVoorwaardeOnderdeelInPredicaat(i: number): SamengesteldeVoorwaardeOnderdeelInPredicaatContext {
		return this.getTypedRuleContext(SamengesteldeVoorwaardeOnderdeelInPredicaatContext, i) as SamengesteldeVoorwaardeOnderdeelInPredicaatContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_samengesteldPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSamengesteldPredicaat) {
			return visitor.visitSamengesteldPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SamengesteldeVoorwaardeOnderdeelInPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public bulletPrefix(): BulletPrefixContext {
		return this.getTypedRuleContext(BulletPrefixContext, 0) as BulletPrefixContext;
	}
	public elementaireVoorwaardeInPredicaat(): ElementaireVoorwaardeInPredicaatContext {
		return this.getTypedRuleContext(ElementaireVoorwaardeInPredicaatContext, 0) as ElementaireVoorwaardeInPredicaatContext;
	}
	public genesteSamengesteldeVoorwaardeInPredicaat(): GenesteSamengesteldeVoorwaardeInPredicaatContext {
		return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeInPredicaatContext, 0) as GenesteSamengesteldeVoorwaardeInPredicaatContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeelInPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSamengesteldeVoorwaardeOnderdeelInPredicaat) {
			return visitor.visitSamengesteldeVoorwaardeOnderdeelInPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaireVoorwaardeInPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public vergelijkingInPredicaat(): VergelijkingInPredicaatContext {
		return this.getTypedRuleContext(VergelijkingInPredicaatContext, 0) as VergelijkingInPredicaatContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_elementaireVoorwaardeInPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitElementaireVoorwaardeInPredicaat) {
			return visitor.visitElementaireVoorwaardeInPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VergelijkingInPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public kenmerkNaam(): KenmerkNaamContext {
		return this.getTypedRuleContext(KenmerkNaamContext, 0) as KenmerkNaamContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	public bezieldeReferentie(): BezieldeReferentieContext {
		return this.getTypedRuleContext(BezieldeReferentieContext, 0) as BezieldeReferentieContext;
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public eenzijdigeObjectVergelijking(): EenzijdigeObjectVergelijkingContext {
		return this.getTypedRuleContext(EenzijdigeObjectVergelijkingContext, 0) as EenzijdigeObjectVergelijkingContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_vergelijkingInPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVergelijkingInPredicaat) {
			return visitor.visitVergelijkingInPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenesteSamengesteldeVoorwaardeInPredicaatContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.AAN, 0);
	}
	public voorwaardeKwantificatie(): VoorwaardeKwantificatieContext {
		return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0) as VoorwaardeKwantificatieContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.COLON, 0);
	}
	public VOLGENDE_VOORWAARDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
	}
	public VOLGENDE_VOORWAARDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
	}
	public VOLDOET(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET, 0);
	}
	public VOLDOEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOEN, 0);
	}
	public WORDT(): TerminalNode {
		return this.getToken(RegelSpraakParser.WORDT, 0);
	}
	public VOLDAAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDAAN, 0);
	}
	public samengesteldeVoorwaardeOnderdeelInPredicaat_list(): SamengesteldeVoorwaardeOnderdeelInPredicaatContext[] {
		return this.getTypedRuleContexts(SamengesteldeVoorwaardeOnderdeelInPredicaatContext) as SamengesteldeVoorwaardeOnderdeelInPredicaatContext[];
	}
	public samengesteldeVoorwaardeOnderdeelInPredicaat(i: number): SamengesteldeVoorwaardeOnderdeelInPredicaatContext {
		return this.getTypedRuleContext(SamengesteldeVoorwaardeOnderdeelInPredicaatContext, i) as SamengesteldeVoorwaardeOnderdeelInPredicaatContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeInPredicaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGenesteSamengesteldeVoorwaardeInPredicaat) {
			return visitor.visitGenesteSamengesteldeVoorwaardeInPredicaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetalVergelijkingsOperatorMeervoudContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ZIJN_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
	}
	public ZIJN_ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
	}
	public ZIJN_GROTER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GROTER_DAN, 0);
	}
	public ZIJN_GROTER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GROTER_OF_GELIJK_AAN, 0);
	}
	public ZIJN_KLEINER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_KLEINER_DAN, 0);
	}
	public ZIJN_KLEINER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_KLEINER_OF_GELIJK_AAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_getalVergelijkingsOperatorMeervoud;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGetalVergelijkingsOperatorMeervoud) {
			return visitor.visitGetalVergelijkingsOperatorMeervoud(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TekstVergelijkingsOperatorMeervoudContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ZIJN_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
	}
	public ZIJN_ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_tekstVergelijkingsOperatorMeervoud;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTekstVergelijkingsOperatorMeervoud) {
			return visitor.visitTekstVergelijkingsOperatorMeervoud(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatumVergelijkingsOperatorMeervoudContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ZIJN_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
	}
	public ZIJN_ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
	}
	public ZIJN_LATER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_LATER_DAN, 0);
	}
	public ZIJN_LATER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_LATER_OF_GELIJK_AAN, 0);
	}
	public ZIJN_EERDER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_EERDER_DAN, 0);
	}
	public ZIJN_EERDER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_EERDER_OF_GELIJK_AAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_datumVergelijkingsOperatorMeervoud;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumVergelijkingsOperatorMeervoud) {
			return visitor.visitDatumVergelijkingsOperatorMeervoud(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetalExpressieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_getalExpressie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGetalExpressie) {
			return visitor.visitGetalExpressie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TekstExpressieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_tekstExpressie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTekstExpressie) {
			return visitor.visitTekstExpressie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatumExpressieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public datumLiteral(): DatumLiteralContext {
		return this.getTypedRuleContext(DatumLiteralContext, 0) as DatumLiteralContext;
	}
	public REKENDATUM(): TerminalNode {
		return this.getToken(RegelSpraakParser.REKENDATUM, 0);
	}
	public REKENJAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.REKENJAAR, 0);
	}
	public DE_DATUM_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_DATUM_MET, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LPAREN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	public DE_EERSTE_PAASDAG_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN, 0);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	public bezieldeReferentie(): BezieldeReferentieContext {
		return this.getTypedRuleContext(BezieldeReferentieContext, 0) as BezieldeReferentieContext;
	}
	public parameterMetLidwoord(): ParameterMetLidwoordContext {
		return this.getTypedRuleContext(ParameterMetLidwoordContext, 0) as ParameterMetLidwoordContext;
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_datumExpressie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumExpressie) {
			return visitor.visitDatumExpressie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariabeleDeelContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DAARBIJ_GELDT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAARBIJ_GELDT, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
	public variabeleToekenning_list(): VariabeleToekenningContext[] {
		return this.getTypedRuleContexts(VariabeleToekenningContext) as VariabeleToekenningContext[];
	}
	public variabeleToekenning(i: number): VariabeleToekenningContext {
		return this.getTypedRuleContext(VariabeleToekenningContext, i) as VariabeleToekenningContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_variabeleDeel;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVariabeleDeel) {
			return visitor.visitVariabeleDeel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariabeleToekenningContext extends ParserRuleContext {
	public _article!: Token;
	public _varName!: Token;
	public _varExpr!: VariabeleExpressieContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
	public variabeleExpressie(): VariabeleExpressieContext {
		return this.getTypedRuleContext(VariabeleExpressieContext, 0) as VariabeleExpressieContext;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_variabeleToekenning;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVariabeleToekenning) {
			return visitor.visitVariabeleToekenning(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariabeleExpressieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public additiveOperator_list(): AdditiveOperatorContext[] {
		return this.getTypedRuleContexts(AdditiveOperatorContext) as AdditiveOperatorContext[];
	}
	public additiveOperator(i: number): AdditiveOperatorContext {
		return this.getTypedRuleContext(AdditiveOperatorContext, i) as AdditiveOperatorContext;
	}
	public multiplicativeOperator_list(): MultiplicativeOperatorContext[] {
		return this.getTypedRuleContexts(MultiplicativeOperatorContext) as MultiplicativeOperatorContext[];
	}
	public multiplicativeOperator(i: number): MultiplicativeOperatorContext {
		return this.getTypedRuleContext(MultiplicativeOperatorContext, i) as MultiplicativeOperatorContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_variabeleExpressie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVariabeleExpressie) {
			return visitor.visitVariabeleExpressie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_expressie;
	}
	public copyFrom(ctx: ExpressieContext): void {
		super.copyFrom(ctx);
	}
}
export class SimpleExprContext extends ExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: ExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public logicalExpression(): LogicalExpressionContext {
		return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSimpleExpr) {
			return visitor.visitSimpleExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBegrenzingAfrondingContext extends ExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: ExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public logicalExpression(): LogicalExpressionContext {
		return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public begrenzing(): BegrenzingContext {
		return this.getTypedRuleContext(BegrenzingContext, 0) as BegrenzingContext;
	}
	public afronding(): AfrondingContext {
		return this.getTypedRuleContext(AfrondingContext, 0) as AfrondingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitExprBegrenzingAfronding) {
			return visitor.visitExprBegrenzingAfronding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBegrenzingContext extends ExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: ExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public logicalExpression(): LogicalExpressionContext {
		return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public begrenzing(): BegrenzingContext {
		return this.getTypedRuleContext(BegrenzingContext, 0) as BegrenzingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitExprBegrenzing) {
			return visitor.visitExprBegrenzing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprAfrondingContext extends ExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: ExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public logicalExpression(): LogicalExpressionContext {
		return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
	}
	public afronding(): AfrondingContext {
		return this.getTypedRuleContext(AfrondingContext, 0) as AfrondingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitExprAfronding) {
			return visitor.visitExprAfronding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleExpressieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_simpleExpressie;
	}
	public copyFrom(ctx: SimpleExpressieContext): void {
		super.copyFrom(ctx);
	}
}
export class SimpleExprBegrenzingContext extends SimpleExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getTypedRuleContext(ComparisonExpressionContext, 0) as ComparisonExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public begrenzing(): BegrenzingContext {
		return this.getTypedRuleContext(BegrenzingContext, 0) as BegrenzingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSimpleExprBegrenzing) {
			return visitor.visitSimpleExprBegrenzing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleExprAfrondingContext extends SimpleExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getTypedRuleContext(ComparisonExpressionContext, 0) as ComparisonExpressionContext;
	}
	public afronding(): AfrondingContext {
		return this.getTypedRuleContext(AfrondingContext, 0) as AfrondingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSimpleExprAfronding) {
			return visitor.visitSimpleExprAfronding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleExprBegrenzingAfrondingContext extends SimpleExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getTypedRuleContext(ComparisonExpressionContext, 0) as ComparisonExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public begrenzing(): BegrenzingContext {
		return this.getTypedRuleContext(BegrenzingContext, 0) as BegrenzingContext;
	}
	public afronding(): AfrondingContext {
		return this.getTypedRuleContext(AfrondingContext, 0) as AfrondingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSimpleExprBegrenzingAfronding) {
			return visitor.visitSimpleExprBegrenzingAfronding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleExprBaseContext extends SimpleExpressieContext {
	constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getTypedRuleContext(ComparisonExpressionContext, 0) as ComparisonExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSimpleExprBase) {
			return visitor.visitSimpleExprBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpressionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_logicalExpression;
	}
	public copyFrom(ctx: LogicalExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalExprContext extends LogicalExpressionContext {
	public _left!: ComparisonExpressionContext;
	public _op!: Token;
	public _right!: LogicalExpressionContext;
	constructor(parser: RegelSpraakParser, ctx: LogicalExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getTypedRuleContext(ComparisonExpressionContext, 0) as ComparisonExpressionContext;
	}
	public logicalExpression(): LogicalExpressionContext {
		return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(RegelSpraakParser.OF, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitLogicalExpr) {
			return visitor.visitLogicalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonExpressionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_comparisonExpression;
	}
	public copyFrom(ctx: ComparisonExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class GelijkIsAanOfExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	public _op!: GelijkIsAanOperatorContext;
	public _firstValue!: LiteralValueContext;
	public _literalValue!: LiteralValueContext;
	public _middleValues: LiteralValueContext[] = [];
	public _lastValue!: LiteralValueContext;
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OF(): TerminalNode {
		return this.getToken(RegelSpraakParser.OF, 0);
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public gelijkIsAanOperator(): GelijkIsAanOperatorContext {
		return this.getTypedRuleContext(GelijkIsAanOperatorContext, 0) as GelijkIsAanOperatorContext;
	}
	public literalValue_list(): LiteralValueContext[] {
		return this.getTypedRuleContexts(LiteralValueContext) as LiteralValueContext[];
	}
	public literalValue(i: number): LiteralValueContext {
		return this.getTypedRuleContext(LiteralValueContext, i) as LiteralValueContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGelijkIsAanOfExpr) {
			return visitor.visitGelijkIsAanOfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubordinateClauseExprContext extends ComparisonExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public subordinateClauseExpression(): SubordinateClauseExpressionContext {
		return this.getTypedRuleContext(SubordinateClauseExpressionContext, 0) as SubordinateClauseExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSubordinateClauseExpr) {
			return visitor.visitSubordinateClauseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PeriodeCheckExprContext extends ComparisonExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public periodevergelijkingElementair(): PeriodevergelijkingElementairContext {
		return this.getTypedRuleContext(PeriodevergelijkingElementairContext, 0) as PeriodevergelijkingElementairContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPeriodeCheckExpr) {
			return visitor.visitPeriodeCheckExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryComparisonExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	public _right!: AdditiveExpressionContext;
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public additiveExpression_list(): AdditiveExpressionContext[] {
		return this.getTypedRuleContexts(AdditiveExpressionContext) as AdditiveExpressionContext[];
	}
	public additiveExpression(i: number): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, i) as AdditiveExpressionContext;
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBinaryComparisonExpr) {
			return visitor.visitBinaryComparisonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryConditionExprContext extends ComparisonExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryCondition(): UnaryConditionContext {
		return this.getTypedRuleContext(UnaryConditionContext, 0) as UnaryConditionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryConditionExpr) {
			return visitor.visitUnaryConditionExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsDagsoortExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	public _v!: Token;
	public _neg!: Token;
	public _dagsoort!: NaamwoordContext;
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public GEEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEEN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitIsDagsoortExpr) {
			return visitor.visitIsDagsoortExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HeeftKenmerkExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitHeeftKenmerkExpr) {
			return visitor.visitHeeftKenmerkExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DagsoortVragendExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	public _neg!: Token;
	public _dagsoort!: NaamwoordContext;
	public _v!: Token;
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public EEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EEN, 0);
	}
	public GEEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEEN, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDagsoortVragendExpr) {
			return visitor.visitDagsoortVragendExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsKenmerkExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitIsKenmerkExpr) {
			return visitor.visitIsKenmerkExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RegelStatusConditionExprContext extends ComparisonExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public regelStatusCondition(): RegelStatusConditionContext {
		return this.getTypedRuleContext(RegelStatusConditionContext, 0) as RegelStatusConditionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelStatusConditionExpr) {
			return visitor.visitRegelStatusConditionExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralValueContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ENUM_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.ENUM_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.STRING_LITERAL, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public eenheidExpressie(): EenheidExpressieContext {
		return this.getTypedRuleContext(EenheidExpressieContext, 0) as EenheidExpressieContext;
	}
	public PERCENTAGE_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
	}
	public datumLiteral(): DatumLiteralContext {
		return this.getTypedRuleContext(DatumLiteralContext, 0) as DatumLiteralContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_literalValue;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitLiteralValue) {
			return visitor.visitLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GelijkIsAanOperatorContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_IS_AAN, 0);
	}
	public IS_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
	}
	public GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
	}
	public ZIJN_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_gelijkIsAanOperator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGelijkIsAanOperator) {
			return visitor.visitGelijkIsAanOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
	}
	public ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ONGELIJK_AAN, 0);
	}
	public GELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GELIJK_IS_AAN, 0);
	}
	public GROTER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GROTER_DAN, 0);
	}
	public GROTER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GROTER_OF_GELIJK_AAN, 0);
	}
	public GROTER_OF_GELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GROTER_OF_GELIJK_IS_AAN, 0);
	}
	public KLEINER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.KLEINER_DAN, 0);
	}
	public KLEINER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.KLEINER_OF_GELIJK_AAN, 0);
	}
	public KLEINER_OF_GELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.KLEINER_OF_GELIJK_IS_AAN, 0);
	}
	public KLEINER_IS_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.KLEINER_IS_DAN, 0);
	}
	public GROTER_IS_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GROTER_IS_DAN, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
	public LATER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LATER_DAN, 0);
	}
	public LATER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LATER_OF_GELIJK_AAN, 0);
	}
	public EERDER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EERDER_DAN, 0);
	}
	public EERDER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EERDER_OF_GELIJK_AAN, 0);
	}
	public NIET(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIET, 0);
	}
	public IS_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
	}
	public IS_ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_ONGELIJK_AAN, 0);
	}
	public IS_KLEINER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_KLEINER_DAN, 0);
	}
	public IS_KLEINER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_KLEINER_OF_GELIJK_AAN, 0);
	}
	public IS_GROTER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GROTER_DAN, 0);
	}
	public IS_GROTER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GROTER_OF_GELIJK_AAN, 0);
	}
	public ZIJN_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
	}
	public ZIJN_ONGELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
	}
	public ZIJN_KLEINER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_KLEINER_DAN, 0);
	}
	public ZIJN_KLEINER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_KLEINER_OF_GELIJK_AAN, 0);
	}
	public ZIJN_GROTER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GROTER_DAN, 0);
	}
	public ZIJN_GROTER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GROTER_OF_GELIJK_AAN, 0);
	}
	public IS_LATER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_LATER_DAN, 0);
	}
	public IS_LATER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_LATER_OF_GELIJK_AAN, 0);
	}
	public IS_EERDER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_EERDER_DAN, 0);
	}
	public IS_EERDER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_EERDER_OF_GELIJK_AAN, 0);
	}
	public ZIJN_LATER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_LATER_DAN, 0);
	}
	public ZIJN_LATER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_LATER_OF_GELIJK_AAN, 0);
	}
	public ZIJN_EERDER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_EERDER_DAN, 0);
	}
	public ZIJN_EERDER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_EERDER_OF_GELIJK_AAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_comparisonOperator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public _left!: MultiplicativeExpressionContext;
	public _right!: MultiplicativeExpressionContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public multiplicativeExpression_list(): MultiplicativeExpressionContext[] {
		return this.getTypedRuleContexts(MultiplicativeExpressionContext) as MultiplicativeExpressionContext[];
	}
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, i) as MultiplicativeExpressionContext;
	}
	public additiveOperator_list(): AdditiveOperatorContext[] {
		return this.getTypedRuleContexts(AdditiveOperatorContext) as AdditiveOperatorContext[];
	}
	public additiveOperator(i: number): AdditiveOperatorContext {
		return this.getTypedRuleContext(AdditiveOperatorContext, i) as AdditiveOperatorContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_additiveExpression;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveOperatorContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(RegelSpraakParser.PLUS, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MIN, 0);
	}
	public VERMINDERD_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.VERMINDERD_MET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_additiveOperator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAdditiveOperator) {
			return visitor.visitAdditiveOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public _left!: PowerExpressionContext;
	public _right!: PowerExpressionContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public powerExpression_list(): PowerExpressionContext[] {
		return this.getTypedRuleContexts(PowerExpressionContext) as PowerExpressionContext[];
	}
	public powerExpression(i: number): PowerExpressionContext {
		return this.getTypedRuleContext(PowerExpressionContext, i) as PowerExpressionContext;
	}
	public multiplicativeOperator_list(): MultiplicativeOperatorContext[] {
		return this.getTypedRuleContexts(MultiplicativeOperatorContext) as MultiplicativeOperatorContext[];
	}
	public multiplicativeOperator(i: number): MultiplicativeOperatorContext {
		return this.getTypedRuleContext(MultiplicativeOperatorContext, i) as MultiplicativeOperatorContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_multiplicativeExpression;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeOperatorContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MAAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAL, 0);
	}
	public GEDEELD_DOOR(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEDEELD_DOOR, 0);
	}
	public GEDEELD_DOOR_ABS(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEDEELD_DOOR_ABS, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_multiplicativeOperator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitMultiplicativeOperator) {
			return visitor.visitMultiplicativeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerExpressionContext extends ParserRuleContext {
	public _left!: PrimaryExpressionContext;
	public _right!: PrimaryExpressionContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public powerOperator_list(): PowerOperatorContext[] {
		return this.getTypedRuleContexts(PowerOperatorContext) as PowerOperatorContext[];
	}
	public powerOperator(i: number): PowerOperatorContext {
		return this.getTypedRuleContext(PowerOperatorContext, i) as PowerOperatorContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_powerExpression;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerOperatorContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public TOT_DE_MACHT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT_DE_MACHT, 0);
	}
	public CARET(): TerminalNode {
		return this.getToken(RegelSpraakParser.CARET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_powerOperator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPowerOperator) {
			return visitor.visitPowerOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class WortelFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_WORTEL_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_WORTEL_VAN, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitWortelFuncExpr) {
			return visitor.visitWortelFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanTrueLiteralExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.WAAR, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBooleanTrueLiteralExpr) {
			return visitor.visitBooleanTrueLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbsValFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_ABSOLUTE_WAARDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LPAREN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAbsValFuncExpr) {
			return visitor.visitAbsValFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MaxValFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_MAXIMALE_WAARDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitMaxValFuncExpr) {
			return visitor.visitMaxValFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RekendatumKeywordExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REKENDATUM(): TerminalNode {
		return this.getToken(RegelSpraakParser.REKENDATUM, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRekendatumKeywordExpr) {
			return visitor.visitRekendatumKeywordExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumLiteralExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ENUM_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.ENUM_LITERAL, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEnumLiteralExpr) {
			return visitor.visitEnumLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberLiteralExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public eenheidExpressie(): EenheidExpressieContext {
		return this.getTypedRuleContext(EenheidExpressieContext, 0) as EenheidExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNumberLiteralExpr) {
			return visitor.visitNumberLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DatumLiteralExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public datumLiteral(): DatumLiteralContext {
		return this.getTypedRuleContext(DatumLiteralContext, 0) as DatumLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumLiteralExpr) {
			return visitor.visitDatumLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AantalFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public aggregationSubject(): AggregationSubjectContext {
		return this.getTypedRuleContext(AggregationSubjectContext, 0) as AggregationSubjectContext;
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAantalFuncExpr) {
			return visitor.visitAantalFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryNietExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NIET(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIET, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryNietExpr) {
			return visitor.visitUnaryNietExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenatieExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONCATENATIE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.CONCATENATIE_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(RegelSpraakParser.OF, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitConcatenatieExpr) {
			return visitor.visitConcatenatieExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SomAlleAttribuutExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SOM_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SOM_VAN, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSomAlleAttribuutExpr) {
			return visitor.visitSomAlleAttribuutExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrRefExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAttrRefExpr) {
			return visitor.visitAttrRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DagUitFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public DAG(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAG, 0);
	}
	public UIT(): TerminalNode {
		return this.getToken(RegelSpraakParser.UIT, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDagUitFuncExpr) {
			return visitor.visitDagUitFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BegrenzingExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public begrenzing(): BegrenzingContext {
		return this.getTypedRuleContext(BegrenzingContext, 0) as BegrenzingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBegrenzingExpr) {
			return visitor.visitBegrenzingExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NaamwoordExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitNaamwoordExpr) {
			return visitor.visitNaamwoordExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanFalseLiteralExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ONWAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.ONWAAR, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBooleanFalseLiteralExpr) {
			return visitor.visitBooleanFalseLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JaarUitFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public UIT(): TerminalNode {
		return this.getToken(RegelSpraakParser.UIT, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitJaarUitFuncExpr) {
			return visitor.visitJaarUitFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TotaalVanExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HET_TOTAAL_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET_TOTAAL_VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public conditieBijExpressie(): ConditieBijExpressieContext {
		return this.getTypedRuleContext(ConditieBijExpressieContext, 0) as ConditieBijExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTotaalVanExpr) {
			return visitor.visitTotaalVanExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TijdsevenredigDeelExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HET_TIJDSEVENREDIG_DEEL_PER(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER, 0);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public conditieBijExpressie(): ConditieBijExpressieContext {
		return this.getTypedRuleContext(ConditieBijExpressieContext, 0) as ConditieBijExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTijdsevenredigDeelExpr) {
			return visitor.visitTijdsevenredigDeelExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CapitalizedTijdsevenredigDeelExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HET_TIJDSEVENREDIG_DEEL_PER(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER, 0);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public conditieBijExpressie(): ConditieBijExpressieContext {
		return this.getTypedRuleContext(ConditieBijExpressieContext, 0) as ConditieBijExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitCapitalizedTijdsevenredigDeelExpr) {
			return visitor.visitCapitalizedTijdsevenredigDeelExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AantalAttribuutExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAantalAttribuutExpr) {
			return visitor.visitAantalAttribuutExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LPAREN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DimensieRangeAggExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VANAF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VANAF, 0);
	}
	public naamwoord_list(): NaamwoordContext[] {
		return this.getTypedRuleContexts(NaamwoordContext) as NaamwoordContext[];
	}
	public naamwoord(i: number): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, i) as NaamwoordContext;
	}
	public TM(): TerminalNode {
		return this.getToken(RegelSpraakParser.TM, 0);
	}
	public getalAggregatieFunctie(): GetalAggregatieFunctieContext {
		return this.getTypedRuleContext(GetalAggregatieFunctieContext, 0) as GetalAggregatieFunctieContext;
	}
	public datumAggregatieFunctie(): DatumAggregatieFunctieContext {
		return this.getTypedRuleContext(DatumAggregatieFunctieContext, 0) as DatumAggregatieFunctieContext;
	}
	public bezieldeReferentie(): BezieldeReferentieContext {
		return this.getTypedRuleContext(BezieldeReferentieContext, 0) as BezieldeReferentieContext;
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDimensieRangeAggExpr) {
			return visitor.visitDimensieRangeAggExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DatumMetFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_DATUM_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_DATUM_MET, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LPAREN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumMetFuncExpr) {
			return visitor.visitDatumMetFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PercentageLiteralExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERCENTAGE_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPercentageLiteralExpr) {
			return visitor.visitPercentageLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.STRING_LITERAL, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitStringLiteralExpr) {
			return visitor.visitStringLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PercentageFuncExprContext extends PrimaryExpressionContext {
	public _p!: Token;
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public PERCENTAGE_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
	}
	public PERCENT_SIGN(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERCENT_SIGN, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPercentageFuncExpr) {
			return visitor.visitPercentageFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EersteDatumFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EERSTE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EERSTE_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitEersteDatumFuncExpr) {
			return visitor.visitEersteDatumFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PasenFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_EERSTE_PAASDAG_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LPAREN, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPasenFuncExpr) {
			return visitor.visitPasenFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbsTijdsduurFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_ABSOLUTE_TIJDSDUUR_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_ABSOLUTE_TIJDSDUUR_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	public IN_HELE(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN_HELE, 0);
	}
	public unitIdentifierWithTime(): UnitIdentifierWithTimeContext {
		return this.getTypedRuleContext(UnitIdentifierWithTimeContext, 0) as UnitIdentifierWithTimeContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAbsTijdsduurFuncExpr) {
			return visitor.visitAbsTijdsduurFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MaandUitFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public UIT(): TerminalNode {
		return this.getToken(RegelSpraakParser.UIT, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitMaandUitFuncExpr) {
			return visitor.visitMaandUitFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CapitalizedTotaalVanExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HET_TOTAAL_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET_TOTAAL_VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public conditieBijExpressie(): ConditieBijExpressieContext {
		return this.getTypedRuleContext(ConditieBijExpressieContext, 0) as ConditieBijExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitCapitalizedTotaalVanExpr) {
			return visitor.visitCapitalizedTotaalVanExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitIdentifierExpr) {
			return visitor.visitIdentifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DimensieAggExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public attribuutMetLidwoord(): AttribuutMetLidwoordContext {
		return this.getTypedRuleContext(AttribuutMetLidwoordContext, 0) as AttribuutMetLidwoordContext;
	}
	public dimensieSelectie(): DimensieSelectieContext {
		return this.getTypedRuleContext(DimensieSelectieContext, 0) as DimensieSelectieContext;
	}
	public getalAggregatieFunctie(): GetalAggregatieFunctieContext {
		return this.getTypedRuleContext(GetalAggregatieFunctieContext, 0) as GetalAggregatieFunctieContext;
	}
	public datumAggregatieFunctie(): DatumAggregatieFunctieContext {
		return this.getTypedRuleContext(DatumAggregatieFunctieContext, 0) as DatumAggregatieFunctieContext;
	}
	public OF_NUL_ALS_DIE_ER_NIET_ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.OF_NUL_ALS_DIE_ER_NIET_ZIJN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDimensieAggExpr) {
			return visitor.visitDimensieAggExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TijdsduurFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIJDSDUUR_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.TIJDSDUUR_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	public IN_HELE(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN_HELE, 0);
	}
	public unitIdentifierWithTime(): UnitIdentifierWithTimeContext {
		return this.getTypedRuleContext(UnitIdentifierWithTimeContext, 0) as UnitIdentifierWithTimeContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTijdsduurFuncExpr) {
			return visitor.visitTijdsduurFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OnderwerpRefExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitOnderwerpRefExpr) {
			return visitor.visitOnderwerpRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SomFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SOM_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SOM_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSomFuncExpr) {
			return visitor.visitSomFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SomAlleExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SOM_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SOM_VAN, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSomAlleExpr) {
			return visitor.visitSomAlleExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleConcatenatieExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(RegelSpraakParser.OF, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSimpleConcatenatieExpr) {
			return visitor.visitSimpleConcatenatieExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BegrenzingAfrondingExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public begrenzing(): BegrenzingContext {
		return this.getTypedRuleContext(BegrenzingContext, 0) as BegrenzingContext;
	}
	public afronding(): AfrondingContext {
		return this.getTypedRuleContext(AfrondingContext, 0) as AfrondingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBegrenzingAfrondingExpr) {
			return visitor.visitBegrenzingAfrondingExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PercentageOfExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERCENTAGE_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPercentageOfExpr) {
			return visitor.visitPercentageOfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinValFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_MINIMALE_WAARDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitMinValFuncExpr) {
			return visitor.visitMinValFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MaxAlleAttribuutExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_MAXIMALE_WAARDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitMaxAlleAttribuutExpr) {
			return visitor.visitMaxAlleAttribuutExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateCalcExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public datumExpressie(): DatumExpressieContext {
		return this.getTypedRuleContext(DatumExpressieContext, 0) as DatumExpressieContext;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public timeUnit(): TimeUnitContext {
		return this.getTypedRuleContext(TimeUnitContext, 0) as TimeUnitContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(RegelSpraakParser.PLUS, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MIN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDateCalcExpr) {
			return visitor.visitDateCalcExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BezieldeRefExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public bezieldeReferentie(): BezieldeReferentieContext {
		return this.getTypedRuleContext(BezieldeReferentieContext, 0) as BezieldeReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBezieldeRefExpr) {
			return visitor.visitBezieldeRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinAlleAttribuutExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DE_MINIMALE_WAARDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN, 0);
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitMinAlleAttribuutExpr) {
			return visitor.visitMinAlleAttribuutExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AfrondingExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public afronding(): AfrondingContext {
		return this.getTypedRuleContext(AfrondingContext, 0) as AfrondingContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAfrondingExpr) {
			return visitor.visitAfrondingExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LaatsteDatumFuncExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LAATSTE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LAATSTE_VAN, 0);
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitLaatsteDatumFuncExpr) {
			return visitor.visitLaatsteDatumFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HetAantalDagenInExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HET_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.HET);
	}
	public HET(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, i);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	public DAGEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGEN, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
	public DAT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAT, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitHetAantalDagenInExpr) {
			return visitor.visitHetAantalDagenInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MIN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MIN, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUS, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpr) {
			return visitor.visitUnaryMinusExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParamRefExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public parameterMetLidwoord(): ParameterMetLidwoordContext {
		return this.getTypedRuleContext(ParameterMetLidwoordContext, 0) as ParameterMetLidwoordContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitParamRefExpr) {
			return visitor.visitParamRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PronounExprContext extends PrimaryExpressionContext {
	constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HIJ(): TerminalNode {
		return this.getToken(RegelSpraakParser.HIJ, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPronounExpr) {
			return visitor.visitPronounExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AfrondingContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public AFGEROND_OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.AFGEROND_OP, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public DECIMALEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DECIMALEN, 0);
	}
	public NAAR_BENEDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.NAAR_BENEDEN, 0);
	}
	public NAAR_BOVEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.NAAR_BOVEN, 0);
	}
	public REKENKUNDIG(): TerminalNode {
		return this.getToken(RegelSpraakParser.REKENKUNDIG, 0);
	}
	public RICHTING_NUL(): TerminalNode {
		return this.getToken(RegelSpraakParser.RICHTING_NUL, 0);
	}
	public WEG_VAN_NUL(): TerminalNode {
		return this.getToken(RegelSpraakParser.WEG_VAN_NUL, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_afronding;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAfronding) {
			return visitor.visitAfronding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BegrenzingContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public begrenzingMinimum(): BegrenzingMinimumContext {
		return this.getTypedRuleContext(BegrenzingMinimumContext, 0) as BegrenzingMinimumContext;
	}
	public begrenzingMaximum(): BegrenzingMaximumContext {
		return this.getTypedRuleContext(BegrenzingMaximumContext, 0) as BegrenzingMaximumContext;
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_begrenzing;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBegrenzing) {
			return visitor.visitBegrenzing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BegrenzingMinimumContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MET_EEN_MINIMUM_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET_EEN_MINIMUM_VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_begrenzingMinimum;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBegrenzingMinimum) {
			return visitor.visitBegrenzingMinimum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BegrenzingMaximumContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MET_EEN_MAXIMUM_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET_EEN_MAXIMUM_VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_begrenzingMaximum;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBegrenzingMaximum) {
			return visitor.visitBegrenzingMaximum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditieBijExpressieContext extends ParserRuleContext {
	public _condition!: ExpressieContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GEDURENDE_DE_TIJD_DAT(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEDURENDE_DE_TIJD_DAT, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public periodevergelijkingEnkelvoudig(): PeriodevergelijkingEnkelvoudigContext {
		return this.getTypedRuleContext(PeriodevergelijkingEnkelvoudigContext, 0) as PeriodevergelijkingEnkelvoudigContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_conditieBijExpressie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitConditieBijExpressie) {
			return visitor.visitConditieBijExpressie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PeriodevergelijkingElementairContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public HET_IS_DE_PERIODE(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET_IS_DE_PERIODE, 0);
	}
	public periodevergelijkingEnkelvoudig(): PeriodevergelijkingEnkelvoudigContext {
		return this.getTypedRuleContext(PeriodevergelijkingEnkelvoudigContext, 0) as PeriodevergelijkingEnkelvoudigContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_periodevergelijkingElementair;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPeriodevergelijkingElementair) {
			return visitor.visitPeriodevergelijkingElementair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PeriodevergelijkingEnkelvoudigContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public VANAF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VANAF, 0);
	}
	public datumExpressie_list(): DatumExpressieContext[] {
		return this.getTypedRuleContexts(DatumExpressieContext) as DatumExpressieContext[];
	}
	public datumExpressie(i: number): DatumExpressieContext {
		return this.getTypedRuleContext(DatumExpressieContext, i) as DatumExpressieContext;
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	public TOT_EN_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_periodevergelijkingEnkelvoudig;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitPeriodevergelijkingEnkelvoudig) {
			return visitor.visitPeriodevergelijkingEnkelvoudig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PeriodeDefinitieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_periodeDefinitie;
	}
	public copyFrom(ctx: PeriodeDefinitieContext): void {
		super.copyFrom(ctx);
	}
}
export class VanafPeriodeContext extends PeriodeDefinitieContext {
	constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VANAF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VANAF, 0);
	}
	public dateExpression(): DateExpressionContext {
		return this.getTypedRuleContext(DateExpressionContext, 0) as DateExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVanafPeriode) {
			return visitor.visitVanafPeriode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VanTotPeriodeContext extends PeriodeDefinitieContext {
	constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public dateExpression_list(): DateExpressionContext[] {
		return this.getTypedRuleContexts(DateExpressionContext) as DateExpressionContext[];
	}
	public dateExpression(i: number): DateExpressionContext {
		return this.getTypedRuleContext(DateExpressionContext, i) as DateExpressionContext;
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVanTotPeriode) {
			return visitor.visitVanTotPeriode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VanTotEnMetPeriodeContext extends PeriodeDefinitieContext {
	constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
	public dateExpression_list(): DateExpressionContext[] {
		return this.getTypedRuleContexts(DateExpressionContext) as DateExpressionContext[];
	}
	public dateExpression(i: number): DateExpressionContext {
		return this.getTypedRuleContext(DateExpressionContext, i) as DateExpressionContext;
	}
	public TOT_EN_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVanTotEnMetPeriode) {
			return visitor.visitVanTotEnMetPeriode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TotPeriodeContext extends PeriodeDefinitieContext {
	constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT, 0);
	}
	public dateExpression(): DateExpressionContext {
		return this.getTypedRuleContext(DateExpressionContext, 0) as DateExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTotPeriode) {
			return visitor.visitTotPeriode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TotEnMetPeriodeContext extends PeriodeDefinitieContext {
	constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TOT_EN_MET(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
	}
	public dateExpression(): DateExpressionContext {
		return this.getTypedRuleContext(DateExpressionContext, 0) as DateExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTotEnMetPeriode) {
			return visitor.visitTotEnMetPeriode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateExpressionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public datumLiteral(): DatumLiteralContext {
		return this.getTypedRuleContext(DatumLiteralContext, 0) as DatumLiteralContext;
	}
	public REKENDATUM(): TerminalNode {
		return this.getToken(RegelSpraakParser.REKENDATUM, 0);
	}
	public REKENJAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.REKENJAAR, 0);
	}
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_dateExpression;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDateExpression) {
			return visitor.visitDateExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetalAggregatieFunctieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public HET(): TerminalNode {
		return this.getToken(RegelSpraakParser.HET, 0);
	}
	public AANTAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.AANTAL, 0);
	}
	public DE_MAXIMALE_WAARDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN, 0);
	}
	public DE_MINIMALE_WAARDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN, 0);
	}
	public SOM_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.SOM_VAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_getalAggregatieFunctie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGetalAggregatieFunctie) {
			return visitor.visitGetalAggregatieFunctie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatumAggregatieFunctieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public EERSTE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EERSTE_VAN, 0);
	}
	public LAATSTE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LAATSTE_VAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_datumAggregatieFunctie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDatumAggregatieFunctie) {
			return visitor.visitDatumAggregatieFunctie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensieSelectieContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public OVER(): TerminalNode {
		return this.getToken(RegelSpraakParser.OVER, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
	public aggregerenOverAlleDimensies(): AggregerenOverAlleDimensiesContext {
		return this.getTypedRuleContext(AggregerenOverAlleDimensiesContext, 0) as AggregerenOverAlleDimensiesContext;
	}
	public aggregerenOverVerzameling(): AggregerenOverVerzamelingContext {
		return this.getTypedRuleContext(AggregerenOverVerzamelingContext, 0) as AggregerenOverVerzamelingContext;
	}
	public aggregerenOverBereik(): AggregerenOverBereikContext {
		return this.getTypedRuleContext(AggregerenOverBereikContext, 0) as AggregerenOverBereikContext;
	}
	public VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.VAN, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_dimensieSelectie;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDimensieSelectie) {
			return visitor.visitDimensieSelectie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregerenOverAlleDimensiesContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ALLE(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALLE, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public predicaat(): PredicaatContext {
		return this.getTypedRuleContext(PredicaatContext, 0) as PredicaatContext;
	}
	public DIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DIE, 0);
	}
	public DAT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_aggregerenOverAlleDimensies;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAggregerenOverAlleDimensies) {
			return visitor.visitAggregerenOverAlleDimensies(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregerenOverVerzamelingContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public naamwoord_list(): NaamwoordContext[] {
		return this.getTypedRuleContexts(NaamwoordContext) as NaamwoordContext[];
	}
	public naamwoord(i: number): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, i) as NaamwoordContext;
	}
	public VANAF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VANAF, 0);
	}
	public TM(): TerminalNode {
		return this.getToken(RegelSpraakParser.TM, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_aggregerenOverVerzameling;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAggregerenOverVerzameling) {
			return visitor.visitAggregerenOverVerzameling(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregerenOverBereikContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DE(): TerminalNode {
		return this.getToken(RegelSpraakParser.DE, 0);
	}
	public naamwoord_list(): NaamwoordContext[] {
		return this.getTypedRuleContexts(NaamwoordContext) as NaamwoordContext[];
	}
	public naamwoord(i: number): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, i) as NaamwoordContext;
	}
	public IN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(RegelSpraakParser.LBRACE, 0);
	}
	public EN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EN, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(RegelSpraakParser.RBRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_aggregerenOverBereik;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitAggregerenOverBereik) {
			return visitor.visitAggregerenOverBereik(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryConditionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_unaryCondition;
	}
	public copyFrom(ctx: UnaryConditionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryCheckConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	public _op!: Token;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public IS_LEEG(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_LEEG, 0);
	}
	public IS_GEVULD(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GEVULD, 0);
	}
	public VOLDOET_AAN_DE_ELFPROEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET_AAN_DE_ELFPROEF, 0);
	}
	public VOLDOET_NIET_AAN_DE_ELFPROEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOET_NIET_AAN_DE_ELFPROEF, 0);
	}
	public ZIJN_LEEG(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_LEEG, 0);
	}
	public ZIJN_GEVULD(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GEVULD, 0);
	}
	public VOLDOEN_AAN_DE_ELFPROEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOEN_AAN_DE_ELFPROEF, 0);
	}
	public VOLDOEN_NIET_AAN_DE_ELFPROEF(): TerminalNode {
		return this.getToken(RegelSpraakParser.VOLDOEN_NIET_AAN_DE_ELFPROEF, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryCheckCondition) {
			return visitor.visitUnaryCheckCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryCheckVragendConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	public _check!: Token;
	public _v!: Token;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public LEEG(): TerminalNode {
		return this.getToken(RegelSpraakParser.LEEG, 0);
	}
	public GEVULD(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEVULD, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryCheckVragendCondition) {
			return visitor.visitUnaryCheckVragendCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryKenmerkConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	public _op!: Token;
	public _kenmerk!: IdentifierContext;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public IS_KENMERK(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_KENMERK, 0);
	}
	public ZIJN_KENMERK(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_KENMERK, 0);
	}
	public IS_NIET_KENMERK(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_NIET_KENMERK, 0);
	}
	public ZIJN_NIET_KENMERK(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_NIET_KENMERK, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryKenmerkCondition) {
			return visitor.visitUnaryKenmerkCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryNumeriekExactConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	public _op!: Token;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	public CIJFERS(): TerminalNode {
		return this.getToken(RegelSpraakParser.CIJFERS, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public IS_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_NUMERIEK_MET_EXACT, 0);
	}
	public IS_NIET_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_NIET_NUMERIEK_MET_EXACT, 0);
	}
	public ZIJN_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_NUMERIEK_MET_EXACT, 0);
	}
	public ZIJN_NIET_NUMERIEK_MET_EXACT(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_NIET_NUMERIEK_MET_EXACT, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryNumeriekExactCondition) {
			return visitor.visitUnaryNumeriekExactCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryRolConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	public _op!: Token;
	public _rol!: IdentifierContext;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public IS_ROL(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_ROL, 0);
	}
	public ZIJN_ROL(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_ROL, 0);
	}
	public IS_NIET_ROL(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_NIET_ROL, 0);
	}
	public ZIJN_NIET_ROL(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_NIET_ROL, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryRolCondition) {
			return visitor.visitUnaryRolCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryInconsistentDataConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS_INCONSISTENT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_INCONSISTENT, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryInconsistentDataCondition) {
			return visitor.visitUnaryInconsistentDataCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryUniekConditionContext extends UnaryConditionContext {
	public _ref!: OnderwerpReferentieContext;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MOETEN_UNIEK_ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MOETEN_UNIEK_ZIJN, 0);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryUniekCondition) {
			return visitor.visitUnaryUniekCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelStatusConditionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelStatusCondition;
	}
	public copyFrom(ctx: RegelStatusConditionContext): void {
		super.copyFrom(ctx);
	}
}
export class RegelStatusInconsistentCheckContext extends RegelStatusConditionContext {
	public _name!: RegelversieNaamContext;
	constructor(parser: RegelSpraakParser, ctx: RegelStatusConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REGELVERSIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGELVERSIE, 0);
	}
	public IS_INCONSISTENT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_INCONSISTENT, 0);
	}
	public regelversieNaam(): RegelversieNaamContext {
		return this.getTypedRuleContext(RegelversieNaamContext, 0) as RegelversieNaamContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelStatusInconsistentCheck) {
			return visitor.visitRegelStatusInconsistentCheck(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RegelStatusGevuurdCheckContext extends RegelStatusConditionContext {
	public _name!: RegelversieNaamContext;
	constructor(parser: RegelSpraakParser, ctx: RegelStatusConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REGELVERSIE(): TerminalNode {
		return this.getToken(RegelSpraakParser.REGELVERSIE, 0);
	}
	public IS_GEVUURD(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GEVUURD, 0);
	}
	public regelversieNaam(): RegelversieNaamContext {
		return this.getTypedRuleContext(RegelversieNaamContext, 0) as RegelversieNaamContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelStatusGevuurdCheck) {
			return visitor.visitRegelStatusGevuurdCheck(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegelversieNaamContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public naamwoord_list(): NaamwoordContext[] {
		return this.getTypedRuleContexts(NaamwoordContext) as NaamwoordContext[];
	}
	public naamwoord(i: number): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, i) as NaamwoordContext;
	}
	public GEEN_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.GEEN);
	}
	public GEEN(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.GEEN, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_regelversieNaam;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitRegelversieNaam) {
			return visitor.visitRegelversieNaam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubordinateClauseExpressionContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_subordinateClauseExpression;
	}
	public copyFrom(ctx: SubordinateClauseExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SubordinateIsWithExprContext extends SubordinateClauseExpressionContext {
	public _subject!: OnderwerpReferentieContext;
	public _prepPhrase!: NaamwoordWithNumbersContext;
	public _verb!: Token;
	constructor(parser: RegelSpraakParser, ctx: SubordinateClauseExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSubordinateIsWithExpr) {
			return visitor.visitSubordinateIsWithExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubordinateHasExprContext extends SubordinateClauseExpressionContext {
	public _subject!: OnderwerpReferentieContext;
	public _object!: NaamwoordWithNumbersContext;
	public _verb!: Token;
	constructor(parser: RegelSpraakParser, ctx: SubordinateClauseExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	public HEEFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.HEEFT, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSubordinateHasExpr) {
			return visitor.visitSubordinateHasExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubordinateIsKenmerkExprContext extends SubordinateClauseExpressionContext {
	public _subject!: OnderwerpReferentieContext;
	public _verb!: Token;
	public _kenmerk!: NaamwoordWithNumbersContext;
	constructor(parser: RegelSpraakParser, ctx: SubordinateClauseExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public onderwerpReferentie(): OnderwerpReferentieContext {
		return this.getTypedRuleContext(OnderwerpReferentieContext, 0) as OnderwerpReferentieContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public naamwoordWithNumbers(): NaamwoordWithNumbersContext {
		return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0) as NaamwoordWithNumbersContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitSubordinateIsKenmerkExpr) {
			return visitor.visitSubordinateIsKenmerkExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DagsoortDefinitionContext extends ParserRuleContext {
	public _IDENTIFIER!: Token;
	public _plural: Token[] = [];
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DAGSOORT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DAGSOORT, 0);
	}
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
	}
	public MV_START(): TerminalNode {
		return this.getToken(RegelSpraakParser.MV_START, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.SEMICOLON, 0);
	}
	public IDENTIFIER_list(): TerminalNode[] {
		return this.getTokens(RegelSpraakParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(RegelSpraakParser.IDENTIFIER, i);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_dagsoortDefinition;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitDagsoortDefinition) {
			return visitor.visitDagsoortDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TekstreeksExprContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(RegelSpraakParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_tekstreeksExpr;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitTekstreeksExpr) {
			return visitor.visitTekstreeksExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerdelingResultaatContext extends ParserRuleContext {
	public _sourceAmount!: ExpressieContext;
	public _targetCollection!: ExpressieContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public WORDT_VERDEELD_OVER(): TerminalNode {
		return this.getToken(RegelSpraakParser.WORDT_VERDEELD_OVER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public WAARBIJ_WORDT_VERDEELD(): TerminalNode {
		return this.getToken(RegelSpraakParser.WAARBIJ_WORDT_VERDEELD, 0);
	}
	public expressie_list(): ExpressieContext[] {
		return this.getTypedRuleContexts(ExpressieContext) as ExpressieContext[];
	}
	public expressie(i: number): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, i) as ExpressieContext;
	}
	public verdelingMethodeSimple(): VerdelingMethodeSimpleContext {
		return this.getTypedRuleContext(VerdelingMethodeSimpleContext, 0) as VerdelingMethodeSimpleContext;
	}
	public verdelingMethodeMultiLine(): VerdelingMethodeMultiLineContext {
		return this.getTypedRuleContext(VerdelingMethodeMultiLineContext, 0) as VerdelingMethodeMultiLineContext;
	}
	public verdelingRest(): VerdelingRestContext {
		return this.getTypedRuleContext(VerdelingRestContext, 0) as VerdelingRestContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_verdelingResultaat;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingResultaat) {
			return visitor.visitVerdelingResultaat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerdelingMethodeSimpleContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public verdelingMethode(): VerdelingMethodeContext {
		return this.getTypedRuleContext(VerdelingMethodeContext, 0) as VerdelingMethodeContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_verdelingMethodeSimple;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingMethodeSimple) {
			return visitor.visitVerdelingMethodeSimple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerdelingMethodeMultiLineContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(RegelSpraakParser.COLON, 0);
	}
	public verdelingMethodeBulletList(): VerdelingMethodeBulletListContext {
		return this.getTypedRuleContext(VerdelingMethodeBulletListContext, 0) as VerdelingMethodeBulletListContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_verdelingMethodeMultiLine;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingMethodeMultiLine) {
			return visitor.visitVerdelingMethodeMultiLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerdelingMethodeBulletListContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public verdelingMethodeBullet_list(): VerdelingMethodeBulletContext[] {
		return this.getTypedRuleContexts(VerdelingMethodeBulletContext) as VerdelingMethodeBulletContext[];
	}
	public verdelingMethodeBullet(i: number): VerdelingMethodeBulletContext {
		return this.getTypedRuleContext(VerdelingMethodeBulletContext, i) as VerdelingMethodeBulletContext;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_verdelingMethodeBulletList;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingMethodeBulletList) {
			return visitor.visitVerdelingMethodeBulletList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerdelingMethodeBulletContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(RegelSpraakParser.MINUS, 0);
	}
	public verdelingMethode(): VerdelingMethodeContext {
		return this.getTypedRuleContext(VerdelingMethodeContext, 0) as VerdelingMethodeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(RegelSpraakParser.COMMA, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(RegelSpraakParser.DOT, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_verdelingMethodeBullet;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingMethodeBullet) {
			return visitor.visitVerdelingMethodeBullet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerdelingMethodeContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_verdelingMethode;
	}
	public copyFrom(ctx: VerdelingMethodeContext): void {
		super.copyFrom(ctx);
	}
}
export class VerdelingNaarRatoContext extends VerdelingMethodeContext {
	public _ratioExpression!: ExpressieContext;
	constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAAR_RATO_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.NAAR_RATO_VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingNaarRato) {
			return visitor.visitVerdelingNaarRato(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VerdelingGelijkeDelenContext extends VerdelingMethodeContext {
	constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN_GELIJKE_DELEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.IN_GELIJKE_DELEN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingGelijkeDelen) {
			return visitor.visitVerdelingGelijkeDelen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VerdelingMaximumContext extends VerdelingMethodeContext {
	public _maxExpression!: AttribuutMetLidwoordContext;
	constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MET_EEN_MAXIMUM_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.MET_EEN_MAXIMUM_VAN, 0);
	}
	public attribuutMetLidwoord(): AttribuutMetLidwoordContext {
		return this.getTypedRuleContext(AttribuutMetLidwoordContext, 0) as AttribuutMetLidwoordContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingMaximum) {
			return visitor.visitVerdelingMaximum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VerdelingOpVolgordeContext extends VerdelingMethodeContext {
	public _orderDirection!: Token;
	public _orderExpression!: ExpressieContext;
	constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP_VOLGORDE_VAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.OP_VOLGORDE_VAN, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public TOENEMENDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.TOENEMENDE, 0);
	}
	public AFNEMENDE(): TerminalNode {
		return this.getToken(RegelSpraakParser.AFNEMENDE, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingOpVolgorde) {
			return visitor.visitVerdelingOpVolgorde(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VerdelingTieBreakContext extends VerdelingMethodeContext {
	public _tieBreakMethod!: VerdelingMethodeContext;
	constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BIJ_EVEN_GROOT_CRITERIUM(): TerminalNode {
		return this.getToken(RegelSpraakParser.BIJ_EVEN_GROOT_CRITERIUM, 0);
	}
	public verdelingMethode(): VerdelingMethodeContext {
		return this.getTypedRuleContext(VerdelingMethodeContext, 0) as VerdelingMethodeContext;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingTieBreak) {
			return visitor.visitVerdelingTieBreak(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VerdelingAfrondingContext extends VerdelingMethodeContext {
	public _decimals!: Token;
	constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AFGEROND_OP(): TerminalNode {
		return this.getToken(RegelSpraakParser.AFGEROND_OP, 0);
	}
	public DECIMALEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.DECIMALEN, 0);
	}
	public NAAR_BENEDEN(): TerminalNode {
		return this.getToken(RegelSpraakParser.NAAR_BENEDEN, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(RegelSpraakParser.NUMBER, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingAfronding) {
			return visitor.visitVerdelingAfronding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerdelingRestContext extends ParserRuleContext {
	public _remainderTarget!: ExpressieContext;
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ALS_ONVERDEELDE_REST_BLIJFT(): TerminalNode {
		return this.getToken(RegelSpraakParser.ALS_ONVERDEELDE_REST_BLIJFT, 0);
	}
	public expressie(): ExpressieContext {
		return this.getTypedRuleContext(ExpressieContext, 0) as ExpressieContext;
	}
	public OVER_VERDELING(): TerminalNode {
		return this.getToken(RegelSpraakParser.OVER_VERDELING, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_verdelingRest;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitVerdelingRest) {
			return visitor.visitVerdelingRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
