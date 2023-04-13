import { FaGithub, FaGlobe, FaLayerGroup } from 'react-icons/fa';
import { ProjectData } from '../lib/types';

const Project: React.FC<{
	project: ProjectData;
}> = ({ project }) => {
	return (
		<li className="flex flex-col content-center rounded-xl bg-slate-100/80 p-3 shadow-md transition-all hover:shadow-xl dark:bg-neutral-900/80">
			<div className="flex flex-row justify-between gap-3 pb-2">
				{/* icon */}
				<img className="h-32 w-32 rounded-full" alt="" src={project.icon} />

				<div className="flex flex-1 flex-col">
					<div className="flex flex-row justify-between">
						{/* title */}
						<h3 className="text-xl font-bold text-pink-500">{project.name}</h3>

						{/* links */}
						<div className="flex flex-row content-center justify-end space-x-2">
							<a className="transition-all hover:text-pink-500" href={project.website}>
								<FaGlobe
									title={`${project.name}'s website`}
									className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"
								/>
							</a>

							<a className="transition-all hover:text-pink-500" href={project.repo}>
								<FaGithub
									title={`${project.name}'s repo`}
									className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"
								/>
							</a>
						</div>
					</div>

					{/* desc */}
					<p className="text-md flex-1 text-gray-800 dark:text-gray-300">{project.description}</p>
				</div>
			</div>

			{/* stack */}
			<span className="flex flex-row gap-2 align-middle">
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
			</span>
		</li>
	);
};

export default Project;
