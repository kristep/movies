import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Swiper from "swiper";

import CastItem from "./CastItem";

import "./cast.scss";

const Cast = ({ cast }) => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 10,
      spaceBetween: 50,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  }, []);

  return (
    <>
      {cast.length !== 0 && (
        <div className="swiper-container">
          <ul className=" swiper-wrapper ">
            {cast.map((actor) => (
              <Link
                className="swiper-slide"
                to={`/actor/${actor.name}`}
                key={actor.cast_id}
              >
                <CastItem actor={actor} />
              </Link>
            ))}
          </ul>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      )}
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.array,
};

export default Cast;
