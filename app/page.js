import HandPicked from "../components/HandPicked"
import HeroSection from "../components/HeroSection"
import LatestRecipeHome from "../components/LatestRecipeHome"
import NewsLetterSubscription from "../components/NewsLetterSubscription"
import PopularCategories from "../components/PopularCategories"
import SuperDelicious from "../components/SuperDelicious"
import { getCategories, getRecipes } from "../libs/data"

const categories = getCategories()
const recipes = getRecipes()

export default function Home() {
	return (
		<>
			{/* TODO: Add Hero Section as component and link it to the recipe details and choose a random recipe from the list */}
			{/* Hero section-Start */}
			<HeroSection
				recipe={
					recipes[
						Math.floor(
							Math.random() * recipes.length
						)
					]
				}
			/>
			{/* Hero section-End*/}
			{/* Super Delicious -Start*/}
			<section
				className='mb-16'
				id='super_delicious'
			>
				<SuperDelicious />
			</section>
			{/* Super Delicious - End*/}
			{/* Popular Categories - Start*/}
			<PopularCategories />
			{/* Popular Categories - End*/}
			<NewsLetterSubscription />
			{/* Hand-Picked  - start */}
			<HandPicked />
			{/* Hand-Picked  - end*/}
			<LatestRecipeHome />
		</>
	)
}
