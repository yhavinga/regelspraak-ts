/**
 * Centralized predicate evaluator
 * Single source of truth for all predicate evaluation logic
 */

import {
  Predicate,
  SimplePredicate,
  CompoundPredicate,
  NotPredicate,
  AttributePredicate,
  isSimplePredicate,
  isCompoundPredicate,
  isNotPredicate,
  isAttributePredicate
} from './predicate-types';
import { QuantifierType } from '../ast/expressions';
import { Value, RuntimeContext, isLeeg } from '../interfaces';
import { Expression } from '../ast/expressions';
import { ExpressionEvaluator, checkElfproef, isNumeriekExact } from '../evaluators/expression-evaluator';
import { UnitRegistry } from '../units/unit-registry';
import { compareRuntimeValues } from '../units/value-semantics';
import { evaluateDagsoort as evaluateDagsoortValue } from '../evaluators/dagsoort-evaluator';

export class PredicateEvaluator {
  private expressionEvaluator: ExpressionEvaluator;
  private unitRegistry = new UnitRegistry();

  constructor(expressionEvaluator: ExpressionEvaluator) {
    this.expressionEvaluator = expressionEvaluator;
  }

  /**
   * Main entry point for predicate evaluation
   * Evaluates a predicate against a value in a given context
   */
  evaluate(predicate: Predicate, value: Value, context: RuntimeContext): boolean {
    if (isSimplePredicate(predicate)) {
      return this.evaluateSimple(predicate, value, context);
    }
    
    if (isCompoundPredicate(predicate)) {
      return this.evaluateCompound(predicate, value, context);
    }
    
    if (isNotPredicate(predicate)) {
      return !this.evaluate(predicate.predicate, value, context);
    }
    
    if (isAttributePredicate(predicate)) {
      return this.evaluateAttribute(predicate, value, context);
    }
    
    throw new Error(`Unknown predicate type: ${predicate.type}`);
  }

  /**
   * Evaluates simple predicates
   */
  private evaluateSimple(predicate: SimplePredicate, value: Value, context: RuntimeContext): boolean {
    const { operator, negated } = predicate;
    let result = false;

    switch (operator) {
      // Comparison operators
      case '==':
      case '!=':
      case '>':
      case '<':
      case '>=':
      case '<=':
        result = this.evaluateComparison(predicate, context);
        break;

      // Kenmerk check (heeft/is kenmerk)
      case 'kenmerk':
        result = this.evaluateKenmerk(predicate, value, context);
        break;

      // Rolcheck (§8.1.7): the subject fills a FeitType role.
      case 'rol':
        if (!predicate.kenmerk) {
          throw new Error('Rol predicate requires the role name in `kenmerk`');
        }
        result = (context as any).hasRol ? (context as any).hasRol(value, predicate.kenmerk) : false;
        break;

      // Dagsoort check (is een dagsoort)
      case 'dagsoort':
        result = this.evaluateDagsoort(predicate, value, context);
        break;

      // Elfproef validation (§8.1.3) — evaluate the operand, not the filtered item.
      case 'elfproef': {
        if (!predicate.left) {
          throw new Error('Elfproef predicate requires a left operand');
        }
        const operand = this.expressionEvaluator.evaluate(predicate.left, context);
        if (isLeeg(operand)) {
          result = false;
        } else if (operand.type === 'string' || operand.type === 'number') {
          result = checkElfproef(operand.value as string | number);
        } else {
          result = false;
        }
        break;
      }

      // Uniqueness check
      case 'uniek':
        result = this.evaluateUniek(value);
        break;

      // Numeric exact digits check
      case 'numeriek_exact':
        result = this.evaluateNumeriekExact(predicate, value, context);
        break;

      // Rule status checks
      case 'gevuurd':
        result = this.evaluateRegelGevuurd(predicate, context);
        break;

      case 'inconsistent':
        result = this.evaluateRegelInconsistent(predicate, context);
        break;

      default:
        throw new Error(`Unknown simple predicate operator: ${operator}`);
    }

    // Apply negation if needed
    return negated ? !result : result;
  }

