import React from "react";
import { addFavourites, removeFavourites } from "../actions";

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie, store } = this.props;
    store.dispatch(addFavourites(movie));
    console.log(store.getState());
  };

  handleUnFavouriteClick = () => {
    const { movie, store } = this.props;
    store.dispatch(removeFavourites(movie));
    console.log(store.getState());
  };

  isMovieFavourite = (movie) => {
    const { store } = this.props;
    const { favourites } = store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      // Movie found
      return true;
    } else {
      // Movie Not Found
      return false;
    }
  };
  render() {
    const { movie } = this.props;
    return (
      <div className="card-layout">
        <div className="card-img-container">
          <img className="card-img" src={movie.Poster} alt=""></img>
        </div>
        <div className="card-body">
          <div className="card-name">{movie.Title}</div>
          {!this.isMovieFavourite(movie) ? (
            <div className="starred" onClick={this.handleFavouriteClick}>
              <i className="far fa-heart"></i>
            </div>
          ) : (
            <div className="starred" onClick={this.handleUnFavouriteClick}>
              <i style={{ color: "red" }} className="fas fa-heart"></i>
            </div>
          )}
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
