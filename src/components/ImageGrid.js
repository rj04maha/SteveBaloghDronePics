import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import ImageCard from "./ImageCard";
import "./ImageGrid.css";

class ImageGrid extends React.Component {
  addToCart = photo => {
    this.props.addToCart(photo);
  };

  removeFromCart = photo => {
    this.props.removeFromCart(photo.id);
  };

  renderList() {
    return this.props.photos.map(image => {
      return (
        <ImageCard
          key={image.id}
          image={image}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
      );
    });
  }

  render() {
    return (
      <div className="ui container">
        <div className="image-list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { photos: state.photos, cart: state.cart };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: photo => {
      dispatch(addToCart(photo));
    },
    removeFromCart: photoId => {
      dispatch(removeFromCart(photoId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
