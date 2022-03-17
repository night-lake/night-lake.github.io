import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function SeeMore({ url }: Record<string, string>) {
	return (
		<Link href={url} passHref>
			<a className="text-md cursor-pointer font-medium text-pink-500 hover:text-pink-600">
				<span className="inline-block align-middle hover:text-pink-600">See more</span>
				<span className="inline-block pl-2 align-middle hover:text-pink-600">
					<FaArrowRight />
				</span>
			</a>
		</Link>
	);
}
