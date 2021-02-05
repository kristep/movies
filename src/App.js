import React from 'react';
import { Switch, Route } from "react-router-dom"

import Content from "./features/layout/content/Content";
import Header from './features/layout/header/Header.jsx'
import Navigation from "./features/navigation/Navigation.jsx";
import Footer from './features/layout/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import MovieSearchResults from './pages/searchResults/MovieSearchResults.jsx';
import MovieDetails from './pages/details/MovieDetails.jsx'
import PopularAllTimes from './pages/popular/PopularAllTimes.jsx'
import PopularByGenres from './pages/popular/PopularByGenres.jsx'
import ActorDetails from './pages/actor/ActorDetails'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Content>
            <Home />
          </Content>

        </Route>

        <Route exact path="/most_popular">
          <Content>
            <PopularAllTimes />
          </Content>
        </Route>

        <Route exact path="/:movieId">
          <Content>
            <MovieDetails />
          </Content>
        </Route>

        <Route exact path="/actor/:actorName">
          <Content>
            <ActorDetails />
          </Content>
        </Route>

        <Route exact path="/search_results/:query">
          <Content>
            <MovieSearchResults />
          </Content>

        </Route>

        <Route exact path="/popular_by_genre/:genreId/:genreName" >
          <Content>
            <PopularByGenres />
          </Content>
        </Route>

      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App;

