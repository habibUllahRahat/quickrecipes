import Image from "next/image"

export default function Rating({ rating }) {
	const stras = Array(Math.round(rating)).fill(
		"/star.svg"
	)
	return (
		<div className='flex items-center text-yellow-500 mb-2'>
			{stras.map((star, index) => (
				<Image
					key={index}
					src={star}
					className='h-5 w-5'
					width='14'
					height='14'
					alt='star'
				/>
			))}
		</div>
	)
}
