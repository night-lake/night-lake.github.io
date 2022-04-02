import Head from 'next/head';
import GoBack from '../components/GoBack';
import Section from '../components/Section';

const Error: React.FC = () => {
	return (
		<>
			<Head>
				<title>Sadie Mae Katherine</title>
			</Head>

			<GoBack />

			<Section title="Well...." topMargin={true}>
				<p className="text-lg dark:text-white">
					It seems like an <a href="https://ian-deploy.xyz">Ian Deploy</a> has infilterated.
				</p>
			</Section>
		</>
	);
};

export default Error;
