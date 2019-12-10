import React from "react";
import Upload from "./Upload";
import Result from "./Result";
import axios from "axios";

class Upload1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenFile: null,
      uploading: false,
      successMsg: []
    };
    this.toggleButton = this.toggleButton.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  toggleButton() {
    this.setState(state => ({ uploading: !state.uploading }));
  }

  onChangeHandler = event => {
    // console.log("hello");
    // console.log(event.target.files[0]);
    // console.log(event.target.files);
    this.setState({
      chosenFile: event.target.files[0],
      loaded: 0
    });
  };

  onClickHandler() {
    const newData = new FormData();
    const img = this.state.chosenFile;
    newData.append("file", img);
    // console.log("trying to upload to api");
    // console.log(newData);
    axios
      .post("https://skin-deep.herokuapp.com/uploadapi", newData, {})
      .then(res => {
        //print response from server
        this.toggleButton();
        // console.log("see here");
        // console.log(res.data);
        // const msg = this.state.successMsg;
        // console.log(this.state.successMsg);
        this.setState(
          {
            successMsg: [...this.state.successMsg, res.data.rgb]
          },
          () => {
            return this.state.successMsg;
          }
        );
        // console.log(this.state.successMsg);
      });
  }

  render() {
    const { uploading } = this.state;
    let page;
    const { successMsg } = this.state;
    // const rgb = successMsg.map(successMsg => successMsg);
    // console.log(rgb);

    if (!uploading) {
      page = (
        <Upload
          onClick={this.onClickHandler}
          onChange={this.onChangeHandler}
          required={true}
        />
      );
    } else {
        successMsg.map(
          value =>
            (page = (
              <div className="try" key={value[0]}>
                <Result rgb={value} onClick={this.toggleButton} />;
              </div>
            ))
        )
    
    }
    return (
      <div className="Upload1">
        {page}

        {this.state.display}
      </div>
    );
  }
}
export default Upload1;
