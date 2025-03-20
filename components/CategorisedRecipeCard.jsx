import Image from "next/image"

export default function CategorisedRecipeCard({ recipe }) {
	return (
		<div className='bg-white rounded-lg overflow-hidden shadow-md mb-5'>
			<Image
				src={`/thumbs/${recipe.thumbnail}`}
				alt='Decadent Raspberry and Cream Cake'
				className='w-full h-48 object-cover'
				width={300}
				height={300}
			/>
			<div className='p-4'>
				<h2 className='font-semibold text-lg mb-2 line-clamp-1'>
					{recipe.title}
				</h2>
			</div>
		</div>
	)
}
