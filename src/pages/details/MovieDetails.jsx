import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../utils/hooks/useFetch";

import Details from "./Details.jsx";

const MovieDetails = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f1782698a1c04f301973e311a7876bdb`;

  const { response: movie } = useFetch(url, movieId);

  useEffect(() => {
    setData(movie);
  }, [movie]);

  return (
    <>
      {data.length !== 0 ? (
        <Details details={data} />
      ) : (
        "sorry, this movie has no details in our database"
      )}
    </>
  );
};

export default MovieDetails;
