import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Date from '../../components/Date';
import GoBack from '../../components/GoBack';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { MarkdownData } from '../../lib/types';

export async function getStaticProps({ params }: Record<string, MarkdownData>) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

export default function Post({ postData }: Record<string, MarkdownData>) {
	return (
		<>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<GoBack />
			<section className="py-4">
				<h1 className="text-2xl font-bold dark:text-white">{postData.title}</h1>
				<p className="font-medium text-gray-600 dark:text-gray-400">
					<Date dateString={postData.date} />
				</p>
			</section>
			<article className="prose dark:prose-invert">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{postData.content ?? 'That post was not found.'}
				</ReactMarkdown>
			</article>
		</>
	);
}
