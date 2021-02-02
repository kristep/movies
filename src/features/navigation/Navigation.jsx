import React from "react";
import { Link } from "react-router-dom";

import Genres from "./Genres.jsx";
import SearchLine from "../search/SearchLine.jsx";

import Dropdown from "../dropdown/Dropdown";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Dropdown text={"Popular by Genres"}>
            <Genres />
          </Dropdown>
        </li>
        <li className="navigation__list-item">
          <Link to="popular_all_times" className="navigation__link">
            The most popular
          </Link>
        </li>
      </ul>

      <SearchLine />
    </nav>
  );
};

export default Navigation;
