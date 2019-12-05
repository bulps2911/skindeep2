// import React from 'react';
const React = require("react");
// import ReactDOM from 'react-dom';
const ReactDOM = require("react-dom");
const App = require("./App");
// import './index.css';
// import App from './App';
const serviceWorker = require("./serviceWorker");
// import * as serviceWorker from './serviceWorker';

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// these last 2 lines of codes will find the respective <div> tag in the html
// then it will display the like button react component
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButon), domContainer);
// ReactDOM.render(<App />, document.getElementById('root'));

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// app.use(express.static(__dirname, 'public'));


const server = app.listen(PORT, () => {
  //this is a function without args in es6
  console.log(`server up at ${PORT}`);
});

// app.engine('html', require('ejs').renderFile);
// // app.engine("pug", require("pug").__express);
// app.set("view engine", "pug");

app.get("/", (req, res) => {
    console.log("GET request for homepage");
    res.render("./public/index.html");
  });

  serviceWorker.unregister();