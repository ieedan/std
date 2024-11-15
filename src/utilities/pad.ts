/** Adds the `padWith` (default `' '`) to the string the amount of times specified by the `space` argument
 *
 * @param str String to add padding to
 * @param space Whitespace to add
 * @param padWith Character to use to pad the string
 * @returns
 *
 * ## Usage
 * ```ts
 * const padded = leftPad("Hello", 3, ".");
 *
 * console.log(padded); // '...Hello'
 * ```
 */
const leftPad = (str: string, space: number, padWith = ' ') => {
	return padWith.repeat(space) + str;
};

/** Adds the `padWith` until the string length matches the `length`
 *
 * @param str
 * @param length
 * @param padWith
 *
 * ## Usage
 * ```ts
 * const padded = leftPadMin("1", 3, ".");
 *
 * console.log(padded); // '..1'
 * ```
 */
const leftPadMin = (str: string, length: number, padWith = ' ') => {
	if (str.length > length) throw new Error('String length is greater than the length provided.');

	return padWith.repeat(length - str.length) + str;
};

/** Adds the `padWith` (default `' '`) to the string the amount of times specified by the `space` argument
 *
 * @param str String to add padding to
 * @param space Whitespace to add
 * @param padWith Character to use to pad the string
 * @returns
 *
 * ## Usage
 * ```ts
 * const padded = rightPad("Hello", 3, ".");
 *
 * console.log(padded); // 'Hello...'
 * ```
 */
const rightPad = (str: string, space: number, padWith = ' ') => {
	return str + padWith.repeat(space);
};

/** Adds the `padWith` until the string length matches the `length`
 *
 * @param str
 * @param length
 * @param padWith
 *
 * ## Usage
 * ```ts
 * const padded = rightPadMin("1", 3, ".");
 *
 * console.log(padded); // '1..'
 * ```
 */
const rightPadMin = (str: string, length: number, padWith = ' ') => {
	if (str.length > length) throw new Error('String length is greater than the length provided.');

	return str + padWith.repeat(length - str.length);
};

export { leftPad, leftPadMin, rightPad, rightPadMin };
