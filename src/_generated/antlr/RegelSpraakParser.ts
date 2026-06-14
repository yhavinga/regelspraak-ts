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
	public static readonly RULE_geheleVergelijkingPrefix = 143;
	public static readonly RULE_comparisonOperator = 144;
	public static readonly RULE_additiveExpression = 145;
	public static readonly RULE_additiveOperator = 146;
	public static readonly RULE_multiplicativeExpression = 147;
	public static readonly RULE_multiplicativeOperator = 148;
	public static readonly RULE_powerExpression = 149;
	public static readonly RULE_powerOperator = 150;
	public static readonly RULE_primaryExpression = 151;
	public static readonly RULE_afronding = 152;
	public static readonly RULE_begrenzing = 153;
	public static readonly RULE_begrenzingMinimum = 154;
	public static readonly RULE_begrenzingMaximum = 155;
	public static readonly RULE_conditieBijExpressie = 156;
	public static readonly RULE_periodevergelijkingElementair = 157;
	public static readonly RULE_periodevergelijkingEnkelvoudig = 158;
	public static readonly RULE_periodeDefinitie = 159;
	public static readonly RULE_dateExpression = 160;
	public static readonly RULE_getalAggregatieFunctie = 161;
	public static readonly RULE_datumAggregatieFunctie = 162;
	public static readonly RULE_dimensieSelectie = 163;
	public static readonly RULE_aggregerenOverAlleDimensies = 164;
	public static readonly RULE_aggregerenOverVerzameling = 165;
	public static readonly RULE_aggregerenOverBereik = 166;
	public static readonly RULE_unaryCondition = 167;
	public static readonly RULE_regelStatusCondition = 168;
	public static readonly RULE_regelversieNaam = 169;
	public static readonly RULE_subordinateClauseExpression = 170;
	public static readonly RULE_dagsoortDefinition = 171;
	public static readonly RULE_tekstreeksExpr = 172;
	public static readonly RULE_verdelingResultaat = 173;
	public static readonly RULE_verdelingMethodeSimple = 174;
	public static readonly RULE_verdelingMethodeMultiLine = 175;
	public static readonly RULE_verdelingMethodeBulletList = 176;
	public static readonly RULE_verdelingMethodeBullet = 177;
	public static readonly RULE_verdelingMethode = 178;
	public static readonly RULE_verdelingRest = 179;
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
		"literalValue", "gelijkIsAanOperator", "geheleVergelijkingPrefix", "comparisonOperator",
		"additiveExpression", "additiveOperator", "multiplicativeExpression",
		"multiplicativeOperator", "powerExpression", "powerOperator", "primaryExpression",
		"afronding", "begrenzing", "begrenzingMinimum", "begrenzingMaximum", "conditieBijExpressie",
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
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===28 || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 4031) !== 0)) {
				{
				this.state = 366;
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
					this.state = 360;
					this.definitie();
					}
					break;
				case 89:
					{
					this.state = 361;
					this.regel();
					}
					break;
				case 90:
					{
					this.state = 362;
					this.regelGroep();
					}
					break;
				case 91:
					{
					this.state = 363;
					this.beslistabel();
					}
					break;
				case 88:
					{
					this.state = 364;
					this.consistentieregel();
					}
					break;
				case 96:
					{
					this.state = 365;
					this.eenheidsysteemDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 371;
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
			this.state = 379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 373;
				this.objectTypeDefinition();
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 374;
				this.domeinDefinition();
				}
				break;
			case 97:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 375;
				this.parameterDefinition();
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 376;
				this.dimensieDefinition();
				}
				break;
			case 28:
			case 98:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 377;
				this.feitTypeDefinition();
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 378;
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
			this.state = 381;
			this.match(RegelSpraakParser.BESLISTABEL);
			this.state = 382;
			this.naamwoord();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===101) {
				{
				this.state = 383;
				this.regelVersie();
				}
			}

			this.state = 386;
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
			this.state = 388;
			this.beslistabelHeader();
			this.state = 389;
			this.beslistabelSeparator();
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 390;
				this.beslistabelRow();
				}
				}
				this.state = 393;
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
			this.state = 395;
			this.match(RegelSpraakParser.PIPE);
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===290) {
				{
				this.state = 396;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 399;
			localctx._beslistabelColumnText = this.beslistabelColumnText();
			localctx._columns.push(localctx._beslistabelColumnText);
			this.state = 404;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 400;
					this.match(RegelSpraakParser.PIPE);
					this.state = 401;
					localctx._beslistabelColumnText = this.beslistabelColumnText();
					localctx._columns.push(localctx._beslistabelColumnText);
					}
					}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 407;
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
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===290) {
				{
				this.state = 410;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 421;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 414;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 413;
							this.match(RegelSpraakParser.MINUS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 416;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 419;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						this.state = 418;
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
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===289) {
				{
				{
				this.state = 425;
				this.match(RegelSpraakParser.MINUS);
				}
				}
				this.state = 430;
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
			this.state = 431;
			this.match(RegelSpraakParser.PIPE);
			this.state = 432;
			localctx._rowNumber = this.match(RegelSpraakParser.NUMBER);
			this.state = 433;
			this.match(RegelSpraakParser.PIPE);
			this.state = 434;
			localctx._beslistabelCellValue = this.beslistabelCellValue();
			localctx._cellValues.push(localctx._beslistabelCellValue);
			this.state = 439;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 435;
					this.match(RegelSpraakParser.PIPE);
					this.state = 436;
					localctx._beslistabelCellValue = this.beslistabelCellValue();
					localctx._cellValues.push(localctx._beslistabelCellValue);
					}
					}
				}
				this.state = 441;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 443;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 442;
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
			this.state = 447;
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
				this.state = 445;
				this.expressie();
				}
				break;
			case 291:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 446;
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
			this.state = 450;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 449;
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
				this.state = 452;
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
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				localctx = new BeslistabelGelijkstellingHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 454;
				this.beslistabelAttribuutHeader();
				this.state = 455;
				this.match(RegelSpraakParser.WORDT_GESTELD_OP);
				this.state = 456;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelKenmerkHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 458;
				this.onderwerpReferentie();
				this.state = 459;
				_la = this._input.LA(1);
				if(!(_la===103 || _la===106)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 460;
				this.kenmerkNaam();
				this.state = 461;
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
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				localctx = new BeslistabelDagsoortVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 465;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 466;
				this.beslistabelAttribuutHeader();
				this.state = 467;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				    (localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 468;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===197 || _la===208)) {
				    (localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 469;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._dagsoort = this.kenmerkNaam();
				this.state = 470;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelUnaryVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 472;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 473;
				this.beslistabelAttribuutHeader();
				this.state = 474;
				(localctx as BeslistabelUnaryVoorwaardeHeaderContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 20483) !== 0))) {
				    (localctx as BeslistabelUnaryVoorwaardeHeaderContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 475;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 3:
				localctx = new BeslistabelGetalcontroleVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 477;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 478;
				this.beslistabelAttribuutHeader();
				this.state = 479;
				(localctx as BeslistabelGetalcontroleVoorwaardeHeaderContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 15) !== 0))) {
				    (localctx as BeslistabelGetalcontroleVoorwaardeHeaderContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 480;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 481;
				this.match(RegelSpraakParser.CIJFERS);
				this.state = 482;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 4:
				localctx = new BeslistabelAttribuutVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 484;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 485;
				this.beslistabelAttribuutHeader();
				this.state = 486;
				this.comparisonOperator();
				this.state = 487;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 5:
				localctx = new BeslistabelKenmerkVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 489;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 490;
				this.onderwerpReferentie();
				this.state = 492;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 491;
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
				this.state = 494;
				this.kenmerkNaam();
				this.state = 495;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 496;
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
			this.state = 500;
			this.beslistabelAttribuutNaam();
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===237) {
				{
				this.state = 501;
				this.match(RegelSpraakParser.VAN);
				this.state = 502;
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
			this.state = 505;
			this.beslistabelAttribuutEerstePhrase();
			this.state = 511;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 506;
					this.beslistabelAttribuutVoorzetsel();
					this.state = 507;
					this.beslistabelAttribuutVervolgPhrase();
					}
					}
				}
				this.state = 513;
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
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
				{
				this.state = 514;
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

			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 517;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 520;
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
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 522;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 525;
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
			this.state = 527;
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
			this.state = 529;
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
			this.state = 531;
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
			this.state = 533;
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
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
					{
					this.state = 535;
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

				this.state = 539;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 538;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 541;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 544;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 543;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 546;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 548;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 550;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 549;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 552;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 554;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 555;
					this.identifierOrKeyword();
					}
					}
					this.state = 558;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 560;
				this.match(RegelSpraakParser.MET);
				this.state = 562;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 561;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 564;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 566;
					this.identifierOrKeyword();
					}
					}
					this.state = 569;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 571;
				this.match(RegelSpraakParser.MET);
				this.state = 573;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 572;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 575;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 577;
				this.match(RegelSpraakParser.NIET);
				this.state = 579;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 578;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 581;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 583;
				this.match(RegelSpraakParser.HET);
				this.state = 584;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 585;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 586;
				this.match(RegelSpraakParser.IN);
				this.state = 588;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 587;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 590;
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
			this.state = 651;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
					{
					this.state = 594;
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

				this.state = 598;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 597;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 600;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 603;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 602;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 605;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 607;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 609;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 608;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 611;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 613;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 614;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 617;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262 || _la===263);
				this.state = 619;
				this.match(RegelSpraakParser.MET);
				this.state = 621;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 620;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 623;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 625;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 628;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262 || _la===263);
				this.state = 630;
				this.match(RegelSpraakParser.MET);
				this.state = 632;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 631;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 634;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 636;
				this.match(RegelSpraakParser.NIET);
				this.state = 638;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 637;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 640;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 642;
				this.match(RegelSpraakParser.HET);
				this.state = 643;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 644;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 645;
				this.match(RegelSpraakParser.IN);
				this.state = 647;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 646;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 649;
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
			this.state = 655;
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
				this.state = 653;
				this.identifierOrKeyword();
				}
				break;
			case 263:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 654;
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
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
					{
					this.state = 657;
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

				this.state = 661;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 660;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 663;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 666;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 665;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 668;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 670;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 672;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 671;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 674;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 676;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 677;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 680;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268451841) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 682;
				this.match(RegelSpraakParser.MET);
				this.state = 684;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 683;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 686;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 688;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268451841) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262);
				this.state = 693;
				this.match(RegelSpraakParser.MET);
				this.state = 695;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 694;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 697;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 699;
				this.match(RegelSpraakParser.NIET);
				this.state = 701;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 700;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 703;
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
			this.state = 707;
			this.naamPhrase();
			this.state = 713;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 708;
					this.voorzetsel();
					this.state = 709;
					this.naamPhrase();
					}
					}
				}
				this.state = 715;
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
			this.state = 716;
			this.naamPhraseWithNumbers();
			this.state = 722;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 717;
					this.voorzetsel();
					this.state = 718;
					this.naamPhraseWithNumbers();
					}
					}
				}
				this.state = 724;
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
			this.state = 725;
			this.naamPhraseNoIs();
			this.state = 731;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 726;
					this.voorzetsel();
					this.state = 727;
					this.naamPhraseNoIs();
					}
					}
				}
				this.state = 733;
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
			this.state = 734;
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
			this.state = 736;
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
			this.state = 738;
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
			this.state = 740;
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
			this.state = 742;
			this.match(RegelSpraakParser.OBJECTTYPE);
			this.state = 743;
			this.naamwoordNoIs();
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 744;
				this.match(RegelSpraakParser.MV_START);
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 745;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 748;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 750;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===158) {
				{
				this.state = 753;
				this.match(RegelSpraakParser.BEZIELD);
				}
			}

			this.state = 759;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 756;
					this.objectTypeMember();
					}
					}
				}
				this.state = 761;
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
			this.state = 764;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 762;
				this.kenmerkSpecificatie();
				}
				break;
			case 2:
				{
				this.state = 763;
				this.attribuutSpecificatie();
				}
				break;
			}
			this.state = 766;
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
			this.state = 773;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===106) {
					{
					this.state = 768;
					this.match(RegelSpraakParser.IS);
					}
				}

				this.state = 771;
				this.identifier();
				}
				break;
			case 2:
				{
				this.state = 772;
				this.naamwoordWithNumbers();
				}
				break;
			}
			this.state = 775;
			this.match(RegelSpraakParser.KENMERK);
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156 || _la===157) {
				{
				this.state = 776;
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

			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & 7) !== 0)) {
				{
				this.state = 779;
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
			this.state = 782;
			this.naamwoordWithNumbers();
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 783;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 784;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 785;
				this.objectTypeRef();
				}
				break;
			}
			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===170) {
				{
				this.state = 788;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 789;
				this.eenheidExpressie();
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===164) {
				{
				this.state = 792;
				this.match(RegelSpraakParser.GEDIMENSIONEERD_MET);
				this.state = 793;
				this.dimensieRef();
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===209) {
					{
					{
					this.state = 794;
					this.match(RegelSpraakParser.EN);
					this.state = 795;
					this.dimensieRef();
					}
					}
					this.state = 800;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & 7) !== 0)) {
				{
				this.state = 803;
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
			this.state = 812;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 174:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 806;
				this.numeriekDatatype();
				}
				break;
			case 179:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 807;
				this.tekstDatatype();
				}
				break;
			case 159:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 808;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 161:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 809;
				this.datumTijdDatatype();
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 810;
				this.lijstDatatype();
				}
				break;
			case 175:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 811;
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
			this.state = 814;
			this.match(RegelSpraakParser.LIJST);
			this.state = 815;
			this.match(RegelSpraakParser.VAN);
			this.state = 819;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 816;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 817;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 818;
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
			this.state = 821;
			this.match(RegelSpraakParser.NUMERIEK);
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===269) {
				{
				this.state = 822;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 823;
				this.getalSpecificatie();
				this.state = 824;
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
			this.state = 828;
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
			this.state = 830;
			this.match(RegelSpraakParser.PERCENTAGE);
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===269) {
				{
				this.state = 831;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 832;
				this.getalSpecificatie();
				this.state = 833;
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
			this.state = 837;
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
			this.state = 839;
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
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 19) !== 0)) {
				{
				this.state = 841;
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

			this.state = 850;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 844;
				this.match(RegelSpraakParser.GEHEEL_GETAL);
				}
				break;
			case 2:
				{
				{
				this.state = 845;
				this.match(RegelSpraakParser.GETAL);
				this.state = 846;
				this.match(RegelSpraakParser.MET);
				this.state = 847;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 848;
				this.match(RegelSpraakParser.DECIMALEN);
				}
				}
				break;
			case 3:
				{
				this.state = 849;
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
			this.state = 852;
			this.match(RegelSpraakParser.DOMEIN);
			this.state = 853;
			localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 854;
			this.match(RegelSpraakParser.IS_VAN_HET_TYPE);
			this.state = 855;
			this.domeinType();
			this.state = 858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===170) {
				{
				this.state = 856;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 857;
				this.eenheidExpressie();
				}
			}

			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 860;
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
			this.state = 868;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 163:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 863;
				this.enumeratieSpecificatie();
				}
				break;
			case 174:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 864;
				this.numeriekDatatype();
				}
				break;
			case 179:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 865;
				this.tekstDatatype();
				}
				break;
			case 159:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 866;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 161:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 867;
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
			this.state = 870;
			this.match(RegelSpraakParser.ENUMERATIE);
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 871;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				}
				this.state = 874;
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
			this.state = 876;
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
			this.state = 878;
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
			this.state = 880;
			this.match(RegelSpraakParser.EENHEIDSYSTEEM);
			this.state = 881;
			localctx._name = this.identifier();
			this.state = 885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===205 || _la===210) {
				{
				{
				this.state = 882;
				this.eenheidEntry();
				}
				}
				this.state = 887;
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
			this.state = 888;
			_la = this._input.LA(1);
			if(!(_la===205 || _la===210)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 889;
			localctx._unitName = this.unitIdentifierWithTime();
			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 890;
				this.match(RegelSpraakParser.MV_START);
				this.state = 891;
				localctx._pluralName = this.unitIdentifierWithTime();
				this.state = 892;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 896;
			localctx._abbrev = this.unitIdentifierWithTime();
			this.state = 898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===130 || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 1611657219) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & 268237571) !== 0)) {
				{
				this.state = 897;
				localctx._symbol_ = this.unitIdentifierWithTime();
				}
			}

			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===264) {
				{
				this.state = 900;
				this.match(RegelSpraakParser.EQUALS);
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===277) {
					{
					this.state = 901;
					this.match(RegelSpraakParser.SLASH);
					}
				}

				this.state = 904;
				localctx._value = this.match(RegelSpraakParser.NUMBER);
				this.state = 905;
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
			this.state = 908;
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
			this.state = 920;
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
				this.state = 910;
				this.unitIdentifier();
				}
				break;
			case 202:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 911;
				this.match(RegelSpraakParser.DAG);
				}
				break;
			case 203:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 912;
				this.match(RegelSpraakParser.DAGEN);
				}
				break;
			case 217:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 913;
				this.match(RegelSpraakParser.MAAND);
				}
				break;
			case 218:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 914;
				this.match(RegelSpraakParser.MAANDEN);
				}
				break;
			case 214:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 915;
				this.match(RegelSpraakParser.JAAR);
				}
				break;
			case 215:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 916;
				this.match(RegelSpraakParser.JAREN);
				}
				break;
			case 243:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 917;
				this.match(RegelSpraakParser.WEEK);
				}
				break;
			case 244:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 918;
				this.match(RegelSpraakParser.WEKEN);
				}
				break;
			case 216:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 919;
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
			this.state = 934;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 922;
				this.unitProduct();
				this.state = 927;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 923;
						this.match(RegelSpraakParser.SLASH);
						this.state = 924;
						this.unitProduct();
						}
						}
					}
					this.state = 929;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 930;
				this.match(RegelSpraakParser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 931;
				this.match(RegelSpraakParser.PERCENT_SIGN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 932;
				this.match(RegelSpraakParser.EURO_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 933;
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
			this.state = 936;
			this.eenheidMacht();
			this.state = 941;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 937;
					this.match(RegelSpraakParser.ASTERISK);
					this.state = 938;
					this.eenheidMacht();
					}
					}
				}
				this.state = 943;
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
			this.state = 944;
			this.unitIdentifier();
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 945;
				this.match(RegelSpraakParser.CARET);
				this.state = 946;
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
			this.state = 949;
			this.match(RegelSpraakParser.DIMENSIE);
			this.state = 950;
			this.naamwoord();
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===273) {
				{
				this.state = 951;
				this.match(RegelSpraakParser.COMMA);
				}
			}

			this.state = 954;
			this.match(RegelSpraakParser.BESTAANDE_UIT);
			this.state = 955;
			localctx._dimensieNaamMeervoud = this.naamwoord();
			this.state = 956;
			this.voorzetselSpecificatie();
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 957;
				this.labelWaardeSpecificatie();
				}
				}
				this.state = 960;
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
			this.state = 969;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 962;
				this.match(RegelSpraakParser.NA_HET_ATTRIBUUT_MET_VOORZETSEL);
				this.state = 963;
				localctx._vz = this.voorzetsel();
				this.state = 964;
				this.match(RegelSpraakParser.RPAREN);
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===275) {
					{
					this.state = 965;
					this.match(RegelSpraakParser.COLON);
					}
				}

				}
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 968;
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
			this.state = 971;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 972;
			this.match(RegelSpraakParser.DOT);
			this.state = 973;
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
			this.state = 975;
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
			this.state = 977;
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
			this.state = 979;
			this.match(RegelSpraakParser.PARAMETER);
			this.state = 980;
			this.parameterNamePhrase();
			this.state = 981;
			this.match(RegelSpraakParser.COLON);
			this.state = 984;
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
				this.state = 982;
				this.datatype();
				}
				break;
			case 262:
				{
				this.state = 983;
				this.domeinRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===170) {
				{
				this.state = 986;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 987;
				this.eenheidExpressie();
				}
			}

			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===106) {
				{
				this.state = 990;
				this.match(RegelSpraakParser.IS);
				this.state = 991;
				this.expressie();
				}
			}

			this.state = 995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & 7) !== 0)) {
				{
				this.state = 994;
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
			this.state = 998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===205 || _la===210) {
				{
				this.state = 997;
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

			this.state = 1000;
			this.parameterNamePart();
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				{
				this.state = 1001;
				this.voorzetsel();
				this.state = 1002;
				this.parameterNamePart();
				}
				}
				this.state = 1008;
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
			this.state = 1009;
			_la = this._input.LA(1);
			if(!(_la===183 || _la===262)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1013;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1010;
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
				this.state = 1015;
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
			this.state = 1029;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===205 || _la===210) {
					{
					this.state = 1016;
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

				this.state = 1019;
				this.parameterNamePart();
				this.state = 1025;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1020;
						this.voorzetsel();
						this.state = 1021;
						this.parameterNamePart();
						}
						}
					}
					this.state = 1027;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1028;
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
			this.state = 1046;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1031;
				this.match(RegelSpraakParser.FEITTYPE);
				this.state = 1032;
				localctx._feittypenaam = this.naamwoord();
				this.state = 1033;
				this.rolDefinition();
				this.state = 1035;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1034;
						this.rolDefinition();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1037;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1039;
				this.cardinalityLine();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1041;
				this.match(RegelSpraakParser.WEDERKERIG_FEITTYPE);
				this.state = 1042;
				localctx._feittypenaam = this.naamwoord();
				this.state = 1043;
				this.rolDefinition();
				this.state = 1044;
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
			this.state = 1048;
			localctx._article = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===205 || _la===210)) {
			    localctx._article = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1049;
			this.rolNameWords();
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 1050;
				this.match(RegelSpraakParser.MV_START);
				this.state = 1051;
				localctx._meervoud = this.naamwoord();
				this.state = 1052;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 1056;
			this.match(RegelSpraakParser.TAB);
			this.state = 1058;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1057;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._objectTypeName.push(localctx._IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1060;
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
			this.state = 1064;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1064;
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
					this.state = 1062;
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
					this.state = 1063;
					this.voorzetsel();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1066;
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
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1068;
				this.cardinalityWord();
				}
				}
				this.state = 1071;
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
			this.state = 1073;
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
			this.state = 1075;
			this.match(RegelSpraakParser.REGEL);
			this.state = 1076;
			this.regelName();
			this.state = 1078;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===263) {
				{
				this.state = 1077;
				this.match(RegelSpraakParser.NUMBER);
				}
			}

			this.state = 1081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1080;
				this.regelVersieBlok();
				}
				}
				this.state = 1083;
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
			this.state = 1085;
			this.regelVersie();
			this.state = 1086;
			this.resultaatDeel();
			this.state = 1092;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 104:
				{
				this.state = 1087;
				this.voorwaardeDeel();
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===274) {
					{
					this.state = 1088;
					this.match(RegelSpraakParser.DOT);
					}
				}

				}
				break;
			case 274:
				{
				this.state = 1091;
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
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===100) {
				{
				this.state = 1094;
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
			this.state = 1097;
			this.match(RegelSpraakParser.REGELGROEP);
			this.state = 1098;
			this.naamwoord();
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 1099;
				localctx._isRecursive = this.match(RegelSpraakParser.IS_RECURSIEF);
				}
			}

			this.state = 1104;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1104;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 89:
						{
						this.state = 1102;
						this.regel();
						}
						break;
					case 88:
						{
						this.state = 1103;
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
				this.state = 1106;
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
			this.state = 1108;
			this.naamwoordWithNumbers();
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===106 || ((((_la - 191)) & ~0x1F) === 0 && ((1 << (_la - 191)) & 262209) !== 0) || _la===273) {
				{
				{
				this.state = 1109;
				this.regelNameExtension();
				}
				}
				this.state = 1114;
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
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1115;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1116;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1117;
				this.naamwoordWithNumbers();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1118;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1119;
				this.match(RegelSpraakParser.MET);
				this.state = 1120;
				this.naamwoordWithNumbers();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1121;
				this.match(RegelSpraakParser.EN);
				this.state = 1122;
				this.naamwoordWithNumbers();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1123;
				this.match(RegelSpraakParser.IS);
				this.state = 1124;
				this.naamwoordWithNumbers();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1125;
				this.match(RegelSpraakParser.GEEN);
				this.state = 1126;
				this.naamwoordWithNumbers();
				this.state = 1127;
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
			this.state = 1131;
			this.match(RegelSpraakParser.GELDIG);
			this.state = 1132;
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
			this.state = 1143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 200:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1134;
				this.match(RegelSpraakParser.ALTIJD);
				}
				break;
			case 143:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1135;
				this.match(RegelSpraakParser.VANAF);
				this.state = 1136;
				this.geldigheidsDatum();
				this.state = 1139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===141 || _la===233) {
					{
					this.state = 1137;
					_la = this._input.LA(1);
					if(!(_la===141 || _la===233)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1138;
					this.geldigheidsDatum();
					}
				}

				}
				break;
			case 141:
			case 233:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1141;
				_la = this._input.LA(1);
				if(!(_la===141 || _la===233)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1142;
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
			this.state = 1147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1145;
				this.datumLiteral();
				}
				break;
			case 263:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1146;
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
			this.state = 1189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				localctx = new DagsoortdefinitieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1149;
				this.match(RegelSpraakParser.EEN);
				this.state = 1150;
				this.match(RegelSpraakParser.DAG);
				this.state = 1151;
				this.match(RegelSpraakParser.IS);
				this.state = 1152;
				this.match(RegelSpraakParser.EEN);
				this.state = 1153;
				this.naamwoord();
				}
				break;
			case 2:
				localctx = new GelijkstellingResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1154;
				this.attribuutReferentie();
				this.state = 1161;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
					{
					this.state = 1155;
					this.match(RegelSpraakParser.WORDT_BEREKEND_ALS);
					this.state = 1156;
					this.expressie();
					}
					break;
				case 9:
					{
					this.state = 1157;
					this.match(RegelSpraakParser.WORDT_GESTELD_OP);
					this.state = 1158;
					this.expressie();
					}
					break;
				case 10:
					{
					this.state = 1159;
					this.match(RegelSpraakParser.WORDT_GEINITIALISEERD_OP);
					this.state = 1160;
					this.expressie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 21) !== 0) || _la===237) {
					{
					this.state = 1163;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 3:
				localctx = new ConsistencyCheckResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1166;
				this.attribuutReferentie();
				this.state = 1167;
				this.match(RegelSpraakParser.MOET);
				this.state = 1168;
				this.consistencyOperator();
				this.state = 1169;
				this.expressie();
				}
				break;
			case 4:
				localctx = new FeitCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1171;
				this.feitCreatiePattern();
				}
				break;
			case 5:
				localctx = new ObjectCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1172;
				this.objectCreatie();
				}
				break;
			case 6:
				localctx = new RelationshipWithAttributeResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1173;
				this.onderwerpReferentie();
				this.state = 1174;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1175;
				_la = this._input.LA(1);
				if(!(_la===205 || _la===210)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1176;
				this.naamwoord();
				this.state = 1177;
				this.match(RegelSpraakParser.MET);
				this.state = 1178;
				this.attribuutMetLidwoord();
				this.state = 1179;
				_la = this._input.LA(1);
				if(!(_la===44 || _la===45 || _la===121)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1180;
				this.expressie();
				}
				break;
			case 7:
				localctx = new KenmerkFeitResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1182;
				this.onderwerpReferentie();
				this.state = 1183;
				_la = this._input.LA(1);
				if(!(_la===103 || _la===106)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1184;
				this.kenmerkNaam();
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 21) !== 0) || _la===237) {
					{
					this.state = 1185;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 8:
				localctx = new VerdelingContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1188;
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
			this.state = 1191;
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
			this.state = 1193;
			this.match(RegelSpraakParser.EEN);
			this.state = 1194;
			localctx._role1 = this.feitCreatieRolPhrase();
			this.state = 1195;
			this.match(RegelSpraakParser.VAN);
			this.state = 1196;
			this.match(RegelSpraakParser.EEN);
			this.state = 1197;
			localctx._subject1 = this.feitCreatieSubjectPhrase();
			this.state = 1198;
			this.match(RegelSpraakParser.IS);
			this.state = 1199;
			localctx._article2 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
			    localctx._article2 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1200;
			localctx._role2 = this.feitCreatieRolPhrase();
			this.state = 1201;
			this.match(RegelSpraakParser.VAN);
			this.state = 1202;
			localctx._article3 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
			    localctx._article3 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1203;
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
			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1205;
				this.feitCreatieWord();
				}
				}
				this.state = 1208;
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
			this.state = 1211;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1210;
					this.feitCreatieSubjectWord();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1213;
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
			this.state = 1220;
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
				this.state = 1215;
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
				this.state = 1216;
				this.voorzetsel();
				}
				break;
			case 205:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1217;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 210:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1218;
				this.match(RegelSpraakParser.HET);
				}
				break;
			case 208:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1219;
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
			this.state = 1224;
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
				this.state = 1222;
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
				this.state = 1223;
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
			this.state = 1226;
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
			this.state = 1228;
			localctx._subject = this.onderwerpReferentie();
			this.state = 1229;
			this.match(RegelSpraakParser.HEEFT);
			this.state = 1230;
			localctx._roleArticle = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
			    localctx._roleArticle = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1231;
			localctx._role = this.naamwoord();
			this.state = 1233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===169) {
				{
				this.state = 1232;
				this.objectAttributeInit();
				}
			}

			this.state = 1236;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1235;
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
			this.state = 1238;
			this.match(RegelSpraakParser.MET);
			this.state = 1239;
			this.waardetoekenning();
			this.state = 1244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===273) {
				{
				{
				this.state = 1240;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1241;
				this.waardetoekenning();
				}
				}
				this.state = 1246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===209) {
				{
				this.state = 1247;
				this.match(RegelSpraakParser.EN);
				this.state = 1248;
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
			this.state = 1251;
			localctx._attribuut = this.simpleNaamwoord();
			this.state = 1252;
			this.match(RegelSpraakParser.GELIJK_AAN);
			this.state = 1253;
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
			this.state = 1255;
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
			this.state = 1257;
			this.match(RegelSpraakParser.CONSISTENTIEREGEL);
			this.state = 1258;
			this.naamwoord();
			this.state = 1268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1259;
				this.uniekzijnResultaat();
				}
				break;
			case 2:
				{
				this.state = 1260;
				this.inconsistentResultaat();
				this.state = 1266;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 104:
					{
					this.state = 1261;
					this.voorwaardeDeel();
					this.state = 1263;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===274) {
						{
						this.state = 1262;
						this.match(RegelSpraakParser.DOT);
						}
					}

					}
					break;
				case 274:
					{
					this.state = 1265;
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
			this.state = 1270;
			this.alleAttributenVanObjecttype();
			this.state = 1271;
			this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
			this.state = 1273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===274) {
				{
				this.state = 1272;
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
			this.state = 1275;
			this.match(RegelSpraakParser.DE);
			this.state = 1276;
			this.naamwoord();
			this.state = 1277;
			this.match(RegelSpraakParser.VAN);
			this.state = 1278;
			this.match(RegelSpraakParser.ALLE);
			this.state = 1279;
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
			this.state = 1282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1281;
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
			this.state = 1284;
			this.naamwoord();
			this.state = 1285;
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
			this.state = 1287;
			this.match(RegelSpraakParser.INDIEN);
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1288;
				this.expressie();
				}
				break;
			case 2:
				{
				this.state = 1289;
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
			this.state = 1334;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1292;
				this.match(RegelSpraakParser.ER_AAN);
				this.state = 1293;
				this.voorwaardeKwantificatie();
				this.state = 1294;
				_la = this._input.LA(1);
				if(!(_la===238 || _la===239)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1295;
				this.match(RegelSpraakParser.WORDT_VOLDAAN);
				this.state = 1296;
				this.match(RegelSpraakParser.COLON);
				this.state = 1298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1297;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===279 || _la===289);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1306;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1302;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1303;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1304;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1305;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1308;
				this.match(RegelSpraakParser.AAN);
				this.state = 1309;
				this.voorwaardeKwantificatie();
				this.state = 1310;
				_la = this._input.LA(1);
				if(!(_la===238 || _la===239)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1311;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1312;
				this.match(RegelSpraakParser.COLON);
				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1313;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===279 || _la===289);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1322;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1318;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1319;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1320;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1321;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1324;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1325;
				this.match(RegelSpraakParser.AAN);
				this.state = 1326;
				this.voorwaardeKwantificatie();
				this.state = 1327;
				_la = this._input.LA(1);
				if(!(_la===238 || _la===239)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1328;
				this.match(RegelSpraakParser.COLON);
				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1329;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1332;
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
			this.state = 1351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 205:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1336;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 117:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1337;
				this.match(RegelSpraakParser.ALLE);
				}
				break;
			case 196:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1338;
				this.match(RegelSpraakParser.GEEN_VAN_DE);
				}
				break;
			case 150:
			case 151:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1339;
				_la = this._input.LA(1);
				if(!(_la===150 || _la===151)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1340;
				_la = this._input.LA(1);
				if(!(((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 16435) !== 0) || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1341;
				this.match(RegelSpraakParser.VAN);
				this.state = 1342;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 152:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1343;
				this.match(RegelSpraakParser.TEN_HOOGSTE);
				this.state = 1344;
				_la = this._input.LA(1);
				if(!(((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 16435) !== 0) || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1345;
				this.match(RegelSpraakParser.VAN);
				this.state = 1346;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 153:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1347;
				this.match(RegelSpraakParser.PRECIES);
				this.state = 1348;
				_la = this._input.LA(1);
				if(!(((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 16435) !== 0) || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1349;
				this.match(RegelSpraakParser.VAN);
				this.state = 1350;
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
			this.state = 1353;
			this.outerBulletPrefix();
			this.state = 1356;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1354;
				this.elementaireVoorwaarde();
				}
				break;
			case 2:
				{
				this.state = 1355;
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
			this.state = 1358;
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
			this.state = 1363;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 284:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1360;
				this.match(RegelSpraakParser.DOUBLE_DOT);
				}
				break;
			case 279:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1361;
				this.match(RegelSpraakParser.BULLET);
				this.state = 1362;
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
			this.state = 1366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1365;
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
				this.state = 1368;
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
			this.state = 1370;
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
			this.state = 1375;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1372;
				this.onderwerpReferentie();
				}
				break;
			case 2:
				{
				this.state = 1373;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 3:
				{
				this.state = 1374;
				this.match(RegelSpraakParser.ER);
				}
				break;
			}
			this.state = 1377;
			this.match(RegelSpraakParser.VOLDOET);
			this.state = 1378;
			this.match(RegelSpraakParser.AAN);
			this.state = 1379;
			this.voorwaardeKwantificatie();
			this.state = 1380;
			_la = this._input.LA(1);
			if(!(_la===238 || _la===239)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1381;
			this.match(RegelSpraakParser.COLON);
			this.state = 1383;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1382;
					this.genesteSamengesteldeVoorwaardeOnderdeel();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1385;
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
			this.state = 1387;
			this.nestedBulletPrefix();
			this.state = 1390;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1388;
				this.elementaireVoorwaarde();
				}
				break;
			case 2:
				{
				this.state = 1389;
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
			this.state = 1392;
			this.onderwerpBasis();
			this.state = 1395;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1393;
				_la = this._input.LA(1);
				if(!(_la===204 || _la===207)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1394;
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
			this.state = 1397;
			this.onderwerpBasisWithNumbers();
			this.state = 1400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===204 || _la===207) {
				{
				this.state = 1398;
				_la = this._input.LA(1);
				if(!(_la===204 || _la===207)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1399;
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
			this.state = 1402;
			this.basisOnderwerp();
			this.state = 1408;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1403;
					this.voorzetsel();
					this.state = 1404;
					this.basisOnderwerp();
					}
					}
				}
				this.state = 1410;
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
			this.state = 1411;
			this.basisOnderwerpWithNumbers();
			this.state = 1417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				{
				this.state = 1412;
				this.voorzetsel();
				this.state = 1413;
				this.basisOnderwerpWithNumbers();
				}
				}
				this.state = 1419;
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
			this.state = 1427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 112:
			case 205:
			case 208:
			case 210:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1420;
				_la = this._input.LA(1);
				if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1422;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1421;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1424;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 212:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1426;
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
			this.state = 1436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 112:
			case 205:
			case 208:
			case 210:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1429;
				_la = this._input.LA(1);
				if(!(_la===112 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1430;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 1433;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 268582913) !== 0) || _la===125 || _la===154 || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 2149160961) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 2956137599) !== 0) || _la===262 || _la===263);
				}
				break;
			case 212:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1435;
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
			this.state = 1438;
			this.attribuutMetLidwoord();
			this.state = 1439;
			this.match(RegelSpraakParser.VAN);
			this.state = 1440;
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
			this.state = 1442;
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
			this.state = 1445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				this.state = 1444;
				this.voorzetsel();
				}
			}

			this.state = 1447;
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
			this.state = 1450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 1073741829) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 44044545) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 137) !== 0)) {
				{
				this.state = 1449;
				this.voorzetsel();
				}
			}

			this.state = 1453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 41) !== 0)) {
				{
				this.state = 1452;
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

			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1455;
				this.identifierOrKeywordWithNumbers();
				}
				}
				this.state = 1458;
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
			this.state = 1460;
			_la = this._input.LA(1);
			if(!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1461;
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
			this.state = 1470;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1463;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1464;
				this.naamwoord();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1465;
				this.naamwoord();
				this.state = 1468;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
				case 1:
					{
					this.state = 1466;
					_la = this._input.LA(1);
					if(!(_la===204 || _la===207)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1467;
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
			this.state = 1474;
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
				this.state = 1472;
				this.elementairPredicaat();
				}
				break;
			case 115:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1473;
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
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1476;
				this.attribuutVergelijkingsPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1477;
				this.objectPredicaat();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1478;
				this.getalPredicaat();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1479;
				this.tekstPredicaat();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1480;
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
			this.state = 1483;
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
			this.state = 1486;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				{
				this.state = 1485;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			}
			this.state = 1490;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1488;
				this.kenmerkNaam();
				}
				break;
			case 2:
				{
				this.state = 1489;
				this.rolNaam();
				}
				break;
			}
			this.state = 1492;
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
			this.state = 1494;
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
			this.state = 1497;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1496;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			}
			this.state = 1499;
			localctx._attribuutNaam = this.naamwoord();
			this.state = 1500;
			this.match(RegelSpraakParser.HEBBEN);
			this.state = 1501;
			this.comparisonOperator();
			this.state = 1502;
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
			this.state = 1504;
			this.getalVergelijkingsOperatorMeervoud();
			this.state = 1505;
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
			this.state = 1507;
			this.tekstVergelijkingsOperatorMeervoud();
			this.state = 1508;
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
			this.state = 1510;
			this.datumVergelijkingsOperatorMeervoud();
			this.state = 1511;
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
			this.state = 1513;
			this.match(RegelSpraakParser.AAN);
			this.state = 1514;
			this.voorwaardeKwantificatie();
			this.state = 1515;
			_la = this._input.LA(1);
			if(!(_la===238 || _la===239)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1516;
			_la = this._input.LA(1);
			if(!(_la===146 || _la===147)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1517;
			this.match(RegelSpraakParser.COLON);
			this.state = 1519;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1518;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1521;
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
			this.state = 1529;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1523;
				this.bulletPrefix();
				this.state = 1524;
				this.elementaireVoorwaardeInPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1526;
				this.bulletPrefix();
				this.state = 1527;
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
			this.state = 1531;
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
			this.state = 1551;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1535;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1533;
					this.attribuutReferentie();
					}
					break;
				case 2:
					{
					this.state = 1534;
					this.bezieldeReferentie();
					}
					break;
				}
				this.state = 1537;
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1538;
				this.kenmerkNaam();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1542;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1540;
					this.attribuutReferentie();
					}
					break;
				case 2:
					{
					this.state = 1541;
					this.bezieldeReferentie();
					}
					break;
				}
				this.state = 1544;
				this.comparisonOperator();
				this.state = 1545;
				this.expressie();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1547;
				this.onderwerpReferentie();
				this.state = 1548;
				this.eenzijdigeObjectVergelijking();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1550;
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
			this.state = 1557;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 147:
				{
				this.state = 1553;
				this.match(RegelSpraakParser.VOLDOET);
				}
				break;
			case 146:
				{
				this.state = 1554;
				this.match(RegelSpraakParser.VOLDOEN);
				}
				break;
			case 110:
				{
				this.state = 1555;
				this.match(RegelSpraakParser.WORDT);
				this.state = 1556;
				this.match(RegelSpraakParser.VOLDAAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1559;
			this.match(RegelSpraakParser.AAN);
			this.state = 1560;
			this.voorwaardeKwantificatie();
			this.state = 1561;
			_la = this._input.LA(1);
			if(!(_la===238 || _la===239)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1562;
			this.match(RegelSpraakParser.COLON);
			this.state = 1564;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1563;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1566;
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
			this.state = 1568;
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
			this.state = 1570;
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
			this.state = 1572;
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
	public tekstExpressie(): TekstExpressieContext {
		let localctx: TekstExpressieContext = new TekstExpressieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, RegelSpraakParser.RULE_tekstExpressie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1576;
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
			this.state = 1602;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1578;
				this.datumLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1579;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1580;
				this.match(RegelSpraakParser.REKENJAAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1581;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1582;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1583;
				this.primaryExpression(0);
				this.state = 1584;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1585;
				this.primaryExpression(0);
				this.state = 1586;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1587;
				this.primaryExpression(0);
				this.state = 1588;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1590;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1591;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1592;
				this.primaryExpression(0);
				this.state = 1593;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1595;
				this.attribuutReferentie();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1596;
				this.bezieldeReferentie();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1597;
				this.parameterMetLidwoord();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1598;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1599;
				this.expressie();
				this.state = 1600;
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
			this.state = 1604;
			this.match(RegelSpraakParser.DAARBIJ_GELDT);
			this.state = 1608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===205 || _la===210 || _la===262) {
				{
				{
				this.state = 1605;
				this.variabeleToekenning();
				}
				}
				this.state = 1610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1611;
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
			this.state = 1614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===205 || _la===210) {
				{
				this.state = 1613;
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

			this.state = 1616;
			localctx._varName = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 1617;
			this.match(RegelSpraakParser.IS);
			this.state = 1618;
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
			this.state = 1620;
			this.primaryExpression(0);
			this.state = 1629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 67243011) !== 0)) {
				{
				{
				this.state = 1623;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 130:
				case 136:
				case 145:
					{
					this.state = 1621;
					this.additiveOperator();
					}
					break;
				case 119:
				case 120:
				case 129:
					{
					this.state = 1622;
					this.multiplicativeOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1625;
				this.primaryExpression(0);
				}
				}
				this.state = 1631;
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
			this.state = 1645;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				localctx = new ExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1632;
				this.logicalExpression();
				this.state = 1633;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1634;
				this.begrenzing();
				this.state = 1635;
				this.afronding();
				}
				break;
			case 2:
				localctx = new ExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1637;
				this.logicalExpression();
				this.state = 1638;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1639;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new ExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1641;
				this.logicalExpression();
				this.state = 1642;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1644;
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
			this.state = 1660;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				localctx = new SimpleExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1647;
				this.comparisonExpression();
				this.state = 1648;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1649;
				this.begrenzing();
				this.state = 1650;
				this.afronding();
				}
				break;
			case 2:
				localctx = new SimpleExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1652;
				this.comparisonExpression();
				this.state = 1653;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1654;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new SimpleExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1656;
				this.comparisonExpression();
				this.state = 1657;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprBaseContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1659;
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
			this.state = 1662;
			(localctx as LogicalExprContext)._left = this.comparisonExpression();
			this.state = 1665;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				{
				this.state = 1663;
				(localctx as LogicalExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===209 || _la===222)) {
				    (localctx as LogicalExprContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1664;
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
			this.state = 1711;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				localctx = new IsDagsoortExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1667;
				(localctx as IsDagsoortExprContext)._left = this.additiveExpression();
				this.state = 1668;
				(localctx as IsDagsoortExprContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===106 || _la===112)) {
				    (localctx as IsDagsoortExprContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1669;
				(localctx as IsDagsoortExprContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===197 || _la===208)) {
				    (localctx as IsDagsoortExprContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1670;
				(localctx as IsDagsoortExprContext)._dagsoort = this.naamwoord();
				}
				break;
			case 2:
				localctx = new DagsoortVragendExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1672;
				(localctx as DagsoortVragendExprContext)._left = this.additiveExpression();
				this.state = 1673;
				(localctx as DagsoortVragendExprContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===197 || _la===208)) {
				    (localctx as DagsoortVragendExprContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1674;
				(localctx as DagsoortVragendExprContext)._dagsoort = this.naamwoord();
				this.state = 1675;
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
				this.state = 1677;
				this.subordinateClauseExpression();
				}
				break;
			case 4:
				localctx = new PeriodeCheckExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1678;
				this.periodevergelijkingElementair();
				}
				break;
			case 5:
				localctx = new IsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1679;
				(localctx as IsKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1680;
				this.match(RegelSpraakParser.IS);
				this.state = 1681;
				this.naamwoordWithNumbers();
				}
				break;
			case 6:
				localctx = new HeeftKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1683;
				(localctx as HeeftKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1684;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1685;
				this.naamwoordWithNumbers();
				}
				break;
			case 7:
				localctx = new GelijkIsAanOfExprContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1687;
				(localctx as GelijkIsAanOfExprContext)._left = this.additiveExpression();
				this.state = 1688;
				(localctx as GelijkIsAanOfExprContext)._op = this.gelijkIsAanOperator();
				this.state = 1689;
				(localctx as GelijkIsAanOfExprContext)._firstValue = this.literalValue();
				this.state = 1694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1690;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1691;
					(localctx as GelijkIsAanOfExprContext)._literalValue = this.literalValue();
					(localctx as GelijkIsAanOfExprContext)._middleValues.push((localctx as GelijkIsAanOfExprContext)._literalValue);
					}
					}
					this.state = 1696;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1697;
				this.match(RegelSpraakParser.OF);
				this.state = 1698;
				(localctx as GelijkIsAanOfExprContext)._lastValue = this.literalValue();
				}
				break;
			case 8:
				localctx = new BinaryComparisonExprContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1700;
				(localctx as BinaryComparisonExprContext)._left = this.additiveExpression();
				this.state = 1707;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
				case 1:
					{
					this.state = 1702;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
					case 1:
						{
						this.state = 1701;
						(localctx as BinaryComparisonExprContext)._gp = this.geheleVergelijkingPrefix();
						}
						break;
					}
					this.state = 1704;
					this.comparisonOperator();
					this.state = 1705;
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
				this.state = 1709;
				this.unaryCondition();
				}
				break;
			case 10:
				localctx = new RegelStatusConditionExprContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1710;
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
			this.state = 1722;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 268:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1713;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 267:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1714;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 263:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1715;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 1717;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
				case 1:
					{
					this.state = 1716;
					this.eenheidExpressie();
					}
					break;
				}
				}
				break;
			case 266:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1719;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 265:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1720;
				this.datumLiteral();
				}
				break;
			case 262:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1721;
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
			this.state = 1724;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		let localctx: GeheleVergelijkingPrefixContext = new GeheleVergelijkingPrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, RegelSpraakParser.RULE_geheleVergelijkingPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133) {
				{
				this.state = 1726;
				this.match(RegelSpraakParser.NIET);
				}
			}

			this.state = 1733;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 1729;
				this.match(RegelSpraakParser.GEDURENDE_HET_GEHELE);
				this.state = 1730;
				this.match(RegelSpraakParser.JAAR);
				}
				break;
			case 6:
				{
				this.state = 1731;
				this.match(RegelSpraakParser.GEDURENDE_DE_GEHELE);
				this.state = 1732;
				this.match(RegelSpraakParser.MAAND);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(localctx, 288, RegelSpraakParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1735;
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
		this.enterRule(localctx, 290, RegelSpraakParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1737;
			localctx._left = this.multiplicativeExpression();
			this.state = 1743;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 202, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1738;
					this.additiveOperator();
					this.state = 1739;
					localctx._right = this.multiplicativeExpression();
					}
					}
				}
				this.state = 1745;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 202, this._ctx);
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
		this.enterRule(localctx, 292, RegelSpraakParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1746;
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
		this.enterRule(localctx, 294, RegelSpraakParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1748;
			localctx._left = this.powerExpression();
			this.state = 1754;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1749;
					this.multiplicativeOperator();
					this.state = 1750;
					localctx._right = this.powerExpression();
					}
					}
				}
				this.state = 1756;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
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
		this.enterRule(localctx, 296, RegelSpraakParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1757;
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
		this.enterRule(localctx, 298, RegelSpraakParser.RULE_powerExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1759;
			localctx._left = this.primaryExpression(0);
			this.state = 1765;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1760;
					this.powerOperator();
					this.state = 1761;
					localctx._right = this.primaryExpression(0);
					}
					}
				}
				this.state = 1767;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
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
		this.enterRule(localctx, 300, RegelSpraakParser.RULE_powerOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1768;
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
		let _startState: number = 302;
		this.enterRecursionRule(localctx, 302, RegelSpraakParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2035;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1771;
				this.match(RegelSpraakParser.MIN);
				this.state = 1772;
				this.primaryExpression(55);
				}
				break;
			case 2:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1773;
				this.match(RegelSpraakParser.MINUS);
				this.state = 1774;
				this.primaryExpression(54);
				}
				break;
			case 3:
				{
				localctx = new UnaryNietExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1775;
				this.match(RegelSpraakParser.NIET);
				this.state = 1776;
				this.primaryExpression(53);
				}
				break;
			case 4:
				{
				localctx = new AbsTijdsduurFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1777;
				this.match(RegelSpraakParser.DE_ABSOLUTE_TIJDSDUUR_VAN);
				this.state = 1778;
				this.primaryExpression(0);
				this.state = 1779;
				this.match(RegelSpraakParser.TOT);
				this.state = 1780;
				this.primaryExpression(0);
				this.state = 1783;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
				case 1:
					{
					this.state = 1781;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1782;
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
				this.state = 1785;
				this.match(RegelSpraakParser.TIJDSDUUR_VAN);
				this.state = 1786;
				this.primaryExpression(0);
				this.state = 1787;
				this.match(RegelSpraakParser.TOT);
				this.state = 1788;
				this.primaryExpression(0);
				this.state = 1791;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
				case 1:
					{
					this.state = 1789;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1790;
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
				this.state = 1793;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1794;
				this.primaryExpression(0);
				this.state = 1799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1795;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1796;
					this.primaryExpression(0);
					}
					}
					this.state = 1801;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1802;
				this.match(RegelSpraakParser.EN);
				this.state = 1803;
				this.primaryExpression(50);
				}
				break;
			case 7:
				{
				localctx = new SomAlleExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1805;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1806;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1807;
				this.naamwoord();
				}
				break;
			case 8:
				{
				localctx = new SomAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1808;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1809;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1810;
				this.attribuutReferentie();
				}
				break;
			case 9:
				{
				localctx = new AantalFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1814;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 210:
					{
					this.state = 1811;
					this.match(RegelSpraakParser.HET);
					this.state = 1812;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				case 183:
					{
					this.state = 1813;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1816;
				this.aggregationSubject();
				}
				break;
			case 10:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1817;
				this.match(RegelSpraakParser.HET);
				this.state = 1818;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1819;
				this.attribuutReferentie();
				}
				break;
			case 11:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1820;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1821;
				this.attribuutReferentie();
				}
				break;
			case 12:
				{
				localctx = new PercentageFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1828;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 263:
					{
					this.state = 1822;
					this.match(RegelSpraakParser.NUMBER);
					this.state = 1825;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 278:
						{
						this.state = 1823;
						this.match(RegelSpraakParser.PERCENT_SIGN);
						}
						break;
					case 262:
						{
						this.state = 1824;
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
					this.state = 1827;
					this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1830;
				this.match(RegelSpraakParser.VAN);
				this.state = 1831;
				this.primaryExpression(44);
				}
				break;
			case 13:
				{
				localctx = new PercentageOfExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1832;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				this.state = 1833;
				this.match(RegelSpraakParser.VAN);
				this.state = 1834;
				this.primaryExpression(43);
				}
				break;
			case 14:
				{
				localctx = new ConcatenatieExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1835;
				this.match(RegelSpraakParser.CONCATENATIE_VAN);
				this.state = 1836;
				this.primaryExpression(0);
				this.state = 1841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1837;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1838;
					this.primaryExpression(0);
					}
					}
					this.state = 1843;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1844;
				_la = this._input.LA(1);
				if(!(_la===209 || _la===222)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1845;
				this.primaryExpression(39);
				}
				break;
			case 15:
				{
				localctx = new WortelFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1847;
				this.match(RegelSpraakParser.DE_WORTEL_VAN);
				this.state = 1848;
				this.primaryExpression(37);
				}
				break;
			case 16:
				{
				localctx = new AbsValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1849;
				this.match(RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN);
				this.state = 1850;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1851;
				this.expressie();
				this.state = 1852;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 17:
				{
				localctx = new MinValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1854;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1855;
				this.primaryExpression(0);
				this.state = 1860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1856;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1857;
					this.primaryExpression(0);
					}
					}
					this.state = 1862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1863;
				this.match(RegelSpraakParser.EN);
				this.state = 1864;
				this.primaryExpression(35);
				}
				break;
			case 18:
				{
				localctx = new MinAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1866;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1867;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1868;
				this.attribuutReferentie();
				}
				break;
			case 19:
				{
				localctx = new MaxValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1869;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1870;
				this.primaryExpression(0);
				this.state = 1875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1871;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1872;
					this.primaryExpression(0);
					}
					}
					this.state = 1877;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1878;
				this.match(RegelSpraakParser.EN);
				this.state = 1879;
				this.primaryExpression(33);
				}
				break;
			case 20:
				{
				localctx = new MaxAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1881;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1882;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1883;
				this.attribuutReferentie();
				}
				break;
			case 21:
				{
				localctx = new JaarUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1884;
				this.match(RegelSpraakParser.HET);
				this.state = 1885;
				this.match(RegelSpraakParser.JAAR);
				this.state = 1886;
				this.match(RegelSpraakParser.UIT);
				this.state = 1887;
				this.primaryExpression(31);
				}
				break;
			case 22:
				{
				localctx = new MaandUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1888;
				this.match(RegelSpraakParser.DE);
				this.state = 1889;
				this.match(RegelSpraakParser.MAAND);
				this.state = 1890;
				this.match(RegelSpraakParser.UIT);
				this.state = 1891;
				this.primaryExpression(30);
				}
				break;
			case 23:
				{
				localctx = new DagUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1892;
				this.match(RegelSpraakParser.DE);
				this.state = 1893;
				this.match(RegelSpraakParser.DAG);
				this.state = 1894;
				this.match(RegelSpraakParser.UIT);
				this.state = 1895;
				this.primaryExpression(29);
				}
				break;
			case 24:
				{
				localctx = new DatumMetFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1896;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1897;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1898;
				this.primaryExpression(0);
				this.state = 1899;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1900;
				this.primaryExpression(0);
				this.state = 1901;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1902;
				this.primaryExpression(0);
				this.state = 1903;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 25:
				{
				localctx = new PasenFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1905;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1906;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1907;
				this.primaryExpression(0);
				this.state = 1908;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 26:
				{
				localctx = new DateCalcExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1910;
				this.datumExpressie();
				this.state = 1911;
				_la = this._input.LA(1);
				if(!(_la===130 || _la===136)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1912;
				this.primaryExpression(0);
				this.state = 1913;
				this.timeUnit();
				}
				break;
			case 27:
				{
				localctx = new EersteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1915;
				this.match(RegelSpraakParser.EERSTE_VAN);
				this.state = 1916;
				this.primaryExpression(0);
				this.state = 1921;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1917;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1918;
					this.primaryExpression(0);
					}
					}
					this.state = 1923;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1924;
				this.match(RegelSpraakParser.EN);
				this.state = 1925;
				this.primaryExpression(25);
				}
				break;
			case 28:
				{
				localctx = new LaatsteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1927;
				this.match(RegelSpraakParser.LAATSTE_VAN);
				this.state = 1928;
				this.primaryExpression(0);
				this.state = 1933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===273) {
					{
					{
					this.state = 1929;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1930;
					this.primaryExpression(0);
					}
					}
					this.state = 1935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1936;
				this.match(RegelSpraakParser.EN);
				this.state = 1937;
				this.primaryExpression(24);
				}
				break;
			case 29:
				{
				localctx = new TotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1939;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1940;
				this.expressie();
				this.state = 1942;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1941;
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
				this.state = 1944;
				this.match(RegelSpraakParser.HET);
				this.state = 1945;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1946;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 1947;
				this.match(RegelSpraakParser.IN);
				this.state = 1956;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 205:
				case 217:
					{
					this.state = 1949;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===205) {
						{
						this.state = 1948;
						this.match(RegelSpraakParser.DE);
						}
					}

					this.state = 1951;
					this.match(RegelSpraakParser.MAAND);
					}
					break;
				case 210:
				case 214:
					{
					this.state = 1953;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===210) {
						{
						this.state = 1952;
						this.match(RegelSpraakParser.HET);
						}
					}

					this.state = 1955;
					this.match(RegelSpraakParser.JAAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1958;
				this.match(RegelSpraakParser.DAT);
				this.state = 1959;
				this.expressie();
				}
				break;
			case 31:
				{
				localctx = new CapitalizedTotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1960;
					this.identifier();
					}
					}
					this.state = 1963;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 1965;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1966;
				this.expressie();
				this.state = 1968;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1967;
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
				this.state = 1970;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 1971;
				_la = this._input.LA(1);
				if(!(_la===214 || _la===217)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1972;
				this.match(RegelSpraakParser.VAN);
				this.state = 1973;
				this.expressie();
				this.state = 1975;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
				case 1:
					{
					this.state = 1974;
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
				this.state = 1978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1977;
					this.identifier();
					}
					}
					this.state = 1980;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 1982;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 1983;
				_la = this._input.LA(1);
				if(!(_la===214 || _la===217)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1984;
				this.match(RegelSpraakParser.VAN);
				this.state = 1985;
				this.expressie();
				this.state = 1987;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
				case 1:
					{
					this.state = 1986;
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
				this.state = 1991;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 183:
				case 188:
				case 210:
					{
					this.state = 1989;
					this.getalAggregatieFunctie();
					}
					break;
				case 184:
				case 186:
					{
					this.state = 1990;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1993;
				this.attribuutMetLidwoord();
				this.state = 1994;
				this.dimensieSelectie();
				this.state = 1996;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
				case 1:
					{
					this.state = 1995;
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
				this.state = 2000;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 183:
				case 188:
				case 210:
					{
					this.state = 1998;
					this.getalAggregatieFunctie();
					}
					break;
				case 184:
				case 186:
					{
					this.state = 1999;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2004;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
				case 1:
					{
					this.state = 2002;
					this.bezieldeReferentie();
					}
					break;
				case 2:
					{
					this.state = 2003;
					this.attribuutReferentie();
					}
					break;
				}
				this.state = 2006;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2007;
				this.naamwoord();
				this.state = 2008;
				this.match(RegelSpraakParser.TM);
				this.state = 2009;
				this.naamwoord();
				this.state = 2011;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 2010;
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
				this.state = 2013;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 2015;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
				case 1:
					{
					this.state = 2014;
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
				this.state = 2017;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 38:
				{
				localctx = new IdentifierExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2018;
				this.identifier();
				}
				break;
			case 39:
				{
				localctx = new BezieldeRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2019;
				this.bezieldeReferentie();
				}
				break;
			case 40:
				{
				localctx = new AttrRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2020;
				this.attribuutReferentie();
				}
				break;
			case 41:
				{
				localctx = new OnderwerpRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2021;
				this.onderwerpReferentie();
				}
				break;
			case 42:
				{
				localctx = new NaamwoordExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2022;
				this.naamwoord();
				}
				break;
			case 43:
				{
				localctx = new ParamRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2023;
				this.parameterMetLidwoord();
				}
				break;
			case 44:
				{
				localctx = new PercentageLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2024;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 45:
				{
				localctx = new StringLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2025;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 46:
				{
				localctx = new EnumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2026;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 47:
				{
				localctx = new DatumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2027;
				this.datumLiteral();
				}
				break;
			case 48:
				{
				localctx = new BooleanTrueLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2028;
				this.match(RegelSpraakParser.WAAR);
				}
				break;
			case 49:
				{
				localctx = new BooleanFalseLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2029;
				this.match(RegelSpraakParser.ONWAAR);
				}
				break;
			case 50:
				{
				localctx = new PronounExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2030;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 51:
				{
				localctx = new ParenExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2031;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 2032;
				this.expressie();
				this.state = 2033;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2059;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 234, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2057;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
					case 1:
						{
						localctx = new SimpleConcatenatieExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2037;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 2040;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 2038;
							this.match(RegelSpraakParser.COMMA);
							this.state = 2039;
							this.primaryExpression(0);
							}
							}
							this.state = 2042;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la===273);
						this.state = 2044;
						_la = this._input.LA(1);
						if(!(_la===209 || _la===222)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 2045;
						this.primaryExpression(39);
						}
						break;
					case 2:
						{
						localctx = new AfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2047;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 2048;
						this.afronding();
						}
						break;
					case 3:
						{
						localctx = new BegrenzingAfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2049;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 2050;
						this.match(RegelSpraakParser.COMMA);
						this.state = 2051;
						this.begrenzing();
						this.state = 2052;
						this.afronding();
						}
						break;
					case 4:
						{
						localctx = new BegrenzingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2054;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 2055;
						this.match(RegelSpraakParser.COMMA);
						this.state = 2056;
						this.begrenzing();
						}
						break;
					}
					}
				}
				this.state = 2061;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 234, this._ctx);
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
		this.enterRule(localctx, 304, RegelSpraakParser.RULE_afronding);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2062;
			_la = this._input.LA(1);
			if(!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 131267) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2063;
			this.match(RegelSpraakParser.AFGEROND_OP);
			this.state = 2064;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 2065;
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
		this.enterRule(localctx, 306, RegelSpraakParser.RULE_begrenzing);
		try {
			this.state = 2073;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2067;
				this.begrenzingMinimum();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2068;
				this.begrenzingMaximum();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2069;
				this.begrenzingMinimum();
				this.state = 2070;
				this.match(RegelSpraakParser.EN);
				this.state = 2071;
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
		this.enterRule(localctx, 308, RegelSpraakParser.RULE_begrenzingMinimum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2075;
			this.match(RegelSpraakParser.MET_EEN_MINIMUM_VAN);
			this.state = 2076;
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
		this.enterRule(localctx, 310, RegelSpraakParser.RULE_begrenzingMaximum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2078;
			this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
			this.state = 2079;
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
		this.enterRule(localctx, 312, RegelSpraakParser.RULE_conditieBijExpressie);
		try {
			this.state = 2084;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2081;
				this.match(RegelSpraakParser.GEDURENDE_DE_TIJD_DAT);
				this.state = 2082;
				localctx._condition = this.expressie();
				}
				break;
			case 139:
			case 141:
			case 143:
			case 237:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2083;
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
		this.enterRule(localctx, 314, RegelSpraakParser.RULE_periodevergelijkingElementair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2086;
			this.match(RegelSpraakParser.HET_IS_DE_PERIODE);
			this.state = 2087;
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
		this.enterRule(localctx, 316, RegelSpraakParser.RULE_periodevergelijkingEnkelvoudig);
		try {
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2089;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2090;
				this.datumExpressie();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2091;
				this.match(RegelSpraakParser.VAN);
				this.state = 2092;
				this.datumExpressie();
				this.state = 2093;
				this.match(RegelSpraakParser.TOT);
				this.state = 2094;
				this.datumExpressie();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2096;
				this.match(RegelSpraakParser.VAN);
				this.state = 2097;
				this.datumExpressie();
				this.state = 2098;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2099;
				this.datumExpressie();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2101;
				this.match(RegelSpraakParser.TOT);
				this.state = 2102;
				this.datumExpressie();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2103;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2104;
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
		this.enterRule(localctx, 318, RegelSpraakParser.RULE_periodeDefinitie);
		try {
			this.state = 2123;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				localctx = new VanafPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2107;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2108;
				this.dateExpression();
				}
				break;
			case 2:
				localctx = new TotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2109;
				this.match(RegelSpraakParser.TOT);
				this.state = 2110;
				this.dateExpression();
				}
				break;
			case 3:
				localctx = new TotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2111;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2112;
				this.dateExpression();
				}
				break;
			case 4:
				localctx = new VanTotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2113;
				this.match(RegelSpraakParser.VAN);
				this.state = 2114;
				this.dateExpression();
				this.state = 2115;
				this.match(RegelSpraakParser.TOT);
				this.state = 2116;
				this.dateExpression();
				}
				break;
			case 5:
				localctx = new VanTotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2118;
				this.match(RegelSpraakParser.VAN);
				this.state = 2119;
				this.dateExpression();
				this.state = 2120;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2121;
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
		this.enterRule(localctx, 320, RegelSpraakParser.RULE_dateExpression);
		try {
			this.state = 2129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2125;
				this.datumLiteral();
				}
				break;
			case 228:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2126;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 229:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2127;
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
				this.state = 2128;
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
		this.enterRule(localctx, 322, RegelSpraakParser.RULE_getalAggregatieFunctie);
		try {
			this.state = 2137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 210:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2131;
				this.match(RegelSpraakParser.HET);
				this.state = 2132;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 183:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2133;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2134;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2135;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				}
				break;
			case 188:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2136;
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
		this.enterRule(localctx, 324, RegelSpraakParser.RULE_datumAggregatieFunctie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2139;
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
		this.enterRule(localctx, 326, RegelSpraakParser.RULE_dimensieSelectie);
		try {
			this.state = 2151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 226:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2141;
				this.match(RegelSpraakParser.OVER);
				this.state = 2145;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 2142;
					this.aggregerenOverAlleDimensies();
					}
					break;
				case 2:
					{
					this.state = 2143;
					this.aggregerenOverVerzameling();
					}
					break;
				case 3:
					{
					this.state = 2144;
					this.aggregerenOverBereik();
					}
					break;
				}
				this.state = 2147;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			case 237:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2149;
				this.match(RegelSpraakParser.VAN);
				this.state = 2150;
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
		this.enterRule(localctx, 328, RegelSpraakParser.RULE_aggregerenOverAlleDimensies);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2153;
			this.match(RegelSpraakParser.ALLE);
			this.state = 2154;
			this.naamwoord();
			this.state = 2157;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				{
				this.state = 2155;
				_la = this._input.LA(1);
				if(!(_la===204 || _la===207)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2156;
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
		this.enterRule(localctx, 330, RegelSpraakParser.RULE_aggregerenOverVerzameling);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2159;
			this.match(RegelSpraakParser.DE);
			this.state = 2160;
			this.naamwoord();
			this.state = 2161;
			this.match(RegelSpraakParser.VANAF);
			this.state = 2162;
			this.naamwoord();
			this.state = 2163;
			this.match(RegelSpraakParser.TM);
			this.state = 2164;
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
		this.enterRule(localctx, 332, RegelSpraakParser.RULE_aggregerenOverBereik);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2166;
			this.match(RegelSpraakParser.DE);
			this.state = 2167;
			this.naamwoord();
			this.state = 2168;
			this.match(RegelSpraakParser.IN);
			this.state = 2169;
			this.match(RegelSpraakParser.LBRACE);
			this.state = 2170;
			this.naamwoord();
			this.state = 2175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===273) {
				{
				{
				this.state = 2171;
				this.match(RegelSpraakParser.COMMA);
				this.state = 2172;
				this.naamwoord();
				}
				}
				this.state = 2177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2178;
			this.match(RegelSpraakParser.EN);
			this.state = 2179;
			this.naamwoord();
			this.state = 2180;
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
		this.enterRule(localctx, 334, RegelSpraakParser.RULE_unaryCondition);
		let _la: number;
		try {
			this.state = 2208;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				localctx = new UnaryCheckConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2182;
				(localctx as UnaryCheckConditionContext)._expr = this.primaryExpression(0);
				this.state = 2183;
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
				this.state = 2185;
				(localctx as UnaryCheckVragendConditionContext)._expr = this.primaryExpression(0);
				this.state = 2186;
				(localctx as UnaryCheckVragendConditionContext)._check = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===122 || _la===128)) {
				    (localctx as UnaryCheckVragendConditionContext)._check = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2187;
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
				this.state = 2189;
				(localctx as UnaryNumeriekExactConditionContext)._expr = this.primaryExpression(0);
				this.state = 2190;
				(localctx as UnaryNumeriekExactConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 15) !== 0))) {
				    (localctx as UnaryNumeriekExactConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2191;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 2192;
				this.match(RegelSpraakParser.CIJFERS);
				}
				break;
			case 4:
				localctx = new UnaryKenmerkConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2194;
				(localctx as UnaryKenmerkConditionContext)._expr = this.primaryExpression(0);
				this.state = 2195;
				(localctx as UnaryKenmerkConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 85) !== 0))) {
				    (localctx as UnaryKenmerkConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2196;
				(localctx as UnaryKenmerkConditionContext)._kenmerk = this.identifier();
				}
				break;
			case 5:
				localctx = new UnaryRolConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2198;
				(localctx as UnaryRolConditionContext)._expr = this.primaryExpression(0);
				this.state = 2199;
				(localctx as UnaryRolConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 85) !== 0))) {
				    (localctx as UnaryRolConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2200;
				(localctx as UnaryRolConditionContext)._rol = this.identifier();
				}
				break;
			case 6:
				localctx = new UnaryUniekConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2202;
				(localctx as UnaryUniekConditionContext)._ref = this.onderwerpReferentie();
				this.state = 2203;
				this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
				}
				break;
			case 7:
				localctx = new UnaryInconsistentDataConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2205;
				(localctx as UnaryInconsistentDataConditionContext)._expr = this.primaryExpression(0);
				this.state = 2206;
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
		this.enterRule(localctx, 336, RegelSpraakParser.RULE_regelStatusCondition);
		try {
			this.state = 2218;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				localctx = new RegelStatusGevuurdCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2210;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2211;
				(localctx as RegelStatusGevuurdCheckContext)._name = this.regelversieNaam();
				this.state = 2212;
				this.match(RegelSpraakParser.IS_GEVUURD);
				}
				break;
			case 2:
				localctx = new RegelStatusInconsistentCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2214;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2215;
				(localctx as RegelStatusInconsistentCheckContext)._name = this.regelversieNaam();
				this.state = 2216;
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
		this.enterRule(localctx, 338, RegelSpraakParser.RULE_regelversieNaam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 2222;
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
					this.state = 2220;
					this.naamwoord();
					}
					break;
				case 197:
					{
					this.state = 2221;
					this.match(RegelSpraakParser.GEEN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 2224;
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
		this.enterRule(localctx, 340, RegelSpraakParser.RULE_subordinateClauseExpression);
		try {
			this.state = 2238;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				localctx = new SubordinateHasExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2226;
				(localctx as SubordinateHasExprContext)._subject = this.onderwerpReferentie();
				this.state = 2227;
				(localctx as SubordinateHasExprContext)._object = this.naamwoordWithNumbers();
				this.state = 2228;
				(localctx as SubordinateHasExprContext)._verb = this.match(RegelSpraakParser.HEEFT);
				}
				break;
			case 2:
				localctx = new SubordinateIsWithExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2230;
				(localctx as SubordinateIsWithExprContext)._subject = this.onderwerpReferentie();
				this.state = 2231;
				(localctx as SubordinateIsWithExprContext)._prepPhrase = this.naamwoordWithNumbers();
				this.state = 2232;
				(localctx as SubordinateIsWithExprContext)._verb = this.match(RegelSpraakParser.IS);
				}
				break;
			case 3:
				localctx = new SubordinateIsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2234;
				(localctx as SubordinateIsKenmerkExprContext)._subject = this.onderwerpReferentie();
				this.state = 2235;
				(localctx as SubordinateIsKenmerkExprContext)._verb = this.match(RegelSpraakParser.IS);
				this.state = 2236;
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
		this.enterRule(localctx, 342, RegelSpraakParser.RULE_dagsoortDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2240;
			this.match(RegelSpraakParser.DAGSOORT);
			this.state = 2241;
			this.naamwoord();
			this.state = 2249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===171) {
				{
				this.state = 2242;
				this.match(RegelSpraakParser.MV_START);
				this.state = 2244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2243;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 2246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===262);
				this.state = 2248;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 2252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 2251;
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
		this.enterRule(localctx, 344, RegelSpraakParser.RULE_tekstreeksExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2254;
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
		this.enterRule(localctx, 346, RegelSpraakParser.RULE_verdelingResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2256;
			localctx._sourceAmount = this.expressie();
			this.state = 2257;
			this.match(RegelSpraakParser.WORDT_VERDEELD_OVER);
			this.state = 2258;
			localctx._targetCollection = this.expressie();
			this.state = 2259;
			this.match(RegelSpraakParser.COMMA);
			this.state = 2260;
			this.match(RegelSpraakParser.WAARBIJ_WORDT_VERDEELD);
			this.state = 2263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 33:
			case 34:
			case 35:
			case 116:
			case 191:
				{
				this.state = 2261;
				this.verdelingMethodeSimple();
				}
				break;
			case 275:
				{
				this.state = 2262;
				this.verdelingMethodeMultiLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2265;
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
		this.enterRule(localctx, 348, RegelSpraakParser.RULE_verdelingMethodeSimple);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2268;
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
		this.enterRule(localctx, 350, RegelSpraakParser.RULE_verdelingMethodeMultiLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2270;
			this.match(RegelSpraakParser.COLON);
			this.state = 2271;
			this.verdelingMethodeBulletList();
			this.state = 2273;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
			case 1:
				{
				this.state = 2272;
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
		this.enterRule(localctx, 352, RegelSpraakParser.RULE_verdelingMethodeBulletList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2275;
			this.verdelingMethodeBullet();
			this.state = 2279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===289) {
				{
				{
				this.state = 2276;
				this.verdelingMethodeBullet();
				}
				}
				this.state = 2281;
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
		this.enterRule(localctx, 354, RegelSpraakParser.RULE_verdelingMethodeBullet);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2282;
			this.match(RegelSpraakParser.MINUS);
			this.state = 2283;
			this.verdelingMethode();
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 2284;
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
		this.enterRule(localctx, 356, RegelSpraakParser.RULE_verdelingMethode);
		let _la: number;
		try {
			this.state = 2301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 191:
				localctx = new VerdelingGelijkeDelenContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2287;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 35:
				localctx = new VerdelingNaarRatoContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2288;
				this.match(RegelSpraakParser.NAAR_RATO_VAN);
				this.state = 2289;
				(localctx as VerdelingNaarRatoContext)._ratioExpression = this.expressie();
				}
				break;
			case 34:
				localctx = new VerdelingOpVolgordeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2290;
				this.match(RegelSpraakParser.OP_VOLGORDE_VAN);
				this.state = 2291;
				(localctx as VerdelingOpVolgordeContext)._orderDirection = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===190 || _la===193)) {
				    (localctx as VerdelingOpVolgordeContext)._orderDirection = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2292;
				(localctx as VerdelingOpVolgordeContext)._orderExpression = this.expressie();
				}
				break;
			case 33:
				localctx = new VerdelingTieBreakContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2293;
				this.match(RegelSpraakParser.BIJ_EVEN_GROOT_CRITERIUM);
				this.state = 2294;
				(localctx as VerdelingTieBreakContext)._tieBreakMethod = this.verdelingMethode();
				}
				break;
			case 21:
				localctx = new VerdelingMaximumContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2295;
				this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
				this.state = 2296;
				(localctx as VerdelingMaximumContext)._maxExpression = this.attribuutMetLidwoord();
				}
				break;
			case 116:
				localctx = new VerdelingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2297;
				this.match(RegelSpraakParser.AFGEROND_OP);
				this.state = 2298;
				(localctx as VerdelingAfrondingContext)._decimals = this.match(RegelSpraakParser.NUMBER);
				this.state = 2299;
				this.match(RegelSpraakParser.DECIMALEN);
				this.state = 2300;
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
		this.enterRule(localctx, 358, RegelSpraakParser.RULE_verdelingRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2303;
			this.match(RegelSpraakParser.ALS_ONVERDEELDE_REST_BLIJFT);
			this.state = 2304;
			localctx._remainderTarget = this.expressie();
			this.state = 2306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===192) {
				{
				this.state = 2305;
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
		case 151:
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

	public static readonly _serializedATN: number[] = [4,1,291,2309,2,0,7,0,
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
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,1,0,1,0,1,0,1,0,1,
	0,1,0,5,0,367,8,0,10,0,12,0,370,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
	380,8,1,1,2,1,2,1,2,3,2,385,8,2,1,2,1,2,1,3,1,3,1,3,4,3,392,8,3,11,3,12,
	3,393,1,4,1,4,3,4,398,8,4,1,4,1,4,1,4,5,4,403,8,4,10,4,12,4,406,9,4,1,4,
	3,4,409,8,4,1,5,3,5,412,8,5,1,5,4,5,415,8,5,11,5,12,5,416,1,5,3,5,420,8,
	5,4,5,422,8,5,11,5,12,5,423,1,5,5,5,427,8,5,10,5,12,5,430,9,5,1,6,1,6,1,
	6,1,6,1,6,1,6,5,6,438,8,6,10,6,12,6,441,9,6,1,6,3,6,444,8,6,1,7,1,7,3,7,
	448,8,7,1,8,4,8,451,8,8,11,8,12,8,452,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,3,9,464,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,3,10,493,8,10,1,10,1,10,1,10,1,10,3,10,499,8,10,1,11,1,11,1,11,3,11,
	504,8,11,1,12,1,12,1,12,1,12,5,12,510,8,12,10,12,12,12,513,9,12,1,13,3,
	13,516,8,13,1,13,4,13,519,8,13,11,13,12,13,520,1,14,4,14,524,8,14,11,14,
	12,14,525,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,3,19,537,8,19,1,
	19,4,19,540,8,19,11,19,12,19,541,1,19,4,19,545,8,19,11,19,12,19,546,1,19,
	1,19,4,19,551,8,19,11,19,12,19,552,1,19,1,19,4,19,557,8,19,11,19,12,19,
	558,1,19,1,19,4,19,563,8,19,11,19,12,19,564,1,19,4,19,568,8,19,11,19,12,
	19,569,1,19,1,19,4,19,574,8,19,11,19,12,19,575,1,19,1,19,4,19,580,8,19,
	11,19,12,19,581,1,19,1,19,1,19,1,19,1,19,4,19,589,8,19,11,19,12,19,590,
	3,19,593,8,19,1,20,3,20,596,8,20,1,20,4,20,599,8,20,11,20,12,20,600,1,20,
	4,20,604,8,20,11,20,12,20,605,1,20,1,20,4,20,610,8,20,11,20,12,20,611,1,
	20,1,20,4,20,616,8,20,11,20,12,20,617,1,20,1,20,4,20,622,8,20,11,20,12,
	20,623,1,20,4,20,627,8,20,11,20,12,20,628,1,20,1,20,4,20,633,8,20,11,20,
	12,20,634,1,20,1,20,4,20,639,8,20,11,20,12,20,640,1,20,1,20,1,20,1,20,1,
	20,4,20,648,8,20,11,20,12,20,649,3,20,652,8,20,1,21,1,21,3,21,656,8,21,
	1,22,3,22,659,8,22,1,22,4,22,662,8,22,11,22,12,22,663,1,22,4,22,667,8,22,
	11,22,12,22,668,1,22,1,22,4,22,673,8,22,11,22,12,22,674,1,22,1,22,4,22,
	679,8,22,11,22,12,22,680,1,22,1,22,4,22,685,8,22,11,22,12,22,686,1,22,4,
	22,690,8,22,11,22,12,22,691,1,22,1,22,4,22,696,8,22,11,22,12,22,697,1,22,
	1,22,4,22,702,8,22,11,22,12,22,703,3,22,706,8,22,1,23,1,23,1,23,1,23,5,
	23,712,8,23,10,23,12,23,715,9,23,1,24,1,24,1,24,1,24,5,24,721,8,24,10,24,
	12,24,724,9,24,1,25,1,25,1,25,1,25,5,25,730,8,25,10,25,12,25,733,9,25,1,
	26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,4,30,747,8,30,
	11,30,12,30,748,1,30,3,30,752,8,30,1,30,3,30,755,8,30,1,30,5,30,758,8,30,
	10,30,12,30,761,9,30,1,31,1,31,3,31,765,8,31,1,31,1,31,1,32,3,32,770,8,
	32,1,32,1,32,3,32,774,8,32,1,32,1,32,3,32,778,8,32,1,32,3,32,781,8,32,1,
	33,1,33,1,33,1,33,3,33,787,8,33,1,33,1,33,3,33,791,8,33,1,33,1,33,1,33,
	1,33,5,33,797,8,33,10,33,12,33,800,9,33,3,33,802,8,33,1,33,3,33,805,8,33,
	1,34,1,34,1,34,1,34,1,34,1,34,3,34,813,8,34,1,35,1,35,1,35,1,35,1,35,3,
	35,820,8,35,1,36,1,36,1,36,1,36,1,36,3,36,827,8,36,1,37,1,37,1,38,1,38,
	1,38,1,38,1,38,3,38,836,8,38,1,39,1,39,1,40,1,40,1,41,3,41,843,8,41,1,41,
	1,41,1,41,1,41,1,41,1,41,3,41,851,8,41,1,42,1,42,1,42,1,42,1,42,1,42,3,
	42,859,8,42,1,42,3,42,862,8,42,1,43,1,43,1,43,1,43,1,43,3,43,869,8,43,1,
	44,1,44,4,44,873,8,44,11,44,12,44,874,1,45,1,45,1,46,1,46,1,47,1,47,1,47,
	5,47,884,8,47,10,47,12,47,887,9,47,1,48,1,48,1,48,1,48,1,48,1,48,3,48,895,
	8,48,1,48,1,48,3,48,899,8,48,1,48,1,48,3,48,903,8,48,1,48,1,48,3,48,907,
	8,48,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,921,
	8,50,1,51,1,51,1,51,5,51,926,8,51,10,51,12,51,929,9,51,1,51,1,51,1,51,1,
	51,3,51,935,8,51,1,52,1,52,1,52,5,52,940,8,52,10,52,12,52,943,9,52,1,53,
	1,53,1,53,3,53,948,8,53,1,54,1,54,1,54,3,54,953,8,54,1,54,1,54,1,54,1,54,
	4,54,959,8,54,11,54,12,54,960,1,55,1,55,1,55,1,55,3,55,967,8,55,1,55,3,
	55,970,8,55,1,56,1,56,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,59,1,59,
	1,59,3,59,985,8,59,1,59,1,59,3,59,989,8,59,1,59,1,59,3,59,993,8,59,1,59,
	3,59,996,8,59,1,60,3,60,999,8,60,1,60,1,60,1,60,1,60,5,60,1005,8,60,10,
	60,12,60,1008,9,60,1,61,1,61,5,61,1012,8,61,10,61,12,61,1015,9,61,1,62,
	3,62,1018,8,62,1,62,1,62,1,62,1,62,5,62,1024,8,62,10,62,12,62,1027,9,62,
	1,62,3,62,1030,8,62,1,63,1,63,1,63,1,63,4,63,1036,8,63,11,63,12,63,1037,
	1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,63,1047,8,63,1,64,1,64,1,64,1,64,1,
	64,1,64,3,64,1055,8,64,1,64,1,64,4,64,1059,8,64,11,64,12,64,1060,1,65,1,
	65,4,65,1065,8,65,11,65,12,65,1066,1,66,4,66,1070,8,66,11,66,12,66,1071,
	1,67,1,67,1,68,1,68,1,68,3,68,1079,8,68,1,68,4,68,1082,8,68,11,68,12,68,
	1083,1,69,1,69,1,69,1,69,3,69,1090,8,69,1,69,3,69,1093,8,69,1,69,3,69,1096,
	8,69,1,70,1,70,1,70,3,70,1101,8,70,1,70,1,70,4,70,1105,8,70,11,70,12,70,
	1106,1,71,1,71,5,71,1111,8,71,10,71,12,71,1114,9,71,1,72,1,72,1,72,1,72,
	1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,1130,8,72,1,73,1,
	73,1,73,1,74,1,74,1,74,1,74,1,74,3,74,1140,8,74,1,74,1,74,3,74,1144,8,74,
	1,75,1,75,3,75,1148,8,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,3,76,1162,8,76,1,76,3,76,1165,8,76,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,3,76,1187,8,76,1,76,3,76,1190,8,76,1,77,1,77,1,78,1,78,1,78,1,78,1,78,
	1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,4,79,1207,8,79,11,79,12,79,1208,
	1,80,4,80,1212,8,80,11,80,12,80,1213,1,81,1,81,1,81,1,81,1,81,3,81,1221,
	8,81,1,82,1,82,3,82,1225,8,82,1,83,1,83,1,84,1,84,1,84,1,84,1,84,3,84,1234,
	8,84,1,84,3,84,1237,8,84,1,85,1,85,1,85,1,85,5,85,1243,8,85,10,85,12,85,
	1246,9,85,1,85,1,85,3,85,1250,8,85,1,86,1,86,1,86,1,86,1,87,1,87,1,88,1,
	88,1,88,1,88,1,88,1,88,3,88,1264,8,88,1,88,3,88,1267,8,88,3,88,1269,8,88,
	1,89,1,89,1,89,3,89,1274,8,89,1,90,1,90,1,90,1,90,1,90,1,90,1,91,3,91,1283,
	8,91,1,91,1,91,1,91,1,92,1,92,1,92,3,92,1291,8,92,1,93,1,93,1,93,1,93,1,
	93,1,93,4,93,1299,8,93,11,93,12,93,1300,1,93,1,93,1,93,1,93,3,93,1307,8,
	93,1,93,1,93,1,93,1,93,1,93,1,93,4,93,1315,8,93,11,93,12,93,1316,1,93,1,
	93,1,93,1,93,3,93,1323,8,93,1,93,1,93,1,93,1,93,1,93,1,93,4,93,1331,8,93,
	11,93,12,93,1332,3,93,1335,8,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,
	1,94,1,94,1,94,1,94,1,94,1,94,1,94,3,94,1352,8,94,1,95,1,95,1,95,3,95,1357,
	8,95,1,96,1,96,1,97,1,97,1,97,3,97,1364,8,97,1,98,4,98,1367,8,98,11,98,
	12,98,1368,1,99,1,99,1,100,1,100,1,100,3,100,1376,8,100,1,100,1,100,1,100,
	1,100,1,100,1,100,4,100,1384,8,100,11,100,12,100,1385,1,101,1,101,1,101,
	3,101,1391,8,101,1,102,1,102,1,102,3,102,1396,8,102,1,103,1,103,1,103,3,
	103,1401,8,103,1,104,1,104,1,104,1,104,5,104,1407,8,104,10,104,12,104,1410,
	9,104,1,105,1,105,1,105,1,105,5,105,1416,8,105,10,105,12,105,1419,9,105,
	1,106,1,106,4,106,1423,8,106,11,106,12,106,1424,1,106,3,106,1428,8,106,
	1,107,1,107,4,107,1432,8,107,11,107,12,107,1433,1,107,3,107,1437,8,107,
	1,108,1,108,1,108,1,108,1,109,1,109,1,110,3,110,1446,8,110,1,110,1,110,
	1,111,3,111,1451,8,111,1,111,3,111,1454,8,111,1,111,4,111,1457,8,111,11,
	111,12,111,1458,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,3,113,1469,
	8,113,3,113,1471,8,113,1,114,1,114,3,114,1475,8,114,1,115,1,115,1,115,1,
	115,1,115,3,115,1482,8,115,1,116,1,116,1,117,3,117,1487,8,117,1,117,1,117,
	3,117,1491,8,117,1,117,1,117,1,118,1,118,1,119,3,119,1498,8,119,1,119,1,
	119,1,119,1,119,1,119,1,120,1,120,1,120,1,121,1,121,1,121,1,122,1,122,1,
	122,1,123,1,123,1,123,1,123,1,123,1,123,4,123,1520,8,123,11,123,12,123,
	1521,1,124,1,124,1,124,1,124,1,124,1,124,3,124,1530,8,124,1,125,1,125,1,
	126,1,126,3,126,1536,8,126,1,126,1,126,1,126,1,126,1,126,3,126,1543,8,126,
	1,126,1,126,1,126,1,126,1,126,1,126,1,126,3,126,1552,8,126,1,127,1,127,
	1,127,1,127,3,127,1558,8,127,1,127,1,127,1,127,1,127,1,127,4,127,1565,8,
	127,11,127,12,127,1566,1,128,1,128,1,129,1,129,1,130,1,130,1,131,1,131,
	1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
	1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
	1,133,1,133,3,133,1603,8,133,1,134,1,134,5,134,1607,8,134,10,134,12,134,
	1610,9,134,1,134,1,134,1,135,3,135,1615,8,135,1,135,1,135,1,135,1,135,1,
	136,1,136,1,136,3,136,1624,8,136,1,136,1,136,5,136,1628,8,136,10,136,12,
	136,1631,9,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,
	137,1,137,1,137,1,137,3,137,1646,8,137,1,138,1,138,1,138,1,138,1,138,1,
	138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,3,138,1661,8,138,1,139,1,
	139,1,139,3,139,1666,8,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,
	140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,
	140,1,140,1,140,1,140,1,140,1,140,5,140,1693,8,140,10,140,12,140,1696,9,
	140,1,140,1,140,1,140,1,140,1,140,3,140,1703,8,140,1,140,1,140,1,140,3,
	140,1708,8,140,1,140,1,140,3,140,1712,8,140,1,141,1,141,1,141,1,141,3,141,
	1718,8,141,1,141,1,141,1,141,3,141,1723,8,141,1,142,1,142,1,143,3,143,1728,
	8,143,1,143,1,143,1,143,1,143,3,143,1734,8,143,1,144,1,144,1,145,1,145,
	1,145,1,145,5,145,1742,8,145,10,145,12,145,1745,9,145,1,146,1,146,1,147,
	1,147,1,147,1,147,5,147,1753,8,147,10,147,12,147,1756,9,147,1,148,1,148,
	1,149,1,149,1,149,1,149,5,149,1764,8,149,10,149,12,149,1767,9,149,1,150,
	1,150,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
	1,151,1,151,3,151,1784,8,151,1,151,1,151,1,151,1,151,1,151,1,151,3,151,
	1792,8,151,1,151,1,151,1,151,1,151,5,151,1798,8,151,10,151,12,151,1801,
	9,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
	1,151,3,151,1815,8,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
	1,151,3,151,1826,8,151,1,151,3,151,1829,8,151,1,151,1,151,1,151,1,151,1,
	151,1,151,1,151,1,151,1,151,5,151,1840,8,151,10,151,12,151,1843,9,151,1,
	151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,
	151,1,151,5,151,1859,8,151,10,151,12,151,1862,9,151,1,151,1,151,1,151,1,
	151,1,151,1,151,1,151,1,151,1,151,1,151,5,151,1874,8,151,10,151,12,151,
	1877,9,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
	1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
	1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
	1,151,1,151,1,151,1,151,1,151,1,151,1,151,5,151,1920,8,151,10,151,12,151,
	1923,9,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,5,151,1932,8,151,10,
	151,12,151,1935,9,151,1,151,1,151,1,151,1,151,1,151,1,151,3,151,1943,8,
	151,1,151,1,151,1,151,1,151,1,151,3,151,1950,8,151,1,151,1,151,3,151,1954,
	8,151,1,151,3,151,1957,8,151,1,151,1,151,1,151,4,151,1962,8,151,11,151,
	12,151,1963,1,151,1,151,1,151,3,151,1969,8,151,1,151,1,151,1,151,1,151,
	1,151,3,151,1976,8,151,1,151,4,151,1979,8,151,11,151,12,151,1980,1,151,
	1,151,1,151,1,151,1,151,3,151,1988,8,151,1,151,1,151,3,151,1992,8,151,1,
	151,1,151,1,151,3,151,1997,8,151,1,151,1,151,3,151,2001,8,151,1,151,1,151,
	3,151,2005,8,151,1,151,1,151,1,151,1,151,1,151,3,151,2012,8,151,1,151,1,
	151,3,151,2016,8,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,
	151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,3,151,2036,8,
	151,1,151,1,151,1,151,4,151,2041,8,151,11,151,12,151,2042,1,151,1,151,1,
	151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,5,151,2058,
	8,151,10,151,12,151,2061,9,151,1,152,1,152,1,152,1,152,1,152,1,153,1,153,
	1,153,1,153,1,153,1,153,3,153,2074,8,153,1,154,1,154,1,154,1,155,1,155,
	1,155,1,156,1,156,1,156,3,156,2085,8,156,1,157,1,157,1,157,1,158,1,158,
	1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,
	1,158,1,158,3,158,2106,8,158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
	1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,3,159,2124,8,159,
	1,160,1,160,1,160,1,160,3,160,2130,8,160,1,161,1,161,1,161,1,161,1,161,
	1,161,3,161,2138,8,161,1,162,1,162,1,163,1,163,1,163,1,163,3,163,2146,8,
	163,1,163,1,163,1,163,1,163,3,163,2152,8,163,1,164,1,164,1,164,1,164,3,
	164,2158,8,164,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,166,1,166,1,
	166,1,166,1,166,1,166,1,166,5,166,2174,8,166,10,166,12,166,2177,9,166,1,
	166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,
	167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,
	167,1,167,1,167,1,167,1,167,1,167,3,167,2209,8,167,1,168,1,168,1,168,1,
	168,1,168,1,168,1,168,1,168,3,168,2219,8,168,1,169,1,169,4,169,2223,8,169,
	11,169,12,169,2224,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,
	1,170,1,170,1,170,3,170,2239,8,170,1,171,1,171,1,171,1,171,4,171,2245,8,
	171,11,171,12,171,2246,1,171,3,171,2250,8,171,1,171,3,171,2253,8,171,1,
	172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,173,3,173,2264,8,173,1,
	173,3,173,2267,8,173,1,174,1,174,1,175,1,175,1,175,3,175,2274,8,175,1,176,
	1,176,5,176,2278,8,176,10,176,12,176,2281,9,176,1,177,1,177,1,177,3,177,
	2286,8,177,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
	1,178,1,178,1,178,1,178,3,178,2302,8,178,1,179,1,179,1,179,3,179,2307,8,
	179,1,179,0,1,302,180,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
	36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
	84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,
	124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,
	160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,
	196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,
	232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,
	268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,
	304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,
	340,342,344,346,348,350,352,354,356,358,0,54,1,0,290,290,2,0,103,103,106,
	106,2,0,106,106,112,112,2,0,197,197,208,208,3,0,65,66,77,77,79,79,1,0,81,
	84,3,0,205,205,208,208,210,210,4,0,112,112,205,205,208,208,210,210,12,0,
	139,139,141,141,169,169,201,201,209,209,213,213,222,222,224,224,226,226,
	234,234,237,237,241,241,18,0,89,89,103,103,106,106,117,117,125,125,154,
	154,183,183,194,195,198,199,202,203,214,221,225,225,227,227,231,232,235,
	236,243,244,246,246,262,262,17,0,89,89,103,103,117,117,125,125,154,154,
	183,183,194,195,198,199,202,203,214,221,225,225,227,227,231,232,235,236,
	243,244,246,246,262,262,7,0,202,203,214,215,217,218,220,221,231,232,235,
	236,243,244,1,0,156,157,2,0,3,3,161,161,2,0,172,173,176,176,2,0,205,205,
	210,210,6,0,130,130,219,221,231,232,235,236,246,250,253,262,1,0,180,182,
	2,0,183,183,262,262,2,0,183,183,262,263,4,0,28,28,88,93,95,99,276,276,2,
	0,141,141,233,233,2,0,44,45,121,121,6,0,45,47,49,49,121,121,124,124,126,
	126,134,135,9,0,139,139,169,169,201,201,209,209,213,213,224,224,226,226,
	234,234,241,241,3,0,205,205,210,210,245,245,1,0,238,239,1,0,150,151,4,0,
	194,195,198,199,208,208,263,263,2,0,279,279,289,289,3,0,279,280,284,284,
	289,289,2,0,204,204,207,207,1,0,112,114,2,0,102,102,112,112,1,0,146,147,
	1,0,51,56,1,0,51,52,2,0,51,52,61,64,2,0,209,209,222,222,3,0,44,45,51,51,
	121,121,12,0,22,25,39,40,44,64,106,106,118,118,121,121,124,124,126,127,
	133,133,135,135,213,213,251,252,3,0,130,130,136,136,145,145,2,0,119,120,
	129,129,2,0,140,140,283,283,2,0,130,130,136,136,2,0,214,214,217,217,3,0,
	131,132,137,138,148,148,2,0,184,184,186,186,2,0,65,68,77,80,2,0,122,122,
	128,128,4,0,69,69,71,71,73,73,75,75,4,0,70,70,72,72,74,74,76,76,1,0,273,
	274,2,0,190,190,193,193,2564,0,368,1,0,0,0,2,379,1,0,0,0,4,381,1,0,0,0,
	6,388,1,0,0,0,8,395,1,0,0,0,10,411,1,0,0,0,12,431,1,0,0,0,14,447,1,0,0,
	0,16,450,1,0,0,0,18,463,1,0,0,0,20,498,1,0,0,0,22,500,1,0,0,0,24,505,1,
	0,0,0,26,515,1,0,0,0,28,523,1,0,0,0,30,527,1,0,0,0,32,529,1,0,0,0,34,531,
	1,0,0,0,36,533,1,0,0,0,38,592,1,0,0,0,40,651,1,0,0,0,42,655,1,0,0,0,44,
	705,1,0,0,0,46,707,1,0,0,0,48,716,1,0,0,0,50,725,1,0,0,0,52,734,1,0,0,0,
	54,736,1,0,0,0,56,738,1,0,0,0,58,740,1,0,0,0,60,742,1,0,0,0,62,764,1,0,
	0,0,64,773,1,0,0,0,66,782,1,0,0,0,68,812,1,0,0,0,70,814,1,0,0,0,72,821,
	1,0,0,0,74,828,1,0,0,0,76,830,1,0,0,0,78,837,1,0,0,0,80,839,1,0,0,0,82,
	842,1,0,0,0,84,852,1,0,0,0,86,868,1,0,0,0,88,870,1,0,0,0,90,876,1,0,0,0,
	92,878,1,0,0,0,94,880,1,0,0,0,96,888,1,0,0,0,98,908,1,0,0,0,100,920,1,0,
	0,0,102,934,1,0,0,0,104,936,1,0,0,0,106,944,1,0,0,0,108,949,1,0,0,0,110,
	969,1,0,0,0,112,971,1,0,0,0,114,975,1,0,0,0,116,977,1,0,0,0,118,979,1,0,
	0,0,120,998,1,0,0,0,122,1009,1,0,0,0,124,1029,1,0,0,0,126,1046,1,0,0,0,
	128,1048,1,0,0,0,130,1064,1,0,0,0,132,1069,1,0,0,0,134,1073,1,0,0,0,136,
	1075,1,0,0,0,138,1085,1,0,0,0,140,1097,1,0,0,0,142,1108,1,0,0,0,144,1129,
	1,0,0,0,146,1131,1,0,0,0,148,1143,1,0,0,0,150,1147,1,0,0,0,152,1189,1,0,
	0,0,154,1191,1,0,0,0,156,1193,1,0,0,0,158,1206,1,0,0,0,160,1211,1,0,0,0,
	162,1220,1,0,0,0,164,1224,1,0,0,0,166,1226,1,0,0,0,168,1228,1,0,0,0,170,
	1238,1,0,0,0,172,1251,1,0,0,0,174,1255,1,0,0,0,176,1257,1,0,0,0,178,1270,
	1,0,0,0,180,1275,1,0,0,0,182,1282,1,0,0,0,184,1287,1,0,0,0,186,1334,1,0,
	0,0,188,1351,1,0,0,0,190,1353,1,0,0,0,192,1358,1,0,0,0,194,1363,1,0,0,0,
	196,1366,1,0,0,0,198,1370,1,0,0,0,200,1375,1,0,0,0,202,1387,1,0,0,0,204,
	1392,1,0,0,0,206,1397,1,0,0,0,208,1402,1,0,0,0,210,1411,1,0,0,0,212,1427,
	1,0,0,0,214,1436,1,0,0,0,216,1438,1,0,0,0,218,1442,1,0,0,0,220,1445,1,0,
	0,0,222,1450,1,0,0,0,224,1460,1,0,0,0,226,1470,1,0,0,0,228,1474,1,0,0,0,
	230,1481,1,0,0,0,232,1483,1,0,0,0,234,1486,1,0,0,0,236,1494,1,0,0,0,238,
	1497,1,0,0,0,240,1504,1,0,0,0,242,1507,1,0,0,0,244,1510,1,0,0,0,246,1513,
	1,0,0,0,248,1529,1,0,0,0,250,1531,1,0,0,0,252,1551,1,0,0,0,254,1557,1,0,
	0,0,256,1568,1,0,0,0,258,1570,1,0,0,0,260,1572,1,0,0,0,262,1574,1,0,0,0,
	264,1576,1,0,0,0,266,1602,1,0,0,0,268,1604,1,0,0,0,270,1614,1,0,0,0,272,
	1620,1,0,0,0,274,1645,1,0,0,0,276,1660,1,0,0,0,278,1662,1,0,0,0,280,1711,
	1,0,0,0,282,1722,1,0,0,0,284,1724,1,0,0,0,286,1727,1,0,0,0,288,1735,1,0,
	0,0,290,1737,1,0,0,0,292,1746,1,0,0,0,294,1748,1,0,0,0,296,1757,1,0,0,0,
	298,1759,1,0,0,0,300,1768,1,0,0,0,302,2035,1,0,0,0,304,2062,1,0,0,0,306,
	2073,1,0,0,0,308,2075,1,0,0,0,310,2078,1,0,0,0,312,2084,1,0,0,0,314,2086,
	1,0,0,0,316,2105,1,0,0,0,318,2123,1,0,0,0,320,2129,1,0,0,0,322,2137,1,0,
	0,0,324,2139,1,0,0,0,326,2151,1,0,0,0,328,2153,1,0,0,0,330,2159,1,0,0,0,
	332,2166,1,0,0,0,334,2208,1,0,0,0,336,2218,1,0,0,0,338,2222,1,0,0,0,340,
	2238,1,0,0,0,342,2240,1,0,0,0,344,2254,1,0,0,0,346,2256,1,0,0,0,348,2268,
	1,0,0,0,350,2270,1,0,0,0,352,2275,1,0,0,0,354,2282,1,0,0,0,356,2301,1,0,
	0,0,358,2303,1,0,0,0,360,367,3,2,1,0,361,367,3,136,68,0,362,367,3,140,70,
	0,363,367,3,4,2,0,364,367,3,176,88,0,365,367,3,94,47,0,366,360,1,0,0,0,
	366,361,1,0,0,0,366,362,1,0,0,0,366,363,1,0,0,0,366,364,1,0,0,0,366,365,
	1,0,0,0,367,370,1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,371,1,0,0,0,
	370,368,1,0,0,0,371,372,5,0,0,1,372,1,1,0,0,0,373,380,3,60,30,0,374,380,
	3,84,42,0,375,380,3,118,59,0,376,380,3,108,54,0,377,380,3,126,63,0,378,
	380,3,342,171,0,379,373,1,0,0,0,379,374,1,0,0,0,379,375,1,0,0,0,379,376,
	1,0,0,0,379,377,1,0,0,0,379,378,1,0,0,0,380,3,1,0,0,0,381,382,5,91,0,0,
	382,384,3,46,23,0,383,385,3,146,73,0,384,383,1,0,0,0,384,385,1,0,0,0,385,
	386,1,0,0,0,386,387,3,6,3,0,387,5,1,0,0,0,388,389,3,8,4,0,389,391,3,10,
	5,0,390,392,3,12,6,0,391,390,1,0,0,0,392,393,1,0,0,0,393,391,1,0,0,0,393,
	394,1,0,0,0,394,7,1,0,0,0,395,397,5,290,0,0,396,398,5,290,0,0,397,396,1,
	0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,399,404,3,16,8,0,400,401,5,290,0,
	0,401,403,3,16,8,0,402,400,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,
	405,1,0,0,0,405,408,1,0,0,0,406,404,1,0,0,0,407,409,5,290,0,0,408,407,1,
	0,0,0,408,409,1,0,0,0,409,9,1,0,0,0,410,412,5,290,0,0,411,410,1,0,0,0,411,
	412,1,0,0,0,412,421,1,0,0,0,413,415,5,289,0,0,414,413,1,0,0,0,415,416,1,
	0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,419,1,0,0,0,418,420,5,290,0,0,
	419,418,1,0,0,0,419,420,1,0,0,0,420,422,1,0,0,0,421,414,1,0,0,0,422,423,
	1,0,0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,428,1,0,0,0,425,427,5,289,0,
	0,426,425,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,11,
	1,0,0,0,430,428,1,0,0,0,431,432,5,290,0,0,432,433,5,263,0,0,433,434,5,290,
	0,0,434,439,3,14,7,0,435,436,5,290,0,0,436,438,3,14,7,0,437,435,1,0,0,0,
	438,441,1,0,0,0,439,437,1,0,0,0,439,440,1,0,0,0,440,443,1,0,0,0,441,439,
	1,0,0,0,442,444,5,290,0,0,443,442,1,0,0,0,443,444,1,0,0,0,444,13,1,0,0,
	0,445,448,3,274,137,0,446,448,5,291,0,0,447,445,1,0,0,0,447,446,1,0,0,0,
	448,15,1,0,0,0,449,451,8,0,0,0,450,449,1,0,0,0,451,452,1,0,0,0,452,450,
	1,0,0,0,452,453,1,0,0,0,453,17,1,0,0,0,454,455,3,22,11,0,455,456,5,9,0,
	0,456,457,5,0,0,1,457,464,1,0,0,0,458,459,3,204,102,0,459,460,7,1,0,0,460,
	461,3,220,110,0,461,462,5,0,0,1,462,464,1,0,0,0,463,454,1,0,0,0,463,458,
	1,0,0,0,464,19,1,0,0,0,465,466,5,104,0,0,466,467,3,22,11,0,467,468,7,2,
	0,0,468,469,7,3,0,0,469,470,3,220,110,0,470,471,5,0,0,1,471,499,1,0,0,0,
	472,473,5,104,0,0,473,474,3,22,11,0,474,475,7,4,0,0,475,476,5,0,0,1,476,
	499,1,0,0,0,477,478,5,104,0,0,478,479,3,22,11,0,479,480,7,5,0,0,480,481,
	5,263,0,0,481,482,5,160,0,0,482,483,5,0,0,1,483,499,1,0,0,0,484,485,5,104,
	0,0,485,486,3,22,11,0,486,487,3,288,144,0,487,488,5,0,0,1,488,499,1,0,0,
	0,489,490,5,104,0,0,490,492,3,204,102,0,491,493,7,6,0,0,492,491,1,0,0,0,
	492,493,1,0,0,0,493,494,1,0,0,0,494,495,3,220,110,0,495,496,5,103,0,0,496,
	497,5,0,0,1,497,499,1,0,0,0,498,465,1,0,0,0,498,472,1,0,0,0,498,477,1,0,
	0,0,498,484,1,0,0,0,498,489,1,0,0,0,499,21,1,0,0,0,500,503,3,24,12,0,501,
	502,5,237,0,0,502,504,3,204,102,0,503,501,1,0,0,0,503,504,1,0,0,0,504,23,
	1,0,0,0,505,511,3,26,13,0,506,507,3,30,15,0,507,508,3,28,14,0,508,510,1,
	0,0,0,509,506,1,0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,512,1,0,0,0,512,
	25,1,0,0,0,513,511,1,0,0,0,514,516,7,7,0,0,515,514,1,0,0,0,515,516,1,0,
	0,0,516,518,1,0,0,0,517,519,3,36,18,0,518,517,1,0,0,0,519,520,1,0,0,0,520,
	518,1,0,0,0,520,521,1,0,0,0,521,27,1,0,0,0,522,524,3,36,18,0,523,522,1,
	0,0,0,524,525,1,0,0,0,525,523,1,0,0,0,525,526,1,0,0,0,526,29,1,0,0,0,527,
	528,7,8,0,0,528,31,1,0,0,0,529,530,5,262,0,0,530,33,1,0,0,0,531,532,7,9,
	0,0,532,35,1,0,0,0,533,534,7,10,0,0,534,37,1,0,0,0,535,537,7,7,0,0,536,
	535,1,0,0,0,536,537,1,0,0,0,537,539,1,0,0,0,538,540,3,34,17,0,539,538,1,
	0,0,0,540,541,1,0,0,0,541,539,1,0,0,0,541,542,1,0,0,0,542,593,1,0,0,0,543,
	545,3,34,17,0,544,543,1,0,0,0,545,546,1,0,0,0,546,544,1,0,0,0,546,547,1,
	0,0,0,547,593,1,0,0,0,548,550,5,42,0,0,549,551,3,34,17,0,550,549,1,0,0,
	0,551,552,1,0,0,0,552,550,1,0,0,0,552,553,1,0,0,0,553,593,1,0,0,0,554,556,
	5,42,0,0,555,557,3,34,17,0,556,555,1,0,0,0,557,558,1,0,0,0,558,556,1,0,
	0,0,558,559,1,0,0,0,559,560,1,0,0,0,560,562,5,169,0,0,561,563,3,34,17,0,
	562,561,1,0,0,0,563,564,1,0,0,0,564,562,1,0,0,0,564,565,1,0,0,0,565,593,
	1,0,0,0,566,568,3,34,17,0,567,566,1,0,0,0,568,569,1,0,0,0,569,567,1,0,0,
	0,569,570,1,0,0,0,570,571,1,0,0,0,571,573,5,169,0,0,572,574,3,34,17,0,573,
	572,1,0,0,0,574,575,1,0,0,0,575,573,1,0,0,0,575,576,1,0,0,0,576,593,1,0,
	0,0,577,579,5,133,0,0,578,580,3,34,17,0,579,578,1,0,0,0,580,581,1,0,0,0,
	581,579,1,0,0,0,581,582,1,0,0,0,582,593,1,0,0,0,583,584,5,210,0,0,584,585,
	5,183,0,0,585,586,5,203,0,0,586,588,5,213,0,0,587,589,3,34,17,0,588,587,
	1,0,0,0,589,590,1,0,0,0,590,588,1,0,0,0,590,591,1,0,0,0,591,593,1,0,0,0,
	592,536,1,0,0,0,592,544,1,0,0,0,592,548,1,0,0,0,592,554,1,0,0,0,592,567,
	1,0,0,0,592,577,1,0,0,0,592,583,1,0,0,0,593,39,1,0,0,0,594,596,7,7,0,0,
	595,594,1,0,0,0,595,596,1,0,0,0,596,598,1,0,0,0,597,599,3,42,21,0,598,597,
	1,0,0,0,599,600,1,0,0,0,600,598,1,0,0,0,600,601,1,0,0,0,601,652,1,0,0,0,
	602,604,3,42,21,0,603,602,1,0,0,0,604,605,1,0,0,0,605,603,1,0,0,0,605,606,
	1,0,0,0,606,652,1,0,0,0,607,609,5,42,0,0,608,610,3,42,21,0,609,608,1,0,
	0,0,610,611,1,0,0,0,611,609,1,0,0,0,611,612,1,0,0,0,612,652,1,0,0,0,613,
	615,5,42,0,0,614,616,3,42,21,0,615,614,1,0,0,0,616,617,1,0,0,0,617,615,
	1,0,0,0,617,618,1,0,0,0,618,619,1,0,0,0,619,621,5,169,0,0,620,622,3,42,
	21,0,621,620,1,0,0,0,622,623,1,0,0,0,623,621,1,0,0,0,623,624,1,0,0,0,624,
	652,1,0,0,0,625,627,3,42,21,0,626,625,1,0,0,0,627,628,1,0,0,0,628,626,1,
	0,0,0,628,629,1,0,0,0,629,630,1,0,0,0,630,632,5,169,0,0,631,633,3,42,21,
	0,632,631,1,0,0,0,633,634,1,0,0,0,634,632,1,0,0,0,634,635,1,0,0,0,635,652,
	1,0,0,0,636,638,5,133,0,0,637,639,3,42,21,0,638,637,1,0,0,0,639,640,1,0,
	0,0,640,638,1,0,0,0,640,641,1,0,0,0,641,652,1,0,0,0,642,643,5,210,0,0,643,
	644,5,183,0,0,644,645,5,203,0,0,645,647,5,213,0,0,646,648,3,42,21,0,647,
	646,1,0,0,0,648,649,1,0,0,0,649,647,1,0,0,0,649,650,1,0,0,0,650,652,1,0,
	0,0,651,595,1,0,0,0,651,603,1,0,0,0,651,607,1,0,0,0,651,613,1,0,0,0,651,
	626,1,0,0,0,651,636,1,0,0,0,651,642,1,0,0,0,652,41,1,0,0,0,653,656,3,34,
	17,0,654,656,5,263,0,0,655,653,1,0,0,0,655,654,1,0,0,0,656,43,1,0,0,0,657,
	659,7,7,0,0,658,657,1,0,0,0,658,659,1,0,0,0,659,661,1,0,0,0,660,662,3,36,
	18,0,661,660,1,0,0,0,662,663,1,0,0,0,663,661,1,0,0,0,663,664,1,0,0,0,664,
	706,1,0,0,0,665,667,3,36,18,0,666,665,1,0,0,0,667,668,1,0,0,0,668,666,1,
	0,0,0,668,669,1,0,0,0,669,706,1,0,0,0,670,672,5,42,0,0,671,673,3,36,18,
	0,672,671,1,0,0,0,673,674,1,0,0,0,674,672,1,0,0,0,674,675,1,0,0,0,675,706,
	1,0,0,0,676,678,5,42,0,0,677,679,3,36,18,0,678,677,1,0,0,0,679,680,1,0,
	0,0,680,678,1,0,0,0,680,681,1,0,0,0,681,682,1,0,0,0,682,684,5,169,0,0,683,
	685,3,36,18,0,684,683,1,0,0,0,685,686,1,0,0,0,686,684,1,0,0,0,686,687,1,
	0,0,0,687,706,1,0,0,0,688,690,3,36,18,0,689,688,1,0,0,0,690,691,1,0,0,0,
	691,689,1,0,0,0,691,692,1,0,0,0,692,693,1,0,0,0,693,695,5,169,0,0,694,696,
	3,36,18,0,695,694,1,0,0,0,696,697,1,0,0,0,697,695,1,0,0,0,697,698,1,0,0,
	0,698,706,1,0,0,0,699,701,5,133,0,0,700,702,3,36,18,0,701,700,1,0,0,0,702,
	703,1,0,0,0,703,701,1,0,0,0,703,704,1,0,0,0,704,706,1,0,0,0,705,658,1,0,
	0,0,705,666,1,0,0,0,705,670,1,0,0,0,705,676,1,0,0,0,705,689,1,0,0,0,705,
	699,1,0,0,0,706,45,1,0,0,0,707,713,3,38,19,0,708,709,3,52,26,0,709,710,
	3,38,19,0,710,712,1,0,0,0,711,708,1,0,0,0,712,715,1,0,0,0,713,711,1,0,0,
	0,713,714,1,0,0,0,714,47,1,0,0,0,715,713,1,0,0,0,716,722,3,40,20,0,717,
	718,3,52,26,0,718,719,3,40,20,0,719,721,1,0,0,0,720,717,1,0,0,0,721,724,
	1,0,0,0,722,720,1,0,0,0,722,723,1,0,0,0,723,49,1,0,0,0,724,722,1,0,0,0,
	725,731,3,44,22,0,726,727,3,52,26,0,727,728,3,44,22,0,728,730,1,0,0,0,729,
	726,1,0,0,0,730,733,1,0,0,0,731,729,1,0,0,0,731,732,1,0,0,0,732,51,1,0,
	0,0,733,731,1,0,0,0,734,735,7,8,0,0,735,53,1,0,0,0,736,737,5,265,0,0,737,
	55,1,0,0,0,738,739,5,262,0,0,739,57,1,0,0,0,740,741,7,11,0,0,741,59,1,0,
	0,0,742,743,5,92,0,0,743,751,3,50,25,0,744,746,5,171,0,0,745,747,5,262,
	0,0,746,745,1,0,0,0,747,748,1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,749,
	750,1,0,0,0,750,752,5,270,0,0,751,744,1,0,0,0,751,752,1,0,0,0,752,754,1,
	0,0,0,753,755,5,158,0,0,754,753,1,0,0,0,754,755,1,0,0,0,755,759,1,0,0,0,
	756,758,3,62,31,0,757,756,1,0,0,0,758,761,1,0,0,0,759,757,1,0,0,0,759,760,
	1,0,0,0,760,61,1,0,0,0,761,759,1,0,0,0,762,765,3,64,32,0,763,765,3,66,33,
	0,764,762,1,0,0,0,764,763,1,0,0,0,765,766,1,0,0,0,766,767,5,276,0,0,767,
	63,1,0,0,0,768,770,5,106,0,0,769,768,1,0,0,0,769,770,1,0,0,0,770,771,1,
	0,0,0,771,774,3,32,16,0,772,774,3,48,24,0,773,769,1,0,0,0,773,772,1,0,0,
	0,774,775,1,0,0,0,775,777,5,167,0,0,776,778,7,12,0,0,777,776,1,0,0,0,777,
	778,1,0,0,0,778,780,1,0,0,0,779,781,3,114,57,0,780,779,1,0,0,0,780,781,
	1,0,0,0,781,65,1,0,0,0,782,786,3,48,24,0,783,787,3,68,34,0,784,787,3,90,
	45,0,785,787,3,92,46,0,786,783,1,0,0,0,786,784,1,0,0,0,786,785,1,0,0,0,
	787,790,1,0,0,0,788,789,5,170,0,0,789,791,3,102,51,0,790,788,1,0,0,0,790,
	791,1,0,0,0,791,801,1,0,0,0,792,793,5,164,0,0,793,798,3,116,58,0,794,795,
	5,209,0,0,795,797,3,116,58,0,796,794,1,0,0,0,797,800,1,0,0,0,798,796,1,
	0,0,0,798,799,1,0,0,0,799,802,1,0,0,0,800,798,1,0,0,0,801,792,1,0,0,0,801,
	802,1,0,0,0,802,804,1,0,0,0,803,805,3,114,57,0,804,803,1,0,0,0,804,805,
	1,0,0,0,805,67,1,0,0,0,806,813,3,72,36,0,807,813,3,74,37,0,808,813,3,78,
	39,0,809,813,3,80,40,0,810,813,3,70,35,0,811,813,3,76,38,0,812,806,1,0,
	0,0,812,807,1,0,0,0,812,808,1,0,0,0,812,809,1,0,0,0,812,810,1,0,0,0,812,
	811,1,0,0,0,813,69,1,0,0,0,814,815,5,94,0,0,815,819,5,237,0,0,816,820,3,
	68,34,0,817,820,3,90,45,0,818,820,3,92,46,0,819,816,1,0,0,0,819,817,1,0,
	0,0,819,818,1,0,0,0,820,71,1,0,0,0,821,826,5,174,0,0,822,823,5,269,0,0,
	823,824,3,82,41,0,824,825,5,270,0,0,825,827,1,0,0,0,826,822,1,0,0,0,826,
	827,1,0,0,0,827,73,1,0,0,0,828,829,5,179,0,0,829,75,1,0,0,0,830,835,5,175,
	0,0,831,832,5,269,0,0,832,833,3,82,41,0,833,834,5,270,0,0,834,836,1,0,0,
	0,835,831,1,0,0,0,835,836,1,0,0,0,836,77,1,0,0,0,837,838,5,159,0,0,838,
	79,1,0,0,0,839,840,7,13,0,0,840,81,1,0,0,0,841,843,7,14,0,0,842,841,1,0,
	0,0,842,843,1,0,0,0,843,850,1,0,0,0,844,851,5,165,0,0,845,846,5,166,0,0,
	846,847,5,169,0,0,847,848,5,263,0,0,848,851,5,162,0,0,849,851,5,166,0,0,
	850,844,1,0,0,0,850,845,1,0,0,0,850,849,1,0,0,0,851,83,1,0,0,0,852,853,
	5,93,0,0,853,854,5,262,0,0,854,855,5,29,0,0,855,858,3,86,43,0,856,857,5,
	170,0,0,857,859,3,102,51,0,858,856,1,0,0,0,858,859,1,0,0,0,859,861,1,0,
	0,0,860,862,5,276,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,85,1,0,0,0,863,
	869,3,88,44,0,864,869,3,72,36,0,865,869,3,74,37,0,866,869,3,78,39,0,867,
	869,3,80,40,0,868,863,1,0,0,0,868,864,1,0,0,0,868,865,1,0,0,0,868,866,1,
	0,0,0,868,867,1,0,0,0,869,87,1,0,0,0,870,872,5,163,0,0,871,873,5,268,0,
	0,872,871,1,0,0,0,873,874,1,0,0,0,874,872,1,0,0,0,874,875,1,0,0,0,875,89,
	1,0,0,0,876,877,5,262,0,0,877,91,1,0,0,0,878,879,5,262,0,0,879,93,1,0,0,
	0,880,881,5,96,0,0,881,885,3,32,16,0,882,884,3,96,48,0,883,882,1,0,0,0,
	884,887,1,0,0,0,885,883,1,0,0,0,885,886,1,0,0,0,886,95,1,0,0,0,887,885,
	1,0,0,0,888,889,7,15,0,0,889,894,3,100,50,0,890,891,5,171,0,0,891,892,3,
	100,50,0,892,893,5,270,0,0,893,895,1,0,0,0,894,890,1,0,0,0,894,895,1,0,
	0,0,895,896,1,0,0,0,896,898,3,100,50,0,897,899,3,100,50,0,898,897,1,0,0,
	0,898,899,1,0,0,0,899,906,1,0,0,0,900,902,5,264,0,0,901,903,5,277,0,0,902,
	901,1,0,0,0,902,903,1,0,0,0,903,904,1,0,0,0,904,905,5,263,0,0,905,907,3,
	100,50,0,906,900,1,0,0,0,906,907,1,0,0,0,907,97,1,0,0,0,908,909,7,16,0,
	0,909,99,1,0,0,0,910,921,3,98,49,0,911,921,5,202,0,0,912,921,5,203,0,0,
	913,921,5,217,0,0,914,921,5,218,0,0,915,921,5,214,0,0,916,921,5,215,0,0,
	917,921,5,243,0,0,918,921,5,244,0,0,919,921,5,216,0,0,920,910,1,0,0,0,920,
	911,1,0,0,0,920,912,1,0,0,0,920,913,1,0,0,0,920,914,1,0,0,0,920,915,1,0,
	0,0,920,916,1,0,0,0,920,917,1,0,0,0,920,918,1,0,0,0,920,919,1,0,0,0,921,
	101,1,0,0,0,922,927,3,104,52,0,923,924,5,277,0,0,924,926,3,104,52,0,925,
	923,1,0,0,0,926,929,1,0,0,0,927,925,1,0,0,0,927,928,1,0,0,0,928,935,1,0,
	0,0,929,927,1,0,0,0,930,935,5,263,0,0,931,935,5,278,0,0,932,935,5,259,0,
	0,933,935,5,260,0,0,934,922,1,0,0,0,934,930,1,0,0,0,934,931,1,0,0,0,934,
	932,1,0,0,0,934,933,1,0,0,0,935,103,1,0,0,0,936,941,3,106,53,0,937,938,
	5,280,0,0,938,940,3,106,53,0,939,937,1,0,0,0,940,943,1,0,0,0,941,939,1,
	0,0,0,941,942,1,0,0,0,942,105,1,0,0,0,943,941,1,0,0,0,944,947,3,98,49,0,
	945,946,5,283,0,0,946,948,5,263,0,0,947,945,1,0,0,0,947,948,1,0,0,0,948,
	107,1,0,0,0,949,950,5,95,0,0,950,952,3,46,23,0,951,953,5,273,0,0,952,951,
	1,0,0,0,952,953,1,0,0,0,953,954,1,0,0,0,954,955,5,27,0,0,955,956,3,46,23,
	0,956,958,3,110,55,0,957,959,3,112,56,0,958,957,1,0,0,0,959,960,1,0,0,0,
	960,958,1,0,0,0,960,961,1,0,0,0,961,109,1,0,0,0,962,963,5,2,0,0,963,964,
	3,52,26,0,964,966,5,270,0,0,965,967,5,275,0,0,966,965,1,0,0,0,966,967,1,
	0,0,0,967,970,1,0,0,0,968,970,5,1,0,0,969,962,1,0,0,0,969,968,1,0,0,0,970,
	111,1,0,0,0,971,972,5,263,0,0,972,973,5,274,0,0,973,974,3,46,23,0,974,113,
	1,0,0,0,975,976,7,17,0,0,976,115,1,0,0,0,977,978,5,262,0,0,978,117,1,0,
	0,0,979,980,5,97,0,0,980,981,3,120,60,0,981,984,5,275,0,0,982,985,3,68,
	34,0,983,985,3,90,45,0,984,982,1,0,0,0,984,983,1,0,0,0,985,988,1,0,0,0,
	986,987,5,170,0,0,987,989,3,102,51,0,988,986,1,0,0,0,988,989,1,0,0,0,989,
	992,1,0,0,0,990,991,5,106,0,0,991,993,3,274,137,0,992,990,1,0,0,0,992,993,
	1,0,0,0,993,995,1,0,0,0,994,996,3,114,57,0,995,994,1,0,0,0,995,996,1,0,
	0,0,996,119,1,0,0,0,997,999,7,15,0,0,998,997,1,0,0,0,998,999,1,0,0,0,999,
	1000,1,0,0,0,1000,1006,3,122,61,0,1001,1002,3,52,26,0,1002,1003,3,122,61,
	0,1003,1005,1,0,0,0,1004,1001,1,0,0,0,1005,1008,1,0,0,0,1006,1004,1,0,0,
	0,1006,1007,1,0,0,0,1007,121,1,0,0,0,1008,1006,1,0,0,0,1009,1013,7,18,0,
	0,1010,1012,7,19,0,0,1011,1010,1,0,0,0,1012,1015,1,0,0,0,1013,1011,1,0,
	0,0,1013,1014,1,0,0,0,1014,123,1,0,0,0,1015,1013,1,0,0,0,1016,1018,7,15,
	0,0,1017,1016,1,0,0,0,1017,1018,1,0,0,0,1018,1019,1,0,0,0,1019,1025,3,122,
	61,0,1020,1021,3,52,26,0,1021,1022,3,122,61,0,1022,1024,1,0,0,0,1023,1020,
	1,0,0,0,1024,1027,1,0,0,0,1025,1023,1,0,0,0,1025,1026,1,0,0,0,1026,1030,
	1,0,0,0,1027,1025,1,0,0,0,1028,1030,3,46,23,0,1029,1017,1,0,0,0,1029,1028,
	1,0,0,0,1030,125,1,0,0,0,1031,1032,5,98,0,0,1032,1033,3,46,23,0,1033,1035,
	3,128,64,0,1034,1036,3,128,64,0,1035,1034,1,0,0,0,1036,1037,1,0,0,0,1037,
	1035,1,0,0,0,1037,1038,1,0,0,0,1038,1039,1,0,0,0,1039,1040,3,132,66,0,1040,
	1047,1,0,0,0,1041,1042,5,28,0,0,1042,1043,3,46,23,0,1043,1044,3,128,64,
	0,1044,1045,3,132,66,0,1045,1047,1,0,0,0,1046,1031,1,0,0,0,1046,1041,1,
	0,0,0,1047,127,1,0,0,0,1048,1049,7,15,0,0,1049,1054,3,130,65,0,1050,1051,
	5,171,0,0,1051,1052,3,46,23,0,1052,1053,5,270,0,0,1053,1055,1,0,0,0,1054,
	1050,1,0,0,0,1054,1055,1,0,0,0,1055,1056,1,0,0,0,1056,1058,5,286,0,0,1057,
	1059,5,262,0,0,1058,1057,1,0,0,0,1059,1060,1,0,0,0,1060,1058,1,0,0,0,1060,
	1061,1,0,0,0,1061,129,1,0,0,0,1062,1065,3,34,17,0,1063,1065,3,52,26,0,1064,
	1062,1,0,0,0,1064,1063,1,0,0,0,1065,1066,1,0,0,0,1066,1064,1,0,0,0,1066,
	1067,1,0,0,0,1067,131,1,0,0,0,1068,1070,3,134,67,0,1069,1068,1,0,0,0,1070,
	1071,1,0,0,0,1071,1069,1,0,0,0,1071,1072,1,0,0,0,1072,133,1,0,0,0,1073,
	1074,8,20,0,0,1074,135,1,0,0,0,1075,1076,5,89,0,0,1076,1078,3,142,71,0,
	1077,1079,5,263,0,0,1078,1077,1,0,0,0,1078,1079,1,0,0,0,1079,1081,1,0,0,
	0,1080,1082,3,138,69,0,1081,1080,1,0,0,0,1082,1083,1,0,0,0,1083,1081,1,
	0,0,0,1083,1084,1,0,0,0,1084,137,1,0,0,0,1085,1086,3,146,73,0,1086,1092,
	3,152,76,0,1087,1089,3,184,92,0,1088,1090,5,274,0,0,1089,1088,1,0,0,0,1089,
	1090,1,0,0,0,1090,1093,1,0,0,0,1091,1093,5,274,0,0,1092,1087,1,0,0,0,1092,
	1091,1,0,0,0,1092,1093,1,0,0,0,1093,1095,1,0,0,0,1094,1096,3,268,134,0,
	1095,1094,1,0,0,0,1095,1096,1,0,0,0,1096,139,1,0,0,0,1097,1098,5,90,0,0,
	1098,1100,3,46,23,0,1099,1101,5,105,0,0,1100,1099,1,0,0,0,1100,1101,1,0,
	0,0,1101,1104,1,0,0,0,1102,1105,3,136,68,0,1103,1105,3,176,88,0,1104,1102,
	1,0,0,0,1104,1103,1,0,0,0,1105,1106,1,0,0,0,1106,1104,1,0,0,0,1106,1107,
	1,0,0,0,1107,141,1,0,0,0,1108,1112,3,48,24,0,1109,1111,3,144,72,0,1110,
	1109,1,0,0,0,1111,1114,1,0,0,0,1112,1110,1,0,0,0,1112,1113,1,0,0,0,1113,
	143,1,0,0,0,1114,1112,1,0,0,0,1115,1130,5,191,0,0,1116,1117,5,273,0,0,1117,
	1130,3,48,24,0,1118,1119,5,273,0,0,1119,1120,5,169,0,0,1120,1130,3,48,24,
	0,1121,1122,5,209,0,0,1122,1130,3,48,24,0,1123,1124,5,106,0,0,1124,1130,
	3,48,24,0,1125,1126,5,197,0,0,1126,1127,3,48,24,0,1127,1128,5,106,0,0,1128,
	1130,1,0,0,0,1129,1115,1,0,0,0,1129,1116,1,0,0,0,1129,1118,1,0,0,0,1129,
	1121,1,0,0,0,1129,1123,1,0,0,0,1129,1125,1,0,0,0,1130,145,1,0,0,0,1131,
	1132,5,101,0,0,1132,1133,3,148,74,0,1133,147,1,0,0,0,1134,1144,5,200,0,
	0,1135,1136,5,143,0,0,1136,1139,3,150,75,0,1137,1138,7,21,0,0,1138,1140,
	3,150,75,0,1139,1137,1,0,0,0,1139,1140,1,0,0,0,1140,1144,1,0,0,0,1141,1142,
	7,21,0,0,1142,1144,3,150,75,0,1143,1134,1,0,0,0,1143,1135,1,0,0,0,1143,
	1141,1,0,0,0,1144,149,1,0,0,0,1145,1148,3,54,27,0,1146,1148,5,263,0,0,1147,
	1145,1,0,0,0,1147,1146,1,0,0,0,1148,151,1,0,0,0,1149,1150,5,208,0,0,1150,
	1151,5,202,0,0,1151,1152,5,106,0,0,1152,1153,5,208,0,0,1153,1190,3,46,23,
	0,1154,1161,3,216,108,0,1155,1156,5,8,0,0,1156,1162,3,274,137,0,1157,1158,
	5,9,0,0,1158,1162,3,274,137,0,1159,1160,5,10,0,0,1160,1162,3,274,137,0,
	1161,1155,1,0,0,0,1161,1157,1,0,0,0,1161,1159,1,0,0,0,1162,1164,1,0,0,0,
	1163,1165,3,312,156,0,1164,1163,1,0,0,0,1164,1165,1,0,0,0,1165,1190,1,0,
	0,0,1166,1167,3,216,108,0,1167,1168,5,107,0,0,1168,1169,3,154,77,0,1169,
	1170,3,274,137,0,1170,1190,1,0,0,0,1171,1190,3,156,78,0,1172,1190,3,168,
	84,0,1173,1174,3,204,102,0,1174,1175,5,103,0,0,1175,1176,7,15,0,0,1176,
	1177,3,46,23,0,1177,1178,5,169,0,0,1178,1179,3,218,109,0,1179,1180,7,22,
	0,0,1180,1181,3,274,137,0,1181,1190,1,0,0,0,1182,1183,3,204,102,0,1183,
	1184,7,1,0,0,1184,1186,3,220,110,0,1185,1187,3,312,156,0,1186,1185,1,0,
	0,0,1186,1187,1,0,0,0,1187,1190,1,0,0,0,1188,1190,3,346,173,0,1189,1149,
	1,0,0,0,1189,1154,1,0,0,0,1189,1166,1,0,0,0,1189,1171,1,0,0,0,1189,1172,
	1,0,0,0,1189,1173,1,0,0,0,1189,1182,1,0,0,0,1189,1188,1,0,0,0,1190,153,
	1,0,0,0,1191,1192,7,23,0,0,1192,155,1,0,0,0,1193,1194,5,208,0,0,1194,1195,
	3,158,79,0,1195,1196,5,237,0,0,1196,1197,5,208,0,0,1197,1198,3,160,80,0,
	1198,1199,5,106,0,0,1199,1200,7,6,0,0,1200,1201,3,158,79,0,1201,1202,5,
	237,0,0,1202,1203,7,6,0,0,1203,1204,3,160,80,0,1204,157,1,0,0,0,1205,1207,
	3,164,82,0,1206,1205,1,0,0,0,1207,1208,1,0,0,0,1208,1206,1,0,0,0,1208,1209,
	1,0,0,0,1209,159,1,0,0,0,1210,1212,3,162,81,0,1211,1210,1,0,0,0,1212,1213,
	1,0,0,0,1213,1211,1,0,0,0,1213,1214,1,0,0,0,1214,161,1,0,0,0,1215,1221,
	3,34,17,0,1216,1221,3,52,26,0,1217,1221,5,205,0,0,1218,1221,5,210,0,0,1219,
	1221,5,208,0,0,1220,1215,1,0,0,0,1220,1216,1,0,0,0,1220,1217,1,0,0,0,1220,
	1218,1,0,0,0,1220,1219,1,0,0,0,1221,163,1,0,0,0,1222,1225,3,34,17,0,1223,
	1225,3,166,83,0,1224,1222,1,0,0,0,1224,1223,1,0,0,0,1225,165,1,0,0,0,1226,
	1227,7,24,0,0,1227,167,1,0,0,0,1228,1229,3,204,102,0,1229,1230,5,103,0,
	0,1230,1231,7,6,0,0,1231,1233,3,46,23,0,1232,1234,3,170,85,0,1233,1232,
	1,0,0,0,1233,1234,1,0,0,0,1234,1236,1,0,0,0,1235,1237,5,274,0,0,1236,1235,
	1,0,0,0,1236,1237,1,0,0,0,1237,169,1,0,0,0,1238,1239,5,169,0,0,1239,1244,
	3,172,86,0,1240,1241,5,273,0,0,1241,1243,3,172,86,0,1242,1240,1,0,0,0,1243,
	1246,1,0,0,0,1244,1242,1,0,0,0,1244,1245,1,0,0,0,1245,1249,1,0,0,0,1246,
	1244,1,0,0,0,1247,1248,5,209,0,0,1248,1250,3,172,86,0,1249,1247,1,0,0,0,
	1249,1250,1,0,0,0,1250,171,1,0,0,0,1251,1252,3,174,87,0,1252,1253,5,121,
	0,0,1253,1254,3,276,138,0,1254,173,1,0,0,0,1255,1256,3,38,19,0,1256,175,
	1,0,0,0,1257,1258,5,88,0,0,1258,1268,3,46,23,0,1259,1269,3,178,89,0,1260,
	1266,3,182,91,0,1261,1263,3,184,92,0,1262,1264,5,274,0,0,1263,1262,1,0,
	0,0,1263,1264,1,0,0,0,1264,1267,1,0,0,0,1265,1267,5,274,0,0,1266,1261,1,
	0,0,0,1266,1265,1,0,0,0,1266,1267,1,0,0,0,1267,1269,1,0,0,0,1268,1259,1,
	0,0,0,1268,1260,1,0,0,0,1269,177,1,0,0,0,1270,1271,3,180,90,0,1271,1273,
	5,85,0,0,1272,1274,5,274,0,0,1273,1272,1,0,0,0,1273,1274,1,0,0,0,1274,179,
	1,0,0,0,1275,1276,5,205,0,0,1276,1277,3,46,23,0,1277,1278,5,237,0,0,1278,
	1279,5,117,0,0,1279,1280,3,46,23,0,1280,181,1,0,0,0,1281,1283,7,25,0,0,
	1282,1281,1,0,0,0,1282,1283,1,0,0,0,1283,1284,1,0,0,0,1284,1285,3,46,23,
	0,1285,1286,5,87,0,0,1286,183,1,0,0,0,1287,1290,5,104,0,0,1288,1291,3,274,
	137,0,1289,1291,3,186,93,0,1290,1288,1,0,0,0,1290,1289,1,0,0,0,1291,185,
	1,0,0,0,1292,1293,5,43,0,0,1293,1294,3,188,94,0,1294,1295,7,26,0,0,1295,
	1296,5,41,0,0,1296,1298,5,275,0,0,1297,1299,3,190,95,0,1298,1297,1,0,0,
	0,1299,1300,1,0,0,0,1300,1298,1,0,0,0,1300,1301,1,0,0,0,1301,1335,1,0,0,
	0,1302,1307,3,204,102,0,1303,1307,5,212,0,0,1304,1307,5,210,0,0,1305,1307,
	5,245,0,0,1306,1302,1,0,0,0,1306,1303,1,0,0,0,1306,1304,1,0,0,0,1306,1305,
	1,0,0,0,1307,1308,1,0,0,0,1308,1309,5,115,0,0,1309,1310,3,188,94,0,1310,
	1311,7,26,0,0,1311,1312,5,147,0,0,1312,1314,5,275,0,0,1313,1315,3,190,95,
	0,1314,1313,1,0,0,0,1315,1316,1,0,0,0,1316,1314,1,0,0,0,1316,1317,1,0,0,
	0,1317,1335,1,0,0,0,1318,1323,3,204,102,0,1319,1323,5,212,0,0,1320,1323,
	5,210,0,0,1321,1323,5,245,0,0,1322,1318,1,0,0,0,1322,1319,1,0,0,0,1322,
	1320,1,0,0,0,1322,1321,1,0,0,0,1323,1324,1,0,0,0,1324,1325,5,147,0,0,1325,
	1326,5,115,0,0,1326,1327,3,188,94,0,1327,1328,7,26,0,0,1328,1330,5,275,
	0,0,1329,1331,3,190,95,0,1330,1329,1,0,0,0,1331,1332,1,0,0,0,1332,1330,
	1,0,0,0,1332,1333,1,0,0,0,1333,1335,1,0,0,0,1334,1292,1,0,0,0,1334,1306,
	1,0,0,0,1334,1322,1,0,0,0,1335,187,1,0,0,0,1336,1352,5,205,0,0,1337,1352,
	5,117,0,0,1338,1352,5,196,0,0,1339,1340,7,27,0,0,1340,1341,7,28,0,0,1341,
	1342,5,237,0,0,1342,1352,5,205,0,0,1343,1344,5,152,0,0,1344,1345,7,28,0,
	0,1345,1346,5,237,0,0,1346,1352,5,205,0,0,1347,1348,5,153,0,0,1348,1349,
	7,28,0,0,1349,1350,5,237,0,0,1350,1352,5,205,0,0,1351,1336,1,0,0,0,1351,
	1337,1,0,0,0,1351,1338,1,0,0,0,1351,1339,1,0,0,0,1351,1343,1,0,0,0,1351,
	1347,1,0,0,0,1352,189,1,0,0,0,1353,1356,3,192,96,0,1354,1357,3,198,99,0,
	1355,1357,3,200,100,0,1356,1354,1,0,0,0,1356,1355,1,0,0,0,1357,191,1,0,
	0,0,1358,1359,7,29,0,0,1359,193,1,0,0,0,1360,1364,5,284,0,0,1361,1362,5,
	279,0,0,1362,1364,5,279,0,0,1363,1360,1,0,0,0,1363,1361,1,0,0,0,1364,195,
	1,0,0,0,1365,1367,7,30,0,0,1366,1365,1,0,0,0,1367,1368,1,0,0,0,1368,1366,
	1,0,0,0,1368,1369,1,0,0,0,1369,197,1,0,0,0,1370,1371,3,274,137,0,1371,199,
	1,0,0,0,1372,1376,3,204,102,0,1373,1376,5,212,0,0,1374,1376,5,245,0,0,1375,
	1372,1,0,0,0,1375,1373,1,0,0,0,1375,1374,1,0,0,0,1376,1377,1,0,0,0,1377,
	1378,5,147,0,0,1378,1379,5,115,0,0,1379,1380,3,188,94,0,1380,1381,7,26,
	0,0,1381,1383,5,275,0,0,1382,1384,3,202,101,0,1383,1382,1,0,0,0,1384,1385,
	1,0,0,0,1385,1383,1,0,0,0,1385,1386,1,0,0,0,1386,201,1,0,0,0,1387,1390,
	3,194,97,0,1388,1391,3,198,99,0,1389,1391,3,200,100,0,1390,1388,1,0,0,0,
	1390,1389,1,0,0,0,1391,203,1,0,0,0,1392,1395,3,208,104,0,1393,1394,7,31,
	0,0,1394,1396,3,228,114,0,1395,1393,1,0,0,0,1395,1396,1,0,0,0,1396,205,
	1,0,0,0,1397,1400,3,210,105,0,1398,1399,7,31,0,0,1399,1401,3,228,114,0,
	1400,1398,1,0,0,0,1400,1401,1,0,0,0,1401,207,1,0,0,0,1402,1408,3,212,106,
	0,1403,1404,3,52,26,0,1404,1405,3,212,106,0,1405,1407,1,0,0,0,1406,1403,
	1,0,0,0,1407,1410,1,0,0,0,1408,1406,1,0,0,0,1408,1409,1,0,0,0,1409,209,
	1,0,0,0,1410,1408,1,0,0,0,1411,1417,3,214,107,0,1412,1413,3,52,26,0,1413,
	1414,3,214,107,0,1414,1416,1,0,0,0,1415,1412,1,0,0,0,1416,1419,1,0,0,0,
	1417,1415,1,0,0,0,1417,1418,1,0,0,0,1418,211,1,0,0,0,1419,1417,1,0,0,0,
	1420,1422,7,7,0,0,1421,1423,3,34,17,0,1422,1421,1,0,0,0,1423,1424,1,0,0,
	0,1424,1422,1,0,0,0,1424,1425,1,0,0,0,1425,1428,1,0,0,0,1426,1428,5,212,
	0,0,1427,1420,1,0,0,0,1427,1426,1,0,0,0,1428,213,1,0,0,0,1429,1431,7,7,
	0,0,1430,1432,3,42,21,0,1431,1430,1,0,0,0,1432,1433,1,0,0,0,1433,1431,1,
	0,0,0,1433,1434,1,0,0,0,1434,1437,1,0,0,0,1435,1437,5,212,0,0,1436,1429,
	1,0,0,0,1436,1435,1,0,0,0,1437,215,1,0,0,0,1438,1439,3,218,109,0,1439,1440,
	5,237,0,0,1440,1441,3,204,102,0,1441,217,1,0,0,0,1442,1443,3,50,25,0,1443,
	219,1,0,0,0,1444,1446,3,52,26,0,1445,1444,1,0,0,0,1445,1446,1,0,0,0,1446,
	1447,1,0,0,0,1447,1448,3,48,24,0,1448,221,1,0,0,0,1449,1451,3,52,26,0,1450,
	1449,1,0,0,0,1450,1451,1,0,0,0,1451,1453,1,0,0,0,1452,1454,7,6,0,0,1453,
	1452,1,0,0,0,1453,1454,1,0,0,0,1454,1456,1,0,0,0,1455,1457,3,42,21,0,1456,
	1455,1,0,0,0,1457,1458,1,0,0,0,1458,1456,1,0,0,0,1458,1459,1,0,0,0,1459,
	223,1,0,0,0,1460,1461,7,32,0,0,1461,1462,3,46,23,0,1462,225,1,0,0,0,1463,
	1464,5,117,0,0,1464,1471,3,46,23,0,1465,1468,3,46,23,0,1466,1467,7,31,0,
	0,1467,1469,3,228,114,0,1468,1466,1,0,0,0,1468,1469,1,0,0,0,1469,1471,1,
	0,0,0,1470,1463,1,0,0,0,1470,1465,1,0,0,0,1471,227,1,0,0,0,1472,1475,3,
	230,115,0,1473,1475,3,246,123,0,1474,1472,1,0,0,0,1474,1473,1,0,0,0,1475,
	229,1,0,0,0,1476,1482,3,238,119,0,1477,1482,3,232,116,0,1478,1482,3,240,
	120,0,1479,1482,3,242,121,0,1480,1482,3,244,122,0,1481,1476,1,0,0,0,1481,
	1477,1,0,0,0,1481,1478,1,0,0,0,1481,1479,1,0,0,0,1481,1480,1,0,0,0,1482,
	231,1,0,0,0,1483,1484,3,234,117,0,1484,233,1,0,0,0,1485,1487,5,208,0,0,
	1486,1485,1,0,0,0,1486,1487,1,0,0,0,1487,1490,1,0,0,0,1488,1491,3,220,110,
	0,1489,1491,3,236,118,0,1490,1488,1,0,0,0,1490,1489,1,0,0,0,1491,1492,1,
	0,0,0,1492,1493,7,33,0,0,1493,235,1,0,0,0,1494,1495,3,46,23,0,1495,237,
	1,0,0,0,1496,1498,5,208,0,0,1497,1496,1,0,0,0,1497,1498,1,0,0,0,1498,1499,
	1,0,0,0,1499,1500,3,46,23,0,1500,1501,5,102,0,0,1501,1502,3,288,144,0,1502,
	1503,3,274,137,0,1503,239,1,0,0,0,1504,1505,3,256,128,0,1505,1506,3,262,
	131,0,1506,241,1,0,0,0,1507,1508,3,258,129,0,1508,1509,3,264,132,0,1509,
	243,1,0,0,0,1510,1511,3,260,130,0,1511,1512,3,266,133,0,1512,245,1,0,0,
	0,1513,1514,5,115,0,0,1514,1515,3,188,94,0,1515,1516,7,26,0,0,1516,1517,
	7,34,0,0,1517,1519,5,275,0,0,1518,1520,3,248,124,0,1519,1518,1,0,0,0,1520,
	1521,1,0,0,0,1521,1519,1,0,0,0,1521,1522,1,0,0,0,1522,247,1,0,0,0,1523,
	1524,3,196,98,0,1524,1525,3,250,125,0,1525,1530,1,0,0,0,1526,1527,3,196,
	98,0,1527,1528,3,254,127,0,1528,1530,1,0,0,0,1529,1523,1,0,0,0,1529,1526,
	1,0,0,0,1530,249,1,0,0,0,1531,1532,3,252,126,0,1532,251,1,0,0,0,1533,1536,
	3,216,108,0,1534,1536,3,224,112,0,1535,1533,1,0,0,0,1535,1534,1,0,0,0,1536,
	1537,1,0,0,0,1537,1538,7,2,0,0,1538,1539,3,220,110,0,1539,1552,1,0,0,0,
	1540,1543,3,216,108,0,1541,1543,3,224,112,0,1542,1540,1,0,0,0,1542,1541,
	1,0,0,0,1543,1544,1,0,0,0,1544,1545,3,288,144,0,1545,1546,3,274,137,0,1546,
	1552,1,0,0,0,1547,1548,3,204,102,0,1548,1549,3,234,117,0,1549,1552,1,0,
	0,0,1550,1552,3,234,117,0,1551,1535,1,0,0,0,1551,1542,1,0,0,0,1551,1547,
	1,0,0,0,1551,1550,1,0,0,0,1552,253,1,0,0,0,1553,1558,5,147,0,0,1554,1558,
	5,146,0,0,1555,1556,5,110,0,0,1556,1558,5,111,0,0,1557,1553,1,0,0,0,1557,
	1554,1,0,0,0,1557,1555,1,0,0,0,1558,1559,1,0,0,0,1559,1560,5,115,0,0,1560,
	1561,3,188,94,0,1561,1562,7,26,0,0,1562,1564,5,275,0,0,1563,1565,3,248,
	124,0,1564,1563,1,0,0,0,1565,1566,1,0,0,0,1566,1564,1,0,0,0,1566,1567,1,
	0,0,0,1567,255,1,0,0,0,1568,1569,7,35,0,0,1569,257,1,0,0,0,1570,1571,7,
	36,0,0,1571,259,1,0,0,0,1572,1573,7,37,0,0,1573,261,1,0,0,0,1574,1575,3,
	274,137,0,1575,263,1,0,0,0,1576,1577,3,274,137,0,1577,265,1,0,0,0,1578,
	1603,3,54,27,0,1579,1603,5,228,0,0,1580,1603,5,229,0,0,1581,1582,5,17,0,
	0,1582,1583,5,269,0,0,1583,1584,3,302,151,0,1584,1585,5,273,0,0,1585,1586,
	3,302,151,0,1586,1587,5,273,0,0,1587,1588,3,302,151,0,1588,1589,5,270,0,
	0,1589,1603,1,0,0,0,1590,1591,5,18,0,0,1591,1592,5,269,0,0,1592,1593,3,
	302,151,0,1593,1594,5,270,0,0,1594,1603,1,0,0,0,1595,1603,3,216,108,0,1596,
	1603,3,224,112,0,1597,1603,3,124,62,0,1598,1599,5,269,0,0,1599,1600,3,274,
	137,0,1600,1601,5,270,0,0,1601,1603,1,0,0,0,1602,1578,1,0,0,0,1602,1579,
	1,0,0,0,1602,1580,1,0,0,0,1602,1581,1,0,0,0,1602,1590,1,0,0,0,1602,1595,
	1,0,0,0,1602,1596,1,0,0,0,1602,1597,1,0,0,0,1602,1598,1,0,0,0,1603,267,
	1,0,0,0,1604,1608,5,100,0,0,1605,1607,3,270,135,0,1606,1605,1,0,0,0,1607,
	1610,1,0,0,0,1608,1606,1,0,0,0,1608,1609,1,0,0,0,1609,1611,1,0,0,0,1610,
	1608,1,0,0,0,1611,1612,5,274,0,0,1612,269,1,0,0,0,1613,1615,7,15,0,0,1614,
	1613,1,0,0,0,1614,1615,1,0,0,0,1615,1616,1,0,0,0,1616,1617,5,262,0,0,1617,
	1618,5,106,0,0,1618,1619,3,272,136,0,1619,271,1,0,0,0,1620,1629,3,302,151,
	0,1621,1624,3,292,146,0,1622,1624,3,296,148,0,1623,1621,1,0,0,0,1623,1622,
	1,0,0,0,1624,1625,1,0,0,0,1625,1626,3,302,151,0,1626,1628,1,0,0,0,1627,
	1623,1,0,0,0,1628,1631,1,0,0,0,1629,1627,1,0,0,0,1629,1630,1,0,0,0,1630,
	273,1,0,0,0,1631,1629,1,0,0,0,1632,1633,3,278,139,0,1633,1634,5,273,0,0,
	1634,1635,3,306,153,0,1635,1636,3,304,152,0,1636,1646,1,0,0,0,1637,1638,
	3,278,139,0,1638,1639,5,273,0,0,1639,1640,3,306,153,0,1640,1646,1,0,0,0,
	1641,1642,3,278,139,0,1642,1643,3,304,152,0,1643,1646,1,0,0,0,1644,1646,
	3,278,139,0,1645,1632,1,0,0,0,1645,1637,1,0,0,0,1645,1641,1,0,0,0,1645,
	1644,1,0,0,0,1646,275,1,0,0,0,1647,1648,3,280,140,0,1648,1649,5,273,0,0,
	1649,1650,3,306,153,0,1650,1651,3,304,152,0,1651,1661,1,0,0,0,1652,1653,
	3,280,140,0,1653,1654,5,273,0,0,1654,1655,3,306,153,0,1655,1661,1,0,0,0,
	1656,1657,3,280,140,0,1657,1658,3,304,152,0,1658,1661,1,0,0,0,1659,1661,
	3,280,140,0,1660,1647,1,0,0,0,1660,1652,1,0,0,0,1660,1656,1,0,0,0,1660,
	1659,1,0,0,0,1661,277,1,0,0,0,1662,1665,3,280,140,0,1663,1664,7,38,0,0,
	1664,1666,3,278,139,0,1665,1663,1,0,0,0,1665,1666,1,0,0,0,1666,279,1,0,
	0,0,1667,1668,3,290,145,0,1668,1669,7,2,0,0,1669,1670,7,3,0,0,1670,1671,
	3,46,23,0,1671,1712,1,0,0,0,1672,1673,3,290,145,0,1673,1674,7,3,0,0,1674,
	1675,3,46,23,0,1675,1676,7,2,0,0,1676,1712,1,0,0,0,1677,1712,3,340,170,
	0,1678,1712,3,314,157,0,1679,1680,3,290,145,0,1680,1681,5,106,0,0,1681,
	1682,3,48,24,0,1682,1712,1,0,0,0,1683,1684,3,290,145,0,1684,1685,5,103,
	0,0,1685,1686,3,48,24,0,1686,1712,1,0,0,0,1687,1688,3,290,145,0,1688,1689,
	3,284,142,0,1689,1694,3,282,141,0,1690,1691,5,273,0,0,1691,1693,3,282,141,
	0,1692,1690,1,0,0,0,1693,1696,1,0,0,0,1694,1692,1,0,0,0,1694,1695,1,0,0,
	0,1695,1697,1,0,0,0,1696,1694,1,0,0,0,1697,1698,5,222,0,0,1698,1699,3,282,
	141,0,1699,1712,1,0,0,0,1700,1707,3,290,145,0,1701,1703,3,286,143,0,1702,
	1701,1,0,0,0,1702,1703,1,0,0,0,1703,1704,1,0,0,0,1704,1705,3,288,144,0,
	1705,1706,3,290,145,0,1706,1708,1,0,0,0,1707,1702,1,0,0,0,1707,1708,1,0,
	0,0,1708,1712,1,0,0,0,1709,1712,3,334,167,0,1710,1712,3,336,168,0,1711,
	1667,1,0,0,0,1711,1672,1,0,0,0,1711,1677,1,0,0,0,1711,1678,1,0,0,0,1711,
	1679,1,0,0,0,1711,1683,1,0,0,0,1711,1687,1,0,0,0,1711,1700,1,0,0,0,1711,
	1709,1,0,0,0,1711,1710,1,0,0,0,1712,281,1,0,0,0,1713,1723,5,268,0,0,1714,
	1723,5,267,0,0,1715,1717,5,263,0,0,1716,1718,3,102,51,0,1717,1716,1,0,0,
	0,1717,1718,1,0,0,0,1718,1723,1,0,0,0,1719,1723,5,266,0,0,1720,1723,3,54,
	27,0,1721,1723,3,32,16,0,1722,1713,1,0,0,0,1722,1714,1,0,0,0,1722,1715,
	1,0,0,0,1722,1719,1,0,0,0,1722,1720,1,0,0,0,1722,1721,1,0,0,0,1723,283,
	1,0,0,0,1724,1725,7,39,0,0,1725,285,1,0,0,0,1726,1728,5,133,0,0,1727,1726,
	1,0,0,0,1727,1728,1,0,0,0,1728,1733,1,0,0,0,1729,1730,5,5,0,0,1730,1734,
	5,214,0,0,1731,1732,5,6,0,0,1732,1734,5,217,0,0,1733,1729,1,0,0,0,1733,
	1731,1,0,0,0,1734,287,1,0,0,0,1735,1736,7,40,0,0,1736,289,1,0,0,0,1737,
	1743,3,294,147,0,1738,1739,3,292,146,0,1739,1740,3,294,147,0,1740,1742,
	1,0,0,0,1741,1738,1,0,0,0,1742,1745,1,0,0,0,1743,1741,1,0,0,0,1743,1744,
	1,0,0,0,1744,291,1,0,0,0,1745,1743,1,0,0,0,1746,1747,7,41,0,0,1747,293,
	1,0,0,0,1748,1754,3,298,149,0,1749,1750,3,296,148,0,1750,1751,3,298,149,
	0,1751,1753,1,0,0,0,1752,1749,1,0,0,0,1753,1756,1,0,0,0,1754,1752,1,0,0,
	0,1754,1755,1,0,0,0,1755,295,1,0,0,0,1756,1754,1,0,0,0,1757,1758,7,42,0,
	0,1758,297,1,0,0,0,1759,1765,3,302,151,0,1760,1761,3,300,150,0,1761,1762,
	3,302,151,0,1762,1764,1,0,0,0,1763,1760,1,0,0,0,1764,1767,1,0,0,0,1765,
	1763,1,0,0,0,1765,1766,1,0,0,0,1766,299,1,0,0,0,1767,1765,1,0,0,0,1768,
	1769,7,43,0,0,1769,301,1,0,0,0,1770,1771,6,151,-1,0,1771,1772,5,130,0,0,
	1772,2036,3,302,151,55,1773,1774,5,289,0,0,1774,2036,3,302,151,54,1775,
	1776,5,133,0,0,1776,2036,3,302,151,53,1777,1778,5,11,0,0,1778,1779,3,302,
	151,0,1779,1780,5,139,0,0,1780,1783,3,302,151,0,1781,1782,5,185,0,0,1782,
	1784,3,100,50,0,1783,1781,1,0,0,0,1783,1784,1,0,0,0,1784,2036,1,0,0,0,1785,
	1786,5,189,0,0,1786,1787,3,302,151,0,1787,1788,5,139,0,0,1788,1791,3,302,
	151,0,1789,1790,5,185,0,0,1790,1792,3,100,50,0,1791,1789,1,0,0,0,1791,1792,
	1,0,0,0,1792,2036,1,0,0,0,1793,1794,5,188,0,0,1794,1799,3,302,151,0,1795,
	1796,5,273,0,0,1796,1798,3,302,151,0,1797,1795,1,0,0,0,1798,1801,1,0,0,
	0,1799,1797,1,0,0,0,1799,1800,1,0,0,0,1800,1802,1,0,0,0,1801,1799,1,0,0,
	0,1802,1803,5,209,0,0,1803,1804,3,302,151,50,1804,2036,1,0,0,0,1805,1806,
	5,188,0,0,1806,1807,5,117,0,0,1807,2036,3,46,23,0,1808,1809,5,188,0,0,1809,
	1810,5,117,0,0,1810,2036,3,216,108,0,1811,1812,5,210,0,0,1812,1815,5,183,
	0,0,1813,1815,5,183,0,0,1814,1811,1,0,0,0,1814,1813,1,0,0,0,1815,1816,1,
	0,0,0,1816,2036,3,226,113,0,1817,1818,5,210,0,0,1818,1819,5,183,0,0,1819,
	2036,3,216,108,0,1820,1821,5,183,0,0,1821,2036,3,216,108,0,1822,1825,5,
	263,0,0,1823,1826,5,278,0,0,1824,1826,5,262,0,0,1825,1823,1,0,0,0,1825,
	1824,1,0,0,0,1826,1829,1,0,0,0,1827,1829,5,266,0,0,1828,1822,1,0,0,0,1828,
	1827,1,0,0,0,1829,1830,1,0,0,0,1830,1831,5,237,0,0,1831,2036,3,302,151,
	44,1832,1833,5,266,0,0,1833,1834,5,237,0,0,1834,2036,3,302,151,43,1835,
	1836,5,30,0,0,1836,1841,3,302,151,0,1837,1838,5,273,0,0,1838,1840,3,302,
	151,0,1839,1837,1,0,0,0,1840,1843,1,0,0,0,1841,1839,1,0,0,0,1841,1842,1,
	0,0,0,1842,1844,1,0,0,0,1843,1841,1,0,0,0,1844,1845,7,38,0,0,1845,1846,
	3,302,151,39,1846,2036,1,0,0,0,1847,1848,5,149,0,0,1848,2036,3,302,151,
	37,1849,1850,5,12,0,0,1850,1851,5,269,0,0,1851,1852,3,274,137,0,1852,1853,
	5,270,0,0,1853,2036,1,0,0,0,1854,1855,5,14,0,0,1855,1860,3,302,151,0,1856,
	1857,5,273,0,0,1857,1859,3,302,151,0,1858,1856,1,0,0,0,1859,1862,1,0,0,
	0,1860,1858,1,0,0,0,1860,1861,1,0,0,0,1861,1863,1,0,0,0,1862,1860,1,0,0,
	0,1863,1864,5,209,0,0,1864,1865,3,302,151,35,1865,2036,1,0,0,0,1866,1867,
	5,14,0,0,1867,1868,5,117,0,0,1868,2036,3,216,108,0,1869,1870,5,13,0,0,1870,
	1875,3,302,151,0,1871,1872,5,273,0,0,1872,1874,3,302,151,0,1873,1871,1,
	0,0,0,1874,1877,1,0,0,0,1875,1873,1,0,0,0,1875,1876,1,0,0,0,1876,1878,1,
	0,0,0,1877,1875,1,0,0,0,1878,1879,5,209,0,0,1879,1880,3,302,151,33,1880,
	2036,1,0,0,0,1881,1882,5,13,0,0,1882,1883,5,117,0,0,1883,2036,3,216,108,
	0,1884,1885,5,210,0,0,1885,1886,5,214,0,0,1886,1887,5,234,0,0,1887,2036,
	3,302,151,31,1888,1889,5,205,0,0,1889,1890,5,217,0,0,1890,1891,5,234,0,
	0,1891,2036,3,302,151,30,1892,1893,5,205,0,0,1893,1894,5,202,0,0,1894,1895,
	5,234,0,0,1895,2036,3,302,151,29,1896,1897,5,17,0,0,1897,1898,5,269,0,0,
	1898,1899,3,302,151,0,1899,1900,5,273,0,0,1900,1901,3,302,151,0,1901,1902,
	5,273,0,0,1902,1903,3,302,151,0,1903,1904,5,270,0,0,1904,2036,1,0,0,0,1905,
	1906,5,18,0,0,1906,1907,5,269,0,0,1907,1908,3,302,151,0,1908,1909,5,270,
	0,0,1909,2036,1,0,0,0,1910,1911,3,266,133,0,1911,1912,7,44,0,0,1912,1913,
	3,302,151,0,1913,1914,3,58,29,0,1914,2036,1,0,0,0,1915,1916,5,184,0,0,1916,
	1921,3,302,151,0,1917,1918,5,273,0,0,1918,1920,3,302,151,0,1919,1917,1,
	0,0,0,1920,1923,1,0,0,0,1921,1919,1,0,0,0,1921,1922,1,0,0,0,1922,1924,1,
	0,0,0,1923,1921,1,0,0,0,1924,1925,5,209,0,0,1925,1926,3,302,151,25,1926,
	2036,1,0,0,0,1927,1928,5,186,0,0,1928,1933,3,302,151,0,1929,1930,5,273,
	0,0,1930,1932,3,302,151,0,1931,1929,1,0,0,0,1932,1935,1,0,0,0,1933,1931,
	1,0,0,0,1933,1934,1,0,0,0,1934,1936,1,0,0,0,1935,1933,1,0,0,0,1936,1937,
	5,209,0,0,1937,1938,3,302,151,24,1938,2036,1,0,0,0,1939,1940,5,15,0,0,1940,
	1942,3,274,137,0,1941,1943,3,312,156,0,1942,1941,1,0,0,0,1942,1943,1,0,
	0,0,1943,2036,1,0,0,0,1944,1945,5,210,0,0,1945,1946,5,183,0,0,1946,1947,
	5,203,0,0,1947,1956,5,213,0,0,1948,1950,5,205,0,0,1949,1948,1,0,0,0,1949,
	1950,1,0,0,0,1950,1951,1,0,0,0,1951,1957,5,217,0,0,1952,1954,5,210,0,0,
	1953,1952,1,0,0,0,1953,1954,1,0,0,0,1954,1955,1,0,0,0,1955,1957,5,214,0,
	0,1956,1949,1,0,0,0,1956,1953,1,0,0,0,1957,1958,1,0,0,0,1958,1959,5,204,
	0,0,1959,2036,3,274,137,0,1960,1962,3,32,16,0,1961,1960,1,0,0,0,1962,1963,
	1,0,0,0,1963,1961,1,0,0,0,1963,1964,1,0,0,0,1964,1965,1,0,0,0,1965,1966,
	5,15,0,0,1966,1968,3,274,137,0,1967,1969,3,312,156,0,1968,1967,1,0,0,0,
	1968,1969,1,0,0,0,1969,2036,1,0,0,0,1970,1971,5,16,0,0,1971,1972,7,45,0,
	0,1972,1973,5,237,0,0,1973,1975,3,274,137,0,1974,1976,3,312,156,0,1975,
	1974,1,0,0,0,1975,1976,1,0,0,0,1976,2036,1,0,0,0,1977,1979,3,32,16,0,1978,
	1977,1,0,0,0,1979,1980,1,0,0,0,1980,1978,1,0,0,0,1980,1981,1,0,0,0,1981,
	1982,1,0,0,0,1982,1983,5,16,0,0,1983,1984,7,45,0,0,1984,1985,5,237,0,0,
	1985,1987,3,274,137,0,1986,1988,3,312,156,0,1987,1986,1,0,0,0,1987,1988,
	1,0,0,0,1988,2036,1,0,0,0,1989,1992,3,322,161,0,1990,1992,3,324,162,0,1991,
	1989,1,0,0,0,1991,1990,1,0,0,0,1992,1993,1,0,0,0,1993,1994,3,218,109,0,
	1994,1996,3,326,163,0,1995,1997,5,38,0,0,1996,1995,1,0,0,0,1996,1997,1,
	0,0,0,1997,2036,1,0,0,0,1998,2001,3,322,161,0,1999,2001,3,324,162,0,2000,
	1998,1,0,0,0,2000,1999,1,0,0,0,2001,2004,1,0,0,0,2002,2005,3,224,112,0,
	2003,2005,3,216,108,0,2004,2002,1,0,0,0,2004,2003,1,0,0,0,2005,2006,1,0,
	0,0,2006,2007,5,143,0,0,2007,2008,3,46,23,0,2008,2009,5,233,0,0,2009,2011,
	3,46,23,0,2010,2012,5,274,0,0,2011,2010,1,0,0,0,2011,2012,1,0,0,0,2012,
	2036,1,0,0,0,2013,2015,5,263,0,0,2014,2016,3,102,51,0,2015,2014,1,0,0,0,
	2015,2016,1,0,0,0,2016,2036,1,0,0,0,2017,2036,5,228,0,0,2018,2036,3,32,
	16,0,2019,2036,3,224,112,0,2020,2036,3,216,108,0,2021,2036,3,204,102,0,
	2022,2036,3,46,23,0,2023,2036,3,124,62,0,2024,2036,5,266,0,0,2025,2036,
	5,267,0,0,2026,2036,5,268,0,0,2027,2036,3,54,27,0,2028,2036,5,242,0,0,2029,
	2036,5,223,0,0,2030,2036,5,212,0,0,2031,2032,5,269,0,0,2032,2033,3,274,
	137,0,2033,2034,5,270,0,0,2034,2036,1,0,0,0,2035,1770,1,0,0,0,2035,1773,
	1,0,0,0,2035,1775,1,0,0,0,2035,1777,1,0,0,0,2035,1785,1,0,0,0,2035,1793,
	1,0,0,0,2035,1805,1,0,0,0,2035,1808,1,0,0,0,2035,1814,1,0,0,0,2035,1817,
	1,0,0,0,2035,1820,1,0,0,0,2035,1828,1,0,0,0,2035,1832,1,0,0,0,2035,1835,
	1,0,0,0,2035,1847,1,0,0,0,2035,1849,1,0,0,0,2035,1854,1,0,0,0,2035,1866,
	1,0,0,0,2035,1869,1,0,0,0,2035,1881,1,0,0,0,2035,1884,1,0,0,0,2035,1888,
	1,0,0,0,2035,1892,1,0,0,0,2035,1896,1,0,0,0,2035,1905,1,0,0,0,2035,1910,
	1,0,0,0,2035,1915,1,0,0,0,2035,1927,1,0,0,0,2035,1939,1,0,0,0,2035,1944,
	1,0,0,0,2035,1961,1,0,0,0,2035,1970,1,0,0,0,2035,1978,1,0,0,0,2035,1991,
	1,0,0,0,2035,2000,1,0,0,0,2035,2013,1,0,0,0,2035,2017,1,0,0,0,2035,2018,
	1,0,0,0,2035,2019,1,0,0,0,2035,2020,1,0,0,0,2035,2021,1,0,0,0,2035,2022,
	1,0,0,0,2035,2023,1,0,0,0,2035,2024,1,0,0,0,2035,2025,1,0,0,0,2035,2026,
	1,0,0,0,2035,2027,1,0,0,0,2035,2028,1,0,0,0,2035,2029,1,0,0,0,2035,2030,
	1,0,0,0,2035,2031,1,0,0,0,2036,2059,1,0,0,0,2037,2040,10,38,0,0,2038,2039,
	5,273,0,0,2039,2041,3,302,151,0,2040,2038,1,0,0,0,2041,2042,1,0,0,0,2042,
	2040,1,0,0,0,2042,2043,1,0,0,0,2043,2044,1,0,0,0,2044,2045,7,38,0,0,2045,
	2046,3,302,151,39,2046,2058,1,0,0,0,2047,2048,10,42,0,0,2048,2058,3,304,
	152,0,2049,2050,10,41,0,0,2050,2051,5,273,0,0,2051,2052,3,306,153,0,2052,
	2053,3,304,152,0,2053,2058,1,0,0,0,2054,2055,10,40,0,0,2055,2056,5,273,
	0,0,2056,2058,3,306,153,0,2057,2037,1,0,0,0,2057,2047,1,0,0,0,2057,2049,
	1,0,0,0,2057,2054,1,0,0,0,2058,2061,1,0,0,0,2059,2057,1,0,0,0,2059,2060,
	1,0,0,0,2060,303,1,0,0,0,2061,2059,1,0,0,0,2062,2063,7,46,0,0,2063,2064,
	5,116,0,0,2064,2065,5,263,0,0,2065,2066,5,162,0,0,2066,305,1,0,0,0,2067,
	2074,3,308,154,0,2068,2074,3,310,155,0,2069,2070,3,308,154,0,2070,2071,
	5,209,0,0,2071,2072,3,310,155,0,2072,2074,1,0,0,0,2073,2067,1,0,0,0,2073,
	2068,1,0,0,0,2073,2069,1,0,0,0,2074,307,1,0,0,0,2075,2076,5,20,0,0,2076,
	2077,3,274,137,0,2077,309,1,0,0,0,2078,2079,5,21,0,0,2079,2080,3,274,137,
	0,2080,311,1,0,0,0,2081,2082,5,4,0,0,2082,2085,3,274,137,0,2083,2085,3,
	316,158,0,2084,2081,1,0,0,0,2084,2083,1,0,0,0,2085,313,1,0,0,0,2086,2087,
	5,7,0,0,2087,2088,3,316,158,0,2088,315,1,0,0,0,2089,2090,5,143,0,0,2090,
	2106,3,266,133,0,2091,2092,5,237,0,0,2092,2093,3,266,133,0,2093,2094,5,
	139,0,0,2094,2095,3,266,133,0,2095,2106,1,0,0,0,2096,2097,5,237,0,0,2097,
	2098,3,266,133,0,2098,2099,5,141,0,0,2099,2100,3,266,133,0,2100,2106,1,
	0,0,0,2101,2102,5,139,0,0,2102,2106,3,266,133,0,2103,2104,5,141,0,0,2104,
	2106,3,266,133,0,2105,2089,1,0,0,0,2105,2091,1,0,0,0,2105,2096,1,0,0,0,
	2105,2101,1,0,0,0,2105,2103,1,0,0,0,2106,317,1,0,0,0,2107,2108,5,143,0,
	0,2108,2124,3,320,160,0,2109,2110,5,139,0,0,2110,2124,3,320,160,0,2111,
	2112,5,141,0,0,2112,2124,3,320,160,0,2113,2114,5,237,0,0,2114,2115,3,320,
	160,0,2115,2116,5,139,0,0,2116,2117,3,320,160,0,2117,2124,1,0,0,0,2118,
	2119,5,237,0,0,2119,2120,3,320,160,0,2120,2121,5,141,0,0,2121,2122,3,320,
	160,0,2122,2124,1,0,0,0,2123,2107,1,0,0,0,2123,2109,1,0,0,0,2123,2111,1,
	0,0,0,2123,2113,1,0,0,0,2123,2118,1,0,0,0,2124,319,1,0,0,0,2125,2130,3,
	54,27,0,2126,2130,5,228,0,0,2127,2130,5,229,0,0,2128,2130,3,216,108,0,2129,
	2125,1,0,0,0,2129,2126,1,0,0,0,2129,2127,1,0,0,0,2129,2128,1,0,0,0,2130,
	321,1,0,0,0,2131,2132,5,210,0,0,2132,2138,5,183,0,0,2133,2138,5,183,0,0,
	2134,2138,5,13,0,0,2135,2138,5,14,0,0,2136,2138,5,188,0,0,2137,2131,1,0,
	0,0,2137,2133,1,0,0,0,2137,2134,1,0,0,0,2137,2135,1,0,0,0,2137,2136,1,0,
	0,0,2138,323,1,0,0,0,2139,2140,7,47,0,0,2140,325,1,0,0,0,2141,2145,5,226,
	0,0,2142,2146,3,328,164,0,2143,2146,3,330,165,0,2144,2146,3,332,166,0,2145,
	2142,1,0,0,0,2145,2143,1,0,0,0,2145,2144,1,0,0,0,2146,2147,1,0,0,0,2147,
	2148,5,274,0,0,2148,2152,1,0,0,0,2149,2150,5,237,0,0,2150,2152,3,328,164,
	0,2151,2141,1,0,0,0,2151,2149,1,0,0,0,2152,327,1,0,0,0,2153,2154,5,117,
	0,0,2154,2157,3,46,23,0,2155,2156,7,31,0,0,2156,2158,3,228,114,0,2157,2155,
	1,0,0,0,2157,2158,1,0,0,0,2158,329,1,0,0,0,2159,2160,5,205,0,0,2160,2161,
	3,46,23,0,2161,2162,5,143,0,0,2162,2163,3,46,23,0,2163,2164,5,233,0,0,2164,
	2165,3,46,23,0,2165,331,1,0,0,0,2166,2167,5,205,0,0,2167,2168,3,46,23,0,
	2168,2169,5,213,0,0,2169,2170,5,271,0,0,2170,2175,3,46,23,0,2171,2172,5,
	273,0,0,2172,2174,3,46,23,0,2173,2171,1,0,0,0,2174,2177,1,0,0,0,2175,2173,
	1,0,0,0,2175,2176,1,0,0,0,2176,2178,1,0,0,0,2177,2175,1,0,0,0,2178,2179,
	5,209,0,0,2179,2180,3,46,23,0,2180,2181,5,272,0,0,2181,333,1,0,0,0,2182,
	2183,3,302,151,0,2183,2184,7,48,0,0,2184,2209,1,0,0,0,2185,2186,3,302,151,
	0,2186,2187,7,49,0,0,2187,2188,7,2,0,0,2188,2209,1,0,0,0,2189,2190,3,302,
	151,0,2190,2191,7,5,0,0,2191,2192,5,263,0,0,2192,2193,5,160,0,0,2193,2209,
	1,0,0,0,2194,2195,3,302,151,0,2195,2196,7,50,0,0,2196,2197,3,32,16,0,2197,
	2209,1,0,0,0,2198,2199,3,302,151,0,2199,2200,7,51,0,0,2200,2201,3,32,16,
	0,2201,2209,1,0,0,0,2202,2203,3,204,102,0,2203,2204,5,85,0,0,2204,2209,
	1,0,0,0,2205,2206,3,302,151,0,2206,2207,5,87,0,0,2207,2209,1,0,0,0,2208,
	2182,1,0,0,0,2208,2185,1,0,0,0,2208,2189,1,0,0,0,2208,2194,1,0,0,0,2208,
	2198,1,0,0,0,2208,2202,1,0,0,0,2208,2205,1,0,0,0,2209,335,1,0,0,0,2210,
	2211,5,230,0,0,2211,2212,3,338,169,0,2212,2213,5,86,0,0,2213,2219,1,0,0,
	0,2214,2215,5,230,0,0,2215,2216,3,338,169,0,2216,2217,5,87,0,0,2217,2219,
	1,0,0,0,2218,2210,1,0,0,0,2218,2214,1,0,0,0,2219,337,1,0,0,0,2220,2223,
	3,46,23,0,2221,2223,5,197,0,0,2222,2220,1,0,0,0,2222,2221,1,0,0,0,2223,
	2224,1,0,0,0,2224,2222,1,0,0,0,2224,2225,1,0,0,0,2225,339,1,0,0,0,2226,
	2227,3,204,102,0,2227,2228,3,48,24,0,2228,2229,5,103,0,0,2229,2239,1,0,
	0,0,2230,2231,3,204,102,0,2231,2232,3,48,24,0,2232,2233,5,106,0,0,2233,
	2239,1,0,0,0,2234,2235,3,204,102,0,2235,2236,5,106,0,0,2236,2237,3,48,24,
	0,2237,2239,1,0,0,0,2238,2226,1,0,0,0,2238,2230,1,0,0,0,2238,2234,1,0,0,
	0,2239,341,1,0,0,0,2240,2241,5,99,0,0,2241,2249,3,46,23,0,2242,2244,5,171,
	0,0,2243,2245,5,262,0,0,2244,2243,1,0,0,0,2245,2246,1,0,0,0,2246,2244,1,
	0,0,0,2246,2247,1,0,0,0,2247,2248,1,0,0,0,2248,2250,5,270,0,0,2249,2242,
	1,0,0,0,2249,2250,1,0,0,0,2250,2252,1,0,0,0,2251,2253,5,276,0,0,2252,2251,
	1,0,0,0,2252,2253,1,0,0,0,2253,343,1,0,0,0,2254,2255,5,267,0,0,2255,345,
	1,0,0,0,2256,2257,3,274,137,0,2257,2258,5,109,0,0,2258,2259,3,274,137,0,
	2259,2260,5,273,0,0,2260,2263,5,26,0,0,2261,2264,3,348,174,0,2262,2264,
	3,350,175,0,2263,2261,1,0,0,0,2263,2262,1,0,0,0,2264,2266,1,0,0,0,2265,
	2267,3,358,179,0,2266,2265,1,0,0,0,2266,2267,1,0,0,0,2267,347,1,0,0,0,2268,
	2269,3,356,178,0,2269,349,1,0,0,0,2270,2271,5,275,0,0,2271,2273,3,352,176,
	0,2272,2274,5,274,0,0,2273,2272,1,0,0,0,2273,2274,1,0,0,0,2274,351,1,0,
	0,0,2275,2279,3,354,177,0,2276,2278,3,354,177,0,2277,2276,1,0,0,0,2278,
	2281,1,0,0,0,2279,2277,1,0,0,0,2279,2280,1,0,0,0,2280,353,1,0,0,0,2281,
	2279,1,0,0,0,2282,2283,5,289,0,0,2283,2285,3,356,178,0,2284,2286,7,52,0,
	0,2285,2284,1,0,0,0,2285,2286,1,0,0,0,2286,355,1,0,0,0,2287,2302,5,191,
	0,0,2288,2289,5,35,0,0,2289,2302,3,274,137,0,2290,2291,5,34,0,0,2291,2292,
	7,53,0,0,2292,2302,3,274,137,0,2293,2294,5,33,0,0,2294,2302,3,356,178,0,
	2295,2296,5,21,0,0,2296,2302,3,218,109,0,2297,2298,5,116,0,0,2298,2299,
	5,263,0,0,2299,2300,5,162,0,0,2300,2302,5,131,0,0,2301,2287,1,0,0,0,2301,
	2288,1,0,0,0,2301,2290,1,0,0,0,2301,2293,1,0,0,0,2301,2295,1,0,0,0,2301,
	2297,1,0,0,0,2302,357,1,0,0,0,2303,2304,5,19,0,0,2304,2306,3,274,137,0,
	2305,2307,5,192,0,0,2306,2305,1,0,0,0,2306,2307,1,0,0,0,2307,359,1,0,0,
	0,260,366,368,379,384,393,397,404,408,411,416,419,423,428,439,443,447,452,
	463,492,498,503,511,515,520,525,536,541,546,552,558,564,569,575,581,590,
	592,595,600,605,611,617,623,628,634,640,649,651,655,658,663,668,674,680,
	686,691,697,703,705,713,722,731,748,751,754,759,764,769,773,777,780,786,
	790,798,801,804,812,819,826,835,842,850,858,861,868,874,885,894,898,902,
	906,920,927,934,941,947,952,960,966,969,984,988,992,995,998,1006,1013,1017,
	1025,1029,1037,1046,1054,1060,1064,1066,1071,1078,1083,1089,1092,1095,1100,
	1104,1106,1112,1129,1139,1143,1147,1161,1164,1186,1189,1208,1213,1220,1224,
	1233,1236,1244,1249,1263,1266,1268,1273,1282,1290,1300,1306,1316,1322,1332,
	1334,1351,1356,1363,1368,1375,1385,1390,1395,1400,1408,1417,1424,1427,1433,
	1436,1445,1450,1453,1458,1468,1470,1474,1481,1486,1490,1497,1521,1529,1535,
	1542,1551,1557,1566,1602,1608,1614,1623,1629,1645,1660,1665,1694,1702,1707,
	1711,1717,1722,1727,1733,1743,1754,1765,1783,1791,1799,1814,1825,1828,1841,
	1860,1875,1921,1933,1942,1949,1953,1956,1963,1968,1975,1980,1987,1991,1996,
	2000,2004,2011,2015,2035,2042,2057,2059,2073,2084,2105,2123,2129,2137,2145,
	2151,2157,2175,2208,2218,2222,2224,2238,2246,2249,2252,2263,2266,2273,2279,
	2285,2301,2306];

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
	public _gp!: GeheleVergelijkingPrefixContext;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
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


export class GeheleVergelijkingPrefixContext extends ParserRuleContext {
	constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GEDURENDE_HET_GEHELE(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEDURENDE_HET_GEHELE, 0);
	}
	public JAAR(): TerminalNode {
		return this.getToken(RegelSpraakParser.JAAR, 0);
	}
	public GEDURENDE_DE_GEHELE(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEDURENDE_DE_GEHELE, 0);
	}
	public MAAND(): TerminalNode {
		return this.getToken(RegelSpraakParser.MAAND, 0);
	}
	public NIET(): TerminalNode {
		return this.getToken(RegelSpraakParser.NIET, 0);
	}
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_geheleVergelijkingPrefix;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitGeheleVergelijkingPrefix) {
			return visitor.visitGeheleVergelijkingPrefix(this);
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
