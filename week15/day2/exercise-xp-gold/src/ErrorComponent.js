import { Component } from "react";

class ErrorComponent extends Component {
  constructor() {
    super();
    this.state = {
      err: false,
    };
  }
  causeError = () => {
    this.setState({ err: true });
  };

  render() {
    if (this.state.err) {
      throw new Error("I am crashing! ⛔");
    }
    return (
      <button onClick={this.causeError} style={{ marginTop: "50px" }}>
        Click here for an error!
      </button>
    );
  }
}

export default ErrorComponent;
