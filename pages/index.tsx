import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
            <Services />
		</main>
	);
}
