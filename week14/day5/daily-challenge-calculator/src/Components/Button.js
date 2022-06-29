import { Component } from "react";
import style from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button className={style.btn} onClick={this.props.clickHandler}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
