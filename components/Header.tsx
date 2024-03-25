import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
	return (
		<div
			role="banner"
			aria-label="Page Header"
			className="sticky top-0 left-0 w-full bg-white shadow-sm z-50"
		>
			<div className="flex justify-between max-w-6xl m-auto p-4">
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
		</div>
	);
};

export default Header;
