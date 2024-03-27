export type ProductCardProps = {
	image_thumbnail_path: string;
	product_id: string;
	name: string;
	price: number;
	className?: string;
	description?: string;
	quantity?: number;
};

export type Action =
	| "empty_cart"
	| "add_to_cart"
	| "delete_from_cart"
	| "update_product_quantity"
	| "replace_cart";

export type ReducerAction = { type: Action; payload: any };

export type Cart = ProductCardProps[];

export type GlobalContextProps<P> = {
	products: P;
	cart: Cart;
	dispatch: Dispatch<ReducerAction>;
};
