import React from "react";
import "./Navbar.css";
// import {BrowserRouter} from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

function Navbar() {
  return (
    
      <BrowserRouter>
      <div>
        <nav className="navbar">
          <ul className="nav">
            {/* <div className="links"> */}
            <li>
              <Link to="/">
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <div>Products</div>
              </Link>
            </li>
            {/* </div> */}
            
           
              <div className="brand">
                <li>
                skinDeep
                </li>
              </div>
            
          </ul>
        </nav>

        <Switch>
          {/* <div> */}
          <Route exact path="/" component={ Home } />
          <Route path="/products" component={ Products } />
          {/* </div> */}
          
        </Switch>
        </div>
      </BrowserRouter>

  
  );
}



export default Navbar;
