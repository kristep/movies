import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ onClick, children, className, ariaExpanded, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${className}`}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaExpanded: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;
