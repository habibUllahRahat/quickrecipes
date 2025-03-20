import Image from "next/image"
import { getCategoryName } from "../libs/data"

export default function LatestRecipeCard({ recipe }) {
	return (
		<div>
			<Image
				src={`/thumbs/${recipe.thumbnail}`}
				alt='Strawberry Cream'
				className='w-full h-[300px] object-cover rounded-lg mb-4'
				width={600}
				height={400}
			/>
			<h3 className='text-lg font-semibold mb-2 font-playfair'>
				{recipe.title}
			</h3>
			<p className='text-gray-600'>
				{getCategoryName(recipe.category_id)}
			</p>
		</div>
	)
}
