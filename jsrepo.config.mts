import { defineConfig } from "jsrepov3";
import { repository } from "jsrepov3/outputs";

export default defineConfig({
	registry: {
		name: "@ieedan/std",
        outputs: [repository({ format: true })],
		items: [
			{
				name: "ts/result",
				type: "util",
				files: [{ path: "src/ts/result.ts" }, { path: "src/ts/result.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/array",
				type: "util",
				files: [{ path: "src/ts/array.ts" }, { path: "src/ts/array.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/casing",
				type: "util",
				files: [{ path: "src/ts/casing.ts" }, { path: "src/ts/casing.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/dispatcher",
				type: "util",
				files: [{ path: "src/ts/dispatcher.ts" }, { path: "src/ts/dispatcher.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/ipv4-address",
				type: "util",
				files: [
					{ path: "src/ts/ipv4-address.ts" },
					{ path: "src/ts/ipv4-address.test.ts", type: "registry:test" },
				],
			},
			{
				name: "ts/math",
				type: "util",
				files: [
					{ path: "src/ts/math/circle.ts" },
					{ path: "src/ts/math/circle.test.ts", type: "registry:test" },
					{ path: "src/ts/math/conversions.ts" },
					{ path: "src/ts/math/conversions.test.ts", type: "registry:test" },
					{ path: "src/ts/math/fractions.ts" },
					{ path: "src/ts/math/fractions.test.ts", type: "registry:test" },
					{ path: "src/ts/math/gcf.ts" },
					{ path: "src/ts/math/gcf.test.ts", type: "registry:test" },
					{ path: "src/ts/math/triangles.ts" },
					{ path: "src/ts/math/triangles.test.ts", type: "registry:test" },
					{ path: "src/ts/math/types.ts" },
					{ path: "src/ts/math/index.ts" },
				],
			},
			{
				name: "ts/pad",
				type: "util",
				files: [{ path: "src/ts/pad.ts" }, { path: "src/ts/pad.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/perishable-list",
				type: "util",
				files: [
					{ path: "src/ts/perishable-list.ts" },
					{ path: "src/ts/perishable-list.test.ts", type: "registry:test" },
				],
			},
			{
				name: "ts/promises",
				type: "util",
				files: [{ path: "src/ts/promises.ts" }, { path: "src/ts/promises.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/rand",
				type: "util",
				files: [{ path: "src/ts/rand.ts" }, { path: "src/ts/rand.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/sleep",
				type: "util",
				files: [{ path: "src/ts/sleep.ts" }, { path: "src/ts/sleep.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/stopwatch",
				type: "util",
				files: [{ path: "src/ts/stopwatch.ts" }, { path: "src/ts/stopwatch.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/strings",
				type: "util",
				files: [{ path: "src/ts/strings.ts" }, { path: "src/ts/strings.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/time",
				type: "util",
				files: [{ path: "src/ts/time.ts" }, { path: "src/ts/time.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/truncate",
				type: "util",
				files: [{ path: "src/ts/truncate.ts" }, { path: "src/ts/truncate.test.ts", type: "registry:test" }],
			},
			{
				name: "ts/types",
				type: "util",
				files: [{ path: "src/ts/types.ts" }],
			},
			{
				name: "ts/url",
				type: "util",
				files: [{ path: "src/ts/url.ts" }, { path: "src/ts/url.test.ts", type: "registry:test" }],
			},
		],
	},
});
