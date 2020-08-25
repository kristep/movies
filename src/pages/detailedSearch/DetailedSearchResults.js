import React from 'react'
import JustReleasedContent from '../home/JustReleasedContent'

const DetailedSearchResults = (props) => {
  console.log(props.url)

  return (
    <div>
      {props.url ? <JustReleasedContent url={props.url} text={'blablablabla'} /> : ''}
    </div>
  )
}


export default DetailedSearchResults

