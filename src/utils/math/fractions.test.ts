import { describe, expect, it } from 'vitest';
import * as math from '.';

describe('simplify', () => {
	it('simplifies fractions correctly', () => {
		expect(math.fractions.simplify(1920, 1080)).toStrictEqual([16, 9]);
		// like in usage
		expect(math.fractions.simplify(1920, 1080).join(':')).toBe('16:9');
	});
});
