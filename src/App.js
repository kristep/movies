import React from 'react';
import { Switch, Route } from "react-router-dom"

import Header from './features/header/Header.jsx'
import Navigation from "./features/navigation/Navigation.jsx";
import Footer from './features/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import MovieSearch from '../src/features/search/MovieSearch.jsx'
import MovieDetails from './pages/details/MovieDetails.jsx'
import PopularAllTimes from './pages/popular/PopularAllTimes'
import PopularByGenres from './pages/popular/PopularByGenres'
import GetActor from './pages/actor/GetActor'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/popular_all_times">
          <PopularAllTimes />
        </Route>

        <Route exact path="/:movieId">
          <MovieDetails />
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

