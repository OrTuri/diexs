import "./App.css";
import React from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import View from "./Components/View";
import { connect } from "react-redux";
import { setMatch } from "./actions";
const axios = require("axios").default;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickHandler = async (e) => {
    const res = await axios({
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "912779ec9emsh7953f43a2682affp17791ajsn0cde6621453e",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: { sname: this.state.lastName, fname: this.state.firstName },
    });
    const data = res.data;
    this.props.setMatch(data);
  };

  render() {
    return (
      <div className="App" style={{ margin: "100px auto" }}>
        <h1>Love Calculator</h1>
        <Input
          name="firstName"
          lbabel="First Name"
          placeholder="First Name"
          onChangeHandler={this.onChangeHandler}
        />
        <Input
          name="lastName"
          placeholder="Second Name"
          lbabel="Second Name"
          onChangeHandler={this.onChangeHandler}
        />
        <Button label={"Submit"} onClickHandler={this.onClickHandler} />
        <View />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMatch: (match) => dispatch(setMatch(match)),
  };
};

export default connect(null, mapDispatchToProps)(App);
