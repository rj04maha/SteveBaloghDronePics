import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import Header from "./Header";
//import Spinner from "./Spinner";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={ImageGrid} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
  /* state = { images: [], loading: true, selectedImages: [] };

  async componentDidMount() {
    const response = await upsplash.get("/search/photos", {
      params: { query: "cats", per_page: "30" }
    });

    this.setState({ images: response.data.results });
    this.setState({ loading: false });
  }

  render() {
    if (!this.state.loading) {
      return (
        <div>
          <Header></Header>
          <ImageGrid images={this.state.images} />
        </div>
      );
    }
    return <Spinner></Spinner>;
  } */
}

export default App;
