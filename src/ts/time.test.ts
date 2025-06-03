import { describe, expect, it } from 'vitest';
import { type Milliseconds, formatDuration, milliseconds } from './time';

describe('formatDuration', () => {
	it('correctly formats durations', () => {
		expect(formatDuration(500 as Milliseconds)).toBe('500ms');
		expect(formatDuration(milliseconds.SECOND)).toBe('1s');
		expect(formatDuration(milliseconds.MINUTE)).toBe('1min');
		expect(formatDuration(milliseconds.HOUR)).toBe('1h');
		expect(formatDuration(milliseconds.DAY)).toBe('24h');
	});

	it('correctly handles transform function', () => {
		expect(
			formatDuration((milliseconds.SECOND / 55) as Milliseconds, (num) => num.toFixed(2))
		).toBe('18.18ms');
		expect(
			formatDuration((milliseconds.MINUTE / 55) as Milliseconds, (num) => num.toFixed(2))
		).toBe('1.09s');
		expect(
			formatDuration((milliseconds.HOUR / 55) as Milliseconds, (num) => num.toFixed(2))
		).toBe('1.09min');
		expect(
			formatDuration((milliseconds.DAY / 55) as Milliseconds, (num) => num.toFixed(2))
		).toBe('26.18min');
	});
});
