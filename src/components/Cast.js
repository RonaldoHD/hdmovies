import React from "react";
import '../styles/Cast.css'
const Cast=({data})=>{
  const image_path = "https://image.tmdb.org/t/p/w200"
  return(
       <div className="cast-card" >
        <img className="actorimg" src={`${image_path}${data.profile_path}`} ></img>
        <h1 className="actorname" >{data.name}</h1>
        <p className="character">{data.character}</p>
       </div>
     
  )
}
export default Cast