import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useOnClickOutside } from "../../utils/hooks/useOnClickOutside";
import Button from "../../components/button/Button";

import "./dropdown.scss";

const Dropdown = ({ text, children }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [setOpen]);

  useOnClickOutside(dropdownRef, () => setOpen(false));

  return (
    <div ref={dropdownRef}>
      <Button
        className={"navigation"}
        onClick={() => {
          setOpen(!open);
        }}
        ariaExpanded={open === true ? "true" : "false"}
      >
        <span>{text}</span>
      </Button>
      <div className={`dropdown ${open && "is-active"}`}>
        <ul className="dropdown__content" onClick={() => setOpen(false)}>
          {children}
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
};

export default Dropdown;
