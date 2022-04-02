import Link from 'next/link';
import { MarkdownData } from '../lib/types';
import Date from './Date';

const Post: React.FC<{
	post: MarkdownData;
}> = ({ post }) => {
	return (
		<ul className="rounded-xl bg-white p-2 transition-all hover:shadow-md dark:bg-neutral-800/80 dark:shadow-lg">
			<Link href={`/blog/${post.id}`} passHref>
				<a>
					<h3 className="text-lg font-bold text-pink-500">{post.postTitle}</h3>
					<p className="text-md mb-3 text-gray-800 dark:text-gray-200">{post.description}</p>
					<Date className="text-gray-600 dark:text-gray-300" dateString={post.date} />
				</a>
			</Link>
		</ul>
	);
};

export default Post;
