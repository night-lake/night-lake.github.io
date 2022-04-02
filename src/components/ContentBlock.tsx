const ContentBlock: React.FC<{ title: string }> = ({ title, children }) => {
	return (
		<section className="py-4">
			<h2 className="text-xl font-medium dark:text-white">{title}</h2>
			<section className="mt-4 rounded-xl bg-white p-2 dark:bg-neutral-800">{children}</section>
		</section>
	);
};

export default ContentBlock;
