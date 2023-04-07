import React, { useState,useEffect } from "react";
import '../styles/moviecarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MovieDetails from "../pages/MovieDetails";



const CardCarousel=()=>{


const [action,setaction]=useState([])
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
      console.log(data)
      setaction(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
     {action.map(item=>{
      return(   
        <div  className="movie-card"  > 
          <img  src={`${image_path}${item.poster_path}`} onClick={()=>click(item)} ></img>   
       </div> 
       )})}
    </Slider>
  )
}

export default CardCarousel;



