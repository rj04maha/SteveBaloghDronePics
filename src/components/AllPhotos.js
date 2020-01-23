import React from "react";
import ImageGrid from "./ImageGrid";

const AllPhotos = () => {
  return (
    <div className="space">
      <h4 className="ui horizontal divider header">
        Please select which images you would like to order
      </h4>
      <ImageGrid></ImageGrid>
    </div>
  );
};

export default AllPhotos;
