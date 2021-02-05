import React from "react";

import "./productionCompanies.scss";

const ProductionCompanies = ({ production_companies }) => {
  return (
    <>
      <h4 className="companies__title">Production companies:</h4>
      <ul className="companies__list">
        {production_companies.map((company) => (
          <li key={company.id} className="companies__item">
            {company.logo_path ? (
              <img
                className="companies__logo"
                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                alt="company logo"
              />
            ) : (
              <div className="companies__instead-logo">
                <p>{company.name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductionCompanies;
