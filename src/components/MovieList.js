import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  console.log(movies);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
