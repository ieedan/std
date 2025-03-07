/** Generate a random number that lies between the provided min and max.
 *
 * @param min
 * @param max
 * @returns
 *
 * ## Usage
 * ```ts
 * const num = rand(0, 10); // 0 >= num <= 10
 * ```
 */
const rand = (min: number, max: number): number => {
	if (min > max) {
		throw new Error('Max should not be greater than min!');
	}

	return Math.random() * (max - min) + min;
};

export { rand };
