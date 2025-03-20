"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
// Get Category by using recipe.category_id
export default function HandPickedCard({
	recipe,
	category,
}) {
	const router = useRouter()
	const handleClick = (e) => {
		e.stopPropagation()
		router.push(`/categories/${category}`)
	}
	const handleFullDivClick = (e) => {
		router.push(`/recipes/${recipe.title}`)
	}
	return (
		<div
			className='relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer'
			onClick={(e) => handleFullDivClick(e)}
		>
			<Image
				src={`/thumbs/${recipe.thumbnail}`}
				alt={recipe.title}
				className='w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110'
				width={200}
				height={600}
			/>
			<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0'>
				<h3 className='text-xl font-semibold mb-2'>
					{recipe.title}
				</h3>
				<button
					onClick={(e) => handleClick(e)}
					className='text-orange-300 hover:underline'
				>
					View Collection
				</button>
			</div>
		</div>
	)
}
