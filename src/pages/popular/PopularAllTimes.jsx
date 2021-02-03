import React from "react";

import PopularMovies from "../../features/popular-movies/PopularMovies";

const PopularAllTimes = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=50&page=";
  return (
    <main className="popular-movies">
      <PopularMovies url={url} text={"The most popular movies of all times:"} />
    </main>
  );
};

export default PopularAllTimes;
