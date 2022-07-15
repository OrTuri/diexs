import { connect } from "react-redux";
import { addTodo } from "../Actions/modifyActions";
import { useRef } from "react";

const InputForm = (props) => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input ref={inputRef} placeholder="Add Task" />
        <button style={{ marginLeft: "10px" }}>ADD</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(InputForm);
