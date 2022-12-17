import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
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

			<section className="flex flex-col content-center justify-center gap-2 py-4 md:justify-start md:gap-4">
				<div className="flex flex-row content-center gap-4 align-middle">
					<img
						className="h-16 w-16 rounded-full"
						alt=""
						src="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/amelia.png"
					/>
					<div className="flex flex-col content-center justify-center">
						<p className="align-middle text-2xl font-extrabold text-pink-600 lg:tracking-wide">
							Amelia Mae Katherine
						</p>
						<div className="flex flex-row gap-2">
							<img
								src="https://64.media.tumblr.com/c17999ea018803adc12efdb4fe9f0513/ab2b67297c363b55-c5/s640x960/9c2980f68f42d044fb8163ae83c441ec79c0a69a.png"
								alt="Genderfae Flag"
								className="h-6 w-10 rounded-md"
							></img>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lesbian_Pride_Flag_2019.svg/1024px-Lesbian_Pride_Flag_2019.svg.png"
								alt="Lesbian Flag"
								className="h-6 w-10 rounded-md"
							></img>
						</div>
					</div>
				</div>
				<div>
					<p className="text-md font-semibold text-gray-800 dark:text-gray-300">what</p>
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
