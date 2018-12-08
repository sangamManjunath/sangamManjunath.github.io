import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./TravelWithMe.css";
import MeghalayaBlog from "./MeghalayaBlog/MeghalayaBlog.jpg";
import LehLadakhBlog from "./LehLadakh/LehLadakhBlog.jpg";

class TravelWithMe extends Component {
  render() {
    return (
      <div className="App container">
        <div className="container content">
        <NavLink to="/Meghalaya">     
        <div >
          <div >
        <img src={MeghalayaBlog} alt="Avatar" className="container" />
        </div>
        <div >
        <h4><b>A trip to the land of clouds</b></h4> 
        </div>
  </div> 
</NavLink>
</div>
      <div className="container content">
      <NavLink to="/LehLadakh">
      <div>
        <img src={LehLadakhBlog} alt="Avatar" className="container"/>
      <div >
      <h4><b>A trip to the land of mountains</b></h4> 
      </div>
  </div>
  </NavLink>
      </div>
      </div>
    );
  }
}

export default TravelWithMe;