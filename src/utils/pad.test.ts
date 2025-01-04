import { describe, expect, it } from 'vitest';
import { centerPad, leftPad, leftPadMin, rightPad, rightPadMin } from './pad';
import { stripAsni } from './strip-ansi';

describe('leftPad', () => {
	it('Correctly pads', () => {
		expect(leftPad('Hello', 3)).toBe('   Hello');
	});

	it('Correctly pads with the padding character `padWith`', () => {
		expect(leftPad('Hello', 3, '.')).toBe('...Hello');
	});

	it('Correctly pads with padding set to 0', () => {
		expect(leftPad('Hello', 0)).toBe('Hello');
	});
});

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

describe('rightPad', () => {
	it('Correctly pads', () => {
		expect(rightPad('Hello', 3)).toBe('Hello   ');
	});

	it('Correctly pads with the padding character `padWith`', () => {
		expect(rightPad('Hello', 3, '.')).toBe('Hello...');
	});

	it('Correctly pads with padding set to 0', () => {
		expect(rightPad('Hello', 0)).toBe('Hello');
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
