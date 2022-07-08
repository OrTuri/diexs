import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { username: "", email: "" };
  }

  submitHandler = async (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(this.state);
    const res = await fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    });
    const data = await res.json();
    console.log(data);
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label style={{ fontSize: "20px", margin: "0" }} htmlFor="username">
            Username
          </label>
          <br />
          <input
            onChange={this.inputHandler}
            placeholder="John Doe"
            name="username"
            type={"text"}
            id="username"
          />
        </div>
        <div style={{ margin: "20px" }}>
          <label style={{ fontSize: "20px", margin: "0" }} htmlFor="email">
            Email
          </label>
          <br />
          <input
            onChange={this.inputHandler}
            placeholder="johndoe@google.com"
            name="email"
            type={"email"}
            id="email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
