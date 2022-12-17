import { FaGithub, FaGlobe, FaLayerGroup } from 'react-icons/fa';
import { ProjectData } from '../lib/types';

const Project: React.FC<{
	project: ProjectData;
}> = ({ project }) => {
	return (
		<li className="flex flex-col content-center rounded-xl bg-slate-100/80 p-2 shadow-md transition-all hover:shadow-xl dark:bg-neutral-900/80">
			<div className="m-auto">
				<img className="h-48 w-48 rounded-full" alt="" src={project.icon} />
			</div>

			<div className="flex h-full grow flex-col items-stretch justify-between">
				<div className="flex-1 pb-2">
					<div className="flex flex-row justify-between">
						<h3 className="text-xl font-bold text-pink-500">{project.name}</h3>
						<div className="flex flex-row content-center justify-end space-x-2">
							<a className="hover:color-pink-500 transition-all" href={project.website}>
								<FaGlobe
									title={`${project.name}'s website`}
									className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"
								/>
							</a>

							<a className="hover:color-pink-500 transition-all" href={project.repo}>
								<FaGithub
									title={`${project.name}'s website`}
									className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"
								/>
							</a>
						</div>
					</div>
					<p className="text-md text-gray-800 dark:text-gray-300">{project.description}</p>
				</div>

				<div className="flex flex-row content-center space-x-2 pb-2">
					<FaLayerGroup title="Tech Stack" className="text-xl text-gray-600 dark:text-gray-300" />

					<p className="text-md text-gray-800 dark:text-gray-300">
						{project.tech
							.sort((a, b) => {
								if (a < b) return -1;
								if (a > b) return 1;
								return 0;
							})
							.join(', ')}
					</p>
				</div>
			</div>
		</li>
	);
};

export default Project;
