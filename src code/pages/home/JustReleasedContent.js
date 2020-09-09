import React, { useState, useEffect } from 'react'
import Button from '../../elements/Button'
import SingleResult from '../searchResults/SingleResult'


const JustReleasedContent = (props) => {
  const [data, setData] = useState([])
  const [allPages, setAllPages] = useState(0)
  const [totalRes, setTotalRes] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(1)

  const loadMore = (e) => {
    if (page < allPages) {
      e.preventDefault();
      setPage(prevPage => prevPage + 1)
    }
  }

  const nowShowing = () => {
    let current = page * 20
    if (current > totalRes) {
      current = totalRes
    }
    return current
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {

        const response = await fetch(`${props.url}${page}`)
        const res = await response.json()


        setData(prevData => [...prevData, ...res.results])
        setAllPages(res.total_pages)
        setTotalRes(res.total_results)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [page, props.url])


  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <h1>LOADING...</h1> :
        <>
          <h2 className="new-movies_header">{props.text}</h2>
          <div className="new-movies_items">
            {data.map(movie =>
              <SingleResult movie={movie} key={movie.id} />
            )}
          </div>
          <h4 style={{ textAlign: 'center' }}>now showing:  {nowShowing()}  from {totalRes} results</h4>

          {page < allPages ? <Button
            onClick={(e) => loadMore(e)}
            className={'btn load_more'}
            text={'Load More'}
          /> : ''}


        </>
      }
    </>
  )
}

export default JustReleasedContent