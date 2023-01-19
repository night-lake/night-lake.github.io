import Head from 'next/head';
import { FaGrinTongue, FaHeart, FaLayerGroup, FaSignature, FaTags, FaThumbsUp, FaUsers } from 'react-icons/fa';
import Links from '../components/Links';
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

			<section className="flex flex-row content-center justify-center gap-4 py-4 md:justify-start md:gap-4">
				<img
					className="h-16 w-16 rounded-full md:h-24 md:w-24"
					alt=""
					src="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/amelia.png"
				/>

				<div className="flex flex-col content-center justify-center gap-2">
					<p className="align-middle text-2xl font-extrabold text-pink-600 md:text-3xl lg:tracking-wider">
						Amelia Mae Katherine
					</p>

					<p className="text-md align-middle font-medium text-gray-800 dark:text-gray-300">
						she/they, genderfae, lesbian, transfeminine, 15 y/o
					</p>

					<div className="w-max-7xl flex flex-row space-x-4">
						<div className="genderfae h-6 w-12 rounded-md"></div>
						<div className="transfeminine h-6 w-12 rounded-md"></div>
						<div className="lesbian h-6 w-12 rounded-md"></div>
					</div>
				</div>
			</section>

			<Skills />
			<Links />
		</>
	);
};

export default About;
