import React from "react";
import PropTypes from "prop-types";

import "./actorInfo.scss";

const ActorInfo = (props) => {
  const {
    biography,
    profile_path,
    birthday,
    deathday,
    place_of_birth,
    homepage,
  } = props;
  return (
    <div className="actor-info">
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        alt="actor"
        className="actor-info__image"
      />
      <div className="actor-info__description">
        {birthday && (
          <p>
            <span className="actor-info__description-tagline">
              Birth date:{" "}
            </span>
            <span>{birthday}</span>
          </p>
        )}
        {deathday !== null && (
          <p>
            <span className="actor-info__description-tagline">Death date:</span>{" "}
            <span>{deathday}</span>
          </p>
        )}
        {place_of_birth && (
          <p>
            <span className="actor-info__description-tagline">Born in:</span>{" "}
            <span>{place_of_birth}</span>
          </p>
        )}
        <p className="actor-info__biography">{biography}</p>
        {homepage && (
          <a href={homepage} className="actor-info__link">
            Visit actor's homepage
          </a>
        )}
      </div>
    </div>
  );
};

ActorInfo.propTypes = {
  biography: PropTypes.string,
  profile_path: PropTypes.string,
  birthday: PropTypes.string,
  deathday: PropTypes.string,
  place_of_birth: PropTypes.string,
  homepage: PropTypes.string,
};

export default ActorInfo;
