import { BiSearch } from "react-icons/bi";
import { ProductCardProps } from "..";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./Layout";

const Search = (props: {
	getSearchResults(value: ProductCardProps[]): any;
}) => {
    const {products} = useContext(GlobalContext)
    
	return (
		<form className="flex items-stretch my-4 gap-1 mx-4">
			<input className="flex-1 p-2 bg-zinc-200" type="text" />
			<button className="p-2 rounded-sm flex justify-center items-center bg-blue-500 text-white">
				<BiSearch /> Search
			</button>
		</form>
	);
};

export default Search;
