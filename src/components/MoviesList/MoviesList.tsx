import React from "react";

import { Movie } from "../../types";
import styles from "./MoviesList.module.css";
import MovieItem from "../MovieItem/MovieItem";

function MoviesList({ movies }: { movies: Movie[] }) {
  const moviesList = [...movies];

  return (
    <div className={styles.moviesList}>
      <ul className={styles.moviesList__list}>
        {moviesList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
