import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class" value={{ dark: 'dark', light: 'light' }}>
			<Head>
				<meta name="og:image" content="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/amelia.png" />
				<meta name="theme-color" content="#FFAEBD" />
			</Head>
			<Header />
			<div className="bg-white dark:bg-neutral-800/80">
				<main className="mx-auto max-w-6xl py-4 px-2 md:px-0">
					<Component {...pageProps} />
				</main>
			</div>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
