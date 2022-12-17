import Head from 'next/head';
import Section from '../components/Section';

const Error: React.FC = () => {
	return (
		<>
			<Head>
				<title>Amelia Mae Katherine</title>
			</Head>

			<Section title="Well....">
				<p className="text-lg dark:text-white">
					It seems like an <a href="https://ian-deploy.xyz">Ian Deploy</a> has infilterated.
				</p>
			</Section>
		</>
	);
};

export default Error;
