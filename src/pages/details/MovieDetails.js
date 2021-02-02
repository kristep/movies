import React from 'react'
import { useFetch } from '../../utils/hooks/useFetch'

import Crew from '../../features/crew/Crew.jsx'
import Cast from '../../features/cast/Cast.jsx'

import 'swiper/css/swiper.css'
import './details.css'
import ImageSection from '../../features/movie/image-section/ImageSection'
import MovieDescription from '../../features/movie/movie-description/MovieDescription'
import ProductionCompanies from '../../features/movie/production-companies/ProductionCompanies'

const MovieDetails = (props) => {
  const { title, backdrop_path, overview, genres, budget, revenue, release_date, runtime, homepage, production_companies, original_language, tagline, id, production_countries } = props.details

  const data = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f1782698a1c04f301973e311a7876bdb`, 'people')

  const people = data.response
  console.log(budget)
  return (
    <div className="details-wrapper">
      <h2 className="details-title">{title} <span className="details-year">({release_date.substring(0, 4)})</span></h2>

      <div className="details-pic-container">
        <ImageSection genres={genres}
          release_date={release_date}
          runtime={runtime}
          original_language={original_language}
          backdrop_path={backdrop_path} />
      </div>

      <div className="details-description-container">
        <MovieDescription tagline={tagline} overview={overview} budget={budget} revenue={revenue} homepage={homepage} />
      </div>

      {people !== null &&
        <div className="cast-container">
          <Cast cast={people.cast} />
        </div>
      }
      {people !== null &&
        <div className="crew-container">
          <Crew crew={people.crew} countries={production_countries} />
        </div>
      }

      {production_companies &&
        <ProductionCompanies production_companies={production_companies} />}
    </div >
  )
}

export default MovieDetails