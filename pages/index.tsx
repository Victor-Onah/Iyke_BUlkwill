import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Explore our range of solar panels, phones, laptops, real estate, security lights, and home lighting solutions. Embrace eco-friendly technology for a brighter future."
				/>
				<meta
					name="og:title"
					content="Welcome to Iyke BulkWill Int'l Ltd. - Your Source for Sustainable Living."
				/>
				<meta
					name="og:description"
					content="Explore our range of solar panels, phones, laptops, real estate, security lights, and home lighting solutions. Embrace eco-friendly technology for a brighter future."
				/>
				<meta
					name="og:image"
					content="https://iyke-bulkwill.onrender.com/images/og_image.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Welcome to Iyke BulkWill - Your Source for Sustainable Living"
				/>
				<meta
					name="twitter:description"
					content="Explore our range of solar panels, phones, laptops, real estate, security lights, and home lighting solutions. Embrace eco-friendly technology for a brighter future."
				/>
				<meta
					name="twitter:image"
					content="https://iyke-bulkwill.onrender.com/images/og_image.jpg"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="shortcut icon" href="/images/logo.png" type="image/png" />
				<link rel="apple-touch-icon" href="/images/logo.png" type="image/png" />
				<title>
					Welcome to Iyke BulkWill Int'l Ltd. - Your Source for Sustainable
					Living.
				</title>
				<link rel="canonical" href="https://iyke-bulkwill.onrender.com/" />
			</Head>
			<main>
				<Hero />
				<About />
				<Services />
			</main>
		</>
	);
}
