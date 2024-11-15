import os from 'node:os';
import { describe, expect, it } from 'vitest';
import * as lines from './lines';

describe('get', () => {
	it('splits only on intended new lines', () => {
		const content = 'hello\\nhello\nhello';

		expect(lines.get(content)).toStrictEqual(['hello\\nhello', 'hello']);
	});

	it('splits correctly on windows EOL', () => {
		const content = 'hello\\nhello\r\nhello';

		expect(lines.get(content)).toStrictEqual(['hello\\nhello', 'hello']);
	});
});

describe('join', () => {
	it('Joins correctly', () => {
		const ls = ['hello\\nhello', 'hello'];

		expect(lines.join(ls)).toStrictEqual(`hello\\nhello${os.EOL}hello`);
	});

	it('Joins correctly with `lineNumbers`', () => {
		const ls = ['hello\\nhello', 'hello'];

		expect(lines.join(ls, { lineNumbers: true })).toStrictEqual(
			` 1 hello\\nhello${os.EOL} 2 hello`
		);
	});

	it('Joins correctly with `prefix`', () => {
		const ls = ['hello\\nhello', 'hello'];

		expect(lines.join(ls, { prefix: () => ' + ' })).toStrictEqual(
			` + hello\\nhello${os.EOL} + hello`
		);
	});

	it('Adds `prefix` before line numbers', () => {
		const ls = ['hello\\nhello', 'hello'];

		expect(lines.join(ls, { prefix: () => ' + ', lineNumbers: true })).toStrictEqual(
			` +  1 hello\\nhello${os.EOL} +  2 hello`
		);
	});
});
