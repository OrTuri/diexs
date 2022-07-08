import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChangeHandler}
          name={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Input;
