import Image from "next/image";
import { ProductCardProps } from "..";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useContext } from "react";
import { GlobalContext } from "./Layout";

const CartItem = (props: ProductCardProps) => {
	const { dispatch } = useContext(GlobalContext);
	return (
		<div className="flex bg-white shadow-md mx-4 my-8 rounded-sm overflow-hidden gap-6">
			<div className="aspect-auto">
				<Image
					alt={props.name}
					src={props.image_thumbnail_path}
					height={100}
					width={100}
					className="h-full"
				/>
			</div>
			<div className="py-4 flex flex-col gap-2">
				<p className="font-bold text-blue-500">{props.name}</p>
				<p className="font-black">₦{props.price.toLocaleString()}</p>
				<div className="flex items-center gap-2">
					<button className="bg-red-500 text-white px-4 py-1 rounded-md active:scale-95">
						<BiMinus />
					</button>
					<input
						className="border border-zinc-500 rounded-md px-4 py-1 max-w-24"
						value={props.quantity}
						onChange={(e) =>
							dispatch({
								type: "update_product_quantity",
								payload: {
									quantity: Number.isNaN(e.target.value) ? 1 : e.target.value,
									id: props.product_id,
								},
							})
						}
						type="number"
						min={1}
					/>
					<button className="bg-green-500 text-white px-4 py-1 rounded-md active:scale-95">
						<BiPlus />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
