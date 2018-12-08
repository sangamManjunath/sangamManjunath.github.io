import React, { Component } from 'react';
import Home from "./Components/Home/Home";
import TravelWithMe from "./Components/TravelWithMe/TravelWithMe";
import Meghalaya from "./Components/TravelWithMe/Meghalaya";
import About from "./Components/About/About";
import {BrowserRouter , Route, Switch} from "react-router-dom";
import Error from "./Components/Error/Error";
import Navigation from "./Components/Navigation";
import './App.css';

class App extends Component {

  render() { 
    return (  
      <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
      <Route path="/" component={Home} exact/>  
      <Route path="/TravelWithMe" component={TravelWithMe}/>
      <Route path="/About" component={About}/>
      <Route path="/TravelWithMe/Meghalaya" component={Meghalaya}/>
      <Route  component={Error}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
