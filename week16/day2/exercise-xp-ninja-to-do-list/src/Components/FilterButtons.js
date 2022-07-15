import { useState } from "react";
import {
  filterActive,
  filterCompleted,
  filterAll,
} from "../Actions/modifyActions";
import { connect } from "react-redux";

const FilterButtons = (props) => {
  const [activeBtn, setActiveBtn] = useState("all");
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <button
        onClick={() => {
          setActiveBtn("all");
          props.filterAll();
        }}
        disabled={activeBtn === "all"}
      >
        All
      </button>
      <button
        onClick={() => {
          setActiveBtn("active");
          props.filterActive();
        }}
        disabled={activeBtn === "active"}
      >
        Active
      </button>
      <button
        onClick={() => {
          setActiveBtn("completed");
          props.filterCompleted();
        }}
        disabled={activeBtn === "completed"}
      >
        Completed
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterActive: () => dispatch(filterActive()),
    filterCompleted: () => dispatch(filterCompleted()),
    filterAll: () => dispatch(filterAll()),
  };
};

export default connect(null, mapDispatchToProps)(FilterButtons);
