import { Component } from "react";
import data from "../data2.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <ul style={{ listStyle: "inside" }}>
          {data.SocialMedias.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Example1;
