import React from "react";
import { useHistory } from "react-router-dom";
import './searchLine.css'
import { useInput } from '../../hooks/useInput'
import Button from '../../elements/Button'

const SearchLine = (props) => {
  const { value, bind, reset } = useInput('');
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
    if (value) {
      history.push(`/search_results/${value}`)
    }
  }
  const handleClick = () => {
    history.push(`/detailed_search`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-line">
        <input
          type="text"
          placeholder="search by movie title"
          {...bind} />
        <button type="submit">Search</button>
        {/* <Button
          onClick={handleClick}
          text={'go to detailed search'}
          className={'btn detailed_search'}
        /> */}
      </form>

    </>
  );
}

export default SearchLine