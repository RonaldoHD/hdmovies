import React from 'react';
import { useEffect, useState } from 'react';
import CardCarousel from "./components/MoviesCarousel";
import Header from './components/Header';
import SearchBar from './components/search';
import './App.css';
import MovieDetails from './pages/MovieDetails'
import Search from './components/search';
import HomePage from './pages/HomePage'
import Footer from './components/footer';
function App() {



  let component 
 

  switch(window.location.pathname){

    case "/":
      component = <HomePage/>
      break

    case "/second":
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

       <Footer/>

      </div>
  );
}

export default App;
