import {Component} from "react";
import InputField from "./components/InputField";
import TextField from "./components/TextField";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTextFieldGray: false
        }
    }
    onButtonClick = () => {
        this.setState({
            isTextFieldGray: true
        });
    };
    render() {
        const {isTextFieldGray} = this.state;
        return (
           <div>
               <InputField onButtonClick={this.onButtonClick} />
               <TextField isTextFieldGray={isTextFieldGray} />
           </div>
        );
    }
}
export default App;