import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { Display, TabTitle } from '../lib/types';

const SkillTab: React.FC<
	TabTitle & {
		set: Dispatch<SetStateAction<Display>>;
		get: string;
	}
> = props => {
	return (
		<button
			className="group flex flex-col items-center transition-all"
			onClick={() => props.set(props.title.toLowerCase() as Display)}
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
					'text-pink-600 font-semibold': props.title.toLowerCase() === props.get
				})}
			>
				{props.title}
			</p>
			<hr
				className={classNames('w-full rounded-md border-2 group-hover:border-pink-500', {
					'border-pink-600': props.title.toLowerCase() === props.get,
					'border-slate-100/80': props.title.toLowerCase() !== props.get
				})}
			></hr>
		</button>
	);
};

export default SkillTab;
