import { Component } from "react";
import data from "../data2.json";

class Example3 extends Component {
  render() {
    return (
      <div style={{ margin: "30px auto", width: "350px" }}>
        {data.Experiences.map((experience, i) => {
          return (
            <div
              key={i}
              style={{
                borderRadius: "10px",
                border: "1px solid #000",
                padding: "30px",
                width: "fit-content",
                margin: "20px auto",
              }}
            >
              <img src={experience.logo} alt=""></img>
              <a href={experience.url} target="__blank">
                <h3>{experience.companyName}</h3>
              </a>
              <div>
                {experience.roles.map((role, i) => {
                  return (
                    <div key={i}>
                      <h5>{role.title}</h5>
                      <p>{role.startDate}</p>
                      <p>{role.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Example3;
