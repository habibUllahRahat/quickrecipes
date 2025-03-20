import Image from "next/image"

export default function CategoryCircle({ category }) {
	return (
		<div className='text-center'>
			<div className='overflow-hidden rounded-full mb-4 relative cursor-pointer'>
				<Image
					src={category.image}
					alt={category.name}
					className='w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110'
					width={500}
					height={500}
				/>
			</div>
			<h2 className='text-xl font-semibold'>
				{category.name}
			</h2>
		</div>
	)
}
