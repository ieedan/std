/** A list class where items are removed after their given expiration time.
 *
 * ## Usage
 *
 * ```ts
 * const list = new PerishableList<string>();
 *
 * list.add("Hello, World!", 1000);
 *
 * console.log(list.items); // ["Hello, World!"];
 *
 * await sleep(1000);
 *
 * console.log(list.items); // [];
 * ```
 */
export class PerishableList<T> {
	private index = -1; // start at -1 so it increments to 0 on first add
	#items: Map<number, { expiration: number; item: T }> = new Map();

	/** Adds an item to the list with an `expiresIn` time. The item will be removed from the list if the `expiresIn` time has passed.
	 *
	 * ## Usage
	 * ```ts
	 * list.add("Hello, World!", 1000);
	 * ```
	 *
	 * @param item
	 * @param expiresIn
	 * @returns id of the item
	 */
	add(item: T, expiresIn: number): number {
		this.index++;

		this.#items.set(this.index, { expiration: Date.now() + expiresIn, item });

		return this.index;
	}

	/** Removes an item from the list with the key returned from the `add` method.
	 *
	 * ## Usage
	 * ```ts
	 * const key = list.add("Hello, World!", 1000);
	 *
	 * list.remove(key);
	 * ```
	 *
	 * @param index
	 */
	remove(index: number) {
		this.#items.delete(index);
	}

	/** Removes all items from the list.
	 *
	 * ## Usage
	 *
	 * ```ts
	 * list.clear();
	 * ```
	 */
	clear() {
		this.#items.clear();
		this.index = -1;
	}

	/** Retrieved the un-expired items in the list */
	get items(): T[] {
		const items: T[] = [];

		for (const [key, value] of this.#items) {
			if (Date.now() > value.expiration) {
				this.#items.delete(key);
				continue;
			}

			items.push(value.item);
		}

		return items;
	}
}
