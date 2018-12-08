import React, { Component } from 'react';
import about from './HomeImages/Host.jpg';
import TravelExpedition from './HomeImages/Travel_Expedition.jpg';
import Slider1 from './SliderImages/Slider1.jpg';
import Slider2 from './SliderImages/Slider2.jpg';
import Slider3 from './SliderImages/Slider3.jpg';
import Slider4 from './SliderImages/Slider4.jpg';
import Slider5 from './SliderImages/Slider5.jpg';
import Slider6 from './SliderImages/Slider6.jpg';
import Slider7 from './SliderImages/Slider7.jpg';
import {NavLink} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Home extends Component {
  render() {
    return (
    <div className="backGround body container">
    <div>
    <div className="leftpane content1 ">
    <div>Have a look at the SlideShow below:</div>
      <Carousel>
        <div><img src={Slider1} alt="Slider Image"/><p className="legend">Double Root Bridge, Meghalaya, India</p></div>
        <div><img src={Slider2} alt="Slider Image"/><p className="legend">Nongriat, Meghalaya, India</p></div>
        <div><img src={Slider3} alt="Slider Image"/><p className="legend">Kempegowda Airport, India</p></div>
        <div><img src={Slider4} alt="Slider Image"/><p className="legend">Kannambadi katte, Mysore</p></div>
        <div><img src={Slider5} alt="Slider Image"/><p className="legend">Srinagar, Kashmir, India</p></div>
        <div><img src={Slider6} alt="Slider Image"/><p className="legend">Zozila Pass, Kashmir, India</p></div>
        <div><img src={Slider7} alt="Slider Image"/><p className="legend">Somewhere in Kashmir!!</p></div>
      </Carousel>
      </div>
      <div className="body App middlepane flex-container shadow ">
      <header >
      <div >Hello/ Hola/ Bonjour/ Namaskaara!!</div>
      <div>
        <div >Welcome to the world of JOY! You have been provided with 2 cards in front of you which will lead to 2 different worlds of mine! Let me know what you think on sangammanjunath@gmail.com !! </div>
        <div>
          <NavLink to="/TravelWithMe"><img className="img-responsive" src={TravelExpedition} className="App-logo" alt="logo" /></NavLink>
        <NavLink to="/About"><img src={about} className="App-logo" alt="logo" /></NavLink></div>
        </div>
      </header>
      </div>
      </div>
     
    </div>
    );
  }
}

export default Home;