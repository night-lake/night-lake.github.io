import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Date from '../../components/Date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticProps = async ({ params }: { params: { id: string; fileContents: string } }) => {
	const mdxSource = await serialize(await getPostData(params?.id ?? ''), { parseFrontmatter: true });
	return { props: { source: mdxSource } };
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: getAllPostIds(),
		fallback: false
	};
};

const PostPage: React.FC<{ source: MDXRemoteSerializeResult<Record<string, unknown>> }> = ({ source }) => {
	return (
		<>
			<Head>
				<title>{source.frontmatter?.postTitle}</title>
				<meta name="description" content={source.frontmatter?.description} />
			</Head>
			<section className="mb-6">
				<h1 className="pb-2 text-2xl font-bold text-pink-500">{source.frontmatter?.postTitle}</h1>
				<p className="pb-2 dark:text-white">{source.frontmatter?.description}</p>
				<p className="font-medium text-gray-600 dark:text-gray-400">
					<Date dateString={source.frontmatter?.date ?? '1970-01-01'} />
				</p>
			</section>
			<article className="prose max-w-5xl dark:prose-invert">
				<MDXRemote {...source} />
			</article>
		</>
	);
};

export default PostPage;
