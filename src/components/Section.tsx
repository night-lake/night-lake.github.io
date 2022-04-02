import classNames from 'classnames';

const  Section: React.FC<{
	title: string;
	children: React.ReactNode;
	topMargin?: boolean;
}> = ({ title, children, topMargin = false }) => {
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

export default Section;