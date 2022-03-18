import Link from 'next/link';
import { PostProps } from '../lib/types';
import Date from './Date';

export default function Post({ post }: PostProps) {
	return (
		<Link href={`/blog/${post.id}`} passHref>
			<a className="rounded-xl bg-white p-2 transition-all hover:shadow-md dark:bg-neutral-800/80 dark:shadow-lg">
				<h3 className="text-lg font-bold text-pink-500">{post.title}</h3>
				<p className="text-md pb-1 font-medium text-gray-800 dark:text-gray-200">{post.description}</p>
				<Date className="text-gray-600 dark:text-gray-300" dateString={post.date} />
			</a>
		</Link>
	);
}
