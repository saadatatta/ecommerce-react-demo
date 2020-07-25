import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class Shop extends React.Component {
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionsSnapShot = fireStore.collection("collections");
    collectionsSnapShot.onSnapshot(async (snapShot) => {
      updateCollections(convertCollectionsSnapshotToMap(snapShot));
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverview}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
