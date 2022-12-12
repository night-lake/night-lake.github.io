import Head from 'next/head';
import Post from '../components/Post';
import Project from '../components/Project';
import Section from '../components/Section';
import SeeMore from '../components/SeeMore';
import Skills from '../components/Skills';
import { desc, projects } from '../lib/constants';
import { getAllPostIds, getSortedPostsData } from '../lib/posts';
import { MarkdownData, ProjectData } from '../lib/types';

export const getStaticProps = async () => {
	return {
		props: {
			posts: getSortedPostsData(),
			projects: projects.sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			})
		}
	};
};

function split<T>(arr: T[]): T[][] {
	return arr.reduce((resultArray: T[][], item, index) => {
		const chunkIndex = Math.floor(index / 3);

		if (!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);
}

const Home: React.FC<{
	projects: ProjectData[];
	posts: MarkdownData[];
}> = ({ posts, projects }) => {
	const firstFewProjects = split<ProjectData>(projects);
	const firstFewPosts = split<MarkdownData>(posts);

	return (
		<>
			<Head>
				<title>Amelia Mae Katherine</title>
				<meta name="description" content={desc} />
			</Head>

			<Section title="Projects">
				<ul className="mb-4 grid gap-2 lg:grid-cols-2 xl:grid-cols-3">
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
};

export default Home;
