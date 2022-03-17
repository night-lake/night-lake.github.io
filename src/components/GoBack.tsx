import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function GoBack() {
	return (
		<Link href="/" passHref>
			<a className="text-md mb-3 cursor-pointer font-medium text-pink-500 hover:text-pink-600">
				<div className="w-1/4">
					<span className="inline-block pr-2 align-middle hover:text-pink-600">
						<FaArrowLeft />
					</span>
					<span className=" inline-block align-middle">Go Back</span>
				</div>
			</a>
		</Link>
	);
}
