import Link from "next/link";
import products from "../lib/products.json";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "..";
import { RiArrowRightUpLine } from "react-icons/ri";
import Carousel from "./Carousel";

const Hero = () => {
	return (
		<div id="home" className="mb-24">
			<Carousel />
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
							description={product.description}
						/>
					) : undefined
				)}
				{products.laptops.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-52 snap-always snap-end text-sm min-w-52" 
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
							description={product.description}
						/>
					) : undefined
				)}
				{products.phones.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-52 snap-always snap-end text-sm min-w-52" 
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
							description={product.description}
						/>
					) : undefined
				)}
				{products.chandeliers.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-52 snap-always snap-end text-sm min-w-52" 
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
							description={product.description}
						/>
					) : undefined
				)}
				{products.homeLights.map((product: ProductCardProps, index: number) =>
					index <= 2 ? (
						<ProductCard
							className="w-52 snap-always snap-end text-sm min-w-52" 
							image_thumbnail_path={
								"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product" +
								product.image_thumbnail_path
							}
							name={product.name}
							price={product.price}
							product_id={product.product_id}
							key={product.name}
							description={product.description}
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
