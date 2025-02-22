import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import * as promises from './promises';

describe('noopPromise', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('Returns a promise that resolves immediately', async () => {
		const promise = promises.noopPromise(42);

		const start = Date.now();

		await promise;

		const end = Date.now();

		expect(end - start).toBe(0);
	});
});
