import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import { useFetch } from "../../utils/hooks/useFetch";
import Button from "../../components/button/Button.jsx";

import MovieCard from "../../components/movie-card/MovieCard";

import "./popularMovies.scss";
import "../../styles/pagination.scss";

const PopularMovies = (props) => {
  const [page, setPage] = useState(1);

  const { url, text } = props;
  const { response, isLoading, isError } = useFetch(`${url}${page}`, page);
  const pageCount = response?.total_pages;

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
  };

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <div className="popular-movies">
            <h2 className="popular-movies__header">{text}</h2>
            <div className="popular-movies__items">
              {response?.results.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>

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
          </div>
        </>
      )}
    </>
  );
};

PopularMovies.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default PopularMovies;
