import { describe, expect, it } from 'vitest';
import * as math from '.';

describe('right', () => {
	it('solves for triangle consistently', () => {
		expect(math.triangles.right.solve({ angle: 30, opposite: 5 })).toStrictEqual({
			adjacent: 8.660254037844387,
			angle: 30,
			hypotenuse: 10.000000000000002,
			opposite: 5,
		});

		expect(
			math.triangles.right.solve({ angle: 30, adjacent: 8.660254037844387 })
		).toStrictEqual({
			adjacent: 8.660254037844387,
			angle: 30,
			hypotenuse: 10,
			opposite: 5,
		});

		expect(math.triangles.right.solve({ angle: 30, hypotenuse: 10 })).toStrictEqual({
			adjacent: 8.660254037844387,
			angle: 30,
			hypotenuse: 10,
			opposite: 4.999999999999999,
		});
	});

	it('throws if 0 angle provided', () => {
		expect(() => math.triangles.right.solve({ angle: 0, hypotenuse: 10 })).toThrow();
	});

	it('throws if incorrect arguments were provided due to ignored type error', () => {
		// @ts-ignore
		expect(() => math.triangles.right.solve({ angle: 10 })).toThrow();
	});
});
