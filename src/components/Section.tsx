import { SectionProps } from '../lib/types';

export default function Section({ title, children, pink = false }: SectionProps) {
	return (
		<section className="pb-4">
			<h2 className={`text-xl ${pink ? 'text-xl font-bold text-pink-500' : 'font-medium dark:text-white'}`}>
				{title}
			</h2>
			{children}
		</section>
	);
}
