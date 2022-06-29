import { Component } from "react";
import "./App.css";
import "tachyons";
import Row from "./Row";
import RowsContainer from "./RowsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  voting = (languageName) => {
    this.setState((state, props) => {
      return {
        languages: state.languages.reduce((acc, curr) => {
          if (curr.name === languageName) {
            return [...acc, { ...curr, votes: curr.votes + 1 }];
          }
          return [...acc, curr];
        }, []),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="f2 mb5">Daily Challenge: Voting App</h1>
        <RowsContainer>
          {this.state.languages.map((language, i) => {
            return <Row language={language} key={i} voting={this.voting} />;
          })}
        </RowsContainer>
      </div>
    );
  }
}

export default App;
