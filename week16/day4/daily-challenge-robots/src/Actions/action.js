const filterRobots = (searchValue) => {
  return {
    type: "FILTER",
    payload: searchValue,
  };
};

const loadRobotList = (robotList) => {
  return {
    type: "LOAD_ROBOT_LIST",
    payload: robotList,
  };
};

export { filterRobots, loadRobotList };
