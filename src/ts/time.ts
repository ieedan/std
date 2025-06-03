import type { Brand } from './types';

export type Milliseconds = Brand<number, 'milliseconds'>;

export const milliseconds = {
	/** Milliseconds in a second */
	SECOND: 1000 as Milliseconds,
	/** Milliseconds in a minute */
	MINUTE: (1000 * 60) as Milliseconds,
	/** Milliseconds in a hour */
	HOUR: (1000 * 60 * 60) as Milliseconds,
	/** Milliseconds in a day */
	DAY: (1000 * 60 * 60 * 24) as Milliseconds,
	/** Milliseconds in a year */
	YEAR: (1000 * 60 * 60 * 24 * 365) as Milliseconds,
} as const;

export type Seconds = Brand<number, 'seconds'>;

export const seconds = {
	/** Seconds in a minute */
	MINUTE: 60 as Seconds,
	/** Seconds in a hour */
	HOUR: (60 * 60) as Seconds,
	/** Seconds in a day */
	DAY: (60 * 60 * 24) as Seconds,
	/** Seconds in a year */
	YEAR: (60 * 60 * 24 * 365) as Seconds,
} as const;

/** Formats a time given in milliseconds with units.
 *
 * @param duration Time to be formatted in milliseconds
 * @param transform Runs before the num is formatted perfect place to put a `.toFixed()`
 * @returns
 *
 * ## Usage
 * ```ts
 * formatDuration(500); // 500ms
 * formatDuration(SECOND); // 1s
 * formatDuration(MINUTE); // 1min
 * formatDuration(HOUR); // 1h
 * ```
 */
export function formatDuration(
	duration: Milliseconds,
	transform: (num: number) => string = (num) => num.toString()
): string {
	if (duration < milliseconds.SECOND) return `${transform(duration)}ms`;

	if (duration < milliseconds.MINUTE) return `${transform(duration / milliseconds.SECOND)}s`;

	if (duration < milliseconds.HOUR) return `${transform(duration / milliseconds.MINUTE)}min`;

	return `${duration / milliseconds.HOUR}h`;
}
