import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="bg-zinc-100 py-12 px-4 flex flex-col justify-center items-center gap-6">
			<Logo />
			<div className="flex gap-8 text-blue-500 font-semibold">
				<Link href={"/#home"} title="Home">
					Home
				</Link>
				<Link href={"/#about"} title="About Us">
					About Us
				</Link>
				<Link href={"/#services"} title="Services">
					Services
				</Link>
				<Link href={"/listings"} title="Listings">
					Listings
				</Link>
			</div>
			<p>
				All rights reserved. Iyke Bulkwill LTD.&trade;{" "}
				{new Date().getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
