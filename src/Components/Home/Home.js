import React, { Component } from 'react';
import about from './HomeImages/Host.jpg';
import TravelExpedition from './HomeImages/Travel_Expedition.jpg';
import {NavLink} from "react-router-dom";


class Home extends Component {
  render() {
    return (
        <div className="App">
      <header >
      <div className="flex-container">Hello/ Hola/ Bonjour/ Namaskaara!!</div>
      <div className="shadow">
        <div className="custom-content" >Welcome to the world of JOY! You have been provided with 2 cards in front of you which will lead to 2 different worlds of mine! Let me know what you think on sangammanjunath@gmail.com !! </div>
        <NavLink to="/TravelWithMe"><img className="img-responsive" src={TravelExpedition} className="App-logo" alt="logo" /></NavLink>
        <NavLink to="/About"><img src={about} className="App-logo" alt="logo" /></NavLink>
      </div>  
      </header>
    </div>
    );
  }
}

export default Home;