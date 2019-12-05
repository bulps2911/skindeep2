import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link} from "react-router-dom";
import './index.css';

//import components here
import App from './App';
import Navbar from "./Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import UploadContainer from "./components/UploadContainer";
import Upload1 from "./components/Upload1";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Navbar/>, document.getElementById('navi'));
// ReactDOM.render(<UploadContainer/>, document.getElementById('tryupload'));
// ReactDOM.render(<Upload1/>, document.getElementById("tryupload"));
// ReactDOM.render(<Products/>, document.getElementById("tryupload"));
ReactDOM.render(<App />, document.getElementById('root'));

// react router dom

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
