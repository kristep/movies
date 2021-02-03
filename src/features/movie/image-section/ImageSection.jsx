import React from "react";
import PropTypes from "prop-types";

import "./imageSection.scss";

const ImageSection = (props) => {
  const {
    genres,
    release_date,
    runtime,
    original_language,
    backdrop_path,
  } = props;

  const genresList = genres
    ? genres.map((genre) => (
        <li key={genre.id} className="image-section__genres-item">
          {genre.name}
        </li>
      ))
    : "";

  return (
    <div className="image-section">
      <div className="image-section__info">
        <ul className="image-section__genres">{genresList}</ul>
        <span>release date: {release_date}</span>
        <span>
          {runtime > 0 ? runtime + "min." : ""} ({original_language})
        </span>
      </div>

      {backdrop_path ? (
        <img
          className="image-section__image"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt="backdrop"
        />
      ) : (
        ""
      )}
    </div>
  );
};

ImageSection.propTypes = {
  genres: PropTypes.array,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  original_language: PropTypes.string,
  backdrop_path: PropTypes.string,
};

export default ImageSection;
