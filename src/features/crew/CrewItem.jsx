import React from "react";
import PropTypes from "prop-types";

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
  children: PropTypes.element,
};

export default CrewItem;
