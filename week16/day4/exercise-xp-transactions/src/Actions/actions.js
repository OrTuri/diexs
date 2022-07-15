const addTransaction = (transactionDetails) => {
  return {
    type: "ADD_TRANSACTION",
    payload: transactionDetails,
  };
};

const deleteTransaction = (id) => {
  return {
    type: "DELETE_TRANSACTION",
    payload: id,
  };
};

const editTransactionDetails = (id) => {
  return {
    type: "EDIT_TRANSACTION_DETAILS",
    payload: id,
  };
};

const updateTransaction = (transactionDetails) => {
  return {
    type: "UPDATE_TRANSACTION",
    payload: transactionDetails,
  };
};

export {
  addTransaction,
  deleteTransaction,
  editTransactionDetails,
  updateTransaction,
};
