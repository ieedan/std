import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			provider: 'v8',
			reporter: ['json-summary'],
			exclude: ['node_modules/', '**/*.d.ts', '**/*.test.ts'],
			all: false,
			thresholds: {
				lines: 100,
				functions: 100,
				branches: 100,
				statements: 100,
			},
		},
	},
});
