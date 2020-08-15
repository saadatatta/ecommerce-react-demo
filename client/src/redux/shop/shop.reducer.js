import { SHOP_TYPES } from "./shop.types";

const INTIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_TYPES.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case SHOP_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case SHOP_TYPES.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
