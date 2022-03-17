import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight, FaHeart, FaIdBadge, FaSignature, FaTags, FaThumbsUp } from 'react-icons/fa';
import Post from '../components/Post';
import ItemList from '../components/ItemList';
import Project from '../components/Project';
import Section from '../components/Section';
import SeeMore from '../components/SeeMore';
import { desc, projects } from '../lib/constants';
import { getSortedPostsData } from '../lib/posts';
import { HomeProps, MarkdownData, ProjectData } from '../lib/types';
import Skills from '../components/Skills';

export async function getStaticProps() {
	const posts = getSortedPostsData();
	return {
		props: {
			posts,
			projects: projects.sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			})
		}
	};
}

export default function Home({ posts, projects }: HomeProps) {
	const firstFewPosts = posts.reduce((resultArray: MarkdownData[][], item, index) => {
		const chunkIndex = Math.floor(index / 3);

		if (!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	const firstFewProjects = projects.reduce((resultArray: ProjectData[][], item, index) => {
		const chunkIndex = Math.floor(index / 3);

		if (!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	return (
		<>
			<Head>
				<title>Sadie Mae Katherine</title>
				<meta name="description" content={desc} />
			</Head>

			<Section title="Projects">
				<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-3">
					{firstFewProjects[0].map(project => (
						<Project project={project} key={project.name} />
					))}
				</ul>

				<SeeMore url="/projects" />
			</Section>

			<Skills />

			<Section title="Recent Posts">
				<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-3">
					{firstFewPosts[0].map(post => (
						<Post post={post} key={post.id} />
					))}
				</ul>

				<SeeMore url="/blog" />
			</Section>
		</>
	);
}
