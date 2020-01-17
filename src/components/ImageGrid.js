import React from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../actions";
import ImageCard from "./ImageCard";
import "./ImageGrid.css";

class ImageGrid extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderList() {
    return this.props.photos.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
  }

  render() {
    return <div className="image-list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { photos: state.photos };
};

export default connect(mapStateToProps, { fetchPhotos })(ImageGrid);
