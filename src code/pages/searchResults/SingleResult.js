import React from 'react'
import { Link } from 'react-router-dom'


const SingleResult = (props) => {
  const { title, id, vote_average, vote_count, poster_path, release_date } = props.movie
  return (
    <>
      <Link to={`/${id}`} className="result-item">
        {poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="movie poster" /> : <img alt="this movie has no poster" />}


        <div className="result-item_descrip">
          <h3>{title}</h3>
          {vote_average > 0 ?
            <p>{vote_average} points ({vote_count} votes)</p>
            :
            <p>-- no votes yet --</p>
          }

          <span>{release_date}</span>
        </div>

      </Link>
    </>
  )
}

export default SingleResult