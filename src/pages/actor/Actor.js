import React from 'react'
import './actor.css'
import { useFetch } from '../../hooks/useFetch'
import SingleResult from '../searchResults/SingleResult'

const Actor = (props) => {
  const actorData = props.actorData


  const getID = () => {
    if (actorData.response !== null) {
      return actorData.response.results[0].id
    }
  }

  const getKnownFor = () => {
    if (actorData.response !== null) {
      return actorData.response.results[0].known_for
    }
  }
  const knownForArr = getKnownFor()


  const fullUrl = `https://api.themoviedb.org/3/person/${getID()}?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US`

  const fullActorData = useFetch(fullUrl, 'byactorid')


  const { id, name, biography, profile_path, birthday, deathday, place_of_birth, homepage, media_type } = fullActorData.response !== null ? fullActorData.response : ''

  return (
    <React.Fragment>
      {fullActorData.response !== null && fullActorData.response !== undefined ?

        <div key={id} className="actor_wrapper" >
          <h2>{name}</h2>
          <div className="actor_container">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt="actor"
                className="actor_img"
              />
              <p>Birth date: {birthday} {deathday !== null ? `Death date: ${deathday}` : ''}</p>
              <p>Born in {place_of_birth ? place_of_birth : ''}</p>
            </div>

            <p>{biography}</p>
          </div>


          <h2>{name} is known for:</h2>
          <div className="known_for">
            {
              knownForArr !== undefined && knownForArr.length > 0 ?
                knownForArr.map(item => item.media_type === 'movie' ? (<div className="results-list" key={item.id}>
                  <SingleResult movie={item} key={item.id} />
                </div>) : '')
                : ''
            }
          </div>




          {homepage ? <a href={homepage}>Visit actor's homepage</a> : ''}

        </div>


        : ''

      }
    </React.Fragment>

  )
}

export default Actor