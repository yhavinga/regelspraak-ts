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
	public static readonly ONGELIJK_IS_AAN = 45;
	public static readonly LATER_OF_GELIJK_IS_AAN = 46;
	public static readonly EERDER_OF_GELIJK_IS_AAN = 47;
	public static readonly LATER_IS_DAN = 48;
	public static readonly EERDER_IS_DAN = 49;
	public static readonly IS_GELIJK_AAN = 50;
	public static readonly IS_ONGELIJK_AAN = 51;
	public static readonly IS_KLEINER_DAN = 52;
	public static readonly IS_KLEINER_OF_GELIJK_AAN = 53;
	public static readonly IS_GROTER_DAN = 54;
	public static readonly IS_GROTER_OF_GELIJK_AAN = 55;
	public static readonly ZIJN_GELIJK_AAN = 56;
	public static readonly ZIJN_ONGELIJK_AAN = 57;
	public static readonly ZIJN_GROTER_DAN = 58;
	public static readonly ZIJN_GROTER_OF_GELIJK_AAN = 59;
	public static readonly ZIJN_KLEINER_DAN = 60;
	public static readonly ZIJN_KLEINER_OF_GELIJK_AAN = 61;
	public static readonly IS_LATER_DAN = 62;
	public static readonly IS_LATER_OF_GELIJK_AAN = 63;
	public static readonly IS_EERDER_DAN = 64;
	public static readonly IS_EERDER_OF_GELIJK_AAN = 65;
	public static readonly ZIJN_LATER_DAN = 66;
	public static readonly ZIJN_LATER_OF_GELIJK_AAN = 67;
	public static readonly ZIJN_EERDER_DAN = 68;
	public static readonly ZIJN_EERDER_OF_GELIJK_AAN = 69;
	public static readonly IS_LEEG = 70;
	public static readonly IS_GEVULD = 71;
	public static readonly ZIJN_LEEG = 72;
	public static readonly ZIJN_GEVULD = 73;
	public static readonly IS_KENMERK = 74;
	public static readonly IS_ROL = 75;
	public static readonly ZIJN_KENMERK = 76;
	public static readonly ZIJN_ROL = 77;
	public static readonly IS_NIET_KENMERK = 78;
	public static readonly IS_NIET_ROL = 79;
	public static readonly ZIJN_NIET_KENMERK = 80;
	public static readonly ZIJN_NIET_ROL = 81;
	public static readonly VOLDOET_AAN_DE_ELFPROEF = 82;
	public static readonly VOLDOEN_AAN_DE_ELFPROEF = 83;
	public static readonly VOLDOET_NIET_AAN_DE_ELFPROEF = 84;
	public static readonly VOLDOEN_NIET_AAN_DE_ELFPROEF = 85;
	public static readonly IS_NUMERIEK_MET_EXACT = 86;
	public static readonly IS_NIET_NUMERIEK_MET_EXACT = 87;
	public static readonly ZIJN_NUMERIEK_MET_EXACT = 88;
	public static readonly ZIJN_NIET_NUMERIEK_MET_EXACT = 89;
	public static readonly MOETEN_UNIEK_ZIJN = 90;
	public static readonly IS_GEVUURD = 91;
	public static readonly IS_INCONSISTENT = 92;
	public static readonly CONSISTENTIEREGEL = 93;
	public static readonly REGEL = 94;
	public static readonly REGELGROEP = 95;
	public static readonly BESLISTABEL = 96;
	public static readonly OBJECTTYPE = 97;
	public static readonly DOMEIN = 98;
	public static readonly LIJST = 99;
	public static readonly DIMENSIE = 100;
	public static readonly EENHEIDSYSTEEM = 101;
	public static readonly PARAMETER = 102;
	public static readonly FEITTYPE = 103;
	public static readonly DAGSOORT = 104;
	public static readonly DAARBIJ_GELDT = 105;
	public static readonly GELDIG = 106;
	public static readonly HEBBEN = 107;
	public static readonly HEEFT = 108;
	public static readonly INDIEN = 109;
	public static readonly IS_RECURSIEF = 110;
	public static readonly IS = 111;
	public static readonly MOET = 112;
	public static readonly MOETEN = 113;
	public static readonly WORDT_VERDEELD_OVER = 114;
	public static readonly WORDT = 115;
	public static readonly VOLDAAN = 116;
	public static readonly ZIJN = 117;
	public static readonly HAAR = 118;
	public static readonly HUN = 119;
	public static readonly AAN = 120;
	public static readonly AFGEROND_OP = 121;
	public static readonly ALLE = 122;
	public static readonly EERDER_DAN = 123;
	public static readonly GEDEELD_DOOR = 124;
	public static readonly GEDEELD_DOOR_ABS = 125;
	public static readonly GELIJK_AAN = 126;
	public static readonly GEVULD = 127;
	public static readonly GEVUURD = 128;
	public static readonly GROTER_DAN = 129;
	public static readonly INCONSISTENT = 130;
	public static readonly KLEINER_DAN = 131;
	public static readonly LATER_DAN = 132;
	public static readonly LEEG = 133;
	public static readonly MAAL = 134;
	public static readonly MIN = 135;
	public static readonly NAAR_BENEDEN = 136;
	public static readonly NAAR_BOVEN = 137;
	public static readonly NIET = 138;
	public static readonly ONGELIJK_ZIJN_AAN = 139;
	public static readonly ONGELIJK_AAN = 140;
	public static readonly PLUS = 141;
	public static readonly REKENKUNDIG = 142;
	public static readonly RICHTING_NUL = 143;
	public static readonly TOT = 144;
	public static readonly TOT_DE_MACHT = 145;
	public static readonly TOT_EN_MET = 146;
	public static readonly UNIEK = 147;
	public static readonly VANAF = 148;
	public static readonly VERENIGD_MET = 149;
	public static readonly VERMINDERD_MET = 150;
	public static readonly VOLDOEN = 151;
	public static readonly VOLDOET = 152;
	public static readonly WEG_VAN_NUL = 153;
	public static readonly DE_WORTEL_VAN = 154;
	public static readonly TENMINSTE = 155;
	public static readonly TEN_MINSTE = 156;
	public static readonly TEN_HOOGSTE = 157;
	public static readonly PRECIES = 158;
	public static readonly VOORWAARDE = 159;
	public static readonly VOORWAARDEN = 160;
	public static readonly BEZITTELIJK = 161;
	public static readonly BIJVOEGLIJK = 162;
	public static readonly BEZIELD = 163;
	public static readonly BOOLEAN = 164;
	public static readonly CIJFERS = 165;
	public static readonly DATUM_IN_DAGEN = 166;
	public static readonly DECIMALEN = 167;
	public static readonly ENUMERATIE = 168;
	public static readonly GEDIMENSIONEERD_MET = 169;
	public static readonly GEHEEL_GETAL = 170;
	public static readonly GETAL = 171;
	public static readonly KENMERK = 172;
	public static readonly KENMERKEN = 173;
	public static readonly MET = 174;
	public static readonly MET_EENHEID = 175;
	public static readonly MV_START = 176;
	public static readonly NEGATIEF = 177;
	public static readonly NIET_NEGATIEF = 178;
	public static readonly NUMERIEK = 179;
	public static readonly PERCENTAGE = 180;
	public static readonly POSITIEF = 181;
	public static readonly ROL = 182;
	public static readonly ROLLEN = 183;
	public static readonly TEKST = 184;
	public static readonly VOOR_ELK_JAAR = 185;
	public static readonly VOOR_ELKE_DAG = 186;
	public static readonly VOOR_ELKE_MAAND = 187;
	public static readonly AANTAL = 188;
	public static readonly EERSTE_VAN = 189;
	public static readonly IN_HELE = 190;
	public static readonly LAATSTE_VAN = 191;
	public static readonly REEKS_VAN_TEKSTEN_EN_WAARDEN = 192;
	public static readonly SOM_VAN = 193;
	public static readonly TIJDSDUUR_VAN = 194;
	public static readonly AFNEMENDE = 195;
	public static readonly IN_GELIJKE_DELEN = 196;
	public static readonly OVER_VERDELING = 197;
	public static readonly TOENEMENDE = 198;
	public static readonly DRIE_TELWOORD = 199;
	public static readonly EEN_TELWOORD = 200;
	public static readonly GEEN_VAN_DE = 201;
	public static readonly GEEN = 202;
	public static readonly TWEE_TELWOORD = 203;
	public static readonly VIER_TELWOORD = 204;
	public static readonly ALTIJD = 205;
	public static readonly BIJ = 206;
	public static readonly DAG = 207;
	public static readonly DAGEN = 208;
	public static readonly DAT = 209;
	public static readonly DE = 210;
	public static readonly DD_PUNT = 211;
	public static readonly DIE = 212;
	public static readonly EEN = 213;
	public static readonly EN = 214;
	public static readonly HET = 215;
	public static readonly MEERDERE = 216;
	public static readonly HIJ = 217;
	public static readonly IN = 218;
	public static readonly JAAR = 219;
	public static readonly JAREN = 220;
	public static readonly KWARTAAL = 221;
	public static readonly MAAND = 222;
	public static readonly MAANDEN = 223;
	public static readonly MILLISECONDE = 224;
	public static readonly MINUUT = 225;
	public static readonly MINUTEN = 226;
	public static readonly OF = 227;
	public static readonly ONWAAR = 228;
	public static readonly OP = 229;
	public static readonly OUDER = 230;
	public static readonly OVER = 231;
	public static readonly PERIODE = 232;
	public static readonly REKENDATUM = 233;
	public static readonly REKENJAAR = 234;
	public static readonly REGELVERSIE = 235;
	public static readonly SECONDE = 236;
	public static readonly SECONDEN = 237;
	public static readonly TM = 238;
	public static readonly UIT = 239;
	public static readonly UUR = 240;
	public static readonly UREN = 241;
	public static readonly VAN = 242;
	public static readonly VOLGENDE_VOORWAARDE = 243;
	public static readonly VOLGENDE_VOORWAARDEN = 244;
	public static readonly VOLGENDE = 245;
	public static readonly VOOR = 246;
	public static readonly WAAR = 247;
	public static readonly WEEK = 248;
	public static readonly WEKEN = 249;
	public static readonly ER = 250;
	public static readonly METER = 251;
	public static readonly KILOGRAM = 252;
	public static readonly VOET = 253;
	public static readonly POND = 254;
	public static readonly MIJL = 255;
	public static readonly GROTER_OF_GELIJK_IS_AAN = 256;
	public static readonly KLEINER_OF_GELIJK_IS_AAN = 257;
	public static readonly M = 258;
	public static readonly KG = 259;
	public static readonly S = 260;
	public static readonly FT = 261;
	public static readonly LB = 262;
	public static readonly MI = 263;
	public static readonly EURO_SYMBOL = 264;
	public static readonly DOLLAR_SYMBOL = 265;
	public static readonly DEGREE_SYMBOL = 266;
	public static readonly IDENTIFIER = 267;
	public static readonly NUMBER = 268;
	public static readonly EQUALS = 269;
	public static readonly DATE_TIME_LITERAL = 270;
	public static readonly PERCENTAGE_LITERAL = 271;
	public static readonly STRING_LITERAL = 272;
	public static readonly ENUM_LITERAL = 273;
	public static readonly LPAREN = 274;
	public static readonly RPAREN = 275;
	public static readonly LBRACE = 276;
	public static readonly RBRACE = 277;
	public static readonly COMMA = 278;
	public static readonly DOT = 279;
	public static readonly COLON = 280;
	public static readonly SEMICOLON = 281;
	public static readonly SLASH = 282;
	public static readonly PERCENT_SIGN = 283;
	public static readonly BULLET = 284;
	public static readonly ASTERISK = 285;
	public static readonly L_ANGLE_QUOTE = 286;
	public static readonly R_ANGLE_QUOTE = 287;
	public static readonly CARET = 288;
	public static readonly DOUBLE_DOT = 289;
	public static readonly LINE_WS = 290;
	public static readonly TAB = 291;
	public static readonly WS = 292;
	public static readonly LINE_COMMENT = 293;
	public static readonly MINUS = 294;
	public static readonly PIPE = 295;
	public static readonly NVT = 296;
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
	public static readonly RULE_bareComparisonOperator = 144;
	public static readonly RULE_comparisonOperator = 145;
	public static readonly RULE_additiveExpression = 146;
	public static readonly RULE_additiveOperator = 147;
	public static readonly RULE_multiplicativeExpression = 148;
	public static readonly RULE_multiplicativeOperator = 149;
	public static readonly RULE_powerExpression = 150;
	public static readonly RULE_powerOperator = 151;
	public static readonly RULE_primaryExpression = 152;
	public static readonly RULE_afronding = 153;
	public static readonly RULE_begrenzing = 154;
	public static readonly RULE_begrenzingMinimum = 155;
	public static readonly RULE_begrenzingMaximum = 156;
	public static readonly RULE_conditieBijExpressie = 157;
	public static readonly RULE_periodevergelijkingElementair = 158;
	public static readonly RULE_periodevergelijkingEnkelvoudig = 159;
	public static readonly RULE_periodeDefinitie = 160;
	public static readonly RULE_dateExpression = 161;
	public static readonly RULE_getalAggregatieFunctie = 162;
	public static readonly RULE_datumAggregatieFunctie = 163;
	public static readonly RULE_dimensieSelectie = 164;
	public static readonly RULE_aggregerenOverAlleDimensies = 165;
	public static readonly RULE_aggregerenOverVerzameling = 166;
	public static readonly RULE_aggregerenOverBereik = 167;
	public static readonly RULE_unaryCondition = 168;
	public static readonly RULE_regelStatusCondition = 169;
	public static readonly RULE_regelversieNaam = 170;
	public static readonly RULE_subordinateClauseExpression = 171;
	public static readonly RULE_dagsoortDefinition = 172;
	public static readonly RULE_tekstreeksExpr = 173;
	public static readonly RULE_verdelingResultaat = 174;
	public static readonly RULE_verdelingMethodeSimple = 175;
	public static readonly RULE_verdelingMethodeMultiLine = 176;
	public static readonly RULE_verdelingMethodeBulletList = 177;
	public static readonly RULE_verdelingMethodeBullet = 178;
	public static readonly RULE_verdelingMethode = 179;
	public static readonly RULE_verdelingRest = 180;
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
                                                            "'ongelijk is aan'",
                                                            "'later of gelijk is aan'",
                                                            "'eerder of gelijk is aan'",
                                                            "'later is dan'",
                                                            "'eerder is dan'",
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
                                                             "ONGELIJK_IS_AAN",
                                                             "LATER_OF_GELIJK_IS_AAN",
                                                             "EERDER_OF_GELIJK_IS_AAN",
                                                             "LATER_IS_DAN",
                                                             "EERDER_IS_DAN",
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
		"literalValue", "gelijkIsAanOperator", "geheleVergelijkingPrefix", "bareComparisonOperator",
		"comparisonOperator", "additiveExpression", "additiveOperator", "multiplicativeExpression",
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
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===28 || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 4031) !== 0)) {
				{
				this.state = 368;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 28:
				case 97:
				case 98:
				case 100:
				case 102:
				case 103:
				case 104:
					{
					this.state = 362;
					this.definitie();
					}
					break;
				case 94:
					{
					this.state = 363;
					this.regel();
					}
					break;
				case 95:
					{
					this.state = 364;
					this.regelGroep();
					}
					break;
				case 96:
					{
					this.state = 365;
					this.beslistabel();
					}
					break;
				case 93:
					{
					this.state = 366;
					this.consistentieregel();
					}
					break;
				case 101:
					{
					this.state = 367;
					this.eenheidsysteemDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 373;
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
			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 97:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 375;
				this.objectTypeDefinition();
				}
				break;
			case 98:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 376;
				this.domeinDefinition();
				}
				break;
			case 102:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 377;
				this.parameterDefinition();
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 378;
				this.dimensieDefinition();
				}
				break;
			case 28:
			case 103:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 379;
				this.feitTypeDefinition();
				}
				break;
			case 104:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 380;
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
			this.state = 383;
			this.match(RegelSpraakParser.BESLISTABEL);
			this.state = 384;
			this.naamwoord();
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===106) {
				{
				this.state = 385;
				this.regelVersie();
				}
			}

			this.state = 388;
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
			this.state = 390;
			this.beslistabelHeader();
			this.state = 391;
			this.beslistabelSeparator();
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 392;
				this.beslistabelRow();
				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===295);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 397;
			this.match(RegelSpraakParser.PIPE);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===295) {
				{
				this.state = 398;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 401;
			localctx._beslistabelColumnText = this.beslistabelColumnText();
			localctx._columns.push(localctx._beslistabelColumnText);
			this.state = 406;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 402;
					this.match(RegelSpraakParser.PIPE);
					this.state = 403;
					localctx._beslistabelColumnText = this.beslistabelColumnText();
					localctx._columns.push(localctx._beslistabelColumnText);
					}
					}
				}
				this.state = 408;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 409;
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
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===295) {
				{
				this.state = 412;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 423;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 416;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 415;
							this.match(RegelSpraakParser.MINUS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 418;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 421;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						this.state = 420;
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
				this.state = 425;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===294) {
				{
				{
				this.state = 427;
				this.match(RegelSpraakParser.MINUS);
				}
				}
				this.state = 432;
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
			this.state = 433;
			this.match(RegelSpraakParser.PIPE);
			this.state = 434;
			localctx._rowNumber = this.match(RegelSpraakParser.NUMBER);
			this.state = 435;
			this.match(RegelSpraakParser.PIPE);
			this.state = 436;
			localctx._beslistabelCellValue = this.beslistabelCellValue();
			localctx._cellValues.push(localctx._beslistabelCellValue);
			this.state = 441;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 437;
					this.match(RegelSpraakParser.PIPE);
					this.state = 438;
					localctx._beslistabelCellValue = this.beslistabelCellValue();
					localctx._cellValues.push(localctx._beslistabelCellValue);
					}
					}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 444;
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
			this.state = 449;
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
			case 94:
			case 108:
			case 111:
			case 117:
			case 118:
			case 119:
			case 122:
			case 130:
			case 135:
			case 138:
			case 154:
			case 159:
			case 188:
			case 189:
			case 191:
			case 193:
			case 194:
			case 199:
			case 200:
			case 203:
			case 204:
			case 207:
			case 208:
			case 210:
			case 213:
			case 215:
			case 217:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 228:
			case 230:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 240:
			case 241:
			case 247:
			case 248:
			case 249:
			case 251:
			case 267:
			case 268:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 294:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 447;
				this.expressie();
				}
				break;
			case 296:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 448;
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
			this.state = 452;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 451;
					_la = this._input.LA(1);
					if(_la<=0 || _la===295) {
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
				this.state = 454;
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
			this.state = 465;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				localctx = new BeslistabelGelijkstellingHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 456;
				this.beslistabelAttribuutHeader();
				this.state = 457;
				this.match(RegelSpraakParser.WORDT_GESTELD_OP);
				this.state = 458;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelKenmerkHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 460;
				this.onderwerpReferentie();
				this.state = 461;
				_la = this._input.LA(1);
				if(!(_la===108 || _la===111)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 462;
				this.kenmerkNaam();
				this.state = 463;
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
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				localctx = new BeslistabelDagsoortVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 467;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 468;
				this.beslistabelAttribuutHeader();
				this.state = 469;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===111 || _la===117)) {
				    (localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 470;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===202 || _la===213)) {
				    (localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 471;
				(localctx as BeslistabelDagsoortVoorwaardeHeaderContext)._dagsoort = this.kenmerkNaam();
				this.state = 472;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelUnaryVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 474;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 475;
				this.beslistabelAttribuutHeader();
				this.state = 476;
				(localctx as BeslistabelUnaryVoorwaardeHeaderContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 20483) !== 0))) {
				    (localctx as BeslistabelUnaryVoorwaardeHeaderContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 477;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 3:
				localctx = new BeslistabelGetalcontroleVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 479;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 480;
				this.beslistabelAttribuutHeader();
				this.state = 481;
				(localctx as BeslistabelGetalcontroleVoorwaardeHeaderContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 15) !== 0))) {
				    (localctx as BeslistabelGetalcontroleVoorwaardeHeaderContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 482;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 483;
				this.match(RegelSpraakParser.CIJFERS);
				this.state = 484;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 4:
				localctx = new BeslistabelAttribuutVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 486;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 487;
				this.beslistabelAttribuutHeader();
				this.state = 488;
				this.comparisonOperator();
				this.state = 489;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 5:
				localctx = new BeslistabelKenmerkVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 491;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 492;
				this.onderwerpReferentie();
				this.state = 494;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 493;
					_la = this._input.LA(1);
					if(!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 496;
				this.kenmerkNaam();
				this.state = 497;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 498;
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
			this.state = 502;
			this.beslistabelAttribuutNaam();
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===242) {
				{
				this.state = 503;
				this.match(RegelSpraakParser.VAN);
				this.state = 504;
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
			this.state = 507;
			this.beslistabelAttribuutEerstePhrase();
			this.state = 513;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 508;
					this.beslistabelAttribuutVoorzetsel();
					this.state = 509;
					this.beslistabelAttribuutVervolgPhrase();
					}
					}
				}
				this.state = 515;
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
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0)) {
				{
				this.state = 516;
				_la = this._input.LA(1);
				if(!(_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 519;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268451841) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 524;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268451841) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 529;
			_la = this._input.LA(1);
			if(!(((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1073741829) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 44044545) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 137) !== 0))) {
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
			this.state = 531;
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
			this.state = 533;
			_la = this._input.LA(1);
			if(!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267)) {
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
			this.state = 535;
			_la = this._input.LA(1);
			if(!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268451841) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267)) {
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
			this.state = 594;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0)) {
					{
					this.state = 537;
					_la = this._input.LA(1);
					if(!(_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 541;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 540;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 543;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 546;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 545;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 548;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 550;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 552;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 551;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 554;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 556;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 557;
					this.identifierOrKeyword();
					}
					}
					this.state = 560;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267);
				this.state = 562;
				this.match(RegelSpraakParser.MET);
				this.state = 564;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 563;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 566;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 568;
					this.identifierOrKeyword();
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267);
				this.state = 573;
				this.match(RegelSpraakParser.MET);
				this.state = 575;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 574;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 577;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 579;
				this.match(RegelSpraakParser.NIET);
				this.state = 581;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 580;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 583;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 585;
				this.match(RegelSpraakParser.HET);
				this.state = 586;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 587;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 588;
				this.match(RegelSpraakParser.IN);
				this.state = 590;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 589;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 592;
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
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0)) {
					{
					this.state = 596;
					_la = this._input.LA(1);
					if(!(_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 600;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 599;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 602;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 605;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 604;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 607;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 609;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 611;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 610;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 613;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 615;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 616;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 619;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267 || _la===268);
				this.state = 621;
				this.match(RegelSpraakParser.MET);
				this.state = 623;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 622;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 625;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 627;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 630;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267 || _la===268);
				this.state = 632;
				this.match(RegelSpraakParser.MET);
				this.state = 634;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 633;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 636;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 638;
				this.match(RegelSpraakParser.NIET);
				this.state = 640;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 639;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 642;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 644;
				this.match(RegelSpraakParser.HET);
				this.state = 645;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 646;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 647;
				this.match(RegelSpraakParser.IN);
				this.state = 649;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 648;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 651;
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
			this.state = 657;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 94:
			case 108:
			case 111:
			case 122:
			case 130:
			case 159:
			case 188:
			case 199:
			case 200:
			case 203:
			case 204:
			case 207:
			case 208:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 230:
			case 232:
			case 236:
			case 237:
			case 240:
			case 241:
			case 248:
			case 249:
			case 251:
			case 267:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 655;
				this.identifierOrKeyword();
				}
				break;
			case 268:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 656;
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
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0)) {
					{
					this.state = 659;
					_la = this._input.LA(1);
					if(!(_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 663;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 662;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 665;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 668;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 667;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 670;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 672;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 674;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 673;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 676;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 678;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 679;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 682;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268451841) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267);
				this.state = 684;
				this.match(RegelSpraakParser.MET);
				this.state = 686;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 685;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 688;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 690;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 693;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268451841) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267);
				this.state = 695;
				this.match(RegelSpraakParser.MET);
				this.state = 697;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 696;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 699;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 701;
				this.match(RegelSpraakParser.NIET);
				this.state = 703;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 702;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 705;
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
			this.state = 709;
			this.naamPhrase();
			this.state = 715;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 710;
					this.voorzetsel();
					this.state = 711;
					this.naamPhrase();
					}
					}
				}
				this.state = 717;
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
			this.state = 718;
			this.naamPhraseWithNumbers();
			this.state = 724;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 719;
					this.voorzetsel();
					this.state = 720;
					this.naamPhraseWithNumbers();
					}
					}
				}
				this.state = 726;
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
			this.state = 727;
			this.naamPhraseNoIs();
			this.state = 733;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 728;
					this.voorzetsel();
					this.state = 729;
					this.naamPhraseNoIs();
					}
					}
				}
				this.state = 735;
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
			this.state = 736;
			_la = this._input.LA(1);
			if(!(((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1073741829) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 44044545) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 137) !== 0))) {
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
			this.state = 738;
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
			this.state = 740;
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
			this.state = 742;
			_la = this._input.LA(1);
			if(!(((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & 1611509763) !== 0) || ((((_la - 240)) & ~0x1F) === 0 && ((1 << (_la - 240)) & 771) !== 0))) {
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
			this.state = 744;
			this.match(RegelSpraakParser.OBJECTTYPE);
			this.state = 745;
			this.naamwoordNoIs();
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===176) {
				{
				this.state = 746;
				this.match(RegelSpraakParser.MV_START);
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 747;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 750;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===267);
				this.state = 752;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===163) {
				{
				this.state = 755;
				this.match(RegelSpraakParser.BEZIELD);
				}
			}

			this.state = 761;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 758;
					this.objectTypeMember();
					}
					}
				}
				this.state = 763;
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
			this.state = 766;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 764;
				this.kenmerkSpecificatie();
				}
				break;
			case 2:
				{
				this.state = 765;
				this.attribuutSpecificatie();
				}
				break;
			}
			this.state = 768;
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
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===111) {
					{
					this.state = 770;
					this.match(RegelSpraakParser.IS);
					}
				}

				this.state = 773;
				this.identifier();
				}
				break;
			case 2:
				{
				this.state = 774;
				this.naamwoordWithNumbers();
				}
				break;
			}
			this.state = 777;
			this.match(RegelSpraakParser.KENMERK);
			this.state = 779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161 || _la===162) {
				{
				this.state = 778;
				_la = this._input.LA(1);
				if(!(_la===161 || _la===162)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & 7) !== 0)) {
				{
				this.state = 781;
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
			this.state = 784;
			this.naamwoordWithNumbers();
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===176) {
				{
				this.state = 785;
				this.match(RegelSpraakParser.MV_START);
				this.state = 786;
				localctx._meervoud = this.naamwoord();
				this.state = 787;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===291) {
				{
				this.state = 791;
				this.match(RegelSpraakParser.TAB);
				}
			}

			this.state = 797;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 794;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 795;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 796;
				this.objectTypeRef();
				}
				break;
			}
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===175) {
				{
				this.state = 799;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 800;
				this.eenheidExpressie();
				}
			}

			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===169) {
				{
				this.state = 803;
				this.match(RegelSpraakParser.GEDIMENSIONEERD_MET);
				this.state = 804;
				this.dimensieRef();
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===214) {
					{
					{
					this.state = 805;
					this.match(RegelSpraakParser.EN);
					this.state = 806;
					this.dimensieRef();
					}
					}
					this.state = 811;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & 7) !== 0)) {
				{
				this.state = 814;
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
			this.state = 823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 179:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 817;
				this.numeriekDatatype();
				}
				break;
			case 184:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 818;
				this.tekstDatatype();
				}
				break;
			case 164:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 819;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 166:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 820;
				this.datumTijdDatatype();
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 821;
				this.lijstDatatype();
				}
				break;
			case 180:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 822;
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
			this.state = 825;
			this.match(RegelSpraakParser.LIJST);
			this.state = 826;
			this.match(RegelSpraakParser.VAN);
			this.state = 830;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 827;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 828;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 829;
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
			this.state = 832;
			this.match(RegelSpraakParser.NUMERIEK);
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===274) {
				{
				this.state = 833;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 834;
				this.getalSpecificatie();
				this.state = 835;
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
			this.state = 839;
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
			this.state = 841;
			this.match(RegelSpraakParser.PERCENTAGE);
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===274) {
				{
				this.state = 842;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 843;
				this.getalSpecificatie();
				this.state = 844;
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
			this.state = 848;
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
			this.state = 850;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===166)) {
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
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 19) !== 0)) {
				{
				this.state = 852;
				_la = this._input.LA(1);
				if(!(((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 19) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 861;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 855;
				this.match(RegelSpraakParser.GEHEEL_GETAL);
				}
				break;
			case 2:
				{
				{
				this.state = 856;
				this.match(RegelSpraakParser.GETAL);
				this.state = 857;
				this.match(RegelSpraakParser.MET);
				this.state = 858;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 859;
				this.match(RegelSpraakParser.DECIMALEN);
				}
				}
				break;
			case 3:
				{
				this.state = 860;
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
			this.state = 863;
			this.match(RegelSpraakParser.DOMEIN);
			this.state = 864;
			localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 865;
			this.match(RegelSpraakParser.IS_VAN_HET_TYPE);
			this.state = 866;
			this.domeinType();
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===175) {
				{
				this.state = 867;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 868;
				this.eenheidExpressie();
				}
			}

			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===281) {
				{
				this.state = 871;
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
			this.state = 879;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 168:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 874;
				this.enumeratieSpecificatie();
				}
				break;
			case 179:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 875;
				this.numeriekDatatype();
				}
				break;
			case 184:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 876;
				this.tekstDatatype();
				}
				break;
			case 164:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 877;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 166:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 878;
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
			this.state = 881;
			this.match(RegelSpraakParser.ENUMERATIE);
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 882;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				}
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===273);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 887;
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
			this.state = 889;
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
			this.state = 891;
			this.match(RegelSpraakParser.EENHEIDSYSTEEM);
			this.state = 892;
			localctx._name = this.identifier();
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===210 || _la===215) {
				{
				{
				this.state = 893;
				this.eenheidEntry();
				}
				}
				this.state = 898;
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
			this.state = 899;
			_la = this._input.LA(1);
			if(!(_la===210 || _la===215)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 900;
			localctx._unitName = this.unitIdentifierWithTime();
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===176) {
				{
				this.state = 901;
				this.match(RegelSpraakParser.MV_START);
				this.state = 902;
				localctx._pluralName = this.unitIdentifierWithTime();
				this.state = 903;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 907;
			localctx._abbrev = this.unitIdentifierWithTime();
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===135 || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & 1611657219) !== 0) || ((((_la - 240)) & ~0x1F) === 0 && ((1 << (_la - 240)) & 268237571) !== 0)) {
				{
				this.state = 908;
				localctx._symbol_ = this.unitIdentifierWithTime();
				}
			}

			this.state = 917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===269) {
				{
				this.state = 911;
				this.match(RegelSpraakParser.EQUALS);
				this.state = 913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===282) {
					{
					this.state = 912;
					this.match(RegelSpraakParser.SLASH);
					}
				}

				this.state = 915;
				localctx._value = this.match(RegelSpraakParser.NUMBER);
				this.state = 916;
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
			this.state = 919;
			_la = this._input.LA(1);
			if(!(_la===135 || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4160958471) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 1023) !== 0))) {
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
			this.state = 931;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 135:
			case 224:
			case 225:
			case 226:
			case 236:
			case 237:
			case 240:
			case 241:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 258:
			case 259:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 921;
				this.unitIdentifier();
				}
				break;
			case 207:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 922;
				this.match(RegelSpraakParser.DAG);
				}
				break;
			case 208:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 923;
				this.match(RegelSpraakParser.DAGEN);
				}
				break;
			case 222:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 924;
				this.match(RegelSpraakParser.MAAND);
				}
				break;
			case 223:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 925;
				this.match(RegelSpraakParser.MAANDEN);
				}
				break;
			case 219:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 926;
				this.match(RegelSpraakParser.JAAR);
				}
				break;
			case 220:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 927;
				this.match(RegelSpraakParser.JAREN);
				}
				break;
			case 248:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 928;
				this.match(RegelSpraakParser.WEEK);
				}
				break;
			case 249:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 929;
				this.match(RegelSpraakParser.WEKEN);
				}
				break;
			case 221:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 930;
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
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 933;
				this.unitProduct();
				this.state = 938;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 934;
						this.match(RegelSpraakParser.SLASH);
						this.state = 935;
						this.unitProduct();
						}
						}
					}
					this.state = 940;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 941;
				this.match(RegelSpraakParser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 942;
				this.match(RegelSpraakParser.PERCENT_SIGN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 943;
				this.match(RegelSpraakParser.EURO_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 944;
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
			this.state = 947;
			this.eenheidMacht();
			this.state = 952;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 948;
					this.match(RegelSpraakParser.ASTERISK);
					this.state = 949;
					this.eenheidMacht();
					}
					}
				}
				this.state = 954;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
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
			this.state = 955;
			this.unitIdentifier();
			this.state = 958;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 956;
				this.match(RegelSpraakParser.CARET);
				this.state = 957;
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
			this.state = 960;
			this.match(RegelSpraakParser.DIMENSIE);
			this.state = 961;
			this.naamwoord();
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===278) {
				{
				this.state = 962;
				this.match(RegelSpraakParser.COMMA);
				}
			}

			this.state = 965;
			this.match(RegelSpraakParser.BESTAANDE_UIT);
			this.state = 966;
			localctx._dimensieNaamMeervoud = this.naamwoord();
			this.state = 967;
			this.voorzetselSpecificatie();
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 968;
				this.labelWaardeSpecificatie();
				}
				}
				this.state = 971;
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
	public voorzetselSpecificatie(): VoorzetselSpecificatieContext {
		let localctx: VoorzetselSpecificatieContext = new VoorzetselSpecificatieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, RegelSpraakParser.RULE_voorzetselSpecificatie);
		let _la: number;
		try {
			this.state = 980;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 973;
				this.match(RegelSpraakParser.NA_HET_ATTRIBUUT_MET_VOORZETSEL);
				this.state = 974;
				localctx._vz = this.voorzetsel();
				this.state = 975;
				this.match(RegelSpraakParser.RPAREN);
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===280) {
					{
					this.state = 976;
					this.match(RegelSpraakParser.COLON);
					}
				}

				}
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 979;
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
			this.state = 982;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 983;
			this.match(RegelSpraakParser.DOT);
			this.state = 984;
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
			this.state = 986;
			_la = this._input.LA(1);
			if(!(((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & 7) !== 0))) {
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
			this.state = 988;
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
			this.state = 990;
			this.match(RegelSpraakParser.PARAMETER);
			this.state = 991;
			this.parameterNamePhrase();
			this.state = 992;
			this.match(RegelSpraakParser.COLON);
			this.state = 995;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 99:
			case 164:
			case 166:
			case 179:
			case 180:
			case 184:
				{
				this.state = 993;
				this.datatype();
				}
				break;
			case 267:
				{
				this.state = 994;
				this.domeinRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===175) {
				{
				this.state = 997;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 998;
				this.eenheidExpressie();
				}
			}

			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===111) {
				{
				this.state = 1001;
				this.match(RegelSpraakParser.IS);
				this.state = 1002;
				this.expressie();
				}
			}

			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & 7) !== 0)) {
				{
				this.state = 1005;
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
			this.state = 1009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===210 || _la===215) {
				{
				this.state = 1008;
				_la = this._input.LA(1);
				if(!(_la===210 || _la===215)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1011;
			this.parameterNamePart();
			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1073741829) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 44044545) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 137) !== 0)) {
				{
				{
				this.state = 1012;
				this.voorzetsel();
				this.state = 1013;
				this.parameterNamePart();
				}
				}
				this.state = 1019;
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
			this.state = 1020;
			_la = this._input.LA(1);
			if(!(_la===188 || _la===267)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1024;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1021;
					_la = this._input.LA(1);
					if(!(_la===188 || _la===267 || _la===268)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 1026;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
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
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===210 || _la===215) {
					{
					this.state = 1027;
					_la = this._input.LA(1);
					if(!(_la===210 || _la===215)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1030;
				this.parameterNamePart();
				this.state = 1036;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1031;
						this.voorzetsel();
						this.state = 1032;
						this.parameterNamePart();
						}
						}
					}
					this.state = 1038;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 109, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1039;
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
			this.state = 1057;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1042;
				this.match(RegelSpraakParser.FEITTYPE);
				this.state = 1043;
				localctx._feittypenaam = this.naamwoord();
				this.state = 1044;
				this.rolDefinition();
				this.state = 1046;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1045;
						this.rolDefinition();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1048;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1050;
				this.cardinalityLine();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1052;
				this.match(RegelSpraakParser.WEDERKERIG_FEITTYPE);
				this.state = 1053;
				localctx._feittypenaam = this.naamwoord();
				this.state = 1054;
				this.rolDefinition();
				this.state = 1055;
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
			this.state = 1059;
			localctx._article = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===210 || _la===215)) {
			    localctx._article = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1060;
			this.rolNameWords();
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===176) {
				{
				this.state = 1061;
				this.match(RegelSpraakParser.MV_START);
				this.state = 1062;
				localctx._meervoud = this.naamwoord();
				this.state = 1063;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 1067;
			this.match(RegelSpraakParser.TAB);
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1068;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._objectTypeName.push(localctx._IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 114, this._ctx);
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
			this.state = 1075;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1075;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 94:
				case 108:
				case 111:
				case 122:
				case 130:
				case 159:
				case 188:
				case 199:
				case 200:
				case 203:
				case 204:
				case 207:
				case 208:
				case 219:
				case 220:
				case 221:
				case 222:
				case 223:
				case 224:
				case 225:
				case 226:
				case 230:
				case 232:
				case 236:
				case 237:
				case 240:
				case 241:
				case 248:
				case 249:
				case 251:
				case 267:
					{
					this.state = 1073;
					this.identifierOrKeyword();
					}
					break;
				case 144:
				case 146:
				case 174:
				case 206:
				case 214:
				case 218:
				case 227:
				case 229:
				case 231:
				case 239:
				case 242:
				case 246:
					{
					this.state = 1074;
					this.voorzetsel();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 536952833) !== 0) || ((((_la - 174)) & ~0x1F) === 0 && ((1 << (_la - 174)) & 1711292417) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 3351245063) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 268441231) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1080;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1079;
				this.cardinalityWord();
				}
				}
				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4026531838) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 536870911) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 4294967233) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4294967295) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & 4294967295) !== 0) || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 4294967295) !== 0) || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 4290772991) !== 0) || ((((_la - 291)) & ~0x1F) === 0 && ((1 << (_la - 291)) & 63) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1084;
			_la = this._input.LA(1);
			if(_la<=0 || _la===28 || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 4031) !== 0) || _la===281) {
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
			this.state = 1086;
			this.match(RegelSpraakParser.REGEL);
			this.state = 1087;
			this.regelName();
			this.state = 1089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===268) {
				{
				this.state = 1088;
				this.match(RegelSpraakParser.NUMBER);
				}
			}

			this.state = 1092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1091;
				this.regelVersieBlok();
				}
				}
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===106);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1096;
			this.regelVersie();
			this.state = 1097;
			this.resultaatDeel();
			this.state = 1103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 109:
				{
				this.state = 1098;
				this.voorwaardeDeel();
				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===279) {
					{
					this.state = 1099;
					this.match(RegelSpraakParser.DOT);
					}
				}

				}
				break;
			case 279:
				{
				this.state = 1102;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			case -1:
			case 28:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
				break;
			default:
				break;
			}
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 1105;
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
			this.state = 1108;
			this.match(RegelSpraakParser.REGELGROEP);
			this.state = 1109;
			this.naamwoord();
			this.state = 1111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===110) {
				{
				this.state = 1110;
				localctx._isRecursive = this.match(RegelSpraakParser.IS_RECURSIEF);
				}
			}

			this.state = 1115;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1115;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 94:
						{
						this.state = 1113;
						this.regel();
						}
						break;
					case 93:
						{
						this.state = 1114;
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
				this.state = 1117;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
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
			this.state = 1119;
			this.naamwoordWithNumbers();
			this.state = 1123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===111 || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 262209) !== 0) || _la===278) {
				{
				{
				this.state = 1120;
				this.regelNameExtension();
				}
				}
				this.state = 1125;
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
			this.state = 1140;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1126;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1127;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1128;
				this.naamwoordWithNumbers();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1129;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1130;
				this.match(RegelSpraakParser.MET);
				this.state = 1131;
				this.naamwoordWithNumbers();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1132;
				this.match(RegelSpraakParser.EN);
				this.state = 1133;
				this.naamwoordWithNumbers();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1134;
				this.match(RegelSpraakParser.IS);
				this.state = 1135;
				this.naamwoordWithNumbers();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1136;
				this.match(RegelSpraakParser.GEEN);
				this.state = 1137;
				this.naamwoordWithNumbers();
				this.state = 1138;
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
			this.state = 1142;
			this.match(RegelSpraakParser.GELDIG);
			this.state = 1143;
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
			this.state = 1154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 205:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1145;
				this.match(RegelSpraakParser.ALTIJD);
				}
				break;
			case 148:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1146;
				this.match(RegelSpraakParser.VANAF);
				this.state = 1147;
				this.geldigheidsDatum();
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146 || _la===238) {
					{
					this.state = 1148;
					_la = this._input.LA(1);
					if(!(_la===146 || _la===238)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1149;
					this.geldigheidsDatum();
					}
				}

				}
				break;
			case 146:
			case 238:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1152;
				_la = this._input.LA(1);
				if(!(_la===146 || _la===238)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1153;
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
			this.state = 1158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 270:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1156;
				this.datumLiteral();
				}
				break;
			case 268:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1157;
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
			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				localctx = new DagsoortdefinitieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1160;
				this.match(RegelSpraakParser.EEN);
				this.state = 1161;
				this.match(RegelSpraakParser.DAG);
				this.state = 1162;
				this.match(RegelSpraakParser.IS);
				this.state = 1163;
				this.match(RegelSpraakParser.EEN);
				this.state = 1164;
				this.naamwoord();
				}
				break;
			case 2:
				localctx = new GelijkstellingResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1165;
				this.attribuutReferentie();
				this.state = 1172;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
					{
					this.state = 1166;
					this.match(RegelSpraakParser.WORDT_BEREKEND_ALS);
					this.state = 1167;
					this.expressie();
					}
					break;
				case 9:
					{
					this.state = 1168;
					this.match(RegelSpraakParser.WORDT_GESTELD_OP);
					this.state = 1169;
					this.expressie();
					}
					break;
				case 10:
					{
					this.state = 1170;
					this.match(RegelSpraakParser.WORDT_GEINITIALISEERD_OP);
					this.state = 1171;
					this.expressie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 21) !== 0) || _la===242) {
					{
					this.state = 1174;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 3:
				localctx = new ConsistencyCheckResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1177;
				this.attribuutReferentie();
				this.state = 1178;
				this.match(RegelSpraakParser.MOET);
				this.state = 1179;
				this.consistencyOperator();
				this.state = 1180;
				this.expressie();
				}
				break;
			case 4:
				localctx = new FeitCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1182;
				this.feitCreatiePattern();
				}
				break;
			case 5:
				localctx = new ObjectCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1183;
				this.objectCreatie();
				}
				break;
			case 6:
				localctx = new RelationshipWithAttributeResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1184;
				this.onderwerpReferentie();
				this.state = 1185;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1186;
				_la = this._input.LA(1);
				if(!(_la===210 || _la===215)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1187;
				this.naamwoord();
				this.state = 1188;
				this.match(RegelSpraakParser.MET);
				this.state = 1189;
				this.attribuutMetLidwoord();
				this.state = 1190;
				_la = this._input.LA(1);
				if(!(_la===44 || _la===50 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1191;
				this.expressie();
				}
				break;
			case 7:
				localctx = new KenmerkFeitResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1193;
				this.onderwerpReferentie();
				this.state = 1194;
				_la = this._input.LA(1);
				if(!(_la===108 || _la===111)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1195;
				this.kenmerkNaam();
				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 21) !== 0) || _la===242) {
					{
					this.state = 1196;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 8:
				localctx = new VerdelingContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1199;
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
			this.state = 1202;
			_la = this._input.LA(1);
			if(!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 23) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 24617) !== 0))) {
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
			this.state = 1204;
			this.match(RegelSpraakParser.EEN);
			this.state = 1205;
			localctx._role1 = this.feitCreatieRolPhrase();
			this.state = 1206;
			this.match(RegelSpraakParser.VAN);
			this.state = 1207;
			this.match(RegelSpraakParser.EEN);
			this.state = 1208;
			localctx._subject1 = this.feitCreatieSubjectPhrase();
			this.state = 1209;
			this.match(RegelSpraakParser.IS);
			this.state = 1210;
			localctx._article2 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
			    localctx._article2 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1211;
			localctx._role2 = this.feitCreatieRolPhrase();
			this.state = 1212;
			this.match(RegelSpraakParser.VAN);
			this.state = 1213;
			localctx._article3 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
			    localctx._article3 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1214;
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
			this.state = 1217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1216;
				this.feitCreatieWord();
				}
				}
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 536887297) !== 0) || ((((_la - 174)) & ~0x1F) === 0 && ((1 << (_la - 174)) & 1711292417) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 3349147911) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 268441223) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1222;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1221;
					this.feitCreatieSubjectWord();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1224;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
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
			this.state = 1231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 94:
			case 108:
			case 111:
			case 122:
			case 130:
			case 159:
			case 188:
			case 199:
			case 200:
			case 203:
			case 204:
			case 207:
			case 208:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 230:
			case 232:
			case 236:
			case 237:
			case 240:
			case 241:
			case 248:
			case 249:
			case 251:
			case 267:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1226;
				this.identifierOrKeyword();
				}
				break;
			case 144:
			case 146:
			case 174:
			case 206:
			case 214:
			case 218:
			case 227:
			case 229:
			case 231:
			case 239:
			case 242:
			case 246:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1227;
				this.voorzetsel();
				}
				break;
			case 210:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1228;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 215:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1229;
				this.match(RegelSpraakParser.HET);
				}
				break;
			case 213:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1230;
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
			this.state = 1235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 94:
			case 108:
			case 111:
			case 122:
			case 130:
			case 159:
			case 188:
			case 199:
			case 200:
			case 203:
			case 204:
			case 207:
			case 208:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 230:
			case 232:
			case 236:
			case 237:
			case 240:
			case 241:
			case 248:
			case 249:
			case 251:
			case 267:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1233;
				this.identifierOrKeyword();
				}
				break;
			case 144:
			case 174:
			case 206:
			case 214:
			case 218:
			case 229:
			case 231:
			case 239:
			case 246:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1234;
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
			this.state = 1237;
			_la = this._input.LA(1);
			if(!(_la===144 || _la===174 || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 41947393) !== 0) || _la===239 || _la===246)) {
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
			this.state = 1239;
			localctx._subject = this.onderwerpReferentie();
			this.state = 1240;
			this.match(RegelSpraakParser.HEEFT);
			this.state = 1241;
			localctx._roleArticle = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
			    localctx._roleArticle = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1242;
			localctx._role = this.naamwoord();
			this.state = 1244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===174) {
				{
				this.state = 1243;
				this.objectAttributeInit();
				}
			}

			this.state = 1247;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1246;
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
			this.state = 1249;
			this.match(RegelSpraakParser.MET);
			this.state = 1250;
			this.waardetoekenning();
			this.state = 1255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===278) {
				{
				{
				this.state = 1251;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1252;
				this.waardetoekenning();
				}
				}
				this.state = 1257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===214) {
				{
				this.state = 1258;
				this.match(RegelSpraakParser.EN);
				this.state = 1259;
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
			this.state = 1262;
			localctx._attribuut = this.simpleNaamwoord();
			this.state = 1263;
			this.match(RegelSpraakParser.GELIJK_AAN);
			this.state = 1264;
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
			this.state = 1266;
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
			this.state = 1268;
			this.match(RegelSpraakParser.CONSISTENTIEREGEL);
			this.state = 1269;
			this.naamwoord();
			this.state = 1279;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1270;
				this.uniekzijnResultaat();
				}
				break;
			case 2:
				{
				this.state = 1271;
				this.inconsistentResultaat();
				this.state = 1277;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 109:
					{
					this.state = 1272;
					this.voorwaardeDeel();
					this.state = 1274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===279) {
						{
						this.state = 1273;
						this.match(RegelSpraakParser.DOT);
						}
					}

					}
					break;
				case 279:
					{
					this.state = 1276;
					this.match(RegelSpraakParser.DOT);
					}
					break;
				case -1:
				case 28:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
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
			this.state = 1281;
			this.alleAttributenVanObjecttype();
			this.state = 1282;
			this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
			this.state = 1284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===279) {
				{
				this.state = 1283;
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
			this.state = 1286;
			this.match(RegelSpraakParser.DE);
			this.state = 1287;
			this.naamwoord();
			this.state = 1288;
			this.match(RegelSpraakParser.VAN);
			this.state = 1289;
			this.match(RegelSpraakParser.ALLE);
			this.state = 1290;
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
			this.state = 1293;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1292;
				_la = this._input.LA(1);
				if(!(_la===210 || _la===215 || _la===250)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1295;
			this.naamwoord();
			this.state = 1296;
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
			this.state = 1298;
			this.match(RegelSpraakParser.INDIEN);
			this.state = 1301;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				this.state = 1299;
				this.expressie();
				}
				break;
			case 2:
				{
				this.state = 1300;
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
			this.state = 1345;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1303;
				this.match(RegelSpraakParser.ER_AAN);
				this.state = 1304;
				this.voorwaardeKwantificatie();
				this.state = 1305;
				_la = this._input.LA(1);
				if(!(_la===243 || _la===244)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1306;
				this.match(RegelSpraakParser.WORDT_VOLDAAN);
				this.state = 1307;
				this.match(RegelSpraakParser.COLON);
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1308;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===284 || _la===294);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1317;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1313;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1314;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1315;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1316;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1319;
				this.match(RegelSpraakParser.AAN);
				this.state = 1320;
				this.voorwaardeKwantificatie();
				this.state = 1321;
				_la = this._input.LA(1);
				if(!(_la===243 || _la===244)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1322;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1323;
				this.match(RegelSpraakParser.COLON);
				this.state = 1325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1324;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===284 || _la===294);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1333;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 152, this._ctx) ) {
				case 1:
					{
					this.state = 1329;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1330;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1331;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1332;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1335;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1336;
				this.match(RegelSpraakParser.AAN);
				this.state = 1337;
				this.voorwaardeKwantificatie();
				this.state = 1338;
				_la = this._input.LA(1);
				if(!(_la===243 || _la===244)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1339;
				this.match(RegelSpraakParser.COLON);
				this.state = 1341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1340;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===284 || _la===294);
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
			this.state = 1362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 210:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1347;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 122:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1348;
				this.match(RegelSpraakParser.ALLE);
				}
				break;
			case 201:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1349;
				this.match(RegelSpraakParser.GEEN_VAN_DE);
				}
				break;
			case 155:
			case 156:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1350;
				_la = this._input.LA(1);
				if(!(_la===155 || _la===156)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1351;
				_la = this._input.LA(1);
				if(!(((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 16435) !== 0) || _la===268)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1352;
				this.match(RegelSpraakParser.VAN);
				this.state = 1353;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 157:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1354;
				this.match(RegelSpraakParser.TEN_HOOGSTE);
				this.state = 1355;
				_la = this._input.LA(1);
				if(!(((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 16435) !== 0) || _la===268)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1356;
				this.match(RegelSpraakParser.VAN);
				this.state = 1357;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 158:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1358;
				this.match(RegelSpraakParser.PRECIES);
				this.state = 1359;
				_la = this._input.LA(1);
				if(!(((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 16435) !== 0) || _la===268)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1360;
				this.match(RegelSpraakParser.VAN);
				this.state = 1361;
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
			this.state = 1364;
			this.outerBulletPrefix();
			this.state = 1367;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1365;
				this.elementaireVoorwaarde();
				}
				break;
			case 2:
				{
				this.state = 1366;
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
			this.state = 1369;
			_la = this._input.LA(1);
			if(!(_la===284 || _la===294)) {
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
			this.state = 1374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 289:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1371;
				this.match(RegelSpraakParser.DOUBLE_DOT);
				}
				break;
			case 284:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1372;
				this.match(RegelSpraakParser.BULLET);
				this.state = 1373;
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
			this.state = 1377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1376;
				_la = this._input.LA(1);
				if(!(((((_la - 284)) & ~0x1F) === 0 && ((1 << (_la - 284)) & 1059) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 1379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 284)) & ~0x1F) === 0 && ((1 << (_la - 284)) & 1059) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1381;
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
			this.state = 1386;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1383;
				this.onderwerpReferentie();
				}
				break;
			case 2:
				{
				this.state = 1384;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 3:
				{
				this.state = 1385;
				this.match(RegelSpraakParser.ER);
				}
				break;
			}
			this.state = 1388;
			this.match(RegelSpraakParser.VOLDOET);
			this.state = 1389;
			this.match(RegelSpraakParser.AAN);
			this.state = 1390;
			this.voorwaardeKwantificatie();
			this.state = 1391;
			_la = this._input.LA(1);
			if(!(_la===243 || _la===244)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1392;
			this.match(RegelSpraakParser.COLON);
			this.state = 1394;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1393;
					this.genesteSamengesteldeVoorwaardeOnderdeel();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1396;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
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
			this.state = 1398;
			this.nestedBulletPrefix();
			this.state = 1401;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1399;
				this.elementaireVoorwaarde();
				}
				break;
			case 2:
				{
				this.state = 1400;
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
			this.state = 1403;
			this.onderwerpBasis();
			this.state = 1406;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1404;
				_la = this._input.LA(1);
				if(!(_la===209 || _la===212)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1405;
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
			this.state = 1408;
			this.onderwerpBasisWithNumbers();
			this.state = 1411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===209 || _la===212) {
				{
				this.state = 1409;
				_la = this._input.LA(1);
				if(!(_la===209 || _la===212)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1410;
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
			this.state = 1413;
			this.basisOnderwerp();
			this.state = 1419;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1414;
					this.voorzetsel();
					this.state = 1415;
					this.basisOnderwerp();
					}
					}
				}
				this.state = 1421;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
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
			this.state = 1422;
			this.basisOnderwerpWithNumbers();
			this.state = 1428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1073741829) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 44044545) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 137) !== 0)) {
				{
				{
				this.state = 1423;
				this.voorzetsel();
				this.state = 1424;
				this.basisOnderwerpWithNumbers();
				}
				}
				this.state = 1430;
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
			this.state = 1438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 117:
			case 210:
			case 213:
			case 215:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1431;
				_la = this._input.LA(1);
				if(!(_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1433;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1432;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1435;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 166, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 217:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1437;
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
			this.state = 1447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 117:
			case 210:
			case 213:
			case 215:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1440;
				_la = this._input.LA(1);
				if(!(_la===117 || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1442;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1441;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 1444;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267 || _la===268);
				}
				break;
			case 217:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1446;
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
			this.state = 1449;
			this.attribuutMetLidwoord();
			this.state = 1450;
			this.match(RegelSpraakParser.VAN);
			this.state = 1451;
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
			this.state = 1453;
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
			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1073741829) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 44044545) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 137) !== 0)) {
				{
				this.state = 1455;
				this.voorzetsel();
				}
			}

			this.state = 1458;
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
			this.state = 1461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 1073741829) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 44044545) !== 0) || ((((_la - 239)) & ~0x1F) === 0 && ((1 << (_la - 239)) & 137) !== 0)) {
				{
				this.state = 1460;
				this.voorzetsel();
				}
			}

			this.state = 1464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0)) {
				{
				this.state = 1463;
				_la = this._input.LA(1);
				if(!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1466;
				this.identifierOrKeywordWithNumbers();
				}
				}
				this.state = 1469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 268582913) !== 0) || _la===130 || _la===159 || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2149160961) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267 || _la===268);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1471;
			_la = this._input.LA(1);
			if(!(((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1472;
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
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1474;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1475;
				this.naamwoord();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1476;
				this.naamwoord();
				this.state = 1479;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
				case 1:
					{
					this.state = 1477;
					_la = this._input.LA(1);
					if(!(_la===209 || _la===212)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1478;
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
			this.state = 1485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 66:
			case 67:
			case 68:
			case 69:
			case 94:
			case 108:
			case 111:
			case 117:
			case 122:
			case 130:
			case 138:
			case 144:
			case 146:
			case 159:
			case 174:
			case 188:
			case 199:
			case 200:
			case 203:
			case 204:
			case 206:
			case 207:
			case 208:
			case 210:
			case 213:
			case 214:
			case 215:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 229:
			case 230:
			case 231:
			case 232:
			case 236:
			case 237:
			case 239:
			case 240:
			case 241:
			case 242:
			case 246:
			case 248:
			case 249:
			case 251:
			case 267:
			case 268:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1483;
				this.elementairPredicaat();
				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1484;
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
			this.state = 1492;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1487;
				this.attribuutVergelijkingsPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1488;
				this.objectPredicaat();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1489;
				this.getalPredicaat();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1490;
				this.tekstPredicaat();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1491;
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
			this.state = 1494;
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
			this.state = 1501;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1499;
				this.kenmerkNaam();
				}
				break;
			case 2:
				{
				this.state = 1500;
				this.rolNaam();
				}
				break;
			}
			this.state = 1503;
			_la = this._input.LA(1);
			if(!(_la===107 || _la===117)) {
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
			this.state = 1505;
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
			this.state = 1508;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1507;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			}
			this.state = 1510;
			localctx._attribuutNaam = this.naamwoord();
			this.state = 1511;
			this.match(RegelSpraakParser.HEBBEN);
			this.state = 1513;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1512;
				localctx._gp = this.geheleVergelijkingPrefix();
				}
				break;
			}
			this.state = 1515;
			this.comparisonOperator();
			this.state = 1516;
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
			this.state = 1518;
			this.getalVergelijkingsOperatorMeervoud();
			this.state = 1519;
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
			this.state = 1521;
			this.tekstVergelijkingsOperatorMeervoud();
			this.state = 1522;
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
			this.state = 1524;
			this.datumVergelijkingsOperatorMeervoud();
			this.state = 1525;
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
			this.state = 1527;
			this.match(RegelSpraakParser.AAN);
			this.state = 1528;
			this.voorwaardeKwantificatie();
			this.state = 1529;
			_la = this._input.LA(1);
			if(!(_la===243 || _la===244)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1530;
			_la = this._input.LA(1);
			if(!(_la===151 || _la===152)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1531;
			this.match(RegelSpraakParser.COLON);
			this.state = 1533;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1532;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1535;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
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
			this.state = 1543;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1537;
				this.bulletPrefix();
				this.state = 1538;
				this.elementaireVoorwaardeInPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1540;
				this.bulletPrefix();
				this.state = 1541;
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
			this.state = 1545;
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
			this.state = 1568;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1549;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1547;
					this.attribuutReferentie();
					}
					break;
				case 2:
					{
					this.state = 1548;
					this.bezieldeReferentie();
					}
					break;
				}
				this.state = 1551;
				_la = this._input.LA(1);
				if(!(_la===111 || _la===117)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1552;
				this.kenmerkNaam();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1556;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
				case 1:
					{
					this.state = 1554;
					this.attribuutReferentie();
					}
					break;
				case 2:
					{
					this.state = 1555;
					this.bezieldeReferentie();
					}
					break;
				}
				this.state = 1559;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
				case 1:
					{
					this.state = 1558;
					localctx._gp = this.geheleVergelijkingPrefix();
					}
					break;
				}
				this.state = 1561;
				this.comparisonOperator();
				this.state = 1562;
				this.expressie();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1564;
				this.onderwerpReferentie();
				this.state = 1565;
				this.eenzijdigeObjectVergelijking();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1567;
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
			this.state = 1574;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 152:
				{
				this.state = 1570;
				this.match(RegelSpraakParser.VOLDOET);
				}
				break;
			case 151:
				{
				this.state = 1571;
				this.match(RegelSpraakParser.VOLDOEN);
				}
				break;
			case 115:
				{
				this.state = 1572;
				this.match(RegelSpraakParser.WORDT);
				this.state = 1573;
				this.match(RegelSpraakParser.VOLDAAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1576;
			this.match(RegelSpraakParser.AAN);
			this.state = 1577;
			this.voorwaardeKwantificatie();
			this.state = 1578;
			_la = this._input.LA(1);
			if(!(_la===243 || _la===244)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1579;
			this.match(RegelSpraakParser.COLON);
			this.state = 1581;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1580;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1583;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
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
			this.state = 1585;
			_la = this._input.LA(1);
			if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 63) !== 0))) {
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
			this.state = 1587;
			_la = this._input.LA(1);
			if(!(_la===56 || _la===57)) {
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
			this.state = 1589;
			_la = this._input.LA(1);
			if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 15363) !== 0))) {
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
			this.state = 1591;
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
			this.state = 1593;
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
			this.state = 1619;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1595;
				this.datumLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1596;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1597;
				this.match(RegelSpraakParser.REKENJAAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1598;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1599;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1600;
				this.primaryExpression(0);
				this.state = 1601;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1602;
				this.primaryExpression(0);
				this.state = 1603;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1604;
				this.primaryExpression(0);
				this.state = 1605;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1607;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1608;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1609;
				this.primaryExpression(0);
				this.state = 1610;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1612;
				this.attribuutReferentie();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1613;
				this.bezieldeReferentie();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1614;
				this.parameterMetLidwoord();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1615;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1616;
				this.expressie();
				this.state = 1617;
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
			this.state = 1621;
			this.match(RegelSpraakParser.DAARBIJ_GELDT);
			this.state = 1625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===210 || _la===215 || _la===267) {
				{
				{
				this.state = 1622;
				this.variabeleToekenning();
				}
				}
				this.state = 1627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1628;
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
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===210 || _la===215) {
				{
				this.state = 1630;
				localctx._article = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===210 || _la===215)) {
				    localctx._article = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1633;
			localctx._varName = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 1634;
			this.match(RegelSpraakParser.IS);
			this.state = 1635;
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
			this.state = 1637;
			this.primaryExpression(0);
			this.state = 1646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 67243011) !== 0)) {
				{
				{
				this.state = 1640;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 135:
				case 141:
				case 150:
					{
					this.state = 1638;
					this.additiveOperator();
					}
					break;
				case 124:
				case 125:
				case 134:
					{
					this.state = 1639;
					this.multiplicativeOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1642;
				this.primaryExpression(0);
				}
				}
				this.state = 1648;
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
			this.state = 1662;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				localctx = new ExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1649;
				this.logicalExpression();
				this.state = 1650;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1651;
				this.begrenzing();
				this.state = 1652;
				this.afronding();
				}
				break;
			case 2:
				localctx = new ExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1654;
				this.logicalExpression();
				this.state = 1655;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1656;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new ExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1658;
				this.logicalExpression();
				this.state = 1659;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1661;
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
			this.state = 1677;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				localctx = new SimpleExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1664;
				this.comparisonExpression();
				this.state = 1665;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1666;
				this.begrenzing();
				this.state = 1667;
				this.afronding();
				}
				break;
			case 2:
				localctx = new SimpleExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1669;
				this.comparisonExpression();
				this.state = 1670;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1671;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new SimpleExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1673;
				this.comparisonExpression();
				this.state = 1674;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprBaseContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1676;
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
			this.state = 1679;
			(localctx as LogicalExprContext)._left = this.comparisonExpression();
			this.state = 1682;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				{
				this.state = 1680;
				(localctx as LogicalExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===214 || _la===227)) {
				    (localctx as LogicalExprContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1681;
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
			this.state = 1734;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				localctx = new IsDagsoortExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1684;
				(localctx as IsDagsoortExprContext)._left = this.additiveExpression();
				this.state = 1685;
				(localctx as IsDagsoortExprContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===111 || _la===117)) {
				    (localctx as IsDagsoortExprContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1686;
				(localctx as IsDagsoortExprContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===202 || _la===213)) {
				    (localctx as IsDagsoortExprContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1687;
				(localctx as IsDagsoortExprContext)._dagsoort = this.naamwoord();
				}
				break;
			case 2:
				localctx = new DagsoortVragendExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1689;
				(localctx as DagsoortVragendExprContext)._left = this.additiveExpression();
				this.state = 1690;
				(localctx as DagsoortVragendExprContext)._neg = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===202 || _la===213)) {
				    (localctx as DagsoortVragendExprContext)._neg = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1691;
				(localctx as DagsoortVragendExprContext)._dagsoort = this.naamwoord();
				this.state = 1692;
				(localctx as DagsoortVragendExprContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===111 || _la===117)) {
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
				this.state = 1694;
				this.subordinateClauseExpression();
				}
				break;
			case 4:
				localctx = new PeriodeCheckExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1695;
				this.periodevergelijkingElementair();
				}
				break;
			case 5:
				localctx = new IsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1696;
				(localctx as IsKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1697;
				this.match(RegelSpraakParser.IS);
				this.state = 1698;
				this.naamwoordWithNumbers();
				}
				break;
			case 6:
				localctx = new HeeftKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1700;
				(localctx as HeeftKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1701;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1702;
				this.naamwoordWithNumbers();
				}
				break;
			case 7:
				localctx = new GelijkIsAanOfExprContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1704;
				(localctx as GelijkIsAanOfExprContext)._left = this.additiveExpression();
				this.state = 1705;
				(localctx as GelijkIsAanOfExprContext)._op = this.gelijkIsAanOperator();
				this.state = 1706;
				(localctx as GelijkIsAanOfExprContext)._firstValue = this.literalValue();
				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===278) {
					{
					{
					this.state = 1707;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1708;
					(localctx as GelijkIsAanOfExprContext)._literalValue = this.literalValue();
					(localctx as GelijkIsAanOfExprContext)._middleValues.push((localctx as GelijkIsAanOfExprContext)._literalValue);
					}
					}
					this.state = 1713;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1714;
				this.match(RegelSpraakParser.OF);
				this.state = 1715;
				(localctx as GelijkIsAanOfExprContext)._lastValue = this.literalValue();
				}
				break;
			case 8:
				localctx = new BinaryComparisonStellendeExprContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1717;
				(localctx as BinaryComparisonStellendeExprContext)._left = this.additiveExpression();
				this.state = 1718;
				(localctx as BinaryComparisonStellendeExprContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===111 || _la===117)) {
				    (localctx as BinaryComparisonStellendeExprContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1719;
				(localctx as BinaryComparisonStellendeExprContext)._gp = this.geheleVergelijkingPrefix();
				this.state = 1720;
				(localctx as BinaryComparisonStellendeExprContext)._op = this.bareComparisonOperator();
				this.state = 1721;
				(localctx as BinaryComparisonStellendeExprContext)._right = this.additiveExpression();
				}
				break;
			case 9:
				localctx = new BinaryComparisonExprContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1723;
				(localctx as BinaryComparisonExprContext)._left = this.additiveExpression();
				this.state = 1730;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1725;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
					case 1:
						{
						this.state = 1724;
						(localctx as BinaryComparisonExprContext)._gp = this.geheleVergelijkingPrefix();
						}
						break;
					}
					this.state = 1727;
					this.comparisonOperator();
					this.state = 1728;
					(localctx as BinaryComparisonExprContext)._right = this.additiveExpression();
					}
					break;
				}
				}
				break;
			case 10:
				localctx = new UnaryConditionExprContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1732;
				this.unaryCondition();
				}
				break;
			case 11:
				localctx = new RegelStatusConditionExprContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1733;
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
			this.state = 1745;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 273:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1736;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 272:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1737;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 268:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1738;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 1740;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1739;
					this.eenheidExpressie();
					}
					break;
				}
				}
				break;
			case 271:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1742;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 270:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1743;
				this.datumLiteral();
				}
				break;
			case 267:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1744;
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
			this.state = 1747;
			_la = this._input.LA(1);
			if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4161) !== 0) || _la===126)) {
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
			this.state = 1750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===138) {
				{
				this.state = 1749;
				this.match(RegelSpraakParser.NIET);
				}
			}

			this.state = 1756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				this.state = 1752;
				this.match(RegelSpraakParser.GEDURENDE_HET_GEHELE);
				this.state = 1753;
				this.match(RegelSpraakParser.JAAR);
				}
				break;
			case 6:
				{
				this.state = 1754;
				this.match(RegelSpraakParser.GEDURENDE_DE_GEHELE);
				this.state = 1755;
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
	public bareComparisonOperator(): BareComparisonOperatorContext {
		let localctx: BareComparisonOperatorContext = new BareComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, RegelSpraakParser.RULE_bareComparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1758;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 131913) !== 0))) {
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
		this.enterRule(localctx, 290, RegelSpraakParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1760;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 2147483619) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 674533377) !== 0) || _la===218 || _la===256 || _la===257)) {
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
		this.enterRule(localctx, 292, RegelSpraakParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1762;
			localctx._left = this.multiplicativeExpression();
			this.state = 1768;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1763;
					this.additiveOperator();
					this.state = 1764;
					localctx._right = this.multiplicativeExpression();
					}
					}
				}
				this.state = 1770;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
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
		this.enterRule(localctx, 294, RegelSpraakParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1771;
			_la = this._input.LA(1);
			if(!(((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 32833) !== 0))) {
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
		this.enterRule(localctx, 296, RegelSpraakParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1773;
			localctx._left = this.powerExpression();
			this.state = 1779;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1774;
					this.multiplicativeOperator();
					this.state = 1775;
					localctx._right = this.powerExpression();
					}
					}
				}
				this.state = 1781;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
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
		this.enterRule(localctx, 298, RegelSpraakParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1782;
			_la = this._input.LA(1);
			if(!(((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 1027) !== 0))) {
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
		this.enterRule(localctx, 300, RegelSpraakParser.RULE_powerExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1784;
			localctx._left = this.primaryExpression(0);
			this.state = 1790;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1785;
					this.powerOperator();
					this.state = 1786;
					localctx._right = this.primaryExpression(0);
					}
					}
				}
				this.state = 1792;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
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
		this.enterRule(localctx, 302, RegelSpraakParser.RULE_powerOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1793;
			_la = this._input.LA(1);
			if(!(_la===145 || _la===288)) {
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
		let _startState: number = 304;
		this.enterRecursionRule(localctx, 304, RegelSpraakParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2060;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1796;
				this.match(RegelSpraakParser.MIN);
				this.state = 1797;
				this.primaryExpression(55);
				}
				break;
			case 2:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1798;
				this.match(RegelSpraakParser.MINUS);
				this.state = 1799;
				this.primaryExpression(54);
				}
				break;
			case 3:
				{
				localctx = new UnaryNietExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1800;
				this.match(RegelSpraakParser.NIET);
				this.state = 1801;
				this.primaryExpression(53);
				}
				break;
			case 4:
				{
				localctx = new AbsTijdsduurFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1802;
				this.match(RegelSpraakParser.DE_ABSOLUTE_TIJDSDUUR_VAN);
				this.state = 1803;
				this.primaryExpression(0);
				this.state = 1804;
				this.match(RegelSpraakParser.TOT);
				this.state = 1805;
				this.primaryExpression(0);
				this.state = 1808;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
				case 1:
					{
					this.state = 1806;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1807;
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
				this.state = 1810;
				this.match(RegelSpraakParser.TIJDSDUUR_VAN);
				this.state = 1811;
				this.primaryExpression(0);
				this.state = 1812;
				this.match(RegelSpraakParser.TOT);
				this.state = 1813;
				this.primaryExpression(0);
				this.state = 1816;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
				case 1:
					{
					this.state = 1814;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1815;
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
				this.state = 1818;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1819;
				this.primaryExpression(0);
				this.state = 1824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===278) {
					{
					{
					this.state = 1820;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1821;
					this.primaryExpression(0);
					}
					}
					this.state = 1826;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1827;
				this.match(RegelSpraakParser.EN);
				this.state = 1828;
				this.primaryExpression(50);
				}
				break;
			case 7:
				{
				localctx = new SomAlleExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1830;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1831;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1832;
				this.naamwoord();
				}
				break;
			case 8:
				{
				localctx = new SomAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1833;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1834;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1835;
				this.attribuutReferentie();
				}
				break;
			case 9:
				{
				localctx = new AantalFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1839;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 215:
					{
					this.state = 1836;
					this.match(RegelSpraakParser.HET);
					this.state = 1837;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				case 188:
					{
					this.state = 1838;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1841;
				this.aggregationSubject();
				}
				break;
			case 10:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1842;
				this.match(RegelSpraakParser.HET);
				this.state = 1843;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1844;
				this.attribuutReferentie();
				}
				break;
			case 11:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1845;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1846;
				this.attribuutReferentie();
				}
				break;
			case 12:
				{
				localctx = new PercentageFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1853;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 268:
					{
					this.state = 1847;
					this.match(RegelSpraakParser.NUMBER);
					this.state = 1850;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 283:
						{
						this.state = 1848;
						this.match(RegelSpraakParser.PERCENT_SIGN);
						}
						break;
					case 267:
						{
						this.state = 1849;
						(localctx as PercentageFuncExprContext)._p = this.match(RegelSpraakParser.IDENTIFIER);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case 271:
					{
					this.state = 1852;
					this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1855;
				this.match(RegelSpraakParser.VAN);
				this.state = 1856;
				this.primaryExpression(44);
				}
				break;
			case 13:
				{
				localctx = new PercentageOfExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1857;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				this.state = 1858;
				this.match(RegelSpraakParser.VAN);
				this.state = 1859;
				this.primaryExpression(43);
				}
				break;
			case 14:
				{
				localctx = new ConcatenatieExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1860;
				this.match(RegelSpraakParser.CONCATENATIE_VAN);
				this.state = 1861;
				this.primaryExpression(0);
				this.state = 1866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===278) {
					{
					{
					this.state = 1862;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1863;
					this.primaryExpression(0);
					}
					}
					this.state = 1868;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1869;
				_la = this._input.LA(1);
				if(!(_la===214 || _la===227)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1870;
				this.primaryExpression(39);
				}
				break;
			case 15:
				{
				localctx = new WortelFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1872;
				this.match(RegelSpraakParser.DE_WORTEL_VAN);
				this.state = 1873;
				this.primaryExpression(37);
				}
				break;
			case 16:
				{
				localctx = new AbsValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1874;
				this.match(RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN);
				this.state = 1875;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1876;
				this.expressie();
				this.state = 1877;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 17:
				{
				localctx = new MinValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1879;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1880;
				this.primaryExpression(0);
				this.state = 1885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===278) {
					{
					{
					this.state = 1881;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1882;
					this.primaryExpression(0);
					}
					}
					this.state = 1887;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1888;
				this.match(RegelSpraakParser.EN);
				this.state = 1889;
				this.primaryExpression(35);
				}
				break;
			case 18:
				{
				localctx = new MinAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1891;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1892;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1893;
				this.attribuutReferentie();
				}
				break;
			case 19:
				{
				localctx = new MaxValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1894;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1895;
				this.primaryExpression(0);
				this.state = 1900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===278) {
					{
					{
					this.state = 1896;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1897;
					this.primaryExpression(0);
					}
					}
					this.state = 1902;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1903;
				this.match(RegelSpraakParser.EN);
				this.state = 1904;
				this.primaryExpression(33);
				}
				break;
			case 20:
				{
				localctx = new MaxAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1906;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1907;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1908;
				this.attribuutReferentie();
				}
				break;
			case 21:
				{
				localctx = new JaarUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1909;
				this.match(RegelSpraakParser.HET);
				this.state = 1910;
				this.match(RegelSpraakParser.JAAR);
				this.state = 1911;
				this.match(RegelSpraakParser.UIT);
				this.state = 1912;
				this.primaryExpression(31);
				}
				break;
			case 22:
				{
				localctx = new MaandUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1913;
				this.match(RegelSpraakParser.DE);
				this.state = 1914;
				this.match(RegelSpraakParser.MAAND);
				this.state = 1915;
				this.match(RegelSpraakParser.UIT);
				this.state = 1916;
				this.primaryExpression(30);
				}
				break;
			case 23:
				{
				localctx = new DagUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1917;
				this.match(RegelSpraakParser.DE);
				this.state = 1918;
				this.match(RegelSpraakParser.DAG);
				this.state = 1919;
				this.match(RegelSpraakParser.UIT);
				this.state = 1920;
				this.primaryExpression(29);
				}
				break;
			case 24:
				{
				localctx = new DatumMetFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1921;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1922;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1923;
				this.primaryExpression(0);
				this.state = 1924;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1925;
				this.primaryExpression(0);
				this.state = 1926;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1927;
				this.primaryExpression(0);
				this.state = 1928;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 25:
				{
				localctx = new PasenFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1930;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1931;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1932;
				this.primaryExpression(0);
				this.state = 1933;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 26:
				{
				localctx = new DateCalcExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1935;
				this.datumExpressie();
				this.state = 1936;
				_la = this._input.LA(1);
				if(!(_la===135 || _la===141)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1937;
				this.primaryExpression(0);
				this.state = 1938;
				this.timeUnit();
				}
				break;
			case 27:
				{
				localctx = new EersteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1940;
				this.match(RegelSpraakParser.EERSTE_VAN);
				this.state = 1941;
				this.primaryExpression(0);
				this.state = 1946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===278) {
					{
					{
					this.state = 1942;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1943;
					this.primaryExpression(0);
					}
					}
					this.state = 1948;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1949;
				this.match(RegelSpraakParser.EN);
				this.state = 1950;
				this.primaryExpression(25);
				}
				break;
			case 28:
				{
				localctx = new LaatsteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1952;
				this.match(RegelSpraakParser.LAATSTE_VAN);
				this.state = 1953;
				this.primaryExpression(0);
				this.state = 1958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===278) {
					{
					{
					this.state = 1954;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1955;
					this.primaryExpression(0);
					}
					}
					this.state = 1960;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1961;
				this.match(RegelSpraakParser.EN);
				this.state = 1962;
				this.primaryExpression(24);
				}
				break;
			case 29:
				{
				localctx = new TotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1964;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1965;
				this.expressie();
				this.state = 1967;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1966;
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
				this.state = 1969;
				this.match(RegelSpraakParser.HET);
				this.state = 1970;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1971;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 1972;
				this.match(RegelSpraakParser.IN);
				this.state = 1981;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 210:
				case 222:
					{
					this.state = 1974;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===210) {
						{
						this.state = 1973;
						this.match(RegelSpraakParser.DE);
						}
					}

					this.state = 1976;
					this.match(RegelSpraakParser.MAAND);
					}
					break;
				case 215:
				case 219:
					{
					this.state = 1978;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===215) {
						{
						this.state = 1977;
						this.match(RegelSpraakParser.HET);
						}
					}

					this.state = 1980;
					this.match(RegelSpraakParser.JAAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1983;
				this.match(RegelSpraakParser.DAT);
				this.state = 1984;
				this.expressie();
				}
				break;
			case 31:
				{
				localctx = new CapitalizedTotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1985;
					this.identifier();
					}
					}
					this.state = 1988;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===267);
				this.state = 1990;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1991;
				this.expressie();
				this.state = 1993;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1992;
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
				this.state = 1995;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 1996;
				_la = this._input.LA(1);
				if(!(_la===219 || _la===222)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1997;
				this.match(RegelSpraakParser.VAN);
				this.state = 1998;
				this.expressie();
				this.state = 2000;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
				case 1:
					{
					this.state = 1999;
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
				this.state = 2003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2002;
					this.identifier();
					}
					}
					this.state = 2005;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===267);
				this.state = 2007;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 2008;
				_la = this._input.LA(1);
				if(!(_la===219 || _la===222)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2009;
				this.match(RegelSpraakParser.VAN);
				this.state = 2010;
				this.expressie();
				this.state = 2012;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
				case 1:
					{
					this.state = 2011;
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
				this.state = 2016;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 188:
				case 193:
				case 215:
					{
					this.state = 2014;
					this.getalAggregatieFunctie();
					}
					break;
				case 189:
				case 191:
					{
					this.state = 2015;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2018;
				this.attribuutMetLidwoord();
				this.state = 2019;
				this.dimensieSelectie();
				this.state = 2021;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
				case 1:
					{
					this.state = 2020;
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
				this.state = 2025;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 188:
				case 193:
				case 215:
					{
					this.state = 2023;
					this.getalAggregatieFunctie();
					}
					break;
				case 189:
				case 191:
					{
					this.state = 2024;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2029;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 2027;
					this.bezieldeReferentie();
					}
					break;
				case 2:
					{
					this.state = 2028;
					this.attribuutReferentie();
					}
					break;
				}
				this.state = 2031;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2032;
				this.naamwoord();
				this.state = 2033;
				this.match(RegelSpraakParser.TM);
				this.state = 2034;
				this.naamwoord();
				this.state = 2036;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 2035;
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
				this.state = 2038;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 2040;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 2039;
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
				this.state = 2042;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 38:
				{
				localctx = new IdentifierExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2043;
				this.identifier();
				}
				break;
			case 39:
				{
				localctx = new BezieldeRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2044;
				this.bezieldeReferentie();
				}
				break;
			case 40:
				{
				localctx = new AttrRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2045;
				this.attribuutReferentie();
				}
				break;
			case 41:
				{
				localctx = new OnderwerpRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2046;
				this.onderwerpReferentie();
				}
				break;
			case 42:
				{
				localctx = new NaamwoordExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2047;
				this.naamwoord();
				}
				break;
			case 43:
				{
				localctx = new ParamRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2048;
				this.parameterMetLidwoord();
				}
				break;
			case 44:
				{
				localctx = new PercentageLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2049;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 45:
				{
				localctx = new StringLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2050;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 46:
				{
				localctx = new EnumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2051;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 47:
				{
				localctx = new DatumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2052;
				this.datumLiteral();
				}
				break;
			case 48:
				{
				localctx = new BooleanTrueLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2053;
				this.match(RegelSpraakParser.WAAR);
				}
				break;
			case 49:
				{
				localctx = new BooleanFalseLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2054;
				this.match(RegelSpraakParser.ONWAAR);
				}
				break;
			case 50:
				{
				localctx = new PronounExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2055;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 51:
				{
				localctx = new ParenExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2056;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 2057;
				this.expressie();
				this.state = 2058;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2084;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 238, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2082;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
					case 1:
						{
						localctx = new SimpleConcatenatieExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2062;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 2065;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 2063;
							this.match(RegelSpraakParser.COMMA);
							this.state = 2064;
							this.primaryExpression(0);
							}
							}
							this.state = 2067;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la===278);
						this.state = 2069;
						_la = this._input.LA(1);
						if(!(_la===214 || _la===227)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 2070;
						this.primaryExpression(39);
						}
						break;
					case 2:
						{
						localctx = new AfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2072;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 2073;
						this.afronding();
						}
						break;
					case 3:
						{
						localctx = new BegrenzingAfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2074;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 2075;
						this.match(RegelSpraakParser.COMMA);
						this.state = 2076;
						this.begrenzing();
						this.state = 2077;
						this.afronding();
						}
						break;
					case 4:
						{
						localctx = new BegrenzingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 2079;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 2080;
						this.match(RegelSpraakParser.COMMA);
						this.state = 2081;
						this.begrenzing();
						}
						break;
					}
					}
				}
				this.state = 2086;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 238, this._ctx);
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
		this.enterRule(localctx, 306, RegelSpraakParser.RULE_afronding);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2087;
			_la = this._input.LA(1);
			if(!(((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 131267) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2088;
			this.match(RegelSpraakParser.AFGEROND_OP);
			this.state = 2089;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 2090;
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
		this.enterRule(localctx, 308, RegelSpraakParser.RULE_begrenzing);
		try {
			this.state = 2098;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2092;
				this.begrenzingMinimum();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2093;
				this.begrenzingMaximum();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2094;
				this.begrenzingMinimum();
				this.state = 2095;
				this.match(RegelSpraakParser.EN);
				this.state = 2096;
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
		this.enterRule(localctx, 310, RegelSpraakParser.RULE_begrenzingMinimum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2100;
			this.match(RegelSpraakParser.MET_EEN_MINIMUM_VAN);
			this.state = 2101;
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
		this.enterRule(localctx, 312, RegelSpraakParser.RULE_begrenzingMaximum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2103;
			this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
			this.state = 2104;
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
		this.enterRule(localctx, 314, RegelSpraakParser.RULE_conditieBijExpressie);
		try {
			this.state = 2109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2106;
				this.match(RegelSpraakParser.GEDURENDE_DE_TIJD_DAT);
				this.state = 2107;
				localctx._condition = this.expressie();
				}
				break;
			case 144:
			case 146:
			case 148:
			case 242:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2108;
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
		this.enterRule(localctx, 316, RegelSpraakParser.RULE_periodevergelijkingElementair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2111;
			this.match(RegelSpraakParser.HET_IS_DE_PERIODE);
			this.state = 2112;
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
		this.enterRule(localctx, 318, RegelSpraakParser.RULE_periodevergelijkingEnkelvoudig);
		try {
			this.state = 2130;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2114;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2115;
				this.datumExpressie();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2116;
				this.match(RegelSpraakParser.VAN);
				this.state = 2117;
				this.datumExpressie();
				this.state = 2118;
				this.match(RegelSpraakParser.TOT);
				this.state = 2119;
				this.datumExpressie();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2121;
				this.match(RegelSpraakParser.VAN);
				this.state = 2122;
				this.datumExpressie();
				this.state = 2123;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2124;
				this.datumExpressie();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2126;
				this.match(RegelSpraakParser.TOT);
				this.state = 2127;
				this.datumExpressie();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2128;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2129;
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
		this.enterRule(localctx, 320, RegelSpraakParser.RULE_periodeDefinitie);
		try {
			this.state = 2148;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				localctx = new VanafPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2132;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2133;
				this.dateExpression();
				}
				break;
			case 2:
				localctx = new TotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2134;
				this.match(RegelSpraakParser.TOT);
				this.state = 2135;
				this.dateExpression();
				}
				break;
			case 3:
				localctx = new TotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2136;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2137;
				this.dateExpression();
				}
				break;
			case 4:
				localctx = new VanTotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2138;
				this.match(RegelSpraakParser.VAN);
				this.state = 2139;
				this.dateExpression();
				this.state = 2140;
				this.match(RegelSpraakParser.TOT);
				this.state = 2141;
				this.dateExpression();
				}
				break;
			case 5:
				localctx = new VanTotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2143;
				this.match(RegelSpraakParser.VAN);
				this.state = 2144;
				this.dateExpression();
				this.state = 2145;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2146;
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
		this.enterRule(localctx, 322, RegelSpraakParser.RULE_dateExpression);
		try {
			this.state = 2154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 270:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2150;
				this.datumLiteral();
				}
				break;
			case 233:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2151;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 234:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2152;
				this.match(RegelSpraakParser.REKENJAAR);
				}
				break;
			case 42:
			case 94:
			case 108:
			case 117:
			case 122:
			case 130:
			case 138:
			case 159:
			case 188:
			case 199:
			case 200:
			case 203:
			case 204:
			case 207:
			case 208:
			case 210:
			case 213:
			case 215:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 230:
			case 232:
			case 236:
			case 237:
			case 240:
			case 241:
			case 248:
			case 249:
			case 251:
			case 267:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2153;
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
		this.enterRule(localctx, 324, RegelSpraakParser.RULE_getalAggregatieFunctie);
		try {
			this.state = 2162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 215:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2156;
				this.match(RegelSpraakParser.HET);
				this.state = 2157;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 188:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2158;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2159;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2160;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				}
				break;
			case 193:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2161;
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
		this.enterRule(localctx, 326, RegelSpraakParser.RULE_datumAggregatieFunctie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2164;
			_la = this._input.LA(1);
			if(!(_la===189 || _la===191)) {
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
		this.enterRule(localctx, 328, RegelSpraakParser.RULE_dimensieSelectie);
		try {
			this.state = 2176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 231:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2166;
				this.match(RegelSpraakParser.OVER);
				this.state = 2170;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 2167;
					this.aggregerenOverAlleDimensies();
					}
					break;
				case 2:
					{
					this.state = 2168;
					this.aggregerenOverVerzameling();
					}
					break;
				case 3:
					{
					this.state = 2169;
					this.aggregerenOverBereik();
					}
					break;
				}
				this.state = 2172;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			case 242:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2174;
				this.match(RegelSpraakParser.VAN);
				this.state = 2175;
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
		this.enterRule(localctx, 330, RegelSpraakParser.RULE_aggregerenOverAlleDimensies);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2178;
			this.match(RegelSpraakParser.ALLE);
			this.state = 2179;
			this.naamwoord();
			this.state = 2182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				{
				this.state = 2180;
				_la = this._input.LA(1);
				if(!(_la===209 || _la===212)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2181;
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
		this.enterRule(localctx, 332, RegelSpraakParser.RULE_aggregerenOverVerzameling);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2184;
			this.match(RegelSpraakParser.DE);
			this.state = 2185;
			this.naamwoord();
			this.state = 2186;
			this.match(RegelSpraakParser.VANAF);
			this.state = 2187;
			this.naamwoord();
			this.state = 2188;
			this.match(RegelSpraakParser.TM);
			this.state = 2189;
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
		this.enterRule(localctx, 334, RegelSpraakParser.RULE_aggregerenOverBereik);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2191;
			this.match(RegelSpraakParser.DE);
			this.state = 2192;
			this.naamwoord();
			this.state = 2193;
			this.match(RegelSpraakParser.IN);
			this.state = 2194;
			this.match(RegelSpraakParser.LBRACE);
			this.state = 2195;
			this.naamwoord();
			this.state = 2200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===278) {
				{
				{
				this.state = 2196;
				this.match(RegelSpraakParser.COMMA);
				this.state = 2197;
				this.naamwoord();
				}
				}
				this.state = 2202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2203;
			this.match(RegelSpraakParser.EN);
			this.state = 2204;
			this.naamwoord();
			this.state = 2205;
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
		this.enterRule(localctx, 336, RegelSpraakParser.RULE_unaryCondition);
		let _la: number;
		try {
			this.state = 2241;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				localctx = new UnaryCheckConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2207;
				(localctx as UnaryCheckConditionContext)._expr = this.primaryExpression(0);
				this.state = 2208;
				(localctx as UnaryCheckConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 61455) !== 0))) {
				    (localctx as UnaryCheckConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				localctx = new UnaryCheckStellendeGehelePeriodeConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2210;
				(localctx as UnaryCheckStellendeGehelePeriodeConditionContext)._expr = this.primaryExpression(0);
				this.state = 2211;
				(localctx as UnaryCheckStellendeGehelePeriodeConditionContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===111 || _la===117)) {
				    (localctx as UnaryCheckStellendeGehelePeriodeConditionContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2212;
				(localctx as UnaryCheckStellendeGehelePeriodeConditionContext)._gp = this.geheleVergelijkingPrefix();
				this.state = 2213;
				(localctx as UnaryCheckStellendeGehelePeriodeConditionContext)._check = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===127 || _la===133)) {
				    (localctx as UnaryCheckStellendeGehelePeriodeConditionContext)._check = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 3:
				localctx = new UnaryCheckVragendConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2215;
				(localctx as UnaryCheckVragendConditionContext)._expr = this.primaryExpression(0);
				this.state = 2217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5 || _la===6 || _la===138) {
					{
					this.state = 2216;
					(localctx as UnaryCheckVragendConditionContext)._gp = this.geheleVergelijkingPrefix();
					}
				}

				this.state = 2219;
				(localctx as UnaryCheckVragendConditionContext)._check = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===127 || _la===133)) {
				    (localctx as UnaryCheckVragendConditionContext)._check = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2220;
				(localctx as UnaryCheckVragendConditionContext)._v = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===111 || _la===117)) {
				    (localctx as UnaryCheckVragendConditionContext)._v = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 4:
				localctx = new UnaryNumeriekExactConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2222;
				(localctx as UnaryNumeriekExactConditionContext)._expr = this.primaryExpression(0);
				this.state = 2223;
				(localctx as UnaryNumeriekExactConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 15) !== 0))) {
				    (localctx as UnaryNumeriekExactConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2224;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 2225;
				this.match(RegelSpraakParser.CIJFERS);
				}
				break;
			case 5:
				localctx = new UnaryKenmerkConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2227;
				(localctx as UnaryKenmerkConditionContext)._expr = this.primaryExpression(0);
				this.state = 2228;
				(localctx as UnaryKenmerkConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & 85) !== 0))) {
				    (localctx as UnaryKenmerkConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2229;
				(localctx as UnaryKenmerkConditionContext)._kenmerk = this.identifier();
				}
				break;
			case 6:
				localctx = new UnaryRolConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2231;
				(localctx as UnaryRolConditionContext)._expr = this.primaryExpression(0);
				this.state = 2232;
				(localctx as UnaryRolConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 85) !== 0))) {
				    (localctx as UnaryRolConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2233;
				(localctx as UnaryRolConditionContext)._rol = this.identifier();
				}
				break;
			case 7:
				localctx = new UnaryUniekConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2235;
				(localctx as UnaryUniekConditionContext)._ref = this.onderwerpReferentie();
				this.state = 2236;
				this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
				}
				break;
			case 8:
				localctx = new UnaryInconsistentDataConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2238;
				(localctx as UnaryInconsistentDataConditionContext)._expr = this.primaryExpression(0);
				this.state = 2239;
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
		this.enterRule(localctx, 338, RegelSpraakParser.RULE_regelStatusCondition);
		try {
			this.state = 2251;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				localctx = new RegelStatusGevuurdCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2243;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2244;
				(localctx as RegelStatusGevuurdCheckContext)._name = this.regelversieNaam();
				this.state = 2245;
				this.match(RegelSpraakParser.IS_GEVUURD);
				}
				break;
			case 2:
				localctx = new RegelStatusInconsistentCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2247;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2248;
				(localctx as RegelStatusInconsistentCheckContext)._name = this.regelversieNaam();
				this.state = 2249;
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
		this.enterRule(localctx, 340, RegelSpraakParser.RULE_regelversieNaam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 2255;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 42:
				case 94:
				case 108:
				case 111:
				case 117:
				case 122:
				case 130:
				case 138:
				case 159:
				case 188:
				case 199:
				case 200:
				case 203:
				case 204:
				case 207:
				case 208:
				case 210:
				case 213:
				case 215:
				case 219:
				case 220:
				case 221:
				case 222:
				case 223:
				case 224:
				case 225:
				case 226:
				case 230:
				case 232:
				case 236:
				case 237:
				case 240:
				case 241:
				case 248:
				case 249:
				case 251:
				case 267:
					{
					this.state = 2253;
					this.naamwoord();
					}
					break;
				case 202:
					{
					this.state = 2254;
					this.match(RegelSpraakParser.GEEN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 2257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===42 || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 276971521) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 536871169) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 2321143809) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & 2956137599) !== 0) || _la===267);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 342, RegelSpraakParser.RULE_subordinateClauseExpression);
		try {
			this.state = 2277;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				localctx = new SubordinateHasExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2259;
				(localctx as SubordinateHasExprContext)._subject = this.onderwerpReferentie();
				this.state = 2261;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
				case 1:
					{
					this.state = 2260;
					(localctx as SubordinateHasExprContext)._gp = this.geheleVergelijkingPrefix();
					}
					break;
				}
				this.state = 2263;
				(localctx as SubordinateHasExprContext)._object = this.naamwoordWithNumbers();
				this.state = 2264;
				(localctx as SubordinateHasExprContext)._verb = this.match(RegelSpraakParser.HEEFT);
				}
				break;
			case 2:
				localctx = new SubordinateIsWithExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2266;
				(localctx as SubordinateIsWithExprContext)._subject = this.onderwerpReferentie();
				this.state = 2268;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 2267;
					(localctx as SubordinateIsWithExprContext)._gp = this.geheleVergelijkingPrefix();
					}
					break;
				}
				this.state = 2270;
				(localctx as SubordinateIsWithExprContext)._prepPhrase = this.naamwoordWithNumbers();
				this.state = 2271;
				(localctx as SubordinateIsWithExprContext)._verb = this.match(RegelSpraakParser.IS);
				}
				break;
			case 3:
				localctx = new SubordinateIsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2273;
				(localctx as SubordinateIsKenmerkExprContext)._subject = this.onderwerpReferentie();
				this.state = 2274;
				(localctx as SubordinateIsKenmerkExprContext)._verb = this.match(RegelSpraakParser.IS);
				this.state = 2275;
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
		this.enterRule(localctx, 344, RegelSpraakParser.RULE_dagsoortDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2279;
			this.match(RegelSpraakParser.DAGSOORT);
			this.state = 2280;
			this.naamwoord();
			this.state = 2288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===176) {
				{
				this.state = 2281;
				this.match(RegelSpraakParser.MV_START);
				this.state = 2283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2282;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 2285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===267);
				this.state = 2287;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 2291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===281) {
				{
				this.state = 2290;
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
		this.enterRule(localctx, 346, RegelSpraakParser.RULE_tekstreeksExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2293;
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
		this.enterRule(localctx, 348, RegelSpraakParser.RULE_verdelingResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2295;
			localctx._sourceAmount = this.expressie();
			this.state = 2296;
			this.match(RegelSpraakParser.WORDT_VERDEELD_OVER);
			this.state = 2297;
			localctx._targetCollection = this.expressie();
			this.state = 2298;
			this.match(RegelSpraakParser.COMMA);
			this.state = 2299;
			this.match(RegelSpraakParser.WAARBIJ_WORDT_VERDEELD);
			this.state = 2302;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 33:
			case 34:
			case 35:
			case 121:
			case 196:
				{
				this.state = 2300;
				this.verdelingMethodeSimple();
				}
				break;
			case 280:
				{
				this.state = 2301;
				this.verdelingMethodeMultiLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2304;
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
		this.enterRule(localctx, 350, RegelSpraakParser.RULE_verdelingMethodeSimple);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2307;
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
		this.enterRule(localctx, 352, RegelSpraakParser.RULE_verdelingMethodeMultiLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2309;
			this.match(RegelSpraakParser.COLON);
			this.state = 2310;
			this.verdelingMethodeBulletList();
			this.state = 2312;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				{
				this.state = 2311;
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
		this.enterRule(localctx, 354, RegelSpraakParser.RULE_verdelingMethodeBulletList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2314;
			this.verdelingMethodeBullet();
			this.state = 2318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===294) {
				{
				{
				this.state = 2315;
				this.verdelingMethodeBullet();
				}
				}
				this.state = 2320;
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
		this.enterRule(localctx, 356, RegelSpraakParser.RULE_verdelingMethodeBullet);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2321;
			this.match(RegelSpraakParser.MINUS);
			this.state = 2322;
			this.verdelingMethode();
			this.state = 2324;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				{
				this.state = 2323;
				_la = this._input.LA(1);
				if(!(_la===278 || _la===279)) {
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
		this.enterRule(localctx, 358, RegelSpraakParser.RULE_verdelingMethode);
		let _la: number;
		try {
			this.state = 2340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 196:
				localctx = new VerdelingGelijkeDelenContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2326;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 35:
				localctx = new VerdelingNaarRatoContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2327;
				this.match(RegelSpraakParser.NAAR_RATO_VAN);
				this.state = 2328;
				(localctx as VerdelingNaarRatoContext)._ratioExpression = this.expressie();
				}
				break;
			case 34:
				localctx = new VerdelingOpVolgordeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2329;
				this.match(RegelSpraakParser.OP_VOLGORDE_VAN);
				this.state = 2330;
				(localctx as VerdelingOpVolgordeContext)._orderDirection = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===195 || _la===198)) {
				    (localctx as VerdelingOpVolgordeContext)._orderDirection = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2331;
				(localctx as VerdelingOpVolgordeContext)._orderExpression = this.expressie();
				}
				break;
			case 33:
				localctx = new VerdelingTieBreakContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2332;
				this.match(RegelSpraakParser.BIJ_EVEN_GROOT_CRITERIUM);
				this.state = 2333;
				(localctx as VerdelingTieBreakContext)._tieBreakMethod = this.verdelingMethode();
				}
				break;
			case 21:
				localctx = new VerdelingMaximumContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2334;
				this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
				this.state = 2335;
				(localctx as VerdelingMaximumContext)._maxExpression = this.attribuutMetLidwoord();
				}
				break;
			case 121:
				localctx = new VerdelingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2336;
				this.match(RegelSpraakParser.AFGEROND_OP);
				this.state = 2337;
				(localctx as VerdelingAfrondingContext)._decimals = this.match(RegelSpraakParser.NUMBER);
				this.state = 2338;
				this.match(RegelSpraakParser.DECIMALEN);
				this.state = 2339;
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
		this.enterRule(localctx, 360, RegelSpraakParser.RULE_verdelingRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2342;
			this.match(RegelSpraakParser.ALS_ONVERDEELDE_REST_BLIJFT);
			this.state = 2343;
			localctx._remainderTarget = this.expressie();
			this.state = 2345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===197) {
				{
				this.state = 2344;
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
		case 152:
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

	public static readonly _serializedATN: number[] = [4,1,296,2348,2,0,7,0,
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
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,1,0,1,
	0,1,0,1,0,1,0,1,0,5,0,369,8,0,10,0,12,0,372,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
	1,1,1,1,3,1,382,8,1,1,2,1,2,1,2,3,2,387,8,2,1,2,1,2,1,3,1,3,1,3,4,3,394,
	8,3,11,3,12,3,395,1,4,1,4,3,4,400,8,4,1,4,1,4,1,4,5,4,405,8,4,10,4,12,4,
	408,9,4,1,4,3,4,411,8,4,1,5,3,5,414,8,5,1,5,4,5,417,8,5,11,5,12,5,418,1,
	5,3,5,422,8,5,4,5,424,8,5,11,5,12,5,425,1,5,5,5,429,8,5,10,5,12,5,432,9,
	5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,440,8,6,10,6,12,6,443,9,6,1,6,3,6,446,8,6,
	1,7,1,7,3,7,450,8,7,1,8,4,8,453,8,8,11,8,12,8,454,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,3,9,466,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,3,10,495,8,10,1,10,1,10,1,10,1,10,3,10,501,8,10,1,11,
	1,11,1,11,3,11,506,8,11,1,12,1,12,1,12,1,12,5,12,512,8,12,10,12,12,12,515,
	9,12,1,13,3,13,518,8,13,1,13,4,13,521,8,13,11,13,12,13,522,1,14,4,14,526,
	8,14,11,14,12,14,527,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,3,19,
	539,8,19,1,19,4,19,542,8,19,11,19,12,19,543,1,19,4,19,547,8,19,11,19,12,
	19,548,1,19,1,19,4,19,553,8,19,11,19,12,19,554,1,19,1,19,4,19,559,8,19,
	11,19,12,19,560,1,19,1,19,4,19,565,8,19,11,19,12,19,566,1,19,4,19,570,8,
	19,11,19,12,19,571,1,19,1,19,4,19,576,8,19,11,19,12,19,577,1,19,1,19,4,
	19,582,8,19,11,19,12,19,583,1,19,1,19,1,19,1,19,1,19,4,19,591,8,19,11,19,
	12,19,592,3,19,595,8,19,1,20,3,20,598,8,20,1,20,4,20,601,8,20,11,20,12,
	20,602,1,20,4,20,606,8,20,11,20,12,20,607,1,20,1,20,4,20,612,8,20,11,20,
	12,20,613,1,20,1,20,4,20,618,8,20,11,20,12,20,619,1,20,1,20,4,20,624,8,
	20,11,20,12,20,625,1,20,4,20,629,8,20,11,20,12,20,630,1,20,1,20,4,20,635,
	8,20,11,20,12,20,636,1,20,1,20,4,20,641,8,20,11,20,12,20,642,1,20,1,20,
	1,20,1,20,1,20,4,20,650,8,20,11,20,12,20,651,3,20,654,8,20,1,21,1,21,3,
	21,658,8,21,1,22,3,22,661,8,22,1,22,4,22,664,8,22,11,22,12,22,665,1,22,
	4,22,669,8,22,11,22,12,22,670,1,22,1,22,4,22,675,8,22,11,22,12,22,676,1,
	22,1,22,4,22,681,8,22,11,22,12,22,682,1,22,1,22,4,22,687,8,22,11,22,12,
	22,688,1,22,4,22,692,8,22,11,22,12,22,693,1,22,1,22,4,22,698,8,22,11,22,
	12,22,699,1,22,1,22,4,22,704,8,22,11,22,12,22,705,3,22,708,8,22,1,23,1,
	23,1,23,1,23,5,23,714,8,23,10,23,12,23,717,9,23,1,24,1,24,1,24,1,24,5,24,
	723,8,24,10,24,12,24,726,9,24,1,25,1,25,1,25,1,25,5,25,732,8,25,10,25,12,
	25,735,9,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,
	4,30,749,8,30,11,30,12,30,750,1,30,3,30,754,8,30,1,30,3,30,757,8,30,1,30,
	5,30,760,8,30,10,30,12,30,763,9,30,1,31,1,31,3,31,767,8,31,1,31,1,31,1,
	32,3,32,772,8,32,1,32,1,32,3,32,776,8,32,1,32,1,32,3,32,780,8,32,1,32,3,
	32,783,8,32,1,33,1,33,1,33,1,33,1,33,3,33,790,8,33,1,33,3,33,793,8,33,1,
	33,1,33,1,33,3,33,798,8,33,1,33,1,33,3,33,802,8,33,1,33,1,33,1,33,1,33,
	5,33,808,8,33,10,33,12,33,811,9,33,3,33,813,8,33,1,33,3,33,816,8,33,1,34,
	1,34,1,34,1,34,1,34,1,34,3,34,824,8,34,1,35,1,35,1,35,1,35,1,35,3,35,831,
	8,35,1,36,1,36,1,36,1,36,1,36,3,36,838,8,36,1,37,1,37,1,38,1,38,1,38,1,
	38,1,38,3,38,847,8,38,1,39,1,39,1,40,1,40,1,41,3,41,854,8,41,1,41,1,41,
	1,41,1,41,1,41,1,41,3,41,862,8,41,1,42,1,42,1,42,1,42,1,42,1,42,3,42,870,
	8,42,1,42,3,42,873,8,42,1,43,1,43,1,43,1,43,1,43,3,43,880,8,43,1,44,1,44,
	4,44,884,8,44,11,44,12,44,885,1,45,1,45,1,46,1,46,1,47,1,47,1,47,5,47,895,
	8,47,10,47,12,47,898,9,47,1,48,1,48,1,48,1,48,1,48,1,48,3,48,906,8,48,1,
	48,1,48,3,48,910,8,48,1,48,1,48,3,48,914,8,48,1,48,1,48,3,48,918,8,48,1,
	49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,932,8,50,
	1,51,1,51,1,51,5,51,937,8,51,10,51,12,51,940,9,51,1,51,1,51,1,51,1,51,3,
	51,946,8,51,1,52,1,52,1,52,5,52,951,8,52,10,52,12,52,954,9,52,1,53,1,53,
	1,53,3,53,959,8,53,1,54,1,54,1,54,3,54,964,8,54,1,54,1,54,1,54,1,54,4,54,
	970,8,54,11,54,12,54,971,1,55,1,55,1,55,1,55,3,55,978,8,55,1,55,3,55,981,
	8,55,1,56,1,56,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,59,1,59,1,59,3,
	59,996,8,59,1,59,1,59,3,59,1000,8,59,1,59,1,59,3,59,1004,8,59,1,59,3,59,
	1007,8,59,1,60,3,60,1010,8,60,1,60,1,60,1,60,1,60,5,60,1016,8,60,10,60,
	12,60,1019,9,60,1,61,1,61,5,61,1023,8,61,10,61,12,61,1026,9,61,1,62,3,62,
	1029,8,62,1,62,1,62,1,62,1,62,5,62,1035,8,62,10,62,12,62,1038,9,62,1,62,
	3,62,1041,8,62,1,63,1,63,1,63,1,63,4,63,1047,8,63,11,63,12,63,1048,1,63,
	1,63,1,63,1,63,1,63,1,63,1,63,3,63,1058,8,63,1,64,1,64,1,64,1,64,1,64,1,
	64,3,64,1066,8,64,1,64,1,64,4,64,1070,8,64,11,64,12,64,1071,1,65,1,65,4,
	65,1076,8,65,11,65,12,65,1077,1,66,4,66,1081,8,66,11,66,12,66,1082,1,67,
	1,67,1,68,1,68,1,68,3,68,1090,8,68,1,68,4,68,1093,8,68,11,68,12,68,1094,
	1,69,1,69,1,69,1,69,3,69,1101,8,69,1,69,3,69,1104,8,69,1,69,3,69,1107,8,
	69,1,70,1,70,1,70,3,70,1112,8,70,1,70,1,70,4,70,1116,8,70,11,70,12,70,1117,
	1,71,1,71,5,71,1122,8,71,10,71,12,71,1125,9,71,1,72,1,72,1,72,1,72,1,72,
	1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,1141,8,72,1,73,1,73,1,
	73,1,74,1,74,1,74,1,74,1,74,3,74,1151,8,74,1,74,1,74,3,74,1155,8,74,1,75,
	1,75,3,75,1159,8,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,3,76,1173,8,76,1,76,3,76,1176,8,76,1,76,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,
	76,1198,8,76,1,76,3,76,1201,8,76,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,
	1,78,1,78,1,78,1,78,1,78,1,78,1,79,4,79,1218,8,79,11,79,12,79,1219,1,80,
	4,80,1223,8,80,11,80,12,80,1224,1,81,1,81,1,81,1,81,1,81,3,81,1232,8,81,
	1,82,1,82,3,82,1236,8,82,1,83,1,83,1,84,1,84,1,84,1,84,1,84,3,84,1245,8,
	84,1,84,3,84,1248,8,84,1,85,1,85,1,85,1,85,5,85,1254,8,85,10,85,12,85,1257,
	9,85,1,85,1,85,3,85,1261,8,85,1,86,1,86,1,86,1,86,1,87,1,87,1,88,1,88,1,
	88,1,88,1,88,1,88,3,88,1275,8,88,1,88,3,88,1278,8,88,3,88,1280,8,88,1,89,
	1,89,1,89,3,89,1285,8,89,1,90,1,90,1,90,1,90,1,90,1,90,1,91,3,91,1294,8,
	91,1,91,1,91,1,91,1,92,1,92,1,92,3,92,1302,8,92,1,93,1,93,1,93,1,93,1,93,
	1,93,4,93,1310,8,93,11,93,12,93,1311,1,93,1,93,1,93,1,93,3,93,1318,8,93,
	1,93,1,93,1,93,1,93,1,93,1,93,4,93,1326,8,93,11,93,12,93,1327,1,93,1,93,
	1,93,1,93,3,93,1334,8,93,1,93,1,93,1,93,1,93,1,93,1,93,4,93,1342,8,93,11,
	93,12,93,1343,3,93,1346,8,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
	94,1,94,1,94,1,94,1,94,1,94,1,94,3,94,1363,8,94,1,95,1,95,1,95,3,95,1368,
	8,95,1,96,1,96,1,97,1,97,1,97,3,97,1375,8,97,1,98,4,98,1378,8,98,11,98,
	12,98,1379,1,99,1,99,1,100,1,100,1,100,3,100,1387,8,100,1,100,1,100,1,100,
	1,100,1,100,1,100,4,100,1395,8,100,11,100,12,100,1396,1,101,1,101,1,101,
	3,101,1402,8,101,1,102,1,102,1,102,3,102,1407,8,102,1,103,1,103,1,103,3,
	103,1412,8,103,1,104,1,104,1,104,1,104,5,104,1418,8,104,10,104,12,104,1421,
	9,104,1,105,1,105,1,105,1,105,5,105,1427,8,105,10,105,12,105,1430,9,105,
	1,106,1,106,4,106,1434,8,106,11,106,12,106,1435,1,106,3,106,1439,8,106,
	1,107,1,107,4,107,1443,8,107,11,107,12,107,1444,1,107,3,107,1448,8,107,
	1,108,1,108,1,108,1,108,1,109,1,109,1,110,3,110,1457,8,110,1,110,1,110,
	1,111,3,111,1462,8,111,1,111,3,111,1465,8,111,1,111,4,111,1468,8,111,11,
	111,12,111,1469,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,3,113,1480,
	8,113,3,113,1482,8,113,1,114,1,114,3,114,1486,8,114,1,115,1,115,1,115,1,
	115,1,115,3,115,1493,8,115,1,116,1,116,1,117,3,117,1498,8,117,1,117,1,117,
	3,117,1502,8,117,1,117,1,117,1,118,1,118,1,119,3,119,1509,8,119,1,119,1,
	119,1,119,3,119,1514,8,119,1,119,1,119,1,119,1,120,1,120,1,120,1,121,1,
	121,1,121,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,123,4,123,1534,
	8,123,11,123,12,123,1535,1,124,1,124,1,124,1,124,1,124,1,124,3,124,1544,
	8,124,1,125,1,125,1,126,1,126,3,126,1550,8,126,1,126,1,126,1,126,1,126,
	1,126,3,126,1557,8,126,1,126,3,126,1560,8,126,1,126,1,126,1,126,1,126,1,
	126,1,126,1,126,3,126,1569,8,126,1,127,1,127,1,127,1,127,3,127,1575,8,127,
	1,127,1,127,1,127,1,127,1,127,4,127,1582,8,127,11,127,12,127,1583,1,128,
	1,128,1,129,1,129,1,130,1,130,1,131,1,131,1,132,1,132,1,133,1,133,1,133,
	1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
	1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,3,133,1620,8,133,
	1,134,1,134,5,134,1624,8,134,10,134,12,134,1627,9,134,1,134,1,134,1,135,
	3,135,1632,8,135,1,135,1,135,1,135,1,135,1,136,1,136,1,136,3,136,1641,8,
	136,1,136,1,136,5,136,1645,8,136,10,136,12,136,1648,9,136,1,137,1,137,1,
	137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,3,137,1663,
	8,137,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,
	1,138,1,138,3,138,1678,8,138,1,139,1,139,1,139,3,139,1683,8,139,1,140,1,
	140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,
	140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,5,
	140,1710,8,140,10,140,12,140,1713,9,140,1,140,1,140,1,140,1,140,1,140,1,
	140,1,140,1,140,1,140,1,140,1,140,3,140,1726,8,140,1,140,1,140,1,140,3,
	140,1731,8,140,1,140,1,140,3,140,1735,8,140,1,141,1,141,1,141,1,141,3,141,
	1741,8,141,1,141,1,141,1,141,3,141,1746,8,141,1,142,1,142,1,143,3,143,1751,
	8,143,1,143,1,143,1,143,1,143,3,143,1757,8,143,1,144,1,144,1,145,1,145,
	1,146,1,146,1,146,1,146,5,146,1767,8,146,10,146,12,146,1770,9,146,1,147,
	1,147,1,148,1,148,1,148,1,148,5,148,1778,8,148,10,148,12,148,1781,9,148,
	1,149,1,149,1,150,1,150,1,150,1,150,5,150,1789,8,150,10,150,12,150,1792,
	9,150,1,151,1,151,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,1,152,3,152,1809,8,152,1,152,1,152,1,152,1,152,1,152,
	1,152,3,152,1817,8,152,1,152,1,152,1,152,1,152,5,152,1823,8,152,10,152,
	12,152,1826,9,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,3,152,1840,8,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,3,152,1851,8,152,1,152,3,152,1854,8,152,1,152,1,152,1,
	152,1,152,1,152,1,152,1,152,1,152,1,152,5,152,1865,8,152,10,152,12,152,
	1868,9,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,1,152,5,152,1884,8,152,10,152,12,152,1887,9,152,1,152,
	1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,5,152,1899,8,152,
	10,152,12,152,1902,9,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,5,152,1945,8,152,
	10,152,12,152,1948,9,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,5,152,
	1957,8,152,10,152,12,152,1960,9,152,1,152,1,152,1,152,1,152,1,152,1,152,
	3,152,1968,8,152,1,152,1,152,1,152,1,152,1,152,3,152,1975,8,152,1,152,1,
	152,3,152,1979,8,152,1,152,3,152,1982,8,152,1,152,1,152,1,152,4,152,1987,
	8,152,11,152,12,152,1988,1,152,1,152,1,152,3,152,1994,8,152,1,152,1,152,
	1,152,1,152,1,152,3,152,2001,8,152,1,152,4,152,2004,8,152,11,152,12,152,
	2005,1,152,1,152,1,152,1,152,1,152,3,152,2013,8,152,1,152,1,152,3,152,2017,
	8,152,1,152,1,152,1,152,3,152,2022,8,152,1,152,1,152,3,152,2026,8,152,1,
	152,1,152,3,152,2030,8,152,1,152,1,152,1,152,1,152,1,152,3,152,2037,8,152,
	1,152,1,152,3,152,2041,8,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,3,152,
	2061,8,152,1,152,1,152,1,152,4,152,2066,8,152,11,152,12,152,2067,1,152,
	1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	5,152,2083,8,152,10,152,12,152,2086,9,152,1,153,1,153,1,153,1,153,1,153,
	1,154,1,154,1,154,1,154,1,154,1,154,3,154,2099,8,154,1,155,1,155,1,155,
	1,156,1,156,1,156,1,157,1,157,1,157,3,157,2110,8,157,1,158,1,158,1,158,
	1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
	1,159,1,159,1,159,1,159,3,159,2131,8,159,1,160,1,160,1,160,1,160,1,160,
	1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,3,160,
	2149,8,160,1,161,1,161,1,161,1,161,3,161,2155,8,161,1,162,1,162,1,162,1,
	162,1,162,1,162,3,162,2163,8,162,1,163,1,163,1,164,1,164,1,164,1,164,3,
	164,2171,8,164,1,164,1,164,1,164,1,164,3,164,2177,8,164,1,165,1,165,1,165,
	1,165,3,165,2183,8,165,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,167,
	1,167,1,167,1,167,1,167,1,167,1,167,5,167,2199,8,167,10,167,12,167,2202,
	9,167,1,167,1,167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,
	1,168,1,168,1,168,3,168,2218,8,168,1,168,1,168,1,168,1,168,1,168,1,168,
	1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,
	1,168,1,168,1,168,1,168,3,168,2242,8,168,1,169,1,169,1,169,1,169,1,169,
	1,169,1,169,1,169,3,169,2252,8,169,1,170,1,170,4,170,2256,8,170,11,170,
	12,170,2257,1,171,1,171,3,171,2262,8,171,1,171,1,171,1,171,1,171,1,171,
	3,171,2269,8,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,3,171,2278,8,
	171,1,172,1,172,1,172,1,172,4,172,2284,8,172,11,172,12,172,2285,1,172,3,
	172,2289,8,172,1,172,3,172,2292,8,172,1,173,1,173,1,174,1,174,1,174,1,174,
	1,174,1,174,1,174,3,174,2303,8,174,1,174,3,174,2306,8,174,1,175,1,175,1,
	176,1,176,1,176,3,176,2313,8,176,1,177,1,177,5,177,2317,8,177,10,177,12,
	177,2320,9,177,1,178,1,178,1,178,3,178,2325,8,178,1,179,1,179,1,179,1,179,
	1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,3,179,2341,
	8,179,1,180,1,180,1,180,3,180,2346,8,180,1,180,0,1,304,181,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
	106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
	142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
	178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
	214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,
	250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,
	286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,
	322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,
	358,360,0,55,1,0,295,295,2,0,108,108,111,111,2,0,111,111,117,117,2,0,202,
	202,213,213,3,0,70,71,82,82,84,84,1,0,86,89,3,0,210,210,213,213,215,215,
	4,0,117,117,210,210,213,213,215,215,12,0,144,144,146,146,174,174,206,206,
	214,214,218,218,227,227,229,229,231,231,239,239,242,242,246,246,18,0,94,
	94,108,108,111,111,122,122,130,130,159,159,188,188,199,200,203,204,207,
	208,219,226,230,230,232,232,236,237,240,241,248,249,251,251,267,267,17,
	0,94,94,108,108,122,122,130,130,159,159,188,188,199,200,203,204,207,208,
	219,226,230,230,232,232,236,237,240,241,248,249,251,251,267,267,7,0,207,
	208,219,220,222,223,225,226,236,237,240,241,248,249,1,0,161,162,2,0,3,3,
	166,166,2,0,177,178,181,181,2,0,210,210,215,215,6,0,135,135,224,226,236,
	237,240,241,251,255,258,267,1,0,185,187,2,0,188,188,267,267,2,0,188,188,
	267,268,4,0,28,28,93,98,100,104,281,281,2,0,146,146,238,238,3,0,44,44,50,
	50,126,126,6,0,50,52,54,54,126,126,129,129,131,131,139,140,9,0,144,144,
	174,174,206,206,214,214,218,218,229,229,231,231,239,239,246,246,3,0,210,
	210,215,215,250,250,1,0,243,244,1,0,155,156,4,0,199,200,203,204,213,213,
	268,268,2,0,284,284,294,294,3,0,284,285,289,289,294,294,2,0,209,209,212,
	212,1,0,117,119,2,0,107,107,117,117,1,0,151,152,1,0,56,61,1,0,56,57,2,0,
	56,57,66,69,2,0,214,214,227,227,4,0,44,44,50,50,56,56,126,126,6,0,22,25,
	123,123,126,126,129,129,131,132,140,140,12,0,22,25,39,40,44,69,111,111,
	123,123,126,126,129,129,131,132,138,138,140,140,218,218,256,257,3,0,135,
	135,141,141,150,150,2,0,124,125,134,134,2,0,145,145,288,288,2,0,135,135,
	141,141,2,0,219,219,222,222,3,0,136,137,142,143,153,153,2,0,189,189,191,
	191,2,0,70,73,82,85,2,0,127,127,133,133,4,0,74,74,76,76,78,78,80,80,4,0,
	75,75,77,77,79,79,81,81,1,0,278,279,2,0,195,195,198,198,2611,0,370,1,0,
	0,0,2,381,1,0,0,0,4,383,1,0,0,0,6,390,1,0,0,0,8,397,1,0,0,0,10,413,1,0,
	0,0,12,433,1,0,0,0,14,449,1,0,0,0,16,452,1,0,0,0,18,465,1,0,0,0,20,500,
	1,0,0,0,22,502,1,0,0,0,24,507,1,0,0,0,26,517,1,0,0,0,28,525,1,0,0,0,30,
	529,1,0,0,0,32,531,1,0,0,0,34,533,1,0,0,0,36,535,1,0,0,0,38,594,1,0,0,0,
	40,653,1,0,0,0,42,657,1,0,0,0,44,707,1,0,0,0,46,709,1,0,0,0,48,718,1,0,
	0,0,50,727,1,0,0,0,52,736,1,0,0,0,54,738,1,0,0,0,56,740,1,0,0,0,58,742,
	1,0,0,0,60,744,1,0,0,0,62,766,1,0,0,0,64,775,1,0,0,0,66,784,1,0,0,0,68,
	823,1,0,0,0,70,825,1,0,0,0,72,832,1,0,0,0,74,839,1,0,0,0,76,841,1,0,0,0,
	78,848,1,0,0,0,80,850,1,0,0,0,82,853,1,0,0,0,84,863,1,0,0,0,86,879,1,0,
	0,0,88,881,1,0,0,0,90,887,1,0,0,0,92,889,1,0,0,0,94,891,1,0,0,0,96,899,
	1,0,0,0,98,919,1,0,0,0,100,931,1,0,0,0,102,945,1,0,0,0,104,947,1,0,0,0,
	106,955,1,0,0,0,108,960,1,0,0,0,110,980,1,0,0,0,112,982,1,0,0,0,114,986,
	1,0,0,0,116,988,1,0,0,0,118,990,1,0,0,0,120,1009,1,0,0,0,122,1020,1,0,0,
	0,124,1040,1,0,0,0,126,1057,1,0,0,0,128,1059,1,0,0,0,130,1075,1,0,0,0,132,
	1080,1,0,0,0,134,1084,1,0,0,0,136,1086,1,0,0,0,138,1096,1,0,0,0,140,1108,
	1,0,0,0,142,1119,1,0,0,0,144,1140,1,0,0,0,146,1142,1,0,0,0,148,1154,1,0,
	0,0,150,1158,1,0,0,0,152,1200,1,0,0,0,154,1202,1,0,0,0,156,1204,1,0,0,0,
	158,1217,1,0,0,0,160,1222,1,0,0,0,162,1231,1,0,0,0,164,1235,1,0,0,0,166,
	1237,1,0,0,0,168,1239,1,0,0,0,170,1249,1,0,0,0,172,1262,1,0,0,0,174,1266,
	1,0,0,0,176,1268,1,0,0,0,178,1281,1,0,0,0,180,1286,1,0,0,0,182,1293,1,0,
	0,0,184,1298,1,0,0,0,186,1345,1,0,0,0,188,1362,1,0,0,0,190,1364,1,0,0,0,
	192,1369,1,0,0,0,194,1374,1,0,0,0,196,1377,1,0,0,0,198,1381,1,0,0,0,200,
	1386,1,0,0,0,202,1398,1,0,0,0,204,1403,1,0,0,0,206,1408,1,0,0,0,208,1413,
	1,0,0,0,210,1422,1,0,0,0,212,1438,1,0,0,0,214,1447,1,0,0,0,216,1449,1,0,
	0,0,218,1453,1,0,0,0,220,1456,1,0,0,0,222,1461,1,0,0,0,224,1471,1,0,0,0,
	226,1481,1,0,0,0,228,1485,1,0,0,0,230,1492,1,0,0,0,232,1494,1,0,0,0,234,
	1497,1,0,0,0,236,1505,1,0,0,0,238,1508,1,0,0,0,240,1518,1,0,0,0,242,1521,
	1,0,0,0,244,1524,1,0,0,0,246,1527,1,0,0,0,248,1543,1,0,0,0,250,1545,1,0,
	0,0,252,1568,1,0,0,0,254,1574,1,0,0,0,256,1585,1,0,0,0,258,1587,1,0,0,0,
	260,1589,1,0,0,0,262,1591,1,0,0,0,264,1593,1,0,0,0,266,1619,1,0,0,0,268,
	1621,1,0,0,0,270,1631,1,0,0,0,272,1637,1,0,0,0,274,1662,1,0,0,0,276,1677,
	1,0,0,0,278,1679,1,0,0,0,280,1734,1,0,0,0,282,1745,1,0,0,0,284,1747,1,0,
	0,0,286,1750,1,0,0,0,288,1758,1,0,0,0,290,1760,1,0,0,0,292,1762,1,0,0,0,
	294,1771,1,0,0,0,296,1773,1,0,0,0,298,1782,1,0,0,0,300,1784,1,0,0,0,302,
	1793,1,0,0,0,304,2060,1,0,0,0,306,2087,1,0,0,0,308,2098,1,0,0,0,310,2100,
	1,0,0,0,312,2103,1,0,0,0,314,2109,1,0,0,0,316,2111,1,0,0,0,318,2130,1,0,
	0,0,320,2148,1,0,0,0,322,2154,1,0,0,0,324,2162,1,0,0,0,326,2164,1,0,0,0,
	328,2176,1,0,0,0,330,2178,1,0,0,0,332,2184,1,0,0,0,334,2191,1,0,0,0,336,
	2241,1,0,0,0,338,2251,1,0,0,0,340,2255,1,0,0,0,342,2277,1,0,0,0,344,2279,
	1,0,0,0,346,2293,1,0,0,0,348,2295,1,0,0,0,350,2307,1,0,0,0,352,2309,1,0,
	0,0,354,2314,1,0,0,0,356,2321,1,0,0,0,358,2340,1,0,0,0,360,2342,1,0,0,0,
	362,369,3,2,1,0,363,369,3,136,68,0,364,369,3,140,70,0,365,369,3,4,2,0,366,
	369,3,176,88,0,367,369,3,94,47,0,368,362,1,0,0,0,368,363,1,0,0,0,368,364,
	1,0,0,0,368,365,1,0,0,0,368,366,1,0,0,0,368,367,1,0,0,0,369,372,1,0,0,0,
	370,368,1,0,0,0,370,371,1,0,0,0,371,373,1,0,0,0,372,370,1,0,0,0,373,374,
	5,0,0,1,374,1,1,0,0,0,375,382,3,60,30,0,376,382,3,84,42,0,377,382,3,118,
	59,0,378,382,3,108,54,0,379,382,3,126,63,0,380,382,3,344,172,0,381,375,
	1,0,0,0,381,376,1,0,0,0,381,377,1,0,0,0,381,378,1,0,0,0,381,379,1,0,0,0,
	381,380,1,0,0,0,382,3,1,0,0,0,383,384,5,96,0,0,384,386,3,46,23,0,385,387,
	3,146,73,0,386,385,1,0,0,0,386,387,1,0,0,0,387,388,1,0,0,0,388,389,3,6,
	3,0,389,5,1,0,0,0,390,391,3,8,4,0,391,393,3,10,5,0,392,394,3,12,6,0,393,
	392,1,0,0,0,394,395,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,7,1,0,0,
	0,397,399,5,295,0,0,398,400,5,295,0,0,399,398,1,0,0,0,399,400,1,0,0,0,400,
	401,1,0,0,0,401,406,3,16,8,0,402,403,5,295,0,0,403,405,3,16,8,0,404,402,
	1,0,0,0,405,408,1,0,0,0,406,404,1,0,0,0,406,407,1,0,0,0,407,410,1,0,0,0,
	408,406,1,0,0,0,409,411,5,295,0,0,410,409,1,0,0,0,410,411,1,0,0,0,411,9,
	1,0,0,0,412,414,5,295,0,0,413,412,1,0,0,0,413,414,1,0,0,0,414,423,1,0,0,
	0,415,417,5,294,0,0,416,415,1,0,0,0,417,418,1,0,0,0,418,416,1,0,0,0,418,
	419,1,0,0,0,419,421,1,0,0,0,420,422,5,295,0,0,421,420,1,0,0,0,421,422,1,
	0,0,0,422,424,1,0,0,0,423,416,1,0,0,0,424,425,1,0,0,0,425,423,1,0,0,0,425,
	426,1,0,0,0,426,430,1,0,0,0,427,429,5,294,0,0,428,427,1,0,0,0,429,432,1,
	0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,11,1,0,0,0,432,430,1,0,0,0,433,
	434,5,295,0,0,434,435,5,268,0,0,435,436,5,295,0,0,436,441,3,14,7,0,437,
	438,5,295,0,0,438,440,3,14,7,0,439,437,1,0,0,0,440,443,1,0,0,0,441,439,
	1,0,0,0,441,442,1,0,0,0,442,445,1,0,0,0,443,441,1,0,0,0,444,446,5,295,0,
	0,445,444,1,0,0,0,445,446,1,0,0,0,446,13,1,0,0,0,447,450,3,274,137,0,448,
	450,5,296,0,0,449,447,1,0,0,0,449,448,1,0,0,0,450,15,1,0,0,0,451,453,8,
	0,0,0,452,451,1,0,0,0,453,454,1,0,0,0,454,452,1,0,0,0,454,455,1,0,0,0,455,
	17,1,0,0,0,456,457,3,22,11,0,457,458,5,9,0,0,458,459,5,0,0,1,459,466,1,
	0,0,0,460,461,3,204,102,0,461,462,7,1,0,0,462,463,3,220,110,0,463,464,5,
	0,0,1,464,466,1,0,0,0,465,456,1,0,0,0,465,460,1,0,0,0,466,19,1,0,0,0,467,
	468,5,109,0,0,468,469,3,22,11,0,469,470,7,2,0,0,470,471,7,3,0,0,471,472,
	3,220,110,0,472,473,5,0,0,1,473,501,1,0,0,0,474,475,5,109,0,0,475,476,3,
	22,11,0,476,477,7,4,0,0,477,478,5,0,0,1,478,501,1,0,0,0,479,480,5,109,0,
	0,480,481,3,22,11,0,481,482,7,5,0,0,482,483,5,268,0,0,483,484,5,165,0,0,
	484,485,5,0,0,1,485,501,1,0,0,0,486,487,5,109,0,0,487,488,3,22,11,0,488,
	489,3,290,145,0,489,490,5,0,0,1,490,501,1,0,0,0,491,492,5,109,0,0,492,494,
	3,204,102,0,493,495,7,6,0,0,494,493,1,0,0,0,494,495,1,0,0,0,495,496,1,0,
	0,0,496,497,3,220,110,0,497,498,5,108,0,0,498,499,5,0,0,1,499,501,1,0,0,
	0,500,467,1,0,0,0,500,474,1,0,0,0,500,479,1,0,0,0,500,486,1,0,0,0,500,491,
	1,0,0,0,501,21,1,0,0,0,502,505,3,24,12,0,503,504,5,242,0,0,504,506,3,204,
	102,0,505,503,1,0,0,0,505,506,1,0,0,0,506,23,1,0,0,0,507,513,3,26,13,0,
	508,509,3,30,15,0,509,510,3,28,14,0,510,512,1,0,0,0,511,508,1,0,0,0,512,
	515,1,0,0,0,513,511,1,0,0,0,513,514,1,0,0,0,514,25,1,0,0,0,515,513,1,0,
	0,0,516,518,7,7,0,0,517,516,1,0,0,0,517,518,1,0,0,0,518,520,1,0,0,0,519,
	521,3,36,18,0,520,519,1,0,0,0,521,522,1,0,0,0,522,520,1,0,0,0,522,523,1,
	0,0,0,523,27,1,0,0,0,524,526,3,36,18,0,525,524,1,0,0,0,526,527,1,0,0,0,
	527,525,1,0,0,0,527,528,1,0,0,0,528,29,1,0,0,0,529,530,7,8,0,0,530,31,1,
	0,0,0,531,532,5,267,0,0,532,33,1,0,0,0,533,534,7,9,0,0,534,35,1,0,0,0,535,
	536,7,10,0,0,536,37,1,0,0,0,537,539,7,7,0,0,538,537,1,0,0,0,538,539,1,0,
	0,0,539,541,1,0,0,0,540,542,3,34,17,0,541,540,1,0,0,0,542,543,1,0,0,0,543,
	541,1,0,0,0,543,544,1,0,0,0,544,595,1,0,0,0,545,547,3,34,17,0,546,545,1,
	0,0,0,547,548,1,0,0,0,548,546,1,0,0,0,548,549,1,0,0,0,549,595,1,0,0,0,550,
	552,5,42,0,0,551,553,3,34,17,0,552,551,1,0,0,0,553,554,1,0,0,0,554,552,
	1,0,0,0,554,555,1,0,0,0,555,595,1,0,0,0,556,558,5,42,0,0,557,559,3,34,17,
	0,558,557,1,0,0,0,559,560,1,0,0,0,560,558,1,0,0,0,560,561,1,0,0,0,561,562,
	1,0,0,0,562,564,5,174,0,0,563,565,3,34,17,0,564,563,1,0,0,0,565,566,1,0,
	0,0,566,564,1,0,0,0,566,567,1,0,0,0,567,595,1,0,0,0,568,570,3,34,17,0,569,
	568,1,0,0,0,570,571,1,0,0,0,571,569,1,0,0,0,571,572,1,0,0,0,572,573,1,0,
	0,0,573,575,5,174,0,0,574,576,3,34,17,0,575,574,1,0,0,0,576,577,1,0,0,0,
	577,575,1,0,0,0,577,578,1,0,0,0,578,595,1,0,0,0,579,581,5,138,0,0,580,582,
	3,34,17,0,581,580,1,0,0,0,582,583,1,0,0,0,583,581,1,0,0,0,583,584,1,0,0,
	0,584,595,1,0,0,0,585,586,5,215,0,0,586,587,5,188,0,0,587,588,5,208,0,0,
	588,590,5,218,0,0,589,591,3,34,17,0,590,589,1,0,0,0,591,592,1,0,0,0,592,
	590,1,0,0,0,592,593,1,0,0,0,593,595,1,0,0,0,594,538,1,0,0,0,594,546,1,0,
	0,0,594,550,1,0,0,0,594,556,1,0,0,0,594,569,1,0,0,0,594,579,1,0,0,0,594,
	585,1,0,0,0,595,39,1,0,0,0,596,598,7,7,0,0,597,596,1,0,0,0,597,598,1,0,
	0,0,598,600,1,0,0,0,599,601,3,42,21,0,600,599,1,0,0,0,601,602,1,0,0,0,602,
	600,1,0,0,0,602,603,1,0,0,0,603,654,1,0,0,0,604,606,3,42,21,0,605,604,1,
	0,0,0,606,607,1,0,0,0,607,605,1,0,0,0,607,608,1,0,0,0,608,654,1,0,0,0,609,
	611,5,42,0,0,610,612,3,42,21,0,611,610,1,0,0,0,612,613,1,0,0,0,613,611,
	1,0,0,0,613,614,1,0,0,0,614,654,1,0,0,0,615,617,5,42,0,0,616,618,3,42,21,
	0,617,616,1,0,0,0,618,619,1,0,0,0,619,617,1,0,0,0,619,620,1,0,0,0,620,621,
	1,0,0,0,621,623,5,174,0,0,622,624,3,42,21,0,623,622,1,0,0,0,624,625,1,0,
	0,0,625,623,1,0,0,0,625,626,1,0,0,0,626,654,1,0,0,0,627,629,3,42,21,0,628,
	627,1,0,0,0,629,630,1,0,0,0,630,628,1,0,0,0,630,631,1,0,0,0,631,632,1,0,
	0,0,632,634,5,174,0,0,633,635,3,42,21,0,634,633,1,0,0,0,635,636,1,0,0,0,
	636,634,1,0,0,0,636,637,1,0,0,0,637,654,1,0,0,0,638,640,5,138,0,0,639,641,
	3,42,21,0,640,639,1,0,0,0,641,642,1,0,0,0,642,640,1,0,0,0,642,643,1,0,0,
	0,643,654,1,0,0,0,644,645,5,215,0,0,645,646,5,188,0,0,646,647,5,208,0,0,
	647,649,5,218,0,0,648,650,3,42,21,0,649,648,1,0,0,0,650,651,1,0,0,0,651,
	649,1,0,0,0,651,652,1,0,0,0,652,654,1,0,0,0,653,597,1,0,0,0,653,605,1,0,
	0,0,653,609,1,0,0,0,653,615,1,0,0,0,653,628,1,0,0,0,653,638,1,0,0,0,653,
	644,1,0,0,0,654,41,1,0,0,0,655,658,3,34,17,0,656,658,5,268,0,0,657,655,
	1,0,0,0,657,656,1,0,0,0,658,43,1,0,0,0,659,661,7,7,0,0,660,659,1,0,0,0,
	660,661,1,0,0,0,661,663,1,0,0,0,662,664,3,36,18,0,663,662,1,0,0,0,664,665,
	1,0,0,0,665,663,1,0,0,0,665,666,1,0,0,0,666,708,1,0,0,0,667,669,3,36,18,
	0,668,667,1,0,0,0,669,670,1,0,0,0,670,668,1,0,0,0,670,671,1,0,0,0,671,708,
	1,0,0,0,672,674,5,42,0,0,673,675,3,36,18,0,674,673,1,0,0,0,675,676,1,0,
	0,0,676,674,1,0,0,0,676,677,1,0,0,0,677,708,1,0,0,0,678,680,5,42,0,0,679,
	681,3,36,18,0,680,679,1,0,0,0,681,682,1,0,0,0,682,680,1,0,0,0,682,683,1,
	0,0,0,683,684,1,0,0,0,684,686,5,174,0,0,685,687,3,36,18,0,686,685,1,0,0,
	0,687,688,1,0,0,0,688,686,1,0,0,0,688,689,1,0,0,0,689,708,1,0,0,0,690,692,
	3,36,18,0,691,690,1,0,0,0,692,693,1,0,0,0,693,691,1,0,0,0,693,694,1,0,0,
	0,694,695,1,0,0,0,695,697,5,174,0,0,696,698,3,36,18,0,697,696,1,0,0,0,698,
	699,1,0,0,0,699,697,1,0,0,0,699,700,1,0,0,0,700,708,1,0,0,0,701,703,5,138,
	0,0,702,704,3,36,18,0,703,702,1,0,0,0,704,705,1,0,0,0,705,703,1,0,0,0,705,
	706,1,0,0,0,706,708,1,0,0,0,707,660,1,0,0,0,707,668,1,0,0,0,707,672,1,0,
	0,0,707,678,1,0,0,0,707,691,1,0,0,0,707,701,1,0,0,0,708,45,1,0,0,0,709,
	715,3,38,19,0,710,711,3,52,26,0,711,712,3,38,19,0,712,714,1,0,0,0,713,710,
	1,0,0,0,714,717,1,0,0,0,715,713,1,0,0,0,715,716,1,0,0,0,716,47,1,0,0,0,
	717,715,1,0,0,0,718,724,3,40,20,0,719,720,3,52,26,0,720,721,3,40,20,0,721,
	723,1,0,0,0,722,719,1,0,0,0,723,726,1,0,0,0,724,722,1,0,0,0,724,725,1,0,
	0,0,725,49,1,0,0,0,726,724,1,0,0,0,727,733,3,44,22,0,728,729,3,52,26,0,
	729,730,3,44,22,0,730,732,1,0,0,0,731,728,1,0,0,0,732,735,1,0,0,0,733,731,
	1,0,0,0,733,734,1,0,0,0,734,51,1,0,0,0,735,733,1,0,0,0,736,737,7,8,0,0,
	737,53,1,0,0,0,738,739,5,270,0,0,739,55,1,0,0,0,740,741,5,267,0,0,741,57,
	1,0,0,0,742,743,7,11,0,0,743,59,1,0,0,0,744,745,5,97,0,0,745,753,3,50,25,
	0,746,748,5,176,0,0,747,749,5,267,0,0,748,747,1,0,0,0,749,750,1,0,0,0,750,
	748,1,0,0,0,750,751,1,0,0,0,751,752,1,0,0,0,752,754,5,275,0,0,753,746,1,
	0,0,0,753,754,1,0,0,0,754,756,1,0,0,0,755,757,5,163,0,0,756,755,1,0,0,0,
	756,757,1,0,0,0,757,761,1,0,0,0,758,760,3,62,31,0,759,758,1,0,0,0,760,763,
	1,0,0,0,761,759,1,0,0,0,761,762,1,0,0,0,762,61,1,0,0,0,763,761,1,0,0,0,
	764,767,3,64,32,0,765,767,3,66,33,0,766,764,1,0,0,0,766,765,1,0,0,0,767,
	768,1,0,0,0,768,769,5,281,0,0,769,63,1,0,0,0,770,772,5,111,0,0,771,770,
	1,0,0,0,771,772,1,0,0,0,772,773,1,0,0,0,773,776,3,32,16,0,774,776,3,48,
	24,0,775,771,1,0,0,0,775,774,1,0,0,0,776,777,1,0,0,0,777,779,5,172,0,0,
	778,780,7,12,0,0,779,778,1,0,0,0,779,780,1,0,0,0,780,782,1,0,0,0,781,783,
	3,114,57,0,782,781,1,0,0,0,782,783,1,0,0,0,783,65,1,0,0,0,784,789,3,48,
	24,0,785,786,5,176,0,0,786,787,3,46,23,0,787,788,5,275,0,0,788,790,1,0,
	0,0,789,785,1,0,0,0,789,790,1,0,0,0,790,792,1,0,0,0,791,793,5,291,0,0,792,
	791,1,0,0,0,792,793,1,0,0,0,793,797,1,0,0,0,794,798,3,68,34,0,795,798,3,
	90,45,0,796,798,3,92,46,0,797,794,1,0,0,0,797,795,1,0,0,0,797,796,1,0,0,
	0,798,801,1,0,0,0,799,800,5,175,0,0,800,802,3,102,51,0,801,799,1,0,0,0,
	801,802,1,0,0,0,802,812,1,0,0,0,803,804,5,169,0,0,804,809,3,116,58,0,805,
	806,5,214,0,0,806,808,3,116,58,0,807,805,1,0,0,0,808,811,1,0,0,0,809,807,
	1,0,0,0,809,810,1,0,0,0,810,813,1,0,0,0,811,809,1,0,0,0,812,803,1,0,0,0,
	812,813,1,0,0,0,813,815,1,0,0,0,814,816,3,114,57,0,815,814,1,0,0,0,815,
	816,1,0,0,0,816,67,1,0,0,0,817,824,3,72,36,0,818,824,3,74,37,0,819,824,
	3,78,39,0,820,824,3,80,40,0,821,824,3,70,35,0,822,824,3,76,38,0,823,817,
	1,0,0,0,823,818,1,0,0,0,823,819,1,0,0,0,823,820,1,0,0,0,823,821,1,0,0,0,
	823,822,1,0,0,0,824,69,1,0,0,0,825,826,5,99,0,0,826,830,5,242,0,0,827,831,
	3,68,34,0,828,831,3,90,45,0,829,831,3,92,46,0,830,827,1,0,0,0,830,828,1,
	0,0,0,830,829,1,0,0,0,831,71,1,0,0,0,832,837,5,179,0,0,833,834,5,274,0,
	0,834,835,3,82,41,0,835,836,5,275,0,0,836,838,1,0,0,0,837,833,1,0,0,0,837,
	838,1,0,0,0,838,73,1,0,0,0,839,840,5,184,0,0,840,75,1,0,0,0,841,846,5,180,
	0,0,842,843,5,274,0,0,843,844,3,82,41,0,844,845,5,275,0,0,845,847,1,0,0,
	0,846,842,1,0,0,0,846,847,1,0,0,0,847,77,1,0,0,0,848,849,5,164,0,0,849,
	79,1,0,0,0,850,851,7,13,0,0,851,81,1,0,0,0,852,854,7,14,0,0,853,852,1,0,
	0,0,853,854,1,0,0,0,854,861,1,0,0,0,855,862,5,170,0,0,856,857,5,171,0,0,
	857,858,5,174,0,0,858,859,5,268,0,0,859,862,5,167,0,0,860,862,5,171,0,0,
	861,855,1,0,0,0,861,856,1,0,0,0,861,860,1,0,0,0,862,83,1,0,0,0,863,864,
	5,98,0,0,864,865,5,267,0,0,865,866,5,29,0,0,866,869,3,86,43,0,867,868,5,
	175,0,0,868,870,3,102,51,0,869,867,1,0,0,0,869,870,1,0,0,0,870,872,1,0,
	0,0,871,873,5,281,0,0,872,871,1,0,0,0,872,873,1,0,0,0,873,85,1,0,0,0,874,
	880,3,88,44,0,875,880,3,72,36,0,876,880,3,74,37,0,877,880,3,78,39,0,878,
	880,3,80,40,0,879,874,1,0,0,0,879,875,1,0,0,0,879,876,1,0,0,0,879,877,1,
	0,0,0,879,878,1,0,0,0,880,87,1,0,0,0,881,883,5,168,0,0,882,884,5,273,0,
	0,883,882,1,0,0,0,884,885,1,0,0,0,885,883,1,0,0,0,885,886,1,0,0,0,886,89,
	1,0,0,0,887,888,5,267,0,0,888,91,1,0,0,0,889,890,5,267,0,0,890,93,1,0,0,
	0,891,892,5,101,0,0,892,896,3,32,16,0,893,895,3,96,48,0,894,893,1,0,0,0,
	895,898,1,0,0,0,896,894,1,0,0,0,896,897,1,0,0,0,897,95,1,0,0,0,898,896,
	1,0,0,0,899,900,7,15,0,0,900,905,3,100,50,0,901,902,5,176,0,0,902,903,3,
	100,50,0,903,904,5,275,0,0,904,906,1,0,0,0,905,901,1,0,0,0,905,906,1,0,
	0,0,906,907,1,0,0,0,907,909,3,100,50,0,908,910,3,100,50,0,909,908,1,0,0,
	0,909,910,1,0,0,0,910,917,1,0,0,0,911,913,5,269,0,0,912,914,5,282,0,0,913,
	912,1,0,0,0,913,914,1,0,0,0,914,915,1,0,0,0,915,916,5,268,0,0,916,918,3,
	100,50,0,917,911,1,0,0,0,917,918,1,0,0,0,918,97,1,0,0,0,919,920,7,16,0,
	0,920,99,1,0,0,0,921,932,3,98,49,0,922,932,5,207,0,0,923,932,5,208,0,0,
	924,932,5,222,0,0,925,932,5,223,0,0,926,932,5,219,0,0,927,932,5,220,0,0,
	928,932,5,248,0,0,929,932,5,249,0,0,930,932,5,221,0,0,931,921,1,0,0,0,931,
	922,1,0,0,0,931,923,1,0,0,0,931,924,1,0,0,0,931,925,1,0,0,0,931,926,1,0,
	0,0,931,927,1,0,0,0,931,928,1,0,0,0,931,929,1,0,0,0,931,930,1,0,0,0,932,
	101,1,0,0,0,933,938,3,104,52,0,934,935,5,282,0,0,935,937,3,104,52,0,936,
	934,1,0,0,0,937,940,1,0,0,0,938,936,1,0,0,0,938,939,1,0,0,0,939,946,1,0,
	0,0,940,938,1,0,0,0,941,946,5,268,0,0,942,946,5,283,0,0,943,946,5,264,0,
	0,944,946,5,265,0,0,945,933,1,0,0,0,945,941,1,0,0,0,945,942,1,0,0,0,945,
	943,1,0,0,0,945,944,1,0,0,0,946,103,1,0,0,0,947,952,3,106,53,0,948,949,
	5,285,0,0,949,951,3,106,53,0,950,948,1,0,0,0,951,954,1,0,0,0,952,950,1,
	0,0,0,952,953,1,0,0,0,953,105,1,0,0,0,954,952,1,0,0,0,955,958,3,98,49,0,
	956,957,5,288,0,0,957,959,5,268,0,0,958,956,1,0,0,0,958,959,1,0,0,0,959,
	107,1,0,0,0,960,961,5,100,0,0,961,963,3,46,23,0,962,964,5,278,0,0,963,962,
	1,0,0,0,963,964,1,0,0,0,964,965,1,0,0,0,965,966,5,27,0,0,966,967,3,46,23,
	0,967,969,3,110,55,0,968,970,3,112,56,0,969,968,1,0,0,0,970,971,1,0,0,0,
	971,969,1,0,0,0,971,972,1,0,0,0,972,109,1,0,0,0,973,974,5,2,0,0,974,975,
	3,52,26,0,975,977,5,275,0,0,976,978,5,280,0,0,977,976,1,0,0,0,977,978,1,
	0,0,0,978,981,1,0,0,0,979,981,5,1,0,0,980,973,1,0,0,0,980,979,1,0,0,0,981,
	111,1,0,0,0,982,983,5,268,0,0,983,984,5,279,0,0,984,985,3,46,23,0,985,113,
	1,0,0,0,986,987,7,17,0,0,987,115,1,0,0,0,988,989,5,267,0,0,989,117,1,0,
	0,0,990,991,5,102,0,0,991,992,3,120,60,0,992,995,5,280,0,0,993,996,3,68,
	34,0,994,996,3,90,45,0,995,993,1,0,0,0,995,994,1,0,0,0,996,999,1,0,0,0,
	997,998,5,175,0,0,998,1000,3,102,51,0,999,997,1,0,0,0,999,1000,1,0,0,0,
	1000,1003,1,0,0,0,1001,1002,5,111,0,0,1002,1004,3,274,137,0,1003,1001,1,
	0,0,0,1003,1004,1,0,0,0,1004,1006,1,0,0,0,1005,1007,3,114,57,0,1006,1005,
	1,0,0,0,1006,1007,1,0,0,0,1007,119,1,0,0,0,1008,1010,7,15,0,0,1009,1008,
	1,0,0,0,1009,1010,1,0,0,0,1010,1011,1,0,0,0,1011,1017,3,122,61,0,1012,1013,
	3,52,26,0,1013,1014,3,122,61,0,1014,1016,1,0,0,0,1015,1012,1,0,0,0,1016,
	1019,1,0,0,0,1017,1015,1,0,0,0,1017,1018,1,0,0,0,1018,121,1,0,0,0,1019,
	1017,1,0,0,0,1020,1024,7,18,0,0,1021,1023,7,19,0,0,1022,1021,1,0,0,0,1023,
	1026,1,0,0,0,1024,1022,1,0,0,0,1024,1025,1,0,0,0,1025,123,1,0,0,0,1026,
	1024,1,0,0,0,1027,1029,7,15,0,0,1028,1027,1,0,0,0,1028,1029,1,0,0,0,1029,
	1030,1,0,0,0,1030,1036,3,122,61,0,1031,1032,3,52,26,0,1032,1033,3,122,61,
	0,1033,1035,1,0,0,0,1034,1031,1,0,0,0,1035,1038,1,0,0,0,1036,1034,1,0,0,
	0,1036,1037,1,0,0,0,1037,1041,1,0,0,0,1038,1036,1,0,0,0,1039,1041,3,46,
	23,0,1040,1028,1,0,0,0,1040,1039,1,0,0,0,1041,125,1,0,0,0,1042,1043,5,103,
	0,0,1043,1044,3,46,23,0,1044,1046,3,128,64,0,1045,1047,3,128,64,0,1046,
	1045,1,0,0,0,1047,1048,1,0,0,0,1048,1046,1,0,0,0,1048,1049,1,0,0,0,1049,
	1050,1,0,0,0,1050,1051,3,132,66,0,1051,1058,1,0,0,0,1052,1053,5,28,0,0,
	1053,1054,3,46,23,0,1054,1055,3,128,64,0,1055,1056,3,132,66,0,1056,1058,
	1,0,0,0,1057,1042,1,0,0,0,1057,1052,1,0,0,0,1058,127,1,0,0,0,1059,1060,
	7,15,0,0,1060,1065,3,130,65,0,1061,1062,5,176,0,0,1062,1063,3,46,23,0,1063,
	1064,5,275,0,0,1064,1066,1,0,0,0,1065,1061,1,0,0,0,1065,1066,1,0,0,0,1066,
	1067,1,0,0,0,1067,1069,5,291,0,0,1068,1070,5,267,0,0,1069,1068,1,0,0,0,
	1070,1071,1,0,0,0,1071,1069,1,0,0,0,1071,1072,1,0,0,0,1072,129,1,0,0,0,
	1073,1076,3,34,17,0,1074,1076,3,52,26,0,1075,1073,1,0,0,0,1075,1074,1,0,
	0,0,1076,1077,1,0,0,0,1077,1075,1,0,0,0,1077,1078,1,0,0,0,1078,131,1,0,
	0,0,1079,1081,3,134,67,0,1080,1079,1,0,0,0,1081,1082,1,0,0,0,1082,1080,
	1,0,0,0,1082,1083,1,0,0,0,1083,133,1,0,0,0,1084,1085,8,20,0,0,1085,135,
	1,0,0,0,1086,1087,5,94,0,0,1087,1089,3,142,71,0,1088,1090,5,268,0,0,1089,
	1088,1,0,0,0,1089,1090,1,0,0,0,1090,1092,1,0,0,0,1091,1093,3,138,69,0,1092,
	1091,1,0,0,0,1093,1094,1,0,0,0,1094,1092,1,0,0,0,1094,1095,1,0,0,0,1095,
	137,1,0,0,0,1096,1097,3,146,73,0,1097,1103,3,152,76,0,1098,1100,3,184,92,
	0,1099,1101,5,279,0,0,1100,1099,1,0,0,0,1100,1101,1,0,0,0,1101,1104,1,0,
	0,0,1102,1104,5,279,0,0,1103,1098,1,0,0,0,1103,1102,1,0,0,0,1103,1104,1,
	0,0,0,1104,1106,1,0,0,0,1105,1107,3,268,134,0,1106,1105,1,0,0,0,1106,1107,
	1,0,0,0,1107,139,1,0,0,0,1108,1109,5,95,0,0,1109,1111,3,46,23,0,1110,1112,
	5,110,0,0,1111,1110,1,0,0,0,1111,1112,1,0,0,0,1112,1115,1,0,0,0,1113,1116,
	3,136,68,0,1114,1116,3,176,88,0,1115,1113,1,0,0,0,1115,1114,1,0,0,0,1116,
	1117,1,0,0,0,1117,1115,1,0,0,0,1117,1118,1,0,0,0,1118,141,1,0,0,0,1119,
	1123,3,48,24,0,1120,1122,3,144,72,0,1121,1120,1,0,0,0,1122,1125,1,0,0,0,
	1123,1121,1,0,0,0,1123,1124,1,0,0,0,1124,143,1,0,0,0,1125,1123,1,0,0,0,
	1126,1141,5,196,0,0,1127,1128,5,278,0,0,1128,1141,3,48,24,0,1129,1130,5,
	278,0,0,1130,1131,5,174,0,0,1131,1141,3,48,24,0,1132,1133,5,214,0,0,1133,
	1141,3,48,24,0,1134,1135,5,111,0,0,1135,1141,3,48,24,0,1136,1137,5,202,
	0,0,1137,1138,3,48,24,0,1138,1139,5,111,0,0,1139,1141,1,0,0,0,1140,1126,
	1,0,0,0,1140,1127,1,0,0,0,1140,1129,1,0,0,0,1140,1132,1,0,0,0,1140,1134,
	1,0,0,0,1140,1136,1,0,0,0,1141,145,1,0,0,0,1142,1143,5,106,0,0,1143,1144,
	3,148,74,0,1144,147,1,0,0,0,1145,1155,5,205,0,0,1146,1147,5,148,0,0,1147,
	1150,3,150,75,0,1148,1149,7,21,0,0,1149,1151,3,150,75,0,1150,1148,1,0,0,
	0,1150,1151,1,0,0,0,1151,1155,1,0,0,0,1152,1153,7,21,0,0,1153,1155,3,150,
	75,0,1154,1145,1,0,0,0,1154,1146,1,0,0,0,1154,1152,1,0,0,0,1155,149,1,0,
	0,0,1156,1159,3,54,27,0,1157,1159,5,268,0,0,1158,1156,1,0,0,0,1158,1157,
	1,0,0,0,1159,151,1,0,0,0,1160,1161,5,213,0,0,1161,1162,5,207,0,0,1162,1163,
	5,111,0,0,1163,1164,5,213,0,0,1164,1201,3,46,23,0,1165,1172,3,216,108,0,
	1166,1167,5,8,0,0,1167,1173,3,274,137,0,1168,1169,5,9,0,0,1169,1173,3,274,
	137,0,1170,1171,5,10,0,0,1171,1173,3,274,137,0,1172,1166,1,0,0,0,1172,1168,
	1,0,0,0,1172,1170,1,0,0,0,1173,1175,1,0,0,0,1174,1176,3,314,157,0,1175,
	1174,1,0,0,0,1175,1176,1,0,0,0,1176,1201,1,0,0,0,1177,1178,3,216,108,0,
	1178,1179,5,112,0,0,1179,1180,3,154,77,0,1180,1181,3,274,137,0,1181,1201,
	1,0,0,0,1182,1201,3,156,78,0,1183,1201,3,168,84,0,1184,1185,3,204,102,0,
	1185,1186,5,108,0,0,1186,1187,7,15,0,0,1187,1188,3,46,23,0,1188,1189,5,
	174,0,0,1189,1190,3,218,109,0,1190,1191,7,22,0,0,1191,1192,3,274,137,0,
	1192,1201,1,0,0,0,1193,1194,3,204,102,0,1194,1195,7,1,0,0,1195,1197,3,220,
	110,0,1196,1198,3,314,157,0,1197,1196,1,0,0,0,1197,1198,1,0,0,0,1198,1201,
	1,0,0,0,1199,1201,3,348,174,0,1200,1160,1,0,0,0,1200,1165,1,0,0,0,1200,
	1177,1,0,0,0,1200,1182,1,0,0,0,1200,1183,1,0,0,0,1200,1184,1,0,0,0,1200,
	1193,1,0,0,0,1200,1199,1,0,0,0,1201,153,1,0,0,0,1202,1203,7,23,0,0,1203,
	155,1,0,0,0,1204,1205,5,213,0,0,1205,1206,3,158,79,0,1206,1207,5,242,0,
	0,1207,1208,5,213,0,0,1208,1209,3,160,80,0,1209,1210,5,111,0,0,1210,1211,
	7,6,0,0,1211,1212,3,158,79,0,1212,1213,5,242,0,0,1213,1214,7,6,0,0,1214,
	1215,3,160,80,0,1215,157,1,0,0,0,1216,1218,3,164,82,0,1217,1216,1,0,0,0,
	1218,1219,1,0,0,0,1219,1217,1,0,0,0,1219,1220,1,0,0,0,1220,159,1,0,0,0,
	1221,1223,3,162,81,0,1222,1221,1,0,0,0,1223,1224,1,0,0,0,1224,1222,1,0,
	0,0,1224,1225,1,0,0,0,1225,161,1,0,0,0,1226,1232,3,34,17,0,1227,1232,3,
	52,26,0,1228,1232,5,210,0,0,1229,1232,5,215,0,0,1230,1232,5,213,0,0,1231,
	1226,1,0,0,0,1231,1227,1,0,0,0,1231,1228,1,0,0,0,1231,1229,1,0,0,0,1231,
	1230,1,0,0,0,1232,163,1,0,0,0,1233,1236,3,34,17,0,1234,1236,3,166,83,0,
	1235,1233,1,0,0,0,1235,1234,1,0,0,0,1236,165,1,0,0,0,1237,1238,7,24,0,0,
	1238,167,1,0,0,0,1239,1240,3,204,102,0,1240,1241,5,108,0,0,1241,1242,7,
	6,0,0,1242,1244,3,46,23,0,1243,1245,3,170,85,0,1244,1243,1,0,0,0,1244,1245,
	1,0,0,0,1245,1247,1,0,0,0,1246,1248,5,279,0,0,1247,1246,1,0,0,0,1247,1248,
	1,0,0,0,1248,169,1,0,0,0,1249,1250,5,174,0,0,1250,1255,3,172,86,0,1251,
	1252,5,278,0,0,1252,1254,3,172,86,0,1253,1251,1,0,0,0,1254,1257,1,0,0,0,
	1255,1253,1,0,0,0,1255,1256,1,0,0,0,1256,1260,1,0,0,0,1257,1255,1,0,0,0,
	1258,1259,5,214,0,0,1259,1261,3,172,86,0,1260,1258,1,0,0,0,1260,1261,1,
	0,0,0,1261,171,1,0,0,0,1262,1263,3,174,87,0,1263,1264,5,126,0,0,1264,1265,
	3,276,138,0,1265,173,1,0,0,0,1266,1267,3,38,19,0,1267,175,1,0,0,0,1268,
	1269,5,93,0,0,1269,1279,3,46,23,0,1270,1280,3,178,89,0,1271,1277,3,182,
	91,0,1272,1274,3,184,92,0,1273,1275,5,279,0,0,1274,1273,1,0,0,0,1274,1275,
	1,0,0,0,1275,1278,1,0,0,0,1276,1278,5,279,0,0,1277,1272,1,0,0,0,1277,1276,
	1,0,0,0,1277,1278,1,0,0,0,1278,1280,1,0,0,0,1279,1270,1,0,0,0,1279,1271,
	1,0,0,0,1280,177,1,0,0,0,1281,1282,3,180,90,0,1282,1284,5,90,0,0,1283,1285,
	5,279,0,0,1284,1283,1,0,0,0,1284,1285,1,0,0,0,1285,179,1,0,0,0,1286,1287,
	5,210,0,0,1287,1288,3,46,23,0,1288,1289,5,242,0,0,1289,1290,5,122,0,0,1290,
	1291,3,46,23,0,1291,181,1,0,0,0,1292,1294,7,25,0,0,1293,1292,1,0,0,0,1293,
	1294,1,0,0,0,1294,1295,1,0,0,0,1295,1296,3,46,23,0,1296,1297,5,92,0,0,1297,
	183,1,0,0,0,1298,1301,5,109,0,0,1299,1302,3,274,137,0,1300,1302,3,186,93,
	0,1301,1299,1,0,0,0,1301,1300,1,0,0,0,1302,185,1,0,0,0,1303,1304,5,43,0,
	0,1304,1305,3,188,94,0,1305,1306,7,26,0,0,1306,1307,5,41,0,0,1307,1309,
	5,280,0,0,1308,1310,3,190,95,0,1309,1308,1,0,0,0,1310,1311,1,0,0,0,1311,
	1309,1,0,0,0,1311,1312,1,0,0,0,1312,1346,1,0,0,0,1313,1318,3,204,102,0,
	1314,1318,5,217,0,0,1315,1318,5,215,0,0,1316,1318,5,250,0,0,1317,1313,1,
	0,0,0,1317,1314,1,0,0,0,1317,1315,1,0,0,0,1317,1316,1,0,0,0,1318,1319,1,
	0,0,0,1319,1320,5,120,0,0,1320,1321,3,188,94,0,1321,1322,7,26,0,0,1322,
	1323,5,152,0,0,1323,1325,5,280,0,0,1324,1326,3,190,95,0,1325,1324,1,0,0,
	0,1326,1327,1,0,0,0,1327,1325,1,0,0,0,1327,1328,1,0,0,0,1328,1346,1,0,0,
	0,1329,1334,3,204,102,0,1330,1334,5,217,0,0,1331,1334,5,215,0,0,1332,1334,
	5,250,0,0,1333,1329,1,0,0,0,1333,1330,1,0,0,0,1333,1331,1,0,0,0,1333,1332,
	1,0,0,0,1334,1335,1,0,0,0,1335,1336,5,152,0,0,1336,1337,5,120,0,0,1337,
	1338,3,188,94,0,1338,1339,7,26,0,0,1339,1341,5,280,0,0,1340,1342,3,190,
	95,0,1341,1340,1,0,0,0,1342,1343,1,0,0,0,1343,1341,1,0,0,0,1343,1344,1,
	0,0,0,1344,1346,1,0,0,0,1345,1303,1,0,0,0,1345,1317,1,0,0,0,1345,1333,1,
	0,0,0,1346,187,1,0,0,0,1347,1363,5,210,0,0,1348,1363,5,122,0,0,1349,1363,
	5,201,0,0,1350,1351,7,27,0,0,1351,1352,7,28,0,0,1352,1353,5,242,0,0,1353,
	1363,5,210,0,0,1354,1355,5,157,0,0,1355,1356,7,28,0,0,1356,1357,5,242,0,
	0,1357,1363,5,210,0,0,1358,1359,5,158,0,0,1359,1360,7,28,0,0,1360,1361,
	5,242,0,0,1361,1363,5,210,0,0,1362,1347,1,0,0,0,1362,1348,1,0,0,0,1362,
	1349,1,0,0,0,1362,1350,1,0,0,0,1362,1354,1,0,0,0,1362,1358,1,0,0,0,1363,
	189,1,0,0,0,1364,1367,3,192,96,0,1365,1368,3,198,99,0,1366,1368,3,200,100,
	0,1367,1365,1,0,0,0,1367,1366,1,0,0,0,1368,191,1,0,0,0,1369,1370,7,29,0,
	0,1370,193,1,0,0,0,1371,1375,5,289,0,0,1372,1373,5,284,0,0,1373,1375,5,
	284,0,0,1374,1371,1,0,0,0,1374,1372,1,0,0,0,1375,195,1,0,0,0,1376,1378,
	7,30,0,0,1377,1376,1,0,0,0,1378,1379,1,0,0,0,1379,1377,1,0,0,0,1379,1380,
	1,0,0,0,1380,197,1,0,0,0,1381,1382,3,274,137,0,1382,199,1,0,0,0,1383,1387,
	3,204,102,0,1384,1387,5,217,0,0,1385,1387,5,250,0,0,1386,1383,1,0,0,0,1386,
	1384,1,0,0,0,1386,1385,1,0,0,0,1387,1388,1,0,0,0,1388,1389,5,152,0,0,1389,
	1390,5,120,0,0,1390,1391,3,188,94,0,1391,1392,7,26,0,0,1392,1394,5,280,
	0,0,1393,1395,3,202,101,0,1394,1393,1,0,0,0,1395,1396,1,0,0,0,1396,1394,
	1,0,0,0,1396,1397,1,0,0,0,1397,201,1,0,0,0,1398,1401,3,194,97,0,1399,1402,
	3,198,99,0,1400,1402,3,200,100,0,1401,1399,1,0,0,0,1401,1400,1,0,0,0,1402,
	203,1,0,0,0,1403,1406,3,208,104,0,1404,1405,7,31,0,0,1405,1407,3,228,114,
	0,1406,1404,1,0,0,0,1406,1407,1,0,0,0,1407,205,1,0,0,0,1408,1411,3,210,
	105,0,1409,1410,7,31,0,0,1410,1412,3,228,114,0,1411,1409,1,0,0,0,1411,1412,
	1,0,0,0,1412,207,1,0,0,0,1413,1419,3,212,106,0,1414,1415,3,52,26,0,1415,
	1416,3,212,106,0,1416,1418,1,0,0,0,1417,1414,1,0,0,0,1418,1421,1,0,0,0,
	1419,1417,1,0,0,0,1419,1420,1,0,0,0,1420,209,1,0,0,0,1421,1419,1,0,0,0,
	1422,1428,3,214,107,0,1423,1424,3,52,26,0,1424,1425,3,214,107,0,1425,1427,
	1,0,0,0,1426,1423,1,0,0,0,1427,1430,1,0,0,0,1428,1426,1,0,0,0,1428,1429,
	1,0,0,0,1429,211,1,0,0,0,1430,1428,1,0,0,0,1431,1433,7,7,0,0,1432,1434,
	3,34,17,0,1433,1432,1,0,0,0,1434,1435,1,0,0,0,1435,1433,1,0,0,0,1435,1436,
	1,0,0,0,1436,1439,1,0,0,0,1437,1439,5,217,0,0,1438,1431,1,0,0,0,1438,1437,
	1,0,0,0,1439,213,1,0,0,0,1440,1442,7,7,0,0,1441,1443,3,42,21,0,1442,1441,
	1,0,0,0,1443,1444,1,0,0,0,1444,1442,1,0,0,0,1444,1445,1,0,0,0,1445,1448,
	1,0,0,0,1446,1448,5,217,0,0,1447,1440,1,0,0,0,1447,1446,1,0,0,0,1448,215,
	1,0,0,0,1449,1450,3,218,109,0,1450,1451,5,242,0,0,1451,1452,3,204,102,0,
	1452,217,1,0,0,0,1453,1454,3,50,25,0,1454,219,1,0,0,0,1455,1457,3,52,26,
	0,1456,1455,1,0,0,0,1456,1457,1,0,0,0,1457,1458,1,0,0,0,1458,1459,3,48,
	24,0,1459,221,1,0,0,0,1460,1462,3,52,26,0,1461,1460,1,0,0,0,1461,1462,1,
	0,0,0,1462,1464,1,0,0,0,1463,1465,7,6,0,0,1464,1463,1,0,0,0,1464,1465,1,
	0,0,0,1465,1467,1,0,0,0,1466,1468,3,42,21,0,1467,1466,1,0,0,0,1468,1469,
	1,0,0,0,1469,1467,1,0,0,0,1469,1470,1,0,0,0,1470,223,1,0,0,0,1471,1472,
	7,32,0,0,1472,1473,3,46,23,0,1473,225,1,0,0,0,1474,1475,5,122,0,0,1475,
	1482,3,46,23,0,1476,1479,3,46,23,0,1477,1478,7,31,0,0,1478,1480,3,228,114,
	0,1479,1477,1,0,0,0,1479,1480,1,0,0,0,1480,1482,1,0,0,0,1481,1474,1,0,0,
	0,1481,1476,1,0,0,0,1482,227,1,0,0,0,1483,1486,3,230,115,0,1484,1486,3,
	246,123,0,1485,1483,1,0,0,0,1485,1484,1,0,0,0,1486,229,1,0,0,0,1487,1493,
	3,238,119,0,1488,1493,3,232,116,0,1489,1493,3,240,120,0,1490,1493,3,242,
	121,0,1491,1493,3,244,122,0,1492,1487,1,0,0,0,1492,1488,1,0,0,0,1492,1489,
	1,0,0,0,1492,1490,1,0,0,0,1492,1491,1,0,0,0,1493,231,1,0,0,0,1494,1495,
	3,234,117,0,1495,233,1,0,0,0,1496,1498,5,213,0,0,1497,1496,1,0,0,0,1497,
	1498,1,0,0,0,1498,1501,1,0,0,0,1499,1502,3,220,110,0,1500,1502,3,236,118,
	0,1501,1499,1,0,0,0,1501,1500,1,0,0,0,1502,1503,1,0,0,0,1503,1504,7,33,
	0,0,1504,235,1,0,0,0,1505,1506,3,46,23,0,1506,237,1,0,0,0,1507,1509,5,213,
	0,0,1508,1507,1,0,0,0,1508,1509,1,0,0,0,1509,1510,1,0,0,0,1510,1511,3,46,
	23,0,1511,1513,5,107,0,0,1512,1514,3,286,143,0,1513,1512,1,0,0,0,1513,1514,
	1,0,0,0,1514,1515,1,0,0,0,1515,1516,3,290,145,0,1516,1517,3,274,137,0,1517,
	239,1,0,0,0,1518,1519,3,256,128,0,1519,1520,3,262,131,0,1520,241,1,0,0,
	0,1521,1522,3,258,129,0,1522,1523,3,264,132,0,1523,243,1,0,0,0,1524,1525,
	3,260,130,0,1525,1526,3,266,133,0,1526,245,1,0,0,0,1527,1528,5,120,0,0,
	1528,1529,3,188,94,0,1529,1530,7,26,0,0,1530,1531,7,34,0,0,1531,1533,5,
	280,0,0,1532,1534,3,248,124,0,1533,1532,1,0,0,0,1534,1535,1,0,0,0,1535,
	1533,1,0,0,0,1535,1536,1,0,0,0,1536,247,1,0,0,0,1537,1538,3,196,98,0,1538,
	1539,3,250,125,0,1539,1544,1,0,0,0,1540,1541,3,196,98,0,1541,1542,3,254,
	127,0,1542,1544,1,0,0,0,1543,1537,1,0,0,0,1543,1540,1,0,0,0,1544,249,1,
	0,0,0,1545,1546,3,252,126,0,1546,251,1,0,0,0,1547,1550,3,216,108,0,1548,
	1550,3,224,112,0,1549,1547,1,0,0,0,1549,1548,1,0,0,0,1550,1551,1,0,0,0,
	1551,1552,7,2,0,0,1552,1553,3,220,110,0,1553,1569,1,0,0,0,1554,1557,3,216,
	108,0,1555,1557,3,224,112,0,1556,1554,1,0,0,0,1556,1555,1,0,0,0,1557,1559,
	1,0,0,0,1558,1560,3,286,143,0,1559,1558,1,0,0,0,1559,1560,1,0,0,0,1560,
	1561,1,0,0,0,1561,1562,3,290,145,0,1562,1563,3,274,137,0,1563,1569,1,0,
	0,0,1564,1565,3,204,102,0,1565,1566,3,234,117,0,1566,1569,1,0,0,0,1567,
	1569,3,234,117,0,1568,1549,1,0,0,0,1568,1556,1,0,0,0,1568,1564,1,0,0,0,
	1568,1567,1,0,0,0,1569,253,1,0,0,0,1570,1575,5,152,0,0,1571,1575,5,151,
	0,0,1572,1573,5,115,0,0,1573,1575,5,116,0,0,1574,1570,1,0,0,0,1574,1571,
	1,0,0,0,1574,1572,1,0,0,0,1575,1576,1,0,0,0,1576,1577,5,120,0,0,1577,1578,
	3,188,94,0,1578,1579,7,26,0,0,1579,1581,5,280,0,0,1580,1582,3,248,124,0,
	1581,1580,1,0,0,0,1582,1583,1,0,0,0,1583,1581,1,0,0,0,1583,1584,1,0,0,0,
	1584,255,1,0,0,0,1585,1586,7,35,0,0,1586,257,1,0,0,0,1587,1588,7,36,0,0,
	1588,259,1,0,0,0,1589,1590,7,37,0,0,1590,261,1,0,0,0,1591,1592,3,274,137,
	0,1592,263,1,0,0,0,1593,1594,3,274,137,0,1594,265,1,0,0,0,1595,1620,3,54,
	27,0,1596,1620,5,233,0,0,1597,1620,5,234,0,0,1598,1599,5,17,0,0,1599,1600,
	5,274,0,0,1600,1601,3,304,152,0,1601,1602,5,278,0,0,1602,1603,3,304,152,
	0,1603,1604,5,278,0,0,1604,1605,3,304,152,0,1605,1606,5,275,0,0,1606,1620,
	1,0,0,0,1607,1608,5,18,0,0,1608,1609,5,274,0,0,1609,1610,3,304,152,0,1610,
	1611,5,275,0,0,1611,1620,1,0,0,0,1612,1620,3,216,108,0,1613,1620,3,224,
	112,0,1614,1620,3,124,62,0,1615,1616,5,274,0,0,1616,1617,3,274,137,0,1617,
	1618,5,275,0,0,1618,1620,1,0,0,0,1619,1595,1,0,0,0,1619,1596,1,0,0,0,1619,
	1597,1,0,0,0,1619,1598,1,0,0,0,1619,1607,1,0,0,0,1619,1612,1,0,0,0,1619,
	1613,1,0,0,0,1619,1614,1,0,0,0,1619,1615,1,0,0,0,1620,267,1,0,0,0,1621,
	1625,5,105,0,0,1622,1624,3,270,135,0,1623,1622,1,0,0,0,1624,1627,1,0,0,
	0,1625,1623,1,0,0,0,1625,1626,1,0,0,0,1626,1628,1,0,0,0,1627,1625,1,0,0,
	0,1628,1629,5,279,0,0,1629,269,1,0,0,0,1630,1632,7,15,0,0,1631,1630,1,0,
	0,0,1631,1632,1,0,0,0,1632,1633,1,0,0,0,1633,1634,5,267,0,0,1634,1635,5,
	111,0,0,1635,1636,3,272,136,0,1636,271,1,0,0,0,1637,1646,3,304,152,0,1638,
	1641,3,294,147,0,1639,1641,3,298,149,0,1640,1638,1,0,0,0,1640,1639,1,0,
	0,0,1641,1642,1,0,0,0,1642,1643,3,304,152,0,1643,1645,1,0,0,0,1644,1640,
	1,0,0,0,1645,1648,1,0,0,0,1646,1644,1,0,0,0,1646,1647,1,0,0,0,1647,273,
	1,0,0,0,1648,1646,1,0,0,0,1649,1650,3,278,139,0,1650,1651,5,278,0,0,1651,
	1652,3,308,154,0,1652,1653,3,306,153,0,1653,1663,1,0,0,0,1654,1655,3,278,
	139,0,1655,1656,5,278,0,0,1656,1657,3,308,154,0,1657,1663,1,0,0,0,1658,
	1659,3,278,139,0,1659,1660,3,306,153,0,1660,1663,1,0,0,0,1661,1663,3,278,
	139,0,1662,1649,1,0,0,0,1662,1654,1,0,0,0,1662,1658,1,0,0,0,1662,1661,1,
	0,0,0,1663,275,1,0,0,0,1664,1665,3,280,140,0,1665,1666,5,278,0,0,1666,1667,
	3,308,154,0,1667,1668,3,306,153,0,1668,1678,1,0,0,0,1669,1670,3,280,140,
	0,1670,1671,5,278,0,0,1671,1672,3,308,154,0,1672,1678,1,0,0,0,1673,1674,
	3,280,140,0,1674,1675,3,306,153,0,1675,1678,1,0,0,0,1676,1678,3,280,140,
	0,1677,1664,1,0,0,0,1677,1669,1,0,0,0,1677,1673,1,0,0,0,1677,1676,1,0,0,
	0,1678,277,1,0,0,0,1679,1682,3,280,140,0,1680,1681,7,38,0,0,1681,1683,3,
	278,139,0,1682,1680,1,0,0,0,1682,1683,1,0,0,0,1683,279,1,0,0,0,1684,1685,
	3,292,146,0,1685,1686,7,2,0,0,1686,1687,7,3,0,0,1687,1688,3,46,23,0,1688,
	1735,1,0,0,0,1689,1690,3,292,146,0,1690,1691,7,3,0,0,1691,1692,3,46,23,
	0,1692,1693,7,2,0,0,1693,1735,1,0,0,0,1694,1735,3,342,171,0,1695,1735,3,
	316,158,0,1696,1697,3,292,146,0,1697,1698,5,111,0,0,1698,1699,3,48,24,0,
	1699,1735,1,0,0,0,1700,1701,3,292,146,0,1701,1702,5,108,0,0,1702,1703,3,
	48,24,0,1703,1735,1,0,0,0,1704,1705,3,292,146,0,1705,1706,3,284,142,0,1706,
	1711,3,282,141,0,1707,1708,5,278,0,0,1708,1710,3,282,141,0,1709,1707,1,
	0,0,0,1710,1713,1,0,0,0,1711,1709,1,0,0,0,1711,1712,1,0,0,0,1712,1714,1,
	0,0,0,1713,1711,1,0,0,0,1714,1715,5,227,0,0,1715,1716,3,282,141,0,1716,
	1735,1,0,0,0,1717,1718,3,292,146,0,1718,1719,7,2,0,0,1719,1720,3,286,143,
	0,1720,1721,3,288,144,0,1721,1722,3,292,146,0,1722,1735,1,0,0,0,1723,1730,
	3,292,146,0,1724,1726,3,286,143,0,1725,1724,1,0,0,0,1725,1726,1,0,0,0,1726,
	1727,1,0,0,0,1727,1728,3,290,145,0,1728,1729,3,292,146,0,1729,1731,1,0,
	0,0,1730,1725,1,0,0,0,1730,1731,1,0,0,0,1731,1735,1,0,0,0,1732,1735,3,336,
	168,0,1733,1735,3,338,169,0,1734,1684,1,0,0,0,1734,1689,1,0,0,0,1734,1694,
	1,0,0,0,1734,1695,1,0,0,0,1734,1696,1,0,0,0,1734,1700,1,0,0,0,1734,1704,
	1,0,0,0,1734,1717,1,0,0,0,1734,1723,1,0,0,0,1734,1732,1,0,0,0,1734,1733,
	1,0,0,0,1735,281,1,0,0,0,1736,1746,5,273,0,0,1737,1746,5,272,0,0,1738,1740,
	5,268,0,0,1739,1741,3,102,51,0,1740,1739,1,0,0,0,1740,1741,1,0,0,0,1741,
	1746,1,0,0,0,1742,1746,5,271,0,0,1743,1746,3,54,27,0,1744,1746,3,32,16,
	0,1745,1736,1,0,0,0,1745,1737,1,0,0,0,1745,1738,1,0,0,0,1745,1742,1,0,0,
	0,1745,1743,1,0,0,0,1745,1744,1,0,0,0,1746,283,1,0,0,0,1747,1748,7,39,0,
	0,1748,285,1,0,0,0,1749,1751,5,138,0,0,1750,1749,1,0,0,0,1750,1751,1,0,
	0,0,1751,1756,1,0,0,0,1752,1753,5,5,0,0,1753,1757,5,219,0,0,1754,1755,5,
	6,0,0,1755,1757,5,222,0,0,1756,1752,1,0,0,0,1756,1754,1,0,0,0,1757,287,
	1,0,0,0,1758,1759,7,40,0,0,1759,289,1,0,0,0,1760,1761,7,41,0,0,1761,291,
	1,0,0,0,1762,1768,3,296,148,0,1763,1764,3,294,147,0,1764,1765,3,296,148,
	0,1765,1767,1,0,0,0,1766,1763,1,0,0,0,1767,1770,1,0,0,0,1768,1766,1,0,0,
	0,1768,1769,1,0,0,0,1769,293,1,0,0,0,1770,1768,1,0,0,0,1771,1772,7,42,0,
	0,1772,295,1,0,0,0,1773,1779,3,300,150,0,1774,1775,3,298,149,0,1775,1776,
	3,300,150,0,1776,1778,1,0,0,0,1777,1774,1,0,0,0,1778,1781,1,0,0,0,1779,
	1777,1,0,0,0,1779,1780,1,0,0,0,1780,297,1,0,0,0,1781,1779,1,0,0,0,1782,
	1783,7,43,0,0,1783,299,1,0,0,0,1784,1790,3,304,152,0,1785,1786,3,302,151,
	0,1786,1787,3,304,152,0,1787,1789,1,0,0,0,1788,1785,1,0,0,0,1789,1792,1,
	0,0,0,1790,1788,1,0,0,0,1790,1791,1,0,0,0,1791,301,1,0,0,0,1792,1790,1,
	0,0,0,1793,1794,7,44,0,0,1794,303,1,0,0,0,1795,1796,6,152,-1,0,1796,1797,
	5,135,0,0,1797,2061,3,304,152,55,1798,1799,5,294,0,0,1799,2061,3,304,152,
	54,1800,1801,5,138,0,0,1801,2061,3,304,152,53,1802,1803,5,11,0,0,1803,1804,
	3,304,152,0,1804,1805,5,144,0,0,1805,1808,3,304,152,0,1806,1807,5,190,0,
	0,1807,1809,3,100,50,0,1808,1806,1,0,0,0,1808,1809,1,0,0,0,1809,2061,1,
	0,0,0,1810,1811,5,194,0,0,1811,1812,3,304,152,0,1812,1813,5,144,0,0,1813,
	1816,3,304,152,0,1814,1815,5,190,0,0,1815,1817,3,100,50,0,1816,1814,1,0,
	0,0,1816,1817,1,0,0,0,1817,2061,1,0,0,0,1818,1819,5,193,0,0,1819,1824,3,
	304,152,0,1820,1821,5,278,0,0,1821,1823,3,304,152,0,1822,1820,1,0,0,0,1823,
	1826,1,0,0,0,1824,1822,1,0,0,0,1824,1825,1,0,0,0,1825,1827,1,0,0,0,1826,
	1824,1,0,0,0,1827,1828,5,214,0,0,1828,1829,3,304,152,50,1829,2061,1,0,0,
	0,1830,1831,5,193,0,0,1831,1832,5,122,0,0,1832,2061,3,46,23,0,1833,1834,
	5,193,0,0,1834,1835,5,122,0,0,1835,2061,3,216,108,0,1836,1837,5,215,0,0,
	1837,1840,5,188,0,0,1838,1840,5,188,0,0,1839,1836,1,0,0,0,1839,1838,1,0,
	0,0,1840,1841,1,0,0,0,1841,2061,3,226,113,0,1842,1843,5,215,0,0,1843,1844,
	5,188,0,0,1844,2061,3,216,108,0,1845,1846,5,188,0,0,1846,2061,3,216,108,
	0,1847,1850,5,268,0,0,1848,1851,5,283,0,0,1849,1851,5,267,0,0,1850,1848,
	1,0,0,0,1850,1849,1,0,0,0,1851,1854,1,0,0,0,1852,1854,5,271,0,0,1853,1847,
	1,0,0,0,1853,1852,1,0,0,0,1854,1855,1,0,0,0,1855,1856,5,242,0,0,1856,2061,
	3,304,152,44,1857,1858,5,271,0,0,1858,1859,5,242,0,0,1859,2061,3,304,152,
	43,1860,1861,5,30,0,0,1861,1866,3,304,152,0,1862,1863,5,278,0,0,1863,1865,
	3,304,152,0,1864,1862,1,0,0,0,1865,1868,1,0,0,0,1866,1864,1,0,0,0,1866,
	1867,1,0,0,0,1867,1869,1,0,0,0,1868,1866,1,0,0,0,1869,1870,7,38,0,0,1870,
	1871,3,304,152,39,1871,2061,1,0,0,0,1872,1873,5,154,0,0,1873,2061,3,304,
	152,37,1874,1875,5,12,0,0,1875,1876,5,274,0,0,1876,1877,3,274,137,0,1877,
	1878,5,275,0,0,1878,2061,1,0,0,0,1879,1880,5,14,0,0,1880,1885,3,304,152,
	0,1881,1882,5,278,0,0,1882,1884,3,304,152,0,1883,1881,1,0,0,0,1884,1887,
	1,0,0,0,1885,1883,1,0,0,0,1885,1886,1,0,0,0,1886,1888,1,0,0,0,1887,1885,
	1,0,0,0,1888,1889,5,214,0,0,1889,1890,3,304,152,35,1890,2061,1,0,0,0,1891,
	1892,5,14,0,0,1892,1893,5,122,0,0,1893,2061,3,216,108,0,1894,1895,5,13,
	0,0,1895,1900,3,304,152,0,1896,1897,5,278,0,0,1897,1899,3,304,152,0,1898,
	1896,1,0,0,0,1899,1902,1,0,0,0,1900,1898,1,0,0,0,1900,1901,1,0,0,0,1901,
	1903,1,0,0,0,1902,1900,1,0,0,0,1903,1904,5,214,0,0,1904,1905,3,304,152,
	33,1905,2061,1,0,0,0,1906,1907,5,13,0,0,1907,1908,5,122,0,0,1908,2061,3,
	216,108,0,1909,1910,5,215,0,0,1910,1911,5,219,0,0,1911,1912,5,239,0,0,1912,
	2061,3,304,152,31,1913,1914,5,210,0,0,1914,1915,5,222,0,0,1915,1916,5,239,
	0,0,1916,2061,3,304,152,30,1917,1918,5,210,0,0,1918,1919,5,207,0,0,1919,
	1920,5,239,0,0,1920,2061,3,304,152,29,1921,1922,5,17,0,0,1922,1923,5,274,
	0,0,1923,1924,3,304,152,0,1924,1925,5,278,0,0,1925,1926,3,304,152,0,1926,
	1927,5,278,0,0,1927,1928,3,304,152,0,1928,1929,5,275,0,0,1929,2061,1,0,
	0,0,1930,1931,5,18,0,0,1931,1932,5,274,0,0,1932,1933,3,304,152,0,1933,1934,
	5,275,0,0,1934,2061,1,0,0,0,1935,1936,3,266,133,0,1936,1937,7,45,0,0,1937,
	1938,3,304,152,0,1938,1939,3,58,29,0,1939,2061,1,0,0,0,1940,1941,5,189,
	0,0,1941,1946,3,304,152,0,1942,1943,5,278,0,0,1943,1945,3,304,152,0,1944,
	1942,1,0,0,0,1945,1948,1,0,0,0,1946,1944,1,0,0,0,1946,1947,1,0,0,0,1947,
	1949,1,0,0,0,1948,1946,1,0,0,0,1949,1950,5,214,0,0,1950,1951,3,304,152,
	25,1951,2061,1,0,0,0,1952,1953,5,191,0,0,1953,1958,3,304,152,0,1954,1955,
	5,278,0,0,1955,1957,3,304,152,0,1956,1954,1,0,0,0,1957,1960,1,0,0,0,1958,
	1956,1,0,0,0,1958,1959,1,0,0,0,1959,1961,1,0,0,0,1960,1958,1,0,0,0,1961,
	1962,5,214,0,0,1962,1963,3,304,152,24,1963,2061,1,0,0,0,1964,1965,5,15,
	0,0,1965,1967,3,274,137,0,1966,1968,3,314,157,0,1967,1966,1,0,0,0,1967,
	1968,1,0,0,0,1968,2061,1,0,0,0,1969,1970,5,215,0,0,1970,1971,5,188,0,0,
	1971,1972,5,208,0,0,1972,1981,5,218,0,0,1973,1975,5,210,0,0,1974,1973,1,
	0,0,0,1974,1975,1,0,0,0,1975,1976,1,0,0,0,1976,1982,5,222,0,0,1977,1979,
	5,215,0,0,1978,1977,1,0,0,0,1978,1979,1,0,0,0,1979,1980,1,0,0,0,1980,1982,
	5,219,0,0,1981,1974,1,0,0,0,1981,1978,1,0,0,0,1982,1983,1,0,0,0,1983,1984,
	5,209,0,0,1984,2061,3,274,137,0,1985,1987,3,32,16,0,1986,1985,1,0,0,0,1987,
	1988,1,0,0,0,1988,1986,1,0,0,0,1988,1989,1,0,0,0,1989,1990,1,0,0,0,1990,
	1991,5,15,0,0,1991,1993,3,274,137,0,1992,1994,3,314,157,0,1993,1992,1,0,
	0,0,1993,1994,1,0,0,0,1994,2061,1,0,0,0,1995,1996,5,16,0,0,1996,1997,7,
	46,0,0,1997,1998,5,242,0,0,1998,2000,3,274,137,0,1999,2001,3,314,157,0,
	2000,1999,1,0,0,0,2000,2001,1,0,0,0,2001,2061,1,0,0,0,2002,2004,3,32,16,
	0,2003,2002,1,0,0,0,2004,2005,1,0,0,0,2005,2003,1,0,0,0,2005,2006,1,0,0,
	0,2006,2007,1,0,0,0,2007,2008,5,16,0,0,2008,2009,7,46,0,0,2009,2010,5,242,
	0,0,2010,2012,3,274,137,0,2011,2013,3,314,157,0,2012,2011,1,0,0,0,2012,
	2013,1,0,0,0,2013,2061,1,0,0,0,2014,2017,3,324,162,0,2015,2017,3,326,163,
	0,2016,2014,1,0,0,0,2016,2015,1,0,0,0,2017,2018,1,0,0,0,2018,2019,3,218,
	109,0,2019,2021,3,328,164,0,2020,2022,5,38,0,0,2021,2020,1,0,0,0,2021,2022,
	1,0,0,0,2022,2061,1,0,0,0,2023,2026,3,324,162,0,2024,2026,3,326,163,0,2025,
	2023,1,0,0,0,2025,2024,1,0,0,0,2026,2029,1,0,0,0,2027,2030,3,224,112,0,
	2028,2030,3,216,108,0,2029,2027,1,0,0,0,2029,2028,1,0,0,0,2030,2031,1,0,
	0,0,2031,2032,5,148,0,0,2032,2033,3,46,23,0,2033,2034,5,238,0,0,2034,2036,
	3,46,23,0,2035,2037,5,279,0,0,2036,2035,1,0,0,0,2036,2037,1,0,0,0,2037,
	2061,1,0,0,0,2038,2040,5,268,0,0,2039,2041,3,102,51,0,2040,2039,1,0,0,0,
	2040,2041,1,0,0,0,2041,2061,1,0,0,0,2042,2061,5,233,0,0,2043,2061,3,32,
	16,0,2044,2061,3,224,112,0,2045,2061,3,216,108,0,2046,2061,3,204,102,0,
	2047,2061,3,46,23,0,2048,2061,3,124,62,0,2049,2061,5,271,0,0,2050,2061,
	5,272,0,0,2051,2061,5,273,0,0,2052,2061,3,54,27,0,2053,2061,5,247,0,0,2054,
	2061,5,228,0,0,2055,2061,5,217,0,0,2056,2057,5,274,0,0,2057,2058,3,274,
	137,0,2058,2059,5,275,0,0,2059,2061,1,0,0,0,2060,1795,1,0,0,0,2060,1798,
	1,0,0,0,2060,1800,1,0,0,0,2060,1802,1,0,0,0,2060,1810,1,0,0,0,2060,1818,
	1,0,0,0,2060,1830,1,0,0,0,2060,1833,1,0,0,0,2060,1839,1,0,0,0,2060,1842,
	1,0,0,0,2060,1845,1,0,0,0,2060,1853,1,0,0,0,2060,1857,1,0,0,0,2060,1860,
	1,0,0,0,2060,1872,1,0,0,0,2060,1874,1,0,0,0,2060,1879,1,0,0,0,2060,1891,
	1,0,0,0,2060,1894,1,0,0,0,2060,1906,1,0,0,0,2060,1909,1,0,0,0,2060,1913,
	1,0,0,0,2060,1917,1,0,0,0,2060,1921,1,0,0,0,2060,1930,1,0,0,0,2060,1935,
	1,0,0,0,2060,1940,1,0,0,0,2060,1952,1,0,0,0,2060,1964,1,0,0,0,2060,1969,
	1,0,0,0,2060,1986,1,0,0,0,2060,1995,1,0,0,0,2060,2003,1,0,0,0,2060,2016,
	1,0,0,0,2060,2025,1,0,0,0,2060,2038,1,0,0,0,2060,2042,1,0,0,0,2060,2043,
	1,0,0,0,2060,2044,1,0,0,0,2060,2045,1,0,0,0,2060,2046,1,0,0,0,2060,2047,
	1,0,0,0,2060,2048,1,0,0,0,2060,2049,1,0,0,0,2060,2050,1,0,0,0,2060,2051,
	1,0,0,0,2060,2052,1,0,0,0,2060,2053,1,0,0,0,2060,2054,1,0,0,0,2060,2055,
	1,0,0,0,2060,2056,1,0,0,0,2061,2084,1,0,0,0,2062,2065,10,38,0,0,2063,2064,
	5,278,0,0,2064,2066,3,304,152,0,2065,2063,1,0,0,0,2066,2067,1,0,0,0,2067,
	2065,1,0,0,0,2067,2068,1,0,0,0,2068,2069,1,0,0,0,2069,2070,7,38,0,0,2070,
	2071,3,304,152,39,2071,2083,1,0,0,0,2072,2073,10,42,0,0,2073,2083,3,306,
	153,0,2074,2075,10,41,0,0,2075,2076,5,278,0,0,2076,2077,3,308,154,0,2077,
	2078,3,306,153,0,2078,2083,1,0,0,0,2079,2080,10,40,0,0,2080,2081,5,278,
	0,0,2081,2083,3,308,154,0,2082,2062,1,0,0,0,2082,2072,1,0,0,0,2082,2074,
	1,0,0,0,2082,2079,1,0,0,0,2083,2086,1,0,0,0,2084,2082,1,0,0,0,2084,2085,
	1,0,0,0,2085,305,1,0,0,0,2086,2084,1,0,0,0,2087,2088,7,47,0,0,2088,2089,
	5,121,0,0,2089,2090,5,268,0,0,2090,2091,5,167,0,0,2091,307,1,0,0,0,2092,
	2099,3,310,155,0,2093,2099,3,312,156,0,2094,2095,3,310,155,0,2095,2096,
	5,214,0,0,2096,2097,3,312,156,0,2097,2099,1,0,0,0,2098,2092,1,0,0,0,2098,
	2093,1,0,0,0,2098,2094,1,0,0,0,2099,309,1,0,0,0,2100,2101,5,20,0,0,2101,
	2102,3,274,137,0,2102,311,1,0,0,0,2103,2104,5,21,0,0,2104,2105,3,274,137,
	0,2105,313,1,0,0,0,2106,2107,5,4,0,0,2107,2110,3,274,137,0,2108,2110,3,
	318,159,0,2109,2106,1,0,0,0,2109,2108,1,0,0,0,2110,315,1,0,0,0,2111,2112,
	5,7,0,0,2112,2113,3,318,159,0,2113,317,1,0,0,0,2114,2115,5,148,0,0,2115,
	2131,3,266,133,0,2116,2117,5,242,0,0,2117,2118,3,266,133,0,2118,2119,5,
	144,0,0,2119,2120,3,266,133,0,2120,2131,1,0,0,0,2121,2122,5,242,0,0,2122,
	2123,3,266,133,0,2123,2124,5,146,0,0,2124,2125,3,266,133,0,2125,2131,1,
	0,0,0,2126,2127,5,144,0,0,2127,2131,3,266,133,0,2128,2129,5,146,0,0,2129,
	2131,3,266,133,0,2130,2114,1,0,0,0,2130,2116,1,0,0,0,2130,2121,1,0,0,0,
	2130,2126,1,0,0,0,2130,2128,1,0,0,0,2131,319,1,0,0,0,2132,2133,5,148,0,
	0,2133,2149,3,322,161,0,2134,2135,5,144,0,0,2135,2149,3,322,161,0,2136,
	2137,5,146,0,0,2137,2149,3,322,161,0,2138,2139,5,242,0,0,2139,2140,3,322,
	161,0,2140,2141,5,144,0,0,2141,2142,3,322,161,0,2142,2149,1,0,0,0,2143,
	2144,5,242,0,0,2144,2145,3,322,161,0,2145,2146,5,146,0,0,2146,2147,3,322,
	161,0,2147,2149,1,0,0,0,2148,2132,1,0,0,0,2148,2134,1,0,0,0,2148,2136,1,
	0,0,0,2148,2138,1,0,0,0,2148,2143,1,0,0,0,2149,321,1,0,0,0,2150,2155,3,
	54,27,0,2151,2155,5,233,0,0,2152,2155,5,234,0,0,2153,2155,3,216,108,0,2154,
	2150,1,0,0,0,2154,2151,1,0,0,0,2154,2152,1,0,0,0,2154,2153,1,0,0,0,2155,
	323,1,0,0,0,2156,2157,5,215,0,0,2157,2163,5,188,0,0,2158,2163,5,188,0,0,
	2159,2163,5,13,0,0,2160,2163,5,14,0,0,2161,2163,5,193,0,0,2162,2156,1,0,
	0,0,2162,2158,1,0,0,0,2162,2159,1,0,0,0,2162,2160,1,0,0,0,2162,2161,1,0,
	0,0,2163,325,1,0,0,0,2164,2165,7,48,0,0,2165,327,1,0,0,0,2166,2170,5,231,
	0,0,2167,2171,3,330,165,0,2168,2171,3,332,166,0,2169,2171,3,334,167,0,2170,
	2167,1,0,0,0,2170,2168,1,0,0,0,2170,2169,1,0,0,0,2171,2172,1,0,0,0,2172,
	2173,5,279,0,0,2173,2177,1,0,0,0,2174,2175,5,242,0,0,2175,2177,3,330,165,
	0,2176,2166,1,0,0,0,2176,2174,1,0,0,0,2177,329,1,0,0,0,2178,2179,5,122,
	0,0,2179,2182,3,46,23,0,2180,2181,7,31,0,0,2181,2183,3,228,114,0,2182,2180,
	1,0,0,0,2182,2183,1,0,0,0,2183,331,1,0,0,0,2184,2185,5,210,0,0,2185,2186,
	3,46,23,0,2186,2187,5,148,0,0,2187,2188,3,46,23,0,2188,2189,5,238,0,0,2189,
	2190,3,46,23,0,2190,333,1,0,0,0,2191,2192,5,210,0,0,2192,2193,3,46,23,0,
	2193,2194,5,218,0,0,2194,2195,5,276,0,0,2195,2200,3,46,23,0,2196,2197,5,
	278,0,0,2197,2199,3,46,23,0,2198,2196,1,0,0,0,2199,2202,1,0,0,0,2200,2198,
	1,0,0,0,2200,2201,1,0,0,0,2201,2203,1,0,0,0,2202,2200,1,0,0,0,2203,2204,
	5,214,0,0,2204,2205,3,46,23,0,2205,2206,5,277,0,0,2206,335,1,0,0,0,2207,
	2208,3,304,152,0,2208,2209,7,49,0,0,2209,2242,1,0,0,0,2210,2211,3,304,152,
	0,2211,2212,7,2,0,0,2212,2213,3,286,143,0,2213,2214,7,50,0,0,2214,2242,
	1,0,0,0,2215,2217,3,304,152,0,2216,2218,3,286,143,0,2217,2216,1,0,0,0,2217,
	2218,1,0,0,0,2218,2219,1,0,0,0,2219,2220,7,50,0,0,2220,2221,7,2,0,0,2221,
	2242,1,0,0,0,2222,2223,3,304,152,0,2223,2224,7,5,0,0,2224,2225,5,268,0,
	0,2225,2226,5,165,0,0,2226,2242,1,0,0,0,2227,2228,3,304,152,0,2228,2229,
	7,51,0,0,2229,2230,3,32,16,0,2230,2242,1,0,0,0,2231,2232,3,304,152,0,2232,
	2233,7,52,0,0,2233,2234,3,32,16,0,2234,2242,1,0,0,0,2235,2236,3,204,102,
	0,2236,2237,5,90,0,0,2237,2242,1,0,0,0,2238,2239,3,304,152,0,2239,2240,
	5,92,0,0,2240,2242,1,0,0,0,2241,2207,1,0,0,0,2241,2210,1,0,0,0,2241,2215,
	1,0,0,0,2241,2222,1,0,0,0,2241,2227,1,0,0,0,2241,2231,1,0,0,0,2241,2235,
	1,0,0,0,2241,2238,1,0,0,0,2242,337,1,0,0,0,2243,2244,5,235,0,0,2244,2245,
	3,340,170,0,2245,2246,5,91,0,0,2246,2252,1,0,0,0,2247,2248,5,235,0,0,2248,
	2249,3,340,170,0,2249,2250,5,92,0,0,2250,2252,1,0,0,0,2251,2243,1,0,0,0,
	2251,2247,1,0,0,0,2252,339,1,0,0,0,2253,2256,3,46,23,0,2254,2256,5,202,
	0,0,2255,2253,1,0,0,0,2255,2254,1,0,0,0,2256,2257,1,0,0,0,2257,2255,1,0,
	0,0,2257,2258,1,0,0,0,2258,341,1,0,0,0,2259,2261,3,204,102,0,2260,2262,
	3,286,143,0,2261,2260,1,0,0,0,2261,2262,1,0,0,0,2262,2263,1,0,0,0,2263,
	2264,3,48,24,0,2264,2265,5,108,0,0,2265,2278,1,0,0,0,2266,2268,3,204,102,
	0,2267,2269,3,286,143,0,2268,2267,1,0,0,0,2268,2269,1,0,0,0,2269,2270,1,
	0,0,0,2270,2271,3,48,24,0,2271,2272,5,111,0,0,2272,2278,1,0,0,0,2273,2274,
	3,204,102,0,2274,2275,5,111,0,0,2275,2276,3,48,24,0,2276,2278,1,0,0,0,2277,
	2259,1,0,0,0,2277,2266,1,0,0,0,2277,2273,1,0,0,0,2278,343,1,0,0,0,2279,
	2280,5,104,0,0,2280,2288,3,46,23,0,2281,2283,5,176,0,0,2282,2284,5,267,
	0,0,2283,2282,1,0,0,0,2284,2285,1,0,0,0,2285,2283,1,0,0,0,2285,2286,1,0,
	0,0,2286,2287,1,0,0,0,2287,2289,5,275,0,0,2288,2281,1,0,0,0,2288,2289,1,
	0,0,0,2289,2291,1,0,0,0,2290,2292,5,281,0,0,2291,2290,1,0,0,0,2291,2292,
	1,0,0,0,2292,345,1,0,0,0,2293,2294,5,272,0,0,2294,347,1,0,0,0,2295,2296,
	3,274,137,0,2296,2297,5,114,0,0,2297,2298,3,274,137,0,2298,2299,5,278,0,
	0,2299,2302,5,26,0,0,2300,2303,3,350,175,0,2301,2303,3,352,176,0,2302,2300,
	1,0,0,0,2302,2301,1,0,0,0,2303,2305,1,0,0,0,2304,2306,3,360,180,0,2305,
	2304,1,0,0,0,2305,2306,1,0,0,0,2306,349,1,0,0,0,2307,2308,3,358,179,0,2308,
	351,1,0,0,0,2309,2310,5,280,0,0,2310,2312,3,354,177,0,2311,2313,5,279,0,
	0,2312,2311,1,0,0,0,2312,2313,1,0,0,0,2313,353,1,0,0,0,2314,2318,3,356,
	178,0,2315,2317,3,356,178,0,2316,2315,1,0,0,0,2317,2320,1,0,0,0,2318,2316,
	1,0,0,0,2318,2319,1,0,0,0,2319,355,1,0,0,0,2320,2318,1,0,0,0,2321,2322,
	5,294,0,0,2322,2324,3,358,179,0,2323,2325,7,53,0,0,2324,2323,1,0,0,0,2324,
	2325,1,0,0,0,2325,357,1,0,0,0,2326,2341,5,196,0,0,2327,2328,5,35,0,0,2328,
	2341,3,274,137,0,2329,2330,5,34,0,0,2330,2331,7,54,0,0,2331,2341,3,274,
	137,0,2332,2333,5,33,0,0,2333,2341,3,358,179,0,2334,2335,5,21,0,0,2335,
	2341,3,218,109,0,2336,2337,5,121,0,0,2337,2338,5,268,0,0,2338,2339,5,167,
	0,0,2339,2341,5,136,0,0,2340,2326,1,0,0,0,2340,2327,1,0,0,0,2340,2329,1,
	0,0,0,2340,2332,1,0,0,0,2340,2334,1,0,0,0,2340,2336,1,0,0,0,2341,359,1,
	0,0,0,2342,2343,5,19,0,0,2343,2345,3,274,137,0,2344,2346,5,197,0,0,2345,
	2344,1,0,0,0,2345,2346,1,0,0,0,2346,361,1,0,0,0,267,368,370,381,386,395,
	399,406,410,413,418,421,425,430,441,445,449,454,465,494,500,505,513,517,
	522,527,538,543,548,554,560,566,571,577,583,592,594,597,602,607,613,619,
	625,630,636,642,651,653,657,660,665,670,676,682,688,693,699,705,707,715,
	724,733,750,753,756,761,766,771,775,779,782,789,792,797,801,809,812,815,
	823,830,837,846,853,861,869,872,879,885,896,905,909,913,917,931,938,945,
	952,958,963,971,977,980,995,999,1003,1006,1009,1017,1024,1028,1036,1040,
	1048,1057,1065,1071,1075,1077,1082,1089,1094,1100,1103,1106,1111,1115,1117,
	1123,1140,1150,1154,1158,1172,1175,1197,1200,1219,1224,1231,1235,1244,1247,
	1255,1260,1274,1277,1279,1284,1293,1301,1311,1317,1327,1333,1343,1345,1362,
	1367,1374,1379,1386,1396,1401,1406,1411,1419,1428,1435,1438,1444,1447,1456,
	1461,1464,1469,1479,1481,1485,1492,1497,1501,1508,1513,1535,1543,1549,1556,
	1559,1568,1574,1583,1619,1625,1631,1640,1646,1662,1677,1682,1711,1725,1730,
	1734,1740,1745,1750,1756,1768,1779,1790,1808,1816,1824,1839,1850,1853,1866,
	1885,1900,1946,1958,1967,1974,1978,1981,1988,1993,2000,2005,2012,2016,2021,
	2025,2029,2036,2040,2060,2067,2082,2084,2098,2109,2130,2148,2154,2162,2170,
	2176,2182,2200,2217,2241,2251,2255,2257,2261,2268,2277,2285,2288,2291,2302,
	2305,2312,2318,2324,2340,2345];

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
	public _meervoud!: NaamwoordContext;
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
	public MV_START(): TerminalNode {
		return this.getToken(RegelSpraakParser.MV_START, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RegelSpraakParser.RPAREN, 0);
	}
	public TAB(): TerminalNode {
		return this.getToken(RegelSpraakParser.TAB, 0);
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
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
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
	public _gp!: GeheleVergelijkingPrefixContext;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
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
	public _gp!: GeheleVergelijkingPrefixContext;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
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
export class BinaryComparisonStellendeExprContext extends ComparisonExpressionContext {
	public _left!: AdditiveExpressionContext;
	public _v!: Token;
	public _gp!: GeheleVergelijkingPrefixContext;
	public _op!: BareComparisonOperatorContext;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
	}
	public bareComparisonOperator(): BareComparisonOperatorContext {
		return this.getTypedRuleContext(BareComparisonOperatorContext, 0) as BareComparisonOperatorContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBinaryComparisonStellendeExpr) {
			return visitor.visitBinaryComparisonStellendeExpr(this);
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


export class BareComparisonOperatorContext extends ParserRuleContext {
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
	public GROTER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GROTER_DAN, 0);
	}
	public GROTER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.GROTER_OF_GELIJK_AAN, 0);
	}
	public KLEINER_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.KLEINER_DAN, 0);
	}
	public KLEINER_OF_GELIJK_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.KLEINER_OF_GELIJK_AAN, 0);
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
    public get ruleIndex(): number {
	return RegelSpraakParser.RULE_bareComparisonOperator;
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitBareComparisonOperator) {
			return visitor.visitBareComparisonOperator(this);
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
	public ONGELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ONGELIJK_IS_AAN, 0);
	}
	public LATER_IS_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LATER_IS_DAN, 0);
	}
	public EERDER_IS_DAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EERDER_IS_DAN, 0);
	}
	public LATER_OF_GELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.LATER_OF_GELIJK_IS_AAN, 0);
	}
	public EERDER_OF_GELIJK_IS_AAN(): TerminalNode {
		return this.getToken(RegelSpraakParser.EERDER_OF_GELIJK_IS_AAN, 0);
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
export class UnaryCheckStellendeGehelePeriodeConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	public _v!: Token;
	public _gp!: GeheleVergelijkingPrefixContext;
	public _check!: Token;
	constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
	}
	public LEEG(): TerminalNode {
		return this.getToken(RegelSpraakParser.LEEG, 0);
	}
	public GEVULD(): TerminalNode {
		return this.getToken(RegelSpraakParser.GEVULD, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryCheckStellendeGehelePeriodeCondition) {
			return visitor.visitUnaryCheckStellendeGehelePeriodeCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
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
	public _gp!: GeheleVergelijkingPrefixContext;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
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
	public _gp!: GeheleVergelijkingPrefixContext;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
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
	public _gp!: GeheleVergelijkingPrefixContext;
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
	public geheleVergelijkingPrefix(): GeheleVergelijkingPrefixContext {
		return this.getTypedRuleContext(GeheleVergelijkingPrefixContext, 0) as GeheleVergelijkingPrefixContext;
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
