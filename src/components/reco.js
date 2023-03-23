import React, { useState,useEffect } from "react";
import '../styles/reco.css'
import {click} from './MoviesCarousel'
const Reco=({data})=>{

  const [reco,setReco]=useState([])

  const click=(thisMovie)=>{
    sessionStorage.setItem('movieData', JSON.stringify(thisMovie));
    window.location.href='/second'
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${data.id}/recommendations?api_key=759b5e6f82a4b09d3c0d2781b63d9705`)
    .then(response => response.json())
    .then(movie => {
      // handle the API response data here
      setReco(movie.results) 
    })
    .catch(error => {
      console.log('fuck youuuuuuzz')
    });  }, [])


    const image_path = "https://image.tmdb.org/t/p/w500"
  return(
      <div className="reco-list">
    
     {reco.map(item=>{
      return(
        <div className="movie-reco" onClick={()=>click(item)} >
        <img  src={`${image_path}${item.poster_path}`}   ></img>
       </div>
      )
     })}
       
        
      </div>
  )
}
export default Reco;