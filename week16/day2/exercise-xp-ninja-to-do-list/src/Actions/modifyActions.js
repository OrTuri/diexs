const addTodo = (text) => {
  return {
    type: "ADD",
    payload: text,
  };
};

const removeTodo = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};

const markDone = (id) => {
  return {
    type: "MARK_DONE",
    payload: id,
  };
};

const filterActive = () => {
  return {
    type: "FILTER_ACTIVE",
  };
};

const filterCompleted = () => {
  return {
    type: "FILTER_COMPLETED",
  };
};

const filterAll = () => {
  return {
    type: "FILTER_ALL",
  };
};

export {
  addTodo,
  removeTodo,
  markDone,
  filterActive,
  filterCompleted,
  filterAll,
};
