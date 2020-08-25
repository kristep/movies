import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchLine from './components/search/SearchLine'
import Home from '../src/pages/home/home'
import MovieSearch from '../src/components/search/MovieSearch'
import GetMovieDetails from './pages/details/GetMovieDetails'
import DetailedSearchForm from './pages/detailedSearch/DetailedSearchForm'
import PopularAllTimes from './pages/popular/PopularAllTimes'
import PopularByGenres from './pages/popular/PopularByGenres'
import GetActor from './pages/actor/GetActor'
import ActorSearch from './pages/actor/ActorSearch'

//**error handling from fetch  --  is useFetch neina destructing daugiau nei viena return

//**minimize movie title in SingleResult to 2 rows? */

//paspaudus loadMore, kai loadina paskutini psl kartoja pries tai buvusius rezultatus, o ne loadina tik likusius

// popularByGenres kai paspaudi load more, persikrauna visas komponentas(psl??), o reikia kad tik prisidetu papildomi rezultatai, kaip in homepage

//Actor.js known for skiltyje kolkas rodomi tik filmai, nes tv series dar neitraukta (tikriausiai kitokie details nei movie)
function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchLine />
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

        {/* <Route exact path="/actor">
          <ActorSearch />
        </Route> */}

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

