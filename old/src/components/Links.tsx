import { FaCodepen, FaDiscord, FaEnvelope, FaGithub, FaMastodon, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiMatrix } from 'react-icons/si';
import { IconData } from '../lib/types';
import AKCohost from './AKCohost';
import Section from './Section';

const Links: React.FC = () => {
	let classname = 'cursor-pointer text-3xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300';

	const noTextLinks: IconData[] = [
		{ icon: FaDiscord, text: 'nightlake#3370', sort: 'Discord' },
		{ icon: FaEnvelope, sort: 'Mail', text: 'ameliamae@duck.com' },
		{ icon: SiMatrix, text: '@nightlake:catgirl.cloud', sort: 'Matrix' }
	];

	const links: IconData[] = [
		{ icon: FaCodepen, url: 'https://codepen.io/nightlake', sort: 'Codepen', text: '@nightlake' },
		{ icon: AKCohost, url: 'https://cohost.org/nightlake', sort: 'Cohost', text: '@nightlake ' },
		{ icon: FaGithub, url: 'https://github.com/night-lake', sort: 'GitHub', text: '@night-lake' },
		{ icon: FaMastodon, url: 'https://tech.lgbt/@nightlake', sort: 'Mastodon', text: '@nightlake@tech.lgbt' },
		{ icon: FaReddit, url: 'https://reddit.com/u/_nightlake', sort: 'Reddit', text: 'u/night-lake' },
		// {
		// 	icon: FaStackOverflow,
		// 	url: 'https://stackoverflow.com/users/12720379/amelia-katherine',
		// 	sort: 'StackOverflow',
		// 	text: 'amelia katherine'
		// },
		{ icon: FaTwitter, url: 'https://twitter.com/@_nightlake', sort: 'Twitter', text: '@_nightlake' },
		{
			icon: FaYoutube,
			url: 'https://youtube.com/channel/UCrYQrKFiLyRoTKo0WEOlfzg',
			sort: 'Youtube',
			text: '@_nightlake'
		}
	];

	return (
		<Section title="Where you can find me">
			<ul className="flex flex-row flex-wrap justify-center space-x-4 py-4 align-middle">
				{links.map(link => {
					return (
						<ul key={link.sort}>
							<a href={link.url} rel="me">
								<link.icon title={`${link.sort} | ${link.text}`} className={classname} />
							</a>
						</ul>
					);
				})}
			</ul>
		</Section>
	);
};

export default Links;
