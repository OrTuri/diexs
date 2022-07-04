import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
    };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err) {
    this.setState({ error: err });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong 🚫⛔</h1>
          <p>{this.state.error.message}</p>
          <p>{this.state.error.stack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
