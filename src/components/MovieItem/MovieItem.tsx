import React from "react";

import { Movie } from "../../types";
import styles from "./MovieItem.module.css";

function MovieItem({ movie }: { movie: Movie }) {
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
      </div>
    </li>
  );
}

export default MovieItem;
