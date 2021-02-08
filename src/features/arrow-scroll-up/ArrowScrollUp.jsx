import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";

import { debounce } from "../../utils/debounce";

const ArrowScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setVisible(true);
      console.log("scrolling");
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(toggleVisibility));
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {visible ? (
        <Button
          ariaLabel={"scroll to the top"}
          className={"arrow-up"}
          onClick={scrollUp}
        >
          <i className="fas fa-arrow-up "></i>
        </Button>
      ) : (
        ""
      )}
    </>
  );
};

export default ArrowScrollUp;
