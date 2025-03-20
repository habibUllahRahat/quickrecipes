import Link from "next/link"
import Logo from "./Logo"
export default function Navbar({}) {
	return (
		<header className=' mx-auto px-4 py-6 bg-white fixed top-0 left-0 right-0 shadow-md z-40'>
			<nav className='flex justify-between items-center'>
				<Logo />
				<ul className='hidden md:flex space-x-6'>
					<li>
						<Link
							href='/'
							className='hover:text-orange-500'
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href='/categories'
							className='hover:text-orange-500'
						>
							Categories
						</Link>
					</li>
					<li>
						<Link
							href='/#latest_recipes'
							className='hover:text-orange-500'
						>
							Latest Recipes
						</Link>
					</li>
					<li>
						<Link
							href='/#hand_picked'
							className='hover:text-orange-500'
						>
							HandPicked
						</Link>
					</li>
				</ul>
				<div className='flex items-center space-x-4'>
					<Link
						href='#'
						className='hover:text-orange-500'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							></path>
						</svg>
					</Link>
				</div>
			</nav>
		</header>
	)
}
