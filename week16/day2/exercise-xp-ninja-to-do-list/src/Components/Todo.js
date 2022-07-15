import { connect } from "react-redux";
import { removeTodo, markDone } from "../Actions/modifyActions";

const Todo = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        onClick={props.markDone.bind(null, props.todo.id)}
        style={{
          textDecoration: `${props.todo.done ? "line-through" : "none"}`,
        }}
      >
        {props.todo.text}
      </p>
      <button onClick={props.deleteTodo.bind(null, props.todo.id)}>DEL</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(removeTodo(id)),
    markDone: (id) => dispatch(markDone(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
