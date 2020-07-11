import { CART_TYPES } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
