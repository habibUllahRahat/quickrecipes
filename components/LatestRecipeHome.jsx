import Link from "next/link"
import { getRecipes } from "../libs/data"
import LatestRecipeCard from "./LatestRecipeCard"

const LatestRecipes = getRecipes()
	.sort((a, b) => {
		const dateA = new Date(a.published_date)
		const dateB = new Date(b.published_date)
		if (dateA > dateB) {
			return -1
		}
		if (dateA < dateB) {
			return 1
		}
		return 0
	})
	.slice(0, 4)

export default function LatestRecipeHome({}) {
	return (
		<section
			className='mb-16'
			id='latest_recipes'
		>
			<h2 className='text-3xl font-bold mb-8 font-playfair'>
				Latest Recipes
			</h2>
			<div className='grid md:grid-cols-4 gap-8'>
				{LatestRecipes.map((recipe) => (
					<Link
						href={`/recipes/${recipe.title}`}
						key={recipe.title}
					>
						<LatestRecipeCard recipe={recipe} />
					</Link>
				))}
			</div>
		</section>
	)
}
