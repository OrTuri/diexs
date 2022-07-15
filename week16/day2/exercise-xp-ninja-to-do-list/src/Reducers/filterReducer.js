const filterReducer = (state = { filter: "FILTER_ALL" }, action) => {
  if (action.type === "FILTER_ALL") {
    return { filter: "FILTER_ALL" };
  }

  if (action.type === "FILTER_ACTIVE") {
    return { filter: "FILTER_ACTIVE" };
  }

  if (action.type === "FILTER_COMPLETED") {
    return { filter: "FILTER_COMPLETED" };
  }
  return { ...state };
};

export default filterReducer;
