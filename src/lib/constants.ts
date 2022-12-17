import { IconData, ProjectData } from './types';

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
		tech: ['Discord.js', 'SQLite', 'JavaScript']
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
