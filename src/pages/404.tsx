import Head from 'next/head';
import GoBack from '../components/GoBack';
import Section from '../components/Section';

const PageIsNull: React.FC = () => {
	return (
		<>
			<Head>
				<title>Sadie Mae Katherine</title>
			</Head>

			<GoBack />

			<Section title="That wasn't found" topMargin={true}>
				<p className="text-lg dark:text-white">
					Either Sadie sucks at typing or you messed with the URL. It&#39;s probably the first one.
				</p>
			</Section>
		</>
	);
};

export default PageIsNull;
