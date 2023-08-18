import React from "react";

import styles from "./MovieDetails.module.css";
import { Movie } from "../../types";

function MovieDetails({
  movieDetails,
  isLoadingDetails,
}: {
  movieDetails: Movie | null;
  isLoadingDetails: boolean;
}) {
  const handleMovieRatingSource = (source: string) => {
    switch (source) {
      case "Internet Movie Database":
        return "IMDb";
      case "Rotten Tomatoes":
        return "RT";
      case "Metacritic":
        return "MC";
      default:
        return source;
    }
  };

  return (
    <div className={styles.movieDetails}>
      {isLoadingDetails && <span>Loading...</span>}
      {!isLoadingDetails && !movieDetails && <span>No movie selected</span>}
      {!isLoadingDetails && movieDetails && (
        <div className={styles.movieDetails__box}>
          <img
            className={styles.movieDetails__img}
            src={movieDetails?.Poster}
            alt={movieDetails?.Title}
          />

          <div className={styles.movieDetails__infos}>
            <h3 className={styles.movieDetails__title}>
              {movieDetails?.Title}
            </h3>

            <div className={styles.movieDetails__group}>
              <span className={styles.movieDetails__released}>
                {movieDetails?.Released}
              </span>

              <span className={styles.movieDetails__runtime}>
                {movieDetails?.Runtime}
              </span>
            </div>

            <span className={styles.movieDetails__genre}>
              {movieDetails?.Genre}
            </span>

            <span className={styles.movieDetails__plot}>
              {movieDetails?.Plot}
            </span>

            <span className={styles.movieDetails__actors}>
              👥 {movieDetails?.Actors}
            </span>

            <span className={styles.movieDetails__director}>
              🎬 {movieDetails?.Director}
            </span>

            <span className={styles.movieDetails__writer}>
              ✍️ {movieDetails?.Writer}
            </span>

            <span className={styles.movieDetails__country}>
              🌎 {movieDetails?.Country}
            </span>

            <span className={styles.movieDetails__boxOffice}>
              💰 {movieDetails?.BoxOffice}
            </span>

            <span className={styles.movieDetails__awards}>
              🏆 {movieDetails?.Awards}
            </span>

            <span className={styles.movieDetails__ratings}>
              {movieDetails?.Ratings.map((rating) => (
                <span key={rating.Source}>
                  {handleMovieRatingSource(rating.Source)}: {rating.Value}
                </span>
              ))}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
