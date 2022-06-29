import { Component } from "react";

class RowsContainer extends Component {
  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "fit-content",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default RowsContainer;
