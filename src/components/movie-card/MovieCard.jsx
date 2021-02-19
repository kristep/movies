import React, { useEffect } from "react";
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
  const { movieRefs, cardToFocus } = props;

  useEffect(() => {
    if (cardToFocus && movieRefs) {
      const filtered = movieRefs.current.filter((item) =>
        item?.href?.includes(cardToFocus.toString())
      );
      filtered[0].focus();
    }
  }, [movieRefs, cardToFocus]);

  return (
    <Link
      to={`/${id}`}
      className="movie-card"
      ref={(element) => movieRefs?.current?.push(element)}
    >
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt="movie poster"
          className="movie-card__image"
        />
      ) : (
        <div className="movie-card__image"></div>
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

        <span className="movie-card__released">
          <span className="visually-hidden">Release date:</span> {release_date}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
