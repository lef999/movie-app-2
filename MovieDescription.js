import { useParams, Link } from "react-router-dom";
import movies from "../Movie.js";
import React from "react";

function MovieDescription() {
  const { id } = useParams(); 
  const movie = movies.find((m) => m.id === parseInt(id)); // Find the movie

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div className="movie-description">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">🔙 Back to Home</Link>
    </div>
  );
}

export default MovieDescription;
