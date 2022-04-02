import { Head, Html, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
	return (
		<Html lang="en-US">
			<Head />
			<body className="bg-slate-100 dark:bg-neutral-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
