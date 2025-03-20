import Link from "next/link"
import CategorisedRecipeCard from "../../../components/CategorisedRecipeCard"
import { getCategorisedRecipes } from "../../../libs/data"

export default function page({ params: { category } }) {
	const categorisedRecipes =
		getCategorisedRecipes(category)
	return (
		<>
			<div className='flex justify-between items-center mb-8'>
				<div>
					<h1 className='text-4xl my-2 font-playfair font-extrabold'>
						{category + " "}
						<span className='text-gray-500 text-2xl font-semibold'>
							({categorisedRecipes.length}{" "}
							Recipes)
						</span>
					</h1>
					<p className='text-gray-600'>
						One thing I learned living in the
						Canarsie section of Brooklyn, NY was
						how to cook a good Italian meal.
						Here is a recipe I created after
						having this dish in a restaurant.
						Enjoy!
					</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{categorisedRecipes.map((r) => (
					<Link
						key={r.thumbnail}
						href={`/recipes/${r.title}`}
					>
						<CategorisedRecipeCard recipe={r} />
					</Link>
				))}
			</div>
		</>
	)
}
