import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { StopWatch } from './stopwatch';

describe('stopwatch', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('Correctly indicates the elapsed time', async () => {
		const w = new StopWatch();

		w.start();

		vi.advanceTimersByTime(50);

		expect(w.elapsed()).toEqual(50);
	});

	it('Correctly indicates the elapsed time', async () => {
		const w = new StopWatch();

		w.start();

		vi.advanceTimersByTime(50);

		w.stop();

		vi.advanceTimersByTime(150);

		expect(w.elapsed()).toEqual(50);
	});

	it('Will error if `elapsed` is called before `.start()`', async () => {
		const w = new StopWatch();

		expect(() => w.elapsed()).toThrow();
	});

	it('Will reset when `.reset()` is called', async () => {
		const w = new StopWatch();

		w.start();

		w.stop();

		w.elapsed();

		w.reset();

		expect(() => w.elapsed()).toThrow();
	});
});
