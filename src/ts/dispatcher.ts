export type ListenerCallback<T = undefined> = T extends undefined ? () => void : (opts: T) => void;

/** Simplifies adding event listeners to your code.
 *
 * ## Usage
 *
 * ```ts
 * import { Dispatcher } from "./src/blocks/dispatcher";
 *
 * const dispatcher = new Dispatcher();
 *
 * let count = 0;
 *
 * dispatcher.addListener(() => { count += 2; });
 *
 * dispatcher.emit();
 *
 * console.log(count); // 2
 *
 * dispatcher.addListener(() => { count += 4; });
 *
 * dispatcher.emit();
 *
 * console.log(count); // 8
 * ```
 *
 * ### Typed Options
 *
 * ```ts
 * import { Dispatcher } from "./src/blocks/dispatcher";
 *
 * const dispatcher = new Dispatcher<string>();
 *
 * dispatcher.addListener((name) => { console.log(`Hello ${name}!`) });
 *
 * dispatcher.emit("John"); // 'Hello John!'
 * ```
 */
export class Dispatcher<T> {
	nextListenerId = -1;
	private listeners = new Map<number, ListenerCallback<T>>();

	/** Adds an event listener
	 *
	 * @param callback
	 * @returns
	 *
	 * ## Usage
	 *
	 * ```ts
	 * const listenerId = dispatcher.addListener(() => { ... });
	 * ```
	 */
	addListener(callback: ListenerCallback<T>): number {
		this.nextListenerId++;
		this.listeners.set(this.nextListenerId, callback);
		return this.nextListenerId;
	}

	/** Removes an event listener
	 *
	 * @param id
	 * @returns
	 *
	 * ## Usage
	 *
	 * ```ts
	 * dispatcher.removeListener(listenerId);
	 * ```
	 */
	removeListener(listenerId: number) {
		this.listeners.delete(listenerId);
	}

	/** Emits an event to all listeners with the provided options.
	 *
	 * @param opts Options to be passed to the listener
	 * @returns `void`
	 *
	 * ## Usage
	 *
	 * ```ts
	 * dispatcher.emit();
	 *
	 * dispatcher.emit(opts);
	 * ```
	 *
	 */
	emit(opts?: T) {
		for (const [_, callback] of this.listeners) {
			if (opts === undefined) {
				(callback as ListenerCallback<undefined>)();
			} else {
				callback(opts);
			}
		}
	}

	/** Removes all event listeners from the dispatcher.
	 *
	 * @returns
	 *
	 * ## Usage
	 *
	 * ```ts
	 * dispatcher.removeAllListeners();
	 * ```
	 */
	removeAllListeners() {
		this.listeners.clear();
		this.nextListenerId = 0;
	}
}
