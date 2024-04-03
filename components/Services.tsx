import Image from "next/image";
import Link from "next/link";

const Services = () => {
	return (
		<div id="services" className="my-24">
			<h2 className="mb-6 font-bold text-4xl text-center">Our Services</h2>
			<div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 p-4 gap-x-6 gap-y-8 m-auto justify-center">
				<div className="bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full overflow-hidden text-center p-4">
					<Image
						height={400}
						width={400}
						className="w-full rounded-md aspect-video object-cover block"
						src="/images/residual_solar_panel_mounting.jpg"
						alt="People mounting solar panels on a house"
					/>
					<div className="flex-1 flex flex-col justify-around">
						<h3 className="font-semibold">Solar Panels</h3>
						<p>
							We specialize in customizing solar solutions for homes, providing
							cost effective and eco-friendly energy options for families.
							Businesses can also benefit from solar power too! Discover how we
							can help you reduce operational costs and enhance sustainability
							through our commercial solar panels.
						</p>
					</div>
				</div>
				<div className="bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full overflow-hidden text-center p-4">
					<Image
						height={400}
						width={400}
						className="w-full rounded-md aspect-video object-cover block m-auto"
						src="/images/mounting_and_maintenance.jpg"
						alt="A house fiited wih solar panels"
					/>
					<div className="flex-1 flex flex-col justify-around">
						<h3 className="font-semibold">Installation and Maintenance</h3>
						<p>
							Our expert team ensures seamless installation and offers regular
							maintenance to keep your solar system performing at its best.
						</p>
					</div>
				</div>
				<div className="bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full overflow-hidden text-center p-4">
					<Image
						height={400}
						width={400}
						className="w-full rounded-md aspect-video object-cover block m-auto"
						src="/images/real_estate.jpg"
						alt="Many houses in an estate"
					/>
					<div className="flex-1 flex flex-col justify-around">
						<h3 className="font-semibold">Real Estate</h3>
						<p>
							We can help you find your dream house. Our real estate agents are
							experts in providing real estate solutions for our customers. You
							can contact us directly for further enquiry
						</p>
					</div>
				</div>
				<div className="bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full overflow-hidden text-center p-4">
					<Image
						height={400}
						width={400}
						className="w-full rounded-md aspect-video object-cover block m-auto"
						src="/images/phones.jpg"
						alt="Phones on display"
					/>
					<div className="flex-1 flex flex-col justify-around">
						<h3 className="font-semibold">Phones and Mobile Accessories</h3>
						<p>
							We also offer quality mobile phones and other mobile accessories
							for sale at discounted rates.
						</p>
					</div>
				</div>
				<div className="bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full overflow-hidden text-center p-4">
					<Image
						height={400}
						width={400}
						className="w-full rounded-md aspect-video object-cover block m-auto"
						src="/images/laptops.jpg"
						alt="Laptops on display"
					/>
					<div className="flex-1 flex flex-col justify-around">
						<h3 className="font-semibold">Quality Laptops</h3>
						<p>
							Check out our listings page to find quality laptops that suite
							your work requirements at affordable rates.
						</p>
					</div>
				</div>
				<div className="bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full overflow-hidden text-center p-4">
					<Image
						height={400}
						width={400}
						className="w-full rounded-md aspect-video object-cover block m-auto"
						src="https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/Z/200674_1664086461.jpg"
						alt="Beautiful chandelier"
					/>
					<div className="flex-1 flex flex-col justify-around">
						<h3 className="font-semibold">Home Lights</h3>
						<p>
							We offer top-notch lighting for home interior decorations. You can
							visit our listings page to see the ones that suit your taste.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
