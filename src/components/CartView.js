import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import "./CartView.css";

class CartView extends React.Component {
  emptyCart = e => {
    e.preventDefault();
    this.props.cart.map(image => {
      //console.log("trying to empty cart " + this.image.photo.inCart);
      this.props.removeFromCart(image.photo.id);
      return (image.photo.inCart = false);
    });
  };

  getCart() {
    const cartTotal =
      this.props.cart.length > 0 ? (
        <div>
          <div className="ui tiny images">
            <button
              onClick={this.emptyCart}
              className="ui right floated basic red button"
            >
              Empty cart
            </button>
            {this.props.cart.map(image => {
              return (
                <img
                  className="ui image"
                  src={image.photo.urls.regular}
                  alt={image.photo.description}
                  key={image.photo.id}
                />
              );
            })}
            }
          </div>
          <Link to="/cart">
            <button className="fluid ui button">
              Change quantity of photos & checkout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h4 className="ui horizontal divider header">
            Please select which images you would like to order
          </h4>
        </div>
      );

    return <div>{cartTotal}</div>;
  }

  render() {
    return (
      <div className="ui-sticky">
        <div className="ui segment">{this.getCart()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: photoId => {
      dispatch(removeFromCart(photoId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
