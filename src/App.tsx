import React from "react";

import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

import { Movie } from "./types";

function App() {
  const movies: Movie[] = [
    {
      id: 1,
      title: "School of Rock",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BOTg2NDU4Mjg2NV5BMl5BanBnXkFtZTgwNjQ0MDIyMDI@._V1_QL75_UY148_CR1,0,100,148_.jpg",
      description:
        "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band.",
      staring: ["Jack Black", "Mike White", "Joan Cusack"],
      rating: 7.1,
      genres: ["Comedy", "Music"],
      year: 2003,
    },
    {
      id: 2,
      title: "Mr. Nobody",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
      description:
        "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.",
      staring: ["Jared Leto", "Sarah Polley", "Diane Kruger"],
      rating: 7.8,
      genres: ["Drama", "Fantasy", "Romance"],
      year: 2009,
    },
    {
      id: 3,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX100_CR0,0,100,148_.jpg",
      description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      staring: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      rating: 8.8,
      genres: ["Action", "Adventure", "Drama"],
      year: 2001,
    },
    {
      id: 4,
      title: "The Lord of the Rings: The Two Towers",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX100_CR0,4,100,148_.jpg",
      description:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      staring: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      rating: 8.7,
      genres: ["Action", "Adventure", "Drama"],
      year: 2002,
    },
    {
      id: 5,
      title: "The Lord of the Rings: The Return of the King",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,0,100,148_.jpg",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      staring: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      rating: 8.9,
      genres: ["Action", "Adventure", "Drama"],
      year: 2003,
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <MoviesList movies={movies} />
      </main>
    </div>
  );
}

export default App;
