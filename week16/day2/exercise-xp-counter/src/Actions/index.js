const add = (value) => {
  return {
    type: "ADD",
    payload: value,
  };
};

const subtract = (value) => {
  return {
    type: "SUBTRACT",
    payload: value,
  };
};

export { add, subtract };
