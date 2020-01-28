import React from "react";

class ImageCardCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="" src={this.props.photo.urls.regular} />
      </div>
    );
  }
}

export default ImageCardCart;
