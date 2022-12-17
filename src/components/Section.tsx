const Section: React.FC<{
	title: string;
	children: React.ReactNode;
	fontSize?: string;
}> = ({ title, children, fontSize = 'text-xl' }) => {
	return (
		<section className="my-4">
			<h2 className={`${fontSize} font-bold dark:text-white`}>{title}</h2>
			<hr className="w-10 rounded-md border-2 border-pink-600"></hr>
			<div className="mt-4">{children}</div>
		</section>
	);
};

export default Section;
