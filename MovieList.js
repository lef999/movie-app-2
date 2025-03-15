import movies from "../Movie.js";
import MovieCard from "./MovieCard";
import React from "react";

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
