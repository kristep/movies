import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { GetActorId } from '../../components/getters/GetActorId'
import Test from './Test'


export const GetActorData = (props) => {


  // const url = `https://api.themoviedb.org/3/search/person?query=${name}&api_key=f1782698a1c04f301973e311a7876bdb&language=en-US`

  // const actorData = useFetch(url, 'asasas')

  // console.log(url)

  // const getActorID = () => {
  //   if (actorData.response !== null && name !== '' && actorData.response.results !== undefined) {
  //     return `&with_cast=${actorData.response.results[0].id}`
  //   } else {
  //     return ''
  //   }
  // }

  // const id = getActorID()
  // console.log(id)


  // return id


  // const id = GetActorId(name)
  if (props.isSubmitted === true) {
    console.log(props.values)
  }

  //console.log(props.isSubmitted)


  return (
    <div>
      <h2>helloooooooooo</h2>
      <p>{props.values.year}</p>
    </div>

  )
}
