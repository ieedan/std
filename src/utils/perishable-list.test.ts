import { describe, expect, it } from 'vitest';
import { PerishableList } from './perishable-list';

// we add this here so that we have a 0 dependency test
const sleep = async (durationMs: number): Promise<void> =>
	new Promise((res) => setTimeout(res, durationMs));

describe('PerishableList', () => {
	it('Adds items', async () => {
		const list = new PerishableList<string>();

		list.add('Hello, World!', 100);
		list.add('Hello, Everyone!', 1500);

		expect(list.items).toStrictEqual(['Hello, World!', 'Hello, Everyone!']);

		await sleep(200);

		expect(list.items).toStrictEqual(['Hello, Everyone!']);
	});

	it('Removes items', () => {
		const list = new PerishableList<string>();

		const key = list.add('Hello, World!', 100);

		list.remove(key);

		expect(list.items).toStrictEqual([]);
	});

	it('Clears items', () => {
		const list = new PerishableList<string>();

		list.add('Hello, World!', 100);
		list.add('Hello, World!', 100);
		list.add('Hello, World!', 100);

		expect(list.items.length).toBe(3);

		list.clear();

		expect(list.items.length).toBe(0);
	});
});
