import { ReactNode } from 'react';
import { MarkdownData } from '../lib/types';
import Date from './Date';
import GoBack from './GoBack';

export default function PageLayout({ children, meta }: { children: ReactNode; meta: MarkdownData }) {
	return (
		<>
			<GoBack />
			<section className="py-4">
				<h1 className="text-2xl font-bold dark:text-white">{meta.title}</h1>
				<p className="font-medium text-gray-600 dark:text-gray-400">
					<Date dateString={meta.date} />
				</p>
			</section>
			<article className="prose dark:prose-invert">{children}</article>
		</>
	);
}
