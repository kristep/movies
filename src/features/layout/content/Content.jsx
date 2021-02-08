import React from "react";
import ArrowScrollUp from "../../arrow-scroll-up/ArrowScrollUp";

import "./content.scss";

const Content = ({ children }) => {
  return (
    <main className="content">
      {children}
      <ArrowScrollUp />
    </main>
  );
};

export default Content;
