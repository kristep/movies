import React from "react";

import { getTodayDate, getWeekAgoDate } from "../../utils/dates";
import NewMovies from "../../features/new-movies/NewMovies";

import "./home.scss";

const Home = () => {
  const newMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=${getWeekAgoDate()}&primary_release_date.lte=${getTodayDate()}&sort_by=release_date.desc&page=`;

  const upcommingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=${getTodayDate()}&page=`;

  return (
    <div className="home">
      <article>
        <NewMovies url={newMoviesUrl} text={"Just released movies:"} />
      </article>

      <article className="home__section home__section--with-background">
        <NewMovies url={upcommingMoviesUrl} text={"Upcomming movies:"} />
      </article>
    </div>
  );
};

export default Home;
