import style from "./Card.module.css";
import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        className={style.card}
        onClick={() => {
          this.props.handleClick(this.props.id);
        }}
      >
        <div className={style["img-container"]}>
          <img className={style.img} src={this.props.src} alt="" />
        </div>
        <p>
          <span className={style.title}>Name:</span> {this.props.name}
        </p>
        <p>
          <span className={style.title}>Occupation:</span>{" "}
          {this.props.occupation}
        </p>
      </div>
    );
  }
}

export default Card;
