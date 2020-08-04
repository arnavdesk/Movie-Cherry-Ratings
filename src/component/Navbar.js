import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img
          className="logo"
          src="https://image.flaticon.com/icons/svg/3039/3039530.svg"
          alt="Logo"
        ></img>
        <div className="app-name">MovieCherry</div>
        <div className="tabs">
          <button className="nav-button">Home</button>
          <button className="nav-button">Favourite</button>
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
