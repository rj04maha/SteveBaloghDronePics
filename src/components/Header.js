import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="d-flex flex-grow-1">
          <span class="w-100 d-lg-none d-block"></span>

          <Link class="navbar-brand d-none d-lg-inline-block" to="/">
            <img
              className="ui large image"
              src="/images/logo.png"
              alt="Drone Photography by Steve Balogh"
            ></img>
          </Link>

          <Link
            class="navbar-brand-two mx-auto d-lg-none d-inline-block"
            to="/"
          >
            <img
              className="ui massive image"
              src="/images/logo.png"
              alt="Drone Photography by Steve Balogh"
            ></img>
          </Link>

          <div class="w-100 text-right">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div
          class="collapse navbar-collapse flex-grow-1 text-right"
          id="myNavbar"
        >
          <ul class="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
              <Link to="/photos" className="nav-link">
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <i className="cart large icon"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

/*
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="ui container">
          <div className="navbar-brand">
            <Link to="/">
              <img
                className="ui medium image"
                src="/images/logo.png"
                alt="Drone Photography by Steve Balogh"
              ></img>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="w-100 text-right">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/photos" className="nav-link">
                    Photos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    <i className="cart large icon"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
*/
