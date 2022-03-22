import { FaGithub, FaGlobe, FaLayerGroup } from 'react-icons/fa';
import { ProjectProps } from '../lib/types';
import IconButton from './IconButton';

export default function Project({ project }: ProjectProps) {
	return (
		<li className="flex flex-col content-center rounded-xl bg-white p-2 transition-all dark:bg-neutral-800/90">
			<div className="m-auto">
				<img className="h-48 w-48 rounded-full" alt="" src={project.icon} />
			</div>
			<div className="flex h-full grow flex-col items-stretch justify-between">
				<div className="flex-1 pb-2">
					<h3 className="text-xl font-bold text-pink-500">{project.name}</h3>
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
				<div className="flex flex-row content-center justify-end space-x-2">
					<IconButton
						link={project.website}
						icon={
							<FaGlobe
								title={`${project.name}'s website`}
								className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"
							/>
						}
					/>
					<IconButton
						link={project.repo}
						icon={
							<FaGithub
								title={`${project.name}'s repo`}
								className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"
							/>
						}
					/>
				</div>
			</div>
		</li>
	);
}
