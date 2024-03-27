import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href={'/#home'} className="flex justify-center items-center gap-1 font-bold text-blue-500">
			<Image alt="Logo" src={"/images/logo.png"} height={40} width={40} />
			Iyke Bulkwill
		</Link>
	);
};

export default Logo;
