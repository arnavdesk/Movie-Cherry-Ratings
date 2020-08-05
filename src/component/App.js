import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { data } from "../data";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // Make an API call and get data
    // Dispatch action
    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("state", store.getState());
  }
  render() {
    return (
      <div className="App">
        <Navbar store={this.props.store} />
        <Body store={this.props.store} />
      </div>
    );
  }
}

export default App;
