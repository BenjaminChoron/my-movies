import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

import { Movie } from "./types";

function App() {
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [movies, setMovies] = React.useState<Movie[]>([]);

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

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <main>
        <MoviesList movies={movies} isLoading={isLoading} error={error} />
      </main>
    </div>
  );
}

export default App;
