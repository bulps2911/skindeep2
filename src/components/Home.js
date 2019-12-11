import React from "react";
// import logo from "./logo.svg";
// import hero from "./hero.png";
import "./Home.css";
import Upload from "./Upload1";
import Hero from "./Hero";
import TonesContainer from "./TonesContainer";
import hero from "../assets/hero1.png";

// import hero from "../hero.png";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }

  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };

  render() {
    return (
      // <div className="Home">
      <div className="Home">
        {/* <body> */}
        <div className="Home-Hero">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src={sun} className = "Hero" alt="hero here"/> */}
          {/* <p>GET YOUR FOUNDATION MATCH</p> */}
          <Hero
            maintext="GET YOUR FOUNDATION MATCH"
            src={hero}
            alt="hero"
            onClick={this.handleScroll}
          />
        </div>

        <div className="Home-Tones">
          <TonesContainer />
          {/* <h1>tones</h1> */}
          {/* <p>ADD LIKE BUTTON HERE</p> */}
        </div>
        <div className="Home-Upload" ref={this.main}>
          <Upload />
        </div>
        {/* </body> */}
      </div>
    );
  }
}

export default Home;
