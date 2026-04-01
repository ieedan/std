import { defineConfig } from 'jsrepo';
import { getRegistryItems } from './.jsrepo/registry-items.js';
import { readmeOutput } from './.jsrepo/readme-output.js';
import { repository } from 'jsrepo/outputs';
import { execSync } from 'node:child_process';

export default defineConfig({
	registry: ({ cwd }) => ({
		name: '@ieedan/std',
		version: 'package',
		authors: ['Aidan Bleser'],
		bugs: 'https://github.com/ieedan/std/issues',
		description: 'Fully tested and documented TypeScript utilities brokered by jsrepo.',
		homepage: 'https://ieedan.github.io/std/',
		repository: 'https://github.com/ieedan/std',
		tags: ['typescript', 'std', 'utilities'],
		outputs: [repository({ format: true }), readmeOutput()],
		items: getRegistryItems(cwd),
	}),
	hooks: {
		after: async ({ command }) => {
			if (command === 'build') {
				execSync('pnpm format', { stdio: 'inherit' });
			}
		},
	},
});
