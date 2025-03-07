/** Converts degrees to radians
 *
 * @param degrees
 * @returns
 *
 * ## Usage
 * ```ts
 * dtr(180); // 3.14159268358979
 * ```
 */
export function dtr(degrees: number): number {
	return degrees * (Math.PI / 180);
}

/** Converts radians to degrees
 *
 * @param radians
 * @returns
 *
 * ## Usage
 * ```ts
 * rtd(Math.PI); // 180
 * ```
 */
export function rtd(radians: number): number {
	return radians * (180 / Math.PI);
}
