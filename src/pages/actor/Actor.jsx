import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useFetch } from "../../utils/hooks/useFetch";

import ActorInfo from "../../features/actor/actor-info/ActorInfo";
import KnownFor from "../../features/actor/known-for/KnownFor";

import "./actor.scss";

const Actor = (props) => {
  const [data, setData] = useState({});

  const { actorData } = props;

  const getID = () => {
    if (actorData) {
      return actorData[0].id;
    }
  };

  const fullUrl = `https://api.themoviedb.org/3/person/${getID()}?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US`;

  const { response: actor } = useFetch(fullUrl, "byactorid");

  useEffect(() => {
    setData(actor);
  }, [actor]);

  const {
    id,
    name,
    biography,
    profile_path,
    birthday,
    deathday,
    place_of_birth,
    homepage,
  } = data;

  return (
    <div key={id} className="actor">
      <h2 className="actor__name">{name}</h2>

      <ActorInfo
        biography={biography}
        profile_path={profile_path}
        birthday={birthday}
        deathday={deathday}
        place_of_birth={place_of_birth}
        homepage={homepage}
      />

      <h3 className="actor__title">{name} is known for:</h3>
      <KnownFor actorData={actorData} />
    </div>
  );
};

Actor.propTypes = {
  actorData: PropTypes.array,
};

export default Actor;
