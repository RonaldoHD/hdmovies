import React from "react";
import { useState,useEffect } from "react";
import CardCarousel from "../components/MoviesCarousel";
import '../styles/MovieDetails.css'
import Cast from '../components/Cast'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Reco from "../components/reco";
import Simular from "../components/simularMovies";


function MovieDetails(){
  const movieData = JSON.parse(sessionStorage.getItem('movieData'));
  const [cast,setCast]=useState([])
  const [genre,setGenre]=useState([])
  const [genreData,setGenreData]=useState([])
  const movieID=movieData.id 
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=759b5e6f82a4b09d3c0d2781b63d9705`)
    .then(response => response.json())
    .then(data => {
      // handle the API response data here

      setCast(data.cast)
    })
    .catch(error => {
      // handle any errors here
    });
  },
  [])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=759b5e6f82a4b09d3c0d2781b63d9705`)
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
      setGenre(data.genres)      
    })
    .catch(error => {
      // handle any errors here
    });
  },
  [])

     
      
   let component;
  const image_path = "https://image.tmdb.org/t/p/original"
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(
    
    <div className="movie-details" >

      <div className="top-poster" style={{backgroundImage: "url(" + `${image_path}${movieData.backdrop_path}` + ")"}} >
      <div className="poster-detail" >
      <img src={`${image_path}${movieData.poster_path}`}  ></img>  
      </div>

      <div className="thedetails" >
        <h1>{movieData.title}</h1>
        <div className="movie-genres" >
        {movieData.genre_ids.map(x=>{
          
         
          switch(x){
           case 28:
            component="Action"
            break
            case 12:
            component="Adventure"
            break
            case 16:
            component="Animation"
            break
            case 35:
            component="Comedy"
            break
            case 80:
            component="Crime"
            break
            case 99:
            component="Documentary"
            break
            case 18:
            component="Drama"
            break
            case 10751:
            component="Family"
            break
            case 14:
            component="Fantasy"
            break
            case 36:
            component="History"
            break
            case 27:
            component="Horror"
            break
            case 10402:
            component="Music"
            break
            case 9648:
            component="Mistery"
            break
            case 10749:
            component="Romance"
            break
            case 878:
            component="Science Fiction"
            break
            case 10770:
            component="TV Movie"
            break
            case 53:
            component="Thriller"
            break
            case 10752:
            component="War"
            break
            case 37:
            component="Western"
          }
          return(
            <div className="single-genre" >
             <p>{component}</p>
            </div>
             
            
            
          )
    
         })}
         </div>

         <div className="detail-info" >
         <p>{movieData.release_date}</p>
         <p>{movieData.vote_average}%</p>
         </div>
       
        <div  className="movie-desc">
        <p>{movieData.overview}</p>
        </div>
       
      </div>
    
      </div>
  
     <div className="cast-list" >
     <Slider {...settings} >
        {cast.map(name=>{
          return(
            <div  >
            <Cast data={name} />
            </div>
          
          )
        })}
      </Slider>
     </div>

     <h1>Similar Movies</h1>
     <Simular data={movieData} />
     <h1>Recomended Movies</h1>
     <Reco data={movieData} />



    </div>
  )
}

export default MovieDetails;