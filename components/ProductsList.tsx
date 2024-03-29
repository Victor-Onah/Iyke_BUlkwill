import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ProductCardProps } from "..";

const ProductsList = ({ data }: { data: ProductCardProps[] }) => {
	const [pages, setPages] = useState(Math.ceil(data.length / 24));
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setCurrentPage(1);
		setPages(Math.ceil(data.length / 24));
	}, [data]);

	return (
		<>
			<div className="grid grid-cols-6 gap-6 px-4 py-8 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 max-xs:text-xs">
				{data.length > 0 ? data.map(
					(product, index) =>
						index >= (currentPage - 1) * 24 &&
						index < currentPage * 24 && (
							<ProductCard
								key={product.name}
								{...{
									...product,
									image_thumbnail_path:
										"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/" +
										product.image_thumbnail_path,
								}}
							/>
						)
				) : <h3 className="text-center p-4 text-zinc-400">No item to show</h3>}
			</div>
			<div className="flex justify-center items-center gap-4 mb-8">
				<button
					disabled={currentPage === 1}
					className="p-4 rounded-md active:scale-95 shadow-lg bg-white text-blue-500 flex items-center gap-2"
					onClick={() => (
						setCurrentPage(currentPage - 1),
						window.scrollTo({ top: 0, behavior: "smooth" })
					)}
				>
					<FaAngleLeft /> Prev
				</button>
				<span className="font-bold text-blue-500 p-4">
					{currentPage} / {pages}
				</span>
				<button
					disabled={currentPage === pages}
					className="p-4 rounded-md active:scale-95 shadow-lg bg-white text-blue-500 flex items-center gap-2"
					onClick={() => (
						setCurrentPage(currentPage + 1),
						window.scrollTo({ top: 0, behavior: "smooth" })
					)}
				>
					Next <FaAngleRight />
				</button>
			</div>
		</>
	);
};

export default ProductsList;
