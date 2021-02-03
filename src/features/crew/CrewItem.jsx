import React from "react";
import PropTypes, { oneOfType } from "prop-types";

import "./crewItem.scss";

const CrewItem = ({ titleText, children }) => {
  return (
    <li className="crew-item">
      <h4 className="crew-item__title">{titleText}</h4> {children}
    </li>
  );
};

CrewItem.propTypes = {
  titleText: PropTypes.string,
  children: oneOfType([PropTypes.object, PropTypes.string]),
};

export default CrewItem;
