import { format } from 'date-fns';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import {
	FaCodepen,
	FaDiscord,
	FaEnvelope,
	FaGithub,
	FaMoon,
	FaReddit,
	FaStackOverflow,
	FaSun,
	FaTwitter,
	FaYoutube
} from 'react-icons/fa';
import { IconData } from '../lib/types';

const Footer: React.FC = () => {
	const { resolvedTheme, setTheme } = useTheme();

	const [showDiscord, setDiscord] = useState(false);
	let classname = 'cursor-pointer text-3xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300';

	const links: IconData[] = [
		{ icon: FaGithub, url: 'https://github.com/night-lake', sort: 'GitHub' },
		{ icon: FaTwitter, url: 'https://twitter.com/_nightlake', sort: 'Twitter' },
		{ icon: FaReddit, url: 'https://reddit.com/u/_nightlake', sort: 'Reddit' },
		{ icon: FaYoutube, url: 'https://youtube.com/channel/UCrYQrKFiLyRoTKo0WEOlfzg', sort: 'Youtube' },
		{ icon: FaEnvelope, url: 'mailto:sadiemk@fluorine.me', sort: 'Email' },
		{ icon: FaCodepen, url: 'https://codepen.io/nightlake', sort: 'Codepen' },
		{
			icon: FaStackOverflow,
			url: 'https://stackoverflow.com/users/12720379/sadie-katherine',
			sort: 'StackOverflow'
		},
		{
			icon: FaDiscord,
			action: () => {
				setDiscord(value => !value);
			},
			sort: 'Discord'
		}
	];

	links.sort((a, b) => {
		if (a.sort < b.sort) return -1;
		if (a.sort > b.sort) return 1;
		return 0;
	});

	return (
		<footer>
			{showDiscord && (
				<p className="pt-3 text-center font-semibold text-gray-700 dark:text-gray-300">nightlake#3370</p>
			)}
			<div className="flex flex-row flex-wrap justify-center space-x-4 py-4 align-middle">
				{links.map(link => {
					return link.url ? (
						<a href={link.url} key={link.sort}>
							<link.icon title={link.sort} className={classname} />
						</a>
					) : (
						<button onClick={link.action} key={link.sort}>
							<link.icon title={link.sort} className={classname} />
						</button>
					);
				})}
			</div>
			<div className="flex flex-row content-center justify-between">
				<p className="pb-3 text-center font-semibold text-gray-700 dark:text-gray-300">
					&copy; Sadie Mae Katherine {format(Date.now(), 'yyyy')}.{' '}
					<a
						href="https://github.com/night-lake/night-lake.github.io"
						className="font-bold text-pink-500 hover:text-pink-600"
					>
						View source.
					</a>
				</p>
				<button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
					{resolvedTheme === 'dark' ? (
						<FaMoon
							className={
								'cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300'
							}
						/>
					) : (
						<FaSun
							className={
								'cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300'
							}
						/>
					)}
				</button>
			</div>
		</footer>
	);
};

export default Footer;
