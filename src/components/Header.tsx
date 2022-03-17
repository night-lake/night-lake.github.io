import Link from 'next/link';
import { desc } from '../lib/constants';

function Header() {
	return (
		<header className="mb-4 flex flex-col content-center justify-center md:flex-row md:justify-start">
			<div className="py-4 md:m-0 md:px-4">
				<img
					className="h-32 w-32 rounded-full"
					alt=""
					src="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/sadie.png"
				/>
			</div>
			<div className="flex flex-col content-center justify-center xl:pl-4">
				<p className="text-3xl font-extrabold text-pink-600 lg:tracking-wide">Sadie Mae Katherine</p>
				<p className="text-md font-semibold text-gray-800 dark:text-gray-300">{desc}</p>
				<div>
					<Link href="/about" passHref>
						<a className="text-md mt-2 inline-block cursor-pointer rounded-xl bg-pink-500 p-2 align-middle font-medium transition-all hover:bg-pink-600 hover:text-white hover:shadow-md dark:shadow-xl">
							About me
						</a>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
