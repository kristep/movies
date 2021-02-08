import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__overlay">
        <Link to="/">
          <span className="header__title">Movies library</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
