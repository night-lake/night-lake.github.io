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

	let classname =
		'cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300 dark:hover:hover:text-pink-600';

	return (
		<div className="mx-auto max-w-6xl p-4 md:px-0">
			<footer>
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
					<div className="flex flex-row content-center justify-between gap-4">
						<a href="https://tech.lgbt/@nightlake" rel="me">
							<FaMastodon className={classname} />
						</a>
						<a href="https://github.com/night-lake" rel="me">
							<FaGithub className={classname} />
						</a>
						<button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
							{resolvedTheme === 'dark' ? (
								<FaMoon className={classname} />
							) : (
								<FaSun className={classname} />
							)}
						</button>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
