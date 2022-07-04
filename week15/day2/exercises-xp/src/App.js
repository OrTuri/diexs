import BuggyCounter from "./Components/BuggyCounter";
import ErrorBoundary from "./Components/ErrorBoundary";
import Color, { Child } from "./Components/Color";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };
  }

  checkShow = (show) => {
    // console.log("checkShow");
    this.setState({ show });
  };

  render() {
    // console.log("App render");
    // console.log(this.state.show);
    return (
      <div className="App">
        <BuggyCounter />
        <Color checkShow={this.checkShow} />
        {this.state.show ? <Child /> : ""}
      </div>
    );
  }
}

export default App;
