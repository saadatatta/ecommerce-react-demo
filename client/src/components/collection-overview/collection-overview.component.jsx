import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import "./collection-overview.styles.scss";

function CollectionOverview({ collections }) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...restOfProperties }) => {
        return (
          <CollectionPreview key={id} {...restOfProperties}></CollectionPreview>
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
