const robotsReducer = (state = { robotList: [], filteredList: [] }, action) => {
  if (action.type === "FILTER") {
    const filteredList = state.robotList.filter((robot) => {
      return robot.name.toLowerCase().includes(action.payload.toLowerCase());
    });
    return { ...state, filteredList };
  }

  if (action.type === "LOAD_ROBOT_LIST") {
    return {
      ...state,
      robotList: action.payload,
      filteredList: action.payload,
    };
  }
  return state;
};

export default robotsReducer;
