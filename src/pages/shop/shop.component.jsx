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
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionsSnapShot = fireStore.collection("collections");
    collectionsSnapShot.get().then((snapShot) => {
      updateCollections(convertCollectionsSnapshotToMap(snapShot));
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isLoading}
              {...props}
            ></CollectionOverviewWithSpinner>
          )}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isLoading}
              {...props}
            ></CollectionPageWithSpinner>
          )}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
