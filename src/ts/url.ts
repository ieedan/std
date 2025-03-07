/** Joins the segments into a single url correctly handling leading and trailing slashes in each segment.
 *
 * @param segments
 * @returns
 *
 * ## Usage
 * ```ts
 * const url = join('https://example.com', '', 'api/', '/examples/');
 *
 * console.log(url); // https://example.com/api/examples
 * ```
 */
const join = (...segments: string[]) => {
	return segments
		.map((s) => removeLeadingAndTrailingSlash(s))
		.filter(Boolean)
		.join('/');
};

/** Removes the leading and trailing slash from the segment (if they exist)
 *
 * @param segment
 * @returns
 *
 * ## Usage
 * ```ts
 * const segment = removeLeadingAndTrailingSlash('/example/');
 *
 * console.log(segment); // 'example'
 * ```
 */
const removeLeadingAndTrailingSlash = (segment: string) => {
	const newSegment = removeLeadingSlash(segment);
	return removeTrailingSlash(newSegment);
};

/** Adds a leading and trailing to the beginning and end of the segment (if it doesn't already exist)
 *
 * @param segment
 * @returns
 *
 * ## Usage
 * ```ts
 * const segment = addLeadingAndTrailingSlash('example');
 *
 * console.log(segment); // '/example/'
 * ```
 */
const addLeadingAndTrailingSlash = (segment: string) => {
	// this is a weird case so feel free to handle it however you think it makes the most sense
	if (segment === '') return '//';

	const newSegment = addLeadingSlash(segment);
	return addTrailingSlash(newSegment);
};

/** Removes the leading slash from the beginning of the segment (if it exists)
 *
 * @param segment
 * @returns
 *
 * ## Usage
 * ```ts
 * const segment = removeLeadingSlash('/example');
 *
 * console.log(segment); // 'example'
 * ```
 */
const removeLeadingSlash = (segment: string): string => {
	let newSegment = segment;
	if (newSegment.startsWith('/')) {
		newSegment = newSegment.slice(1);
	}

	return newSegment;
};

/** Adds a leading slash to the beginning of the segment (if it doesn't already exist)
 *
 * @param segment
 * @returns
 *
 * ## Usage
 * ```ts
 * const segment = addLeadingSlash('example');
 *
 * console.log(segment); // '/example'
 * ```
 */
const addLeadingSlash = (segment: string): string => {
	let newSegment = segment;
	if (!newSegment.startsWith('/')) {
		newSegment = `/${newSegment}`;
	}

	return newSegment;
};

/** Removes the trailing slash from the end of the segment (if it exists)
 *
 * @param segment
 * @returns
 *
 * ## Usage
 * ```ts
 * const segment = removeTrailingSlash('example/');
 *
 * console.log(segment); // 'example'
 * ```
 */
const removeTrailingSlash = (segment: string): string => {
	let newSegment = segment;
	if (newSegment.endsWith('/')) {
		newSegment = newSegment.slice(0, newSegment.length - 1);
	}

	return newSegment;
};

/** Adds a trailing slash to the end of the segment (if it doesn't already exist)
 *
 * @param segment
 * @returns
 *
 * ## Usage
 * ```ts
 * const segment = addTrailingSlash('example');
 *
 * console.log(segment); // 'example/'
 * ```
 */
const addTrailingSlash = (segment: string): string => {
	let newSegment = segment;
	if (!newSegment.endsWith('/')) {
		newSegment = `${newSegment}/`;
	}

	return newSegment;
};

/** Removes the last segment of the url.
 *
 * @param url
 *
 * ## Usage
 * ```ts
 * const url = upOneLevel('/first/second');
 *
 * console.log(url); // '/first'
 * ```
 */
const upOneLevel = (url: string): string => {
	if (url === '/') return url;

	const lastIndex = removeTrailingSlash(url).lastIndexOf('/');

	return url.slice(0, url.length - lastIndex - 1);
};

export {
	join,
	removeLeadingSlash,
	removeTrailingSlash,
	addTrailingSlash,
	addLeadingSlash,
	addLeadingAndTrailingSlash,
	removeLeadingAndTrailingSlash,
	upOneLevel,
};
