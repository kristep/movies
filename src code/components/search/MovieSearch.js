import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { useFetch } from '../../hooks/useFetch'
import MovieSearchResults from '../../pages/searchResults/MovieSearchResults'

const MovieSearch = () => {
  const { query } = useParams()
  const [page, setPage] = useState(1);

  let url = `https://api.themoviedb.org/3/search/movie?api_key=f1782698a1c04f301973e311a7876bdb&query=${query}&page=${page}`

  const { response } = useFetch(url, query)
  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const showPrev = () => {
    if (page > 1) setPage(prevPage => prevPage - 1);
    scrollUp()
  }

  const showNext = () => {
    setPage(prevPage => prevPage + 1);
    scrollUp()
  }

  return (
    <>
      {response !== null ?
        <MovieSearchResults
          results={response}
          query={query}
          showNext={showNext}
          showPrev={showPrev}
        /> : 'not found'}
    </>
  )
}
export default MovieSearch
