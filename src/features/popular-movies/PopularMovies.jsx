import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import { useFetch } from "../../utils/hooks/useFetch";

import MovieCard from "../../components/movie-card/MovieCard";

import "./popularMovies.scss";
import "../../styles/pagination.scss";

const PopularMovies = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const { url, text } = props;

  const { response } = useFetch(`${url}${currentPage}`, currentPage);

  useEffect(() => {
    setData(response);
  }, [currentPage, response]);

  const pageCount = data.total_pages;

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage + 1);
  };

  return (
    <>
      <div className="popular-movies">
        <h2 className="popular-movies__header">{text}</h2>
        <div className="popular-movies__items">
          {data.length !== 0 &&
            data.results.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
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