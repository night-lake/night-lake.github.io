import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MarkdownData } from './types';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.mdx$/, '')
			}
		};
	});
}

export function getSortedPostsData(): MarkdownData[] {
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData: any = fileNames.map(fileName => {
		const id = fileName.replace(/\.mdx$/, '');

		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const matterResult = matter(fileContents);

		return {
			id,
			...matterResult.data
		};
	});

	return allPostsData.sort(({ date: a }: MarkdownData, { date: b }: MarkdownData) => {
		if (a < b) return 1;
		else if (a > b) return -1;
		else return 0;
	});
}

export async function getPostData(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.mdx`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	return fileContents;
}
