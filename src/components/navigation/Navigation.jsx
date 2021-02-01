import React from "react";
import { Link } from "react-router-dom";

import Genres from "./Genres.jsx";
import SearchLine from "../search/SearchLine.jsx";

import Dropdown from "../dropdown/Dropdown";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Dropdown text={"Popular by Genres"}>
        <Genres />
      </Dropdown>
      <Dropdown text={"The Most popular"}>
        <Link to="popular_all_times">
          <li>of all time</li>
        </Link>
        <Link to="popular_by_year">
          <li>of selected year</li>
        </Link>
      </Dropdown>

      <SearchLine />
    </nav>
  );
};

export default Navigation;
