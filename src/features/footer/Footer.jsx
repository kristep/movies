import React from "react";
import "./footer.scss";

const Footer = () => {
  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="footer">
      <span className="footer__copyright">
        © {getCurrentYear()} KriStep All Rights Reserved
      </span>
      <i className="fas fa-arrow-up footer__arrow-up" onClick={scrollUp}></i>
    </footer>
  );
};

export default Footer;
