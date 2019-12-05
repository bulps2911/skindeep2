import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router} from 'react-router-dom';
// import BrowserRouter from "react-router-dom";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";

// import './index.css';

//import components here
// import App from '../App';
import Navbar from "../Navbar";
import Home from "./Home";
import Products from "./Products";

// import * as serviceWorker from './serviceWorker';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <Home /> */}
         {/* <Products /> */}
      </div>
    );
  }
}

export default AppComponent;
