import classNames from 'classnames';
import { link } from 'fs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { desc } from '../lib/constants';

const links = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'About',
		url: '/about'
	},
	{
		name: 'Projects',
		url: '/blog'
	}
];

const Header: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const router = useRouter();

	return (
		<header className="mx-auto max-w-4xl px-4 py-2">
			<nav className="flex flex-row content-center justify-between align-middle">
				<Link href="/" passHref>
					<a className="p-2 text-xl font-extrabold text-pink-600">Amelia Mae Katherine</a>
				</Link>
				<nav className="flex flex-row content-center justify-between align-middle">
					{links.map((link, index) => {
						return (
							<Link key={index} href={link.url} passHref>
								<a
									className={classNames('text-md p-2 transition-all', {
										'hover:font-semibold hover:text-pink-500': router.pathname !== link.url,
										'font-bold text-pink-600': router.pathname === link.url
									})}
								>
									{link.name}
								</a>
							</Link>
						);
					})}
				</nav>
			</nav>
			{/* <header className="mb-4 flex flex-col content-center justify-center md:flex-row md:justify-start">
				<div className="py-4 md:m-0 md:px-4">
					<img
						className="h-32 w-32 rounded-full"
						alt=""
						src="https://us-east-1.tixte.net/uploads/nightlake.tixte.co/sadie.png"
					/>
				</div>
				<div className="flex flex-col content-center justify-center xl:pl-4">
					<p className="text-3xl font-extrabold text-pink-600 lg:tracking-wide">Amelia Mae Katherine</p>
					<p className="text-md font-semibold text-gray-800 dark:text-gray-300">{desc}</p>
					<div>
						<Link href="/about" passHref>
							<a className=" mt-2 inline-block cursor-pointer rounded-xl bg-pink-500 p-2 transition-all hover:bg-pink-600 hover:text-white hover:shadow-md dark:shadow-xl">
								<span className="align-middle font-medium">About me</span>{' '}
								<FaArrowRight className="inline-block" />
							</a>
						</Link>
					</>
				</head>
			</header> */}
		</header>
	);
};

export default Header;
