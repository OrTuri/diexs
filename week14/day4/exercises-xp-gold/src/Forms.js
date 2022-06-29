import { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      text: "I am a textarea!",
      car: "mazda",
    };
  }

  selectHandler = (e) => {
    this.setState((state, props) => {
      return { car: e.target.value };
    });
  };

  inputOnChangeHandler = (e) => {
    this.setState((state, props) => {
      return { [e.target.name]: e.target.value };
    });
    console.log(e.target.name);
  };

  mySubmitHandler = (e) => {
    e.preventDefault();
    alert(`Your name is: ${this.state.username}`);
  };

  render() {
    console.log(this.state.car);
    let header;
    if (this.state.username && this.state.age) {
      header = `Hello ${this.state.username}, Your age is ${this.state.age}`;
    }
    let ageError;
    if (isNaN(this.state.age)) {
      ageError = "You must only use numbers!";
    }
    return (
      <div>
        <h1>{header}</h1>
        <form
          onSubmit={this.mySubmitHandler}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              marginTop: "80px",
              width: "fit-content",
            }}
          >
            <label htmlFor="fullName">Enter your name:</label>
            <input
              name="username"
              type={"text"}
              id="fullName"
              placeholder="John Doe"
              onChange={this.inputOnChangeHandler}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              width: "fit-content",
            }}
          >
            <label htmlFor="age">Enter your age:</label>
            <input
              name="age"
              type={"text"}
              id="Age"
              placeholder="34"
              onChange={this.inputOnChangeHandler}
            ></input>
          </div>
          <p style={{ color: "red", display: "inline-block" }}>{ageError}</p>
          <textarea defaultValue={this.state.text} />
          <select value={this.state.car} onChange={this.selectHandler}>
            <option value="ford">Ford</option>
            <option value="toyota">Toyota</option>
            <option value="mazda">Mazda</option>
            <option value="tesla">Tesla</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
