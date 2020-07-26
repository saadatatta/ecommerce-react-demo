import { SHOP_TYPES } from "./shop.types";

const INTIAL_STATE = {
  collections: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_TYPES.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
