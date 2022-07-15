const filterAction = (e) => {
  return {
    type: "FILTER",
    payload: e.target.value,
  };
};

export default filterAction;
