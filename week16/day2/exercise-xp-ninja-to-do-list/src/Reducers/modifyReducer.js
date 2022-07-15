const modifyReducer = (state = { todos: [] }, action) => {
  if (action.type === "ADD") {
    if (action.payload === "") return { ...state };
    const updatedTodos = [...state.todos];
    updatedTodos.unshift({
      id: state.todos.at(0)?.id + 1 || 1,
      text: action.payload,
      done: false,
    });
    return { ...state, todos: updatedTodos };
  }

  if (action.type === "REMOVE") {
    const updatedTodos = state.todos.filter((todo) => {
      return todo.id !== action.payload;
    });
    return { ...state, todos: updatedTodos };
  }

  if (action.type === "MARK_DONE") {
    const updatedTodos = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });
    return { ...state, todos: updatedTodos };
  }

  return { ...state };
};

export default modifyReducer;
