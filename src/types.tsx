export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Genre: string;
  Plot: string;
  Actors: string;
  Director: string;
  Runtime: string;
  Awards: string;
  Writer: string;
  Country: string;
  BoxOffice: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
}
