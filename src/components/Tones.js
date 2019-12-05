import React from "react";
import "./Tones.css";

function Tones(props) {
  return (
    <div className="Tones">
      <div className="Tones-Image">
        <img
          src={props.img}
          alt={props.imgAlt}
          align={props.align}
        />
      </div>
      <div className="Tones-Title">
        <h3>{props.title}</h3>
      </div>
      <div className="Tones-Description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Tones;
