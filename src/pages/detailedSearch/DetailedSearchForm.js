import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import { GetGenres } from '../../components/getters/GetGenres'
import { useFetch } from '../../hooks/useFetch'
import DetailedSearchResults from './DetailedSearchResults'
import Test from './Test'

import { GetActorData } from './GetActorData'



// sort by date --- neveikia --- tikriausiai del API

// actor neperduoda id i url + pakeisti kad perduotu ne visus variantus is array map, nes ju gali buti labai daug (gal i input idet suggestion??? dabar padariau kad naudotu [0] varianta.)   
//ten kur naudojamas useFetch su actorName, actorName yra nepasiekiamas. gal kazkaip viska daryti kitame componente,  i kuri perduoti visus values is Formik??????????




const DetailedSearchForm = () => {
  const genres = GetGenres()
  // const [url, setUrl] = useState('')
  const [fullUrl, setFullUrl] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)



  // const getGenre = (selected) => {
  //   if (selected !== '') {
  //     return `&with_genres=${selected}`
  //   } else {
  //     return ''
  //   }
  // }

  // const getYear = (year) => {
  //   if (year !== '') {
  //     return `&primary_release_year=${year}`
  //   } else {
  //     return ''
  //   }
  // }

  // const id = GetActorData(actorName)
  // console.log(id)

  // const handleValues = (values) => {

  //   setActorName(values.actor)

  //   setFullUrl(`https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb${getGenre(values.selectedGenre)}${getYear(values.year)}&sort_by=${values.sortBy}&page=`)




  // }



  return (
    <div>

      {genres !== '' ?

        <Formik
          initialValues={{
            year: '',
            actor: '',
            selectedGenre: '',
            sortBy: 'vote_average.desc'
          }}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            setIsSubmitted(true)
            setSubmitting(true);

            setSubmitting(false)
            // resetForm();
          }}
        >
          {({

            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue

          }) => (
              <div>


                <form onSubmit={handleSubmit}>

                  <div className="input-row">
                    <label>Sort by:</label>
                    <select
                      value={values.sortBy}
                      onChange={handleChange}
                      name="sortBy"
                      className="sort-by">
                      <option value="vote_average.desc">popularity</option>
                      <option value="release_year.asc">release date - ascending</option>
                      <option value="release_year.desc">release date - decreasing</option>
                    </select>
                  </div>

                  <div className="input-row">
                    <label>Year of release</label>
                    <input
                      type="text"
                      name="year"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.year}
                      className={touched.year && errors.year ? "has-error" : null}
                    />
                    {/* <Error touched={touched.year} message={errors.year} /> */}
                  </div>

                  <div className="input-row">
                    <label>Actor</label>
                    <input
                      type="text"
                      name="actor"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.actor}
                      className={touched.actor && errors.actor ? "has-error" : null}
                    />
                    {/* <Error touched={touched.actor} message={errors.actor} /> */}
                  </div>


                  <div className="input-row">
                    {genres !== '' ? genres.genres.map(genre => (
                      <div key={genre.id}>
                        <label>
                          <input
                            name="selectedGenre"
                            type="radio"
                            value={genre.id}
                            checked={values.selectedGenre.includes(genre.id)}
                            onChange={handleChange}
                          />{" "}
                          {genre.name}
                        </label>
                      </div>
                    ))
                      : null}
                  </div>

                  <div className="input-row">
                    <button type="submit" disabled={isSubmitting}  >
                      Submit
                  </button>
                  </div>


                  {isSubmitted ? <GetActorData values={values} isSubmitted={isSubmitted} /> : ''}

                </form>
              </div>
            )}


        </Formik>
        : ''}

      <DetailedSearchResults url={fullUrl} />

    </div >
  )
}

export default DetailedSearchForm