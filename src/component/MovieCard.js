import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);

    return (
      <div className="card-layout">
        <div className="card-img-container">
          <img className="card-img" src={movie.Poster} alt=""></img>
        </div>
        <div className="card-info">
          <p>{movie.Plot}</p>
        </div>
        <div className="card-body">
          <div className="card-name">{movie.Title}</div>
          <div className="starred">
            <i className="far fa-heart"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
