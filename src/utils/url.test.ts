import { describe, expect, it } from 'vitest';
import * as url from './url';

describe('join', () => {
	it('correctly joins url segments', () => {
		expect(url.join('https://example.com/', '/api', '/examples/')).toBe(
			'https://example.com/api/examples'
		);
	});

	it('handles empty segments', () => {
		expect(url.join('https://example.com', '', 'examples')).toBe(
			'https://example.com/examples'
		);
	});

	it('handles single segment', () => {
		expect(url.join('https://example.com')).toBe('https://example.com');
	});
});

describe('removeLeadingAndTrailingSlash', () => {
	it('removes both leading and trailing slashes', () => {
		expect(url.removeLeadingAndTrailingSlash('/example/')).toBe('example');
	});

	it('handles string with no slashes', () => {
		expect(url.removeLeadingAndTrailingSlash('example')).toBe('example');
	});

	it('handles string with only leading slash', () => {
		expect(url.removeLeadingAndTrailingSlash('/example')).toBe('example');
	});

	it('handles string with only trailing slash', () => {
		expect(url.removeLeadingAndTrailingSlash('example/')).toBe('example');
	});

	it('handles empty string', () => {
		expect(url.removeLeadingAndTrailingSlash('')).toBe('');
	});
});

describe('addLeadingAndTrailingSlash', () => {
	it('adds both leading and trailing slashes', () => {
		expect(url.addLeadingAndTrailingSlash('example')).toBe('/example/');
	});

	it('handles string that already has slashes', () => {
		expect(url.addLeadingAndTrailingSlash('/example/')).toBe('/example/');
	});

	it('handles empty string', () => {
		expect(url.addLeadingAndTrailingSlash('')).toBe('//');
	});
});

describe('removeLeadingSlash', () => {
	it('removes leading slash', () => {
		expect(url.removeLeadingSlash('/example')).toBe('example');
	});

	it('handles string without leading slash', () => {
		expect(url.removeLeadingSlash('example')).toBe('example');
	});

	it('handles empty string', () => {
		expect(url.removeLeadingSlash('')).toBe('');
	});
});

describe('addLeadingSlash', () => {
	it('adds leading slash', () => {
		expect(url.addLeadingSlash('example')).toBe('/example');
	});

	it('handles string that already has leading slash', () => {
		expect(url.addLeadingSlash('/example')).toBe('/example');
	});

	it('handles empty string', () => {
		expect(url.addLeadingSlash('')).toBe('/');
	});
});

describe('removeTrailingSlash', () => {
	it('removes trailing slash', () => {
		expect(url.removeTrailingSlash('example/')).toBe('example');
	});

	it('handles string without trailing slash', () => {
		expect(url.removeTrailingSlash('example')).toBe('example');
	});

	it('handles empty string', () => {
		expect(url.removeTrailingSlash('')).toBe('');
	});
});

describe('addTrailingSlash', () => {
	it('adds trailing slash', () => {
		expect(url.addTrailingSlash('example')).toBe('example/');
	});

	it('handles string that already has trailing slash', () => {
		expect(url.addTrailingSlash('example/')).toBe('example/');
	});

	it('handles empty string', () => {
		expect(url.addTrailingSlash('')).toBe('/');
	});
});
