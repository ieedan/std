import { stripVTControlCharacters as stripAsni } from 'node:util';
import { describe, expect, it } from 'vitest';
import { centerPad, leftPadMin, rightPadMin } from './pad';

describe('leftPadMin', () => {
	it('Correctly pads', () => {
		expect(leftPadMin('1', 3)).toBe('  1');
	});

	it('Correctly pads with the padding character `padWith`', () => {
		expect(leftPadMin('1', 3, '.')).toBe('..1');
	});

	it('Correctly pads with escape characters', () => {
		expect(stripAsni(leftPadMin('\x1b[1;31m1', 3, '.')).length).toBe(3);
	});

	it('Errors when string length is greater than `length`', () => {
		expect(() => leftPadMin('Hello', 3)).toThrow();
	});
});

describe('rightPadMin', () => {
	it('Correctly pads', () => {
		expect(rightPadMin('1', 3)).toBe('1  ');
	});

	it('Correctly pads with the padding character `padWith`', () => {
		expect(rightPadMin('1', 3, '.')).toBe('1..');
	});

	it('Correctly pads with escape characters', () => {
		expect(stripAsni(rightPadMin('\x1b[1;31m1', 3, '.')).length).toBe(3);
	});

	it('Errors when string length is greater than `length`', () => {
		expect(() => rightPadMin('Hello', 3)).toThrow();
	});
});

describe('centerPad', () => {
	it('Correctly pads', () => {
		expect(centerPad('1', 3)).toBe(' 1 ');
	});

	it('Adds excess padding to right when padding is uneven', () => {
		expect(centerPad('1', 4)).toBe(' 1  ');
	});

	it('Correctly pads with the padding character `padWith`', () => {
		expect(centerPad('1', 3, '.')).toBe('.1.');
	});

	it('Correctly pads with escape characters', () => {
		expect(stripAsni(centerPad('\x1b[1;31m1', 3, '.')).length).toBe(3);
	});

	it('Errors when string length is greater than `length`', () => {
		expect(() => centerPad('Hello', 3)).toThrow();
	});
});
