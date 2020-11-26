import React from "react";
import { moviesData } from "../MoviesData";
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './Description.css'

export default function Description(props) {
  console.log(props.location.state);
  console.log(moviesData);

  return (
    <div>
      <h1>{props.location.state.name}</h1>
      <p>{props.location.state.description}</p>
       <ReactPlayer url={props.location.state.trailer}/>
       <Link to="/"><h4>← Previous</h4></Link> 
    </div>

  );
}

