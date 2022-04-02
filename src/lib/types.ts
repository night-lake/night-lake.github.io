import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons/lib';

// Markdown Objects
export interface MarkdownData {
	id: string;
	date: string;
	postTitle: string;
	description: string;
}

export interface DateBasedObject {
	year: string;
	posts: MarkdownData[];
}

// Constant Object
export interface ProjectData {
	name: string;
	description: string;
	website: string;
	repo: string;
	icon: string;
	tech: string[];
}

export interface IconData {
	url?: string;
	icon: IconType;
	sort: string;
	action?: MouseEventHandler<HTMLButtonElement>;
}

export interface AboutData {
	title: string;
	content: {
		title: string;
		icon: IconType;
		content: string[];
		joinKey?: string;
	}[];
}

export interface TabTitle {
	title: string;
	icon: IconType;
}

export interface TabItemData {
	icon: IconType;
	name: string;
}

export type Display = 'frontend' | 'backend' | 'devops' | 'tools';
