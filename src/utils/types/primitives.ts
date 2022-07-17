/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isBigInt(value: any): value is bigint {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'BigInt') {
		return true
	} else if (typeof value === 'bigint') {
		return true
	} else if (value instanceof BigInt) {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isBoolean(value: any): value is boolean {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Boolean') {
		return true
	} else if (typeof value === 'boolean') {
		return true
	} else if (value instanceof Boolean) {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isNull(value: any): value is null {
	if (value === null) {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isNullOrUndefined(value: any): value is null | undefined {
	if (isNull(value)) {
		return true
	} else if (isUndefined(value)) {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isNumber(value: any): value is number {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Number') {
		return true
	} else if (typeof value === 'number') {
		return true
	} else if (value instanceof Number) {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isObject(value: any): value is object {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Object') {
		return true
	} else if (typeof value === 'object') {
		return true
	} else if (value instanceof Object) {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isString(value: any): value is string {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'String') {
		return true
	} else if (typeof value === 'string') {
		return true
	} else if (value instanceof String) {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isUndefined(value: any): value is undefined {
	if (value === undefined) {
		return true
	} else if (typeof value === 'undefined') {
		return true
	}
	return false
}

/**
 * @author GeisonJr
 * @version 1.0.1
 * @param value
 */
export function isSymbol(value: any): value is symbol {
	if (isNullOrUndefined(value)) {
		return false
	} else if (value.constructor.name === 'Symbol') {
		return true
	} else if (typeof value === 'symbol') {
		return true
	} else if (value instanceof Symbol) {
		return true
	}
	return false
}
