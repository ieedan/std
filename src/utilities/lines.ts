import os from 'node:os';
import { leftPadMin } from './pad';

export const NEW_LINE_REGEX = /\n|\r\n/g;

/** Splits str into an array of lines.
 *
 * @param str
 * @returns
 */
const get = (str: string): string[] => str.split(/\n|\r\n/g);

type Options = {
	lineNumbers: boolean;
	prefix: (line: number, lineCount: number) => string;
};

/** Joins the array of lines back into a string using the platform specific EOL.
 *
 * @param lines
 * @returns
 */
const join = (lines: string[], { lineNumbers = false, prefix }: Partial<Options> = {}): string => {
	let transformed = lines;

	if (lineNumbers) {
		const length = lines.length.toString().length + 1;

		transformed = transformed.map((line, i) => `${leftPadMin(`${i + 1}`, length)} ${line}`);
	}

	return transformed.join(os.EOL);
};

export { get, join };
