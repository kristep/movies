import React from 'react'
import '../searchResults/results.css'
import './home.css'
import JustReleasedContent from './JustReleasedContent'
import Button from '../../elements/Button'

const Home = () => {

  const today = new Date().toISOString().split('T')[0];
  const weekAgo = () => {
    const today2 = new Date()
    const final = new Date(today2)
    final.setDate(today2.getDate() - 7);
    const weekAgoDate = final.toISOString().split('T')[0]
    return weekAgoDate
  };

  let movies_url = `https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=${weekAgo()}&primary_release_date.lte=${today}&sort_by=release_date.desc&page=`;

  let upcomming_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=${today}&page=`;

  const showAll = (event) => {
    event.target.previousSibling.classList.remove('new-movies_home')
    event.target.style.display = 'none'
  };



  return (
    <>
      <div className="new-movies_container ">
        <div className="new-movies-content new-movies_home">
          <JustReleasedContent
            url={movies_url}
            text={'Just released movies:'}
          />
        </div>
        <Button
          onClick={event => showAll(event)}
          text={'show all'}
          className={'btn show_all'}
        />
      </div>

      <div className="new-movies_container upcomming-container">

        <div className="new-movies_content new-movies_home">
          <JustReleasedContent
            url={upcomming_url}
            text={'Upcomming movies:'}
          />
        </div>
        <Button
          onClick={event => showAll(event)}
          text={'show all'}
          className={'btn show_all'}
        />
      </div>
    </>
  )
}

export default Home


