import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";

import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/useFetch";
import { usePagination } from "../../utils/hooks/usePagination";

import MovieCard from "../../components/movie-card/MovieCard";

import "./movieSearchResults.scss";
import "../../styles/pagination.scss";

const MovieSearchResults = () => {
  const [data, setData] = useState([]);

  const movieRefs = useRef(new Array());

  const { query } = useParams();

  const {
    currentPage,
    pageCount,
    cardToFocus,
    handlePageClick,
  } = usePagination(data, movieRefs);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=f1782698a1c04f301973e311a7876bdb&query=${query}&page=${currentPage}`;
  const { response: movies, isLoading } = useFetch(url, query);

  useEffect(() => {
    setData(movies);
  }, [currentPage, movies]);

  return (
    <div className="search-results">
      {isLoading && <div className="loader"></div>}
      <h2 className="search-results__title">Search by: '{query}'</h2>
      {data.length !== 0 ? (
        <span className="search-results__subtitle">
          {data.total_results} movies found
        </span>
      ) : (
        "No results found"
      )}

      <div className="search-results__list">
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
  );
};

export default MovieSearchResults;
