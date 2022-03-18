import classNames from 'classnames';
import { useState } from 'react';
import { FaBatteryEmpty, FaCloud, FaDatabase, FaGlobe, FaHammer } from 'react-icons/fa';
import {
	SiCss3,
	SiGit,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si';
import { TabItemData, TabTitle } from '../lib/types';
import Section from './Section';
import SkillTab from './SkillTab';
import SkillTabItem from './SkillTabItem';

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
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'CSS', icon: SiCss3 }
		],
		backend: [
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'PostgreSQL', icon: SiPostgresql }
		],
		devops: [],
		tools: [{ name: 'Git', icon: SiGit }]
	};

	const current = tabData[display];

	return (
		<Section title="Stuff I know">
			<div className="flex flex-row space-x-2">
				{tabTitles.map(item => (
					<SkillTab key={item.title} set={setDisplay} get={display} {...item} />
				))}
			</div>

			<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-4 ">
				{current.length > 0 ? (
					current.map(skill => <SkillTabItem {...skill} key={skill.name} />)
				) : (
					<SkillTabItem icon={FaBatteryEmpty} name="None Yet" />
				)}
			</ul>
		</Section>
	);
}
