import React from "react";

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

export default CastItem;
