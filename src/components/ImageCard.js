import React from "react";
import { connect } from "react-redux";
import UnselectedStar from "./UnselectedStar";
import SelectedStar from "./SelectedStar";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  inCart =
    this.props.cart.length > 0 &&
    this.props.cart.filter(e => e.photo.id === this.props.image.id).length > 0;

  addToCart = e => {
    e.preventDefault();

    this.props.addToCart(this.props.image);

    this.inCart = true;
  };

  removeFromCart = e => {
    e.preventDefault();

    this.props.removeFromCart(this.props.image);

    this.inCart = false;
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans });
  };

  render() {
    const { description, urls, id } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <div className="card">
          <img
            alt={description}
            src={urls.regular}
            ref={this.imageRef}
            key={id}
          />
          <div className="edit">
            {this.inCart ? (
              <button
                className="icon-button-cart"
                onClick={this.removeFromCart}
              >
                <SelectedStar />
              </button>
            ) : (
              <button className="icon-button" onClick={this.addToCart}>
                <UnselectedStar />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(ImageCard);
