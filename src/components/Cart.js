import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="ui container space">
      <Link to="/checkout">
        <button class="ui right floated huge button">
          <i class="cart icon"></i>Checkout
        </button>
      </Link>
      <h2 class="ui huge header">Your cart</h2>
      <p>Your cart is empty please select photos to order</p>

      <table class="ui unstackable celled table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Description</th>
            <th>Digital Copy</th>
            <th>Printed Copy</th>
          </tr>
        </thead>
        <tbody>
          <CartItem photo="img" description="dljfnajiwefnaf"></CartItem>
          <CartItem
            photo="img"
            description="dljfnajiwefafmlkermfkremgnaf"
          ></CartItem>
          <CartItem
            photo="img"
            description="dljfnajiwfoawejfoknflsdklmefnaf"
          ></CartItem>
        </tbody>
      </table>

      <p>Total: $100</p>
    </div>
  );
};

export default Cart;
