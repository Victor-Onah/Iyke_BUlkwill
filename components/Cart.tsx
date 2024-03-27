import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { GlobalContext } from "./Layout";
import CartItem from "./CartItem";

const Cart = () => {
	const { cart, setIsCartVisible, dispatch } = useContext(GlobalContext);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center p-4">
			<div className="w-full min-h-96 bg-white max-w-2xl rounded-md shadow-lg relative max-h-[99%] overflow-auto">
				<div className="sticky top-0 bg-white">
					<button
						onClick={() => setIsCartVisible(false)}
						className="absolute z-50 right-0 h-8 w-8 bg-zinc-200 flex rounded-full m-2 justify-center items-center active:scale-95"
					>
						<CgClose />
					</button>
					<h2 className="font-bold text-3xl text-center border-b p-4 border-zinc-300">
						Cart
					</h2>
				</div>
				<div>
					{cart.length > 0 ? (
						cart.map((item) => <CartItem key={item.name} {...{ ...item }} />)
					) : (
						<h3 className="text-zinc-400 text-lg text-center py-12 px-4">
							No item in cart
						</h3>
					)}
				</div>
				{cart.length > 0 && (
					<div className="flex flex-col gap-6 p-4">
						<button
							onClick={() => dispatch({ type: "empty_cart", payload: "" })}
							className="px-4 py-2 rounded-md bg-red-500 text-white flex-1 active:scale-95"
						>
							Clear cart
						</button>
						<button className="px-4 py-2 rounded-md bg-blue-500 text-white flex-1 active:scale-95">
							Checkout
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
