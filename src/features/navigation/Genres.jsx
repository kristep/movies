import React from "react";
import { Link } from "react-router-dom";

import { GetGenres } from "../../utils/getters/GetGenres";

import "./genres.scss";

const Genres = () => {
  const genres = GetGenres();
  return (
    <>
      {genres !== ""
        ? genres.genres.map((genre) => (
            <li key={genre.id} className="genre">
              <Link
                to={`/popular_by_genre/${genre.id}/${genre.name}`}
                className="genre__link"
              >
                {genre.name}
              </Link>
            </li>
          ))
        : null}
    </>
  );
};

export default Genres;
