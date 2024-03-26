import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GlobalContext } from "./Layout";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "..";
import { RiArrowRightUpLine } from "react-icons/ri";

const Hero = () => {
	const slides = [
		{
			imgUrl: "/images/solar-panels-roof-solar-cell.jpg",
			title: "Solar panels",
		},
		{
			imgUrl: "/images/3072209.jpg",
			title: "Phones and phone accessories",
		},
		{
			imgUrl: "/images/electronic-device-balancing-concept.jpg",
			title: "Laptops and laptop accessories",
		},
		{
			imgUrl: "/images/light-bulbs.jpg",
			title: "Home and security lights",
		},
		{
			imgUrl:
				"/images/elegant-modern-living-room-showcases-luxury-design-generated-by-ai.jpg",
			title: "Chandeliers and interior lights",
		},
	];
	const [currentSlide, setCurrentSlide] = useState<number>(1);
	const slider = useRef<HTMLDivElement>(null);
	const { products } = useContext(GlobalContext);
	useEffect(() => {
		const interval = setInterval(
			() => setCurrentSlide((prev) => (prev >= slides.length ? 1 : prev + 1)),
			4000
		);
		return () => clearInterval(interval);
	}, [slides.length]);
	useEffect(() => {
		const { current: sliderContainer } = slider;
		const width = sliderContainer?.clientWidth as number;
		sliderContainer?.scroll({
			left: width * (currentSlide - 1),
			behavior: "smooth",
		});
	}, [currentSlide]);
	return (
		<div id="home" className="mb-24">
			<div className="relative">
				<div ref={slider} className="h-min flex max-w-full overflow-hidden">
					{slides.map((slide, index) => (
						<div
							key={slide.imgUrl}
							className="relative min-w-full flex-1 flex justify-center items-center"
						>
							<Image
								alt={slide.title}
								src={slide.imgUrl}
								title={slide.title}
								width={1240}
								height={720}
								className="w-full  aspect-[16_/_9]"
							/>
							<div className="absolute bg-black bg-opacity-50 inset-0 flex justify-center items-center text-center flex-col gap-4 p-4 transition-transform">
								<h2
									className={`${
										currentSlide == index + 1
											? "translate-y-0 opacity-100"
											: "translate-y-full opacity-0"
									} font-bold text-white text-4xl [transition:_1.2s_linear_all]`}
								>
									{slide.title}
								</h2>
								<Link
									className={`${
										currentSlide == index + 1
											? "translate-y-0 opacity-100"
											: "translate-y-full opacity-0"
									} bg-blue-500 text-white rounded-md p-4 active:scale-95 [transition:_1.2s_linear_all]`}
									href={slide.imgUrl}
								>
									Get Started
								</Link>
							</div>
						</div>
					))}
					{currentSlide > 1 && (
						<button
							onClick={() => setCurrentSlide(currentSlide - 1)}
							className="cursor-pointer absolute top-1/2 left-4 bg-white p-4 rounded-full scale-95 transition-transform block -translate-y-1/2 bg-opacity-50"
						>
							<FaAngleLeft />
						</button>
					)}
					{currentSlide < slides.length && (
						<span
							onClick={() => setCurrentSlide(currentSlide + 1)}
							className="cursor-pointer absolute top-1/2 right-4 bg-white p-4 rounded-full scale-95 transition-transform block -translate-y-1/2 bg-opacity-50"
						>
							<FaAngleRight />
						</span>
					)}
					<div className="absolute bottom-4 left-1/2 bg-white p-1 rounded-full -translate-x-1/2 bg-opacity-50 flex justify-center items-center gap-1">
						{slides.map((slide, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index + 1)}
								className={`${
									currentSlide === index + 1 ? "bg-blue-600" : "bg-zinc-600"
								} h-2 w-2 inline-block rounded-full`}
							></button>
						))}
					</div>
				</div>
			</div>
			<div className="flex max-w-full overflow-auto snap-x snap-mandatory gap-8 mt-24 mb-4 p-4">
				{products.solarPanels.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-60 min-w-60 snap-always snap-center"
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
						/>
					) : undefined
				)}
				{products.laptops.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-60 min-w-60 snap-always snap-end"
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
						/>
					) : undefined
				)}
				{products.phones.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-60 min-w-60 snap-always snap-end"
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
						/>
					) : undefined
				)}
				{products.chandeliers.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-60 min-w-60 snap-always snap-end"
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
						/>
					) : undefined
				)}
				{products.homeLights.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-60 min-w-60 snap-always snap-end"
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
						/>
					) : undefined
				)}
			</div>
			<p className="text-right font-bold text-blue-500">
				<Link className="justify-end flex" href={"/listing"}>
					See more <RiArrowRightUpLine />
				</Link>
			</p>
		</div>
	);
};

export default Hero;
