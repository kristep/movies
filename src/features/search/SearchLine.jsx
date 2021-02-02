import React from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../../utils/hooks/useInput";

import "./searchLine.scss";

const SearchLine = () => {
  const { value, bind, reset } = useInput("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
    if (value) {
      history.push(`/search_results/${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search" role="search">
      <label htmlFor="search">
        <span className="visually-hidden">Search</span>
      </label>
      <input
        type="text"
        placeholder="search by movie title"
        {...bind}
        className="search__input"
        id="search"
      />
      <button type="submit" className="search__button">
        <span className="visually-hidden">Submit Search</span>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchLine;
