import React from "react";
import Button from "./Button";

function Hero(props) {
  return (
    <div className="Hero">
      <h2>{props.maintext}</h2>
      <img src={props.src} alt={props.alt} float="right" />
      <Button type= "button" link="#uploadContainer" text="TRY NOW" onClick={props.onClick}/>
    </div>
  );
}

export default Hero;
