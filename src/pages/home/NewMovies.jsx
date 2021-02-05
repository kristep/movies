import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import { useFetch } from "../../utils/hooks/useFetch";

import Button from "../../components/button/Button.jsx";

import MovieCard from "../../components/movie-card/MovieCard";

import "./newMovies.scss";
import "../../styles/pagination.scss";

const NewMovies = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [collapsed, setCollapsed] = useState(true);
  const [data, setData] = useState([]);

  const { url, text } = props;
  const { response: movies } = useFetch(`${url}${currentPage}`, currentPage);
  const pageCount = data.total_pages;

  useEffect(() => {
    setData(movies);
  }, [currentPage, movies]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage + 1);
  };

  const showAll = (e) => {
    setCollapsed(false);
    e.target.style.display = "none";
  };
  return (
    <>
      <div className={`new-movies ${collapsed && "new-movies--collapsed"}`}>
        <h2 className="new-movies__header">{text}</h2>
        <div className="new-movies__items">
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

      <Button
        onClick={(event) => showAll(event)}
        text={"show all"}
        className={"show-all"}
      />
    </>
  );
};

NewMovies.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default NewMovies;
