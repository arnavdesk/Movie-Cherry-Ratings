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
        <div className="card-body">
          <div className="card-name">{movie.Title}</div>
          <div className="starred">
            <i className="far fa-heart"></i>
          </div>
        </div>
        <div className="card-info">
          <p>{movie.Plot}</p>
        </div>
        <div className="card-extra">
          <img
            className="rating"
            src="https://image.flaticon.com/icons/svg/2909/2909822.svg"
            alt="Cherries"
          ></img>
          {movie.Ratings[0].Value}
        </div>
      </div>
    );
  }
}

export default MovieCard;
