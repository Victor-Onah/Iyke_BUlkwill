import Image from "next/image";
import { ProductCardProps } from "..";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";
import { useContext, useState } from "react";
import { GlobalContext } from "./Layout";
import { CgSpinner } from "react-icons/cg";

const ProductCard = ({
	image_thumbnail_path,
	name,
	price,
	product_id,
	className,
}: ProductCardProps) => {
	const { dispatch } = useContext(GlobalContext);
	const [adding, setAdding] = useState(false);

	return (
		<div
			className={`${className} bg-white shadow-lg rounded-sm p-4 flex flex-col gap-4`}
		>
			<Image
				className="aspect-square rounded-md flex-1"
				src={image_thumbnail_path}
				alt={name}
				width={350}
				height={350}
			/>
			<div>
				<div className="flex flex-col gap-2 mt-4">
					<p className="text-center font-semibold text-blue-500">
						<Link href={"/listings/" + product_id}>{name}</Link>
					</p>
					<p className="font-bold text-center">₦{price.toLocaleString()}</p>
				</div>
				<button
					onClick={() => {
						setAdding(true);
						setTimeout(() => {
							dispatch({
								type: "add_to_cart",
								payload: {
									image_thumbnail_path,
									name,
									price,
									product_id,
									quantity: 1,
								},
							});
							setAdding(false);
						}, 1500);
					}}
					className="px-4 py-2 rounded-sm bg-blue-500 flex justify-center items-center text-white w-full active:scale-95 transition-transform mt-4 whitespace-nowrap flex-nowrap"
				>
					{adding ? (
						<span className="animate-spin">
							<CgSpinner />
						</span>
					) : (
						<>
							Add to cart <BiCartAdd />
						</>
					)}
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
