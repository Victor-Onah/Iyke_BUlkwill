import Carousel from "@/components/Carousel";
import { GlobalContext } from "@/components/Layout";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/Search";
import { ProductCardProps } from "@/index";
import { useContext, useState } from "react";

const Index = () => {
	const { products } = useContext(GlobalContext);
	const [category, setCategory] = useState<keyof typeof products>();
	const [searchResults, setSearchResults] = useState<ProductCardProps[]>();

	return (
		<div>
			<Carousel />
			<Search getSearchResults={(result) => setSearchResults(result)} />
			<ProductsList />
		</div>
	);
};

export default Index;
