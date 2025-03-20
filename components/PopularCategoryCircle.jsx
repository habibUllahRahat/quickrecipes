import Image from "next/image"

export default function PopularCategoryCircle({
	category,
}) {
	return (
		<div className='cursor-pointer text-center group'>
			<div className='overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto'>
				<Image
					src={category.image}
					alt={category.name}
					className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
					width={300}
					height={300}
				/>
			</div>
			<p className='transition-transform duration-300 group-hover:scale-105'>
				{category.name}
			</p>
		</div>
	)
}
