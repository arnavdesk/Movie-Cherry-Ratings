import React from "react";
import MovieCard from "./MovieCard";
import { data } from "../data";

class Body extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // Make an API call and get data
    // Dispatch action
    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log("state", store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="body">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={"movie-" + index} />;
        })}
      </div>
    );
  }
}

export default Body;
