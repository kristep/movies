import React, { useState, useEffect } from 'react'

const Crew = (props) => {

  const [director, setDirector] = useState('')
  const [writers, setWriters] = useState([])
  const [sound, setSound] = useState([])



  useEffect(() => {
    props.crew.forEach(obj => {
      if (obj.department === 'Directing') {
        setDirector(obj.name)
      } else if (obj.department === 'Writing') {
        setWriters(prev => [...prev, obj])
      } else if (obj.department === 'Sound') {
        setSound(prev => [...prev, obj])

      }
    })
  }, [])





  return (

    <div className="crew-container">
      <ul className="crew">
        <li>
          <h4>Directed by:</h4> {director}
        </li>

        {writers !== [] ?
          <li>
            <h4>Written by: </h4>
            <ul> {writers.map(item => (<li key={item.id}>{item.name} - {item.job}</li>))}</ul>
          </li> : ''
        }

        {sound !== [] ?
          <li>
            <h4>Sound:</h4>
            <ul> {sound.map(item => (<li key={item.id}>{item.name} - {item.job}</li>))}</ul>
          </li> : ''
        }


        <li>
          <h4>Production countries: </h4>
          <ul> {props.countries.map(country => <li key={country.iso_3166_1}>{country.iso_3166_1} -  {country.name}</li>)}</ul>
        </li>






      </ul>
    </div>

  )
}

export default Crew