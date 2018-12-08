import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import tabBar from "./Home/HomeImages/TabBar.jpg";
import "./Dashboard.css";

class Navigation extends Component {
  render() {
    return (
            <div>
                <li>
                 <NavLink to="/"><div ><img src={tabBar} className="toppane" alt="logo"  /></div></NavLink>
                </li>
            </div>
    );
  }
}

    export default Navigation;