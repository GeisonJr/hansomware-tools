/* Utils */
import { isNullOrUndefined } from '@utils/types/primitives'

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isArray<T = any>(value: any): value is Array<T> {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Array') {
		return true
	} else if (value instanceof Array) {
		return true
	} else if (Array.isArray(value)) {
		return true
	}

	return false
}

/**
 * @author GeisonJr
 * @version 1.0.0
 * @param value
 */
export function isBuffer(value: any): value is Buffer {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Buffer') {
		return true
	} else if (value instanceof Buffer) {
		return true
	} else if (Buffer.isBuffer(value)) {
		return true
	}

	return false
}

/**
 * @author GeisonJr
 * @version 1.0.0
 * @param value
 */
export function isDate(value: any): value is Date {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Date') {
		return true
	} else if (value instanceof Date) {
		return true
	}

	return false
}

/**
 * @author GeisonJr
 * @version 1.0.0
 * @param value
 */
export function isError(value: any): value is Error {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Error') {
		return true
	} else if (value instanceof Error) {
		return true
	}

	return false
}

/**
 * @author GeisonJr
 * @version 1.0.0
 * @param value
 */
export function isFunction(value: any): value is Function {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Function') {
		return true
	} else if (typeof value === 'function') {
		return true
	} else if (value instanceof Function) {
		return true
	}

	return false
}

/**
 * @author GeisonJr
 * @version 1.0.0
 * @param value
 */
export function isRegExp(value: any): value is RegExp {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'RegExp') {
		return true
	} else if (value instanceof RegExp) {
		return true
	}

	return false
}
