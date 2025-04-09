import { describe, expect, it } from 'vitest';
import * as strings from './strings';

describe('startsWithOneOf', () => {
	it('correctly identifies a string that starts with one of the provided strings', () => {
		expect(strings.startsWithOneOf('aab', ['aa', 'ba'])).toBe(true);
		expect(strings.startsWithOneOf('aab', ['ba', 'ca'])).toBe(false);
	});
});

describe('endsWithOneOf', () => {
	it('correctly identifies a string that ends with one of the provided strings', () => {
		expect(strings.endsWithOneOf('baa', ['aa', 'ca'])).toBe(true);
		expect(strings.endsWithOneOf('baa', ['ab', 'ac'])).toBe(false);
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
