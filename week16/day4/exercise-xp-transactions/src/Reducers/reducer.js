const reducer = (state = { transactions: [], submitType: "NEW" }, action) => {
  if (action.type === "ADD_TRANSACTION") {
    const updatedTransactions = [...state.transactions];
    updatedTransactions.unshift({
      ...action.payload,
      id: state.transactions.at(0)?.id + 1 || 1,
    });
    const updatedState = { ...state, transactions: updatedTransactions };
    localStorage.setItem("transactions", JSON.stringify(updatedState));
    return updatedState;
  }

  if (action.type === "DELETE_TRANSACTION") {
    const updatedTransactions = state.transactions.filter((transaction) => {
      return transaction.id !== action.payload;
    });
    const updatedState = { ...state, transactions: updatedTransactions };
    localStorage.setItem("transactions", JSON.stringify(updatedState));
  }

  if (action.type === "EDIT_TRANSACTION_DETAILS") {
    const transactionDetails = state.transactions.find((transaction) => {
      return transaction.id === action.payload;
    });
    return { ...state, editDetails: transactionDetails, submitType: "EDIT" };
  }

  if (action.type === "UPDATE_TRANSACTION") {
    const updatedTransactions = state.transactions.map((transaction) => {
      if (transaction.id === action.payload.id) {
        return action.payload;
      }
      return transaction;
    });

    const updatedState = {
      ...state,
      transactions: updatedTransactions,
      submitType: "NEW",
    };
    localStorage.setItem("transactions", JSON.stringify(updatedState));
    return updatedState;
  }
  return JSON.parse(localStorage.getItem("transactions")) || state;
};

export { reducer };
