import { connect } from "react-redux";
import filterAction from "../Actions/actions";

const Input = (props) => {
  return <input onChange={props.filter} placeholder="Search Articles..." />;
};

const mapActionToProps = (dispatch) => {
  return {
    filter: (e) => dispatch(filterAction(e)),
  };
};

export default connect(null, mapActionToProps)(Input);
