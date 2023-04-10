import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import '../styles/header.css'
import Category from '../pages/Category';


function Header() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [genres,setgenres]=useState([])


  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
     
      setgenres(data.genres)
 
    })
    .catch(error => {
      // handle any errors here
    });
  },[])

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  const getGenre=(element)=>{
   
    sessionStorage.setItem('genreID',element.id)
    sessionStorage.setItem('genreName',element.name)
    window.location.pathname='/third'
   
  }

  return (
    <div className="app-container">
      <div className="icon" onClick={toggleSidebar}>
      <i  className='open-side' >  <FaBars size={75} color="#1987bd" />  </i>
      </div>
      <h1>HD Movies</h1>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={closeSidebar}>
          <i className='close-side' ><AiOutlineClose  size={44} color="white" /></i>
        </div>
        <ul className='nav-list' >
          <li  ><Link to="/" >Home</Link></li>
          
          <br></br>
          <li>Categories </li>

        </ul>
         <ul className='cat-list'>
          {genres.map(item=>{
            return(
              <li onClick={()=>getGenre(item)} >{item.name}</li>
            )
          })}
         </ul>
      </div>

    </div>
  );
}

export default Header;
