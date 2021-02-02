import { useState, useEffect } from 'react'

export const GetActorId = (actor) => {
  const [actorData, setActorData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/person?api_key=f1782698a1c04f301973e311a7876bdb&query=${actor}`);
        const json = await res.json();
        setActorData(json);
      } catch (error) {
      }
    };
    fetchData();
  }, [])
  return actorData
}