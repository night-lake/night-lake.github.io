import Head from 'next/head';
import { FaGrinTongue, FaHeart, FaLayerGroup, FaSignature, FaTags, FaThumbsUp, FaUsers } from 'react-icons/fa';
import ContentBlock from '../components/ContentBlock';
import GoBack from '../components/GoBack';
import ItemList from '../components/ItemList';
import Skills from '../components/Skills';
import { desc } from '../lib/constants';
import { AboutData } from '../lib/types';

const About: React.FC = () => {
	const about: AboutData[] = [
		{
			title: 'Who Am I?',
			content: [
				{ title: 'Names', icon: FaSignature, content: ['Amelia', 'Scarlett', 'Skye'] },
				{ title: 'Pronouns', icon: FaTags, content: ['She', 'They'], joinKey: '/' },
				{ title: 'Attraction Layer Cake', icon: FaLayerGroup, content: ['rC5'], joinKey: '' }
			]
		},
		{
			title: 'Words',
			content: [
				{ title: 'Yes', icon: FaHeart, content: ['Ms', 'No Honorific', 'Girl', 'Sis'] },
				{ title: 'Ok', icon: FaThumbsUp, content: ['Boo', 'Kissmate', 'Beloved'] },
				{ title: 'Jokingly', icon: FaGrinTongue, content: ['Pretty', 'Cute'] },
				{ title: "Only if we're close", icon: FaUsers, content: ['Wife', 'Girlfriend'] }
			]
		}
	];

	return (
		<>
			<Head>
				<title>Amelia Mae Katherine</title>
				<meta name="description" content={desc} />
			</Head>

			<GoBack />

			{about.map(item => (
				<ContentBlock title={item.title} key={item.title}>
					{item.content.map(contentItem => (
						<ItemList {...contentItem} key={contentItem.title} />
					))}
				</ContentBlock>
			))}

			<Skills />
		</>
	);
};

export default About;
