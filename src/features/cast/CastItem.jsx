import React from "react";
import PropTypes from "prop-types";

import "./castItem.scss";

const CastItem = ({ actor }) => {
  return (
    <li className="cast-item">
      <div className="cast-item__image-wrapper">
        <img
          className="cast-item__image"
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          alt="actor"
        />
      </div>

      {actor.character && (
        <span className="cast-item__character">{actor.character}</span>
      )}
      <span className="cast-item__name">{actor.name}</span>
    </li>
  );
};

CastItem.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    characterh: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default CastItem;
