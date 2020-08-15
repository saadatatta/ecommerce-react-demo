import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { Link, withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, match }) => {
  return (
    <div className="collection-preview">
      <Link to={`${match.path}/${title.toLowerCase()}`} className="title">
        {title}
      </Link>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
