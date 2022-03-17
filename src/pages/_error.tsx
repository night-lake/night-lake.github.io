import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import GoBack from '../components/GoBack';
import Section from '../components/Section';

export default function Error() {
	return (
		<>
			<Head>
				<title>Sadie Mae Katherine</title>
			</Head>

			<GoBack />

			<Section title="Well...." pink={true}>
				<p className="text-lg dark:text-white">
					It seems like an <a href="https://ian-deploy.xyz">Ian Deploy</a> has infilterated.
				</p>
			</Section>
		</>
	);
}
