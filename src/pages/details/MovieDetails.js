import React from 'react'
import { useFetch } from '../../utils/hooks/useFetch'

import Crew from '../../features/crew/Crew.jsx'
import Cast from '../../features/cast/Cast.jsx'

import 'swiper/css/swiper.css'
import './details.css'

const MovieDetails = (props) => {
  const { title, backdrop_path, overview, genres, budget, revenue, release_date, runtime, homepage, production_companies, logo_path, original_language, tagline, id, production_countries } = props.details

  const genresList = genres ? genres.map(genre => <li key={genre.id}>{genre.name}</li>) : '';

  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const data = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f1782698a1c04f301973e311a7876bdb`, 'people')

  const people = data.response

  return (
    <div className="details-wrapper">
      <div className="details-title">
        <h2>{title}</h2>
        <span>{release_date.substring(0, 4)}</span>
      </div>

      <div className="details-pic-container">
        <div className="details-info">
          <ul className="details_genres">{genresList}</ul>
          <span>release date: {release_date}</span>
          <span> {runtime > 0 ? runtime + 'min' : ''} </span>
          <span>{original_language}</span>
        </div>

        {backdrop_path ? <img className="details_img" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="backdrop" /> : ''}
      </div>

      <div className="details-description-container">
        <p><em>{tagline}</em></p>
        <p>{overview}</p>
        {homepage ?
          <a className="homepage-link" href={`${homepage}`} alt="homepage">Visit movie homepage</a> : ''}

        {budget > 0 ?
          <ul className="budget">
            <li>{formatCurrency.format(budget)} - budget</li>
            <li>{formatCurrency.format(revenue)} - revenue</li>
          </ul> : ''}
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

      <ul className="companies">
        <li style={{ fontWeight: 'bold' }}> Production companies:</li>
        {production_companies ? production_companies.map(company =>
          <li key={company.id}>
            {company.logo_path ?
              <img
                className="company_logo"
                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                alt="company logo" />
              :
              <div className="instead-company-logo">
                <p>{company.name}</p>
              </div>}
          </li>
        ) : <li>no information</li>}
      </ul>
    </div >
  )
}

export default MovieDetails