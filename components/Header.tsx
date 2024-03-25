import { BiMenu } from "react-icons/bi";
import Logo from "./Logo";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
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
						<ul className="flex gap-9">
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/#home"} title="Home">
									Home
								</Link>
							</li>
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/#about"} title="Home">
									About
								</Link>
							</li>
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/#services"} title="Home">
									Services
								</Link>
							</li>
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/listings"} title="Home">
									Listings
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="flex justify-between max-w-6xl m-auto p-4 md:hidden">
				<Logo />
				<div>
					<nav role="navigation">
						<button onClick={() => setIsMenuOpen(true)} className="w-8 h-8 rounded-full hover:bg-slate-200 active:scale-95 flex justify-center items-center">
							<BiMenu />
						</button>
						<ul className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex gap-4 bg-white pt-8 px-4 flex-col fixed inset-0 transition-transform`}>
							<div className="flex justify-end">
								<button onClick={() => setIsMenuOpen(false)} className="w-8 h-8 rounded-full hover:bg-slate-200 active:scale-95 flex justify-center items-center">
									<CgClose />
								</button>
							</div>
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/#home"} title="Home">
									Home
								</Link>
							</li>
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/#about"} title="Home">
									About
								</Link>
							</li>
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/#services"} title="Home">
									Services
								</Link>
							</li>
							<li className="px-4 py-2 rounded-sm hover:bg-blue-100 text-blue-500 transition-transform active:scale-95">
								<Link href={"/listings"} title="Home">
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
