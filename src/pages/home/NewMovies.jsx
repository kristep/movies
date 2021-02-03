import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import { useFetch } from "../../utils/hooks/useFetch";
import Button from "../../components/button/Button.jsx";

import MovieCard from "../../components/movie-card/MovieCard";

import "./newMovies.scss";
import "../../styles/pagination.scss";

const NewMovies = (props) => {
  const [page, setPage] = useState(1);
  const [collapsed, setCollapsed] = useState(true);

  const { url, text } = props;
  const { response, isLoading, isError } = useFetch(`${url}${page}`, page);
  const pageCount = response?.total_pages;

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
  };

  const showAll = (e) => {
    setCollapsed(false);
    e.target.style.display = "none";
  };
  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div className="new-movies__loader"></div>
      ) : (
        <>
          <div className={`new-movies ${collapsed && "new-movies--collapsed"}`}>
            <h2 className="new-movies__header">{text}</h2>
            <div className="new-movies__items">
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

          <Button
            onClick={(event) => showAll(event)}
            text={"show all"}
            className={"show-all"}
          />
        </>
      )}
    </>
  );
};

NewMovies.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default NewMovies;
