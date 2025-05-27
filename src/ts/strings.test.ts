import { describe, expect, it } from 'vitest';
import * as strings from './strings';

describe('equalsOneOf', () => {
	it('correctly identifies a string that equals one of the provided strings', () => {
		expect(strings.equalsOneOf('aa', ['aa', 'ba'])).toBe('aa');
		expect(strings.equalsOneOf('aa', ['ba', 'ca'])).toBe(undefined);
	});
});

describe('startsWithOneOf', () => {
	it('correctly identifies a string that starts with one of the provided strings', () => {
		expect(strings.startsWithOneOf('aab', ['aa', 'ba'])).toBe('aa');
		expect(strings.startsWithOneOf('aab', ['ba', 'ca'])).toBe(undefined);
	});
});

describe('endsWithOneOf', () => {
	it('correctly identifies a string that ends with one of the provided strings', () => {
		expect(strings.endsWithOneOf('baa', ['aa', 'ca'])).toBe('aa');
		expect(strings.endsWithOneOf('baa', ['ab', 'ac'])).toBe(undefined);
	});
});

describe('iEqual', () => {
	it('returns true when strings are equal', () => {
		expect(strings.iEqual('A', 'a')).toBe(true);
		expect(strings.iEqual('Hello, World!', 'hello, world!')).toBe(true);
	});

	it('returns false when strings are not equal', () => {
		expect(strings.iEqual('a', 'b')).toBe(false);
	});
});
