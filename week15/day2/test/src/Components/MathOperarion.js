import React from "react";

class MathOperarion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      error: false,
    };
  }
  divide = (a, b) => {
    try {
      if (a === 0 || b === 0) {
        throw Error("Can't divide 0!! 🚫⛔🚫⛔");
      }
      console.log(a / b);
    } catch (err) {
      this.setState({ error: true, errorInfo: err });
    }
  };

  render() {
    if (this.state.error) {
      throw new Error(this.state.errorInfo);
    }
    return (
      <form>
        <input
          value={this.state.a}
          type="number"
          placeholder="A"
          name="a"
          onChange={(e) => {
            this.setState({ a: Number(e.target.value) });
          }}
        ></input>
        <input
          value={this.state.b}
          type="number"
          placeholder="B"
          name="b"
          onChange={(e) => {
            this.setState({ b: Number(e.target.value) });
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            return this.divide(this.state.a, this.state.b);
          }}
        >
          Calculate
        </button>
      </form>
    );
  }
}

export default MathOperarion;
