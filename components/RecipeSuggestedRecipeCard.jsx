import Image from "next/image"
import Link from "next/link"

export default function RecipeSuggestedRecipeCard({
	recipe,
}) {
	return (
		<Link href={`/recipes/${recipe.title}`}>
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
