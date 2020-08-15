import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import {
  selectIsFetchingCollection,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../collection/collection.container";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        ></Route>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetchingCollection,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
