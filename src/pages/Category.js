import React, { useState , useEffect} from "react";
import '../styles/categories.css'

export default function Category(){

   const [movies,setmovies]=useState([])

   var genreID = sessionStorage.getItem('genreID')
   var genreName = sessionStorage.getItem('genreName')

   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&api_key=759b5e6f82a4b09d3c0d2781b63d9705`)
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
      console.log(data.results)
      setmovies(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])

  const image_path = "https://image.tmdb.org/t/p/w200"

  const click=(thisMovie)=>{
    sessionStorage.setItem('movieData', JSON.stringify(thisMovie));
    window.location.pathname='/second'
  }
  return(

    <div >
        <h1>{genreName}</h1>
        <div className="movies" >
        {movies.map(item=>{
        return(
            <div>
           <img className="categ" src={`${image_path}${item.poster_path}`} onClick={()=>click(item)} ></img>   
            <p className="mname" >{item.title}</p>
            </div>
   
        )
     })}
        </div>
  
    </div>

  )
}