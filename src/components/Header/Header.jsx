import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Movies library</h1>
      </Link>
    </header>
  );
};

export default Header;
