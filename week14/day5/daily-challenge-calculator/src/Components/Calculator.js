import { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import style from "./Calculator.module.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.numbers = {};
    this.state = {
      sum: 0,
      A: 0,
      B: 0,
    };
  }

  getInputData = (number, sign) => {
    this.setState((state, props) => {
      return { [sign]: number };
    });
  };

  calculateSum = () => {
    this.setState((state, props) => {
      return { sum: this.state["A"] + this.state["B"] };
    });
  };

  render() {
    return (
      <div>
        <h1 className={style.heading}>Adding two numbers</h1>
        <div className={style["input-container"]}>
          <Input
            style={{ marginRight: "20px" }}
            inputHandler={this.getInputData}
            value={this.state["A"]}
            sign={"A"}
          />
          <Input
            style={{ marginRight: "20px" }}
            inputHandler={this.getInputData}
            value={this.state["B"]}
            sign={"B"}
          />
        </div>
        <Button clickHandler={this.calculateSum}>Add Them!</Button>
        <h3 className={style.result}>{this.state.sum}</h3>
      </div>
    );
  }
}

export default Calculator;
