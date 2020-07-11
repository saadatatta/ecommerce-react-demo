import { CART_TYPES } from "./cart.types";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CART_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};