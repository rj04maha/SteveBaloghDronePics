import React from "react";
import UnselectedStar from "./UnselectedStar";
//import SelectedStar from "./SelectedStar";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

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
          <img alt={description} src={urls.regular} ref={this.imageRef} />
          <div className="edit">
            <button
              className="icon-button"
              onClick={() => console.log(`${id} pic has been selected`)}
            >
              <UnselectedStar />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
