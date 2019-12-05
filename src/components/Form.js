import React from "react";
import "./Button.css";

function Form(props){
    return(
        <div className="Form">
            <form action={props.action} method={props.method} encType={props.encType} onChange={props.onChange} >
                <input type={props.type} name={props.inputName} required={props.required}>
                </input>

            </form>
        </div>
    );
}

export default Form;