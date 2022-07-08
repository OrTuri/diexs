import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("/users");
    const data = await res.json();
    this.setState({ users: data });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Users</h1>
          <ul>
            {this.state.users.map((user, i) => {
              return <li key={i}>{user.username}</li>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
