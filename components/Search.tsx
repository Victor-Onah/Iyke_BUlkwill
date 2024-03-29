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
	getCurrentCategory(value: string): any;
}) => {
	const { products, shuffledProducts } = useContext(GlobalContext);
	const [category, setCategory] = useState<keyof typeof products>(
		"" as keyof typeof products
	);
	const [data, setData] = useState<(typeof products)[typeof category]>();
	const [query, setQuery] = useState("");

	function search() {
		if (query.trim() !== "") {
			props.setSearching(true);
			if (category && category !== ("" as typeof category)) {
				setData(
					products[category].filter(
						(product) =>
							product.name.toLowerCase().includes(query.toLowerCase()) ||
							product.name.toLowerCase().includes(query.toLowerCase())
					)
				);
			} else {
				setData(
					shuffledProducts.filter(
						(product) =>
							product.name.toLowerCase().includes(query.toLowerCase()) ||
							product.name.toLowerCase().includes(query.toLowerCase())
					) as unknown as (typeof products)[typeof category]
				);
			}
		} else {
			props.setSearching(false);
			setData(products[category]);
		}
	}

	useEffect(() => {
		props.getCurrentCategory(category);
		if (category && category !== ("" as keyof typeof products)) {
			props.setSearching(true);
			setData(products[category]);
		} else {
			props.setSearching(false);
		}
	}, [category, products, props]);

	useEffect(() => {
		search();
	}, [query]);

	return (
		<>
			<form
				onSubmit={(e) => (e.preventDefault(), search())}
				className="flex items-stretch my-4 gap-1 mx-4"
			>
				<input
					className="flex-1 p-2 bg-zinc-200"
					type="text"
					value={query}
					onChange={({ target: { value } }) => setQuery(value)}
				/>
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
			{(props.searching || category) && (
				<ProductsList data={(data as ProductCardProps[]) || []} />
			)}
		</>
	);
};

export default Search;
