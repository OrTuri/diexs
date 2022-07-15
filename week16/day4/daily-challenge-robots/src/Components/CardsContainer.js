import { connect } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import style from "./CardsContainer.module.css";
import { loadRobotList } from "../Actions/action";

const CardsContainer = (props) => {
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    }).then((res) => {
      props.loadRobotList(res.data);
    });
  }, []);
  return (
    <div className={style["main-container"]}>
      {props.filteredList.map((robot) => {
        return <Card {...robot} key={robot.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredList: state.filteredList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRobotList: (robotList) => dispatch(loadRobotList(robotList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
