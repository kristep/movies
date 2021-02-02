import { useFetch } from '../hooks/useFetch'

export const GetGenres = () => {
  const data = useFetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US', 'genres')

  const genres = data.response;
  return genres !== null ? genres : '';
}

