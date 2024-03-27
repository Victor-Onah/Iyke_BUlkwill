import { Reducer } from "react";
import { Cart, ProductCardProps, ReducerAction } from "..";

const reducer: Reducer<Cart, ReducerAction> = (
	state: Cart,
	action: ReducerAction
) => {
	switch (action.type) {
		case "add_to_cart":
			const item = state.find(
				(item) => item.product_id === action.payload.product_id
			);
			if (!item) {
				return [...state, action.payload];
			} else {
				item.quantity = Number(item.quantity) + 1;
				return [...state];
			}
		case "delete_from_cart":
			return state.filter((item) => item.product_id !== action.payload);
		case "empty_cart":
			return [];
		case "update_product_quantity":
			return state.map(
				(item) => (
					item.product_id === action.payload.id
						? (item.quantity = action.payload.quantity)
						: null,
					item
				)
			);
		case "replace_cart":
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
