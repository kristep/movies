import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'

const Cast = (props) => {

  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 10,
      spaceBetween: 50,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
    });

  }, [])


  return (
    <>
      <div className="cast-container swiper-container">
        <ul className="cast swiper-wrapper ">
          {props.cast.map(actor => (
            <Link
              className="swiper-slide"
              to={`/actor/${actor.name}`}
              key={actor.cast_id}
            >
              <li>
                <div className="actor-img-container">
                  <img
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    alt="actor"
                  />
                </div>
                {actor.character ? <span className="character">{actor.character}</span> : ''}
                <span>{actor.name}</span>
              </li>
            </Link>
          )
          )}

        </ul>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

      </div>


    </>
  )
}

export default Cast