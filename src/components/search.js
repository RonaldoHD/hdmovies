import React from "react";
import '../styles/search.css'
import { useState,useEffect } from "react";



export default function SearchBar(){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleClick = () => {
      alert(inputValue); // Alerts the current value of the input field
      sessionStorage.setItem("search",inputValue)
      window.location.pathname='/search'
    };

  return (
  <div>
    <div class="input-group">
    <input type="email" class="input" id="Email" name="Email" placeholder="Search Movie" autocomplete="off" onChange={handleInputChange} ></input>
    <input class="button--submit" value="Search" type="submit" onClick={handleClick}></input>
</div>
  </div>
    
  )
}