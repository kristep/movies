import React from 'react'
import { GetGenres } from '../getters/GetGenres'
import { Link } from "react-router-dom"

const Genres = () => {

  const genres = GetGenres()
  return (
    <React.Fragment>
      {genres !== '' ? genres.genres.map(genre =>
        <li key={genre.id} onClick={() => window.location.reload(false)}>
          <Link to={`/popular_by_genre/${genre.id}/${genre.name}`}>
            {genre.name}
          </Link>
        </li>) : null}
    </React.Fragment>
  )
}

export default Genres