import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { TabTitle } from '../lib/types';

export default function SkillTab(
	props: TabTitle & {
		set: Dispatch<SetStateAction<string>>;
		get: string;
	}
) {
	return (
		<button
			className={classNames('flex flex-col items-center', 'group', 'rounded-lg p-2 transition-all', {
				'bg-white dark:bg-neutral-800': props.title.toLowerCase() === props.get
			})}
			onClick={() => props.set(props.title.toLowerCase())}
		>
			{
				<props.icon
					title={props.title}
					className="text-2xl text-gray-600 transition-all group-hover:text-pink-500 dark:text-gray-300"
				/>
			}
			<p className="font-medium text-gray-600 transition-all group-hover:text-pink-500 dark:text-gray-300">
				{props.title}
			</p>
		</button>
	);
}
