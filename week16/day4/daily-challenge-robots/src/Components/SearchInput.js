import { connect } from "react-redux";
import { filterRobots } from "../Actions/action";
import { useState, useEffect } from "react";
import style from "./SearchInput.module.css";

const SearchInput = (props) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    props.filterRobots(searchValue);
  }, [searchValue]);
  return (
    <input
      className={style.input}
      placeholder="Filter Robots"
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterRobots: (searchValue) => dispatch(filterRobots(searchValue)),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
