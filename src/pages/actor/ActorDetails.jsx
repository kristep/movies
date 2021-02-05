import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../utils/hooks/useFetch";
import { isObjectEmpty } from "../../utils/object";

import Actor from "./Actor.jsx";

const ActorDetails = () => {
  const [data, setData] = useState({});

  const { actorName } = useParams();

  const url = `https://api.themoviedb.org/3/search/person?query=${actorName}&api_key=f1782698a1c04f301973e311a7876bdb&language=en-US`;

  const { response: actor } = useFetch(url, actorName);

  useEffect(() => {
    setData(actor);
  }, [actor]);

  return (
    <>
      {!isObjectEmpty(data) && data.resulsts?.length !== 0 && (
        <Actor actorData={data.results} />
      )}
    </>
  );
};

export default ActorDetails;
