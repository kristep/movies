import React from "react";
import { Link } from "react-router-dom";

import "./movieCard.scss";

const MovieCard = (props) => {
  const {
    title,
    id,
    vote_average,
    vote_count,
    poster_path,
    release_date,
  } = props.movie;
  return (
    <>
      <Link to={`/${id}`} className="movie-card">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt="movie poster"
            className="movie-card__image"
          />
        ) : (
          <img className="movie-card__image" alt="this movie has no poster" />
        )}

        <div className="movie-card__description">
          <h3 className="movie-card__title">{title}</h3>
          {vote_average > 0 ? (
            <p className="movie-card__votes">
              {vote_average} points ({vote_count} votes)
            </p>
          ) : (
            <p className="movie-card__votes">-- no votes yet --</p>
          )}

          <span className="movie-card__released">{release_date}</span>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
