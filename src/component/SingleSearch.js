import React, { Component } from "react";
import notfound from "../assets/notfound.jpg";
class SingleSearch extends Component {
  render() {
    const { movie } = this.props;
    if (movie.Poster === "N/A" || movie.Poster === undefined) {
      movie.Poster = notfound;
    }
    return (
      <div>
        <div className="single-result">
          <div className="movie-poster">
            <img alt="img" src={movie.Poster}></img>
          </div>
          <div className="movie-details">
            <div className="movie-name movie-text">{movie.Title}</div>
            <div className="movie-release movie-text">{movie.Year}</div>
            <div className="movie-case movie-text">{movie.Actors}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleSearch;
