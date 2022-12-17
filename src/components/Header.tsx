import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';

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
		name: 'Blog',
		url: '/blog'
	},
	{
		name: 'Projects',
		url: '/projects'
	}
];

const Header: React.FC = () => {
	const router = useRouter();
	let [referenceElement, setReferenceElement] = useState<any>();
	let [popperElement, setPopperElement] = useState<any>();
	let { styles, attributes } = usePopper(referenceElement, popperElement);
	let [search, setSearch] = useState('');

	return (
		<Popover>
			{({ open }) => (
				<>
					<header className="mx-auto max-w-6xl px-4 py-2 md:px-0">
						{/* desktop header */}
						<nav className="hidden flex-row content-center justify-between align-middle md:flex">
							<Link href="/" passHref>
								<a className="p-2 text-xl font-extrabold text-pink-600">Amelia Mae Katherine</a>
							</Link>

							<nav className="flex flex-row content-center justify-between align-middle">
								{links.map((link, index) => {
									return (
										<Link key={index} href={link.url} passHref>
											<a
												className={classNames('text-md mx-1 rounded-md p-2 transition-all', {
													'hover:bg-pink-500/30 hover:font-semibold':
														router.pathname.split('/')[0] !== link.url,
													'bg-pink-500/60 font-bold':
														router.pathname.split('/')[0] === link.url
												})}
											>
												{link.name}
											</a>
										</Link>
									);
								})}
							</nav>

							<form
								className="rounded-md"
								onSubmit={event => {
									event.preventDefault();
									router.replace(`https://duckduckgo.com/?q=site:sadie.is-a.dev+${search}`);
								}}
							>
								<input
									type="text"
									name="search"
									id="search"
									className="block w-full rounded-md border-gray-300 p-2 focus:border-pink-500 focus:ring-pink-500 dark:border-neutral-700 dark:bg-neutral-900 sm:text-sm"
									placeholder="Search Here"
									onChange={event => setSearch(event.target.value)}
								/>
							</form>
						</nav>

						{/* mobile header */}
						<nav className="flex flex-row content-center justify-between align-middle md:hidden">
							<Link href="/" passHref>
								<a className="p-2 text-xl font-extrabold text-pink-600">Amelia Mae Katherine</a>
							</Link>

							<Popover.Button
								className={classNames('rounded-md p-2 transition-all', {
									'hover:bg-pink-500/30 hover:font-semibold': !open,
									'bg-pink-500/60 font-bold': open
								})}
								ref={setReferenceElement}
							>
								<FaBars />
							</Popover.Button>
						</nav>
					</header>

					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel
							ref={setPopperElement}
							style={styles.popper}
							{...attributes.popper}
							className="w-screen"
						>
							<div className="mx-2 mt-3 rounded-xl bg-white p-2 shadow-xl backdrop-blur-xl dark:bg-neutral-900/80">
								<form
									className="mb-3 rounded-md p-2"
									onSubmit={event => {
										event.preventDefault();
										router.replace(`https://duckduckgo.com/?q=site:sadie.is-a.dev+${search}`);
									}}
								>
									<input
										type="text"
										name="search"
										id="search"
										className="block w-full rounded-md border-gray-300 p-2 focus:border-pink-500 focus:ring-pink-500 dark:border-neutral-900 dark:bg-neutral-900 sm:text-sm"
										placeholder="Search Here"
										onChange={event => setSearch(event.target.value)}
									/>
								</form>

								<ul className="flex w-full flex-col content-center justify-between gap-4 pb-2 align-middle">
									{links.map((link, index) => {
										return (
											<li key={index}>
												<Link href={link.url} passHref>
													<a
														className={classNames(
															'text-md w-full rounded-md p-2 outline-2 outline-pink-500 transition-all',
															{
																'hover:bg-pink-500/30 hover:font-semibold':
																	router.pathname.split('/')[0] !== link.url,
																'bg-pink-500/60 font-bold':
																	router.pathname.split('/')[0] === link.url
															}
														)}
													>
														{link.name}
													</a>
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default Header;
