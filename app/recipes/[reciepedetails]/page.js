import Image from "next/image"
import RecipeSuggestedRecipeCard from "../../../components/RecipeSuggestedRecipeCard"
import { getRecipes } from "../../../libs/data"
import { getDateCoverted } from "../../../libs/getDate"

const recipes = getRecipes()

export default function RecipeDeatils({
	params: { reciepedetails },
}) {
	const recipe = recipes.find((recipe) => {
		if (
			recipe.title ===
			decodeURI(reciepedetails).replace("%3A", ":")
		) {
			console.log(
				decodeURI(reciepedetails).replace(
					"%3A",
					":"
				)
			)
			return recipe
		}
	})
	const suggestedRecipesFromSameCategory =
		recipes &&
		recipes
			.filter((r) => {
				if (
					recipe?.category_id === r.category_id &&
					recipe?.title != r.title
				) {
					return r
				}
			})
			.sort(
				(a, b) =>
					b.rating.average_rating -
					a.rating.average_rating
			)
			.slice(0, 3)
	const publishDay = getDateCoverted(
		recipe?.published_date
	)
	return (
		<>
			<main className='container mx-auto px-4 py-8'>
				<article>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>
						{recipe?.title}
					</h1>
					<div className='flex items-center space-x-4 mb-6'>
						<Image
							src='/avater.png'
							alt='Author'
							className='w-8 h-8 rounded-full'
							width={300}
							height={200}
						/>
						<span className='text-gray-600'>
							{recipe?.author}
						</span>
						<span className='text-gray-400'>
							|
						</span>
						<span className='text-gray-600'>
							{recipe?.cooking_time}
						</span>
						<span className='text-gray-400'>
							|
						</span>
						<span className='text-gray-600'>
							{/* TODO: Find out the month, and make it match the blog_html format */}
							{publishDay}
						</span>
					</div>
					<div className='flex justify-between items-center mb-8'>
						<div className='flex space-x-4'>
							<button className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 inline-block mr-2'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
								</svg>
								Share
							</button>
							<button className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 inline-block mr-2'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
								</svg>
								Save
							</button>
						</div>
					</div>
					<Image
						src={`/thumbs/${recipe?.thumbnail}`}
						alt={recipe?.title}
						className='w-full h-auto mb-8 rounded-lg'
						width={600}
						height={200}
					/>
					<p className='text-gray-600 mb-8'>
						{recipe?.description}
					</p>
				</article>
				{/* TODO: Section "You Might also like" display 4 more recipe from same category. get the `category_id` from `recipe` then find the category find out that category and display four from that category usig suggested card */}
				<section className='my-12'>
					<h2 className='text-3xl font-bold mb-8'>
						You might also like
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
						{suggestedRecipesFromSameCategory.length >
						0 ? (
							<>
								{suggestedRecipesFromSameCategory.map(
									(recipe) => (
										<RecipeSuggestedRecipeCard
											key={
												recipe.title
											}
											recipe={recipe}
										/>
									)
								)}
							</>
						) : (
							recipes
								.filter(
									(r) =>
										r.rating
											.average_rating >
										4.5
								)
								.sort(
									() =>
										Math.random() - 0.5
								)
								.slice(0, 3)
								.map((recipe) => (
									<RecipeSuggestedRecipeCard
										key={recipe.title}
										recipe={recipe}
									/>
								))
						)}
					</div>
				</section>
			</main>
		</>
	)
}
