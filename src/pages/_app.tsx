import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name="og:image" content="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/sadie.png" />
				<meta name="theme-color" content="#FFAEBD" />
			</Head>
			<div className="bg-[#55cdfc]">
				<div className="trans mx-auto h-2 max-w-4xl px-4"></div>
			</div>
			<div className="mx-auto max-w-4xl px-4">
				<Header />
				<main>
					<Component {...pageProps} />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default App;