import React from 'react'
import SingleResult from './SingleResult'
import ShowPrevNext from '../../components/ShowPrevNext'

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
              <SingleResult movie={movie} key={movie.id} />
            ))
            : <p>nothing to display</p>
        }
      </div>

      {
        total_pages > 0 ?
          <ShowPrevNext
            showNext={page < total_pages ? props.showNext : null}
            showPrev={props.showPrev}
            page={page}
            total_pages={total_pages}
          /> : ''
      }

    </div >
  )
}

export default MovieSearchResults

