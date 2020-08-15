import React from "react";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h1 className="title"> {title} </h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ourProps) => ({
  collection: selectCollection(ourProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
