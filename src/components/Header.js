import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import '../styles/header.css'


function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

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
          <li>Home</li>
          
          <br></br>
          <li>Categories :</li>

        </ul>
         <ul className='cat-list'>
          <li>Action</li>
          <li>Drama</li>
          <li>TV Shows</li>
          <li>Adventure</li>
          <li>Fantasy</li>
          <li>War</li>
          <li>Romance</li>
         </ul>
      </div>

    </div>
  );
}

export default Header;
