import { connect } from "react-redux";
import Transaction from "./Transaction";

const TransactionList = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {props.transactions.map((transaction) => {
        return <Transaction {...transaction} key={transaction.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps)(TransactionList);
