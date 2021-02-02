import React, { useState, useEffect } from "react";

import CrewItem from "./CrewItem";
import "./crew.scss";

const Crew = ({ crew, countries }) => {
  const [director, setDirector] = useState("");
  const [writers, setWriters] = useState([]);
  const [sound, setSound] = useState([]);

  useEffect(() => {
    crew.forEach((obj) => {
      if (obj.department === "Directing") {
        setDirector(obj.name);
      } else if (obj.department === "Writing") {
        setWriters((prev) => [...prev, obj]);
      } else if (obj.department === "Sound") {
        setSound((prev) => [...prev, obj]);
      }
    });
  }, []);

  return (
    <ul className="crew-list">
      {director && <CrewItem titleText={"Directed by:"}>{director}</CrewItem>}

      {writers.length !== 0 && (
        <CrewItem titleText={"Written by:"}>
          <ul>
            {writers.map((item) => (
              <li key={item.id}>
                {item.name} - {item.job}
              </li>
            ))}
          </ul>
        </CrewItem>
      )}

      {sound.length !== 0 && (
        <CrewItem titleText={"Sound:"}>
          <ul>
            {sound.map((item) => (
              <li key={item.id}>
                {item.name} - {item.job}
              </li>
            ))}
          </ul>
        </CrewItem>
      )}

      {countries.length !== 0 && (
        <CrewItem titleText={"Production countries:"}>
          <ul>
            {countries.map((country) => (
              <li key={country.iso_3166_1}>
                {country.iso_3166_1} - {country.name}
              </li>
            ))}
          </ul>
        </CrewItem>
      )}
    </ul>
  );
};

export default Crew;
