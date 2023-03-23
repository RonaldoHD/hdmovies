import React, { useState,useEffect } from "react";
import '../styles/reco.css'

const Simular=({data})=>{

  const [simular,setSimular]=useState([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${data.id}/similar?api_key=759b5e6f82a4b09d3c0d2781b63d9705`)
    .then(response => response.json())
    .then(movie => {
      // handle the API response data here
      setSimular(movie.results) 
    })
    .catch(error => {
      console.log('fuck youuuuuuzz')
    });  }, [])


    const image_path = "https://image.tmdb.org/t/p/w500"
  return(
      <div className="reco-list">
    
     {simular.map(item=>{
      return(
        <div className="movie-reco">
        <img  src={`${image_path}${item.poster_path}`}  ></img>
       </div>
      )
     })}
       
        
      </div>
  )
}
export default Simular;