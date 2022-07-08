import { Component } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

class View extends Component {
  render() {
    if (!this.props.fname) return null;
    return (
      <div>
        <p>First Name: {this.props.fname}</p>
        <p>Second Name: {this.props.lname}</p>
        <h1>Match percentage: {this.props.percentage}%</h1>
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}

export default View;
