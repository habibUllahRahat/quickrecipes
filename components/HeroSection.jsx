import Image from "next/image"
import Link from "next/link"

export default function HeroSection({ recipe }) {
	return (
		<section className='mb-16 bg-orange-50'>
			<div className='grid md:grid-cols-2 gap-8 items-center font-playfair'>
				<div>
					<Image
						src={`/thumbs/${recipe.thumbnail}`}
						alt='Mighty Super Cheesecake'
						className='w-full h-[450px] object-cover rounded-lg'
						width={600}
						height={400}
					/>
				</div>
				<div>
					<h1 className='text-4xl font-bold mb-4 font-playfair'>
						{recipe.title}
					</h1>
					<p className='text-gray-600 mb-4 font-playfair line-clamp-2'>
						{recipe.description}
					</p>
					<Link
						href={`/recipes/${recipe.title}`}
						className='bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600'
					>
						View Recipe
					</Link>
				</div>
			</div>
		</section>
	)
}
