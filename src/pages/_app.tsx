import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="og:image" content="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/sadie.png" />
				<meta name="theme-color" content="#FFAEBD" />
			</Head>
			<div className="background">
				<div className="trans"></div>
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
}
