const ContentBlock: React.FC<{ title: string }> = ({ title, children }) => {
	return (
		<section className="py-4">
			<h2 className="text-xl font-bold dark:text-white">{title}</h2>
			<hr className="w-10 rounded-md border-2 border-pink-600"></hr>
			<section className="mt-4 rounded-xl bg-slate-100/80 p-2 dark:bg-neutral-900/80">{children}</section>
		</section>
	);
};

export default ContentBlock;
