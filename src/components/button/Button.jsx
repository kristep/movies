import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} className={`button button--${className}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
