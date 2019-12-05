import React from "react";
import Button from "./Button";
import Form from "./Form";
import "./Upload.css";

function Upload(props) {
  return (
    <div className="Upload">
      <h2>UPLOAD SKIN TONE</h2>
      <div className="ChooseFile">
        <Form
          // action="https://skin-deep.herokuapp.com/uploadapi"
          method="POST"
          encType="multipart/form-data"
          type="file"
          name="userImg"
          onChange={props.onChange}
          required={props.required}
        />
      </div>
      <div className="Submit">
        <Button
          type="button"
          // link="/upload"
          text="UPLOAD"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

export default Upload;
