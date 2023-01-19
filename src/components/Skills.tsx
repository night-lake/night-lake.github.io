import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, useState } from 'react';
import { FaCloud, FaDatabase, FaGlobe, FaHammer } from 'react-icons/fa';
import {
	SiCss3,
	SiGit,
	SiGithubactions,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si';
import { TabItemData, TabTitle } from '../lib/types';
import Section from './Section';

const Skills: React.FC = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [transition, isTransitioning] = useState(true);

	const tabTitles: TabTitle[] = [
		{ title: 'Frontend', icon: FaGlobe },
		{ title: 'Backend', icon: FaDatabase },
		{ title: 'DevOps', icon: FaCloud },
		{ title: 'Tools', icon: FaHammer }
	];

	const tabData: TabItemData[][] = [
		[
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'React', icon: SiReact },
			{ name: 'TailwindCSS', icon: SiTailwindcss },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'CSS', icon: SiCss3 }
		],
		[
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'PostgreSQL', icon: SiPostgresql }
		],
		[{ name: 'Github Actions', icon: SiGithubactions }],
		[{ name: 'Git', icon: SiGit }]
	];

	return (
		<Section title="Stuff I know">
			<Tab.Group
				selectedIndex={selectedIndex}
				onChange={index => {
					isTransitioning(false);
					setSelectedIndex(index);
					isTransitioning(true);
				}}
			>
				<Tab.List className="mb-2 flex flex-row space-x-4">
					{tabTitles.map(item => (
						<Tab key={item.title} as={Fragment}>
							{({ selected }) => (
								<div className="group flex w-1/4 cursor-pointer flex-col items-center transition-all">
									<div className="flex flex-row justify-center space-x-2 py-2">
										<item.icon
											title={item.title}
											className={classNames('text-2xl transition-all group-hover:text-pink-500', {
												'text-gray-600 dark:text-gray-300': !selected,
												'text-pink-600': selected
											})}
										/>

										<p
											className={classNames(
												'font-medium transition-all group-hover:text-pink-500',
												{
													'text-gray-600 dark:text-gray-300': !selected,
													'font-semibold text-pink-600': selected
												}
											)}
										>
											{item.title}
										</p>
									</div>

									<hr
										className={classNames(
											'w-full rounded-md border-2 group-hover:border-pink-500',
											{
												'border-pink-600': selected,
												'border-slate-100/80': !selected
											}
										)}
									></hr>
								</div>
							)}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels>
					{tabData.map((data, index) => (
						<Tab.Panel key={index}>
							<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-4">
								{data.map(item => (
									<li
										className="flex items-center rounded-xl bg-slate-100/80 p-4 shadow-md dark:bg-neutral-900/80 dark:text-white"
										key={item.name}
									>
										<item.icon className="text-3xl" />
										<p className="pl-2 font-medium">{item.name}</p>
									</li>
								))}
							</ul>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>

			{/* <div className="mb-2 flex flex-row space-x-4"></div>

			<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-4 ">
				{current.map(skill => (
					<SkillTabItem {...skill} key={skill.name} />
				))}
			</ul> */}
		</Section>
	);
};

export default Skills;
