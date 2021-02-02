import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button.jsx";
import MovieCard from "../../components/movie-card/MovieCard";

import "./newMovies.scss";

const NewMovies = (props) => {
  const [data, setData] = useState([]);
  const [allPages, setAllPages] = useState(0);
  const [totalRes, setTotalRes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const loadMore = (e) => {
    if (page < allPages) {
      e.preventDefault();
      setPage((prevPage) => prevPage + 1);
    }
  };

  const nowShowing = () => {
    let current = page * 20;
    if (current > totalRes) {
      current = totalRes;
    }
    return current;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(`${props.url}${page}`);
        const res = await response.json();

        setData((prevData) => [...prevData, ...res.results]);
        setAllPages(res.total_pages);
        setTotalRes(res.total_results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [page, props.url]);

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <div className="new-movies">
          <h2 className="new-movies__header">{props.text}</h2>
          <div className="new-movies__items">
            {data.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
          <p className="new-movies__counts" style={{ textAlign: "center" }}>
            now showing: {nowShowing()} from {totalRes} results
          </p>

          {page < allPages ? (
            <Button
              onClick={(e) => loadMore(e)}
              className={"load-more"}
              text={"Load More"}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default NewMovies;
