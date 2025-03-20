import Image from "next/image"
import Rating from "./Rating"

export default function RecipeCard({
	src,
	title,
	rating,
	time,
}) {
	return (
		<>
			<div>
				<Image
					src={`/thumbs/${src}`}
					alt={title}
					className='w-full h-[300px] object-cover rounded-lg mb-4'
					width={600}
					height={400}
				/>
				<h3 className='text-xl font-semibold mb-2 font-playfair'>
					{title}
				</h3>
				<Rating rating={rating} />
				<p className='text-gray-600 capitalize'>
					{time}
				</p>
			</div>
		</>
	)
}
