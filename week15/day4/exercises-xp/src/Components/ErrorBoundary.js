import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }
  componentDidCatch(err, errInfo) {
    this.setState((state, props) => {
      return { error: err };
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>An error has occured!</h1>
          <summary>
            Click here for more details
            <details>
              <p>{this.state.error.message}</p>
            </details>
          </summary>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
