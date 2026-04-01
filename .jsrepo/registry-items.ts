import fs from 'node:fs';
import path from 'node:path';

const TS_ROOT = 'src/ts';

/**
 * Items under `src/ts`: one util per top-level `.ts` module (pairs `*.test.ts`), one per subfolder
 * (explicit nested file list so `role: 'test'` is preserved), plus fixed rule items.
 */
export function getRegistryItems(cwd: string) {
	const tsDir = path.join(cwd, TS_ROOT);
	const utilItems = collectUtilItems(tsDir);

	return utilItems.sort((a, b) => a.name.localeCompare(b.name));
}

function collectUtilItems(tsDir: string) {
	const entries = fs.readdirSync(tsDir, { withFileTypes: true });
	const items: Array<{
		name: string;
		type: 'util';
		files: Array<
			| { path: string; role?: 'test' }
			| { path: string; files: Array<{ path: string; role?: 'test' }> }
		>;
	}> = [];

	for (const ent of entries) {
		if (ent.name.startsWith('.')) continue;

		const relDir = path.posix.join(TS_ROOT, ent.name);

		if (ent.isDirectory()) {
			items.push(utilFromSubfolder(tsDir, ent.name, relDir));
			continue;
		}

		if (!ent.name.endsWith('.ts') || ent.name.endsWith('.test.ts')) continue;

		const base = ent.name.slice(0, -'.ts'.length);
		const mainRel = path.posix.join(TS_ROOT, ent.name);
		const testAbs = path.join(tsDir, `${base}.test.ts`);

		const files: Array<{ path: string; role?: 'test' }> = [{ path: mainRel }];
		if (fs.existsSync(testAbs)) {
			files.push({ path: path.posix.join(TS_ROOT, `${base}.test.ts`), role: 'test' });
		}

		items.push({ name: base, type: 'util', files });
	}

	return items;
}

function utilFromSubfolder(tsDir: string, folderName: string, relDir: string) {
	const absFolder = path.join(tsDir, folderName);
	const childNames = fs
		.readdirSync(absFolder)
		.filter((f) => f.endsWith('.ts'))
		.sort((a, b) => a.localeCompare(b));

	const files = childNames.map((f) =>
		f.endsWith('.test.ts') ? { path: f, role: 'test' as const } : { path: f }
	);

	return {
		name: folderName,
		type: 'util' as const,
		files: [{ path: relDir, files }],
	};
}
