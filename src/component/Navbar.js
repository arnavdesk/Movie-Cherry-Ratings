import React from "react";
import { setShowFavourites } from "../actions";

class Navbar extends React.Component {
  changeTab = (value) => {
    this.props.store.dispatch(setShowFavourites(value));
  };

  render() {
    const { showFavourites } = this.props.store.getState();
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
        <div className="search-container" id="search-container">
          <input
            placeholder="Search Movies"
            className="input-bar"
            type="text"
            id="input-bar"
          ></input>
          <button className="search-button" id="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
