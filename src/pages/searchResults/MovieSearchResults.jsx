import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/useFetch";

import MovieCard from "../../components/movie-card/MovieCard";

import "./movieSearchResults.scss";
import "../../styles/pagination.scss";

const MovieSearchResults = () => {
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const url = `https://api.themoviedb.org/3/search/movie?api_key=f1782698a1c04f301973e311a7876bdb&query=${query}&page=${page}`;

  const { response } = useFetch(url, query);
  const results = response?.results;
  const pageCount = response?.total_pages;

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
  };

  return (
    <div className="search-results">
      <h2 className="search-results__title">Search by: '{query}'</h2>
      {response !== null ? (
        <span className="search-results__subtitle">
          {response?.total_results} movies found
        </span>
      ) : (
        "No results found"
      )}

      <div className="search-results__list">
        {response !== null &&
          results.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default MovieSearchResults;
