import React from "react";
import "./Button.css"

function Button(props) {
  return (
    <div className="Button">
      <form action={props.link}>
       
        <input id= "button" type={props.type} value={props.text} onClick={props.onClick}/>
   
       
      </form>
      {/* props for buttons: text, anchor link,  */}
    </div>
  );
}

export default Button;
