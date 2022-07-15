import { Component } from "react";
import { connect } from "react-redux";

class View extends Component {
  render() {
    if (!this.props.match.fname) return null;
    return (
      <div>
        <p>First Name: {this.props.match.fname}</p>
        <p>Second Name: {this.props.match.sname}</p>
        <h1>Match percentage: {this.props.match.percentage}%</h1>
        <h2>{this.props.match.result}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    match: state.match,
  };
};

export default connect(mapStateToProps)(View);
