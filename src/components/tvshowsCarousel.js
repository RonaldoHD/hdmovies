import React, { useState,useEffect } from "react";
import '../styles/moviecarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MovieDetails from "../pages/MovieDetails";

const TvshowsCarousel=({arr})=>{

  const settings = {
   
    
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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

const image_path = "https://image.tmdb.org/t/p/w500"


const [movie,setMovie]=useState([])

const click=(thisMovie)=>{
  sessionStorage.setItem('movieData', JSON.stringify(thisMovie));
  window.location.pathname='/second'
}
  return(
   <Slider{...settings} className="slider-movies" >
     {arr.map(item=>{
      return(   
        <div  className="movie-card"  > 
          <img style={{borderRadius:10 , }} src={`${image_path}${item.backdrop_path}`} onClick={()=>click(item)} ></img>   
          <p style={{padding:10 , color:"white"}} >{item.title}</p>
       </div> 
       )})}
    </Slider>
  )
}

export default TvshowsCarousel;



