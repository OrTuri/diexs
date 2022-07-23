import { useSelector, useDispatch } from "react-redux";
import { ageDown } from "../features/ageCounterSlice";
import { ageUpLoad } from "../features/ageCounterSlice";
import logo from "../logo.svg";

const AgeCounter = (props) => {
  const { age, loadingAgeUp } = useSelector((state) => state.ageCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(ageUpLoad())}>Age Up</button>
      {loadingAgeUp ? <img src={logo} alt="" /> : <h1>{age}</h1>}
      <button onClick={() => dispatch(ageDown())}>Age Down</button>
    </div>
  );
};

export default AgeCounter;
