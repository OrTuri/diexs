import { Component } from "react";
import Modal from "./Modal";

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

  handleClose = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <Modal
          title={"An error has occured!"}
          description={this.state.error.message}
          handleClose={this.handleClose}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
