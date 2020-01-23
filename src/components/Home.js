import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero-image">
        <img
          className="ui fluid image"
          src="/images/wedding2.png"
          alt="Erika and Joe Wedding"
        ></img>
        <div className="centered">
          <div className="big">Check out Steve Balogh's Drone Photos</div>
          <Link to="/photos">
            <button className="ui inverted button">
              Check them out here<i class="right chevron icon"></i>
            </button>
          </Link>
          <p className="small">
            All proceeds go towards funding events and trips for students at
            Mount Pleasant Middle School
          </p>
        </div>
      </div>
      <h4 className="ui horizontal divider header">
        Find more information about this
      </h4>
      <div className="ui container">
        <div class="ui three stackable cards">
          <div class="card">
            <div class="content">
              <div class="header">How it works</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <Link to="/photos">
              <div class="ui bottom attached button">
                <i class="image icon"></i>
                Look through images
              </div>
            </Link>
          </div>
          <div class="card">
            <div class="content">
              <div class="header">Why I am raising money</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <Link to="/about">
              <div class="ui bottom attached button">
                <i class="info circle icon"></i>
                Learn more
              </div>
            </Link>
          </div>
          <div class="card">
            <div class="content">
              <div class="header">If you want to get in touch</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <Link to="/contact">
              <div class="ui bottom attached button">
                <i class="envelope icon"></i>
                Contact me
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
