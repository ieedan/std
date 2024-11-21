import { describe, expect, it } from 'vitest';
import { mapToArray } from './map-to-array';

describe('mapToArray', () => {
	it('Correctly maps the map to an array', () => {
		const initialMap = new Map<number, number>();
		initialMap.set(0, 1);
		initialMap.set(1, 2);
		initialMap.set(2, 3);

		const arr = mapToArray(initialMap, (_, value) => value);

		expect(arr).toStrictEqual([1, 2, 3]);
	});

	it('Returns an empty array for an empty map', () => {
		const initialMap = new Map<number, number>();

		const arr = mapToArray(initialMap, (_, value) => value);

		expect(arr).toStrictEqual([]);
	});
});
