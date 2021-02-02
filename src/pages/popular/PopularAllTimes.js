import React from 'react'
import NewMovies from '../home/NewMovies'

const PopularAllTimes = () => {

  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=50&page='
  return (
    <div className="new-movies_container ">
      <div className="new-movies-content">
        <NewMovies
          url={url}
          text={'The most popular movies of all times:'}
        />
      </div>
    </div>

  )
}

export default PopularAllTimes