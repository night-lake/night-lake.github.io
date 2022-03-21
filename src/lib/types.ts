import React from 'react';
import { IconType } from 'react-icons/lib';
import { ReactElement } from 'react-markdown/lib/react-markdown';

// Markdown Objects
export interface MarkdownData {
	id: string;
	date: string;
	title: string;
	description: string;
	content?: string;
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
	url: string;
	icon: IconType;
	sort: string;
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

export interface TabItemData {
	icon: IconType;
	name: string;
}

export interface TabTitle {
	title: string;
	icon: IconType;
}

// Props
export interface HomeProps {
	projects: ProjectData[];
	posts: MarkdownData[];
}
export interface PostProps {
	post: MarkdownData;
	key: string;
}

export interface ProjectProps {
	project: ProjectData;
}

export interface ItemListProps {
	icon: IconType;
	title: string;
	content: string[];
	joinKey?: string;
}

export interface ProjectPageProps {
	projects: ProjectData[];
}

export interface IconButtonProps {
	link: string;
	icon: React.ReactElement;
}

export interface SectionProps {
	title: string;
	children: React.ReactNode;
	topMargin?: boolean;
}
