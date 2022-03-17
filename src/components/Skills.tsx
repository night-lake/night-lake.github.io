import classNames from 'classnames';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBatteryEmpty, FaCloud, FaDatabase, FaGlobe, FaHammer } from 'react-icons/fa';
import { SiGit, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TabItemData, TabTitle } from '../lib/types';
import Section from './Section';

export default function Skills() {
	const [display, setDisplay] = useState('frontend');

	const tabTitles: TabTitle[] = [
		{
			title: 'Frontend',
			icon: FaGlobe
		},
		{
			title: 'Backend',
			icon: FaDatabase
		},
		{
			title: 'DevOps',
			icon: FaCloud
		},
		{
			title: 'Tools',
			icon: FaHammer
		}
	];

	const tabData: Record<string, TabItemData[]> = {
		frontend: [
			{
				name: 'Next.js',
				icon: SiNextdotjs
			},
			{
				name: 'React',
				icon: SiReact
			},
			{
				name: 'TailwindCSS',
				icon: SiTailwindcss
			},
			{
				name: 'TypeScript',
				icon: SiTypescript
			}
		],
		backend: [
			{
				name: 'Node.js',
				icon: SiNodedotjs
			},
			{
				name: 'TypeScript',
				icon: SiTypescript
			}
		],
		devops: [],
		tools: [
			{
				name: 'Git',
				icon: SiGit
			}
		]
	};

	return (
		<Section title="Stuff I know">
			<div className="grid grid-cols-2 gap-2 py-2 md:grid-cols-4">
				{tabTitles.map(skillHead => (
					<IconContext.Provider
						value={{
							className: 'text-2xl text-gray-600 dark:text-gray-300'
						}}
						key={skillHead.title}
					>
						<button
							className={classNames(
								'flex flex-row items-center rounded-md bg-white/75 p-2 transition-all hover:border-b-2 hover:border-pink-500',
								{
									'border-b-2 border-pink-600 bg-white/50 dark:bg-neutral-800/50':
										skillHead.title.toLowerCase()
								}
							)}
							onClick={() => setDisplay(skillHead.title.toLowerCase())}
						>
							{<skillHead.icon title={skillHead.title} />}
							<p className="ml-2 font-medium text-gray-600 dark:text-gray-300">{skillHead.title}</p>
						</button>
					</IconContext.Provider>
				))}
			</div>

			<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-4">
				{tabData[display].length > 0 ? (
					tabData[display].map(skill => (
						<li
							key={skill.name}
							className="flex rounded-xl px-4 py-5 shadow-md dark:bg-neutral-800/80 dark:text-white"
						>
							<skill.icon className="text-3xl" />
							<p className="pl-2 font-medium">{skill.name}</p>
						</li>
					))
				) : (
					<li className="flex rounded-xl p-5 dark:text-white">
						<FaBatteryEmpty className="text-2xl" />
						<p className="pl-2 font-medium">None Yet</p>
					</li>
				)}
			</ul>
		</Section>
	);
}
