import React from "react";
import UnselectedStar from "./UnselectedStar";
import SelectedStar from "./SelectedStar";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  state = {
    inCart: this.props.inCart
  };

  addToCart = e => {
    e.preventDefault();

    this.props.addToCart(this.props.image);

    this.setState({
      inCart: true
    });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans });
  };

  checkIfInCart() {
    // if in cart, display selected star (hover or not hovered)

    // if not in cart and hovered, display unselected star

    // if in cart, and clicks on button, slow unselected star

    // if not in cart, clicks on button,
    return <UnselectedStar />;
    // if not in cart and not hovered, display nothing
  }

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
            {this.state.inCart ? (
              <button className="icon-button">
                <UnselectedStar />
              </button>
            ) : (
              <button className="icon-button-cart" onClick={this.addToCart}>
                <SelectedStar />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ImageCard;
