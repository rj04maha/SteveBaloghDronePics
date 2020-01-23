import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="head">
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <div className="ui container">
            <div className="item">
              <Link to="/">
                <img
                  className="ui medium image"
                  src="/images/whitelogo.png"
                  alt="Drone Photography by Steve Balogh"
                ></img>
              </Link>
            </div>
            <div className="right menu">
              <Link to="/photos" className="menu-link item">
                Photos
              </Link>
              <Link to="/about" className="menu-link item">
                About
              </Link>
              <Link to="/contact" className="menu-link item">
                Contact
              </Link>
              <Link to="/cart" className="menu-link item">
                <i class="cart large icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
