import { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <h2 className={style.heading}>{this.props.title}</h2>
          <summary>
            Click for details
            <details>{this.props.description}</details>
          </summary>
          <button
            className={style["close-btn"]}
            onClick={this.props.handleClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
