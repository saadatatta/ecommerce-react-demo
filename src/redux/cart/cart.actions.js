import { CART_TYPES } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CART_TYPES.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CART_TYPES.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CART_TYPES.REMOVE_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CART_TYPES.REMOVE_ITEM_FROM_CART,
  payload: item,
});
