import React from 'react'

const ShowPrevNext = (props) => {

  return (
    <div className="prev-next_container">
      <button className="btn" onClick={props.showPrev}>Prev</button>
      <span> {props.page} of {props.total_pages} </span>
      <button className="btn" onClick={props.showNext}>Next</button>
    </div>
  )
}

export default ShowPrevNext