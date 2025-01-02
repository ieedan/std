/** Creates a new stopwatch instance.
 *
 * @returns
 *
 * # Usage
 * ```ts
 * const w = new Stopwatch();
 *
 * w.start();
 *
 * await sleep(1000);
 *
 * console.log(w.elapsed()); // 1000
 * ```
 */
export class StopWatch {
	startedAt: number | undefined = undefined;
	endedAt: number | undefined = undefined;

	/** Start the stopwatch.
	 *
	 * @returns
	 *
	 * # Usage
	 *
	 * ```ts
	 * const w = stopwatch();
	 *
	 * w.start(); // start counting
	 * ```
	 */
	start() {
		this.startedAt = Date.now();
	}

	/** Stop the stopwatch.
	 *
	 * @returns
	 *
	 * # Usage
	 *
	 * ```ts
	 * const w = stopwatch();
	 *
	 * w.start();
	 *
	 * await sleep(1000);
	 *
	 * w.stop(); // stop counting
	 *
	 * await sleep(1000);
	 *
	 * console.log(w.elapsed()); // 1000
	 * ```
	 */
	stop() {
		this.endedAt = Date.now();
	}

	/** Tries to get the elapsed ms. Throws if the Stopwatch has not been started.
	 *
	 * @returns
	 *
	 * # Usage
	 *
	 * ```ts
	 * const w = watch();
	 *
	 * w.start();
	 *
	 * await sleep(1000);
	 *
	 * // you don't have to call stop before accessing `.elapsed`
	 * console.log(w.elapsed()); // 1000
	 * ```
	 */
	elapsed() {
		// if this hasn't been defined its always an error in the users code
		if (!this.startedAt) {
			throw new Error('Call `.start()` first!');
		}

		let tempEndedAt = this.endedAt;

		// if the user hasn't called stop just give them the current time
		if (!tempEndedAt) {
			tempEndedAt = Date.now();
		}

		return tempEndedAt - this.startedAt;
	}

	/** Reset the stopwatch.
	 *
	 * @returns
	 *
	 * # Usage
	 *
	 * ```ts
	 * const w = stopwatch();
	 *
	 * w.start();
	 *
	 * w.stop();
	 *
	 * w.reset();
	 *
	 * w.elapsed(); // Error: "Call `.start()` first!"
	 * ```
	 */
	reset() {
		this.endedAt = undefined;
		this.startedAt = undefined;
	}
}
