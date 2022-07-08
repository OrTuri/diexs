import { Component } from "react";
import data from "../data2.json";

class Example2 extends Component {
  render() {
    return data.Skills.map((skill, i) => {
      return (
        <div key={i}>
          <h3>{skill.Area}</h3>
          <ul style={{ listStyle: "outside", width: "350px", margin: "auto" }}>
            {skill.SkillSet.map((item, i) => {
              return <li key={i}>{item.Name}</li>;
            })}
          </ul>
        </div>
      );
    });
  }
}

export default Example2;
