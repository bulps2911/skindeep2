import React from "react";
import "./Navbar.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

function Navbar() {
  return (
      <BrowserRouter>
      <div>
        <nav className="navbar">
          <ul className="nav">
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
              <div className="brand">
                <li>
                skinDeep
                </li>
              </div> 
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/products" component={ Products } />
        </Switch>
        </div>
      </BrowserRouter>

  
  );
}



export default Navbar;
