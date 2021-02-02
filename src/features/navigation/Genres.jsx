import React from "react";
import { Link } from "react-router-dom";

import { GetGenres } from "../../utils/getters/GetGenres";

import "./genres.scss";

const Genres = () => {
  const genres = GetGenres();
  return (
    <ul className="genres-list">
      {genres !== ""
        ? genres.genres.map((genre) => (
            <li key={genre.id} className="genres-list__genre">
              <Link
                to={`/popular_by_genre/${genre.id}/${genre.name}`}
                className="genres-list__link"
              >
                {genre.name}
              </Link>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Genres;
