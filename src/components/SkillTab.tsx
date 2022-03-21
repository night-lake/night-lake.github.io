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
			className="group flex flex-col items-center transition-all"
			onClick={() => props.set(props.title.toLowerCase())}
		>
			{
				<props.icon
					title={props.title}
					className={classNames('text-2xl transition-all group-hover:text-pink-500', {
						'text-gray-600 dark:text-gray-300': props.title.toLowerCase() !== props.get,
						'text-pink-600': props.title.toLowerCase() === props.get
					})}
				/>
			}
			<p
				className={classNames('font-medium transition-all group-hover:text-pink-500', {
					'text-gray-600 dark:text-gray-300': props.title.toLowerCase() !== props.get,
					'text-pink-600': props.title.toLowerCase() === props.get
				})}
			>
				{props.title}
			</p>
		</button>
	);
}
