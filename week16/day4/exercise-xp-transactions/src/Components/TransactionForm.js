import { useReducer, useEffect } from "react";
import { connect } from "react-redux";
import { addTransaction, updateTransaction } from "../Actions/actions";

const reducer = (state, action) => {
  if (action.type === "EDIT") {
    return { ...action.payload };
  }
  return { ...state, [action.type]: action.payload };
};

const TransactionForm = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    accountNumber: "",
    amount: "",
    fsc: "",
    holderName: "",
  });

  useEffect(() => {
    if (props.submitType === "EDIT") {
      dispatch({ type: "EDIT", payload: { ...props.editDetails } });
    }
  }, [props.editDetails]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (props.submitType === "NEW") {
      props.addTransaction(state);
      dispatch({
        type: "EDIT",
        payload: { accountNumber: "", amount: "", fsc: "", holderName: "" },
      });
      return;
    }

    props.updateTransaction(state);
    dispatch({
      type: "EDIT",
      payload: { accountNumber: "", amount: "", fsc: "", holderName: "" },
    });
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <input
        value={state.accountNumber}
        onChange={(e) =>
          dispatch({ type: "accountNumber", payload: e.target.value })
        }
        placeholder="Account Number"
        name="accountNumber"
        type="number"
        required
      />
      <input
        value={state.fsc}
        onChange={(e) => dispatch({ type: "fsc", payload: e.target.value })}
        placeholder="FSC"
        name="fsc"
        type="number"
        required
      />
      <input
        value={state.holderName}
        onChange={(e) =>
          dispatch({ type: "holderName", payload: e.target.value })
        }
        placeholder="A/C Holder Name"
        name="holderName"
        type="text"
        required
      />
      <input
        value={state.amount}
        onChange={(e) => dispatch({ type: "amount", payload: e.target.value })}
        placeholder="Amount"
        name="amount"
        type="number"
        required
      />
      <button style={{ width: "fit-content" }} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (transactionDetails) => {
      dispatch(addTransaction(transactionDetails));
    },
    updateTransaction: (transactionDetails) => {
      dispatch(updateTransaction(transactionDetails));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    submitType: state.submitType,
    editDetails: state.editDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
