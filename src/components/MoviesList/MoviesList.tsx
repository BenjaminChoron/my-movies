import React from "react";

import { Movie } from "../../types";
import styles from "./MoviesList.module.css";
import MovieItem from "../MovieItem/MovieItem";

function MoviesList({
  movies,
  isLoading,
  error,
}: {
  movies: Movie[];
  isLoading: boolean;
  error: string;
}) {
  const moviesList = [...movies];

  return (
    <div className={styles.moviesList}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && (
        <ul className={styles.moviesList__list}>
          {moviesList.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default MoviesList;
