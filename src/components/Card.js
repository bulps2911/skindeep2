import React from "react";

function Card(props) {
  return (
    <div className="Card">
        {this.state.props.map((each)=>(
           <div className="Card">
             {/* <Card src={each.imgUrl} alt={each.shade}/> */}
             <img src={each.imgUrl} height="100" width="100" alt={each.shadeName} /> 
         <h4>Shade is {each.shadeName}</h4> 
           </div>
         ))}
      {/* <img src={props.imgUrl} alt={props.shadeName}/>
      <h4>Shade is {props.shadeName}</h4> */}
    </div>
  );
}

export default Card;
