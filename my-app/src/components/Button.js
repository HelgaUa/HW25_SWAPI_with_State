import {Component} from "react";

class Btn extends Component {

    render() {
        const{name, className, onClick, disabled} = this.props;
        return (
            <button
            className = {`btn ${className}`}
            onClick = {onClick}
        disabled = {disabled}>
            {name}
        </button>
        );
    }
}
export default Btn;