import { FaCloud, FaDatabase, FaEnvelope, FaGlobe, FaHammer, FaStackOverflow } from 'react-icons/fa';
import {
	SiCodepen,
	SiCss3,
	SiDiscord,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiMastodon,
	SiMatrix,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiReddit,
	SiTailwindcss,
	SiTypescript,
	SiYoutube
} from 'react-icons/si';
import { Display, IconData, ProjectData, TabItemData, TabTitle } from './types';

export const desc = "I'm a 15 y/o gal who mostly makes things in TypeScript, sometimes those things work.";

export const projects: ProjectData[] = [
	{
		name: 'Fluorine',
		description: 'Fantastic discord bot, perfect for your discord server!',
		website: 'https://fluorine.me',
		repo: 'https://github.com/Fluorinebot/fluorine',
		icon: 'https://us-east-1.tixte.net/uploads/nightlake.tixte.co/fluorine.png',
		tech: ['Discord.js', 'TypeScript', 'PostgreSQL']
	},
	{
		name: 'G.A.S Bot',
		description: 'A bot to protect your server from the letter G.',
		website: 'https://h-projects.github.io/gasbot/',
		repo: 'https://github.com/h-projects/gasbot',
		icon: 'https://us-east-1.tixte.net/uploads/nightlake.tixte.co/gasbot.png',
		tech: ['Discord.js', 'SQLite', 'TypeScript']
	},
	{
		name: 'This Site',
		description: 'I too love recursion.',
		website: 'https://sadie.is-a.dev/',
		repo: 'https://github.com/night-lake/night-lake.github.io',
		icon: 'https://us-east-1.tixte.net/uploads/nightlake.tixte.co/amelia.png',
		tech: ['Next.js', 'TypeScript', 'TailwindCSS']
	}
];


export const tabTitles: TabTitle[] = [
	{ title: 'Frontend', icon: FaGlobe },
	{ title: 'Backend', icon: FaDatabase },
	{ title: 'DevOps', icon: FaCloud },
	{ title: 'Tools', icon: FaHammer }
];

export const tabData: Record<Display, TabItemData[]> = {
	frontend: [
		{ name: 'Next.js', icon: SiNextdotjs },
		{ name: 'React', icon: SiReact },
		{ name: 'TailwindCSS', icon: SiTailwindcss },
		{ name: 'TypeScript', icon: SiTypescript },
		{ name: 'CSS', icon: SiCss3 }
	],
	backend: [
		{ name: 'Node.js', icon: SiNodedotjs },
		{ name: 'TypeScript', icon: SiTypescript },
		{ name: 'PostgreSQL', icon: SiPostgresql }
	],
	devops: [{ name: 'Github Actions', icon: SiGithubactions }],
	tools: [{ name: 'Git', icon: SiGit }]
};
