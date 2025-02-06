import { describe, expect, it } from 'vitest';
import { rand } from './rand';

describe('rand', () => {
	it('Generates a random number between the given range', () => {
		for (let i = 0; i <= 10; i++) {
			const num = rand(0, 10);

			expect(num).toBeGreaterThanOrEqual(0);
			expect(num).toBeLessThanOrEqual(10);
		}
	});

	it('Throws when max is greater than min', () => {
		expect(() => rand(10, 0)).toThrow();
	});
});
