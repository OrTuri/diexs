import "./App.css";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      input: "",
      msgFromServer: "",
    };
  }
  async componentDidMount() {
    const res = await axios({
      url: "http://localhost:5000/api/hello",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.data;
    this.setState((state, props) => {
      return { data };
    });
  }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      url: "http://localhost:5000/api/world",
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      responseType: "text",
      data: this.state.input,
    });
    const data = res.data;
    this.setState({ msgFromServer: data });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.data.msg}</h1>
          <form onSubmit={this.submitHandler}>
            <input
              name="input"
              value={this.state.value}
              onChange={this.onChangeHandler}
              placeholder="Write something"
              type={"text"}
            ></input>
            <button type="submit">Submit!</button>
          </form>
          <p>{this.state.msgFromServer}</p>
        </header>
      </div>
    );
  }
}

export default App;
