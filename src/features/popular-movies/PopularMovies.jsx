import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import { useFetch } from "../../utils/hooks/useFetch";
import { usePagination } from "../../utils/hooks/usePagination";

import MovieCard from "../../components/movie-card/MovieCard";

import "./popularMovies.scss";
import "../../styles/pagination.scss";

const PopularMovies = (props) => {
  const [data, setData] = useState([]);

  const movieRefs = useRef(new Array());
  const { url, text } = props;

  const {
    currentPage,
    pageCount,
    cardToFocus,
    handlePageClick,
  } = usePagination(data, movieRefs);

  const { response } = useFetch(`${url}${currentPage}`, currentPage);

  useEffect(() => {
    setData(response);
  }, [currentPage, response]);

  return (
    <>
      <div className="popular-movies">
        <h2 className="popular-movies__header">{text}</h2>
        <div className="popular-movies__items">
          {data.length !== 0 &&
            data.results.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
                movieRefs={movieRefs}
                cardToFocus={cardToFocus}
              />
            ))}
        </div>

        {pageCount > 1 && (
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        )}
      </div>
    </>
  );
};

PopularMovies.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default PopularMovies;
