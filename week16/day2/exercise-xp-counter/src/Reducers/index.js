const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + action.payload };
    case "SUBTRACT":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default reducer;
