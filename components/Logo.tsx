import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex justify-center items-center gap-1 font-bold text-blue-500">
			<Image alt="Logo" src={"/images/logo.png"} height={40} width={40} />
			Iyke Bulkwill
		</div>
	);
};

export default Logo;
