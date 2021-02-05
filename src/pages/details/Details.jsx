import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useFetch } from "../../utils/hooks/useFetch";

import ImageSection from "../../features/movie/image-section/ImageSection";
import MovieDescription from "../../features/movie/movie-description/MovieDescription";
import Crew from "../../features/crew/Crew.jsx";
import Cast from "../../features/cast/Cast.jsx";
import ProductionCompanies from "../../features/movie/production-companies/ProductionCompanies";

import "swiper/css/swiper.css";
import "./details.scss";

const Details = (props) => {
  const [data, setData] = useState([]);

  const {
    title,
    backdrop_path,
    overview,
    genres,
    budget,
    revenue,
    release_date,
    runtime,
    homepage,
    production_companies,
    original_language,
    tagline,
    id,
    production_countries,
  } = props.details;

  const { response: people } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f1782698a1c04f301973e311a7876bdb`,
    "people"
  );

  useEffect(() => {
    setData(people);
  }, [id, people]);

  return (
    <div className="details">
      <h2 className="details__title">
        {title}{" "}
        <span className="details__year">({release_date.substring(0, 4)})</span>
      </h2>

      <div className="details__image">
        <ImageSection
          genres={genres}
          release_date={release_date}
          runtime={runtime}
          original_language={original_language}
          backdrop_path={backdrop_path}
        />
      </div>

      <div className="details__description">
        <MovieDescription
          tagline={tagline}
          overview={overview}
          budget={budget}
          revenue={revenue}
          homepage={homepage}
        />
      </div>

      {data.length !== 0 && (
        <div className="details__cast">
          <Cast cast={data.cast} />
        </div>
      )}

      {data.length !== 0 && (
        <div className="details__crew">
          <Crew crew={data.crew} countries={production_countries} />
        </div>
      )}

      {production_companies && (
        <ul className="details__companies">
          <ProductionCompanies production_companies={production_companies} />
        </ul>
      )}
    </div>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  backdrop_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  budget: PropTypes.string,
  revenue: PropTypes.string,
  release_date: PropTypes.string,
  runtime: PropTypes.string,
  homepage: PropTypes.string,
  production_companies: PropTypes.array,
  original_language: PropTypes.string,
  tagline: PropTypes.string,
  id: PropTypes.string,
  production_countries: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Details;
