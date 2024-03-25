import { Inter } from "next/font/google";
import Header from "./Header";
import products from "../lib/products.json";
import { createContext } from "react";

const inter = Inter({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const GlobalContext = createContext<any>(null);

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<GlobalContext.Provider value={{ products }}>
			<div style={inter.style}>
				<Header />
				<div className="max-w-[1480px] m-auto">{children}</div>
			</div>
		</GlobalContext.Provider>
	);
}
