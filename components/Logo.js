import Image from "next/image"
import Link from "next/link"

export default function Logo({}) {
	return (
		<Link
			href='/'
			className='text-xl font-bold'
		>
			<Image
				src='/lws-kitchen.png'
				className='cursor-pointer w-28'
				alt='Lws-Kitchen'
				width={80}
				height={20}
			/>
		</Link>
	)
}