  /**
   * Evaluates compound predicates with quantifiers
   */
  private evaluateCompound(predicate: CompoundPredicate, value: Value, context: RuntimeContext): boolean {
    const { quantifier, count, predicates } = predicate;
    
    // Evaluate each nested predicate
    let trueCount = 0;
    for (const nestedPredicate of predicates) {
      // Check if this is actually a predicate or an expression
      if (!nestedPredicate || typeof nestedPredicate !== 'object' || !nestedPredicate.type) {
        throw new Error('Invalid predicate in compound condition');
      }
      
      // If it's not a recognized predicate type, it's an expression that needs evaluation
      if (!isSimplePredicate(nestedPredicate) && !isCompoundPredicate(nestedPredicate) && 
          !isNotPredicate(nestedPredicate) && !isAttributePredicate(nestedPredicate)) {
        // This is an expression, not a predicate
        // Evaluate it using the expression evaluator
        const exprResult = this.expressionEvaluator.evaluate(nestedPredicate as any, context);
        
        // Strict boolean check - each condition must evaluate to boolean
        if (exprResult.type !== 'boolean') {
          throw new Error(`Compound condition element must evaluate to boolean, got ${exprResult.type}`);
        }
        
        if (exprResult.value === true) {
          trueCount++;
        }
      } else {
        // It's a proper predicate, evaluate normally
        if (this.evaluate(nestedPredicate, value, context)) {
          trueCount++;
        }
      }
    }

    // Apply quantifier logic
    switch (quantifier) {
      case QuantifierType.ALLE:
        return trueCount === predicates.length;
      
      case QuantifierType.GEEN:
        return trueCount === 0;
      
      case QuantifierType.TEN_MINSTE:
        if (count === undefined) {
          throw new Error('TEN_MINSTE requires a count');
        }
        return trueCount >= count;
      
      case QuantifierType.TEN_HOOGSTE:
        if (count === undefined) {
          throw new Error('TEN_HOOGSTE requires a count');
        }
        return trueCount <= count;
      
      case QuantifierType.PRECIES:
        if (count === undefined) {
          throw new Error('PRECIES requires a count');
        }
        return trueCount === count;
      
      default:
        throw new Error(`Unknown quantifier: ${quantifier}`);
    }
  }

  /**
   * Evaluates attribute predicates (for subselectie)
   */
  private evaluateAttribute(predicate: AttributePredicate, value: Value, context: RuntimeContext): boolean {
    // Check if value is an object
    if (value.type !== 'object') {
      return false;
    }

    // Get the attribute value. The visitor lowers a possessive criterion ("zijn leeftijd is ...")
    // to a 'self'-prefixed / dotted key, so strip a leading self/pronoun segment before the lookup
    // instead of doing a flat record read of "self.leeftijd" (which is never a key).
    const attrValue = this.readSubselectieAttribute(value, predicate.attribute, context);
    if (!attrValue) {
      return false;
    }

    // Evaluate the comparison value
    const compValue = this.expressionEvaluator.evaluate(predicate.value, context);

    // §8.2 whole-period check on a subselectie attribute criterion — reuse the shared reducer
    // (it fails fast when the attribute is not tijdsafhankelijk, per §3310).
    if (predicate.gehelePeriode) {
      return this.expressionEvaluator.evaluateGehelePeriodeComparison(
        attrValue, compValue, predicate.operator, predicate.gehelePeriode, !!predicate.gehelePeriodeNegated, context
      );
    }

    // Perform comparison
    return this.compareValues(attrValue, predicate.operator, compValue, context);
  }

