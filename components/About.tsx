import Image from "next/image";

const About = () => {
	return (
		<div
			id="about"
			className="flex bg-blue-600 text-white max-[960px]:flex-col"
		>
			<div className="min-w-[540px]">
				<Image
					alt="Iyke Bulkwill"
					src={"/images/iyke-bulkwill.jpg"}
					height={720}
					width={540}
                    className="w-full"
				/>
			</div>
			<div className="flex flex-col justify-center p-4 gap-4">
				<h2 className="text-4xl font-bold">About</h2>
				<p className="border-l-2 border-l-white p-4">
					Discover Iyke Bulkwill LTD, your trusted source for cutting-edge
					technology and eco-friendly solutions. With a comprehensive selection
					of products ranging from solar panels to phones, laptops, light bulbs,
					and chandeliers, we cater to all your needs under one roof. Our
					commitment to quality, innovation, and customer satisfaction sets us
					apart. Experience the convenience of shopping with Iyke Bulkwill LTD
					today and join the journey towards a brighter, more sustainable
					future.
				</p>
			</div>
		</div>
	);
};

export default About;
