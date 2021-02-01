import React, { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'

export const GetActorId = (actor) => {

  const [actorData, setActorData] = useState([])

  // console.log(actor)
  useEffect(() => {
    const fetchData = async () => {
      // setIsError(false);
      // setIsLoading(true);
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/person?api_key=f1782698a1c04f301973e311a7876bdb&query=${actor}`);
        const json = await res.json();
        setActorData(json);
      } catch (error) {
        //setIsError(true);
      }
      // setIsLoading(false)
    };

    // if (actor) {
    fetchData();
    // }
  }, [])
  return actorData
}