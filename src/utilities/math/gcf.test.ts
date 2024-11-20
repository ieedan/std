import { describe, expect, it } from 'vitest';
import * as math from '.';

describe('gcf', () => {
	it('solves GCF correctly', () => {
		expect(math.gcf(1920, 1080)).toBe(120);
		expect(math.gcf(1080, 1920)).toBe(120);
		expect(math.gcf(2, 2)).toBe(2);
	});
});

describe('gcd', () => {
	it('solves GCD correctly', () => {
		expect(math.gcd(1920, 1080)).toBe(120);
		expect(math.gcd(1080, 1920)).toBe(120);
		expect(math.gcd(2, 2)).toBe(2);
	});
});
