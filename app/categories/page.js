import Link from "next/link"
import CategoryCircle from "../../components/CategoryCircle"
import { getCategories } from "../../libs/data"

const categories = getCategories()

export default function Categories() {
	return (
		<>
			<h1 class='text-5xl font-bold mb-12 font-playfair'>
				Categories
			</h1>
			<div class='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
				{categories.map((c) => (
					<Link
						key={c.id}
						href={`/categories/${c.name}`}
					>
						<CategoryCircle category={c} />
					</Link>
				))}
			</div>
		</>
	)
}
