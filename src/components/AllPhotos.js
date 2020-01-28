import React from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../actions";
import ImageGrid from "./ImageGrid";
import CartView from "./CartView";

class AllPhotos extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div className="space">
        <CartView />
        <ImageGrid />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { photos: state.photos };
};

export default connect(mapStateToProps, { fetchPhotos })(AllPhotos);
