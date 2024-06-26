import { GlobalContext } from "@/components/Layout";
import ProductsList from "@/components/ProductsList";
import { ProductCardProps } from "@/index";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { BiCartAdd, BiMinus, BiPlus } from "react-icons/bi";
import { TbShoppingCartMinus } from "react-icons/tb";
import paths from "../../lib/paths.json";
import Head from "next/head";
import shuffledProducts from "../../lib/shuffledProducts.json";

export const getStaticPaths = (async () => {
	return {
		paths: paths,
		fallback: false,
	};
}) satisfies GetStaticPaths;

export const getStaticProps = async ({
	params,
}: {
	params: { id: string };
}) => {
	return {
		props: {
			id: params.id,
			foundProduct: (function () {
				return shuffledProducts.find(
					(product) => product.product_id === params.id
				);
			})(),
		},
	};
};

const Product = (props: { id: string; foundProduct: ProductCardProps }) => {
	const { id, foundProduct } = props;
	const { cart, shuffledProducts, products, dispatch } =
		useContext(GlobalContext);
	const [product, setProduct] =
		useState<(typeof shuffledProducts)[number]>(foundProduct);
	const [productCategory, setProductCategory] = useState<keyof typeof products>(
		"" as keyof typeof products
	);
	const [itemInCart, setItemInCart] = useState<ProductCardProps>();

	function findProductInCart() {
		return cart.find((product) => product.product_id === id);
	}

	const findProduct = useCallback(
		function () {
			for (let category in products) {
				for (let product of products[category as typeof productCategory]) {
					if (product.product_id === id)
						return (
							setProductCategory(category as typeof productCategory), product
						);
				}
			}
		},
		[product, id]
	);

	useEffect(() => {
		findProduct();
		setItemInCart(findProductInCart());
	}, [products, cart]);

	return (
		<>
			<Head>
				<meta name="description" content={product?.description} />
				<meta name="og:title" content={product?.name || "Product"} />
				<meta name="og:description" content={product?.description} />
				<meta
					name="og:image"
					content={
						"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/" +
						product?.image_thumbnail_path
					}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={product?.name} />
				<meta name="twitter:description" content={product?.description} />
				<meta
					name="twitter:image"
					content={
						"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/" +
						product?.image_thumbnail_path
					}
				/>
				<meta name="robots" content="index, follow" />
				<link rel="shortcut icon" href="/images/logo.png" type="image/png" />
				<link rel="apple-touch-icon" href="/images/logo.png" type="image/png" />
				<title>{product?.name || "Product"}</title>
				<link rel="canonical" href="https://iyke-bulkwill-qw1o.onrender.com/" />
				<title>{product?.name || "Product"}</title>
				<link rel="canonical" href="https://iyke-bulkwill-qw1o.onrender.com/" />
			</Head>
			<div>
				{product && (
					<div className="p-4">
						<h1 className="text-4xl capitalize font-bold mt-6 my-4">
							{product.name}
						</h1>
						<div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
							<div className="overflow-hidden rounded-md">
								<Image
									src={
										"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/" +
										product.image_thumbnail_path
									}
									height={400}
									width={400}
									alt={product.name}
									className="w-full object-cover"
								/>
							</div>
							<div className="flex flex-col justify-around py-6">
								<p>{product.description}</p>
								{itemInCart ? (
									<div>
										<div className="flex items-stretch gap-2">
											<button
												onClick={() =>
													dispatch({
														type: "update_product_quantity",
														payload: {
															quantity:
																Number.isInteger(itemInCart.quantity) &&
																Number(itemInCart.quantity) > 1
																	? Number(itemInCart.quantity) - 1
																	: 1,
															id: product.product_id,
														},
													})
												}
												className="bg-red-500 text-white px-4 rounded-md active:scale-95"
											>
												<BiMinus />
											</button>
											<input
												className="border border-zinc-500 rounded-md px-4 max-w-24 min-w-0 flex-1"
												value={itemInCart.quantity}
												onChange={(e) =>
													dispatch({
														type: "update_product_quantity",
														payload: {
															quantity: Number.isNaN(e.target.value)
																? 1
																: Number(e.target.value),
															id: product.product_id,
														},
													})
												}
												type="number"
												min={1}
											/>
											<button
												onClick={() =>
													dispatch({
														type: "update_product_quantity",
														payload: {
															quantity: Number(itemInCart.quantity) + 1,
															id: itemInCart.product_id,
														},
													})
												}
												className="bg-green-500 text-white px-4 rounded-md active:scale-95"
											>
												<BiPlus />
											</button>
										</div>
										<button
											onClick={() =>
												dispatch({
													type: "delete_from_cart",
													payload: product.product_id,
												})
											}
											className="px-4 py-2 rounded-sm bg-red-500 flex justify-center items-center text-white w-full active:scale-95 transition-transform mt-4 whitespace-nowrap flex-nowrap"
										>
											Remove from cart <TbShoppingCartMinus />
										</button>
									</div>
								) : (
									<button
										onClick={() =>
											dispatch({
												type: "add_to_cart",
												payload: {
													image_thumbnail_path:
														"https://www-konga-com-res.cloudinary.com/w_200,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/" +
														product.image_thumbnail_path,
													name: product.name,
													price: product.price,
													product_id: product.product_id,
													quantity: 1,
												},
											})
										}
										className="px-4 py-2 rounded-sm bg-blue-500 flex justify-center items-center text-white w-full active:scale-95 transition-transform mt-4 whitespace-nowrap flex-nowrap"
									>
										Add to cart <BiCartAdd />
									</button>
								)}
							</div>
						</div>
					</div>
				)}
				<div>
					<h2 className="text-2xl p-4 bg-zinc-200 font-semibold my-6 text-center">
						Similar Products
					</h2>
					{products[productCategory] && (
						<ProductsList data={products[productCategory].slice(0, 12)} />
					)}
				</div>
			</div>
		</>
	);
};

export default Product;
