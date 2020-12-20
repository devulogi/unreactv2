import React, { Component } from "react";
import ReactDom from "react-dom";
import unsplash from "./api/unsplash";

import SeachBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SeachBar onUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
