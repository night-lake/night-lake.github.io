import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Date from '../../components/Date';
import GoBack from '../../components/GoBack';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }: Record<string, { id: string; fileContents: string }>) {
	const mdxSource = await serialize(await getPostData(params.id), { parseFrontmatter: true });
	return { props: { source: mdxSource } };
}

export async function getStaticPaths() {
	return {
		paths: getAllPostIds(),
		fallback: false
	};
}

export default function PostPage({ source }: { source: MDXRemoteSerializeResult<Record<string, unknown>> }) {
	return (
		<>
			<Head>
				<title>{source.frontmatter?.postTitle}</title>
			</Head>
			<GoBack />
			<section className="py-4">
				<h1 className="text-2xl font-bold text-pink-500">{source.frontmatter?.postTitle}</h1>
				<p className="mb-3 dark:text-white">{source.frontmatter?.description}</p>
				<p className="font-medium text-gray-600 dark:text-gray-400">
					<Date dateString={source.frontmatter?.date ?? '1970-01-01'} />
				</p>
			</section>
			<article className="prose dark:prose-invert">
				<MDXRemote {...source} />
			</article>
		</>
	);
}
