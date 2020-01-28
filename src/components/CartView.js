import React from "react";
import { connect } from "react-redux";
import ImageCardCart from "./ImageCardCart";

class CartView extends React.Component {
  getCart() {
    const cart =
      this.props.cart.length > 0 ? (
        <div>
          {this.props.cart.map(image => {
            return (
              <div key={image.photo.id}>
                <ImageCardCart pic={image} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Cart is empty</p>
        </div>
      );

    return <div>{cart}</div>;
  }

  render() {
    return (
      <div className="ui-sticky">
        <div className="ui segment">
          <h2>Your shopping cart</h2>
          {this.getCart()}
        </div>
      </div>
    );
  }
}
/*     // if there is something in their cart
    if (1 === 2) {
      return <p>something in your cart</p>;
    }
    // if cart is empty
    else {
      return (
        <h4 className="ui horizontal divider header">
          Please select which images you would like to order
        </h4>
      );
    } */

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(CartView);
