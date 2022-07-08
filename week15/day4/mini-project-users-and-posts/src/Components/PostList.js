import { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loaded: false,
    };
  }
  async componentDidMount() {
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    });
    const data = res.data;
    this.setState({ posts: data, loaded: true });
  }

  render() {
    return (
      <div style={{ width: "350px" }}>
        {this.state.loaded ? (
          <summary>
            <h1>List of posts</h1>
            <details>
              {this.state.posts.map((post, i) => {
                return (
                  <div key={i}>
                    <p style={{ textAlign: "left" }}>
                      <span style={{ color: "orange" }}>ID: </span> {post.id}
                      <br />
                      <span style={{ color: "orange" }}>Title: </span>{" "}
                      {post.title}
                      <br />
                      <span style={{ color: "orange" }}>Body: </span>{" "}
                      {post.body}
                      <br />
                    </p>
                    <hr />
                  </div>
                );
              })}
            </details>
          </summary>
        ) : (
          <h1>LOADING.......</h1>
        )}
      </div>
    );
  }
}

export default PostList;
