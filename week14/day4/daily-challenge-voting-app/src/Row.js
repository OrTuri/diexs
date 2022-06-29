import { Component } from "react";
import style from "./Row.module.css";
import Button from "@mui/material/Button";

class Row extends Component {
  clickHandler = () => {
    this.props.voting(this.props.language.name);
  };
  render() {
    return (
      <div className={style.row}>
        <div>
          <p className="f3">{this.props.language.votes}</p>
        </div>
        <div>
          <p className="f3 fw6">{this.props.language.name}</p>
        </div>
        <div>
          <Button variant="contained" onClick={this.clickHandler}>
            Vote now!
          </Button>
        </div>
      </div>
    );
  }
}

export default Row;
