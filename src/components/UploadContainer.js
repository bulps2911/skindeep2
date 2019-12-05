import React from "react";
import Upload from "./Upload";
import Result from "./Result";

class UploadContainer extends React.Component {
  //Create class consructor that assigns initial this.state
  constructor(props) {
    //super is used to access and call functions on object's paernts
    super(props);
    this.state = { displayUpload: true };

    //the internet said this binding is necessary to make `this` work in the callback
    // this.uplaod = this.upload.bind(this);
    // this.result = this.result.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
      this.setState(state=>({displayUpload:!state.displayUpload}));
  }

  render() {
    //similar to const displayUpload= this.state.displayUpload;
    //this is Object destructuring
    const { displayUpload } = this.state;
    let page;

    if (displayUpload) {
    //   {this.state.displayUpload}
        page = <Upload onClick={this.toggleButton}/>;
    } else {
      page = <Result onClick={this.toggleButton} />;
    }
    return (
      <div className="UploadContainer">
        {page}

        {this.state.display}
      </div>
    );
  }


}
export default UploadContainer;

