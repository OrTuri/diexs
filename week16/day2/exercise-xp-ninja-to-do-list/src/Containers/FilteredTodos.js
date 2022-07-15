import { connect } from "react-redux";
import TodoList from "../Components/TodoList";

const filterTodos = (todos, filter) => {
  switch (filter) {
    case "FILTER_ALL":
      return [...todos];
    case "FILTER_ACTIVE":
      return [...todos].filter((todo) => todo.done === false);
    case "FILTER_COMPLETED":
      return [...todos].filter((todo) => todo.done === true);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.modifyReducer.todos, state.filterReducer.filter),
  };
};

export default connect(mapStateToProps)(TodoList);
