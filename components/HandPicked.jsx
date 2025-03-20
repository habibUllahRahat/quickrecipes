import {
	getCategoryName,
	getRandomRecipe,
} from "../libs/data"
import HandPickedCard from "./HandPickedCard"

let twoRandomRecipes = [getRandomRecipe()]
if (twoRandomRecipes[0]) {
	let temp = getRandomRecipe()
	while (temp.title === twoRandomRecipes[0].title) {
		temp = getRandomRecipe()
	}
	twoRandomRecipes.push(temp)
}
export default function HandPicked() {
	return (
		<section
			className='mb-16'
			id='hand_picked'
		>
			<h2 className='text-3xl font-bold mb-8 animate-fade-in-down after:animate-bounce font-playfair'>
				Hand-Picked Collections
			</h2>
			<div className='grid md:grid-cols-2 gap-8'>
				{twoRandomRecipes.map((recipe) => {
					const categoryName = getCategoryName(
						recipe.category_id
					)
					return (
						<HandPickedCard
							key={recipe.title}
							recipe={recipe}
							category={categoryName}
						/>
					)
				})}
			</div>
		</section>
	)
}
