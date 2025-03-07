import { describe, expect, it } from 'vitest';
import { type Matchable, Matcher } from './matcher';

describe('Matcher.select', () => {
	it('Selects the correct member', () => {
		interface Member extends Matchable<string> {
			name: string;
		}

		const members: Member[] = [
			{ matches: (p) => p.endsWith('.ts'), name: 'typescript' },
			{ matches: (p) => p.endsWith('.js'), name: 'javascript' },
		];

		const matcher = new Matcher(members);

		expect(matcher.select('test.js')?.name).toBe('javascript');
		expect(matcher.select('test.ts')?.name).toBe('typescript');
	});
});

describe('Matcher.selectOrDefault', () => {
	it('Selects the correct member', () => {
		interface Member extends Matchable<string> {
			name: string;
		}

		const members: Member[] = [
			{ matches: (p) => p.endsWith('.ts'), name: 'typescript' },
			{ matches: (p) => p.endsWith('.js'), name: 'javascript' },
		];

		const matcher = new Matcher(members);

		// matches correctly
		expect(matcher.selectOrDefault('test.js', members[0])?.name).toBe('javascript');
		expect(matcher.selectOrDefault('test.ts', members[0])?.name).toBe('typescript');

		// returns default when there's no match
		expect(matcher.selectOrDefault('test.oops', members[0])?.name).toBe('typescript');
	});
});

describe('Matcher.match', () => {
	it('Matches the correct member', () => {
		interface Member extends Matchable<string> {
			name: string;
		}

		const members: Member[] = [
			{ matches: (p) => p.endsWith('.ts'), name: 'typescript' },
			{ matches: (p) => p.endsWith('.js'), name: 'javascript' },
		];

		const matcher = new Matcher(members);

		expect(
			matcher.match(
				'test.js',
				(v) => v,
				() => {
					throw new Error('oh no!');
				}
			).name
		).toBe('javascript');
		expect(
			() =>
				matcher.match(
					'test.',
					(v) => v,
					() => {
						throw new Error('oh no!');
					}
				).name
		).toThrow();
	});
});
