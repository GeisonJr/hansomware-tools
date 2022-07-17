/* Utils */
import { isBigInt, isBoolean, isNumber, isObject, isString, isSymbol, isUndefined } from '@utils/types/primitives'

/**
 * @author GeisonJr
 * @version 1.0.0
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof}
 */
/* eslint-disable no-new-wrappers */
/* eslint-disable quotes */
/* eslint-disable symbol-description */
describe('testing primitive types', () => {
	test('Booleans', () => {
		expect(isBoolean(false)).toBe(true)
		expect(isBoolean(true)).toBe(true)
		// two calls of the ! (logical NOT) operator are equivalent to Boolean()
		expect(isBoolean(!!1)).toBe(true)
		expect(isBoolean(!!0)).toBe(true)
		expect(isBoolean(!!'')).toBe(true)
		expect(isBoolean(!!'bla')).toBe(true)
		// Boolean() will convert values based on if they're truthy or falsy
		expect(isBoolean(Boolean(''))).toBe(true)
		expect(isBoolean(Boolean('bla'))).toBe(true)
		expect(isBoolean(Boolean(0))).toBe(true)
		expect(isBoolean(Boolean(1))).toBe(true)
		// - mas nunca utilize desta forma!
		expect(isBoolean(Boolean(false))).toBe(true)
		expect(isBoolean(Boolean(true))).toBe(true)
	})
	test('Numbers', () => {
		expect(isNumber(1)).toBe(true)
		expect(isNumber(3.14)).toBe(true)
		expect(isNumber(Infinity)).toBe(true)
		expect(isNumber(Math.LN2)).toBe(true)
		expect(isNumber(NaN)).toBe(true) // Despite being 'Not-A-Number'
		expect(isNumber(Number('1'))).toBe(true) // Number tries to parse things into
		expect(isNumber(Number('show'))).toBe(true) // including values that cannot be type coerced to a number
		// - mas nunca utilize desta forma!
		expect(isNumber(Number(1))).toBe(true)
	})
	test('BigInts', () => {
		expect(isBigInt(1n)).toBe(true)
		// - mas nunca utilize desta forma!
		expect(isBigInt(BigInt(1n))).toBe(true)
	})
	test('Objects', () => {
		expect(isObject([1, 2, 4])).toBe(true) // use Array.isArray or Object.prototype.toString.call to differentiate regular objects from arrays
		expect(isObject({ a: 1 })).toBe(true)
		expect(isObject(/regex/)).toBe(true) // See Regular expressions section for historical results
		expect(isObject(new Boolean(true))).toBe(true)
		expect(isObject(new Date())).toBe(true)
		expect(isObject(new Number(1))).toBe(true)
		expect(isObject(new String('abc'))).toBe(true)
		expect(isObject(null)).toBe(false) // This stands since the beginning of JavaScript
	})
	test('Symbols', () => {
		expect(isSymbol(Symbol())).toBe(true)
		expect(isSymbol(Symbol('foo'))).toBe(true)
		expect(isSymbol(Symbol.iterator)).toBe(true)
	})
	test('Strings', () => {
		expect(isString('')).toBe(true)
		expect(isString('1')).toBe(true)
		expect(isString('bla')).toBe(true)
		expect(isString(`bla`)).toBe(true) // template literals
		expect(isString(String(1))).toBe(true) // String converts anything into a string, safer than toString
		expect(isString(typeof 1)).toBe(true) // typeof always returns a string
		// - mas nunca utilize desta forma!
		expect(isString(String('abc'))).toBe(true)
	})
	test('Undefineds', () => {
		/* Constants */
		const declaredButUndefinedVariable = undefined

		expect(isUndefined(declaredButUndefinedVariable)).toBe(true)
		// expect(isUndefined(eval('undeclaredVariable'))).toBe(true)
		expect(isUndefined(undefined)).toBe(true)
	})
})