  /**
   * Read a subselectie attribute criterion's value off the element. The attribute key may be a
   * 'self'-prefixed / dotted path (e.g. "self.leeftijd") from the visitor's lowering; strip a
   * leading self/pronoun segment, then read the single attribute directly or navigate a deeper
   * dotted path via the engine's one navigation authority.
   */
  private readSubselectieAttribute(value: Value, attribute: string, context: RuntimeContext): Value | undefined {
    let segs = attribute.split('.');
    if (segs.length > 1 && ['self', 'hij', 'zij', 'hem', 'haar'].includes(segs[0].toLowerCase())) {
      segs = segs.slice(1);
    }
    if (segs.length === 1) {
      return (value.value as Record<string, Value>)[segs[0]];
    }
    const prev = (context as any).current_instance;
    (context as any).current_instance = value;
    try {
      return this.expressionEvaluator.evaluate({ type: 'AttributeReference', path: ['self', ...segs] } as Expression, context);
    } catch {
      return undefined;
    } finally {
      (context as any).current_instance = prev;
    }
  }

  /**
   * Helper: Evaluate comparison predicates
   */
  private evaluateComparison(predicate: SimplePredicate, context: RuntimeContext): boolean {
    if (!predicate.left || !predicate.right) {
      throw new Error('Comparison predicate requires left and right expressions');
    }

    const leftValue = this.expressionEvaluator.evaluate(predicate.left, context);
    const rightValue = this.expressionEvaluator.evaluate(predicate.right, context);

    // §8.2 whole-period check on a lowered comparison predicate — reuse the one shared reducer.
    if (predicate.gehelePeriode) {
      return this.expressionEvaluator.evaluateGehelePeriodeComparison(
        leftValue, rightValue, predicate.operator, predicate.gehelePeriode, !!predicate.gehelePeriodeNegated, context
      );
    }

    return this.compareValues(leftValue, predicate.operator, rightValue, context);
  }

  /**
   * Helper: Compare two values
   */
  private compareValues(left: Value, operator: string, right: Value, context: RuntimeContext): boolean {
    const registry = (context as any).unitRegistry || this.unitRegistry;
    return compareRuntimeValues(left, operator, right, registry);
  }

  /**
   * Helper: Evaluate kenmerk predicate.
   * Uses RuntimeContext.getKenmerk() which handles equivalence.
   */
  private evaluateKenmerk(
    predicate: SimplePredicate,
    value: Value,
    context: RuntimeContext
  ): boolean {
    if (!predicate.kenmerk) {
      throw new Error('Kenmerk predicate requires kenmerk property');
    }

    // §8.1.8 navigated kenmerk-check ("zijn reis is duurzaam"): the kenmerk lives on a related
    // object reached via a rol hop, not on the element itself. navigation.path = [...hop, kenmerk];
    // navigate the hop (reusing the engine's one navigation authority), then read the kenmerk on
    // the reached object.
    const navigation = predicate.navigation as any;
    if (navigation && navigation.type === 'AttributeReference' && Array.isArray(navigation.path) && navigation.path.length >= 2) {
      // navigation.path = [maybe 'self'/pronoun, ...rol hop, kenmerkName]. Drop the leading pronoun
      // and the trailing kenmerk; navigate the rol hop via the possessive form so the engine walks
      // the FeitType relation store (not the element's own fields), then read the kenmerk there.
      let hop = navigation.path.slice(0, -1) as string[];
      if (hop.length && ['self', 'hij', 'zij', 'hem', 'haar'].includes(String(hop[0]).toLowerCase())) {
        hop = hop.slice(1);
      }
      if (hop.length >= 1) {
        const navPath = ['zijn ' + hop[0], ...hop.slice(1)];
        const prev = (context as any).current_instance;
        (context as any).current_instance = value;
        let reached: Value | undefined;
        try {
          reached = this.expressionEvaluator.evaluate({ type: 'AttributeReference', path: navPath } as Expression, context);
        } catch {
          reached = undefined;
        } finally {
          (context as any).current_instance = prev;
        }
        const target = reached && reached.type === 'array' ? (reached.value as Value[])[0] : reached;
        if (!target || target.type !== 'object') {
          return false;
        }
        const has = context.getKenmerk((target as any).objectType || '', (target as any).objectId || '', predicate.kenmerk);
        return has ?? false;
      }
    }

    if (value.type !== 'object') {
      return false;
    }

    const valueAny = value as any;
    const objectType = valueAny.objectType || '';
    const objectId = valueAny.objectId || '';

    // Primary path: use RuntimeContext.getKenmerk() which handles equivalence
    if (objectType && objectId) {
      const hasKenmerk = context.getKenmerk(objectType, objectId, predicate.kenmerk);
      if (hasKenmerk !== undefined) {
        return hasKenmerk;
      }
    }

    // Fallback: check value directly (for mock objects without objectType/objectId)
    const kenmerkKey = `is ${predicate.kenmerk}`;
    const kenmerkValue = value.value[kenmerkKey];
    if (kenmerkValue && kenmerkValue.type === 'boolean') {
      return kenmerkValue.value === true;
    }

    // Also check without 'is ' prefix
    const directValue = value.value[predicate.kenmerk];
    if (directValue && directValue.type === 'boolean') {
      return directValue.value === true;
    }

    // §8.1.7: a subselectie rolcheck lowers to a kenmerk SimplePredicate. If the name is a
    // declared rol (not a kenmerk on this object), test role membership instead of reading a field.
    if ((context as any).findFeittypeByRole?.(predicate.kenmerk) && (context as any).hasRol) {
      return (context as any).hasRol(value, predicate.kenmerk);
    }

    return false;
  }

