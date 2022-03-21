import classNames from 'classnames';
import { SectionProps } from '../lib/types';

export default function Section({ title, children, topMargin = false }: SectionProps) {
	return (
		<section
			className={classNames({
				'mb-4': !topMargin,
				'my-4': topMargin
			})}
		>
			<h2 className="text-xl font-medium dark:text-white">{title}</h2>
			<div className="mt-4">{children}</div>
		</section>
	);
}
