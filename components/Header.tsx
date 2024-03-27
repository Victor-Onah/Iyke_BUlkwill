import { BiCart, BiMenu } from "react-icons/bi";
import Logo from "./Logo";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { useContext, useState } from "react";
import { GlobalContext } from "./Layout";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { cart, setIsCartVisible } = useContext(GlobalContext);
	return (
		<div
			role="banner"
			aria-label="Page Header"
			className="sticky top-0 left-0 w-full bg-white shadow-sm z-50"
		>
			<div className="flex justify-between max-w-6xl m-auto p-4 max-md:hidden">
				<Logo />
				<div>
					<nav role="navigation">
						<ul className="flex gap-9 items-center">
							<li>
								<Link
									className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									href={"/#home"}
									title="Home"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									href={"/#about"}
									title="About Us"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									href={"/#services"}
									title="Services"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									href={"/listings"}
									title="Listings"
								>
									Listings
								</Link>
							</li>
							<button
								onClick={() => setIsCartVisible(true)}
								className="flex items-center gap-1 bg-blue-100 px-4 py-1 rounded-full"
							>
								<BiCart /> {cart.length}
							</button>
						</ul>
					</nav>
				</div>
			</div>
			<div className="flex justify-between max-w-6xl m-auto p-4 md:hidden">
				<Logo />
				<div>
					<nav role="navigation" className="flex gap-4">
						<button
							onClick={() => setIsCartVisible(true)}
							className="flex items-center gap-1 bg-blue-100 px-4 py-1 rounded-full"
						>
							<BiCart /> {cart.length}
						</button>
						<button
							onClick={() => setIsMenuOpen(true)}
							className="w-8 h-8 rounded-full hover:bg-slate-200 active:scale-95 flex justify-center items-center"
						>
							<BiMenu />
						</button>
						<ul
							className={`${
								isMenuOpen ? "translate-x-0" : "-translate-x-full"
							} flex gap-4 bg-white pt-8 px-4 flex-col fixed inset-0 transition-transform`}
						>
							<div className="flex justify-end">
								<button
									onClick={() => setIsMenuOpen(false)}
									className="w-8 h-8 rounded-full hover:bg-slate-200 active:scale-95 flex justify-center items-center"
								>
									<CgClose />
								</button>
							</div>
							<li>
								<Link
									className="px-4 py-2 block rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									onClick={() => setIsMenuOpen(false)}
									href={"/#home"}
									title="Home"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className="px-4 py-2 block rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									onClick={() => setIsMenuOpen(false)}
									href={"/#about"}
									title="About Us"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									className="px-4 py-2 block rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									onClick={() => setIsMenuOpen(false)}
									href={"/#services"}
									title="Services"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									className="px-4 py-2 block rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95"
									onClick={() => setIsMenuOpen(false)}
									href={"/listings"}
									title="Listings"
								>
									Listings
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
