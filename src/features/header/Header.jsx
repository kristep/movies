import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__overlay">
          <span className="header__title">Movies library</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
