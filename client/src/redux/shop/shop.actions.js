import { SHOP_TYPES } from "./shop.types";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collections) => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());
    const collectionsSnapShot = fireStore.collection("collections");
    collectionsSnapShot
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
