import { format } from 'date-fns';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import {
	FaCodepen,
	FaDiscord,
	FaEnvelope,
	FaGithub,
	FaMastodon,
	FaMoon,
	FaReddit,
	FaStackOverflow,
	FaSun,
	FaYoutube
} from 'react-icons/fa';
import { IconData } from '../lib/types';

const Footer: React.FC = () => {
	const { resolvedTheme, setTheme } = useTheme();

	const [showDiscord, setDiscord] = useState(false);
	let classname = 'cursor-pointer text-3xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300';

	return (
		<div className="mx-auto max-w-6xl p-4 md:px-0">
			<footer>
				{/* {showDiscord && (
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
				</div> */}
				<div className="flex flex-row content-center justify-between">
					<p className="text-center font-semibold text-gray-700 dark:text-gray-300">
						&copy; Amelia Mae Katherine {format(Date.now(), 'yyyy')}.{' '}
						<a
							href="https://github.com/night-lake/night-lake.github.io"
							className="font-bold text-pink-500 hover:text-pink-600"
						>
							View source.
						</a>
					</p>
					<div className="flex flex-row content-center justify-between gap-3">
						<a href="https://tech.lgbt/@nightlake" rel="me">
							<FaMastodon className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300" />
						</a>
						<a href="https://github.com/night-lake" rel="me">
							<FaGithub className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300" />
						</a>
						<button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
							{resolvedTheme === 'dark' ? (
								<FaMoon className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300" />
							) : (
								<FaSun className="cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300" />
							)}
						</button>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
