import React from "react";
import PropTypes from "prop-types";

import { useFetch } from "../../utils/hooks/useFetch";

import ActorInfo from "../../features/actor/actor-info/ActorInfo";
import KnownFor from "../../features/actor/known-for/KnownFor";

import "./actor.scss";

const Actor = (props) => {
  const { actorData } = props;

  const getID = () => {
    if (actorData.response !== null) {
      return actorData.response.results[0].id;
    }
  };

  const fullUrl = `https://api.themoviedb.org/3/person/${getID()}?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US`;

  const fullActorData = useFetch(fullUrl, "byactorid");

  const {
    id,
    name,
    biography,
    profile_path,
    birthday,
    deathday,
    place_of_birth,
    homepage,
  } = fullActorData.response !== null ? fullActorData.response : "";

  return (
    <>
      {fullActorData.response !== null && fullActorData.response !== undefined && (
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
      )}
    </>
  );
};

Actor.propTypes = {
  actorData: PropTypes.object,
};

export default Actor;
