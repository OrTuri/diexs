import { Component } from "react";
import axios from "axios";

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/users",
    });
    const data = res.data;
    this.setState((state, props) => {
      return { users: data, loaded: true };
    });
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <summary>
            <h1>List of users</h1>
            <details>
              <div>
                {this.state.users.map((user, i) => {
                  return (
                    <div key={i}>
                      <p style={{ textAlign: "left" }}>
                        <span style={{ color: "orange" }}>ID:</span> {user.id}
                        <br />
                        <span style={{ color: "orange" }}>Name:</span>{" "}
                        {user.name}
                        <br />
                        <span style={{ color: "orange" }}>Username:</span>{" "}
                        {user.username}
                        <br />
                        <span style={{ color: "orange" }}>Email:</span>{" "}
                        {user.email}
                        <br />
                        <span style={{ color: "orange" }}>City:</span>{" "}
                        {user.address.city}
                      </p>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </details>
          </summary>
        ) : (
          <h1>LOADING.......</h1>
        )}
      </div>
    );
  }
}

export default UsersList;
