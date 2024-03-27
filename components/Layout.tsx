import { Inter } from "next/font/google";
import Header from "./Header";
import products from "../lib/products.json";
import { Dispatch, createContext, useEffect, useReducer } from "react";
import Footer from "./Footer";
import reducer from "@/utils/reducer";
import { Cart, GlobalContextProps } from "..";

const inter = Inter({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const GlobalContext = createContext<GlobalContextProps<typeof products>>(
	{} as GlobalContextProps<typeof products>
);

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [cart, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");
		if (savedCart)
			dispatch({ type: "replace_cart", payload: JSON.parse(savedCart) });
	}, []);

	useEffect(() => {
		if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart));
		else localStorage.removeItem("cart");
	}, [cart]);

	return (
		<GlobalContext.Provider value={{ products, cart, dispatch }}>
			<div style={inter.style}>
				<Header />
				<div className="max-w-[1480px] m-auto">{children}</div>
				<Footer />
			</div>
		</GlobalContext.Provider>
	);
}
