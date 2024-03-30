import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "./Layout";
import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = () => {
	const slides = [
		{
			imgUrl: "/images/solar-panels-roof-solar-cell.webp",
			title: "Solar panels",
		},
		{
			imgUrl: "/images/3072209.webp",
			title: "Phones and phone accessories",
		},
		{
			imgUrl: "/images/electronic-device-balancing-concept.webp",
			title: "Laptops and laptop accessories",
		},
		{
			imgUrl: "/images/light-bulbs.webp",
			title: "Home and security lights",
		},
		{
			imgUrl:
				"/images/elegant-modern-living-room-showcases-luxury-design-generated-by-ai.webp",
			title: "Chandeliers and interior lights",
		},
	];
	const [currentSlide, setCurrentSlide] = useState<number>(1);
	const slider = useRef<HTMLDivElement>(null);
	const { products, dispatch } = useContext(GlobalContext);

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
		<div className="relative">
			<div ref={slider} className="h-min flex max-w-full overflow-hidden">
				{slides.map((slide, index) => (
					<div
						key={slide.imgUrl}
						className="relative min-w-full flex-1 flex justify-center items-center max-h-[400px]"
					>
						<Image
							alt={slide.title}
							src={slide.imgUrl}
							title={slide.title}
							width={1240}
							height={400}
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
								} bg-blue-500 text-white rounded-md px-4 py-1 active:scale-95 [transition:_1.2s_linear_all]`}
								href={slide.imgUrl}
							>
								Explore
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
	);
};

export default Carousel;
