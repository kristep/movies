import React from 'react'
import MovieCard from '../../components/movie-card/MovieCard'

const MovieSearchResults = (props) => {

  const { page, total_results, total_pages, results } = props.results
  const query = props.query
  console.log(results)
  return (
    <div className="results-container">

      <h2
        style={{ textAlign: 'center' }}>
        Search by: '{query}' <br />
        {results.length > 0 ?
          <span
            style={{ fontWeight: 'normal', fontSize: 'smaller' }}>{total_results} movies found</span> : ''}
      </h2>

      <div className="results-list">
        {
          results.length > 0 ?
            results.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))
            : <p>nothing to display</p>
        }
      </div>

    </div >
  )
}

export default MovieSearchResults

