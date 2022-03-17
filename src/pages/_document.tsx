import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en-US">
			<Head />
			<body className="bg-slate-100 dark:bg-neutral-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
