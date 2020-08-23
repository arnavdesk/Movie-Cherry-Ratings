import React from "react";
import {
  setShowFavourites,
  handleMovieSearch,
  setShowSearch,
} from "../actions";
import SingleSearch from "./SingleSearch";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.searchDivRef = React.createRef();
  }

  changeTab = (value) => {
    this.props.store.dispatch(setShowFavourites(value));
  };

  handleChange = (e) => {
    this.setState({ searchText: e.target.value }, () => {
      const { searchText } = this.state;
      console.log(searchText);
      const { store } = this.props;
      store.dispatch(handleMovieSearch(searchText));
    });
  };

  showResult = () => {
    const { store } = this.props;
    store.dispatch(setShowSearch(true));
  };

  render() {
    const { searchContainerRef } = this.props;
    const { showFavourites } = this.props.store.getState().movies;
    const { result, showSearchResults } = this.props.store.getState().search;
    const bgCF = showFavourites
      ? { backgroundColor: "rgb(28, 88, 152)" }
      : { backgroundColor: "rgb(28, 30, 33)" };
    const bgCH = !showFavourites
      ? { backgroundColor: "rgb(28, 88, 152)" }
      : { backgroundColor: "rgb(28, 30, 33)" };
    return (
      <div className="navbar">
        <img
          className="logo"
          src="https://image.flaticon.com/icons/svg/3039/3039530.svg"
          alt="Logo"
        ></img>
        <div className="app-name">MovieCherry</div>
        <div className="tabs">
          <button
            style={bgCH}
            className="nav-button"
            onClick={() => this.changeTab(false)}
          >
            Home
          </button>
          <button
            style={bgCF}
            className="nav-button"
            onClick={() => this.changeTab(true)}
          >
            Favourite
          </button>
        </div>
        <div
          ref={searchContainerRef}
          className="search-container"
          id="search-container"
        >
          <input
            placeholder="Search Movies"
            className="input-bar"
            type="text"
            id="input-bar"
            onFocus={this.showResult}
            onChange={this.handleChange}
          ></input>
          <button className="search-button" id="search-button">
            <i className="fas fa-search"></i>
          </button>
          {showSearchResults && (
            <div className="search-results">
              {result.map((movie) => {
                return <SingleSearch movie={movie} />;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
