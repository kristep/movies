import React from "react";

import "./crewItem.scss";

const CrewItem = ({ titleText, children }) => {
  return (
    <li className="crew-item">
      <h4 className="crew-item__title">{titleText}</h4> {children}
    </li>
  );
};

export default CrewItem;
