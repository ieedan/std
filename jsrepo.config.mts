import { defineConfig } from "jsrepo";
import { repository } from "jsrepo/outputs";

export default defineConfig({
	registry: {
		name: "@ieedan/std",
		version: "package",
		authors: ["Aidan Bleser"],
		bugs: "https://github.com/ieedan/std/issues",
		description: "Fully tested and documented TypeScript utilities brokered by jsrepo.",
		homepage: "https://ieedan.github.io/std/",
		repository: "https://github.com/ieedan/std",
		tags: ["typescript", "std", "utilities"],
		outputs: [repository({ format: true })],
		items: [
			{
				name: "result",
				type: "util",
				files: [{ path: "src/ts/result.ts" }, { path: "src/ts/result.test.ts", type: "registry:test" }],
			},
			{
				name: "array",
				type: "util",
				files: [{ path: "src/ts/array.ts" }, { path: "src/ts/array.test.ts", type: "registry:test" }],
			},
			{
				name: "casing",
				type: "util",
				files: [{ path: "src/ts/casing.ts" }, { path: "src/ts/casing.test.ts", type: "registry:test" }],
			},
			{
				name: "dispatcher",
				type: "util",
				files: [{ path: "src/ts/dispatcher.ts" }, { path: "src/ts/dispatcher.test.ts", type: "registry:test" }],
			},
			{
				name: "ipv4-address",
				type: "util",
				files: [
					{ path: "src/ts/ipv4-address.ts" },
					{ path: "src/ts/ipv4-address.test.ts", type: "registry:test" },
				],
			},
			{
				name: "math",
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
				name: "pad",
				type: "util",
				files: [{ path: "src/ts/pad.ts" }, { path: "src/ts/pad.test.ts", type: "registry:test" }],
			},
			{
				name: "perishable-list",
				type: "util",
				files: [
					{ path: "src/ts/perishable-list.ts" },
					{ path: "src/ts/perishable-list.test.ts", type: "registry:test" },
				],
			},
			{
				name: "promises",
				type: "util",
				files: [{ path: "src/ts/promises.ts" }, { path: "src/ts/promises.test.ts", type: "registry:test" }],
			},
			{
				name: "rand",
				type: "util",
				files: [{ path: "src/ts/rand.ts" }, { path: "src/ts/rand.test.ts", type: "registry:test" }],
			},
			{
				name: "sleep",
				type: "util",
				files: [{ path: "src/ts/sleep.ts" }, { path: "src/ts/sleep.test.ts", type: "registry:test" }],
			},
			{
				name: "stopwatch",
				type: "util",
				files: [{ path: "src/ts/stopwatch.ts" }, { path: "src/ts/stopwatch.test.ts", type: "registry:test" }],
			},
			{
				name: "strings",
				type: "util",
				files: [{ path: "src/ts/strings.ts" }, { path: "src/ts/strings.test.ts", type: "registry:test" }],
			},
			{
				name: "time",
				type: "util",
				files: [{ path: "src/ts/time.ts" }, { path: "src/ts/time.test.ts", type: "registry:test" }],
			},
			{
				name: "truncate",
				type: "util",
				files: [{ path: "src/ts/truncate.ts" }, { path: "src/ts/truncate.test.ts", type: "registry:test" }],
			},
			{
				name: "types",
				type: "util",
				files: [{ path: "src/ts/types.ts" }],
			},
			{
				name: "url",
				type: "util",
				files: [{ path: "src/ts/url.ts" }, { path: "src/ts/url.test.ts", type: "registry:test" }],
			},
			{
				name: "Cursor Rule",
				type: "rule",
				add: 'optionally-on-init',
				dependencyResolution: 'manual',
				files: [
					{
						path: "rules/typescript-utility-functions.mdc",
						target: ".cursor/rules/typescript-utility-functions.mdc",
					},
				],
			},
		],
	},
});
