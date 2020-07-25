import SHOP_DATA from "./shop.data";
import { SHOP_TYPES } from "./shop.types";

const INTIAL_STATE = {
  collections: SHOP_DATA,
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
