import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { data } from "../data";
import { addMovies, setShowSearch } from "../actions";

class App extends React.Component {
  constructor() {
    super();
    this.searchContainerRef = React.createRef();
  }
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

  handleOutSideClick = (e) => {
    const { store } = this.props;
    if (
      this.searchContainerRef.current &&
      this.searchContainerRef.current.contains(e.target)
    ) {
      return;
    }
    store.dispatch(setShowSearch(false));
  };

  render() {
    const { store } = this.props;
    return (
      <div ref={this.appRef} onClick={this.handleOutSideClick} className="App">
        <Navbar store={store} searchContainerRef={this.searchContainerRef} />
        <Body store={store} />
      </div>
    );
  }
}

export default App;
