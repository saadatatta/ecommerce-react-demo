import { SHOP_TYPES } from "./shop.types";
import { takeEvery, call, put, all } from "redux-saga/effects";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";

import {
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from "../../redux/shop/shop.actions";

function* fetchCollectionsAsync() {
  try {
    const collectionsSnapShot = fireStore.collection("collections");
    const snapShot = yield collectionsSnapShot.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(SHOP_TYPES.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
