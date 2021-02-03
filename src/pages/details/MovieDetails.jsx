import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../utils/hooks/useFetch";

import Details from "./Details.jsx";

const MovieDetails = () => {
  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f1782698a1c04f301973e311a7876bdb`;

  const response = useFetch(url, movieId);
  console.log(response);
  return (
    <>
      {response.response !== null && response.response.status_code !== 34 ? (
        <Details details={response.response} />
      ) : (
        "sorry, this movie has no details in our database"
      )}
    </>
  );
};

export default MovieDetails;
