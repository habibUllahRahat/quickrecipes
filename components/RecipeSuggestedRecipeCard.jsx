import Image from "next/image"
import Link from "next/link"
import { getCategoryName } from "../libs/data"

export default function RecipeSuggestedRecipeCard({
	recipe,
}) {
	return (
		<Link
			href={`/${getCategoryName(
				recipe.category_id
			)}/${recipe.title}`}
		>
			<Image
				src={`/thumbs/${recipe.thumbnail}`}
				alt='Recipe 1'
				className='w-full h-60 object-cover rounded-lg mb-2'
				width={600}
				height={400}
			/>
			<h3 className='font-semibold'>
				{recipe.title}
			</h3>
		</Link>
	)
}
