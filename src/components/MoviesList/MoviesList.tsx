import React from "react";

import { Movie } from "../../types";
import styles from "./MoviesList.module.css";
import MovieItem from "../MovieItem/MovieItem";

function MoviesList({
  movies,
  isLoading,
  error,
  onItemClicked,
}: {
  movies: Movie[];
  isLoading: boolean;
  error: string;
  onItemClicked: (movie: Movie) => void;
}) {
  const moviesList = [...movies];

  return (
    <div className={styles.moviesList}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && (
        <ul className={styles.moviesList__list}>
          {moviesList.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
              onItemClicked={onItemClicked}
            />
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default MoviesList;
