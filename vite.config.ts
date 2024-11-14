import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			all: true,
			reportOnFailure: true,
			provider: 'v8',
			reporter: ['json-summary'],
			thresholds: {
				lines: 100,
				functions: 100,
				branches: 100,
				statements: 100,
			},
			exclude: ['node_modules/', '**/*.d.ts', '**/*.test.ts'],
		},
	},
});
