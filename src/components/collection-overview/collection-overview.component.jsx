import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { connect } from "react-redux";
import { selectPreviewCollection } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectPreviewCollection,
});

export default connect(mapStateToProps)(CollectionOverview);
