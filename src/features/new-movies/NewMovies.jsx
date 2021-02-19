import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import { useWindowDimensions } from "../../utils/hooks/useWindowDimensions";
import { useFetch } from "../../utils/hooks/useFetch";

import Button from "../../components/button/Button.jsx";
import MovieCard from "../../components/movie-card/MovieCard";

import "./newMovies.scss";
import "../../styles/pagination.scss";

const NewMovies = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [resultsToRender, setResultsToRender] = useState(0);
  const [cardToFocus, setCardToFocus] = useState(null);

  const elemmPerPage = 20; //we get 20 per page from API
  const pageCount = data.total_pages;
  const { width } = useWindowDimensions();
  const { url, text } = props;
  const { response: movies } = useFetch(`${url}${currentPage}`, currentPage);
  const movieRefs = useRef(new Array());

  useEffect(() => {
    setData(movies);
  }, [currentPage, movies]);

  useEffect(() => {
    if (width < 1120 && width > 852) {
      setResultsToRender(3);
    } else if (width > 1400) {
      setResultsToRender(5);
    } else {
      setResultsToRender(4);
    }
  }, [width]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage + 1);
  };

  return (
    <>
      <div className="new-movies">
        <h2 className="new-movies__title">{text}</h2>
        <div className="new-movies__items">
          {data.length !== 0 &&
            data.results
              .slice(0, resultsToRender)
              .map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  movieRefs={movieRefs}
                  cardToFocus={cardToFocus}
                />
              ))}
        </div>

        {pageCount > 1 && resultsToRender === elemmPerPage && (
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        )}
      </div>

      {resultsToRender != elemmPerPage && (
        <Button
          onClick={() => {
            setResultsToRender(elemmPerPage);
            setCardToFocus(data.results[resultsToRender].id);
          }}
          className={"show-all"}
        >
          <span>show all</span>
        </Button>
      )}
    </>
  );
};

NewMovies.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default NewMovies;
