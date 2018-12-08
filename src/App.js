import React, { Component } from 'react';
import Home from "./Components/Home/Home";
import TravelWithMe from "./Components/TravelWithMe/TravelWithMe";
import Meghalaya from "./Components/TravelWithMe/MeghalayaBlog/Meghalaya";
import LehLadakh from "./Components/TravelWithMe/LehLadakh/LehLadakh"
import About from "./Components/About/About";
import {BrowserRouter , Route, Switch} from "react-router-dom";
import Error from "./Components/Error/Error";
import Navigation from "./Components/Navigation";
import style from './App.css';
//import tabBar from "./TabBar.jpg";

class App extends Component {

  render() { 
    return (  
      <div className={style.backGround}>
      <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
      <Route path="/" component={Home} exact/>  
      <Route path="/TravelWithMe" component={TravelWithMe}/>
      <Route path="/About" component={About}/>
      <Route path="/Meghalaya" component={Meghalaya}/>
      <Route path="/LehLadakh" component={LehLadakh}/>
      <Route  component={Error}/>
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
