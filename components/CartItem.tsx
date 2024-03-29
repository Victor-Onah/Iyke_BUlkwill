import Image from "next/image";
import { ProductCardProps } from "..";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useContext } from "react";
import { GlobalContext } from "./Layout";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const CartItem = (props: ProductCardProps) => {
	const { dispatch, setIsCartVisible } = useContext(GlobalContext);
	return (
		<div className="grid sm:[grid-template-columns:_0.25fr_0.75fr] max-sm:text-sm bg-white shadow-md mx-4 my-8 rounded-sm overflow-hidden gap-6 relative">
			<button
				className="active:scale-95 rounded-full absolute h-8 w-8 flex justify-center items-center bg-zinc-400 bg-opacity-40 backdrop-blur-md top-2 right-2"
				name="Delete item"
				onClick={() =>
					dispatch({ type: "delete_from_cart", payload: props.product_id })
				}
			>
				<CgClose />
			</button>
			<div className="overflow-hidden max-sm:hidden">
				<Image
					alt={props.name}
					src={props.image_thumbnail_path}
					height={100}
					width={100}
					className="h-full w-full"
				/>
			</div>
			<div className="py-4 flex flex-col gap-2 max-sm:px-4">
				<p className="font-bold text-blue-500">
					<Link onClick={() => setIsCartVisible(false)} href={`/listings/${props.product_id}`}>{props.name}</Link>
				</p>
				<p className="font-black">₦{props.price.toLocaleString()}</p>
				<div className="flex items-stretch gap-2">
					<button
						onClick={() =>
							dispatch({
								type: "update_product_quantity",
								payload: {
									quantity:
										Number.isInteger(props.quantity) &&
										Number(props.quantity) > 1
											? Number(props.quantity) - 1
											: 1,
									id: props.product_id,
								},
							})
						}
						className="bg-red-500 text-white px-4 rounded-md active:scale-95"
					>
						<BiMinus />
					</button>
					<input
						className="border border-zinc-500 rounded-md px-4 max-w-24 min-w-0 flex-1"
						value={props.quantity}
						onChange={(e) =>
							dispatch({
								type: "update_product_quantity",
								payload: {
									quantity: Number.isNaN(e.target.value)
										? 1
										: Number(e.target.value),
									id: props.product_id,
								},
							})
						}
						type="number"
						min={1}
					/>
					<button
						onClick={() =>
							dispatch({
								type: "update_product_quantity",
								payload: {
									quantity: Number(props.quantity) + 1,
									id: props.product_id,
								},
							})
						}
						className="bg-green-500 text-white px-4 rounded-md active:scale-95"
					>
						<BiPlus />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
