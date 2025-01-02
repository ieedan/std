/** Generate a random number that lies between the provided min and max.
 * 
 * ## Usage
 * 
 * ```
 * const num = rand(0, 10); // 0 >= num <= 10
 * ```
 * 
 * @param min 
 * @param max 
 * @returns 
 */
const rand = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};

export { rand };
