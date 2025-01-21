import { describe, expect, it } from 'vitest';
import { DAY, HOUR, MINUTE, SECOND, formatDuration } from './time';

describe('formatDuration', () => {
	it('correctly formats durations', () => {
		expect(formatDuration(500)).toBe('500ms');
		expect(formatDuration(SECOND)).toBe('1s');
		expect(formatDuration(MINUTE)).toBe('1min');
		expect(formatDuration(HOUR)).toBe('1h');
		expect(formatDuration(DAY)).toBe('24h');
	});

	it('correctly handles transform function', () => {
		expect(formatDuration(SECOND / 55, (num) => num.toFixed(2))).toBe('18.18ms');
		expect(formatDuration(MINUTE / 55, (num) => num.toFixed(2))).toBe('1.09s');
		expect(formatDuration(HOUR / 55, (num) => num.toFixed(2))).toBe('1.09min');
		expect(formatDuration(DAY / 55, (num) => num.toFixed(2))).toBe('26.18min');
	});
});
