import Carousel from "@/components/Carousel";
import { GlobalContext } from "@/components/Layout";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/Search";
import { ProductCardProps } from "@/index";
import { useContext, useState } from "react";

const Index = () => {
	const { shuffledProducts } = useContext(GlobalContext);
	const [currentCategory, setCurrentCategory] = useState("");
	const [searching, setSearching] = useState<boolean>(false);

	return (
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
	);
};

export default Index;
