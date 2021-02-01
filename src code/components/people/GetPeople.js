import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Cast from './Cast'
import Crew from './Crew'
import 'swiper/css/swiper.css'
import './people.css'


export const GetPeople = (props) => {

  const data = useFetch(`https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=f1782698a1c04f301973e311a7876bdb`, 'people')

  const people = data.response

  if (people !== null) {
    // console.log(people.cast)
    console.log(people.crew)
  }


  return (
    <>
      {people !== null ?
        <>
          <Cast cast={people.cast} />
          <Crew crew={people.crew} countries={props.countries} />
        </>
        : ''
      }
    </>
  )
}

