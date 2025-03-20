import Link from "next/link"
import { getCategories } from "../libs/data"
import PopularCategoryCircle from "./PopularCategoryCircle"

const categories = getCategories().slice(0, 6)

export default function PopularCategories({}) {
	return (
		<section className='mb-16'>
			<div className='flex justify-between items-top'>
				<h2 className='text-3xl font-bold mb-8 font-playfair'>
					Popular Categories
				</h2>
				<Link
					href='/categories'
					className='text-orange-500'
				>
					View All
				</Link>
			</div>
			<div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
				{categories.map((category) => (
					<Link
						href={`/${category.name}`}
						key={category.id}
					>
						<PopularCategoryCircle
							category={category}
						/>
					</Link>
				))}
			</div>
		</section>
	)
}
