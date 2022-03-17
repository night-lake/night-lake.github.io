import { format } from 'date-fns';
import { IconContext } from 'react-icons';
import {
	FaCodepen,
	FaDiscord,
	FaGithub,
	FaReddit,
	FaStackOverflow,
	FaTwitter,
	FaYoutube,
	FaEnvelope
} from 'react-icons/fa';
import { IconData } from '../lib/types';
import IconButton from './IconButton';

export default function Footer() {
	const links: IconData[] = [
		{
			icon: FaGithub,
			url: 'https://github.com/night-lake',
			sort: 'GitHub'
		},
		{
			icon: FaTwitter,
			url: 'https://twitter.com/_nightlake',
			sort: 'Twitter'
		},
		{
			icon: FaReddit,
			url: 'https://reddit.com/u/_nightlake',
			sort: 'Reddit'
		},
		{
			icon: FaDiscord,
			url: 'https://discord.gg/zdubYKc2c5',
			sort: 'Discord'
		},
		{
			icon: FaYoutube,
			url: 'https://youtube.com/channel/UCrYQrKFiLyRoTKo0WEOlfzg',
			sort: 'Youtube'
		},
		{
			icon: FaEnvelope,
			url: 'mailto:sadiemk@fluorine.me',
			sort: 'Email'
		},
		{
			icon: FaStackOverflow,
			url: 'https://stackoverflow.com/users/12720379/sadie-katherine',
			sort: 'StackOverflow'
		},
		{
			icon: FaCodepen,
			url: 'https://codepen.io/nightlake',
			sort: 'Codepen'
		}
	];

	links.sort((a, b) => {
		if (a.sort < b.sort) return -1;
		if (a.sort > b.sort) return 1;
		return 0;
	});

	return (
		<IconContext.Provider
			value={{
				className: 'text-3xl text-gray-600 dark:text-gray-300 hover:text-pink-600 transition-all cursor-pointer'
			}}
		>
			<footer>
				<p className="pt-3 text-center font-semibold text-gray-700 dark:text-gray-300">
					&copy; Sadie Mae Katherine {format(Date.now(), 'yyyy')}.{' '}
					<a
						href="https://github.com/night-lake/night-lake.github.io"
						className="font-bold text-pink-500 hover:text-pink-600"
					>
						View source.
					</a>
				</p>
				<div className="flex flex-row flex-wrap justify-center space-x-4 py-4 align-middle">
					{links.map((link: IconData) => {
						return <IconButton link={link.url} icon={<link.icon title={link.sort} />} key={link.sort} />;
					})}
				</div>
			</footer>
		</IconContext.Provider>
	);
}
