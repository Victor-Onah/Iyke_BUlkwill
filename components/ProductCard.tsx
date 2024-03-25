import Image from "next/image";
import { ProductCardProps } from "..";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";

const ProductCard = ({
	image_thumbnail_path,
	name,
	price,
	product_id,
	className,
}: ProductCardProps) => {
	return (
		<div className={`${className} bg-white shadow-lg rounded-sm p-4`}>
			<Image
				className="aspect-square rounded-md"
				src={image_thumbnail_path}
				alt={name}
				width={350}
				height={750}
			/>
			<div className="flex flex-col gap-2 mt-4">
				<h3 className="text-center font-semibold text-blue-500">
					<Link href={"/listing/" + product_id}>{name}</Link>
				</h3>
				<p className="font-bold text-center">₦{price.toLocaleString()}</p>
			</div>
			<button className="px-4 py-2 rounded-sm bg-blue-500 flex justify-center items-center text-white w-full active:scale-95 transition-transform mt-4">
				Add to cart <BiCartAdd />
			</button>
		</div>
	);
};

export default ProductCard;