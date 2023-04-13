import Head from 'next/head';
import Post from '../components/Post';
import Project from '../components/Project';
import Section from '../components/Section';
import SeeMore from '../components/SeeMore';
import Skills from '../components/Skills';
import { desc, projects } from '../lib/constants';
import { getSortedPostsData } from '../lib/posts';
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

function split<T>(arr: T[], amnt?: number): T[][] {
	return arr.reduce((resultArray: T[][], item, index) => {
		const chunkIndex = Math.floor(index / (amnt ?? 3));

		resultArray[chunkIndex] ??= [];
		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);
}

const Home: React.FC<{
	projects: ProjectData[];
	posts: MarkdownData[];
}> = ({ posts, projects }) => {
	const firstFewProjects = split<ProjectData>(projects, 4);
	const firstFewPosts = split<MarkdownData>(posts);

	return (
		<>
			<Head>
				<title>Amelia Mae Katherine</title>
				<meta name="description" content={desc} />
			</Head>

			<section className="flex flex-row content-center justify-center gap-4 py-4 md:justify-start md:gap-4">
				<img
					className="h-16 w-16 rounded-full md:h-24 md:w-24"
					alt=""
					src="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/amelia.png"
				/>

				<div className="flex flex-col content-center justify-center gap-2">
					<p className="align-middle text-2xl font-extrabold text-pink-600 md:text-3xl lg:tracking-wider">
						Amelia Mae Katherine
					</p>

					<p className="text-md align-middle font-medium text-gray-800 dark:text-gray-300">
						she/they, genderfae, lesbian, transfeminine, 15 y/o
					</p>

					<div className="w-max-7xl flex flex-row space-x-4">
						<div className="genderfae h-6 w-12 rounded-md"></div>
						<div className="transfeminine h-6 w-12 rounded-md"></div>
						<div className="lesbian h-6 w-12 rounded-md"></div>
					</div>
				</div>
			</section>

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
