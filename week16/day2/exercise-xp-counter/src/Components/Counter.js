import { connect } from "react-redux";
import { add, subtract } from "../Actions/index";

const Counter = (props) => {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <button
        style={{ fontSize: "24px", padding: "20px" }}
        onClick={props.subtract.bind(null, -1)}
      >
        -
      </button>
      <h1 style={{ color: "#fff", fontSize: "100px", width: "300px" }}>
        {props.count}
      </h1>
      <button
        style={{ fontSize: "24px", padding: "20px" }}
        onClick={props.add.bind(null, 1)}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (value) => {
      dispatch(add(value));
    },
    subtract: (value) => {
      dispatch(subtract(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
