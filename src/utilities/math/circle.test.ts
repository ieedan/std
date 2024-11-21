import { describe, expect, it } from "vitest";
import * as math from ".";

describe("getPoint", () => {
	it("Gets points all around the circle correctly", () => {
		const radius = 1;

		expect(math.circles.getPoint(0, radius)).toStrictEqual({ x: 1, y: 0 } satisfies math.Point);
		expect(math.circles.getPoint(45, radius)).toStrictEqual({
			x: 0.29289321881345254,
			y: 0.2928932188134524,
		} satisfies math.Point);
		expect(math.circles.getPoint(90, radius)).toStrictEqual({ x: 0, y: 1 } satisfies math.Point);
		expect(math.circles.getPoint(135, radius)).toStrictEqual({
			x: 0.2928932188134524,
			y: 1.7071067811865475,
		} satisfies math.Point);
		expect(math.circles.getPoint(180, radius)).toStrictEqual({ x: 1, y: 2 } satisfies math.Point);
		expect(math.circles.getPoint(225, radius)).toStrictEqual({
			x: 1.7071067811865475,
			y: 1.7071067811865475,
		} satisfies math.Point);
		expect(math.circles.getPoint(270, radius)).toStrictEqual({ x: 2, y: 1 } satisfies math.Point);
		expect(math.circles.getPoint(315, radius)).toStrictEqual({
			x: 1.7071067811865475,
			y: 0.29289321881345254,
		} satisfies math.Point);
		expect(math.circles.getPoint(360, radius)).toStrictEqual({ x: 1, y: 0 } satisfies math.Point);
	});
});
