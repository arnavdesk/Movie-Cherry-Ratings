import React from "react";
import MovieCard from "./MovieCard";
import { data } from "../data";

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        {data.map((movie) => {
          return <MovieCard movie={movie} key={movie.Title} />;
        })}
      </div>
    );
  }
}

export default Body;
