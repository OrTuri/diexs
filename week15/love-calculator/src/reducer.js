const reducer = (state = { match: {} }, action) => {
  if (action.type === "SET_MATCH") {
    return { ...state, match: action.payload };
  }
  return state;
};

export default reducer;
