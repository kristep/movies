import { oneOfType } from "prop-types";
import React from "react";

import { getCurrentYear } from "../../../utils/dates";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copyright">
        © {getCurrentYear()} KriStep All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
