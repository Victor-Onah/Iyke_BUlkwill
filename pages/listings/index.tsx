import Carousel from "@/components/Carousel";
import { GlobalContext } from "@/components/Layout";
import Search from "@/components/Search";
import { useContext, useState } from "react";

const Index = () => {
	type Products = typeof products;
	const { products } = useContext(GlobalContext);
	const [category, setCategory] = useState<keyof Products>();

	return (
		<div>
			<Carousel />
			<Search />
		</div>
	);
};

export default Index;
