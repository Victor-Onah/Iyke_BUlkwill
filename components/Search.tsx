import { BiSearch } from "react-icons/bi";
import { ProductCardProps } from "..";
import {
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import { GlobalContext } from "./Layout";
import ProductsList from "./ProductsList";

const Search = (props: {
	setSearching: Dispatch<SetStateAction<boolean>>;
	searching: boolean;
}) => {
	const { products } = useContext(GlobalContext);
	const [category, setCategory] = useState<keyof typeof products>(
		"" as keyof typeof products
	);
	const [data, setData] = useState<(typeof products)[typeof category]>();

	useEffect(() => {
		if (category && category !== ("" as keyof typeof products)) {
			props.setSearching(true);
			setData(products[category]);
		} else {
			props.setSearching(false);
		}
	}, [category]);

	return (
		<>
			<form className="flex items-stretch my-4 gap-1 mx-4">
				<input className="flex-1 p-2 bg-zinc-200" type="text" />
				<button className="p-2 rounded-sm flex justify-center items-center bg-zinc-100">
					<BiSearch /> Search
				</button>
			</form>
			<div className="flex justify-center gap-4 items-center my-4 max-w-full flex-wrap">
				<button
					className={`px-4 py-2 rounded-md whitespace-nowrap inline-block ${
						category === ("" as typeof category)
							? "bg-blue-500 text-white"
							: "bg-zinc-100"
					} active:scale-95`}
					onClick={() => setCategory("" as typeof category)}
				>
					All
				</button>
				<button
					className={`px-4 py-2 rounded-md whitespace-nowrap inline-block ${
						category === "solarPanels"
							? "bg-blue-500 text-white"
							: "bg-zinc-100"
					} active:scale-95`}
					onClick={() => setCategory("solarPanels")}
				>
					Solar Panels
				</button>
				<button
					className={`px-4 py-2 rounded-md whitespace-nowrap inline-block ${
						category === "homeLights" ? "bg-blue-500 text-white" : "bg-zinc-100"
					} active:scale-95`}
					onClick={() => setCategory("homeLights")}
				>
					Home Lights
				</button>
				<button
					className={`px-4 py-2 rounded-md whitespace-nowrap inline-block ${
						category === "chandeliers"
							? "bg-blue-500 text-white"
							: "bg-zinc-100"
					} active:scale-95`}
					onClick={() => setCategory("chandeliers")}
				>
					Chandeliers
				</button>
				<button
					className={`px-4 py-2 rounded-md whitespace-nowrap inline-block ${
						category === "phones" ? "bg-blue-500 text-white" : "bg-zinc-100"
					} active:scale-95`}
					onClick={() => setCategory("phones")}
				>
					Phones
				</button>
				<button
					className={`px-4 py-2 rounded-md whitespace-nowrap inline-block ${
						category === "laptops" ? "bg-blue-500 text-white" : "bg-zinc-100"
					} active:scale-95`}
					onClick={() => setCategory("laptops")}
				>
					Laptops
				</button>
			</div>
			{props.searching && (
				<ProductsList data={(data as ProductCardProps[]) || []} />
			)}
		</>
	);
};

export default Search;
