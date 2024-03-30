import Carousel from "@/components/Carousel";
import { GlobalContext } from "@/components/Layout";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/Search";
import { ProductCardProps } from "@/index";
import Head from "next/head";
import { useContext, useState } from "react";

const Index = () => {
	const { shuffledProducts } = useContext(GlobalContext);
	const [currentCategory, setCurrentCategory] = useState("");
	const [searching, setSearching] = useState<boolean>(false);

	return (
		<>
			<Head>
				<title>Find Your Perfect Property - Iyke BulkWill Listings</title>
				<meta
					name="description"
					content="Explore a diverse range of real estate listings at Iyke BulkWill. Discover affordable housing, investment opportunities, and dream properties. Start your journey to finding the perfect home today.
"
				/>
				<meta
					name="og:title"
					content="Find Your Perfect Property - Iyke BulkWill Listings"
				/>
				<meta
					name="og:description"
					content="Explore a diverse range of real estate listings at Iyke BulkWill. Discover affordable housing, investment opportunities, and dream properties. Start your journey to finding the perfect home today.
"
				/>
				<meta
					name="og:image"
					content="https://iyke-bulkwill.com/images/og_image.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Find Your Perfect Property - Iyke BulkWill Listings"
				/>
				<meta
					name="twitter:description"
					content="Explore a diverse range of real estate listings at Iyke BulkWill. Discover affordable housing, investment opportunities, and dream properties. Start your journey to finding the perfect home today.
"
				/>
				<meta
					name="twitter:image"
					content="https://iyke-bulkwill.com/images/og_image.png"
				/>
				<link
					rel="canonical"
					href="https://iyke-bulkwill-qw1o.onrender.com/listings"
				/>
			</Head>
			<div>
				<Carousel />
				<Search
					getCurrentCategory={(value: string) => setCurrentCategory(value)}
					setSearching={setSearching}
					searching={searching}
				/>
				{!searching && !currentCategory && (
					<ProductsList data={shuffledProducts} />
				)}
			</div>
		</>
	);
};

export default Index;
