import { createStore } from "redux";
import robotsReducer from "../Reducers/robotsReducer";

const store = createStore(robotsReducer);

export default store;
