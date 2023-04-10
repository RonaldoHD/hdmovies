import React, { useState,useEffect } from "react";
import '../styles/moviecarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MovieDetails from "../pages/MovieDetails";

const CardCarousel=({arr})=>{

  const settings = {
   
    
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
      
        
        }
      }
    ]
  };

const image_path = "https://image.tmdb.org/t/p/w200"


const [movie,setMovie]=useState([])

const click=(thisMovie)=>{
  sessionStorage.setItem('movieData', JSON.stringify(thisMovie));
  window.location.pathname='/second'
}
  return(
   <Slider{...settings} className="slider-movies" >
     {arr.map(item=>{
      return(   
        <div  className="movie-card" > 
          <img className="http" src={`${image_path}${item.poster_path}`} onClick={()=>click(item)} ></img>   
       </div> 
       )})}
    </Slider>
  )
}

export default CardCarousel;



