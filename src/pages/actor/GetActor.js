import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/useFetch'
import Actor from './Actor'

const GetActor = () => {
  const { actorName } = useParams()
  const url = `https://api.themoviedb.org/3/search/person?query=${actorName}&api_key=f1782698a1c04f301973e311a7876bdb&language=en-US`

  const actorData = useFetch(url, actorName)

  return (
    <Actor actorData={actorData} />
  )
}

export default GetActor

