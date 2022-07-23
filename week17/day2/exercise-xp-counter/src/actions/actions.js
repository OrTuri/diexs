const increase = () => {
  return {
    type: "increase",
    payload: 1,
  };
};

const decrease = () => {
  return {
    type: "decrease",
    payload: -1,
  };
};

const increaseIfOdd = (count) => (dispatch, getState) => {
  const { count } = getState();
  if (count % 2 === 0) return;
  dispatch(increase());
};

const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 2000);
};

export { increase, decrease, increaseIfOdd, increaseAsync };
