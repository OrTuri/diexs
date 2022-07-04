import { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red", show: true };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(
        (state, props) => {
          return { favoriteColor: "yellow" };
        },
        () => {
          this.props.checkShow(this.state.show);
        }
      );
    }, 5000);
  };

  updateShow = () => {
    this.setState(
      (state, props) => {
        return { show: !state.show };
      },
      () => {
        this.props.checkShow(this.state.show);
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor === "red") {
      this.favorieColor = (
        <h2>My favorite color is {this.state.favoriteColor}</h2>
      );
      this.forceUpdate();
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.prevState = (
      <>
        <h3>
          Before this update my favorite color was {prevState.favoriteColor}
        </h3>
        <h3>The updated favorite is {this.state.favoriteColor}</h3>
      </>
    );
    return null;
  }

  changeColor = () => {
    this.setState((state, props) => {
      return { favoriteColor: "pink" };
    });
  };

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <>
        <header
          style={{
            border: "1px solid #000",
            padding: "20px",
            minWidth: "200px",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          <h3>My favorite color is: {this.state.favoriteColor}</h3>
          <button
            variant="outlined"
            style={{ letterSpacing: "1px" }}
            onClick={this.changeColor}
          >
            Change color!
          </button>
          <div>{this.favorieColor}</div>
          <div>{this.prevState}</div>
        </header>
        <button onClick={this.updateShow}>Delete</button>
      </>
    );
  }
}

export default Color;

class Child extends Component {
  componentWillUnmount() {
    alert("I'm about to be unmounted!");
  }
  render() {
    return (
      <header>
        <p>Hello World!</p>
      </header>
    );
  }
}

export { Child };
