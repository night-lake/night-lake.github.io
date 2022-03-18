import classNames from 'classnames';
import { useState } from 'react';
import { FaBatteryEmpty, FaCloud, FaDatabase, FaGlobe, FaHammer } from 'react-icons/fa';
import { SiGit, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TabItemData, TabTitle } from '../lib/types';
import Section from './Section';

export default function Skills() {
	const [display, setDisplay] = useState('frontend');

	const tabTitles: TabTitle[] = [
		{ title: 'Frontend', icon: FaGlobe },
		{ title: 'Backend', icon: FaDatabase },
		{ title: 'DevOps', icon: FaCloud },
		{ title: 'Tools', icon: FaHammer }
	];

	const tabData: Record<string, TabItemData[]> = {
		frontend: [
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'React', icon: SiReact },
			{ name: 'TailwindCSS', icon: SiTailwindcss },
			{ name: 'TypeScript', icon: SiTypescript }
		],
		backend: [
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'PostgreSQL', icon: SiPostgresql }
		],
		devops: [],
		tools: [{ name: 'Git', icon: SiGit }]
	};

	return (
		<Section title="Stuff I know">
			<div className="flex flex-row space-x-2">
				{tabTitles.map(skillHead => (
					<button
						key={skillHead.title}
						className={classNames('flex flex-col items-center', 'group', 'rounded-lg p-2 transition-all', {
							'bg-white dark:bg-neutral-800': skillHead.title.toLowerCase() === display
						})}
						onClick={() => setDisplay(skillHead.title.toLowerCase())}
					>
						{
							<skillHead.icon
								title={skillHead.title}
								className="text-2xl text-gray-600 transition-all group-hover:text-pink-500 dark:text-gray-300"
							/>
						}
						<p className="font-medium text-gray-600 transition-all group-hover:text-pink-500 dark:text-gray-300">
							{skillHead.title}
						</p>
					</button>
				))}
			</div>

			<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-4 ">
				{tabData[display].length > 0 ? (
					tabData[display].map(skill => (
						<li
							key={skill.name}
							className="flex rounded-xl bg-white p-4 shadow-md dark:bg-neutral-800/80 dark:text-white"
						>
							<skill.icon className="text-3xl" />
							<p className="pl-2 font-medium">{skill.name}</p>
						</li>
					))
				) : (
					<li className="flex rounded-xl p-4 dark:text-white">
						<FaBatteryEmpty className="text-2xl" />
						<p className="pl-2 font-medium">None Yet</p>
					</li>
				)}
			</ul>
		</Section>
	);
}
