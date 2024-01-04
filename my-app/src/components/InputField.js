import React from "react";
import "../style.css";
import Btn from "./Button";
import TextField from "./TextField";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputDisabled: false,
            isButtonDisabled: false,
            isTextFieldGray: false,
        };
    }
    onButtonClick = () => {
        this.setState({
            isInputDisabled: true,
            isButtonDisabled: true,
            isTextFieldGray: true,
        });
    };
  render() {
      const {isInputDisabled, isButtonDisabled, isTextFieldGray} = this.state;
      return (
            <div className="input-container">
              <input
                  type="text"
                  disabled={isInputDisabled}
              />
              <Btn
                  name = 'Get info'
                  className="btn"
                  onClick={this.onButtonClick}
                  disabled={isButtonDisabled}
              />
                <TextField isTextFieldGray={isTextFieldGray} />
            </div>
        )
  }
}

export default InputField;
