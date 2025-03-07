/** Returns true if `str` starts with one of the provided `strings`.
 *
 * @param str
 * @param strings
 * @returns
 *
 * ## Usage
 * ```ts
 * startsWithOneOf('ab', 'a', 'c'); // true
 * startsWithOneOf('cc', 'a', 'b'); // false
 * ```
 */
export const startsWithOneOf = (str: string, strings: string[]): boolean => {
	for (const s of strings) {
		if (str.startsWith(s)) return true;
	}

	return false;
};

/** Returns true if `str` starts with one of the provided `strings`.
 *
 * @param str
 * @param strings
 * @returns
 *
 * ## Usage
 * ```ts
 * endsWithOneOf('cb', 'a', 'b'); // true
 * endsWithOneOf('cc', 'a', 'b'); // false
 * ```
 */
export const endsWithOneOf = (str: string, strings: string[]): boolean => {
	for (const s of strings) {
		if (str.endsWith(s)) return true;
	}

	return false;
};
