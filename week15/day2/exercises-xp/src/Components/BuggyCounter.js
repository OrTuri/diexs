import { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  clickHandler = (e) => {
    this.setState(
      (state, props) => {
        return { counter: state.counter + 1 };
      },
      () => {
        if (this.state.counter === 5) {
          throw new Error("I crashed");
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h1 onClick={this.clickHandler}>{this.state.counter}</h1>
      </div>
    );
  }
}

export default BuggyCounter;
