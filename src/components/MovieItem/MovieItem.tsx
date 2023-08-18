import React from "react";

import { Movie } from "../../types";
import styles from "./MovieItem.module.css";

function MovieItem({ movie }: { movie: Movie }) {
  return (
    <li key={movie.id} className={styles.movieItem}>
      <img
        className={styles.movieItem__img}
        src={movie.imgUrl}
        alt={movie.title}
      />
      <div className={styles.movieItem__infos}>
        <div className={styles.movieItem__group}>
          <h3 className={styles.movieItem__title}>{movie.title}</h3>
          <span className={styles.movieItem__year}>{movie.year}</span>
        </div>

        <div className={styles.movieItem__group}>
          <span className={styles.movieItem__genres}>
            {movie.genres.join(", ")}
          </span>
          <span className={styles.movieItem__rating}>{movie.rating} ⭐️</span>
        </div>
        <p className={styles.movieItem__staring}>{movie.staring.join(", ")}</p>
        <p className={styles.movieItem__description}>{movie.description}</p>
      </div>
    </li>
  );
}

export default MovieItem;
