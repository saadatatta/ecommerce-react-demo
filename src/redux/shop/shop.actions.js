import { SHOP_TYPES } from "./shop.types";

export const updateCollections = (collections) => ({
  type: SHOP_TYPES.UPDATE_COLLECTIONS,
  payload: collections,
});
