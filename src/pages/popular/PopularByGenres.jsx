import React from "react";
import { useParams } from "react-router-dom";

import PopularMovies from "../../features/popular-movies/PopularMovies";

const PopularByGenres = () => {
  const { genreId, genreName } = useParams();

  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=10&page=`;

  return (
    <main className="popular-movies">
      <PopularMovies url={url} text={`The most popular ${genreName} movies:`} />
    </main>
  );
};

export default PopularByGenres;
