import React from "react";

import { useFetch } from "../../utils/hooks/useFetch";

import ImageSection from "../../features/movie/image-section/ImageSection";
import MovieDescription from "../../features/movie/movie-description/MovieDescription";
import Crew from "../../features/crew/Crew.jsx";
import Cast from "../../features/cast/Cast.jsx";
import ProductionCompanies from "../../features/movie/production-companies/ProductionCompanies";

import "swiper/css/swiper.css";
import "./details.scss";

const Details = (props) => {
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

  const data = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f1782698a1c04f301973e311a7876bdb`,
    "people"
  );

  const people = data.response;
  console.log(budget);
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

      {people !== null && (
        <div className="details__cast">
          <Cast cast={people.cast} />
        </div>
      )}
      {people !== null && (
        <div className="details__crew">
          <Crew crew={people.crew} countries={production_countries} />
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

export default Details;