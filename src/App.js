import React from 'react';
import { useEffect, useState } from 'react';
import CardCarousel from "./components/MoviesCarousel";
import Header from './components/Header';
import SearchBar from './components/search';
import './App.css';
import MovieDetails from './pages/MovieDetails'
import Search from './components/search';
import HomePage from './pages/HomePage'
function App() {



  let component 
 

  switch(window.location.href){

    case "/":
      component = <HomePage/>
      break

    case "https://hdmovies.onrender.com/second":
      component = <MovieDetails/>
      break

  }

  return (
    <div className="App">
      
      <div className='topPage' >
        <Header/>
        <SearchBar/>
      </div>

     {component}

       <div>
        <h1>Footerrrrr</h1>
       </div>

      </div>
  );
}

export default App;
