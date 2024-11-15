import { describe, it, expect } from "vitest";
import * as lines from "./lines";

describe("get", () => {
	it("splits only on intended new lines", () => {
		const content = "hello\\nhello\nhello";

		expect(lines.get(content)).toStrictEqual(["hello\\nhello", "hello"]);
	});

    it("splits correctly on windows EOL", () => {
		const content = "hello\\nhello\r\nhello";

		expect(lines.get(content)).toStrictEqual(["hello\\nhello", "hello"]);
	});
});
