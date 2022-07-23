import { useSelector, useDispatch } from "react-redux";
import { ageUp, ageDown } from "../features/ageSlice";

const AgeCounter = (props) => {
  const { age } = useSelector((state) => state.age);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      <button onClick={() => dispatch(ageUp())}>Increment age +</button>
      <p style={{ fontSize: "50px" }}>{age}</p>
      <button onClick={() => dispatch(ageDown())}>Decrement age -</button>
    </div>
  );
};

export default AgeCounter;
