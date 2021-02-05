import React from "react";
import { Link } from "react-router-dom";

import { useFetch } from "../../utils/hooks/useFetch";

import "./genres.scss";

const Genres = () => {
  const { response } = useFetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US",
    "genres"
  );

  return (
    <ul className="genres-list">
      {response?.genres
        ? response.genres.map((genre) => (
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
