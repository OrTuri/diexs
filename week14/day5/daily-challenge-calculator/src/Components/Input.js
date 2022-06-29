import { Component } from "react";
import style from "./Input.module.css";

class Input extends Component {
  passNumbers = (e) => {
    this.props.inputHandler(Number(e.target.value), this.props.sign);
  };

  render() {
    return (
      <input
        type={"number"}
        className={style.input}
        onInput={this.passNumbers}
        value={this.props.value}
      />
    );
  }
}

export default Input;
