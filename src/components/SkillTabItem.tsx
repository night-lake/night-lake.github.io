import { TabItemData } from '../lib/types';

const SkillTabItem: React.FC<TabItemData> = props => {
	return (
		<li className="flex items-center rounded-xl bg-white p-4 shadow-md dark:bg-neutral-800/80 dark:text-white">
			<props.icon className="text-3xl" />
			<p className="pl-2 font-medium">{props.name}</p>
		</li>
	);
};

export default SkillTabItem;
