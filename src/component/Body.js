import React from "react";
import MovieCard from "./MovieCard";

class Body extends React.Component {
  render() {
    const { movies } = this.props.store.getState();
    const displayMoviesList = movies.showFavourites
      ? movies.favourites
      : movies.movies;
    const { store } = this.props;
    return (
      <div className="body">
        {displayMoviesList.map((movie, index) => {
          return (
            <MovieCard movie={movie} key={"movie-" + index} store={store} />
          );
        })}
        {displayMoviesList.length === 0 && <div>No Favourites To Show</div>}
      </div>
    );
  }
}

export default Body;
