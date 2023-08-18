import React from "react";

import { Movie } from "../../types";
import styles from "./MovieItem.module.css";

function MovieItem({
  movie,
  onItemClicked,
}: {
  movie: Movie;
  onItemClicked: (movie: Movie) => void;
}) {
  const handleItemClick = (movieToSearch: Movie) => {
    onItemClicked(movieToSearch);
  };
  return (
    <li className={styles.movieItem}>
      <img
        className={styles.movieItem__img}
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className={styles.movieItem__infos}>
        <h3 className={styles.movieItem__title}>{movie.Title}</h3>
        <span className={styles.movieItem__year}>{movie.Year}</span>
        <button
          className={styles.movieItem__button}
          type="button"
          onClick={() => handleItemClick(movie)}
        >
          Details &rarr;
        </button>
      </div>
    </li>
  );
}

export default MovieItem;
