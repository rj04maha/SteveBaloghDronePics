import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import ImageCard from "./ImageCard";
import "./ImageGrid.css";

class ImageGrid extends React.Component {
  addToCart = photo => {
    this.props.addToCart(photo);
  };

  renderList() {
    return this.props.photos.map(image => {
      return (
        <ImageCard
          key={image.id}
          image={image}
          addToCart={this.addToCart}
          //inCart={
          //this.props.cart.length > 0 &&
          //this.props.cart.filter(e => e.image.id === image.id).length > 0
          //}
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
