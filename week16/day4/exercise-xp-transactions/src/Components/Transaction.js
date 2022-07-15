import { connect } from "react-redux";
import { deleteTransaction } from "../Actions/actions";
import { editTransactionDetails } from "../Actions/actions";

const Transaction = (props) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "5px",
        border: "1px solid #000",
        gap: "4px",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <p>{props.accountNumber}</p>
      </div>
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <p>{props.fsc}</p>
      </div>
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <p>{props.holderName}</p>
      </div>
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <p>{props.amount}</p>
      </div>
      <button
        onClick={props.editTransaction.bind(null, props.id)}
        style={{ alignSelf: "stretch", cursor: "pointer" }}
      >
        EDIT
      </button>
      <button
        onClick={props.deleteTransaction.bind(null, props.id)}
        style={{ alignSelf: "stretch", cursor: "pointer" }}
      >
        DELETE
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransaction: (id) => dispatch(deleteTransaction(id)),
    editTransaction: (id) => dispatch(editTransactionDetails(id)),
  };
};

export default connect(null, mapDispatchToProps)(Transaction);
