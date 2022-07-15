import { createStore } from "redux";
import combinedReducers from "../Reducers/reducer";

const store = createStore(combinedReducers);

export default store;
