import React from "react";
import Button from "./Button";
import "./Upload.css";


function Result(props){
    return(
<div className="Result">
<h2>Results</h2>
<h3>Your Results</h3>
    <p>[{props.rgb}]</p>
    {/* <Form action="/upload" method = "POST" enctype="multipart/form-data" type="file" name="userImg" required="true" /> */}
    <Button type="button" link="/upload" text = "TRY AGAIN" onClick={props.onClick}/>
</div>
    );
}


export default Result;