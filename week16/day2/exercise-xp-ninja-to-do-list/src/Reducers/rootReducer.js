import modifyReducer from "./modifyReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ modifyReducer, filterReducer });

export default rootReducer;
