import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../../../components/movie-card/MovieCard";

import "./knownFor.scss";

const KnownFor = (props) => {
  const { actorData } = props;

  const getKnownFor = () => {
    if (actorData.response !== null) {
      return actorData.response.results[0].known_for;
    }
  };
  const knownForArr = getKnownFor();
  return (
    <div className="known-for">
      {knownForArr &&
        knownForArr.length > 0 &&
        knownForArr.map(
          (item) =>
            item.media_type === "movie" && (
              <MovieCard movie={item} key={item.id} />
            )
        )}
    </div>
  );
};

KnownFor.propTypes = {
  actorData: PropTypes.object,
};

export default KnownFor;
