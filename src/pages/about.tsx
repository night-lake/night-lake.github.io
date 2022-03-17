import Head from 'next/head';
import { GenIcon, IconContext } from 'react-icons';
import { FaGlobe, FaGrinTongue, FaHeart, FaLayerGroup, FaSignature, FaTags, FaThumbsUp, FaUsers } from 'react-icons/fa';
import ContentBlock from '../components/ContentBlock';
import GoBack from '../components/GoBack';
import ItemList from '../components/ItemList';
import Skills from '../components/Skills';
import { desc } from '../lib/constants';
import { AboutData } from '../lib/types';

export default function About() {
	const about: AboutData[] = [
		{
			title: 'Who Am I?',
			content: [
				{ title: 'Names', icon: <FaSignature />, content: ['Sadie', 'Scarlett', 'Skye'] },
				{ title: 'Pronouns', icon: <FaTags />, content: ['She', 'They'], joinKey: '/' },
				{ title: 'Attraction Layer Cake', icon: <FaLayerGroup />, content: ['rC5'], joinKey: '' }
			]
		},
		{
			title: 'Words',
			content: [
				{ title: 'Yes', icon: <FaHeart />, content: ['Ms', 'No Honorific', 'Girl', 'Sis'] },
				{ title: 'Ok', icon: <FaThumbsUp />, content: ['Boo', 'Kissmate', 'Beloved'] },
				{ title: 'Jokingly', icon: <FaGrinTongue />, content: ['Pretty', 'Cute'] },
				{ title: "Only if we're close", icon: <FaUsers />, content: ['Wife', 'Girlfriend'] }
			]
		}
	];

	return (
		<>
			<Head>
				<title>Sadie Mae Katherine</title>
				<meta name="description" content={desc} />
			</Head>

			<GoBack />

			<IconContext.Provider
				value={{
					className: 'text-xl text-gray-600 dark:text-gray-300 align-middle'
				}}
			>
				{about.map(item => (
					<ContentBlock title={item.title} key={item.title}>
						{item.content.map(contentItem => (
							<ItemList {...contentItem} key={contentItem.title} />
						))}
					</ContentBlock>
				))}
			</IconContext.Provider>

			<Skills />
		</>
	);
}
