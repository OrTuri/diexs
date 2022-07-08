import { Component } from "react";
import axios from "axios";

class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: this.state,
    });
    const data = res.data;
    console.log(data);
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label style={{ fontSize: "20px", margin: "0" }} htmlFor="userId">
            User Id
          </label>
          <br />
          <input
            onChange={this.inputHandler}
            placeholder="14"
            name="userId"
            type={"number"}
            id="userId"
          />
        </div>
        <div>
          <label style={{ fontSize: "20px", margin: "0" }} htmlFor="title">
            Title
          </label>
          <br />
          <input
            onChange={this.inputHandler}
            placeholder="Birthday party"
            name="title"
            type={"text"}
            id="title"
          />
        </div>
        <div>
          <label style={{ fontSize: "20px", margin: "0" }} htmlFor="body">
            Body
          </label>
          <br />
          <input
            onChange={this.inputHandler}
            placeholder="Some text......"
            name="body"
            type={"text"}
            id="body"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form2;
