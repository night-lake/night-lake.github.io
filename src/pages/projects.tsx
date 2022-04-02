import Head from 'next/head';
import GoBack from '../components/GoBack';
import Project from '../components/Project';
import Section from '../components/Section';
import { projects } from '../lib/constants';
import { ProjectData } from '../lib/types';

export const getStaticProps = async () => {
	return {
		props: {
			projects: projects.sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			})
		}
	};
};

const Projects: React.FC<{
	projects: ProjectData[];
}> = ({ projects }) => {
	return (
		<>
			<Head>
				<title>Sadie&#39;s Projects</title>
				<meta
					name="description"
					content="Everything I've made, ranging from random web experiments to full blown full stack apps. Nevermind about the second part."
				/>
			</Head>

			<GoBack />

			<Section title="Projects">
				<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-3">
					{projects.map(project => (
						<Project project={project} key={project.name} />
					))}
				</ul>
			</Section>
		</>
	);
};

export default Projects;
