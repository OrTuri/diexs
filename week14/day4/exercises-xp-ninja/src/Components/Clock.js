import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  tick = () => {
    this.setState(() => {
      return { currentDate: new Date() };
    });
  };

  componentDidMount() {
    this.inerval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.inerval);
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p style={{ fontSize: "35px", fontWeight: "700" }}>
          {this.state.currentDate.toLocaleTimeString("he-il")}
        </p>
      </div>
    );
  }
}

export default Clock;
