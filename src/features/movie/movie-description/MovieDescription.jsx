import React from "react";
import PropTypes from "prop-types";

import "./movieDescription.scss";

const MovieDescription = (props) => {
  const { tagline, overview, budget, revenue, homepage } = props;
  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(budget);
  return (
    <div className="movie-description">
      <div>
        <p className="movie-description__tagline">{tagline}</p>
        <p className="movie-description__overview">{overview}</p>
      </div>
      <div>
        {budget > 0 && (
          <div className="movie-description__budget">
            <p className="movie-description__budget-row">
              <span>Budget:</span>
              <span>{formatCurrency.format(budget)}</span>
            </p>
            <p className="movie-description__budget-row">
              <span>Revenue:</span>
              <span>{formatCurrency.format(revenue)}</span>
            </p>
          </div>
        )}

        {homepage && (
          <a
            className="movie-description__link"
            href={`${homepage}`}
            alt="homepage"
          >
            Visit movie homepage
          </a>
        )}
      </div>
    </div>
  );
};

export default MovieDescription;
