import React from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

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
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="search by movie title"
        {...bind}
        className="search__input"
      />
      <button type="submit" className="search__button">
        <i class="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchLine;
