import { connect } from "react-redux";
import {
  increase,
  decrease,
  increaseIfOdd,
  increaseAsync,
} from "../actions/actions";

const Counter = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <button onClick={props.increase}>+</button>
      <h1>{props.count}</h1>
      <button onClick={props.decrease}>-</button>
      <button onClick={props.increaseIfOdd}>Increment if odd</button>
      <button onClick={props.increaseAsync}>Increment after 2 seconds</button>
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
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    increaseIfOdd: (count) => dispatch(increaseIfOdd()),
    increaseAsync: () => dispatch(increaseAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
