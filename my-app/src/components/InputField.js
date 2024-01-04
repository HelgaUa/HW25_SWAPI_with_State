import React from "react";
import "../style.css";
import Btn from "./Button";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputDisabled: false,
            isButtonDisabled: false,
        };
    }
    onButtonClick = () => {
        this.setState({
            isInputDisabled: true,
            isButtonDisabled: true,
        });
        this.props.onButtonClick();
    };
  render() {
      const {isInputDisabled, isButtonDisabled} = this.state;
      return (
            <div className="input-container">
              <input
                  type="text"
                  disabled={isInputDisabled}
              />
              <Btn
                  name='Get info'
                  className="btn"
                  onClick={this.onButtonClick}
                  disabled={isButtonDisabled}
              />
            </div>

        )
  }
}

export default InputField;
