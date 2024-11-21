import { describe, expect, it } from 'vitest';
import { stripAsni } from './strip-ansi';

describe('stripAnsi', () => {
	it('removes ansi escape characters', () => {
		expect(stripAsni('\x1b[1;31mHello')).toBe('Hello');
	});
});
