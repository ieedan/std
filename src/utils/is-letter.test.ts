import { describe, expect, it } from 'vitest';
import { isLetter } from './is-letter';

const validLetters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

describe('isLetter', () => {
	it('correctly identifies letters', () => {
		for (const letter of validLetters) {
			expect(isLetter(letter)).toBe(true);
			expect(isLetter(letter.toUpperCase())).toBe(true);
		}
	});

	it('correctly identifies non-letters', () => {
		expect(isLetter('1')).toBe(false);
		expect(isLetter('|')).toBe(false);
		expect(isLetter(']')).toBe(false);
	});

	it('throws if given more than 1 character', () => {
		expect(() => isLetter('ab')).toThrow();
	});
});