  /**
   * Helper: Evaluate dagsoort predicate
   */
  private evaluateDagsoort(predicate: SimplePredicate, value: Value, context: RuntimeContext): boolean {
    if (!predicate.dagsoort) {
      throw new Error('Dagsoort predicate requires dagsoort property');
    }

    return evaluateDagsoortValue(
      value,
      predicate.dagsoort,
      true,
      context,
      this.expressionEvaluator
    );
  }

  /**
   * Helper: Evaluate uniqueness
   */
  private evaluateUniek(value: Value): boolean {
    if (value.type !== 'array') {
      return false;
    }

    const seen = new Set<string>();
    for (const item of value.value) {
      const key = JSON.stringify(item);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
    }

    return true;
  }

  /**
   * Helper: Evaluate numeric exact digits
   */
  private evaluateNumeriekExact(predicate: SimplePredicate, value: Value, context: RuntimeContext): boolean {
    if (!predicate.digits) {
      throw new Error('Numeriek exact predicate requires digits property');
    }

    // §8.1.4: the operand is the predicate's left expression (like elfproef), not the filtered
    // item; fall back to the passed value only when no operand is set. NO stripping (leading
    // zeros count). Shared helper with the binary path and the decision-table column.
    const operand = predicate.left ? this.expressionEvaluator.evaluate(predicate.left, context) : value;
    if (isLeeg(operand)) {
      return false;
    }
    return isNumeriekExact(operand.value as string | number, predicate.digits);
  }

  /**
   * Helper: Check if rule has been executed
   */
  private evaluateRegelGevuurd(predicate: SimplePredicate, context: RuntimeContext): boolean {
    const regelNaam = this.regelNaamFromPredicate(predicate);
    return regelNaam ? ((context as any).isRuleExecuted?.(regelNaam) ?? false) : false;
  }

  /**
   * Helper: Check if rule is inconsistent
   */
  private evaluateRegelInconsistent(predicate: SimplePredicate, context: RuntimeContext): boolean {
    const regelNaam = this.regelNaamFromPredicate(predicate);
    return regelNaam ? ((context as any).isRuleInconsistent?.(regelNaam) ?? false) : false;
  }

  /**
   * The referenced rule name carried on a regelpredicaat. The visitor emits a StringLiteral
   * (the older 'Literal' shape is still accepted). Name reconciliation (trailing 'is', case,
   * whitespace) happens in Context.isRuleExecuted/isRuleInconsistent (§8.1.9).
   */
  private regelNaamFromPredicate(predicate: SimplePredicate): string | undefined {
    const left = predicate.left as any;
    if (left && (left.type === 'StringLiteral' || left.type === 'Literal') && typeof left.value === 'string') {
      return left.value;
    }
    return undefined;
  }
}