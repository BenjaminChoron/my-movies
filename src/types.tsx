export interface MovieItem {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  staring: string[];
  rating: number;
  genres: string[];
  year: number;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
