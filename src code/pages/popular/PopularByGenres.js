import React from 'react'
import { useParams } from "react-router-dom"
import JustReleasedContent from '../home/JustReleasedContent'
import Button from '../../elements/Button'

const PopularByGenres = () => {
  const { genreId, genreName } = useParams()

  // const showAll = (event) => {
  //   event.target.previousSibling.classList.remove('new-movies_home')
  //   event.target.style.display = 'none'
  // };

  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=10&page=`
  return (
    <div className="new-movies_container ">
      <div className="new-movies-content ">
        <JustReleasedContent
          url={url}
          text={`The most popular ${genreName} movies:`}
        />
      </div>

      {/* <Button
        onClick={event => showAll(event)}
        text={'show all'}
        className={'btn show_all'}
      /> */}
    </div>

  )
}

export default PopularByGenres