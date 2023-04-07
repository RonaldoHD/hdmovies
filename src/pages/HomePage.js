
import CardCarousel from "../components/MoviesCarousel";
import React, { useState,useEffect } from "react";
import TvshowsCarousel from "../components/tvshowsCarousel";

export default function HomePage(){

  const [action,setaction]=useState([])
  const [adventure,setadventure]=useState([])
  const [animation,setanimation]=useState([])
  const [comedy,setcomedy]=useState([])
  const [war,setwar]=useState([])
  const [tvshows,settvshows]=useState([])
  const [document,setdocument] = useState([])

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
  
      setaction(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
     
      setadventure(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
     
      setanimation(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
     
      setcomedy(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10752&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
     
      setwar(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10770&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
     
      settvshows(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])
  
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=759b5e6f82a4b09d3c0d2781b63d9705')
    .then(response => response.json())
    .then(data => {
      // handle the API response data here
     
      setdocument(data.results)
    })
    .catch(error => {
      // handle any errors here
    });
  },[])
  

  return(
  <div>

     <div>
      <h1>TV Shows</h1>
     <TvshowsCarousel arr={tvshows} />
     </div>

     <div>
      <h1>Action</h1>
     <CardCarousel arr={action} />
     </div>

     <div>
      <h1>Adventure</h1>
     <CardCarousel arr={adventure} />
     </div>

     <div>
      <h1>Animation</h1>
      <CardCarousel arr={animation} />
     </div>

     <div>
      <h1>Documenteries</h1>
     <TvshowsCarousel arr={document} />
     </div>

     <div>
      <h1>Comedy</h1>
      <CardCarousel arr={comedy} />
     </div>

     <div>
      <h1>War</h1>
      <CardCarousel arr={war} />
     </div>
  </div>
   

     


  )
}