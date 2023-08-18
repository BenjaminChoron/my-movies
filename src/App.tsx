import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

import { Movie } from "./types";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = React.useState(false);
  const [error, setError] = React.useState("");
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [movieDetails, setMovieDetails] = React.useState<Movie | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      const controller = new AbortController();

      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `${process.env.REACT_APP_OMDB_API_URL}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}&type=movie`,
          { signal: controller.signal },
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  const handleItemClick = (movie: Movie) => {
    async function fetchMovieDetails() {
      const controller = new AbortController();

      try {
        setIsLoadingDetails(true);
        setError("");

        const res = await fetch(
          `${process.env.REACT_APP_OMDB_API_URL}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movie?.imdbID}&t=${movie?.Title}`,
          { signal: controller.signal },
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movie details");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovieDetails(data);
        setError("");
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoadingDetails(false);
        controller.abort();
      }
    }

    fetchMovieDetails();
  };

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <main>
        <MoviesList
          movies={movies}
          isLoading={isLoading}
          error={error}
          onItemClicked={handleItemClick}
        />
        <MovieDetails
          movieDetails={movieDetails}
          isLoadingDetails={isLoadingDetails}
        />
      </main>
    </div>
  );
}

export default App;
