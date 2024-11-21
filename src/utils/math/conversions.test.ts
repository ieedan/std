import { describe, expect, it } from 'vitest';
import * as math from '.';

describe('dtr', () => {
	it('Correctly converts degrees to radians', () => {
		expect(math.conversions.dtr(90)).toBe(Math.PI / 2);
		expect(math.conversions.dtr(180)).toBe(Math.PI);
		expect(math.conversions.dtr(270)).toBe(Math.PI * 1.5);
		expect(math.conversions.dtr(360)).toBe(Math.PI * 2);
	});
});

describe('rtd', () => {
	it('Correctly converts radians to degrees', () => {
		expect(math.conversions.rtd(Math.PI / 2)).toBe(90);
		expect(math.conversions.rtd(Math.PI)).toBe(180);
		expect(math.conversions.rtd(Math.PI * 1.5)).toBe(270);
		expect(math.conversions.rtd(Math.PI * 2)).toBe(360);
	});
});
