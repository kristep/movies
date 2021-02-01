import React from 'react';
import { Switch, Route } from "react-router-dom"

import Header from './components/Header/Header.jsx'
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from './components/Footer/Footer.jsx'
import Home from '../src/pages/home/home'
import MovieSearch from '../src/components/search/MovieSearch'
import GetMovieDetails from './pages/details/GetMovieDetails'
import DetailedSearchForm from './pages/detailedSearch/DetailedSearchForm'
import PopularAllTimes from './pages/popular/PopularAllTimes'
import PopularByGenres from './pages/popular/PopularByGenres'
import GetActor from './pages/actor/GetActor'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigation />

      {/* <SearchLine /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/popular_all_times">
          <PopularAllTimes />
        </Route>

        <Route exact path="/detailed_search">
          <DetailedSearchForm />
        </Route>

        <Route exact path="/:movieId">
          <GetMovieDetails />
        </Route>

        <Route exact path="/actor/:actorName">
          <GetActor />
        </Route>

        <Route exact path="/search_results/:query">
          <MovieSearch />
        </Route>

        <Route exact path="/popular_by_genre/:genreId/:genreName" >
          <PopularByGenres />
        </Route>

      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App;

