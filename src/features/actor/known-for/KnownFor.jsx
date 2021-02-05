import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../../../components/movie-card/MovieCard";

import "./knownFor.scss";

const KnownFor = (props) => {
  const { actorData } = props;

  const getKnownFor = () => {
    if (actorData) {
      return actorData[0].known_for;
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
  actorData: PropTypes.array,
};

export default KnownFor;
