import { describe, expect, it } from 'vitest';
import * as casing from './casing';

describe('pascalToSnake', () => {
	it('correctly converts to snake_case', () => {
		expect(casing.pascalToSnake('HelloWorld')).toBe('hello_world');
		expect(casing.pascalToSnake('Hello')).toBe('hello');
		expect(casing.pascalToSnake('_Hello')).toBe('_hello');
		expect(casing.pascalToSnake('HelloH')).toBe('hello_h');
	});

	it('does not separate back to back capitals', () => {
		expect(casing.pascalToSnake('APIKey')).toBe('api_key');
	});
});

describe('camelToSnake', () => {
	it('correctly converts to snake_case', () => {
		expect(casing.camelToSnake('helloWorld')).toBe('hello_world');
		expect(casing.camelToSnake('hello')).toBe('hello');
		expect(casing.camelToSnake('_hello')).toBe('_hello');
		expect(casing.camelToSnake('helloH')).toBe('hello_h');
	});

	it('does not separate back to back capitals', () => {
		expect(casing.camelToSnake('APIKey')).toBe('api_key');
	});
});

describe('pascalToKebab', () => {
	it('correctly converts to kebab-case', () => {
		expect(casing.pascalToKebab('HelloWorld')).toBe('hello-world');
		expect(casing.pascalToKebab('Hello')).toBe('hello');
		expect(casing.pascalToKebab('HelloH')).toBe('hello-h');
	});

	it('does not separate back to back capitals', () => {
		expect(casing.pascalToKebab('APIKey')).toBe('api-key');
	});
});

describe('camelToKebab', () => {
	it('correctly converts to kebab-case', () => {
		expect(casing.camelToKebab('helloWorld')).toBe('hello-world');
		expect(casing.camelToKebab('hello')).toBe('hello');
		expect(casing.camelToKebab('helloH')).toBe('hello-h');
	});

	it('does not separate back to back capitals', () => {
		expect(casing.camelToKebab('APIKey')).toBe('api-key');
	});
});

describe('pascalToCamel', () => {
	it('correctly converts to camelCase', () => {
		expect(casing.pascalToCamel('HelloWorld')).toBe('helloWorld');
		expect(casing.pascalToCamel('Hello')).toBe('hello');
	});
});

describe('camelToPascal', () => {
	it('correctly converts to PascalCase', () => {
		expect(casing.camelToPascal('helloWorld')).toBe('HelloWorld');
		expect(casing.camelToPascal('hello')).toBe('Hello');
	});
});

describe('snakeToCamel', () => {
	it('correctly converts to camelCase', () => {
		expect(casing.snakeToCamel('hello_world')).toBe('helloWorld');
		expect(casing.snakeToCamel('HELLO_WORLD')).toBe('helloWorld');
		expect(casing.snakeToCamel('hello')).toBe('hello');
	});

	it('leaves leading underscore', () => {
		expect(casing.snakeToCamel('_hello_world')).toBe('_helloWorld');
		expect(casing.snakeToCamel('___hello_world')).toBe('___helloWorld');
	});

	it('Correctly handles trailing underscore', () => {
		expect(casing.snakeToCamel('_hello_world_')).toBe('_helloWorld_');
	});
});

describe('snakeToPascal', () => {
	it('correctly converts to PascalCase', () => {
		expect(casing.snakeToPascal('hello_world')).toBe('HelloWorld');
		expect(casing.snakeToPascal('HELLO_WORLD')).toBe('HelloWorld');
		expect(casing.snakeToPascal('hello')).toBe('Hello');
	});

	it('leaves leading underscore', () => {
		expect(casing.snakeToPascal('_hello_world')).toBe('_HelloWorld');
		expect(casing.snakeToPascal('___hello_world')).toBe('___HelloWorld');
	});

	it('Correctly handles trailing underscore', () => {
		expect(casing.snakeToPascal('_hello_world_')).toBe('_HelloWorld_');
	});
});

describe('kebabToCamel', () => {
	it('correctly converts to camelCase', () => {
		expect(casing.kebabToCamel('hello-world')).toBe('helloWorld');
		expect(casing.kebabToCamel('hello')).toBe('hello');
	});

	it('Removes trailing dash', () => {
		expect(casing.kebabToCamel('hello-world-')).toBe('helloWorld');
	});
});

describe('kebabToPascal', () => {
	it('correctly converts to PascalCase', () => {
		expect(casing.kebabToPascal('hello-world')).toBe('HelloWorld');
		expect(casing.kebabToPascal('hello')).toBe('Hello');
	});

	it('Removes trailing dash', () => {
		expect(casing.kebabToPascal('hello-world-')).toBe('HelloWorld');
	});
});
