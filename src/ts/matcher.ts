export interface Matchable<U = string> {
	/** Returns true if the `s` matches this member.
	 *
	 * @param pattern
	 * @returns
	 */
	matches: (pattern: U) => boolean;
}

/** An abstraction to help you create a simple pattern matching API
 *
 * ## Usage
 * ```ts
 * interface Member extends Matchable<string> {
 * 		name: string;
 * }
 *
 * const members: Member[] = [
 * 		{ matches: (p) => p.endsWith('.ts'), name: 'typescript' },
 * 		{ matches: (p) => p.endsWith('.js'), name: 'javascript' },
 * ];
 *
 * const matcher = new Matcher(members);
 *
 * matcher.select('test.js')?.name; // javascript
 * ```
 */
export class Matcher<T extends Matchable<U>, U = T extends Matchable<infer R> ? R : never> {
	constructor(readonly members: T[]) {}

	/** Iterate over the members and return the first member that matches `s`.
	 *
	 * @param pattern
	 * @returns
	 *
	 * ## Usage
	 * ```ts
	 * const member = matcher.select('name');
	 *
	 * member.doSomething();
	 * ```
	 */
	select(pattern: U): T | null {
		for (const member of this.members) {
			if (member.matches(pattern)) return member;
		}

		return null;
	}

	/** Calls `.match()` to try and find a match if there is no match it returns the provided default value.
	 *
	 * @param pattern
	 * @param defaultValue The value returned when the pattern provided doesn't match any member.
	 * @returns
	 *
	 * ## Usage
	 * ```ts
	 * const member = matcher.select('', { matches: () => true, name: 'default' });
	 * ```
	 */
	selectOrDefault(pattern: U, defaultValue: T): T {
		return this.match(
			pattern,
			(v) => v,
			() => defaultValue
		);
	}

	/** Calls `.select()` to try and find a match for any of the members. If it can it calls `matches` otherwise it call `noMatch`
	 *
	 * @param pattern
	 * @param matches Called with the matching member if one exists
	 * @param noMatch Called when no match was found
	 * @returns
	 *
	 * ## Usage
	 * ```ts
	 * matcher.match(
	 * 	'name',
	 * 	(member) => member.doSomething(),
	 * 	() => throw Error('Couldn't do anything!')
	 * )
	 * ```
	 */
	match<W>(pattern: U, matches: (v: T) => W, noMatch: () => W): W {
		const selected = this.select(pattern);

		if (selected === null) return noMatch();

		return matches(selected);
	}
}
