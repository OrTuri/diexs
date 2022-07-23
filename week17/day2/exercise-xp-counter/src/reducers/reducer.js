const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default reducer;
