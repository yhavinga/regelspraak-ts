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
	public static readonly GROTER_IS_DAN = 38;
	public static readonly KLEINER_IS_DAN = 39;
	public static readonly WORDT_VOLDAAN = 40;
	public static readonly NIEUWE = 41;
	public static readonly ER_AAN = 42;
	public static readonly GELIJK_IS_AAN = 43;
	public static readonly IS_GELIJK_AAN = 44;
	public static readonly IS_ONGELIJK_AAN = 45;
	public static readonly IS_KLEINER_DAN = 46;
	public static readonly IS_KLEINER_OF_GELIJK_AAN = 47;
	public static readonly IS_GROTER_DAN = 48;
	public static readonly IS_GROTER_OF_GELIJK_AAN = 49;
	public static readonly ZIJN_GELIJK_AAN = 50;
	public static readonly ZIJN_ONGELIJK_AAN = 51;
	public static readonly ZIJN_GROTER_DAN = 52;
	public static readonly ZIJN_GROTER_OF_GELIJK_AAN = 53;
	public static readonly ZIJN_KLEINER_DAN = 54;
	public static readonly ZIJN_KLEINER_OF_GELIJK_AAN = 55;
	public static readonly IS_LATER_DAN = 56;
	public static readonly IS_LATER_OF_GELIJK_AAN = 57;
	public static readonly IS_EERDER_DAN = 58;
	public static readonly IS_EERDER_OF_GELIJK_AAN = 59;
	public static readonly ZIJN_LATER_DAN = 60;
	public static readonly ZIJN_LATER_OF_GELIJK_AAN = 61;
	public static readonly ZIJN_EERDER_DAN = 62;
	public static readonly ZIJN_EERDER_OF_GELIJK_AAN = 63;
	public static readonly IS_LEEG = 64;
	public static readonly IS_GEVULD = 65;
	public static readonly ZIJN_LEEG = 66;
	public static readonly ZIJN_GEVULD = 67;
	public static readonly IS_KENMERK = 68;
	public static readonly IS_ROL = 69;
	public static readonly ZIJN_KENMERK = 70;
	public static readonly ZIJN_ROL = 71;
	public static readonly IS_NIET_KENMERK = 72;
	public static readonly IS_NIET_ROL = 73;
	public static readonly ZIJN_NIET_KENMERK = 74;
	public static readonly ZIJN_NIET_ROL = 75;
	public static readonly VOLDOET_AAN_DE_ELFPROEF = 76;
	public static readonly VOLDOEN_AAN_DE_ELFPROEF = 77;
	public static readonly VOLDOET_NIET_AAN_DE_ELFPROEF = 78;
	public static readonly VOLDOEN_NIET_AAN_DE_ELFPROEF = 79;
	public static readonly IS_NUMERIEK_MET_EXACT = 80;
	public static readonly IS_NIET_NUMERIEK_MET_EXACT = 81;
	public static readonly ZIJN_NUMERIEK_MET_EXACT = 82;
	public static readonly ZIJN_NIET_NUMERIEK_MET_EXACT = 83;
	public static readonly IS_EEN_DAGSOORT = 84;
	public static readonly ZIJN_EEN_DAGSOORT = 85;
	public static readonly IS_GEEN_DAGSOORT = 86;
	public static readonly ZIJN_GEEN_DAGSOORT = 87;
	public static readonly MOETEN_UNIEK_ZIJN = 88;
	public static readonly IS_GEVUURD = 89;
	public static readonly IS_INCONSISTENT = 90;
	public static readonly CONSISTENTIEREGEL = 91;
	public static readonly REGEL = 92;
	public static readonly REGELGROEP = 93;
	public static readonly BESLISTABEL = 94;
	public static readonly OBJECTTYPE = 95;
	public static readonly DOMEIN = 96;
	public static readonly LIJST = 97;
	public static readonly DIMENSIE = 98;
	public static readonly EENHEIDSYSTEEM = 99;
	public static readonly PARAMETER = 100;
	public static readonly FEITTYPE = 101;
	public static readonly DAGSOORT = 102;
	public static readonly DAARBIJ_GELDT = 103;
	public static readonly GELDIG = 104;
	public static readonly HEBBEN = 105;
	public static readonly HEEFT = 106;
	public static readonly INDIEN = 107;
	public static readonly IS_RECURSIEF = 108;
	public static readonly IS = 109;
	public static readonly MOET = 110;
	public static readonly MOETEN = 111;
	public static readonly WORDT_VERDEELD_OVER = 112;
	public static readonly WORDT = 113;
	public static readonly VOLDAAN = 114;
	public static readonly ZIJN = 115;
	public static readonly HAAR = 116;
	public static readonly HUN = 117;
	public static readonly AAN = 118;
	public static readonly AFGEROND_OP = 119;
	public static readonly ALLE = 120;
	public static readonly EERDER_DAN = 121;
	public static readonly GEDEELD_DOOR = 122;
	public static readonly GEDEELD_DOOR_ABS = 123;
	public static readonly GELIJK_AAN = 124;
	public static readonly GEVULD = 125;
	public static readonly GEVUURD = 126;
	public static readonly GROTER_DAN = 127;
	public static readonly INCONSISTENT = 128;
	public static readonly KLEINER_DAN = 129;
	public static readonly LATER_DAN = 130;
	public static readonly LEEG = 131;
	public static readonly MAAL = 132;
	public static readonly MIN = 133;
	public static readonly NAAR_BENEDEN = 134;
	public static readonly NAAR_BOVEN = 135;
	public static readonly NIET = 136;
	public static readonly ONGELIJK_ZIJN_AAN = 137;
	public static readonly ONGELIJK_AAN = 138;
	public static readonly PLUS = 139;
	public static readonly REKENKUNDIG = 140;
	public static readonly RICHTING_NUL = 141;
	public static readonly TOT = 142;
	public static readonly TOT_DE_MACHT = 143;
	public static readonly TOT_EN_MET = 144;
	public static readonly UNIEK = 145;
	public static readonly VANAF = 146;
	public static readonly VERENIGD_MET = 147;
	public static readonly VERMINDERD_MET = 148;
	public static readonly VOLDOEN = 149;
	public static readonly VOLDOET = 150;
	public static readonly WEG_VAN_NUL = 151;
	public static readonly DE_WORTEL_VAN = 152;
	public static readonly TENMINSTE = 153;
	public static readonly TEN_MINSTE = 154;
	public static readonly TEN_HOOGSTE = 155;
	public static readonly PRECIES = 156;
	public static readonly VOORWAARDE = 157;
	public static readonly VOORWAARDEN = 158;
	public static readonly BEZITTELIJK = 159;
	public static readonly BIJVOEGLIJK = 160;
	public static readonly BEZIELD = 161;
	public static readonly BOOLEAN = 162;
	public static readonly CIJFERS = 163;
	public static readonly DATUM_IN_DAGEN = 164;
	public static readonly DECIMALEN = 165;
	public static readonly ENUMERATIE = 166;
	public static readonly GEDIMENSIONEERD_MET = 167;
	public static readonly GEHEEL_GETAL = 168;
	public static readonly GETAL = 169;
	public static readonly KENMERK = 170;
	public static readonly KENMERKEN = 171;
	public static readonly MET = 172;
	public static readonly MET_EENHEID = 173;
	public static readonly MV_START = 174;
	public static readonly NEGATIEF = 175;
	public static readonly NIET_NEGATIEF = 176;
	public static readonly NUMERIEK = 177;
	public static readonly PERCENTAGE = 178;
	public static readonly POSITIEF = 179;
	public static readonly ROL = 180;
	public static readonly ROLLEN = 181;
	public static readonly TEKST = 182;
	public static readonly VOOR_ELK_JAAR = 183;
	public static readonly VOOR_ELKE_DAG = 184;
	public static readonly VOOR_ELKE_MAAND = 185;
	public static readonly AANTAL = 186;
	public static readonly EERSTE_VAN = 187;
	public static readonly IN_HELE = 188;
	public static readonly LAATSTE_VAN = 189;
	public static readonly REEKS_VAN_TEKSTEN_EN_WAARDEN = 190;
	public static readonly SOM_VAN = 191;
	public static readonly TIJDSDUUR_VAN = 192;
	public static readonly AFNEMENDE = 193;
	public static readonly IN_GELIJKE_DELEN = 194;
	public static readonly OVER_VERDELING = 195;
	public static readonly TOENEMENDE = 196;
	public static readonly DRIE_TELWOORD = 197;
	public static readonly EEN_TELWOORD = 198;
	public static readonly GEEN_VAN_DE = 199;
	public static readonly GEEN = 200;
	public static readonly TWEE_TELWOORD = 201;
	public static readonly VIER_TELWOORD = 202;
	public static readonly ALTIJD = 203;
	public static readonly BIJ = 204;
	public static readonly DAG = 205;
	public static readonly DAGEN = 206;
	public static readonly DAT = 207;
	public static readonly DE = 208;
	public static readonly DD_PUNT = 209;
	public static readonly DIE = 210;
	public static readonly EEN = 211;
	public static readonly EN = 212;
	public static readonly HET = 213;
	public static readonly MEERDERE = 214;
	public static readonly HIJ = 215;
	public static readonly IN = 216;
	public static readonly JAAR = 217;
	public static readonly JAREN = 218;
	public static readonly KWARTAAL = 219;
	public static readonly MAAND = 220;
	public static readonly MAANDEN = 221;
	public static readonly MILLISECONDE = 222;
	public static readonly MINUUT = 223;
	public static readonly MINUTEN = 224;
	public static readonly OF = 225;
	public static readonly ONWAAR = 226;
	public static readonly OP = 227;
	public static readonly OUDER = 228;
	public static readonly OVER = 229;
	public static readonly PERIODE = 230;
	public static readonly REKENDATUM = 231;
	public static readonly REKENJAAR = 232;
	public static readonly REGELVERSIE = 233;
	public static readonly SECONDE = 234;
	public static readonly SECONDEN = 235;
	public static readonly TM = 236;
	public static readonly UIT = 237;
	public static readonly UUR = 238;
	public static readonly UREN = 239;
	public static readonly VAN = 240;
	public static readonly VOLGENDE_VOORWAARDE = 241;
	public static readonly VOLGENDE_VOORWAARDEN = 242;
	public static readonly VOLGENDE = 243;
	public static readonly VOOR = 244;
	public static readonly WAAR = 245;
	public static readonly WEEK = 246;
	public static readonly WEKEN = 247;
	public static readonly ER = 248;
	public static readonly METER = 249;
	public static readonly KILOGRAM = 250;
	public static readonly VOET = 251;
	public static readonly POND = 252;
	public static readonly MIJL = 253;
	public static readonly GROTER_OF_GELIJK_IS_AAN = 254;
	public static readonly KLEINER_OF_GELIJK_IS_AAN = 255;
	public static readonly M = 256;
	public static readonly KG = 257;
	public static readonly S = 258;
	public static readonly FT = 259;
	public static readonly LB = 260;
	public static readonly MI = 261;
	public static readonly EURO_SYMBOL = 262;
	public static readonly DOLLAR_SYMBOL = 263;
	public static readonly DEGREE_SYMBOL = 264;
	public static readonly IDENTIFIER = 265;
	public static readonly NUMBER = 266;
	public static readonly EQUALS = 267;
	public static readonly DATE_TIME_LITERAL = 268;
	public static readonly PERCENTAGE_LITERAL = 269;
	public static readonly STRING_LITERAL = 270;
	public static readonly ENUM_LITERAL = 271;
	public static readonly LPAREN = 272;
	public static readonly RPAREN = 273;
	public static readonly LBRACE = 274;
	public static readonly RBRACE = 275;
	public static readonly COMMA = 276;
	public static readonly DOT = 277;
	public static readonly COLON = 278;
	public static readonly SEMICOLON = 279;
	public static readonly SLASH = 280;
	public static readonly PERCENT_SIGN = 281;
	public static readonly BULLET = 282;
	public static readonly ASTERISK = 283;
	public static readonly L_ANGLE_QUOTE = 284;
	public static readonly R_ANGLE_QUOTE = 285;
	public static readonly CARET = 286;
	public static readonly DOUBLE_DOT = 287;
	public static readonly TAB = 288;
	public static readonly WS = 289;
	public static readonly LINE_COMMENT = 290;
	public static readonly MINUS = 291;
	public static readonly PIPE = 292;
	public static readonly NVT = 293;
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
	public static readonly RULE_eenheidMacht = 52;
	public static readonly RULE_dimensieDefinition = 53;
	public static readonly RULE_voorzetselSpecificatie = 54;
	public static readonly RULE_labelWaardeSpecificatie = 55;
	public static readonly RULE_tijdlijn = 56;
	public static readonly RULE_dimensieRef = 57;
	public static readonly RULE_parameterDefinition = 58;
	public static readonly RULE_parameterNamePhrase = 59;
	public static readonly RULE_parameterNamePart = 60;
	public static readonly RULE_parameterMetLidwoord = 61;
	public static readonly RULE_feitTypeDefinition = 62;
	public static readonly RULE_rolDefinition = 63;
	public static readonly RULE_rolNameWords = 64;
	public static readonly RULE_cardinalityLine = 65;
	public static readonly RULE_cardinalityWord = 66;
	public static readonly RULE_regel = 67;
	public static readonly RULE_regelVersieBlok = 68;
	public static readonly RULE_regelGroep = 69;
	public static readonly RULE_regelName = 70;
	public static readonly RULE_regelNameExtension = 71;
	public static readonly RULE_regelVersie = 72;
	public static readonly RULE_versieGeldigheid = 73;
	public static readonly RULE_geldigheidsDatum = 74;
	public static readonly RULE_resultaatDeel = 75;
	public static readonly RULE_consistencyOperator = 76;
	public static readonly RULE_feitCreatiePattern = 77;
	public static readonly RULE_feitCreatieRolPhrase = 78;
	public static readonly RULE_feitCreatieSubjectPhrase = 79;
	public static readonly RULE_feitCreatieSubjectWord = 80;
	public static readonly RULE_feitCreatieWord = 81;
	public static readonly RULE_voorzetselNietVan = 82;
	public static readonly RULE_objectCreatie = 83;
	public static readonly RULE_objectAttributeInit = 84;
	public static readonly RULE_waardetoekenning = 85;
	public static readonly RULE_simpleNaamwoord = 86;
	public static readonly RULE_consistentieregel = 87;
	public static readonly RULE_uniekzijnResultaat = 88;
	public static readonly RULE_alleAttributenVanObjecttype = 89;
	public static readonly RULE_inconsistentResultaat = 90;
	public static readonly RULE_voorwaardeDeel = 91;
	public static readonly RULE_toplevelSamengesteldeVoorwaarde = 92;
	public static readonly RULE_voorwaardeKwantificatie = 93;
	public static readonly RULE_samengesteldeVoorwaardeOnderdeel = 94;
	public static readonly RULE_outerBulletPrefix = 95;
	public static readonly RULE_nestedBulletPrefix = 96;
	public static readonly RULE_bulletPrefix = 97;
	public static readonly RULE_elementaireVoorwaarde = 98;
	public static readonly RULE_genesteSamengesteldeVoorwaarde = 99;
	public static readonly RULE_genesteSamengesteldeVoorwaardeOnderdeel = 100;
	public static readonly RULE_onderwerpReferentie = 101;
	public static readonly RULE_onderwerpReferentieWithNumbers = 102;
	public static readonly RULE_onderwerpBasis = 103;
	public static readonly RULE_onderwerpBasisWithNumbers = 104;
	public static readonly RULE_basisOnderwerp = 105;
	public static readonly RULE_basisOnderwerpWithNumbers = 106;
	public static readonly RULE_attribuutReferentie = 107;
	public static readonly RULE_attribuutMetLidwoord = 108;
	public static readonly RULE_kenmerkNaam = 109;
	public static readonly RULE_kenmerkPhrase = 110;
	public static readonly RULE_bezieldeReferentie = 111;
	public static readonly RULE_aggregationSubject = 112;
	public static readonly RULE_predicaat = 113;
	public static readonly RULE_elementairPredicaat = 114;
	public static readonly RULE_objectPredicaat = 115;
	public static readonly RULE_eenzijdigeObjectVergelijking = 116;
	public static readonly RULE_rolNaam = 117;
	public static readonly RULE_attribuutVergelijkingsPredicaat = 118;
	public static readonly RULE_getalPredicaat = 119;
	public static readonly RULE_tekstPredicaat = 120;
	public static readonly RULE_datumPredicaat = 121;
	public static readonly RULE_samengesteldPredicaat = 122;
	public static readonly RULE_samengesteldeVoorwaardeOnderdeelInPredicaat = 123;
	public static readonly RULE_elementaireVoorwaardeInPredicaat = 124;
	public static readonly RULE_vergelijkingInPredicaat = 125;
	public static readonly RULE_genesteSamengesteldeVoorwaardeInPredicaat = 126;
	public static readonly RULE_getalVergelijkingsOperatorMeervoud = 127;
	public static readonly RULE_tekstVergelijkingsOperatorMeervoud = 128;
	public static readonly RULE_datumVergelijkingsOperatorMeervoud = 129;
	public static readonly RULE_getalExpressie = 130;
	public static readonly RULE_tekstExpressie = 131;
	public static readonly RULE_datumExpressie = 132;
	public static readonly RULE_variabeleDeel = 133;
	public static readonly RULE_variabeleToekenning = 134;
	public static readonly RULE_variabeleExpressie = 135;
	public static readonly RULE_expressie = 136;
	public static readonly RULE_simpleExpressie = 137;
	public static readonly RULE_logicalExpression = 138;
	public static readonly RULE_comparisonExpression = 139;
	public static readonly RULE_literalValue = 140;
	public static readonly RULE_gelijkIsAanOperator = 141;
	public static readonly RULE_comparisonOperator = 142;
	public static readonly RULE_additiveExpression = 143;
	public static readonly RULE_additiveOperator = 144;
	public static readonly RULE_multiplicativeExpression = 145;
	public static readonly RULE_multiplicativeOperator = 146;
	public static readonly RULE_powerExpression = 147;
	public static readonly RULE_powerOperator = 148;
	public static readonly RULE_primaryExpression = 149;
	public static readonly RULE_afronding = 150;
	public static readonly RULE_begrenzing = 151;
	public static readonly RULE_begrenzingMinimum = 152;
	public static readonly RULE_begrenzingMaximum = 153;
	public static readonly RULE_conditieBijExpressie = 154;
	public static readonly RULE_periodevergelijkingElementair = 155;
	public static readonly RULE_periodevergelijkingEnkelvoudig = 156;
	public static readonly RULE_periodeDefinitie = 157;
	public static readonly RULE_dateExpression = 158;
	public static readonly RULE_getalAggregatieFunctie = 159;
	public static readonly RULE_datumAggregatieFunctie = 160;
	public static readonly RULE_dimensieSelectie = 161;
	public static readonly RULE_aggregerenOverAlleDimensies = 162;
	public static readonly RULE_aggregerenOverVerzameling = 163;
	public static readonly RULE_aggregerenOverBereik = 164;
	public static readonly RULE_unaryCondition = 165;
	public static readonly RULE_regelStatusCondition = 166;
	public static readonly RULE_subordinateClauseExpression = 167;
	public static readonly RULE_dagsoortDefinition = 168;
	public static readonly RULE_tekstreeksExpr = 169;
	public static readonly RULE_verdelingResultaat = 170;
	public static readonly RULE_verdelingMethodeSimple = 171;
	public static readonly RULE_verdelingMethodeMultiLine = 172;
	public static readonly RULE_verdelingMethodeBulletList = 173;
	public static readonly RULE_verdelingMethodeBullet = 174;
	public static readonly RULE_verdelingMethode = 175;
	public static readonly RULE_verdelingRest = 176;
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
                                                            "'is een dagsoort'",
                                                            "'zijn een dagsoort'",
                                                            "'is geen dagsoort'",
                                                            "'zijn geen dagsoort'",
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
                                                            "'\\t'", null,
                                                            null, "'-'",
                                                            "'|'", "'n.v.t.'" ];
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
                                                             "IS_EEN_DAGSOORT",
                                                             "ZIJN_EEN_DAGSOORT",
                                                             "IS_GEEN_DAGSOORT",
                                                             "ZIJN_GEEN_DAGSOORT",
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
		"unitIdentifier", "unitIdentifierWithTime", "eenheidExpressie", "eenheidMacht",
		"dimensieDefinition", "voorzetselSpecificatie", "labelWaardeSpecificatie",
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
		"aggregerenOverBereik", "unaryCondition", "regelStatusCondition", "subordinateClauseExpression",
		"dagsoortDefinition", "tekstreeksExpr", "verdelingResultaat", "verdelingMethodeSimple",
		"verdelingMethodeMultiLine", "verdelingMethodeBulletList", "verdelingMethodeBullet",
		"verdelingMethode", "verdelingRest",
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
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===28 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4031) !== 0)) {
				{
				this.state = 360;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 28:
				case 95:
				case 96:
				case 98:
				case 100:
				case 101:
				case 102:
					{
					this.state = 354;
					this.definitie();
					}
					break;
				case 92:
					{
					this.state = 355;
					this.regel();
					}
					break;
				case 93:
					{
					this.state = 356;
					this.regelGroep();
					}
					break;
				case 94:
					{
					this.state = 357;
					this.beslistabel();
					}
					break;
				case 91:
					{
					this.state = 358;
					this.consistentieregel();
					}
					break;
				case 99:
					{
					this.state = 359;
					this.eenheidsysteemDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 365;
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
			this.state = 373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 367;
				this.objectTypeDefinition();
				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 368;
				this.domeinDefinition();
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 369;
				this.parameterDefinition();
				}
				break;
			case 98:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 370;
				this.dimensieDefinition();
				}
				break;
			case 28:
			case 101:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 371;
				this.feitTypeDefinition();
				}
				break;
			case 102:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 372;
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
			this.state = 375;
			this.match(RegelSpraakParser.BESLISTABEL);
			this.state = 376;
			this.naamwoord();
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===104) {
				{
				this.state = 377;
				this.regelVersie();
				}
			}

			this.state = 380;
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
			this.state = 382;
			this.beslistabelHeader();
			this.state = 383;
			this.beslistabelSeparator();
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 384;
				this.beslistabelRow();
				}
				}
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===292);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 389;
			this.match(RegelSpraakParser.PIPE);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===292) {
				{
				this.state = 390;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 393;
			localctx._beslistabelColumnText = this.beslistabelColumnText();
			localctx._columns.push(localctx._beslistabelColumnText);
			this.state = 398;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 394;
					this.match(RegelSpraakParser.PIPE);
					this.state = 395;
					localctx._beslistabelColumnText = this.beslistabelColumnText();
					localctx._columns.push(localctx._beslistabelColumnText);
					}
					}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 402;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 401;
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
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===292) {
				{
				this.state = 404;
				this.match(RegelSpraakParser.PIPE);
				}
			}

			this.state = 415;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 408;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 407;
							this.match(RegelSpraakParser.MINUS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 410;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 413;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						this.state = 412;
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
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===291) {
				{
				{
				this.state = 419;
				this.match(RegelSpraakParser.MINUS);
				}
				}
				this.state = 424;
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
			this.state = 425;
			this.match(RegelSpraakParser.PIPE);
			this.state = 426;
			localctx._rowNumber = this.match(RegelSpraakParser.NUMBER);
			this.state = 427;
			this.match(RegelSpraakParser.PIPE);
			this.state = 428;
			localctx._beslistabelCellValue = this.beslistabelCellValue();
			localctx._cellValues.push(localctx._beslistabelCellValue);
			this.state = 433;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 429;
					this.match(RegelSpraakParser.PIPE);
					this.state = 430;
					localctx._beslistabelCellValue = this.beslistabelCellValue();
					localctx._cellValues.push(localctx._beslistabelCellValue);
					}
					}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 436;
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
			this.state = 441;
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
			case 41:
			case 92:
			case 106:
			case 109:
			case 115:
			case 116:
			case 117:
			case 120:
			case 128:
			case 133:
			case 136:
			case 152:
			case 157:
			case 186:
			case 187:
			case 189:
			case 191:
			case 192:
			case 197:
			case 198:
			case 201:
			case 202:
			case 205:
			case 206:
			case 208:
			case 211:
			case 213:
			case 215:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 226:
			case 228:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 238:
			case 239:
			case 245:
			case 246:
			case 247:
			case 249:
			case 265:
			case 266:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 291:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 439;
				this.expressie();
				}
				break;
			case 293:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 440;
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
			this.state = 444;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 443;
					_la = this._input.LA(1);
					if(_la<=0 || _la===292) {
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
				this.state = 446;
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
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				localctx = new BeslistabelGelijkstellingHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 448;
				this.beslistabelAttribuutHeader();
				this.state = 449;
				this.match(RegelSpraakParser.WORDT_GESTELD_OP);
				this.state = 450;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelKenmerkHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 452;
				this.onderwerpReferentie();
				this.state = 453;
				_la = this._input.LA(1);
				if(!(_la===106 || _la===109)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 454;
				this.kenmerkNaam();
				this.state = 455;
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
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				localctx = new BeslistabelAttribuutVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 459;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 460;
				this.beslistabelAttribuutHeader();
				this.state = 461;
				this.comparisonOperator();
				this.state = 462;
				this.match(RegelSpraakParser.EOF);
				}
				break;
			case 2:
				localctx = new BeslistabelKenmerkVoorwaardeHeaderContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 464;
				this.match(RegelSpraakParser.INDIEN);
				this.state = 465;
				this.onderwerpReferentie();
				this.state = 467;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 466;
					_la = this._input.LA(1);
					if(!(((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 469;
				this.kenmerkNaam();
				this.state = 470;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 471;
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
			this.state = 475;
			this.beslistabelAttribuutNaam();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===240) {
				{
				this.state = 476;
				this.match(RegelSpraakParser.VAN);
				this.state = 477;
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
			this.state = 480;
			this.beslistabelAttribuutEerstePhrase();
			this.state = 486;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 481;
					this.beslistabelAttribuutVoorzetsel();
					this.state = 482;
					this.beslistabelAttribuutVervolgPhrase();
					}
					}
				}
				this.state = 488;
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
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0)) {
				{
				this.state = 489;
				_la = this._input.LA(1);
				if(!(_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 492;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268451841) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 497;
				this.identifierOrKeywordNoIs();
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268451841) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 502;
			_la = this._input.LA(1);
			if(!(((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 1073741829) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 44044545) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 137) !== 0))) {
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
			this.state = 504;
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
			this.state = 506;
			_la = this._input.LA(1);
			if(!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265)) {
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
			this.state = 508;
			_la = this._input.LA(1);
			if(!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268451841) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265)) {
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
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0)) {
					{
					this.state = 510;
					_la = this._input.LA(1);
					if(!(_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 514;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 513;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 516;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 519;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 518;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 521;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 523;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 525;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 524;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 527;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 529;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 530;
					this.identifierOrKeyword();
					}
					}
					this.state = 533;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265);
				this.state = 535;
				this.match(RegelSpraakParser.MET);
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
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 541;
					this.identifierOrKeyword();
					}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265);
				this.state = 546;
				this.match(RegelSpraakParser.MET);
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
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 552;
				this.match(RegelSpraakParser.NIET);
				this.state = 554;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 553;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 556;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 558;
				this.match(RegelSpraakParser.HET);
				this.state = 559;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 560;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 561;
				this.match(RegelSpraakParser.IN);
				this.state = 563;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 562;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 565;
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
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0)) {
					{
					this.state = 569;
					_la = this._input.LA(1);
					if(!(_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 573;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 572;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 575;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 578;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 577;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 580;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 582;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 584;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 583;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 586;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 588;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 589;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265 || _la===266);
				this.state = 594;
				this.match(RegelSpraakParser.MET);
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
					_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 600;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 603;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265 || _la===266);
				this.state = 605;
				this.match(RegelSpraakParser.MET);
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
					_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 611;
				this.match(RegelSpraakParser.NIET);
				this.state = 613;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 612;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 615;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 617;
				this.match(RegelSpraakParser.HET);
				this.state = 618;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 619;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 620;
				this.match(RegelSpraakParser.IN);
				this.state = 622;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 621;
						this.identifierOrKeywordWithNumbers();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 624;
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
			this.state = 630;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
			case 106:
			case 109:
			case 120:
			case 128:
			case 157:
			case 186:
			case 197:
			case 198:
			case 201:
			case 202:
			case 205:
			case 206:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 228:
			case 230:
			case 234:
			case 235:
			case 238:
			case 239:
			case 246:
			case 247:
			case 249:
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 628;
				this.identifierOrKeyword();
				}
				break;
			case 266:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 629;
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
			this.state = 680;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0)) {
					{
					this.state = 632;
					_la = this._input.LA(1);
					if(!(_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 636;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 635;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 638;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 641;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 640;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 643;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 645;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 647;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 646;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 649;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 651;
				this.match(RegelSpraakParser.NIEUWE);
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 652;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268451841) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265);
				this.state = 657;
				this.match(RegelSpraakParser.MET);
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
					_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 663;
					this.identifierOrKeywordNoIs();
					}
					}
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268451841) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265);
				this.state = 668;
				this.match(RegelSpraakParser.MET);
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
					_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 674;
				this.match(RegelSpraakParser.NIET);
				this.state = 676;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 675;
						this.identifierOrKeywordNoIs();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 678;
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
			this.state = 682;
			this.naamPhrase();
			this.state = 688;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 683;
					this.voorzetsel();
					this.state = 684;
					this.naamPhrase();
					}
					}
				}
				this.state = 690;
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
			this.state = 691;
			this.naamPhraseWithNumbers();
			this.state = 697;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 692;
					this.voorzetsel();
					this.state = 693;
					this.naamPhraseWithNumbers();
					}
					}
				}
				this.state = 699;
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
			this.state = 700;
			this.naamPhraseNoIs();
			this.state = 706;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 701;
					this.voorzetsel();
					this.state = 702;
					this.naamPhraseNoIs();
					}
					}
				}
				this.state = 708;
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
			this.state = 709;
			_la = this._input.LA(1);
			if(!(((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 1073741829) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 44044545) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 137) !== 0))) {
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
			this.state = 711;
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
			this.state = 713;
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
			this.state = 715;
			_la = this._input.LA(1);
			if(!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 1611509763) !== 0) || ((((_la - 238)) & ~0x1F) === 0 && ((1 << (_la - 238)) & 771) !== 0))) {
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
			this.state = 717;
			this.match(RegelSpraakParser.OBJECTTYPE);
			this.state = 718;
			this.naamwoordNoIs();
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===174) {
				{
				this.state = 719;
				this.match(RegelSpraakParser.MV_START);
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 720;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 723;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===265);
				this.state = 725;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===161) {
				{
				this.state = 728;
				this.match(RegelSpraakParser.BEZIELD);
				}
			}

			this.state = 734;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 731;
					this.objectTypeMember();
					}
					}
				}
				this.state = 736;
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
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 737;
				this.kenmerkSpecificatie();
				}
				break;
			case 2:
				{
				this.state = 738;
				this.attribuutSpecificatie();
				}
				break;
			}
			this.state = 741;
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
			this.state = 748;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 743;
					this.match(RegelSpraakParser.IS);
					}
				}

				this.state = 746;
				this.identifier();
				}
				break;
			case 2:
				{
				this.state = 747;
				this.naamwoordWithNumbers();
				}
				break;
			}
			this.state = 750;
			this.match(RegelSpraakParser.KENMERK);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===159 || _la===160) {
				{
				this.state = 751;
				_la = this._input.LA(1);
				if(!(_la===159 || _la===160)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 7) !== 0)) {
				{
				this.state = 754;
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
			this.state = 757;
			this.naamwoordWithNumbers();
			this.state = 761;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 758;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 759;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 760;
				this.objectTypeRef();
				}
				break;
			}
			this.state = 765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===173) {
				{
				this.state = 763;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 764;
				this.unitIdentifier();
				}
			}

			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===167) {
				{
				this.state = 767;
				this.match(RegelSpraakParser.GEDIMENSIONEERD_MET);
				this.state = 768;
				this.dimensieRef();
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===212) {
					{
					{
					this.state = 769;
					this.match(RegelSpraakParser.EN);
					this.state = 770;
					this.dimensieRef();
					}
					}
					this.state = 775;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 7) !== 0)) {
				{
				this.state = 778;
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
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 177:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 781;
				this.numeriekDatatype();
				}
				break;
			case 182:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 782;
				this.tekstDatatype();
				}
				break;
			case 162:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 783;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 164:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 784;
				this.datumTijdDatatype();
				}
				break;
			case 97:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 785;
				this.lijstDatatype();
				}
				break;
			case 178:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 786;
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
			this.state = 789;
			this.match(RegelSpraakParser.LIJST);
			this.state = 790;
			this.match(RegelSpraakParser.VAN);
			this.state = 794;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 791;
				this.datatype();
				}
				break;
			case 2:
				{
				this.state = 792;
				this.domeinRef();
				}
				break;
			case 3:
				{
				this.state = 793;
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
			this.state = 796;
			this.match(RegelSpraakParser.NUMERIEK);
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===272) {
				{
				this.state = 797;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 798;
				this.getalSpecificatie();
				this.state = 799;
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
			this.state = 803;
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
			this.state = 805;
			this.match(RegelSpraakParser.PERCENTAGE);
			this.state = 810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===272) {
				{
				this.state = 806;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 807;
				this.getalSpecificatie();
				this.state = 808;
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
			this.state = 812;
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
			this.state = 814;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===164)) {
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
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 19) !== 0)) {
				{
				this.state = 816;
				_la = this._input.LA(1);
				if(!(((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 19) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 825;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 819;
				this.match(RegelSpraakParser.GEHEEL_GETAL);
				}
				break;
			case 2:
				{
				{
				this.state = 820;
				this.match(RegelSpraakParser.GETAL);
				this.state = 821;
				this.match(RegelSpraakParser.MET);
				this.state = 822;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 823;
				this.match(RegelSpraakParser.DECIMALEN);
				}
				}
				break;
			case 3:
				{
				this.state = 824;
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
			this.state = 827;
			this.match(RegelSpraakParser.DOMEIN);
			this.state = 828;
			localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 829;
			this.match(RegelSpraakParser.IS_VAN_HET_TYPE);
			this.state = 830;
			this.domeinType();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===173) {
				{
				this.state = 831;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 832;
				this.eenheidExpressie();
				}
			}

			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===279) {
				{
				this.state = 835;
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
			this.state = 843;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 166:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 838;
				this.enumeratieSpecificatie();
				}
				break;
			case 177:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 839;
				this.numeriekDatatype();
				}
				break;
			case 182:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 840;
				this.tekstDatatype();
				}
				break;
			case 162:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 841;
				this.booleanDatatype();
				}
				break;
			case 3:
			case 164:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 842;
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
			this.state = 845;
			this.match(RegelSpraakParser.ENUMERATIE);
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 846;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				}
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===271);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 851;
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
			this.state = 853;
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
			this.state = 855;
			this.match(RegelSpraakParser.EENHEIDSYSTEEM);
			this.state = 856;
			localctx._name = this.identifier();
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===208 || _la===213) {
				{
				{
				this.state = 857;
				this.eenheidEntry();
				}
				}
				this.state = 862;
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
			this.state = 863;
			_la = this._input.LA(1);
			if(!(_la===208 || _la===213)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 864;
			localctx._unitName = this.unitIdentifierWithTime();
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===174) {
				{
				this.state = 865;
				this.match(RegelSpraakParser.MV_START);
				this.state = 866;
				localctx._pluralName = this.unitIdentifierWithTime();
				this.state = 867;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 871;
			localctx._abbrev = this.unitIdentifierWithTime();
			this.state = 873;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133 || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & 1611657219) !== 0) || ((((_la - 238)) & ~0x1F) === 0 && ((1 << (_la - 238)) & 268237571) !== 0)) {
				{
				this.state = 872;
				localctx._symbol_ = this.unitIdentifierWithTime();
				}
			}

			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===267) {
				{
				this.state = 875;
				this.match(RegelSpraakParser.EQUALS);
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===280) {
					{
					this.state = 876;
					this.match(RegelSpraakParser.SLASH);
					}
				}

				this.state = 879;
				localctx._value = this.match(RegelSpraakParser.NUMBER);
				this.state = 880;
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
			this.state = 883;
			_la = this._input.LA(1);
			if(!(_la===133 || ((((_la - 222)) & ~0x1F) === 0 && ((1 << (_la - 222)) & 4160958471) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 1023) !== 0))) {
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
			this.state = 895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 133:
			case 222:
			case 223:
			case 224:
			case 234:
			case 235:
			case 238:
			case 239:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 256:
			case 257:
			case 258:
			case 259:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 885;
				this.unitIdentifier();
				}
				break;
			case 205:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 886;
				this.match(RegelSpraakParser.DAG);
				}
				break;
			case 206:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 887;
				this.match(RegelSpraakParser.DAGEN);
				}
				break;
			case 220:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 888;
				this.match(RegelSpraakParser.MAAND);
				}
				break;
			case 221:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 889;
				this.match(RegelSpraakParser.MAANDEN);
				}
				break;
			case 217:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 890;
				this.match(RegelSpraakParser.JAAR);
				}
				break;
			case 218:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 891;
				this.match(RegelSpraakParser.JAREN);
				}
				break;
			case 246:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 892;
				this.match(RegelSpraakParser.WEEK);
				}
				break;
			case 247:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 893;
				this.match(RegelSpraakParser.WEKEN);
				}
				break;
			case 219:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 894;
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
		let _la: number;
		try {
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 897;
				this.eenheidMacht();
				this.state = 900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===280) {
					{
					this.state = 898;
					this.match(RegelSpraakParser.SLASH);
					this.state = 899;
					this.eenheidMacht();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 902;
				this.match(RegelSpraakParser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 903;
				this.match(RegelSpraakParser.PERCENT_SIGN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 904;
				this.match(RegelSpraakParser.EURO_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 905;
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
	public eenheidMacht(): EenheidMachtContext {
		let localctx: EenheidMachtContext = new EenheidMachtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, RegelSpraakParser.RULE_eenheidMacht);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 908;
			this.unitIdentifier();
			this.state = 911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===286) {
				{
				this.state = 909;
				this.match(RegelSpraakParser.CARET);
				this.state = 910;
				this.match(RegelSpraakParser.NUMBER);
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
	public dimensieDefinition(): DimensieDefinitionContext {
		let localctx: DimensieDefinitionContext = new DimensieDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, RegelSpraakParser.RULE_dimensieDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			this.match(RegelSpraakParser.DIMENSIE);
			this.state = 914;
			this.naamwoord();
			this.state = 916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 915;
				this.match(RegelSpraakParser.COMMA);
				}
			}

			this.state = 918;
			this.match(RegelSpraakParser.BESTAANDE_UIT);
			this.state = 919;
			localctx._dimensieNaamMeervoud = this.naamwoord();
			this.state = 920;
			this.voorzetselSpecificatie();
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 921;
				this.labelWaardeSpecificatie();
				}
				}
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===266);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 108, RegelSpraakParser.RULE_voorzetselSpecificatie);
		let _la: number;
		try {
			this.state = 933;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 926;
				this.match(RegelSpraakParser.NA_HET_ATTRIBUUT_MET_VOORZETSEL);
				this.state = 927;
				localctx._vz = this.voorzetsel();
				this.state = 928;
				this.match(RegelSpraakParser.RPAREN);
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===278) {
					{
					this.state = 929;
					this.match(RegelSpraakParser.COLON);
					}
				}

				}
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 932;
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
		this.enterRule(localctx, 110, RegelSpraakParser.RULE_labelWaardeSpecificatie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 935;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 936;
			this.match(RegelSpraakParser.DOT);
			this.state = 937;
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
		this.enterRule(localctx, 112, RegelSpraakParser.RULE_tijdlijn);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 939;
			_la = this._input.LA(1);
			if(!(((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 7) !== 0))) {
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
		this.enterRule(localctx, 114, RegelSpraakParser.RULE_dimensieRef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 941;
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
		this.enterRule(localctx, 116, RegelSpraakParser.RULE_parameterDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 943;
			this.match(RegelSpraakParser.PARAMETER);
			this.state = 944;
			this.parameterNamePhrase();
			this.state = 945;
			this.match(RegelSpraakParser.COLON);
			this.state = 948;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 97:
			case 162:
			case 164:
			case 177:
			case 178:
			case 182:
				{
				this.state = 946;
				this.datatype();
				}
				break;
			case 265:
				{
				this.state = 947;
				this.domeinRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===173) {
				{
				this.state = 950;
				this.match(RegelSpraakParser.MET_EENHEID);
				this.state = 951;
				this.eenheidExpressie();
				}
			}

			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 954;
				this.match(RegelSpraakParser.IS);
				this.state = 955;
				this.expressie();
				}
			}

			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 7) !== 0)) {
				{
				this.state = 958;
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
		this.enterRule(localctx, 118, RegelSpraakParser.RULE_parameterNamePhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===208 || _la===213) {
				{
				this.state = 961;
				_la = this._input.LA(1);
				if(!(_la===208 || _la===213)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 964;
			this.parameterNamePart();
			this.state = 970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 1073741829) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 44044545) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 137) !== 0)) {
				{
				{
				this.state = 965;
				this.voorzetsel();
				this.state = 966;
				this.parameterNamePart();
				}
				}
				this.state = 972;
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
		this.enterRule(localctx, 120, RegelSpraakParser.RULE_parameterNamePart);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			_la = this._input.LA(1);
			if(!(_la===186 || _la===265)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 977;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 974;
					_la = this._input.LA(1);
					if(!(_la===186 || _la===265 || _la===266)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 979;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
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
		this.enterRule(localctx, 122, RegelSpraakParser.RULE_parameterMetLidwoord);
		let _la: number;
		try {
			let _alt: number;
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===208 || _la===213) {
					{
					this.state = 980;
					_la = this._input.LA(1);
					if(!(_la===208 || _la===213)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 983;
				this.parameterNamePart();
				this.state = 989;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 984;
						this.voorzetsel();
						this.state = 985;
						this.parameterNamePart();
						}
						}
					}
					this.state = 991;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 992;
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
		this.enterRule(localctx, 124, RegelSpraakParser.RULE_feitTypeDefinition);
		try {
			let _alt: number;
			this.state = 1010;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 101:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 995;
				this.match(RegelSpraakParser.FEITTYPE);
				this.state = 996;
				localctx._feittypenaam = this.naamwoord();
				this.state = 997;
				this.rolDefinition();
				this.state = 999;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 998;
						this.rolDefinition();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1001;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 108, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1003;
				this.cardinalityLine();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1005;
				this.match(RegelSpraakParser.WEDERKERIG_FEITTYPE);
				this.state = 1006;
				localctx._feittypenaam = this.naamwoord();
				this.state = 1007;
				this.rolDefinition();
				this.state = 1008;
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
		this.enterRule(localctx, 126, RegelSpraakParser.RULE_rolDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1012;
			localctx._article = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===208 || _la===213)) {
			    localctx._article = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1013;
			this.rolNameWords();
			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===174) {
				{
				this.state = 1014;
				this.match(RegelSpraakParser.MV_START);
				this.state = 1015;
				localctx._meervoud = this.naamwoord();
				this.state = 1016;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 1020;
			this.match(RegelSpraakParser.TAB);
			this.state = 1022;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1021;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._objectTypeName.push(localctx._IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
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
		this.enterRule(localctx, 128, RegelSpraakParser.RULE_rolNameWords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1028;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 92:
				case 106:
				case 109:
				case 120:
				case 128:
				case 157:
				case 186:
				case 197:
				case 198:
				case 201:
				case 202:
				case 205:
				case 206:
				case 217:
				case 218:
				case 219:
				case 220:
				case 221:
				case 222:
				case 223:
				case 224:
				case 228:
				case 230:
				case 234:
				case 235:
				case 238:
				case 239:
				case 246:
				case 247:
				case 249:
				case 265:
					{
					this.state = 1026;
					this.identifierOrKeyword();
					}
					break;
				case 142:
				case 144:
				case 172:
				case 204:
				case 212:
				case 216:
				case 225:
				case 227:
				case 229:
				case 237:
				case 240:
				case 244:
					{
					this.state = 1027;
					this.voorzetsel();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 536952833) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 1711292417) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 3351245063) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 268441231) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 130, RegelSpraakParser.RULE_cardinalityLine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1032;
				this.cardinalityWord();
				}
				}
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4026531838) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 134217727) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 4294967233) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 4294967295) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 4294967295) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4294967295) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 4294967295) !== 0) || ((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 4290772991) !== 0) || ((((_la - 289)) & ~0x1F) === 0 && ((1 << (_la - 289)) & 31) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 132, RegelSpraakParser.RULE_cardinalityWord);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1037;
			_la = this._input.LA(1);
			if(_la<=0 || _la===28 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4031) !== 0) || _la===279) {
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
		this.enterRule(localctx, 134, RegelSpraakParser.RULE_regel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1039;
			this.match(RegelSpraakParser.REGEL);
			this.state = 1040;
			this.regelName();
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===266) {
				{
				this.state = 1041;
				this.match(RegelSpraakParser.NUMBER);
				}
			}

			this.state = 1045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1044;
				this.regelVersieBlok();
				}
				}
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===104);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 136, RegelSpraakParser.RULE_regelVersieBlok);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1049;
			this.regelVersie();
			this.state = 1050;
			this.resultaatDeel();
			this.state = 1056;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 107:
				{
				this.state = 1051;
				this.voorwaardeDeel();
				this.state = 1053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===277) {
					{
					this.state = 1052;
					this.match(RegelSpraakParser.DOT);
					}
				}

				}
				break;
			case 277:
				{
				this.state = 1055;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			case -1:
			case 28:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
				break;
			default:
				break;
			}
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 1058;
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
		this.enterRule(localctx, 138, RegelSpraakParser.RULE_regelGroep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1061;
			this.match(RegelSpraakParser.REGELGROEP);
			this.state = 1062;
			this.naamwoord();
			this.state = 1064;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 1063;
				localctx._isRecursive = this.match(RegelSpraakParser.IS_RECURSIEF);
				}
			}

			this.state = 1068;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1068;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 92:
						{
						this.state = 1066;
						this.regel();
						}
						break;
					case 91:
						{
						this.state = 1067;
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
				this.state = 1070;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 122, this._ctx);
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
		this.enterRule(localctx, 140, RegelSpraakParser.RULE_regelName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1072;
			this.naamwoordWithNumbers();
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===109 || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 262209) !== 0) || _la===276) {
				{
				{
				this.state = 1073;
				this.regelNameExtension();
				}
				}
				this.state = 1078;
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
		this.enterRule(localctx, 142, RegelSpraakParser.RULE_regelNameExtension);
		try {
			this.state = 1093;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1079;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1080;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1081;
				this.naamwoordWithNumbers();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1082;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1083;
				this.match(RegelSpraakParser.MET);
				this.state = 1084;
				this.naamwoordWithNumbers();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1085;
				this.match(RegelSpraakParser.EN);
				this.state = 1086;
				this.naamwoordWithNumbers();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1087;
				this.match(RegelSpraakParser.IS);
				this.state = 1088;
				this.naamwoordWithNumbers();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1089;
				this.match(RegelSpraakParser.GEEN);
				this.state = 1090;
				this.naamwoordWithNumbers();
				this.state = 1091;
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
		this.enterRule(localctx, 144, RegelSpraakParser.RULE_regelVersie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1095;
			this.match(RegelSpraakParser.GELDIG);
			this.state = 1096;
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
		this.enterRule(localctx, 146, RegelSpraakParser.RULE_versieGeldigheid);
		let _la: number;
		try {
			this.state = 1107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 203:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1098;
				this.match(RegelSpraakParser.ALTIJD);
				}
				break;
			case 146:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1099;
				this.match(RegelSpraakParser.VANAF);
				this.state = 1100;
				this.geldigheidsDatum();
				this.state = 1103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===144 || _la===236) {
					{
					this.state = 1101;
					_la = this._input.LA(1);
					if(!(_la===144 || _la===236)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1102;
					this.geldigheidsDatum();
					}
				}

				}
				break;
			case 144:
			case 236:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1105;
				_la = this._input.LA(1);
				if(!(_la===144 || _la===236)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1106;
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
		this.enterRule(localctx, 148, RegelSpraakParser.RULE_geldigheidsDatum);
		try {
			this.state = 1111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 268:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1109;
				this.datumLiteral();
				}
				break;
			case 266:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1110;
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
		this.enterRule(localctx, 150, RegelSpraakParser.RULE_resultaatDeel);
		let _la: number;
		try {
			this.state = 1153;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				localctx = new DagsoortdefinitieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1113;
				this.match(RegelSpraakParser.EEN);
				this.state = 1114;
				this.match(RegelSpraakParser.DAG);
				this.state = 1115;
				this.match(RegelSpraakParser.IS);
				this.state = 1116;
				this.match(RegelSpraakParser.EEN);
				this.state = 1117;
				this.naamwoord();
				}
				break;
			case 2:
				localctx = new GelijkstellingResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1118;
				this.attribuutReferentie();
				this.state = 1125;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
					{
					this.state = 1119;
					this.match(RegelSpraakParser.WORDT_BEREKEND_ALS);
					this.state = 1120;
					this.expressie();
					}
					break;
				case 9:
					{
					this.state = 1121;
					this.match(RegelSpraakParser.WORDT_GESTELD_OP);
					this.state = 1122;
					this.expressie();
					}
					break;
				case 10:
					{
					this.state = 1123;
					this.match(RegelSpraakParser.WORDT_GEINITIALISEERD_OP);
					this.state = 1124;
					this.expressie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 21) !== 0) || _la===240) {
					{
					this.state = 1127;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 3:
				localctx = new ConsistencyCheckResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1130;
				this.attribuutReferentie();
				this.state = 1131;
				this.match(RegelSpraakParser.MOET);
				this.state = 1132;
				this.consistencyOperator();
				this.state = 1133;
				this.expressie();
				}
				break;
			case 4:
				localctx = new FeitCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1135;
				this.feitCreatiePattern();
				}
				break;
			case 5:
				localctx = new ObjectCreatieResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1136;
				this.objectCreatie();
				}
				break;
			case 6:
				localctx = new RelationshipWithAttributeResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1137;
				this.onderwerpReferentie();
				this.state = 1138;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1139;
				_la = this._input.LA(1);
				if(!(_la===208 || _la===213)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1140;
				this.naamwoord();
				this.state = 1141;
				this.match(RegelSpraakParser.MET);
				this.state = 1142;
				this.attribuutMetLidwoord();
				this.state = 1143;
				_la = this._input.LA(1);
				if(!(_la===43 || _la===44 || _la===124)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1144;
				this.expressie();
				}
				break;
			case 7:
				localctx = new KenmerkFeitResultaatContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1146;
				this.onderwerpReferentie();
				this.state = 1147;
				_la = this._input.LA(1);
				if(!(_la===106 || _la===109)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1148;
				this.kenmerkNaam();
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 21) !== 0) || _la===240) {
					{
					this.state = 1149;
					this.conditieBijExpressie();
					}
				}

				}
				break;
			case 8:
				localctx = new VerdelingContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1152;
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
		this.enterRule(localctx, 152, RegelSpraakParser.RULE_consistencyOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1155;
			_la = this._input.LA(1);
			if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 23) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 24617) !== 0))) {
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
		this.enterRule(localctx, 154, RegelSpraakParser.RULE_feitCreatiePattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1157;
			this.match(RegelSpraakParser.EEN);
			this.state = 1158;
			localctx._role1 = this.feitCreatieRolPhrase();
			this.state = 1159;
			this.match(RegelSpraakParser.VAN);
			this.state = 1160;
			this.match(RegelSpraakParser.EEN);
			this.state = 1161;
			localctx._subject1 = this.feitCreatieSubjectPhrase();
			this.state = 1162;
			this.match(RegelSpraakParser.IS);
			this.state = 1163;
			localctx._article2 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
			    localctx._article2 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1164;
			localctx._role2 = this.feitCreatieRolPhrase();
			this.state = 1165;
			this.match(RegelSpraakParser.VAN);
			this.state = 1166;
			localctx._article3 = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
			    localctx._article3 = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1167;
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
		this.enterRule(localctx, 156, RegelSpraakParser.RULE_feitCreatieRolPhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1169;
				this.feitCreatieWord();
				}
				}
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 536887297) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 1711292417) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 3349147911) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 268441223) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 158, RegelSpraakParser.RULE_feitCreatieSubjectPhrase);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1175;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1174;
					this.feitCreatieSubjectWord();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1177;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
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
		this.enterRule(localctx, 160, RegelSpraakParser.RULE_feitCreatieSubjectWord);
		try {
			this.state = 1184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
			case 106:
			case 109:
			case 120:
			case 128:
			case 157:
			case 186:
			case 197:
			case 198:
			case 201:
			case 202:
			case 205:
			case 206:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 228:
			case 230:
			case 234:
			case 235:
			case 238:
			case 239:
			case 246:
			case 247:
			case 249:
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1179;
				this.identifierOrKeyword();
				}
				break;
			case 142:
			case 144:
			case 172:
			case 204:
			case 212:
			case 216:
			case 225:
			case 227:
			case 229:
			case 237:
			case 240:
			case 244:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1180;
				this.voorzetsel();
				}
				break;
			case 208:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1181;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 213:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1182;
				this.match(RegelSpraakParser.HET);
				}
				break;
			case 211:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1183;
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
		this.enterRule(localctx, 162, RegelSpraakParser.RULE_feitCreatieWord);
		try {
			this.state = 1188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
			case 106:
			case 109:
			case 120:
			case 128:
			case 157:
			case 186:
			case 197:
			case 198:
			case 201:
			case 202:
			case 205:
			case 206:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 228:
			case 230:
			case 234:
			case 235:
			case 238:
			case 239:
			case 246:
			case 247:
			case 249:
			case 265:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1186;
				this.identifierOrKeyword();
				}
				break;
			case 142:
			case 172:
			case 204:
			case 212:
			case 216:
			case 227:
			case 229:
			case 237:
			case 244:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1187;
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
		this.enterRule(localctx, 164, RegelSpraakParser.RULE_voorzetselNietVan);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1190;
			_la = this._input.LA(1);
			if(!(_la===142 || _la===172 || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 41947393) !== 0) || _la===237 || _la===244)) {
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
		this.enterRule(localctx, 166, RegelSpraakParser.RULE_objectCreatie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1192;
			localctx._subject = this.onderwerpReferentie();
			this.state = 1193;
			this.match(RegelSpraakParser.HEEFT);
			this.state = 1194;
			localctx._roleArticle = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
			    localctx._roleArticle = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1195;
			localctx._role = this.naamwoord();
			this.state = 1197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===172) {
				{
				this.state = 1196;
				this.objectAttributeInit();
				}
			}

			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1199;
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
		this.enterRule(localctx, 168, RegelSpraakParser.RULE_objectAttributeInit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1202;
			this.match(RegelSpraakParser.MET);
			this.state = 1203;
			this.waardetoekenning();
			this.state = 1208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===276) {
				{
				{
				this.state = 1204;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1205;
				this.waardetoekenning();
				}
				}
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===212) {
				{
				this.state = 1211;
				this.match(RegelSpraakParser.EN);
				this.state = 1212;
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
		this.enterRule(localctx, 170, RegelSpraakParser.RULE_waardetoekenning);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1215;
			localctx._attribuut = this.simpleNaamwoord();
			this.state = 1216;
			this.match(RegelSpraakParser.GELIJK_AAN);
			this.state = 1217;
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
		this.enterRule(localctx, 172, RegelSpraakParser.RULE_simpleNaamwoord);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1219;
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
		this.enterRule(localctx, 174, RegelSpraakParser.RULE_consistentieregel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1221;
			this.match(RegelSpraakParser.CONSISTENTIEREGEL);
			this.state = 1222;
			this.naamwoord();
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1223;
				this.uniekzijnResultaat();
				}
				break;
			case 2:
				{
				this.state = 1224;
				this.inconsistentResultaat();
				this.state = 1230;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 107:
					{
					this.state = 1225;
					this.voorwaardeDeel();
					this.state = 1227;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===277) {
						{
						this.state = 1226;
						this.match(RegelSpraakParser.DOT);
						}
					}

					}
					break;
				case 277:
					{
					this.state = 1229;
					this.match(RegelSpraakParser.DOT);
					}
					break;
				case -1:
				case 28:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
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
		this.enterRule(localctx, 176, RegelSpraakParser.RULE_uniekzijnResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1234;
			this.alleAttributenVanObjecttype();
			this.state = 1235;
			this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
			this.state = 1237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===277) {
				{
				this.state = 1236;
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
		this.enterRule(localctx, 178, RegelSpraakParser.RULE_alleAttributenVanObjecttype);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1239;
			this.match(RegelSpraakParser.DE);
			this.state = 1240;
			this.naamwoord();
			this.state = 1241;
			this.match(RegelSpraakParser.VAN);
			this.state = 1242;
			this.match(RegelSpraakParser.ALLE);
			this.state = 1243;
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
		this.enterRule(localctx, 180, RegelSpraakParser.RULE_inconsistentResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1245;
				_la = this._input.LA(1);
				if(!(_la===208 || _la===213 || _la===248)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1248;
			this.naamwoord();
			this.state = 1249;
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
		this.enterRule(localctx, 182, RegelSpraakParser.RULE_voorwaardeDeel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1251;
			this.match(RegelSpraakParser.INDIEN);
			this.state = 1254;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1252;
				this.expressie();
				}
				break;
			case 2:
				{
				this.state = 1253;
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
		this.enterRule(localctx, 184, RegelSpraakParser.RULE_toplevelSamengesteldeVoorwaarde);
		let _la: number;
		try {
			this.state = 1298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1256;
				this.match(RegelSpraakParser.ER_AAN);
				this.state = 1257;
				this.voorwaardeKwantificatie();
				this.state = 1258;
				_la = this._input.LA(1);
				if(!(_la===241 || _la===242)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1259;
				this.match(RegelSpraakParser.WORDT_VOLDAAN);
				this.state = 1260;
				this.match(RegelSpraakParser.COLON);
				this.state = 1262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1261;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===282 || _la===291);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1270;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1266;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1267;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1268;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1269;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1272;
				this.match(RegelSpraakParser.AAN);
				this.state = 1273;
				this.voorwaardeKwantificatie();
				this.state = 1274;
				_la = this._input.LA(1);
				if(!(_la===241 || _la===242)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1275;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1276;
				this.match(RegelSpraakParser.COLON);
				this.state = 1278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1277;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===282 || _la===291);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1286;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
					this.state = 1282;
					this.onderwerpReferentie();
					}
					break;
				case 2:
					{
					this.state = 1283;
					this.match(RegelSpraakParser.HIJ);
					}
					break;
				case 3:
					{
					this.state = 1284;
					this.match(RegelSpraakParser.HET);
					}
					break;
				case 4:
					{
					this.state = 1285;
					this.match(RegelSpraakParser.ER);
					}
					break;
				}
				this.state = 1288;
				this.match(RegelSpraakParser.VOLDOET);
				this.state = 1289;
				this.match(RegelSpraakParser.AAN);
				this.state = 1290;
				this.voorwaardeKwantificatie();
				this.state = 1291;
				_la = this._input.LA(1);
				if(!(_la===241 || _la===242)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1292;
				this.match(RegelSpraakParser.COLON);
				this.state = 1294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1293;
					this.samengesteldeVoorwaardeOnderdeel();
					}
					}
					this.state = 1296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===282 || _la===291);
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
		this.enterRule(localctx, 186, RegelSpraakParser.RULE_voorwaardeKwantificatie);
		let _la: number;
		try {
			this.state = 1315;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 208:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1300;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1301;
				this.match(RegelSpraakParser.ALLE);
				}
				break;
			case 199:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1302;
				this.match(RegelSpraakParser.GEEN_VAN_DE);
				}
				break;
			case 153:
			case 154:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1303;
				_la = this._input.LA(1);
				if(!(_la===153 || _la===154)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1304;
				_la = this._input.LA(1);
				if(!(((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 16435) !== 0) || _la===266)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1305;
				this.match(RegelSpraakParser.VAN);
				this.state = 1306;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 155:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1307;
				this.match(RegelSpraakParser.TEN_HOOGSTE);
				this.state = 1308;
				_la = this._input.LA(1);
				if(!(((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 16435) !== 0) || _la===266)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1309;
				this.match(RegelSpraakParser.VAN);
				this.state = 1310;
				this.match(RegelSpraakParser.DE);
				}
				break;
			case 156:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1311;
				this.match(RegelSpraakParser.PRECIES);
				this.state = 1312;
				_la = this._input.LA(1);
				if(!(((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 16435) !== 0) || _la===266)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1313;
				this.match(RegelSpraakParser.VAN);
				this.state = 1314;
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
		this.enterRule(localctx, 188, RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1317;
			this.outerBulletPrefix();
			this.state = 1320;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				this.state = 1318;
				this.elementaireVoorwaarde();
				}
				break;
			case 2:
				{
				this.state = 1319;
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
		this.enterRule(localctx, 190, RegelSpraakParser.RULE_outerBulletPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1322;
			_la = this._input.LA(1);
			if(!(_la===282 || _la===291)) {
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
		this.enterRule(localctx, 192, RegelSpraakParser.RULE_nestedBulletPrefix);
		try {
			this.state = 1327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 287:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1324;
				this.match(RegelSpraakParser.DOUBLE_DOT);
				}
				break;
			case 282:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1325;
				this.match(RegelSpraakParser.BULLET);
				this.state = 1326;
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
		this.enterRule(localctx, 194, RegelSpraakParser.RULE_bulletPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1329;
				_la = this._input.LA(1);
				if(!(((((_la - 282)) & ~0x1F) === 0 && ((1 << (_la - 282)) & 547) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 1332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 282)) & ~0x1F) === 0 && ((1 << (_la - 282)) & 547) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 196, RegelSpraakParser.RULE_elementaireVoorwaarde);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1334;
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
		this.enterRule(localctx, 198, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaarde);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1339;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1336;
				this.onderwerpReferentie();
				}
				break;
			case 2:
				{
				this.state = 1337;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 3:
				{
				this.state = 1338;
				this.match(RegelSpraakParser.ER);
				}
				break;
			}
			this.state = 1341;
			this.match(RegelSpraakParser.VOLDOET);
			this.state = 1342;
			this.match(RegelSpraakParser.AAN);
			this.state = 1343;
			this.voorwaardeKwantificatie();
			this.state = 1344;
			_la = this._input.LA(1);
			if(!(_la===241 || _la===242)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1345;
			this.match(RegelSpraakParser.COLON);
			this.state = 1347;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1346;
					this.genesteSamengesteldeVoorwaardeOnderdeel();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1349;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
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
		this.enterRule(localctx, 200, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeOnderdeel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1351;
			this.nestedBulletPrefix();
			this.state = 1354;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
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
	public onderwerpReferentie(): OnderwerpReferentieContext {
		let localctx: OnderwerpReferentieContext = new OnderwerpReferentieContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, RegelSpraakParser.RULE_onderwerpReferentie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1356;
			this.onderwerpBasis();
			this.state = 1359;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1357;
				_la = this._input.LA(1);
				if(!(_la===207 || _la===210)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1358;
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
		this.enterRule(localctx, 204, RegelSpraakParser.RULE_onderwerpReferentieWithNumbers);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1361;
			this.onderwerpBasisWithNumbers();
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===207 || _la===210) {
				{
				this.state = 1362;
				_la = this._input.LA(1);
				if(!(_la===207 || _la===210)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1363;
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
		this.enterRule(localctx, 206, RegelSpraakParser.RULE_onderwerpBasis);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1366;
			this.basisOnderwerp();
			this.state = 1372;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1367;
					this.voorzetsel();
					this.state = 1368;
					this.basisOnderwerp();
					}
					}
				}
				this.state = 1374;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
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
		this.enterRule(localctx, 208, RegelSpraakParser.RULE_onderwerpBasisWithNumbers);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1375;
			this.basisOnderwerpWithNumbers();
			this.state = 1381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 1073741829) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 44044545) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 137) !== 0)) {
				{
				{
				this.state = 1376;
				this.voorzetsel();
				this.state = 1377;
				this.basisOnderwerpWithNumbers();
				}
				}
				this.state = 1383;
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
		this.enterRule(localctx, 210, RegelSpraakParser.RULE_basisOnderwerp);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 115:
			case 208:
			case 211:
			case 213:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1384;
				_la = this._input.LA(1);
				if(!(_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1386;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1385;
						this.identifierOrKeyword();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1388;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 215:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1390;
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
		this.enterRule(localctx, 212, RegelSpraakParser.RULE_basisOnderwerpWithNumbers);
		let _la: number;
		try {
			this.state = 1400;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 115:
			case 208:
			case 211:
			case 213:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1393;
				_la = this._input.LA(1);
				if(!(_la===115 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1394;
					this.identifierOrKeywordWithNumbers();
					}
					}
					this.state = 1397;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265 || _la===266);
				}
				break;
			case 215:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1399;
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
		this.enterRule(localctx, 214, RegelSpraakParser.RULE_attribuutReferentie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1402;
			this.attribuutMetLidwoord();
			this.state = 1403;
			this.match(RegelSpraakParser.VAN);
			this.state = 1404;
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
		this.enterRule(localctx, 216, RegelSpraakParser.RULE_attribuutMetLidwoord);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1406;
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
		this.enterRule(localctx, 218, RegelSpraakParser.RULE_kenmerkNaam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 1073741829) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 44044545) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 137) !== 0)) {
				{
				this.state = 1408;
				this.voorzetsel();
				}
			}

			this.state = 1411;
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
		this.enterRule(localctx, 220, RegelSpraakParser.RULE_kenmerkPhrase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 1073741829) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 44044545) !== 0) || ((((_la - 237)) & ~0x1F) === 0 && ((1 << (_la - 237)) & 137) !== 0)) {
				{
				this.state = 1413;
				this.voorzetsel();
				}
			}

			this.state = 1417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0)) {
				{
				this.state = 1416;
				_la = this._input.LA(1);
				if(!(((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1419;
				this.identifierOrKeywordWithNumbers();
				}
				}
				this.state = 1422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 268582913) !== 0) || _la===128 || _la===157 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2149160961) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 2956137599) !== 0) || _la===265 || _la===266);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 222, RegelSpraakParser.RULE_bezieldeReferentie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1424;
			_la = this._input.LA(1);
			if(!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1425;
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
		this.enterRule(localctx, 224, RegelSpraakParser.RULE_aggregationSubject);
		let _la: number;
		try {
			this.state = 1434;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1427;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1428;
				this.naamwoord();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1429;
				this.naamwoord();
				this.state = 1432;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
				case 1:
					{
					this.state = 1430;
					_la = this._input.LA(1);
					if(!(_la===207 || _la===210)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1431;
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
		this.enterRule(localctx, 226, RegelSpraakParser.RULE_predicaat);
		try {
			this.state = 1438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 41:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 60:
			case 61:
			case 62:
			case 63:
			case 92:
			case 106:
			case 109:
			case 115:
			case 120:
			case 128:
			case 136:
			case 142:
			case 144:
			case 157:
			case 172:
			case 186:
			case 197:
			case 198:
			case 201:
			case 202:
			case 204:
			case 205:
			case 206:
			case 208:
			case 211:
			case 212:
			case 213:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 227:
			case 228:
			case 229:
			case 230:
			case 234:
			case 235:
			case 237:
			case 238:
			case 239:
			case 240:
			case 244:
			case 246:
			case 247:
			case 249:
			case 265:
			case 266:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1436;
				this.elementairPredicaat();
				}
				break;
			case 118:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1437;
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
		this.enterRule(localctx, 228, RegelSpraakParser.RULE_elementairPredicaat);
		try {
			this.state = 1445;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1440;
				this.attribuutVergelijkingsPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1441;
				this.objectPredicaat();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1442;
				this.getalPredicaat();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1443;
				this.tekstPredicaat();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1444;
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
		this.enterRule(localctx, 230, RegelSpraakParser.RULE_objectPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1447;
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
		this.enterRule(localctx, 232, RegelSpraakParser.RULE_eenzijdigeObjectVergelijking);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1450;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1449;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			}
			this.state = 1454;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				{
				this.state = 1452;
				this.kenmerkNaam();
				}
				break;
			case 2:
				{
				this.state = 1453;
				this.rolNaam();
				}
				break;
			}
			this.state = 1456;
			_la = this._input.LA(1);
			if(!(_la===105 || _la===115)) {
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
		this.enterRule(localctx, 234, RegelSpraakParser.RULE_rolNaam);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1458;
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
		this.enterRule(localctx, 236, RegelSpraakParser.RULE_attribuutVergelijkingsPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1461;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1460;
				this.match(RegelSpraakParser.EEN);
				}
				break;
			}
			this.state = 1463;
			localctx._attribuutNaam = this.naamwoord();
			this.state = 1464;
			this.match(RegelSpraakParser.HEBBEN);
			this.state = 1465;
			this.comparisonOperator();
			this.state = 1466;
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
		this.enterRule(localctx, 238, RegelSpraakParser.RULE_getalPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1468;
			this.getalVergelijkingsOperatorMeervoud();
			this.state = 1469;
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
		this.enterRule(localctx, 240, RegelSpraakParser.RULE_tekstPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1471;
			this.tekstVergelijkingsOperatorMeervoud();
			this.state = 1472;
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
		this.enterRule(localctx, 242, RegelSpraakParser.RULE_datumPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1474;
			this.datumVergelijkingsOperatorMeervoud();
			this.state = 1475;
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
		this.enterRule(localctx, 244, RegelSpraakParser.RULE_samengesteldPredicaat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1477;
			this.match(RegelSpraakParser.AAN);
			this.state = 1478;
			this.voorwaardeKwantificatie();
			this.state = 1479;
			_la = this._input.LA(1);
			if(!(_la===241 || _la===242)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1480;
			_la = this._input.LA(1);
			if(!(_la===149 || _la===150)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1481;
			this.match(RegelSpraakParser.COLON);
			this.state = 1483;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1482;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1485;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 178, this._ctx);
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
		this.enterRule(localctx, 246, RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeelInPredicaat);
		try {
			this.state = 1493;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1487;
				this.bulletPrefix();
				this.state = 1488;
				this.elementaireVoorwaardeInPredicaat();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1490;
				this.bulletPrefix();
				this.state = 1491;
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
		this.enterRule(localctx, 248, RegelSpraakParser.RULE_elementaireVoorwaardeInPredicaat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1495;
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
		this.enterRule(localctx, 250, RegelSpraakParser.RULE_vergelijkingInPredicaat);
		let _la: number;
		try {
			this.state = 1508;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1497;
				this.attribuutReferentie();
				this.state = 1498;
				this.comparisonOperator();
				this.state = 1499;
				this.expressie();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1501;
				this.onderwerpReferentie();
				this.state = 1502;
				this.eenzijdigeObjectVergelijking();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1504;
				this.attribuutReferentie();
				this.state = 1505;
				_la = this._input.LA(1);
				if(!(_la===109 || _la===115)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1506;
				this.kenmerkNaam();
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
		this.enterRule(localctx, 252, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeInPredicaat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1514;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 150:
				{
				this.state = 1510;
				this.match(RegelSpraakParser.VOLDOET);
				}
				break;
			case 149:
				{
				this.state = 1511;
				this.match(RegelSpraakParser.VOLDOEN);
				}
				break;
			case 113:
				{
				this.state = 1512;
				this.match(RegelSpraakParser.WORDT);
				this.state = 1513;
				this.match(RegelSpraakParser.VOLDAAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1516;
			this.match(RegelSpraakParser.AAN);
			this.state = 1517;
			this.voorwaardeKwantificatie();
			this.state = 1518;
			_la = this._input.LA(1);
			if(!(_la===241 || _la===242)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1519;
			this.match(RegelSpraakParser.COLON);
			this.state = 1521;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1520;
					this.samengesteldeVoorwaardeOnderdeelInPredicaat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1523;
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
	public getalVergelijkingsOperatorMeervoud(): GetalVergelijkingsOperatorMeervoudContext {
		let localctx: GetalVergelijkingsOperatorMeervoudContext = new GetalVergelijkingsOperatorMeervoudContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, RegelSpraakParser.RULE_getalVergelijkingsOperatorMeervoud);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1525;
			_la = this._input.LA(1);
			if(!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 63) !== 0))) {
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
		this.enterRule(localctx, 256, RegelSpraakParser.RULE_tekstVergelijkingsOperatorMeervoud);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1527;
			_la = this._input.LA(1);
			if(!(_la===50 || _la===51)) {
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
		this.enterRule(localctx, 258, RegelSpraakParser.RULE_datumVergelijkingsOperatorMeervoud);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1529;
			_la = this._input.LA(1);
			if(!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 15363) !== 0))) {
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
		this.enterRule(localctx, 260, RegelSpraakParser.RULE_getalExpressie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1531;
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
		this.enterRule(localctx, 262, RegelSpraakParser.RULE_tekstExpressie);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1533;
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
		this.enterRule(localctx, 264, RegelSpraakParser.RULE_datumExpressie);
		try {
			this.state = 1559;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1535;
				this.datumLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1536;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1537;
				this.match(RegelSpraakParser.REKENJAAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1538;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1539;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1540;
				this.primaryExpression(0);
				this.state = 1541;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1542;
				this.primaryExpression(0);
				this.state = 1543;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1544;
				this.primaryExpression(0);
				this.state = 1545;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1547;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1548;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1549;
				this.primaryExpression(0);
				this.state = 1550;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1552;
				this.attribuutReferentie();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1553;
				this.bezieldeReferentie();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1554;
				this.parameterMetLidwoord();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1555;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1556;
				this.expressie();
				this.state = 1557;
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
		this.enterRule(localctx, 266, RegelSpraakParser.RULE_variabeleDeel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1561;
			this.match(RegelSpraakParser.DAARBIJ_GELDT);
			this.state = 1565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===208 || _la===213 || _la===265) {
				{
				{
				this.state = 1562;
				this.variabeleToekenning();
				}
				}
				this.state = 1567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1568;
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
		this.enterRule(localctx, 268, RegelSpraakParser.RULE_variabeleToekenning);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===208 || _la===213) {
				{
				this.state = 1570;
				localctx._article = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===208 || _la===213)) {
				    localctx._article = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 1573;
			localctx._varName = this.match(RegelSpraakParser.IDENTIFIER);
			this.state = 1574;
			this.match(RegelSpraakParser.IS);
			this.state = 1575;
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
		this.enterRule(localctx, 270, RegelSpraakParser.RULE_variabeleExpressie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1577;
			this.primaryExpression(0);
			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 67243011) !== 0)) {
				{
				{
				this.state = 1580;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 133:
				case 139:
				case 148:
					{
					this.state = 1578;
					this.additiveOperator();
					}
					break;
				case 122:
				case 123:
				case 132:
					{
					this.state = 1579;
					this.multiplicativeOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1582;
				this.primaryExpression(0);
				}
				}
				this.state = 1588;
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
		this.enterRule(localctx, 272, RegelSpraakParser.RULE_expressie);
		try {
			this.state = 1602;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				localctx = new ExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1589;
				this.logicalExpression();
				this.state = 1590;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1591;
				this.begrenzing();
				this.state = 1592;
				this.afronding();
				}
				break;
			case 2:
				localctx = new ExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1594;
				this.logicalExpression();
				this.state = 1595;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1596;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new ExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1598;
				this.logicalExpression();
				this.state = 1599;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1601;
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
		this.enterRule(localctx, 274, RegelSpraakParser.RULE_simpleExpressie);
		try {
			this.state = 1617;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				localctx = new SimpleExprBegrenzingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1604;
				this.comparisonExpression();
				this.state = 1605;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1606;
				this.begrenzing();
				this.state = 1607;
				this.afronding();
				}
				break;
			case 2:
				localctx = new SimpleExprBegrenzingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1609;
				this.comparisonExpression();
				this.state = 1610;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1611;
				this.begrenzing();
				}
				break;
			case 3:
				localctx = new SimpleExprAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1613;
				this.comparisonExpression();
				this.state = 1614;
				this.afronding();
				}
				break;
			case 4:
				localctx = new SimpleExprBaseContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1616;
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
		this.enterRule(localctx, 276, RegelSpraakParser.RULE_logicalExpression);
		let _la: number;
		try {
			localctx = new LogicalExprContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1619;
			(localctx as LogicalExprContext)._left = this.comparisonExpression();
			this.state = 1622;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1620;
				(localctx as LogicalExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===212 || _la===225)) {
				    (localctx as LogicalExprContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1621;
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
		this.enterRule(localctx, 278, RegelSpraakParser.RULE_comparisonExpression);
		let _la: number;
		try {
			this.state = 1655;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				localctx = new SubordinateClauseExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1624;
				this.subordinateClauseExpression();
				}
				break;
			case 2:
				localctx = new PeriodeCheckExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1625;
				this.periodevergelijkingElementair();
				}
				break;
			case 3:
				localctx = new IsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1626;
				(localctx as IsKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1627;
				this.match(RegelSpraakParser.IS);
				this.state = 1628;
				this.naamwoordWithNumbers();
				}
				break;
			case 4:
				localctx = new HeeftKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1630;
				(localctx as HeeftKenmerkExprContext)._left = this.additiveExpression();
				this.state = 1631;
				this.match(RegelSpraakParser.HEEFT);
				this.state = 1632;
				this.naamwoordWithNumbers();
				}
				break;
			case 5:
				localctx = new GelijkIsAanOfExprContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1634;
				(localctx as GelijkIsAanOfExprContext)._left = this.additiveExpression();
				this.state = 1635;
				(localctx as GelijkIsAanOfExprContext)._op = this.gelijkIsAanOperator();
				this.state = 1636;
				(localctx as GelijkIsAanOfExprContext)._firstValue = this.literalValue();
				this.state = 1641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===276) {
					{
					{
					this.state = 1637;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1638;
					(localctx as GelijkIsAanOfExprContext)._literalValue = this.literalValue();
					(localctx as GelijkIsAanOfExprContext)._middleValues.push((localctx as GelijkIsAanOfExprContext)._literalValue);
					}
					}
					this.state = 1643;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1644;
				this.match(RegelSpraakParser.OF);
				this.state = 1645;
				(localctx as GelijkIsAanOfExprContext)._lastValue = this.literalValue();
				}
				break;
			case 6:
				localctx = new BinaryComparisonExprContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1647;
				(localctx as BinaryComparisonExprContext)._left = this.additiveExpression();
				this.state = 1651;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1648;
					this.comparisonOperator();
					this.state = 1649;
					(localctx as BinaryComparisonExprContext)._right = this.additiveExpression();
					}
					break;
				}
				}
				break;
			case 7:
				localctx = new UnaryConditionExprContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1653;
				this.unaryCondition();
				}
				break;
			case 8:
				localctx = new RegelStatusConditionExprContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1654;
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
		this.enterRule(localctx, 280, RegelSpraakParser.RULE_literalValue);
		try {
			this.state = 1666;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 271:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1657;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 270:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1658;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 266:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1659;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 1661;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
				case 1:
					{
					this.state = 1660;
					this.unitIdentifier();
					}
					break;
				}
				}
				break;
			case 269:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1663;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 268:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1664;
				this.datumLiteral();
				}
				break;
			case 265:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1665;
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
		this.enterRule(localctx, 282, RegelSpraakParser.RULE_gelijkIsAanOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1668;
			_la = this._input.LA(1);
			if(!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 131) !== 0) || _la===124)) {
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
		this.enterRule(localctx, 284, RegelSpraakParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1670;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 67108835) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 674533377) !== 0) || _la===216 || _la===254 || _la===255)) {
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
		this.enterRule(localctx, 286, RegelSpraakParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1672;
			localctx._left = this.multiplicativeExpression();
			this.state = 1678;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1673;
					this.additiveOperator();
					this.state = 1674;
					localctx._right = this.multiplicativeExpression();
					}
					}
				}
				this.state = 1680;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
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
		this.enterRule(localctx, 288, RegelSpraakParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1681;
			_la = this._input.LA(1);
			if(!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 32833) !== 0))) {
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
		this.enterRule(localctx, 290, RegelSpraakParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1683;
			localctx._left = this.powerExpression();
			this.state = 1689;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 197, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1684;
					this.multiplicativeOperator();
					this.state = 1685;
					localctx._right = this.powerExpression();
					}
					}
				}
				this.state = 1691;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 197, this._ctx);
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
		this.enterRule(localctx, 292, RegelSpraakParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1692;
			_la = this._input.LA(1);
			if(!(((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1027) !== 0))) {
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
		this.enterRule(localctx, 294, RegelSpraakParser.RULE_powerExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1694;
			localctx._left = this.primaryExpression(0);
			this.state = 1700;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1695;
					this.powerOperator();
					this.state = 1696;
					localctx._right = this.primaryExpression(0);
					}
					}
				}
				this.state = 1702;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
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
		this.enterRule(localctx, 296, RegelSpraakParser.RULE_powerOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1703;
			_la = this._input.LA(1);
			if(!(_la===143 || _la===286)) {
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
		let _startState: number = 298;
		this.enterRecursionRule(localctx, 298, RegelSpraakParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1968;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1706;
				this.match(RegelSpraakParser.MIN);
				this.state = 1707;
				this.primaryExpression(55);
				}
				break;
			case 2:
				{
				localctx = new UnaryMinusExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1708;
				this.match(RegelSpraakParser.MINUS);
				this.state = 1709;
				this.primaryExpression(54);
				}
				break;
			case 3:
				{
				localctx = new UnaryNietExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1710;
				this.match(RegelSpraakParser.NIET);
				this.state = 1711;
				this.primaryExpression(53);
				}
				break;
			case 4:
				{
				localctx = new AbsTijdsduurFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1712;
				this.match(RegelSpraakParser.DE_ABSOLUTE_TIJDSDUUR_VAN);
				this.state = 1713;
				this.primaryExpression(0);
				this.state = 1714;
				this.match(RegelSpraakParser.TOT);
				this.state = 1715;
				this.primaryExpression(0);
				this.state = 1718;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
				case 1:
					{
					this.state = 1716;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1717;
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
				this.state = 1720;
				this.match(RegelSpraakParser.TIJDSDUUR_VAN);
				this.state = 1721;
				this.primaryExpression(0);
				this.state = 1722;
				this.match(RegelSpraakParser.TOT);
				this.state = 1723;
				this.primaryExpression(0);
				this.state = 1726;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1724;
					this.match(RegelSpraakParser.IN_HELE);
					this.state = 1725;
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
				this.state = 1728;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1729;
				this.primaryExpression(0);
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===276) {
					{
					{
					this.state = 1730;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1731;
					this.primaryExpression(0);
					}
					}
					this.state = 1736;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1737;
				this.match(RegelSpraakParser.EN);
				this.state = 1738;
				this.primaryExpression(50);
				}
				break;
			case 7:
				{
				localctx = new SomAlleExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1740;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1741;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1742;
				this.naamwoord();
				}
				break;
			case 8:
				{
				localctx = new SomAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1743;
				this.match(RegelSpraakParser.SOM_VAN);
				this.state = 1744;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1745;
				this.attribuutReferentie();
				}
				break;
			case 9:
				{
				localctx = new AantalFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1749;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 213:
					{
					this.state = 1746;
					this.match(RegelSpraakParser.HET);
					this.state = 1747;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				case 186:
					{
					this.state = 1748;
					this.match(RegelSpraakParser.AANTAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1751;
				this.aggregationSubject();
				}
				break;
			case 10:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1752;
				this.match(RegelSpraakParser.HET);
				this.state = 1753;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1754;
				this.attribuutReferentie();
				}
				break;
			case 11:
				{
				localctx = new AantalAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1755;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1756;
				this.attribuutReferentie();
				}
				break;
			case 12:
				{
				localctx = new PercentageFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1763;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 266:
					{
					this.state = 1757;
					this.match(RegelSpraakParser.NUMBER);
					this.state = 1760;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 281:
						{
						this.state = 1758;
						this.match(RegelSpraakParser.PERCENT_SIGN);
						}
						break;
					case 265:
						{
						this.state = 1759;
						(localctx as PercentageFuncExprContext)._p = this.match(RegelSpraakParser.IDENTIFIER);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case 269:
					{
					this.state = 1762;
					this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1765;
				this.match(RegelSpraakParser.VAN);
				this.state = 1766;
				this.primaryExpression(44);
				}
				break;
			case 13:
				{
				localctx = new PercentageOfExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1767;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				this.state = 1768;
				this.match(RegelSpraakParser.VAN);
				this.state = 1769;
				this.primaryExpression(43);
				}
				break;
			case 14:
				{
				localctx = new ConcatenatieExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1770;
				this.match(RegelSpraakParser.CONCATENATIE_VAN);
				this.state = 1771;
				this.primaryExpression(0);
				this.state = 1776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===276) {
					{
					{
					this.state = 1772;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1773;
					this.primaryExpression(0);
					}
					}
					this.state = 1778;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1779;
				_la = this._input.LA(1);
				if(!(_la===212 || _la===225)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1780;
				this.primaryExpression(39);
				}
				break;
			case 15:
				{
				localctx = new WortelFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1782;
				this.match(RegelSpraakParser.DE_WORTEL_VAN);
				this.state = 1783;
				this.primaryExpression(37);
				}
				break;
			case 16:
				{
				localctx = new AbsValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1784;
				this.match(RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN);
				this.state = 1785;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1786;
				this.expressie();
				this.state = 1787;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 17:
				{
				localctx = new MinValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1789;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1790;
				this.primaryExpression(0);
				this.state = 1795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===276) {
					{
					{
					this.state = 1791;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1792;
					this.primaryExpression(0);
					}
					}
					this.state = 1797;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1798;
				this.match(RegelSpraakParser.EN);
				this.state = 1799;
				this.primaryExpression(35);
				}
				break;
			case 18:
				{
				localctx = new MinAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1801;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				this.state = 1802;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1803;
				this.attribuutReferentie();
				}
				break;
			case 19:
				{
				localctx = new MaxValFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1804;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1805;
				this.primaryExpression(0);
				this.state = 1810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===276) {
					{
					{
					this.state = 1806;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1807;
					this.primaryExpression(0);
					}
					}
					this.state = 1812;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1813;
				this.match(RegelSpraakParser.EN);
				this.state = 1814;
				this.primaryExpression(33);
				}
				break;
			case 20:
				{
				localctx = new MaxAlleAttribuutExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1816;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				this.state = 1817;
				this.match(RegelSpraakParser.ALLE);
				this.state = 1818;
				this.attribuutReferentie();
				}
				break;
			case 21:
				{
				localctx = new JaarUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1819;
				this.match(RegelSpraakParser.HET);
				this.state = 1820;
				this.match(RegelSpraakParser.JAAR);
				this.state = 1821;
				this.match(RegelSpraakParser.UIT);
				this.state = 1822;
				this.primaryExpression(31);
				}
				break;
			case 22:
				{
				localctx = new MaandUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1823;
				this.match(RegelSpraakParser.DE);
				this.state = 1824;
				this.match(RegelSpraakParser.MAAND);
				this.state = 1825;
				this.match(RegelSpraakParser.UIT);
				this.state = 1826;
				this.primaryExpression(30);
				}
				break;
			case 23:
				{
				localctx = new DagUitFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1827;
				this.match(RegelSpraakParser.DE);
				this.state = 1828;
				this.match(RegelSpraakParser.DAG);
				this.state = 1829;
				this.match(RegelSpraakParser.UIT);
				this.state = 1830;
				this.primaryExpression(29);
				}
				break;
			case 24:
				{
				localctx = new DatumMetFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1831;
				this.match(RegelSpraakParser.DE_DATUM_MET);
				this.state = 1832;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1833;
				this.primaryExpression(0);
				this.state = 1834;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1835;
				this.primaryExpression(0);
				this.state = 1836;
				this.match(RegelSpraakParser.COMMA);
				this.state = 1837;
				this.primaryExpression(0);
				this.state = 1838;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 25:
				{
				localctx = new PasenFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1840;
				this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
				this.state = 1841;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1842;
				this.primaryExpression(0);
				this.state = 1843;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			case 26:
				{
				localctx = new DateCalcExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1845;
				this.datumExpressie();
				this.state = 1846;
				_la = this._input.LA(1);
				if(!(_la===133 || _la===139)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1847;
				this.primaryExpression(0);
				this.state = 1848;
				this.timeUnit();
				}
				break;
			case 27:
				{
				localctx = new EersteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1850;
				this.match(RegelSpraakParser.EERSTE_VAN);
				this.state = 1851;
				this.primaryExpression(0);
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===276) {
					{
					{
					this.state = 1852;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1853;
					this.primaryExpression(0);
					}
					}
					this.state = 1858;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1859;
				this.match(RegelSpraakParser.EN);
				this.state = 1860;
				this.primaryExpression(25);
				}
				break;
			case 28:
				{
				localctx = new LaatsteDatumFuncExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1862;
				this.match(RegelSpraakParser.LAATSTE_VAN);
				this.state = 1863;
				this.primaryExpression(0);
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===276) {
					{
					{
					this.state = 1864;
					this.match(RegelSpraakParser.COMMA);
					this.state = 1865;
					this.primaryExpression(0);
					}
					}
					this.state = 1870;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1871;
				this.match(RegelSpraakParser.EN);
				this.state = 1872;
				this.primaryExpression(24);
				}
				break;
			case 29:
				{
				localctx = new TotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1874;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1875;
				this.expressie();
				this.state = 1877;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
				case 1:
					{
					this.state = 1876;
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
				this.state = 1879;
				this.match(RegelSpraakParser.HET);
				this.state = 1880;
				this.match(RegelSpraakParser.AANTAL);
				this.state = 1881;
				this.match(RegelSpraakParser.DAGEN);
				this.state = 1882;
				this.match(RegelSpraakParser.IN);
				this.state = 1891;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 208:
				case 220:
					{
					this.state = 1884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===208) {
						{
						this.state = 1883;
						this.match(RegelSpraakParser.DE);
						}
					}

					this.state = 1886;
					this.match(RegelSpraakParser.MAAND);
					}
					break;
				case 213:
				case 217:
					{
					this.state = 1888;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===213) {
						{
						this.state = 1887;
						this.match(RegelSpraakParser.HET);
						}
					}

					this.state = 1890;
					this.match(RegelSpraakParser.JAAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1893;
				this.match(RegelSpraakParser.DAT);
				this.state = 1894;
				this.expressie();
				}
				break;
			case 31:
				{
				localctx = new CapitalizedTotaalVanExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1895;
					this.identifier();
					}
					}
					this.state = 1898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===265);
				this.state = 1900;
				this.match(RegelSpraakParser.HET_TOTAAL_VAN);
				this.state = 1901;
				this.expressie();
				this.state = 1903;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
				case 1:
					{
					this.state = 1902;
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
				this.state = 1905;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 1906;
				_la = this._input.LA(1);
				if(!(_la===217 || _la===220)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1907;
				this.match(RegelSpraakParser.VAN);
				this.state = 1908;
				this.expressie();
				this.state = 1910;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1909;
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
				this.state = 1913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1912;
					this.identifier();
					}
					}
					this.state = 1915;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===265);
				this.state = 1917;
				this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
				this.state = 1918;
				_la = this._input.LA(1);
				if(!(_la===217 || _la===220)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1919;
				this.match(RegelSpraakParser.VAN);
				this.state = 1920;
				this.expressie();
				this.state = 1922;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
				case 1:
					{
					this.state = 1921;
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
				this.state = 1926;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 186:
				case 191:
				case 213:
					{
					this.state = 1924;
					this.getalAggregatieFunctie();
					}
					break;
				case 187:
				case 189:
					{
					this.state = 1925;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1928;
				this.attribuutMetLidwoord();
				this.state = 1929;
				this.dimensieSelectie();
				}
				break;
			case 35:
				{
				localctx = new DimensieRangeAggExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1933;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 186:
				case 191:
				case 213:
					{
					this.state = 1931;
					this.getalAggregatieFunctie();
					}
					break;
				case 187:
				case 189:
					{
					this.state = 1932;
					this.datumAggregatieFunctie();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1937;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1935;
					this.bezieldeReferentie();
					}
					break;
				case 2:
					{
					this.state = 1936;
					this.attribuutReferentie();
					}
					break;
				}
				this.state = 1939;
				this.match(RegelSpraakParser.VANAF);
				this.state = 1940;
				this.naamwoord();
				this.state = 1941;
				this.match(RegelSpraakParser.TM);
				this.state = 1942;
				this.naamwoord();
				this.state = 1944;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
				case 1:
					{
					this.state = 1943;
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
				this.state = 1946;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 1948;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
				case 1:
					{
					this.state = 1947;
					this.unitIdentifier();
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
				this.state = 1950;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 38:
				{
				localctx = new IdentifierExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1951;
				this.identifier();
				}
				break;
			case 39:
				{
				localctx = new BezieldeRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1952;
				this.bezieldeReferentie();
				}
				break;
			case 40:
				{
				localctx = new AttrRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1953;
				this.attribuutReferentie();
				}
				break;
			case 41:
				{
				localctx = new OnderwerpRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1954;
				this.onderwerpReferentie();
				}
				break;
			case 42:
				{
				localctx = new NaamwoordExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1955;
				this.naamwoord();
				}
				break;
			case 43:
				{
				localctx = new ParamRefExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1956;
				this.parameterMetLidwoord();
				}
				break;
			case 44:
				{
				localctx = new PercentageLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1957;
				this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
				}
				break;
			case 45:
				{
				localctx = new StringLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1958;
				this.match(RegelSpraakParser.STRING_LITERAL);
				}
				break;
			case 46:
				{
				localctx = new EnumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1959;
				this.match(RegelSpraakParser.ENUM_LITERAL);
				}
				break;
			case 47:
				{
				localctx = new DatumLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1960;
				this.datumLiteral();
				}
				break;
			case 48:
				{
				localctx = new BooleanTrueLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1961;
				this.match(RegelSpraakParser.WAAR);
				}
				break;
			case 49:
				{
				localctx = new BooleanFalseLiteralExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1962;
				this.match(RegelSpraakParser.ONWAAR);
				}
				break;
			case 50:
				{
				localctx = new PronounExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1963;
				this.match(RegelSpraakParser.HIJ);
				}
				break;
			case 51:
				{
				localctx = new ParenExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1964;
				this.match(RegelSpraakParser.LPAREN);
				this.state = 1965;
				this.expressie();
				this.state = 1966;
				this.match(RegelSpraakParser.RPAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1992;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1990;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
					case 1:
						{
						localctx = new SimpleConcatenatieExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 1970;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 1973;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 1971;
							this.match(RegelSpraakParser.COMMA);
							this.state = 1972;
							this.primaryExpression(0);
							}
							}
							this.state = 1975;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la===276);
						this.state = 1977;
						_la = this._input.LA(1);
						if(!(_la===212 || _la===225)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1978;
						this.primaryExpression(39);
						}
						break;
					case 2:
						{
						localctx = new AfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 1980;
						if (!(this.precpred(this._ctx, 42))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
						}
						this.state = 1981;
						this.afronding();
						}
						break;
					case 3:
						{
						localctx = new BegrenzingAfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 1982;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 1983;
						this.match(RegelSpraakParser.COMMA);
						this.state = 1984;
						this.begrenzing();
						this.state = 1985;
						this.afronding();
						}
						break;
					case 4:
						{
						localctx = new BegrenzingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
						this.state = 1987;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 1988;
						this.match(RegelSpraakParser.COMMA);
						this.state = 1989;
						this.begrenzing();
						}
						break;
					}
					}
				}
				this.state = 1994;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
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
		this.enterRule(localctx, 300, RegelSpraakParser.RULE_afronding);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1995;
			_la = this._input.LA(1);
			if(!(((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 131267) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1996;
			this.match(RegelSpraakParser.AFGEROND_OP);
			this.state = 1997;
			this.match(RegelSpraakParser.NUMBER);
			this.state = 1998;
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
		this.enterRule(localctx, 302, RegelSpraakParser.RULE_begrenzing);
		try {
			this.state = 2006;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2000;
				this.begrenzingMinimum();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2001;
				this.begrenzingMaximum();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2002;
				this.begrenzingMinimum();
				this.state = 2003;
				this.match(RegelSpraakParser.EN);
				this.state = 2004;
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
		this.enterRule(localctx, 304, RegelSpraakParser.RULE_begrenzingMinimum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2008;
			this.match(RegelSpraakParser.MET_EEN_MINIMUM_VAN);
			this.state = 2009;
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
		this.enterRule(localctx, 306, RegelSpraakParser.RULE_begrenzingMaximum);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2011;
			this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
			this.state = 2012;
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
		this.enterRule(localctx, 308, RegelSpraakParser.RULE_conditieBijExpressie);
		try {
			this.state = 2017;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2014;
				this.match(RegelSpraakParser.GEDURENDE_DE_TIJD_DAT);
				this.state = 2015;
				localctx._condition = this.expressie();
				}
				break;
			case 142:
			case 144:
			case 146:
			case 240:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2016;
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
		this.enterRule(localctx, 310, RegelSpraakParser.RULE_periodevergelijkingElementair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2019;
			this.match(RegelSpraakParser.HET_IS_DE_PERIODE);
			this.state = 2020;
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
		this.enterRule(localctx, 312, RegelSpraakParser.RULE_periodevergelijkingEnkelvoudig);
		try {
			this.state = 2038;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2022;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2023;
				this.datumExpressie();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2024;
				this.match(RegelSpraakParser.VAN);
				this.state = 2025;
				this.datumExpressie();
				this.state = 2026;
				this.match(RegelSpraakParser.TOT);
				this.state = 2027;
				this.datumExpressie();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2029;
				this.match(RegelSpraakParser.VAN);
				this.state = 2030;
				this.datumExpressie();
				this.state = 2031;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2032;
				this.datumExpressie();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2034;
				this.match(RegelSpraakParser.TOT);
				this.state = 2035;
				this.datumExpressie();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2036;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2037;
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
		this.enterRule(localctx, 314, RegelSpraakParser.RULE_periodeDefinitie);
		try {
			this.state = 2056;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				localctx = new VanafPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2040;
				this.match(RegelSpraakParser.VANAF);
				this.state = 2041;
				this.dateExpression();
				}
				break;
			case 2:
				localctx = new TotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2042;
				this.match(RegelSpraakParser.TOT);
				this.state = 2043;
				this.dateExpression();
				}
				break;
			case 3:
				localctx = new TotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2044;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2045;
				this.dateExpression();
				}
				break;
			case 4:
				localctx = new VanTotPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2046;
				this.match(RegelSpraakParser.VAN);
				this.state = 2047;
				this.dateExpression();
				this.state = 2048;
				this.match(RegelSpraakParser.TOT);
				this.state = 2049;
				this.dateExpression();
				}
				break;
			case 5:
				localctx = new VanTotEnMetPeriodeContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2051;
				this.match(RegelSpraakParser.VAN);
				this.state = 2052;
				this.dateExpression();
				this.state = 2053;
				this.match(RegelSpraakParser.TOT_EN_MET);
				this.state = 2054;
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
		this.enterRule(localctx, 316, RegelSpraakParser.RULE_dateExpression);
		try {
			this.state = 2062;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 268:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2058;
				this.datumLiteral();
				}
				break;
			case 231:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2059;
				this.match(RegelSpraakParser.REKENDATUM);
				}
				break;
			case 232:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2060;
				this.match(RegelSpraakParser.REKENJAAR);
				}
				break;
			case 41:
			case 92:
			case 106:
			case 115:
			case 120:
			case 128:
			case 136:
			case 157:
			case 186:
			case 197:
			case 198:
			case 201:
			case 202:
			case 205:
			case 206:
			case 208:
			case 211:
			case 213:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 228:
			case 230:
			case 234:
			case 235:
			case 238:
			case 239:
			case 246:
			case 247:
			case 249:
			case 265:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2061;
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
		this.enterRule(localctx, 318, RegelSpraakParser.RULE_getalAggregatieFunctie);
		try {
			this.state = 2070;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 213:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2064;
				this.match(RegelSpraakParser.HET);
				this.state = 2065;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 186:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2066;
				this.match(RegelSpraakParser.AANTAL);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2067;
				this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2068;
				this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
				}
				break;
			case 191:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2069;
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
		this.enterRule(localctx, 320, RegelSpraakParser.RULE_datumAggregatieFunctie);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2072;
			_la = this._input.LA(1);
			if(!(_la===187 || _la===189)) {
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
		this.enterRule(localctx, 322, RegelSpraakParser.RULE_dimensieSelectie);
		try {
			this.state = 2084;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 229:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2074;
				this.match(RegelSpraakParser.OVER);
				this.state = 2078;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 2075;
					this.aggregerenOverAlleDimensies();
					}
					break;
				case 2:
					{
					this.state = 2076;
					this.aggregerenOverVerzameling();
					}
					break;
				case 3:
					{
					this.state = 2077;
					this.aggregerenOverBereik();
					}
					break;
				}
				this.state = 2080;
				this.match(RegelSpraakParser.DOT);
				}
				break;
			case 240:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2082;
				this.match(RegelSpraakParser.VAN);
				this.state = 2083;
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
		this.enterRule(localctx, 324, RegelSpraakParser.RULE_aggregerenOverAlleDimensies);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2086;
			this.match(RegelSpraakParser.ALLE);
			this.state = 2087;
			this.naamwoord();
			this.state = 2090;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				this.state = 2088;
				_la = this._input.LA(1);
				if(!(_la===207 || _la===210)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2089;
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
		this.enterRule(localctx, 326, RegelSpraakParser.RULE_aggregerenOverVerzameling);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2092;
			this.match(RegelSpraakParser.DE);
			this.state = 2093;
			this.naamwoord();
			this.state = 2094;
			this.match(RegelSpraakParser.VANAF);
			this.state = 2095;
			this.naamwoord();
			this.state = 2096;
			this.match(RegelSpraakParser.TM);
			this.state = 2097;
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
		this.enterRule(localctx, 328, RegelSpraakParser.RULE_aggregerenOverBereik);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2099;
			this.match(RegelSpraakParser.DE);
			this.state = 2100;
			this.naamwoord();
			this.state = 2101;
			this.match(RegelSpraakParser.IN);
			this.state = 2102;
			this.match(RegelSpraakParser.LBRACE);
			this.state = 2103;
			this.naamwoord();
			this.state = 2108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===276) {
				{
				{
				this.state = 2104;
				this.match(RegelSpraakParser.COMMA);
				this.state = 2105;
				this.naamwoord();
				}
				}
				this.state = 2110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2111;
			this.match(RegelSpraakParser.EN);
			this.state = 2112;
			this.naamwoord();
			this.state = 2113;
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
		this.enterRule(localctx, 330, RegelSpraakParser.RULE_unaryCondition);
		let _la: number;
		try {
			this.state = 2141;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				localctx = new UnaryCheckConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2115;
				(localctx as UnaryCheckConditionContext)._expr = this.primaryExpression(0);
				this.state = 2116;
				(localctx as UnaryCheckConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 61455) !== 0))) {
				    (localctx as UnaryCheckConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				localctx = new UnaryNumeriekExactConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2118;
				(localctx as UnaryNumeriekExactConditionContext)._expr = this.primaryExpression(0);
				this.state = 2119;
				(localctx as UnaryNumeriekExactConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 15) !== 0))) {
				    (localctx as UnaryNumeriekExactConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2120;
				this.match(RegelSpraakParser.NUMBER);
				this.state = 2121;
				this.match(RegelSpraakParser.CIJFERS);
				}
				break;
			case 3:
				localctx = new UnaryDagsoortConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2123;
				(localctx as UnaryDagsoortConditionContext)._expr = this.primaryExpression(0);
				this.state = 2124;
				(localctx as UnaryDagsoortConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 15) !== 0))) {
				    (localctx as UnaryDagsoortConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2125;
				(localctx as UnaryDagsoortConditionContext)._dagsoort = this.identifier();
				}
				break;
			case 4:
				localctx = new UnaryKenmerkConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2127;
				(localctx as UnaryKenmerkConditionContext)._expr = this.primaryExpression(0);
				this.state = 2128;
				(localctx as UnaryKenmerkConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 85) !== 0))) {
				    (localctx as UnaryKenmerkConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2129;
				(localctx as UnaryKenmerkConditionContext)._kenmerk = this.identifier();
				}
				break;
			case 5:
				localctx = new UnaryRolConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2131;
				(localctx as UnaryRolConditionContext)._expr = this.primaryExpression(0);
				this.state = 2132;
				(localctx as UnaryRolConditionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 85) !== 0))) {
				    (localctx as UnaryRolConditionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2133;
				(localctx as UnaryRolConditionContext)._rol = this.identifier();
				}
				break;
			case 6:
				localctx = new UnaryUniekConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2135;
				(localctx as UnaryUniekConditionContext)._ref = this.onderwerpReferentie();
				this.state = 2136;
				this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
				}
				break;
			case 7:
				localctx = new UnaryInconsistentDataConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2138;
				(localctx as UnaryInconsistentDataConditionContext)._expr = this.primaryExpression(0);
				this.state = 2139;
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
		this.enterRule(localctx, 332, RegelSpraakParser.RULE_regelStatusCondition);
		try {
			this.state = 2151;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				localctx = new RegelStatusGevuurdCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2143;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2144;
				(localctx as RegelStatusGevuurdCheckContext)._name = this.naamwoord();
				this.state = 2145;
				this.match(RegelSpraakParser.IS_GEVUURD);
				}
				break;
			case 2:
				localctx = new RegelStatusInconsistentCheckContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2147;
				this.match(RegelSpraakParser.REGELVERSIE);
				this.state = 2148;
				(localctx as RegelStatusInconsistentCheckContext)._name = this.naamwoord();
				this.state = 2149;
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
	public subordinateClauseExpression(): SubordinateClauseExpressionContext {
		let localctx: SubordinateClauseExpressionContext = new SubordinateClauseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, RegelSpraakParser.RULE_subordinateClauseExpression);
		try {
			this.state = 2165;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				localctx = new SubordinateHasExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2153;
				(localctx as SubordinateHasExprContext)._subject = this.onderwerpReferentie();
				this.state = 2154;
				(localctx as SubordinateHasExprContext)._object = this.naamwoordWithNumbers();
				this.state = 2155;
				(localctx as SubordinateHasExprContext)._verb = this.match(RegelSpraakParser.HEEFT);
				}
				break;
			case 2:
				localctx = new SubordinateIsWithExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2157;
				(localctx as SubordinateIsWithExprContext)._subject = this.onderwerpReferentie();
				this.state = 2158;
				(localctx as SubordinateIsWithExprContext)._prepPhrase = this.naamwoordWithNumbers();
				this.state = 2159;
				(localctx as SubordinateIsWithExprContext)._verb = this.match(RegelSpraakParser.IS);
				}
				break;
			case 3:
				localctx = new SubordinateIsKenmerkExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2161;
				(localctx as SubordinateIsKenmerkExprContext)._subject = this.onderwerpReferentie();
				this.state = 2162;
				(localctx as SubordinateIsKenmerkExprContext)._verb = this.match(RegelSpraakParser.IS);
				this.state = 2163;
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
		this.enterRule(localctx, 336, RegelSpraakParser.RULE_dagsoortDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2167;
			this.match(RegelSpraakParser.DAGSOORT);
			this.state = 2168;
			this.naamwoord();
			this.state = 2176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===174) {
				{
				this.state = 2169;
				this.match(RegelSpraakParser.MV_START);
				this.state = 2171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2170;
					localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
					localctx._plural.push(localctx._IDENTIFIER);
					}
					}
					this.state = 2173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===265);
				this.state = 2175;
				this.match(RegelSpraakParser.RPAREN);
				}
			}

			this.state = 2179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===279) {
				{
				this.state = 2178;
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
		this.enterRule(localctx, 338, RegelSpraakParser.RULE_tekstreeksExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2181;
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
		this.enterRule(localctx, 340, RegelSpraakParser.RULE_verdelingResultaat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2183;
			localctx._sourceAmount = this.expressie();
			this.state = 2184;
			this.match(RegelSpraakParser.WORDT_VERDEELD_OVER);
			this.state = 2185;
			localctx._targetCollection = this.expressie();
			this.state = 2186;
			this.match(RegelSpraakParser.COMMA);
			this.state = 2187;
			this.match(RegelSpraakParser.WAARBIJ_WORDT_VERDEELD);
			this.state = 2190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 33:
			case 34:
			case 35:
			case 119:
			case 194:
				{
				this.state = 2188;
				this.verdelingMethodeSimple();
				}
				break;
			case 278:
				{
				this.state = 2189;
				this.verdelingMethodeMultiLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2192;
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
		this.enterRule(localctx, 342, RegelSpraakParser.RULE_verdelingMethodeSimple);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2195;
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
		this.enterRule(localctx, 344, RegelSpraakParser.RULE_verdelingMethodeMultiLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2197;
			this.match(RegelSpraakParser.COLON);
			this.state = 2198;
			this.verdelingMethodeBulletList();
			this.state = 2200;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				{
				this.state = 2199;
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
		this.enterRule(localctx, 346, RegelSpraakParser.RULE_verdelingMethodeBulletList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2202;
			this.verdelingMethodeBullet();
			this.state = 2206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===291) {
				{
				{
				this.state = 2203;
				this.verdelingMethodeBullet();
				}
				}
				this.state = 2208;
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
		this.enterRule(localctx, 348, RegelSpraakParser.RULE_verdelingMethodeBullet);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2209;
			this.match(RegelSpraakParser.MINUS);
			this.state = 2210;
			this.verdelingMethode();
			this.state = 2212;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				{
				this.state = 2211;
				_la = this._input.LA(1);
				if(!(_la===276 || _la===277)) {
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
		this.enterRule(localctx, 350, RegelSpraakParser.RULE_verdelingMethode);
		let _la: number;
		try {
			this.state = 2228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 194:
				localctx = new VerdelingGelijkeDelenContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2214;
				this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
				}
				break;
			case 35:
				localctx = new VerdelingNaarRatoContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2215;
				this.match(RegelSpraakParser.NAAR_RATO_VAN);
				this.state = 2216;
				(localctx as VerdelingNaarRatoContext)._ratioExpression = this.expressie();
				}
				break;
			case 34:
				localctx = new VerdelingOpVolgordeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2217;
				this.match(RegelSpraakParser.OP_VOLGORDE_VAN);
				this.state = 2218;
				(localctx as VerdelingOpVolgordeContext)._orderDirection = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===193 || _la===196)) {
				    (localctx as VerdelingOpVolgordeContext)._orderDirection = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2219;
				(localctx as VerdelingOpVolgordeContext)._orderExpression = this.expressie();
				}
				break;
			case 33:
				localctx = new VerdelingTieBreakContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2220;
				this.match(RegelSpraakParser.BIJ_EVEN_GROOT_CRITERIUM);
				this.state = 2221;
				(localctx as VerdelingTieBreakContext)._tieBreakMethod = this.verdelingMethode();
				}
				break;
			case 21:
				localctx = new VerdelingMaximumContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2222;
				this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
				this.state = 2223;
				(localctx as VerdelingMaximumContext)._maxExpression = this.attribuutMetLidwoord();
				}
				break;
			case 119:
				localctx = new VerdelingAfrondingContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2224;
				this.match(RegelSpraakParser.AFGEROND_OP);
				this.state = 2225;
				(localctx as VerdelingAfrondingContext)._decimals = this.match(RegelSpraakParser.NUMBER);
				this.state = 2226;
				this.match(RegelSpraakParser.DECIMALEN);
				this.state = 2227;
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
		this.enterRule(localctx, 352, RegelSpraakParser.RULE_verdelingRest);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2230;
			this.match(RegelSpraakParser.ALS_ONVERDEELDE_REST_BLIJFT);
			this.state = 2231;
			localctx._remainderTarget = this.expressie();
			this.state = 2233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===195) {
				{
				this.state = 2232;
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
		case 149:
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

	public static readonly _serializedATN: number[] = [4,1,293,2236,2,0,7,0,
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
	7,175,2,176,7,176,1,0,1,0,1,0,1,0,1,0,1,0,5,0,361,8,0,10,0,12,0,364,9,0,
	1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,374,8,1,1,2,1,2,1,2,3,2,379,8,2,1,2,
	1,2,1,3,1,3,1,3,4,3,386,8,3,11,3,12,3,387,1,4,1,4,3,4,392,8,4,1,4,1,4,1,
	4,5,4,397,8,4,10,4,12,4,400,9,4,1,4,3,4,403,8,4,1,5,3,5,406,8,5,1,5,4,5,
	409,8,5,11,5,12,5,410,1,5,3,5,414,8,5,4,5,416,8,5,11,5,12,5,417,1,5,5,5,
	421,8,5,10,5,12,5,424,9,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,432,8,6,10,6,12,6,
	435,9,6,1,6,3,6,438,8,6,1,7,1,7,3,7,442,8,7,1,8,4,8,445,8,8,11,8,12,8,446,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,458,8,9,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,3,10,468,8,10,1,10,1,10,1,10,1,10,3,10,474,8,10,1,11,1,11,
	1,11,3,11,479,8,11,1,12,1,12,1,12,1,12,5,12,485,8,12,10,12,12,12,488,9,
	12,1,13,3,13,491,8,13,1,13,4,13,494,8,13,11,13,12,13,495,1,14,4,14,499,
	8,14,11,14,12,14,500,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,3,19,
	512,8,19,1,19,4,19,515,8,19,11,19,12,19,516,1,19,4,19,520,8,19,11,19,12,
	19,521,1,19,1,19,4,19,526,8,19,11,19,12,19,527,1,19,1,19,4,19,532,8,19,
	11,19,12,19,533,1,19,1,19,4,19,538,8,19,11,19,12,19,539,1,19,4,19,543,8,
	19,11,19,12,19,544,1,19,1,19,4,19,549,8,19,11,19,12,19,550,1,19,1,19,4,
	19,555,8,19,11,19,12,19,556,1,19,1,19,1,19,1,19,1,19,4,19,564,8,19,11,19,
	12,19,565,3,19,568,8,19,1,20,3,20,571,8,20,1,20,4,20,574,8,20,11,20,12,
	20,575,1,20,4,20,579,8,20,11,20,12,20,580,1,20,1,20,4,20,585,8,20,11,20,
	12,20,586,1,20,1,20,4,20,591,8,20,11,20,12,20,592,1,20,1,20,4,20,597,8,
	20,11,20,12,20,598,1,20,4,20,602,8,20,11,20,12,20,603,1,20,1,20,4,20,608,
	8,20,11,20,12,20,609,1,20,1,20,4,20,614,8,20,11,20,12,20,615,1,20,1,20,
	1,20,1,20,1,20,4,20,623,8,20,11,20,12,20,624,3,20,627,8,20,1,21,1,21,3,
	21,631,8,21,1,22,3,22,634,8,22,1,22,4,22,637,8,22,11,22,12,22,638,1,22,
	4,22,642,8,22,11,22,12,22,643,1,22,1,22,4,22,648,8,22,11,22,12,22,649,1,
	22,1,22,4,22,654,8,22,11,22,12,22,655,1,22,1,22,4,22,660,8,22,11,22,12,
	22,661,1,22,4,22,665,8,22,11,22,12,22,666,1,22,1,22,4,22,671,8,22,11,22,
	12,22,672,1,22,1,22,4,22,677,8,22,11,22,12,22,678,3,22,681,8,22,1,23,1,
	23,1,23,1,23,5,23,687,8,23,10,23,12,23,690,9,23,1,24,1,24,1,24,1,24,5,24,
	696,8,24,10,24,12,24,699,9,24,1,25,1,25,1,25,1,25,5,25,705,8,25,10,25,12,
	25,708,9,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,
	4,30,722,8,30,11,30,12,30,723,1,30,3,30,727,8,30,1,30,3,30,730,8,30,1,30,
	5,30,733,8,30,10,30,12,30,736,9,30,1,31,1,31,3,31,740,8,31,1,31,1,31,1,
	32,3,32,745,8,32,1,32,1,32,3,32,749,8,32,1,32,1,32,3,32,753,8,32,1,32,3,
	32,756,8,32,1,33,1,33,1,33,1,33,3,33,762,8,33,1,33,1,33,3,33,766,8,33,1,
	33,1,33,1,33,1,33,5,33,772,8,33,10,33,12,33,775,9,33,3,33,777,8,33,1,33,
	3,33,780,8,33,1,34,1,34,1,34,1,34,1,34,1,34,3,34,788,8,34,1,35,1,35,1,35,
	1,35,1,35,3,35,795,8,35,1,36,1,36,1,36,1,36,1,36,3,36,802,8,36,1,37,1,37,
	1,38,1,38,1,38,1,38,1,38,3,38,811,8,38,1,39,1,39,1,40,1,40,1,41,3,41,818,
	8,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,826,8,41,1,42,1,42,1,42,1,42,1,
	42,1,42,3,42,834,8,42,1,42,3,42,837,8,42,1,43,1,43,1,43,1,43,1,43,3,43,
	844,8,43,1,44,1,44,4,44,848,8,44,11,44,12,44,849,1,45,1,45,1,46,1,46,1,
	47,1,47,1,47,5,47,859,8,47,10,47,12,47,862,9,47,1,48,1,48,1,48,1,48,1,48,
	1,48,3,48,870,8,48,1,48,1,48,3,48,874,8,48,1,48,1,48,3,48,878,8,48,1,48,
	1,48,3,48,882,8,48,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
	50,1,50,3,50,896,8,50,1,51,1,51,1,51,3,51,901,8,51,1,51,1,51,1,51,1,51,
	3,51,907,8,51,1,52,1,52,1,52,3,52,912,8,52,1,53,1,53,1,53,3,53,917,8,53,
	1,53,1,53,1,53,1,53,4,53,923,8,53,11,53,12,53,924,1,54,1,54,1,54,1,54,3,
	54,931,8,54,1,54,3,54,934,8,54,1,55,1,55,1,55,1,55,1,56,1,56,1,57,1,57,
	1,58,1,58,1,58,1,58,1,58,3,58,949,8,58,1,58,1,58,3,58,953,8,58,1,58,1,58,
	3,58,957,8,58,1,58,3,58,960,8,58,1,59,3,59,963,8,59,1,59,1,59,1,59,1,59,
	5,59,969,8,59,10,59,12,59,972,9,59,1,60,1,60,5,60,976,8,60,10,60,12,60,
	979,9,60,1,61,3,61,982,8,61,1,61,1,61,1,61,1,61,5,61,988,8,61,10,61,12,
	61,991,9,61,1,61,3,61,994,8,61,1,62,1,62,1,62,1,62,4,62,1000,8,62,11,62,
	12,62,1001,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,1011,8,62,1,63,1,63,
	1,63,1,63,1,63,1,63,3,63,1019,8,63,1,63,1,63,4,63,1023,8,63,11,63,12,63,
	1024,1,64,1,64,4,64,1029,8,64,11,64,12,64,1030,1,65,4,65,1034,8,65,11,65,
	12,65,1035,1,66,1,66,1,67,1,67,1,67,3,67,1043,8,67,1,67,4,67,1046,8,67,
	11,67,12,67,1047,1,68,1,68,1,68,1,68,3,68,1054,8,68,1,68,3,68,1057,8,68,
	1,68,3,68,1060,8,68,1,69,1,69,1,69,3,69,1065,8,69,1,69,1,69,4,69,1069,8,
	69,11,69,12,69,1070,1,70,1,70,5,70,1075,8,70,10,70,12,70,1078,9,70,1,71,
	1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,1094,
	8,71,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,3,73,1104,8,73,1,73,1,73,3,
	73,1108,8,73,1,74,1,74,3,74,1112,8,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
	1,75,1,75,1,75,1,75,1,75,3,75,1126,8,75,1,75,3,75,1129,8,75,1,75,1,75,1,
	75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
	1,75,1,75,1,75,3,75,1151,8,75,1,75,3,75,1154,8,75,1,76,1,76,1,77,1,77,1,
	77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,78,4,78,1171,8,78,11,
	78,12,78,1172,1,79,4,79,1176,8,79,11,79,12,79,1177,1,80,1,80,1,80,1,80,
	1,80,3,80,1185,8,80,1,81,1,81,3,81,1189,8,81,1,82,1,82,1,83,1,83,1,83,1,
	83,1,83,3,83,1198,8,83,1,83,3,83,1201,8,83,1,84,1,84,1,84,1,84,5,84,1207,
	8,84,10,84,12,84,1210,9,84,1,84,1,84,3,84,1214,8,84,1,85,1,85,1,85,1,85,
	1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,3,87,1228,8,87,1,87,3,87,1231,8,
	87,3,87,1233,8,87,1,88,1,88,1,88,3,88,1238,8,88,1,89,1,89,1,89,1,89,1,89,
	1,89,1,90,3,90,1247,8,90,1,90,1,90,1,90,1,91,1,91,1,91,3,91,1255,8,91,1,
	92,1,92,1,92,1,92,1,92,1,92,4,92,1263,8,92,11,92,12,92,1264,1,92,1,92,1,
	92,1,92,3,92,1271,8,92,1,92,1,92,1,92,1,92,1,92,1,92,4,92,1279,8,92,11,
	92,12,92,1280,1,92,1,92,1,92,1,92,3,92,1287,8,92,1,92,1,92,1,92,1,92,1,
	92,1,92,4,92,1295,8,92,11,92,12,92,1296,3,92,1299,8,92,1,93,1,93,1,93,1,
	93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,3,93,1316,8,93,
	1,94,1,94,1,94,3,94,1321,8,94,1,95,1,95,1,96,1,96,1,96,3,96,1328,8,96,1,
	97,4,97,1331,8,97,11,97,12,97,1332,1,98,1,98,1,99,1,99,1,99,3,99,1340,8,
	99,1,99,1,99,1,99,1,99,1,99,1,99,4,99,1348,8,99,11,99,12,99,1349,1,100,
	1,100,1,100,3,100,1355,8,100,1,101,1,101,1,101,3,101,1360,8,101,1,102,1,
	102,1,102,3,102,1365,8,102,1,103,1,103,1,103,1,103,5,103,1371,8,103,10,
	103,12,103,1374,9,103,1,104,1,104,1,104,1,104,5,104,1380,8,104,10,104,12,
	104,1383,9,104,1,105,1,105,4,105,1387,8,105,11,105,12,105,1388,1,105,3,
	105,1392,8,105,1,106,1,106,4,106,1396,8,106,11,106,12,106,1397,1,106,3,
	106,1401,8,106,1,107,1,107,1,107,1,107,1,108,1,108,1,109,3,109,1410,8,109,
	1,109,1,109,1,110,3,110,1415,8,110,1,110,3,110,1418,8,110,1,110,4,110,1421,
	8,110,11,110,12,110,1422,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,
	3,112,1433,8,112,3,112,1435,8,112,1,113,1,113,3,113,1439,8,113,1,114,1,
	114,1,114,1,114,1,114,3,114,1446,8,114,1,115,1,115,1,116,3,116,1451,8,116,
	1,116,1,116,3,116,1455,8,116,1,116,1,116,1,117,1,117,1,118,3,118,1462,8,
	118,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,120,1,120,1,120,1,
	121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,4,122,1484,8,122,11,
	122,12,122,1485,1,123,1,123,1,123,1,123,1,123,1,123,3,123,1494,8,123,1,
	124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,
	125,3,125,1509,8,125,1,126,1,126,1,126,1,126,3,126,1515,8,126,1,126,1,126,
	1,126,1,126,1,126,4,126,1522,8,126,11,126,12,126,1523,1,127,1,127,1,128,
	1,128,1,129,1,129,1,130,1,130,1,131,1,131,1,132,1,132,1,132,1,132,1,132,
	1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,
	1,132,1,132,1,132,1,132,1,132,1,132,1,132,3,132,1560,8,132,1,133,1,133,
	5,133,1564,8,133,10,133,12,133,1567,9,133,1,133,1,133,1,134,3,134,1572,
	8,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,3,135,1581,8,135,1,135,
	1,135,5,135,1585,8,135,10,135,12,135,1588,9,135,1,136,1,136,1,136,1,136,
	1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,3,136,1603,8,136,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,3,137,1618,8,137,1,138,1,138,1,138,3,138,1623,8,138,1,139,1,139,1,
	139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,
	139,5,139,1640,8,139,10,139,12,139,1643,9,139,1,139,1,139,1,139,1,139,1,
	139,1,139,1,139,3,139,1652,8,139,1,139,1,139,3,139,1656,8,139,1,140,1,140,
	1,140,1,140,3,140,1662,8,140,1,140,1,140,1,140,3,140,1667,8,140,1,141,1,
	141,1,142,1,142,1,143,1,143,1,143,1,143,5,143,1677,8,143,10,143,12,143,
	1680,9,143,1,144,1,144,1,145,1,145,1,145,1,145,5,145,1688,8,145,10,145,
	12,145,1691,9,145,1,146,1,146,1,147,1,147,1,147,1,147,5,147,1699,8,147,
	10,147,12,147,1702,9,147,1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,
	1,149,1,149,1,149,1,149,1,149,1,149,1,149,3,149,1719,8,149,1,149,1,149,
	1,149,1,149,1,149,1,149,3,149,1727,8,149,1,149,1,149,1,149,1,149,5,149,
	1733,8,149,10,149,12,149,1736,9,149,1,149,1,149,1,149,1,149,1,149,1,149,
	1,149,1,149,1,149,1,149,1,149,1,149,3,149,1750,8,149,1,149,1,149,1,149,
	1,149,1,149,1,149,1,149,1,149,1,149,3,149,1761,8,149,1,149,3,149,1764,8,
	149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,5,149,1775,8,
	149,10,149,12,149,1778,9,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,
	1,149,1,149,1,149,1,149,1,149,1,149,1,149,5,149,1794,8,149,10,149,12,149,
	1797,9,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,
	5,149,1809,8,149,10,149,12,149,1812,9,149,1,149,1,149,1,149,1,149,1,149,
	1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,
	1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,
	1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,
	5,149,1855,8,149,10,149,12,149,1858,9,149,1,149,1,149,1,149,1,149,1,149,
	1,149,1,149,5,149,1867,8,149,10,149,12,149,1870,9,149,1,149,1,149,1,149,
	1,149,1,149,1,149,3,149,1878,8,149,1,149,1,149,1,149,1,149,1,149,3,149,
	1885,8,149,1,149,1,149,3,149,1889,8,149,1,149,3,149,1892,8,149,1,149,1,
	149,1,149,4,149,1897,8,149,11,149,12,149,1898,1,149,1,149,1,149,3,149,1904,
	8,149,1,149,1,149,1,149,1,149,1,149,3,149,1911,8,149,1,149,4,149,1914,8,
	149,11,149,12,149,1915,1,149,1,149,1,149,1,149,1,149,3,149,1923,8,149,1,
	149,1,149,3,149,1927,8,149,1,149,1,149,1,149,1,149,1,149,3,149,1934,8,149,
	1,149,1,149,3,149,1938,8,149,1,149,1,149,1,149,1,149,1,149,3,149,1945,8,
	149,1,149,1,149,3,149,1949,8,149,1,149,1,149,1,149,1,149,1,149,1,149,1,
	149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,3,
	149,1969,8,149,1,149,1,149,1,149,4,149,1974,8,149,11,149,12,149,1975,1,
	149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,
	149,5,149,1991,8,149,10,149,12,149,1994,9,149,1,150,1,150,1,150,1,150,1,
	150,1,151,1,151,1,151,1,151,1,151,1,151,3,151,2007,8,151,1,152,1,152,1,
	152,1,153,1,153,1,153,1,154,1,154,1,154,3,154,2018,8,154,1,155,1,155,1,
	155,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,
	156,1,156,1,156,1,156,1,156,3,156,2039,8,156,1,157,1,157,1,157,1,157,1,
	157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,3,
	157,2057,8,157,1,158,1,158,1,158,1,158,3,158,2063,8,158,1,159,1,159,1,159,
	1,159,1,159,1,159,3,159,2071,8,159,1,160,1,160,1,161,1,161,1,161,1,161,
	3,161,2079,8,161,1,161,1,161,1,161,1,161,3,161,2085,8,161,1,162,1,162,1,
	162,1,162,3,162,2091,8,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,
	164,1,164,1,164,1,164,1,164,1,164,1,164,5,164,2107,8,164,10,164,12,164,
	2110,9,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,
	1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,
	1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,3,165,2142,8,165,1,166,
	1,166,1,166,1,166,1,166,1,166,1,166,1,166,3,166,2152,8,166,1,167,1,167,
	1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,3,167,2166,
	8,167,1,168,1,168,1,168,1,168,4,168,2172,8,168,11,168,12,168,2173,1,168,
	3,168,2177,8,168,1,168,3,168,2180,8,168,1,169,1,169,1,170,1,170,1,170,1,
	170,1,170,1,170,1,170,3,170,2191,8,170,1,170,3,170,2194,8,170,1,171,1,171,
	1,172,1,172,1,172,3,172,2201,8,172,1,173,1,173,5,173,2205,8,173,10,173,
	12,173,2208,9,173,1,174,1,174,1,174,3,174,2213,8,174,1,175,1,175,1,175,
	1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,3,175,
	2229,8,175,1,176,1,176,1,176,3,176,2234,8,176,1,176,0,1,298,177,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
	104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
	140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,
	176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,
	212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,
	248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,
	284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,
	320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,0,52,
	1,0,292,292,2,0,106,106,109,109,3,0,208,208,211,211,213,213,4,0,115,115,
	208,208,211,211,213,213,12,0,142,142,144,144,172,172,204,204,212,212,216,
	216,225,225,227,227,229,229,237,237,240,240,244,244,18,0,92,92,106,106,
	109,109,120,120,128,128,157,157,186,186,197,198,201,202,205,206,217,224,
	228,228,230,230,234,235,238,239,246,247,249,249,265,265,17,0,92,92,106,
	106,120,120,128,128,157,157,186,186,197,198,201,202,205,206,217,224,228,
	228,230,230,234,235,238,239,246,247,249,249,265,265,7,0,205,206,217,218,
	220,221,223,224,234,235,238,239,246,247,1,0,159,160,2,0,3,3,164,164,2,0,
	175,176,179,179,2,0,208,208,213,213,6,0,133,133,222,224,234,235,238,239,
	249,253,256,265,1,0,183,185,2,0,186,186,265,265,2,0,186,186,265,266,4,0,
	28,28,91,96,98,102,279,279,2,0,144,144,236,236,2,0,43,44,124,124,6,0,44,
	46,48,48,124,124,127,127,129,129,137,138,9,0,142,142,172,172,204,204,212,
	212,216,216,227,227,229,229,237,237,244,244,3,0,208,208,213,213,248,248,
	1,0,241,242,1,0,153,154,4,0,197,198,201,202,211,211,266,266,2,0,282,282,
	291,291,3,0,282,283,287,287,291,291,2,0,207,207,210,210,1,0,115,117,2,0,
	105,105,115,115,1,0,149,150,2,0,109,109,115,115,1,0,50,55,1,0,50,51,2,0,
	50,51,60,63,2,0,212,212,225,225,3,0,43,44,50,50,124,124,12,0,22,25,38,39,
	43,63,109,109,121,121,124,124,127,127,129,130,136,136,138,138,216,216,254,
	255,3,0,133,133,139,139,148,148,2,0,122,123,132,132,2,0,143,143,286,286,
	2,0,133,133,139,139,2,0,217,217,220,220,3,0,134,135,140,141,151,151,2,0,
	187,187,189,189,2,0,64,67,76,79,1,0,80,83,1,0,84,87,4,0,68,68,70,70,72,
	72,74,74,4,0,69,69,71,71,73,73,75,75,1,0,276,277,2,0,193,193,196,196,2479,
	0,362,1,0,0,0,2,373,1,0,0,0,4,375,1,0,0,0,6,382,1,0,0,0,8,389,1,0,0,0,10,
	405,1,0,0,0,12,425,1,0,0,0,14,441,1,0,0,0,16,444,1,0,0,0,18,457,1,0,0,0,
	20,473,1,0,0,0,22,475,1,0,0,0,24,480,1,0,0,0,26,490,1,0,0,0,28,498,1,0,
	0,0,30,502,1,0,0,0,32,504,1,0,0,0,34,506,1,0,0,0,36,508,1,0,0,0,38,567,
	1,0,0,0,40,626,1,0,0,0,42,630,1,0,0,0,44,680,1,0,0,0,46,682,1,0,0,0,48,
	691,1,0,0,0,50,700,1,0,0,0,52,709,1,0,0,0,54,711,1,0,0,0,56,713,1,0,0,0,
	58,715,1,0,0,0,60,717,1,0,0,0,62,739,1,0,0,0,64,748,1,0,0,0,66,757,1,0,
	0,0,68,787,1,0,0,0,70,789,1,0,0,0,72,796,1,0,0,0,74,803,1,0,0,0,76,805,
	1,0,0,0,78,812,1,0,0,0,80,814,1,0,0,0,82,817,1,0,0,0,84,827,1,0,0,0,86,
	843,1,0,0,0,88,845,1,0,0,0,90,851,1,0,0,0,92,853,1,0,0,0,94,855,1,0,0,0,
	96,863,1,0,0,0,98,883,1,0,0,0,100,895,1,0,0,0,102,906,1,0,0,0,104,908,1,
	0,0,0,106,913,1,0,0,0,108,933,1,0,0,0,110,935,1,0,0,0,112,939,1,0,0,0,114,
	941,1,0,0,0,116,943,1,0,0,0,118,962,1,0,0,0,120,973,1,0,0,0,122,993,1,0,
	0,0,124,1010,1,0,0,0,126,1012,1,0,0,0,128,1028,1,0,0,0,130,1033,1,0,0,0,
	132,1037,1,0,0,0,134,1039,1,0,0,0,136,1049,1,0,0,0,138,1061,1,0,0,0,140,
	1072,1,0,0,0,142,1093,1,0,0,0,144,1095,1,0,0,0,146,1107,1,0,0,0,148,1111,
	1,0,0,0,150,1153,1,0,0,0,152,1155,1,0,0,0,154,1157,1,0,0,0,156,1170,1,0,
	0,0,158,1175,1,0,0,0,160,1184,1,0,0,0,162,1188,1,0,0,0,164,1190,1,0,0,0,
	166,1192,1,0,0,0,168,1202,1,0,0,0,170,1215,1,0,0,0,172,1219,1,0,0,0,174,
	1221,1,0,0,0,176,1234,1,0,0,0,178,1239,1,0,0,0,180,1246,1,0,0,0,182,1251,
	1,0,0,0,184,1298,1,0,0,0,186,1315,1,0,0,0,188,1317,1,0,0,0,190,1322,1,0,
	0,0,192,1327,1,0,0,0,194,1330,1,0,0,0,196,1334,1,0,0,0,198,1339,1,0,0,0,
	200,1351,1,0,0,0,202,1356,1,0,0,0,204,1361,1,0,0,0,206,1366,1,0,0,0,208,
	1375,1,0,0,0,210,1391,1,0,0,0,212,1400,1,0,0,0,214,1402,1,0,0,0,216,1406,
	1,0,0,0,218,1409,1,0,0,0,220,1414,1,0,0,0,222,1424,1,0,0,0,224,1434,1,0,
	0,0,226,1438,1,0,0,0,228,1445,1,0,0,0,230,1447,1,0,0,0,232,1450,1,0,0,0,
	234,1458,1,0,0,0,236,1461,1,0,0,0,238,1468,1,0,0,0,240,1471,1,0,0,0,242,
	1474,1,0,0,0,244,1477,1,0,0,0,246,1493,1,0,0,0,248,1495,1,0,0,0,250,1508,
	1,0,0,0,252,1514,1,0,0,0,254,1525,1,0,0,0,256,1527,1,0,0,0,258,1529,1,0,
	0,0,260,1531,1,0,0,0,262,1533,1,0,0,0,264,1559,1,0,0,0,266,1561,1,0,0,0,
	268,1571,1,0,0,0,270,1577,1,0,0,0,272,1602,1,0,0,0,274,1617,1,0,0,0,276,
	1619,1,0,0,0,278,1655,1,0,0,0,280,1666,1,0,0,0,282,1668,1,0,0,0,284,1670,
	1,0,0,0,286,1672,1,0,0,0,288,1681,1,0,0,0,290,1683,1,0,0,0,292,1692,1,0,
	0,0,294,1694,1,0,0,0,296,1703,1,0,0,0,298,1968,1,0,0,0,300,1995,1,0,0,0,
	302,2006,1,0,0,0,304,2008,1,0,0,0,306,2011,1,0,0,0,308,2017,1,0,0,0,310,
	2019,1,0,0,0,312,2038,1,0,0,0,314,2056,1,0,0,0,316,2062,1,0,0,0,318,2070,
	1,0,0,0,320,2072,1,0,0,0,322,2084,1,0,0,0,324,2086,1,0,0,0,326,2092,1,0,
	0,0,328,2099,1,0,0,0,330,2141,1,0,0,0,332,2151,1,0,0,0,334,2165,1,0,0,0,
	336,2167,1,0,0,0,338,2181,1,0,0,0,340,2183,1,0,0,0,342,2195,1,0,0,0,344,
	2197,1,0,0,0,346,2202,1,0,0,0,348,2209,1,0,0,0,350,2228,1,0,0,0,352,2230,
	1,0,0,0,354,361,3,2,1,0,355,361,3,134,67,0,356,361,3,138,69,0,357,361,3,
	4,2,0,358,361,3,174,87,0,359,361,3,94,47,0,360,354,1,0,0,0,360,355,1,0,
	0,0,360,356,1,0,0,0,360,357,1,0,0,0,360,358,1,0,0,0,360,359,1,0,0,0,361,
	364,1,0,0,0,362,360,1,0,0,0,362,363,1,0,0,0,363,365,1,0,0,0,364,362,1,0,
	0,0,365,366,5,0,0,1,366,1,1,0,0,0,367,374,3,60,30,0,368,374,3,84,42,0,369,
	374,3,116,58,0,370,374,3,106,53,0,371,374,3,124,62,0,372,374,3,336,168,
	0,373,367,1,0,0,0,373,368,1,0,0,0,373,369,1,0,0,0,373,370,1,0,0,0,373,371,
	1,0,0,0,373,372,1,0,0,0,374,3,1,0,0,0,375,376,5,94,0,0,376,378,3,46,23,
	0,377,379,3,144,72,0,378,377,1,0,0,0,378,379,1,0,0,0,379,380,1,0,0,0,380,
	381,3,6,3,0,381,5,1,0,0,0,382,383,3,8,4,0,383,385,3,10,5,0,384,386,3,12,
	6,0,385,384,1,0,0,0,386,387,1,0,0,0,387,385,1,0,0,0,387,388,1,0,0,0,388,
	7,1,0,0,0,389,391,5,292,0,0,390,392,5,292,0,0,391,390,1,0,0,0,391,392,1,
	0,0,0,392,393,1,0,0,0,393,398,3,16,8,0,394,395,5,292,0,0,395,397,3,16,8,
	0,396,394,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,402,
	1,0,0,0,400,398,1,0,0,0,401,403,5,292,0,0,402,401,1,0,0,0,402,403,1,0,0,
	0,403,9,1,0,0,0,404,406,5,292,0,0,405,404,1,0,0,0,405,406,1,0,0,0,406,415,
	1,0,0,0,407,409,5,291,0,0,408,407,1,0,0,0,409,410,1,0,0,0,410,408,1,0,0,
	0,410,411,1,0,0,0,411,413,1,0,0,0,412,414,5,292,0,0,413,412,1,0,0,0,413,
	414,1,0,0,0,414,416,1,0,0,0,415,408,1,0,0,0,416,417,1,0,0,0,417,415,1,0,
	0,0,417,418,1,0,0,0,418,422,1,0,0,0,419,421,5,291,0,0,420,419,1,0,0,0,421,
	424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,11,1,0,0,0,424,422,1,0,
	0,0,425,426,5,292,0,0,426,427,5,266,0,0,427,428,5,292,0,0,428,433,3,14,
	7,0,429,430,5,292,0,0,430,432,3,14,7,0,431,429,1,0,0,0,432,435,1,0,0,0,
	433,431,1,0,0,0,433,434,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,436,438,
	5,292,0,0,437,436,1,0,0,0,437,438,1,0,0,0,438,13,1,0,0,0,439,442,3,272,
	136,0,440,442,5,293,0,0,441,439,1,0,0,0,441,440,1,0,0,0,442,15,1,0,0,0,
	443,445,8,0,0,0,444,443,1,0,0,0,445,446,1,0,0,0,446,444,1,0,0,0,446,447,
	1,0,0,0,447,17,1,0,0,0,448,449,3,22,11,0,449,450,5,9,0,0,450,451,5,0,0,
	1,451,458,1,0,0,0,452,453,3,202,101,0,453,454,7,1,0,0,454,455,3,218,109,
	0,455,456,5,0,0,1,456,458,1,0,0,0,457,448,1,0,0,0,457,452,1,0,0,0,458,19,
	1,0,0,0,459,460,5,107,0,0,460,461,3,22,11,0,461,462,3,284,142,0,462,463,
	5,0,0,1,463,474,1,0,0,0,464,465,5,107,0,0,465,467,3,202,101,0,466,468,7,
	2,0,0,467,466,1,0,0,0,467,468,1,0,0,0,468,469,1,0,0,0,469,470,3,218,109,
	0,470,471,5,106,0,0,471,472,5,0,0,1,472,474,1,0,0,0,473,459,1,0,0,0,473,
	464,1,0,0,0,474,21,1,0,0,0,475,478,3,24,12,0,476,477,5,240,0,0,477,479,
	3,202,101,0,478,476,1,0,0,0,478,479,1,0,0,0,479,23,1,0,0,0,480,486,3,26,
	13,0,481,482,3,30,15,0,482,483,3,28,14,0,483,485,1,0,0,0,484,481,1,0,0,
	0,485,488,1,0,0,0,486,484,1,0,0,0,486,487,1,0,0,0,487,25,1,0,0,0,488,486,
	1,0,0,0,489,491,7,3,0,0,490,489,1,0,0,0,490,491,1,0,0,0,491,493,1,0,0,0,
	492,494,3,36,18,0,493,492,1,0,0,0,494,495,1,0,0,0,495,493,1,0,0,0,495,496,
	1,0,0,0,496,27,1,0,0,0,497,499,3,36,18,0,498,497,1,0,0,0,499,500,1,0,0,
	0,500,498,1,0,0,0,500,501,1,0,0,0,501,29,1,0,0,0,502,503,7,4,0,0,503,31,
	1,0,0,0,504,505,5,265,0,0,505,33,1,0,0,0,506,507,7,5,0,0,507,35,1,0,0,0,
	508,509,7,6,0,0,509,37,1,0,0,0,510,512,7,3,0,0,511,510,1,0,0,0,511,512,
	1,0,0,0,512,514,1,0,0,0,513,515,3,34,17,0,514,513,1,0,0,0,515,516,1,0,0,
	0,516,514,1,0,0,0,516,517,1,0,0,0,517,568,1,0,0,0,518,520,3,34,17,0,519,
	518,1,0,0,0,520,521,1,0,0,0,521,519,1,0,0,0,521,522,1,0,0,0,522,568,1,0,
	0,0,523,525,5,41,0,0,524,526,3,34,17,0,525,524,1,0,0,0,526,527,1,0,0,0,
	527,525,1,0,0,0,527,528,1,0,0,0,528,568,1,0,0,0,529,531,5,41,0,0,530,532,
	3,34,17,0,531,530,1,0,0,0,532,533,1,0,0,0,533,531,1,0,0,0,533,534,1,0,0,
	0,534,535,1,0,0,0,535,537,5,172,0,0,536,538,3,34,17,0,537,536,1,0,0,0,538,
	539,1,0,0,0,539,537,1,0,0,0,539,540,1,0,0,0,540,568,1,0,0,0,541,543,3,34,
	17,0,542,541,1,0,0,0,543,544,1,0,0,0,544,542,1,0,0,0,544,545,1,0,0,0,545,
	546,1,0,0,0,546,548,5,172,0,0,547,549,3,34,17,0,548,547,1,0,0,0,549,550,
	1,0,0,0,550,548,1,0,0,0,550,551,1,0,0,0,551,568,1,0,0,0,552,554,5,136,0,
	0,553,555,3,34,17,0,554,553,1,0,0,0,555,556,1,0,0,0,556,554,1,0,0,0,556,
	557,1,0,0,0,557,568,1,0,0,0,558,559,5,213,0,0,559,560,5,186,0,0,560,561,
	5,206,0,0,561,563,5,216,0,0,562,564,3,34,17,0,563,562,1,0,0,0,564,565,1,
	0,0,0,565,563,1,0,0,0,565,566,1,0,0,0,566,568,1,0,0,0,567,511,1,0,0,0,567,
	519,1,0,0,0,567,523,1,0,0,0,567,529,1,0,0,0,567,542,1,0,0,0,567,552,1,0,
	0,0,567,558,1,0,0,0,568,39,1,0,0,0,569,571,7,3,0,0,570,569,1,0,0,0,570,
	571,1,0,0,0,571,573,1,0,0,0,572,574,3,42,21,0,573,572,1,0,0,0,574,575,1,
	0,0,0,575,573,1,0,0,0,575,576,1,0,0,0,576,627,1,0,0,0,577,579,3,42,21,0,
	578,577,1,0,0,0,579,580,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,627,
	1,0,0,0,582,584,5,41,0,0,583,585,3,42,21,0,584,583,1,0,0,0,585,586,1,0,
	0,0,586,584,1,0,0,0,586,587,1,0,0,0,587,627,1,0,0,0,588,590,5,41,0,0,589,
	591,3,42,21,0,590,589,1,0,0,0,591,592,1,0,0,0,592,590,1,0,0,0,592,593,1,
	0,0,0,593,594,1,0,0,0,594,596,5,172,0,0,595,597,3,42,21,0,596,595,1,0,0,
	0,597,598,1,0,0,0,598,596,1,0,0,0,598,599,1,0,0,0,599,627,1,0,0,0,600,602,
	3,42,21,0,601,600,1,0,0,0,602,603,1,0,0,0,603,601,1,0,0,0,603,604,1,0,0,
	0,604,605,1,0,0,0,605,607,5,172,0,0,606,608,3,42,21,0,607,606,1,0,0,0,608,
	609,1,0,0,0,609,607,1,0,0,0,609,610,1,0,0,0,610,627,1,0,0,0,611,613,5,136,
	0,0,612,614,3,42,21,0,613,612,1,0,0,0,614,615,1,0,0,0,615,613,1,0,0,0,615,
	616,1,0,0,0,616,627,1,0,0,0,617,618,5,213,0,0,618,619,5,186,0,0,619,620,
	5,206,0,0,620,622,5,216,0,0,621,623,3,42,21,0,622,621,1,0,0,0,623,624,1,
	0,0,0,624,622,1,0,0,0,624,625,1,0,0,0,625,627,1,0,0,0,626,570,1,0,0,0,626,
	578,1,0,0,0,626,582,1,0,0,0,626,588,1,0,0,0,626,601,1,0,0,0,626,611,1,0,
	0,0,626,617,1,0,0,0,627,41,1,0,0,0,628,631,3,34,17,0,629,631,5,266,0,0,
	630,628,1,0,0,0,630,629,1,0,0,0,631,43,1,0,0,0,632,634,7,3,0,0,633,632,
	1,0,0,0,633,634,1,0,0,0,634,636,1,0,0,0,635,637,3,36,18,0,636,635,1,0,0,
	0,637,638,1,0,0,0,638,636,1,0,0,0,638,639,1,0,0,0,639,681,1,0,0,0,640,642,
	3,36,18,0,641,640,1,0,0,0,642,643,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,
	0,644,681,1,0,0,0,645,647,5,41,0,0,646,648,3,36,18,0,647,646,1,0,0,0,648,
	649,1,0,0,0,649,647,1,0,0,0,649,650,1,0,0,0,650,681,1,0,0,0,651,653,5,41,
	0,0,652,654,3,36,18,0,653,652,1,0,0,0,654,655,1,0,0,0,655,653,1,0,0,0,655,
	656,1,0,0,0,656,657,1,0,0,0,657,659,5,172,0,0,658,660,3,36,18,0,659,658,
	1,0,0,0,660,661,1,0,0,0,661,659,1,0,0,0,661,662,1,0,0,0,662,681,1,0,0,0,
	663,665,3,36,18,0,664,663,1,0,0,0,665,666,1,0,0,0,666,664,1,0,0,0,666,667,
	1,0,0,0,667,668,1,0,0,0,668,670,5,172,0,0,669,671,3,36,18,0,670,669,1,0,
	0,0,671,672,1,0,0,0,672,670,1,0,0,0,672,673,1,0,0,0,673,681,1,0,0,0,674,
	676,5,136,0,0,675,677,3,36,18,0,676,675,1,0,0,0,677,678,1,0,0,0,678,676,
	1,0,0,0,678,679,1,0,0,0,679,681,1,0,0,0,680,633,1,0,0,0,680,641,1,0,0,0,
	680,645,1,0,0,0,680,651,1,0,0,0,680,664,1,0,0,0,680,674,1,0,0,0,681,45,
	1,0,0,0,682,688,3,38,19,0,683,684,3,52,26,0,684,685,3,38,19,0,685,687,1,
	0,0,0,686,683,1,0,0,0,687,690,1,0,0,0,688,686,1,0,0,0,688,689,1,0,0,0,689,
	47,1,0,0,0,690,688,1,0,0,0,691,697,3,40,20,0,692,693,3,52,26,0,693,694,
	3,40,20,0,694,696,1,0,0,0,695,692,1,0,0,0,696,699,1,0,0,0,697,695,1,0,0,
	0,697,698,1,0,0,0,698,49,1,0,0,0,699,697,1,0,0,0,700,706,3,44,22,0,701,
	702,3,52,26,0,702,703,3,44,22,0,703,705,1,0,0,0,704,701,1,0,0,0,705,708,
	1,0,0,0,706,704,1,0,0,0,706,707,1,0,0,0,707,51,1,0,0,0,708,706,1,0,0,0,
	709,710,7,4,0,0,710,53,1,0,0,0,711,712,5,268,0,0,712,55,1,0,0,0,713,714,
	5,265,0,0,714,57,1,0,0,0,715,716,7,7,0,0,716,59,1,0,0,0,717,718,5,95,0,
	0,718,726,3,50,25,0,719,721,5,174,0,0,720,722,5,265,0,0,721,720,1,0,0,0,
	722,723,1,0,0,0,723,721,1,0,0,0,723,724,1,0,0,0,724,725,1,0,0,0,725,727,
	5,273,0,0,726,719,1,0,0,0,726,727,1,0,0,0,727,729,1,0,0,0,728,730,5,161,
	0,0,729,728,1,0,0,0,729,730,1,0,0,0,730,734,1,0,0,0,731,733,3,62,31,0,732,
	731,1,0,0,0,733,736,1,0,0,0,734,732,1,0,0,0,734,735,1,0,0,0,735,61,1,0,
	0,0,736,734,1,0,0,0,737,740,3,64,32,0,738,740,3,66,33,0,739,737,1,0,0,0,
	739,738,1,0,0,0,740,741,1,0,0,0,741,742,5,279,0,0,742,63,1,0,0,0,743,745,
	5,109,0,0,744,743,1,0,0,0,744,745,1,0,0,0,745,746,1,0,0,0,746,749,3,32,
	16,0,747,749,3,48,24,0,748,744,1,0,0,0,748,747,1,0,0,0,749,750,1,0,0,0,
	750,752,5,170,0,0,751,753,7,8,0,0,752,751,1,0,0,0,752,753,1,0,0,0,753,755,
	1,0,0,0,754,756,3,112,56,0,755,754,1,0,0,0,755,756,1,0,0,0,756,65,1,0,0,
	0,757,761,3,48,24,0,758,762,3,68,34,0,759,762,3,90,45,0,760,762,3,92,46,
	0,761,758,1,0,0,0,761,759,1,0,0,0,761,760,1,0,0,0,762,765,1,0,0,0,763,764,
	5,173,0,0,764,766,3,98,49,0,765,763,1,0,0,0,765,766,1,0,0,0,766,776,1,0,
	0,0,767,768,5,167,0,0,768,773,3,114,57,0,769,770,5,212,0,0,770,772,3,114,
	57,0,771,769,1,0,0,0,772,775,1,0,0,0,773,771,1,0,0,0,773,774,1,0,0,0,774,
	777,1,0,0,0,775,773,1,0,0,0,776,767,1,0,0,0,776,777,1,0,0,0,777,779,1,0,
	0,0,778,780,3,112,56,0,779,778,1,0,0,0,779,780,1,0,0,0,780,67,1,0,0,0,781,
	788,3,72,36,0,782,788,3,74,37,0,783,788,3,78,39,0,784,788,3,80,40,0,785,
	788,3,70,35,0,786,788,3,76,38,0,787,781,1,0,0,0,787,782,1,0,0,0,787,783,
	1,0,0,0,787,784,1,0,0,0,787,785,1,0,0,0,787,786,1,0,0,0,788,69,1,0,0,0,
	789,790,5,97,0,0,790,794,5,240,0,0,791,795,3,68,34,0,792,795,3,90,45,0,
	793,795,3,92,46,0,794,791,1,0,0,0,794,792,1,0,0,0,794,793,1,0,0,0,795,71,
	1,0,0,0,796,801,5,177,0,0,797,798,5,272,0,0,798,799,3,82,41,0,799,800,5,
	273,0,0,800,802,1,0,0,0,801,797,1,0,0,0,801,802,1,0,0,0,802,73,1,0,0,0,
	803,804,5,182,0,0,804,75,1,0,0,0,805,810,5,178,0,0,806,807,5,272,0,0,807,
	808,3,82,41,0,808,809,5,273,0,0,809,811,1,0,0,0,810,806,1,0,0,0,810,811,
	1,0,0,0,811,77,1,0,0,0,812,813,5,162,0,0,813,79,1,0,0,0,814,815,7,9,0,0,
	815,81,1,0,0,0,816,818,7,10,0,0,817,816,1,0,0,0,817,818,1,0,0,0,818,825,
	1,0,0,0,819,826,5,168,0,0,820,821,5,169,0,0,821,822,5,172,0,0,822,823,5,
	266,0,0,823,826,5,165,0,0,824,826,5,169,0,0,825,819,1,0,0,0,825,820,1,0,
	0,0,825,824,1,0,0,0,826,83,1,0,0,0,827,828,5,96,0,0,828,829,5,265,0,0,829,
	830,5,29,0,0,830,833,3,86,43,0,831,832,5,173,0,0,832,834,3,102,51,0,833,
	831,1,0,0,0,833,834,1,0,0,0,834,836,1,0,0,0,835,837,5,279,0,0,836,835,1,
	0,0,0,836,837,1,0,0,0,837,85,1,0,0,0,838,844,3,88,44,0,839,844,3,72,36,
	0,840,844,3,74,37,0,841,844,3,78,39,0,842,844,3,80,40,0,843,838,1,0,0,0,
	843,839,1,0,0,0,843,840,1,0,0,0,843,841,1,0,0,0,843,842,1,0,0,0,844,87,
	1,0,0,0,845,847,5,166,0,0,846,848,5,271,0,0,847,846,1,0,0,0,848,849,1,0,
	0,0,849,847,1,0,0,0,849,850,1,0,0,0,850,89,1,0,0,0,851,852,5,265,0,0,852,
	91,1,0,0,0,853,854,5,265,0,0,854,93,1,0,0,0,855,856,5,99,0,0,856,860,3,
	32,16,0,857,859,3,96,48,0,858,857,1,0,0,0,859,862,1,0,0,0,860,858,1,0,0,
	0,860,861,1,0,0,0,861,95,1,0,0,0,862,860,1,0,0,0,863,864,7,11,0,0,864,869,
	3,100,50,0,865,866,5,174,0,0,866,867,3,100,50,0,867,868,5,273,0,0,868,870,
	1,0,0,0,869,865,1,0,0,0,869,870,1,0,0,0,870,871,1,0,0,0,871,873,3,100,50,
	0,872,874,3,100,50,0,873,872,1,0,0,0,873,874,1,0,0,0,874,881,1,0,0,0,875,
	877,5,267,0,0,876,878,5,280,0,0,877,876,1,0,0,0,877,878,1,0,0,0,878,879,
	1,0,0,0,879,880,5,266,0,0,880,882,3,100,50,0,881,875,1,0,0,0,881,882,1,
	0,0,0,882,97,1,0,0,0,883,884,7,12,0,0,884,99,1,0,0,0,885,896,3,98,49,0,
	886,896,5,205,0,0,887,896,5,206,0,0,888,896,5,220,0,0,889,896,5,221,0,0,
	890,896,5,217,0,0,891,896,5,218,0,0,892,896,5,246,0,0,893,896,5,247,0,0,
	894,896,5,219,0,0,895,885,1,0,0,0,895,886,1,0,0,0,895,887,1,0,0,0,895,888,
	1,0,0,0,895,889,1,0,0,0,895,890,1,0,0,0,895,891,1,0,0,0,895,892,1,0,0,0,
	895,893,1,0,0,0,895,894,1,0,0,0,896,101,1,0,0,0,897,900,3,104,52,0,898,
	899,5,280,0,0,899,901,3,104,52,0,900,898,1,0,0,0,900,901,1,0,0,0,901,907,
	1,0,0,0,902,907,5,266,0,0,903,907,5,281,0,0,904,907,5,262,0,0,905,907,5,
	263,0,0,906,897,1,0,0,0,906,902,1,0,0,0,906,903,1,0,0,0,906,904,1,0,0,0,
	906,905,1,0,0,0,907,103,1,0,0,0,908,911,3,98,49,0,909,910,5,286,0,0,910,
	912,5,266,0,0,911,909,1,0,0,0,911,912,1,0,0,0,912,105,1,0,0,0,913,914,5,
	98,0,0,914,916,3,46,23,0,915,917,5,276,0,0,916,915,1,0,0,0,916,917,1,0,
	0,0,917,918,1,0,0,0,918,919,5,27,0,0,919,920,3,46,23,0,920,922,3,108,54,
	0,921,923,3,110,55,0,922,921,1,0,0,0,923,924,1,0,0,0,924,922,1,0,0,0,924,
	925,1,0,0,0,925,107,1,0,0,0,926,927,5,2,0,0,927,928,3,52,26,0,928,930,5,
	273,0,0,929,931,5,278,0,0,930,929,1,0,0,0,930,931,1,0,0,0,931,934,1,0,0,
	0,932,934,5,1,0,0,933,926,1,0,0,0,933,932,1,0,0,0,934,109,1,0,0,0,935,936,
	5,266,0,0,936,937,5,277,0,0,937,938,3,46,23,0,938,111,1,0,0,0,939,940,7,
	13,0,0,940,113,1,0,0,0,941,942,5,265,0,0,942,115,1,0,0,0,943,944,5,100,
	0,0,944,945,3,118,59,0,945,948,5,278,0,0,946,949,3,68,34,0,947,949,3,90,
	45,0,948,946,1,0,0,0,948,947,1,0,0,0,949,952,1,0,0,0,950,951,5,173,0,0,
	951,953,3,102,51,0,952,950,1,0,0,0,952,953,1,0,0,0,953,956,1,0,0,0,954,
	955,5,109,0,0,955,957,3,272,136,0,956,954,1,0,0,0,956,957,1,0,0,0,957,959,
	1,0,0,0,958,960,3,112,56,0,959,958,1,0,0,0,959,960,1,0,0,0,960,117,1,0,
	0,0,961,963,7,11,0,0,962,961,1,0,0,0,962,963,1,0,0,0,963,964,1,0,0,0,964,
	970,3,120,60,0,965,966,3,52,26,0,966,967,3,120,60,0,967,969,1,0,0,0,968,
	965,1,0,0,0,969,972,1,0,0,0,970,968,1,0,0,0,970,971,1,0,0,0,971,119,1,0,
	0,0,972,970,1,0,0,0,973,977,7,14,0,0,974,976,7,15,0,0,975,974,1,0,0,0,976,
	979,1,0,0,0,977,975,1,0,0,0,977,978,1,0,0,0,978,121,1,0,0,0,979,977,1,0,
	0,0,980,982,7,11,0,0,981,980,1,0,0,0,981,982,1,0,0,0,982,983,1,0,0,0,983,
	989,3,120,60,0,984,985,3,52,26,0,985,986,3,120,60,0,986,988,1,0,0,0,987,
	984,1,0,0,0,988,991,1,0,0,0,989,987,1,0,0,0,989,990,1,0,0,0,990,994,1,0,
	0,0,991,989,1,0,0,0,992,994,3,46,23,0,993,981,1,0,0,0,993,992,1,0,0,0,994,
	123,1,0,0,0,995,996,5,101,0,0,996,997,3,46,23,0,997,999,3,126,63,0,998,
	1000,3,126,63,0,999,998,1,0,0,0,1000,1001,1,0,0,0,1001,999,1,0,0,0,1001,
	1002,1,0,0,0,1002,1003,1,0,0,0,1003,1004,3,130,65,0,1004,1011,1,0,0,0,1005,
	1006,5,28,0,0,1006,1007,3,46,23,0,1007,1008,3,126,63,0,1008,1009,3,130,
	65,0,1009,1011,1,0,0,0,1010,995,1,0,0,0,1010,1005,1,0,0,0,1011,125,1,0,
	0,0,1012,1013,7,11,0,0,1013,1018,3,128,64,0,1014,1015,5,174,0,0,1015,1016,
	3,46,23,0,1016,1017,5,273,0,0,1017,1019,1,0,0,0,1018,1014,1,0,0,0,1018,
	1019,1,0,0,0,1019,1020,1,0,0,0,1020,1022,5,288,0,0,1021,1023,5,265,0,0,
	1022,1021,1,0,0,0,1023,1024,1,0,0,0,1024,1022,1,0,0,0,1024,1025,1,0,0,0,
	1025,127,1,0,0,0,1026,1029,3,34,17,0,1027,1029,3,52,26,0,1028,1026,1,0,
	0,0,1028,1027,1,0,0,0,1029,1030,1,0,0,0,1030,1028,1,0,0,0,1030,1031,1,0,
	0,0,1031,129,1,0,0,0,1032,1034,3,132,66,0,1033,1032,1,0,0,0,1034,1035,1,
	0,0,0,1035,1033,1,0,0,0,1035,1036,1,0,0,0,1036,131,1,0,0,0,1037,1038,8,
	16,0,0,1038,133,1,0,0,0,1039,1040,5,92,0,0,1040,1042,3,140,70,0,1041,1043,
	5,266,0,0,1042,1041,1,0,0,0,1042,1043,1,0,0,0,1043,1045,1,0,0,0,1044,1046,
	3,136,68,0,1045,1044,1,0,0,0,1046,1047,1,0,0,0,1047,1045,1,0,0,0,1047,1048,
	1,0,0,0,1048,135,1,0,0,0,1049,1050,3,144,72,0,1050,1056,3,150,75,0,1051,
	1053,3,182,91,0,1052,1054,5,277,0,0,1053,1052,1,0,0,0,1053,1054,1,0,0,0,
	1054,1057,1,0,0,0,1055,1057,5,277,0,0,1056,1051,1,0,0,0,1056,1055,1,0,0,
	0,1056,1057,1,0,0,0,1057,1059,1,0,0,0,1058,1060,3,266,133,0,1059,1058,1,
	0,0,0,1059,1060,1,0,0,0,1060,137,1,0,0,0,1061,1062,5,93,0,0,1062,1064,3,
	46,23,0,1063,1065,5,108,0,0,1064,1063,1,0,0,0,1064,1065,1,0,0,0,1065,1068,
	1,0,0,0,1066,1069,3,134,67,0,1067,1069,3,174,87,0,1068,1066,1,0,0,0,1068,
	1067,1,0,0,0,1069,1070,1,0,0,0,1070,1068,1,0,0,0,1070,1071,1,0,0,0,1071,
	139,1,0,0,0,1072,1076,3,48,24,0,1073,1075,3,142,71,0,1074,1073,1,0,0,0,
	1075,1078,1,0,0,0,1076,1074,1,0,0,0,1076,1077,1,0,0,0,1077,141,1,0,0,0,
	1078,1076,1,0,0,0,1079,1094,5,194,0,0,1080,1081,5,276,0,0,1081,1094,3,48,
	24,0,1082,1083,5,276,0,0,1083,1084,5,172,0,0,1084,1094,3,48,24,0,1085,1086,
	5,212,0,0,1086,1094,3,48,24,0,1087,1088,5,109,0,0,1088,1094,3,48,24,0,1089,
	1090,5,200,0,0,1090,1091,3,48,24,0,1091,1092,5,109,0,0,1092,1094,1,0,0,
	0,1093,1079,1,0,0,0,1093,1080,1,0,0,0,1093,1082,1,0,0,0,1093,1085,1,0,0,
	0,1093,1087,1,0,0,0,1093,1089,1,0,0,0,1094,143,1,0,0,0,1095,1096,5,104,
	0,0,1096,1097,3,146,73,0,1097,145,1,0,0,0,1098,1108,5,203,0,0,1099,1100,
	5,146,0,0,1100,1103,3,148,74,0,1101,1102,7,17,0,0,1102,1104,3,148,74,0,
	1103,1101,1,0,0,0,1103,1104,1,0,0,0,1104,1108,1,0,0,0,1105,1106,7,17,0,
	0,1106,1108,3,148,74,0,1107,1098,1,0,0,0,1107,1099,1,0,0,0,1107,1105,1,
	0,0,0,1108,147,1,0,0,0,1109,1112,3,54,27,0,1110,1112,5,266,0,0,1111,1109,
	1,0,0,0,1111,1110,1,0,0,0,1112,149,1,0,0,0,1113,1114,5,211,0,0,1114,1115,
	5,205,0,0,1115,1116,5,109,0,0,1116,1117,5,211,0,0,1117,1154,3,46,23,0,1118,
	1125,3,214,107,0,1119,1120,5,8,0,0,1120,1126,3,272,136,0,1121,1122,5,9,
	0,0,1122,1126,3,272,136,0,1123,1124,5,10,0,0,1124,1126,3,272,136,0,1125,
	1119,1,0,0,0,1125,1121,1,0,0,0,1125,1123,1,0,0,0,1126,1128,1,0,0,0,1127,
	1129,3,308,154,0,1128,1127,1,0,0,0,1128,1129,1,0,0,0,1129,1154,1,0,0,0,
	1130,1131,3,214,107,0,1131,1132,5,110,0,0,1132,1133,3,152,76,0,1133,1134,
	3,272,136,0,1134,1154,1,0,0,0,1135,1154,3,154,77,0,1136,1154,3,166,83,0,
	1137,1138,3,202,101,0,1138,1139,5,106,0,0,1139,1140,7,11,0,0,1140,1141,
	3,46,23,0,1141,1142,5,172,0,0,1142,1143,3,216,108,0,1143,1144,7,18,0,0,
	1144,1145,3,272,136,0,1145,1154,1,0,0,0,1146,1147,3,202,101,0,1147,1148,
	7,1,0,0,1148,1150,3,218,109,0,1149,1151,3,308,154,0,1150,1149,1,0,0,0,1150,
	1151,1,0,0,0,1151,1154,1,0,0,0,1152,1154,3,340,170,0,1153,1113,1,0,0,0,
	1153,1118,1,0,0,0,1153,1130,1,0,0,0,1153,1135,1,0,0,0,1153,1136,1,0,0,0,
	1153,1137,1,0,0,0,1153,1146,1,0,0,0,1153,1152,1,0,0,0,1154,151,1,0,0,0,
	1155,1156,7,19,0,0,1156,153,1,0,0,0,1157,1158,5,211,0,0,1158,1159,3,156,
	78,0,1159,1160,5,240,0,0,1160,1161,5,211,0,0,1161,1162,3,158,79,0,1162,
	1163,5,109,0,0,1163,1164,7,2,0,0,1164,1165,3,156,78,0,1165,1166,5,240,0,
	0,1166,1167,7,2,0,0,1167,1168,3,158,79,0,1168,155,1,0,0,0,1169,1171,3,162,
	81,0,1170,1169,1,0,0,0,1171,1172,1,0,0,0,1172,1170,1,0,0,0,1172,1173,1,
	0,0,0,1173,157,1,0,0,0,1174,1176,3,160,80,0,1175,1174,1,0,0,0,1176,1177,
	1,0,0,0,1177,1175,1,0,0,0,1177,1178,1,0,0,0,1178,159,1,0,0,0,1179,1185,
	3,34,17,0,1180,1185,3,52,26,0,1181,1185,5,208,0,0,1182,1185,5,213,0,0,1183,
	1185,5,211,0,0,1184,1179,1,0,0,0,1184,1180,1,0,0,0,1184,1181,1,0,0,0,1184,
	1182,1,0,0,0,1184,1183,1,0,0,0,1185,161,1,0,0,0,1186,1189,3,34,17,0,1187,
	1189,3,164,82,0,1188,1186,1,0,0,0,1188,1187,1,0,0,0,1189,163,1,0,0,0,1190,
	1191,7,20,0,0,1191,165,1,0,0,0,1192,1193,3,202,101,0,1193,1194,5,106,0,
	0,1194,1195,7,2,0,0,1195,1197,3,46,23,0,1196,1198,3,168,84,0,1197,1196,
	1,0,0,0,1197,1198,1,0,0,0,1198,1200,1,0,0,0,1199,1201,5,277,0,0,1200,1199,
	1,0,0,0,1200,1201,1,0,0,0,1201,167,1,0,0,0,1202,1203,5,172,0,0,1203,1208,
	3,170,85,0,1204,1205,5,276,0,0,1205,1207,3,170,85,0,1206,1204,1,0,0,0,1207,
	1210,1,0,0,0,1208,1206,1,0,0,0,1208,1209,1,0,0,0,1209,1213,1,0,0,0,1210,
	1208,1,0,0,0,1211,1212,5,212,0,0,1212,1214,3,170,85,0,1213,1211,1,0,0,0,
	1213,1214,1,0,0,0,1214,169,1,0,0,0,1215,1216,3,172,86,0,1216,1217,5,124,
	0,0,1217,1218,3,274,137,0,1218,171,1,0,0,0,1219,1220,3,38,19,0,1220,173,
	1,0,0,0,1221,1222,5,91,0,0,1222,1232,3,46,23,0,1223,1233,3,176,88,0,1224,
	1230,3,180,90,0,1225,1227,3,182,91,0,1226,1228,5,277,0,0,1227,1226,1,0,
	0,0,1227,1228,1,0,0,0,1228,1231,1,0,0,0,1229,1231,5,277,0,0,1230,1225,1,
	0,0,0,1230,1229,1,0,0,0,1230,1231,1,0,0,0,1231,1233,1,0,0,0,1232,1223,1,
	0,0,0,1232,1224,1,0,0,0,1233,175,1,0,0,0,1234,1235,3,178,89,0,1235,1237,
	5,88,0,0,1236,1238,5,277,0,0,1237,1236,1,0,0,0,1237,1238,1,0,0,0,1238,177,
	1,0,0,0,1239,1240,5,208,0,0,1240,1241,3,46,23,0,1241,1242,5,240,0,0,1242,
	1243,5,120,0,0,1243,1244,3,46,23,0,1244,179,1,0,0,0,1245,1247,7,21,0,0,
	1246,1245,1,0,0,0,1246,1247,1,0,0,0,1247,1248,1,0,0,0,1248,1249,3,46,23,
	0,1249,1250,5,90,0,0,1250,181,1,0,0,0,1251,1254,5,107,0,0,1252,1255,3,272,
	136,0,1253,1255,3,184,92,0,1254,1252,1,0,0,0,1254,1253,1,0,0,0,1255,183,
	1,0,0,0,1256,1257,5,42,0,0,1257,1258,3,186,93,0,1258,1259,7,22,0,0,1259,
	1260,5,40,0,0,1260,1262,5,278,0,0,1261,1263,3,188,94,0,1262,1261,1,0,0,
	0,1263,1264,1,0,0,0,1264,1262,1,0,0,0,1264,1265,1,0,0,0,1265,1299,1,0,0,
	0,1266,1271,3,202,101,0,1267,1271,5,215,0,0,1268,1271,5,213,0,0,1269,1271,
	5,248,0,0,1270,1266,1,0,0,0,1270,1267,1,0,0,0,1270,1268,1,0,0,0,1270,1269,
	1,0,0,0,1271,1272,1,0,0,0,1272,1273,5,118,0,0,1273,1274,3,186,93,0,1274,
	1275,7,22,0,0,1275,1276,5,150,0,0,1276,1278,5,278,0,0,1277,1279,3,188,94,
	0,1278,1277,1,0,0,0,1279,1280,1,0,0,0,1280,1278,1,0,0,0,1280,1281,1,0,0,
	0,1281,1299,1,0,0,0,1282,1287,3,202,101,0,1283,1287,5,215,0,0,1284,1287,
	5,213,0,0,1285,1287,5,248,0,0,1286,1282,1,0,0,0,1286,1283,1,0,0,0,1286,
	1284,1,0,0,0,1286,1285,1,0,0,0,1287,1288,1,0,0,0,1288,1289,5,150,0,0,1289,
	1290,5,118,0,0,1290,1291,3,186,93,0,1291,1292,7,22,0,0,1292,1294,5,278,
	0,0,1293,1295,3,188,94,0,1294,1293,1,0,0,0,1295,1296,1,0,0,0,1296,1294,
	1,0,0,0,1296,1297,1,0,0,0,1297,1299,1,0,0,0,1298,1256,1,0,0,0,1298,1270,
	1,0,0,0,1298,1286,1,0,0,0,1299,185,1,0,0,0,1300,1316,5,208,0,0,1301,1316,
	5,120,0,0,1302,1316,5,199,0,0,1303,1304,7,23,0,0,1304,1305,7,24,0,0,1305,
	1306,5,240,0,0,1306,1316,5,208,0,0,1307,1308,5,155,0,0,1308,1309,7,24,0,
	0,1309,1310,5,240,0,0,1310,1316,5,208,0,0,1311,1312,5,156,0,0,1312,1313,
	7,24,0,0,1313,1314,5,240,0,0,1314,1316,5,208,0,0,1315,1300,1,0,0,0,1315,
	1301,1,0,0,0,1315,1302,1,0,0,0,1315,1303,1,0,0,0,1315,1307,1,0,0,0,1315,
	1311,1,0,0,0,1316,187,1,0,0,0,1317,1320,3,190,95,0,1318,1321,3,196,98,0,
	1319,1321,3,198,99,0,1320,1318,1,0,0,0,1320,1319,1,0,0,0,1321,189,1,0,0,
	0,1322,1323,7,25,0,0,1323,191,1,0,0,0,1324,1328,5,287,0,0,1325,1326,5,282,
	0,0,1326,1328,5,282,0,0,1327,1324,1,0,0,0,1327,1325,1,0,0,0,1328,193,1,
	0,0,0,1329,1331,7,26,0,0,1330,1329,1,0,0,0,1331,1332,1,0,0,0,1332,1330,
	1,0,0,0,1332,1333,1,0,0,0,1333,195,1,0,0,0,1334,1335,3,272,136,0,1335,197,
	1,0,0,0,1336,1340,3,202,101,0,1337,1340,5,215,0,0,1338,1340,5,248,0,0,1339,
	1336,1,0,0,0,1339,1337,1,0,0,0,1339,1338,1,0,0,0,1340,1341,1,0,0,0,1341,
	1342,5,150,0,0,1342,1343,5,118,0,0,1343,1344,3,186,93,0,1344,1345,7,22,
	0,0,1345,1347,5,278,0,0,1346,1348,3,200,100,0,1347,1346,1,0,0,0,1348,1349,
	1,0,0,0,1349,1347,1,0,0,0,1349,1350,1,0,0,0,1350,199,1,0,0,0,1351,1354,
	3,192,96,0,1352,1355,3,196,98,0,1353,1355,3,198,99,0,1354,1352,1,0,0,0,
	1354,1353,1,0,0,0,1355,201,1,0,0,0,1356,1359,3,206,103,0,1357,1358,7,27,
	0,0,1358,1360,3,226,113,0,1359,1357,1,0,0,0,1359,1360,1,0,0,0,1360,203,
	1,0,0,0,1361,1364,3,208,104,0,1362,1363,7,27,0,0,1363,1365,3,226,113,0,
	1364,1362,1,0,0,0,1364,1365,1,0,0,0,1365,205,1,0,0,0,1366,1372,3,210,105,
	0,1367,1368,3,52,26,0,1368,1369,3,210,105,0,1369,1371,1,0,0,0,1370,1367,
	1,0,0,0,1371,1374,1,0,0,0,1372,1370,1,0,0,0,1372,1373,1,0,0,0,1373,207,
	1,0,0,0,1374,1372,1,0,0,0,1375,1381,3,212,106,0,1376,1377,3,52,26,0,1377,
	1378,3,212,106,0,1378,1380,1,0,0,0,1379,1376,1,0,0,0,1380,1383,1,0,0,0,
	1381,1379,1,0,0,0,1381,1382,1,0,0,0,1382,209,1,0,0,0,1383,1381,1,0,0,0,
	1384,1386,7,3,0,0,1385,1387,3,34,17,0,1386,1385,1,0,0,0,1387,1388,1,0,0,
	0,1388,1386,1,0,0,0,1388,1389,1,0,0,0,1389,1392,1,0,0,0,1390,1392,5,215,
	0,0,1391,1384,1,0,0,0,1391,1390,1,0,0,0,1392,211,1,0,0,0,1393,1395,7,3,
	0,0,1394,1396,3,42,21,0,1395,1394,1,0,0,0,1396,1397,1,0,0,0,1397,1395,1,
	0,0,0,1397,1398,1,0,0,0,1398,1401,1,0,0,0,1399,1401,5,215,0,0,1400,1393,
	1,0,0,0,1400,1399,1,0,0,0,1401,213,1,0,0,0,1402,1403,3,216,108,0,1403,1404,
	5,240,0,0,1404,1405,3,202,101,0,1405,215,1,0,0,0,1406,1407,3,50,25,0,1407,
	217,1,0,0,0,1408,1410,3,52,26,0,1409,1408,1,0,0,0,1409,1410,1,0,0,0,1410,
	1411,1,0,0,0,1411,1412,3,48,24,0,1412,219,1,0,0,0,1413,1415,3,52,26,0,1414,
	1413,1,0,0,0,1414,1415,1,0,0,0,1415,1417,1,0,0,0,1416,1418,7,2,0,0,1417,
	1416,1,0,0,0,1417,1418,1,0,0,0,1418,1420,1,0,0,0,1419,1421,3,42,21,0,1420,
	1419,1,0,0,0,1421,1422,1,0,0,0,1422,1420,1,0,0,0,1422,1423,1,0,0,0,1423,
	221,1,0,0,0,1424,1425,7,28,0,0,1425,1426,3,46,23,0,1426,223,1,0,0,0,1427,
	1428,5,120,0,0,1428,1435,3,46,23,0,1429,1432,3,46,23,0,1430,1431,7,27,0,
	0,1431,1433,3,226,113,0,1432,1430,1,0,0,0,1432,1433,1,0,0,0,1433,1435,1,
	0,0,0,1434,1427,1,0,0,0,1434,1429,1,0,0,0,1435,225,1,0,0,0,1436,1439,3,
	228,114,0,1437,1439,3,244,122,0,1438,1436,1,0,0,0,1438,1437,1,0,0,0,1439,
	227,1,0,0,0,1440,1446,3,236,118,0,1441,1446,3,230,115,0,1442,1446,3,238,
	119,0,1443,1446,3,240,120,0,1444,1446,3,242,121,0,1445,1440,1,0,0,0,1445,
	1441,1,0,0,0,1445,1442,1,0,0,0,1445,1443,1,0,0,0,1445,1444,1,0,0,0,1446,
	229,1,0,0,0,1447,1448,3,232,116,0,1448,231,1,0,0,0,1449,1451,5,211,0,0,
	1450,1449,1,0,0,0,1450,1451,1,0,0,0,1451,1454,1,0,0,0,1452,1455,3,218,109,
	0,1453,1455,3,234,117,0,1454,1452,1,0,0,0,1454,1453,1,0,0,0,1455,1456,1,
	0,0,0,1456,1457,7,29,0,0,1457,233,1,0,0,0,1458,1459,3,46,23,0,1459,235,
	1,0,0,0,1460,1462,5,211,0,0,1461,1460,1,0,0,0,1461,1462,1,0,0,0,1462,1463,
	1,0,0,0,1463,1464,3,46,23,0,1464,1465,5,105,0,0,1465,1466,3,284,142,0,1466,
	1467,3,272,136,0,1467,237,1,0,0,0,1468,1469,3,254,127,0,1469,1470,3,260,
	130,0,1470,239,1,0,0,0,1471,1472,3,256,128,0,1472,1473,3,262,131,0,1473,
	241,1,0,0,0,1474,1475,3,258,129,0,1475,1476,3,264,132,0,1476,243,1,0,0,
	0,1477,1478,5,118,0,0,1478,1479,3,186,93,0,1479,1480,7,22,0,0,1480,1481,
	7,30,0,0,1481,1483,5,278,0,0,1482,1484,3,246,123,0,1483,1482,1,0,0,0,1484,
	1485,1,0,0,0,1485,1483,1,0,0,0,1485,1486,1,0,0,0,1486,245,1,0,0,0,1487,
	1488,3,194,97,0,1488,1489,3,248,124,0,1489,1494,1,0,0,0,1490,1491,3,194,
	97,0,1491,1492,3,252,126,0,1492,1494,1,0,0,0,1493,1487,1,0,0,0,1493,1490,
	1,0,0,0,1494,247,1,0,0,0,1495,1496,3,250,125,0,1496,249,1,0,0,0,1497,1498,
	3,214,107,0,1498,1499,3,284,142,0,1499,1500,3,272,136,0,1500,1509,1,0,0,
	0,1501,1502,3,202,101,0,1502,1503,3,232,116,0,1503,1509,1,0,0,0,1504,1505,
	3,214,107,0,1505,1506,7,31,0,0,1506,1507,3,218,109,0,1507,1509,1,0,0,0,
	1508,1497,1,0,0,0,1508,1501,1,0,0,0,1508,1504,1,0,0,0,1509,251,1,0,0,0,
	1510,1515,5,150,0,0,1511,1515,5,149,0,0,1512,1513,5,113,0,0,1513,1515,5,
	114,0,0,1514,1510,1,0,0,0,1514,1511,1,0,0,0,1514,1512,1,0,0,0,1515,1516,
	1,0,0,0,1516,1517,5,118,0,0,1517,1518,3,186,93,0,1518,1519,7,22,0,0,1519,
	1521,5,278,0,0,1520,1522,3,246,123,0,1521,1520,1,0,0,0,1522,1523,1,0,0,
	0,1523,1521,1,0,0,0,1523,1524,1,0,0,0,1524,253,1,0,0,0,1525,1526,7,32,0,
	0,1526,255,1,0,0,0,1527,1528,7,33,0,0,1528,257,1,0,0,0,1529,1530,7,34,0,
	0,1530,259,1,0,0,0,1531,1532,3,272,136,0,1532,261,1,0,0,0,1533,1534,3,272,
	136,0,1534,263,1,0,0,0,1535,1560,3,54,27,0,1536,1560,5,231,0,0,1537,1560,
	5,232,0,0,1538,1539,5,17,0,0,1539,1540,5,272,0,0,1540,1541,3,298,149,0,
	1541,1542,5,276,0,0,1542,1543,3,298,149,0,1543,1544,5,276,0,0,1544,1545,
	3,298,149,0,1545,1546,5,273,0,0,1546,1560,1,0,0,0,1547,1548,5,18,0,0,1548,
	1549,5,272,0,0,1549,1550,3,298,149,0,1550,1551,5,273,0,0,1551,1560,1,0,
	0,0,1552,1560,3,214,107,0,1553,1560,3,222,111,0,1554,1560,3,122,61,0,1555,
	1556,5,272,0,0,1556,1557,3,272,136,0,1557,1558,5,273,0,0,1558,1560,1,0,
	0,0,1559,1535,1,0,0,0,1559,1536,1,0,0,0,1559,1537,1,0,0,0,1559,1538,1,0,
	0,0,1559,1547,1,0,0,0,1559,1552,1,0,0,0,1559,1553,1,0,0,0,1559,1554,1,0,
	0,0,1559,1555,1,0,0,0,1560,265,1,0,0,0,1561,1565,5,103,0,0,1562,1564,3,
	268,134,0,1563,1562,1,0,0,0,1564,1567,1,0,0,0,1565,1563,1,0,0,0,1565,1566,
	1,0,0,0,1566,1568,1,0,0,0,1567,1565,1,0,0,0,1568,1569,5,277,0,0,1569,267,
	1,0,0,0,1570,1572,7,11,0,0,1571,1570,1,0,0,0,1571,1572,1,0,0,0,1572,1573,
	1,0,0,0,1573,1574,5,265,0,0,1574,1575,5,109,0,0,1575,1576,3,270,135,0,1576,
	269,1,0,0,0,1577,1586,3,298,149,0,1578,1581,3,288,144,0,1579,1581,3,292,
	146,0,1580,1578,1,0,0,0,1580,1579,1,0,0,0,1581,1582,1,0,0,0,1582,1583,3,
	298,149,0,1583,1585,1,0,0,0,1584,1580,1,0,0,0,1585,1588,1,0,0,0,1586,1584,
	1,0,0,0,1586,1587,1,0,0,0,1587,271,1,0,0,0,1588,1586,1,0,0,0,1589,1590,
	3,276,138,0,1590,1591,5,276,0,0,1591,1592,3,302,151,0,1592,1593,3,300,150,
	0,1593,1603,1,0,0,0,1594,1595,3,276,138,0,1595,1596,5,276,0,0,1596,1597,
	3,302,151,0,1597,1603,1,0,0,0,1598,1599,3,276,138,0,1599,1600,3,300,150,
	0,1600,1603,1,0,0,0,1601,1603,3,276,138,0,1602,1589,1,0,0,0,1602,1594,1,
	0,0,0,1602,1598,1,0,0,0,1602,1601,1,0,0,0,1603,273,1,0,0,0,1604,1605,3,
	278,139,0,1605,1606,5,276,0,0,1606,1607,3,302,151,0,1607,1608,3,300,150,
	0,1608,1618,1,0,0,0,1609,1610,3,278,139,0,1610,1611,5,276,0,0,1611,1612,
	3,302,151,0,1612,1618,1,0,0,0,1613,1614,3,278,139,0,1614,1615,3,300,150,
	0,1615,1618,1,0,0,0,1616,1618,3,278,139,0,1617,1604,1,0,0,0,1617,1609,1,
	0,0,0,1617,1613,1,0,0,0,1617,1616,1,0,0,0,1618,275,1,0,0,0,1619,1622,3,
	278,139,0,1620,1621,7,35,0,0,1621,1623,3,276,138,0,1622,1620,1,0,0,0,1622,
	1623,1,0,0,0,1623,277,1,0,0,0,1624,1656,3,334,167,0,1625,1656,3,310,155,
	0,1626,1627,3,286,143,0,1627,1628,5,109,0,0,1628,1629,3,48,24,0,1629,1656,
	1,0,0,0,1630,1631,3,286,143,0,1631,1632,5,106,0,0,1632,1633,3,48,24,0,1633,
	1656,1,0,0,0,1634,1635,3,286,143,0,1635,1636,3,282,141,0,1636,1641,3,280,
	140,0,1637,1638,5,276,0,0,1638,1640,3,280,140,0,1639,1637,1,0,0,0,1640,
	1643,1,0,0,0,1641,1639,1,0,0,0,1641,1642,1,0,0,0,1642,1644,1,0,0,0,1643,
	1641,1,0,0,0,1644,1645,5,225,0,0,1645,1646,3,280,140,0,1646,1656,1,0,0,
	0,1647,1651,3,286,143,0,1648,1649,3,284,142,0,1649,1650,3,286,143,0,1650,
	1652,1,0,0,0,1651,1648,1,0,0,0,1651,1652,1,0,0,0,1652,1656,1,0,0,0,1653,
	1656,3,330,165,0,1654,1656,3,332,166,0,1655,1624,1,0,0,0,1655,1625,1,0,
	0,0,1655,1626,1,0,0,0,1655,1630,1,0,0,0,1655,1634,1,0,0,0,1655,1647,1,0,
	0,0,1655,1653,1,0,0,0,1655,1654,1,0,0,0,1656,279,1,0,0,0,1657,1667,5,271,
	0,0,1658,1667,5,270,0,0,1659,1661,5,266,0,0,1660,1662,3,98,49,0,1661,1660,
	1,0,0,0,1661,1662,1,0,0,0,1662,1667,1,0,0,0,1663,1667,5,269,0,0,1664,1667,
	3,54,27,0,1665,1667,3,32,16,0,1666,1657,1,0,0,0,1666,1658,1,0,0,0,1666,
	1659,1,0,0,0,1666,1663,1,0,0,0,1666,1664,1,0,0,0,1666,1665,1,0,0,0,1667,
	281,1,0,0,0,1668,1669,7,36,0,0,1669,283,1,0,0,0,1670,1671,7,37,0,0,1671,
	285,1,0,0,0,1672,1678,3,290,145,0,1673,1674,3,288,144,0,1674,1675,3,290,
	145,0,1675,1677,1,0,0,0,1676,1673,1,0,0,0,1677,1680,1,0,0,0,1678,1676,1,
	0,0,0,1678,1679,1,0,0,0,1679,287,1,0,0,0,1680,1678,1,0,0,0,1681,1682,7,
	38,0,0,1682,289,1,0,0,0,1683,1689,3,294,147,0,1684,1685,3,292,146,0,1685,
	1686,3,294,147,0,1686,1688,1,0,0,0,1687,1684,1,0,0,0,1688,1691,1,0,0,0,
	1689,1687,1,0,0,0,1689,1690,1,0,0,0,1690,291,1,0,0,0,1691,1689,1,0,0,0,
	1692,1693,7,39,0,0,1693,293,1,0,0,0,1694,1700,3,298,149,0,1695,1696,3,296,
	148,0,1696,1697,3,298,149,0,1697,1699,1,0,0,0,1698,1695,1,0,0,0,1699,1702,
	1,0,0,0,1700,1698,1,0,0,0,1700,1701,1,0,0,0,1701,295,1,0,0,0,1702,1700,
	1,0,0,0,1703,1704,7,40,0,0,1704,297,1,0,0,0,1705,1706,6,149,-1,0,1706,1707,
	5,133,0,0,1707,1969,3,298,149,55,1708,1709,5,291,0,0,1709,1969,3,298,149,
	54,1710,1711,5,136,0,0,1711,1969,3,298,149,53,1712,1713,5,11,0,0,1713,1714,
	3,298,149,0,1714,1715,5,142,0,0,1715,1718,3,298,149,0,1716,1717,5,188,0,
	0,1717,1719,3,100,50,0,1718,1716,1,0,0,0,1718,1719,1,0,0,0,1719,1969,1,
	0,0,0,1720,1721,5,192,0,0,1721,1722,3,298,149,0,1722,1723,5,142,0,0,1723,
	1726,3,298,149,0,1724,1725,5,188,0,0,1725,1727,3,100,50,0,1726,1724,1,0,
	0,0,1726,1727,1,0,0,0,1727,1969,1,0,0,0,1728,1729,5,191,0,0,1729,1734,3,
	298,149,0,1730,1731,5,276,0,0,1731,1733,3,298,149,0,1732,1730,1,0,0,0,1733,
	1736,1,0,0,0,1734,1732,1,0,0,0,1734,1735,1,0,0,0,1735,1737,1,0,0,0,1736,
	1734,1,0,0,0,1737,1738,5,212,0,0,1738,1739,3,298,149,50,1739,1969,1,0,0,
	0,1740,1741,5,191,0,0,1741,1742,5,120,0,0,1742,1969,3,46,23,0,1743,1744,
	5,191,0,0,1744,1745,5,120,0,0,1745,1969,3,214,107,0,1746,1747,5,213,0,0,
	1747,1750,5,186,0,0,1748,1750,5,186,0,0,1749,1746,1,0,0,0,1749,1748,1,0,
	0,0,1750,1751,1,0,0,0,1751,1969,3,224,112,0,1752,1753,5,213,0,0,1753,1754,
	5,186,0,0,1754,1969,3,214,107,0,1755,1756,5,186,0,0,1756,1969,3,214,107,
	0,1757,1760,5,266,0,0,1758,1761,5,281,0,0,1759,1761,5,265,0,0,1760,1758,
	1,0,0,0,1760,1759,1,0,0,0,1761,1764,1,0,0,0,1762,1764,5,269,0,0,1763,1757,
	1,0,0,0,1763,1762,1,0,0,0,1764,1765,1,0,0,0,1765,1766,5,240,0,0,1766,1969,
	3,298,149,44,1767,1768,5,269,0,0,1768,1769,5,240,0,0,1769,1969,3,298,149,
	43,1770,1771,5,30,0,0,1771,1776,3,298,149,0,1772,1773,5,276,0,0,1773,1775,
	3,298,149,0,1774,1772,1,0,0,0,1775,1778,1,0,0,0,1776,1774,1,0,0,0,1776,
	1777,1,0,0,0,1777,1779,1,0,0,0,1778,1776,1,0,0,0,1779,1780,7,35,0,0,1780,
	1781,3,298,149,39,1781,1969,1,0,0,0,1782,1783,5,152,0,0,1783,1969,3,298,
	149,37,1784,1785,5,12,0,0,1785,1786,5,272,0,0,1786,1787,3,272,136,0,1787,
	1788,5,273,0,0,1788,1969,1,0,0,0,1789,1790,5,14,0,0,1790,1795,3,298,149,
	0,1791,1792,5,276,0,0,1792,1794,3,298,149,0,1793,1791,1,0,0,0,1794,1797,
	1,0,0,0,1795,1793,1,0,0,0,1795,1796,1,0,0,0,1796,1798,1,0,0,0,1797,1795,
	1,0,0,0,1798,1799,5,212,0,0,1799,1800,3,298,149,35,1800,1969,1,0,0,0,1801,
	1802,5,14,0,0,1802,1803,5,120,0,0,1803,1969,3,214,107,0,1804,1805,5,13,
	0,0,1805,1810,3,298,149,0,1806,1807,5,276,0,0,1807,1809,3,298,149,0,1808,
	1806,1,0,0,0,1809,1812,1,0,0,0,1810,1808,1,0,0,0,1810,1811,1,0,0,0,1811,
	1813,1,0,0,0,1812,1810,1,0,0,0,1813,1814,5,212,0,0,1814,1815,3,298,149,
	33,1815,1969,1,0,0,0,1816,1817,5,13,0,0,1817,1818,5,120,0,0,1818,1969,3,
	214,107,0,1819,1820,5,213,0,0,1820,1821,5,217,0,0,1821,1822,5,237,0,0,1822,
	1969,3,298,149,31,1823,1824,5,208,0,0,1824,1825,5,220,0,0,1825,1826,5,237,
	0,0,1826,1969,3,298,149,30,1827,1828,5,208,0,0,1828,1829,5,205,0,0,1829,
	1830,5,237,0,0,1830,1969,3,298,149,29,1831,1832,5,17,0,0,1832,1833,5,272,
	0,0,1833,1834,3,298,149,0,1834,1835,5,276,0,0,1835,1836,3,298,149,0,1836,
	1837,5,276,0,0,1837,1838,3,298,149,0,1838,1839,5,273,0,0,1839,1969,1,0,
	0,0,1840,1841,5,18,0,0,1841,1842,5,272,0,0,1842,1843,3,298,149,0,1843,1844,
	5,273,0,0,1844,1969,1,0,0,0,1845,1846,3,264,132,0,1846,1847,7,41,0,0,1847,
	1848,3,298,149,0,1848,1849,3,58,29,0,1849,1969,1,0,0,0,1850,1851,5,187,
	0,0,1851,1856,3,298,149,0,1852,1853,5,276,0,0,1853,1855,3,298,149,0,1854,
	1852,1,0,0,0,1855,1858,1,0,0,0,1856,1854,1,0,0,0,1856,1857,1,0,0,0,1857,
	1859,1,0,0,0,1858,1856,1,0,0,0,1859,1860,5,212,0,0,1860,1861,3,298,149,
	25,1861,1969,1,0,0,0,1862,1863,5,189,0,0,1863,1868,3,298,149,0,1864,1865,
	5,276,0,0,1865,1867,3,298,149,0,1866,1864,1,0,0,0,1867,1870,1,0,0,0,1868,
	1866,1,0,0,0,1868,1869,1,0,0,0,1869,1871,1,0,0,0,1870,1868,1,0,0,0,1871,
	1872,5,212,0,0,1872,1873,3,298,149,24,1873,1969,1,0,0,0,1874,1875,5,15,
	0,0,1875,1877,3,272,136,0,1876,1878,3,308,154,0,1877,1876,1,0,0,0,1877,
	1878,1,0,0,0,1878,1969,1,0,0,0,1879,1880,5,213,0,0,1880,1881,5,186,0,0,
	1881,1882,5,206,0,0,1882,1891,5,216,0,0,1883,1885,5,208,0,0,1884,1883,1,
	0,0,0,1884,1885,1,0,0,0,1885,1886,1,0,0,0,1886,1892,5,220,0,0,1887,1889,
	5,213,0,0,1888,1887,1,0,0,0,1888,1889,1,0,0,0,1889,1890,1,0,0,0,1890,1892,
	5,217,0,0,1891,1884,1,0,0,0,1891,1888,1,0,0,0,1892,1893,1,0,0,0,1893,1894,
	5,207,0,0,1894,1969,3,272,136,0,1895,1897,3,32,16,0,1896,1895,1,0,0,0,1897,
	1898,1,0,0,0,1898,1896,1,0,0,0,1898,1899,1,0,0,0,1899,1900,1,0,0,0,1900,
	1901,5,15,0,0,1901,1903,3,272,136,0,1902,1904,3,308,154,0,1903,1902,1,0,
	0,0,1903,1904,1,0,0,0,1904,1969,1,0,0,0,1905,1906,5,16,0,0,1906,1907,7,
	42,0,0,1907,1908,5,240,0,0,1908,1910,3,272,136,0,1909,1911,3,308,154,0,
	1910,1909,1,0,0,0,1910,1911,1,0,0,0,1911,1969,1,0,0,0,1912,1914,3,32,16,
	0,1913,1912,1,0,0,0,1914,1915,1,0,0,0,1915,1913,1,0,0,0,1915,1916,1,0,0,
	0,1916,1917,1,0,0,0,1917,1918,5,16,0,0,1918,1919,7,42,0,0,1919,1920,5,240,
	0,0,1920,1922,3,272,136,0,1921,1923,3,308,154,0,1922,1921,1,0,0,0,1922,
	1923,1,0,0,0,1923,1969,1,0,0,0,1924,1927,3,318,159,0,1925,1927,3,320,160,
	0,1926,1924,1,0,0,0,1926,1925,1,0,0,0,1927,1928,1,0,0,0,1928,1929,3,216,
	108,0,1929,1930,3,322,161,0,1930,1969,1,0,0,0,1931,1934,3,318,159,0,1932,
	1934,3,320,160,0,1933,1931,1,0,0,0,1933,1932,1,0,0,0,1934,1937,1,0,0,0,
	1935,1938,3,222,111,0,1936,1938,3,214,107,0,1937,1935,1,0,0,0,1937,1936,
	1,0,0,0,1938,1939,1,0,0,0,1939,1940,5,146,0,0,1940,1941,3,46,23,0,1941,
	1942,5,236,0,0,1942,1944,3,46,23,0,1943,1945,5,277,0,0,1944,1943,1,0,0,
	0,1944,1945,1,0,0,0,1945,1969,1,0,0,0,1946,1948,5,266,0,0,1947,1949,3,98,
	49,0,1948,1947,1,0,0,0,1948,1949,1,0,0,0,1949,1969,1,0,0,0,1950,1969,5,
	231,0,0,1951,1969,3,32,16,0,1952,1969,3,222,111,0,1953,1969,3,214,107,0,
	1954,1969,3,202,101,0,1955,1969,3,46,23,0,1956,1969,3,122,61,0,1957,1969,
	5,269,0,0,1958,1969,5,270,0,0,1959,1969,5,271,0,0,1960,1969,3,54,27,0,1961,
	1969,5,245,0,0,1962,1969,5,226,0,0,1963,1969,5,215,0,0,1964,1965,5,272,
	0,0,1965,1966,3,272,136,0,1966,1967,5,273,0,0,1967,1969,1,0,0,0,1968,1705,
	1,0,0,0,1968,1708,1,0,0,0,1968,1710,1,0,0,0,1968,1712,1,0,0,0,1968,1720,
	1,0,0,0,1968,1728,1,0,0,0,1968,1740,1,0,0,0,1968,1743,1,0,0,0,1968,1749,
	1,0,0,0,1968,1752,1,0,0,0,1968,1755,1,0,0,0,1968,1763,1,0,0,0,1968,1767,
	1,0,0,0,1968,1770,1,0,0,0,1968,1782,1,0,0,0,1968,1784,1,0,0,0,1968,1789,
	1,0,0,0,1968,1801,1,0,0,0,1968,1804,1,0,0,0,1968,1816,1,0,0,0,1968,1819,
	1,0,0,0,1968,1823,1,0,0,0,1968,1827,1,0,0,0,1968,1831,1,0,0,0,1968,1840,
	1,0,0,0,1968,1845,1,0,0,0,1968,1850,1,0,0,0,1968,1862,1,0,0,0,1968,1874,
	1,0,0,0,1968,1879,1,0,0,0,1968,1896,1,0,0,0,1968,1905,1,0,0,0,1968,1913,
	1,0,0,0,1968,1926,1,0,0,0,1968,1933,1,0,0,0,1968,1946,1,0,0,0,1968,1950,
	1,0,0,0,1968,1951,1,0,0,0,1968,1952,1,0,0,0,1968,1953,1,0,0,0,1968,1954,
	1,0,0,0,1968,1955,1,0,0,0,1968,1956,1,0,0,0,1968,1957,1,0,0,0,1968,1958,
	1,0,0,0,1968,1959,1,0,0,0,1968,1960,1,0,0,0,1968,1961,1,0,0,0,1968,1962,
	1,0,0,0,1968,1963,1,0,0,0,1968,1964,1,0,0,0,1969,1992,1,0,0,0,1970,1973,
	10,38,0,0,1971,1972,5,276,0,0,1972,1974,3,298,149,0,1973,1971,1,0,0,0,1974,
	1975,1,0,0,0,1975,1973,1,0,0,0,1975,1976,1,0,0,0,1976,1977,1,0,0,0,1977,
	1978,7,35,0,0,1978,1979,3,298,149,39,1979,1991,1,0,0,0,1980,1981,10,42,
	0,0,1981,1991,3,300,150,0,1982,1983,10,41,0,0,1983,1984,5,276,0,0,1984,
	1985,3,302,151,0,1985,1986,3,300,150,0,1986,1991,1,0,0,0,1987,1988,10,40,
	0,0,1988,1989,5,276,0,0,1989,1991,3,302,151,0,1990,1970,1,0,0,0,1990,1980,
	1,0,0,0,1990,1982,1,0,0,0,1990,1987,1,0,0,0,1991,1994,1,0,0,0,1992,1990,
	1,0,0,0,1992,1993,1,0,0,0,1993,299,1,0,0,0,1994,1992,1,0,0,0,1995,1996,
	7,43,0,0,1996,1997,5,119,0,0,1997,1998,5,266,0,0,1998,1999,5,165,0,0,1999,
	301,1,0,0,0,2000,2007,3,304,152,0,2001,2007,3,306,153,0,2002,2003,3,304,
	152,0,2003,2004,5,212,0,0,2004,2005,3,306,153,0,2005,2007,1,0,0,0,2006,
	2000,1,0,0,0,2006,2001,1,0,0,0,2006,2002,1,0,0,0,2007,303,1,0,0,0,2008,
	2009,5,20,0,0,2009,2010,3,272,136,0,2010,305,1,0,0,0,2011,2012,5,21,0,0,
	2012,2013,3,272,136,0,2013,307,1,0,0,0,2014,2015,5,4,0,0,2015,2018,3,272,
	136,0,2016,2018,3,312,156,0,2017,2014,1,0,0,0,2017,2016,1,0,0,0,2018,309,
	1,0,0,0,2019,2020,5,7,0,0,2020,2021,3,312,156,0,2021,311,1,0,0,0,2022,2023,
	5,146,0,0,2023,2039,3,264,132,0,2024,2025,5,240,0,0,2025,2026,3,264,132,
	0,2026,2027,5,142,0,0,2027,2028,3,264,132,0,2028,2039,1,0,0,0,2029,2030,
	5,240,0,0,2030,2031,3,264,132,0,2031,2032,5,144,0,0,2032,2033,3,264,132,
	0,2033,2039,1,0,0,0,2034,2035,5,142,0,0,2035,2039,3,264,132,0,2036,2037,
	5,144,0,0,2037,2039,3,264,132,0,2038,2022,1,0,0,0,2038,2024,1,0,0,0,2038,
	2029,1,0,0,0,2038,2034,1,0,0,0,2038,2036,1,0,0,0,2039,313,1,0,0,0,2040,
	2041,5,146,0,0,2041,2057,3,316,158,0,2042,2043,5,142,0,0,2043,2057,3,316,
	158,0,2044,2045,5,144,0,0,2045,2057,3,316,158,0,2046,2047,5,240,0,0,2047,
	2048,3,316,158,0,2048,2049,5,142,0,0,2049,2050,3,316,158,0,2050,2057,1,
	0,0,0,2051,2052,5,240,0,0,2052,2053,3,316,158,0,2053,2054,5,144,0,0,2054,
	2055,3,316,158,0,2055,2057,1,0,0,0,2056,2040,1,0,0,0,2056,2042,1,0,0,0,
	2056,2044,1,0,0,0,2056,2046,1,0,0,0,2056,2051,1,0,0,0,2057,315,1,0,0,0,
	2058,2063,3,54,27,0,2059,2063,5,231,0,0,2060,2063,5,232,0,0,2061,2063,3,
	214,107,0,2062,2058,1,0,0,0,2062,2059,1,0,0,0,2062,2060,1,0,0,0,2062,2061,
	1,0,0,0,2063,317,1,0,0,0,2064,2065,5,213,0,0,2065,2071,5,186,0,0,2066,2071,
	5,186,0,0,2067,2071,5,13,0,0,2068,2071,5,14,0,0,2069,2071,5,191,0,0,2070,
	2064,1,0,0,0,2070,2066,1,0,0,0,2070,2067,1,0,0,0,2070,2068,1,0,0,0,2070,
	2069,1,0,0,0,2071,319,1,0,0,0,2072,2073,7,44,0,0,2073,321,1,0,0,0,2074,
	2078,5,229,0,0,2075,2079,3,324,162,0,2076,2079,3,326,163,0,2077,2079,3,
	328,164,0,2078,2075,1,0,0,0,2078,2076,1,0,0,0,2078,2077,1,0,0,0,2079,2080,
	1,0,0,0,2080,2081,5,277,0,0,2081,2085,1,0,0,0,2082,2083,5,240,0,0,2083,
	2085,3,324,162,0,2084,2074,1,0,0,0,2084,2082,1,0,0,0,2085,323,1,0,0,0,2086,
	2087,5,120,0,0,2087,2090,3,46,23,0,2088,2089,7,27,0,0,2089,2091,3,226,113,
	0,2090,2088,1,0,0,0,2090,2091,1,0,0,0,2091,325,1,0,0,0,2092,2093,5,208,
	0,0,2093,2094,3,46,23,0,2094,2095,5,146,0,0,2095,2096,3,46,23,0,2096,2097,
	5,236,0,0,2097,2098,3,46,23,0,2098,327,1,0,0,0,2099,2100,5,208,0,0,2100,
	2101,3,46,23,0,2101,2102,5,216,0,0,2102,2103,5,274,0,0,2103,2108,3,46,23,
	0,2104,2105,5,276,0,0,2105,2107,3,46,23,0,2106,2104,1,0,0,0,2107,2110,1,
	0,0,0,2108,2106,1,0,0,0,2108,2109,1,0,0,0,2109,2111,1,0,0,0,2110,2108,1,
	0,0,0,2111,2112,5,212,0,0,2112,2113,3,46,23,0,2113,2114,5,275,0,0,2114,
	329,1,0,0,0,2115,2116,3,298,149,0,2116,2117,7,45,0,0,2117,2142,1,0,0,0,
	2118,2119,3,298,149,0,2119,2120,7,46,0,0,2120,2121,5,266,0,0,2121,2122,
	5,163,0,0,2122,2142,1,0,0,0,2123,2124,3,298,149,0,2124,2125,7,47,0,0,2125,
	2126,3,32,16,0,2126,2142,1,0,0,0,2127,2128,3,298,149,0,2128,2129,7,48,0,
	0,2129,2130,3,32,16,0,2130,2142,1,0,0,0,2131,2132,3,298,149,0,2132,2133,
	7,49,0,0,2133,2134,3,32,16,0,2134,2142,1,0,0,0,2135,2136,3,202,101,0,2136,
	2137,5,88,0,0,2137,2142,1,0,0,0,2138,2139,3,298,149,0,2139,2140,5,90,0,
	0,2140,2142,1,0,0,0,2141,2115,1,0,0,0,2141,2118,1,0,0,0,2141,2123,1,0,0,
	0,2141,2127,1,0,0,0,2141,2131,1,0,0,0,2141,2135,1,0,0,0,2141,2138,1,0,0,
	0,2142,331,1,0,0,0,2143,2144,5,233,0,0,2144,2145,3,46,23,0,2145,2146,5,
	89,0,0,2146,2152,1,0,0,0,2147,2148,5,233,0,0,2148,2149,3,46,23,0,2149,2150,
	5,90,0,0,2150,2152,1,0,0,0,2151,2143,1,0,0,0,2151,2147,1,0,0,0,2152,333,
	1,0,0,0,2153,2154,3,202,101,0,2154,2155,3,48,24,0,2155,2156,5,106,0,0,2156,
	2166,1,0,0,0,2157,2158,3,202,101,0,2158,2159,3,48,24,0,2159,2160,5,109,
	0,0,2160,2166,1,0,0,0,2161,2162,3,202,101,0,2162,2163,5,109,0,0,2163,2164,
	3,48,24,0,2164,2166,1,0,0,0,2165,2153,1,0,0,0,2165,2157,1,0,0,0,2165,2161,
	1,0,0,0,2166,335,1,0,0,0,2167,2168,5,102,0,0,2168,2176,3,46,23,0,2169,2171,
	5,174,0,0,2170,2172,5,265,0,0,2171,2170,1,0,0,0,2172,2173,1,0,0,0,2173,
	2171,1,0,0,0,2173,2174,1,0,0,0,2174,2175,1,0,0,0,2175,2177,5,273,0,0,2176,
	2169,1,0,0,0,2176,2177,1,0,0,0,2177,2179,1,0,0,0,2178,2180,5,279,0,0,2179,
	2178,1,0,0,0,2179,2180,1,0,0,0,2180,337,1,0,0,0,2181,2182,5,270,0,0,2182,
	339,1,0,0,0,2183,2184,3,272,136,0,2184,2185,5,112,0,0,2185,2186,3,272,136,
	0,2186,2187,5,276,0,0,2187,2190,5,26,0,0,2188,2191,3,342,171,0,2189,2191,
	3,344,172,0,2190,2188,1,0,0,0,2190,2189,1,0,0,0,2191,2193,1,0,0,0,2192,
	2194,3,352,176,0,2193,2192,1,0,0,0,2193,2194,1,0,0,0,2194,341,1,0,0,0,2195,
	2196,3,350,175,0,2196,343,1,0,0,0,2197,2198,5,278,0,0,2198,2200,3,346,173,
	0,2199,2201,5,277,0,0,2200,2199,1,0,0,0,2200,2201,1,0,0,0,2201,345,1,0,
	0,0,2202,2206,3,348,174,0,2203,2205,3,348,174,0,2204,2203,1,0,0,0,2205,
	2208,1,0,0,0,2206,2204,1,0,0,0,2206,2207,1,0,0,0,2207,347,1,0,0,0,2208,
	2206,1,0,0,0,2209,2210,5,291,0,0,2210,2212,3,350,175,0,2211,2213,7,50,0,
	0,2212,2211,1,0,0,0,2212,2213,1,0,0,0,2213,349,1,0,0,0,2214,2229,5,194,
	0,0,2215,2216,5,35,0,0,2216,2229,3,272,136,0,2217,2218,5,34,0,0,2218,2219,
	7,51,0,0,2219,2229,3,272,136,0,2220,2221,5,33,0,0,2221,2229,3,350,175,0,
	2222,2223,5,21,0,0,2223,2229,3,216,108,0,2224,2225,5,119,0,0,2225,2226,
	5,266,0,0,2226,2227,5,165,0,0,2227,2229,5,134,0,0,2228,2214,1,0,0,0,2228,
	2215,1,0,0,0,2228,2217,1,0,0,0,2228,2220,1,0,0,0,2228,2222,1,0,0,0,2228,
	2224,1,0,0,0,2229,351,1,0,0,0,2230,2231,5,19,0,0,2231,2233,3,272,136,0,
	2232,2234,5,195,0,0,2233,2232,1,0,0,0,2233,2234,1,0,0,0,2234,353,1,0,0,
	0,251,360,362,373,378,387,391,398,402,405,410,413,417,422,433,437,441,446,
	457,467,473,478,486,490,495,500,511,516,521,527,533,539,544,550,556,565,
	567,570,575,580,586,592,598,603,609,615,624,626,630,633,638,643,649,655,
	661,666,672,678,680,688,697,706,723,726,729,734,739,744,748,752,755,761,
	765,773,776,779,787,794,801,810,817,825,833,836,843,849,860,869,873,877,
	881,895,900,906,911,916,924,930,933,948,952,956,959,962,970,977,981,989,
	993,1001,1010,1018,1024,1028,1030,1035,1042,1047,1053,1056,1059,1064,1068,
	1070,1076,1093,1103,1107,1111,1125,1128,1150,1153,1172,1177,1184,1188,1197,
	1200,1208,1213,1227,1230,1232,1237,1246,1254,1264,1270,1280,1286,1296,1298,
	1315,1320,1327,1332,1339,1349,1354,1359,1364,1372,1381,1388,1391,1397,1400,
	1409,1414,1417,1422,1432,1434,1438,1445,1450,1454,1461,1485,1493,1508,1514,
	1523,1559,1565,1571,1580,1586,1602,1617,1622,1641,1651,1655,1661,1666,1678,
	1689,1700,1718,1726,1734,1749,1760,1763,1776,1795,1810,1856,1868,1877,1884,
	1888,1891,1898,1903,1910,1915,1922,1926,1933,1937,1944,1948,1968,1975,1990,
	1992,2006,2017,2038,2056,2062,2070,2078,2084,2090,2108,2141,2151,2165,2173,
	2176,2179,2190,2193,2200,2206,2212,2228,2233];

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
	public unitIdentifier(): UnitIdentifierContext {
		return this.getTypedRuleContext(UnitIdentifierContext, 0) as UnitIdentifierContext;
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
	public eenheidMacht_list(): EenheidMachtContext[] {
		return this.getTypedRuleContexts(EenheidMachtContext) as EenheidMachtContext[];
	}
	public eenheidMacht(i: number): EenheidMachtContext {
		return this.getTypedRuleContext(EenheidMachtContext, i) as EenheidMachtContext;
	}
	public SLASH(): TerminalNode {
		return this.getToken(RegelSpraakParser.SLASH, 0);
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
	public attribuutReferentie(): AttribuutReferentieContext {
		return this.getTypedRuleContext(AttribuutReferentieContext, 0) as AttribuutReferentieContext;
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
	public kenmerkNaam(): KenmerkNaamContext {
		return this.getTypedRuleContext(KenmerkNaamContext, 0) as KenmerkNaamContext;
	}
	public IS(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS, 0);
	}
	public ZIJN(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN, 0);
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
	public unitIdentifier(): UnitIdentifierContext {
		return this.getTypedRuleContext(UnitIdentifierContext, 0) as UnitIdentifierContext;
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
	public unitIdentifier(): UnitIdentifierContext {
		return this.getTypedRuleContext(UnitIdentifierContext, 0) as UnitIdentifierContext;
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
export class UnaryDagsoortConditionContext extends UnaryConditionContext {
	public _expr!: PrimaryExpressionContext;
	public _op!: Token;
	public _dagsoort!: IdentifierContext;
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
	public IS_EEN_DAGSOORT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_EEN_DAGSOORT, 0);
	}
	public ZIJN_EEN_DAGSOORT(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_EEN_DAGSOORT, 0);
	}
	public IS_GEEN_DAGSOORT(): TerminalNode {
		return this.getToken(RegelSpraakParser.IS_GEEN_DAGSOORT, 0);
	}
	public ZIJN_GEEN_DAGSOORT(): TerminalNode {
		return this.getToken(RegelSpraakParser.ZIJN_GEEN_DAGSOORT, 0);
	}
	// @Override
	public accept<Result>(visitor: RegelSpraakVisitor<Result>): Result {
		if (visitor.visitUnaryDagsoortCondition) {
			return visitor.visitUnaryDagsoortCondition(this);
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
	public _name!: NaamwoordContext;
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
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
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
	public _name!: NaamwoordContext;
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
	public naamwoord(): NaamwoordContext {
		return this.getTypedRuleContext(NaamwoordContext, 0) as NaamwoordContext;
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
