import style from "./RobotsContainer.module.css";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRobots } from "../features/robotSlice";

const RobotsContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRobots());
  }, []);
  const { robots, isLoading, filteredRobots } = useSelector(
    (state) => state.robot
  );
  return (
    <div className={style.container}>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        filteredRobots.map((robot) => {
          return (
            <Card
              src={`https://robohash.org/set=set2/${robot.id}?200x200`}
              username={robot.username}
              email={robot.email}
              key={robot.id}
            />
          );
        })
      )}
    </div>
  );
};

export default RobotsContainer;
