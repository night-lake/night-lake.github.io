import { TabItemData } from '../lib/types';

export default function SkillTabItem(props: TabItemData) {
	return (
		<li className="flex items-center rounded-xl bg-white p-4 shadow-md dark:bg-neutral-800/80 dark:text-white">
			<props.icon className="text-3xl" />
			<p className="pl-2 font-medium">{props.name}</p>
		</li>
	);
}
