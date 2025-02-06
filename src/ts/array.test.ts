import { describe, expect, it } from 'vitest';
import * as array from './array';

describe('mapToArray', () => {
	it('Correctly maps the map to an array', () => {
		const initialMap = new Map<number, number>();
		initialMap.set(0, 1);
		initialMap.set(1, 2);
		initialMap.set(2, 3);

		const arr = array.fromMap(initialMap, (_, value) => value);

		expect(arr).toStrictEqual([1, 2, 3]);
	});

	it('Returns an empty array for an empty map', () => {
		const initialMap = new Map<number, number>();

		const arr = array.fromMap(initialMap, (_, value) => value);

		expect(arr).toStrictEqual([]);
	});
});

describe('sum', () => {
	it('Correctly sums the array', () => {
		const total = array.sum([1, 2, 3, 4, 5], (num) => num);

		expect(total).toBe(15);
	});

	it('Correctly sums negative and positive numbers', () => {
		const total = array.sum([1, -1], (num) => num);

		expect(total).toBe(0);
	});

	it('Returns 0 when empty', () => {
		const total = array.sum([], (num) => num);

		expect(total).toBe(0);
	});
});

describe('toMap', () => {
	it('Maps array into map', () => {
		const expected = new Map();
		expected.set(0, 1);
		expected.set(1, 2);
		expected.set(2, 3);

		const map = array.toMap([1, 2, 3], (item, index) => [index, item]);

		expect(map).toStrictEqual(expected);
	});

	it('Ignores duplicate values in map', () => {
		const expected = new Map();
		expected.set(1, 1);
		expected.set(2, 2);
		expected.set(3, 3);

		const map = array.toMap([1, 2, 3, 3], (item) => [item, item]);

		expect(map).toStrictEqual(expected);
	});

	it('Returns empty when the map is empty', () => {
		const expected = new Map();

		const map = array.toMap([], (item, index) => [index, item]);

		expect(map).toStrictEqual(expected);
	});
});
