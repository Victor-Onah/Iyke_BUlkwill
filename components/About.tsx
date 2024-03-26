import Image from "next/image";
import { FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

const About = () => {
	return (
		<div
			id="about"
			className="flex bg-blue-600 text-white max-[1020px]:flex-col"
		>
			<div className="w-full min-w-96 max-w-screen-lg">
				<Image
					alt="Iyke Bulkwill"
					src={"/images/iyke-bulkwill.jpg"}
					height={720}
					width={540}
					className="w-full min-w-full block max-w-sm h-full"
				/>
			</div>
			<div className="flex flex-col justify-center p-4 gap-4">
				<h2 className="text-4xl font-bold">About Us</h2>
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
				<div className="flex gap-12 flex-wrap">
					<div>
						<h4 className="font-semibold">Office Address 1</h4>
						<p>
							No. 1 Pepple Street,
							<br />
							Ikeja,
							<br />
							Lagos State,
							<br />
							Nigeria.
						</p>
					</div>
					<div>
						<h4 className="font-semibold">Office Address 2</h4>
						<p>
							No. 21 Market Road,
							<br />
							GSM Village Near Fire Service,
							<br />
							New Heaven,
							<br />
							Enugu State,
							<br />
							Nigeria
						</p>
					</div>
				</div>
				<div className="flex text-lg gap-8">
					<a
						aria-label="WhatsApp link"
						title="WhatsApp link"
						target="_blank"
						href="https://wa.me/2348038022220"
					>
						<FaWhatsapp />
					</a>
					<a
						aria-label="Facebook link"
						title="Facebook link"
						target="_blank"
						href="https://www.facebook.com/profile.php?id=100048470815037&ibextid=LQQJ4d"
					>
						<FaFacebook />
					</a>
					<a
						aria-label="Email"
						title="Email"
						target="_blank"
						href="mailto:iykebulkwillintlltd@gmail.com"
					>
						<FaEnvelope />
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
