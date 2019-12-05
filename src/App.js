import React from "react";
// import logo from "./logo.svg";
// import hero from "./hero.png";
import "./App.css";
import AppComponent from "./components/AppComponent";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      {/* <header> */}
        <header className="App-header">
      <Navbar/>
      
        
      {/* ReactDOM.render(<AppComponent />); */}
      </header>
       {/* <body> */}
       {/* <AppComponent/> */}
       {/* <a href="http://google.com" class="btn btn-default">Go to Google</a> */}
       {/* <input type="button" onclick="location.href='http://google.com';" value="Go to Google" /> */}
         
      {/* </body> */}
      {/* <footer>About Us Contact</footer> */}
    </div>
  );
}

export default App;
