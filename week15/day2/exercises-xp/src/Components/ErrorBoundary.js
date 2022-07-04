import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(err) {
    this.setState({ error: err });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong ⛔🚫</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
