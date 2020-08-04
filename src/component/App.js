import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";

class App extends React.Component {
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
