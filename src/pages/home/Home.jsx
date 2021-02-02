import React from "react";

import { getTodayDate, getWeekAgoDate } from "../../utils/dates";
import Button from "../../components/Button";
import NewMovies from "./NewMovies";

import "../searchResults/results.css";
import "./home.scss";

const Home = () => {
  const newMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=${getWeekAgoDate()}&primary_release_date.lte=${getTodayDate()}&sort_by=release_date.desc&page=`;

  const upcommingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=${getTodayDate()}&page=`;

  const showAll = (event) => {
    event.target.previousSibling.classList.remove("new-movies_home");
    event.target.style.display = "none";
  };

  return (
    <div className="home">
      <div className="new-movies_container">
        <div className="new-movies-content new-movies_home">
          <NewMovies url={newMoviesUrl} text={"Just released movies:"} />
        </div>
        <Button
          onClick={(event) => showAll(event)}
          text={"show all"}
          className={"btn show_all"}
        />
      </div>

      <div className="new-movies_container upcomming-container">
        <div className="new-movies_content new-movies_home">
          <NewMovies url={upcommingMoviesUrl} text={"Upcomming movies:"} />
        </div>
        <Button
          onClick={(event) => showAll(event)}
          text={"show all"}
          className={"btn show_all"}
        />
      </div>
    </div>
  );
};

export default Home;
