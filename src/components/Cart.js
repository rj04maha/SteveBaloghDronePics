import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import { addToCart, removeFromCart } from "../actions";
import CartItem from "./CartItem";

class Cart extends React.Component {
  render() {
    return (
      <div className="ui container space">
        <Link to="/checkout">
          <button className="ui right floated huge button">
            <i className="cart icon"></i>Checkout
          </button>
        </Link>
        <h2 className="ui huge header">Your cart</h2>
        <p>Your cart is empty please select photos to order</p>

        <table className="ui unstackable celled table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Description</th>
              <th>Digital Copy</th>
              <th>Printed Copy</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(image => (
              <CartItem photo={image.photo.urls.regular}></CartItem>
            ))}
          </tbody>
        </table>

        <p>Total: $100</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Cart);
