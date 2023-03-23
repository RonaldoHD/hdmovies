import React from "react";
import CardCarousel from "../components/MoviesCarousel";

export default function HomePage(){
  return(
    <div>
     <div>
      <h1>Action</h1>
     <CardCarousel/>
     </div>

     <div>
      <h1>Drama</h1>
     <CardCarousel/>
     </div>

     <div>
      <h1>Popular</h1>
     <CardCarousel/>
     </div>

     <div>
      <h1>Comedy</h1>
     <CardCarousel/>
     </div>

    </div>
  )
}