import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          margin: "auto",
          gap: "5px",
        }}
      >
        <label style={{ fontSize: "20px" }}>{this.props.label}</label>
        <input
          name={this.props.name}
          onBlur={this.props.onBlurHandler}
          onChange={this.props.onChangerHandler}
          style={{
            width: "100%",
            height: "30px",
            borderRadius: "10px",
            border: "none",
          }}
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <p
          style={{
            margin: "0",
            marginLeft: "auto",
            fontSize: "15px",
            color: "#f26969",
            fontWeight: "700",
            height: "20px",
          }}
        >
          {this.props.msg}
        </p>
      </div>
    );
  }
}

export default Input;
