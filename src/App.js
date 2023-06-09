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
import { Route,Routes } from 'react-router-dom';
import Category from './pages/Category';

function App() {

  return (
    <div className="App">
      
      <div className='topPage' >
        <Header/>
        <SearchBar/>
      </div>

     <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/second' element={<MovieDetails/>} ></Route>
       <Route path='/third' element={<Category/>} ></Route>
       <Route path='/search' element={<Search/>} ></Route>
     </Routes>

       <Footer/>
       <div>.</div>

      </div>
  );
}

export default App;
