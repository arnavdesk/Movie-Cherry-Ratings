import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { data } from "../data";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // Make an API call and get data
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body store={this.props.store} />
      </div>
    );
  }
}

export default App;
