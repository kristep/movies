import React from 'react'
import { Link } from 'react-router-dom'
import Genres from './Genres'

const HeaderNav = () => {
  return (
    <>

      <ul className="navbar">
        <li className="dropdown">Genres
          <ul className="dropdown-content genres-list">
            <Genres />
          </ul>
        </li>

        <li>Companies</li>

        <li>Actors</li>
        {/* https://api.themoviedb.org/3/search/person?query=brad+pitt&api_key=f1782698a1c04f301973e311a7876bdb&language=en-US&page=1 */}
        <li className="dropdown">Most popular movies
          <ul className="dropdown-content popular">
            <Link to="popular_all_times"><li>of all time</li></Link>
            <Link to="popular_by_year"><li>of selected year</li></Link>

            {/* <li>by genres</li> */}


          </ul>
        </li>
      </ul>
    </>

  )
}



export default HeaderNav