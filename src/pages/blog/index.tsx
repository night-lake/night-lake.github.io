import GoBack from '../../components/GoBack';
import Post from '../../components/Post';
import Section from '../../components/Section';
import { getSortedPostsData } from '../../lib/posts';
import { DateBasedObject, MarkdownData } from '../../lib/types';

export const getStaticProps = async () => {
	const allPostsData = await getSortedPostsData();

	return {
		props: {
			allPostsData
		}
	};
}

const BlogHome: React.FC<{ allPostsData: MarkdownData[]}> = ({ allPostsData }) => {
	const postsByDate = allPostsData.reduce((resultArray: DateBasedObject[], item) => {
		let yearIndex = 0;
		const [year] = item.date.split('-');

		if (!resultArray.map(x => x.year).includes(year)) {
			resultArray.push({ year, posts: [item] });
			yearIndex++;
		} else {
			resultArray[yearIndex].posts.push(item);
		}

		return resultArray;
	}, []);

	return (
		<>
			<GoBack />

			{postsByDate.map((postChunk, index) => (
				<Section title={postChunk.year} key={index} topMargin={index === 0}>
					<ul className="grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-3">
						{postChunk.posts.map(post => (
							<Post post={post} key={post.id} />
						))}
					</ul>
				</Section>
			))}
		</>
	);
}

export default BlogHome;