import Link from "next/link"
import { getCategoryName, getRecipes } from "../libs/data"
import RecipeCardHome from "./RecipeCardHome"
const recipes = getRecipes()
const topThreeRecipes = recipes
	.sort(
		(a, b) =>
			b.rating.average_rating -
			a.rating.average_rating
	)
	.slice(0, 3)

export default function SuperDelicious() {
	return (
		<>
			<h2 className='text-3xl font-bold mb-8 font-playfair'>
				Super Delicious
			</h2>
			<div className='grid md:grid-cols-3 gap-8'>
				{topThreeRecipes.map((recipe, index) => (
					<Link
						href={`/${getCategoryName(
							recipe.category_id
						)}/${recipe.title}`}
						key={index}
					>
						<RecipeCardHome
							key={recipe.id}
							src={recipe.thumbnail}
							title={recipe.title}
							rating={
								recipe.rating.average_rating
							}
							time={recipe.cooking_time}
						/>
					</Link>
				))}
			</div>
		</>
	)
}
