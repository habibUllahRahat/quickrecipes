import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./globals.css"

export const metadata = {
	title: "Quick Recipes",
	description:
		"Find the perfect recipe for your next meal",
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className='scroll-smooth'
		>
			<body className='font-inter antialiased '>
				<Navbar />
				<main className='container mx-auto px-4 mt-[120px] '>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
