import fs from 'node:fs';
import path from 'node:path';
import type { Output } from 'jsrepo/outputs';

const README_FILE = 'README.md';
const BLOCKS_HEADING = '# Blocks';

const BADGE_REL_PATH = 'badges/coverage-total.svg';
const DEFAULT_BRANCH = 'main';
const BADGE_BRANCH = 'badges';

function githubBlobUrl(repository: string | undefined, repoRelativePath: string): string {
	if (!repository) return repoRelativePath;
	const base = repository.replace(/\.git$/, '').replace(/\/$/, '');
	const encodedPath = repoRelativePath
		.split('/')
		.map((segment) => encodeURIComponent(segment))
		.join('/');
	return `${base}/blob/${DEFAULT_BRANCH}/${encodedPath}`;
}

function coverageBadgeMd(repository: string | undefined): string {
	if (!repository) {
		return `![Tests](${BADGE_REL_PATH})`;
	}
	const base = repository.replace(/\.git$/, '').replace(/\/$/, '');
	const host = base.includes('github.com') ? 'raw.githubusercontent.com' : null;
	if (!host) {
		return `![Tests](${BADGE_REL_PATH})`;
	}
	const slug = base.replace(/^https?:\/\/github\.com\//, '');
	const badgeUrl = `https://${host}/${slug}/refs/heads/${BADGE_BRANCH}/${BADGE_REL_PATH}`;
	return `![Tests](${badgeUrl})`;
}

function primaryRepoRelativePath(
	item: { files: { role: string; absolutePath: string }[] },
	cwd: string
): string {
	const file = item.files.find((f) => f.role !== 'test') ?? item.files[0];
	if (!file) return '';
	return path.relative(cwd, file.absolutePath).split(path.sep).join('/');
}

export function readmeOutput(): Output {
	return {
		async output(buildResult, { cwd }) {
			const readmePath = path.join(cwd, README_FILE);
			let prefix = '';
			if (fs.existsSync(readmePath)) {
				const content = fs.readFileSync(readmePath, 'utf8');
				const idx = content.indexOf(BLOCKS_HEADING);
				prefix = `${(idx === -1 ? content : content.slice(0, idx)).trimEnd()}\n\n`;
			}

			const badgeMd = coverageBadgeMd(buildResult.repository);
			const lines: string[] = [
				`${BLOCKS_HEADING}\n`,
				'| Block | Status |',
				'| ----- | ------ |',
			];

			for (const item of buildResult.items) {
				const rel = primaryRepoRelativePath(item, cwd);
				const url = githubBlobUrl(buildResult.repository, rel);
				const label = item.title ?? item.name;
				lines.push(`| [${label}](${url}) | ${badgeMd} |`);
			}

			fs.writeFileSync(readmePath, `${prefix}${lines.join('\n')}\n`, 'utf8');
		},
		async clean() {
			// Table is embedded in README; nothing to delete before rebuild.
		},
	};
}
